---
title: 'Loxone'
slug: '/ocpp-ladestationen/loxone'
description: 'Backend integration guide'
sidebar_label: 'Loxone'
---
<div className="row">
<div className="col col--6">

## Backend integration guide

Loxone stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price.

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more here about our [premium features](/funktionen)

</div>
<div className="col col--6 text--center">

![Loxone – Figure 1](/img/ocpp-ladestationen-loxone/01.jpg)

</div>
</div>

[Wallbox 11kW 16A Tree](https://shop.loxone.com/dech/wallbox-tree.html)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## Connecting the Loxone charging station

<Video src="1n1R5rs9bk8" title="YouTube video, OCPP integration in Loxone Config" />

## Connecting via the Loxone Miniserver

Important: The Miniserver software must be at version 15.2 or higher. 

Hardware prerequisite: 

- Loxone Miniserver (2nd Gen)

Recommendation: 

- Wallbox Tree

- 3-Phase Energy Meter Tree

Charging stations from third-party manufacturers can also be connected: [Loxone Library](https://library.loxone.com/?s=wallbox) 

### Configuration:

1.  Add the OCPP Server Connector Plugin as a network device

2.  In the settings of the OCPP Server Connector Plugin, add the OCPP URL from your account. 

3.  (Optional) Add a separate charge point for each wallbox. 

![Loxone – Figure 2](/img/ocpp-ladestationen-loxone/02.png)

![Loxone – Figure 3](/img/ocpp-ladestationen-loxone/03.png)

### Useful links:

[Loxone integration guide](https://www.loxone.com/dede/kb/ocpp-integration/)

[Loxone OCPP feature scope](https://www.loxone.com/dede/kb/ocpp-server-connector-beta/)

## Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval of 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Loxone – Figure 4](/img/ocpp-ladestationen-loxone/04.png)

![Loxone – Figure 5](/img/ocpp-ladestationen-loxone/05.png)
