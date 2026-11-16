---
title: 'Alpitronic'
slug: '/ocpp-ladestationen/alpitronic'
description: 'Guide d''intégration au backend'
sidebar_label: 'Alpitronic'
---
<div className="row">
<div className="col col--8">

## Guide d'intégration au backend

Les bornes Alpitronic peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![Alpitronic – Illustration 1](/img/ocpp-ladestationen-alpitronic/01.jpg)

</div>
</div>

[Alpitronic Hypercharger](https://www.alpitronic.it/en/)

### Intégration des bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration de la borne de recharge Alpitronic

### ⚠️ Attention, à ne pas oublier : la première étape de configuration doit être effectuée dans le champ “Network Configuration”. (Vous trouverez les détails dans le fichier de Hypercharger)

### Accéder à la borne

1\. Connectez votre PC à la borne via le port Ethernet. Celui-ci est identifié par XF1 et se trouve dans la partie inférieure de la borne, du côté de la porte de l'écran.

2\. Accédez à l'interface web en ouvrant un navigateur et en saisissant l'adresse IP par défaut 192.168.1.100.

3\. Utilisez les identifiants par défaut pour accéder à l'interface web (nom d'utilisateur : admin, mot de passe : admin123).

![Alpitronic – Illustration 2](/img/ocpp-ladestationen-alpitronic/02.png)

### Important

- Sélectionner OCPP 1.6

- Copier l'URL eCarUp complète dans le champ WebSocketUrl !

- Régler Security Profile sur 0 sous Default

- Ne pas oublier Save Configuration.

![Alpitronic – Illustration 3](/img/ocpp-ladestationen-alpitronic/03.png)

### Veuillez tenir compte du point suivant

- KiskModeEnabled doit être réglé sur "false". 

Sinon, le conducteur peut brancher son véhicule et recharger gratuitement. 

![Alpitronic – Illustration 4](/img/ocpp-ladestationen-alpitronic/04.png)

Pour terminer, veuillez effectuer un "Hard Reset".

![Alpitronic – Illustration 5](/img/ocpp-ladestationen-alpitronic/05.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30-60s. C'est la seule façon de mieux calculer et afficher la puissance de recharge actuelle dans l'app. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Alpitronic – Illustration 6](/img/ocpp-ladestationen-alpitronic/06.png)

![Alpitronic – Illustration 7](/img/ocpp-ladestationen-alpitronic/07.png)
