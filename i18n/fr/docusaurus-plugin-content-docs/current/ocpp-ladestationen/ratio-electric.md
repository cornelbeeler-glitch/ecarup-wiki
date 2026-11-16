---
title: 'Ratio Electric'
slug: '/ocpp-ladestationen/ratio-electric'
description: 'Guide d''intégration backend'
sidebar_label: 'Ratio Electric'
---
![Ratio Electric – Illustration 1](/img/ocpp-ladestationen-ratio-electric/01.jpg)

[IO7](https://elektroscout.ch/produkt/doppellader-fuer-den-oeffentlichen-bereich-mit-ocpp/)

![Ratio Electric – Illustration 2](/img/ocpp-ladestationen-ratio-electric/02.jpg)

[IO6 MID Pro](https://elektroscout.ch/produkt/io6/)

## Guide d'intégration backend

Les bornes Ratio Electric peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même, en toute simplicité, les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)


### Intégration des bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.


## Intégration de l'IO7 et de l'IO6 pro MID

Important : version de firmware testée , 1.5.4  (IO7)

Important : version de firmware testée , 3.13.1  (IO6)



- Pour l'intégration de votre IO7, veuillez vous adresser à l'entreprise [Elektroscout](https://elektroscout.ch/)

- info@elektroscout.ch


## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 



Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![Ratio Electric – Illustration 3](/img/ocpp-ladestationen-ratio-electric/03.png)

![Ratio Electric – Illustration 4](/img/ocpp-ladestationen-ratio-electric/04.png)
