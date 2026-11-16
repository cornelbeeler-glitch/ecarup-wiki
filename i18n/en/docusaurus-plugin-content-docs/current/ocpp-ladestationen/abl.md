---
title: 'ABL'
slug: '/ocpp-ladestationen/abl'
description: 'Backend integration guide'
sidebar_label: 'ABL'
---
![ABL – Figure 1](/img/ocpp-ladestationen-abl/01.jpg)

[ABL Wallbox](https://www.ablmobility.de/de/)

![ABL – Figure 2](/img/ocpp-ladestationen-abl/02.png)

[ABL Supernova](https://www.ablmobility.de/de/)

## Backend integration guide

ABL stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price. 

- Requirements for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [Premium features](/funktionen)


### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the station in question and paste the copied URL.


## Connecting the ABL Wallbox

### ⚠️ Important notes on integrating ABL charging stations

- To start a charging session, a vehicle must always be connected first. Otherwise, no charging session is initiated.

- If charging is started with the RFID card, it can only be stopped via the car (e.g. by unlocking the cable) or via the eCarUp app. Holding the RFID card up to the reader again does not end the charging session.


### Accessing the station

- Once you have connected to the station, enter the following IP in your browser: [http://169.254](/).1.1:8300/

- Check in the system data whether the current software version is installed


### Configuration

- Change the OCPP version to 1.6

- Paste the complete URL from your eCarUp account

- Rename the ChargeBox ID. Note: no spaces. 

- Save and restart the station.


![ABL – Figure 3](/img/ocpp-ladestationen-abl/03.png)

### Important

The Chargebox ID must not contain more than 20 characters. 

![ABL – Figure 4](/img/ocpp-ladestationen-abl/04.png)

### Important

Please deactivate the Auto-Charge function

![ABL – Figure 5](/img/ocpp-ladestationen-abl/05.png)

## Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval of 30-60s. This is the only way we can better calculate and display the current charging power in the app. 



You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value) 




![ABL – Figure 6](/img/ocpp-ladestationen-abl/06.png)

![ABL – Figure 7](/img/ocpp-ladestationen-abl/07.png)
