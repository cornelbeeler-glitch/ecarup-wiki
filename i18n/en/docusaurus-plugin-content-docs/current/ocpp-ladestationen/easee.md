---
title: 'easee'
slug: '/ocpp-ladestationen/easee'
description: 'Backend integration guide'
sidebar_label: 'easee'
---
<div className="row">
<div className="col col--8">

## Backend integration guide

Easee stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when and at what price.

- Prerequisite for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more here about our [Premium features](/funktionen)

</div>
<div className="col col--4 text--center">

![easee – Figure 1](/img/ocpp-ladestationen-easee/01.jpg)

</div>
</div>

[easee](https://easee.com/de/)

### Integration of OCPP stations

General information on the [commissioning of an OCPP station](/stationsbetreiber/inbetriebnahme-ocpp-station) 

Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

1.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

2.  In the menu on the left, click the "Stations" ("Stationen") tab.

3.  Select the "OCPP" tab.

4.  Copy the URL to the clipboard. 

    1.  ws link without Basic Auth: tested and works

    2.  wss without Basic Auth: tested and works

    3.  wss with Basic Auth: not tested

5.  Go to the web interface of the desired station and paste the copied URL.

## Connecting the easee charging station

### Important:

- easee Charge Max can only be activated with eCarUp via the RFID card. Activation via the app is not possible due to technical limitations. 

### The easee station can also transmit the 15-minute values to smart-me. Learn more about this under 15-minute data import.

<Video src="wg6LeZTT1NQ" title="YouTube video, integration guide for easee charging stations in the eCarUp backend" />

### Video integration guide for easee charging stations in the eCarUp backend

## Integration into the eCarUp portal

### easee web portal

Using the following [LINK](https://portal.easee.com/apps/any/open?action=17&item=%7Bovar%3A+2%2C+oid%3A+15%7D), you can enter the eCarUp URL directly in the easee web portal. 

1.  Open the link in your browser

2.  Select the desired site

3.  If the technical operator is not yet set to smart-me/eCarUp, please confirm with YES. 

4.  Select the charging robot and edit it

5.  Here you can enter the OCPP URL from your eCarUp account. 

6.  Save.

7.  After approx. 15 minutes, the station automatically appears in the eCarUp portal.

Note: The following variants work.

- ws://www.ecarup.com/api/Ocpp16/4FEF6CFXXXXXX

- wss://www.ecarup.com/api/Ocpp16/4FEF6CFXXXXXXX

- 4B49FXXXXXXX

![easee – Figure 2](/img/ocpp-ladestationen-easee/02.png)

![easee – Figure 3](/img/ocpp-ladestationen-easee/03.png)

![easee – Figure 4](/img/ocpp-ladestationen-easee/04.png)

### easee app

1.  Scan the QR code with your mobile phone

2.  You will be redirected directly to your easee account. 

3.  There you can also select the desired site

4.  Add the eCarUp URL. 

5.  Save. 

6.  After approx. 15 minutes, the station automatically appears in the eCarUp portal.

Note: The following variants work.

- ws://www.ecarup.com/api/Ocpp16/4FEF6CFXXXXXX

- wss://www.ecarup.com/api/Ocpp16/4FEF6CFXXXXXXX

- 4B49FXXXXXXX

<div className="row">
<div className="col col--6 text--center">

![easee – Figure 5](/img/ocpp-ladestationen-easee/05.png)

</div>
<div className="col col--6 text--center">

![easee – Figure 6](/img/ocpp-ladestationen-easee/06.jpg)

</div>
</div>

### Links

- [Webinar recording: easee charging stations in the eCarUp backend](https://web.ecarup.com/webinar-easee-ladestationen-mit-backend-von-ecarup/)

- [Features of the easee wallbox in the eCarUp backend](https://web.ecarup.com/backend/easee-backend/)

- [15-minute data import](/funktionen/15-minuten-datenimport) 

- [QR code for OCPP URL](https://drive.google.com/file/d/1G5iU7GsE51cgZ9RZixxFC0FLfuJDfGT9/view?usp=sharing)

## Without authentication + offline charging

<div className="row">
<div className="col col--8">

Connect the easee station to eCarUp via the installation as usual. (Steps 1-7)

As soon as the station is visible in eCarUp, navigate to the maintenance tool. ([Link](/funktionen/wartung))

Select the desired station there, click the 3 dots and select "Change Configuration"

</div>
<div className="col col--4 text--center">

![easee – Figure 7](/img/ocpp-ladestationen-easee/07.png)

</div>
</div>

1.  Select "Custom command" ("Benutzerdefinierten Befehl")

2.  Custom Key = freecharging

3.  Value = true

4.  Set

In this context, we first have to tell the station that it may allow free charging.

![easee – Figure 8](/img/ocpp-ladestationen-easee/08.png)

1.  Click "Change Configuration" again

2.   "Custom command" ("Benutzerdefinierten Befehl")

3.  Custom Key = rfidtagfreecharging

4.  Value = XXXX (an RFID token that you assign to a user in eCarUp)

5.  Set

In this context, we have to tell the station which RFID token should be sent as soon as charging starts. Advantage: the session is recorded in eCarUp. 

![easee – Figure 9](/img/ocpp-ladestationen-easee/09.png)

## Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval of 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![easee – Figure 10](/img/ocpp-ladestationen-easee/10.png)

![easee – Figure 11](/img/ocpp-ladestationen-easee/11.png)
