---
title: 'Enelion'
slug: '/ocpp-ladestationen/enelion'
description: 'Guide d''intégration au backend'
sidebar_label: 'Enelion'
---
![Enelion – Illustration 1](/img/ocpp-ladestationen-enelion/01.jpg)

[Lumina](https://enelion.com/product/lumina/)

![Enelion – Illustration 2](/img/ocpp-ladestationen-enelion/02.png)

[Vertica](https://enelion.com/product/vertica/)

## Guide d'intégration au backend

Les bornes Enelion peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

### Intégration des bornes OCPP

1.  Assurez-vous que votre borne est installée et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Bornes » (« Stationen »).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Enelion Lumina

### Étapes préparatoires pour l'intégration de la Lumina

1.  Allumez votre Lumina

2.  Prenez un smartphone et ouvrez vos paramètres Wi-Fi

3.  Sélectionnez le point d'accès de la wallbox Lumina\-Wallbox (Enelion-xxxx-xxx)

4.  Ouvrez le navigateur de votre smartphone et saisissez l'adresse IP suivante : 192.168.8.8

5.  La page de configuration Enelion s'ouvre

6.  Saisissez le mot de passe demandé. Vous le trouverez dans le courrier fourni par Enelion 

### Étape 1

<div className="row">
<div className="col col--6">

- Sous Network, la borne peut être connectée par Wi-Fi ou GSM.

</div>
<div className="col col--6 text--center">

![Enelion – Illustration 3](/img/ocpp-ladestationen-enelion/03.png)

</div>
</div>

### Étape 2

- Sous Charger, sélectionnez « Authorization »

![Enelion – Illustration 4](/img/ocpp-ladestationen-enelion/04.png)

### Étape 3

- Désactivez le mode FreeCharge et enregistrez

![Enelion – Illustration 5](/img/ocpp-ladestationen-enelion/05.png)

### Étape 4

- Sous OCPP, sélectionnez « Connection »

![Enelion – Illustration 6](/img/ocpp-ladestationen-enelion/06.png)

### Étape 5

- Activez OCPP Connection

- Sous Connection settings :

1.  Réglez Device sur Master

2.  Connector ID 1

3.  Le Freecharge idTAg ne doit pas être vide. Vous pouvez y enregistrer un badge maître (liste blanche) ou, s'il n'a pas d'importance, procéder comme dans l'exemple de la capture d'écran

4.  Saisissez votre URL eCarUp provenant de votre compte

5.  La Charge Point ID ne doit pas non plus être vide et peut être nommée librement. (Attention : 20 caractères max. et pas d'espace)

\+ Enregistrer et redémarrer

Contrôlez l'état de connexion de la borne dans le tableau de bord. 

<div className="row">
<div className="col col--6 text--center">

![Enelion – Illustration 7](/img/ocpp-ladestationen-enelion/07.png)

</div>
<div className="col col--6 text--center">

![Enelion – Illustration 8](/img/ocpp-ladestationen-enelion/08.png)

</div>
</div>

### Enelion Vertica et Wallbox Duo

- firmwareVersion":"4.4.4

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule manière pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'app. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire la valeur programmée)

2.  Change Configuration (pour écraser la valeur)

![Enelion – Illustration 9](/img/ocpp-ladestationen-enelion/09.png)

![Enelion – Illustration 10](/img/ocpp-ladestationen-enelion/10.png)
