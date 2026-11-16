---
title: 'Charging at SMEs'
slug: '/anwendungsfaelle/laden-im-kmu'
description: '1\. General information'
sidebar_label: 'Charging at SMEs'
---

## 1\. General information

The following article describes a standard configuration for charging at SMEs with eCarUp. It covers the different models for billing charging stations at company premises for employees, partners and customers, as well as at home.

The advantage of the eCarUp platform is that an SME's different use cases can all be handled on one platform, and each station can be configured individually if required.

### Billing via credit card

Billing by credit card is a very efficient option, because the money is transferred automatically from the driver's credit card to the station owner's account. This has two key advantages:

1.  The entire collection process is fully automated: eCarUp transfers the money from each transaction to the station owner's account immediately after it ends.

2.  As a result, the credit is never held by eCarUp AG, and all transactions (including, for example, those of guests in visitor parking spaces) comply with the applicable legal requirements.

You can find all further details in our wiki on [billing by credit card](/stationsbetreiber/abrechnen-auszahlen) and on the [legal requirements for transferred credit](/stationsbetreiber/account-verifizieren).

Billing by credit card always incurs a 10% commission, regardless of whether an [eCarUp Premium licence](https://web.ecarup.com/preise-ladestationen-backend/) is active or not.

### Billing via reporting

The stations can also be billed using the [eCarUp reporting tool](/funktionen/reports).

- In this case, the stations are set up for all users with a price of 0.- per kWh and 0.- per hour. Charging sessions therefore have no direct cost and no billing via credit card takes place.

- At the end of the billing period (end of month, end of quarter, end of half-year), a report showing the consumption can be created either per station or per (previously created) special user.

- Based on these consumption figures, the energy can be billed, for example, through an expense report or another internal billing process (outside the eCarUp system).

![Charging at SMEs – Figure 1](/img/anwendungsfaelle-laden-im-kmu/01.png)

![Charging at SMEs – Figure 2](/img/anwendungsfaelle-laden-im-kmu/02.png)

An [eCarUp Premium licence](https://web.ecarup.com/preise-ladestationen-backend/) is strongly recommended for this use case, as otherwise some important features such as the maintenance tool, the reports or the extended user management with user groups are not available.

## 2\. Connecting charging stations to the eCarUp backend

First, the stations must be connected to the eCarUp backend:

- You can find an up-to-date list of all [supported charging station models](/ocpp-ladestationen) in our wiki

- A [step-by-step guide to integrating the stations](/stationsbetreiber/inbetriebnahme-ocpp-station) is also available

- For money to be transferred to the account, the account must be verified. You can find information on this under [Verifying your account in eCarUp](/sonstige-informationen/stripe). We recommend completing this step before or during the installation of the charging stations. Without verification, eCarUp cannot transfer any money to the account for legal reasons, and no paid charging is possible.
    The revenue is continuously transferred to the station owner's account and can be paid out to any IBAN at any time under the menu item "Account" ("Account").

![Charging at SMEs – Figure 3](/img/anwendungsfaelle-laden-im-kmu/03.png)

## 3\. Setting up charging stations

Once the charging stations have been connected to eCarUp, they appear in the eCarUp account in the dashboard and in the station management.

![Charging at SMEs – Figure 4](/img/anwendungsfaelle-laden-im-kmu/04.png)

### Basic settings

The stations can then be set up by clicking "Stations" ("Stationen") and then "Station management" ("Stationsverwaltung"):

- Change the name and description of the station

- Delete stations

- Set locations

- Edit connectors (if there are several)

- Define connector types (e.g. Typ 2, CSS or Chademo)

- Define maximum power (e.g. 22 kW)

- Define access (Public, Limited and Private)

Public = all users / Limited = station owner and special users
Private = ONLY the station owner, i.e. the account in which the stations are installed

- Set prices for energy and time

- Define reserved times

- Activate the station from the web portal

All [settings for station owners](/stationsbetreiber/webportal) are summarised in a wiki article.

### Creating station groups

Organising the charging stations into station groups (e.g. by location or by residential block) is important for managing them:

![Charging at SMEs – Figure 5](/img/anwendungsfaelle-laden-im-kmu/05.png)

Once fully configured, it can look like this:

![Charging at SMEs – Figure 6](/img/anwendungsfaelle-laden-im-kmu/06.png)

### Creating special users

To ensure that the stations can only be unlocked by authorised drivers/end customers, the permissions must be set accordingly. There are two ways to do this:

1. Maintaining user groups

In this option, a user group is created and assigned to the stations. When tenants change or new drivers are added, a member can easily be added to or removed from the user group. This reduces the administrative effort.

- The stations are set to the status "limited" ("limitiert")

- A user group with all authorised drivers is created

- The user group is assigned to the station group

![Charging at SMEs – Figure 7](/img/anwendungsfaelle-laden-im-kmu/07.png)

![Charging at SMEs – Figure 8](/img/anwendungsfaelle-laden-im-kmu/08.png)

2. Assigning individual users to the stations

In this option, the individual drivers/end customers are assigned to their respective stations. Only the respective special user can unlock their own charging station. When tenants change or new drivers are added, the accounts must be assigned to the stations each time. The account therefore has to be actively managed on an ongoing basis.

- The stations are set to the status "limited" ("limitiert")

- The correct driver account is enabled for the station with the correct price

- A location is stored for the station

![Charging at SMEs – Figure 9](/img/anwendungsfaelle-laden-im-kmu/09.png)

![Charging at SMEs – Figure 10](/img/anwendungsfaelle-laden-im-kmu/10.png)

## 4\. Labelling stations

So that drivers can also unlock the stations with the app and without an RFID card, we recommend labelling the stations with a QR code and short charging instructions. This helps, for example, if a driver loses their RFID card or does not have it with them.
You can find some [examples of labelling](/stationsbetreiber/qr-code).

## 5\. Informing regular users

It is advisable to inform drivers who charge regularly (e.g. employees) about the correct use of the stations. When paying by credit card, drivers must create their own eCarUp account and store a valid credit card:

- You can find a possible guide/template to send to the drivers here: [Template for communication to eCarUp end customers](https://docs.google.com/document/d/1WVdQFd3flkJsQTIyEgS5zUauPbomZ3kOBfhEasXHgFs/edit)

- [All functions for drivers](/fahrer) are summarised on a separate wiki page

- There is also [an FAQ for drivers](/faq) with the most important questions and answers

- Drivers can independently [add RFID / NFC tags to their account](/fahrer/rfid-nfc-tags-carid) and then use them to unlock the charging station

eCarUp's flexible system keeps the administrative effort to a minimum. Drivers/end customers can create and manage their accounts independently.

## 6\. Setting up visitor and customer parking spaces

<div className="row">
<div className="col col--6">

With eCarUp, charging stations can also be billed publicly and thus to anonymous drivers. To do this, the stations must be assigned the status "public" ("öffentlich") during setup, and a location must be set. Labelling the charging stations is also very important here, as the QR code enables ad hoc and therefore barrier-free charging.

Different prices can also easily be assigned to the visitor parking spaces (see below).

Optionally, the stations can also be [published in third-party charging networks via the roaming function](/funktionen/roaming). However, this is only possible if the station is publicly available 24 hours a day, 7 days a week. You should also be aware that the station will then be found very widely (in a wide range of apps and car navigation systems) and will therefore attract outside users.

</div>
<div className="col col--6 text--center">

![Charging at SMEs – Figure 11](/img/anwendungsfaelle-laden-im-kmu/11.png)

</div>
</div>

![Charging at SMEs – Figure 12](/img/anwendungsfaelle-laden-im-kmu/12.png)

## 7\. Activating visitor and customer parking spaces

If you have charging stations in parking spaces for visitors and/or customers, the following options are available to activate them free of charge for customers.

- Via RFID card: Create an eCarUp account (e.g. muster(at)musterfirma.ch) and assign it to the visitor stations as a special user with a price of 0 per kWh and 0 per h. Add one or more [RFID cards](/fahrer/rfid-nfc-tags-carid) to the account. The stations can now be activated free of charge using these RFID/NFC cards. The customer can, for example, collect the RFID card at reception and charge their car free of charge.

- Activating in the web portal: Stations can also be activated via the web portal. As the activation is carried out via the owner account (muster(at)musterfirma.ch), charging is free of charge and no credit card transaction takes place. The advantage of this option is that the customer does not have to walk back to the car again.

![Charging at SMEs – Figure 13](/img/anwendungsfaelle-laden-im-kmu/13.png)

## 8\. Charging at home

If employees charge their company vehicle at home and the energy for this is to be billed, the following options are available:

1.  The station is integrated into the company's account (muster(at)musterfirma.ch) and the price is set to 0 per kWh and 0 per h. The employee can then charge at home free of charge. At the end of the billing period, [an eCarUp report](/funktionen/reports) showing the consumption (in kWh) is generated, and the costs for charging at home can be billed. This can be done for several drivers/employees in the same account.

2.  The station is installed in the employee's private account and a price (agreed between the employee and the company) is stored. The employee activates the station at home via the company account (where a company credit card is usually stored). In this way, the employee effectively "sells" their electricity to the company, and billing is automated.

## 9\. Fault analysis and troubleshooting

The eCarUp portal can be used to detect simple faults and take the appropriate measures. If stations are shown in grey in the dashboard or in the station management and thus marked as "inactive" ("inaktiv"), they have lost their connection to the backend (for longer than 10 minutes) and therefore cannot be used via eCarUp. There are two possible reasons for this:

- Internet outage: Restore the internet connection. As soon as the stations can reach eCarUp again, the status changes to "available" ("verfügbar"), i.e. blue, and they can be used normally again.

- Power outage: Restore the power supply. As soon as the stations can reach eCarUp again, the status changes to "available" ("verfügbar"), i.e. blue, and they can be used normally again.

With the maintenance tool included in [eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/), [the communication between the charging station and the backend](/funktionen/wartung) can be tracked and a more in-depth fault analysis carried out.

If the fault lies deeper, you must contact the person responsible for the project (e.g. the electrical installer who carried out the work).

![Charging at SMEs – Figure 14](/img/anwendungsfaelle-laden-im-kmu/14.png)

Practical tip: To test or check the functionality of stations on site, an account can be created for the technical service or another responsible person on site (e.g. hauswart\[at\]musterhaus.ch). This account can be stored at the stations as a special user with a price of 0.- per kWh and 0.- per h and can therefore carry out tests without incurring costs.
