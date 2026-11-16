---
title: 'Charging at Home with 15-Minute Import'
slug: '/anwendungsfaelle/privat-billing'
description: 'Video guide: billing of EV charging stations in smart-me Billing'
sidebar_label: 'Private Billing'
---

<Video src="Mi6Ru4lhTiw" title="YouTube video, billing of EV charging stations" />

Video guide: billing of EV charging stations in smart-me Billing

## 1\. General information

The following article describes a standard configuration for charging at home with eCarUp/smart-me (for example for apartment buildings, condominium owners' associations or MEG).

The advantage of this variant is that data can be imported directly from the station (and without additional hardware) into the smart-me platform in 15\-minute intervals. With this data quality, multi-tariff billing such as peak and off-peak tariffs is possible, as well as ZEV billing including a solar tariff. 

This type of billing is currently only possible with the following station manufacturers, as they allow a 15-minute data import:

[Pico](/smart-me-pico)

[easee](/ocpp-ladestationen/easee)

[Zaptec](/ocpp-ladestationen/zaptec)

The invoices are then created automatically in the smart-me portal using [smart-me Billing](https://wiki.smart-me.com/konfiguration/billing) and can be sent to the residents.

With the settings described below, the use case "Charging at home with 15-minute import" can be configured on smart-me/eCarUp. The target state/the advantages are as follows:

- Stations are not publicly visible (only for invited special users)

- Drivers can charge directly via the app or RFID card (subject to a fee)

- Simple "onboarding" for the drivers

- Prices only need to be adjusted once a year (bulk update)

- As an extra, an account for free charging can also be created (e.g. for the caretaker)

An [eCarUp Premium license](https://web.ecarup.com/preise-ladestationen-backend/) is a prerequisite for this use case

## 2\. Set up the 15-minute data import to smart-me

As a first step, the data import to the correct smart-me account must be set up for the desired stations. A guide for this is described in a separate [wiki article](/funktionen/15-minuten-datenimport).

## 3\. Configure smart-me Billing

Once the charging stations have been created as metering points in smart-me, billing can be set up.

The configuration and setup of [smart-me Billing](https://wiki.smart-me.com/konfiguration/billing) is described in detail in the smart-me wiki. If required, contact one of our many partners of [smart-me](https://web.smart-me.com/projektpartner/) or [eCarUp](https://web.ecarup.com/partner-de/) for the configuration.

If a ZEV with smart-me already exists, the stations can be listed flexibly on the invoice.

### List charging stations as a separate billing item

- The consumption of the charging station is shown on a separate invoice alongside the consumption of the apartment.

- This variant is better especially if the costs for the charging station have to be shown on a separate invoice (e.g. for expense reports or when renting to third parties).

- Optionally, further items (e.g. for the charging station rental) can also be listed and charged.

![Charging at Home with 15-Minute Import – Figure 1](/img/anwendungsfaelle-privat-billing/01.png)

### Assign charging stations to the apartment unit

- The consumption for the apartment and the charging station are shown on one invoice.

- Charging stations are included directly in the apartment consumption as an additional "meter". The consumption cannot be clearly allocated to the individual items.

![Charging at Home with 15-Minute Import – Figure 2](/img/anwendungsfaelle-privat-billing/02.png)

If the stations are only to be billed via smart-me Billing, the configuration is complete at this point. In this case, the release/authentication must be handled locally via the respective manufacturer's system.

The following describes how the stations can additionally be integrated into the eCarUp backend:

IMPORTANT: For the connection to the eCarUp backend described below, please use [a different account from the one used for the connection with the 15-minute import](/funktionen/15-minuten-datenimport). Otherwise, the stations will be created twice and the purchased licenses will not be sufficient.

Integration into eCarUp offers several advantages:

- Straightforward monitoring of the charge points in the eCarUp dashboard and in the reports

- Stations must be authenticated via eCarUp and can be released for the right users

- Drivers see their own charging history in the app or in the web portal

- Flexible RFID/NFC handling for authentication at the stations

- Visitor stations are billed easily via credit card 

- No additional costs

## 4\. Connect charging stations to the eCarUp backend

In addition, the stations must be connected to the eCarUp backend. The integration of the station models supported with this model is described directly with each of them:

[Pico](/smart-me-pico)

[easee](/ocpp-ladestationen/easee)

[Zaptec](/ocpp-ladestationen/zaptec)

A [step-by-step guide for integrating the stations](/stationsbetreiber/inbetriebnahme-ocpp-station) is also available.

Since no billing takes place via credit card, the price for the stations in eCarUp must be set to 0.- per kWh and 0.- per h. The charging transactions are recorded as consumption and then charged by invoice according to the tariff structure set up in Billing.

## 5\. Set up charging stations

Once the charging stations have been connected to eCarUp, they appear in the eCarUp account in the dashboard and in station management.

![Charging at Home with 15-Minute Import – Figure 3](/img/anwendungsfaelle-privat-billing/03.png)

### Basic settings

The stations are then set up by clicking "Stations" (Stationen) and then "Station management" (Stationsverwaltung):

- Change the name and description of the station

- Delete stations

- Set locations

- Edit connectors (if there are several)

- Define connector types (e.g. Typ 2, CSS or Chademo)

- Define max. power (e.g. 22 kW)

- Define access (public, limited and private)

Public = all users / Limited = station owner and special users

Private = ONLY the station owner or the account in which the stations are installed

- Set prices for energy and time

- Define reserved times

- Activate the station from the web portal

All [settings for station owners](/stationsbetreiber/webportal) are summarized in a wiki article.

### Create station groups

Organizing the charging stations in station groups (e.g. by location or by residential block) is important for their management:

![Charging at Home with 15-Minute Import – Figure 4](/img/anwendungsfaelle-privat-billing/04.png)

Fully configured, it can look like this:

![Charging at Home with 15-Minute Import – Figure 5](/img/anwendungsfaelle-privat-billing/05.png)

### Create special users

To ensure that the stations can only be unlocked by authorized drivers/end customers, the permissions must be set accordingly. There are two options for this:

1. Maintain user groups

In this variant, a user group is created and assigned to the stations. This way, when tenants change or new drivers are added, a new member can easily be added to or removed from the user group. This reduces the administrative effort.

- The stations are set to the status "limited" (limitiert)

- A user group with all authorized drivers is created

- The user group is assigned to the station group

- A location is stored for the stations

![Charging at Home with 15-Minute Import – Figure 6](/img/anwendungsfaelle-privat-billing/06.png)

![Charging at Home with 15-Minute Import – Figure 7](/img/anwendungsfaelle-privat-billing/07.png)

2. Assign individual users to the stations

In this variant, the individual drivers/end customers are assigned to their respective stations. Only the special user can unlock their own charging station. This means that when tenants change or new drivers are added, the accounts must be assigned to the stations each time. The account must be actively maintained on an ongoing basis.

- The stations are set to the status "limited" (limitiert)

- The correct driver account is released with the correct price for the station

- A location is stored for the station

![Charging at Home with 15-Minute Import – Figure 8](/img/anwendungsfaelle-privat-billing/08.png)

![Charging at Home with 15-Minute Import – Figure 9](/img/anwendungsfaelle-privat-billing/09.png)

## 6\. Inform drivers / end customers

It is recommended to inform the drivers/end customers about the release of the station. For payment, the drivers must create their own eCarUp account and store a valid credit card as a payment method:

- You can find a possible guide/template to send to the drivers in this [document](https://docs.google.com/document/d/1WVdQFd3flkJsQTIyEgS5zUauPbomZ3kOBfhEasXHgFs/edit).

- [All functions for drivers](/fahrer) are summarized on a separate wiki page.

- There is also an [FAQ for drivers](/faq) with the most important questions and answers.

- Drivers can independently [add RFID/NFC tags to their account](/fahrer/rfid-nfc-tags-carid) and then use them to unlock the charging station.

With the flexible eCarUp system, the administrative effort is minimized. The drivers/end customers can create and manage their accounts independently.

## 7\. Label the stations

So that drivers can also unlock the stations with the app and without an RFID card, we recommend labeling the stations with a QR code and a short instruction text. This helps, for example, if a driver loses their RFID card or does not have it with them.

You can find some [examples of labels](/stationsbetreiber/qr-code) directly on this wiki page.

## 8\. Visitor parking spaces

<div className="row">
<div className="col col--6">

With eCarUp, charging stations can also be billed publicly and thus to anonymous drivers. To do this, the stations must be given the status "public" (öffentlich) during setup and a location must be set. In addition, labeling the charging stations is very important here, as ad-hoc and thus barrier-free charging takes place via the QR code.

Visitor parking spaces can also easily be assigned different prices. (see below).

Optionally, the stations can also be published [in third-party charging networks via the roaming function](/funktionen/roaming). However, this is only possible if the station is publicly available 24 hours a day, 7 days a week. You must be aware that the station will then be found very widely (in a wide range of apps and car navigation systems) and will therefore attract outside users.

</div>
<div className="col col--6 text--center">

![Charging at Home with 15-Minute Import – Figure 10](/img/anwendungsfaelle-privat-billing/10.png)

</div>
</div>

![Charging at Home with 15-Minute Import – Figure 11](/img/anwendungsfaelle-privat-billing/11.png)

## 9\. Error analysis and troubleshooting

With the help of the eCarUp portal, simple faults are detected and the appropriate measures are initiated. If stations in the dashboard or in station management are shown in grey and thus as "inactive" (inaktiv), they have lost the connection to the backend (for longer than 10 minutes) and therefore cannot be used via eCarUp. Two possible reasons for this:

Internet outage: Restore the internet connection. As soon as the stations reach eCarUp again, the status changes to "available" (verfügbar) or blue and they can be used normally again.

Power outage: Restore the power supply. As soon as the stations reach eCarUp again, the status changes to "available" (verfügbar) or blue and they can be used normally again.

With the maintenance tool included in eCarUp Premium, the communication between the charging station and the backend can be traced and an in-depth error analysis can be carried out.

If the error lies deeper, you must contact the person responsible for the project (e.g. the electrical installer who carried out the work).

![Charging at Home with 15-Minute Import – Figure 12](/img/anwendungsfaelle-privat-billing/09.png)

![Charging at Home with 15-Minute Import – Figure 13](/img/anwendungsfaelle-privat-billing/13.png)

Practical tip: To test or check the functionality of stations on site, an account can be created for the technical service or another responsible person on site (e.g. hauswart\[at\]musterhaus.ch). This account can be stored with the stations as a special user with a price of 0 per kWh and 0 per h and can thus carry out tests at no cost.
