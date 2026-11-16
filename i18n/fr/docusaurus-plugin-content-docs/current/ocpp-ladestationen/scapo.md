---
title: 'SCAPO'
slug: '/ocpp-ladestationen/scapo'
description: 'Guide d''intégration au backend'
sidebar_label: 'SCAPO'
---
<div className="row">
<div className="col col--8">

## Guide d'intégration au backend

Les stations Scapo peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos stations (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de stations](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![SCAPO – Illustration 1](/img/ocpp-ladestationen-scapo/01.jpg)

</div>
</div>

[Wallbox VISION](https://scapo.de/e-mobility-privat/)

### Intégration des stations OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » (Stationen).

4.  Sélectionnez l'onglet « OCPP » (OCPP).

5.  Copiez l'URL dans le presse-papiers.

1\. Lien ws sans Basic Auth : testé et fonctionnel

2\. wss sans Basic Auth : testé et fonctionnel

3\. wss avec Basic Auth : pas encore testé

6.  Accédez à l'interface web de la station souhaitée et collez-y l'URL copiée.

## Intégration de la SCAPO Vision & SCAPO Comfort

- Ouvrez les paramètres réseau et Internet de votre PC

- Vous devez y attribuer une adresse IP statique

- Veuillez reprendre les données de connexion ainsi que l'adresse IP dans le manuel fourni

- Le firmware doit être au moins en version : BE-05.01.01 ou BE-03.02.12

### Interface web

### Backend

- Accédez au menu « Network »

- Sélectionnez OCPP-J 1.6

- Choisissez le support de communication souhaité

- L'OCPP Vendor ne doit contenir aucun espace

- Le websocket doit être décomposé

### Websocket d'eCarUp

- Renseignez-le en vous basant sur la capture d'écran

- Veuillez faire attention à la fin : api/Ocpp16/weoih48zlkuhr9/00000010638

⚠️Important : n'oubliez pas d'ajouter à la fin / (slash) + 00000010638 (numéro de série de la station) !

- Actuellement, seule la connexion WS fonctionne. 

![SCAPO – Illustration 2](/img/ocpp-ladestationen-scapo/02.jpg)

Vous trouverez le numéro de série de votre wallbox comme suit :

![SCAPO – Illustration 3](/img/ocpp-ladestationen-scapo/03.png)

Si des cartes RFID sont utilisées, veuillez encore définir le paramètre suivant :

![SCAPO – Illustration 4](/img/ocpp-ladestationen-scapo/04.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une station à l'autre. Nous recommandons un intervalle compris entre 30-60s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![SCAPO – Illustration 5](/img/ocpp-ladestationen-scapo/05.png)

![SCAPO – Illustration 6](/img/ocpp-ladestationen-scapo/06.png)
