---
title: 'GL Charge'
slug: '/ocpp-ladestationen/gl-charge'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'GL Charge'
---
![GL Charge – Figura 1](/img/ocpp-ladestationen-gl-charge/01.png)

[LiteBox](https://iskraemeco-emobility.com/)

![GL Charge – Figura 2](/img/ocpp-ladestationen-gl-charge/02.png)

[Public Box](https://iskraemeco-emobility.com/)

![GL Charge – Figura 3](/img/ocpp-ladestationen-gl-charge/03.png)

[Platinum](https://iskraemeco-emobility.com/)

## Guida all'integrazione nel backend

Le stazioni GL Charge possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal) 

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o il tuo cellulare sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## LiteBox

Versione firmware: A0-GL-V2.0.5-b4 

- Installa l'app CP Tool

- Versione dell'app testata: V. 1.12.2

![GL Charge – Figura 4](/img/ocpp-ladestationen-gl-charge/04.png)

### Passo 1

<div className="row">
<div className="col col--6">

- Nel CP Tool cerca la stazione di ricarica e selezionala.

- Inserisci la password (default: 12345678)

- Clicca su Enter

</div>
<div className="col col--6 text--center">

![GL Charge – Figura 5](/img/ocpp-ladestationen-gl-charge/05.png)

</div>
</div>

### Passo 2

- Stabilisci la connessione a Internet desiderata

![GL Charge – Figura 6](/img/ocpp-ladestationen-gl-charge/06.png)

### Passo 3

<div className="row">
<div className="col col--6">

- Server URL: Manual Entry

- URL dal tuo account eCarUp

- Charger ID: può essere definito liberamente

</div>
<div className="col col--6 text--center">

![GL Charge – Figura 7](/img/ocpp-ladestationen-gl-charge/07.png)

</div>
</div>

### Passo 4

<div className="row">
<div className="col col--6">

- Alla fine clicca su Set.

- Riavvia la stazione.

- Ora la stazione dovrebbe comunicare con il tuo account.

</div>
<div className="col col--6 text--center">

![GL Charge – Figura 8](/img/ocpp-ladestationen-gl-charge/08.png)

</div>
</div>

## PublicBox & GlowBox Platinum

Versione firmware: 0.20/6,1.8,2.8  

### Integrazione

Prima di poter configurare la stazione di ricarica, devi avere accesso all'interfaccia web. 

1.  Collega un PC alla stazione tramite Ethernet. 

2.  Imposta localmente il seguente indirizzo sulla tua interfaccia di rete:

- IP Address: 192.168.1.3

- Subnet Mask: 255.255.255.0

3.  Apri il browser e inserisci il seguente URL: http://192.168.1.2. 

4.  Accedi all'interfaccia web come segue:

- Username: installer

- Password: installer

![GL Charge – Figura 9](/img/ocpp-ladestationen-gl-charge/09.png)

### Configurazione OCPP

1.  Vai alle OCPP Settings

2.  In OCPP Host inserisci il tuo URL eCarUp:

Esempio: ws://[www.ecarup.com/api/Ocpp16/xxxxxxxxxx](http://www.ecarup.com/api/Ocpp16/xxxxxxxxxx)/numero di serie

⚠️Importante: dopo l'URL non dimenticare / + numero di serie. 

3.  Clicca su Apply e la stazione si riavvia. 

![GL Charge – Figura 10](/img/ocpp-ladestationen-gl-charge/10.png)

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![GL Charge – Figura 11](/img/ocpp-ladestationen-gl-charge/11.png)

![GL Charge – Figura 12](/img/ocpp-ladestationen-gl-charge/12.png)
