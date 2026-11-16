---
title: 'mybox'
slug: '/ocpp-ladestationen/mybox'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'mybox'
---
<div className="row">
<div className="col col--8">

## Guida all'integrazione nel backend

Le stazioni mybox possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo.

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![mybox – Figura 1](/img/ocpp-ladestationen-mybox/01.jpg)

</div>
</div>

[mybox Profi](https://mybox.eco/de/produkt/mybox-profi/)

### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione della mybox

- Versione firmware testata: 20231218\_1.209.4\_v1

### Preparazione

- Per configurare la wallbox, devi stabilire una connessione con la rete Wi-Fi locale della stazione di ricarica

- Nome della rete: MyBox-Rxx +8 caratteri (ID della stazione)

- Ricava i dati di accesso e l'indirizzo IP dalle istruzioni per l'uso fornite in dotazione

⚠️ Importante: in caso di guasto interno, la stazione non ci invia il consueto messaggio di stato come "Faulted" o "Unavailable".

### Passo 1

Vai alle Advanced Settings 

In Authorization seleziona la modalità OCPP

![mybox – Figura 2](/img/ocpp-ladestationen-mybox/02.png)

### Passo 2

Quindi, in OCPP, attiva la funzione e inserisci il tuo URL eCarUp in OCPP-URL-CS. 

![mybox – Figura 3](/img/ocpp-ladestationen-mybox/03.png)

### Passo 3

Riavvia la stazione. 

## Impostazione avanzata tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30 e 60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![mybox – Figura 4](/img/ocpp-ladestationen-mybox/04.png)

![mybox – Figura 5](/img/ocpp-ladestationen-mybox/05.png)
