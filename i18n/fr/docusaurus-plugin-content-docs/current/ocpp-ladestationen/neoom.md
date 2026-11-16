---
title: 'neoom'
slug: '/ocpp-ladestationen/neoom'
description: 'Guide d''intégration au backend'
sidebar_label: 'neoom'
---
<div className="row">
<div className="col col--8">

## Guide d'intégration au backend

Les bornes Neoom s'intègrent en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous définissez vous-même simplement les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![neoom – illustration 1](/img/ocpp-ladestationen-neoom/01.jpg)

</div>
</div>

[neoom BOXX](https://neoom.com/produkte/boxx)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet "OCPP".

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration de la borne de recharge Neoom

- Ouvrez les paramètres réseau et Internet de votre PC

- Vous devez y attribuer une adresse IP statique

- Veuillez reprendre les données de connexion ainsi que l'adresse IP dans le manuel fourni

- Le firmware doit être au minimum en version : BE-03.02.10

⚠️ Attention : actuellement, la puissance de recharge ne peut pas être affichée dans l'app. La facturation s'effectue comme d'habitude à la fin de la session de recharge. 

### Interface web

### Backend

- Allez dans le menu "Network"

- Sélectionnez OCPP-J 1.6

- Choisissez le support de communication souhaité

- Le champ OCPP Vendor ne doit contenir aucun espace

- Le websocket doit être décomposé

### Websocket d'eCarUp

- Saisissez les données d'après la capture d'écran

- Attention à la fin : api/Ocpp16/weoih48zlkuhr9/00000010638

⚠️ Important : n'oubliez pas, à la fin, le / (slash) + 00000010638 (numéro de série de la borne) !

![neoom – illustration 2](/img/ocpp-ladestationen-neoom/02.jpg)

Vous trouvez le numéro de série de votre wallbox comme suit :

![neoom – illustration 3](/img/ocpp-ladestationen-neoom/03.png)

Si des cartes RFID sont utilisées, veuillez encore définir le paramètre suivant :

![neoom – illustration 4](/img/ocpp-ladestationen-neoom/04.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30-60s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'app. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![neoom – illustration 5](/img/ocpp-ladestationen-neoom/05.png)

![neoom – illustration 6](/img/ocpp-ladestationen-neoom/06.png)
