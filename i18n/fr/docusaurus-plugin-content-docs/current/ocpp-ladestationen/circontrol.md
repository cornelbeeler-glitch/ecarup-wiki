---
title: 'Circontrol'
slug: '/ocpp-ladestationen/circontrol'
description: 'Guide d''intégration backend'
sidebar_label: 'Circontrol'
---
## Guide d'intégration backend

Les stations Circontrol peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos stations (prix, utilisateurs, horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de stations](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)


### Intégration des stations OCPP

1.  Assurez-vous que votre station est installée et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la station souhaitée et collez-y l'URL copiée.


## Intégration de la borne de recharge Circontrol

Les premières étapes doivent être effectuées directement sur l'écran de votre station :

1.   Connectez votre ordinateur portable à la station

2.   Veuillez relever l'adresse IP actuelle de la station dans le guide fourni 

3.  Saisissez ensuite l'adresse IP dans le navigateur web

4.  Le tableau de bord de Circontrol s'affiche

5.  Sélectionnez le type de connexion (GSM, LAN...)


Veuillez noter ce qui suit :

À la livraison de la station, il peut arriver que le paramètre par défaut soit réglé sur Plug & Charge. Celui-ci doit bien entendu être désactivé au préalable. 

Veuillez contacter BIBUS ou Circontrol pour obtenir l'outil. 

Pour cela, le Charge Point Manager doit être installé et les paramètres doivent se présenter comme suit :

- Status doit être réglé sur Enabled


![Circontrol – Illustration 1](/img/ocpp-ladestationen-circontrol/01.png)

### Paramètres de l'interface web de Circontrol

1.  Integration 

2.  Sélectionner OCPP 1.6J

3.  LINK (cliquer)

4.  Vous trouverez le nom d'utilisateur et le mot de passe dans le guide


![Circontrol – Illustration 2](/img/ocpp-ladestationen-circontrol/02.png)

Dans Charge Box, le nom de la station doit être défini. Nom au choix 

(Attention : sans espace) 



![Circontrol – Illustration 3](/img/ocpp-ladestationen-circontrol/03.png)

![Circontrol – Illustration 4](/img/ocpp-ladestationen-circontrol/04.png)

- Sous Central System, saisissez l'URL OCPP de votre compte


![Circontrol – Illustration 5](/img/ocpp-ladestationen-circontrol/05.png)

⚠️ Important : réglez impérativement Metervalue sample interval (s) sur, par exemple, 60

## Téléchargements

EN\_eNext-Park\_User-Manual\_v2.0 (1).pdf

EN\_Charge-Point-Manager\_Instruction-Manual.pdf

## Réglage avancé via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une station à l'autre. Nous recommandons un intervalle compris entre 30-60s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 



Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![Circontrol – Illustration 6](/img/ocpp-ladestationen-circontrol/06.png)

![Circontrol – Illustration 7](/img/ocpp-ladestationen-circontrol/07.png)
