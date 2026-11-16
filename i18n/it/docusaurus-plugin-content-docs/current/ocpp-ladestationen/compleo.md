---
title: 'Compleo'
slug: '/ocpp-ladestationen/compleo'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Compleo'
---
![Compleo – Figura 1](/img/ocpp-ladestationen-compleo/01.png)

[SOLO](https://www.compleo-charging.ch/)

![Compleo – Figura 2](/img/ocpp-ladestationen-compleo/02.jpg)

[eBOX](https://www.compleo-charging.ch/)

![Compleo – Figura 3](/img/ocpp-ladestationen-compleo/03.jpg)

[DUO](https://www.compleo-charging.ch/)

![Compleo – Figura 4](/img/ocpp-ladestationen-compleo/04.jpg)

[CITO 500](https://www.compleo-charging.ch/)

![Compleo – Figura 5](/img/ocpp-ladestationen-compleo/05.jpg)

[CITO 240](https://www.compleo-charging.ch/)

## Guida all'integrazione nel backend

Le stazioni Compleo possono essere integrate in pochi passi nel sistema di conteggio di eCarUp. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari di disponibilità ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)


### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.


## Integrazione delle stazioni di ricarica Compleo

### Nota

- Un terminale per carte di credito può essere utilizzato in parallelo a eCarUp per garantire la massima flessibilità. Per ulteriori informazioni, Compleo è a tua disposizione. Questo riguarda solo l'hardware DC !


### Compleo SOLO

Video guida: [https://www.youtube.com/watch?v=Aa3artQXC6w](https://www.youtube.com/watch?v=Aa3artQXC6w)

### Compleo eBOX

Per integrare la Compleo eBOX ti serve l'app Compleo eConfig. 

È inoltre importante che sulla box sia installata la versione firmware 1.1 per il collegamento OCPP. 

## Panoramica:

![Compleo – Figura 6](/img/ocpp-ladestationen-compleo/06.png)

## Passo 1:

![Compleo – Figura 7](/img/ocpp-ladestationen-compleo/07.png)

## Passo 2:

![Compleo – Figura 8](/img/ocpp-ladestationen-compleo/08.png)

## Passo 3:

![Compleo – Figura 9](/img/ocpp-ladestationen-compleo/09.png)

## Passo 4:

![Compleo – Figura 10](/img/ocpp-ladestationen-compleo/10.png)

## Passo 5 incl. riavvio:

![Compleo – Figura 11](/img/ocpp-ladestationen-compleo/11.png)

Importante: se dopo l'implementazione riuscita con eCarUp la stazione non funziona correttamente, verifica quanto segue tramite l'interfaccia web della wallbox:

- Autenticazione su MIT

- Remote deve essere attivato


Come accedere all'interfaccia web dovrebbe essere descritto nella guida fornita in dotazione. 

![Compleo – Figura 12](/img/ocpp-ladestationen-compleo/12.png)

### Compleo DUO, CITO 500 & CITO 240

Per integrare altre stazioni Compleo in eCarUp ti serve il supporto dell'azienda [Compleo Charging Solutions AG Schweiz](https://www.compleo-charging.ch/kontakt) . Si occupa della configurazione e assegna il tuo punto di ricarica all'account eCarUp tramite l'URL OCPP che hai ricevuto durante la preparazione.

![Compleo – Figura 13](/img/ocpp-ladestationen-compleo/13.png)

### Importante

Per ogni stazione di ricarica Compleo il seguente parametro deve essere impostato su "true".

![Compleo – Figura 14](/img/ocpp-ladestationen-compleo/14.png)

Questo può essere fatto tramite il nostro strumento di manutenzione (eCarUp Premium), oppure l'impostazione può essere effettuata sulla stazione stessa. 

## Impostazione avanzata tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 



Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![Compleo – Figura 15](/img/ocpp-ladestationen-compleo/15.png)

![Compleo – Figura 16](/img/ocpp-ladestationen-compleo/16.png)
