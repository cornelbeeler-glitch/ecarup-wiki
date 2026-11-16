---
title: 'Public charging'
slug: '/anwendungsfaelle/oeffentlich'
description: '1\. General information'
sidebar_label: 'Public'
---

## 1\. General information

The following article describes a standard configuration for setting up and operating a public charging station with eCarUp. Drivers pay by credit card and the money is transferred automatically from the driver to the station owner. If your station is semi-public (e.g. within an SME), we have documented this in a separate [wiki article](/anwendungsfaelle/laden-im-kmu).

The advantage of this option is that the money is transferred automatically from the driver's credit card to the station owner's account. 

This has two key advantages:

1.  The entire collection process is fully automated: eCarUp transfers the money from each transaction to the station owner's account directly after it ends. 

2.  As a result, eCarUp AG never holds the money, and all transactions (including, for example, those of guests in visitor parking spaces) comply with the applicable legal requirements.

You can find all further details on [billing by credit card](/stationsbetreiber/abrechnen-auszahlen) and on the [legal requirements for transferred funds](/stationsbetreiber/account-verifizieren) in our wiki.

Billing by credit card always incurs a 10% commission, regardless of whether an [eCarUp premium licence](https://web.ecarup.com/preise-ladestationen-backend/) is active or not.

An [eCarUp Premium licence](https://web.ecarup.com/preise-ladestationen-backend/) is strongly recommended for this use case (otherwise some important features such as the maintenance tool, the reports or roaming are not available).

## 2\. Connecting charging stations to the eCarUp backend

First, the stations must be connected to the eCarUp backend:

- You can find an up-to-date list of all [supported charging station models](/ocpp-ladestationen) in our wiki.

- A [step-by-step guide to integrating the stations](/stationsbetreiber/inbetriebnahme-ocpp-station) is also available.

- For money to be transferred to the account, the account must be verified. You can find the information on this here: [Verify your account in eCarUp](/sonstige-informationen/stripe). We recommend completing this step before or during the installation of the charging stations. Without verification, eCarUp cannot transfer any money to the account for legal reasons, and no paid charging is possible.

    The transferred money is continuously credited to your station owner account and can be paid out to any IBAN at any time under the menu item "Account".

![Public charging – Figure 1](/img/anwendungsfaelle-oeffentlich/01.png)

## 3\. Setting up charging stations

Once the charging stations have been connected to eCarUp, they appear in the eCarUp account in the dashboard and in the station management.

With eCarUp, charging stations can easily be billed publicly and therefore to anonymous drivers. To do this, the stations must be assigned the status "public" (öffentlich) during setup and a location must be set. 

![Public charging – Figure 2](/img/anwendungsfaelle-oeffentlich/02.png)

### Basic settings

The stations can then be set up by clicking "Stations" (Stationen) and then "Station management" (Stationsverwaltung):

- Change the name and description of the station

- Delete stations

- Set locations

- Edit connectors (if there are several)

- Define connector types (e.g. Typ 2, CSS or Chademo)

- Define max. energy (e.g. 22 kW)

- Define access (Public (Öffentlich), Limited (Limitiert) and Private (Privat))

Public = all users / Limited = station owner and special users / Private = ONLY the station owner or the account in which the stations are installed

- Set prices for energy and time

- Define reserved times

- Activate the station from the web portal

All [settings for station owners](/stationsbetreiber/webportal) are summarised in a wiki article.

Once fully configured, it can look like this:

![Public charging – Figure 3](/img/anwendungsfaelle-oeffentlich/03.png)

## 4\. Labelling stations

For publicly accessible charging, labelling the charging stations is very important so that drivers know how to unlock the charging station. Clear labelling also lets you communicate important information to drivers, such as additional rules (max. parking time, parking fees, etc.).

There are two options for unlocking directly via eCarUp:

### Charging via the eCarUp app

- -   The driver downloads the free eCarUp app (Android/Apple)

    - They create an account and add a valid credit card as a payment method

    - They can unlock the station either by scanning the QR code in the app or via the map function at the push of a button ([guide to charging as a web story](https://web.ecarup.com/web-stories/laden-mit-der-ecarup-app/))

    - After the charging session ends, the amount due is automatically charged to the stored credit card

    - We have described this in detail in a [description for drivers](/fahrer) in the wiki or in this [FAQ](/faq)

### Ad hoc charging via QR code

<div className="row">
<div className="col col--6">

- The driver scans the QR code on the station with their mobile phone camera or a QR code scanner app

- They land on a mobile website where they can trigger a one-time payment by entering their credit card details

- They receive an e-mail with a permalink to end the charging (this can also be done by unplugging the charging cable) as well as a receipt after the charging session ends

- A detailed description of barrier-free charging is available in our wiki

- PLEASE NOTE: To protect station owners, a temporary authorisation of CHF 60.- is placed on the credit card used with this option. It is automatically released at the end of the charging session.

You can find some [examples of labelling](/stationsbetreiber/qr-code) directly on the wiki page.

</div>
<div className="col col--6 text--center">

![Public charging – Figure 4](/img/anwendungsfaelle-oeffentlich/04.png)

</div>
</div>

## 5\. Roaming

Optionally, the stations can also be published in third-party charging networks via the [roaming function](/funktionen/roaming). However, this is only possible if the station is publicly available 24 hours a day, 7 days a week. You should also be aware that the station will then be found very widely (in a wide range of apps and in-car navigation systems) and will therefore attract unknown users. 

In addition, you must define a separate price for roaming. eCarUp transmits this price to the roaming network, where it serves as the basis for the pricing of the other connected charging networks. However, neither you as the station operator nor eCarUp as the platform has any influence on the tariff structure of the other platforms.

You can find detailed information in the [wiki article on roaming](/funktionen/roaming).

![Public charging – Figure 5](/img/anwendungsfaelle-oeffentlich/05.png)

## 6\. Fault analysis and troubleshooting

The eCarUp portal helps you detect simple faults and take the appropriate action. If stations are shown in grey in the dashboard or in the station management and are therefore marked as "inactive" (inaktiv), they have lost their connection to the backend (for more than 10 minutes) and therefore cannot be used via eCarUp. There are two possible reasons for this:

- Internet outage: Restore the internet connection. As soon as the stations reach eCarUp again, the status changes to "available" (verfügbar) or blue and they can be used normally again.

- Power outage: Restore the power supply. As soon as the stations reach eCarUp again, the status changes to "available" (verfügbar) or blue and they can be used normally again.

With the maintenance tool included in [eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/), you can track [the communication between the charging station and the backend](/funktionen/wartung) and carry out an in-depth fault analysis.

If the fault lies deeper, you must contact the person responsible for the project (e.g. the electrical installer who carried out the work).

![Public charging – Figure 6](/img/anwendungsfaelle-oeffentlich/06.png)

Practical tip: To test or check the functionality of stations on site, you can create an account for the technical service or another responsible person on site. This account can be stored at the stations as a special user with a price of 0 per kWh and 0 per h, allowing tests to be carried out free of charge.

## 7\. Optional: Creating charging station groups and defining special users

Even with public charging stations, you can additionally define special users (e.g. employees, neighbours, etc.) at any time, who can then charge at the stations at a special tariff.

### Creating station groups

Organising the charging stations into station groups (e.g. by location) is important for managing them:

![Public charging – Figure 7](/img/anwendungsfaelle-oeffentlich/07.png)

### Creating special users

To ensure that the stations can only be unlocked by authorised drivers/end customers, the permissions must be set accordingly. There are two options for this:

1. Maintaining user groups

In this option, a user group is created and assigned to the stations. This makes it easy to add or remove members of the user group when tenants change or when there are new drivers. This reduces the administrative effort.

- The stations are set to the status "limited" (limitiert)

- A user group containing all authorised drivers is created

- The user group is assigned to the station group

![Public charging – Figure 8](/img/anwendungsfaelle-oeffentlich/08.png)

![Public charging – Figure 9](/img/anwendungsfaelle-oeffentlich/09.png)

2. Assigning individual users to the stations

In this option, the individual drivers/end customers are assigned to their respective stations; only the respective special user can unlock their own charging station. This means that the accounts must be assigned to the stations each time tenants change or new drivers are added, which means that the account must be actively managed on an ongoing basis.

- The stations are set to the status "limited" (limitiert)

- The correct driver account is enabled for the station with the correct price

- A location is stored for the station

![Public charging – Figure 10](/img/anwendungsfaelle-oeffentlich/10.png)

![Public charging – Figure 11](/img/anwendungsfaelle-oeffentlich/11.png)
