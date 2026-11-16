---
title: 'Eaton OCPP'
slug: '/ocpp-ladestationen/eaton'
description: 'Anciennes bornes de recharge Green Motion (Box Proxy)'
sidebar_label: 'Eaton OCPP'
---
## Bornes de recharge Box Proxy

## Anciennes bornes de recharge Green Motion (Box Proxy)

Le Box Proxy est désormais disponible pour l'intégration des anciennes bornes Green Motion. Cela signifie que les bornes de recharge peuvent déjà être connectées à la plateforme eCarUp et testées à l'aide du guide ci-dessous. Des extensions et/ou des améliorations peuvent toutefois encore être apportées.

Les modèles de bornes de recharge suivants sont actuellement pris en charge :

[Private-One avec un connecteur](/drittsysteme/box-proxy-green-motion)

[xChargeLN xCIM Client avec un connecteur](/drittsysteme/box-proxy-green-motion)

[Master One](/drittsysteme/box-proxy-green-motion)

[Network TWO](/drittsysteme/box-proxy-green-motion)

[Smart One](/drittsysteme/box-proxy-green-motion)

## Bornes de recharge OCPP

![Eaton OCPP – Illustration 1](/img/ocpp-ladestationen-eaton/01.jpg)

[Green Motion Duo](https://www.eaton.com/ch/de-de.html)

![Eaton OCPP – Illustration 2](/img/ocpp-ladestationen-eaton/02.jpg)

[Green Motion DC 22&66](https://www.eaton.com/ch/de-de.html)

![Eaton OCPP – Illustration 3](/img/ocpp-ladestationen-eaton/03.jpg)

[Green Motion Building](https://www.eaton.com/ch/de-de.html)

## Guide d'intégration au backend

Les bornes Eaton peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet "Bornes" (Stationen).

4.  Sélectionnez l'onglet "OCPP".

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration des bornes de recharge Eaton

### Green Motion DC 22 & 66

Version de firmware testée : 2003

### Intégration de la borne de recharge

Info : la page de configuration est active pendant 30 minutes, après quoi la borne doit être redémarrée. 

- Allumez la borne à l'aide du disjoncteur

- Connectez votre PC via Ethernet à l'un des trois ports LAN du routeur Teltronika situé dans la borne

- Dans le navigateur, accédez à l'adresse IP suivante : 192.168.52.11

- Cliquez sur « Ouvrir la page » et saisissez dans le navigateur les données de connexion fournies. (par défaut, il peut s'agir de admin/admin)

![Eaton OCPP – Illustration 4](/img/ocpp-ladestationen-eaton/04.png)

![Eaton OCPP – Illustration 5](/img/ocpp-ladestationen-eaton/05.png)

### Étape 1

- Vérifiez la version du logiciel, Bienne 2003 est le firmware testé. 

![Eaton OCPP – Illustration 6](/img/ocpp-ladestationen-eaton/06.png)

### Étape 2

- Sélectionnez OCPP Server

- Sous Backend, réglez sur Custom

- Ajoutez l'URL eCarUp de votre compte

Exemple : 

wss://[www.ecarup.com/api/Ocpp16/D037091EE3xxxxxx/](http://www.ecarup.com/api/Ocpp16/D037091EE3026BE0/HL68P28001)

- Réglez Security Profile sur None

- Enregistrez

![Eaton OCPP – Illustration 7](/img/ocpp-ladestationen-eaton/07.png)

### Étape 3

- Redémarrez la borne

## Green Motion Building

- Firmware testé v.1807

### Intégration de la borne de recharge

<div className="row">
<div className="col col--8">

Info : la page de configuration est active pendant 30 minutes, après quoi la borne doit être redémarrée.

- Allumez la borne

- Activez le Wi-Fi sur votre PC ou votre téléphone

- La borne crée un point d'accès portant les 4 derniers chiffres du numéro de série. P. ex. GM\_Mxxxxx

- Le mot de passe figure sur un autocollant fourni avec la documentation du chargeur. Les modèles plus anciens ont un mot de passe par défaut (GreenMotion!1052).

- Connectez votre PC ou votre téléphone au point d'accès et accédez dans le navigateur à l'adresse IP suivante : 192.168.53.1

- Configurez le réseau et poursuivez avec les étapes ci-dessous.

- Il est possible qu'un message d'avertissement s'affiche avant que vous accédiez à la page de configuration. Cliquez sur « Continuer ».

</div>
<div className="col col--4 text--center">

![Eaton OCPP – Illustration 8](/img/ocpp-ladestationen-eaton/08.png)

</div>
</div>

![Eaton OCPP – Illustration 9](/img/ocpp-ladestationen-eaton/09.png)

### Étape 1

- Sélectionnez OCPP Server

- Sous Backend, réglez sur Custom

- Ajoutez l'URL eCarUp de votre compte

Exemple : 

wss://[www.ecarup.com/api/Ocpp16/D037091EE3026BE0/](http://www.ecarup.com/api/Ocpp16/D037091EE3026BE0/HL68P28001)

- Réglez Security Profile sur None

- Enregistrez

![Eaton OCPP – Illustration 10](/img/ocpp-ladestationen-eaton/10.png)

### Étape 2

- Redémarrez la borne

## Vérifier l'autorisation

![Eaton OCPP – Illustration 11](/img/ocpp-ladestationen-eaton/11.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de téléversement des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Eaton OCPP – Illustration 12](/img/ocpp-ladestationen-eaton/12.png)

![Eaton OCPP – Illustration 13](/img/ocpp-ladestationen-eaton/13.png)

### Télécharger les logs

Si la borne n'apparaît pas dans notre système et que le support Eaton ne trouve pas non plus de solution au problème, nous vous prions de nous transmettre les fichiers journaux pour vérification.

Maintenance --> System Log --> Get the Logs
