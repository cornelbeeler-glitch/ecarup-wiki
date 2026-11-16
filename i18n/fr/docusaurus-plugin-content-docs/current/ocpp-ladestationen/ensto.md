---
title: 'Ensto'
slug: '/ocpp-ladestationen/ensto'
description: 'Guide d''intégration au backend'
sidebar_label: 'Ensto'
---
<div className="row">
<div className="col col--8">

## Guide d'intégration au backend

Les bornes Ensto équipées d'un contrôleur Bender peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous définissez vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires de disponibilité, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![Ensto – Illustration 1](/img/ocpp-ladestationen-ensto/01.jpg)

</div>
</div>

[Ensto Chago Wallbox](https://www.ensto.com/de/stromverteilungsnetze/)

### Intégration des bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration dans le portail eCarUp

<Video src="p_fhat0HxZY" title="Vidéo YouTube, intégrer un contrôleur Bender dans le backend eCarUp" />

### 1\. Connecter l'ordinateur portable au contrôleur Bender par câble USB :

⚠️ Important : utilisez l'interface Micro-USB

![Ensto – Illustration 2](/img/ocpp-ladestationen-ensto/02.png)

### 2\. Ouvrir le navigateur sur l'ordinateur portable

Saisissez l'URL suivante : http://192.168.123.123/operator/

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

![Ensto – Illustration 3](/img/ocpp-ladestationen-ensto/03.png)

</div>
</div>

### 4\. Configurer le Bender

OCPP Mode: OCPP-J 1.6

WebSocket JSON OCPP URL: ws://www.ecarup.com/api/Ocpp16/&#123;ecarupID&#125;/

Exemple : ws://www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508/

⚠️ Important : un « / » doit être ajouté après l'URL OCPP eCarUp (comme dans l'exemple). De plus, la « ChargePoint ID (OCPP) » ne doit contenir aucun caractère spécial.

![Ensto – Illustration 4](/img/ocpp-ladestationen-ensto/04.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'app. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire la valeur programmée)

2.  Change Configuration (pour écraser la valeur)

![Ensto – Illustration 5](/img/ocpp-ladestationen-ensto/05.png)

![Ensto – Illustration 6](/img/ocpp-ladestationen-ensto/06.png)
