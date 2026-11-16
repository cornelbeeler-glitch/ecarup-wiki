---
title: 'Eco-Flow'
slug: '/ocpp-ladestationen/eco-flow'
description: 'Les stations Eco-Flow peuvent être intégrées en quelques étapes dans le système de décompte eCarUp.'
sidebar_label: 'Eco-Flow'
---
![Eco-Flow – illustration 1](/img/ocpp-ladestationen-eco-flow/01.jpg)

Les stations Eco-Flow peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos stations (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de stations](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)


### Intégration de stations OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la station souhaitée et collez-y l'URL copiée.


## Intégration de la PowerPulse

### Étapes préparatoires pour l'intégration de la PowerPulse

1.  Installez l'app Eco-Flow sur votre téléphone

2.  Connectez maintenant votre borne de recharge à l'app 

3.  Dès que la borne de recharge est visible dans l'app, effectuez les réglages suivants. 


### ⚠️ Important

1.  La station a été testée avec succès avec la version de firmware v1.0.9.10

2.  La version testée de l'app Eco-Flow est la v6.13.9

3.  Actuellement, seules les cartes RFID d'Eco-Flow fonctionnent


![Eco-Flow – illustration 2](/img/ocpp-ladestationen-eco-flow/02.png)

1.  Sélectionnez la station connectée.


![Eco-Flow – illustration 3](/img/ocpp-ladestationen-eco-flow/03.png)

2\. Cliquez sur l'icône en haut à droite

![Eco-Flow – illustration 4](/img/ocpp-ladestationen-eco-flow/04.png)

3\. Sélectionner « Commande OCPP »

![Eco-Flow – illustration 5](/img/ocpp-ladestationen-eco-flow/05.png)

4\. Activer la commande OCPP

![Eco-Flow – illustration 6](/img/ocpp-ladestationen-eco-flow/06.png)

5\. Régler le prestataire OCPP sur la saisie manuelle. 

6\. Ajouter votre URL eCarUp

7\. Enregistrer.

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une station à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'app. 



Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![Eco-Flow – illustration 7](/img/ocpp-ladestationen-eco-flow/07.png)

![Eco-Flow – illustration 8](/img/ocpp-ladestationen-eco-flow/08.png)
