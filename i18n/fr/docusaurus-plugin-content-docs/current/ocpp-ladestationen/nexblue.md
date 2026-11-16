---
title: 'NEXBLUE'
slug: '/ocpp-ladestationen/nexblue'
description: 'Guide d''intégration backend'
sidebar_label: 'NEXBLUE'
---
## Guide d'intégration backend

Les bornes NEXBLUE peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même, en toute simplicité, les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal) 

- Découvrez ici nos [fonctions Premium](/funktionen)


![NEXBLUE – Illustration 1](/img/ocpp-ladestationen-nexblue/01.png)

[NEXBLUE](https://nexblue.com/de)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").


 1. Lien ws sans Basic Auth : testé et fonctionnel

2\. wss sans Basic Auth : testé et fonctionnel

3\. wss avec Basic Auth : testé et fonctionnel

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.


## Intégration de la NEXBLUE

- "firmwareVersion" testée :"03.07.36" 


Intégration via le portail web

<Embed src="https://demo.arcade.software/ZMABeR5jjEkvl6uWrWsV?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" aspect="1.705" title="Wiki - NEXBLUE" />

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30-60s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'app. 



Vous pouvez modifier cela comme suit :

1.  Get Configuration (pour lire la valeur programmée)

2.  Change Configuration (pour écraser la valeur)


![NEXBLUE – Illustration 2](/img/ocpp-ladestationen-nexblue/02.png)

![NEXBLUE – Illustration 3](/img/ocpp-ladestationen-nexblue/03.png)
