---
title: 'Siemens'
slug: '/ocpp-ladestationen/siemens'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Siemens'
---
![Siemens – Figura 1](/img/ocpp-ladestationen-siemens/01.jpg)

[SiCharge CC](/ocpp-ladestationen/siemens#sicharge-cc-ac22)

![Siemens – Figura 2](/img/ocpp-ladestationen-siemens/02.png)

[Siemens VersiCharge](/ocpp-ladestationen/siemens#versiecharge-ac-22kw)

![Siemens – Figura 3](/img/ocpp-ladestationen-siemens/03.png)

[Siemens SICHARGE D](/ocpp-ladestationen/siemens#sicharge-d)

## Guida all'integrazione nel backend

Le stazioni Siemens possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari di disponibilità ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) e accedi con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione delle stazioni di ricarica Siemens

<Video src="zB1Yqo63b6I" title="Video YouTube, integrazione Siemens nel backend eCarUp" />

## SiCharge CC AC22

### Integrazione della SICharge

Connettersi alla stazione tramite Ethernet

1.  Il laptop deve avere l'IP 192.168.32.10 e la subnet mask 255.255.255.0.

2.  Apri il browser del tuo laptop e inserisci nella barra degli indirizzi il seguente URL: 192.168.32.1

3.  Il nome utente è "admin" e la password è il numero di serie dell'impianto

### Interfaccia web

1.  Server Profile su Production

2.  Protocol Version OCPP 1.6J

3.  Inserire l'URL dell'account

4.  In User Management, alla voce Authentication, nella Whitelist deve essere selezionata l'opzione OCPP (managed).

5.  Salvare e riavviare

![Siemens – Figura 4](/img/ocpp-ladestationen-siemens/04.png)

![Siemens – Figura 5](/img/ocpp-ladestationen-siemens/05.png)

### Connessione tramite scheda SIM

Insieme alla colonnina di ricarica, Siemens fornisce anche una scheda SIM M2M. 

È ancora necessario effettuare la seguente impostazione:

- Authentication Method su PAP

- Service Mode su Auto

![Siemens – Figura 6](/img/ocpp-ladestationen-siemens/06.png)

## VersieCharge AC 22kW

### Passaggi preliminari per l'integrazione della VersieCharge

1.  Installa sul tuo smartphone l'app Sifinity Go

2.  Collega ora la tua stazione di ricarica all'app (configurazione tramite Bluetooth)

Versione firmware testata: V2.132.29

[App Store](https://apps.apple.com/us/app/sifinity-go/id989742892?l=de)

[Google Play](https://play.google.com/store/apps/details?id=com.siemens.VersiChargeSG&hl=de&gl=US)

![Siemens – Figura 7](/img/ocpp-ladestationen-siemens/07.png)

<div className="row">
<div className="col col--6 text--center">

![Siemens – Figura 8](/img/ocpp-ladestationen-siemens/08.png)

</div>
<div className="col col--6 text--center">

![Siemens – Figura 9](/img/ocpp-ladestationen-siemens/09.png)

</div>
</div>

3\. In seguito, il gestore della stazione deve inviare l'URL, incluso il numero di serie della stazione, al seguente indirizzo e-mail per l'integrazione:

[si.emobility.ch@siemens.com](mailto:si.emobility.ch@siemens.com). 

Siemens ti contatterà al più presto per completare l'integrazione. 

## SiCharge D

Per l'integrazione della SiCharge D, l'URL e il numero di serie della stazione devono essere inviati al seguente indirizzo e-mail: 

[si.emobility.ch@siemens.com](mailto:si.emobility.ch@siemens.com)

Siemens ti contatterà al più presto per completare l'integrazione. 

![Siemens – Figura 10](/img/ocpp-ladestationen-siemens/10.png)

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30 e 60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Siemens – Figura 11](/img/ocpp-ladestationen-siemens/11.png)

![Siemens – Figura 12](/img/ocpp-ladestationen-siemens/12.png)
