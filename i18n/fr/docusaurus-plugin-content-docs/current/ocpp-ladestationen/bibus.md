---
title: 'Bibus'
slug: '/ocpp-ladestationen/bibus'
description: 'Guide d''intégration backend'
sidebar_label: 'Bibus'
---
![Bibus – Illustration 1](/img/ocpp-ladestationen-bibus/01.jpg)

[Bibus eVolve](https://technology.bibus.com/ch-de/produkte/e-mobility-and-energy/)

![Bibus – Illustration 2](/img/ocpp-ladestationen-bibus/02.jpg)

[Bibus eNext](https://technology.bibus.com/ch-de/produkte/e-mobility-and-energy/)

## Guide d'intégration backend

Les bornes Bibus peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même, en toute simplicité, les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)


### Intégration des bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.


## Intégration de la borne de recharge Bibus

Pour la version avec bornes Kempower, cliquez [ici](/ocpp-ladestationen/kempower).

## Version avec Circontrol

Les premières étapes doivent être effectuées directement sur l'écran de votre borne :

1.   Connectez votre ordinateur portable à la borne

2.   Relevez l'adresse IP actuelle de la borne dans le guide fourni

3.  Saisissez ensuite l'adresse IP dans le navigateur web

4.  Le tableau de bord de Circontrol s'affiche

5.  Choisissez le type de connexion (GSM, LAN ...)


⚠️ Veuillez noter :

Le réglage par défaut de la borne Bibus peut être Plug & Charge. Celui-ci doit être désactivé dans le Charge Point Manager. 

Veuillez contacter BIBUS pour obtenir le Charge Point Manager.

Dans les paramètres, le statut doit y être réglé sur « Activé » ("Aktiviert").

![Bibus – Illustration 3](/img/ocpp-ladestationen-bibus/03.png)

### Paramètres de l'interface web Circontrol

1.  Cliquez sur Integration dans la navigation à gauche

2.  Sélectionnez OCPP 1.6J sous « Intégrations disponibles » ("Verfügbare Integrationen").

3.  Cliquez sur le lien

4.  Saisissez le nom d'utilisateur et le mot de passe (voir le manuel)


![Bibus – Illustration 4](/img/ocpp-ladestationen-bibus/04.png)

5\. Donnez un nom à la Bibus Charge Box. ⚠️ Remarque : le nom ne doit pas contenir d'espaces.

![Bibus – Illustration 5](/img/ocpp-ladestationen-bibus/05.png)

6\. Saisissez l'URL OCPP de votre compte sous Système central (Zentrales System)

![Bibus – Illustration 6](/img/ocpp-ladestationen-bibus/06.png)

⚠️ Important : vous devez régler l'intervalle de mesure des valeurs mesurées (p. ex. sur 60 )

![Bibus – Illustration 7](/img/ocpp-ladestationen-bibus/07.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 



Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![Bibus – Illustration 8](/img/ocpp-ladestationen-bibus/08.png)

![Bibus – Illustration 9](/img/ocpp-ladestationen-bibus/09.png)
