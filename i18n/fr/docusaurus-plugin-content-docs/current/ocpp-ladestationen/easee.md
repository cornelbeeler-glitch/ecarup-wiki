---
title: 'easee'
slug: '/ocpp-ladestationen/easee'
description: 'Guide d''intégration backend'
sidebar_label: 'easee'
---
<div className="row">
<div className="col col--8">

## Guide d'intégration backend

Les bornes easee peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Conditions préalables pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![easee – Illustration 1](/img/ocpp-ladestationen-easee/01.jpg)

</div>
</div>

[easee](https://easee.com/de/)

### Intégration de bornes OCPP

Informations générales sur la [mise en service d'une borne OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station) 

Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

1.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

2.  Dans le menu à gauche, cliquez sur l'onglet « Stations » (Stationen).

3.  Sélectionnez l'onglet « OCPP ».

4.  Copiez l'URL dans le presse-papiers. 

    1.  Lien ws sans Basic Auth : testé et fonctionnel

    2.  wss sans Basic Auth : testé et fonctionnel

    3.  wss avec Basic Auth : non testé

5.  Rendez-vous sur l'interface web de la borne souhaitée et collez l'URL copiée.

## Intégration de la borne de recharge easee

### Important :

- La easee Charge Max ne peut être activée avec eCarUp qu'au moyen de la carte RFID. L'activation via l'application n'est pas possible en raison d'une limitation technique. 

### La borne easee peut en outre transmettre les valeurs au quart d'heure à smart-me. Pour en savoir plus, consultez Importation des données au quart d'heure.

<Video src="wg6LeZTT1NQ" title="Vidéo YouTube, guide d'intégration des bornes de recharge easee dans le backend eCarUp" />

### Vidéo : guide d'intégration des bornes de recharge easee dans le backend eCarUp

## Intégration dans le portail eCarUp

### Portail web d'easee

Au moyen du [LIEN](https://portal.easee.com/apps/any/open?action=17&item=%7Bovar%3A+2%2C+oid%3A+15%7D) suivant, vous pouvez saisir directement l'URL eCarUp dans le portail web d'easee. 

1.  Ouvrez le lien dans le navigateur

2.  Sélectionnez le site souhaité

3.  Si l'exploitant technique n'est pas encore réglé sur smart-me/eCarUp, veuillez confirmer par OUI. 

4.  Sélectionnez le robot de recharge et modifiez-le

5.  Vous pouvez saisir ici l'URL OCPP de votre compte eCarUp. 

6.  Enregistrez.

7.  Après environ 15 minutes, la borne apparaît automatiquement dans le portail eCarUp.

Remarque : les variantes suivantes fonctionnent.

- ws://www.ecarup.com/api/Ocpp16/4FEF6CFXXXXXX

- wss://www.ecarup.com/api/Ocpp16/4FEF6CFXXXXXXX

- 4B49FXXXXXXX

![easee – Illustration 2](/img/ocpp-ladestationen-easee/02.png)

![easee – Illustration 3](/img/ocpp-ladestationen-easee/03.png)

![easee – Illustration 4](/img/ocpp-ladestationen-easee/04.png)

### Application easee

1.  Scannez le code QR avec votre téléphone

2.  Vous êtes redirigé directement vers votre compte easee. 

3.  Là aussi, vous pouvez sélectionner le site souhaité

4.  Ajoutez l'URL eCarUp. 

5.  Enregistrez. 

6.  Après environ 15 minutes, la borne apparaît automatiquement dans le portail eCarUp.

Remarque : les variantes suivantes fonctionnent.

- ws://www.ecarup.com/api/Ocpp16/4FEF6CFXXXXXX

- wss://www.ecarup.com/api/Ocpp16/4FEF6CFXXXXXXX

- 4B49FXXXXXXX

<div className="row">
<div className="col col--6 text--center">

![easee – Illustration 5](/img/ocpp-ladestationen-easee/05.png)

</div>
<div className="col col--6 text--center">

![easee – Illustration 6](/img/ocpp-ladestationen-easee/06.jpg)

</div>
</div>

### Liens

- [Enregistrement du webinaire sur les bornes de recharge easee dans le backend eCarUp](https://web.ecarup.com/webinar-easee-ladestationen-mit-backend-von-ecarup/)

- [Fonctions de la wallbox easee dans le backend eCarUp](https://web.ecarup.com/backend/easee-backend/)

- [Importation des données au quart d'heure](/funktionen/15-minuten-datenimport) 

- [Code QR pour l'URL OCPP](https://drive.google.com/file/d/1G5iU7GsE51cgZ9RZixxFC0FLfuJDfGT9/view?usp=sharing)

## Sans authentification + recharge hors ligne

<div className="row">
<div className="col col--8">

Connectez la borne easee à eCarUp comme d'habitude via l'installation. (Étapes 1 à 7)

Dès que la borne est visible dans eCarUp, rendez-vous dans l'outil de maintenance. ([Lien](/funktionen/wartung))

Sélectionnez-y la borne souhaitée, cliquez sur les 3 points et choisissez « Change Configuration »

</div>
<div className="col col--4 text--center">

![easee – Illustration 7](/img/ocpp-ladestationen-easee/07.png)

</div>
</div>

1.  Sélectionnez « Commande personnalisée » (Benutzerdefinierten Befehl)

2.  Custom Key = freecharging

3.  Value = true

4.  Set

Dans ce contexte, nous devons d'abord indiquer à la borne qu'elle peut autoriser la recharge libre.

![easee – Illustration 8](/img/ocpp-ladestationen-easee/08.png)

1.  Cliquez à nouveau sur « Change Configuration »

2.   « Commande personnalisée » (Benutzerdefinierten Befehl)

3.  Custom Key = rfidtagfreecharging

4.  Value = XXXX (un jeton RFID que vous attribuez à un utilisateur dans eCarUp)

5.  Set

Dans ce contexte, nous devons indiquer à la borne quel jeton RFID doit être transmis dès que la recharge démarre. Avantage : la session est enregistrée dans eCarUp. 

![easee – Illustration 9](/img/ocpp-ladestationen-easee/09.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de téléversement des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![easee – Illustration 10](/img/ocpp-ladestationen-easee/10.png)

![easee – Illustration 11](/img/ocpp-ladestationen-easee/11.png)
