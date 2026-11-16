---
title: 'Fischer & Sohn'
slug: '/ocpp-ladestationen/fischer-sohn'
description: 'Backend integration guide'
sidebar_label: 'Fischer & Sohn'
---
<div className="row">
<div className="col col--8">

## Backend integration guide

Fischer & Sohn AG stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price.

- Requirements for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [Premium features](/funktionen) here

</div>
<div className="col col--4 text--center">

![Fischer & Sohn – Figure 1](/img/ocpp-ladestationen-fischer-sohn/01.jpg)

</div>
</div>

[iCarPlugS](https://www.fischersohn.ch/e-ladestationen)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## Integrating the Charx controller

- Version iCarPlugS

- Tested firmware version: V1.5.0 

### Step 1

Connect to the controller with your laptop via the assigned IP address.

- You can find more information on this in the operating manual. 

### Step 2

Then log in with the "manufacture" layer. 

![Fischer & Sohn – Figure 2](/img/ocpp-ladestationen-fischer-sohn/02.png)

### Step 3

In the menu, go to Configuration (Konfiguration) and switch the release mode (Freigabemodus) to Via OCPP. 

![Fischer & Sohn – Figure 3](/img/ocpp-ladestationen-fischer-sohn/03.png)

### Step 4

Under Configuration (Konfiguration) in the OCPP menu, please select the following:

1.  OCPP 1.6j

- \+ the selected network interface

2.  The OCPP URL from your eCarUp account

- Note: the URL must end with a / followed by the serial number. 

- Example: ws://www.ecarup.com/api/ocpp16/xnwoi248grn3o2049/24001

![Fischer & Sohn – Figure 4](/img/ocpp-ladestationen-fischer-sohn/04.png)

### Step 5

Save and restart the controller or the station. 

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval of 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Fischer & Sohn – Figure 5](/img/ocpp-ladestationen-fischer-sohn/05.png)

![Fischer & Sohn – Figure 6](/img/ocpp-ladestationen-fischer-sohn/06.png)
