---
title: 'Hager'
slug: '/ocpp-ladestationen/hager'
description: 'Guide d''intégration au backend'
sidebar_label: 'Hager'
---
![Hager – illustration 1](/img/ocpp-ladestationen-hager/01.png)

[Hager witty plus & pro](https://hager.com/de-ch/katalog/ladestation-fuer-elektrofahrzeuge-evcs/ladestationen?_gl=1*qlklly*_up*MQ..*_ga*MTIzODc0MzgyNC4xNzUxMjY5MTg3*_ga_PV0S9027V6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw*_ga_9H5STC0VW6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw)

![Hager – illustration 2](/img/ocpp-ladestationen-hager/02.png)

[Hager witty park 2](https://hager.com/de-ch/katalog/ladestation-fuer-elektrofahrzeuge-evcs/ladestationen?_gl=1*qlklly*_up*MQ..*_ga*MTIzODc0MzgyNC4xNzUxMjY5MTg3*_ga_PV0S9027V6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw*_ga_9H5STC0VW6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw)

![Hager – illustration 3](/img/ocpp-ladestationen-hager/03.png)

[Hager witty share](https://hager.com/de-ch/katalog/ladestation-fuer-elektrofahrzeuge-evcs/ladestationen?_gl=1*qlklly*_up*MQ..*_ga*MTIzODc0MzgyNC4xNzUxMjY5MTg3*_ga_PV0S9027V6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw*_ga_9H5STC0VW6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw)

## Guide d'intégration au backend

Les bornes Hager peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Conditions préalables pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet "Bornes" ("Stationen").

4.  Sélectionnez l'onglet "OCPP".

5.  Copiez l'URL dans le presse-papiers.

    1.  Lien ws sans Basic Auth : testé et fonctionnel

    2.  wss sans Basic Auth : testé et fonctionnel

    3.  wss avec Basic Auth : testé et fonctionnel

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration de la Hager witty park 2

- Version de firmware testée : V1.1.0.11

1.  Connectez-vous à la borne Hager via LAN ou WLAN (vous trouverez les détails de la connexion dans les instructions d'installation)

2.  Masque de connexion (vous trouverez également les données de connexion nécessaires dans les instructions d'installation.)

3.  Comme pour l'intégration de la Hager witty pro, vous pouvez saisir votre URL eCarUp de la même manière. [Lien](/ocpp-ladestationen/hager#intégration-de-la-hager-witty-pro)

4\. Si vous souhaitez personnaliser l'écran, vous pouvez le faire sous "Bornes de recharge" ("Ladestationen"), puis sous Écran (Bildschirm). 

![Hager – illustration 4](/img/ocpp-ladestationen-hager/04.png)

5. Astuce : vous pouvez faire afficher les codes QR directement via OCPP sur l'écran de la borne. 

- À l'aide de ChangeConfiguration dans l'outil de maintenance, vous pouvez envoyer la commande suivante :

\[2, "b1a70001-6e37-b9a9-d242-a5f2e0ab6860", "ChangeConfiguration", &#123;"key":"HagerQrCodeURL1","value":"[https://admin.ecarup.com/instant-payment?serial=I3M264mupkyqFp4fu21QTqZeY](https://admin.ecarup.com/instant-payment?serial=I3M264mupkyqFp4fu21QTqZeY)"&#125;\]

- Pour savoir comment obtenir l'URL, consultez cette page : [Lien](/stationsbetreiber/qr-code)

- Tout sur l'outil de maintenance ici : [Lien](/funktionen/wartung)

Exemple :

![Hager – illustration 5](/img/ocpp-ladestationen-hager/05.jpg)

![Hager – illustration 6](/img/ocpp-ladestationen-hager/06.png)

## Intégration de la Hager witty pro

- XVL122SCH et XVL122CCH

- Version de firmware testée : V1.1.5.3

1.  Connectez-vous à la borne Hager via LAN ou WLAN (vous trouverez les détails de la connexion dans les instructions d'installation)

2.  Masque de connexion (vous trouverez également les données de connexion nécessaires dans les instructions d'installation.).

3.  Sous le point de menu Charging Station, vous pouvez configurer la connexion souhaitée. 

4\. Sous Access Management, vous pouvez ajouter le Charge Point Operator. 

5\. Serveur OCPP (OCPP-Server) : l'URL de votre compte, p. ex.    wss://www.ecarup.com/api/Ocpp16/D037xxxxxxxxxx

6\. Le ChargePoint-ID peut conserver les valeurs par défaut.

 7\. Type d'authentification (Authentifizierungstyp) sur Aucun (Keine).

8\. Enregistrer et redémarrer (Speichern und Neustarten)

![Hager – illustration 7](/img/ocpp-ladestationen-hager/07.png)

![Hager – illustration 8](/img/ocpp-ladestationen-hager/08.png)

Optionnel : wss + Basic Auth. 

![Hager – illustration 9](/img/ocpp-ladestationen-hager/09.png)

## Gestionnaire de charge Hager

XEM 520

Important : la version de firmware LLM\_2023\_098 doit être installée. 

1.  Connectez-vous au gestionnaire de charge

2.  Cliquez sur le point de menu Bornes de recharge (Ladestationen)

3.  Recherchez la borne de recharge et configurez l'affectation des phases

4.  Accédez à Borne de recharge (Ladestation), activez Exploitant de borne CPO (Ladestationsbetreiber CPO), puis cliquez sur Paramètres (Einstellungen).

![Hager – illustration 10](/img/ocpp-ladestationen-hager/10.png)

5\. Sélectionnez eCarUp dans la liste et ajoutez votre ID eCarUp. (pas l'URL complète)

p. ex. (ws://www.ecarup.com/api/Ocpp16/) D037xxxxxxxxxx

puis cliquez également sur Suivant. 

![Hager – illustration 11](/img/ocpp-ladestationen-hager/11.png)

6. Ajoutez le numéro de série de la borne de recharge dans le champ OCPP ID. 

7\. Cliquez maintenant sur Se connecter au serveur CPO (Verbinden zum CPO Server).

8\. La borne redémarre. 

![Hager – illustration 12](/img/ocpp-ladestationen-hager/12.png)

Contrôle final

![Hager – illustration 13](/img/ocpp-ladestationen-hager/13.png)

## Intégration de la Hager witty plus

<div className="row">
<div className="col col--6">

- XVL122S et XVL122C

- Version de firmware testée : V1.1.1.6

- Installez pour cela l'application Hager Charge

</div>
<div className="col col--6 text--center">

![Hager – illustration 14](/img/ocpp-ladestationen-hager/14.png)

</div>
</div>

1.  ### Activer le couplage

![Hager – illustration 15](/img/ocpp-ladestationen-hager/15.png)

### 2\. Ajouter la borne

![Hager – illustration 16](/img/ocpp-ladestationen-hager/16.png)

Ajoutez un réseau à la borne de recharge

### 3.

![Hager – illustration 17](/img/ocpp-ladestationen-hager/17.png)

### 4.

![Hager – illustration 18](/img/ocpp-ladestationen-hager/18.png)

### 5.

![Hager – illustration 19](/img/ocpp-ladestationen-hager/19.png)

### 6.

![Hager – illustration 20](/img/ocpp-ladestationen-hager/20.png)

### 7.

![Hager – illustration 21](/img/ocpp-ladestationen-hager/21.png)

- Collez votre URL eCarUp dans le champ d'adresse. 

- OCPP ID : saisissez ici le numéro de série de la borne. 

- Enregistrez. 

## Intégration de la Hager witty share

- XEV1R22T2

- n'est plus commercialisée par Hager. 

<Video src="g2omgn1jWo0" title="Vidéo YouTube, guide d'intégration Hager dans le backend eCarUp" />

Guide rapide d'intégration d'une borne Hager dans le backend eCarUp

1.  Connectez-vous à la borne Hager via LAN ou WLAN (vous trouverez les détails de la connexion dans les instructions d'installation)

2.  Masque de connexion (vous trouverez également les données de connexion nécessaires dans les instructions d'installation.).

- Nom d'utilisateur : admin

- MDP : 1234

3.  Sous Configuration (Konfiguration), vous pouvez effectuer les réglages LAN et/ou WLAN.

4.  Sous Protocole (Protokoll), réglez le type sur OCPP et le mode d'autorisation (Autorisierungsmodus) sur OCPP complet (OCPP Voll). 

5.  Serveur OCPP (OCPP-Server) : l'URL de votre compte, p. ex. ws://www.ecarup.com/api/Ocpp16/D037xxxxxxxxxx

6.  Le ChargePoint-ID peut conserver les valeurs par défaut. 

7.  Type d'authentification (Authentifizierungstyp) sur Aucun (Keine).

8.  Enregistrer et redémarrer (Speichern und Neustarten)

### 2\. Étape : se connecter

![Hager – illustration 22](/img/ocpp-ladestationen-hager/22.png)

### 3\. Étape : configurer les paramètres WLAN et LAN

![Hager – illustration 23](/img/ocpp-ladestationen-hager/23.png)

### 4.-7. Étape : saisir et adapter les valeurs

![Hager – illustration 24](/img/ocpp-ladestationen-hager/24.png)

### 8\. Étape : enregistrer et redémarrer.

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire la valeur programmée)

2.  Change Configuration (pour écraser la valeur)

![Hager – illustration 25](/img/ocpp-ladestationen-hager/25.png)

![Hager – illustration 26](/img/ocpp-ladestationen-hager/26.png)
