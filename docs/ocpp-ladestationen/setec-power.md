---
title: 'Setec-Power'
slug: '/ocpp-ladestationen/setec-power'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Setec-Power'
---
<div className="row">
<div className="col col--8">

## Backend Integrationsanleitung

Setec-Power Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--4 text--center">

![Setec-Power – Abbildung 1](/img/ocpp-ladestationen-setec-power/01.jpg)

</div>
</div>

[Setec Wallbox](https://www.setec-power.com/)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung der Setec-Power Ladestationen

Die ersten Schritte müssen direkt auf dem Display Ihrer Station vorgenommen werden:

1.   Stelle sicher, dass deine Station eine Internetverbindung hat

2.   Beim Display auf das Logo (Setec) tippen

3.   Fenster mit Passwortabfrage erscheint (PW: 88888888)

4.  Klicke auf "Charge Point Settings"

5.  Tippe danach auf "Public Setting"

6.   Klicke nun auf "IP Config"

7.   Nimm direkt auf dem Display die unten beschriebenen OCPP - Settings vor

1.  Bild: 

- Default Einstellung

![Setec-Power – Abbildung 2](/img/ocpp-ladestationen-setec-power/02.png)

2\. Bild: 

- OCPP-URL aus Ihrem eCarUp Account einfügen

- "Enable OCPP on" aktiveren

- Im Eingabefeld "ID": gewünschter Stationsname festlegen (kann später auf eCarUp jederzeit geändert werden)

![Setec-Power – Abbildung 3](/img/ocpp-ladestationen-setec-power/03.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Setec-Power – Abbildung 4](/img/ocpp-ladestationen-setec-power/04.png)

![Setec-Power – Abbildung 5](/img/ocpp-ladestationen-setec-power/05.png)
