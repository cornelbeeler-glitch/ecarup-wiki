---
title: 'Loxone'
slug: '/ocpp-ladestationen/loxone'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Loxone'
---
<div className="row">
<div className="col col--6">

## Backend Integrationsanleitung

Loxone Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--6 text--center">

![Loxone – Abbildung 1](/img/ocpp-ladestationen-loxone/01.jpg)

</div>
</div>

[Wallbox 11kW 16A Tree](https://shop.loxone.com/dech/wallbox-tree.html)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung der Loxone Ladestation

<Video src="1n1R5rs9bk8" title="YouTube Video, OCPP Integration in der Loxone Config" />

## Einbindung über den Loxone Mini Server

Wichtig: Die Software des Miniservers muss sich mindestens auf Version 15.2 oder höher befinden. 

Voraussetzung der Hardware: 

- Loxone Miniserver (2nd Gen)

Empfehlung: 

- Wallbox Tree

- 3-Phasen Zähler Tree

Es können auch Ladestationen von Drittanbietern eingebunden werden: [Loxone Library](https://library.loxone.com/?s=wallbox) 

### Konfiguration:

1.  OCPP Server Connector Plugin als Netzwerkgerät hinzufügen

2.  Füge bei der Einstellung auf dem OCPP Server Connector Plugin den OCPP URL aus deinem Account hinzu. 

3.  (Optional) Füge für jede Wallbox einen separaten Ladepunkt hinzu. 

![Loxone – Abbildung 2](/img/ocpp-ladestationen-loxone/02.png)

![Loxone – Abbildung 3](/img/ocpp-ladestationen-loxone/03.png)

### Nützliche Links:

[Integrations Anleitung Loxone](https://www.loxone.com/dede/kb/ocpp-integration/)

[OCPP Funktionsumfang Loxone](https://www.loxone.com/dede/kb/ocpp-server-connector-beta/)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Loxone – Abbildung 4](/img/ocpp-ladestationen-loxone/04.png)

![Loxone – Abbildung 5](/img/ocpp-ladestationen-loxone/05.png)
