---
title: 'Juice Technology'
slug: '/ocpp-ladestationen/juice-technology'
description: 'Guide d''intégration au backend'
sidebar_label: 'Juice Technology'
---
![Juice Technology – Illustration 1](/img/ocpp-ladestationen-juice-technology/01.jpg)

[Charger me 3](https://juice.world/)

![Juice Technology – Illustration 2](/img/ocpp-ladestationen-juice-technology/02.jpg)

[Charger 2](https://juice.world/)

## Guide d'intégration au backend

Les bornes Juice peuvent être intégrées en quelques étapes au système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires de disponibilité, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)


### Intégration des bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.


## Intégration des bornes de recharge Juice

<Video src="nj_x0WNQhNk" title="Vidéo YouTube, guide d'intégration « Juice Technology dans le backend eCarUp »" />

Guide vidéo : intégration de Juice Technology dans le backend eCarUp

## Juice Charger me 3

### Installation

Accéder à la borne (statique) :

1\. Dès que vous êtes connecté à la borne (attention, le PC doit se trouver dans la même plage IP), ouvrez le navigateur de votre choix et saisissez l'adresse IP suivante : 192.168.123.123/

2\. Connexion : vous trouverez les données de connexion dans le guide fourni.

Par défaut : 

Nom d'utilisateur : operator

Mot de passe : JuiCeMeUP!

3\. Configurez ensuite le Juice Charger me 3 selon vos besoins. 



Accéder à la borne (dynamique) :

1.  Branchez le câble réseau sur le routeur et repérez l'adresse IP dans la liste des appareils du routeur. 

2.   Connexion : vous trouverez les données de connexion dans le guide fourni.


Par défaut : 

Nom d'utilisateur : operator

Mot de passe : JuiCeMeUP!

3.   Configurez ensuite le Juice Charger me 3 selon vos besoins. 




### Paramètres OCPP :

![Juice Technology – Illustration 3](/img/ocpp-ladestationen-juice-technology/03.png)

1.  Sélectionnez le type de connexion (WLAN, LAN, etc.)

2.  Ajoutez l'URL eCarUp de votre compte. 


Exemple : ws://www.ecarup.com/api/OCPP16/wgwepog4980h4ho

![Juice Technology – Illustration 4](/img/ocpp-ladestationen-juice-technology/04.png)

\+ réglez Meter Value Sample Interval sur 60 secondes au maximum. 

### Paramètres d'autorisation

![Juice Technology – Illustration 5](/img/ocpp-ladestationen-juice-technology/05.png)

- Désactiver la recharge gratuite

- Désactiver la liste blanche locale


Enregistrez tous les paramètres et redémarrez la borne. 

## Juice Charger 2

### Installation

Accéder à la borne :

1\. Dès que vous êtes connecté à la borne, ouvrez le navigateur de votre choix et saisissez l'adresse IP suivante : 192.168.4.1:1234

2\. Connexion : sur cette page, saisissez le mot de passe par défaut 1234567890.

3\. Configurez ensuite le Juice Charger 2 selon vos besoins. 

![Juice Technology – Illustration 6](/img/ocpp-ladestationen-juice-technology/06.png)

### Intégration OCPP

⚠️ Important : l'URL générée depuis le compte eCarUp doit être décomposée selon l'exemple suivant. 

1.  ws:// doit être omis, le Hostpath et le domaine doivent être saisis séparément.

2.  (\*\*\*\* doit être remplacé par p. ex. F749E....)

3.  La Chargebox ID ne doit pas contenir d'espaces

4.  Enregistrer la configuration

5.  La borne redémarre.


![Juice Technology – Illustration 7](/img/ocpp-ladestationen-juice-technology/07.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule façon de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire la valeur programmée)

2.  Change Configuration (pour écraser la valeur)


![Juice Technology – Illustration 8](/img/ocpp-ladestationen-juice-technology/08.png)

![Juice Technology – Illustration 9](/img/ocpp-ladestationen-juice-technology/09.png)
