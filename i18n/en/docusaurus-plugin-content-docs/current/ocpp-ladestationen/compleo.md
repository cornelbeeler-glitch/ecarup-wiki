---
title: 'Compleo'
slug: '/ocpp-ladestationen/compleo'
description: 'Backend integration guide'
sidebar_label: 'Compleo'
---
![Compleo – Figure 1](/img/ocpp-ladestationen-compleo/01.png)

[SOLO](https://www.compleo-charging.ch/)

![Compleo – Figure 2](/img/ocpp-ladestationen-compleo/02.jpg)

[eBOX](https://www.compleo-charging.ch/)

![Compleo – Figure 3](/img/ocpp-ladestationen-compleo/03.jpg)

[DUO](https://www.compleo-charging.ch/)

![Compleo – Figure 4](/img/ocpp-ladestationen-compleo/04.jpg)

[CITO 500](https://www.compleo-charging.ch/)

![Compleo – Figure 5](/img/ocpp-ladestationen-compleo/05.jpg)

[CITO 240](https://www.compleo-charging.ch/)

## Backend integration guide

Compleo stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price. 

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium features](/funktionen) here


### Integrating OCPP stations

1.  Make sure your charging stations are installed and your PC or phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the station in question and paste the copied URL.


## Connecting Compleo charging stations

### Note

- A credit card terminal can be operated in parallel with eCarUp to ensure maximum flexibility. Compleo will be happy to provide further information. This only applies to the DC hardware!


### Compleo SOLO

Video guide: [https://www.youtube.com/watch?v=Aa3artQXC6w](https://www.youtube.com/watch?v=Aa3artQXC6w)

### Compleo eBOX

To connect the Compleo eBOX, you need the Compleo eConfig app. 

It is also important that firmware version 1.1 is installed on the box for the OCPP connection. 

## Overview:

![Compleo – Figure 6](/img/ocpp-ladestationen-compleo/06.png)

## Step 1:

![Compleo – Figure 7](/img/ocpp-ladestationen-compleo/07.png)

## Step 2:

![Compleo – Figure 8](/img/ocpp-ladestationen-compleo/08.png)

## Step 3:

![Compleo – Figure 9](/img/ocpp-ladestationen-compleo/09.png)

## Step 4:

![Compleo – Figure 10](/img/ocpp-ladestationen-compleo/10.png)

## Step 5 incl. restart:

![Compleo – Figure 11](/img/ocpp-ladestationen-compleo/11.png)

Important: if the station does not work properly after successful implementation with eCarUp, please check the following via the wallbox's web interface:

- Authentication set to MIT

- Remote must be enabled


How to access the web interface should be described in the guide supplied with the station. 

![Compleo – Figure 12](/img/ocpp-ladestationen-compleo/12.png)

### Compleo DUO, CITO 500 & CITO 240

To integrate other Compleo stations with eCarUp, you need support from [Compleo Charging Solutions AG Schweiz](https://www.compleo-charging.ch/kontakt) . They take care of the configuration and assign your charge point to the eCarUp account using the OCPP URL you received during preparation.

![Compleo – Figure 13](/img/ocpp-ladestationen-compleo/13.png)

### Important

On every Compleo charging station, the following parameter must be set to "true".

![Compleo – Figure 14](/img/ocpp-ladestationen-compleo/14.png)

This can be done using our maintenance tool (eCarUp Premium), or the setting can be made on the station side. 

## Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval of 30-60s. Only then can we better calculate and display the current charging power in the app. 



You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)


![Compleo – Figure 15](/img/ocpp-ladestationen-compleo/15.png)

![Compleo – Figure 16](/img/ocpp-ladestationen-compleo/16.png)
