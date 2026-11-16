---
title: 'Wartung'
slug: '/funktionen/wartung'
description: 'Um die Wartungsfunktion zu nutzen, benötigst du eine eCarUp Premium Lizenz.'
sidebar_label: 'Wartung'
---
Um die Wartungsfunktion zu nutzen, benötigst du eine eCarUp Premium Lizenz.

[Kompatible Ladestationen](#kompatible-ladestationen)

[Wartung](#wartung)

[Beispiele für Get und Change Configuration](#beispiele-für-get-und-change-configuration)

[MeterValueSampleInterval](#metervaluesampleinterval)

[MeterValuesSampledData](#metervaluessampleddata)

[UnlockConnectorOnEVSideDisconnect](#unlockconnectoronevsidedisconnect)

Die Wartung ermöglicht es, erweiterte Konfigurationen und Diagnose von OCPP Stationen vorzunehmen. Diese ist dazu da, Störungen von OCPP Stationen zu erkennen und zu beheben.

<Video src="t3Z3fxK62Ak" title="YouTube Video, Wartung von OCPP E-Ladestationen - im eCarUp Webportal" />

### Kompatible Ladestationen

Die Wartungsfunktion ist mit allen [OCPP-Ladestationen](/ocpp-ladestationen) im eCarUp-System kompatibel.

### Wartung

Auf der Registerkarte "Wartung" kann eine OCPP Station diagnostiziert, parametriert und erweitert konfiguriert werden. Dies dient einerseits zum Erkennen von Störungen, sowie diese aktiv und direkt remote zu beheben (bitte beachte, dass diese Befehle die Station auch unterstützen muss).

- Einsicht in die [OCPP- Logs](/funktionen/wartung/ocpp-logs)


- Unlock Connector: Das Kabel an der Station wird entriegelt

- Reset Device: Die Software der Station wird neu gestartet, ACHTUNG: aktive Ladevorgänge werden abgebrochen

- Get Configuration: Die aktuelle Konfiguration der Station wird ausgewiesen

- Change Configuration: Die Konfiguration kann geändert werden

- Get Diagnostics: Es wird ein aktueller Fehlerbericht ausgegeben (ext. Server notwendig)

- Firmware: Die aktuelle Firmware Version wird ausgegeben (ext. Server notwendig)


![Wartung – Abbildung 1](/img/funktionen-wartung/01.png)

## Beispiele für Get und Change Configuration

Wichtig, damit das funktioniert muss die Station die Befehle unterstützen.

### MeterValueSampleInterval

Damit in der App die Ladeleistung angezeigt werden kann, brauchen wir in regelmässigen Abständen die MeterValues. 

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. 



Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben) 




![Wartung – Abbildung 2](/img/funktionen-wartung/02.png)

![Wartung – Abbildung 3](/img/funktionen-wartung/03.png)

### MeterValuesSampledData

Damit in der App auch die richtige Ladeleistung angezeigt wird, brauchen wir in den MeterValues auch den Wert Power.Active.Import.

Die Abfrage bei einer Ladestation kann wie folgt aussehen:

![Wartung – Abbildung 4](/img/funktionen-wartung/04.png)

Bei der Abfrage haben wir gesehen, dass der Wert "Power.Active.Import" fehlt. 

Nun fügen wir den fehlenden Wert bei der Change Configuration wie im unteren Beispiel, ein und klicken auf Set. 

![Wartung – Abbildung 5](/img/funktionen-wartung/05.png)

### UnlockConnectorOnEVSideDisconnect

Möchtest du das Kabel an der Ladestation fix verriegeln lassen?

Folgender Wert kann abgefragt werden:

![Wartung – Abbildung 6](/img/funktionen-wartung/06.png)

Kabel an der Station einstecken und über die ChangeConfiguration den Wert auf false setzen. 

![Wartung – Abbildung 7](/img/funktionen-wartung/07.png)

[Hier gelangst du zur Analyse & Hilfestellung der OCPP-Logs](/funktionen/wartung/ocpp-logs).
