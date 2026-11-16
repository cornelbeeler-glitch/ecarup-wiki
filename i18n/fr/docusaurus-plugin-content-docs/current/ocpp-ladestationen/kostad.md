---
title: 'Kostad'
slug: '/ocpp-ladestationen/kostad'
description: 'Guide d''intégration au backend'
sidebar_label: 'Kostad'
---
![Kostad – Illustration 1](/img/ocpp-ladestationen-kostad/01.png)

[Unnity20 - DC Wallbox](https://www.kostad.at/)

![Kostad – Illustration 2](/img/ocpp-ladestationen-kostad/02.jpg)

[Unity50](https://www.kostad.at/)

![Kostad – Illustration 3](/img/ocpp-ladestationen-kostad/03.jpg)

[Unity20 - Mobile Charger](https://www.kostad.at/)

## Guide d'intégration au backend

Les stations Kostad peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même, en toute simplicité, les conditions d'utilisation de vos stations (prix, utilisateurs, horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de stations](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

### Intégration de stations OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » ("Stationen").

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la station souhaitée et collez-y l'URL copiée.

## Intégration de la Kostad DC-Wallbox (CPC20)

1.  Connectez-vous au menu de service. Le nom d'utilisateur et le mot de passe figurent dans le mode d'emploi. 

2.  ⚠️ Important : la station doit pouvoir communiquer avec Internet (LAN, WLAN, etc.)

![Kostad – Illustration 4](/img/ocpp-ladestationen-kostad/04.png)

### Configuration de la station

3\. Sélectionner OCPP :

4\. Hostname : www.ecarup.com/ 

5\. HTTPString : api/OCPP/................/

6. Veuillez vérifier encore une fois : aucun espace nulle part et un / à la fin 

7\. Appliquer les données de connexion ; si la connexion est établie, le statut est « Vert » ("Grün").

![Kostad – Illustration 5](/img/ocpp-ladestationen-kostad/05.png)

<div className="row">
<div className="col col--8">

Veuillez également tenir compte du paramètre suivant : « Paramètres exploitant 1 » ("Betreibereinstellungen 1")

- Si l'authentification doit se faire via eCarUp (app ou carte RFID), vous devez passer sur OCPP sous
    Authentification ("Authentifikation").

</div>
<div className="col col--4 text--center">

![Kostad – Illustration 6](/img/ocpp-ladestationen-kostad/06.png)

</div>
</div>

## Kostad DC Unity 50, 90, 120, 150, 180, 300 & 360 kW

![Kostad – Illustration 7](/img/ocpp-ladestationen-kostad/07.png)

L'intégration de ces installations est effectuée par :

 Kostad Schweiz AG. 

+41(0) 52 625 50 50

[www.kostad.ch](https://kostad.ch/)

## office@kostad.ch

![Kostad – Illustration 8](/img/ocpp-ladestationen-kostad/08.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une station à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'app. 

Vous pouvez modifier ce réglage comme suit :

1.  Get Configuration (pour lire la valeur programmée)

2.  Change Configuration (pour remplacer la valeur)

![Kostad – Illustration 9](/img/ocpp-ladestationen-kostad/09.png)

![Kostad – Illustration 10](/img/ocpp-ladestationen-kostad/10.png)
