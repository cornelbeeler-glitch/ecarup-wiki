---
title: 'Enelion'
slug: '/ocpp-ladestationen/enelion'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Enelion'
---
![Enelion – Figura 1](/img/ocpp-ladestationen-enelion/01.jpg)

[Lumina](https://enelion.com/product/lumina/)

![Enelion – Figura 2](/img/ocpp-ladestationen-enelion/02.png)

[Vertica](https://enelion.com/product/vertica/)

## Guida all'integrazione nel backend

Le stazioni Enelion possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel Suo account, può definire Lei stesso in modo semplice le condizioni d'uso delle Sue stazioni (prezzi, utenti, orari disponibili ecc.). È Lei a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopra qui di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione delle stazioni OCPP

1.  Si assicuri che la Sua stazione sia installata e che il Suo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apra il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettui l'accesso con i dati del Suo account.

3.  Nel menu a sinistra, clicchi sulla scheda "Stazioni" ("Stationen").

4.  Selezioni la scheda "OCPP".

5.  Copi l'URL negli appunti.

6.  Vada all'interfaccia web della stazione desiderata e inserisca l'URL copiato.

## Enelion Lumina

### Passaggi preliminari per l'integrazione della Lumina

1.  Accenda la Sua Lumina

2.  Utilizzi uno smartphone e vada alle impostazioni WLAN

3.  Selezioni l'hotspot della wallbox Lumina\-Wallbox (Enelion-xxxx-xxx)

4.  Apra il browser sullo smartphone e inserisca il seguente indirizzo IP: 192.168.8.8

5.  Si apre la pagina di configurazione Enelion

6.  Inserisca la password richiesta. La password si trova nella lettera di Enelion fornita in dotazione 

### Passaggio 1

<div className="row">
<div className="col col--6">

- Sotto Network la stazione può essere connessa tramite WLAN o GSM.

</div>
<div className="col col--6 text--center">

![Enelion – Figura 3](/img/ocpp-ladestationen-enelion/03.png)

</div>
</div>

### Passaggio 2

- Sotto Charger selezionare "Authorization"

![Enelion – Figura 4](/img/ocpp-ladestationen-enelion/04.png)

### Passaggio 3

- Disattivare la modalità FreeCharge e salvare

![Enelion – Figura 5](/img/ocpp-ladestationen-enelion/05.png)

### Passaggio 4

- Sotto OCPP selezionare "Connection"

![Enelion – Figura 6](/img/ocpp-ladestationen-enelion/06.png)

### Passaggio 5

- Attivare OCPP Connection

- Sotto Connection settings:

1.  Impostare Device su Master

2.  Connector ID 1

3.  Freecharge idTAg non deve essere vuoto. Qui è possibile inserire un badge master (whitelist) oppure, se non ha alcuna importanza, procedere come nello screenshot di esempio

4.  Inserire il Suo URL eCarUp dall'account

5.  Anche Charge Point ID non deve essere vuoto e può essere denominato a piacere. (Attenzione: max. 20 caratteri e nessuno spazio)

\+ Salvare e riavviare

Controllo dello stato di connessione della stazione nella dashboard. 

<div className="row">
<div className="col col--6 text--center">

![Enelion – Figura 7](/img/ocpp-ladestationen-enelion/07.png)

</div>
<div className="col col--6 text--center">

![Enelion – Figura 8](/img/ocpp-ladestationen-enelion/08.png)

</div>
</div>

### Enelion Vertica e Wallbox Duo

- firmwareVersion":"4.4.4

## Impostazione avanzata tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Può modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Enelion – Figura 9](/img/ocpp-ladestationen-enelion/09.png)

![Enelion – Figura 10](/img/ocpp-ladestationen-enelion/10.png)
