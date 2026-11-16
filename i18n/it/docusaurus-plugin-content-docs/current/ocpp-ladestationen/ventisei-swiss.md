---
title: 'Ventisei Swiss'
slug: '/ocpp-ladestationen/ventisei-swiss'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Ventisei Swiss'
---
<div className="row">
<div className="col col--8">

## Guida all'integrazione nel backend

Le stazioni Ventisei possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo.

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![Ventisei Swiss – Figura 1](/img/ocpp-ladestationen-ventisei-swiss/01.jpg)

</div>
</div>

[Ventisei Swiss](https://www.ventisei.swiss/)

### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) e accedi con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione della Ventisei Swiss

Importante: versione firmware testata, m2.2.1\_cf01.12\_chAA.06

## Nota

- Un terminale per carte di credito può essere utilizzato parallelamente a eCarUp per garantire la massima flessibilità. Per ulteriori informazioni, Ventisei Swiss è a tua disposizione. 

### Passo 1

Accendi la stazione di ricarica e vai nelle impostazioni WLAN. 

Seleziona l'hotspot della stazione.

![Ventisei Swiss – Figura 2](/img/ocpp-ladestationen-ventisei-swiss/02.png)

### Passo 2

<div className="row">
<div className="col col--6">

Nel browser, vai al seguente indirizzo IP: http://172.25.1.1

Appare la seguente schermata di login.

(I dati di login sono contenuti nella guida)

</div>
<div className="col col--6 text--center">

![Ventisei Swiss – Figura 3](/img/ocpp-ladestationen-ventisei-swiss/03.png)

</div>
</div>

### Passo 3

<div className="row">
<div className="col col--6">

Appare la seguente panoramica:

1.  Imposta la connessione tramite Connectivity.

2.  In seguito, sotto OCPP puoi aggiungere il tuo URL eCarUp.

</div>
<div className="col col--6 text--center">

![Ventisei Swiss – Figura 4](/img/ocpp-ladestationen-ventisei-swiss/04.png)

</div>
</div>

### Passo 4

<div className="row">
<div className="col col--6">

Integrazione OCPP

1.  [www.ecarup.com](http://www.ecarup.com)

2.  Porta 80 (porta standard, se non è stato definito diversamente)

</div>
<div className="col col--6 text--center">

![Ventisei Swiss – Figura 5](/img/ocpp-ladestationen-ventisei-swiss/05.png)

</div>
</div>

### Passo 5

<div className="row">
<div className="col col--6">

3\. Copiare la parte restante dell'URL dal tuo account

4\. Impostare Meter Values su 60 s.

5\. Salvare

</div>
<div className="col col--6 text--center">

![Ventisei Swiss – Figura 6](/img/ocpp-ladestationen-ventisei-swiss/06.png)

</div>
</div>

### Passo 6

Riavvia la stazione: dopodiché dovrebbe connettersi correttamente al tuo account eCarUp. 

## Impostazione avanzata tramite strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio la potenza di ricarica attuale nell'app. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Ventisei Swiss – Figura 7](/img/ocpp-ladestationen-ventisei-swiss/07.png)

![Ventisei Swiss – Figura 8](/img/ocpp-ladestationen-ventisei-swiss/08.png)
