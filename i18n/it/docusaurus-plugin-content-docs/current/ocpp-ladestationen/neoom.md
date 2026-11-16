---
title: 'neoom'
slug: '/ocpp-ladestationen/neoom'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'neoom'
---
<div className="row">
<div className="col col--8">

## Guida all'integrazione nel backend

Le stazioni Neoom possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo.

- Requisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri qui di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![neoom – Figura 1](/img/ocpp-ladestationen-neoom/01.jpg)

</div>
</div>

[neoom BOXX](https://neoom.com/produkte/boxx)

### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua il login con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione della stazione di ricarica Neoom

- Apri le impostazioni di rete e Internet del tuo PC

- Qui devi assegnare un indirizzo IP statico

- Ricava i dati di login e l'indirizzo IP dal manuale fornito in dotazione

- Il firmware deve essere almeno della versione: BE-03.02.10

⚠️ Attenzione: al momento la potenza di ricarica non può essere visualizzata nell'app. Il conteggio avviene come di consueto al termine della sessione di ricarica. 

### Interfaccia web

### Backend

- Vai al menu "Network"

- Seleziona OCPP-J 1.6

- Mezzo desiderato per la comunicazione

- L'OCPP Vendor non deve contenere spazi

- Il websocket deve essere scomposto

### Websocket di eCarUp

- Inseriscilo come mostrato nella schermata

- Fai attenzione alla parte finale, api/Ocpp16/weoih48zlkuhr9/00000010638

⚠️ Importante: alla fine non dimenticare / (slash) + 00000010638 (numero di serie della stazione)!

![neoom – Figura 2](/img/ocpp-ladestationen-neoom/02.jpg)

Il numero di serie della tua wallbox si trova come segue:

![neoom – Figura 3](/img/ocpp-ladestationen-neoom/03.png)

Se vengono utilizzate carte RFID, imposta anche il seguente parametro:

![neoom – Figura 4](/img/ocpp-ladestationen-neoom/04.png)

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![neoom – Figura 5](/img/ocpp-ladestationen-neoom/05.png)

![neoom – Figura 6](/img/ocpp-ladestationen-neoom/06.png)
