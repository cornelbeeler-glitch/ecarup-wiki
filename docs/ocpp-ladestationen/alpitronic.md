---
title: 'Alpitronic'
slug: '/ocpp-ladestationen/alpitronic'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Alpitronic'
---
<div className="row">
<div className="col col--8">

## Backend Integrationsanleitung

Alpitronic Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--4 text--center">

![Alpitronic – Abbildung 1](/img/ocpp-ladestationen-alpitronic/01.jpg)

</div>
</div>

[Alpitronic Hypercharger](https://www.alpitronic.it/en/)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung der Alpitronic Ladestation

### ⚠️ Achtung nicht vergessen Der erste Konfigurationsschritt muss im Feld “Network Configuration” getätigt werden. (Details findest du im File von Hypercharger)

### Auf die Station zugreifen

1\. Verbinde deinen PC über den Ethernet-Anschluss mit der Säule. Dieser ist mit XF1 gekennzeichnet und befindet sich an der Säule im unteren Bereich auf der Seite der Displaytür.

2\. Greife auf die Weboberfläche zu, indem Sie einen Browser öffnen und die Standard IP-Adresse 192.168.1.100. eingeben.

3\. Benutze die Standardbenutzerdaten, um Zugang zur Weboberfläche zu erhalten (Benutzername: admin, Kennwort: admin123).

![Alpitronic – Abbildung 2](/img/ocpp-ladestationen-alpitronic/02.png)

### Wichtig

- OCPP 1.6 auswählen

- Der ganze eCarUp URL in den WebSocketUrl kopieren!

- Security Profile bei Default auf 0 setzen

- Save Configuration nicht vergessen.

![Alpitronic – Abbildung 3](/img/ocpp-ladestationen-alpitronic/03.png)

### Bitte beachte folgenden Punkt

- KiskModeEnabled muss auf "false" sein. 

Ansonsten kann der Fahrer einstecken und kostenlos laden. 

![Alpitronic – Abbildung 4](/img/ocpp-ladestationen-alpitronic/04.png)

Zum Schluss bitte "Hard Reset" durchführen.

![Alpitronic – Abbildung 5](/img/ocpp-ladestationen-alpitronic/05.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Alpitronic – Abbildung 6](/img/ocpp-ladestationen-alpitronic/06.png)

![Alpitronic – Abbildung 7](/img/ocpp-ladestationen-alpitronic/07.png)
