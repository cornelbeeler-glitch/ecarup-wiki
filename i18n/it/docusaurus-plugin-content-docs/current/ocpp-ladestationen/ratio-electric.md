---
title: 'Ratio Electric'
slug: '/ocpp-ladestationen/ratio-electric'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Ratio Electric'
---
![Ratio Electric – Figura 1](/img/ocpp-ladestationen-ratio-electric/01.jpg)

[IO7](https://elektroscout.ch/produkt/doppellader-fuer-den-oeffentlichen-bereich-mit-ocpp/)

![Ratio Electric – Figura 2](/img/ocpp-ladestationen-ratio-electric/02.jpg)

[IO6 MID Pro](https://elektroscout.ch/produkt/io6/)

## Guida all'integrazione nel backend

Le stazioni Ratio Electric possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire in modo semplice e autonomo le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Decidi tu chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)


### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) e accedi con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.


## Integrazione di IO7 e IO6 pro MID

Importante: versione firmware testata , 1.5.4  (IO7)

Importante: versione firmware testata , 3.13.1  (IO6)



- Per l'integrazione della tua IO7 rivolgiti all'azienda [Elektroscout](https://elektroscout.ch/)

- info@elektroscout.ch


## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 



Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![Ratio Electric – Figura 3](/img/ocpp-ladestationen-ratio-electric/03.png)

![Ratio Electric – Figura 4](/img/ocpp-ladestationen-ratio-electric/04.png)
