---
title: 'Autel'
slug: '/ocpp-ladestationen/autel'
description: 'Guide d''intégration au backend'
sidebar_label: 'Autel'
---
<div className="row">
<div className="col col--6">

## Guide d'intégration au backend

Les stations Autel peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos stations (prix, utilisateurs, horaires de disponibilité, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de stations](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--6 text--center">

![Autel – Illustration 1](/img/ocpp-ladestationen-autel/01.jpg)

</div>
</div>

[Autel AC Wallbox](https://web.ecarup.com/backend/autel/)

### Intégration des stations OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » (« Stationen »).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la station souhaitée et collez-y l'URL copiée.

## Intégration de l'Autel AC Wallbox

- Pour cela, installez l'application Autel Charge.  

- [Android](https://play.google.com/store/apps/details?id=com.autel.charge) & [Apple App Store](https://apps.apple.com/de/app/autel-charge/id1578454464)

### Étape 1

![Autel – Illustration 2](/img/ocpp-ladestationen-autel/02.jpg)

### Étape 2

![Autel – Illustration 3](/img/ocpp-ladestationen-autel/03.jpg)

### Étape 3

Veuillez scanner le code QR fourni, sur lequel figurent notamment le numéro de série et le mot de passe.

### Étape 4

![Autel – Illustration 4](/img/ocpp-ladestationen-autel/04.jpg)

### Étape 5

![Autel – Illustration 5](/img/ocpp-ladestationen-autel/05.jpg)

### Étape 6

Dès que vous avez connecté la borne de recharge au réseau (LAN, WLAN ou Bluetooth), vous pouvez continuer.

### Étape 7

![Autel – Illustration 6](/img/ocpp-ladestationen-autel/06.jpg)

### Étape 8

![Autel – Illustration 7](/img/ocpp-ladestationen-autel/07.jpg)

### Étape 9

![Autel – Illustration 8](/img/ocpp-ladestationen-autel/08.jpg)

Important concernant l'URL :

- Procédez exactement comme sur la capture d'écran.

- Pour le chemin du serveur, ajoutez manuellement le « / » (slash) à la fin. 

- N'oubliez pas de vous connecter à la fin. 

### Étape 10

- Effectuez un contrôle final.

![Autel – Illustration 9](/img/ocpp-ladestationen-autel/09.png)

## Paramètre avancé via l'outil de maintenance (eCarUp Premium)

L'intervalle de téléversement des Meter Values peut varier d'une station à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez modifier cela comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Autel – Illustration 10](/img/ocpp-ladestationen-autel/10.png)

![Autel – Illustration 11](/img/ocpp-ladestationen-autel/11.png)
