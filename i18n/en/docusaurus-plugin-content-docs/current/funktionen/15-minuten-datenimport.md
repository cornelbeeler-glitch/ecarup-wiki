---
title: '15-Minute Data Import'
slug: '/funktionen/15-minuten-datenimport'
description: 'The 15-minute consumption values can be used to implement load profile billing.'
sidebar_label: '15-Minute Data Import'
---
[General](#general)

[eCarUp authentication and billing in a multi-tariff system:](#ecarup-authentication-and-billing-in-a-multi-tariff-system)

[Data quality](#data-quality)

[Zaptec](#zaptec)

[Easee](#easee)

[Guide for the data import](#guide-for-the-data-import)

[Zaptec settings](#zaptec-settings)

[easee settings](#easee-settings)

[smart-me settings](#smart-me-settings)

[ISE-Load Profile](#ise-load-profile)

[smart-me Billing example](#smart-me-billing-example)

## General

The 15-minute consumption values can be used to implement load profile billing. This enables extended tariff structures such as ZEV billing or multi-tariff systems. The data import tool lets you import the data of certain charging stations into the smart-me Cloud. 

## eCarUp authentication and billing in a multi-tariff system:

If authentication via eCarUp is wanted but billing is to be done via the smart-me Billing\-platform in a multi-tariff system, the OCPP stations must not be installed in the automatically created eCarUp account of the same name. When the OCPP load profile data is imported via the import tool, additional load profile metering points are created. If the eCarUp account is also the ZEV\-account, the account contains twice the number of metering points – for transaction data and for load profiles – all of which would require a licence. 

To prevent this, you can create a separate eCarUp account and install the OCPP stations separately from the ZEV / building installation.

![15-Minute Data Import – Figure 1](/img/funktionen-15-minuten-datenimport/01.png)

### Green diagram area: 15min data import into the property account

For charging stations that are already installed, the migration to the green diagram area can be carried out in the background without any impact on the end customer (since authentication on site is not changed). 

Caution: In this variant, authentication works on site / directly with the charging stations. eCarUp has no influence on the activation.

Advantage: Since this is a data import in the background, customers notice nothing in the event of a migration.

Disadvantage: Since no authentication takes place via eCarUp, the customers' charging data is not recorded and cannot be viewed.

### Red: 15min data import with activation via the eCarUp app

Here, a separate account must be created for activating the charging stations via eCarUp, including the OCPP implementation via one of the following guides, depending on the charging station manufacturer used ([Zaptec](/ocpp-ladestationen/zaptec) / [easee](/ocpp-ladestationen/easee))

Advantage: The customer can activate via the app or RFID card and sees their charging history.

Disadvantage: Two separate logins have to be managed.

## Data quality

Note: The quality is defined by the third-party provider and cannot be changed or improved by smart-me or eCarUp.

Important: we recommend installing a smart-me meter at the e-mobility outgoing circuit, for the following reasons:

- If no smart-me meter is installed, support cannot help you look for discrepancies between smart-me Billing and the electricity supplier's invoice. This always applies when measurements are made by third-party providers.


- In smart-me Billing, the total e-mobility consumption can be referenced.

- A separate billing unit can be created and shown for the total consumption (use case: external property management)


### Zaptec

The current data is queried from the Zaptec Cloud at 15-minute intervals. 

[https://api.zaptec.com/help/index.html#/Charger/get\_api\_chargers\_\_id\_](https://api.zaptec.com/help/index.html#/Charger/get_api_chargers__id_)  

The Zaptec interface only delivers live data during an active charge. 

- If the station is offline, no live data or meter readings are delivered. 

- This also applies if the station is online but nobody is charging. 


If a charging station is not used for several weeks, it never sends updated meter readings to the API. Both the [Auto-Export](https://wiki.smart-me.com/schnittstellen/auto-export) and billing in [smart-me Billing](https://wiki.smart-me.com/konfiguration/billing) depend on the data of the metering points. If a metering point does not send any data, the Auto-Export is not executed and the tariff calculation in smart-me Billing stops. Creating an invoice is therefore not possible in a timely manner. 

To prevent invoicing from being impossible for several weeks/months, we proceed as follows: 

- We want to ensure that smart-me Billing and the Auto-Export can be carried out with a maximum delay of three days and that the data in the 15-minute intervals is as correct as possible.

- When the station is charging, we receive live data via the API endpoint chargers/&#123;chargerId&#125;, which we store for the time of the query.

- When the station is online, we store for the time of the query the last measured value we received via the API endpoint chargers/&#123;chargerId&#125;. Even if it is several weeks old.

- When the station is offline, we store the value that the station sends us as an OCMF message via the API endpoint chargers/&#123;chargerId&#125;. As the timestamp, we use that of the OCMF message, provided it is less than three days old. If it is older, we store the value as of X-3 days. This ensures that stations that are offline can also be billed promptly and do not unnecessarily block the entire system. 


If you have set up an [alarm](https://wiki.smart-me.com/konfiguration/wenndann-aktionen/alarme) in smart-me, we recommend allowing for at least three days of offline time, since the alarm checks the last stored value, and in the offline case – even if only for ten minutes – this value can be up to three days old.

### Easee

15-minute measured values for your easee charging stations are stored in the smart-me Cloud. They are normally available with a delay of 1-3h.

In the event of internet or server outages, it may exceptionally take longer. As soon as the outage has been resolved, the measured values for the outage period are automatically transferred to the smart-me Cloud.

Configuration of the easee charging station:

Smart-me configures easee charging stations with a measuring interval of 15 minutes. This affects all charging stations of your easee account configured for the import. The configuration is done once per charging station, namely:

- when the import is set up: all charging stations already in the easee account

- charging stations installed later in easee: within 3h.


Note: This configuration has no influence on the measurement and billing of charging transactions.

Caution:

If you (or an authorised person) change the measuring interval of an easee charging station, this affects the measured values available in the smart-me Cloud. In this case, the measuring interval is not corrected by smart-me.

You can find further information in the easee documentation:

- [https://developer.easee.cloud/docs](https://developer.easee.cloud/docs)

- [https://developer.easee.cloud/docs/consumption-report-types#lifetime-energy](https://developer.easee.cloud/docs/consumption-report-types#lifetime-energy)


## Guide for the data import

1.  Make the Zaptec settings or the Easee settings

2.  Make the smart-me settings


## Zaptec settings

1.  In the Zaptec Cloud, create a separate account for each ZEV property (example below using an alias trick) and, from the main account, assign the permissions for the corresponding installation to the newly created account.


The permission must have the "Owner" ("Besitzer") role

Note: To add the property account, it must first be registered in the Zaptec Cloud. (image on the left)

![15-Minute Data Import – Figure 2](/img/funktionen-15-minuten-datenimport/02.jpg)

![15-Minute Data Import – Figure 3](/img/funktionen-15-minuten-datenimport/03.jpg)

## easee settings

1.  In the easee Cloud, create an account for each ZEV property; registration is done via an e-mail address (in this example an alias e-mail address). The mobile number is a mandatory field, and the same number can always be entered. 

2.  The e-mail address must be confirmed

3.   Share the permissions for the corresponding installation in it. 


![15-Minute Data Import – Figure 4](/img/funktionen-15-minuten-datenimport/04.jpg)

4. Important: Always add as "Owner or admin of the site" ("Besitzer oder Admin des Standorts").

![15-Minute Data Import – Figure 5](/img/funktionen-15-minuten-datenimport/05.jpg)

## smart-me settings

1. Log in with the smart-me target account (ZEV account). Under Interfaces (Schnittstellen), click "API". 

![15-Minute Data Import – Figure 6](/img/funktionen-15-minuten-datenimport/06.png)

2. Click the link to the API keys (API-Schlüssel) at the top

3. Create a new key, name it and grant the permission device.readwrite



![15-Minute Data Import – Figure 7](/img/funktionen-15-minuten-datenimport/07.png)

4. Copy the created token

![15-Minute Data Import – Figure 8](/img/funktionen-15-minuten-datenimport/08.png)

5. Click Interfaces (Schnittstellen) and select Third-party import (Drittanbieter-Import).

![15-Minute Data Import – Figure 9](/img/funktionen-15-minuten-datenimport/09.png)

6. Log in or click Accept. Create a Zaptec/Easee data import via "Add"

![15-Minute Data Import – Figure 10](/img/funktionen-15-minuten-datenimport/10.jpg)

7. Click your account name at the top right and select Account settings (Kontoeinstellungen).

8. Switch to API keys (API Schlüssel) and enter the key you copied earlier. Don't forget to save.

![15-Minute Data Import – Figure 11](/img/funktionen-15-minuten-datenimport/11.png)

9. Specify the account of the Zaptec/Easee Cloud installation to be imported

Important: Please do not work with the Zaptec/Easee main account, but with the permission that has now been set up for the property or ZEV account. 

10\. Wait a while until the stations are visible in the smart-me account.

- Zaptec: approx. 25min 

- Easee: approx. 3 hours


11\. We recommend setting up an alarm in the smart-me account so that an interruption of the connection triggers an alert

- [https://wiki.smart-me.com/konfiguration/wenndann-aktionen/alarme](https://wiki.smart-me.com/konfiguration/wenndann-aktionen/alarme) 


What happens?

- For each imported station, a metering point is created in the smart-me account.

- Unused metering points, e.g. of public stations, can be set to inactive in the [meter configuration](https://wiki.smart-me.com/konfiguration/ordnerkonfiguration) so that they do not require a licence.

- You can now continue the configuration on the smart-me side [(smart-me Billing)](https://wiki.smart-me.com/konfiguration/billing). 


Note: All future stations connected to this installation are automatically migrated to the smart-me portal. 

## ISE-Load Profile

## smart-me Billing example

[Test file](https://drive.google.com/file/d/19fD_H9M23XtC0MXnxbyaTgf1tlUjcLhy/view?usp=sharing)

[Sample invoice](https://drive.google.com/file/d/1fGI2lC8IzfSzpk6fpke9Xe9cX0l18I2w/view?usp=sharing)
