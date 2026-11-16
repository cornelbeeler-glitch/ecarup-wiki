---
title: 'Maintenance'
slug: '/funktionen/wartung'
description: 'To use the maintenance function, you need an eCarUp Premium licence.'
sidebar_label: 'Maintenance'
---
To use the maintenance function, you need an eCarUp Premium licence.

[Compatible charging stations](#compatible-charging-stations)

[Maintenance](#maintenance)

[Examples for Get and Change Configuration](#examples-for-get-and-change-configuration)

[MeterValueSampleInterval](#metervaluesampleinterval)

[MeterValuesSampledData](#metervaluessampleddata)

[UnlockConnectorOnEVSideDisconnect](#unlockconnectoronevsidedisconnect)

Maintenance lets you carry out advanced configuration and diagnostics on OCPP stations. Its purpose is to detect and fix faults on OCPP stations.

<Video src="t3Z3fxK62Ak" title="YouTube video, maintenance of OCPP EV charging stations in the eCarUp web portal" />

### Compatible charging stations

The maintenance function is compatible with all [OCPP charging stations](/ocpp-ladestationen) in the eCarUp system.

### Maintenance

On the "Maintenance" ("Wartung") tab, you can diagnose an OCPP station, set its parameters and configure advanced settings. You can use it to detect faults and to fix them directly and remotely (please note that the station must also support these commands).

- View the [OCPP logs](/funktionen/wartung/ocpp-logs)


- Unlock Connector: the cable at the station is unlocked

- Reset Device: the station software is restarted. CAUTION: active charging sessions are cancelled

- Get Configuration: the current configuration of the station is displayed

- Change Configuration: the configuration can be changed

- Get Diagnostics: a current error report is generated (external server required)

- Firmware: the current firmware version is displayed (external server required)


![Maintenance – Figure 1](/img/funktionen-wartung/01.png)

## Examples for Get and Change Configuration

Important: for this to work, the station must support the commands.

### MeterValueSampleInterval

To display the charging power in the app, we need the MeterValues at regular intervals. 

The upload interval of the meter values can vary from station to station. We recommend an interval of 30–60 s. 



You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value) 




![Maintenance – Figure 2](/img/funktionen-wartung/02.png)

![Maintenance – Figure 3](/img/funktionen-wartung/03.png)

### MeterValuesSampledData

For the app to display the correct charging power, we also need the value Power.Active.Import in the MeterValues.

The query on a charging station can look like this:

![Maintenance – Figure 4](/img/funktionen-wartung/04.png)

The query showed that the value "Power.Active.Import" is missing. 

Now add the missing value in Change Configuration as shown in the example below and click Set. 

![Maintenance – Figure 5](/img/funktionen-wartung/05.png)

### UnlockConnectorOnEVSideDisconnect

Do you want the cable to stay permanently locked at the charging station?

The following value can be queried:

![Maintenance – Figure 6](/img/funktionen-wartung/06.png)

Plug the cable into the station and use ChangeConfiguration to set the value to false. 

![Maintenance – Figure 7](/img/funktionen-wartung/07.png)

[Click here for analysis of and help with the OCPP logs](/funktionen/wartung/ocpp-logs).
