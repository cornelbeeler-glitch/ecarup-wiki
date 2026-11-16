---
title: 'Compleo'
slug: '/ocpp-ladestationen/compleo'
description: 'Guide d''intégration backend'
sidebar_label: 'Compleo'
---
![Compleo – Illustration 1](/img/ocpp-ladestationen-compleo/01.png)

[SOLO](https://www.compleo-charging.ch/)

![Compleo – Illustration 2](/img/ocpp-ladestationen-compleo/02.jpg)

[eBOX](https://www.compleo-charging.ch/)

![Compleo – Illustration 3](/img/ocpp-ladestationen-compleo/03.jpg)

[DUO](https://www.compleo-charging.ch/)

![Compleo – Illustration 4](/img/ocpp-ladestationen-compleo/04.jpg)

[CITO 500](https://www.compleo-charging.ch/)

![Compleo – Illustration 5](/img/ocpp-ladestationen-compleo/05.jpg)

[CITO 240](https://www.compleo-charging.ch/)

## Guide d'intégration backend

Les bornes Compleo peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires de disponibilité, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)


### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.


## Intégration des bornes de recharge Compleo

### Remarque

- Un terminal de paiement par carte de crédit peut être exploité en parallèle à eCarUp afin de garantir une flexibilité maximale. Compleo se tient volontiers à votre disposition pour de plus amples informations. Cela ne concerne ici que le matériel DC !


### Compleo SOLO

Guide vidéo : [https://www.youtube.com/watch?v=Aa3artQXC6w](https://www.youtube.com/watch?v=Aa3artQXC6w)

### Compleo eBOX

Pour intégrer la Compleo eBOX, vous avez besoin de l'application Compleo eConfig. 

Il est également important que la version de firmware 1.1 soit installée sur la box pour la connexion OCPP. 

## Aperçu :

![Compleo – Illustration 6](/img/ocpp-ladestationen-compleo/06.png)

## Étape 1 :

![Compleo – Illustration 7](/img/ocpp-ladestationen-compleo/07.png)

## Étape 2 :

![Compleo – Illustration 8](/img/ocpp-ladestationen-compleo/08.png)

## Étape 3 :

![Compleo – Illustration 9](/img/ocpp-ladestationen-compleo/09.png)

## Étape 4 :

![Compleo – Illustration 10](/img/ocpp-ladestationen-compleo/10.png)

## Étape 5, redémarrage compris :

![Compleo – Illustration 11](/img/ocpp-ladestationen-compleo/11.png)

Important : si la borne ne fonctionne pas correctement après une intégration réussie avec eCarUp, veuillez vérifier les points suivants dans l'interface web de la wallbox :

- Authentification réglée sur « avec » ("MIT")

- La commande à distance (Remote) doit être activée


La manière d'accéder à l'interface web devrait être décrite dans le guide fourni. 

![Compleo – Illustration 12](/img/ocpp-ladestationen-compleo/12.png)

### Compleo DUO, CITO 500 & CITO 240

Pour intégrer d'autres bornes Compleo à eCarUp, vous avez besoin du support de la société [Compleo Charging Solutions AG Schweiz](https://www.compleo-charging.ch/kontakt) . Elle se charge de la configuration et attribue votre point de recharge au compte eCarUp au moyen de l'URL OCPP que vous avez reçue lors de la préparation.

![Compleo – Illustration 13](/img/ocpp-ladestationen-compleo/13.png)

### Important

Sur chaque borne de recharge Compleo, le paramètre suivant doit être réglé sur "true".

![Compleo – Illustration 14](/img/ocpp-ladestationen-compleo/14.png)

Cela peut se faire au moyen de notre outil de maintenance (eCarUp Premium), ou le réglage peut être effectué côté borne. 

## Paramètre avancé via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30-60s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 



Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![Compleo – Illustration 15](/img/ocpp-ladestationen-compleo/15.png)

![Compleo – Illustration 16](/img/ocpp-ladestationen-compleo/16.png)
