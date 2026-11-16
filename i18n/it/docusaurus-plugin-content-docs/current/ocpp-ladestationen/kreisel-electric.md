---
title: 'Kreisel Electric'
slug: '/ocpp-ladestationen/kreisel-electric'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Kreisel Electric'
---
## Guida all'integrazione nel backend

Le stazioni Kreisel Electric possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Decidi tu chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione delle stazioni OCPP:

<div className="row">
<div className="col col--6">

1.  Assicurati che le tue stazioni di ricarica siano installate e online.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e inserisci l'URL copiato.

</div>
<div className="col col--6 text--center">

![Kreisel Electric – Figura 1](/img/ocpp-ladestationen-kreisel-electric/01.png)

</div>
</div>

[Kreisel CHIMERO](https://www.kreiselelectric.com/products/high-power-charger/)

## CHIMERO (modelli di potenza 180 e 240)

- Il firmware deve essere almeno alla versione: 3.2.2.

### Nota

- Un terminale per carte di credito può essere utilizzato parallelamente a eCarUp, per garantire la massima flessibilità. Per ulteriori informazioni, Kreisel Electric è a tua disposizione. 

### Integrazione

- Accedi alla piattaforma Kreisel (Kreisel Cloud) con i tuoi dati di login

- La stazione di ricarica viene assegnata da Kreisel Electric

### Passo 1

- Seleziona la stazione di ricarica che deve comunicare con il backend eCarUp. 

![Kreisel Electric – Figura 2](/img/ocpp-ladestationen-kreisel-electric/02.png)

### Passo 2

- Vai alle impostazioni (Settings) e inserisci l'URL come segue

- Backend URL: wss://[www.ecarup.com/api/Ocpp16](http://www.ecarup.com/api/Ocpp16)

- Backend Charger ID

Esempio: wss://[www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508](http://www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508)

Solo l'ID dopo OCPP16/XXXXXXX

![Kreisel Electric – Figura 3](/img/ocpp-ladestationen-kreisel-electric/03.png)

### Passo 3

- Clicca su "Apply Configruation"; dopodiché la stazione dovrebbe comunicare con l'account eCarUp desiderato. 

## Impostazione avanzata tramite lo strumento di manutenzione di eCarUp !

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Kreisel Electric – Figura 4](/img/ocpp-ladestationen-kreisel-electric/04.png)

![Kreisel Electric – Figura 5](/img/ocpp-ladestationen-kreisel-electric/05.png)
