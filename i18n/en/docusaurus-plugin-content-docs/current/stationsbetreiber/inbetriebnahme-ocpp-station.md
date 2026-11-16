---
title: 'Commissioning an OCPP station'
slug: '/stationsbetreiber/inbetriebnahme-ocpp-station'
description: 'eCarUp recommends the following procedure:'
sidebar_label: 'Commissioning an OCPP station'
---
## eCarUp recommends the following procedure:

### 1\. Installing the station

- Make sure your charging station is compatible with eCarUp. You can find an always up-to-date list on this [wiki page](/ocpp-ladestationen). 

- Install your station and put it into operation. The stations must have a stable internet connection, and port 53 (DNS) & port 80 (or the port configured on the station) must be open for outgoing traffic. The stations must be able to communicate with our servers for a successful integration. Make sure that communication is not blocked (e.g. by firewalls etc.).

- If you are still looking for a SIM card, we recommend SIM cards from our [partner](/drittsysteme/provider-sim-karte).

- You must have access to the station's interface and be on the same network.


⚠️Important: If your station does not appear on the list of compatible stations, please contact us.

![Commissioning an OCPP station – Figure 1](/img/stationsbetreiber-inbetriebnahme-ocpp-station/01.png)

### 2\. Activating and registering

- Create an eCarUp account: [Registration](https://admin.ecarup.com/authentication/login).

- Have the OCPP URL ready for the connection between the station and the account. 

- WS, WSS & WSS incl. Basic Auth. Find out more here: [Web portal](/stationsbetreiber/webportal)


Important: When using WSS and WSS incl. Basic, the station in question must support it. 

OCPP URL: 

![Commissioning an OCPP station – Figure 2](/img/stationsbetreiber-inbetriebnahme-ocpp-station/02.png)

- To bill via credit card and receive money from your revenue, you must verify your account. You can find the information on this [page](/stationsbetreiber/account-verifizieren).

- Use our guide to connect your OCPP station to the [eCarUp backend](/ocpp-ladestationen).


⚠️Important: eCarUp does not create metering points in advance, but only when the station and the backend communicate for the first time. This means that as long as the station does not send any information via the  OCPP protocol, eCarUp does not know that this charging station exists.  

This can happen in the following cases:

- -   1.  -   no internet connection

            - a firewall blocks outgoing communication

            - the SIM card is not active or cannot find a connection

- As soon as the station has actively established communication with eCarUp, the system creates a metering point in your account (Station management (Stationsmanagement)).


### 3\. Setting up the charge point

You can set up the charge point to suit your needs.

- Define [prices, location, special users and other parameters](/stationsbetreiber/webportal).

- To make it as easy as possible for users to get power, you can also equip the stations with [QR codes and labelling](/stationsbetreiber/qr-code).

- If you would also like to use [RFID/NFC tags](/fahrer/rfid-nfc-tags-carid), you will find all the information here.

- If the station is optionally to be published in the [roaming network](/funktionen/roaming), you will find all the information here. Please note the associated restrictions regarding opening hours and pricing.

- eCarUp always recommends carrying out a test charge at the end.




![Commissioning an OCPP station – Figure 3](/img/stationsbetreiber-inbetriebnahme-ocpp-station/03.png)
