---
title: 'Ensto'
slug: '/ocpp-ladestationen/ensto'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Ensto'
---
<div className="row">
<div className="col col--8">

## Backend Integrationsanleitung

Ensto Stationen, die ein Bender-Controller beinhalten, können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--4 text--center">

![Ensto – Abbildung 1](/img/ocpp-ladestationen-ensto/01.jpg)

</div>
</div>

[Ensto Chago Wallbox](https://www.ensto.com/de/stromverteilungsnetze/)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Integration ins eCarUp Portal

<Video src="p_fhat0HxZY" title="YouTube Video, Bender Controler in eCarUp Backend integrieren" />

### 1\. Notebook über USB Kabel mit Bender Controller verbinden:

⚠️ Wichtig: Die Micro-USB Schnittstelle verwenden

![Ensto – Abbildung 2](/img/ocpp-ladestationen-ensto/02.png)

### 2\. Auf dem Notebook den Browser öffnen

Gib folgende URL ein: http://192.168.123.123/operator/

- Default Benutzername: operator

- Default Password: yellow\_zone

### 3\. Firmware Version prüfen:

<div className="row">
<div className="col col--8">

Es muss mindestes die Version 4.00-2139 installiert sein.

Unter State -> Firmware Version findet man die aktuellste Version.

Firmware Update durchführen:

a) Firmware Datei auf einen USB Stick kopieren. USB Stick einstecken.

b) Bender Controller neu starten

</div>
<div className="col col--4 text--center">

![Ensto – Abbildung 3](/img/ocpp-ladestationen-ensto/03.png)

</div>
</div>

### 4\. Bender konfigurieren

OCPP Mode: OCPP-J 1.6

WebSocket JSON OCPP URL: ws://www.ecarup.com/api/Ocpp16/&#123;ecarupID&#125;/

Beispiel: ws://www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508/

⚠️ Wichtig: Nach der eCarUp OCPP URL muss ein "/" hinzugefügt werden (wie im Beispiel gezeigt). Zudem darf in der "ChargePoint ID (OCPP)" kein Sonderzeichen vorkommen.

![Ensto – Abbildung 4](/img/ocpp-ladestationen-ensto/04.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Ensto – Abbildung 5](/img/ocpp-ladestationen-ensto/05.png)

![Ensto – Abbildung 6](/img/ocpp-ladestationen-ensto/06.png)
