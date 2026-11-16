---
title: 'Sungrow'
slug: '/ocpp-ladestationen/sungrow'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Sungrow'
---
<div className="row">
<div className="col col--8">

## Guida all'integrazione nel backend

</div>
<div className="col col--4 text--center">

![Sungrow – Figura 1](/img/ocpp-ladestationen-sungrow/01.jpg)

</div>
</div>

Sungrow IDC30E

## Guida all'integrazione nel backend

Le stazioni Sungrow possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni d'uso delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal) 

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

### Sungrow IDC30E

### Integrazione tramite il display

1.  Premi per 5 secondi sul formato dell'ora sul display

![Sungrow – Figura 2](/img/ocpp-ladestationen-sungrow/02.png)

2\. Per l'accesso ti serve il codice fornito in dotazione. 

![Sungrow – Figura 3](/img/ocpp-ladestationen-sungrow/03.png)

3\. Vai alla pagina 4

4\. Alla voce Websocket clicca su "others"

5\. Alla voce Other inserisci il tuo URL eCarUp.

6\. Riavvia la stazione. 

![Sungrow – Figura 4](/img/ocpp-ladestationen-sungrow/04.png)

Esempio:

- wss://[www.ecarup.com/api/Ocpp16/D8D2Axxxxxxxx](http://www.ecarup.com/api/Ocpp16/D8D2Axxxxxxxx)

![Sungrow – Figura 5](/img/ocpp-ladestationen-sungrow/05.png)

### Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Sungrow – Figura 6](/img/ocpp-ladestationen-sungrow/06.png)

![Sungrow – Figura 7](/img/ocpp-ladestationen-sungrow/07.png)
