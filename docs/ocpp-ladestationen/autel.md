---
title: 'Autel'
slug: '/ocpp-ladestationen/autel'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Autel'
---
<div className="row">
<div className="col col--6">

## Backend Integrationsanleitung

Autel Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--6 text--center">

![Autel – Abbildung 1](/img/ocpp-ladestationen-autel/01.jpg)

</div>
</div>

[Autel AC Wallbox](https://web.ecarup.com/backend/autel/)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung der Autel AC Wallbox

- Installiere hierfür die Autel Charge App.  

- [Android](https://play.google.com/store/apps/details?id=com.autel.charge) & [Apple App Store](https://apps.apple.com/de/app/autel-charge/id1578454464)

### Schritt 1

![Autel – Abbildung 2](/img/ocpp-ladestationen-autel/02.jpg)

### Schritt 2

![Autel – Abbildung 3](/img/ocpp-ladestationen-autel/03.jpg)

### Schritt 3

Bitte scanne den mitgelieferten QR-Code, wo unter anderem auch die Seriennummer und das Passwort draufstehen.

### Schritt 4

![Autel – Abbildung 4](/img/ocpp-ladestationen-autel/04.jpg)

### Schritt 5

![Autel – Abbildung 5](/img/ocpp-ladestationen-autel/05.jpg)

### Schritt 6

Sobald du die Ladestation ins Netz gebracht hast (LAN, WLAN oder Bluetooth) kannst du weiterfahren.

### Schritt 7

![Autel – Abbildung 6](/img/ocpp-ladestationen-autel/06.jpg)

### Schritt 8

![Autel – Abbildung 7](/img/ocpp-ladestationen-autel/07.jpg)

### Schritt 9

![Autel – Abbildung 8](/img/ocpp-ladestationen-autel/08.jpg)

Wichtig zum URL:

- Gehe genau wie auf dem Bildschirmausschnitt vor.

- Beim Server-Pfad am Schluss den "/" (Slash) manuell hinzufügen. 

- Verbinden am Schluss nicht vergessen. 

### Schritt 10

- Führe eine Schlusskontrolle durch.

![Autel – Abbildung 9](/img/ocpp-ladestationen-autel/09.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Autel – Abbildung 10](/img/ocpp-ladestationen-autel/10.png)

![Autel – Abbildung 11](/img/ocpp-ladestationen-autel/11.png)
