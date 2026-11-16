---
title: 'Hesotec'
slug: '/ocpp-ladestationen/hesotec'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Hesotec'
---
![Hesotec – Figura 1](/img/ocpp-ladestationen-hesotec/01.jpg)

[eBox wr30](https://electrify.hesotec.de/produkte/ebox-wr30)

![Hesotec – Figura 2](/img/ocpp-ladestationen-hesotec/02.jpg)

[eBox sr10](https://electrify.hesotec.de/produkte/ebox-wr30)

![Hesotec – Figura 3](/img/ocpp-ladestationen-hesotec/03.jpg)

[eSat r10/r20](https://electrify.hesotec.de/produkte/ebox-wr30)

## Guida all'integrazione nel backend

Le stazioni Hesotec possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel Suo account, può definire in modo semplice e autonomo le condizioni di utilizzo delle Sue stazioni (prezzi, utenti, orari di disponibilità ecc.). È Lei a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopra di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione di stazioni OCPP

1.  Si assicuri che le Sue stazioni di ricarica siano installate e che il Suo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apra il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettui l'accesso con i dati del Suo account.

3.  Nel menu a sinistra, clicchi sulla scheda "Stazioni" ("Stationen").

4.  Selezioni la scheda "OCPP".

5.  Copi l'URL negli appunti.

6.  Acceda all'interfaccia web della stazione desiderata e incolli l'URL copiato.

## Collegamento della stazione di ricarica Hesotec

- Scarichi l'app "electrify charge control" di Hesotec dal Suo App Store

- Nell'app, clicchi sul + per collegare la stazione desiderata

- Il collegamento può essere configurato tramite l'hotspot o tramite l'eLMS di Hesotec

- Selezioni il Suo modello e assegni un nome alla stazione

- Colleghi quindi lo smartphone all'hotspot della stazione di ricarica

- Tutte le informazioni sull'hotspot (SSID\_EBOX\_XXX con password) si trovano nella busta fornita in dotazione. 

- Se la stazione si è collegata correttamente, compare nell'app. 

## Play Store

![Hesotec – Figura 4](/img/ocpp-ladestationen-hesotec/04.png)

<div className="row">
<div className="col col--6 text--center">

![Hesotec – Figura 5](/img/ocpp-ladestationen-hesotec/05.jpg)

</div>
<div className="col col--6 text--center">

![Hesotec – Figura 6](/img/ocpp-ladestationen-hesotec/06.jpg)

</div>
</div>

- Nell'app, clicchi sui 3 puntini in alto a destra

- Occorre attivare "Impostazioni avanzate" ("Erweiterte Einstellungen") e "Tecnico" ("Techniker")

<div className="row">
<div className="col col--6 text--center">

![Hesotec – Figura 7](/img/ocpp-ladestationen-hesotec/07.jpg)

</div>
<div className="col col--6 text--center">

![Hesotec – Figura 8](/img/ocpp-ladestationen-hesotec/08.jpg)

</div>
</div>

- Selezioni "Impostazioni generali" ("Allgemeine Einstellungen")

- Imposti "Autorizzazione" ("Autorisierung") su RFID/App e 

- attivi "Termina con RFID" ("Beenden mit RFID")

- Salvi e torni alle impostazioni

<div className="row">
<div className="col col--6 text--center">

![Hesotec – Figura 9](/img/ocpp-ladestationen-hesotec/09.jpg)

</div>
<div className="col col--6 text--center">

![Hesotec – Figura 10](/img/ocpp-ladestationen-hesotec/10.jpg)

</div>
</div>

<div className="row">
<div className="col col--6">

- Apra "Impostazioni avanzate" ("Erweiterte Einstellungen")

- In "Backend OCPP" inserisca l'URL eCarUp del Suo portale web

- Esempio: ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxx/15023910 (numero di serie della stazione)

- Imposti "Modalità" ("Modus") su OCPP

</div>
<div className="col col--6 text--center">

![Hesotec – Figura 11](/img/ocpp-ladestationen-hesotec/11.png)

</div>
</div>

- Importante: nell'URL, dopo la / va inserito il numero di serie della Sua stazione!

- Riavvii quindi la stazione

## Impostazione avanzata tramite strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Può modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Hesotec – Figura 12](/img/ocpp-ladestationen-hesotec/12.png)

![Hesotec – Figura 13](/img/ocpp-ladestationen-hesotec/13.png)
