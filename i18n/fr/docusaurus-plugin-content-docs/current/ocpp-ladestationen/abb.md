---
title: 'ABB'
slug: '/ocpp-ladestationen/abb'
description: 'Toutes les bornes ABB dotées d''une fonctionnalité backend peuvent être intégrées au backend eCarUp.'
sidebar_label: 'ABB'
---
Toutes les bornes ABB dotées d'une fonctionnalité backend peuvent être intégrées au backend eCarUp.
Les bornes de recharge ABB déjà installées peuvent également être migrées vers  eCarUp. 

![ABB – Illustration 1](/img/ocpp-ladestationen-abb/01.jpg)

[AC Terra Wallbox](https://e-mobility.abb.com/en)

![ABB – Illustration 2](/img/ocpp-ladestationen-abb/02.jpg)

[AC EV Lunic Pro M / Pro S](https://e-mobility.abb.com/en)

![ABB – Illustration 3](/img/ocpp-ladestationen-abb/03.jpg)

[DC Terra 24 / 54 / 54 HV](https://e-mobility.abb.com/en)

![ABB – Illustration 4](/img/ocpp-ladestationen-abb/04.jpg)

[DC Terra Wallbox](https://e-mobility.abb.com/en)

## Guide d'intégration au backend

Les bornes ABB peuvent être intégrées en quelques étapes au système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

### Intégration des bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez l'URL copiée.

## Intégration des bornes de recharge AC ABB

<Video src="UxKCeK8RGSA" title="Vidéo YouTube, guide d'intégration ABB dans le backend eCarUp" />

### ABB Terra AC Wallbox

Pour intégrer l'ABB Terra AC Wallbox, les étapes suivantes doivent être effectuées (une seule fois) du côté d'ABB :

- Créer un compte sur le portail TerraConfig. Demande via  [https://forms.abb.com/form-39881/Antrag-Connected-Services-AC-Terra](https://forms.abb.com/form-39881/Antrag-Connected-Services-AC-Terra))

- Créer un compte d'application dans le portail

- Ajouter l'URL eCarUp via le portail ABB

- Attention : pas de caractères spéciaux ni d'espaces dans le Third Party Name !

- Sans mot de passe

 Portail TerraConfig 

![ABB – Illustration 5](/img/ocpp-ladestationen-abb/05.png)

![ABB – Illustration 6](/img/ocpp-ladestationen-abb/06.png)

### Procédez ensuite comme suit dans l'application ABB TerraConfig :

- Se connecter à l'application TerraConfig avec le compte d'application (ABB)

- Se connecter à la borne via Bluetooth (nécessite la clé fournie)

- Testé avec la version logicielle 1.6.9

![ABB – Illustration 7](/img/ocpp-ladestationen-abb/07.png)

1.  Nouvelle configuration

![ABB – Illustration 8](/img/ocpp-ladestationen-abb/08.png)

2\. Effectuer les étapes 1 à 5

![ABB – Illustration 9](/img/ocpp-ladestationen-abb/09.png)

<div className="row">
<div className="col col--6">

2.1 Sélectionner le type de connexion souhaité

2.2 Désactiver la recharge libre

2.3 Configuration OCPP (expliquée plus en détail ci-dessous)

2.4 Activer les cartes RFID externes

2.5 Toujours confirmer la configuration

2.3 Configuration OCPP

</div>
<div className="col col--6 text--center">

![ABB – Illustration 10](/img/ocpp-ladestationen-abb/10.png)

</div>
</div>

<div className="row">
<div className="col col--6">

2.3.1Activer le serveur externe

L'URL ajoutée dans le portail web peut être sélectionnée ici.

2.3.2 Ajouter une URL personnalisée : l'URL OCPP peut être saisie ici manuellement.

Sélectionner et configurer le serveur OCPP

</div>
<div className="col col--6 text--center">

![ABB – Illustration 11](/img/ocpp-ladestationen-abb/11.png)

</div>
</div>

Confirmer la configuration du serveur OCPP

![ABB – Illustration 12](/img/ocpp-ladestationen-abb/12.png)

Enregistrer l'ensemble de la configuration et redémarrer. 

![ABB – Illustration 13](/img/ocpp-ladestationen-abb/13.png)

## Intégration des bornes de recharge DC ABB

### ABB Terra DC (Wallbox et bornes de recharge rapide)

Les bornes de recharge DC doivent être configurées par ABB avec le backend eCarUp. Pour ce faire, adressez-vous directement, en indiquant les données de la borne et votre URL OCPP (issue du portail web), à :

-  [emobility@ch.abb.com](mailto:emobility@ch.abb.com)

La migration vous sera confirmée par e-mail.

La borne est ensuite créée dans votre compte eCarUp et vous pouvez effectuer les paramètres selon votre cas d'utilisation. Vous trouverez plus d'informations à ce sujet dans la rubrique [Backend](/funktionen).

## Ancienne version

### Procédez ensuite comme suit dans l'application ABB TerraConfig (ancienne version) :

- Se connecter à l'application TerraConfig avec le compte d'application (ABB)

- Se connecter à la borne via Bluetooth (nécessite la clé fournie)

<Video src="6aw4vxHiWwU" title="Vidéo YouTube, configurer le backend OCPP pour la borne murale ABB Terra AC" />

1.  Serveur OCPP

![ABB – Illustration 14](/img/ocpp-ladestationen-abb/14.jpg)

2\. Sélectionner « + »

![ABB – Illustration 15](/img/ocpp-ladestationen-abb/15.jpg)

3\. Le lien URL prédéfini s'affiche

![ABB – Illustration 16](/img/ocpp-ladestationen-abb/16.jpg)

4\. Cliquer sur « Next »

![ABB – Illustration 17](/img/ocpp-ladestationen-abb/17.png)

5\. Activer l'accès externe et cliquer sur « Configure »

![ABB – Illustration 18](/img/ocpp-ladestationen-abb/18.png)

6\. Terminer avec OK

![ABB – Illustration 19](/img/ocpp-ladestationen-abb/19.png)

⚠️ Si les cartes RFID ne fonctionnent pas, vous devez « activer les cartes externes » dans l'application Terra Config.

## Important :

Si les cartes RFID ne fonctionnent pas, vous devez encore effectuer le réglage suivant sur la borne via l'application Terra Config :

![ABB – Illustration 20](/img/ocpp-ladestationen-abb/20.png)

Information :

Depuis la version logicielle d'ABB (SW V1.6.5), l'UID du badge ABB fourni (carte RFID n° xxxxxxxxx) n'est plus transmis via OCPP pour des raisons de sécurité.  

### Obstacles possibles à une activation réussie par carte RFID

1.  Si la borne nous envoie une demande d'autorisation avec le numéro de série, cela signifie que la borne est encore en mode Free Vending. Veuillez désactiver ce mode sous Device Mode dans l'application TerraConfig. 

![ABB – Illustration 21](/img/ocpp-ladestationen-abb/21.png)

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur) 

![ABB – Illustration 22](/img/ocpp-ladestationen-abb/22.png)

![ABB – Illustration 23](/img/ocpp-ladestationen-abb/23.png)
