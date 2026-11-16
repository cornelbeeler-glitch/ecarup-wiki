---
title: 'Zaptec'
slug: '/ocpp-ladestationen/zaptec'
description: 'Backend integration guide'
sidebar_label: 'Zaptec'
---
![Zaptec – Figure 1](/img/ocpp-ladestationen-zaptec/01.jpg)

[Zaptec Go](https://www.zaptec.com/de-ch)

![Zaptec – Figure 2](/img/ocpp-ladestationen-zaptec/02.jpg)

[Zaptec Pro](https://www.zaptec.com/de-ch)

## Backend integration guide

Zaptec stations can be integrated into the eCarUp billing system in just a few steps. Once they are installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times etc.). You decide who can charge, when and at what price. 

- Requirement for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more here about our [Premium features](/funktionen)


### Integration of OCPP stations

1.  Make sure that your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" ("Stationen") tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.


## Connecting the Zaptec charging stations

The Zaptec station can also transmit the 15-minute values to smart-me. Learn more about this under [15-minute data import](/funktionen/15-minuten-datenimport).

[![Zaptec – Figure 3](/img/ocpp-ladestationen-zaptec/03.jpg)](https://youtu.be/jK-UypywXZU)

Video guide: integrating Zaptec into the eCarUp backend

## Zaptec Go and Pro

### Installation in the Zaptec portal

1.  Navigate to the [Zaptec web portal](https://portal.zaptec.com/) and log in

2.  In the menu ribbon at the top, select "Installations" ("Installationen") and the desired group of Zaptec stations for integration into the eCarUp billing system

3.  Now select "Settings" ("Einstellungen") and then "Authentication" ("Authentifizierung") in the submenu

4.  You will see the following menu interface:


5\. Enable the "OCPP 1.6 authentication" ("OCPP 1.6 Authentifizierung") field

6\. Under "URL", enter the OCPP URL that you received during the preparations in the eCarUp portal. 

Attention: the URL must be extended with / & &#123;deviceid&#125;

- Example: ws://www.ecarup.com/api/Ocpp16/wei948gfhwe/&#123;deviceid&#125;


7\. Enable the "Authorization required" field and finally click "Save" ("Speichern")

⚠️ Important:  The station must be restarted. 

The Zaptec chargers of the selected group are now registered as charging stations in your eCarUp account and can be configured according to your individual terms of use.

![Zaptec – Figure 4](/img/ocpp-ladestationen-zaptec/04.png)

### Billing Zaptec chargers in a multi-tariff system

The 15-minute values of the Zaptec station can be exported. This enables advanced tariff structures such as ZEV billing or multi-tariff systems. You can find out more on the [15-minute data import](/funktionen/15-minuten-datenimport) page.

## Without authentication + offline charging

Connect your Zaptec stations to eCarUp via the installation as usual. ( Steps 5. to 7. )

1.  If not already registered, please add a driver

2.  Then navigate to the charging station

3.  Disable authentication

4.  Add a standard ID tag of your driver. 


Important: the RFID token must also be registered with eCarUp under the driver. You can find more information here: [LINK](/fahrer/rfid-nfc-tags-carid)

![Zaptec – Figure 5](/img/ocpp-ladestationen-zaptec/05.png)

What happens:

If no token is stored, eCarUp sends an "Invalid" message, because the ID tag is empty. As the backend, we must be able to validate at all times who is authorising. 

![Zaptec – Figure 6](/img/ocpp-ladestationen-zaptec/06.png)

If a token is stored at Zaptec, eCarUp sends an "Accepted" message, because the ID tag is now sent along. The charge is still registered with eCarUp. 

![Zaptec – Figure 7](/img/ocpp-ladestationen-zaptec/07.png)

Charging can now also be carried out in offline mode. The station sends us the offline transaction afterwards as soon as it is back online. 

![Zaptec – Figure 8](/img/ocpp-ladestationen-zaptec/08.png)

The advantage is that the driver can also be charged retrospectively. (if configured accordingly)

## Multiple eCarUp station owners on one Zaptec installation?

### Yes, this works!

Proceed as follows:

1.  On the installation, set the authentication to OCPP 1.6J as usual

2.  Leave the URL field empty

3.  Tick the checkbox for authentication required.

4.  Now go to the station, where you can enter the individual URL with the serial number of the Zaptec station in the settings. 

5.  Save.


![Zaptec – Figure 9](/img/ocpp-ladestationen-zaptec/09.png)

![Zaptec – Figure 10](/img/ocpp-ladestationen-zaptec/10.png)

### Links

[Webinar recording: Zaptec charging stations in the eCarUp backend](https://web.ecarup.com/webinar-zaptec-stationen-mit-ecarup-backend/)

[15-minute data import](/funktionen/15-minuten-datenimport)

[Features of the Zaptec wallbox in the eCarUp backend](https://web.ecarup.com/backend/novavolt-zaptec-charger-abrechnen/)

## Advanced settings via the maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. This is the only way we can better calculate and display the current charging power in the app. 



You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)


![Zaptec – Figure 11](/img/ocpp-ladestationen-zaptec/11.png)

![Zaptec – Figure 12](/img/ocpp-ladestationen-zaptec/12.png)
