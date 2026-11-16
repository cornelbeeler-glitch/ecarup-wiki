---
title: 'Fischer & Sohn'
slug: '/ocpp-ladestationen/fischer-sohn'
description: 'Guide d''intégration au backend'
sidebar_label: 'Fischer & Sohn'
---
<div className="row">
<div className="col col--8">

## Guide d'intégration au backend

Les bornes de Fischer & Sohn AG peuvent être intégrées en quelques étapes au système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![Fischer & Sohn – Illustration 1](/img/ocpp-ladestationen-fischer-sohn/01.jpg)

</div>
</div>

[iCarPlugS](https://www.fischersohn.ch/e-ladestationen)

### Intégration des bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet "OCPP".

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration du contrôleur Charx

- Version iCarPlugS

- Version de firmware testée : V1.5.0 

### Étape 1

Connectez-vous au contrôleur avec votre ordinateur portable, via l'adresse IP attribuée.

- Vous trouverez plus d'informations à ce sujet dans le mode d'emploi. 

### Étape 2

Connectez-vous ensuite avec le niveau "manufacture". 

![Fischer & Sohn – Illustration 2](/img/ocpp-ladestationen-fischer-sohn/02.png)

### Étape 3

Dans le menu, allez dans Configuration (Konfiguration) et passez le mode de validation (Freigabemodus) sur Via OCPP. 

![Fischer & Sohn – Illustration 3](/img/ocpp-ladestationen-fischer-sohn/03.png)

### Étape 4

Sous Configuration (Konfiguration), dans le menu OCPP, sélectionnez les éléments suivants :

1.  OCPP 1.6j

- \+ l'interface réseau choisie

2.  L'URL OCPP de votre compte eCarUp

- Attention : l'URL doit se terminer par un / suivi du numéro de série. 

- Exemple : ws://www.ecarup.com/api/ocpp16/xnwoi248grn3o2049/24001

![Fischer & Sohn – Illustration 4](/img/ocpp-ladestationen-fischer-sohn/04.png)

### Étape 5

Enregistrez (Speichern), puis redémarrez le contrôleur ou la borne. 

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez modifier ce paramètre comme suit :

1.  Get Configuration (pour lire la valeur programmée)

2.  Change Configuration (pour écraser la valeur)

![Fischer & Sohn – Illustration 5](/img/ocpp-ladestationen-fischer-sohn/05.png)

![Fischer & Sohn – Illustration 6](/img/ocpp-ladestationen-fischer-sohn/06.png)
