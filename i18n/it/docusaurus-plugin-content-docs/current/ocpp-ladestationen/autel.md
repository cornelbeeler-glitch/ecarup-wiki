---
title: 'Autel'
slug: '/ocpp-ladestationen/autel'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Autel'
---
<div className="row">
<div className="col col--6">

## Guida all'integrazione nel backend

Le stazioni Autel possono essere integrate in pochi passi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso e in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo.

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--6 text--center">

![Autel – Figura 1](/img/ocpp-ladestationen-autel/01.jpg)

</div>
</div>

[Autel AC Wallbox](https://web.ecarup.com/backend/autel/)

### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione della Autel AC Wallbox

- Per farlo, installa l'app Autel Charge.  

- [Android](https://play.google.com/store/apps/details?id=com.autel.charge) & [Apple App Store](https://apps.apple.com/de/app/autel-charge/id1578454464)

### Passo 1

![Autel – Figura 2](/img/ocpp-ladestationen-autel/02.jpg)

### Passo 2

![Autel – Figura 3](/img/ocpp-ladestationen-autel/03.jpg)

### Passo 3

Scansiona il codice QR fornito in dotazione, sul quale sono riportati, tra l'altro, anche il numero di serie e la password.

### Passo 4

![Autel – Figura 4](/img/ocpp-ladestationen-autel/04.jpg)

### Passo 5

![Autel – Figura 5](/img/ocpp-ladestationen-autel/05.jpg)

### Passo 6

Non appena hai connesso la stazione di ricarica alla rete (LAN, WLAN o Bluetooth), puoi proseguire.

### Passo 7

![Autel – Figura 6](/img/ocpp-ladestationen-autel/06.jpg)

### Passo 8

![Autel – Figura 7](/img/ocpp-ladestationen-autel/07.jpg)

### Passo 9

![Autel – Figura 8](/img/ocpp-ladestationen-autel/08.jpg)

Importante per l'URL:

- Procedi esattamente come mostrato nella schermata.

- Nel percorso del server, aggiungi manualmente alla fine il "/" (slash). 

- Non dimenticare di connetterti alla fine. 

### Passo 10

- Esegui un controllo finale.

![Autel – Figura 9](/img/ocpp-ladestationen-autel/09.png)

## Impostazioni avanzate tramite il tool di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Autel – Figura 10](/img/ocpp-ladestationen-autel/10.png)

![Autel – Figura 11](/img/ocpp-ladestationen-autel/11.png)
