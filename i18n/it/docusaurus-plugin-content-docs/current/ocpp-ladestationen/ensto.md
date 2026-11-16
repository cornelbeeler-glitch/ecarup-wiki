---
title: 'Ensto'
slug: '/ocpp-ladestationen/ensto'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Ensto'
---
<div className="row">
<div className="col col--8">

## Guida all'integrazione nel backend

Le stazioni Ensto che contengono un controller Bender possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo.

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![Ensto – Figura 1](/img/ocpp-ladestationen-ensto/01.jpg)

</div>
</div>

[Ensto Chago Wallbox](https://www.ensto.com/de/stromverteilungsnetze/)

### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) e accedi con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione nel portale eCarUp

<Video src="p_fhat0HxZY" title="Video YouTube, integrare il controller Bender nel backend eCarUp" />

### 1\. Collegare il notebook al controller Bender tramite cavo USB:

⚠️ Importante: utilizzare l'interfaccia Micro-USB

![Ensto – Figura 2](/img/ocpp-ladestationen-ensto/02.png)

### 2\. Aprire il browser sul notebook

Inserisci il seguente URL: http://192.168.123.123/operator/

- Nome utente predefinito: operator

- Password predefinita: yellow\_zone

### 3\. Verificare la versione del firmware:

<div className="row">
<div className="col col--8">

Deve essere installata almeno la versione 4.00-2139.

Alla voce State -> Firmware Version si trova la versione più recente.

Eseguire l'aggiornamento del firmware:

a) Copiare il file del firmware su una chiavetta USB. Inserire la chiavetta USB.

b) Riavviare il controller Bender

</div>
<div className="col col--4 text--center">

![Ensto – Figura 3](/img/ocpp-ladestationen-ensto/03.png)

</div>
</div>

### 4\. Configurare il Bender

OCPP Mode: OCPP-J 1.6

WebSocket JSON OCPP URL: ws://www.ecarup.com/api/Ocpp16/&#123;ecarupID&#125;/

Esempio: ws://www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508/

⚠️ Importante: dopo l'URL OCPP di eCarUp deve essere aggiunto un "/" (come mostrato nell'esempio). Inoltre, la "ChargePoint ID (OCPP)" non deve contenere caratteri speciali.

![Ensto – Figura 4](/img/ocpp-ladestationen-ensto/04.png)

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Ensto – Figura 5](/img/ocpp-ladestationen-ensto/05.png)

![Ensto – Figura 6](/img/ocpp-ladestationen-ensto/06.png)
