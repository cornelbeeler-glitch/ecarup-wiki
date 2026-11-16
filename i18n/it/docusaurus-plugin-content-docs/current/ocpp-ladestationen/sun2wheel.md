---
title: 'sun2wheel'
slug: '/ocpp-ladestationen/sun2wheel'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'sun2wheel'
---
<div className="row">
<div className="col col--6">

## Guida all'integrazione nel backend

Le stazioni sun2wheel possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari di disponibilità ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo.

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--6 text--center">

![sun2wheel – Figura 1](/img/ocpp-ladestationen-sun2wheel/01.png)

</div>
</div>

[Tiny Wallbox](https://sun2wheel.com/produkte/)

### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e inserisci l'URL copiato.

## Integrazione della Sun2Wheel Tiny Wallbox

Importante: versione firmware testata, V00.50.02

- Collega la wallbox tramite LAN

- La Tiny Wallbox ottiene un indirizzo IP che puoi raggiungere tramite il browser web. (L'indirizzo IP predefinito della wallbox è 192.168.100.199)

- Inserisci i dati di accesso

- Successivamente viene visualizzata la seguente panoramica (immagine sotto)

- Alla voce OCPP-Server puoi aggiungere l'URL del tuo account eCarUp e salvarlo 

- Dopo un riavvio, la stazione compare nel tuo account eCarUp

![sun2wheel – Figura 2](/img/ocpp-ladestationen-sun2wheel/02.png)

## Integrazione della one-way-guest-100

Per poter integrare questa stazione di ricarica, consulta la seguente guida all'integrazione del produttore dell'hardware:

- [Guida](/ocpp-ladestationen/evtec)

## Impostazione avanzata tramite strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![sun2wheel – Figura 3](/img/ocpp-ladestationen-sun2wheel/03.png)

![sun2wheel – Figura 4](/img/ocpp-ladestationen-sun2wheel/04.png)
