---
title: 'Circontrol'
slug: '/ocpp-ladestationen/circontrol'
description: 'Backend integration guide'
sidebar_label: 'Circontrol'
---
## Backend integration guide

Circontrol stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times etc.). You decide who can charge, when, and at what price. 

- Requirements for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more here about our [Premium features](/funktionen)


### Integration of OCPP stations

1.  Make sure that your station is installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the station in question and paste the copied URL.


## Connecting the Circontrol charging station

The first steps must be carried out directly on the display of your station:

1.   Connect your laptop to the station

2.   Please take the current IP address of the station from the enclosed guide 

3.  Then enter the IP address in the web browser

4.  The Circontrol dashboard appears

5.  Select the connection type (GSM, LAN...)


Please note the following:

When the station is delivered, the default setting may be Plug & Charge. This must of course be deactivated beforehand. 

Please contact BIBUS or Circontrol for the tool. 

For this, the Charge Point Manager must be installed and the settings must look as follows:

- Status must be set to Enabled


![Circontrol – Figure 1](/img/ocpp-ladestationen-circontrol/01.png)

### Settings in the Circontrol web interface

1.  Integration 

2.  Select OCPP 1.6J

3.  LINK (click)

4.  You will find the username & password in the guide


![Circontrol – Figure 2](/img/ocpp-ladestationen-circontrol/02.png)

Under Charge Box, the station name must be defined. Any name of your choice 

(Caution: no spaces) 



![Circontrol – Figure 3](/img/ocpp-ladestationen-circontrol/03.png)

![Circontrol – Figure 4](/img/ocpp-ladestationen-circontrol/04.png)

- Under Central System, enter the OCPP URL of your account


![Circontrol – Figure 5](/img/ocpp-ladestationen-circontrol/05.png)

⚠️ Important: Metervalue sample interval (s) must be set, e.g. to 60

## Downloads

EN\_eNext-Park\_User-Manual\_v2.0 (1).pdf

EN\_Charge-Point-Manager\_Instruction-Manual.pdf

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. Only then can we better calculate and display the current charging power in the app. 



You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)


![Circontrol – Figure 6](/img/ocpp-ladestationen-circontrol/06.png)

![Circontrol – Figure 7](/img/ocpp-ladestationen-circontrol/07.png)
