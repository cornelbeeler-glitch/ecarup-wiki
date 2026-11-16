---
title: 'Heidelberg Amperfied'
slug: '/ocpp-ladestationen/heidelberg-amperfied'
description: 'Backend integration guide'
sidebar_label: 'Heidelberg Amperfied'
---
<div className="row">
<div className="col col--6">

## Backend integration guide

You can integrate Heidelberg stations into the eCarUp billing system in a few steps. Once they are installed in your account, you can easily set the terms of use for your stations yourself, such as prices, users and available times. You decide who can charge, when and at what price.

- Prerequisites for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [Premium features](/funktionen)

</div>
<div className="col col--6 text--center">

![Heidelberg Amperfied – Figure 1](/img/ocpp-ladestationen-heidelberg-amperfied/01.png)

</div>
</div>

[Public Connect Heidelberg](https://www.amperfied.de/)

### Preparatory steps for integrating OCPP stations into the eCarUp Cloud

1.  Your charging stations are installed, and your computer or mobile phone is on the same network as the charging station

2.  You have created an account in the [eCarUp App](https://web.ecarup.com/elektroauto-lade-app/)

3.  Log in to the eCarUp web portal with your account details. In the menu on the left, under Stations (Stationen), click the "OCPP" tab

4.  Copy the URL to the clipboard and enter it for the station in its web interface.

## Connecting the Public Connect

Tested firmware version: 5.21.2-13536

### Web interface

### Backend

- Select the connection type you want

- You can change the ChargePoint ID, but the station always appears in the eCarUp portal with its serial number

- Select OCPP-j 1.6

- Paste the full URL from your account into the Websocket field.

- Save and restart

![Heidelberg Amperfied – Figure 2](/img/ocpp-ladestationen-heidelberg-amperfied/02.png)

### Energy meter

- In the energy meter settings, you can reduce the upload interval for power transmission. This interval determines how often the station sends us the consumption data (kW). 

![Heidelberg Amperfied – Figure 3](/img/ocpp-ladestationen-heidelberg-amperfied/03.png)

## Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval of 30-60s. This is the only way we can calculate and display the current charging power in the app more accurately. 

You can change it as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Heidelberg Amperfied – Figure 4](/img/ocpp-ladestationen-heidelberg-amperfied/04.png)

![Heidelberg Amperfied – Figure 5](/img/ocpp-ladestationen-heidelberg-amperfied/05.png)
