---
title: 'Kostad'
slug: '/ocpp-ladestationen/kostad'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Kostad'
---
![Kostad – figura 1](/img/ocpp-ladestationen-kostad/01.png)

[Unnity20 - DC Wallbox](https://www.kostad.at/)

![Kostad – figura 2](/img/ocpp-ladestationen-kostad/02.jpg)

[Unity50](https://www.kostad.at/)

![Kostad – figura 3](/img/ocpp-ladestationen-kostad/03.jpg)

[Unity20 - Mobile Charger](https://www.kostad.at/)

## Guida all'integrazione nel backend

Le stazioni Kostad possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione della Kostad DC-Wallbox (CPC20)

1.  Accedi al menu di servizio. Nome utente e password sono riportati nelle istruzioni per l'uso. 

2.  ⚠️ Importante: la stazione deve comunicare con Internet (LAN, WLAN ecc.)

![Kostad – figura 4](/img/ocpp-ladestationen-kostad/04.png)

### Configurazione della stazione

3\. Selezionare OCPP:

4\. Hostname: www.ecarup.com/ 

5\. HTTPString: api/OCPP/................/

6. Controlla ancora una volta: nessuno spazio e una / alla fine 

7\. Applica i dati di connessione; se la connessione è riuscita, lo stato è "Verde" ("Grün").

![Kostad – figura 5](/img/ocpp-ladestationen-kostad/05.png)

<div className="row">
<div className="col col--8">

Tieni inoltre presente la seguente impostazione: "Impostazioni gestore 1" ("Betreibereinstellungen 1")

- Se l'autenticazione deve avvenire tramite eCarUp (app o tessera RFID), devi impostare
    Autenticazione (Authentifikation) su OCPP.

</div>
<div className="col col--4 text--center">

![Kostad – figura 6](/img/ocpp-ladestationen-kostad/06.png)

</div>
</div>

## Kostad DC Unity 50, 90, 120, 150, 180, 300 & 360 kW

![Kostad – figura 7](/img/ocpp-ladestationen-kostad/07.png)

L'integrazione di questi impianti viene eseguita da:

 Kostad Schweiz AG. 

+41(0) 52 625 50 50

[www.kostad.ch](https://kostad.ch/)

## office@kostad.ch

![Kostad – figura 8](/img/ocpp-ladestationen-kostad/08.png)

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Kostad – figura 9](/img/ocpp-ladestationen-kostad/09.png)

![Kostad – figura 10](/img/ocpp-ladestationen-kostad/10.png)
