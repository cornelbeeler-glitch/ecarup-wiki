---
title: 'Spelsberg'
slug: '/ocpp-ladestationen/spelsberg'
description: 'Guide d''intégration au backend'
sidebar_label: 'Spelsberg'
---
<div className="row">
<div className="col col--6">

## Guide d'intégration au backend

Les bornes Spelsberg peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous définissez vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--6 text--center">

![Spelsberg – Illustration 1](/img/ocpp-ladestationen-spelsberg/01.jpg)

</div>
</div>

[Smart Pro](https://www.spelsberg.de/wallbox/)

### Intégration des bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » (Stationen).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration de la Smart Pro

<div className="row">
<div className="col col--8">

- Version du firmware testée : 5.30.0

- Pour cela, installez l'application Spelsberg Wallbox

- [Android](https://play.google.com/store/apps/details?id=de.spelsberg.wallboxapp&gl=DE) & [Apple App Store](https://apps.apple.com/de/app/spelsberg-wallbox-app/id1617068920)

</div>
<div className="col col--4 text--center">

![Spelsberg – Illustration 2](/img/ocpp-ladestationen-spelsberg/02.jpg)

</div>
</div>

### Étape 1

<div className="row">
<div className="col col--6">

Associez la wallbox à l'application Spelsberg. Cliquez sur « Je suis électricien-installateur » (Ich bin Elektroinstallateur)

</div>
<div className="col col--6 text--center">

![Spelsberg – Illustration 3](/img/ocpp-ladestationen-spelsberg/03.png)

</div>
</div>

### Étape 2

Activez le mode service et cliquez sur « Appliquer » (Übernehmen).

![Spelsberg – Illustration 4](/img/ocpp-ladestationen-spelsberg/04.jpg)

### Étape 3

Cliquez sur « Configurer la wallbox » (Wallbox konfigurieren). 

![Spelsberg – Illustration 5](/img/ocpp-ladestationen-spelsberg/05.jpg)

### Étape 4

Scannez le code QR affiché 

![Spelsberg – Illustration 6](/img/ocpp-ladestationen-spelsberg/06.jpg)

### Étape 5

Cliquez ensuite sur « Paramètres » (Einstellungen)

![Spelsberg – Illustration 7](/img/ocpp-ladestationen-spelsberg/07.png)

### Étape 6

Ouvrez les « Paramètres avancés » (Erweiterte Einstellungen)

![Spelsberg – Illustration 8](/img/ocpp-ladestationen-spelsberg/08.png)

### Étape 7

Sous « Système » (System), désactivez « Recharge libre » (Freies Laden)

![Spelsberg – Illustration 9](/img/ocpp-ladestationen-spelsberg/09.png)

### Étape 8

<div className="row">
<div className="col col--6">

Activez OCPP et ajoutez l'URL de votre compte eCarUp.

</div>
<div className="col col--6 text--center">

![Spelsberg – Illustration 10](/img/ocpp-ladestationen-spelsberg/10.png)

</div>
</div>

### Étape 9

Enregistrez les paramètres et transmettez-les à la borne. 

- Redémarrez la borne : elle se connecte alors à votre compte eCarUp. 

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Spelsberg – Illustration 11](/img/ocpp-ladestationen-spelsberg/11.png)

![Spelsberg – Illustration 12](/img/ocpp-ladestationen-spelsberg/12.png)
