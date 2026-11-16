---
title: 'Schneider Electric'
slug: '/ocpp-ladestationen/schneider-electric'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Schneider Electric'
---
![Schneider Electric – Figura 1](/img/ocpp-ladestationen-schneider-electric/01.jpg)

[EVlink Pro AC](/ocpp-ladestationen/schneider-electric)

![Schneider Electric – Figura 2](/img/ocpp-ladestationen-schneider-electric/02.jpg)

[EVlink Pro DC](/ocpp-ladestationen/schneider-electric)

## Guida all'integrazione nel backend

Le stazioni Schneider Electric possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso e senza complicazioni le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Decidi tu chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e inserisci l'URL copiato.

## Integrazione delle stazioni di ricarica Schneider Electric

### EVlink Pro AC

### Integrazione della EVlink AC Pro

Per poter accedere alla stazione tramite smartphone sono necessari i seguenti passaggi:

- Installa sul tuo smartphone l'app "eSetup" di Schneider Electric;

- Crea un account utente nell'app.

![Schneider Electric – Figura 3](/img/ocpp-ladestationen-schneider-electric/03.png)

### Passaggio 1

- Selezionare EVlink Pro AC

![Schneider Electric – Figura 4](/img/ocpp-ladestationen-schneider-electric/04.jpg)

### Passaggio 2

- Viene avviata la ricerca

![Schneider Electric – Figura 5](/img/ocpp-ladestationen-schneider-electric/05.jpg)

### Passaggio 3

- Selezionare la stazione di ricarica

![Schneider Electric – Figura 6](/img/ocpp-ladestationen-schneider-electric/06.jpg)

### Passaggio 4

<div className="row">
<div className="col col--6">

- Inserire il codice PIN (assegnato durante la registrazione)

</div>
<div className="col col--6 text--center">

![Schneider Electric – Figura 7](/img/ocpp-ladestationen-schneider-electric/07.jpg)

</div>
</div>

### Passaggio 5

- Selezionare Configurazione

![Schneider Electric – Figura 8](/img/ocpp-ladestationen-schneider-electric/08.jpg)

### Passaggio 6

- Selezionare Supervisione per l'impostazione OCPP

![Schneider Electric – Figura 9](/img/ocpp-ladestationen-schneider-electric/09.png)

### Passaggio 7

![Schneider Electric – Figura 10](/img/ocpp-ladestationen-schneider-electric/10.jpg)

- Supervisione ON

- Inserire l'URL OCPP normale dal proprio account

Esempio: ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxxxxx

- Selezionare Autenticazione richiesta (Pubblica)

### Passaggio 8

- Effettuare le impostazioni di rete

![Schneider Electric – Figura 11](/img/ocpp-ladestationen-schneider-electric/11.png)

### Passaggio 9 (opzionale)

- Definire la modalità offline

![Schneider Electric – Figura 12](/img/ocpp-ladestationen-schneider-electric/12.jpg)

### Passaggio 10

- Salvare le impostazioni e riavviare la stazione. 

## EVlink Pro DC

Vuoi integrare la stazione di ricarica DC di Schneider con eCarUp?

- Invia il tuo URL OCPP al seguente indirizzo e-mail di Schneider: [services@ch.schneider-electric.com](mailto:services@ch.schneider-electric.com)

- Schneider Electric ti contatterà a breve. 

## EVlink Smart Wallbox & EVlink Parking

### Integrazione della EVlink Smart Wallbox

Collegarsi alla stazione tramite Ethernet

1.  Assegna in modo statico al tuo PC il seguente indirizzo IP: 192.168.0.x (x è un numero intero compreso tra 241 e 249)

2.  Subnet mask: 255.255.255.0 + nessun gateway predefinito, nessun DNS e nessun proxy

3.  Apri il tuo browser web e inserisci http://192.168.0.102 nella barra degli indirizzi.

4.  Nome utente ( admin ) , password ( ADMIN ) 

## Interfaccia web

### General Settings

1.  Charging Station Name: rimuovere tutti gli spazi

2.  Station type su Supervised

3.  Authentication done by Supervision 

![Schneider Electric – Figura 13](/img/ocpp-ladestationen-schneider-electric/13.png)

### Supervision

1.  Impostare OCPP Version su 1.6

2.  Supervision URL: inserire l'URL completo dal proprio account

3.  Rinominare Charging station ID + senza spazi. 

Infine riavviare la stazione!

![Schneider Electric – Figura 14](/img/ocpp-ladestationen-schneider-electric/14.png)

### Sistema di gestione del carico EVlink

Collegarsi all'LMS tramite Ethernet ETH1

1.  Assegna in modo statico al tuo PC il seguente indirizzo IP: 192.168.0.x (x è un numero intero compreso tra 241 e 249)

2.  Subnet mask: 255.255.255.0 + nessun gateway predefinito, nessun DNS e nessun proxy

3.  Apri il tuo browser web e inserisci http://192.168.0.128 nella barra degli indirizzi.

4.  Nome utente ( admin ) , password ( ADMIN ) 

### Remote Supervision

1.  Enable su "ON"

2.  Remote supervision URL address: inserire l'URL eCarUp completo dall'account.

![Schneider Electric – Figura 15](/img/ocpp-ladestationen-schneider-electric/15.png)

### Impostazioni avanzate

- Admin --> Avanzate\--> Impostazioni avanzate  --> Attiva numerazione dei punti di ricarica \--> ON

⚠️ Attenzione: attivare questa funzione solo per stazioni con 2 prese. 

![Schneider Electric – Figura 16](/img/ocpp-ladestationen-schneider-electric/16.png)

### Charging Stations

1.  È obbligatorio creare una zona in cui poter aggiungere la stazione. 

2.  Rinominare obbligatoriamente la Box Identity

![Schneider Electric – Figura 17](/img/ocpp-ladestationen-schneider-electric/17.png)

### Controllo finale

1.  La stazione dovrebbe ora ricevere l'URL di supervisione dall'LMS 

2.  L'ID della stazione di ricarica dovrebbe essere identico

![Schneider Electric – Figura 18](/img/ocpp-ladestationen-schneider-electric/18.png)

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Schneider Electric – Figura 19](/img/ocpp-ladestationen-schneider-electric/19.png)

![Schneider Electric – Figura 20](/img/ocpp-ladestationen-schneider-electric/20.png)
