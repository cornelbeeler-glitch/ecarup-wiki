---
title: 'easee'
slug: '/ocpp-ladestationen/easee'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'easee'
---
<div className="row">
<div className="col col--8">

## Guida all'integrazione nel backend

Le stazioni easee possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari di disponibilità ecc.). Decidi tu chi può ricaricare, quando e a quale prezzo.

- Requisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![easee – Figura 1](/img/ocpp-ladestationen-easee/01.jpg)

</div>
</div>

[easee](https://easee.com/de/)

### Integrazione di stazioni OCPP

Informazioni generali sulla [messa in servizio di una stazione OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station) 

Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

1.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

2.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

3.  Seleziona la scheda "OCPP".

4.  Copia l'URL negli appunti. 

    1.  Link ws senza Basic Auth: testato e funzionante

    2.  wss senza Basic Auth: testato e funzionante

    3.  wss con Basic Auth: non testato

5.  Vai all'interfaccia web della stazione desiderata e inserisci l'URL copiato.

## Collegamento della stazione di ricarica easee

### Importante:

- easee Charge Max può essere attivata con eCarUp solo tramite la tessera RFID. Tramite l'app non è possibile a causa di limitazioni tecniche. 

### La stazione easee può inoltre trasmettere i valori a 15 minuti a smart-me. Scopri di più alla voce Importazione dati a 15 minuti.

<Video src="wg6LeZTT1NQ" title="Video YouTube, guida all'integrazione delle stazioni di ricarica easee nel backend eCarUp" />

### Video guida all'integrazione delle stazioni di ricarica easee nel backend eCarUp

## Integrazione nel portale eCarUp

### Portale web di easee

Tramite il seguente [LINK](https://portal.easee.com/apps/any/open?action=17&item=%7Bovar%3A+2%2C+oid%3A+15%7D) puoi inserire direttamente l'URL di eCarUp nel portale web di easee. 

1.  Apri il link nel browser

2.  Seleziona la sede desiderata

3.  Se il gestore tecnico non è ancora impostato su smart-me/eCarUp, conferma con SÌ. 

4.  Seleziona e modifica il robot di ricarica

5.  Qui puoi inserire l'URL OCPP del tuo account eCarUp. 

6.  Salva.

7.  Dopo circa 15 minuti la stazione appare automaticamente nel portale eCarUp.

Nota: le seguenti varianti funzionano.

- ws://www.ecarup.com/api/Ocpp16/4FEF6CFXXXXXX

- wss://www.ecarup.com/api/Ocpp16/4FEF6CFXXXXXXX

- 4B49FXXXXXXX

![easee – Figura 2](/img/ocpp-ladestationen-easee/02.png)

![easee – Figura 3](/img/ocpp-ladestationen-easee/03.png)

![easee – Figura 4](/img/ocpp-ladestationen-easee/04.png)

### App easee

1.  Scansiona il codice QR con il tuo smartphone

2.  Vieni reindirizzato direttamente al tuo account easee. 

3.  Anche lì puoi selezionare la sede desiderata

4.  Aggiungi l'URL di eCarUp. 

5.  Salva. 

6.  Dopo circa 15 minuti la stazione appare automaticamente nel portale eCarUp.

Nota: le seguenti varianti funzionano.

- ws://www.ecarup.com/api/Ocpp16/4FEF6CFXXXXXX

- wss://www.ecarup.com/api/Ocpp16/4FEF6CFXXXXXXX

- 4B49FXXXXXXX

<div className="row">
<div className="col col--6 text--center">

![easee – Figura 5](/img/ocpp-ladestationen-easee/05.png)

</div>
<div className="col col--6 text--center">

![easee – Figura 6](/img/ocpp-ladestationen-easee/06.jpg)

</div>
</div>

### Link

- [Registrazione del webinar sulle stazioni di ricarica easee nel backend eCarUp](https://web.ecarup.com/webinar-easee-ladestationen-mit-backend-von-ecarup/)

- [Funzioni della wallbox easee nel backend eCarUp](https://web.ecarup.com/backend/easee-backend/)

- [Importazione dati a 15 minuti](/funktionen/15-minuten-datenimport) 

- [Codice QR per l'URL OCPP](https://drive.google.com/file/d/1G5iU7GsE51cgZ9RZixxFC0FLfuJDfGT9/view?usp=sharing)

## Senza autenticazione + ricarica offline

<div className="row">
<div className="col col--8">

Collega la stazione easee a eCarUp come di consueto tramite l'installazione. (Passaggi 1-7)

Non appena la stazione è visibile in eCarUp, vai allo strumento di manutenzione. ([Link](/funktionen/wartung))

Lì seleziona la stazione desiderata, clicca sui 3 puntini e scegli "Change Configuration"

</div>
<div className="col col--4 text--center">

![easee – Figura 7](/img/ocpp-ladestationen-easee/07.png)

</div>
</div>

1.  Seleziona "Comando personalizzato" ("Benutzerdefinierten Befehl")

2.  Custom Key = freecharging

3.  Value = true

4.  Set

In questo contesto dobbiamo prima comunicare alla stazione che può consentire la ricarica libera.

![easee – Figura 8](/img/ocpp-ladestationen-easee/08.png)

1.  Clicca di nuovo su "Change Configuration"

2.   "Comando personalizzato" ("Benutzerdefinierten Befehl")

3.  Custom Key = rfidtagfreecharging

4.  Value = XXXX (un token RFID che assegni a un utente in eCarUp)

5.  Set

In questo contesto dobbiamo comunicare alla stazione quale token RFID deve essere inviato all'avvio della ricarica. Vantaggio: la sessione viene registrata in eCarUp. 

![easee – Figura 9](/img/ocpp-ladestationen-easee/09.png)

## Impostazione avanzata tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![easee – Figura 10](/img/ocpp-ladestationen-easee/10.png)

![easee – Figura 11](/img/ocpp-ladestationen-easee/11.png)
