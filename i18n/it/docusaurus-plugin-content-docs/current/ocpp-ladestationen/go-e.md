---
title: 'Go-E'
slug: '/ocpp-ladestationen/go-e'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Go-E'
---
<div className="row">
<div className="col col--8">

## Guida all'integrazione nel backend

Le stazioni Go-E possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire facilmente in autonomia le condizioni d'uso delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo.

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![Go-E – Figura 1](/img/ocpp-ladestationen-go-e/01.jpg)

</div>
</div>

[go-e Wallbox](https://go-e.com/de-ch/)

### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Guida all'integrazione: collegare le stazioni di ricarica go-e a eCarUp

<Video src="VO0Kms8qsqo" title="Video YouTube, guida all'integrazione: collegare le stazioni di ricarica go-e a eCarUp" />

## Integrazione della stazione di ricarica Go-e

⚠️ IMPORTANTE: 

- Il firmware della stazione deve essere almeno alla versione 055.0 

- Se attivi la stazione di ricarica con una tessera RFID, la sessione di ricarica deve essere terminata dal lato del veicolo. 

### Passaggi preliminari per l'integrazione della Go-E

<div className="row">
<div className="col col--8">

1.  Installa sul tuo smartphone l'app Go-E Charger

2.  Collega ora la tua stazione di ricarica all'app (configurazione tramite hotspot o Internet)

3.  Non appena la stazione di ricarica è visibile nell'app, effettua le seguenti impostazioni.

</div>
<div className="col col--4 text--center">

![Go-E – Figura 2](/img/ocpp-ladestationen-go-e/02.png)

</div>
</div>

<div className="row">
<div className="col col--6">

- il firmware verificato nella nuova panoramica è 56.8

4\. Vai alle impostazioni

</div>
<div className="col col--6 text--center">

![Go-E – Figura 3](/img/ocpp-ladestationen-go-e/03.png)

</div>
</div>

4.1 Impostazioni 

![Go-E – Figura 4](/img/ocpp-ladestationen-go-e/04.png)

5. Seleziona Controllo accessi

![Go-E – Figura 5](/img/ocpp-ladestationen-go-e/05.png)

6\. Autenticazione richiesta e salva

![Go-E – Figura 6](/img/ocpp-ladestationen-go-e/06.png)

<div className="row">
<div className="col col--6">

7\. Torna alla panoramica e seleziona Connessione. Clicca su OCPP

</div>
<div className="col col--6 text--center">

![Go-E – Figura 7](/img/ocpp-ladestationen-go-e/07.png)

</div>
</div>

8.  Seleziona Server OCPP

<div className="row">
<div className="col col--6 text--center">

![Go-E – Figura 8](/img/ocpp-ladestationen-go-e/08.png)

</div>
<div className="col col--6 text--center">

![Go-E – Figura 9](/img/ocpp-ladestationen-go-e/09.png)

</div>
</div>

9.   

- Per Host: [www.ecarup.com](http://www.ecarup.com)

- Percorso: /api/OCPP16/yourIDxxxx/ID 

⚠️Importante: alla fine dell'URL una / e l'ID oppure un'aggiunta qualsiasi

Attenzione: in caso di più stazioni, non lasciare la stessa aggiunta. 

- Salva la modifica e riavvia la stazione. 

## Layout precedente

4\. Vai alle impostazioni

![Go-E – Figura 10](/img/ocpp-ladestationen-go-e/10.png)

5\. Seleziona Controllo accessi

![Go-E – Figura 11](/img/ocpp-ladestationen-go-e/11.png)

6\. Autenticazione richiesta e salva

![Go-E – Figura 12](/img/ocpp-ladestationen-go-e/12.png)

7\. Torna alla panoramica e seleziona Internet

![Go-E – Figura 13](/img/ocpp-ladestationen-go-e/13.png)

8.  Verifica la versione del firmware!

9\. Seleziona OCPP

![Go-E – Figura 14](/img/ocpp-ladestationen-go-e/14.png)

10.  Attiva OCPP 1.6

11. Aggiungi l'URL dal tuo account

<div className="row">
<div className="col col--6 text--center">

![Go-E – Figura 15](/img/ocpp-ladestationen-go-e/15.png)

</div>
<div className="col col--6 text--center">

![Go-E – Figura 16](/img/ocpp-ladestationen-go-e/16.png)

</div>
</div>

12\. dopo l'URL aggiungi obbligatoriamente / (&) un'aggiunta qualsiasi

13\. Salva e riavvia

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Go-E – Figura 17](/img/ocpp-ladestationen-go-e/17.png)

![Go-E – Figura 18](/img/ocpp-ladestationen-go-e/18.png)
