---
title: 'Eco-Flow'
slug: '/ocpp-ladestationen/eco-flow'
description: 'Le stazioni Eco-Flow possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp.'
sidebar_label: 'Eco-Flow'
---
![Eco-Flow – Figura 1](/img/ocpp-ladestationen-eco-flow/01.jpg)

Le stazioni Eco-Flow possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)


### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP" ("OCPP").

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.


## Integrazione della PowerPulse

### Passaggi preliminari per l'integrazione della PowerPulse

1.  Installa l'app Eco-Flow sul tuo smartphone

2.  Collega ora la tua stazione di ricarica all'app 

3.  Non appena la stazione di ricarica è rilevabile nell'app, effettua le seguenti impostazioni. 


### ⚠️ Importante

1.  La stazione è stata testata con successo con la versione firmware v1.0.9.10

2.  La versione dell'app Eco-Flow testata è la v6.13.9

3.  Attualmente funzionano solo le tessere RFID di Eco-Flow


![Eco-Flow – Figura 2](/img/ocpp-ladestationen-eco-flow/02.png)

1.  Seleziona la stazione collegata.


![Eco-Flow – Figura 3](/img/ocpp-ladestationen-eco-flow/03.png)

2\. Clicca sull'icona in alto a destra

![Eco-Flow – Figura 4](/img/ocpp-ladestationen-eco-flow/04.png)

3\. Seleziona il controllo OCPP

![Eco-Flow – Figura 5](/img/ocpp-ladestationen-eco-flow/05.png)

4\. Attiva il controllo OCPP

![Eco-Flow – Figura 6](/img/ocpp-ladestationen-eco-flow/06.png)

5\. Imposta il fornitore di servizi OCPP su inserimento manuale. 

6\. Aggiungi il tuo URL eCarUp

7\. Salva.

## Impostazione avanzata tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 



Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![Eco-Flow – Figura 7](/img/ocpp-ladestationen-eco-flow/07.png)

![Eco-Flow – Figura 8](/img/ocpp-ladestationen-eco-flow/08.png)
