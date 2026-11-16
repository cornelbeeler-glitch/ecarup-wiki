---
title: 'Kempower'
slug: '/ocpp-ladestationen/kempower'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Kempower'
---
![Kempower – Figura 1](/img/ocpp-ladestationen-kempower/01.jpg)

[Kempower Station Charger](https://kempower.com/de/solution/kempower-station-charger/)

![Kempower – Figura 2](/img/ocpp-ladestationen-kempower/02.jpg)

[Kempower Satellite](https://kempower.com/de/solution/kempower-satellite/)

![Kempower – Figura 3](/img/ocpp-ladestationen-kempower/03.jpg)

[Kempower Movable Charger](https://kempower.com/de/solution/kempower-movable-charger/)

## Guida all'integrazione nel backend

Le stazioni Kempower possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari di disponibilità ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)


### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.


## Integrazione della stazione di ricarica Kempower

Importante: versione firmware testata, 3.2.6

### Passo 1

Verifica che la tua stazione sia online e comunichi con il portale Kempower. 

- [https://kempower.io/](https://kempower.io/)


### Passo 2

1.  Verifica che la stazione disponga anche di una connessione Internet attiva

2.  Clicca sull'ingranaggio in alto a destra.


![Kempower – Figura 4](/img/ocpp-ladestationen-kempower/04.png)

### Passo 3

1.  Clicca su Connectivity e attiva OCPP

2.  Aggiungi il tuo URL eCarUp e clicca su salva. 


![Kempower – Figura 5](/img/ocpp-ladestationen-kempower/05.png)

### Passo 4

1.  Infine, verifica le impostazioni di autorizzazione e clicca su salva.


![Kempower – Figura 6](/img/ocpp-ladestationen-kempower/06.png)

## Impostazione avanzata tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 



Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![Kempower – Figura 7](/img/ocpp-ladestationen-kempower/07.png)

![Kempower – Figura 8](/img/ocpp-ladestationen-kempower/08.png)
