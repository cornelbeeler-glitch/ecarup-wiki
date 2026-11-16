---
title: 'Alpitronic'
slug: '/ocpp-ladestationen/alpitronic'
description: 'Backend integration guide'
sidebar_label: 'Alpitronic'
---
<div className="row">
<div className="col col--8">

## Backend integration guide

Alpitronic stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when and at what price.

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [Premium features](/funktionen) here

</div>
<div className="col col--4 text--center">

![Alpitronic – Figure 1](/img/ocpp-ladestationen-alpitronic/01.jpg)

</div>
</div>

[Alpitronic Hypercharger](https://www.alpitronic.it/en/)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the station in question and paste the copied URL.

## Connecting the Alpitronic charging station

### ⚠️ Attention, do not forget: The first configuration step must be carried out in the “Network Configuration” field. (You can find details in the Hypercharger file)

### Accessing the station

1\. Connect your PC to the pillar via the Ethernet port. It is labelled XF1 and is located at the bottom of the pillar on the side of the display door.

2\. Access the web interface by opening a browser and entering the default IP address 192.168.1.100.

3\. Use the default user credentials to access the web interface (username: admin, password: admin123).

![Alpitronic – Figure 2](/img/ocpp-ladestationen-alpitronic/02.png)

### Important

- Select OCPP 1.6

- Copy the entire eCarUp URL into the WebSocketUrl!

- Set Security Profile to 0 under Default

- Do not forget to click Save Configuration.

![Alpitronic – Figure 3](/img/ocpp-ladestationen-alpitronic/03.png)

### Please note the following point

- KiskModeEnabled must be set to "false". 

Otherwise the driver can plug in and charge for free. 

![Alpitronic – Figure 4](/img/ocpp-ladestationen-alpitronic/04.png)

Finally, please carry out a "Hard Reset".

![Alpitronic – Figure 5](/img/ocpp-ladestationen-alpitronic/05.png)

## Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval of 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Alpitronic – Figure 6](/img/ocpp-ladestationen-alpitronic/06.png)

![Alpitronic – Figure 7](/img/ocpp-ladestationen-alpitronic/07.png)
