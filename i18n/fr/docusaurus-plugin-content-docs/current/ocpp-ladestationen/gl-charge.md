---
title: 'GL Charge'
slug: '/ocpp-ladestationen/gl-charge'
description: 'Guide d''intégration au backend'
sidebar_label: 'GL Charge'
---
![GL Charge – Figure 1](/img/ocpp-ladestationen-gl-charge/01.png)

[LiteBox](https://iskraemeco-emobility.com/)

![GL Charge – Figure 2](/img/ocpp-ladestationen-gl-charge/02.png)

[Public Box](https://iskraemeco-emobility.com/)

![GL Charge – Figure 3](/img/ocpp-ladestationen-gl-charge/03.png)

[Platinum](https://iskraemeco-emobility.com/)

## Guide d'intégration au backend

Les bornes GL Charge peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal) 

- Découvrez ici nos [fonctions Premium](/funktionen)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez l'URL copiée.

## LiteBox

Version du firmware : A0-GL-V2.0.5-b4 

- Installez l'application CP Tool

- Version testée de l'application : V. 1.12.2

![GL Charge – Figure 4](/img/ocpp-ladestationen-gl-charge/04.png)

### Étape 1

<div className="row">
<div className="col col--6">

- Dans CP Tool, recherchez la borne de recharge et sélectionnez-la.

- Saisissez le mot de passe (par défaut : 12345678)

- Cliquez sur Enter

</div>
<div className="col col--6 text--center">

![GL Charge – Figure 5](/img/ocpp-ladestationen-gl-charge/05.png)

</div>
</div>

### Étape 2

- Établissez la connexion Internet souhaitée

![GL Charge – Figure 6](/img/ocpp-ladestationen-gl-charge/06.png)

### Étape 3

<div className="row">
<div className="col col--6">

- Server URL : Manual Entry

- URL de votre compte eCarUp

- Charger ID : peut être défini librement

</div>
<div className="col col--6 text--center">

![GL Charge – Figure 7](/img/ocpp-ladestationen-gl-charge/07.png)

</div>
</div>

### Étape 4

<div className="row">
<div className="col col--6">

- Pour terminer, cliquez sur Set.

- Redémarrez la borne.

- La borne devrait maintenant communiquer avec votre compte.

</div>
<div className="col col--6 text--center">

![GL Charge – Figure 8](/img/ocpp-ladestationen-gl-charge/08.png)

</div>
</div>

## PublicBox & GlowBox Platinum

Version du firmware : 0.20/6,1.8,2.8  

### Intégration

Avant de pouvoir configurer la borne de recharge, vous devez avoir accès à l'interface web. 

1.  Connectez un PC à la borne via Ethernet. 

2.  Configurez localement l'adresse suivante sur votre interface réseau :

- IP Address: 192.168.1.3

- Subnet Mask: 255.255.255.0

3.  Ouvrez le navigateur et saisissez l'URL suivante : http://192.168.1.2. 

4.  Connectez-vous à l'interface web comme suit :

- Username: installer

- Mot de passe : installer

![GL Charge – Figure 9](/img/ocpp-ladestationen-gl-charge/09.png)

### OCPP Configuration

1.  Accédez aux OCPP Settings

2.  Saisissez votre URL eCarUp dans le champ OCPP Host :

Exemple : ws://[www.ecarup.com/api/Ocpp16/xxxxxxxxxx](http://www.ecarup.com/api/Ocpp16/xxxxxxxxxx)/numéro de série

⚠️Important : n'oubliez pas d'ajouter / + numéro de série après l'URL. 

3.  Cliquez sur Apply : la borne redémarre. 

![GL Charge – Figure 10](/img/ocpp-ladestationen-gl-charge/10.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire la valeur programmée)

2.  Change Configuration (pour écraser la valeur)

![GL Charge – Figure 11](/img/ocpp-ladestationen-gl-charge/11.png)

![GL Charge – Figure 12](/img/ocpp-ladestationen-gl-charge/12.png)
