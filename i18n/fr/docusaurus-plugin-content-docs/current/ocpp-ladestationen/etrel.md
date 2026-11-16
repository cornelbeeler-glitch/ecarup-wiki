---
title: 'Etrel'
slug: '/ocpp-ladestationen/etrel'
description: 'Guide d''intégration backend'
sidebar_label: 'Etrel'
---
<div className="row">
<div className="col col--8">

## Guide d'intégration backend

Les stations Etrel peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos stations (prix, utilisateurs, heures de disponibilité, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de stations](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![Etrel – illustration 1](/img/ocpp-ladestationen-etrel/01.jpg)

</div>
</div>

[Wallbox Etrel](https://etrel.com/)

### Intégration de stations OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la station souhaitée et collez-y l'URL copiée.

## Intégration de la wallbox Etrel

- Ouvrez les paramètres réseau et Internet de votre PC

- Vous devez y attribuer une adresse IP statique, par ex. 192.168.1.50

- Connectez ensuite votre PC à la wallbox et ouvrez dans le navigateur l'adresse IP « par défaut » suivante de la station : 192.168.1.250. Veuillez consulter le guide fourni pour connaître les données de connexion exactes

- La version du logiciel doit être au minimum 4.0.4

![Etrel – illustration 2](/img/ocpp-ladestationen-etrel/02.png)

Sous Diagnostics, vous pouvez vérifier la version actuelle de votre logiciel. 

1.  Sous Device Mode, veuillez passer de 1 utilisateur sans autorisation à plusieurs utilisateurs avec autorisation !

![Etrel – illustration 3](/img/ocpp-ladestationen-etrel/03.png)

2\. Via EVSE Configuration, vous pouvez faire afficher sur l'écran du chargeur le code QR généré dans le portail web eCarUp. 

Utilisez pour cela toujours https://ecarup.com/app/?serial=xxxxxxxxxxxxx (personnalisé, voir l'exemple à droite)

![Etrel – illustration 4](/img/ocpp-ladestationen-etrel/04.png)

![Etrel – illustration 5](/img/ocpp-ladestationen-etrel/05.png)

3\. Sous User, dans Charging autohrization, passez à Central System Only. 

![Etrel – illustration 6](/img/ocpp-ladestationen-etrel/06.png)

4\. Connectivity : sélectionnez un support, soit une connexion Ethernet, soit WiFi.

5\. Mettez la communication avec le Central System sur « enabled »

6\. Sous Central System Connectivity, dans Endpoint URL, ajoutez votre URL eCarUp provenant du compte du propriétaire de la station.

![Etrel – illustration 7](/img/ocpp-ladestationen-etrel/07.png)

### Tenir compte des Additional Settings :

1.  Hearbeat Intervall sur 60s

2.  Meter Values sur 60s

et pour finir, n'oubliez pas d'enregistrer. 

![Etrel – illustration 8](/img/ocpp-ladestationen-etrel/08.png)

### Contrôle final :

<div className="row">
<div className="col col--8">

- Si le « Cloud » ressemble à celui de l'image de droite, la station a établi avec succès une connexion au backend.

</div>
<div className="col col--4 text--center">

![Etrel – illustration 9](/img/ocpp-ladestationen-etrel/09.png)

</div>
</div>

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une station à l'autre. Nous recommandons un intervalle de 30 à 60s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'app. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Etrel – illustration 10](/img/ocpp-ladestationen-etrel/10.png)

![Etrel – illustration 11](/img/ocpp-ladestationen-etrel/11.png)
