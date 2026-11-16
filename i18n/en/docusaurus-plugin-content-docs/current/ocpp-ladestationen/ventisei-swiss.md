---
title: 'Ventisei Swiss'
slug: '/ocpp-ladestationen/ventisei-swiss'
description: 'Backend integration guide'
sidebar_label: 'Ventisei Swiss'
---
<div className="row">
<div className="col col--8">

## Backend integration guide

Ventisei stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when and at what price.

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more here about our [Premium features](/funktionen)

</div>
<div className="col col--4 text--center">

![Ventisei Swiss – Figure 1](/img/ocpp-ladestationen-ventisei-swiss/01.jpg)

</div>
</div>

[Ventisei Swiss](https://www.ventisei.swiss/)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## Connecting the Ventisei Swiss

Important: tested firmware version, m2.2.1\_cf01.12\_chAA.06

## Note

- A credit card terminal can be operated in parallel with eCarUp to ensure maximum flexibility. Ventisei Swiss will be happy to provide you with further information. 

### Step 1

Switch on the charging station and go to your Wi-Fi settings. 

Select the station's hotspot.

![Ventisei Swiss – Figure 2](/img/ocpp-ladestationen-ventisei-swiss/02.png)

### Step 2

<div className="row">
<div className="col col--6">

In your browser, go to the following IP address: http://172.25.1.1

The following login appears.

(The login details are included in the guide)

</div>
<div className="col col--6 text--center">

![Ventisei Swiss – Figure 3](/img/ocpp-ladestationen-ventisei-swiss/03.png)

</div>
</div>

### Step 3

<div className="row">
<div className="col col--6">

The following overview appears:

1.  Set up your connection under Connectivity.

2.  You can then add your eCarUp URL under OCPP.

</div>
<div className="col col--6 text--center">

![Ventisei Swiss – Figure 4](/img/ocpp-ladestationen-ventisei-swiss/04.png)

</div>
</div>

### Step 4

<div className="row">
<div className="col col--6">

OCPP integration

1.  [www.ecarup.com](http://www.ecarup.com)

2.  Port 80 (standard port, unless otherwise defined)

</div>
<div className="col col--6 text--center">

![Ventisei Swiss – Figure 5](/img/ocpp-ladestationen-ventisei-swiss/05.png)

</div>
</div>

### Step 5

<div className="row">
<div className="col col--6">

3\. Copy in the rest of the URL from your account

4\. Set Meter Values to 60 s.

5\. Save

</div>
<div className="col col--6 text--center">

![Ventisei Swiss – Figure 6](/img/ocpp-ladestationen-ventisei-swiss/06.png)

</div>
</div>

### Step 6

Restart the station; it should then connect successfully to your eCarUp account. 

## Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the Meter Values can vary from station to station. We recommend an interval of 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Ventisei Swiss – Figure 7](/img/ocpp-ladestationen-ventisei-swiss/07.png)

![Ventisei Swiss – Figure 8](/img/ocpp-ladestationen-ventisei-swiss/08.png)
