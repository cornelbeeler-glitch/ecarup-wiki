---
title: 'Ventisei Swiss'
slug: '/ocpp-ladestationen/ventisei-swiss'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Ventisei Swiss'
---
<div className="row">
<div className="col col--8">

## Backend Integrationsanleitung

Ventisei Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--4 text--center">

![Ventisei Swiss – Abbildung 1](/img/ocpp-ladestationen-ventisei-swiss/01.jpg)

</div>
</div>

[Ventisei Swiss](https://www.ventisei.swiss/)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung der Ventisei Swiss

Wichtig: getesteter Firmware Stand, m2.2.1\_cf01.12\_chAA.06

## Hinweis

- Ein Kreditkartenterminal kann parallel zu eCarUp betrieben werden, um maximale Flexibilität zu gewährleisten. Für weitere Informationen steht dir Ventisei Swiss gerne zur Verfügung. 

### Schritt 1

Schalte die Ladestation ein und gehe in deine WLAN- Einstellungen. 

Wähle den Hotspot der Station aus.

![Ventisei Swiss – Abbildung 2](/img/ocpp-ladestationen-ventisei-swiss/02.png)

### Schritt 2

<div className="row">
<div className="col col--6">

Gehe im Browser auf folgende IP Adresse: http://172.25.1.1

Folgendes Login erscheint.

(Login Daten sind in der Anleitung enthalten)

</div>
<div className="col col--6 text--center">

![Ventisei Swiss – Abbildung 3](/img/ocpp-ladestationen-ventisei-swiss/03.png)

</div>
</div>

### Schritt 3

<div className="row">
<div className="col col--6">

Folgende Übersicht erscheint:

1.  Stelle deine Verbindung über die Connectivity ein.

2.  Unter OCPP kannst du danach deine eCarUp URL hinzufügen.

</div>
<div className="col col--6 text--center">

![Ventisei Swiss – Abbildung 4](/img/ocpp-ladestationen-ventisei-swiss/04.png)

</div>
</div>

### Schritt 4

<div className="row">
<div className="col col--6">

OCPP Integration

1.  [www.ecarup.com](http://www.ecarup.com)

2.  Port 80 (Standard Port, wenn nichts anderes definiert wurde)

</div>
<div className="col col--6 text--center">

![Ventisei Swiss – Abbildung 5](/img/ocpp-ladestationen-ventisei-swiss/05.png)

</div>
</div>

### Schritt 5

<div className="row">
<div className="col col--6">

3\. Restliche URL aus deinem Account hineinkopieren

4\. Meter Values auf 60 s setzen.

5\. Speichern

</div>
<div className="col col--6 text--center">

![Ventisei Swiss – Abbildung 6](/img/ocpp-ladestationen-ventisei-swiss/06.png)

</div>
</div>

### Schritt 6

Station Neustarten und danach sollte sie sich erfolgreich mit deinem eCarUp Account verbinden. 

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Ventisei Swiss – Abbildung 7](/img/ocpp-ladestationen-ventisei-swiss/07.png)

![Ventisei Swiss – Abbildung 8](/img/ocpp-ladestationen-ventisei-swiss/08.png)
