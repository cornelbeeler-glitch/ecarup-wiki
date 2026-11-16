---
title: 'Charging at home with a credit card'
slug: '/anwendungsfaelle/privat-kreditkarte'
description: '1\. General information'
sidebar_label: 'Private credit card'
---

## 1\. General information

The following article describes a standard configuration for charging at home with eCarUp (for example for apartment buildings, condominium owners' associations or self-consumption communities).  The drivers pay by credit card and the credit is automatically transferred from the driver to the station owner.

The advantage of this variant is that the money is automatically transferred from the driver's credit card to the station owner's account. This has two key benefits:

1.  The entire collection process is fully automated: eCarUp transfers the money from the transactions directly to the station owner's account as soon as they have ended. 

2.  As a result, the credit is never held by eCarUp AG, and all transactions (including, for example, those from guests in the visitor parking spaces) comply with the applicable legal regulations.


You can find all further details on [billing by credit card](/stationsbetreiber/abrechnen-auszahlen) and on the [legal regulations regarding transferred credit](/stationsbetreiber/account-verifizieren) in our wiki.

Billing by credit card always incurs a 10% commission, regardless of whether an [eCarUp premium licence](https://web.ecarup.com/preise-ladestationen-backend/) is active or not.

With the settings described below, the use case "charging at home by credit card" can be configured in eCarUp. The target state and the benefits are as follows:

- Stations are not publicly visible (only for invited special users)

- Drivers can charge directly via the app or an RFID card (subject to a fee)

- Simple onboarding for the drivers

- Prices only need to be adjusted once a year (bulk update)

- As an extra, an account for free charging can also be created (e.g. for the caretaker)


An [eCarUp premium licence](https://web.ecarup.com/preise-ladestationen-backend/) is strongly recommended for this use case (otherwise some important features such as the maintenance tool, the reports or the extended user management with user groups are missing).

## 2\. Connecting charging stations to the eCarUp backend

First, the stations must be connected to the eCarUp backend:

- You can find an up-to-date list of all [supported charging station models](/ocpp-ladestationen) in our wiki.

- A [step-by-step guide to integrating the stations](/stationsbetreiber/inbetriebnahme-ocpp-station) is also available.

- For money to be transferred to the account, the account must be verified. You can find the information on this here: [Verifying your account in eCarUp](/sonstige-informationen/stripe). We recommend completing this step before or during the installation of the charging stations. Without verification, eCarUp cannot transfer any money to the account for legal reasons, and no paid charging sessions are possible.



The transferred money is continuously credited to your station owner account and can be paid out to any IBAN at any time under the menu item "Account" (Account).

![Charging at home with a credit card – Figure 1](/img/anwendungsfaelle-privat-kreditkarte/01.png)

## 3\. Setting up charging stations

Once the charging stations have been connected to eCarUp, they appear in the eCarUp account in the dashboard and in the station management.

![Charging at home with a credit card – Figure 2](/img/anwendungsfaelle-privat-kreditkarte/02.png)

### Basic settings

The stations can then be set up by clicking on "Stations" (Stationen) and then "Station management" (Stationsverwaltung):

- Change the name and description of the station

- Delete stations

- Set locations

- Edit connectors (if there are several)

- Define connector types (e.g. Typ 2, CSS or Chademo)

- Define max.  energy (e.g. 22 kW)

- Define access (Public (Öffentlich), Limited (Limitiert) and Private (Privat))


Public = all users/Limited = station owner and special users/Private = ONLY the station owner, i.e. the account in which the stations are installed

- Set prices for energy and time

- Define reserved times

- Activate the station from the web portal


All [settings for station owners](/stationsbetreiber/webportal) are summarised in this wiki article.



### Creating station groups

Organising the charging stations into station groups (e.g. by location or by apartment block) is important for managing them:

![Charging at home with a credit card – Figure 3](/img/anwendungsfaelle-privat-kreditkarte/03.png)



Once fully configured, it can look like this:

![Charging at home with a credit card – Figure 4](/img/anwendungsfaelle-privat-kreditkarte/04.png)

## 4\. Simple access for drivers

To give drivers straightforward access without a lot of administrative effort, the charge point is created as public and without a location. As a result, the charge point does not appear on the eCarUp map, and no special user management is required. Nevertheless, every driver who has access to the underground car park can charge. 

![Charging at home with a credit card – Figure 5](/img/anwendungsfaelle-privat-kreditkarte/05.png)

### Driver access with user groups

Maintaining user groups

In this variant, a user group is created and assigned to the stations. This makes it easy to add or remove a member of the user group when tenants change or when there are new drivers. This reduces the administrative effort.

- The stations are set to the status "limited" (limitiert)

- A user group with all authorised drivers is created

- The user group is assigned to the station group


![Charging at home with a credit card – Figure 6](/img/anwendungsfaelle-privat-kreditkarte/06.png)

![Charging at home with a credit card – Figure 7](/img/anwendungsfaelle-privat-kreditkarte/07.png)

### Assigning drivers individually

Assigning individual users to the stations

In this variant, the individual drivers/end customers are assigned to their respective stations; only the respective special user can unlock their own charging station. This means that whenever tenants change or there are new drivers, the accounts have to be assigned to the stations, which in turn means that the account has to be actively managed on an ongoing basis.

- The stations are set to the status "limited" (limitiert)

- The correct driver account is enabled for the station with the correct price

- A location is stored for the station


![Charging at home with a credit card – Figure 8](/img/anwendungsfaelle-privat-kreditkarte/08.png)

![Charging at home with a credit card – Figure 9](/img/anwendungsfaelle-privat-kreditkarte/09.png)

## 5\. Informing drivers / end customers

We recommend informing the drivers/end customers that the station has been enabled. To pay, the drivers must create their own eCarUp account and store their own valid credit card as a payment method:

- A possible guide / template to send to the drivers can be found in this [document](https://docs.google.com/document/d/1WVdQFd3flkJsQTIyEgS5zUauPbomZ3kOBfhEasXHgFs/edit).

- [All functions for drivers](/fahrer) are summarised on a separate wiki page

- There is also an [FAQ for drivers](/faq) with the most important questions and answers.

- Drivers can independently [add RFID / NFC tags to their account](/fahrer/rfid-nfc-tags-carid) and then use them to unlock the charging station.


The flexible eCarUp system keeps the administrative effort to a minimum. The drivers/end customers can create and manage their accounts independently.

## 6\. Labelling stations

So that drivers can also unlock the stations with the app and without an RFID card, we recommend labelling the stations with a QR code and a short instruction text. This helps, for example, if a driver loses their RFID card or does not have it with them.
You can find some [examples of labelling](/stationsbetreiber/qr-code) directly on this wiki page.

## 7\. Visitor parking spaces

With eCarUp, charging stations can also be billed publicly and therefore to anonymous drivers. To do this, the stations must be assigned the status "public" (öffentlich) during setup and a location must be set. Labelling the charging stations is also very important here, as the QR code also allows ad hoc and therefore barrier-free charging.

Different prices can also easily be assigned to the visitor parking spaces (see below). 

Optionally, the stations can also be [published in third-party charging networks via the roaming function](/funktionen/roaming). However, this is only possible if the station is publicly available 24 hours a day, 7 days a week. You should also be aware that the station will then be found very widely (in a wide range of apps and car navigation systems) and will therefore attract outside users.

![Charging at home with a credit card – Figure 10](/img/anwendungsfaelle-privat-kreditkarte/10.png)

![Charging at home with a credit card – Figure 11](/img/anwendungsfaelle-privat-kreditkarte/11.png)

## 8\. Fault analysis and troubleshooting

The eCarUp portal can be used to detect simple faults and initiate the appropriate measures. If stations are shown in grey in the dashboard or in the station management and are therefore marked as "inactive" (inaktiv), they have lost the connection to the backend (for longer than 10  minutes) and therefore cannot be used via eCarUp. There are two possible reasons for this:

- Internet outage: Restore the internet connection. As soon as the stations reach eCarUp again, the status changes to "available" (verfügbar), i.e. blue, and they can be used normally again.

- Power outage: Restore the power supply. As soon as the stations reach eCarUp again, the status changes to "available" (verfügbar), i.e. blue, and they can be used normally again.


With the maintenance tool included in [eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/), [the communication between the charging station and the backend](/funktionen/wartung) can be traced and an in-depth fault analysis can be carried out.

If the fault goes deeper, you must contact the person responsible for the project (e.g. the electrical installer who carried out the work).

![Charging at home with a credit card – Figure 12](/img/anwendungsfaelle-privat-kreditkarte/12.png)

Practical tip: To test or check the functionality of stations on site, an account can be created for the technical service or another responsible person on site (e.g. hauswart\[at\]musterhaus.ch). This account can be stored for the stations as a special user with a price of 0.- per kWh and 0.- per h, and can therefore carry out tests free of charge.
