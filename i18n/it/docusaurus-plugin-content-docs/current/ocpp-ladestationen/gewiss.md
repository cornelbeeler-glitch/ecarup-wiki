---
title: 'Gewiss'
slug: '/ocpp-ladestationen/gewiss'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Gewiss'
---
![Gewiss – Figura 1](/img/ocpp-ladestationen-gewiss/01.jpg)

[JOINON EVO](https://www.gewiss.com/ch/de/mobility)

![Gewiss – Figura 2](/img/ocpp-ladestationen-gewiss/02.jpg)

[JOINON-FAST](https://www.gewiss.com/ch/de/mobility)

## Guida all'integrazione nel backend

Le stazioni Gewiss JOINON possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire facilmente in autonomia le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari di disponibilità ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal) 

- Scopri di più sulle nostre [funzioni Premium](/funktionen)


### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua il login con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.


1.Link ws senza Basic Auth: testato e funzionante

2.wss senza Basic Auth: testato e funzionante

3.wss con Basic Auth: non testato

6.  Accedi all'interfaccia web della stazione desiderata e incolla l'URL copiato.


## JOINON EVO Wallbox

- "firmwareVersion":"12.3.0" 


1.  Connettiti alla stazione Gewiss JOINON Evo tramite LAN o WLAN (i dettagli per la connessione si trovano nelle istruzioni di installazione)

2.  Maschera di login (anche i dati di login necessari si trovano nelle istruzioni di installazione.

3.  Nella voce di menu Charging Station è possibile impostare la connessione desiderata. 


4\. Authorisation Type deve essere impostato su "Autorisation". 



![Gewiss – Figura 3](/img/ocpp-ladestationen-gewiss/03.png)

5\. OCPP Protocol su "ON"

6\. Aggiungere l'URL di eCarUp

Esempio: wss://[www.ecarup.com/api/Ocpp16/D8xxxxxxxxx](http://www.ecarup.com/api/Ocpp16/D8xxxxxxxxx)

7\. Chargebox identity = numero di serie della stazione

8\. Salvare.



![Gewiss – Figura 4](/img/ocpp-ladestationen-gewiss/04.png)

## Stazione di ricarica JOINON I-Fast DC

- "firmwareVersion":"V4.13.M0 " 


1.  Connettiti alla stazione di ricarica Gewiss i-Fast DC tramite LAN o WLAN (i dettagli per la connessione si trovano nelle istruzioni di installazione)

2.  Maschera di login (anche i dati di login necessari si trovano nelle istruzioni di installazione.


3. Clicca su "Set"

4\. Seleziona "Backend"

5\. Aggiungi il tuo URL di eCarUp in Central System URL. 

Esempio: wss://[www.ecarup.com/api/Ocpp16/D8xxxxxxxxx](http://www.ecarup.com/api/Ocpp16/D8xxxxxxxxx)

6. Charge Box ID\= numero di serie della stazione

7. OCPP Security Profile può essere selezionato facoltativamente. 

8\. Salvare. 




![Gewiss – Figura 5](/img/ocpp-ladestationen-gewiss/05.png)

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio la potenza di ricarica attuale nell'app. 



Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![Gewiss – Figura 6](/img/ocpp-ladestationen-gewiss/06.png)

![Gewiss – Figura 7](/img/ocpp-ladestationen-gewiss/07.png)
