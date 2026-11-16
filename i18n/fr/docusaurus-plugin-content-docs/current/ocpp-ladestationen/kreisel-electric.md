---
title: 'Kreisel Electric'
slug: '/ocpp-ladestationen/kreisel-electric'
description: 'Guide d''intégration au backend'
sidebar_label: 'Kreisel Electric'
---
## Guide d'intégration au backend

Les stations Kreisel Electric peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos stations (prix, utilisateurs, horaires de disponibilité, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de stations](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

### Intégration des stations OCPP :

<div className="row">
<div className="col col--6">

1.  Assurez-vous que vos bornes de recharge sont installées et en ligne.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet "Stations" ("Stationen").

4.  Sélectionnez l'onglet "OCPP".

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la station souhaitée et collez-y l'URL copiée.

</div>
<div className="col col--6 text--center">

![Kreisel Electric – Illustration 1](/img/ocpp-ladestationen-kreisel-electric/01.png)

</div>
</div>

[Kreisel CHIMERO](https://www.kreiselelectric.com/products/high-power-charger/)

## CHIMERO (modèles de puissance 180 et 240)

- Le firmware doit être au minimum en version : 3.2.2.

### Remarque

- Un terminal de paiement par carte de crédit peut être exploité parallèlement à eCarUp afin de garantir une flexibilité maximale. Kreisel Electric se tient volontiers à votre disposition pour de plus amples informations. 

### Intégration

- Connectez-vous à la plateforme Kreisel (Kreisel Cloud) avec vos données de connexion

- La borne de recharge est attribuée par Kreisel Electric

### Étape 1

- Sélectionnez la borne de recharge qui doit communiquer avec le backend eCarUp. 

![Kreisel Electric – Illustration 2](/img/ocpp-ladestationen-kreisel-electric/02.png)

### Étape 2

- Allez dans les Settings et saisissez l'URL comme suit

- Backend URL: wss://[www.ecarup.com/api/Ocpp16](http://www.ecarup.com/api/Ocpp16)

- Backend Charger ID

Exemple : wss://[www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508](http://www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508)

Uniquement l'ID après OCPP16/XXXXXXX

![Kreisel Electric – Illustration 3](/img/ocpp-ladestationen-kreisel-electric/03.png)

### Étape 3

- Cliquez sur "Apply Configruation" ; la station devrait ensuite communiquer avec le compte eCarUp souhaité. 

## Paramètres avancés via l'outil de maintenance d'eCarUp !

L'intervalle de transmission des Meter Values peut varier d'une station à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez modifier ce paramètre comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Kreisel Electric – Illustration 4](/img/ocpp-ladestationen-kreisel-electric/04.png)

![Kreisel Electric – Illustration 5](/img/ocpp-ladestationen-kreisel-electric/05.png)
