---
title: 'RFID / NFC Tags / CarID'
slug: '/fahrer/rfid-nfc-tags-carid'
description: '⚠️ Important : eCarUp ne vend pas de tags RFID.'
sidebar_label: 'RFID / NFC Tags / CarID'
---
<Video src="Rhmi6IUkedY" title="Vidéo YouTube, associer un tag RFID à un compte eCarUp" />

⚠️ Important : eCarUp ne vend pas de tags RFID. Vous trouverez ici des informations importantes sur l'achat d'un tag RFID : [LIEN](/drittprodukte#porte-clés-rfid--nfc-tags-ntag215)

## Principe de fonctionnement :

![RFID / NFC Tags / CarID – Illustration 1](/img/fahrer-rfid-nfc-tags-carid/01.png)

\*CarID ne fonctionne actuellement qu'avec la [borne de recharge Pico](/smart-me-pico) de smart-me

![RFID / NFC Tags / CarID – Illustration 2](/img/fahrer-rfid-nfc-tags-carid/02.png)

![RFID / NFC Tags / CarID – Illustration 3](/img/fahrer-rfid-nfc-tags-carid/03.png)

### Important

- Les tags RFID sont enregistrés dans les comptes des conducteurs, et non chez le propriétaire de la station.

- Toutes les stations ne disposent pas d'un lecteur RFID / NFC. Un tag RFID ne peut donc pas être utilisé sur toutes les stations.

- [Tags RFID compatibles avec Pico (caractéristiques techniques)](https://wiki.smart-me.com/produkte/pico-ladestation)

- Il est possible qu'eCarUp puisse lire un tag RFID que la station ne prend pas en charge. Vérifiez en priorité la compatibilité avec la station.

- Le déverrouillage par carte RFID ne répond en principe pas aux exigences de sécurité élevées d'eCarUp. Les cartes RFID peuvent facilement être copiées et falsifiées. L'ajout et l'utilisation de cartes RFID se font à vos propres risques.

- eCarUp n'émet pas ses propres cartes RFID / NFC. L'ajout et la gestion des tags doivent être effectués par le conducteur lui-même.

- Les tags RFID ne peuvent être utilisés que pour le déverrouillage local des bornes de recharge eCarUp et ne fonctionnent pas sur les stations de réseaux tiers (p. ex. Hubject).

- Dans le système eCarUp, le TagID d'une carte RFID ne peut être attribué qu'à un seul utilisateur. (Fonction de protection)

## Guide pour ajouter une carte RFID :

### Guide pour l'app Android

Condition préalable : smartphone Android avec fonction NFC.

1\. Connectez-vous au compte conducteur que vous souhaitez associer à un tag RFID/NFC dans l'app Android eCarUp. Dans le menu en bas, cliquez sur Compte (Account), puis sur Cartes RFID (RFID Karten).

2\. Cliquez sur le symbole + en haut à droite. Vous pouvez ensuite indiquer le nom et le Tag-ID (comme sur le web).

3\. Si votre smartphone Android dispose d'une fonction NFC, vous pouvez lire directement le tag de la carte souhaitée. Pour ce faire, tenez la carte contre l'arrière de l'appareil (là où se trouvent la plupart des lecteurs NFC).

Si vous saisissez le Tag-ID (UID) manuellement, vous pouvez le déterminer en lisant le tag RFID souhaité. Cela peut se faire soit directement avec un lecteur RFID (p. ex. dans une entreprise), soit avec une app sur un téléphone portable équipé d'un lecteur NFC. L'app gratuite [NFC-Tools](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc&hl=de_CH) en est un exemple (Apple bloque la lecture des numéros RFID / NFC).

4\. Votre Tag-ID est maintenant associé au compte et peut être utilisé pour le déverrouillage.

### Guide pour l'app iOS

Condition préalable : iPhone avec fonction NFC (à partir d'iOS 14 & > iPhone 6).

(Apple ne prend en charge cette fonction qu'à partir de la version iOS 13/14).

1\. Connectez-vous dans l'app eCarUp (iOS) au compte conducteur que vous souhaitez associer à un tag RFID/NFC. Dans le menu en bas, cliquez sur Compte (Account), puis sur Cartes RFID (RFID Karten).

2\. Cliquez sur le symbole + en haut à droite. Vous pouvez ensuite indiquer le nom et le Tag-ID (comme sur le web).

3\. Si votre smartphone Apple dispose d'une fonction NFC (>iPhone 10), vous pouvez lire directement le tag de la carte souhaitée. Pour ce faire, tenez la carte contre l'arrière de votre appareil (là où se trouvent la plupart des lecteurs NFC).

4\. Votre Tag-ID est maintenant associé au compte et peut être utilisé pour le déverrouillage.

<div className="row">
<div className="col col--6 text--center">

![RFID / NFC Tags / CarID – Illustration 4](/img/fahrer-rfid-nfc-tags-carid/04.png)

</div>
<div className="col col--6 text--center">

![RFID / NFC Tags / CarID – Illustration 5](/img/fahrer-rfid-nfc-tags-carid/05.png)

</div>
</div>

Exemple de TagID :

- Important : il n'est pas nécessaire de saisir les deux-points.

- Attention : le SwissPass possède 2 tags RFID, eCarUp recommande d'enregistrer les deux.

![RFID / NFC Tags / CarID – Illustration 6](/img/fahrer-rfid-nfc-tags-carid/06.png)

### Remarque concernant l'iPhone d'Apple (iOS) :

Android reconnaît presque tous les types de puces. Apple restreint cependant fortement l'interface NFC du côté du fabricant : les puces anciennes ou propriétaires (p. ex. Mifare Classic ou Legic), souvent utilisées sur les cartes de recharge, sont bloquées par iOS pour des raisons de sécurité. eCarUp n'a aucune influence sur ce point.

Si votre iPhone ne reconnaît pas la carte :

- Saisie manuelle : saisissez simplement à la main dans l'app eCarUp le numéro imprimé sur la carte (UID, si disponible), sans espaces.

- Enregistrement via Android : connectez-vous une fois avec votre compte eCarUp sur un appareil Android et scannez-y la carte. Elle est ensuite immédiatement enregistrée dans votre compte.

![RFID / NFC Tags / CarID – Illustration 7](/img/fahrer-rfid-nfc-tags-carid/07.png)

## CarID :

La fonction Plug & Charge permet une authentification conviviale et sécurisée entre le véhicule électrique et une borne de recharge, rendant superflu le déverrouillage par app ou par carte RFID.

Après un enregistrement unique du véhicule avec l'app eCarUp, il suffit à l'utilisateur de brancher le véhicule électrique à chaque session de recharge. Le véhicule transmet automatiquement à la borne de recharge les données nécessaires à l'autorisation du paiement.

⚠️Important : actuellement, cette fonction n'est disponible qu'avec la borne de recharge [Pico](https://wiki.smart-me.com/produkte/pico-ladestation) de smart-me AG.

### Association avec le compte

<div className="row">
<div className="col col--6">

Condition de base : l'exploitant de la station de la [Pico](/smart-me-pico) doit avoir activé la fonction sur la borne de recharge, et la voiture doit être un véhicule électrique à batterie.

1.  Connectez votre véhicule à la Pico

2.  Attendez que la croix orange (X CAR-ID) apparaisse à l'écran

3.  Une icône apparaît à l'écran (personne avec un bouclier)

4.  Vous pouvez ensuite démarrer la session de recharge comme d'habitude via l'app eCarUp

5.  Une fois cela fait, une fenêtre pop-up d'eCarUp vous demande si vous souhaitez attribuer la Car-Id.

⚠️Important : il est important de supprimer l'association de la CarID avec votre compte dès que la voiture n'est plus en votre possession, par exemple après une vente.

⚠️Important : la Car-Id peut être identique sur plusieurs véhicules, selon le constructeur automobile. Une recharge peut donc être imputée à votre compte alors qu'il ne s'agit pas de votre véhicule.

</div>
<div className="col col--6 text--center">

![RFID / NFC Tags / CarID – Illustration 8](/img/fahrer-rfid-nfc-tags-carid/08.jpg)

</div>
</div>
