---
title: 'Eco-Flow'
slug: '/ocpp-ladestationen/eco-flow'
description: 'Eco-Flow stations can be integrated into the eCarUp billing system in just a few steps.'
sidebar_label: 'Eco-Flow'
---
![Eco-Flow – Figure 1](/img/ocpp-ladestationen-eco-flow/01.jpg)

Eco-Flow stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when and at what price. 

- Requirements for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [Premium features](/funktionen) here


### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the station you want and paste the copied URL.


## Integrating the PowerPulse

### Preparatory steps for integrating the PowerPulse

1.  Install the Eco-Flow app on your mobile phone

2.  Now connect your charging station to the app 

3.  As soon as the charging station can be found in the app, please make the following settings. 


### ⚠️ Important

1.  The station was successfully tested with firmware version v1.0.9.10

2.  The tested version of the Eco-Flow app is v6.13.9

3.  Currently, only RFID cards from Eco-Flow work


![Eco-Flow – Figure 2](/img/ocpp-ladestationen-eco-flow/02.png)

1.  Select the connected station.


![Eco-Flow – Figure 3](/img/ocpp-ladestationen-eco-flow/03.png)

2\. Click the icon at the top right

![Eco-Flow – Figure 4](/img/ocpp-ladestationen-eco-flow/04.png)

3\. Select OCPP control

![Eco-Flow – Figure 5](/img/ocpp-ladestationen-eco-flow/05.png)

4\. Enable OCPP\-control

![Eco-Flow – Figure 6](/img/ocpp-ladestationen-eco-flow/06.png)

5\. Set the OCPP service provider to manual entry. 

6\. Add your eCarUp URL

7\. Save.

## Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. This is the only way we can better calculate and display the current charging power in the app. 



You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)


![Eco-Flow – Figure 7](/img/ocpp-ladestationen-eco-flow/07.png)

![Eco-Flow – Figure 8](/img/ocpp-ladestationen-eco-flow/08.png)
