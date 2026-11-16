---
title: 'Partino'
slug: '/ocpp-ladestationen/partino'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Partino'
---
![Partino – Figura 1](/img/ocpp-ladestationen-partino/01.jpg)

[Partino Vool](https://www.partino.ch/de/angebot/e-ladestationen/vool/)

![Partino – Figura 2](/img/ocpp-ladestationen-partino/02.png)

[Partino DC30](https://www.partino.ch/de/angebot/e-ladestationen/partino-x-ecotap/)

![Partino – Figura 3](/img/ocpp-ladestationen-partino/03.png)

[Partino Ecotap](https://www.partino.ch/de/angebot/e-ladestationen/partino-x-ecotap/)

## Guida all'integrazione nel backend

Le stazioni Partino ed Ecotap possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel Suo account, può definire autonomamente e senza complicazioni le condizioni d'uso delle Sue stazioni (prezzi, utenti, orari disponibili ecc.). È Lei a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal) 

- Scopra di più sulle nostre [funzioni Premium](/funktionen)


### Integrazione di stazioni OCPP

1.  Apra il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettui l'accesso con i dati del Suo account.

2.  Nel menu a sinistra, clicchi sulla scheda "Stazioni" ("Stationen").

3.  Selezioni la scheda "OCPP".

4.  Copi l'URL negli appunti.

5.  Inserisca l'URL nel modulo di richiesta indicato più sotto. 


## Partino Vool

- versione firmware testata v1.9.16 


<Video src="pRN2F2iiNzk" title="Video YouTube, guida all'integrazione della stazione di ricarica Partino /Vool nel backend eCarUp" />

### Video guida all'integrazione delle stazioni di ricarica Partino Vool nel backend eCarUp

- Per farlo, installi l'app Vool


![Partino – Figura 4](/img/ocpp-ladestationen-partino/04.png)

1.  Collegare la stazione tramite Bluetooth


![Partino – Figura 5](/img/ocpp-ladestationen-partino/05.png)

2.



![Partino – Figura 6](/img/ocpp-ladestationen-partino/06.png)

3.. Configurare il caricatore



![Partino – Figura 7](/img/ocpp-ladestationen-partino/07.png)

4\. Configurare le impostazioni di base

![Partino – Figura 8](/img/ocpp-ladestationen-partino/08.png)

5\. Clicchi su "Mostra impostazioni avanzate" ("Erweiterte Einstellungen anzeigen")

![Partino – Figura 9](/img/ocpp-ladestationen-partino/09.png)

6\. Aggiunga il Suo URL eCarUp e salvi

![Partino – Figura 10](/img/ocpp-ladestationen-partino/10.png)

### Trasmettere l'URL eCarUp a Partino (in caso di utilizzo del Floatbrige)

Per l'integrazione delle stazioni Partino (in caso di utilizzo del Floatbrige) nel nostro backend, al momento è ancora necessario il supporto della ditta [Partino](https://www.partino.ch/de/). Partino si occupa dell'ultimo passaggio di configurazione e assegna i Suoi punti di ricarica all'account eCarUp corretto (tramite l'URL OCPP) che ha ricevuto durante la preparazione. A tal fine, trasmetta a Partino l'URL e i numeri di serie della stazione di ricarica tramite il modulo sottostante. 

[Modulo di richiesta Partino](https://www.partino.ch/wp-content/uploads/Partino_Anmeldeformular_eCarUp.pdf).

![Partino – Figura 11](/img/ocpp-ladestationen-partino/11.png)

## Ecotap

- versione firmware testata 506.32R.33


### Trasmettere l'URL OCPP a Partino

Per l'integrazione delle stazioni Ecotap nel nostro backend, al momento è ancora necessario il supporto della ditta [Partino](https://www.partino.ch/de/). Partino si occupa dell'ultimo passaggio di configurazione e assegna i Suoi punti di ricarica all'account eCarUp corretto (tramite l'URL OCPP) che ha ricevuto durante la preparazione. A tal fine, trasmetta a Partino l'URL e i numeri di serie della stazione di ricarica tramite il modulo sottostante. 

[Modulo di richiesta Partino](https://www.partino.ch/wp-content/uploads/Partino_Anmeldeformular_eCarUp.pdf).

## Impostazione avanzata tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 



Può modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![Partino – Figura 12](/img/ocpp-ladestationen-partino/12.png)

![Partino – Figura 13](/img/ocpp-ladestationen-partino/13.png)
