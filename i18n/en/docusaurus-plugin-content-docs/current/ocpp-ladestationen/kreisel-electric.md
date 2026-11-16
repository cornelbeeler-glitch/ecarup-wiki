---
title: 'Kreisel Electric'
slug: '/ocpp-ladestationen/kreisel-electric'
description: 'Backend integration guide'
sidebar_label: 'Kreisel Electric'
---
## Backend integration guide

Kreisel Electric stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when and at what price. 

- Requirements for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more here about our [premium features](/funktionen)

### Integration of OCPP stations:

<div className="row">
<div className="col col--6">

1.  Make sure that your charging stations are installed and online.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the station in question and paste the copied URL.

</div>
<div className="col col--6 text--center">

![Kreisel Electric – Figure 1](/img/ocpp-ladestationen-kreisel-electric/01.png)

</div>
</div>

[Kreisel CHIMERO](https://www.kreiselelectric.com/products/high-power-charger/)

## CHIMERO (power models 180 and 240)

- Firmware must be at least version: 3.2.2.

### Note

- A credit card terminal can be operated in parallel with eCarUp to ensure maximum flexibility. Kreisel Electric will be happy to provide further information. 

### Integration

- Log in to the Kreisel platform (Kreisel Cloud) with your login details

- The charging station is assigned by Kreisel Electric

### Step 1

- Select the charging station that is to communicate with the eCarUp backend. 

![Kreisel Electric – Figure 2](/img/ocpp-ladestationen-kreisel-electric/02.png)

### Step 2

- Go to the Settings and enter the URL as follows

- Backend URL: wss://[www.ecarup.com/api/Ocpp16](http://www.ecarup.com/api/Ocpp16)

- Backend Charger ID

Example: wss://[www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508](http://www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508)

Only the ID after OCPP16/XXXXXXX

![Kreisel Electric – Figure 3](/img/ocpp-ladestationen-kreisel-electric/03.png)

### Step 3

- Click "Apply Configruation"; the station should then communicate with the desired eCarUp account. 

## Advanced setting via the eCarUp maintenance tool!

The upload interval of the meter values can vary from station to station. We recommend an interval of 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Kreisel Electric – Figure 4](/img/ocpp-ladestationen-kreisel-electric/04.png)

![Kreisel Electric – Figure 5](/img/ocpp-ladestationen-kreisel-electric/05.png)
