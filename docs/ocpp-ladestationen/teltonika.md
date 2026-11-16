---
title: 'Teltonika'
slug: '/ocpp-ladestationen/teltonika'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Teltonika'
---
<div className="row">
<div className="col col--8">

## Backend Integrationsanleitung

Teltonika Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--4 text--center">

![Teltonika – Abbildung 1](/img/ocpp-ladestationen-teltonika/01.jpg)

</div>
</div>

[TeltoCharge](https://teltonika-energy.com/)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung der Telto-Charge

### Vorbereitende Schritte für die Integration der Teltonika

1.  Installiere auf deinem Handy die Teltonika Energy App

2.  Verbinde nun deine Ladestation mit der App (Einrichtung über Hotspot oder Internet)

3.  Sobald die Ladestation in der App auffindbar ist bitte folgende Einstellungen vornehmen. 

### ⚠️ Wichtig

1.  Die Station wurde mit der Firmware Version v1.8.11 erfolgreich getestet

2.  Die getestete App Version von Teltonika ist 1.9.0

3.  Aktuell schwankt die Leistungsanzeige in der eCarUp App stark. Es wird nach einer Lösung gesucht. 

![Teltonika – Abbildung 2](/img/ocpp-ladestationen-teltonika/02.png)

1.  Verbundene Station anwählen

![Teltonika – Abbildung 3](/img/ocpp-ladestationen-teltonika/03.png)

2\. Oben rechts auf das Zahnrad klicken

![Teltonika – Abbildung 4](/img/ocpp-ladestationen-teltonika/04.png)

3\. Connectivity anwählen

![Teltonika – Abbildung 5](/img/ocpp-ladestationen-teltonika/05.png)

4\. OCPP auswählen

![Teltonika – Abbildung 6](/img/ocpp-ladestationen-teltonika/06.png)

5\. OCPP URL hinzufügen

![Teltonika – Abbildung 7](/img/ocpp-ladestationen-teltonika/07.png)

Wichtig:

- OCPP URL aus Ihrem eCarUp Account

- Am Schluss der URL ein / ergänzen. 

- Speichern

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Teltonika – Abbildung 8](/img/ocpp-ladestationen-teltonika/08.png)

![Teltonika – Abbildung 9](/img/ocpp-ladestationen-teltonika/09.png)
