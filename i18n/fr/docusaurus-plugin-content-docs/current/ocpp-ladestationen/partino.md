---
title: 'Partino'
slug: '/ocpp-ladestationen/partino'
description: 'Guide d''intégration au backend'
sidebar_label: 'Partino'
---
![Partino – Illustration 1](/img/ocpp-ladestationen-partino/01.jpg)

[Partino Vool](https://www.partino.ch/de/angebot/e-ladestationen/vool/)

![Partino – Illustration 2](/img/ocpp-ladestationen-partino/02.png)

[Partino DC30](https://www.partino.ch/de/angebot/e-ladestationen/partino-x-ecotap/)

![Partino – Illustration 3](/img/ocpp-ladestationen-partino/03.png)

[Partino Ecotap](https://www.partino.ch/de/angebot/e-ladestationen/partino-x-ecotap/)

## Guide d'intégration au backend

Les bornes Partino et Ecotap peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal) 

- Découvrez ici nos [fonctions Premium](/funktionen)


### Intégration de bornes OCPP

1.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

2.  Dans le menu de gauche, cliquez sur l'onglet « Stations » (Stationen).

3.  Sélectionnez l'onglet « OCPP ».

4.  Copiez l'URL dans le presse-papiers.

5.  Collez l'URL dans le formulaire de demande mentionné ci-dessous. 


## Partino Vool

- Version de firmware testée v1.9.16 


<Video src="pRN2F2iiNzk" title="Vidéo YouTube, guide d'intégration de la borne de recharge Partino /Vool dans le backend eCarUp" />

### Vidéo du guide d'intégration des bornes de recharge Partino Vool dans le backend eCarUp

- Pour cela, installez l'application Vool


![Partino – Illustration 4](/img/ocpp-ladestationen-partino/04.png)

1.  Connecter la borne via Bluetooth


![Partino – Illustration 5](/img/ocpp-ladestationen-partino/05.png)

2.



![Partino – Illustration 6](/img/ocpp-ladestationen-partino/06.png)

3.. Configurer le chargeur



![Partino – Illustration 7](/img/ocpp-ladestationen-partino/07.png)

4\. Définir la configuration de base

![Partino – Illustration 8](/img/ocpp-ladestationen-partino/08.png)

5\. Cliquez sur « Afficher les paramètres avancés » (Erweiterte Einstellungen anzeigen)

![Partino – Illustration 9](/img/ocpp-ladestationen-partino/09.png)

6\. Ajoutez votre URL eCarUp et enregistrez

![Partino – Illustration 10](/img/ocpp-ladestationen-partino/10.png)

### Transmettre l'URL eCarUp à Partino (en cas d'utilisation du Floatbrige)

Pour intégrer les bornes Partino (en cas d'utilisation du Floatbrige) dans notre backend, vous avez pour le moment encore besoin de l'assistance de la société [Partino](https://www.partino.ch/de/). Partino se charge de la dernière étape de configuration et attribue vos points de recharge au bon compte eCarUp (via l'URL OCPP) que vous avez reçue lors de la préparation. Pour cela, transmettez à Partino l'URL ainsi que les numéros de série de la borne de recharge au moyen du formulaire ci-dessous. 

[Formulaire de demande Partino](https://www.partino.ch/wp-content/uploads/Partino_Anmeldeformular_eCarUp.pdf).

![Partino – Illustration 11](/img/ocpp-ladestationen-partino/11.png)

## Ecotap

- Version de firmware testée 506.32R.33


### Transmettre l'URL OCPP à Partino

Pour intégrer les bornes Ecotap dans notre backend, vous avez pour le moment encore besoin de l'assistance de la société [Partino](https://www.partino.ch/de/). Partino se charge de la dernière étape de configuration et attribue vos points de recharge au bon compte eCarUp (via l'URL OCPP) que vous avez reçue lors de la préparation. Pour cela, transmettez à Partino l'URL ainsi que les numéros de série de la borne de recharge au moyen du formulaire ci-dessous. 

[Formulaire de demande Partino](https://www.partino.ch/wp-content/uploads/Partino_Anmeldeformular_eCarUp.pdf).

## Paramètre avancé via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 



Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![Partino – Illustration 12](/img/ocpp-ladestationen-partino/12.png)

![Partino – Illustration 13](/img/ocpp-ladestationen-partino/13.png)
