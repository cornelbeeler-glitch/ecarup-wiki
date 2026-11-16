---
title: 'OCPP error analysis'
slug: '/stoerungsbehebung/ocpp-fehleranalyse'
description: 'This page describes various errors that can be read out and analysed using an OCPP log.'
sidebar_label: 'OCPP error analysis'
---
This page describes various errors that can be read out and analysed using an OCPP log.

## OCPP = Open Charge Point Protocol

OCPP is a universal application protocol that standardises communication between charging stations for electric vehicles and a central management system.

eCarUp currently supports version 1.6j

⚠️ Important: The Pico charging station does not support the OCPP protocol and has its own, more limited logs.

## Generating an OCPP log of the charging station

<div className="row">
<div className="col col--8">

On the left-hand side of the portal, go to "Maintenance" ("Wartung") and then to "Actions" ("Aktionen").

</div>
<div className="col col--4 text--center">

![OCPP error analysis – Figure 1](/img/stoerungsbehebung-ocpp-fehleranalyse/01.png)

</div>
</div>

Next, click the three small dots on the right-hand side of the affected charging station.

A menu should then open, in which you click "Logs" ("Logs").

![OCPP error analysis – Figure 2](/img/stoerungsbehebung-ocpp-fehleranalyse/02.png)

A menu should open in which you can filter by start date and end date. It is best to choose 1 day before and 1 day after, so that all information is shown. So if the charging attempt was made on 05.05.2025, you should choose 04.05.2025 as the start date and 06.05.2025 as the end date (unless the attempt was made on the current date).

The logs should then appear below. If, as shown in the example, no logs are available, the station may not be sending us any logs and is therefore not communicating with eCarUp. In that case, the fault usually lies with the charging station or its configuration.

If log entries appear, make sure they also show the specified date. Note that the time is in UTC, so if the charging station is located in Europe, the time in the logs is shifted by one or two hours.

Once everything has been set and checked correctly, you can click "Export CSV" ("CSV exportieren") to download a CSV with the logs.

![OCPP error analysis – Figure 3](/img/stoerungsbehebung-ocpp-fehleranalyse/03.png)

![OCPP error analysis – Figure 4](/img/stoerungsbehebung-ocpp-fehleranalyse/04.png)

⚠️ Important: To generate a log, you need an eCarUp Premium licence

### Tag ID is "" &lt;null>

Request In StartTransaction \[2,"33736216","StartTransaction",&#123;"connectorId":1,"meterStart":9664049,"idTag":"","timestamp":"2025-08-14T11:40:44Z"&#125;\]

If the station sends us an "idTag":""

- Check whether the commissioning was carried out according to the guide in [OCPP charging stations](/ocpp-ladestationen).

- If this does not solve the problem, it must be investigated together with the manufacturer of the charging station. Feel free to send us the solution so that we can add it to the wiki.

![OCPP error analysis – Figure 5](/img/stoerungsbehebung-ocpp-fehleranalyse/05.png)

### Authorize status invalid

Authorize \[2, "6b2ff788-524f-47e0-9a6d-7843ff2caccbb", "Authorize", &#123;"idTag":"xxxxx"&#125;\]

Authorize \[3, "6b2ff788-524f-47e0-9a6d-7843ff2caccbb", &#123;"idTagInfo":&#123;"status":"Invalid","expiryDate":"2025-12-10T06:26:06.234Z"&#125;&#125;\] 

This is not an error as such; it means that someone is presenting an RFID card at the station.

If "invalid" is shown after an Authorize, this means

- either that we cannot assign the RFID card to any account,

- or that the RFID card is assigned to an account, but this account cannot charge at the station because the station is restricted or private.

- or that the person is trying to charge at a paid charging station but has not added a valid credit card to their account.

![OCPP error analysis – Figure 6](/img/stoerungsbehebung-ocpp-fehleranalyse/06.png)

### Tariffs or currency not or invalidly configured

StatusNotification

\[2, "16927", "StatusNotification", &#123;"connectorId":1,"errorCode":"OtherError","info":"Tariffs or currency not or invalidly configured","status":"Faulted","vendorErrorCode":"214"&#125;\]
