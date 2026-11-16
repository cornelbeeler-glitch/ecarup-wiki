---
title: 'Alarms'
slug: '/funktionen/wartung/alarme'
description: 'This function is part of Maintenance, which requires a licence.'
sidebar_label: 'Alarms'
---
This function is part of Maintenance, which requires a licence.

## Information

With the alarm function, you can configure automatic e-mail notifications for certain actions. The main purpose is to detect connection failures (charging stations going offline) and to enable a proactive response. 

![Alarms – Figure 1](/img/funktionen-wartung-alarme/01.png)

The alarm function is available for all charging stations integrated via OCPP (alarm notifications for [Pico](/smart-me-pico) charging stations can be set up via the [smart-me If / Then actions](https://wiki.smart-me.com/konfiguration/wenndann-aktionen/alarme)). Alarm notifications can currently be set up for three events:

1.  Activation of a charging session

2.  Deactivation of a charging session

3.  Alarm for stations with the status "offline" or "inactive" (including a notification when the connection is restored)


Important: The e-mail notifications are sent with different subject lines. One e-mail when the station goes offline and one e-mail when the station comes back online. 


Alarms can be set up per station group or for individual stations.

Note: In the current version, only English can be selected as the notification language.

## Configuration

![Alarms – Figure 2](/img/funktionen-wartung-alarme/02.png)

1.  Click Create (Erstellen)

2.  Name your alarm rule

3.  You can choose between a station and the station group

4.  Select the desired station / if you have chosen the group, you can select the group there

5.  Select the trigger type:


- Charging started (Aufladung gestartet)

- Charging stopped (Aufladung gestoppt)

- Station unavailable (Station nicht verfügbar)


6.  Here you can enter the e-mail address.


Important: you can also enter several addresses. Separate the different recipients with a semicolon ; between the addresses.

Example: info@ecarup.com;support@ecarup.com

7.  Initially, the alarm e-mail is only sent in English. 

8.  Save (Speichern)


## How the "offline" or "inactive" notification works

The alarm for stations with the status "offline" or "inactive" works as follows:

This status is assigned automatically by the eCarUp backend when a station has not connected to the backend for more than 15 minutes, which means activation / billing can no longer be guaranteed. The procedure is then as follows:


1.  If the outage lasts longer than 15 minutes, an e-mail is sent to all defined recipients.

2.  If the outage persists, another e-mail is sent to all defined recipients after one hour.

3.  If the outage still persists, another e-mail is sent to all defined recipients after 24 hours.


After that, the alarm is closed for the eCarUp system and is no longer tracked. Outages of less than 15 minutes do not trigger an e-mail.

In the vast majority of cases, an outage is caused by a failure (or disruption) of the internet connection, which makes communication with our servers impossible. Less frequently, it can also be a power failure. In both cases, the station automatically reconnects to the backend once the cause has been resolved (status "Ready" (Bereit)\*) and can be used normally again.

Important: when the station comes back online, you also receive a notification (e-mail) that the station is available again. 

## When is an alarm triggered

An alarm is triggered when Lost or Finish Connection/Processing is detected.

![Alarms – Figure 3](/img/funktionen-wartung-alarme/03.png)

![Alarms – Figure 4](/img/funktionen-wartung-alarme/04.png)

## Behaviour with the status "Faulted" or "Unavailable"

As soon as the status "Faulted" or "Unavailable" is received from the station, eCarUp automatically triggers an alarm after a waiting period of 15 minutes. 

![Alarms – Figure 5](/img/funktionen-wartung-alarme/05.png)

When the status is marked as resolved and the station sends us the status "Available", we immediately notify the station operator so that they are informed that the function has been restored.
