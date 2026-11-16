---
title: 'Gresgying'
slug: '/ocpp-ladestationen/gresgying'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Gresgying'
---
![Gresgying – Figura 1](/img/ocpp-ladestationen-gresgying/01.png)

[Turbo Wallbox](https://www.gresgying.global/product/turbo-wallbox.html)

![Gresgying – Figura 2](/img/ocpp-ladestationen-gresgying/02.png)

[120kW & 180kW DC Charging Station](https://www.gresgying.global/product/120kw-180kw-dc-charging-station.html)

## Guida all'integrazione nel backend

Le stazioni Gresgying possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel Suo account, può definire Lei stesso in modo semplice le condizioni di utilizzo delle Sue stazioni (prezzi, utenti, orari di disponibilità ecc.). È Lei a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal) 

- Scopra di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione di stazioni OCPP

1.  Si assicuri che le Sue stazioni di ricarica siano installate e che il Suo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apra il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettui l'accesso con i dati del Suo account.

3.  Nel menu a sinistra, clicchi sulla scheda «Stazioni» ("Stationen").

4.  Selezioni la scheda «OCPP» ("OCPP").

5.  Copi l'URL negli appunti.

6.  Acceda all'interfaccia web della stazione desiderata e incolli l'URL copiato.

## Gresgying AC Wallbox

- "firmwareVersion":"C-V1.01.24 P-V1.01.21" 

- Installi l'app Gresgying

- Versione dell'app testata: V1.0.10

![Gresgying – Figura 3](/img/ocpp-ladestationen-gresgying/03.png)

### Passo 1

<div className="row">
<div className="col col--6">

- Colleghi la stazione al Suo account Gresgying tramite l'app.

</div>
<div className="col col--6 text--center">

![Gresgying – Figura 4](/img/ocpp-ladestationen-gresgying/04.png)

</div>
</div>

### Passo 2

<div className="row">
<div className="col col--6">

- Una volta che la stazione è stata collegata correttamente, nell'app appare così

</div>
<div className="col col--6 text--center">

![Gresgying – Figura 5](/img/ocpp-ladestationen-gresgying/05.png)

</div>
</div>

### Passo 3

<div className="row">
<div className="col col--6">

- In Network Configuration può selezionare il tipo di connessione.

- In OCPP Server può aggiungere l'URL.

</div>
<div className="col col--6 text--center">

![Gresgying – Figura 6](/img/ocpp-ladestationen-gresgying/06.png)

</div>
</div>

### Passo 4

<div className="row">
<div className="col col--6">

- In Path inserisca l'intero URL del Suo account eCarUp.

- Tenga presente che dopo l'URL deve essere aggiunto il numero di serie della stazione.

- Clicchi su Connect.

</div>
<div className="col col--6 text--center">

![Gresgying – Figura 7](/img/ocpp-ladestationen-gresgying/07.png)

</div>
</div>

### Esempio di URL:

- ws://www.ecarup.com/api/Ocpp16/D0xxxxxxxxxx/Seriennummer

### Infine, verifichi la seguente impostazione:

- Charging Mode deve essere impostato su "Online". 

![Gresgying – Figura 8](/img/ocpp-ladestationen-gresgying/08.png)

## Gresgying F3-EU 180 kW

- "firmwareVersion":"C2032\_V2.8.2" 

### La stazione può essere configurata sia localmente sia da remoto.

Localmente tramite il display:

- A tale scopo consulti le istruzioni per l'uso fornite in dotazione. 

Da remoto tramite il Device Management System:

- Clicchi su "Device Manage" e cerchi la stazione desiderata

- Selezioni "Set Parameters"

- "Operation Platfrom address"

- Inserisca l'URL OCPP del Suo account e salvi l'impostazione.

- Successivamente riavvii la stazione.

![Gresgying – Figura 9](/img/ocpp-ladestationen-gresgying/09.png)

![Gresgying – Figura 10](/img/ocpp-ladestationen-gresgying/10.png)

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Può modificarlo nel modo seguente:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Gresgying – Figura 11](/img/ocpp-ladestationen-gresgying/11.png)

![Gresgying – Figura 12](/img/ocpp-ladestationen-gresgying/12.png)
