---
title: 'Fischer & Sohn'
slug: '/ocpp-ladestationen/fischer-sohn'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Fischer & Sohn'
---
<div className="row">
<div className="col col--8">

## Backend Integrationsanleitung

Fischer & Sohn AG Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--4 text--center">

![Fischer & Sohn – Abbildung 1](/img/ocpp-ladestationen-fischer-sohn/01.jpg)

</div>
</div>

[iCarPlugS](https://www.fischersohn.ch/e-ladestationen)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung des Charx Controller

- Version iCarPlugS

- getestete Firmware Version: V1.5.0 

### Schritt 1

Verbinde dich mit dem Laptop, über die bezogene IP Adresse, auf den Controller.

- Mehr Infos dazu findest du in der Bedienungsanleitung. 

### Schritt 2

Logge dich danach mit dem Layer "manufacture" ein. 

![Fischer & Sohn – Abbildung 2](/img/ocpp-ladestationen-fischer-sohn/02.png)

### Schritt 3

Gehe in der Menüführung auf Konfiguration und schalte den Freigabemodus um auf Via OCPP. 

![Fischer & Sohn – Abbildung 3](/img/ocpp-ladestationen-fischer-sohn/03.png)

### Schritt 4

Unter Konfiguration im Menü OCPP wähle bitte folgendes:

1.  OCPP 1.6j

- \+ die gewählte Netzwerkschnittstelle

2.  Den OCPP URL aus deinem eCarUp Account

- Achtung, am Schluss muss ein / inkl. Seriennummer erfolgen. 

- Beispiel: ws://www.ecarup.com/api/ocpp16/xnwoi248grn3o2049/24001

![Fischer & Sohn – Abbildung 4](/img/ocpp-ladestationen-fischer-sohn/04.png)

### Schritt 5

Speichern und den Controller oder die Station neu starten. 

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Fischer & Sohn – Abbildung 5](/img/ocpp-ladestationen-fischer-sohn/05.png)

![Fischer & Sohn – Abbildung 6](/img/ocpp-ladestationen-fischer-sohn/06.png)
