---
title: 'Webasto Live'
slug: '/ocpp-ladestationen/webasto'
description: 'Backend integration guide'
sidebar_label: 'Webasto Live'
---
<div className="row">
<div className="col col--6">

## Backend integration guide

Webasto stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when and at what price.

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more here about our [Premium features](/funktionen)

</div>
<div className="col col--6 text--center">

![Webasto Live – Figure 1](/img/ocpp-ladestationen-webasto/01.jpg)

</div>
</div>

[Webasto Wallbox](https://www.webasto.com/de-de.html)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## Integrating the Webasto Live

<Video src="qm5e3OEWeP4" title="YouTube video, integrating a Webasto charging station into the eCarUp backend" />

Connect to the station via Ethernet

1.  The laptop must have the following IP 192.168.0.150 and subnet mask: 255.255.255.0.

2.  Open the browser on your laptop and enter the following URL in the address bar: 192.168.0.100

3.  You will find the login details in the supplied user manual (only the password is required) 

### Web interface

### Backend

- Select the desired connection type

- The ChargePoint ID can be changed, but the station always appears in the eCarUp portal with its serial number

- Select OCPP-j 1.6

- Paste the complete URL from your account into the websocket field.

- Save and restart

![Webasto Live – Figure 2](/img/ocpp-ladestationen-webasto/02.png)

### Energy meter

- In the energy meter section, the upload interval for the power transmission can be reduced. This determines the interval at which the station sends us the consumption data (kW). 

![Webasto Live – Figure 3](/img/ocpp-ladestationen-webasto/03.png)

## Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Webasto Live – Figure 4](/img/ocpp-ladestationen-webasto/04.png)

![Webasto Live – Figure 5](/img/ocpp-ladestationen-webasto/05.png)
