---
title: 'Webasto Live'
slug: '/ocpp-ladestationen/webasto'
description: 'Guide d''intégration au backend'
sidebar_label: 'Webasto Live'
---
<div className="row">
<div className="col col--6">

## Guide d'intégration au backend

Les bornes Webasto peuvent être intégrées en quelques étapes au système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Conditions requises pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--6 text--center">

![Webasto Live – Illustration 1](/img/ocpp-ladestationen-webasto/01.jpg)

</div>
</div>

[Webasto Wallbox](https://www.webasto.com/de-de.html)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les identifiants de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration de la Webasto Live

<Video src="qm5e3OEWeP4" title="Vidéo YouTube, intégrer une borne de recharge Webasto au backend eCarUp" />

Se connecter à la borne via Ethernet

1.  L'ordinateur portable doit avoir l'adresse IP 192.168.0.150 et le masque de sous-réseau 255.255.255.0.

2.  Ouvrez le navigateur de votre ordinateur portable et saisissez l'URL suivante dans la barre d'adresse : 192.168.0.100

3.  Les identifiants de connexion figurent dans le manuel d'utilisation fourni (seul le mot de passe est nécessaire) 

### Interface web

### Backend

- Sélectionner le type de connexion souhaité

- Le ChargePoint ID peut être modifié, mais la borne apparaît toujours dans le portail eCarUp avec son numéro de série

- Sélectionner OCPP-j 1.6

- Coller l'URL complète de votre compte dans le champ Websocket.

- Enregistrer et redémarrer

![Webasto Live – Illustration 2](/img/ocpp-ladestationen-webasto/02.png)

### Compteur d'énergie

- Dans les paramètres du compteur d'énergie, l'intervalle d'envoi de la puissance peut être réduit. Il détermine à quel intervalle la borne nous transmet les données de consommation (kW). 

![Webasto Live – Illustration 3](/img/ocpp-ladestationen-webasto/03.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30-60s. C'est la seule façon de calculer et d'afficher plus précisément la puissance de recharge actuelle dans l'app. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Webasto Live – Illustration 4](/img/ocpp-ladestationen-webasto/04.png)

![Webasto Live – Illustration 5](/img/ocpp-ladestationen-webasto/05.png)
