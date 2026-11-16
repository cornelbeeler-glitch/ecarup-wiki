---
title: 'Sungrow'
slug: '/ocpp-ladestationen/sungrow'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Sungrow'
---
<div className="row">
<div className="col col--8">

## Backend Integrationsanleitung

</div>
<div className="col col--4 text--center">

![Sungrow – Abbildung 1](/img/ocpp-ladestationen-sungrow/01.jpg)

</div>
</div>

Sungrow IDC30E

## Backend Integrationsanleitung

Sungrow Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal) 

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

### Sungrow IDC30E

### Integration über das Display

1.  Drücke für 5 Sekunden auf das Zeitformat auf dem Display

![Sungrow – Abbildung 2](/img/ocpp-ladestationen-sungrow/02.png)

2\. Für den Zugang brauchst du den mitgelieferten Code. 

![Sungrow – Abbildung 3](/img/ocpp-ladestationen-sungrow/03.png)

3\. Gehe zur Seite 4

4\. Bei Websocket auf "others" klicken

5\. Bei Other bitte deine eCarUp URL eintippen.

6\. Station neustarten. 

![Sungrow – Abbildung 4](/img/ocpp-ladestationen-sungrow/04.png)

Beispiel:

- wss://[www.ecarup.com/api/Ocpp16/D8D2Axxxxxxxx](http://www.ecarup.com/api/Ocpp16/D8D2Axxxxxxxx)

![Sungrow – Abbildung 5](/img/ocpp-ladestationen-sungrow/05.png)

### Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Sungrow – Abbildung 6](/img/ocpp-ladestationen-sungrow/06.png)

![Sungrow – Abbildung 7](/img/ocpp-ladestationen-sungrow/07.png)
