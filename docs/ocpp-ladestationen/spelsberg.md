---
title: 'Spelsberg'
slug: '/ocpp-ladestationen/spelsberg'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Spelsberg'
---
<div className="row">
<div className="col col--6">

## Backend Integrationsanleitung

Spelsberg Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--6 text--center">

![Spelsberg – Abbildung 1](/img/ocpp-ladestationen-spelsberg/01.jpg)

</div>
</div>

[Smart Pro](https://www.spelsberg.de/wallbox/)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung der Smart Pro

<div className="row">
<div className="col col--8">

- Getestete Firmware Version: 5.30.0

- Installiere hierfür die Spelsberg Wallbox App

- [Android](https://play.google.com/store/apps/details?id=de.spelsberg.wallboxapp&gl=DE) & [Apple App Store](https://apps.apple.com/de/app/spelsberg-wallbox-app/id1617068920)

</div>
<div className="col col--4 text--center">

![Spelsberg – Abbildung 2](/img/ocpp-ladestationen-spelsberg/02.jpg)

</div>
</div>

### Schritt 1

<div className="row">
<div className="col col--6">

Verknüpfe die Wallbox mit der Spelsberg App. Klicke auf "Ich bin Elektroinstallateur"

</div>
<div className="col col--6 text--center">

![Spelsberg – Abbildung 3](/img/ocpp-ladestationen-spelsberg/03.png)

</div>
</div>

### Schritt 2

Servicemodus aktivieren und auf "Übernehmen" klicken.

![Spelsberg – Abbildung 4](/img/ocpp-ladestationen-spelsberg/04.jpg)

### Schritt 3

Auf "Wallbox konfigurieren" klicken. 

![Spelsberg – Abbildung 5](/img/ocpp-ladestationen-spelsberg/05.jpg)

### Schritt 4

Scanne den angezeigten QR-Code 

![Spelsberg – Abbildung 6](/img/ocpp-ladestationen-spelsberg/06.jpg)

### Schritt 5

Danach auf Einstellungen klicken

![Spelsberg – Abbildung 7](/img/ocpp-ladestationen-spelsberg/07.png)

### Schritt 6

Erweiterte Einstellungen öffnen

![Spelsberg – Abbildung 8](/img/ocpp-ladestationen-spelsberg/08.png)

### Schritt 7

Unter System, Freies Laden deaktivieren

![Spelsberg – Abbildung 9](/img/ocpp-ladestationen-spelsberg/09.png)

### Schritt 8

<div className="row">
<div className="col col--6">

OCPP aktivieren und der URL aus deinem eCarUp Account hinzufügen.

</div>
<div className="col col--6 text--center">

![Spelsberg – Abbildung 10](/img/ocpp-ladestationen-spelsberg/10.png)

</div>
</div>

### Schritt 9

Die Einstellungen speichern und der Station übermitteln. 

- Mache einen Neustart und die Station verbindet sich nun in dein eCarUp Account. 

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Spelsberg – Abbildung 11](/img/ocpp-ladestationen-spelsberg/11.png)

![Spelsberg – Abbildung 12](/img/ocpp-ladestationen-spelsberg/12.png)
