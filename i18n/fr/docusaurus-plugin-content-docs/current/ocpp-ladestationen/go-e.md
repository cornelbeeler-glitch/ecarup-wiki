---
title: 'Go-E'
slug: '/ocpp-ladestationen/go-e'
description: 'Guide d''intégration backend'
sidebar_label: 'Go-E'
---
<div className="row">
<div className="col col--8">

## Guide d'intégration backend

Les bornes Go-E peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même et sans complication les conditions d'utilisation de vos bornes (prix, utilisateurs, horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Conditions préalables pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour les exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![Go-E – Illustration 1](/img/ocpp-ladestationen-go-e/01.jpg)

</div>
</div>

[Wallbox go-e](https://go-e.com/de-ch/)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Bornes » ("Stationen").

4.  Sélectionnez l'onglet « OCPP » ("OCPP").

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez l'URL copiée.

## Guide d'intégration : connecter les bornes de recharge go-e à eCarUp

<Video src="VO0Kms8qsqo" title="Vidéo YouTube, guide d'intégration : connecter les bornes de recharge go-e à eCarUp" />

## Intégration de la borne de recharge Go-e

⚠️ IMPORTANT : 

- Le firmware de la borne doit être au moins en version 055.0 

- Si vous activez la borne de recharge avec une carte RFID, la session de recharge doit être terminée côté véhicule. 

### Étapes préparatoires pour l'intégration de la Go-E

<div className="row">
<div className="col col--8">

1.  Installez l'application Go-E Charger sur votre téléphone

2.  Connectez maintenant votre borne de recharge à l'application (configuration via hotspot ou Internet)

3.  Dès que la borne de recharge est visible dans l'application, effectuez les réglages suivants.

</div>
<div className="col col--4 text--center">

![Go-E – Illustration 2](/img/ocpp-ladestationen-go-e/02.png)

</div>
</div>

<div className="row">
<div className="col col--6">

- le firmware testé dans le nouvel aperçu est la version 56.8

4\. Accédez aux paramètres

</div>
<div className="col col--6 text--center">

![Go-E – Illustration 3](/img/ocpp-ladestationen-go-e/03.png)

</div>
</div>

4.1 Paramètres (Einstellungen) 

![Go-E – Illustration 4](/img/ocpp-ladestationen-go-e/04.png)

5. Sélectionnez « Contrôle d'accès » ("Zugriffskontrolle")

![Go-E – Illustration 5](/img/ocpp-ladestationen-go-e/05.png)

6\. « Authentification requise » ("Authentifizierung erforderlich") et enregistrer

![Go-E – Illustration 6](/img/ocpp-ladestationen-go-e/06.png)

<div className="row">
<div className="col col--6">

7\. Revenez à l'aperçu et sélectionnez « Connexion » ("Verbindung"). Cliquez sur OCPP

</div>
<div className="col col--6 text--center">

![Go-E – Illustration 7](/img/ocpp-ladestationen-go-e/07.png)

</div>
</div>

8.  Sélectionnez « Serveur OCPP » ("OCPP Server")

<div className="row">
<div className="col col--6 text--center">

![Go-E – Illustration 8](/img/ocpp-ladestationen-go-e/08.png)

</div>
<div className="col col--6 text--center">

![Go-E – Illustration 9](/img/ocpp-ladestationen-go-e/09.png)

</div>
</div>

9.   

- Pour « Hôte » ("Host") : [www.ecarup.com](http://www.ecarup.com)

- Chemin ("Pfad") : /api/OCPP16/yourIDxxxx/ID 

⚠️Important : à la fin de l'URL, ajoutez un / suivi de l'ID ou d'un suffixe quelconque

Attention : en cas de plusieurs bornes, n'utilisez pas le même suffixe. 

- Enregistrez la modification et redémarrez la borne. 

## Ancienne interface

4\. Accédez aux paramètres

![Go-E – Illustration 10](/img/ocpp-ladestationen-go-e/10.png)

5\. Sélectionnez « Contrôle d'accès » ("Zugriffskontrolle")

![Go-E – Illustration 11](/img/ocpp-ladestationen-go-e/11.png)

6\. « Authentification requise » ("Authentifizierung erforderlich") et enregistrer

![Go-E – Illustration 12](/img/ocpp-ladestationen-go-e/12.png)

7\. Revenez à l'aperçu et sélectionnez « Internet » ("Internet")

![Go-E – Illustration 13](/img/ocpp-ladestationen-go-e/13.png)

8.  Vérifiez la version du firmware !

9\. Sélectionnez OCPP

![Go-E – Illustration 14](/img/ocpp-ladestationen-go-e/14.png)

10.  Activez OCPP 1.6

11. Ajoutez l'URL de votre compte

<div className="row">
<div className="col col--6 text--center">

![Go-E – Illustration 15](/img/ocpp-ladestationen-go-e/15.png)

</div>
<div className="col col--6 text--center">

![Go-E – Illustration 16](/img/ocpp-ladestationen-go-e/16.png)

</div>
</div>

12\. après l'URL, ajoutez impérativement / (&) un suffixe quelconque

13\. Enregistrez et redémarrez

## Paramètre avancé via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30-60s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour remplacer la valeur)

![Go-E – Illustration 17](/img/ocpp-ladestationen-go-e/17.png)

![Go-E – Illustration 18](/img/ocpp-ladestationen-go-e/18.png)
