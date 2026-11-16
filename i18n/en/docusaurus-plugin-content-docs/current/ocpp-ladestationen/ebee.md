---
title: 'Ebee'
slug: '/ocpp-ladestationen/ebee'
description: 'Backend integration guide'
sidebar_label: 'Ebee'
---
<div className="row">
<div className="col col--8">

## Backend integration guide

Ebee stations that contain a Bender controller can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price.

- Prerequisite for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more here about our [Premium features](/funktionen)

</div>
<div className="col col--4 text--center">

![Ebee – Figure 1](/img/ocpp-ladestationen-ebee/01.jpg)

</div>
</div>

[Ebee Berlin](https://www.bender.de/produkte/ladestationen/ladepunkt-berlin/)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## Connecting the Ebee charging station

<Video src="p_fhat0HxZY" title="YouTube video, integrating the Bender controller into the eCarUp backend" />

## Integration into the eCarUp portal

### 1\. Connect the notebook to the Bender controller via USB cable

⚠️ Important: Use the Micro-USB interface

![Ebee – Figure 2](/img/ocpp-ladestationen-ebee/02.png)

### 2\. Open the browser on the notebook

Enter the following URL: [http://192.168.123.123/operator/](http://192.168.123.123/operator/)

- Default username: operator

- Default password: yellow\_zone

### 3\. Check the firmware version:

<div className="row">
<div className="col col--8">

At least version 4.00-2139 must be installed.

The current version can be found under State -> Firmware Version.

Performing a firmware update:

a) Copy the firmware file to a USB stick. Insert the USB stick.

b) Restart the Bender controller

</div>
<div className="col col--4 text--center">

![Ebee – Figure 3](/img/ocpp-ladestationen-ebee/03.png)

</div>
</div>

### 4\. Configure the Bender

OCPP Mode: OCPP-J 1.6

WebSocket JSON OCPP URL: ws://www.ecarup.com/api/Ocpp16/&#123;ecarupID&#125;/

Example: ws://www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508/

Important: A "/" must be added after the eCarUp OCPP URL (as shown in the example). In addition, the "ChargePoint ID (OCPP)" must not contain any special characters.

![Ebee – Figure 4](/img/ocpp-ladestationen-ebee/04.png)

## Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Ebee – Figure 5](/img/ocpp-ladestationen-ebee/05.png)

![Ebee – Figure 6](/img/ocpp-ladestationen-ebee/06.png)
