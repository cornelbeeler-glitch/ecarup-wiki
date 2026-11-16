---
title: 'EVTEC'
slug: '/ocpp-ladestationen/evtec'
description: 'Guide d''intégration backend'
sidebar_label: 'EVTEC'
---
![EVTEC – Figure 1](/img/ocpp-ladestationen-evtec/01.jpg)

[Cappuccino & Charge](https://www.evtec.ch/geraete)

![EVTEC – Figure 2](/img/ocpp-ladestationen-evtec/02.jpg)

[Coffee & Charge](https://www.evtec.ch/geraete)

![EVTEC – Figure 3](/img/ocpp-ladestationen-evtec/03.png)

[Espresso & Charge](https://www.evtec.ch/geraete)

## Guide d'intégration backend

Les stations EVTEC peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos stations (prix, utilisateurs, horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de stations](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

### Intégration de stations OCPP

Informations générales sur la [mise en service d'une station OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station) 

Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

1.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

2.  Dans le menu de gauche, cliquez sur l'onglet « Stations » (« Stationen »).

3.  Sélectionnez l'onglet « OCPP ».

4.  Copiez l'URL dans le presse-papiers. 

    1.  Lien ws sans Basic Auth : testé et fonctionnel

    2.  wss sans Basic Auth : non testé

    3.  wss avec Basic Auth : non testé

5.  Accédez à l'interface web de la station souhaitée et collez-y l'URL copiée.

## Intégration dans le portail eCarUp

## Remarque

<div className="row">
<div className="col col--8">

- Un terminal de paiement par carte de crédit peut être exploité parallèlement à eCarUp afin de garantir une flexibilité maximale. Pour de plus amples informations, EVTEC se tient volontiers à votre disposition.

1.  Adapter les paramètres IP de la station EVTEC au réseau IP du gestionnaire de la station (sur l'appareil).

2.  Se connecter à la station EVTEC avec un PC du même réseau (via l'adresse IP définie ci-dessus). Voir la capture d'écran avec l'exemple 192.168.10.20. Appuyer ensuite sur le bouton «Config».

Pour toute question concernant la connexion de la station (quelle est l'adresse IP de ma station, nom d'utilisateur et mot de passe), adressez-vous directement à eCarUp ou à EVTEC.

</div>
<div className="col col--4 text--center">

![EVTEC – Figure 4](/img/ocpp-ladestationen-evtec/04.png)

</div>
</div>

3\. Sélectionner le point de menu OCPP.

![EVTEC – Figure 5](/img/ocpp-ladestationen-evtec/05.png)

4\. Effectuer les réglages comme dans la capture d'écran ci-dessous. Sélectionner ensuite Connection Parameters.

Important : régler idTagConversion sur HexZero...

![EVTEC – Figure 6](/img/ocpp-ladestationen-evtec/06.jpg)

5\. Effectuer les réglages comme dans la capture d'écran ci-dessous.

⚠️ IMPORTANT : dans le champ «CsAddress», saisir le chemin correct pour le compte eCarUp souhaité.

![EVTEC – Figure 7](/img/ocpp-ladestationen-evtec/07.png)

<div className="row">
<div className="col col--8">

6\. Le chemin pour le compte eCarUp peut être déterminé comme suit.

a) Se connecter sur www.ecarup.com avec le compte souhaité.

b) Sélectionner l'onglet «OCPP URL».

c) Copier le lien et le saisir dans le champ «CsAddress» de l'interface EVTEC.

7\. Pour terminer, revenir au menu du point 4 de ce guide à l'aide du bouton «back». Sélectionner ensuite «ConfigurationParameters».

8\. Après avoir sélectionné «ConfigurationParameters», effectuer les réglages de la station EVTEC selon vos propres besoins (exemple dans la capture d'écran)

</div>
<div className="col col--4 text--center">

![EVTEC – Figure 8](/img/ocpp-ladestationen-evtec/08.png)

</div>
</div>

9. Attribuer à MeterValuesSampledData la valeur Energy.Active.Import.Register,Power.Active.Import afin que la puissance de recharge en direct soit affichée.

10. Pour terminer, revenir au menu du point 4 à l'aide du bouton «back», puis encore une fois via le bouton «back» au menu du point 3 de ce guide. Sélectionner ensuite «Authentication».

![EVTEC – Figure 9](/img/ocpp-ladestationen-evtec/09.png)

<div className="row">
<div className="col col--8">

11\. Après avoir sélectionné «Authentification», régler le point de menu «ChargeAuthentification» sur OCPP. Ne pas modifier les autres points de menu.

</div>
<div className="col col--4 text--center">

![EVTEC – Figure 10](/img/ocpp-ladestationen-evtec/10.png)

</div>
</div>

12\. La station EVTEC a maintenant été créée dans le compte eCarUp défini par l'URL. La station peut désormais être configurée selon les besoins individuels via le processus standard dans l'app eCarUp et le login web (emplacement, prix, images, etc.).

⚠️ ATTENTION : tenir compte des connecteurs multiples !

## Réglage avancé via l'outil de maintenance (eCarUp Premium)

L'intervalle de téléchargement des Meter Values peut varier d'une station à l'autre. Nous recommandons un intervalle entre 30-60s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'app. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![EVTEC – Figure 11](/img/ocpp-ladestationen-evtec/11.png)

![EVTEC – Figure 12](/img/ocpp-ladestationen-evtec/12.png)
