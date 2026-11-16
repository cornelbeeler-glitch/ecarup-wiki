---
title: 'mybox'
slug: '/ocpp-ladestationen/mybox'
description: 'Guide d''intégration au backend'
sidebar_label: 'mybox'
---
<div className="row">
<div className="col col--8">

## Guide d'intégration au backend

Les bornes de recharge mybox peuvent être intégrées en quelques étapes au système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes de recharge (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Conditions préalables pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![mybox – Illustration 1](/img/ocpp-ladestationen-mybox/01.jpg)

</div>
</div>

[mybox Profi](https://mybox.eco/de/produkt/mybox-profi/)

### Intégration des bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » (Stationen).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez l'URL copiée.

## Intégration de la mybox

- Version du firmware testée : 20231218\_1.209.4\_v1

### Préparation

- Pour configurer la wallbox, vous devez établir une connexion avec le réseau Wi-Fi local de la borne de recharge

- Nom du réseau : MyBox-Rxx +8 caractères (ID de la borne)

- Veuillez consulter le mode d'emploi fourni pour connaître les données de connexion ainsi que l'adresse IP

⚠️ Important : en cas de dérangement interne, la borne n'envoie pas de message d'état habituel tel que « Faulted » ou « Unavailable ».

### Étape 1

Accédez aux Advanced Settings 

Sous Authorization, sélectionnez le mode OCPP

![mybox – Illustration 2](/img/ocpp-ladestationen-mybox/02.png)

### Étape 2

Ensuite, sous OCPP, activez la fonction et saisissez votre URL eCarUp sous OCPP-URL-CS. 

![mybox – Illustration 3](/img/ocpp-ladestationen-mybox/03.png)

### Étape 3

Redémarrez la borne. 

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30-60s. C'est la seule façon pour nous de mieux calculer et d'afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire la valeur programmée)

2.  Change Configuration (pour écraser la valeur)

![mybox – Illustration 4](/img/ocpp-ladestationen-mybox/04.png)

![mybox – Illustration 5](/img/ocpp-ladestationen-mybox/05.png)
