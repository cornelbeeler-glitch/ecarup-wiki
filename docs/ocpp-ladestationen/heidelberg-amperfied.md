---
title: 'Heidelberg Amperfied'
slug: '/ocpp-ladestationen/heidelberg-amperfied'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Heidelberg Amperfied'
---
<div className="row">
<div className="col col--6">

## Backend Integrationsanleitung

Heidelberg Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Vorraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--6 text--center">

![Heidelberg Amperfied – Abbildung 1](/img/ocpp-ladestationen-heidelberg-amperfied/01.png)

</div>
</div>

[Public Connect Heidelberg](https://www.amperfied.de/)

### Vorbereitende Schritte für die Integration von OCPP Stationen in die eCarUp Cloud

1.  Deine Ladestationen sind installiert und dein Computer oder Handy ist im gleichen Netzwerk wie die Ladestation

2.  Du hast in der [eCarUp App](https://web.ecarup.com/elektroauto-lade-app/) einen Account erstellt

3.  Logge dich mit deinem Account-Daten im Webportal von eCarUp ein und klicke im Menü auf der linken Seite unter Stationen den Reiter "OCPP"

4.  URL in die Zwischenablage Kopieren und bei der gewünschten Station im Webinterface hinterlegen.

## Einbindung der Public Connect

getestete Firmware Version: 5.21.2-13536

### Weboberfläche

### Backend

- Gewünschten Verbindungstyp anwählen

- ChargePoint ID kann geändert werden jedoch erscheint die Station im eCarUp Portal immer mit Ihrer Seriennummer

- OCPP-j 1.6 anwählen

- Ganze URL von deinem Account beim Websocket einfügen.

- Speichern und Neustarten

![Heidelberg Amperfied – Abbildung 2](/img/ocpp-ladestationen-heidelberg-amperfied/02.png)

### Energiezähler

- Beim Energiezähler kann der Uploadintervall der Leistungsübertragung heruntergesetzt werden. Dieses legt fest, in welchem Intervall die Station uns die Verbraucherdaten (kW) schickt. 

![Heidelberg Amperfied – Abbildung 3](/img/ocpp-ladestationen-heidelberg-amperfied/03.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Heidelberg Amperfied – Abbildung 4](/img/ocpp-ladestationen-heidelberg-amperfied/04.png)

![Heidelberg Amperfied – Abbildung 5](/img/ocpp-ladestationen-heidelberg-amperfied/05.png)
