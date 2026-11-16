---
title: 'ABL'
slug: '/ocpp-ladestationen/abl'
description: 'Guide d''intégration au backend'
sidebar_label: 'ABL'
---
![ABL – Illustration 1](/img/ocpp-ladestationen-abl/01.jpg)

[ABL Wallbox](https://www.ablmobility.de/de/)

![ABL – Illustration 2](/img/ocpp-ladestationen-abl/02.png)

[ABL Supernova](https://www.ablmobility.de/de/)

## Guide d'intégration au backend

Les bornes ABL peuvent être intégrées en quelques étapes au système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Conditions préalables pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)


### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Bornes » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.


## Intégration de l'ABL Wallbox

### ⚠️ Remarques importantes pour l'intégration des bornes de recharge ABL

- Pour démarrer la session de recharge, un véhicule doit impérativement être branché en premier. Sinon, aucune session de recharge n'est lancée.

- Si la recharge est démarrée avec la carte RFID, elle ne peut être arrêtée que depuis le véhicule (p. ex. en déverrouillant le câble) ou via l'app eCarUp. Présenter à nouveau la carte RFID ne met pas fin à la session de recharge.


### Accéder à la borne

- Dès que vous êtes connecté à la borne, saisissez l'IP suivante dans le navigateur : [http://169.254](/).1.1:8300/

- Vérifiez dans les données système que la version actuelle du logiciel est installée


### Configuration

- Passer la version OCPP à 1.6

- Coller l'URL complète issue du compte eCarUp

- Renommer la ChargeBox ID. Attention : pas d'espaces. 

- Enregistrer et redémarrer la borne.


![ABL – Illustration 3](/img/ocpp-ladestationen-abl/03.png)

### Important

La Chargebox ID ne doit pas comporter plus de 20 caractères. 

![ABL – Illustration 4](/img/ocpp-ladestationen-abl/04.png)

### Important

Veuillez désactiver la fonction Auto-Charge

![ABL – Illustration 5](/img/ocpp-ladestationen-abl/05.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'app. 



Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire la valeur programmée)

2.  Change Configuration (pour écraser la valeur) 




![ABL – Illustration 6](/img/ocpp-ladestationen-abl/06.png)

![ABL – Illustration 7](/img/ocpp-ladestationen-abl/07.png)
