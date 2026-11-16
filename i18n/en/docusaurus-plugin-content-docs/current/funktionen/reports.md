---
title: 'Reports'
slug: '/funktionen/reports'
description: 'You need an eCarUp Premium licence to use reports.'
sidebar_label: 'Reports'
---
You need an eCarUp Premium licence to use reports.

[Video guide: Reports](#video-guide-reports)

[Features](#features)

[Creating reports](#creating-reports)

[Station report](#station-report)

[User reports](#user-reports)

[Supported file formats](#supported-file-formats)

[User report with price calculation](#user-report-with-price-calculation)

[Station report CSV (extended)](#station-report-csv-extended)

## Video guide: Reports

<Embed src="https://share.synthesia.io/embeds/videos/fd7eeb3e-5aeb-4453-80ca-223ec4f5f0ad" aspect="1.781" title="Reports" />

### Features

- Analyse consumption per charging station over any period

- Analyse consumption per user (if the driver is known) over any period

- Show energy and costs

- Reports in PDF, CSV or extended CSV

- Configure the price per kWh and parking duration incl. VAT per user yourself


### Creating reports

Go to [www.ecarup.com](https://www.ecarup.com/) and click Login (Login) in the top right corner. Then sign in with your login details. You will be taken to the station overview. Check whether all charge points for which you want to generate reports are already installed in your account. 

### Station report

Select one or more charge points. Then click Create (Erstellen) in the bottom left corner. In the pop-up window, you can now set the VAT rate and the desired period. Then choose the desired format – currently PDF, CSV or extended CSV are available. Then click the button. All charging sessions of all selected stations are output in chronological order. From left to right, you see the station name, the start date, the charging duration in seconds, the end date, an anonymised user number, the energy drawn, the price for the energy, the parking time, the price for the parking time and the total. The station report (extended CSV) also shows special users + additional information (see the article Station report CSV extended). Important:

### User reports

User reports can be created using the same procedure. A user report shows the consumption data of a specific user for one or more charge points. This is particularly suitable for pool charging stations, where several users share several eCarUp stations. Again, select the desired charge points and make the settings in the pop-up window. The user report can only be created for driver accounts that you have defined as a «special user» (Speziellen Benutzer) for your stations. Clicking the PDF or CSV button outputs only the consumption data of this account for all selected charging stations (summed). Alternatively, a price can also be calculated for a "free" user. 

### Supported file formats

An extended CSV export allows you to process the data in your own software solution. Alternatively, the eCarUp system offers open interfaces for automated data exchange (API, MSCONS, IS-E). You can find the guide to the eCarUp API here: [API version 1](/funktionen/ecarup-api)

## User report with price calculation

1.  Stored users can create reports over a specific period. Here, the user is shown unedited with the predefined price in the PDF or CSV. 

2.  For free users, a report with price and currency can be created retroactively. Here, the original price is overwritten and the calculation uses the price you define.


Example: For employees who charge for free, a price can be calculated retroactively. However, collection remains with the station operator. 

Important: currently, the calculated price is not shown on the PDF & CSV. 

![Reports – Figure 1](/img/funktionen-reports/01.png)

## Examples:

### Station report in PDF

<Embed src="https://drive.google.com/file/d/1h6JtWuyjq3Y1vy69zqWrFGFOtr8C3fJd/preview" aspect="1.350" title="Drive, eCarUp Station Report.pdf" />

eCarUp Station Report.pdf

### User report in PDF

@@EMBED|url|https://drive.google.com/file/d/1hw1NTbWFySg5uk_KcQLqwZpKIcOzAZr_/preview|1.350|Drive, eCarUp report_user_demo@ecarup.com_2023-09-20.pdf@@

eCarUp report\_user\_demo@ecarup.com\_2023-09-20.pdf

## Station report CSV (extended)

The extended station report CSV contains the following information:



- Station name: name of the charging station with serial number

- Start date: start time of the charging 

- Durations: duration of the charging session in seconds

- End date: end of the charging session 

- User: shows who charged at the station.

    - An e-mail address is shown if a limited user is stored for the station. This can be done via [Advanced user management](/funktionen/erw-nutzerverwaltung) (Erw. Nutzerverwaltung) or directly on the station under "Station / Define users" (Station / Benutzer Definieren)

    - Cryptic characters (e.g. LshD4G0WaxPMH++hv55o) are shown if an unknown user has charged at a public charging station.

- Provider: shows what was used to charge.

    - Unknown: appears for all transactions before 06.05.2024

    - Ecarup: if the charging was done with an eCarUp account.

    - Hubject: if the charging was started via a Hubject (roaming) provider.

- Mode: how authentication took place

    - Car ID, currently only in combination with the [Pico](/smart-me-pico) charging station.

    - Cloud (activation via app, web portal, Instant Payment, API or automatic charging session)

    - RFID card

    - Unknown (before the update was introduced, 06.05.2024)

- Identifier: the number of the RFID card; only shown if the charging was started via RFID. In all other cases it is empty.

- Identifier Name: the name of the RFID card, if the charging was started via RFID. In all other cases it is empty.

- Payment Status: payment status, Paid = paid, notCharged = amount too small, Failed = the money cannot be collected from the customer (read more about this under the following [link](/fahrer/fehlgeschlagene-zahlung)), Unknown = appears for all transactions before 13.06.2024

- Energy price ( CHF )  The price defined for the electricity

- Parking price (CHF) The price for the parking space 

- Total (CHF or EUR) The total that the station owner receives. (90%) Learn more about [billing.](/stationsbetreiber/abrechnen-auszahlen) 


Important: all additional information (e-mail, ID tag and name of the RFID card) is only listed if the user is known to and stored by the station operator. 

### Extended station report in CSV

![Reports – Figure 2](/img/funktionen-reports/02.png)

## Note:

### Oops (Hoppla)

Something unexpected happened. Please try again. (Es ist etwas Unerwartetes passiert. Bitte versuchen Sie es erneut.)

- This can occur with the User (Benutzer) report type when a user is selected who had no charging session in the selected period.




![Reports – Figure 3](/img/funktionen-reports/03.png)
