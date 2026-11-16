---
title: 'Partino'
slug: '/ocpp-ladestationen/partino'
description: 'Backend integration guide'
sidebar_label: 'Partino'
---
![Partino – Figure 1](/img/ocpp-ladestationen-partino/01.jpg)

[Partino Vool](https://www.partino.ch/de/angebot/e-ladestationen/vool/)

![Partino – Figure 2](/img/ocpp-ladestationen-partino/02.png)

[Partino DC30](https://www.partino.ch/de/angebot/e-ladestationen/partino-x-ecotap/)

![Partino – Figure 3](/img/ocpp-ladestationen-partino/03.png)

[Partino Ecotap](https://www.partino.ch/de/angebot/e-ladestationen/partino-x-ecotap/)

## Backend integration guide

Partino and Ecotap stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when and at what price. 

- Prerequisites for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal) 

- Learn more here about our [Premium features](/funktionen)


### Integrating OCPP stations

1.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

2.  In the menu on the left, click the "Stations" ("Stationen") tab.

3.  Select the "OCPP" tab.

4.  Copy the URL to the clipboard.

5.  Paste the URL into the application form mentioned below. 


## Partino Vool

- tested firmware version v1.9.16 


<Video src="pRN2F2iiNzk" title="YouTube video, integration guide for Partino /Vool charging station into the eCarUp backend" />

### Video integration guide for Partino Vool charging stations into the eCarUp backend

- To do this, install the Vool app


![Partino – Figure 4](/img/ocpp-ladestationen-partino/04.png)

1.  Connect the station via Bluetooth


![Partino – Figure 5](/img/ocpp-ladestationen-partino/05.png)

2.



![Partino – Figure 6](/img/ocpp-ladestationen-partino/06.png)

3.. Set up the charger



![Partino – Figure 7](/img/ocpp-ladestationen-partino/07.png)

4\. Set up the basic configuration

![Partino – Figure 8](/img/ocpp-ladestationen-partino/08.png)

5\. Click "Show advanced settings" ("Erweiterte Einstellungen anzeigen")

![Partino – Figure 9](/img/ocpp-ladestationen-partino/09.png)

6\. Add your eCarUp URL and save

![Partino – Figure 10](/img/ocpp-ladestationen-partino/10.png)

### Sending the eCarUp URL to Partino (when using the Floatbrige)

To integrate Partino stations (when using the Floatbrige) into our backend, you currently still need support from [Partino](https://www.partino.ch/de/). Partino carries out the final configuration step and assigns your charge points to the correct eCarUp account (via the OCPP URL) that you received during preparation. To do this, send the URL and the serial numbers of the charging station to Partino using the form below. 

[Partino application form](https://www.partino.ch/wp-content/uploads/Partino_Anmeldeformular_eCarUp.pdf).

![Partino – Figure 11](/img/ocpp-ladestationen-partino/11.png)

## Ecotap

- tested firmware version 506.32R.33


### Sending the OCPP URL to Partino

To integrate Ecotap stations into our backend, you currently still need support from [Partino](https://www.partino.ch/de/). Partino carries out the final configuration step and assigns your charge points to the correct eCarUp account (via the OCPP URL) that you received during preparation. To do this, send the URL and the serial numbers of the charging station to Partino using the form below. 

[Partino application form](https://www.partino.ch/wp-content/uploads/Partino_Anmeldeformular_eCarUp.pdf).

## Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval of 30-60s. This is the only way we can better calculate and display the current charging power in the app. 



You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)


![Partino – Figure 12](/img/ocpp-ladestationen-partino/12.png)

![Partino – Figure 13](/img/ocpp-ladestationen-partino/13.png)
