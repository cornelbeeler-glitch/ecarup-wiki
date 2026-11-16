---
title: 'Alfen'
slug: '/ocpp-ladestationen/alfen'
description: 'Guide d''intégration au backend'
sidebar_label: 'Alfen'
---
<div className="row">
<div className="col col--8">

## Guide d'intégration au backend

Les bornes Alfen peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires de disponibilité, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![Alfen – illustration 1](/img/ocpp-ladestationen-alfen/01.jpg)

</div>
</div>

[Wallbox Alfen](https://web.ecarup.com/backend/alfen-eve/)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » (« Stationen »).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez l'URL copiée.

## Intégration de la borne de recharge Alfen

- Version 6.5.0-4217 testée

![Alfen – illustration 2](/img/ocpp-ladestationen-alfen/02.png)

![Alfen – illustration 3](/img/ocpp-ladestationen-alfen/03.png)

Sous le point de menu « MeterValue », réglez la valeur sur 30s. 

### ⚠️Important

Si votre Alfen dispose de la version de firmware 7.2.x ou supérieure, vous devez également saisir dans le portail ICU Alfen le prix enregistré dans le portail web eCarUp. Sinon, le code d'erreur 214 s'affiche.

Message d'erreur dans les logs

StatusNotification \[2, "16927", "StatusNotification", &#123;"connectorId":1,"errorCode":"OtherError","info":"Tariffs or currency not or invalidly configured","status":"Faulted","vendorErrorCode":"214"&#125;\]

![Alfen – illustration 4](/img/ocpp-ladestationen-alfen/04.jpg)

![Alfen – illustration 5](/img/ocpp-ladestationen-alfen/05.png)

## Ancienne configuration

### Installation de l'ACE Service Installer

1.  Ouvrez l'ACE Service Installer et connectez-vous 

2.  Sélectionnez la bonne borne dans votre réseau

3.  Assurez-vous que le firmware 3.3.6-2840 au minimum est installé

4.  Dans le ruban de menu en haut, sélectionnez « Connectivity »  

5.  Sous l'onglet « General », réglez le « Backoffice preset » sur « Manually enter  backend settings » 

6.  Réglez la « Connect method » sur « Wired » (pour un fonctionnement via LAN) ou « GPRS » (pour un fonctionnement avec carte SIM) 

7.  Changez le « Protocol » en « OCPP 1.6 »

8.  Passez à l'onglet « Transaction data » et sélectionnez l'option « Abort Unlock » pour « Disconnect action ». Ainsi, la borne libère le câble en cas de coupure de la connexion.

![Alfen – illustration 6](/img/ocpp-ladestationen-alfen/06.png)

![Alfen – illustration 7](/img/ocpp-ladestationen-alfen/07.png)

### Fonctionnement avec connexion LAN / Ethernet

9. Passez à l'onglet « Wired »

10. Dans le champ  « Back office URL », saisissez la première partie de l'URL OCPP issue des préparatifs (ws://www.ecarup.com)

11. Dans le champ « Back office path », saisissez la deuxième partie de l'URL OCPP issue des préparatifs. Votre borne est ainsi directement attribuée à votre compte.

Important : une fois tous les réglages effectués, la borne doit être redémarrée.

![Alfen – illustration 8](/img/ocpp-ladestationen-alfen/08.png)

### Fonctionnement avec carte SIM

12. Activez les « Advanced Settings » et passez à l'onglet « GPRS »

13. Dans le champ  « Back office URL », saisissez la première partie de l'URL OCPP issue des préparatifs (ws://www.ecarup.com)

14\. Dans le champ « Back office path », complétez la deuxième partie de l'URL OCPP issue des préparatifs. La borne est ainsi directement attribuée à votre compte.

15. Dans le champ « APN Name », saisissez votre fournisseur (p. ex. gprs.swisscom.ch). Vous pouvez laisser vides les champs « APN Username » et « APN Passwort ».

Important : une fois tous les réglages effectués, la borne doit être redémarrée.

![Alfen – illustration 9](/img/ocpp-ladestationen-alfen/09.png)

Les bornes de recharge ICU ALFEN sont maintenant enregistrées comme bornes de recharge dans votre compte eCarUp et peuvent être configurées comme décrit dans Configuration dans eCarUp. S'il s'agit d'une ICU Pro avec deux points de recharge, vous pouvez modifier les deux dans le backend après l'installation.

## Réglage avancé via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'app. 

Vous pouvez modifier ce réglage comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Alfen – illustration 10](/img/ocpp-ladestationen-alfen/10.png)

![Alfen – illustration 11](/img/ocpp-ladestationen-alfen/11.png)
