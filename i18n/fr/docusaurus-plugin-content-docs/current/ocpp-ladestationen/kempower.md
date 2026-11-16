---
title: 'Kempower'
slug: '/ocpp-ladestationen/kempower'
description: 'Guide d''intégration au backend'
sidebar_label: 'Kempower'
---
![Kempower – Illustration 1](/img/ocpp-ladestationen-kempower/01.jpg)

[Kempower Station Charger](https://kempower.com/de/solution/kempower-station-charger/)

![Kempower – Illustration 2](/img/ocpp-ladestationen-kempower/02.jpg)

[Kempower Satellite](https://kempower.com/de/solution/kempower-satellite/)

![Kempower – Illustration 3](/img/ocpp-ladestationen-kempower/03.jpg)

[Kempower Movable Charger](https://kempower.com/de/solution/kempower-movable-charger/)

## Guide d'intégration au backend

Les stations Kempower peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos stations (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de stations](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)


### Intégration de stations OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet "Stations" ("Stationen").

4.  Sélectionnez l'onglet "OCPP".

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la station souhaitée et collez-y l'URL copiée.


## Intégration de la borne de recharge Kempower

Important : version de firmware testée, 3.2.6

### Étape 1

Vérifiez que votre station est en ligne et qu'elle communique avec le portail Kempower. 

- [https://kempower.io/](https://kempower.io/)


### Étape 2

1.  Vérifiez que la station dispose également d'une connexion Internet active

2.  Cliquez sur la roue dentée en haut à droite.


![Kempower – Illustration 4](/img/ocpp-ladestationen-kempower/04.png)

### Étape 3

1.  Cliquez sur Connectivity et activez OCPP

2.  Ajoutez votre URL eCarUp et cliquez sur enregistrer. 


![Kempower – Illustration 5](/img/ocpp-ladestationen-kempower/05.png)

### Étape 4

1.  Pour terminer, vérifiez les paramètres d'autorisation et cliquez sur enregistrer.


![Kempower – Illustration 6](/img/ocpp-ladestationen-kempower/06.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une station à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 



Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![Kempower – Illustration 7](/img/ocpp-ladestationen-kempower/07.png)

![Kempower – Illustration 8](/img/ocpp-ladestationen-kempower/08.png)
