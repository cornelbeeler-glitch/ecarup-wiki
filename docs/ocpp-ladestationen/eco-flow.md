---
title: 'Eco-Flow'
slug: '/ocpp-ladestationen/eco-flow'
description: 'Eco-Flow Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden.'
sidebar_label: 'Eco-Flow'
---
![Eco-Flow – Abbildung 1](/img/ocpp-ladestationen-eco-flow/01.jpg)

Eco-Flow Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

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


## Einbindung der PowerPulse

### Vorbereitende Schritte für die Integration der PowerPulse

1.  Installiere auf deinem Handy die Eco-Flow App

2.  Verbinde nun deine Ladestation mit der App 

3.  Sobald die Ladestation in der App auffindbar ist bitte folgende Einstellungen vornehmen. 


### ⚠️ Wichtig

1.  Die Station wurde mit der Firmware Version v1.0.9.10 erfolgreich getestet

2.  Die getestete App Version von Eco-Flow ist v6.13.9

3.  Aktuell funktionieren nur RFID-Karten von Eco-Flow


![Eco-Flow – Abbildung 2](/img/ocpp-ladestationen-eco-flow/02.png)

1.  Wähle die verbundene Station aus.


![Eco-Flow – Abbildung 3](/img/ocpp-ladestationen-eco-flow/03.png)

2\. Klicke oben rechts auf das Icon

![Eco-Flow – Abbildung 4](/img/ocpp-ladestationen-eco-flow/04.png)

3\. OCPP-Steuerung anwählen

![Eco-Flow – Abbildung 5](/img/ocpp-ladestationen-eco-flow/05.png)

4\. OCPP\-Steuerung aktivieren

![Eco-Flow – Abbildung 6](/img/ocpp-ladestationen-eco-flow/06.png)

5\. OCPP-Dienstleister auf manuell eingeben stellen. 

6\. Dein eCarUp URL hinzufügen

7\. speichern.

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 



Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)


![Eco-Flow – Abbildung 7](/img/ocpp-ladestationen-eco-flow/07.png)

![Eco-Flow – Abbildung 8](/img/ocpp-ladestationen-eco-flow/08.png)
