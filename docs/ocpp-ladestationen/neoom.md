---
title: 'neoom'
slug: '/ocpp-ladestationen/neoom'
description: 'Backend Integrationsanleitung'
sidebar_label: 'neoom'
---
<div className="row">
<div className="col col--8">

## Backend Integrationsanleitung

Neoom Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--4 text--center">

![neoom – Abbildung 1](/img/ocpp-ladestationen-neoom/01.jpg)

</div>
</div>

[neoom BOXX](https://neoom.com/produkte/boxx)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung der Neoom Ldestation

- Öffne die Netzwerk und Internet Einstellungen deines PC\`s

- Hier musst du eine statische IP-Adresse vergeben

- Bitte entnehme die Login Daten sowie auch die IP-Adresse aus dem mitgeliefertem Manuall

- Firmware muss mindestens Version : BE-03.02.10 enthalten

⚠️ Achtung: aktuell kann die Ladeleistung in der App nicht angezeigt werden. Die Verrechnung erfolgt wie gehabt am Ende des Ladevorganges. 

### Weboberfläche

### Backend

- Gehe zum Menü "Network"

- OCPP-J 1.6 anwählen

- Gewünschte Medium für die Kommunikation

- OCPP Vendor darf kein Leerschlag enthalten

- Der Websocket muss auseinander genommen werden

### Websocket von eCarUp

- Anhand des Printscreens hinterlegen

- Bitte am Schluss beachten, api/Ocpp16/weoih48zlkuhr9/00000010638

⚠️ Wichtig am Schluss / (slash) + 00000010638 (Seriennummer der Station) nicht vergessen!

![neoom – Abbildung 2](/img/ocpp-ladestationen-neoom/02.jpg)

Die Seriennummer deiner Wallbox findest du wie folgt:

![neoom – Abbildung 3](/img/ocpp-ladestationen-neoom/03.png)

Wenn RFID-Karten verwendet werden, bitte folgender Parameter noch setzen:

![neoom – Abbildung 4](/img/ocpp-ladestationen-neoom/04.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![neoom – Abbildung 5](/img/ocpp-ladestationen-neoom/05.png)

![neoom – Abbildung 6](/img/ocpp-ladestationen-neoom/06.png)
