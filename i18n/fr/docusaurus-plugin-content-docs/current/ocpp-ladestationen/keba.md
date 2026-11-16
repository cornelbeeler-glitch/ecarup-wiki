---
title: 'KEBA'
slug: '/ocpp-ladestationen/keba'
description: 'Guide d''intégration au backend'
sidebar_label: 'KEBA'
---
![KEBA – Illustration 1](/img/ocpp-ladestationen-keba/01.png)

[Keba P30](https://www.keba.com/de/emobility/elektromobilitaet)

![KEBA – Illustration 2](/img/ocpp-ladestationen-keba/02.png)

[Keba P40](https://www.keba.com/de/emobility/elektromobilitaet)

## Guide d'intégration au backend

Les stations KEBA s'intègrent en quelques étapes au système de décompte eCarUp. Une fois installées dans votre compte, vous définissez vous-même et en toute simplicité les conditions d'utilisation de vos stations (prix, utilisateurs, horaires de disponibilité, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Conditions préalables à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de stations](/stationsbetreiber/webportal)

- Découvrez ici nos [fonctions Premium](/funktionen)

### Intégration de stations OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stations » (Stationen).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

1.Lien ws sans Basic Auth : testé et fonctionnel

2.wss sans Basic Auth : testé et fonctionnel

3.wss avec Basic Auth : testé et fonctionnel

6.  Accédez à l'interface web de la station souhaitée et collez-y l'URL copiée.

## Intégration de la wallbox Keba P40

- Version du firmware testée : 1.3.0 

Intégrez la station à un réseau dans lequel vous pouvez y accéder par son adresse IP. 

<Embed src="https://demo.arcade.software/IYNbI7tB2YAuuK25c3KR?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" aspect="1.660" title="Wiki - KEBA" />

1.  Dans le navigateur, ouvrez l'adresse IP de la station

2.  Connectez-vous :

Mot de passe par défaut : fourni avec le guide.

3.  Sous OCPP, effectuez maintenant les réglages suivants :

Chargepoint Identity : « nom de la station »

Attention : le nom de la station (Chargepoint Identity) ne doit contenir ni espaces ni caractères spéciaux, à l'exception du trait de soulignement « \_ ». Une fois l'intégration réussie, la station peut être renommée sans problème sur la plateforme eCarUp.

OCPP Communication Type : « OCPP 1.6 JSON »

Central System Hostname : « www.ecarup.com »

Central System Port : « 80 »

Central System Path : « api/Ocpp16/xxxxxxxx

4.  Cliquez sur « Apply ».

![KEBA – Illustration 3](/img/ocpp-ladestationen-keba/03.png)

5\. Réglez Authorization sur « ON »

6\. Online Authorization Mode « FirstOnline ».

7\. Cliquez sur « Apply »

![KEBA – Illustration 4](/img/ocpp-ladestationen-keba/04.png)

<div className="row">
<div className="col col--8">

Si vous souhaitez connecter la station avec WSS et Basic Auth, vous devez effectuer les réglages suivants dans l'application Keba :

- Connexion sécurisée au système central (Sichere Zentralsystemverbindung) pour WSS

- Authentification du système central (Zentrale Systemauthentifizierung) pour Basic Auth.

La clé d'autorisation (Authorization Key) doit être récupérée dans le compte eCarUp, puis saisie en plus dans le portail web.

</div>
<div className="col col--4 text--center">

![KEBA – Illustration 5](/img/ocpp-ladestationen-keba/05.png)

</div>
</div>

Contrôle

![KEBA – Illustration 6](/img/ocpp-ladestationen-keba/06.png)

![KEBA – Illustration 7](/img/ocpp-ladestationen-keba/07.png)

## Intégration de la wallbox Keba P30 série X

<Video src="db3zpnosgv8" title="Vidéo YouTube, intégrer une station KEBA au backend eCarUp" />

### KEBA et droit de la métrologie en Allemagne

Avec les bornes de recharge KEBA ME, les sessions de recharge semi-publiques et publiques peuvent être facturées simplement par carte de crédit via eCarUp, conformément aux prescriptions en vigueur du droit de la métrologie. En savoir plus : [Droit de la métrologie en Allemagne](/sonstige-informationen/eichrecht-in-deutschland).

### Important : tenir compte de la circulaire Keba

![KEBA – Illustration 8](/img/ocpp-ladestationen-keba/08.png)

![KEBA – Illustration 9](/img/ocpp-ladestationen-keba/09.png)

### Important : version du firmware !

Pour pouvoir installer votre borne de recharge KEBA x-series (y compris M&E / version du firmware : 1.9.1 ou plus récente / logiciel le plus récent toujours disponible dans les [téléchargements KEBA](https://www.keba.com/de/emobility/service-support/downloads/downloads)) dans un compte eCarUp, les préparatifs suivants doivent être effectués :

### Intégration de la x-series

1.  Connectez votre ordinateur à l'adresse IP de la station. L'adresse IP s'affiche sur l'écran de la station.

2.  Connectez-vous :

Nom d'utilisateur par défaut : admin

Mot de passe par défaut : Keba\_xxxx( numéro de série de la station)

3.  Sous OCPP, effectuez maintenant les réglages suivants :

Chargepoint Identity : « nom de la station »

Attention : le nom de la station (Chargepoint Identity) ne doit contenir ni espaces ni caractères spéciaux, à l'exception du trait de soulignement « \_ ». Une fois l'intégration réussie, la station peut être renommée sans problème sur la plateforme eCarUp.

OCPP Communication Type : « OCPP 1.6 JSON »

Central System Hostname : « www.ecarup.com »

Central System Port : « 80 »

Central System Path : « api/Ocpp16/&#123;code du site web eCarUp&#125; ». Vous l'avez enregistré à l'étape trois de la préparation (voir ci-dessus).

![KEBA – Illustration 10](/img/ocpp-ladestationen-keba/10.png)

4\. Configuration de l'appareil

Menu : Configuration --> Appareils (le chargement de la page prend un peu de temps)

Autorisation : ON

Online Authorization Mode : First Online

![KEBA – Illustration 11](/img/ocpp-ladestationen-keba/11.png)

Remarque : si votre entreprise utilise un proxy dans son système, vous pouvez effectuer ces réglages directement sur la station KEBA. 

La borne de recharge KEBA x-series est maintenant enregistrée dans votre compte eCarUp. Vous pouvez à présent définir les conditions d'utilisation de la borne de recharge dans le portail web eCarUp.

### Intégration de la c-series

Les bornes de recharge KEBA c-series peuvent être installées comme esclaves des bornes de recharge KEBA x-series. Comme pour la x-series, vous définissez vous-même et en toute simplicité les conditions d'utilisation de vos stations dès qu'elles sont installées dans votre compte. Vous décidez qui peut recharger, quand et à quel prix.

1.  Sur la station esclave, réglez le commutateur DIP « DSW2.5 » sur « On »

![KEBA – Illustration 12](/img/ocpp-ladestationen-keba/12.png)

<div className="row">
<div className="col col--6">

2\. Connectez votre ordinateur à l'adresse IP du maître, la borne de recharge KEBA x-series.

Nom d'utilisateur par défaut : admin

Mot de passe par défaut : numéro de série de la borne de recharge KEBA x-series

3. Sous OCPP, effectuez maintenant les réglages suivants :

1.  Sous Operation Mode, passez à Charging Network

2.  Indiquez le nombre d'esclaves

3.  Saisissez le numéro de série des esclaves

</div>
<div className="col col--6 text--center">

![KEBA – Illustration 13](/img/ocpp-ladestationen-keba/13.png)

</div>
</div>

## Réglage avancé via l'outil de maintenance (eCarUp Premium)

L'intervalle de téléversement des Meter Values peut varier d'une station à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![KEBA – Illustration 14](/img/ocpp-ladestationen-keba/14.png)

![KEBA – Illustration 15](/img/ocpp-ladestationen-keba/15.png)
