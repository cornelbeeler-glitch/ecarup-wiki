---
title: 'Sungrow'
slug: '/ocpp-ladestationen/sungrow'
description: 'Backend integration guide'
sidebar_label: 'Sungrow'
---
<div className="row">
<div className="col col--8">

## Backend integration guide

</div>
<div className="col col--4 text--center">

![Sungrow – Figure 1](/img/ocpp-ladestationen-sungrow/01.jpg)

</div>
</div>

Sungrow IDC30E

## Backend integration guide

Sungrow stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when and at what price. 

- Prerequisites for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal) 

- Learn more about our [Premium features](/funktionen) here

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the station in question and paste the copied URL.

### Sungrow IDC30E

### Integration via the display

1.  Press and hold the time format on the display for 5 seconds

![Sungrow – Figure 2](/img/ocpp-ladestationen-sungrow/02.png)

2\. To gain access, you need the code supplied with the station. 

![Sungrow – Figure 3](/img/ocpp-ladestationen-sungrow/03.png)

3\. Go to page 4

4\. Under Websocket, click "others"

5\. Under Other, enter your eCarUp URL.

6\. Restart the station. 

![Sungrow – Figure 4](/img/ocpp-ladestationen-sungrow/04.png)

Example:

- wss://[www.ecarup.com/api/Ocpp16/D8D2Axxxxxxxx](http://www.ecarup.com/api/Ocpp16/D8D2Axxxxxxxx)

![Sungrow – Figure 5](/img/ocpp-ladestationen-sungrow/05.png)

### Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval of 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Sungrow – Figure 6](/img/ocpp-ladestationen-sungrow/06.png)

![Sungrow – Figure 7](/img/ocpp-ladestationen-sungrow/07.png)
