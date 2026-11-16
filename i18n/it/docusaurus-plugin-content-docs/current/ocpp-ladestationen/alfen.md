---
title: 'Alfen'
slug: '/ocpp-ladestationen/alfen'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Alfen'
---
<div className="row">
<div className="col col--8">

## Guida all'integrazione nel backend

Le stazioni Alfen possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso e senza complicazioni le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo.

- Requisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![Alfen – Figura 1](/img/ocpp-ladestationen-alfen/01.jpg)

</div>
</div>

[Wallbox Alfen](https://web.ecarup.com/backend/alfen-eve/)

### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) e accedi con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione della stazione di ricarica Alfen

- Testata la versione 6.5.0-4217

![Alfen – Figura 2](/img/ocpp-ladestationen-alfen/02.png)

![Alfen – Figura 3](/img/ocpp-ladestationen-alfen/03.png)

Alla voce di menu "MeterValue" imposta il valore su 30s. 

### ⚠️Importante

Se la tua Alfen ha la versione firmware 7.2.x o superiore, devi inserire il prezzo impostato nel portale web eCarUp anche nel portale ICU-Alfen. In caso contrario compare il codice di errore 214.

Messaggio di errore nei log

StatusNotification \[2, "16927", "StatusNotification", &#123;"connectorId":1,"errorCode":"OtherError","info":"Tariffs or currency not or invalidly configured","status":"Faulted","vendorErrorCode":"214"&#125;\]

![Alfen – Figura 4](/img/ocpp-ladestationen-alfen/04.jpg)

![Alfen – Figura 5](/img/ocpp-ladestationen-alfen/05.png)

## Configurazione precedente

### Installazione ACE Service Installer

1.  Apri ACE Service Installer ed effettua l'accesso 

2.  Seleziona la stazione corretta nella tua rete

3.  Assicurati che sia installato almeno il firmware 3.3.6-2840

4.  Nella barra dei menu in alto seleziona "Connectivity"  

5.  Nella scheda "General" imposta il "Backoffice preset" su "Manually enter  backend settings" 

6.  Imposta il "Connect method" su "Wired" (per il funzionamento tramite LAN) o "GPRS" (per il funzionamento con scheda SIM) 

7.  Cambia il "Protocol" in "OCPP 1.6"

8.  Passa alla scheda "Transaction data" e in "Disconnect action" seleziona l'opzione "Abort Unlock". In questo modo, in caso di interruzione della connessione, la stazione sblocca il cavo.

![Alfen – Figura 6](/img/ocpp-ladestationen-alfen/06.png)

![Alfen – Figura 7](/img/ocpp-ladestationen-alfen/07.png)

### Funzionamento con connessione LAN / Ethernet

9. Passa alla scheda "Wired"

10. Nel campo  "Back office URL" inserisci la prima parte dell'URL OCPP ottenuto nei preparativi (ws://www.ecarup.com)

11. Nel campo "Back office path" inserisci la seconda parte dell'URL OCPP ottenuto nei preparativi. In questo modo la tua stazione viene assegnata direttamente al tuo account.

Importante: dopo aver effettuato tutte le impostazioni, la stazione deve essere riavviata.

![Alfen – Figura 8](/img/ocpp-ladestationen-alfen/08.png)

### Funzionamento con scheda SIM

12. Attiva le "Advanced Settings" e passa alla scheda "GPRS"

13. Nel campo  "Back office URL" inserisci la prima parte dell'URL OCPP ottenuto nei preparativi (ws://www.ecarup.com)

14\. Nel campo "Back office path" aggiungi la seconda parte dell'URL OCPP ottenuto nei preparativi. In questo modo la stazione viene assegnata direttamente al tuo account.

15. Nel campo "APN Name" inserisci il tuo provider (ad es. gprs.swisscom.ch). Puoi lasciare vuoti "APN Username" e "APN Passwort".

Importante: dopo aver effettuato tutte le impostazioni, la stazione deve essere riavviata.

![Alfen – Figura 9](/img/ocpp-ladestationen-alfen/09.png)

Le stazioni di ricarica ICU ALFEN sono ora registrate come stazioni di ricarica nel tuo account eCarUp e possono essere configurate come descritto in Configurazione in eCarUp. Se si tratta di una ICU Pro con due punti di ricarica, dopo l'installazione puoi modificarli entrambi nel backend.

## Impostazione avanzata tramite strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Alfen – Figura 10](/img/ocpp-ladestationen-alfen/10.png)

![Alfen – Figura 11](/img/ocpp-ladestationen-alfen/11.png)
