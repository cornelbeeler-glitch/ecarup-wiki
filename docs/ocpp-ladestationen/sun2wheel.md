---
title: 'sun2wheel'
slug: '/ocpp-ladestationen/sun2wheel'
description: 'Backend Integrationsanleitung'
sidebar_label: 'sun2wheel'
---
<div className="row">
<div className="col col--6">

## Backend Integrationsanleitung

sun2wheel Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--6 text--center">

![sun2wheel – Abbildung 1](/img/ocpp-ladestationen-sun2wheel/01.png)

</div>
</div>

[Tiny Wallbox](https://sun2wheel.com/produkte/)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung der Sun2Wheel Tiny Wallbox

Wichtig: getesteter Firmware Stand, V00.50.02

- Verbinde die Wallbox per LAN

- Die Tiny Wallbox bezieht eine IP Adresse die du über den Web-Browser erreichen kannst. (Standard IP Adresse der Wallbox ist 192.168.100.199)

- Füge die Login-Daten ein

- Danach erhältst du folgende Übersicht (Bild unten)

- Bei OCPP-Server kannst du die URL aus deinem eCarUp Account hinzufügen und speichern 

- Nach einem Neustart erscheint die Station in deinem eCarUp Account

![sun2wheel – Abbildung 2](/img/ocpp-ladestationen-sun2wheel/02.png)

## Einbindung der one-way-guest-100

Um diese Ladestation einbinden zu können gehe zur folgenden Integrations-Anleitung des Hardware-Herstellers:

- [Anleitung](/ocpp-ladestationen/evtec)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![sun2wheel – Abbildung 3](/img/ocpp-ladestationen-sun2wheel/03.png)

![sun2wheel – Abbildung 4](/img/ocpp-ladestationen-sun2wheel/04.png)
