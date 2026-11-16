---
title: 'Loxone'
slug: '/ocpp-ladestationen/loxone'
description: 'Guide d''intégration au backend'
sidebar_label: 'Loxone'
---
<div className="row">
<div className="col col--6">

## Guide d'intégration au backend

Les bornes Loxone peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Conditions requises pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--6 text--center">

![Loxone – Figure 1](/img/ocpp-ladestationen-loxone/01.jpg)

</div>
</div>

[Wallbox 11kW 16A Tree](https://shop.loxone.com/dech/wallbox-tree.html)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez l'URL copiée.

## Intégration de la borne de recharge Loxone

<Video src="1n1R5rs9bk8" title="Vidéo YouTube, intégration OCPP dans Loxone Config" />

## Intégration via le Loxone Mini Server

Important : le logiciel du Miniserver doit être au minimum en version 15.2 ou supérieure. 

Matériel requis : 

- Loxone Miniserver (2nd Gen)

Recommandation : 

- Wallbox Tree

- 3-Phasen Zähler Tree

Des bornes de recharge d'autres fabricants peuvent également être intégrées : [Loxone Library](https://library.loxone.com/?s=wallbox) 

### Configuration :

1.  Ajouter le plugin OCPP Server Connector comme appareil réseau

2.  Dans les paramètres du plugin OCPP Server Connector, ajoutez l'URL OCPP de votre compte. 

3.  (Facultatif) Ajoutez un point de recharge distinct pour chaque wallbox. 

![Loxone – Figure 2](/img/ocpp-ladestationen-loxone/02.png)

![Loxone – Figure 3](/img/ocpp-ladestationen-loxone/03.png)

### Liens utiles :

[Guide d'intégration Loxone](https://www.loxone.com/dede/kb/ocpp-integration/)

[Fonctionnalités OCPP de Loxone](https://www.loxone.com/dede/kb/ocpp-server-connector-beta/)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'app. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire la valeur programmée)

2.  Change Configuration (pour écraser la valeur)

![Loxone – Figure 4](/img/ocpp-ladestationen-loxone/04.png)

![Loxone – Figure 5](/img/ocpp-ladestationen-loxone/05.png)
