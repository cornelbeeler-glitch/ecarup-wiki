---
title: 'Go-E'
slug: '/ocpp-ladestationen/go-e'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Go-E'
---
<div className="row">
<div className="col col--8">

## Backend Integrationsanleitung

Go-E Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--4 text--center">

![Go-E – Abbildung 1](/img/ocpp-ladestationen-go-e/01.jpg)

</div>
</div>

[go-e Wallbox](https://go-e.com/de-ch/)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Integrationsanleitung : go-e Ladestationen mit eCarUp verbinden

<Video src="VO0Kms8qsqo" title="YouTube Video, Integrationsanleitung: go-e Ladestationen mit eCarUp verbinden" />

## Einbindung der Go-e Ladestation

⚠️ WICHTIG: 

- Die Firmware der Station muss mindestens die Version 055.0 enthalten 

- Wenn du die Ladestation mit einer RFID-Karte aktivieren muss der Ladevorgang autoseitig beendet werden. 

### Vorbereitende Schritte für die Integration der Go-E

<div className="row">
<div className="col col--8">

1.  Installiere auf deinem Handy die Go-E Charger App

2.  Verbinde nun deine Ladestation mit der App (Einrichtung über Hotspot oder Internet)

3.  Sobald die Ladestation in der App auffindbar ist bitte folgende Einstellungen vornehmen.

</div>
<div className="col col--4 text--center">

![Go-E – Abbildung 2](/img/ocpp-ladestationen-go-e/02.png)

</div>
</div>

<div className="row">
<div className="col col--6">

- geprüfte Firmware in der neuen Übersicht ist 56.8

4\. Gehe zu den Einstellungen

</div>
<div className="col col--6 text--center">

![Go-E – Abbildung 3](/img/ocpp-ladestationen-go-e/03.png)

</div>
</div>

4.1 Einstellungen 

![Go-E – Abbildung 4](/img/ocpp-ladestationen-go-e/04.png)

5. Zugriffskontrolle anwählen

![Go-E – Abbildung 5](/img/ocpp-ladestationen-go-e/05.png)

6\. Authentifizierung erforderlich und speichern

![Go-E – Abbildung 6](/img/ocpp-ladestationen-go-e/06.png)

<div className="row">
<div className="col col--6">

7\. Zurück auf die Übersicht und Verbindung anwählen. Bitte klicke auf OCPP

</div>
<div className="col col--6 text--center">

![Go-E – Abbildung 7](/img/ocpp-ladestationen-go-e/07.png)

</div>
</div>

8.  OCPP Server anwählen

<div className="row">
<div className="col col--6 text--center">

![Go-E – Abbildung 8](/img/ocpp-ladestationen-go-e/08.png)

</div>
<div className="col col--6 text--center">

![Go-E – Abbildung 9](/img/ocpp-ladestationen-go-e/09.png)

</div>
</div>

9.   

- Bei Host: [www.ecarup.com](http://www.ecarup.com)

- Pfad: /api/OCPP16/yourIDxxxx/ID 

⚠️Wichtig: am Ende der URL ein / und die ID oder ein x beliebiger Zusatz

Achtung, bei mehreren Stationen bitte den Zusatz nicht gleich belassen. 

- Änderung speichern und die Station neu starten. 

## altes Layout

4\. Gehe zu den Einstellungen

![Go-E – Abbildung 10](/img/ocpp-ladestationen-go-e/10.png)

5\. Zugriffskontrolle anwählen

![Go-E – Abbildung 11](/img/ocpp-ladestationen-go-e/11.png)

6\. Authentifizierung erforderlich und speichern

![Go-E – Abbildung 12](/img/ocpp-ladestationen-go-e/12.png)

7\. Zurück auf die Übersicht und Internet anwählen

![Go-E – Abbildung 13](/img/ocpp-ladestationen-go-e/13.png)

8.  Firmware Stand überpüfen !

9\. OCPP anwählen

![Go-E – Abbildung 14](/img/ocpp-ladestationen-go-e/14.png)

10.  OCPP 1.6 aktivieren

11. URL aus deinem Account hinzufügen

<div className="row">
<div className="col col--6 text--center">

![Go-E – Abbildung 15](/img/ocpp-ladestationen-go-e/15.png)

</div>
<div className="col col--6 text--center">

![Go-E – Abbildung 16](/img/ocpp-ladestationen-go-e/16.png)

</div>
</div>

12\. nach der URL unbedingt / (&) einen x beliebigen Zusatz

13\. Speichern und Neustarten

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Go-E – Abbildung 17](/img/ocpp-ladestationen-go-e/17.png)

![Go-E – Abbildung 18](/img/ocpp-ladestationen-go-e/18.png)
