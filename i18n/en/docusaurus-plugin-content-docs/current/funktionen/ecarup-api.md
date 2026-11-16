---
title: 'eCarUp API'
slug: '/funktionen/ecarup-api'
description: 'To use the eCarUp API, you need an eCarUp Premium licence.'
sidebar_label: 'eCarUp API'
---
To use the eCarUp API, you need an eCarUp Premium licence.

The API (Application Programming Interface) is a set of commands that allows different software applications to communicate with each other. 

[Preparation](#preparation)

[Credentials for authorisation](#credentials-for-authorisation)

[Test eCarUp Swagger](#test-ecarup-swagger)

[Example](#example)

[Code example](#code-example)

## Preparation

### Credentials for authorisation

To use the eCarUp API, proceed as follows:

1.  Log in to the [smart-me web portal](https://webforms.smart-me.com/Embedded/smartme/SignIn.aspx) with your email and password (parent company). 

2.  Go to Configuration (Konfiguration) and select API there. (Figure 1)

3.  Click Add device (Gerät hinzufügen) (Client Credentials).

4.  Under permissions, you need user.read and device.read. Then click create/save (erstellen/speichern). (Figure 2)

5.  Important: a field with the Client ID and Client Secret then appears. These are the credentials for API authorisation. Store these credentials somewhere safe.


The field appears only once.

![eCarUp API – Figure 1](/img/funktionen-ecarup-api/01.png)

Figure 1

![eCarUp API – Figure 2](/img/funktionen-ecarup-api/02.png)

Figure 2

## Test eCarUp Swagger

[eCarUp API Swagger](https://public-api.ecarup.com/swagger/index.html)

In Swagger, you can run and test the current commands. 

Go to the [eCarUp Public API Swagger](https://public-api.ecarup.com/swagger/index.html) and enter the credentials you received in step 5.

![eCarUp API – Figure 3](/img/funktionen-ecarup-api/03.png)

## Example

The command "get/v1/history/station/&#123;id&#125;" can also be used to retrieve driver statistics per charging station.

![eCarUp API – Figure 4](/img/funktionen-ecarup-api/04.png)

Driver statistics with a known driver

![eCarUp API – Figure 5](/img/funktionen-ecarup-api/05.png)

Driver statistics with an unknown driver

## Code example

can be found at: [https://github.com/eCarUp/ecarup-api-examples](https://github.com/eCarUp/ecarup-api-examples)

![eCarUp API – Figure 6](/img/funktionen-ecarup-api/06.png)
