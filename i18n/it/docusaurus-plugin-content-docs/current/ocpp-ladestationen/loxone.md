---
title: 'Loxone'
slug: '/ocpp-ladestationen/loxone'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Loxone'
---
<div className="row">
<div className="col col--6">

## Guida all'integrazione nel backend

Le stazioni Loxone possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso e senza complicazioni le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo.

- Requisiti per l'[integrazione via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--6 text--center">

![Loxone – Figura 1](/img/ocpp-ladestationen-loxone/01.jpg)

</div>
</div>

[Wallbox 11kW 16A Tree](https://shop.loxone.com/dech/wallbox-tree.html)

### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione della stazione di ricarica Loxone

<Video src="1n1R5rs9bk8" title="Video YouTube, integrazione OCPP in Loxone Config" />

## Integrazione tramite il Loxone Mini Server

Importante: il software del Miniserver deve essere almeno alla versione 15.2 o superiore. 

Requisiti hardware: 

- Loxone Miniserver (2nd Gen)

Raccomandazione: 

- Wallbox Tree

- Contatore trifase Tree

È possibile integrare anche stazioni di ricarica di terzi: [Loxone Library](https://library.loxone.com/?s=wallbox) 

### Configurazione:

1.  Aggiungere il plugin OCPP Server Connector come dispositivo di rete

2.  Nelle impostazioni del plugin OCPP Server Connector, inserisci l'URL OCPP del tuo account. 

3.  (Opzionale) Aggiungi un punto di ricarica separato per ogni wallbox. 

![Loxone – Figura 2](/img/ocpp-ladestationen-loxone/02.png)

![Loxone – Figura 3](/img/ocpp-ladestationen-loxone/03.png)

### Link utili:

[Guida all'integrazione Loxone](https://www.loxone.com/dede/kb/ocpp-integration/)

[Funzionalità OCPP di Loxone](https://www.loxone.com/dede/kb/ocpp-server-connector-beta/)

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Raccomandiamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Loxone – Figura 4](/img/ocpp-ladestationen-loxone/04.png)

![Loxone – Figura 5](/img/ocpp-ladestationen-loxone/05.png)
