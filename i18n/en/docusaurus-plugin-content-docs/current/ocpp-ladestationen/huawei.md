---
title: 'Huawei'
slug: '/ocpp-ladestationen/huawei'
description: 'Backend integration guide'
sidebar_label: 'Huawei'
---
<div className="row">
<div className="col col--6">

## Backend integration guide

Huawei stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, availability times, etc.). You decide who can charge, when and at what price.

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [Premium features](/funktionen)

</div>
<div className="col col--6 text--center">

![Huawei – Figure 1](/img/ocpp-ladestationen-huawei/01.png)

</div>
</div>

[Fusion Charge](https://digitalpower.huawei.com/en/smart-charging-network/ultra-fast-charging)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the station in question and paste the copied URL.

## Connecting the Fusion Charge DC

### Preparatory steps for integrating the Fusion Charge DC

1.  First, check the supplied guide to see how you can connect to the station. 

2.  Install the Antohill app from Huawei on your mobile phone or use the browser.

### ⚠️ Important

1.  The station was successfully tested with firmware version V100R025C10SPC060

### In the app

<div className="row">
<div className="col col--8">

1.  Go to Configuration (Maintenance), then Business Plattform Parameters

2.  Under Busines Platform Domain Name, enter "[www.ecarup.com](http://www.ecarup.com)".

3.  Under Acces Path "/api/Ocpp16/xxxxxxxxx (from your account) /serial number

4.  Save (Submit).

</div>
<div className="col col--4 text--center">

![Huawei – Figure 2](/img/ocpp-ladestationen-huawei/02.png)

</div>
</div>

## Web portal

![Huawei – Figure 3](/img/ocpp-ladestationen-huawei/03.png)

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval of 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Huawei – Figure 4](/img/ocpp-ladestationen-huawei/04.png)

![Huawei – Figure 5](/img/ocpp-ladestationen-huawei/05.png)
