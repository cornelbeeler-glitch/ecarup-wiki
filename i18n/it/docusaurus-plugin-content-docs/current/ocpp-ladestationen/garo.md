---
title: 'Garo'
slug: '/ocpp-ladestationen/garo'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Garo'
---
![Garo – Figura 1](/img/ocpp-ladestationen-garo/01.jpg)

[Wallbox GLB+](https://www.garo.se/en/products/wallbox)

![Garo – Figura 2](/img/ocpp-ladestationen-garo/02.png)

[Entity Pro](https://www.garo.se/en/products/wallbox)

![Garo – Figura 3](/img/ocpp-ladestationen-garo/03.jpg)

[LS4 Compact](https://www.garo.se/en/products/wallbox)

## Guida all'integrazione nel backend

Le stazioni Garo possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Decidi tu chi può ricaricare, quando e a quale prezzo. 

- Requisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione delle stazioni di ricarica Garo

<Video src="Jj_6G8k8nus" title="Video YouTube, guida all'integrazione di GARO nel backend eCarUp" />

## Integrazione della Garo Entity Pro

Installa qui l'app Garo Connect.  

### Versione testata

- Versione firmware 1.8.8

![Garo – Figura 4](/img/ocpp-ladestationen-garo/04.png)

### Passo 1

Segui passo dopo passo la guida fornita e scansiona il codice QR sulla piastra posteriore. 

⚠️ Importante: il tuo smartphone e la stazione di ricarica devono trovarsi nella stessa rete. (LAN o WLAN)

### Passo 2

<div className="row">
<div className="col col--6">

Nelle impostazioni generali assicurati che non siano attivati né un piano per la ricarica dell'auto né l'utilizzo gratuito.

</div>
<div className="col col--6 text--center">

![Garo – Figura 5](/img/ocpp-ladestationen-garo/05.png)

</div>
</div>

### Passo 3

<div className="row">
<div className="col col--6">

Nella panoramica dell'installazione seleziona il campo "Terze parti".

</div>
<div className="col col--6 text--center">

![Garo – Figura 6](/img/ocpp-ladestationen-garo/06.png)

</div>
</div>

### Passo 4

<div className="row">
<div className="col col--6">

Il nostro consiglio: selezionare StopTransactionPnEVSideDisconnecet + UnlockConnectorOnEVSideDisconnect.

</div>
<div className="col col--6 text--center">

![Garo – Figura 7](/img/ocpp-ladestationen-garo/07.png)

</div>
</div>

### Passo 5

<div className="row">
<div className="col col--6">

Per la connessione OCPP la DeviceId può essere scelta liberamente.

Nel campo CsmsUrl puoi inserire il tuo URL dell'account eCarUp.

</div>
<div className="col col--6 text--center">

![Garo – Figura 8](/img/ocpp-ladestationen-garo/08.png)

</div>
</div>

### Passo 5.1

<div className="row">
<div className="col col--6">

L'URL può essere incollato esattamente così com'è.

Non dimenticare di salvare e riavviare!

</div>
<div className="col col--6 text--center">

![Garo – Figura 9](/img/ocpp-ladestationen-garo/09.png)

</div>
</div>

### Nota

<div className="row">
<div className="col col--6">

Sulla stazione di ricarica l'utente può inoltre definire cosa deve fare la stazione nello stato "Non connesso". Consigliamo di non attivare nulla.

</div>
<div className="col col--6 text--center">

![Garo – Figura 10](/img/ocpp-ladestationen-garo/10.png)

</div>
</div>

## Integrazione delle Garo GLB+ e LS4 Compact

### 1\. Collegare il notebook al controller Bender tramite cavo USB:

⚠️ Importante: utilizzare l'interfaccia Micro-USB

![Garo – Figura 11](/img/ocpp-ladestationen-garo/11.png)

### 2\. Aprire il browser sul notebook

Inserisci il seguente URL: http://192.168.123.123/operator/

- Nome utente predefinito: operator

- Password predefinita: yellow\_zone

### 3\. Verificare la versione del firmware:

<div className="row">
<div className="col col--8">

Deve essere installata almeno la versione 4.00-2139.

In State →  Firmware Version trovi la versione attuale.

Eseguire l'aggiornamento del firmware:

a) Copiare il file del firmware su una chiavetta USB. Inserire la chiavetta USB.

b) Riavviare il controller Bender

</div>
<div className="col col--4 text--center">

![Garo – Figura 12](/img/ocpp-ladestationen-garo/12.png)

</div>
</div>

### 4\. Configurare il Bender

OCPP Mode: OCPP-J 1.6

WebSocket JSON OCPP URL: ws://www.ecarup.com/api/Ocpp16/&#123;ecarupID&#125;/

Esempio: ws://www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508/

Importante: dopo l'URL OCPP di eCarUp deve essere aggiunto un "/" (come mostrato nell'esempio). Inoltre, nel campo "ChargePoint ID (OCPP)" non devono comparire caratteri speciali.

![Garo – Figura 13](/img/ocpp-ladestationen-garo/13.png)

### Nuova interfaccia Bender

Se disponi della seguente interfaccia web, trovi la guida nel seguente articolo 

- [Guida](/ocpp-ladestationen/webasto)

![Garo – Figura 14](/img/ocpp-ladestationen-garo/14.png)

## Impostazioni avanzate tramite strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30-60s. Solo così possiamo calcolare e visualizzare meglio la potenza di ricarica attuale nell'app. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Garo – Figura 15](/img/ocpp-ladestationen-garo/15.png)

![Garo – Figura 16](/img/ocpp-ladestationen-garo/16.png)
