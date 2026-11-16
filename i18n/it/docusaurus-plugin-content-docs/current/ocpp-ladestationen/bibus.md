---
title: 'Bibus'
slug: '/ocpp-ladestationen/bibus'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Bibus'
---
![Bibus – Figura 1](/img/ocpp-ladestationen-bibus/01.jpg)

[Bibus eVolve](https://technology.bibus.com/ch-de/produkte/e-mobility-and-energy/)

![Bibus – Figura 2](/img/ocpp-ladestationen-bibus/02.jpg)

[Bibus eNext](https://technology.bibus.com/ch-de/produkte/e-mobility-and-energy/)

## Guida all'integrazione nel backend

Le stazioni Bibus possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)


### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.


## Integrazione della stazione di ricarica Bibus

Per la versione con stazioni Kempower, clicca [qui](/ocpp-ladestationen/kempower).

## Versione con Circontrol

I primi passaggi devono essere eseguiti direttamente sul display della tua stazione:

1.   Collega il tuo laptop alla stazione

2.   Ricava l'indirizzo IP attuale della stazione dalla guida allegata

3.  Inserisci quindi l'indirizzo IP nel browser web

4.  Appare la dashboard di Circontrol

5.  Seleziona il tipo di connessione (GSM, LAN ...)


⚠️ Nota bene:

L'impostazione predefinita della stazione Bibus può essere Plug & Charge. Questa deve essere disattivata nel Charge Point Manager. 

Contatta BIBUS per ottenere il Charge Point Manager.

Lì, nelle impostazioni, lo stato deve essere impostato su "Attivato" ("Aktiviert").

![Bibus – Figura 3](/img/ocpp-ladestationen-bibus/03.png)

### Impostazioni dell'interfaccia web Circontrol

1.  Clicca su Integrazione nella navigazione a sinistra

2.  Seleziona OCPP 1.6J in "Integrazioni disponibili" ("Verfügbare Integrationen").

3.  Clicca sul link

4.  Inserisci nome utente e password (vedi manuale)


![Bibus – Figura 4](/img/ocpp-ladestationen-bibus/04.png)

5\. Assegna un nome alla Bibus Charge Box. ⚠️ Nota: il nome non deve contenere spazi.

![Bibus – Figura 5](/img/ocpp-ladestationen-bibus/05.png)

6\. Inserisci l'URL OCPP del tuo account in Sistema centrale

![Bibus – Figura 6](/img/ocpp-ladestationen-bibus/06.png)

⚠️ Importante: devi impostare l'intervallo di misurazione dei valori misurati (ad es. su 60 )

![Bibus – Figura 7](/img/ocpp-ladestationen-bibus/07.png)

## Impostazione avanzata tramite strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio la potenza di ricarica attuale nell'app. 



Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![Bibus – Figura 8](/img/ocpp-ladestationen-bibus/08.png)

![Bibus – Figura 9](/img/ocpp-ladestationen-bibus/09.png)
