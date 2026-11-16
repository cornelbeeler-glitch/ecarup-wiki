---
title: 'Gewiss'
slug: '/ocpp-ladestationen/gewiss'
description: 'Guide d''intégration au backend'
sidebar_label: 'Gewiss'
---
![Gewiss – Illustration 1](/img/ocpp-ladestationen-gewiss/01.jpg)

[JOINON EVO](https://www.gewiss.com/ch/de/mobility)

![Gewiss – Illustration 2](/img/ocpp-ladestationen-gewiss/02.jpg)

[JOINON-FAST](https://www.gewiss.com/ch/de/mobility)

## Guide d'intégration au backend

Les bornes Gewiss JOINON s'intègrent en quelques étapes au système de décompte eCarUp. Une fois installées dans votre compte, vous définissez vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal) 

- Découvrez ici nos [fonctions Premium](/funktionen)


### Intégration des bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.


1.Lien ws sans Basic Auth : testé et fonctionnel

2.wss sans Basic Auth : testé et fonctionnel

3.wss avec Basic Auth : non testé

6.  Accédez à l'interface web de la borne souhaitée et collez l'URL copiée.


## Wallbox JOINON EVO

- "firmwareVersion":"12.3.0" 


1.  Connectez-vous à la borne Gewiss JOINON Evo via LAN ou WLAN (les détails de la connexion figurent dans le guide d'installation)

2.  Masque de connexion (les données de connexion nécessaires figurent également dans le guide d'installation.

3.  Dans le menu Charging Station, vous pouvez configurer la connexion souhaitée. 


4\. Authorisation Type doit être réglé sur "Autorisation". 



![Gewiss – Illustration 3](/img/ocpp-ladestationen-gewiss/03.png)

5\. OCPP Protocol sur "ON"

6\. Ajouter l'URL eCarUp

Exemple : wss://[www.ecarup.com/api/Ocpp16/D8xxxxxxxxx](http://www.ecarup.com/api/Ocpp16/D8xxxxxxxxx)

7\. Chargebox identity = numéro de série de la borne

8\. Enregistrer.



![Gewiss – Illustration 4](/img/ocpp-ladestationen-gewiss/04.png)

## Borne de recharge DC JOINON I-Fast

- "firmwareVersion":"V4.13.M0 " 


1.  Connectez-vous à la borne de recharge DC Gewiss i-Fast via LAN ou WLAN (les détails de la connexion figurent dans le guide d'installation)

2.  Masque de connexion (les données de connexion nécessaires figurent également dans le guide d'installation.


3. Cliquez sur "Set"

4\. Sélectionnez "Backend"

5\. Ajoutez votre URL eCarUp sous Central System URL. 

Exemple : wss://[www.ecarup.com/api/Ocpp16/D8xxxxxxxxx](http://www.ecarup.com/api/Ocpp16/D8xxxxxxxxx)

6. Charge Box ID\= numéro de série de la borne

7. OCPP Security Profile peut être sélectionné en option. 

8\. Enregistrer. 




![Gewiss – Illustration 5](/img/ocpp-ladestationen-gewiss/05.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 



Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![Gewiss – Illustration 6](/img/ocpp-ladestationen-gewiss/06.png)

![Gewiss – Illustration 7](/img/ocpp-ladestationen-gewiss/07.png)
