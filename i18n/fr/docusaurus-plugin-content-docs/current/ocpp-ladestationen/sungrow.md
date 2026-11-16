---
title: 'Sungrow'
slug: '/ocpp-ladestationen/sungrow'
description: 'Guide d''intégration au backend'
sidebar_label: 'Sungrow'
---
<div className="row">
<div className="col col--8">

## Guide d'intégration au backend

</div>
<div className="col col--4 text--center">

![Sungrow – Illustration 1](/img/ocpp-ladestationen-sungrow/01.jpg)

</div>
</div>

Sungrow IDC30E

## Guide d'intégration au backend

Les bornes Sungrow peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal) 

- Découvrez ici nos [fonctions Premium](/funktionen)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet "Stations" ("Stationen").

4.  Sélectionnez l'onglet "OCPP".

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

### Sungrow IDC30E

### Intégration via l'écran

1.  Appuyez pendant 5 secondes sur le format de l'heure affiché à l'écran

![Sungrow – Illustration 2](/img/ocpp-ladestationen-sungrow/02.png)

2\. Pour y accéder, vous avez besoin du code fourni. 

![Sungrow – Illustration 3](/img/ocpp-ladestationen-sungrow/03.png)

3\. Allez à la page 4

4\. Sous Websocket, cliquez sur "others"

5\. Sous Other, saisissez votre URL eCarUp.

6\. Redémarrez la borne. 

![Sungrow – Illustration 4](/img/ocpp-ladestationen-sungrow/04.png)

Exemple :

- wss://[www.ecarup.com/api/Ocpp16/D8D2Axxxxxxxx](http://www.ecarup.com/api/Ocpp16/D8D2Axxxxxxxx)

![Sungrow – Illustration 5](/img/ocpp-ladestationen-sungrow/05.png)

### Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Sungrow – Illustration 6](/img/ocpp-ladestationen-sungrow/06.png)

![Sungrow – Illustration 7](/img/ocpp-ladestationen-sungrow/07.png)
