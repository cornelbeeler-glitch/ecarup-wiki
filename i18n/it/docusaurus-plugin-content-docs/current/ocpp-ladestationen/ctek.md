---
title: 'CTEK'
slug: '/ocpp-ladestationen/ctek'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'CTEK'
---
<div className="row">
<div className="col col--8">

## Guida all'integrazione nel backend

Le stazioni CTEK possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel Suo account, può definire autonomamente e senza complicazioni le condizioni d'uso delle Sue stazioni (prezzi, utenti, orari disponibili ecc.). È Lei a decidere chi può ricaricare, quando e a quale prezzo.

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopra di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![CTEK – Figura 1](/img/ocpp-ladestationen-ctek/01.jpg)

</div>
</div>

[CTEK Chargestrom 2](https://www.ctek.com/de/ladestationen-f%C3%BCr-elektrofahrzeuge)

### Integrazione di stazioni OCPP

1.  Si assicuri che le Sue stazioni di ricarica siano installate e che il Suo PC o cellulare sia connesso alla stessa rete della stazione di ricarica.

2.  Apra il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettui l'accesso con i dati del Suo account.

3.  Nel menu a sinistra, clicchi sulla scheda "Stazioni" ("Stationen").

4.  Selezioni la scheda "OCPP".

5.  Copi l'URL negli appunti.

6.  Vada all'interfaccia web della stazione desiderata e incolli l'URL copiato.

## Integrazione della stazione di ricarica CTEK

Importante!

Per eseguire i primi passaggi deve installare un driver di CTEK sul Suo PC (vale per Windows).

1.   Colleghi il Suo laptop alla stazione (tramite la porta Mini-USB)

2.   Deve essere inserito il seguente URL: http://192.168.7.2

3.  Nome utente e password sono ccu

4.  Appare la dashboard di CTEK

5.  Selezionare il tipo di connessione (GSM, LAN...)

### Impostazioni dell'interfaccia web di C-Tek

1.  Il Setup deve essere impostato su Advanced. 

2.  Selezionare OCPP 1.6J come protocollo di comunicazione

3.  In Backend Endpoint incollare l'URL di eCarUp dal proprio account. 

4.  La Time Synchronisation viene ricavata dal backend OCPP.

![CTEK – Figura 2](/img/ocpp-ladestationen-ctek/02.png)

5\. Impostare il Sample Interval su 60 secondi

6\. Verificare che per l'Outlet la modalità di autenticazione sia impostata su RFID. (Naturalmente è comunque possibile avviare la ricarica anche con l'app eCarUp) 

![CTEK – Figura 3](/img/ocpp-ladestationen-ctek/03.png)

### Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Raccomandiamo un intervallo tra 30 e 60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Può modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![CTEK – Figura 4](/img/ocpp-ladestationen-ctek/04.png)

![CTEK – Figura 5](/img/ocpp-ladestationen-ctek/05.png)
