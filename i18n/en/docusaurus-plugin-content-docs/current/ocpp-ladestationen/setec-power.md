---
title: 'Setec-Power'
slug: '/ocpp-ladestationen/setec-power'
description: 'Backend integration guide'
sidebar_label: 'Setec-Power'
---
<div className="row">
<div className="col col--8">

## Backend integration guide

Setec-Power stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when and at what price.

- Prerequisite for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more here about our [Premium features](/funktionen)

</div>
<div className="col col--4 text--center">

![Setec-Power – Figure 1](/img/ocpp-ladestationen-setec-power/01.jpg)

</div>
</div>

[Setec Wallbox](https://www.setec-power.com/)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the station you want and paste the copied URL.

## Connecting the Setec-Power charging stations

The first steps must be carried out directly on the display of your station:

1.   Make sure that your station has an internet connection

2.   Tap the logo (Setec) on the display

3.   A window asking for a password appears (PW: 88888888)

4.  Click "Charge Point Settings"

5.  Then tap "Public Setting"

6.   Now click "IP Config"

7.   Make the OCPP settings described below directly on the display

1.  Image: 

- Default setting

![Setec-Power – Figure 2](/img/ocpp-ladestationen-setec-power/02.png)

2\. Image: 

- Paste the OCPP URL from your eCarUp account

- Activate "Enable OCPP on"

- In the "ID" input field: set the desired station name (can be changed on eCarUp at any time later)

![Setec-Power – Figure 3](/img/ocpp-ladestationen-setec-power/03.png)

## Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Setec-Power – Figure 4](/img/ocpp-ladestationen-setec-power/04.png)

![Setec-Power – Figure 5](/img/ocpp-ladestationen-setec-power/05.png)
