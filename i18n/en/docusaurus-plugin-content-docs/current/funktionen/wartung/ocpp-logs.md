---
title: 'OCPP 1.6j'
slug: '/funktionen/wartung/ocpp-logs'
description: 'To view the OCPP logs, you need the paid Premium licence'
sidebar_label: 'OCPP Logs'
---
To view the OCPP logs, you need the paid Premium licence

## OCPP = Open Charge Point Protocol

OCPP is a universal application protocol that standardises communication between charging stations for electric vehicles and a central management system.

eCarUp currently supports version 1.6j

## Analysing and troubleshooting the OCPP logs

### Information about the status:

For eCarUp to display the correct status of the station, the system needs the following "StatusNotification" message via OCPP:

- Available: A connector is available for a new user (driver). 

- Preparing: A car is connected, but charging has not yet been activated.

- Charging: A car is plugged in, eCarUp has authorised it and power is being supplied. 

- SuspendedEVSE: The vehicle is connected to the station, but no power is being supplied. One possible cause is local load management. 

- SuspendedEV: The station supplies power, but the car is not drawing any.

- Unavailable: The station is not available.

- Faulted: The station has an internal problem and cannot supply power.


### Example 1:

![OCPP 1.6j – Figure 1](/img/funktionen-wartung-ocpp-logs/01.png)

### Example 2:

![OCPP 1.6j – Figure 2](/img/funktionen-wartung-ocpp-logs/02.jpg)

In this example with the easee station, the station sends us a SuspendedEVSE because of VendorErrorCode 55.

Info:

- For easee hardware, you can find the vendorErrorCodes like the one in the example above on the following page: [https://developer.easee.cloud/docs/enumerations](https://developer.easee.com/docs/enumerations)


## OCPP authorisation

### Authentication via the RFID card:

- The logs show whether the driver is authorised or not, and which RFID card (UID) was used for the charging attempt

- The IdTag is sent along with the Authorize message.

- This tag must be stored in the driver's account. 

- If the response is Accepted, eCarUp authorises charging.

- If the response is Invalid, eCarUp does not authorise charging. 


Possible causes are:

1.  The UID (idTag) was not assigned correctly to the driver

2.  The driver does not have permission at the charging station

3.  The driver has no valid credit card stored in their account and therefore cannot activate a paid charging station. 


On the following page you can find more about [RFID](/fahrer/rfid-nfc-tags-carid) and eCarUp. 

### Example:

![OCPP 1.6j – Figure 3](/img/funktionen-wartung-ocpp-logs/03.png)

### Authentication via the web portal and the app

- Here, RemoteStartTransaction or RemoteStopTransaction is used. 

- Important: the Id-Tag cannot be traced in this case. 


### Example:

![OCPP 1.6j – Figure 4](/img/funktionen-wartung-ocpp-logs/04.jpg)

## OCPP errorCode

### StatusNotification:

- ConnectorLockFailure: The connector cannot be locked or unlocked

- EVCommunicationError: Communication error with the vehicle

- GroundFailure: The residual current circuit breaker has tripped

- HighTemperature: The temperature in the charging station is too high

- InternalError: Error in an internal hardware or software component

- NoError: No error

- OtherErro: Other type of error, please refer to the manufacturer's information

- OverCurrentFailure: The overcurrent protection device has tripped

- OverVoltage: The voltage has risen above an acceptable level

- UnderVoltage: The voltage has dropped below an acceptable level

- PowerMeterFailure: Error reading the energy meter

- WeakSignal: The station reports a weak signal (Wi-Fi, LAN etc.)


If these errors occur and persist, you need to contact the manufacturer of the station. 

### Example:

Communication excerpt from the log of an ABB fast charging station:

 >>"StatusNotification", &#123;"connectorId":0,"errorCode":"OtherError","vendorId":"com.abb.evci/event/v1","vendorErrorCode":"EmergencyButtonReleased"&lt;&lt;

Here, the emergency stop of the station was pressed.
