---
title: 'Zaptec'
slug: '/ocpp-ladestationen/zaptec'
description: 'Guide d''intégration au backend'
sidebar_label: 'Zaptec'
---
![Zaptec – Illustration 1](/img/ocpp-ladestationen-zaptec/01.jpg)

[Zaptec Go](https://www.zaptec.com/de-ch)

![Zaptec – Illustration 2](/img/ocpp-ladestationen-zaptec/02.jpg)

[Zaptec Pro](https://www.zaptec.com/de-ch)

## Guide d'intégration au backend

Les bornes Zaptec peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même, en toute simplicité, les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires de disponibilité, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)


### Intégration des bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet "Bornes" ("Stationen").

4.  Sélectionnez l'onglet "OCPP".

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.


## Intégration des bornes de recharge Zaptec

La borne Zaptec peut en outre transmettre les valeurs au quart d'heure à smart-me. Pour en savoir plus, consultez [Importation des données au quart d'heure](/funktionen/15-minuten-datenimport).

[![Zaptec – Illustration 3](/img/ocpp-ladestationen-zaptec/03.jpg)](https://youtu.be/jK-UypywXZU)

Guide vidéo : intégration de Zaptec dans le backend eCarUp

## Zaptec Go et Pro

### Installation dans le portail Zaptec

1.  Accédez au [portail web Zaptec](https://portal.zaptec.com/) et connectez-vous

2.  Dans le ruban de menu\-en haut, sélectionnez "Installations" ("Installationen") puis le groupe de bornes Zaptec à intégrer dans le système de décompte eCarUp

3.  Sélectionnez ensuite "Paramètres" ("Einstellungen"), puis dans le sous-menu "Authentification" ("Authentifizierung")

4.  L'interface de menu suivante s'affiche :


5\. Activez le champ "Authentification OCPP 1.6" ("OCPP 1.6 Authentifizierung")

6\. Sous "URL", saisissez l'URL OCPP que vous avez obtenue lors des préparatifs dans le portail eCarUp. 

Attention : l'URL doit encore être complétée par / & &#123;deviceid&#125;

- Exemple : ws://www.ecarup.com/api/Ocpp16/wei948gfhwe/&#123;deviceid&#125;


7\. Activez le champ "Authorization required" et cliquez pour terminer sur "Enregistrer" ("Speichern")

⚠️ Important :  la borne doit être redémarrée. 

Les chargeurs Zaptec du groupe sélectionné sont désormais enregistrés comme bornes de recharge dans votre compte eCarUp et peuvent être configurés selon vos conditions d'utilisation individuelles.

![Zaptec – Illustration 4](/img/ocpp-ladestationen-zaptec/04.png)

### Décompter les chargeurs Zaptec dans un système multitarif

Les valeurs au quart d'heure de la borne Zaptec peuvent être exportées. Cela permet des structures tarifaires étendues, comme les décomptes RCP ou les systèmes multitarifs. Pour en savoir plus, consultez la page [Importation des données au quart d'heure](/funktionen/15-minuten-datenimport).

## Sans authentification + recharge hors ligne

Connectez vos bornes Zaptec à eCarUp comme d'habitude via l'installation. ( étapes 5. à 7. )

1.  Si ce n'est pas déjà fait, veuillez créer un conducteur

2.  Accédez ensuite à la borne de recharge

3.  Désactivez l'authentification

4.  Ajoutez un ID-Tag par défaut de votre conducteur. 


Important : le jeton RFID doit également être enregistré chez eCarUp sous le conducteur. Vous trouverez plus d'informations à ce sujet ici : [LIEN](/fahrer/rfid-nfc-tags-carid)

![Zaptec – Illustration 5](/img/ocpp-ladestationen-zaptec/05.png)

Ce qui se passe :

Si aucun jeton n'est enregistré, eCarUp envoie un message « Invalid », car l'ID-Tag est vide. En tant que backend, nous devons pouvoir valider à tout moment qui s'autorise. 

![Zaptec – Illustration 6](/img/ocpp-ladestationen-zaptec/06.png)

Si un jeton est enregistré chez Zaptec, eCarUp envoie un message « Accepted », car l'ID-Tag est désormais transmis. La recharge est néanmoins enregistrée chez eCarUp. 

![Zaptec – Illustration 7](/img/ocpp-ladestationen-zaptec/07.png)

La recharge peut désormais aussi s'effectuer en mode hors ligne. La borne nous transmet la transaction hors ligne dès qu'elle est de nouveau en ligne. 

![Zaptec – Illustration 8](/img/ocpp-ladestationen-zaptec/08.png)

L'avantage est que le conducteur peut également être débité a posteriori. (si cela est configuré ainsi)

## Plusieurs propriétaires de bornes eCarUp sur une même installation Zaptec ?

### Oui, cela fonctionne !

Procédez comme suit :

1.  Sur l'installation, réglez comme d'habitude l'authentification sur OCPP 1.6J

2.  Laissez vide le champ de l'URL

3.  Cochez la case pour l'authentification requise.

4.  Accédez ensuite à la borne : dans les paramètres, vous pouvez y saisir l'URL individuelle avec le numéro de série de la borne Zaptec. 

5.  Enregistrez.


![Zaptec – Illustration 9](/img/ocpp-ladestationen-zaptec/09.png)

![Zaptec – Illustration 10](/img/ocpp-ladestationen-zaptec/10.png)

### Liens

[Enregistrement du webinaire sur les bornes de recharge Zaptec dans le backend eCarUp](https://web.ecarup.com/webinar-zaptec-stationen-mit-ecarup-backend/)

[Importation des données au quart d'heure](/funktionen/15-minuten-datenimport)

[Fonctions de la wallbox Zaptec dans le backend eCarUp](https://web.ecarup.com/backend/novavolt-zaptec-charger-abrechnen/)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 



Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![Zaptec – Illustration 11](/img/ocpp-ladestationen-zaptec/11.png)

![Zaptec – Illustration 12](/img/ocpp-ladestationen-zaptec/12.png)
