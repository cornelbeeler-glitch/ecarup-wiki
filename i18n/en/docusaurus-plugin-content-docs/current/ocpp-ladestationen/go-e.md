---
title: 'Go-E'
slug: '/ocpp-ladestationen/go-e'
description: 'Backend integration guide'
sidebar_label: 'Go-E'
---
<div className="row">
<div className="col col--8">

## Backend integration guide

Go-E stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price.

- Requirements for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more here about our [Premium features](/funktionen)

</div>
<div className="col col--4 text--center">

![Go-E – Figure 1](/img/ocpp-ladestationen-go-e/01.jpg)

</div>
</div>

[go-e Wallbox](https://go-e.com/de-ch/)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the station in question and paste the copied URL.

## Integration guide: connecting go-e charging stations to eCarUp

<Video src="VO0Kms8qsqo" title="YouTube video, integration guide: connecting go-e charging stations to eCarUp" />

## Connecting the Go-e charging station

⚠️ IMPORTANT: 

- The station firmware must be at least version 055.0 

- If you activate the charging station with an RFID card, the charging session must be ended from the car. 

### Preparatory steps for integrating the Go-E

<div className="row">
<div className="col col--8">

1.  Install the Go-E Charger app on your mobile phone

2.  Now connect your charging station to the app (setup via hotspot or internet)

3.  As soon as the charging station can be found in the app, please make the following settings.

</div>
<div className="col col--4 text--center">

![Go-E – Figure 2](/img/ocpp-ladestationen-go-e/02.png)

</div>
</div>

<div className="row">
<div className="col col--6">

- tested firmware in the new overview is 56.8

4\. Go to the settings

</div>
<div className="col col--6 text--center">

![Go-E – Figure 3](/img/ocpp-ladestationen-go-e/03.png)

</div>
</div>

4.1 Settings 

![Go-E – Figure 4](/img/ocpp-ladestationen-go-e/04.png)

5. Select access control

![Go-E – Figure 5](/img/ocpp-ladestationen-go-e/05.png)

6\. Authentication required, then save

![Go-E – Figure 6](/img/ocpp-ladestationen-go-e/06.png)

<div className="row">
<div className="col col--6">

7\. Go back to the overview and select connection. Please click on OCPP

</div>
<div className="col col--6 text--center">

![Go-E – Figure 7](/img/ocpp-ladestationen-go-e/07.png)

</div>
</div>

8.  Select OCPP server

<div className="row">
<div className="col col--6 text--center">

![Go-E – Figure 8](/img/ocpp-ladestationen-go-e/08.png)

</div>
<div className="col col--6 text--center">

![Go-E – Figure 9](/img/ocpp-ladestationen-go-e/09.png)

</div>
</div>

9.   

- For host: [www.ecarup.com](http://www.ecarup.com)

- Path: /api/OCPP16/yourIDxxxx/ID 

⚠️Important: at the end of the URL, add a / followed by the ID or any suffix of your choice

Caution: if you have several stations, do not use the same suffix for each. 

- Save the change and restart the station. 

## Old layout

4\. Go to the settings

![Go-E – Figure 10](/img/ocpp-ladestationen-go-e/10.png)

5\. Select access control

![Go-E – Figure 11](/img/ocpp-ladestationen-go-e/11.png)

6\. Authentication required, then save

![Go-E – Figure 12](/img/ocpp-ladestationen-go-e/12.png)

7\. Go back to the overview and select internet

![Go-E – Figure 13](/img/ocpp-ladestationen-go-e/13.png)

8.  Check the firmware version!

9\. Select OCPP

![Go-E – Figure 14](/img/ocpp-ladestationen-go-e/14.png)

10.  Activate OCPP 1.6

11. Add the URL from your account

<div className="row">
<div className="col col--6 text--center">

![Go-E – Figure 15](/img/ocpp-ladestationen-go-e/15.png)

</div>
<div className="col col--6 text--center">

![Go-E – Figure 16](/img/ocpp-ladestationen-go-e/16.png)

</div>
</div>

12\. after the URL, be sure to add / (&) any suffix of your choice

13\. Save and restart

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval of 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Go-E – Figure 17](/img/ocpp-ladestationen-go-e/17.png)

![Go-E – Figure 18](/img/ocpp-ladestationen-go-e/18.png)
