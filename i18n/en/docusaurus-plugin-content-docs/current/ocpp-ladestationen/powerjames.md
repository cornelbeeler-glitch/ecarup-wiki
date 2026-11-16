---
title: 'POWERJames'
slug: '/ocpp-ladestationen/powerjames'
description: 'Backend integration guide'
sidebar_label: 'POWERJames'
---
## Backend integration guide

POWERJames stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price. 

- Requirements for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal) 

- Learn more about our [Premium features](/funktionen) here

![POWERJames – Figure 1](/img/ocpp-ladestationen-powerjames/01.png)

[Wallbox POWERJames Charges](https://powerjames.com/#funktionen)

### Integrating OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the station in question and paste the copied URL.

## POWERJames Charge S

- "firmwareVersion":"22.0.35" 

### Step 1

- Connect the charging station to the local Wi-Fi.

- Tip: See the Quick Guide supplied with the station.

### Step 2

- Then contact PowerJames support at [support@powerjames.com](mailto:support@powerjames.com) to let them know that you want to connect the station to eCarUp.

### Step 3

- As soon as you have their okay, you can get started. 

- Connect to the wallbox with your mobile phone again and enter the IP address 192.168.4.1 in the browser once more. 

### Step 4

- Click "OCPP Configuration"

![POWERJames – Figure 2](/img/ocpp-ladestationen-powerjames/02.png)

### Step 5

<div className="row">
<div className="col col--6">

- Activate the OCPP interface

- The ChargeBox ID is set automatically.

- Add the OCPP URL from your eCarUp account.

- Finally, save and restart the station.

</div>
<div className="col col--6 text--center">

![POWERJames – Figure 3](/img/ocpp-ladestationen-powerjames/03.png)

</div>
</div>

### Example:

- OCPP URL from your account: ws://www.ecarup.com/api/Ocpp16/D0xxxxxxxxxx

### Step 6

<div className="row">
<div className="col col--6">

- Final check: OCPP must show "Active".

- This completes the configuration on the PowerJames side, and the metering point can now be edited in eCarUp.

</div>
<div className="col col--6 text--center">

![POWERJames – Figure 4](/img/ocpp-ladestationen-powerjames/04.png)

</div>
</div>

## Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval of 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![POWERJames – Figure 5](/img/ocpp-ladestationen-powerjames/05.png)

![POWERJames – Figure 6](/img/ocpp-ladestationen-powerjames/06.png)
