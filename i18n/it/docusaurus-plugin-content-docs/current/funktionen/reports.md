---
title: 'Report'
slug: '/funktionen/reports'
description: 'Per utilizzare i report ti serve una licenza eCarUp Premium.'
sidebar_label: 'Report'
---
Per utilizzare i report ti serve una licenza eCarUp Premium.

[Videoguida Report](#videoguida-report)

[Funzioni](#funzioni)

[Creazione di report](#creazione-di-report)

[Report della stazione](#report-della-stazione)

[Report utente](#report-utente)

[Formati di file supportati](#formati-di-file-supportati)

[Report utente con calcolo del prezzo](#report-utente-con-calcolo-del-prezzo)

[Report della stazione CSV (esteso)](#report-della-stazione-csv-esteso)

## Videoguida Report

<Embed src="https://share.synthesia.io/embeds/videos/fd7eeb3e-5aeb-4453-80ca-223ec4f5f0ad" aspect="1.781" title="Report" />

### Funzioni

- Analizzare il consumo per stazione di ricarica su un periodo a scelta

- Analizzare il consumo per utente (se il conducente è noto) su un periodo a scelta

- Indicare energia e costi

- Report in PDF, CSV o CSV esteso

- Configurare autonomamente per ogni utente il prezzo per kWh e la durata di parcheggio, IVA inclusa


### Creazione di report

Visita [www.ecarup.com](https://www.ecarup.com/) e fai clic su Login in alto a destra. Accedi poi con i tuoi dati di login. Arrivi alla panoramica delle stazioni. Controlla che tutti i punti di ricarica per i quali vuoi generare i report siano già installati nel tuo account. 

### Report della stazione

Seleziona uno o più punti di ricarica. Fai poi clic in basso a sinistra su Crea (Erstellen). Nella finestra pop-up puoi ora stabilire l'aliquota IVA e il periodo desiderato. Scegli poi il formato desiderato – attualmente sono disponibili PDF, CSV o CSV esteso. Fai quindi clic sul pulsante. Tutte le sessioni di ricarica di tutte le stazioni selezionate vengono elencate in ordine cronologico. Da sinistra a destra vedi il nome della stazione, la data di inizio, la durata della ricarica in secondi, la data di fine, un numero utente anonimizzato, l'energia prelevata, il prezzo dell'energia, il tempo di parcheggio, il prezzo del tempo di parcheggio e il totale. Nel report della stazione (CSV esteso) vengono indicati anche gli utenti speciali + informazioni aggiuntive (vedi l'articolo Report della stazione CSV esteso). Importante:

### Report utente

Con la stessa procedura si possono creare anche report utente. Questo mostra i dati di consumo di un determinato utente per uno o più punti di ricarica. È adatto in particolare per le stazioni di ricarica in pool, dove più utenti condividono più stazioni eCarUp. Seleziona di nuovo i punti di ricarica desiderati ed effettua le impostazioni nella finestra pop-up. Il report utente può essere creato solo per account conducente che hai definito come «utente speciale» («Speziellen Benutzer») per le tue stazioni. Facendo clic sul pulsante PDF o CSV vengono elencati solo i dati di consumo di questo account per tutte le stazioni di ricarica selezionate (sommati). In alternativa si può calcolare un prezzo anche per un utente "gratuito". 

### Formati di file supportati

Un'esportazione CSV estesa permette di elaborare i dati nella tua soluzione software. In alternativa, il sistema eCarUp offre interfacce aperte per lo scambio automatizzato di dati (API, MSCONS, IS-E). La guida all'API di eCarUp si trova qui: [API versione 1](/funktionen/ecarup-api)

## Report utente con calcolo del prezzo

1.  Gli utenti registrati possono creare report su un determinato periodo. In questo caso l'utente viene indicato nel PDF o CSV con il prezzo predefinito, senza modifiche. 

2.  Per gli utenti gratuiti è possibile creare successivamente un report con prezzo e valuta. In questo caso il prezzo originale viene sovrascritto e il calcolo avviene con il prezzo da te definito.


Esempio: per i collaboratori che ricaricano gratuitamente è possibile calcolare un prezzo a posteriori. L'incasso resta però a carico del gestore della stazione. 

Importante: attualmente il prezzo calcolato non viene indicato nel PDF & CSV. 

![Report – Figura 1](/img/funktionen-reports/01.png)

## Esempi:

### Report della stazione in PDF

<Embed src="https://drive.google.com/file/d/1h6JtWuyjq3Y1vy69zqWrFGFOtr8C3fJd/preview" aspect="1.350" title="Drive, eCarUp Station Report.pdf" />

eCarUp Station Report.pdf

### Report utente in PDF

@@EMBED|url|https://drive.google.com/file/d/1hw1NTbWFySg5uk_KcQLqwZpKIcOzAZr_/preview|1.350|Drive, eCarUp report_user_demo@ecarup.com_2023-09-20.pdf@@

eCarUp report\_user\_demo@ecarup.com\_2023-09-20.pdf

## Report della stazione CSV (esteso)

Il report della stazione CSV esteso contiene le seguenti informazioni:



- Station name: nome della stazione di ricarica con numero di serie

- Start date: momento d'inizio della ricarica 

- Durations: durata della sessione di ricarica in secondi

- End date: fine della sessione di ricarica 

- User: qui viene indicato chi ha ricaricato alla stazione.

    - Viene mostrato un indirizzo e-mail se per la stazione è registrato un utente limitato. Ciò può essere fatto tramite la [Gestione utenti avanzata](/funktionen/erw-nutzerverwaltung) oppure direttamente sulla stazione in "Stazione / Definisci utenti" ("Station / Benutzer Definieren")

    - Vengono mostrati caratteri criptici (ad es. LshD4G0WaxPMH++hv55o) se un utente non noto ha ricaricato a una stazione di ricarica pubblica.

- Provider: indica con che cosa si ricarica.

    - Unknown: compare per tutte le transazioni precedenti al 06.05.2024

    - Ecarup: se la ricarica è stata effettuata con un account eCarUp.

    - Hubject: se la ricarica è stata avviata tramite un fornitore Hubject (roaming).

- Mode: come è avvenuta l'autenticazione

    - Car ID, attualmente solo in combinazione con la stazione di ricarica [Pico](/smart-me-pico).

    - Cloud (attivazione tramite app, portale web, Instant Payment, API o sessione di ricarica automatica)

    - Carta RFID

    - Unknown (prima dell'introduzione dell'aggiornamento, 06.05.2024)

- Identifier: il numero della carta RFID, viene mostrato solo se la ricarica è stata avviata tramite RFID. In tutti gli altri casi è vuoto.

- Identifier Name: il nome della carta RFID, se la ricarica è stata avviata tramite RFID. In tutti gli altri casi è vuoto.

- Payment Status: stato del pagamento, Paid = pagato, notCharged = importo troppo basso, Failed = non è possibile riscuotere il denaro dal cliente (per saperne di più consulta il seguente [link](/fahrer/fehlgeschlagene-zahlung)), Unknown = compare per tutte le transazioni precedenti al 13.06.2024

- Energy price ( CHF )  Il prezzo definito per l'elettricità

- Parking price (CHF) Il prezzo per il parcheggio 

- Total (CHF o EUR) È il totale che riceve il proprietario della stazione. (90%) Scopri di più sul [conteggio.](/stationsbetreiber/abrechnen-auszahlen) 


Importante: tutte le informazioni aggiuntive (e-mail, ID tag e nome della carta RFID) vengono elencate solo se l'utente è noto e registrato presso il gestore della stazione. 

### Report della stazione esteso in CSV

![Report – Figura 2](/img/funktionen-reports/02.png)

## Nota:

### Ops (Hoppla)

Si è verificato un errore imprevisto. Riprova. (Es ist etwas Unerwartetes passiert. Bitte versuchen Sie es erneut.)

- Questo può accadere con il tipo di report Utente. In questo caso viene selezionato un utente che nel periodo scelto non ha avuto alcuna sessione di ricarica.




![Report – Figura 3](/img/funktionen-reports/03.png)
