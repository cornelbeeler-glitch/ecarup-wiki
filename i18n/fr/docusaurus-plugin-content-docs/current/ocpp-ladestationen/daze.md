---
title: 'Daze'
slug: '/ocpp-ladestationen/daze'
description: 'Guide d''intégration au backend'
sidebar_label: 'Daze'
---
![Daze – illustration 1](/img/ocpp-ladestationen-daze/01.png)

[Home](https://daze.eu/en-ch/store/dazebox-home-s/?_gl=1*b49m7b*_up*MQ..*_ga*NzI2NTg0NTYxLjE3MTgzNjY5OTk.*_ga_ZR8FBKG0V4*MTcxODM2Njk5OC4xLjAuMTcxODM2Njk5OC4wLjAuMA..)

![Daze – illustration 2](/img/ocpp-ladestationen-daze/02.png)

[Duo](https://www.daze.eu/en/store?_gl=1*b49m7b*_up*MQ..*_ga*NzI2NTg0NTYxLjE3MTgzNjY5OTk.*_ga_ZR8FBKG0V4*MTcxODM2Njk5OC4xLjAuMTcxODM2Njk5OC4wLjAuMA..)

![Daze – illustration 3](/img/ocpp-ladestationen-daze/03.png)

[Urban](https://www.daze.eu/en/store?_gl=1*b49m7b*_up*MQ..*_ga*NzI2NTg0NTYxLjE3MTgzNjY5OTk.*_ga_ZR8FBKG0V4*MTcxODM2Njk5OC4xLjAuMTcxODM2Njk5OC4wLjAuMA..)

## Guide d'intégration au backend

Les bornes Daze peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

### Intégration des bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les identifiants de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Bornes » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration de la Dazebox Home, Share et Duo

Important : version de firmware testée de la Dazebox Home : 16.0.6.0

Important : version de firmware testée de la Share et de la Duo : 2.1.4.1.1.4

<Video src="BLvGWpLkiiY" title="Vidéo YouTube, guide d'intégration DAZE dans le backend eCarUp" />

<div className="row">
<div className="col col--8">

Guide rapide d'intégration de la DAZE Box dans le backend eCarUp

- Installez l'application Daze.

- Version testée de l'application : V. 6.1.0(97)

</div>
<div className="col col--4 text--center">

![Daze – illustration 4](/img/ocpp-ladestationen-daze/04.png)

</div>
</div>

### Étape 1

Ajoutez un réseau.

![Daze – illustration 5](/img/ocpp-ladestationen-daze/05.png)

### Étape 2

<div className="row">
<div className="col col--6">

À cette étape, configurez votre borne de recharge et ajoutez le réseau Wi-Fi.

</div>
<div className="col col--6 text--center">

![Daze – illustration 6](/img/ocpp-ladestationen-daze/06.png)

</div>
</div>

### Étape 3

<div className="row">
<div className="col col--6">

Une fois la borne de recharge ajoutée, vous trouvez l'aperçu suivant

</div>
<div className="col col--6 text--center">

![Daze – illustration 7](/img/ocpp-ladestationen-daze/07.png)

</div>
</div>

### Étape 4

<div className="row">
<div className="col col--6">

Pour l'intégration OCPP, cliquez en haut à droite sur les 3 traits (paramètres)

</div>
<div className="col col--6 text--center">

![Daze – illustration 8](/img/ocpp-ladestationen-daze/08.png)

</div>
</div>

### Étape 5

Activez OCPP et sélectionnez eCarUp comme fournisseur.

![Daze – illustration 9](/img/ocpp-ladestationen-daze/09.png)

### Étape 6

<div className="row">
<div className="col col--6">

Collez maintenant dans le champ URL l'URL provenant du portail web du compte eCarUp souhaité.

</div>
<div className="col col--6 text--center">

![Daze – illustration 10](/img/ocpp-ladestationen-daze/10.png)

</div>
</div>

### Étape 7

L'ID de la borne de recharge est renseigné automatiquement. 

Cliquez ensuite sur Terminer. 

Après le redémarrage de la borne, celle-ci devrait maintenant apparaître dans votre compte. 

Important : la borne doit rester connectée à votre téléphone via Bluetooth pendant toute la procédure.

## Important pour la borne Urban à 2 connecteurs :

- Pour l'identification, les connecteurs gauche et droit doivent être complétés par les trois derniers chiffres du numéro de série. 

![Daze – illustration 11](/img/ocpp-ladestationen-daze/11.png)

![Daze – illustration 12](/img/ocpp-ladestationen-daze/12.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire la valeur programmée)

2.  Change Configuration (pour écraser la valeur)

![Daze – illustration 13](/img/ocpp-ladestationen-daze/13.png)

![Daze – illustration 14](/img/ocpp-ladestationen-daze/14.png)
