---
title: 'Ratio Electric'
slug: '/ocpp-ladestationen/ratio-electric'
description: 'Backend integration guide'
sidebar_label: 'Ratio Electric'
---
![Ratio Electric – Figure 1](/img/ocpp-ladestationen-ratio-electric/01.jpg)

[IO7](https://elektroscout.ch/produkt/doppellader-fuer-den-oeffentlichen-bereich-mit-ocpp/)

![Ratio Electric – Figure 2](/img/ocpp-ladestationen-ratio-electric/02.jpg)

[IO6 MID Pro](https://elektroscout.ch/produkt/io6/)

## Backend integration guide

Ratio Electric stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when and at what price. 

- Requirements for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [Premium features](/funktionen) here


### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.


## Integration of the IO7 & IO6 pro MID

Important: tested firmware version , 1.5.4  (IO7)

Important: tested firmware version , 3.13.1  (IO6)



- For the integration of your IO7, please contact [Elektroscout](https://elektroscout.ch/)

- info@elektroscout.ch


## Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. This is the only way we can better calculate and display the current charging power in the app. 



You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)


![Ratio Electric – Figure 3](/img/ocpp-ladestationen-ratio-electric/03.png)

![Ratio Electric – Figure 4](/img/ocpp-ladestationen-ratio-electric/04.png)
