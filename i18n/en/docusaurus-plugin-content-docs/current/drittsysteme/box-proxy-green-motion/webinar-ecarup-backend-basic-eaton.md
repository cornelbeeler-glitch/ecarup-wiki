---
title: 'Webinar eCarUp Backend basic + eaton'
slug: '/drittsysteme/box-proxy-green-motion/webinar-ecarup-backend-basic-eaton'
description: 'eaton Box Proxy and OCPP 29:19'
sidebar_label: 'Webinar eCarUp Backend basic + eaton'
---
## Webinar

<Video src="Jowm4Ke0Z38" title="YouTube video, webinar recording “eCarUp Basics & Box Proxy / Green Motion” (Part 2 Box Proxy)" />

- Introduction [00:00](https://www.youtube.com/watch?v=Jowm4Ke0Z38)

- eCarUp Basics [1:21](https://youtu.be/Jowm4Ke0Z38?si=SuDE9wxrD7aNVNg0&t=81)

- eCarup Live Demo [22:46](https://youtu.be/Jowm4Ke0Z38?si=E4N2BBLPiRUDdoKy&t=1366)

- eaton Box Proxy and OCPP [29:19](https://youtu.be/Jowm4Ke0Z38?si=9uUrVfyatrvgiLUG&t=1759)

## General

<details id="wie-werde-ich-partner-wo-finde-ich-partner">
<summary>How do I become a partner, where can I find partners?</summary>

- [Become a partner](https://web.ecarup.com/partnerschulung-ecarup/)

- [Find a partner](https://web.ecarup.com/partner-de/)

</details>

<details id="wo-finde-ich-weitere-informationen">
<summary>Where can I find more information?</summary>

- The wiki contains all information in DE and EN. FR currently contains only the essentials and focuses on drivers and simple use cases. eCarUp Wiki 

</details>
## Station operators

<details id="fragen-zu-preisen">
<summary>Questions about prices</summary>

- The price per kWh and per hour of active charging is set by the station operator. The price can be higher or lower.

- It is possible to define several prices for a station, all public, and then another price per user that is limited:  [Web portal](/stationsbetreiber/webportal) 

- If the money is collected by credit card, credit card fees of 10% apply. With a collection solution without credit card, e.g. [Reports](/funktionen/reports) , these fees do not apply, as eCarUp is no longer involved in the flow of money.

- With roaming, you can set the price you receive; the price charged to the driver is no longer under our control and is set by the roaming partner without consulting us:  [Roaming](/funktionen/roaming) 

- Dynamic prices are not supported by eCarUp.

- Peak and off-peak tariffs are not possible, because OCPP is not designed for this. Some platforms offer this, but only take the start of charging into account. We deliberately decided against it, since some energy suppliers only offer the off-peak tariff around midday, which would mean that someone could activate a charge at the off-peak tariff shortly after midday and then charge all afternoon during peak tariff hours at the off-peak price.

</details>

<details id="sind-strafrechtliche-sanktionen-möglich">
<summary>Are penalties possible?</summary>

- No, we currently have no reasonable solution that covers everything. For example: combustion vehicles that park. Cables that are plugged in and then the person walks away without activating the charge, someone who deliberately throttles the charge in the car, e.g. to 6 amps, and thus occupies the parking space for a long time, always charging a little, but not much

</details>

<details id="kann-man-zu-bestimmten-zeiten-stationen-zugänglich-oder-sichtbar-machen">
<summary>Can stations be made accessible or visible at certain times?</summary>

- Yes, [Wiki --> Station operators --> Define times](/stationsbetreiber/webportal)

</details>

<details id="kann-man-in-der-app-in-echtzeit-sehen-ob-die-station-verfügbar-besetzt-oder-ausgefallen-ist">
<summary>Can you see in real time in the app whether the station is available, occupied or out of order?</summary>

- Yes

</details>

<details id="ist-es-möglich-den-gesamtverbrauch-in-kwh-einer-ladestation-für-1-jahr-zu-ermitteln">
<summary>Is it possible to determine the total consumption in kWh of a charging station for 1 year?</summary>

- Yes, with a [Reports](/funktionen/reports)  

</details>

<details id="können-wir-im-backend-nicht-verschiedene-gruppen-erstellen-um-für-jede-gruppe-unterschiedliche-regeln-mit-preisen-definieren">
<summary>Can we create different groups in the backend in order to define different rules with prices for each group?</summary>

- Yes, [Roles & Rights\*](/funktionen/rollen-rechte) 

</details>

<details id="ist-es-möglich-zwei-verschiedene-limiterte-gruppen-zu-erstellen-in-denen-jeweils-ein-anderer-tarif-gilt">
<summary>Is it possible to create two different “Limited” groups, each with a different tariff?</summary>

- Yes, [Roles & Rights\*](/funktionen/rollen-rechte) 

</details>

<details id="bis-zu-welchem-zeitpunkt-werden-die-daten-rückwirkend-gespeichert-bzw-sind-sie-sichtbar---report">
<summary>How far back is data stored or visible? -> Report</summary>

- Currently 10 years.

</details>
## Eaton

<details id="bietet-ecarup-ein-lademanagement">
<summary>Does eCarUp offer charging management?</summary>

- No, the OCPP protocol is not designed for this. This must be handled by the manufacturer of the charging station.

</details>

<details id="benötige-ich-zusätzliche-hardware-für-den-boxproxy">
<summary>Do I need additional hardware for the BoxProxy?</summary>

- No, only the QR code needs to be attached on site.

- Guide: [Box-Proxy Green Motion](/drittsysteme/box-proxy-green-motion) 

</details>

<details id="kann-ich-weiterhin-shell-oder-evpass-verwenden">
<summary>Can I continue to use Shell or evpass?</summary>

- Yes, these are completely normal roaming partners for us. The station must be public and available 24/7, the location must be set and Hubject must be activated. More information: [Web portal](/stationsbetreiber/webportal), [Roaming](/funktionen/roaming) 

</details>

<details id="wie-kann-ich-eine-eaton-station-einbinden">
<summary>How can I integrate an Eaton station?</summary>

- OCPP: [Eaton](/ocpp-ladestationen/eaton) 

- Older models that do not yet support OCPP: [Box-Proxy Green Motion](/drittsysteme/box-proxy-green-motion) 

- Important: a QR code is always required: [QR code](/stationsbetreiber/qr-code) 

- Station is not listed under BoxProxy in the wiki: In this case, we have not yet received the hardware from eaton and have not yet been able to carry out the test. Please ask eaton.

</details>

<details id="kann-ich-die-stationen-von-eaton-egal-ob-boxproxy-oder-ocpp-auch-mit-rfid-app-oder-qr-aktivieren">
<summary>Can I also activate eaton stations, whether BoxProxy or OCPP, with RFID, app or QR?</summary>

- Yes

</details>

<details id="ist-es-möglich-dass-während-der-migration-eine-station-gleichzeitig-auf-den-plattformen-von-eaton-und-ecarup-angezeigt-wird">
<summary>Is it possible for a station to be displayed on both the eaton and eCarUp platforms at the same time during the migration?</summary>

- No

</details>

<details id="wo-können-wir-die-mit-boxproxy-kompatiblen-eaton-modelle-auf-ihrer-website-finden">
<summary>Where can we find the Eaton models compatible with Boxproxy on your website?</summary>

- Here: [Box-Proxy Green Motion](/drittsysteme/box-proxy-green-motion) 

- For all stations not on the list, please contact Eaton directly.

</details>

<details id="muss-ich-für-die-integration-einen-link-im-eaton-portal-ändern">
<summary>Do I need to change a link in the Eaton portal for the integration?</summary>

- Simply follow the instructions: [Eaton OCPP](/ocpp-ladestationen/eaton)

- Simply follow the instructions: [BoxProxy Green Motion](/drittsysteme/box-proxy-green-motion) 

</details>

<details id="ist-es-möglich-die-auf-der-eaton-plattform-erstellten-konten-auf-die-ecarup-plattform-zu-übertragen">
<summary>Is it possible to transfer the accounts created on the Eaton platform to the ecarup platform?</summary>

- No

</details>

<details id="was-kostet-der-boxproxy">
<summary>What does the BoxProxy cost?</summary>

- One Premium licence per charge point (connector): [Price](https://web.ecarup.com/preise-ladestationen-backend/) 

</details>
## Drivers

<details id="wie-aktiviere-ich-eine-station">
<summary>How do I activate a station?</summary>

- QR code without app: [Instant payment function](/fahrer/sofort-bezahl-funktion) 

- App: [App](/fahrer/ecarup-app) 

- RFID, if this has been added in the driver app and the station has an RFID sensor: [RFID / NFC Tags / CarID](/fahrer/rfid-nfc-tags-carid) 

</details>

<details id="fragen-zur-bezahlung">
<summary>Questions about payment</summary>

- Google Pay, Apple Pay and credit card are the payment methods that can be used to charge directly on eCarUp.

- The PostFinance Card cannot be stored as a payment method, as our financial service provider Stripe has not implemented it.

- An RFID card is not a payment method, it is only used for authentication.

</details>

<details id="der-fahrer-der-station-muss-kein-abonnement-abschliessen-sondern-zahlt-nur-für-seinen-verbrauch">
<summary>The driver at the station does not need to take out a subscription, but only pays for their consumption.</summary>

- Correct, there are no fees for the driver.

</details>

<details id="können-ladestationen-reserviert-werden">
<summary>Can charging stations be reserved?</summary>

- No

</details>
