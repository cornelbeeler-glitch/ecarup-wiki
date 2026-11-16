---
title: 'Heidelberg Amperfied'
slug: '/ocpp-ladestationen/heidelberg-amperfied'
description: 'Guide d''intégration au backend'
sidebar_label: 'Heidelberg Amperfied'
---
<div className="row">
<div className="col col--6">

## Guide d'intégration au backend

Les stations Heidelberg peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos stations (prix, utilisateurs, horaires de disponibilité, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de stations](/stationsbetreiber/webportal)

- Découvrez-en plus sur nos [fonctions Premium](/funktionen)

</div>
<div className="col col--6 text--center">

![Heidelberg Amperfied – Illustration 1](/img/ocpp-ladestationen-heidelberg-amperfied/01.png)

</div>
</div>

[Public Connect Heidelberg](https://www.amperfied.de/)

### Étapes préparatoires pour l'intégration de stations OCPP dans le cloud eCarUp

1.  Vos bornes de recharge sont installées et votre ordinateur ou votre téléphone se trouve sur le même réseau que la borne de recharge

2.  Vous avez créé un compte dans l'[application eCarUp](https://web.ecarup.com/elektroauto-lade-app/)

3.  Connectez-vous au portail web d'eCarUp avec les identifiants de votre compte et, dans le menu de gauche, cliquez sous Stations (Stationen) sur l'onglet « OCPP »

4.  Copiez l'URL dans le presse-papiers et enregistrez-la pour la station souhaitée dans l'interface web.

## Intégration de la Public Connect

Version de firmware testée : 5.21.2-13536

### Interface web

### Backend

- Sélectionnez le type de connexion souhaité

- Le ChargePoint ID peut être modifié, mais la station apparaît toujours dans le portail eCarUp avec son numéro de série

- Sélectionnez OCPP-j 1.6

- Insérez l'URL complète de votre compte dans le champ Websocket.

- Enregistrez et redémarrez

![Heidelberg Amperfied – Illustration 2](/img/ocpp-ladestationen-heidelberg-amperfied/02.png)

### Compteur d'énergie

- Dans le compteur d'énergie, l'intervalle d'envoi de la transmission de puissance peut être réduit. Celui-ci détermine à quel intervalle la station nous envoie les données de consommation (kW). 

![Heidelberg Amperfied – Illustration 3](/img/ocpp-ladestationen-heidelberg-amperfied/03.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une station à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Heidelberg Amperfied – Illustration 4](/img/ocpp-ladestationen-heidelberg-amperfied/04.png)

![Heidelberg Amperfied – Illustration 5](/img/ocpp-ladestationen-heidelberg-amperfied/05.png)
