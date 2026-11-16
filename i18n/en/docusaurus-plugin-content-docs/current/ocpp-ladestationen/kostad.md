---
title: 'Kostad'
slug: '/ocpp-ladestationen/kostad'
description: 'Backend integration guide'
sidebar_label: 'Kostad'
---
![Kostad – Figure 1](/img/ocpp-ladestationen-kostad/01.png)

[Unnity20 - DC Wallbox](https://www.kostad.at/)

![Kostad – Figure 2](/img/ocpp-ladestationen-kostad/02.jpg)

[Unity50](https://www.kostad.at/)

![Kostad – Figure 3](/img/ocpp-ladestationen-kostad/03.jpg)

[Unity20 - Mobile Charger](https://www.kostad.at/)

## Backend integration guide

Kostad stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when and at what price. 

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [Premium features](/funktionen)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## Integrating the Kostad DC Wallbox (CPC20)

1.  Log in to the service menu. Please refer to the operating manual for the user name and password. 

2.  ⚠️ Important: the station must be able to communicate with the internet (LAN, WLAN etc.)

![Kostad – Figure 4](/img/ocpp-ladestationen-kostad/04.png)

### Station configuration

3\. Select OCPP:

4\. Hostname: www.ecarup.com/ 

5\. HTTPString: api/OCPP/................/

6. Please double-check: no spaces anywhere and a / at the end 

7\. Apply the connection data; if the connection is successful, the status is "green" ("Grün").

![Kostad – Figure 5](/img/ocpp-ladestationen-kostad/05.png)

<div className="row">
<div className="col col--8">

Please also note the following setting: "Operator settings 1" ("Betreibereinstellungen 1")

- If authentication is to take place via eCarUp (app or RFID card), you must switch
    Authentication to OCPP.

</div>
<div className="col col--4 text--center">

![Kostad – Figure 6](/img/ocpp-ladestationen-kostad/06.png)

</div>
</div>

## Kostad DC Unity 50, 90, 120, 150, 180, 300 & 360 kW

![Kostad – Figure 7](/img/ocpp-ladestationen-kostad/07.png)

These systems are integrated by:

 Kostad Schweiz AG. 

+41(0) 52 625 50 50

[www.kostad.ch](https://kostad.ch/)

## office@kostad.ch

![Kostad – Figure 8](/img/ocpp-ladestationen-kostad/08.png)

## Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval of 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Kostad – Figure 9](/img/ocpp-ladestationen-kostad/09.png)

![Kostad – Figure 10](/img/ocpp-ladestationen-kostad/10.png)
