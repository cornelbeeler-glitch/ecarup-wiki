---
title: 'Hesotec'
slug: '/ocpp-ladestationen/hesotec'
description: 'Guide d''intégration au backend'
sidebar_label: 'Hesotec'
---
![Hesotec – Illustration 1](/img/ocpp-ladestationen-hesotec/01.jpg)

[eBox wr30](https://electrify.hesotec.de/produkte/ebox-wr30)

![Hesotec – Illustration 2](/img/ocpp-ladestationen-hesotec/02.jpg)

[eBox sr10](https://electrify.hesotec.de/produkte/ebox-wr30)

![Hesotec – Illustration 3](/img/ocpp-ladestationen-hesotec/03.jpg)

[eSat r10/r20](https://electrify.hesotec.de/produkte/ebox-wr30)

## Guide d'intégration au backend

Les bornes Hesotec peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Bornes » (Stationen).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration de la borne de recharge Hesotec

- Téléchargez l'application « electrify charge control » de la société Hesotec dans votre App Store

- Dans l'application, cliquez sur le + pour connecter la borne souhaitée

- La connexion peut être établie via le hotspot ou via l'eLMS de Hesotec

- Sélectionnez votre modèle et nommez la borne

- Connectez ensuite le téléphone au hotspot de la borne de recharge

- Vous trouverez toutes les informations relatives au hotspot (SSID\_EBOX\_XXX, mot de passe compris) dans l'enveloppe fournie. 

- Une fois la borne connectée avec succès, elle apparaît dans l'application. 

## Play Store

![Hesotec – Illustration 4](/img/ocpp-ladestationen-hesotec/04.png)

<div className="row">
<div className="col col--6 text--center">

![Hesotec – Illustration 5](/img/ocpp-ladestationen-hesotec/05.jpg)

</div>
<div className="col col--6 text--center">

![Hesotec – Illustration 6](/img/ocpp-ladestationen-hesotec/06.jpg)

</div>
</div>

- Dans l'application, cliquez sur les 3 points en haut à droite

- Les paramètres avancés et le mode technicien doivent être activés

<div className="row">
<div className="col col--6 text--center">

![Hesotec – Illustration 7](/img/ocpp-ladestationen-hesotec/07.jpg)

</div>
<div className="col col--6 text--center">

![Hesotec – Illustration 8](/img/ocpp-ladestationen-hesotec/08.jpg)

</div>
</div>

- Sélectionnez les paramètres généraux

- Réglez l'autorisation sur RFID/App et 

- Activez l'arrêt par RFID

- Enregistrez et revenez aux paramètres

<div className="row">
<div className="col col--6 text--center">

![Hesotec – Illustration 9](/img/ocpp-ladestationen-hesotec/09.jpg)

</div>
<div className="col col--6 text--center">

![Hesotec – Illustration 10](/img/ocpp-ladestationen-hesotec/10.jpg)

</div>
</div>

<div className="row">
<div className="col col--6">

- Ouvrez les paramètres avancés

- Sous Backend OCPP, saisissez l'URL eCarUp figurant dans votre portail web

- Exemple : ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxx/15023910 (numéro de série de la borne)

- Réglez le mode sur OCPP

</div>
<div className="col col--6 text--center">

![Hesotec – Illustration 11](/img/ocpp-ladestationen-hesotec/11.png)

</div>
</div>

- Important : dans l'URL, indiquez après le / le numéro de série de votre borne !

- Redémarrez ensuite la borne

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Hesotec – Illustration 12](/img/ocpp-ladestationen-hesotec/12.png)

![Hesotec – Illustration 13](/img/ocpp-ladestationen-hesotec/13.png)
