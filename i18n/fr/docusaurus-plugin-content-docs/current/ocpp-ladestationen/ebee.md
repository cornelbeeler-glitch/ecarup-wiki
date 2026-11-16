---
title: 'Ebee'
slug: '/ocpp-ladestationen/ebee'
description: 'Guide d''intégration au backend'
sidebar_label: 'Ebee'
---
<div className="row">
<div className="col col--8">

## Guide d'intégration au backend

Les stations Ebee équipées d'un contrôleur Bender peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même, en toute simplicité, les conditions d'utilisation de vos stations (prix, utilisateurs, horaires de disponibilité, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de stations](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![Ebee – Illustration 1](/img/ocpp-ladestationen-ebee/01.jpg)

</div>
</div>

[Ebee Berlin](https://www.bender.de/produkte/ladestationen/ladepunkt-berlin/)

### Intégration de stations OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet "Stations" ("Stationen").

4.  Sélectionnez l'onglet "OCPP".

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la station souhaitée et collez l'URL copiée.

## Intégration de la borne de recharge Ebee

<Video src="p_fhat0HxZY" title="Vidéo YouTube, intégrer le contrôleur Bender dans le backend eCarUp" />

## Intégration dans le portail eCarUp

### 1\. Connecter l'ordinateur portable au contrôleur Bender par câble USB

⚠️ Important : utilisez l'interface Micro-USB

![Ebee – Illustration 2](/img/ocpp-ladestationen-ebee/02.png)

### 2\. Ouvrir le navigateur sur l'ordinateur portable

Saisissez l'URL suivante : [http://192.168.123.123/operator/](http://192.168.123.123/operator/)

- Nom d'utilisateur par défaut : operator

- Mot de passe par défaut : yellow\_zone

### 3\. Vérifier la version du firmware :

<div className="row">
<div className="col col--8">

La version 4.00-2139 au minimum doit être installée.

La version actuelle se trouve sous State -> Firmware Version.

Effectuer une mise à jour du firmware :

a) Copiez le fichier du firmware sur une clé USB. Insérez la clé USB.

b) Redémarrez le contrôleur Bender

</div>
<div className="col col--4 text--center">

![Ebee – Illustration 3](/img/ocpp-ladestationen-ebee/03.png)

</div>
</div>

### 4\. Configurer le Bender

OCPP Mode : OCPP-J 1.6

WebSocket JSON OCPP URL : ws://www.ecarup.com/api/Ocpp16/&#123;ecarupID&#125;/

Exemple : ws://www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508/

Important : un "/" doit être ajouté après l'URL OCPP eCarUp (comme indiqué dans l'exemple). De plus, le champ "ChargePoint ID (OCPP)" ne doit contenir aucun caractère spécial.

![Ebee – Illustration 4](/img/ocpp-ladestationen-ebee/04.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de téléversement des Meter Values peut varier d'une station à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Ebee – Illustration 5](/img/ocpp-ladestationen-ebee/05.png)

![Ebee – Illustration 6](/img/ocpp-ladestationen-ebee/06.png)
