---
title: 'neoom'
slug: '/ocpp-ladestationen/neoom'
description: 'Backend integration guide'
sidebar_label: 'neoom'
---
<div className="row">
<div className="col col--8">

## Backend integration guide

Neoom stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use of your stations yourself (prices, users, available times etc.). You decide who can charge, when and at what price.

- Prerequisite for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more here about our [Premium features](/funktionen)

</div>
<div className="col col--4 text--center">

![neoom – Figure 1](/img/ocpp-ladestationen-neoom/01.jpg)

</div>
</div>

[neoom BOXX](https://neoom.com/produkte/boxx)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## Connecting the Neoom charging station

- Open the network and internet settings of your PC

- Here you need to assign a static IP address

- Please take the login details as well as the IP address from the supplied manual

- Firmware must be at least version: BE-03.02.10

⚠️ Attention: the charging power currently cannot be displayed in the app. Billing takes place as usual at the end of the charging session. 

### Web interface

### Backend

- Go to the "Network" menu

- Select OCPP-J 1.6

- Desired medium for communication

- The OCPP vendor must not contain any spaces

- The websocket must be split into its parts

### eCarUp websocket

- Enter it as shown in the screenshot

- Please note the ending, api/Ocpp16/weoih48zlkuhr9/00000010638

⚠️ Important: do not forget the / (slash) + 00000010638 (serial number of the station) at the end!

![neoom – Figure 2](/img/ocpp-ladestationen-neoom/02.jpg)

You can find the serial number of your wallbox as follows:

![neoom – Figure 3](/img/ocpp-ladestationen-neoom/03.png)

If RFID cards are used, please also set the following parameter:

![neoom – Figure 4](/img/ocpp-ladestationen-neoom/04.png)

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. Only then can we better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![neoom – Figure 5](/img/ocpp-ladestationen-neoom/05.png)

![neoom – Figure 6](/img/ocpp-ladestationen-neoom/06.png)
