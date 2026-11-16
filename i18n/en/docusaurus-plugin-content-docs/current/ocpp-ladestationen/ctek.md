---
title: 'CTEK'
slug: '/ocpp-ladestationen/ctek'
description: 'Backend integration guide'
sidebar_label: 'CTEK'
---
<div className="row">
<div className="col col--8">

## Backend integration guide

CTEK stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when and at what price.

- Requirements for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more here about our [Premium features](/funktionen)

</div>
<div className="col col--4 text--center">

![CTEK – Figure 1](/img/ocpp-ladestationen-ctek/01.jpg)

</div>
</div>

[CTEK Chargestrom 2](https://www.ctek.com/de/ladestationen-f%C3%BCr-elektrofahrzeuge)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the station in question and paste the copied URL.

## Connecting the CTEK charging station

Important!

To carry out the first steps, you need to install a driver from CTEK on your PC (applies to Windows).

1.   Connect your laptop to the station (via the mini USB port)

2.   Enter the following URL: http://192.168.7.2

3.  Username and password are ccu

4.  The CTEK dashboard appears

5.  Select the connection type (GSM, LAN...)

### C-Tek web interface settings

1.  Setup must be switched to Advanced. 

2.  Select OCPP 1.6J as the communication protocol

3.  Under Backend Endpoint, paste the eCarUp URL from your account. 

4.  Time Synchronisation is obtained from the OCPP backend.

![CTEK – Figure 2](/img/ocpp-ladestationen-ctek/02.png)

5\. Set Sample Interval to 60 seconds

6\. Make sure that the authentication mode for the outlet is set to RFID. (Of course, charging can still be started in parallel with the eCarUp app) 

![CTEK – Figure 3](/img/ocpp-ladestationen-ctek/03.png)

### Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the Meter Values can vary from station to station. We recommend an interval of 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![CTEK – Figure 4](/img/ocpp-ladestationen-ctek/04.png)

![CTEK – Figure 5](/img/ocpp-ladestationen-ctek/05.png)
