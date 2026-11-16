---
title: 'Ventisei Swiss'
slug: '/ocpp-ladestationen/ventisei-swiss'
description: 'Guide d''intégration au backend'
sidebar_label: 'Ventisei Swiss'
---
<div className="row">
<div className="col col--8">

## Guide d'intégration au backend

Les bornes Ventisei peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires de disponibilité, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![Ventisei Swiss – illustration 1](/img/ocpp-ladestationen-ventisei-swiss/01.jpg)

</div>
</div>

[Ventisei Swiss](https://www.ventisei.swiss/)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre smartphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les identifiants de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Bornes » ("Stationen").

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration de la Ventisei Swiss

Important : version de firmware testée, m2.2.1\_cf01.12\_chAA.06

## Remarque

- Un terminal de paiement par carte de crédit peut être exploité en parallèle d'eCarUp afin de garantir une flexibilité maximale. Ventisei Swiss se tient volontiers à votre disposition pour de plus amples informations. 

### Étape 1

Allumez la borne de recharge et ouvrez vos paramètres WLAN. 

Sélectionnez le hotspot de la borne.

![Ventisei Swiss – illustration 2](/img/ocpp-ladestationen-ventisei-swiss/02.png)

### Étape 2

<div className="row">
<div className="col col--6">

Dans le navigateur, saisissez l'adresse IP suivante : http://172.25.1.1

La page de connexion suivante s'affiche.

(Les identifiants de connexion figurent dans le guide)

</div>
<div className="col col--6 text--center">

![Ventisei Swiss – illustration 3](/img/ocpp-ladestationen-ventisei-swiss/03.png)

</div>
</div>

### Étape 3

<div className="row">
<div className="col col--6">

L'aperçu suivant s'affiche :

1.  Configurez votre connexion sous Connectivity.

2.  Sous OCPP, vous pouvez ensuite ajouter votre URL eCarUp.

</div>
<div className="col col--6 text--center">

![Ventisei Swiss – illustration 4](/img/ocpp-ladestationen-ventisei-swiss/04.png)

</div>
</div>

### Étape 4

<div className="row">
<div className="col col--6">

Intégration OCPP

1.  [www.ecarup.com](http://www.ecarup.com)

2.  Port 80 (port standard, si rien d'autre n'a été défini)

</div>
<div className="col col--6 text--center">

![Ventisei Swiss – illustration 5](/img/ocpp-ladestationen-ventisei-swiss/05.png)

</div>
</div>

### Étape 5

<div className="row">
<div className="col col--6">

3\. Copiez-y le reste de l'URL de votre compte

4\. Réglez Meter Values sur 60 s.

5\. Enregistrez

</div>
<div className="col col--6 text--center">

![Ventisei Swiss – illustration 6](/img/ocpp-ladestationen-ventisei-swiss/06.png)

</div>
</div>

### Étape 6

Redémarrez la borne ; elle devrait ensuite se connecter avec succès à votre compte eCarUp. 

## Paramètre avancé via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Ventisei Swiss – illustration 7](/img/ocpp-ladestationen-ventisei-swiss/07.png)

![Ventisei Swiss – illustration 8](/img/ocpp-ladestationen-ventisei-swiss/08.png)
