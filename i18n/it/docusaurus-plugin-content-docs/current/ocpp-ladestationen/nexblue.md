---
title: 'NEXBLUE'
slug: '/ocpp-ladestationen/nexblue'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'NEXBLUE'
---
## Guida all'integrazione nel backend

Le stazioni NEXBLUE possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal) 

- Scopri di più sulle nostre [funzioni Premium](/funktionen)


![NEXBLUE – Figura 1](/img/ocpp-ladestationen-nexblue/01.png)

[NEXBLUE](https://nexblue.com/de)

### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua il login con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".


 1. Link ws senza Basic Auth: testato e funzionante

2\. wss senza Basic Auth: testato e funzionante

3\. wss con Basic Auth: testato e funzionante

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.


## Integrazione della NEXBLUE

- "firmwareVersion" testata:"03.07.36" 


Integrazione tramite il portale web

<Embed src="https://demo.arcade.software/ZMABeR5jjEkvl6uWrWsV?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" aspect="1.705" title="Wiki - NEXBLUE" />

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 



Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![NEXBLUE – Figura 2](/img/ocpp-ladestationen-nexblue/02.png)

![NEXBLUE – Figura 3](/img/ocpp-ladestationen-nexblue/03.png)
