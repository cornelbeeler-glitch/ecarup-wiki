---
title: 'BoxProxy Release Update'
slug: '/sonstige-informationen/boxproxy-releases'
description: 'BoxProxy Release v2026-05-26'
sidebar_label: 'BoxProxy-Releases'
---
BoxProxy Release v2026-05-26

- Special case for Network 2 Stations: Send "!SPVAL with spvalPlugAction:Stop" instead of RemoteStop


BoxProxy Release v2025-12-10

Workarounds because of Firmware Bugs in eaton stations:

- Plug activity intervall shall be the same as heartbeat.

- Request ID for SetPlugValueRequest shall be 0

    Box Proxy Release 2025-11-19


Fixes

- When the signature is invalid send a answer with the processed state = 0:

- Workaround for invalid energy data in meter-stop message

- Add user-configurable PlugActivityUpdateTime for charging stations

- Throttle OCPP Status Notifications to 55s interval or important state changes


BoxProxy Release 2025-10-27

Features

- Send and additional RemoteStop if ecarup denies a StartTransaction (Bug in eaton stations)


ecarup BoxProxy Gateway 2025-10-02

Fixes

-  Fix memory leak (Terminate Ghost Websockets after 15min)

-  Add health checks


ecarup BoxProxy Release 2025-09-25

Bug fix

- Workaround of the Workaround: Only correct the meter value on a eaton station if the plug is not free


ecarup BoxProxy Release 2025-09-24

Features

- Fix the station's Firmware Problem in the Cloud Part 2: Reset station if no Mode3\_C was received in the first 50s


ecarup BoxProxy Release 2025-09-16

Features

- Replace empty auth tag for free chargings with user-configurable auth tag

- Add logging for invalid signature

- Add restart counter for each station to the UI


eCarUp BoxProxy Release 2025-09-09

Features

- Add Terminate BoxProxy Connection functionality to RocketmasterStationAssignment UI


eCarUp BoxProxy Release 2025-09-02

Bug fixed

- Try to solve the eaton stations problem on the Cloud: Correct MeterValues of the stations if they are crap. Send a SPVAL to update the MeterValue on the station.


eCarUp BoxProxy Release 2025-09-01

Bug fixed

- Fix Bug with mixed transactions (Non awaited LanguageExt issue)


Boxproxy Release 2025-08-20 v2

Features

- 15min OCPP Websocket timeout. Close socket when 15min nothing was received from the backend.


Bugs

- Download of big Logs is now possible


Boxproxy Release 2025-08-20

Features

- Workaround for eaton station that reset the meterValue to 0 during a charging session. 


Some Eaton stations are rebooting and incorrectly resetting the energy count to zero during a charging session. We've released a fix that now tracks these events and corrects the final energy value.

BoxProxy OCPP Gateway Release 2025-03-13

- Workaround for inconsistent session ID's of eaton stations
