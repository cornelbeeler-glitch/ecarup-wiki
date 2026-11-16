---
title: 'Spelsberg'
slug: '/ocpp-ladestationen/spelsberg'
description: 'Backend integration guide'
sidebar_label: 'Spelsberg'
---
<div className="row">
<div className="col col--6">

## Backend integration guide

Spelsberg stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price.

- Requirements for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [Premium features](/funktionen)

</div>
<div className="col col--6 text--center">

![Spelsberg – Figure 1](/img/ocpp-ladestationen-spelsberg/01.jpg)

</div>
</div>

[Smart Pro](https://www.spelsberg.de/wallbox/)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the station and paste the copied URL.

## Integrating the Smart Pro

<div className="row">
<div className="col col--8">

- Tested firmware version: 5.30.0

- For this, install the Spelsberg Wallbox App

- [Android](https://play.google.com/store/apps/details?id=de.spelsberg.wallboxapp&gl=DE) & [Apple App Store](https://apps.apple.com/de/app/spelsberg-wallbox-app/id1617068920)

</div>
<div className="col col--4 text--center">

![Spelsberg – Figure 2](/img/ocpp-ladestationen-spelsberg/02.jpg)

</div>
</div>

### Step 1

<div className="row">
<div className="col col--6">

Link the wallbox to the Spelsberg app. Click "I am an electrician" ("Ich bin Elektroinstallateur")

</div>
<div className="col col--6 text--center">

![Spelsberg – Figure 3](/img/ocpp-ladestationen-spelsberg/03.png)

</div>
</div>

### Step 2

Activate service mode and click "Apply" ("Übernehmen").

![Spelsberg – Figure 4](/img/ocpp-ladestationen-spelsberg/04.jpg)

### Step 3

Click "Configure wallbox" ("Wallbox konfigurieren"). 

![Spelsberg – Figure 5](/img/ocpp-ladestationen-spelsberg/05.jpg)

### Step 4

Scan the QR code displayed 

![Spelsberg – Figure 6](/img/ocpp-ladestationen-spelsberg/06.jpg)

### Step 5

Then click Settings (Einstellungen)

![Spelsberg – Figure 7](/img/ocpp-ladestationen-spelsberg/07.png)

### Step 6

Open Advanced settings (Erweiterte Einstellungen)

![Spelsberg – Figure 8](/img/ocpp-ladestationen-spelsberg/08.png)

### Step 7

Under System, deactivate Free charging (Freies Laden)

![Spelsberg – Figure 9](/img/ocpp-ladestationen-spelsberg/09.png)

### Step 8

<div className="row">
<div className="col col--6">

Activate OCPP and add the URL from your eCarUp account.

</div>
<div className="col col--6 text--center">

![Spelsberg – Figure 10](/img/ocpp-ladestationen-spelsberg/10.png)

</div>
</div>

### Step 9

Save the settings and send them to the station. 

- Restart the station and it will now connect to your eCarUp account. 

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Spelsberg – Figure 11](/img/ocpp-ladestationen-spelsberg/11.png)

![Spelsberg – Figure 12](/img/ocpp-ladestationen-spelsberg/12.png)
