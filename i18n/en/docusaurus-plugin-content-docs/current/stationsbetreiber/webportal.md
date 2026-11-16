---
title: 'Web portal'
slug: '/stationsbetreiber/webportal'
description: 'Log in to eCarUp with your existing login details.'
sidebar_label: 'Web portal'
---

## Login

Log in to [eCarUp](https://admin.ecarup.com/authentication/login) with your existing login details. If you do not have a user account yet, you can [register](https://admin.ecarup.com/authentication/login) right away. 

## Dashboard overview

- Station status: See the status of all charging stations at a glance (available, connected, occupied, out of service)

- Last charging sessions: At stations in this account (from all users), the last 20 entries. The colours here say nothing about the status.

- Revenue:  The balance available for payout from the charging sessions at the stations in this account. Available soon (Bald verfügbar) means that our payment service provider is checking it for money laundering. Normally, it is credited for payout within 1-2h. 


⚠️Important: With the status "out of service" ("ausser Betrieb"), the station has no active communication with the backend. We automatically mark the station as "out of service" ("ausser Betrieb") after 15 minutes. If you want to be notified of an interruption, take a look at the following setting: "[Alarm](/funktionen/wartung/alarme)". 

Info: If you want to create your own individual dashboard, take a look at the following [page](/drittsysteme/api-visualisierung). The [eCarUp API](/funktionen/ecarup-api) makes it possible. 

![Web portal – Figure 1](/img/stationsbetreiber-webportal/01.png)

## Station management

- Filter stations

- Organise stations in groups

- Monitor status


![Web portal – Figure 2](/img/stationsbetreiber-webportal/02.png)

⚠️Important: The status does not match the wallbox?

- If there are interruptions at the wallbox (especially during active charging sessions), eCarUp may show the status as red (active charging session) while the wallbox is ready again. This means that we have not yet received a command from the station to end the charging session (Stop Transaction). 

- A restart or reset can help.


Charging power

- Is the current charging power not displayed during the charging session? Take a look at the following article in [Maintenance](/funktionen/wartung). 


### Configure station

- Click the three dots on the right to edit the charging station. 

- Do you have several charge points that you want to edit at the same time? Here is the guide for bulk changes.




![Web portal – Figure 3](/img/stationsbetreiber-webportal/03.png)

### Edit (Bearbeiten)

Under Edit (Bearbeiten), you can do the following:

- Change the name and description of the station (this information is visible on the map in the app)

- Delete stations (important: this also deletes the historical data; we recommend setting the station to not licensed)

- Not licensed station (set the station to inactive)

- Upload images of the stations


⚠️Important: Images with a size of approx. 605 x 806 pixels are suitable. 

![Web portal – Figure 4](/img/stationsbetreiber-webportal/04.png)

### Edit connector (Anschluss bearbeiten)

Information:

(this information is visible in the app)

- Name of the connector

- Description (optional)

- Connector type (plug type)

- Max. energy (kW)


Prices:

- Set prices for energy and time


⚠️Important: With the access "limited" ("limitiert"), the field is greyed out, because in this case the price is set under "Define users (Benutzer definieren) or in the [advanced user management](/funktionen/erw-nutzerverwaltung)".

![Web portal – Figure 5](/img/stationsbetreiber-webportal/05.png)

### Access (Zugriff)

- Private (Privat): Only the "owner account" can activate, i.e. the account in which the station was installed.

- Limited: Only the "owner account" and the "special users" defined per station (via individual "special users" or via the [advanced user management](/funktionen/erw-nutzerverwaltung)) can activate. Other accounts have no access – neither via the app nor via QR code.

- Public (Öffentlich): All users can unlock, either via the app or via the QR code instant payment method using the phone camera or a scanner app (with the status public, however, the station is not yet published in [roaming](/funktionen/roaming) with other charging networks; this must be done separately. 


### Define users (Benutzer definieren)

- Here, an individual user with their own price can be stored. 

- Or \*special users" can also be added via the price rule


⚠️Important: If a user is stored in both categories, the price under which they were added as a "single user" ("Einzelner Benutzer") applies. 

![Web portal – Figure 6](/img/stationsbetreiber-webportal/06.png)

### Define times (Zeiten definieren)

The opening hours can also be adjusted in time, so that the charging stations are, for example, only publicly accessible at certain times of the day. ( similar to AirBnB)




For example: An SME can make charging stations available to employees (special users) during opening hours at a special price. In the evening and at weekends, the unused stations can be released to the public at a different price.

This creates a win-win situation: The station owner can earn money with charging infrastructure that is already there, and more publicly accessible charge points are created (also in places such as industrial areas, where otherwise no one invests in public charging infrastructure).

### Automatic charging session

- With the automatic charging session, a charging session is started in the name of the station operator as soon as the backend reaches a "Preparing" status. This application is only suitable for private use and not for the limited and public use cases. 


### Hubject

- Here you can optionally add the station to the Hubject roaming network. You can find in-depth information on how it works in the following article on [roaming](/funktionen/roaming). 


![Web portal – Figure 7](/img/stationsbetreiber-webportal/07.png)

![Web portal – Figure 8](/img/stationsbetreiber-webportal/08.png)

### Set location (Standort setzen)

Set the location of the station on the map and adjust the address manually if necessary. Attention: be sure to set the "pin" on the map. 

⚠️Important: do you have several charge points at one location? Then please drag the location points slightly apart, as shown in the screenshot here. 







The location can also be deleted again. 

![Web portal – Figure 9](/img/stationsbetreiber-webportal/09.png)

![Web portal – Figure 10](/img/stationsbetreiber-webportal/10.png)

### Activate (Aktivieren)

- The station can be activated from the web portal. This is free of charge, as the stations are activated in the name of the station operator. 


## Bulk changes

Do you want to edit all charge points together with regard to users or price?

Then carry out the following steps:

- Select the desired stations (see the checkbox at the beginning).

- Click "Edit selected stations" ("Ausgewählte Stationen bearbeiten"). 


- You now see the number of selected stations and can set the access, the price, the reserved times and activate roaming for all selected stations. 


![Web portal – Figure 11](/img/stationsbetreiber-webportal/11.png)

![Web portal – Figure 12](/img/stationsbetreiber-webportal/12.png)

## OCPP

In the OCPP section, you will find your individual URL for integrating the OCPP charging stations. 

- If you want to know more about OCPP, you will find your answers in the article on [OCPP logs](/funktionen/wartung/ocpp-logs) here.

- If you want to integrate an OCPP charging station with eCarUp, you will find a [guide per manufacturer](/ocpp-ladestationen) here. 


![Web portal – Figure 13](/img/stationsbetreiber-webportal/13.png)



Basic authentication 

- Purpose: It prevents unknown or fake stations from connecting to the system and your account.

- Important: Always use it in combination with WSS (encrypted connection)

- The authentication applies to the entire account – this means that all stations in it must know the password in order to connect. 


Example Zaptec: 



![Web portal – Figure 14](/img/stationsbetreiber-webportal/14.png)

## QR code

You can find everything about QR codes at the following link: [generating QR codes](/stationsbetreiber/qr-code) 

![Web portal – Figure 15](/img/stationsbetreiber-webportal/15.png)

## Groups

- Station groups: Here you can create station groups to give your eCarUp account a little more overview.

- User groups: Here you can create entire user groups and store price rules for the station groups. This is possible with the Premium subscription, and you can find a guide at the following [link](/funktionen/erw-nutzerverwaltung). 


⚠️Important: You can also assign a station to several groups. 

![Web portal – Figure 16](/img/stationsbetreiber-webportal/16.png)

## Reports

You can find all information on reports at the following [link](/funktionen/reports).

## Maintenance

You can find all information on maintenance at the following [link](/funktionen/wartung).

## Account and payout

- Revenue: The balance available for payout from the charging sessions at the stations in this account

- Legal information: As a station operator, you must provide some information for legal reasons (money laundering) due to the [Know Your Customer principle](https://de.wikipedia.org/wiki/Know_your_customer) that applies in Europe. This differs depending on whether you are a private individual or a company.

- Verify account: After successfully entering the "Legal information" ("Rechtliche Angaben"), your account still has to be verified. For this, you are taken to the landing page of Stripe (online payment service provider) and guided step by step. On the following  [wiki page](/stationsbetreiber/account-verifizieren), you will find more information on this topic. 

- Bank account information: Enter the IBAN of the bank account to which the payout is to be transferred 

- Payout: Request the payout of the current balance in your account. The bank transfer usually takes 2-3 working days. On the page [Billing](/stationsbetreiber/abrechnen-auszahlen), you will find an example of a payout receipt. Here, a commission or a comment can be added as an intermediate step. 

- Automated payout schedule: Premium customers can also automate the payout. Read more about it here: [Automatic payout](/funktionen/automatische-auszahlung)

- VAT information: This value is shown in the payout receipt and the driver receipts.

- Change e-mail and password

- Support contact information: Here you can place information that is useful for the driver. 


### Balance history (Saldoverlauf)

- Here, the station operator sees the history of payments and payouts. At the same time, the receipts can be sent again to the e-mail address of the account.


![Web portal – Figure 17](/img/stationsbetreiber-webportal/17.png)

![Web portal – Figure 18](/img/stationsbetreiber-webportal/18.png)

### Licences (Lizenzen)

- In the menu item "Licences" ("Lizenzen"), you can see the total number of your purchased Premium licences at any time. From January 2025, you also have the option of purchasing the licences online by credit card. 


![Web portal – Figure 19](/img/stationsbetreiber-webportal/19.png)

## Driver (Fahrer)

Drivers can also log in to the eCarUp web portal. Under the menu item "Driver" ("Fahrer"), you will find all charging sessions of the account and can filter them by any time period.

In addition, drivers can add any RFID card (for example an employee badge) to your account in order to identify themselves with it at RFID-enabled charging stations. You can find the guide on the page [RFID / NFC tags](/fahrer/rfid-nfc-tags-carid) .

![Web portal – Figure 20](/img/stationsbetreiber-webportal/20.png)

Info: Do you have a fingerprint in the history in the Signature (Signatur) column? Then learn more about [calibration law in Germany](/sonstige-informationen/eichrecht-in-deutschland) here. 

### eCarUp Premium

You need an eCarUp Premium licence for the following functions:

[Maintenance](/funktionen/wartung)

[Reports](/funktionen/reports)

[Price plans](/funktionen/preisplaene)

[Roaming](/funktionen/roaming)

[Advanced user management](/funktionen/erw-nutzerverwaltung)

[15-minute data import](/funktionen/15-minuten-datenimport)

[Statistics](/funktionen/statistiken)

[Automatic payout](/funktionen/automatische-auszahlung)

[eCarUp API](/funktionen/ecarup-api)
