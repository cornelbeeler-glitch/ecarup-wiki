---
title: 'eCarUp API'
slug: '/funktionen/ecarup-api'
description: 'Per utilizzare la eCarUp API ti serve una licenza eCarUp Premium.'
sidebar_label: 'eCarUp API'
---
Per utilizzare la eCarUp API ti serve una licenza eCarUp Premium.

L'API (Application Programming Interface) è un insieme di comandi che consente a diverse applicazioni software di comunicare tra loro. 

[Preparazione](#preparazione)

[Credenziali di accesso per l'autorizzazione](#credenziali-di-accesso-per-lautorizzazione)

[Test eCarUp Swagger](#test-ecarup-swagger)

[Esempio](#esempio)

[Esempio di codice](#esempio-di-codice)

## Preparazione

### Credenziali di accesso per l'autorizzazione

Per poter utilizzare la eCarUp API, procedi come segue:

1.  Accedi con la tua e-mail e la tua password al [portale web smart-me](https://webforms.smart-me.com/Embedded/smartme/SignIn.aspx) (società madre). 

2.  Vai a Configurazione (Konfiguration) e seleziona la voce API (API). (Figura 1)

3.  Clicca su Aggiungi dispositivo (Client Credentials) (Gerät (Client Credentials) hinzufügen).

4.  Come autorizzazioni ti servono user.read e device.read. Clicca poi su crea/salva (erstellen/speichern). (Figura 2)

5.  Importante: in seguito compare un campo con Client ID e Client Secret. Sono le credenziali di accesso per l'autorizzazione API. Salva queste credenziali in un luogo sicuro.


Il campo compare una sola volta.

![eCarUp API – Figura 1](/img/funktionen-ecarup-api/01.png)

Figura 1

![eCarUp API – Figura 2](/img/funktionen-ecarup-api/02.png)

Figura 2

## Test eCarUp Swagger

[eCarUp API Swagger](https://public-api.ecarup.com/swagger/index.html)

In Swagger puoi eseguire e testare i comandi attuali. 

Vai a [eCarUp Public API Swagger](https://public-api.ecarup.com/swagger/index.html) e inserisci le credenziali di accesso che hai ricevuto al passo 5.

![eCarUp API – Figura 3](/img/funktionen-ecarup-api/03.png)

## Esempio

Con il comando "get/v1/history/station/&#123;id&#125;" puoi estrarre anche le statistiche dei conducenti per ogni stazione di ricarica.

![eCarUp API – Figura 4](/img/funktionen-ecarup-api/04.png)

Statistica dei conducenti con conducente noto

![eCarUp API – Figura 5](/img/funktionen-ecarup-api/05.png)

Statistica dei conducenti con conducente sconosciuto

## Esempio di codice

lo trovi qui: [https://github.com/eCarUp/ecarup-api-examples](https://github.com/eCarUp/ecarup-api-examples)

![eCarUp API – Figura 6](/img/funktionen-ecarup-api/06.png)
