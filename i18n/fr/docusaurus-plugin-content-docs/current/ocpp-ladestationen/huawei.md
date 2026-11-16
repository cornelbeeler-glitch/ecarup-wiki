---
title: 'Huawei'
slug: '/ocpp-ladestationen/huawei'
description: 'Guide d''intégration au backend'
sidebar_label: 'Huawei'
---
<div className="row">
<div className="col col--6">

## Guide d'intégration au backend

Les stations Huawei peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos stations (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de stations](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--6 text--center">

![Huawei – Figure 1](/img/ocpp-ladestationen-huawei/01.png)

</div>
</div>

[Fusion Charge](https://digitalpower.huawei.com/en/smart-charging-network/ultra-fast-charging)

### Intégration des stations OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la station souhaitée et collez-y l'URL copiée.

## Intégration de la Fusion Charge DC

### Étapes préparatoires pour l'intégration de la Fusion Charge DC

1.  Vérifiez d'abord dans le guide fourni par quel moyen vous pouvez vous connecter à la station. 

2.  Installez l'application Antohill  de Huawei sur votre téléphone portable ou passez par le navigateur.

### ⚠️ Important

1.  La station a été testée avec succès avec la version de firmware V100R025C10SPC060

### Dans l'application

<div className="row">
<div className="col col--8">

1.  Allez dans Configuration (Maintenance), puis Business Plattform Parameters

2.  Sous Busines Platform Domain Name, saisissez « [www.ecarup.com](http://www.ecarup.com) ».

3.  Sous Acces Path « /api/Ocpp16/xxxxxxxxx (depuis votre compte) /numéro de série

4.  Enregistrez (Submit).

</div>
<div className="col col--4 text--center">

![Huawei – Figure 2](/img/ocpp-ladestationen-huawei/02.png)

</div>
</div>

## Portail web

![Huawei – Figure 3](/img/ocpp-ladestationen-huawei/03.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une station à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule façon pour nous de mieux calculer et d'afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Huawei – Figure 4](/img/ocpp-ladestationen-huawei/04.png)

![Huawei – Figure 5](/img/ocpp-ladestationen-huawei/05.png)
