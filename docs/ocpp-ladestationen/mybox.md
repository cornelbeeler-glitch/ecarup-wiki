---
title: 'mybox'
slug: '/ocpp-ladestationen/mybox'
description: 'Backend Integrationsanleitung'
sidebar_label: 'mybox'
---
<div className="row">
<div className="col col--8">

## Backend Integrationsanleitung

mybox Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--4 text--center">

![mybox – Abbildung 1](/img/ocpp-ladestationen-mybox/01.jpg)

</div>
</div>

[mybox Profi](https://mybox.eco/de/produkt/mybox-profi/)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung der mybox

- Getestete Firmware Version: 20231218\_1.209.4\_v1

### Vorbereitung

- Um die Wallbox einzurichten, müssen Sie eine Verbindung mit dem lokalen Wi-Fi Netzwerk der Ladestation erstellen

- Netzwerkname: MyBox-Rxx +8 Zeichen (Station-ID)

- Bitte entnehme die Login Daten sowie auch die IP-Adresse aus dem mitgelieferter Betriebsanleitung

⚠️ Wichtig: Bei einer internen Störung sendet die Station keine gewohnte Statusmeldung wie "Faulted" oder "Unavailable" an uns.

### Schritt 1

Gehe zu den Advanced Settings 

Bei Authorization wähle bitte den Modus OCPP

![mybox – Abbildung 2](/img/ocpp-ladestationen-mybox/02.png)

### Schritt 2

Dann unter OCPP die Funktion aktivieren und bei OCPP-URL-CS dein eCarUp URL hinterlegen. 

![mybox – Abbildung 3](/img/ocpp-ladestationen-mybox/03.png)

### Schritt 3

Station neu starten. 

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![mybox – Abbildung 4](/img/ocpp-ladestationen-mybox/04.png)

![mybox – Abbildung 5](/img/ocpp-ladestationen-mybox/05.png)
