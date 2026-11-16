---
title: 'Heidelberg Amperfied'
slug: '/ocpp-ladestationen/heidelberg-amperfied'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Heidelberg Amperfied'
---
<div className="row">
<div className="col col--6">

## Guida all'integrazione nel backend

Le stazioni Heidelberg possono essere integrate in pochi passi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Decidi tu chi può ricaricare, quando e a quale prezzo.

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--6 text--center">

![Heidelberg Amperfied – Figura 1](/img/ocpp-ladestationen-heidelberg-amperfied/01.png)

</div>
</div>

[Public Connect Heidelberg](https://www.amperfied.de/)

### Passi preliminari per l'integrazione delle stazioni OCPP nel cloud eCarUp

1.  Le tue stazioni di ricarica sono installate e il tuo computer o smartphone si trova nella stessa rete della stazione di ricarica

2.  Hai creato un account nell'[app eCarUp](https://web.ecarup.com/elektroauto-lade-app/)

3.  Accedi con i dati del tuo account al portale web di eCarUp e, nel menu a sinistra, sotto Stazioni (Stationen) clicca sulla scheda "OCPP"

4.  Copia l'URL negli appunti e inseriscilo nell'interfaccia web della stazione desiderata.

## Integrazione della Public Connect

Versione firmware testata: 5.21.2-13536

### Interfaccia web

### Backend

- Seleziona il tipo di connessione desiderato

- Il ChargePoint ID può essere modificato, tuttavia la stazione appare sempre nel portale eCarUp con il suo numero di serie

- Seleziona OCPP-j 1.6

- Inserisci l'URL completo del tuo account nel campo Websocket.

- Salva e riavvia

![Heidelberg Amperfied – Figura 2](/img/ocpp-ladestationen-heidelberg-amperfied/02.png)

### Contatore di energia

- Nel contatore di energia è possibile ridurre l'intervallo di upload della trasmissione della potenza. Questo stabilisce a quale intervallo la stazione ci invia i dati di consumo (kW). 

![Heidelberg Amperfied – Figura 3](/img/ocpp-ladestationen-heidelberg-amperfied/03.png)

## Impostazione avanzata tramite strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30-60s. Solo così possiamo calcolare e visualizzare meglio la potenza di ricarica attuale nell'app. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Heidelberg Amperfied – Figura 4](/img/ocpp-ladestationen-heidelberg-amperfied/04.png)

![Heidelberg Amperfied – Figura 5](/img/ocpp-ladestationen-heidelberg-amperfied/05.png)
