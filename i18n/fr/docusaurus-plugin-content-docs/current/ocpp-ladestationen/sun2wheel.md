---
title: 'sun2wheel'
slug: '/ocpp-ladestationen/sun2wheel'
description: 'Guide d''intégration au backend'
sidebar_label: 'sun2wheel'
---
<div className="row">
<div className="col col--6">

## Guide d'intégration au backend

Les stations sun2wheel peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même, en toute simplicité, les conditions d'utilisation de vos stations (prix, utilisateurs, horaires de disponibilité, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Conditions requises pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de stations](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--6 text--center">

![sun2wheel – Illustration 1](/img/ocpp-ladestationen-sun2wheel/01.png)

</div>
</div>

[Tiny Wallbox](https://sun2wheel.com/produkte/)

### Intégration de stations OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » (« Stationen »).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la station souhaitée et collez-y l'URL copiée.

## Intégration de la Sun2Wheel Tiny Wallbox

Important : version de firmware testée, V00.50.02

- Connectez la wallbox via LAN

- La Tiny Wallbox obtient une adresse IP que vous pouvez atteindre via le navigateur web. (L'adresse IP par défaut de la wallbox est 192.168.100.199)

- Saisissez les données de connexion

- Vous obtenez ensuite l'aperçu suivant (image ci-dessous)

- Sous OCPP-Server, vous pouvez ajouter l'URL de votre compte eCarUp et l'enregistrer 

- Après un redémarrage, la station apparaît dans votre compte eCarUp

![sun2wheel – Illustration 2](/img/ocpp-ladestationen-sun2wheel/02.png)

## Intégration de la one-way-guest-100

Pour pouvoir intégrer cette borne de recharge, consultez le guide d'intégration suivant du fabricant du matériel :

- [Guide](/ocpp-ladestationen/evtec)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une station à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'app. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![sun2wheel – Illustration 3](/img/ocpp-ladestationen-sun2wheel/03.png)

![sun2wheel – Illustration 4](/img/ocpp-ladestationen-sun2wheel/04.png)
