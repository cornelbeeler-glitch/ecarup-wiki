---
title: 'easee'
slug: '/ocpp-ladestationen/easee'
description: 'Backend Integrationsanleitung'
sidebar_label: 'easee'
---
<div className="row">
<div className="col col--8">

## Backend Integrationsanleitung

Easee Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--4 text--center">

![easee – Abbildung 1](/img/ocpp-ladestationen-easee/01.jpg)

</div>
</div>

[easee](https://easee.com/de/)

### Integration von OCPP Stationen

Allgemeine Information zur [Inbetriebnahme OCPP-Station](/stationsbetreiber/inbetriebnahme-ocpp-station) 

Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

1.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

2.  Klicke im Menü, links auf den Reiter "Stationen".

3.  Wähle den Reiter "OCPP" aus.

4.  Kopiere die URL in die Zwischenablage. 

    1.  ws Link ohne Basic Auth: Getestet und funktioniert

    2.  wss ohne Basic Auth: Getestet und funktioniert

    3.  wss mit Basic Auth: nicht getestet

5.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung der easee Ladestation

### Wichtig:

- easee Charge Max kann nur über die RFID-Karte mit eCarUp aktiviert werden. Über die App geht es nicht Aufgrund technischer Limtierung. 

### Die easee Station kann zudem die 15-Minuten Werte an smart-me übermitteln. Erfahre hierzu mehr unter 15 Minuten Datenimport.

<Video src="wg6LeZTT1NQ" title="YouTube Video, Integrationsanleitung für easee Ladestationen ins eCarUp Backend" />

### Video Integrationsanleitung für easee Ladestationen ins eCarUp Backend

## Einbindung ins eCarUp Portal

### Webportal von easee

Mittels folgendem [LINK](https://portal.easee.com/apps/any/open?action=17&item=%7Bovar%3A+2%2C+oid%3A+15%7D) kannst du im easee Webportal die eCarUp URL direkt einpflegen. 

1.  Link im Browser öffnen

2.  Wähle den gewünschte Standort aus

3.  Falls der technische Betreiber noch nicht auf smart-me/eCarUp eingestellt ist, bitte mit JA bestätigen. 

4.  Den Laderoboter anwählen und bearbeiten

5.  Hier kannst du die OCPP URL aus deinem eCarUp Account hinterlegen. 

6.  Speichern.

7.  Nach ca. 15 Minuten erscheint die Station automatisch im eCarUp Portal.

Hinweis: Folgende Varianten funktionieren.

- ws://www.ecarup.com/api/Ocpp16/4FEF6CFXXXXXX

- wss://www.ecarup.com/api/Ocpp16/4FEF6CFXXXXXXX

- 4B49FXXXXXXX

![easee – Abbildung 2](/img/ocpp-ladestationen-easee/02.png)

![easee – Abbildung 3](/img/ocpp-ladestationen-easee/03.png)

![easee – Abbildung 4](/img/ocpp-ladestationen-easee/04.png)

### easee App

1.  Scanne der QR-Code mit deinem Handy

2.  Du wirst direkt in dein easee Account weitergeleitet. 

3.  Dort kannst du ebenfalls den gewünschten Standort auswählen

4.  Die eCarUp URL hinzufügen. 

5.  Speichern. 

6.  Nach ca. 15 Minuten erscheint die Station automatisch im eCarUp Portal.

Hinweis: Folgende Varianten funktionieren.

- ws://www.ecarup.com/api/Ocpp16/4FEF6CFXXXXXX

- wss://www.ecarup.com/api/Ocpp16/4FEF6CFXXXXXXX

- 4B49FXXXXXXX

<div className="row">
<div className="col col--6 text--center">

![easee – Abbildung 5](/img/ocpp-ladestationen-easee/05.png)

</div>
<div className="col col--6 text--center">

![easee – Abbildung 6](/img/ocpp-ladestationen-easee/06.jpg)

</div>
</div>

### Links

- [Webinaraufzeichnung easee Ladestationen im eCarUp Backend](https://web.ecarup.com/webinar-easee-ladestationen-mit-backend-von-ecarup/)

- [Funktionen der easee Wallbox im eCarUp Backend](https://web.ecarup.com/backend/easee-backend/)

- [15 Minuten Datenimport](/funktionen/15-minuten-datenimport) 

- [QR-Code für OCPP URL](https://drive.google.com/file/d/1G5iU7GsE51cgZ9RZixxFC0FLfuJDfGT9/view?usp=sharing)

## Ohne Authentifizierung + Offline Laden

<div className="row">
<div className="col col--8">

Verbinde die easee Station wie gewohnt über die Installation mit eCarUp. (Schritt 1-7)

Sobald die Station im eCarUp ersichtlich ist navigiere zum  Wartungstool. ([Link](/funktionen/wartung))

Wähle dort die gwünschte Station aus, klicke auf die 3 Punkte und wähle "Change Configuration"

</div>
<div className="col col--4 text--center">

![easee – Abbildung 7](/img/ocpp-ladestationen-easee/07.png)

</div>
</div>

1.  Wähle "Benutzerdefinierten Befehl"

2.  Custom Key = freecharging

3.  Value = true

4.  Set

In diesem Kontext müssen wir zuerst der Station mitteilen, dass sie freies Laden zulassen darf.

![easee – Abbildung 8](/img/ocpp-ladestationen-easee/08.png)

1.  Klicke erneut auf "Change Configuration"

2.   "Benutzerdefinierten Befehl"

3.  Custom Key = rfidtagfreecharging

4.  Value = XXXX (ein RFID-Token der du bei eCarUp einem User zuordnest)

5.  Set

In diesem Kontext müssen wir der Station mitteilen, welcher RFID-Token mitgesendet werden soll, sobald die Ladung startet. Vorteil: Die Session wird bei eCarUp aufgezeichnet. 

![easee – Abbildung 9](/img/ocpp-ladestationen-easee/09.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![easee – Abbildung 10](/img/ocpp-ladestationen-easee/10.png)

![easee – Abbildung 11](/img/ocpp-ladestationen-easee/11.png)
