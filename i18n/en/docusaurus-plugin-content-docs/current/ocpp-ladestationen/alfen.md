---
title: 'Alfen'
slug: '/ocpp-ladestationen/alfen'
description: 'Backend integration guide'
sidebar_label: 'Alfen'
---
<div className="row">
<div className="col col--8">

## Backend integration guide

Alfen stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price.

- Requirements for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [Premium features](/funktionen)

</div>
<div className="col col--4 text--center">

![Alfen – Figure 1](/img/ocpp-ladestationen-alfen/01.jpg)

</div>
</div>

[Alfen Wallbox](https://web.ecarup.com/backend/alfen-eve/)

### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" (Stationen) tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## Connecting the Alfen charging station

- Version 6.5.0-4217 tested

![Alfen – Figure 2](/img/ocpp-ladestationen-alfen/02.png)

![Alfen – Figure 3](/img/ocpp-ladestationen-alfen/03.png)

Under the "MeterValue" menu item, set the value to 30s. 

### ⚠️Important

If your Alfen has firmware version 7.2.x or higher, you must also enter the price stored in the eCarUp web portal in the ICU Alfen portal. Otherwise, error code 214 appears.

Error message in the logs

StatusNotification \[2, "16927", "StatusNotification", &#123;"connectorId":1,"errorCode":"OtherError","info":"Tariffs or currency not or invalidly configured","status":"Faulted","vendorErrorCode":"214"&#125;\]

![Alfen – Figure 4](/img/ocpp-ladestationen-alfen/04.jpg)

![Alfen – Figure 5](/img/ocpp-ladestationen-alfen/05.png)

## Older configuration

### Installation of ACE Service Installer

1.  Open the ACE Service Installer and log in 

2.  Select the correct station from your network

3.  Make sure that at least firmware 3.3.6-2840 is installed

4.  In the ribbon at the top, select "Connectivity"  

5.  Under the "General" tab, set the "Backoffice preset" to "Manually enter  backend settings" 

6.  Set the "Connect method" to "Wired" (for operation via LAN) or "GPRS" (for operation with a SIM card) 

7.  Change the "Protocol" to "OCPP 1.6"

8.  Switch to the "Transaction data" tab and, under "Disconnect action", select the option "Abort Unlock". This makes the station release the cable if the connection is lost.

![Alfen – Figure 6](/img/ocpp-ladestationen-alfen/06.png)

![Alfen – Figure 7](/img/ocpp-ladestationen-alfen/07.png)

### Operation with LAN / Ethernet connection

9. Switch to the "Wired" tab

10. In the "Back office URL" field, enter the first part of the OCPP URL from the preparations (ws://www.ecarup.com)

11. In the "Back office path" field, enter the second part of the OCPP URL from the preparations. This assigns your station directly to your account.

Important: After all settings have been made, the station must be restarted.

![Alfen – Figure 8](/img/ocpp-ladestationen-alfen/08.png)

### Operation with SIM card

12. Activate the "Advanced Settings" and switch to the "GPRS" tab

13. In the "Back office URL" field, enter the first part of the OCPP URL from the preparations (ws://www.ecarup.com)

14\. In the "Back office path" field, add the second part of the OCPP URL from the preparations. This assigns the station directly to your account.

15. In the "APN Name" field, enter your provider (e.g. gprs.swisscom.ch). You can leave "APN Username" and "APN Passwort" empty.

Important: After all settings have been made, the station must be restarted.

![Alfen – Figure 9](/img/ocpp-ladestationen-alfen/09.png)

The ICU ALFEN charging stations are now registered as charging stations in your eCarUp account and can be configured as described in Configuration in eCarUp. If it is an ICU Pro with two charge points, you can edit both in the backend after installation.

## Advanced setting via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Alfen – Figure 10](/img/ocpp-ladestationen-alfen/10.png)

![Alfen – Figure 11](/img/ocpp-ladestationen-alfen/11.png)
