---
title: 'Fischer & Sohn'
slug: '/ocpp-ladestationen/fischer-sohn'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Fischer & Sohn'
---
<div className="row">
<div className="col col--8">

## Guida all'integrazione nel backend

Le stazioni di Fischer & Sohn AG possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel Suo account, può definire autonomamente e senza complicazioni le condizioni di utilizzo delle Sue stazioni (prezzi, utenti, orari disponibili ecc.). È Lei a decidere chi può ricaricare, quando e a quale prezzo.

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopra di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![Fischer & Sohn – Figura 1](/img/ocpp-ladestationen-fischer-sohn/01.jpg)

</div>
</div>

[iCarPlugS](https://www.fischersohn.ch/e-ladestationen)

### Integrazione delle stazioni OCPP

1.  Si assicuri che le Sue stazioni di ricarica siano installate e che il Suo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apra il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettui l'accesso con i dati del Suo account.

3.  Nel menu a sinistra, clicchi sulla scheda "Stazioni" (Stationen).

4.  Selezioni la scheda "OCPP".

5.  Copi l'URL negli appunti.

6.  Acceda all'interfaccia web della stazione desiderata e inserisca l'URL copiato.

## Integrazione del controller Charx

- Versione iCarPlugS

- Versione firmware testata: V1.5.0 

### Passo 1

Si connetta al controller con il laptop tramite l'indirizzo IP assegnato.

- Maggiori informazioni sono disponibili nelle istruzioni per l'uso. 

### Passo 2

Effettui quindi l'accesso con il livello "manufacture". 

![Fischer & Sohn – Figura 2](/img/ocpp-ladestationen-fischer-sohn/02.png)

### Passo 3

Nel menu, vada su Configurazione (Konfiguration) e imposti la modalità di abilitazione (Freigabemodus) su Via OCPP. 

![Fischer & Sohn – Figura 3](/img/ocpp-ladestationen-fischer-sohn/03.png)

### Passo 4

In Configurazione (Konfiguration), nel menu OCPP, selezioni quanto segue:

1.  OCPP 1.6j

- \+ l'interfaccia di rete scelta

2.  L'URL OCPP dal Suo account eCarUp

- Attenzione: alla fine deve seguire un / incl. il numero di serie. 

- Esempio: ws://www.ecarup.com/api/ocpp16/xnwoi248grn3o2049/24001

![Fischer & Sohn – Figura 4](/img/ocpp-ladestationen-fischer-sohn/04.png)

### Passo 5

Salvi e riavvii il controller o la stazione. 

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Può modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Fischer & Sohn – Figura 5](/img/ocpp-ladestationen-fischer-sohn/05.png)

![Fischer & Sohn – Figura 6](/img/ocpp-ladestationen-fischer-sohn/06.png)
