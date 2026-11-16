---
title: 'Kempower'
slug: '/ocpp-ladestationen/kempower'
description: 'Backend integration guide'
sidebar_label: 'Kempower'
---
![Kempower – Figure 1](/img/ocpp-ladestationen-kempower/01.jpg)

[Kempower Station Charger](https://kempower.com/de/solution/kempower-station-charger/)

![Kempower – Figure 2](/img/ocpp-ladestationen-kempower/02.jpg)

[Kempower Satellite](https://kempower.com/de/solution/kempower-satellite/)

![Kempower – Figure 3](/img/ocpp-ladestationen-kempower/03.jpg)

[Kempower Movable Charger](https://kempower.com/de/solution/kempower-movable-charger/)

## Backend integration guide

Kempower stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when and at what price. 

- Prerequisites for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [Premium features](/funktionen) here


### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the station in question and paste the copied URL.


## Connecting the Kempower charging station

Important: tested firmware version, 3.2.6

### Step 1

Make sure that your station is online and communicating with the Kempower portal. 

- [https://kempower.io/](https://kempower.io/)


### Step 2

1.  Check that the station also has an active internet connection

2.  Click the gear icon at the top right.


![Kempower – Figure 4](/img/ocpp-ladestationen-kempower/04.png)

### Step 3

1.  Click Connectivity and enable OCPP

2.  Add your eCarUp URL and click Save. 


![Kempower – Figure 5](/img/ocpp-ladestationen-kempower/05.png)

### Step 4

1.  Finally, check the authorisation settings and click Save.


![Kempower – Figure 6](/img/ocpp-ladestationen-kempower/06.png)

## Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the Meter Values can vary from station to station. We recommend an interval of 30-60s. Only then can we better calculate and display the current charging power in the app. 



You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)


![Kempower – Figure 7](/img/ocpp-ladestationen-kempower/07.png)

![Kempower – Figure 8](/img/ocpp-ladestationen-kempower/08.png)
