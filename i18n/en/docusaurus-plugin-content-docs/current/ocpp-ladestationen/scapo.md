---
title: 'SCAPO'
slug: '/ocpp-ladestationen/scapo'
description: 'Backend integration guide'
sidebar_label: 'SCAPO'
---
<div className="row">
<div className="col col--8">

## Backend integration guide

Scapo stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when and at what price.

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [Premium features](/funktionen) here

</div>
<div className="col col--4 text--center">

![SCAPO – Figure 1](/img/ocpp-ladestationen-scapo/01.jpg)

</div>
</div>

[Wallbox VISION](https://scapo.de/e-mobility-privat/)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

1\. ws link without Basic Auth: tested and working

2\. wss without Basic Auth: tested and working

3\. wss with Basic Auth: not yet tested

6.  Go to the web interface of the desired station and paste the copied URL.

## Integrating the SCAPO Vision & SCAPO Comfort

- Open the network and internet settings of your PC

- Here you need to assign a static IP address

- Please take the login details as well as the IP address from the supplied manual

- The firmware must be at least version: BE-05.01.01 or BE-03.02.12

### Web interface

### Backend

- Go to the "Network" menu

- Select OCPP-J 1.6

- Desired medium for communication

- The OCPP Vendor must not contain any spaces

- The websocket must be split into its parts

### eCarUp websocket

- Enter it as shown in the screenshot

- Please note the end: api/Ocpp16/weoih48zlkuhr9/00000010638

⚠️Important: do not forget the / (slash) + 00000010638 (serial number of the station) at the end!

- Currently, only the WS connection works. 

![SCAPO – Figure 2](/img/ocpp-ladestationen-scapo/02.jpg)

You can find the serial number of your wallbox as follows:

![SCAPO – Figure 3](/img/ocpp-ladestationen-scapo/03.png)

If RFID cards are used, please also set the following parameter:

![SCAPO – Figure 4](/img/ocpp-ladestationen-scapo/04.png)

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![SCAPO – Figure 5](/img/ocpp-ladestationen-scapo/05.png)

![SCAPO – Figure 6](/img/ocpp-ladestationen-scapo/06.png)
