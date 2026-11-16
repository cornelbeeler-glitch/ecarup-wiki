---
title: 'Teltonika'
slug: '/ocpp-ladestationen/teltonika'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Teltonika'
---
<div className="row">
<div className="col col--8">

## Guida all'integrazione nel backend

Le stazioni Teltonika possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo.

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![Teltonika – Figura 1](/img/ocpp-ladestationen-teltonika/01.jpg)

</div>
</div>

[TeltoCharge](https://teltonika-energy.com/)

### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) e accedi con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione della Telto-Charge

### Passaggi preliminari per l'integrazione della Teltonika

1.  Installa sul tuo smartphone l'app Teltonika Energy

2.  Collega ora la tua stazione di ricarica all'app (configurazione tramite hotspot o Internet)

3.  Non appena la stazione di ricarica è visibile nell'app, effettua le seguenti impostazioni. 

### ⚠️ Importante

1.  La stazione è stata testata con successo con la versione firmware v1.8.11

2.  La versione testata dell'app Teltonika è 1.9.0

3.  Attualmente l'indicazione della potenza nell'app eCarUp oscilla fortemente. Si sta cercando una soluzione. 

![Teltonika – Figura 2](/img/ocpp-ladestationen-teltonika/02.png)

1.  Selezionare la stazione connessa

![Teltonika – Figura 3](/img/ocpp-ladestationen-teltonika/03.png)

2\. Cliccare sulla rotella dentata in alto a destra

![Teltonika – Figura 4](/img/ocpp-ladestationen-teltonika/04.png)

3\. Selezionare Connectivity

![Teltonika – Figura 5](/img/ocpp-ladestationen-teltonika/05.png)

4\. Selezionare OCPP

![Teltonika – Figura 6](/img/ocpp-ladestationen-teltonika/06.png)

5\. Aggiungere l'URL OCPP

![Teltonika – Figura 7](/img/ocpp-ladestationen-teltonika/07.png)

Importante:

- URL OCPP dal tuo account eCarUp

- Aggiungere un / alla fine dell'URL. 

- Salvare

## Impostazione avanzata tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio la potenza di ricarica attuale nell'app. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Teltonika – Figura 8](/img/ocpp-ladestationen-teltonika/08.png)

![Teltonika – Figura 9](/img/ocpp-ladestationen-teltonika/09.png)
