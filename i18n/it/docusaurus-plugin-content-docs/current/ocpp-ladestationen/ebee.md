---
title: 'Ebee'
slug: '/ocpp-ladestationen/ebee'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Ebee'
---
<div className="row">
<div className="col col--8">

## Guida all'integrazione nel backend

Le stazioni Ebee che contengono un controller Bender possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel Suo account, può definire autonomamente e senza complicazioni le condizioni di utilizzo delle Sue stazioni (prezzi, utenti, orari di disponibilità ecc.). È Lei a decidere chi può ricaricare, quando e a quale prezzo.

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopra di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![Ebee – Figura 1](/img/ocpp-ladestationen-ebee/01.jpg)

</div>
</div>

[Ebee Berlin](https://www.bender.de/produkte/ladestationen/ladepunkt-berlin/)

### Integrazione di stazioni OCPP

1.  Si assicuri che le Sue stazioni di ricarica siano installate e che il Suo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apra il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettui l'accesso con i dati del Suo account.

3.  Nel menu a sinistra, clicchi sulla scheda "Stazioni" ("Stationen").

4.  Selezioni la scheda "OCPP".

5.  Copi l'URL negli appunti.

6.  Acceda all'interfaccia web della stazione desiderata e incolli l'URL copiato.

## Collegamento della stazione di ricarica Ebee

<Video src="p_fhat0HxZY" title="Video YouTube, integrare il controller Bender nel backend eCarUp" />

## Integrazione nel portale eCarUp

### 1\. Collegare il notebook al controller Bender tramite cavo USB

⚠️ Importante: utilizzare l'interfaccia Micro-USB

![Ebee – Figura 2](/img/ocpp-ladestationen-ebee/02.png)

### 2\. Aprire il browser sul notebook

Inserisca il seguente URL: [http://192.168.123.123/operator/](http://192.168.123.123/operator/)

- Nome utente predefinito: operator

- Password predefinita: yellow\_zone

### 3\. Verificare la versione del firmware:

<div className="row">
<div className="col col--8">

Deve essere installata almeno la versione 4.00-2139.

In State -> Firmware Version si trova la versione attuale.

Eseguire l'aggiornamento del firmware:

a) Copiare il file del firmware su una chiavetta USB. Inserire la chiavetta USB.

b) Riavviare il controller Bender

</div>
<div className="col col--4 text--center">

![Ebee – Figura 3](/img/ocpp-ladestationen-ebee/03.png)

</div>
</div>

### 4\. Configurare il Bender

OCPP Mode: OCPP-J 1.6

WebSocket JSON OCPP URL: ws://www.ecarup.com/api/Ocpp16/&#123;ecarupID&#125;/

Esempio: ws://www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508/

Importante: dopo l'URL OCPP di eCarUp occorre aggiungere un "/" (come mostrato nell'esempio). Inoltre, il campo "ChargePoint ID (OCPP)" non deve contenere caratteri speciali.

![Ebee – Figura 4](/img/ocpp-ladestationen-ebee/04.png)

## Impostazione avanzata tramite strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio la potenza di ricarica attuale nell'app. 

Può modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Ebee – Figura 5](/img/ocpp-ladestationen-ebee/05.png)

![Ebee – Figura 6](/img/ocpp-ladestationen-ebee/06.png)
