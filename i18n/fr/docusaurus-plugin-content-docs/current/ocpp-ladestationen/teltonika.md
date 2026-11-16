---
title: 'Teltonika'
slug: '/ocpp-ladestationen/teltonika'
description: 'Guide d''intégration au backend'
sidebar_label: 'Teltonika'
---
<div className="row">
<div className="col col--8">

## Guide d'intégration au backend

Les bornes Teltonika peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même, en toute simplicité, les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![Teltonika – illustration 1](/img/ocpp-ladestationen-teltonika/01.jpg)

</div>
</div>

[TeltoCharge](https://teltonika-energy.com/)

### Intégration des bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Bornes » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez l'URL copiée.

## Intégration de la Telto-Charge

### Étapes préparatoires pour l'intégration de la Teltonika

1.  Installez l'application Teltonika Energy sur votre téléphone

2.  Connectez maintenant votre borne de recharge à l'application (configuration via hotspot ou Internet)

3.  Dès que la borne de recharge est visible dans l'application, procédez aux réglages suivants. 

### ⚠️ Important

1.  La borne a été testée avec succès avec la version de firmware v1.8.11

2.  La version testée de l'application Teltonika est la 1.9.0

3.  Actuellement, l'affichage de la puissance dans l'application eCarUp fluctue fortement. Une solution est en cours de recherche. 

![Teltonika – illustration 2](/img/ocpp-ladestationen-teltonika/02.png)

1.  Sélectionner la borne connectée

![Teltonika – illustration 3](/img/ocpp-ladestationen-teltonika/03.png)

2\. Cliquer sur la roue dentée en haut à droite

![Teltonika – illustration 4](/img/ocpp-ladestationen-teltonika/04.png)

3\. Sélectionner Connectivity

![Teltonika – illustration 5](/img/ocpp-ladestationen-teltonika/05.png)

4\. Choisir OCPP

![Teltonika – illustration 6](/img/ocpp-ladestationen-teltonika/06.png)

5\. Ajouter l'URL OCPP

![Teltonika – illustration 7](/img/ocpp-ladestationen-teltonika/07.png)

Important :

- URL OCPP provenant de votre compte eCarUp

- Ajouter un / à la fin de l'URL. 

- Enregistrer

## Réglage avancé via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez modifier ce réglage comme suit :

1.  Get Configuration (pour lire la valeur programmée)

2.  Change Configuration (pour écraser la valeur)

![Teltonika – illustration 8](/img/ocpp-ladestationen-teltonika/08.png)

![Teltonika – illustration 9](/img/ocpp-ladestationen-teltonika/09.png)
