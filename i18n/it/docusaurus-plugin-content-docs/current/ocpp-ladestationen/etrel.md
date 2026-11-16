---
title: 'Etrel'
slug: '/ocpp-ladestationen/etrel'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Etrel'
---
<div className="row">
<div className="col col--8">

## Guida all'integrazione nel backend

Le stazioni Etrel possono essere integrate nel sistema di conteggio di eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo.

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori delle stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![Etrel – Figura 1](/img/ocpp-ladestationen-etrel/01.jpg)

</div>
</div>

[Wallbox Etrel](https://etrel.com/)

### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) e accedi con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione della wallbox Etrel

- Apri le impostazioni di rete e Internet del tuo PC

- Qui devi assegnare un indirizzo IP statico, ad es. 192.168.1.50

- Collega poi il tuo PC alla wallbox e apri nel browser il seguente IP "Default" della stazione: 192.168.1.250. I dati di accesso dettagliati sono riportati nella guida fornita in dotazione

- La versione del software deve essere almeno 4.0.4

![Etrel – Figura 2](/img/ocpp-ladestationen-etrel/02.png)

In Diagnostics puoi verificare la versione attuale del software. 

1.  In Device Mode passa da 1 utente senza autorizzazione a più utenti con autorizzazione!

![Etrel – Figura 3](/img/ocpp-ladestationen-etrel/03.png)

2\. Tramite EVSE Configuration puoi far visualizzare sul display del charger il codice QR generato nel portale web di eCarUp. 

Utilizza sempre https://ecarup.com/app/?serial=xxxxxxxxxxxxx (personalizzato, vedi esempio a destra)

![Etrel – Figura 4](/img/ocpp-ladestationen-etrel/04.png)

![Etrel – Figura 5](/img/ocpp-ladestationen-etrel/05.png)

3\. In User, sotto Charging autohrization, imposta Central System Only. 

![Etrel – Figura 6](/img/ocpp-ladestationen-etrel/06.png)

4\. In Connectivity, seleziona un mezzo di connessione: Ethernet oppure WiFi.

5\. Imposta la comunicazione con il Central System su "enabled"

6\. In Central System Connectivity, sotto Endpoint URL, inserisci il tuo URL eCarUp dall'account del proprietario della stazione.

![Etrel – Figura 7](/img/ocpp-ladestationen-etrel/07.png)

### Tieni presenti le Additional Settings:

1.  Hearbeat Intervall a 60s

2.  Meter Values a 60s

e alla fine non dimenticare di salvare. 

![Etrel – Figura 8](/img/ocpp-ladestationen-etrel/08.png)

### Controllo finale:

<div className="row">
<div className="col col--8">

- Se il "Cloud" appare come nell'immagine a destra, la stazione ha stabilito correttamente la connessione al backend.

</div>
<div className="col col--4 text--center">

![Etrel – Figura 9](/img/ocpp-ladestationen-etrel/09.png)

</div>
</div>

## Impostazione avanzata tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30 e 60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Etrel – Figura 10](/img/ocpp-ladestationen-etrel/10.png)

![Etrel – Figura 11](/img/ocpp-ladestationen-etrel/11.png)
