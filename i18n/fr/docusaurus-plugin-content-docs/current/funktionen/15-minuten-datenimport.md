---
title: 'Import de données 15 minutes'
slug: '/funktionen/15-minuten-datenimport'
description: 'Les consommations par intervalles de 15 minutes permettent de réaliser des décomptes basés sur les courbes de charge.'
sidebar_label: 'Import de données 15 minutes'
---
[Généralités](#généralités)

[Authentification eCarUp et décompte en système multitarif :](#authentification-ecarup-et-décompte-en-système-multitarif-)

[Qualité des données](#qualité-des-données)

[Zaptec](#zaptec)

[Easee](#easee)

[Guide pour l'import de données](#guide-pour-limport-de-données)

[Paramètres Zaptec](#paramètres-zaptec)

[Paramètres easee](#paramètres-easee)

[Paramètres smart-me](#paramètres-smart-me)

[ISE-Load Profile](#ise-load-profile)

[Exemple smart-me Billing](#exemple-smart-me-billing)

## Généralités

Les consommations par intervalles de 15 minutes permettent de réaliser des décomptes basés sur les courbes de charge. Cela rend possibles des structures tarifaires étendues, comme les décomptes RCP ou les systèmes multitarifs. L'outil d'import de données permet d'importer dans le smart-me Cloud les données de certaines bornes de recharge. 

## Authentification eCarUp et décompte en système multitarif :

Si l'authentification via eCarUp est souhaitée, mais que le décompte doit s'effectuer via la plateforme smart-me Billing en système multitarif, les stations OCPP ne doivent pas être installées dans le compte eCarUp du même nom créé automatiquement. Lors de l'import des données de courbe de charge OCPP via l'outil d'import, des points de comptage de courbe de charge supplémentaires sont créés. Si le compte eCarUp correspond aussi au compte RCP, le compte contient le double de points de comptage pour les données de transaction et les points de comptage de courbe de charge, qui seraient tous soumis à licence. 

Pour éviter cela, vous pouvez créer un compte eCarUp séparé et installer les stations OCPP séparément du RCP / de l'installation domestique.

![Import de données 15 minutes – Illustration 1](/img/funktionen-15-minuten-datenimport/01.png)

### Zone verte du diagramme : import de données 15 min dans le compte de l'immeuble

Pour les bornes de recharge déjà installées, la migration vers la zone verte du diagramme peut être effectuée en arrière-plan et sans incidence pour le client final (car l'authentification sur place n'est pas modifiée). 

Attention : dans cette variante, l'authentification fonctionne sur place / directement avec les bornes de recharge. eCarUp n'a aucune influence sur l'activation.

Avantage : comme il s'agit d'un import de données en arrière-plan, les clients ne remarquent rien en cas de migration.

Inconvénient : comme aucune authentification n'a lieu via eCarUp, les données de recharge des clients ne sont pas enregistrées et ne peuvent pas non plus être consultées.

### Rouge : import de données 15 min avec activation via l'app eCarUp

Ici, un compte séparé doit être créé pour l'activation des bornes de recharge via eCarUp, y compris l'implémentation OCPP selon l'un des guides suivants, en fonction du fabricant de bornes de recharge utilisé ([Zaptec](/ocpp-ladestationen/zaptec) / [easee](/ocpp-ladestationen/easee))

Avantage : le client peut activer la recharge via l'app ou la carte RFID et voit son historique de recharge.

Inconvénient : deux identifiants de connexion séparés doivent être gérés.

## Qualité des données

Remarque : la qualité est définie par le fournisseur tiers et ne peut pas être modifiée ni améliorée par smart-me ou eCarUp.

Important : nous recommandons d'installer un compteur smart-me sur le départ e-mobilité, et ce pour les raisons suivantes :

- Si aucun compteur smart-me n'est installé, le support ne vous aide pas à rechercher des écarts entre smart-me Billing et la facture du fournisseur d'électricité. Cela s'applique chaque fois que les mesures sont effectuées par des fournisseurs tiers.


- Dans smart-me Billing, la consommation totale de l'e-mobilité peut être référencée.

- Une unité de décompte séparée peut être créée et présentée pour la consommation totale (cas d'application gérance externe)


### Zaptec

Les données actuelles sont interrogées auprès du Zaptec Cloud toutes les 15 minutes. 

[https://api.zaptec.com/help/index.html#/Charger/get\_api\_chargers\_\_id\_](https://api.zaptec.com/help/index.html#/Charger/get_api_chargers__id_)  

L'interface Zaptec ne fournit des données en direct que lors d'une recharge active. 

- Si la station est hors ligne, aucune donnée en direct ni aucun relevé du compteur n'est fourni. 

- Cela s'applique aussi lorsque la station est en ligne, mais que personne ne recharge. 


Si une borne de recharge n'est pas utilisée pendant plusieurs semaines, elle n'envoie jamais de relevés du compteur actualisés à l'API. L'[Auto-Export](https://wiki.smart-me.com/schnittstellen/auto-export) comme le décompte dans [smart-me Billing](https://wiki.smart-me.com/konfiguration/billing) dépendent des données des points de mesure. Si un point de mesure n'envoie pas de données, l'Auto-Export n'est pas exécuté et le calcul tarifaire dans smart-me Billing s'arrête. L'établissement d'une facture n'est donc pas possible dans des délais rapprochés. 

Pour éviter que la facturation soit impossible pendant plusieurs semaines/mois, nous procédons comme suit : 

- Nous voulons garantir que smart-me Billing et l'Auto-Export puissent être exécutés avec un retard maximal de trois jours et que les données des intervalles de 15 minutes soient aussi correctes que possible.

- Lorsque la station recharge, nous recevons via le point de terminaison API chargers/&#123;chargerId&#125; des données en direct, que nous enregistrons au moment de l'interrogation.

- Lorsque la station est en ligne, nous enregistrons pour le moment de l'interrogation la dernière valeur mesurée reçue via le point de terminaison API chargers/&#123;chargerId&#125;, même si elle date de plusieurs semaines.

- Lorsque la station est hors ligne, nous enregistrons la valeur que la station nous envoie sous forme de message OCMF via le point de terminaison API chargers/&#123;chargerId&#125;. Comme horodatage, nous utilisons celui du message OCMF, pour autant qu'il date de moins de trois jours. S'il est plus ancien, nous enregistrons la valeur à la date X-3 jours. Ainsi, nous garantissons que les stations hors ligne peuvent aussi faire l'objet d'un décompte dans des délais rapprochés et ne bloquent pas inutilement l'ensemble du système. 


Si vous avez configuré une [alarme](https://wiki.smart-me.com/konfiguration/wenndann-aktionen/alarme) dans smart-me, nous recommandons de prévoir au moins trois jours de temps hors ligne, car l'alarme vérifie la dernière valeur enregistrée et celle-ci, en cas de mise hors ligne, même de dix minutes seulement, peut dater de jusqu'à trois jours.

### Easee

Le smart-me Cloud enregistre des valeurs mesurées par intervalles de 15 minutes pour vos bornes de recharge easee. Elles sont normalement disponibles avec un délai de 1 à 3 h.

En cas de panne d'Internet ou de serveur, cela peut exceptionnellement prendre plus de temps. Dès que la panne est résolue, les valeurs mesurées de la période de panne sont automatiquement reprises dans le smart-me Cloud.

Configuration des bornes de recharge easee :

smart-me configure les bornes de recharge easee avec un intervalle de mesure de 15 minutes. Cela concerne toutes les bornes de recharge de votre compte easee configuré pour l'import. La configuration a lieu une seule fois par borne de recharge, à savoir :

- lors de la mise en place de l'import : toutes les bornes de recharge déjà présentes dans le compte easee

- bornes de recharge installées ultérieurement dans easee : dans un délai de 3 h.


Remarque : cette configuration n'a aucune influence sur la mesure et le décompte des transactions de recharge.

Attention :

Si vous (ou une personne autorisée) modifiez l'intervalle de mesure d'une borne de recharge easee, cela influence les valeurs mesurées disponibles dans le smart-me Cloud. Dans ce cas, l'intervalle de mesure n'est pas corrigé par smart-me.

Vous trouverez des informations complémentaires dans la documentation d'easee :

- [https://developer.easee.cloud/docs](https://developer.easee.cloud/docs)

- [https://developer.easee.cloud/docs/consumption-report-types#lifetime-energy](https://developer.easee.cloud/docs/consumption-report-types#lifetime-energy)


## Guide pour l'import de données

1.  Effectuer les paramètres Zaptec ou les paramètres Easee

2.  Effectuer les paramètres smart-me


## Paramètres Zaptec

1.  Dans le Zaptec Cloud, créez un compte séparé pour chaque objet RCP (exemple ci-dessous avec une astuce d'alias) et attribuez-y, depuis le compte principal, les autorisations pour l'installation correspondante au compte créé.


L'autorisation doit avoir le rôle « Propriétaire » (« Besitzer »)

Remarque : pour ajouter le compte de l'immeuble, celui-ci doit d'abord être enregistré sur le Zaptec Cloud. (image de gauche)

![Import de données 15 minutes – Illustration 2](/img/funktionen-15-minuten-datenimport/02.jpg)

![Import de données 15 minutes – Illustration 3](/img/funktionen-15-minuten-datenimport/03.jpg)

## Paramètres easee

1.  Dans l'easee Cloud, créez un compte pour chaque objet RCP ; l'enregistrement s'effectue via une adresse e-mail (ici, dans cet exemple, une adresse e-mail alias). Le numéro de mobile est un champ obligatoire et vous pouvez toujours saisir le même numéro. 

2.  L'adresse e-mail doit être confirmée

3.   Attribuez-y les autorisations pour l'installation correspondante. 


![Import de données 15 minutes – Illustration 4](/img/funktionen-15-minuten-datenimport/04.jpg)

4. Important : toujours inscrire en tant que « Propriétaire ou administrateur du site » (« Besitzer oder Admin des Standorts »).

![Import de données 15 minutes – Illustration 5](/img/funktionen-15-minuten-datenimport/05.jpg)

## Paramètres smart-me

1. Connectez-vous avec le compte smart-me cible (compte RCP). Sous Interfaces (Schnittstellen), cliquez sur « API ». 

![Import de données 15 minutes – Illustration 6](/img/funktionen-15-minuten-datenimport/06.png)

2. Cliquez en haut sur le lien vers les clés API

3. Créez une nouvelle clé, nommez-la et attribuez l'autorisation device.readwrite



![Import de données 15 minutes – Illustration 7](/img/funktionen-15-minuten-datenimport/07.png)

4. Copiez le jeton créé

![Import de données 15 minutes – Illustration 8](/img/funktionen-15-minuten-datenimport/08.png)

5. Cliquez sur Interfaces (Schnittstellen) et choisissez Import tiers (Drittanbieter-Import).

![Import de données 15 minutes – Illustration 9](/img/funktionen-15-minuten-datenimport/09.png)

6. Connectez-vous ou cliquez sur Accept. Créez un import de données Zaptec/Easee via « Add »

![Import de données 15 minutes – Illustration 10](/img/funktionen-15-minuten-datenimport/10.jpg)

7. Cliquez en haut à droite sur le nom de votre compte et choisissez Paramètres du compte (Kontoeinstellungen).

8. Passez à Clé API (API Schlüssel) et saisissez la clé copiée auparavant. N'oubliez pas d'enregistrer.

![Import de données 15 minutes – Illustration 11](/img/funktionen-15-minuten-datenimport/11.png)

9. Indiquez le compte de l'installation Zaptec/Easee Cloud à importer

Important : ne travaillez pas avec le compte principal de Zaptec/Easee, mais avec l'autorisation qui a maintenant été configurée pour le compte de l'immeuble ou le compte RCP. 

10\. Patientez un peu jusqu'à ce que les stations soient visibles dans le compte smart-me.

- Zaptec : env. 25 min 

- Easee : env. 3 heures


11\. Nous recommandons de configurer une alarme dans le compte smart-me afin qu'une interruption de la connexion soit signalée

- [https://wiki.smart-me.com/konfiguration/wenndann-aktionen/alarme](https://wiki.smart-me.com/konfiguration/wenndann-aktionen/alarme) 


Que se passe-t-il ?

- Pour chaque station importée, un point de comptage est créé dans le compte smart-me.

- Les points de comptage non utilisés, p. ex. de stations publiques, peuvent être définis comme inactifs dans la [configuration des compteurs](https://wiki.smart-me.com/konfiguration/ordnerkonfiguration) afin de ne pas être soumis à licence.

- La configuration peut maintenant se poursuivre du côté smart-me [(smart-me Billing)](https://wiki.smart-me.com/konfiguration/billing). 


Remarque : toutes les futures stations reliées à cette installation sont automatiquement migrées dans le portail smart-me. 

## ISE-Load Profile

## Exemple smart-me Billing

[Fichier de test](https://drive.google.com/file/d/19fD_H9M23XtC0MXnxbyaTgf1tlUjcLhy/view?usp=sharing)

[Exemple de facture](https://drive.google.com/file/d/1fGI2lC8IzfSzpk6fpke9Xe9cX0l18I2w/view?usp=sharing)
