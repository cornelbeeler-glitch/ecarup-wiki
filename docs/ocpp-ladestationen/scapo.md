---
title: 'SCAPO'
slug: '/ocpp-ladestationen/scapo'
description: 'Backend Integrationsanleitung'
sidebar_label: 'SCAPO'
---
<div className="row">
<div className="col col--8">

## Backend Integrationsanleitung

Scapo Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--4 text--center">

![SCAPO – Abbildung 1](/img/ocpp-ladestationen-scapo/01.jpg)

</div>
</div>

[Wallbox VISION](https://scapo.de/e-mobility-privat/)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

1\. ws Link ohne Basic Auth: Getestet und funktioniert

2\. wss ohne Basic Auth: Geteste und funktioniert

3\. wss mit Basic Auth: noch nicht getestet

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung der SCAPO Vision & SCAPO Comfort

- Öffne die Netzwerk und Internet Einstellungen deines PC\`s

- Hier musst du eine statische IP-Adresse vergeben

- Bitte entnehme die Login Daten sowie auch die IP-Adresse aus dem mitgeliefertem Manual

- Firmware muss mindestens Version : BE-05.01.01 oder BE-03.02.12 enthalten

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

⚠️Wichtig am Schluss / (slash) + 00000010638 (Seriennummer der Station) nicht vergessen!

- Aktuell funktioniert nur die WS Verbindung. 

![SCAPO – Abbildung 2](/img/ocpp-ladestationen-scapo/02.jpg)

Die Seriennummer deiner Wallbox findest du wie folgt:

![SCAPO – Abbildung 3](/img/ocpp-ladestationen-scapo/03.png)

Wenn RFID-Karten verwendet werden, bitte folgenden Parameter noch setzen:

![SCAPO – Abbildung 4](/img/ocpp-ladestationen-scapo/04.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![SCAPO – Abbildung 5](/img/ocpp-ladestationen-scapo/05.png)

![SCAPO – Abbildung 6](/img/ocpp-ladestationen-scapo/06.png)
