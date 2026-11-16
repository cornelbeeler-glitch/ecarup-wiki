---
title: 'Spelsberg'
slug: '/ocpp-ladestationen/spelsberg'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Spelsberg'
---
<div className="row">
<div className="col col--6">

## Guida all'integrazione nel backend

Le stazioni Spelsberg possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari di disponibilità ecc.). Decidi tu chi può ricaricare, quando e a quale prezzo.

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--6 text--center">

![Spelsberg – Figura 1](/img/ocpp-ladestationen-spelsberg/01.jpg)

</div>
</div>

[Smart Pro](https://www.spelsberg.de/wallbox/)

### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) e accedi con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione della Smart Pro

<div className="row">
<div className="col col--8">

- Versione firmware testata: 5.30.0

- Installa a tale scopo la Spelsberg Wallbox App

- [Android](https://play.google.com/store/apps/details?id=de.spelsberg.wallboxapp&gl=DE) & [Apple App Store](https://apps.apple.com/de/app/spelsberg-wallbox-app/id1617068920)

</div>
<div className="col col--4 text--center">

![Spelsberg – Figura 2](/img/ocpp-ladestationen-spelsberg/02.jpg)

</div>
</div>

### Passo 1

<div className="row">
<div className="col col--6">

Collega la wallbox all'app Spelsberg. Clicca su "Sono un elettricista" ("Ich bin Elektroinstallateur")

</div>
<div className="col col--6 text--center">

![Spelsberg – Figura 3](/img/ocpp-ladestationen-spelsberg/03.png)

</div>
</div>

### Passo 2

Attiva la modalità di servizio e clicca su "Applica" ("Übernehmen").

![Spelsberg – Figura 4](/img/ocpp-ladestationen-spelsberg/04.jpg)

### Passo 3

Clicca su "Configura wallbox" ("Wallbox konfigurieren"). 

![Spelsberg – Figura 5](/img/ocpp-ladestationen-spelsberg/05.jpg)

### Passo 4

Scansiona il codice QR visualizzato 

![Spelsberg – Figura 6](/img/ocpp-ladestationen-spelsberg/06.jpg)

### Passo 5

Clicca poi su Impostazioni (Einstellungen)

![Spelsberg – Figura 7](/img/ocpp-ladestationen-spelsberg/07.png)

### Passo 6

Apri Impostazioni avanzate (Erweiterte Einstellungen)

![Spelsberg – Figura 8](/img/ocpp-ladestationen-spelsberg/08.png)

### Passo 7

In Sistema (System), disattiva Ricarica libera (Freies Laden)

![Spelsberg – Figura 9](/img/ocpp-ladestationen-spelsberg/09.png)

### Passo 8

<div className="row">
<div className="col col--6">

Attiva OCPP e aggiungi l'URL del tuo account eCarUp.

</div>
<div className="col col--6 text--center">

![Spelsberg – Figura 10](/img/ocpp-ladestationen-spelsberg/10.png)

</div>
</div>

### Passo 9

Salva le impostazioni e trasmettile alla stazione. 

- Esegui un riavvio: la stazione si connette ora al tuo account eCarUp. 

## Impostazione avanzata tramite strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Spelsberg – Figura 11](/img/ocpp-ladestationen-spelsberg/11.png)

![Spelsberg – Figura 12](/img/ocpp-ladestationen-spelsberg/12.png)
