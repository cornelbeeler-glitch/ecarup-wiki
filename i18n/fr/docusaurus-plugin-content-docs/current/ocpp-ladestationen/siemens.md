---
title: 'Siemens'
slug: '/ocpp-ladestationen/siemens'
description: 'Guide d''intégration au backend'
sidebar_label: 'Siemens'
---
![Siemens – illustration 1](/img/ocpp-ladestationen-siemens/01.jpg)

[SiCharge CC](/ocpp-ladestationen/siemens#sicharge-cc-ac22)

![Siemens – illustration 2](/img/ocpp-ladestationen-siemens/02.png)

[Siemens VersiCharge](/ocpp-ladestationen/siemens#versiecharge-ac-22kw)

![Siemens – illustration 3](/img/ocpp-ladestationen-siemens/03.png)

[Siemens SICHARGE D](/ocpp-ladestationen/siemens#sicharge-d)

## Guide d'intégration au backend

Les bornes Siemens peuvent être intégrées en quelques étapes au système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires de disponibilité, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

### Intégration des bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Bornes » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration des bornes de recharge Siemens

<Video src="zB1Yqo63b6I" title="Vidéo YouTube, intégration Siemens dans le backend eCarUp" />

## SiCharge CC AC22

### Intégration de la SICharge

Se connecter à la borne via Ethernet

1.  L'ordinateur portable doit avoir l'adresse IP 192.168.32.10 et le masque de sous-réseau 255.255.255.0.

2.  Ouvrez le navigateur de votre ordinateur portable et saisissez l'URL suivante dans la barre d'adresse : 192.168.32.1

3.  Le nom d'utilisateur est "admin" et le mot de passe est le numéro de série de l'installation

### Interface web

1.  Server Profile sur Production

2.  Protocol Version OCPP 1.6J

3.  Coller l'URL du compte

4.  Sous User Management, dans Authentication, l'option OCPP (managed) doit être cochée pour la Whitelist.

5.  Enregistrer et redémarrer

![Siemens – illustration 4](/img/ocpp-ladestationen-siemens/04.png)

![Siemens – illustration 5](/img/ocpp-ladestationen-siemens/05.png)

### Connexion via carte SIM

Siemens livre une carte SIM M2M avec la borne de recharge. 

Les réglages suivants doivent encore être effectués :

- Authentication Method sur PAP

- Service Mode sur Auto

![Siemens – illustration 6](/img/ocpp-ladestationen-siemens/06.png)

## VersieCharge AC 22kW

### Étapes préparatoires à l'intégration de la VersieCharge

1.  Installez l'application Sifinity Go sur votre téléphone

2.  Connectez ensuite votre borne de recharge à l'application (configuration via Bluetooth)

Version de firmware testée : V2.132.29

[App Store](https://apps.apple.com/us/app/sifinity-go/id989742892?l=de)

[Google Play](https://play.google.com/store/apps/details?id=com.siemens.VersiChargeSG&hl=de&gl=US)

![Siemens – illustration 7](/img/ocpp-ladestationen-siemens/07.png)

<div className="row">
<div className="col col--6 text--center">

![Siemens – illustration 8](/img/ocpp-ladestationen-siemens/08.png)

</div>
<div className="col col--6 text--center">

![Siemens – illustration 9](/img/ocpp-ladestationen-siemens/09.png)

</div>
</div>

3\. L'exploitant de la borne doit ensuite envoyer l'URL ainsi que le numéro de série de la borne à l'adresse e-mail suivante pour l'intégration :

[si.emobility.ch@siemens.com](mailto:si.emobility.ch@siemens.com). 

Siemens vous contactera rapidement pour mener l'intégration à bien. 

## SiCharge D

Pour l'intégration de la SiCharge D, l'URL et le numéro de série de la borne doivent être envoyés à l'adresse e-mail suivante : 

[si.emobility.ch@siemens.com](mailto:si.emobility.ch@siemens.com)

Siemens vous contactera rapidement pour mener l'intégration à bien. 

![Siemens – illustration 10](/img/ocpp-ladestationen-siemens/10.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule façon de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Siemens – illustration 11](/img/ocpp-ladestationen-siemens/11.png)

![Siemens – illustration 12](/img/ocpp-ladestationen-siemens/12.png)
