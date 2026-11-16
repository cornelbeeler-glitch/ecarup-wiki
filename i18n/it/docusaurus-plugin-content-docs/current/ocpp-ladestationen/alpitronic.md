---
title: 'Alpitronic'
slug: '/ocpp-ladestationen/alpitronic'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Alpitronic'
---
<div className="row">
<div className="col col--8">

## Guida all'integrazione nel backend

Le stazioni Alpitronic possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel Suo account, può definire in modo semplice e autonomo le condizioni di utilizzo delle Sue stazioni (prezzi, utenti, orari disponibili ecc.). È Lei a decidere chi può ricaricare, quando e a quale prezzo.

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopra di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![Alpitronic – Figura 1](/img/ocpp-ladestationen-alpitronic/01.jpg)

</div>
</div>

[Alpitronic Hypercharger](https://www.alpitronic.it/en/)

### Integrazione di stazioni OCPP

1.  Si assicuri che le Sue stazioni di ricarica siano installate e che il Suo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apra il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettui l'accesso con i dati del Suo account.

3.  Nel menu a sinistra, clicchi sulla scheda "Stazioni" ("Stationen").

4.  Selezioni la scheda "OCPP".

5.  Copi l'URL negli appunti.

6.  Acceda all'interfaccia web della stazione desiderata e incolli l'URL copiato.

## Integrazione della stazione di ricarica Alpitronic

### ⚠️ Attenzione, da non dimenticare: il primo passo di configurazione deve essere eseguito nel campo “Network Configuration”. (I dettagli si trovano nel file di Hypercharger)

### Accedere alla stazione

1\. Colleghi il Suo PC alla colonnina tramite la porta Ethernet. Questa è contrassegnata con XF1 e si trova nella parte inferiore della colonnina, sul lato dello sportello del display.

2\. Acceda all'interfaccia web aprendo un browser e inserendo l'indirizzo IP standard 192.168.1.100.

3\. Utilizzi i dati utente standard per accedere all'interfaccia web (nome utente: admin, password: admin123).

![Alpitronic – Figura 2](/img/ocpp-ladestationen-alpitronic/02.png)

### Importante

- Selezionare OCPP 1.6

- Copiare l'intero URL di eCarUp nel campo WebSocketUrl!

- Impostare Security Profile su 0 in Default

- Non dimenticare Save Configuration.

![Alpitronic – Figura 3](/img/ocpp-ladestationen-alpitronic/03.png)

### Tenga presente il seguente punto

- KiskModeEnabled deve essere impostato su "false". 

Altrimenti il conducente può collegarsi e ricaricare gratuitamente. 

![Alpitronic – Figura 4](/img/ocpp-ladestationen-alpitronic/04.png)

Infine, esegua un "Hard Reset".

![Alpitronic – Figura 5](/img/ocpp-ladestationen-alpitronic/05.png)

## Impostazione avanzata tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30 e 60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Può modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Alpitronic – Figura 6](/img/ocpp-ladestationen-alpitronic/06.png)

![Alpitronic – Figura 7](/img/ocpp-ladestationen-alpitronic/07.png)
