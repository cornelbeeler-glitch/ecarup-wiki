---
title: 'CTEK'
slug: '/ocpp-ladestationen/ctek'
description: 'Backend Integrationsanleitung'
sidebar_label: 'CTEK'
---
<div className="row">
<div className="col col--8">

## Backend Integrationsanleitung

CTEK Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--4 text--center">

![CTEK – Abbildung 1](/img/ocpp-ladestationen-ctek/01.jpg)

</div>
</div>

[CTEK Chargestrom 2](https://www.ctek.com/de/ladestationen-f%C3%BCr-elektrofahrzeuge)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung der CTEK Ladestation

Wichtig!

Um die ersten Schritte vorzunehmen musst du einen Treiber von CTEK auf deinem PC installieren (gilt für Windows).

1.   Verbinde deinen Laptop mit der Station (via Mini-USB-Port)

2.   Folgender URL muss eingegeben werden, http://192.168.7.2

3.  Benutzername und Passwort sind ccu

4.  Dashboard von CTEK erscheint

5.  Verbindungsart auswählen (GSM, LAN...)

### Settings Webinterface von C-Tek

1.  Setup muss auf Advanced umgestellt werden. 

2.  OCPP 1.6J als Kommunikations Protokoll auswählen

3.  Beim Backend Endpoint eCarUp URL aus ihrem Account hinein kopieren. 

4.  Die Time Synchronisation wird vom OCPP Backend bezogen.

![CTEK – Abbildung 2](/img/ocpp-ladestationen-ctek/02.png)

5\. Sample Interval auf 60 Sekunden stellen

6\. Vergewissern, dass beim Outlet der Authentifizierungsmodus auf RFID ist. (Natürlich kann parallel immernoch mit dem eCarUp App gestartet werden) 

![CTEK – Abbildung 3](/img/ocpp-ladestationen-ctek/03.png)

### Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![CTEK – Abbildung 4](/img/ocpp-ladestationen-ctek/04.png)

![CTEK – Abbildung 5](/img/ocpp-ladestationen-ctek/05.png)
