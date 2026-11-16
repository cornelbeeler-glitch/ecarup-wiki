---
title: 'Driver & Fleet Onboarding'
slug: '/anwendungsfaelle/fahrer-flotten-onboarding'
description: 'Efficient onboarding of drivers and fleets is a key step for successfully using the eCarUp system.'
sidebar_label: 'Driver & Fleet Onboarding'
---

## Introduction

Efficient onboarding of drivers and fleets is a key step for successfully using the eCarUp system. This process ensures that both individual drivers and large vehicle fleets can access the charging infrastructure quickly and easily. 

- Account structure and evaluation: 

    - To evaluate paid charging sessions precisely by driver and vehicle, it is essential to set up a separate account for each driver.  

    - For free charging within the company via a station operator account you have access to, it is also possible to issue drivers an RFID card from a central driver/fleet account. We advise against doing this in the station operator account.

- Account management: We recommend leaving account registration to the drivers themselves. However, if a fleet account is set up (as described in the following section), central management by an administrator makes sense.  

- RFID cards: Cards for drivers can be uploaded simply (via the [app](/fahrer/ecarup-app)) or, to save time, via a bulk function in the web portal. 

- Activation and EMP service: Please note that eCarUp does not offer its own EMP services (e-mobility provider). This means you cannot use your RFID card to unlock Move, Gofast etc. stations. The RFID cards can only be used at eCarUp charging stations. 

- ⚠️Important: Please note that RFID cards are not secure in themselves. Since the number on the RFID card is not unique, someone may have the same number as you and could therefore start a charging session at your expense. We accept no liability for misuse of your RFID number. Use is at your own risk. 

## Driver account incl. 1 or more RFID cards

### Driver role

App

- In the app, the driver can add their RFID cards themselves. Here you will find the corresponding guide. [App](/fahrer/rfid-nfc-tags-carid)

### Station operator role

<div className="row">
<div className="col col--8">

Web portal

- As a station operator, you can add the driver either via the individual connector or via the extended user management in the web portal. You can find more information here: [Link](/funktionen/erw-nutzerverwaltung)

</div>
<div className="col col--4 text--center">

![Driver & Fleet Onboarding – Figure 1](/img/anwendungsfaelle-fahrer-flotten-onboarding/01.png)

</div>
</div>

## Fleet account with multiple RFID cards charging at internal stations

### Fleet manager role

- Create a working email address, e.g. flottenfahrzeuge@ecarup.com

### Web portal

- Log in to the web portal with the account you have just created, e.g. flottenfahrzeuge@ecarup.com.

- Under Driver (Fahrer) -> RFID cards (RFID-Karten) -> the RFID card, the RFID tokens incl. name can be uploaded manually or via a CSV file. 

![Driver & Fleet Onboarding – Figure 2](/img/anwendungsfaelle-fahrer-flotten-onboarding/02.png)

### Example:

1.Driver account, and several RFID cards are assigned to different vehicles.

The CSV for the upload can look like this:

Column A: Card name

Column B: RFID token

![Driver & Fleet Onboarding – Figure 3](/img/anwendungsfaelle-fahrer-flotten-onboarding/03.png)

![Driver & Fleet Onboarding – Figure 4](/img/anwendungsfaelle-fahrer-flotten-onboarding/04.png)

### Evaluation in the station owner account using the reporting function

- You can find more information on the report function here: [Link](/funktionen/reports)

- In the CSV you will find, among other things, the email of the driver account, the RFID used and the consumption in kWh.

![Driver & Fleet Onboarding – Figure 5](/img/anwendungsfaelle-fahrer-flotten-onboarding/05.png)

## Alias email addresses help when creating multiple eCarUp accounts.

An alias email address is essentially a nickname or an alternative name for your actual, primary email account. You can receive emails at this alias address without the senders knowing your actual email address. Messages sent to the alias automatically arrive in your normal inbox. 

Example: With Gmail and Outlook, this works as follows:

- Original email: max.mustermann@ecarup.com

- Alias email: max.mustermann+auto123@ecarup.com
