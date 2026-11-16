---
title: 'POWERJames'
slug: '/ocpp-ladestationen/powerjames'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'POWERJames'
---
## Guida all'integrazione nel backend

Le stazioni POWERJames possono essere integrate in pochi passi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire facilmente in autonomia le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal) 

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

![POWERJames – Figura 1](/img/ocpp-ladestationen-powerjames/01.png)

[Wallbox POWERJames Charges](https://powerjames.com/#funktionen)

### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## POWERJames Charge S

- "firmwareVersion":"22.0.35" 

### Passo 1

- Collega la stazione di ricarica alla rete Wi-Fi locale.

- Suggerimento: consulta la Quick Guide fornita in dotazione.

### Passo 2

- Contatta poi il supporto di PowerJames all'indirizzo [support@powerjames.com](mailto:support@powerjames.com) comunicando che desideri collegare la stazione a eCarUp.

### Passo 3

- Non appena avrai ricevuto il loro via libera, puoi iniziare. 

- Collegati di nuovo alla wallbox tramite lo smartphone e digita nuovamente l'indirizzo IP 192.168.4.1 nel browser. 

### Passo 4

- Clicca su "OCPP Configuration"

![POWERJames – Figura 2](/img/ocpp-ladestationen-powerjames/02.png)

### Passo 5

<div className="row">
<div className="col col--6">

- Attiva l'interfaccia OCPP

- La ChargeBox ID viene impostata automaticamente.

- Aggiungi l'URL OCPP del tuo account eCarUp.

- Infine salva e riavvia la stazione.

</div>
<div className="col col--6 text--center">

![POWERJames – Figura 3](/img/ocpp-ladestationen-powerjames/03.png)

</div>
</div>

### Esempio:

- URL OCPP del tuo account: ws://www.ecarup.com/api/Ocpp16/D0xxxxxxxxxx

### Passo 6

<div className="row">
<div className="col col--6">

- Controllo finale: per OCPP deve essere indicato "Active".

- La configurazione presso PowerJames è così conclusa e il punto di misura può essere modificato in eCarUp.

</div>
<div className="col col--6 text--center">

![POWERJames – Figura 4](/img/ocpp-ladestationen-powerjames/04.png)

</div>
</div>

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![POWERJames – Figura 5](/img/ocpp-ladestationen-powerjames/05.png)

![POWERJames – Figura 6](/img/ocpp-ladestationen-powerjames/06.png)
