---
title: 'Setec-Power'
slug: '/ocpp-ladestationen/setec-power'
description: 'Guide d''intégration au backend'
sidebar_label: 'Setec-Power'
---
<div className="row">
<div className="col col--8">

## Guide d'intégration au backend

Les bornes Setec-Power peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et en toute simplicité les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![Setec-Power – Illustration 1](/img/ocpp-ladestationen-setec-power/01.jpg)

</div>
</div>

[Wallbox Setec](https://www.setec-power.com/)

### Intégration des bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Bornes » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration des bornes de recharge Setec-Power

Les premières étapes doivent être effectuées directement sur l'écran de votre borne :

1.   Assurez-vous que votre borne dispose d'une connexion Internet

2.   Sur l'écran, appuyez sur le logo (Setec)

3.   Une fenêtre de saisie du mot de passe s'affiche (PW: 88888888)

4.  Cliquez sur "Charge Point Settings"

5.  Appuyez ensuite sur "Public Setting"

6.   Cliquez maintenant sur "IP Config"

7.   Effectuez directement sur l'écran les paramètres OCPP décrits ci-dessous

1.  Image : 

- Réglage par défaut

![Setec-Power – Illustration 2](/img/ocpp-ladestationen-setec-power/02.png)

2\. Image : 

- Coller l'URL OCPP de votre compte eCarUp

- Activer "Enable OCPP on"

- Dans le champ de saisie "ID" : définir le nom de borne souhaité (il peut être modifié à tout moment ultérieurement sur eCarUp)

![Setec-Power – Illustration 3](/img/ocpp-ladestationen-setec-power/03.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Setec-Power – Illustration 4](/img/ocpp-ladestationen-setec-power/04.png)

![Setec-Power – Illustration 5](/img/ocpp-ladestationen-setec-power/05.png)
