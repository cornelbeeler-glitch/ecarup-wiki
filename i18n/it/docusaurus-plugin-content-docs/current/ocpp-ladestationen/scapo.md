---
title: 'SCAPO'
slug: '/ocpp-ladestationen/scapo'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'SCAPO'
---
<div className="row">
<div className="col col--8">

## Guida all'integrazione nel backend

Le stazioni Scapo possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo.

- Requisiti per l'[integrazione via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![SCAPO – Figura 1](/img/ocpp-ladestationen-scapo/01.jpg)

</div>
</div>

[Wallbox VISION](https://scapo.de/e-mobility-privat/)

### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua il login con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

1\. Link ws senza Basic Auth: testato e funzionante

2\. wss senza Basic Auth: testato e funzionante

3\. wss con Basic Auth: non ancora testato

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione di SCAPO Vision & SCAPO Comfort

- Apri le impostazioni di rete e Internet del tuo PC

- Qui devi assegnare un indirizzo IP statico

- Ricava i dati di login e l'indirizzo IP dal manuale fornito in dotazione

- Il firmware deve essere almeno alla versione: BE-05.01.01 o BE-03.02.12

### Interfaccia web

### Backend

- Vai al menu "Network"

- Seleziona OCPP-J 1.6

- Mezzo desiderato per la comunicazione

- L'OCPP Vendor non deve contenere spazi

- Il websocket deve essere scomposto nelle sue parti

### Websocket di eCarUp

- Inseriscilo come mostrato nello screenshot

- Fai attenzione alla parte finale, api/Ocpp16/weoih48zlkuhr9/00000010638

⚠️Importante: alla fine non dimenticare / (slash) + 00000010638 (numero di serie della stazione)!

- Attualmente funziona solo la connessione WS. 

![SCAPO – Figura 2](/img/ocpp-ladestationen-scapo/02.jpg)

Il numero di serie della tua wallbox si trova come segue:

![SCAPO – Figura 3](/img/ocpp-ladestationen-scapo/03.png)

Se si utilizzano carte RFID, imposta anche il seguente parametro:

![SCAPO – Figura 4](/img/ocpp-ladestationen-scapo/04.png)

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![SCAPO – Figura 5](/img/ocpp-ladestationen-scapo/05.png)

![SCAPO – Figura 6](/img/ocpp-ladestationen-scapo/06.png)
