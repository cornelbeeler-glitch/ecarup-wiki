---
title: 'CTEK'
slug: '/ocpp-ladestationen/ctek'
description: 'Guide d''intégration au backend'
sidebar_label: 'CTEK'
---
<div className="row">
<div className="col col--8">

## Guide d'intégration au backend

Les stations CTEK peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos stations (prix, utilisateurs, heures disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de stations](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![CTEK – Figure 1](/img/ocpp-ladestationen-ctek/01.jpg)

</div>
</div>

[CTEK Chargestrom 2](https://www.ctek.com/de/ladestationen-f%C3%BCr-elektrofahrzeuge)

### Intégration des stations OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la station souhaitée et collez-y l'URL copiée.

## Intégration de la borne de recharge CTEK

Important !

Pour effectuer les premières étapes, vous devez installer un pilote CTEK sur votre PC (valable pour Windows).

1.   Connectez votre ordinateur portable à la station (via le port Mini-USB)

2.   Saisissez l'URL suivante : http://192.168.7.2

3.  Le nom d'utilisateur et le mot de passe sont ccu

4.  Le tableau de bord de CTEK s'affiche

5.  Sélectionnez le type de connexion (GSM, LAN...)

### Paramètres de l'interface web de C-Tek

1.  Le Setup doit être réglé sur Advanced. 

2.  Sélectionnez OCPP 1.6J comme protocole de communication

3.  Dans Backend Endpoint, collez l'URL eCarUp de votre compte. 

4.  La Time Synchronisation est obtenue depuis le backend OCPP.

![CTEK – Figure 2](/img/ocpp-ladestationen-ctek/02.png)

5\. Réglez le Sample Interval sur 60 secondes

6\. Vérifiez que le mode d'authentification de l'Outlet est réglé sur RFID. (Il reste bien entendu possible de démarrer en parallèle avec l'app eCarUp) 

![CTEK – Figure 3](/img/ocpp-ladestationen-ctek/03.png)

### Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une station à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule façon pour nous de mieux calculer et d'afficher la puissance de recharge actuelle dans l'app. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![CTEK – Figure 4](/img/ocpp-ladestationen-ctek/04.png)

![CTEK – Figure 5](/img/ocpp-ladestationen-ctek/05.png)
