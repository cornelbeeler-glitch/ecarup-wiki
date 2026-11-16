---
title: 'Mennekes'
slug: '/ocpp-ladestationen/mennekes'
description: 'Guide d''intégration au backend'
sidebar_label: 'Mennekes'
---
![Mennekes – Illustration 1](/img/ocpp-ladestationen-mennekes/01.jpg)

[Professional](https://www.mennekes.ch/emobility/produkte/portfolio/ladesaeulen/)

![Mennekes – Illustration 2](/img/ocpp-ladestationen-mennekes/02.jpg)

[Wallbox Premium](https://www.mennekes.ch/emobility/produkte/portfolio/ladesaeulen/)

![Mennekes – Illustration 3](/img/ocpp-ladestationen-mennekes/03.jpg)

[Amtron Professional](https://www.mennekes.ch/emobility/produkte/portfolio/ladesaeulen/)

![Mennekes – Illustration 4](/img/ocpp-ladestationen-mennekes/04.png)

[Amtron 4Business/4You](https://www.mennekes.ch/emobility/produkt-details/1347012405BK/#)

## Guide d'intégration au backend

Les stations Mennekes peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos stations (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de stations](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

### Intégration de stations OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la station souhaitée et collez-y l'URL copiée.

## Amtron 4Business/4You

- Version de firmware testée : 1.2.15

Intégrez la station dans un réseau sur lequel vous pouvez y accéder via son adresse IP.  

<Embed src="https://demo.arcade.software/pn64vzJQpOAvqVOZLRlT?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" aspect="1.570" title="Wiki - Mennekes" />

1.  Activer le mode expert

2.  Dans les paramètres, cliquez sur Backend.

![Mennekes – Illustration 5](/img/ocpp-ladestationen-mennekes/05.png)

3\. Ajoutez votre URL eCarUp et redémarrez la borne de recharge. 

Exemple d'URL :

![Mennekes – Illustration 6](/img/ocpp-ladestationen-mennekes/06.png)

## Intégration de la colonne de recharge Amedio Professional et de la Wallbox Amtron Professional

### 1\. Connecter l'ordinateur portable au contrôleur Bender via un câble USB :

⚠️ Important : utilisez le port micro-USB

![Mennekes – Illustration 7](/img/ocpp-ladestationen-mennekes/07.png)

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

a) Copier le fichier du firmware sur une clé USB. Insérer la clé USB.

b) Redémarrer le contrôleur Bender

</div>
<div className="col col--4 text--center">

![Mennekes – Illustration 8](/img/ocpp-ladestationen-mennekes/08.png)

</div>
</div>

### 4\. Configurer le Bender

OCPP Mode: OCPP-J 1.6

WebSocket JSON OCPP URL: ws://www.ecarup.com/api/Ocpp16/&#123;ecarupID&#125;/

Exemple : ws://www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508/

⚠️ Important : un « / » doit être ajouté après l'URL OCPP eCarUp (comme dans l'exemple). De plus, le champ « ChargePoint ID (OCPP) » ne doit contenir aucun caractère spécial.

![Mennekes – Illustration 9](/img/ocpp-ladestationen-mennekes/09.png)

## Intégration de l'ACU V3 et V4

### Intégration du contrôleur ACU

Se connecter à la station via Ethernet

1.  L'ordinateur portable doit avoir l'adresse IP 192.168.0.21 et le masque de sous-réseau 255.255.255.0.

2.  Ouvrez le navigateur de votre ordinateur portable et saisissez l'URL suivante dans la barre d'adresse : 192.168.0.10

3.  Le nom d'utilisateur et le mot de passe sont « admin »

![Mennekes – Illustration 10](/img/ocpp-ladestationen-mennekes/10.png)

### Mises à jour logicielles et guide Mennekes :

Le logiciel ainsi que le guide sont disponibles sur la page [Mises à jour logicielles de Mennekes](https://www.chargeupyourday.de/services/software-updates/).

## Interface web de Mennekes

1.  Vérification du firmware actuel

2.  S'il n'est pas à jour, veuillez mettre à jour l'ACU. Vous trouverez la version logicielle actuelle ainsi que le guide sur la [page des mises à jour logicielles de Mennekes](https://www.chargeupyourday.de/services/software-updates/).

3.  Sélectionner le protocole de transmission v1.6J

4.  Insérer l'URL OCPP de votre compte et OCPP 1.6 

ws://www.ecarup.com/api/Ocpp16/(votre ID)/

N'oubliez pas la barre oblique à la fin. ! 

Respecter les paramètres

![Mennekes – Illustration 11](/img/ocpp-ladestationen-mennekes/11.png)

![Mennekes – Illustration 12](/img/ocpp-ladestationen-mennekes/12.png)

![Mennekes – Illustration 13](/img/ocpp-ladestationen-mennekes/13.png)

![Mennekes – Illustration 14](/img/ocpp-ladestationen-mennekes/14.png)

## Téléchargements

Softwareupdate-ACU-v3-v4\_v03\_30-09-2019\_de.pdf

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une station à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Mennekes – Illustration 15](/img/ocpp-ladestationen-mennekes/15.png)

![Mennekes – Illustration 16](/img/ocpp-ladestationen-mennekes/16.png)
