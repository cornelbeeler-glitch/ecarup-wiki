---
title: 'Auto-Export (User)'
slug: '/funktionen/auto-export-user'
description: 'To use all eCarUp and Gold Partner features, a closer partnership is required.'
sidebar_label: 'Auto-Export (User)*'
---
To use all eCarUp and Gold Partner features, a closer partnership is required. For more information, simply contact verkauf@ecarup.com.

## Auto-Export (User)

### With the eCarUp User Export function, you can transfer user-based transactions from the eCarUp portal directly to IS-E.

The following points are important for this:

- The driver must be known and must be set up with the price 0.00.

- Define a station group in which the driver can move or charge.

- A server (FTPS or SFTP) must be available on your side. 


### 1\. Define the destination of the auto-export

![Auto-Export (User) – Figure 1](/img/funktionen-auto-export-user/01.png)

![Auto-Export (User) – Figure 2](/img/funktionen-auto-export-user/02.png)

- When configuring the tabs in the auto-export, work from right to left (as in smart-me)

- Select Destination (Zielort) in the menu

- You can then set up the server for all auto-exports at eCarUp once (SFTP / FTPS)

- For SFTP, the port is always 22 

- For FTPS, the port is always 21


### 2\. Set up the formatting of the auto-export

![Auto-Export (User) – Figure 3](/img/funktionen-auto-export-user/03.png)

![Auto-Export (User) – Figure 4](/img/funktionen-auto-export-user/04.jpg)

- Then select Format (Formatieren) (also a one-time setup)

- For the Metering Code, the following can be defined:

    -  DeviceLocationID: identification number in IS-E

    -  FactoryNo: serial number

    - InternalNo: internal number

    - Metering Code: defined code for the meter

- The OBIS code can now be selected and defined as either 1.8.0 or 1.9.0.


1.8.0 = Virtual meter reading

1.9.0 = Advance

We recommend discussing these settings with the person responsible for IS-E in your organisation. 

### 3\. Define the tasks of the auto-export

![Auto-Export (User) – Figure 5](/img/funktionen-auto-export-user/05.png)

![Auto-Export (User) – Figure 6](/img/funktionen-auto-export-user/06.png)

- Then select Task (Aufgabe). This is where you define for which user and which station group the data is exported. A task must be set up for each auto-export.

- Define the eCarUp user (via the email address used for the eCarUp account)

- Select the corresponding station group 

- Then insert the format (Format) and destination (Zielort) – which were already defined in steps 1 and 2

- Set the upload interval (Upload-Intervall)

- Finally, check whether the status at the far right changes to "OK "; the data is then exported to the server


The full range of functions is of course not exhaustive, and Gold Partners at eCarUp automatically benefit from future features. 

## Test XML File

<Embed src="https://drive.google.com/file/d/1n96bHZNEQ66znDATheV5jT1Bjro4MF9h/preview" aspect="1.350" title="Drive, XML File Auto Export eCarUp.pdf" />

XML File Auto Export eCarUp.pdf
