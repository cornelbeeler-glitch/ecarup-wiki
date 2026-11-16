---
title: 'Circontrol'
slug: '/ocpp-ladestationen/circontrol'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Circontrol'
---
## Guida all'integrazione nel backend

Le stazioni Circontrol possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)


### Integrazione delle stazioni OCPP

1.  Assicurati che la tua stazione sia installata e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) e accedi con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.


## Integrazione della stazione di ricarica Circontrol

I primi passaggi devono essere eseguiti direttamente sul display della tua stazione:

1.   Collega il tuo laptop alla stazione

2.   Ricava l'indirizzo IP attuale della stazione dalla guida fornita in dotazione 

3.  Inserisci poi l'indirizzo IP nel browser web

4.  Viene visualizzata la dashboard di Circontrol

5.  Seleziona il tipo di connessione (GSM, LAN...)


Tieni presente quanto segue:

Alla consegna della stazione può succedere che l'impostazione predefinita sia Plug & Charge. Naturalmente questa deve essere prima disattivata. 

Per ottenere il tool, contatta BIBUS o Circontrol. 

A tale scopo deve essere installato il Charge Point Manager e le impostazioni devono essere le seguenti:

- Status deve essere impostato su Enabled


![Circontrol – Figura 1](/img/ocpp-ladestationen-circontrol/01.png)

### Impostazioni dell'interfaccia web di Circontrol

1.  Integration 

2.  Selezionare OCPP 1.6J

3.  LINK (cliccare)

4.  Nome utente e password si trovano nella guida


![Circontrol – Figura 2](/img/ocpp-ladestationen-circontrol/02.png)

Nella Charge Box deve essere definito il nome della stazione. Un nome qualsiasi 

(Attenzione: senza spazi) 



![Circontrol – Figura 3](/img/ocpp-ladestationen-circontrol/03.png)

![Circontrol – Figura 4](/img/ocpp-ladestationen-circontrol/04.png)

- In Central System inserisci l'URL OCPP del tuo account


![Circontrol – Figura 5](/img/ocpp-ladestationen-circontrol/05.png)

⚠️ Importante: impostare obbligatoriamente Metervalue sample interval (s) ad es. su 60

## Download

EN\_eNext-Park\_User-Manual\_v2.0 (1).pdf

EN\_Charge-Point-Manager\_Instruction-Manual.pdf

## Impostazioni avanzate tramite il tool di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30 e 60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 



Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![Circontrol – Figura 6](/img/ocpp-ladestationen-circontrol/06.png)

![Circontrol – Figura 7](/img/ocpp-ladestationen-circontrol/07.png)
