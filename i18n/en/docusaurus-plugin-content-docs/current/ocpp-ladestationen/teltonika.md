---
title: 'Teltonika'
slug: '/ocpp-ladestationen/teltonika'
description: 'Backend integration guide'
sidebar_label: 'Teltonika'
---
<div className="row">
<div className="col col--8">

## Backend integration guide

Teltonika stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when and at what price.

- Requirements for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [Premium features](/funktionen)

</div>
<div className="col col--4 text--center">

![Teltonika – Figure 1](/img/ocpp-ladestationen-teltonika/01.jpg)

</div>
</div>

[TeltoCharge](https://teltonika-energy.com/)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the station in question and paste the copied URL.

## Integrating the Telto-Charge

### Preparatory steps for integrating the Teltonika

1.  Install the Teltonika Energy app on your mobile phone

2.  Now connect your charging station to the app (setup via hotspot or internet)

3.  As soon as the charging station can be found in the app, please make the following settings. 

### ⚠️ Important

1.  The station was successfully tested with firmware version v1.8.11

2.  The tested Teltonika app version is 1.9.0

3.  The power display in the eCarUp app currently fluctuates heavily. A solution is being sought. 

![Teltonika – Figure 2](/img/ocpp-ladestationen-teltonika/02.png)

1.  Select the connected station

![Teltonika – Figure 3](/img/ocpp-ladestationen-teltonika/03.png)

2\. Click the gear icon at the top right

![Teltonika – Figure 4](/img/ocpp-ladestationen-teltonika/04.png)

3\. Select Connectivity

![Teltonika – Figure 5](/img/ocpp-ladestationen-teltonika/05.png)

4\. Select OCPP

![Teltonika – Figure 6](/img/ocpp-ladestationen-teltonika/06.png)

5\. Add the OCPP URL

![Teltonika – Figure 7](/img/ocpp-ladestationen-teltonika/07.png)

Important:

- OCPP URL from your eCarUp account

- Add a / at the end of the URL. 

- Save

## Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Teltonika – Figure 8](/img/ocpp-ladestationen-teltonika/08.png)

![Teltonika – Figure 9](/img/ocpp-ladestationen-teltonika/09.png)
