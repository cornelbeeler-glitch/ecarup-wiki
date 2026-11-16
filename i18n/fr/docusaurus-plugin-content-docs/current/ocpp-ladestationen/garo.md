---
title: 'Garo'
slug: '/ocpp-ladestationen/garo'
description: 'Guide d''intégration au backend'
sidebar_label: 'Garo'
---
![Garo – Illustration 1](/img/ocpp-ladestationen-garo/01.jpg)

[Wallbox GLB+](https://www.garo.se/en/products/wallbox)

![Garo – Illustration 2](/img/ocpp-ladestationen-garo/02.png)

[Entity Pro](https://www.garo.se/en/products/wallbox)

![Garo – Illustration 3](/img/ocpp-ladestationen-garo/03.jpg)

[LS4 Compact](https://www.garo.se/en/products/wallbox)

## Guide d'intégration au backend

Les bornes de recharge Garo peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

### Intégration des bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Rendez-vous dans l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration des bornes de recharge Garo

<Video src="Jj_6G8k8nus" title="Vidéo YouTube, guide d'intégration de GARO dans le backend eCarUp" />

## Intégration de la Garo Entity Pro

Installez ici pour l'application Garo Connect.  

### Version testée

- Version du firmware 1.8.8

![Garo – Illustration 4](/img/ocpp-ladestationen-garo/04.png)

### Étape 1

Suivez pas à pas le guide fourni et scannez le code QR figurant sur la plaque arrière. 

⚠️ Important : votre téléphone et la borne de recharge doivent se trouver sur le même réseau. (LAN ou WLAN)

### Étape 2

<div className="row">
<div className="col col--6">

Dans les paramètres généraux, veuillez vous assurer qu'aucun planning de recharge de la voiture ni l'utilisation gratuite ne sont activés.

</div>
<div className="col col--6 text--center">

![Garo – Illustration 5](/img/ocpp-ladestationen-garo/05.png)

</div>
</div>

### Étape 3

<div className="row">
<div className="col col--6">

Dans l'aperçu de l'installation, veuillez sélectionner le champ « Fournisseur tiers » ("Drittanbieter").

</div>
<div className="col col--6 text--center">

![Garo – Illustration 6](/img/ocpp-ladestationen-garo/06.png)

</div>
</div>

### Étape 4

<div className="row">
<div className="col col--6">

Notre recommandation : sélectionner StopTransactionPnEVSideDisconnecet + UnlockConnectorOnEVSideDisconnect.

</div>
<div className="col col--6 text--center">

![Garo – Illustration 7](/img/ocpp-ladestationen-garo/07.png)

</div>
</div>

### Étape 5

<div className="row">
<div className="col col--6">

Pour la connexion OCPP, le DeviceId peut être choisi librement.

Dans le champ CsmsUrl, vous pouvez ajouter votre URL issue de votre compte eCarUp.

</div>
<div className="col col--6 text--center">

![Garo – Illustration 8](/img/ocpp-ladestationen-garo/08.png)

</div>
</div>

### Étape 5.1

<div className="row">
<div className="col col--6">

L'URL peut être copiée telle quelle.

N'oubliez pas d'enregistrer et de redémarrer !

</div>
<div className="col col--6 text--center">

![Garo – Illustration 9](/img/ocpp-ladestationen-garo/09.png)

</div>
</div>

### Remarque

<div className="row">
<div className="col col--6">

Sur la borne de recharge, l'utilisateur peut encore définir ce qu'elle doit faire en cas d'état « Non connecté » ("Nicht verbunden"). Nous recommandons de ne rien activer.

</div>
<div className="col col--6 text--center">

![Garo – Illustration 10](/img/ocpp-ladestationen-garo/10.png)

</div>
</div>

## Intégration de la Garo GLB+ et de la LS4 Compact

### 1\. Connecter l'ordinateur portable au contrôleur Bender via un câble USB :

⚠️ Important : utiliser l'interface Micro-USB

![Garo – Illustration 11](/img/ocpp-ladestationen-garo/11.png)

### 2\. Ouvrir le navigateur sur l'ordinateur portable

Saisissez l'URL suivante : http://192.168.123.123/operator/

- Nom d'utilisateur par défaut : operator

- Mot de passe par défaut : yellow\_zone

### 3\. Vérifier la version du firmware :

<div className="row">
<div className="col col--8">

La version 4.00-2139 au minimum doit être installée.

Sous State →  Firmware Version, vous trouverez la version actuelle.

Effectuer une mise à jour du firmware :

a) Copier le fichier du firmware sur une clé USB. Insérer la clé USB.

b) Redémarrer le contrôleur Bender

</div>
<div className="col col--4 text--center">

![Garo – Illustration 12](/img/ocpp-ladestationen-garo/12.png)

</div>
</div>

### 4\. Configurer le Bender

OCPP Mode: OCPP-J 1.6

WebSocket JSON OCPP URL: ws://www.ecarup.com/api/Ocpp16/&#123;ecarupID&#125;/

Exemple : ws://www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508/

Important : un « / » doit être ajouté après l'URL OCPP eCarUp (comme dans l'exemple). De plus, le champ « ChargePoint ID (OCPP) » ne doit contenir aucun caractère spécial.

![Garo – Illustration 13](/img/ocpp-ladestationen-garo/13.png)

### Nouvelle interface Bender

Si vous disposez de l'interface web ci-dessous, vous trouverez le guide dans l'article suivant 

- [Guide](/ocpp-ladestationen/webasto)

![Garo – Illustration 14](/img/ocpp-ladestationen-garo/14.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Garo – Illustration 15](/img/ocpp-ladestationen-garo/15.png)

![Garo – Illustration 16](/img/ocpp-ladestationen-garo/16.png)
