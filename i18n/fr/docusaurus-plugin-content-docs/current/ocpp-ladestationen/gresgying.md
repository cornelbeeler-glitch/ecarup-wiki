---
title: 'Gresgying'
slug: '/ocpp-ladestationen/gresgying'
description: 'Guide d''intégration au backend'
sidebar_label: 'Gresgying'
---
![Gresgying – Illustration 1](/img/ocpp-ladestationen-gresgying/01.png)

[Turbo Wallbox](https://www.gresgying.global/product/turbo-wallbox.html)

![Gresgying – Illustration 2](/img/ocpp-ladestationen-gresgying/02.png)

[120kW & 180kW DC Charging Station](https://www.gresgying.global/product/120kw-180kw-dc-charging-station.html)

## Guide d'intégration au backend

Les stations Gresgying peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos stations (prix, utilisateurs, horaires de disponibilité, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de stations](/stationsbetreiber/webportal) 

- Découvrez-en plus sur nos [fonctions Premium](/funktionen)

### Intégration des stations OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la station souhaitée et collez-y l'URL copiée.

## Gresgying AC Wallbox

- "firmwareVersion":"C-V1.01.24 P-V1.01.21" 

- Installez l'application Gresgying

- Version testée de l'application : V1.0.10

![Gresgying – Illustration 3](/img/ocpp-ladestationen-gresgying/03.png)

### Étape 1

<div className="row">
<div className="col col--6">

- Connectez la station à votre compte Gresgying via l'application.

</div>
<div className="col col--6 text--center">

![Gresgying – Illustration 4](/img/ocpp-ladestationen-gresgying/04.png)

</div>
</div>

### Étape 2

<div className="row">
<div className="col col--6">

- Une fois la station connectée avec succès, l'application affiche ceci

</div>
<div className="col col--6 text--center">

![Gresgying – Illustration 5](/img/ocpp-ladestationen-gresgying/05.png)

</div>
</div>

### Étape 3

<div className="row">
<div className="col col--6">

- Sous Network Configuration, vous pouvez sélectionner le type de connexion.

- Sous OCPP Server, vous pouvez ajouter l'URL.

</div>
<div className="col col--6 text--center">

![Gresgying – Illustration 6](/img/ocpp-ladestationen-gresgying/06.png)

</div>
</div>

### Étape 4

<div className="row">
<div className="col col--6">

- Sous Path, ajoutez l'URL complète provenant de votre compte eCarUp.

- Attention : le numéro de série de la station doit être ajouté après l'URL.

- Cliquez sur Connect.

</div>
<div className="col col--6 text--center">

![Gresgying – Illustration 7](/img/ocpp-ladestationen-gresgying/07.png)

</div>
</div>

### Exemple d'URL :

- ws://www.ecarup.com/api/Ocpp16/D0xxxxxxxxxx/Seriennummer

### Pour terminer, veuillez vérifier le paramètre suivant :

- Charging Mode doit être réglé sur "Online". 

![Gresgying – Illustration 8](/img/ocpp-ladestationen-gresgying/08.png)

## Gresgying F3-EU 180 kW

- "firmwareVersion":"C2032\_V2.8.2" 

### La station peut être configurée aussi bien localement qu'à distance.

Localement via l'écran :

- Veuillez consulter pour cela le mode d'emploi fourni. 

À distance via le Device Management System :

- Cliquez sur "Device Manage" et recherchez la station souhaitée

- Sélectionnez "Set Parameters"

- "Operation Platfrom address"

- Ajoutez l'URL OCPP de votre compte et enregistrez le paramètre.

- Redémarrez ensuite la station.

![Gresgying – Illustration 9](/img/ocpp-ladestationen-gresgying/09.png)

![Gresgying – Illustration 10](/img/ocpp-ladestationen-gresgying/10.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une station à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire la valeur programmée)

2.  Change Configuration (pour écraser la valeur)

![Gresgying – Illustration 11](/img/ocpp-ladestationen-gresgying/11.png)

![Gresgying – Illustration 12](/img/ocpp-ladestationen-gresgying/12.png)
