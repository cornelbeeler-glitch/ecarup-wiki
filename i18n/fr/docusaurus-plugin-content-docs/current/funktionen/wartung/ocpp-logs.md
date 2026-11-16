---
title: 'OCPP 1.6j'
slug: '/funktionen/wartung/ocpp-logs'
description: 'Pour consulter les logs OCPP, vous avez besoin de la licence Premium payante'
sidebar_label: 'Logs OCPP'
---
Pour consulter les logs OCPP, vous avez besoin de la licence Premium payante

## OCPP = Open Charge Point Protocol

OCPP est un protocole d'application universel qui standardise la communication entre les bornes de recharge pour véhicules électriques et un système de gestion central.

eCarUp prend actuellement en charge la version 1.6j

## Analyse et aide pour les logs OCPP

### Informations sur le statut :

Pour qu'eCarUp puisse afficher le bon statut de la borne, le système a besoin du message « StatusNotification » suivant via OCPP :

- Available : un connecteur/une prise est disponible pour un nouvel utilisateur (conducteur). 

- Preparing : une voiture est connectée, mais la recharge n'a pas encore été activée.

- Charging : une voiture est branchée, l'autorisation a été donnée par eCarUp et le courant est libéré. 

- SuspendedEVSE : le véhicule est connecté à la borne, mais aucun courant n'est libéré. La cause peut être, par exemple, la gestion de la charge locale. 

- SuspendedEV : la borne libère le courant, mais la voiture ne consomme pas de courant.

- Unavailable : la borne n'est pas disponible.

- Faulted : la borne présente un problème interne et ne peut pas fournir de courant.


### Exemple 1 :

![OCPP 1.6j – Illustration 1](/img/funktionen-wartung-ocpp-logs/01.png)

### Exemple 2 :

![OCPP 1.6j – Illustration 2](/img/funktionen-wartung-ocpp-logs/02.jpg)

Dans cet exemple avec la borne easee, la borne nous envoie un SuspendedEVSE en raison du VendorErrorCode 55.

Info :

- pour le matériel easee, vous trouverez les vendorErrorCode\`s comme dans l'exemple ci-dessus sur la page suivante : [https://developer.easee.cloud/docs/enumerations](https://developer.easee.com/docs/enumerations)


## Autorisation OCPP

### Authentification par la carte RFID :

- Les logs permettent d'identifier si le conducteur est autorisé ou non et avec quelle carte RFID (UID) la tentative de recharge a lieu

- L'IdTAG est transmis avec l'Authorize.

- Ce TAG doit être enregistré dans le compte du conducteur. 

- En cas d'Accepted, eCarUp autorise la recharge.

- En cas d'Invalid, eCarUp n'autorise pas la recharge. 


Les causes possibles sont :

1.  L'UID (idTAG) n'a pas été correctement attribué au conducteur

2.  Le conducteur n'a pas d'autorisation sur la borne de recharge

3.  Le conducteur n'a pas enregistré de carte de crédit valide dans son compte et ne peut donc pas activer une borne de recharge payante. 


Vous trouverez plus d'informations sur [RFID](/fahrer/rfid-nfc-tags-carid) et eCarUp sur la page suivante. 

### Exemple :

![OCPP 1.6j – Illustration 3](/img/funktionen-wartung-ocpp-logs/03.png)

### Authentification via le portail web et l'app

- Ici, ce sont RemoteStartTransaction ou RemoteStopTransaction qui interviennent. 

- Important : l'Id-Tag ne peut pas être retracé dans ce cas. 


### Exemple :

![OCPP 1.6j – Illustration 4](/img/funktionen-wartung-ocpp-logs/04.jpg)

## errorCode OCPP

### StatusNotification :

- ConnectorLockFailure : la fiche ne peut pas être verrouillée ou déverrouillée

- EVCommunicationError : erreur de communication avec le véhicule

- GroundFailure : le disjoncteur différentiel s'est déclenché

- HighTemperature : la température dans la borne de recharge est trop élevée

- InternalError : erreur dans un composant matériel ou logiciel interne

- NoError : aucune erreur

- OtherErro : autre type d'erreur, veuillez consulter les informations du fabricant

- OverCurrentFailure : le dispositif de protection contre les surintensités s'est déclenché

- OverVoltage : la tension a dépassé un niveau acceptable

- UnderVoltage : la tension est tombée en dessous d'un niveau acceptable

- PowerMeterFailure : erreur lors de la lecture du compteur d'énergie

- WeakSignal : la borne signale un signal faible (WLAN, LAN, etc.)


Si ces erreurs surviennent et persistent, il faut prendre contact avec le fabricant de la borne. 

### Exemple :

Extrait de communication du log d'une borne de recharge rapide ABB :

 >>"StatusNotification", &#123;"connectorId":0,"errorCode":"OtherError","vendorId":"com.abb.evci/event/v1","vendorErrorCode":"EmergencyButtonReleased"&lt;&lt;

Ici, l'arrêt d'urgence de la borne a été actionné.
