---
title: 'Alfen'
slug: '/ocpp-ladestationen/alfen'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Alfen'
---
<div className="row">
<div className="col col--8">

## Backend Integrationsanleitung

Alfen Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--4 text--center">

![Alfen – Abbildung 1](/img/ocpp-ladestationen-alfen/01.jpg)

</div>
</div>

[Alfen Wallbox](https://web.ecarup.com/backend/alfen-eve/)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung der Alfen Ladestation

- Version 6.5.0-4217 getestet

![Alfen – Abbildung 2](/img/ocpp-ladestationen-alfen/02.png)

![Alfen – Abbildung 3](/img/ocpp-ladestationen-alfen/03.png)

Unter dem Menü-Punkt "MeterValue" den Wert auf 30s einstellen. 

### ⚠️Wichtig

Wenn deine Alfen den Firmwarestand 7.2.x oder höher hat, musst du den im eCarUp-Webportal hinterlegten Preis ebenfalls im ICU-Alfen-Portal hinterlegen. Ansonsten erscheint der Fehlercode 214.

Fehlermeldung im Logs

StatusNotification \[2, "16927", "StatusNotification", &#123;"connectorId":1,"errorCode":"OtherError","info":"Tariffs or currency not or invalidly configured","status":"Faulted","vendorErrorCode":"214"&#125;\]

![Alfen – Abbildung 4](/img/ocpp-ladestationen-alfen/04.jpg)

![Alfen – Abbildung 5](/img/ocpp-ladestationen-alfen/05.png)

## Ältere Konfiguration

### Installation ACE Service Installer

1.  Öffne den ACE Service Installer und logge dich ein 

2.  Wähle die richtige Station aus deinem Netzwerk

3.  Stelle sicher, dass mindestens die Firmware 3.3.6-2840 installiert ist

4.  Wähle im Menüband oben "Connectivity"  

5.  Setze unter dem Reiter "General" das  "Backoffice preset" auf "Manually enter  backend settings" 

6.  Setze die "Connect method" auf "Wired" (für den Betrieb über LAN) oder "GPRS" (für den Betrieb mit SIM Karte) 

7.  Ändere das "Protocol" auf "OCPP 1.6"

8.  Wechsle zum Reiter "Transaction data", und wähle bei "Disconnect action" die Option "Abort Unlock". Damit gibt die Station bei Verbindungsabbruch das Kabel frei.

![Alfen – Abbildung 6](/img/ocpp-ladestationen-alfen/06.png)

![Alfen – Abbildung 7](/img/ocpp-ladestationen-alfen/07.png)

### Betrieb mit LAN / Ethernet Anschluss

9. Wechsle zum Reiter "Wired"

10. Hinterlege im Feld  "Back office URL" den ersten Teil der OCPP URL aus den Vorbereitungen (ws://www.ecarup.com)

11. Hinterlege im Feld "Back office path" den zweiten Teil der OCPP URL aus den Vorbereitungen. Damit wird deine Station direkt deinem Account zugewiesen.

Wichtig: Nachdem alle Einstellungen vorgenommen wurden, muss die Station neu gestartet werden.

![Alfen – Abbildung 8](/img/ocpp-ladestationen-alfen/08.png)

### Betrieb mit SIM-Karte

12. Aktiviere die "Advanced Settings" und wechsele zum Reiter "GPRS"

13. Hinterlege im Feld  "Back office URL" den ersten Teil der OCPP URL aus den Vorbereitungen (ws://www.ecarup.com)

14\. Ergänze im Feld "Back office path" den zweiten Teil der OCPP URL aus den Vorbereitungen. Damit wird die Station direkt ihrem Account zugewiesen.

15. Hinterlege im Feld "APN Name" deinen Provider (z.B. gprs.swisscom.ch). "APN Username" und "APN Passwort" können Sie freilassen.

Wichtig: Nachdem alle Einstellungen vorgenommen wurden, muss die Station neu gestartet werden.

![Alfen – Abbildung 9](/img/ocpp-ladestationen-alfen/09.png)

Die Ladestation der ICU ALFEN sind nun in deinem eCarUp Account als Ladestationen erfasst und können, wie bei  Konfiguration in eCarUp beschrieben, konfiguriert werden. Falls es sich um eine ICU Pro mit zwei Ladepunkten handelt, kannst du nach der Installation beide im Backend bearbeiten.

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Alfen – Abbildung 10](/img/ocpp-ladestationen-alfen/10.png)

![Alfen – Abbildung 11](/img/ocpp-ladestationen-alfen/11.png)
