---
title: 'BoxProxy Green Motion'
slug: '/drittsysteme/box-proxy-green-motion'
description: 'IMPORTANT: Using the BoxProxy software tool always requires an eCarUp Premium license per charge point: More information'
sidebar_label: 'Box-Proxy Green Motion'
---
IMPORTANT: Using the BoxProxy software tool always requires an eCarUp Premium license per charge point: [More information](https://web.ecarup.com/preise-ladestationen-backend/) 

eCarUp has developed a software tool so that older charging station models from GreenMotion / Eaton can be transferred to the  eCarUp backend. Once they have been connected to us using the guide on this wiki page, they can be used like all other charging station models compatible with eCarUp. 

[Webinar eCarUp Backend basic + Box Proxy / Green Motion](/drittsysteme/box-proxy-green-motion/webinar-ecarup-backend-basic-eaton) (DE) incl. FAQ

[Link BoxProxy](https://web.boxproxy.ecarup.com)

## OCPP charging stations

Newer charging station models from GreenMotion / EATON can be integrated into the eCarUp platform using the OCPP guide. Mixing the charging station types in one eCarUp account is not a problem. Apart from the type of integration, the functionality of the charging stations on eCarUp does not differ.

The following charging station models are currently supported by the [OCPP protocol](/ocpp-ladestationen):

[Green Motion Building](/ocpp-ladestationen/eaton)

[Green Motion DC 22 & 26](/ocpp-ladestationen/eaton)

## Box Proxy charging stations

<div className="row">
<div className="col col--8">

The Box Proxy is now available for integrating Green Motion stations. This means the charging stations can already be connected to the eCarUp platform and tested using the guide below. However, extensions and/or improvements may still be made.

The following charging station models are currently supported:

- Private-One with one connector

- xChargeLN xCIM Client with one connector

- Network TWO

- Smart One

- You only need to migrate the Smart One. The connected stations are automatically detected and displayed in eCarUp.

- Master One

Further models are continuously being tested and will be added to this list after successful integration. Until testing has been completed successfully, we cannot provide support in case of errors.

</div>
<div className="col col--4 text--center">

![BoxProxy Green Motion – Figure 1](/img/drittsysteme-box-proxy-green-motion/01.png)

</div>
</div>

Charging station with three connectors, e.g. Smart One with three Private One.

## Internet connection

### SIM card

⚠️Important: The Eaton SIM card installed in the station will also be deactivated at the time of the shutdown. If you want to maintain the connection to the eCarUp backend, it is therefore important to replace the SIM card in good time. If you have not yet chosen a provider, we recommend the following:  [LINK](/drittsysteme/provider-sim-karte). 

## Example of integrating the Private One

<Video src="wPLyrBUKTU4" title="YouTube video" />

## Box Proxy guide

Step 1

- If the charging station is behind a firewall, port 83 TCP to IP 74.242.170.252 must also be opened.

Step 2

- To connect the station to the eCarUp platform, you need the BoxID and ServerKey.

- To get this information, the SD card must be removed from the charging station. 

Here is an example from the Network TWO

![BoxProxy Green Motion – Figure 2](/img/drittsysteme-box-proxy-green-motion/02.jpg)

Step 3

- Insert the SD card into your PC and open the file. 

- Click on "settings"

- Now manually change the ServerHostname address to 74.242.170.252

- Copy the Box ID and the ServerKey. 

- Save the text file.

- Insert the card back into the controller; the station restarts. 

![BoxProxy Green Motion – Figure 3](/img/drittsysteme-box-proxy-green-motion/03.png)

![BoxProxy Green Motion – Figure 4](/img/drittsysteme-box-proxy-green-motion/04.png)

<div className="row">
<div className="col col--8">

Step 4

- Register the station in the eCarUp BoxProxy tool, please use the following link: [https://web.boxproxy.ecarup.com](https://web.boxproxy.ecarup.com)

- Important: Here you need your eCarUp login; if it has not been created yet, there is a guide for this.

Create account: [/stationsbetreiber/webportal

](/stationsbetreiber/webportal)

- Click on Accept (the target account is displayed at the top).

</div>
<div className="col col--4 text--center">

![BoxProxy Green Motion – Figure 5](/img/drittsysteme-box-proxy-green-motion/05.png)

</div>
</div>

Step 5

- In the menu, go to "Stations" ("Stationen") and click on "Add" ("Hinzufügen").

![BoxProxy Green Motion – Figure 6](/img/drittsysteme-box-proxy-green-motion/06.png)

Step 6

- Paste the ID and secret key you copied in step 3 here and click on save (speichern). 

![BoxProxy Green Motion – Figure 7](/img/drittsysteme-box-proxy-green-motion/07.png)

Step 7

- The station should restart; if this does not happen, perform a manual restart. 

- Go back to the eCarUp BoxProxy tool and check the status.

- If the status is "online", you have done everything correctly. 

![BoxProxy Green Motion – Figure 8](/img/drittsysteme-box-proxy-green-motion/08.png)

Step 8

- Now go back to your eCarUp account using the following link: [https://admin.ecarup.com/authentication/login](https://admin.ecarup.com/authentication/login)

- The station has been created and you can configure it on the eCarUp web portal as usual. 

## Special case Network 2 (new since 1.6.2026)

Context and problem

Communication via the Network 2 follows a different logic. Due to problems with deactivating charging sessions, optimizations became necessary. In Q2 2026, we received the necessary information and prerequisites from eaton to solve these problems specifically and improve the process.

Technical implementation and exceptions

Since the system cannot identify the specific charging station type, an automatic bulk changeover is not possible; the adjustment must be made manually for each station. However, the adjustment may already have been made in the background; this can happen if a support ticket was processed in which we were able to clearly attribute the problem to this specific station. There is no guarantee that this is done systematically.

Guide for the changeover

- Open [https://web.boxproxy.ecarup.com](https://web.boxproxy.ecarup.com)

- Log in to the account

- Select Stations (Stationen)

- Select the affected station

- Select Edit (Editieren)

- Set the station type to Network 2

- Save (Speichern)

![BoxProxy Green Motion – Figure 9](/img/drittsysteme-box-proxy-green-motion/09.png)

## Where can I find the SD card?

### smart-one

⚠️Important: With the Smart-One, the control unit (grey box) handles central control and integrates the two Private One stations as remote connections. 

![BoxProxy Green Motion – Figure 10](/img/drittsysteme-box-proxy-green-motion/10.png)

![BoxProxy Green Motion – Figure 11](/img/drittsysteme-box-proxy-green-motion/11.jpg)

![BoxProxy Green Motion – Figure 12](/img/drittsysteme-box-proxy-green-motion/12.jpg)

### Network TWO

![BoxProxy Green Motion – Figure 13](/img/drittsysteme-box-proxy-green-motion/13.jpg)

![BoxProxy Green Motion – Figure 14](/img/drittsysteme-box-proxy-green-motion/14.jpg)

### Private One

![BoxProxy Green Motion – Figure 15](/img/drittsysteme-box-proxy-green-motion/15.jpg)

## Firewall

If the charging station is behind a firewall, port 83 TCP to IP 74.242.170.252 must also be opened.

## Plug and Charge

Please follow the steps described.

- Create a new eCarUp driver account. Important: It must be a new account on which no credit cards may be stored.

- In the account, go to Driver (Fahrer).

- Select RFID card (RFID-Karte).

- Add an RFID card with a card name and tag ID. For the tag ID, only use digits from 0 to 9 and letters from A to F. We also recommend a length of approx. 10 random characters, e.g. 76435abd56. It must be an even number of characters.

- Log in to the Box Proxy with your eCarUp admin account (station operator account). This is the account you used to connect the Box Proxy stations: [https://web.boxproxy.ecarup.com/](https://web.boxproxy.ecarup.com/) 

- Check whether the stations at which you want to use Plug and Charge are connected in this account.

- Go to the "Account Settings" („Account Einstellungen“) menu.

- Copy the tag without the : that was stored in your eCarUp driver account, e.g. 76435ABD56.

- Save the setting.

- Log in to the eCarUp admin account (station operator account).

- Either add the email of the eCarUp driver account to each station, for a price of 0 CHF

- Or add the email to a user group that can charge for free.

What happens now:

- All charging stations that have RFIDType = 0 locally in the settings file will now start charging automatically.

- In the reports, all charging stations will now be displayed with the email of the eCarUp driver account.

![BoxProxy Green Motion – Figure 16](/img/drittsysteme-box-proxy-green-motion/16.png)

![BoxProxy Green Motion – Figure 17](/img/drittsysteme-box-proxy-green-motion/17.png)

![BoxProxy Green Motion – Figure 18](/img/drittsysteme-box-proxy-green-motion/18.png)

![BoxProxy Green Motion – Figure 19](/img/drittsysteme-box-proxy-green-motion/19.png)

## Known problems / limitations with eaton stations

### Limitations on user permissions across multiple connectors

If a charging station has multiple connectors (plugs), the permission management for users must be identical on all connectors. There must be no configuration in which, for example, a user is authorized to charge at connector 1 but this permission is not given at connector 2, i.e. differs. In addition, Hubject must not be activated.

![BoxProxy Green Motion – Figure 20](/img/drittsysteme-box-proxy-green-motion/20.png)

When does the problem occur?

This problem occurs when users use an RFID card to start the charging session.

Why does the problem occur?
Currently, during "Authorize" the charging station only transmits the RFID card data to us, but not the number of the connector used. This is due to the OCPP standard. For this reason, we always send an "Accepted" response as soon as the RFID card is presented.

```
[2, "b5790013-43ad-0f00-384e-b4799a00ad0e", "Authorize", {"idTag":"ABCD"}]
[3, "eff00013-902d-27df-4b4e-9d6ae7f5ad7f", {"idTagInfo":{"status":"Accepted","expiryDate":"2025-07-10T13:00:36.754Z"}}]
```

Only later, when the charging station sends us the "StartTransaction", do we receive the information about the connector used. At this point, our system checks the validity of the RFID card combination again. If the combination is not valid, we return the status "Invalid".

```
[2, "31f10017-fe9a-9de1-cb45-85f36ce47d0c", "StartTransaction", {"connectorId":1,"idTag":"ABCD","meterStart":0,"timestamp":"2025-07-09T13:00:34Z"}]
[3, "31f10017-fe9a-9de1-cb45-85f36ce47d0c", {"idTagInfo":{"status":"Invalid","expiryDate":"2025-07-09T13:00:39.489Z"},"transactionId":66039489}]
```

This charging station manufacturer does not interpret our "Invalid" response at the start of the transaction correctly. We cannot change the behavior of the charging station, and this must be taken into account accordingly when configuring the users.

### Consumption of 0 kWh is transmitted to our system

When the charging station restarts, a consumption of 0 kWh may be transmitted to our system by mistake. This can lead to incorrect billing.

When does the problem occur?

With certain stations when they restart. 

Why does the problem occur?
Due to an error on the charging station

![BoxProxy Green Motion – Figure 21](/img/drittsysteme-box-proxy-green-motion/21.png)

How can the problem be detected?

In the logs, for example, a meter value of 1338 is sent

\[2, "b4a3001c-b5f5-576c-ae4d-83b28150ee34", "MeterValues", &#123;"connectorId":1,"transactionId":295103899,"meterValue":\[&#123;"timestamp":"2025-08-04T10:34:11.278Z","sampledValue":\[&#123;"value":"1338","context":"Sample.Periodic","format":"Raw","measurand":"Energy.Active.Import.Register","location":"Body","unit":"Wh"&#125;,&#123;"value":"0","context":"Sample.Periodic","format":"Raw","measurand":"Power.Active.Import","location":"Body","unit":"W"&#125;\]&#125;\]&#125;\]

Subsequently, a meter value of 0 is transmitted during active charging. The station therefore starts again at 0 kWh and then counts up again.

\[2, "cdf2001c-71f6-3991-734e-94e99d4bff05", "MeterValues", &#123;"connectorId":1,"transactionId":295103899,"meterValue":\[&#123;"timestamp":"2025-08-04T10:35:10.88Z","sampledValue":\[&#123;"value":"0","context":"Sample.Periodic","format":"Raw","measurand":"Energy.Active.Import.Register","location":"Body","unit":"Wh"&#125;,&#123;"value":"0","context":"Sample.Periodic","format":"Raw","measurand":"Power.Active.Import","location":"Body","unit":"W"&#125;\]&#125;\]&#125;\]

How was the problem solved?

On 18.08.2025, the manufacturer Eaton provided us with new information showing how this problem could be fixed with a workaround. Our software development team reviewed this information immediately and successfully fixed the problem of 0 kWh charging sessions on 21.08.2025. From this point on, the billing for charging sessions at the affected charging stations should be correct and no longer show the error mentioned.

With this fix, we have only implemented a workaround that corrects, in billing, the problem of meter readings incorrectly transmitted by the charging station.
