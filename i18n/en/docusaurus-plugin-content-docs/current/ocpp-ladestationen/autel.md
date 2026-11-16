---
title: 'Autel'
slug: '/ocpp-ladestationen/autel'
description: 'Backend integration guide'
sidebar_label: 'Autel'
---
<div className="row">
<div className="col col--6">

## Backend integration guide

Autel stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when and at what price.

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more here about our [Premium features](/funktionen)

</div>
<div className="col col--6 text--center">

![Autel – Figure 1](/img/ocpp-ladestationen-autel/01.jpg)

</div>
</div>

[Autel AC Wallbox](https://web.ecarup.com/backend/autel/)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the station in question and paste the copied URL.

## Connecting the Autel AC Wallbox

- To do this, install the Autel Charge app.  

- [Android](https://play.google.com/store/apps/details?id=com.autel.charge) & [Apple App Store](https://apps.apple.com/de/app/autel-charge/id1578454464)

### Step 1

![Autel – Figure 2](/img/ocpp-ladestationen-autel/02.jpg)

### Step 2

![Autel – Figure 3](/img/ocpp-ladestationen-autel/03.jpg)

### Step 3

Please scan the QR code supplied, which also shows the serial number and the password, among other things.

### Step 4

![Autel – Figure 4](/img/ocpp-ladestationen-autel/04.jpg)

### Step 5

![Autel – Figure 5](/img/ocpp-ladestationen-autel/05.jpg)

### Step 6

As soon as you have connected the charging station to the network (LAN, Wi-Fi or Bluetooth), you can continue.

### Step 7

![Autel – Figure 6](/img/ocpp-ladestationen-autel/06.jpg)

### Step 8

![Autel – Figure 7](/img/ocpp-ladestationen-autel/07.jpg)

### Step 9

![Autel – Figure 8](/img/ocpp-ladestationen-autel/08.jpg)

Important regarding the URL:

- Proceed exactly as shown in the screenshot.

- Manually add the "/" (slash) at the end of the server path. 

- Don't forget to click Connect at the end. 

### Step 10

- Carry out a final check.

![Autel – Figure 9](/img/ocpp-ladestationen-autel/09.png)

## Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. Only then can we better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Autel – Figure 10](/img/ocpp-ladestationen-autel/10.png)

![Autel – Figure 11](/img/ocpp-ladestationen-autel/11.png)
