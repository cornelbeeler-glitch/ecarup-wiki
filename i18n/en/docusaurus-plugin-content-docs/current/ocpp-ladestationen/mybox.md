---
title: 'mybox'
slug: '/ocpp-ladestationen/mybox'
description: 'Backend integration guide'
sidebar_label: 'mybox'
---
<div className="row">
<div className="col col--8">

## Backend integration guide

mybox stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when and at what price.

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium features](/funktionen) here

</div>
<div className="col col--4 text--center">

![mybox – Figure 1](/img/ocpp-ladestationen-mybox/01.jpg)

</div>
</div>

[mybox Profi](https://mybox.eco/de/produkt/mybox-profi/)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## Connecting the mybox

- Tested firmware version: 20231218\_1.209.4\_v1

### Preparation

- To set up the wallbox, you need to connect to the local Wi-Fi network of the charging station

- Network name: MyBox-Rxx +8 characters (station ID)

- Please refer to the supplied operating instructions for the login details and the IP address

⚠️ Important: In the event of an internal fault, the station does not send us the usual status message such as "Faulted" or "Unavailable".

### Step 1

Go to the Advanced Settings 

Under Authorization, please select the OCPP mode

![mybox – Figure 2](/img/ocpp-ladestationen-mybox/02.png)

### Step 2

Then activate the function under OCPP and enter your eCarUp URL under OCPP-URL-CS. 

![mybox – Figure 3](/img/ocpp-ladestationen-mybox/03.png)

### Step 3

Restart the station. 

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![mybox – Figure 4](/img/ocpp-ladestationen-mybox/04.png)

![mybox – Figure 5](/img/ocpp-ladestationen-mybox/05.png)
