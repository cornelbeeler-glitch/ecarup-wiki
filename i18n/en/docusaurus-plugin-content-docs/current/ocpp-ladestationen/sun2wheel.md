---
title: 'sun2wheel'
slug: '/ocpp-ladestationen/sun2wheel'
description: 'Backend integration guide'
sidebar_label: 'sun2wheel'
---
<div className="row">
<div className="col col--6">

## Backend integration guide

sun2wheel stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price.

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [Premium features](/funktionen) here

</div>
<div className="col col--6 text--center">

![sun2wheel – Figure 1](/img/ocpp-ladestationen-sun2wheel/01.png)

</div>
</div>

[Tiny Wallbox](https://sun2wheel.com/produkte/)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## Integrating the Sun2Wheel Tiny Wallbox

Important: tested firmware version, V00.50.02

- Connect the wallbox via LAN

- The Tiny Wallbox obtains an IP address that you can reach via your web browser. (The default IP address of the wallbox is 192.168.100.199)

- Enter the login details

- You will then see the following overview (image below)

- Under OCPP server, you can add the URL from your eCarUp account and save it 

- After a restart, the station appears in your eCarUp account

![sun2wheel – Figure 2](/img/ocpp-ladestationen-sun2wheel/02.png)

## Integrating the one-way-guest-100

To integrate this charging station, go to the following integration guide from the hardware manufacturer:

- [Guide](/ocpp-ladestationen/evtec)

## Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval of 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![sun2wheel – Figure 3](/img/ocpp-ladestationen-sun2wheel/03.png)

![sun2wheel – Figure 4](/img/ocpp-ladestationen-sun2wheel/04.png)
