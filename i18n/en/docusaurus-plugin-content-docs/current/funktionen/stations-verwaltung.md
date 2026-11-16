---
title: 'Station Management'
slug: '/funktionen/stations-verwaltung'
description: 'Here you can manage stations.'
sidebar_label: 'Station Management'
---
Here you can manage stations.

You can filter by the following options:

- Name.
    Enter the name of the charging station.

- Address
    Enter the address of the charging station.

- Access type
    Enter the access type (Public (Öffentlich), Limited (Limitiert) or Private/Maintenance (Privat/Wartung))

- Price per kWh
    Enter the price per kWh.

- Price per hour
    Enter the price per hour.

- Status
    Enter the status of the station you are looking for (Available (Verfügbar), Connected (Verbunden) or Occupied (Besetzt))

![Station Management – Figure 1](/img/funktionen-stations-verwaltung/01.png)

⚠️Important: Does the status not match the wallbox?

- If there are interruptions on the wallbox (especially during active charging sessions), the status in eCarUp may be red (active charging session) even though the wallbox is ready again. This means that we have not yet received a command from the station to end the charging session (Stop Transaction).

- A restart or reset can help.

Charging power

- Is the current charging power not displayed during the charging session? Take a look at the following article in [Maintenance](/funktionen/wartung).

## Configure station

<div className="row">
<div className="col col--8">

Click the three dots on the right to edit the charging station. This menu should then open, where you can choose from the following items:

- Edit (Bearbeiten)

- Edit connector (Anschluss bearbeiten)

- Set location (Standort setzen)

- Define users (Benutzer definieren)

- Define times (Zeiten definieren)

- Activate (Aktivieren)

</div>
<div className="col col--4 text--center">

![Station Management – Figure 2](/img/funktionen-stations-verwaltung/02.png)

</div>
</div>

## Edit (Bearbeiten)

Under Edit (Bearbeiten) you can do the following:

- Change the name and description of the station
    (This information is visible on the map in the app)

- Delete the station
    (To delete it, you must enter the full station name. You can find it under the item "Information" (Informationen) in the same window.)

- Set the station to unlicensed
    The station is switched to inactive and therefore does not need a licence, but it no longer works with eCarUp either.

- Upload images of the stations
    This is not mandatory, but it is recommended, as the driver sees these images in the app and can therefore find and identify the charging station more easily.

⚠️Important: Images with a size of approx. 605 x 806 pixels are suitable.

![Station Management – Figure 3](/img/funktionen-stations-verwaltung/03.png)

![Station Management – Figure 4](/img/funktionen-stations-verwaltung/04.png)

## Edit connector (Anschluss bearbeiten)

Information:

(this information is visible in the app)

- Name of the connector

- Description (optional)

- Connector type (plug type) \[recommended\]

- Max. energy (kW) \[recommended\]
    These settings are not strictly necessary, but they are recommended, as the driver can then see the power of the charging station. In addition (if Hubject is activated), this is also transmitted correctly.

Prices:

- Set prices for energy and time
    The price can also be changed later. The price per kWh is the electricity, and the price per h is a "parking tariff".

⚠️Important: With the access "Limited" (Limitiert), the field is greyed out, because in this case the price is set under "Define users (Benutzer definieren) or in the [extended user management](/funktionen/erw-nutzerverwaltung)".

Access:

- Here you can manage the access to the station.
    You can choose between the following access types:
    Public (Öffentlich), Private/Maintenance (Privat/Wartung) and Limited (Limitiert).

- Public (Öffentlich):
    The charging station is visible and accessible to everyone. Anyone can therefore charge.

- Limited (Limitiert):
    Only selected users are permitted to use the charging station. Other users do not see it and cannot use it either.

![Station Management – Figure 5](/img/funktionen-stations-verwaltung/05.png)

![Station Management – Figure 6](/img/funktionen-stations-verwaltung/06.png)

![Station Management – Figure 7](/img/funktionen-stations-verwaltung/07.png)

![Station Management – Figure 8](/img/funktionen-stations-verwaltung/08.png)

- Private / Maintenance (Privat / Wartung):
    The charging station is only visible and accessible to the installation user. No other user can use it, not even if they have been granted access.

- Define users / times (Benutzer / Zeiten definieren):
    See below

Automatic charging session:

- This option is used when the charging station is used privately. It switches off authorisation, meaning plug in and charge.

Hubject (roaming network):

- The charging station is pushed into the Hubject roaming network and is therefore also visible to and usable by drivers who do not use eCarUp (e.g. Move, Swisscharge etc.).

- This option is only available if the charging station is public 24/7.

- As soon as this has been switched on, a price plan must be selected. You can choose between LowCHF, MediumCHF, HighCHF and ExtraCHF.

- We guarantee that the station owner receives 90% of the specified price plan, i.e. with 0,50CHF it is 0,45CHF. We cannot say what the driver ultimately pays, as the third-party providers define these prices.

⚠️Important: After Hubject has been switched on, the charging station does not appear on other platforms immediately. This can sometimes take up to 1 week. Unfortunately, this is beyond our control, as the other providers have to publish it.

## Edit location (Standort bearbeiten)

<div className="row">
<div className="col col--8">

This is where the location of the station is set (if it is needed)
If you do not want other drivers to see the station on the map, the location can also be left empty.
If the station is limited, the location is also limited, meaning it is only displayed to the selected users.

- Make sure that the address actually exists.

- When you enter it, you should click "Search address" (Adresse suchen) so that our system formats the address correctly automatically.

- If there are several charging stations at one point, it is recommended to spread them apart (as in the example image) so that they are not all in one spot. This is better for the driver, as it gives a clearer overview.

- Once the location has been set, it is displayed directly on the eCarUp map.

</div>
<div className="col col--4 text--center">

![Station Management – Figure 9](/img/funktionen-stations-verwaltung/09.png)

</div>
</div>

## Define users (Benutzer definieren)

In this menu item, users can be defined individually.

Add users individually by clicking "Add user" (Benutzer hinzufügen) at the top right.  You can then enter the user's email address and define the tariff.

Make sure that the email address is entered correctly, as you do not receive an error message if you enter an account that does not exist.

![Station Management – Figure 10](/img/funktionen-stations-verwaltung/10.png)

## Define times (Zeiten definieren)

<div className="row">
<div className="col col--8">

If you want the charging station to be public or limited for a limited time, you can set this under "Define times" (Zeiten definieren). There you can choose between "Public" (Öffentlich), "Private / Maintenance" (Privat / Wartung) and "Limited" (Limitiert).

Public (Öffentlich): Everyone has access to the charging station and can charge.

Private / Maintenance (Privat / Wartung): Only the station operator has access to the charging station, no other users, not even those who have been granted access.

Limited (Limitiert): Only users who have been granted access have access to the charging station.

If charging is in progress during the switchover, the charge is not ended automatically. The vehicle remains plugged in until the driver unplugs the car and ends the charge.

</div>
<div className="col col--4 text--center">

![Station Management – Figure 11](/img/funktionen-stations-verwaltung/11.png)

</div>
</div>

## Activate (Aktivieren)

Under the item "Activate" (Aktivieren), you can activate the charging station or the charge and thereby also release it. In this setting, you can choose whether to unlock it for 1h, 2, 4h, 8h or 12h. However, a tariff cannot be defined and is always 0 CHF.

You can use this, for example, if you have a limited station that has no "guest user" and you want to release a charge for the guest.

![Station Management – Figure 12](/img/funktionen-stations-verwaltung/12.png)
