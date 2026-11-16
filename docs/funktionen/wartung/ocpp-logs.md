---
title: 'OCPP 1.6j'
slug: '/funktionen/wartung/ocpp-logs'
description: 'Um Einsicht in die OCPP Logs zu erhalten brauchst du die kostenpflichtige Premium Lizenz'
sidebar_label: 'OCPP Logs'
---
Um Einsicht in die OCPP Logs zu erhalten brauchst du die kostenpflichtige Premium Lizenz

## OCPP = Open Charge Point Protocol

OCPP ist ein universelles Anwendungsprotokoll, das die Kommunikation zwischen Ladestationen für Elektrofahrzeuge und einem zentralen Managementsystem standardisiert.

eCarUp unterstützt aktuell die Version 1.6j

## Analyse & Hilfestellung der OCPP-Logs

### Informationen über den Status:

Damit eCarUp den richtigen Status der Station anzeigen kann, benötigt das System folgenden Nachricht "StatusNotification" über das OCPP:

- Available: Ein Connector/Anschluss ist für einen neuen Benutzer (Fahrer) verfügbar. 

- Preparing: Ein Auto ist verbunden, aber die Ladung wurde noch nicht aktiviert.

- Charging: Ein Auto ist angesteckt, die Freigabe erfolgte durch eCarUp und es wird Strom freigegeben. 

- SuspendedEVSE: Wenn das Fahrzeug mit der Station verbunden ist, aber keinen Strom freigegeben wird. Ursache kann z.B. das lokale Lastmanagement sein. 

- SuspendedEV: Die Station gibt den Strom frei, aber das Auto bezieht kein Strom.

- Unavailable: Die Station ist nicht verfügbar.

- Faulted: Die Station hat ein internes Problem und kann keinen Strom abliefern.


### Beispiel 1:

![OCPP 1.6j – Abbildung 1](/img/funktionen-wartung-ocpp-logs/01.png)

### Beispiel 2:

![OCPP 1.6j – Abbildung 2](/img/funktionen-wartung-ocpp-logs/02.jpg)

In diesem Beispiel bei der easee Station sendet uns die Station ein SuspendedEVSE auf Grund des VendorErrorCode 55.

Info:

- bei der easee Hardware finden Sie die vendorErrorCode\`s wie im obigen Beispiel auf folgender Seite: [https://developer.easee.cloud/docs/enumerations](https://developer.easee.com/docs/enumerations)


## OCPP Authorisierung

### Authentifizierung über die RFID-Karte:

- Anhand der Logs kann identifiziert werden, ob der Fahrer zugelassen wird oder nicht und mittels welcher RFID-Karte (UID) der Ladeversuch stattfindet

- Mittels dem Authorize wir der IdTAG mittgeliefert.

- Dieser TAG muss beim Fahrer im Account hinterlegt werden. 

- Bei Accepted gibt eCarUp die Ladung frei.

- Bei Invalid gibt eCarUp die Ladung nicht frei. 


Mögliche Ursachen dafür sind:

1.  Die UID (idTAG) wurde beim Fahrer nicht richtig zugeordnet

2.  Der Fahrer hat keine Berechtigung an der Ladestation

3.  Der Fahrer hat keine gültige Kreditkarte in seinem Account hinterlegt und kann bei eine kostenpflichtige Ladestation darum nicht aktivieren. 


Unter folgenden Seite findest du mehr zu [RFID](/fahrer/rfid-nfc-tags-carid) und eCarUp. 

### Beispiel:

![OCPP 1.6j – Abbildung 3](/img/funktionen-wartung-ocpp-logs/03.png)

### Authentifizierung über das Webportal und die App

- Hier kommt das RemoteStartTransaction oder RemoteStopTransaction zum tragen. 

- Wichtig, der Id-Tag kann hier nicht zurückverfolgt werden. 


### Beispiel:

![OCPP 1.6j – Abbildung 4](/img/funktionen-wartung-ocpp-logs/04.jpg)

## OCPP errorCode

### StatusNotification:

- ConnectorLockFailure: Stecker lässt sich nicht ver- oder entriegeln

- EVCommunicationError: Kommunikationsfehler mit dem Fahrzeug

- GroundFailure: Der Fehlerstromschutzschalter wurde aktiviert

- HighTemperature: Die Temperatur in der Ladestation ist zu hoch

- InternalError: Fehler in interner Hard- oder Softwarekomponente

- NoError: Kein Fehler

- OtherErro: Andere Art von Fehler, bitte Hersteller Infos beachten

- OverCurrentFailure: Überstromschutzeinrichtung hat ausgelöst

- OverVoltage: Die Spannung ist über ein akzeptables Niveau angestiegen

- UnderVoltage: Die Spannung ist unter ein akzeptables Niveau gesunken

- PowerMeterFailure: Fehler beim Auslesen vom Energiezähler

- WeakSignal: Station meldet ein schwaches Signal (WLAN,LAN etc.)


Wenn diese Fehler auftreten und Sie bestehen, muss mit dem Hersteller der Station Rücksprache genommen werden. 

### Beispiel:

Kommunikationsausschnitt aus dem Log von einer ABB-Schnellladestation:

 >>"StatusNotification", &#123;"connectorId":0,"errorCode":"OtherError","vendorId":"com.abb.evci/event/v1","vendorErrorCode":"EmergencyButtonReleased"&lt;&lt;

Hier wurde der Not-Aus der Station betätigt.
