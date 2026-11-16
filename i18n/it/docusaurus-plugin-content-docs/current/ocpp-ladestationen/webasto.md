---
title: 'Webasto Live'
slug: '/ocpp-ladestationen/webasto'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Webasto Live'
---
<div className="row">
<div className="col col--6">

## Guida all'integrazione nel backend

Le stazioni Webasto possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni d'uso delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo.

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--6 text--center">

![Webasto Live – Figura 1](/img/ocpp-ladestationen-webasto/01.jpg)

</div>
</div>

[Wallbox Webasto](https://www.webasto.com/de-de.html)

### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" (Stationen).

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione della Webasto Live

<Video src="qm5e3OEWeP4" title="Video YouTube, integrare la stazione di ricarica Webasto nel backend eCarUp" />

Connettersi alla stazione tramite Ethernet

1.  Il laptop deve avere il seguente IP 192.168.0.150 e la subnet mask: 255.255.255.0.

2.  Apri il browser del tuo laptop e inserisci il seguente URL nella barra degli indirizzi 192.168.0.100

3.  I dati di accesso si trovano nel manuale utente fornito in dotazione (è necessaria solo la password) 

### Interfaccia web

### Backend

- Selezionare il tipo di connessione desiderato

- L'ID ChargePoint può essere modificato, tuttavia la stazione compare sempre nel portale eCarUp con il suo numero di serie

- Selezionare OCPP-j 1.6

- Inserire l'URL completo del tuo account nel campo Websocket.

- Salvare e riavviare

![Webasto Live – Figura 2](/img/ocpp-ladestationen-webasto/02.png)

### Contatore di energia

- Nel contatore di energia è possibile ridurre l'intervallo di upload della trasmissione della potenza. Questo stabilisce a quale intervallo la stazione ci invia i dati di consumo (kW). 

![Webasto Live – Figura 3](/img/ocpp-ladestationen-webasto/03.png)

## Impostazione avanzata tramite strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Raccomandiamo un intervallo tra 30-60s. Solo così possiamo calcolare e visualizzare meglio la potenza di ricarica attuale nell'app. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Webasto Live – Figura 4](/img/ocpp-ladestationen-webasto/04.png)

![Webasto Live – Figura 5](/img/ocpp-ladestationen-webasto/05.png)
