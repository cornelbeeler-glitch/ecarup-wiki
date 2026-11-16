---
title: 'Circontrol'
slug: '/ocpp-ladestationen/circontrol'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Circontrol'
---
## Backend Integrationsanleitung

Circontrol Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)


### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Station installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.


## Einbindung der Circontrol Ladestation

Die ersten Schritte müssen direkt auf dem Display Ihrer Station vorgenommen werden:

1.   Verbinde deinen Laptop mit der Station

2.   Bitte entnehme die aktuelle IP Adresse der Station aus der beigeführten Anleitung 

3.  Danach im Web-Browser die IP Adresse eingeben

4.  Dashboard von Circontrol erscheint

5.  Verbindungsart auswählen (GSM, LAN...)


Bitte beachte folgendes:

Bei Auslieferung der Station kann es vorkommen, dass die Default-Einstellung auf Plug & Charge ist. Dies muss natürlich vorgängig noch deaktiviert werden. 

Bitte kontaktiere BIBUS oder Circontrol für das Tool. 

Dazu muss der Charge Point Manager installiert werden und die Settings sehen wie folgt aus:

- Status muss auf Enabled gestellt werden


![Circontrol – Abbildung 1](/img/ocpp-ladestationen-circontrol/01.png)

### Settings Webinterface von Circontrol

1.  Integration 

2.  OCPP 1.6J anwählen

3.  LINK (klicken)

4.  Benutzername & Passwort findest du auf der Anleitung


![Circontrol – Abbildung 2](/img/ocpp-ladestationen-circontrol/02.png)

Bei der Charge Box muss der Stationsname definiert werden. X-Beliebiger Name 

(Achtung ohne Leerschlag) 



![Circontrol – Abbildung 3](/img/ocpp-ladestationen-circontrol/03.png)

![Circontrol – Abbildung 4](/img/ocpp-ladestationen-circontrol/04.png)

- Unter Central System den OCPP URL von deinem Account hinterlegen


![Circontrol – Abbildung 5](/img/ocpp-ladestationen-circontrol/05.png)

⚠️ Wichtig: Metervalue sample interval (s) zwingend einstellen auf z.B. 60

## Downloads

EN\_eNext-Park\_User-Manual\_v2.0 (1).pdf

EN\_Charge-Point-Manager\_Instruction-Manual.pdf

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 



Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)


![Circontrol – Abbildung 6](/img/ocpp-ladestationen-circontrol/06.png)

![Circontrol – Abbildung 7](/img/ocpp-ladestationen-circontrol/07.png)
