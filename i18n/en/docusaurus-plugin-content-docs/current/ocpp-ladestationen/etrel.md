---
title: 'Etrel'
slug: '/ocpp-ladestationen/etrel'
description: 'Backend integration guide'
sidebar_label: 'Etrel'
---
<div className="row">
<div className="col col--8">

## Backend integration guide

Etrel stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price.

- Prerequisite for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more here about our [Premium features](/funktionen)

</div>
<div className="col col--4 text--center">

![Etrel – Figure 1](/img/ocpp-ladestationen-etrel/01.jpg)

</div>
</div>

[Etrel Wallbox](https://etrel.com/)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the station in question and paste the copied URL.

## Connecting the Etrel Wallbox

- Open the network and internet settings of your PC

- Here you must assign a static IP address, e.g. 192.168.1.50

- Then connect your PC to the wallbox and open the following "default" IP of the station in your browser: 192.168.1.250. Please refer to the guide supplied with the station for the exact login details

- The software version must be at least 4.0.4

![Etrel – Figure 2](/img/ocpp-ladestationen-etrel/02.png)

Under Diagnostics you can check your current software version. 

1.  Under Device Mode, please switch from 1 user without authorisation to multiple users with authorisation!

![Etrel – Figure 3](/img/ocpp-ladestationen-etrel/03.png)

2\. Via EVSE Configuration you can have the QR code generated in the eCarUp web portal shown on the charger's display. 

Always use https://ecarup.com/app/?serial=xxxxxxxxxxxxx for this (custom, see example on the right)

![Etrel – Figure 4](/img/ocpp-ladestationen-etrel/04.png)

![Etrel – Figure 5](/img/ocpp-ladestationen-etrel/05.png)

3\. Under User, set Charging authorization to Central System Only. 

![Etrel – Figure 6](/img/ocpp-ladestationen-etrel/06.png)

4\. Connectivity: select a medium, either Ethernet or WiFi connection.

5\. Set communication with the Central System to "enabled"

6\. Under Central System Connectivity, add your eCarUp URL from the station owner account under Endpoint URL.

![Etrel – Figure 7](/img/ocpp-ladestationen-etrel/07.png)

### Note the Additional Settings:

1.  Heartbeat interval to 60s

2.  Meter Values to 60s

and finally, don't forget to save. 

![Etrel – Figure 8](/img/ocpp-ladestationen-etrel/08.png)

### Final check:

<div className="row">
<div className="col col--8">

- If the "Cloud" looks like the one in the image on the right, the station has successfully established a connection to the backend.

</div>
<div className="col col--4 text--center">

![Etrel – Figure 9](/img/ocpp-ladestationen-etrel/09.png)

</div>
</div>

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the Meter Values can vary from station to station. We recommend an interval of between 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Etrel – Figure 10](/img/ocpp-ladestationen-etrel/10.png)

![Etrel – Figure 11](/img/ocpp-ladestationen-etrel/11.png)
