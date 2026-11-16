---
title: 'Garo'
slug: '/ocpp-ladestationen/garo'
description: 'Backend integration guide'
sidebar_label: 'Garo'
---
![Garo – Figure 1](/img/ocpp-ladestationen-garo/01.jpg)

[Wallbox GLB+](https://www.garo.se/en/products/wallbox)

![Garo – Figure 2](/img/ocpp-ladestationen-garo/02.png)

[Entity Pro](https://www.garo.se/en/products/wallbox)

![Garo – Figure 3](/img/ocpp-ladestationen-garo/03.jpg)

[LS4 Compact](https://www.garo.se/en/products/wallbox)

## Backend integration guide

Garo stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when and at what price. 

- Requirements for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [Premium features](/funktionen)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the station in question and paste the copied URL.

## Integrating the Garo charging stations

<Video src="Jj_6G8k8nus" title="YouTube video, guide for integrating GARO into the eCarUp backend" />

## Integrating the Garo Entity Pro

Install the Garo Connect app here.  

### Tested version

- Firmware version 1.8.8

![Garo – Figure 4](/img/ocpp-ladestationen-garo/04.png)

### Step 1

Follow the supplied guide step by step and scan the QR code on the back plate. 

⚠️ Important: Your mobile phone and the charging station must be on the same network. (LAN or Wi-Fi)

### Step 2

<div className="row">
<div className="col col--6">

In the general settings, please make sure that neither a schedule for charging the car nor free use is activated.

</div>
<div className="col col--6 text--center">

![Garo – Figure 5](/img/ocpp-ladestationen-garo/05.png)

</div>
</div>

### Step 3

<div className="row">
<div className="col col--6">

On the installation overview, please select the "Third party" ("Drittanbieter") field.

</div>
<div className="col col--6 text--center">

![Garo – Figure 6](/img/ocpp-ladestationen-garo/06.png)

</div>
</div>

### Step 4

<div className="row">
<div className="col col--6">

Our recommendation: select StopTransactionPnEVSideDisconnecet + UnlockConnectorOnEVSideDisconnect.

</div>
<div className="col col--6 text--center">

![Garo – Figure 7](/img/ocpp-ladestationen-garo/07.png)

</div>
</div>

### Step 5

<div className="row">
<div className="col col--6">

For the OCPP connection, the DeviceId can be chosen freely.

For the CsmsUrl, you can add your URL from the eCarUp account.

</div>
<div className="col col--6 text--center">

![Garo – Figure 8](/img/ocpp-ladestationen-garo/08.png)

</div>
</div>

### Step 5.1

<div className="row">
<div className="col col--6">

The URL can be pasted exactly as it is.

Don't forget to save & restart!

</div>
<div className="col col--6 text--center">

![Garo – Figure 9](/img/ocpp-ladestationen-garo/09.png)

</div>
</div>

### Note

<div className="row">
<div className="col col--6">

On the charging station, the user can also define what it should do in the "Not connected" ("Nicht verbunden") status. We recommend not activating anything.

</div>
<div className="col col--6 text--center">

![Garo – Figure 10](/img/ocpp-ladestationen-garo/10.png)

</div>
</div>

## Integrating the Garo GLB+ and the LS4 Compact

### 1\. Connect the notebook to the Bender controller via USB cable:

⚠️ Important: Use the Micro-USB interface

![Garo – Figure 11](/img/ocpp-ladestationen-garo/11.png)

### 2\. Open the browser on the notebook

Enter the following URL: http://192.168.123.123/operator/

- Default user name: operator

- Default password: yellow\_zone

### 3\. Check the firmware version:

<div className="row">
<div className="col col--8">

At least version 4.00-2139 must be installed.

The current version can be found under State →  Firmware Version.

Performing a firmware update:

a) Copy the firmware file to a USB stick. Insert the USB stick.

b) Restart the Bender controller

</div>
<div className="col col--4 text--center">

![Garo – Figure 12](/img/ocpp-ladestationen-garo/12.png)

</div>
</div>

### 4\. Configure the Bender

OCPP Mode: OCPP-J 1.6

WebSocket JSON OCPP URL: ws://www.ecarup.com/api/Ocpp16/&#123;ecarupID&#125;/

Example: ws://www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508/

Important: A "/" must be added after the eCarUp OCPP URL (as shown in the example). In addition, the "ChargePoint ID (OCPP)" must not contain any special characters.

![Garo – Figure 13](/img/ocpp-ladestationen-garo/13.png)

### New Bender interface

If you have the following web interface, you will find the guide in the following article 

- [Guide](/ocpp-ladestationen/webasto)

![Garo – Figure 14](/img/ocpp-ladestationen-garo/14.png)

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval of between 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Garo – Figure 15](/img/ocpp-ladestationen-garo/15.png)

![Garo – Figure 16](/img/ocpp-ladestationen-garo/16.png)
