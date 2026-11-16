---
title: 'Hager'
slug: '/ocpp-ladestationen/hager'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Hager'
---
![Hager – Figura 1](/img/ocpp-ladestationen-hager/01.png)

[Hager witty plus & pro](https://hager.com/de-ch/katalog/ladestation-fuer-elektrofahrzeuge-evcs/ladestationen?_gl=1*qlklly*_up*MQ..*_ga*MTIzODc0MzgyNC4xNzUxMjY5MTg3*_ga_PV0S9027V6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw*_ga_9H5STC0VW6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw)

![Hager – Figura 2](/img/ocpp-ladestationen-hager/02.png)

[Hager witty park 2](https://hager.com/de-ch/katalog/ladestation-fuer-elektrofahrzeuge-evcs/ladestationen?_gl=1*qlklly*_up*MQ..*_ga*MTIzODc0MzgyNC4xNzUxMjY5MTg3*_ga_PV0S9027V6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw*_ga_9H5STC0VW6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw)

![Hager – Figura 3](/img/ocpp-ladestationen-hager/03.png)

[Hager witty share](https://hager.com/de-ch/katalog/ladestation-fuer-elektrofahrzeuge-evcs/ladestationen?_gl=1*qlklly*_up*MQ..*_ga*MTIzODc0MzgyNC4xNzUxMjY5MTg3*_ga_PV0S9027V6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw*_ga_9H5STC0VW6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw)

## Guida all'integrazione nel backend

Le stazioni Hager possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni d'uso delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

    1.  Link ws senza Basic Auth: testato e funzionante

    2.  wss senza Basic Auth: testato e funzionante

    3.  wss con Basic Auth: testato e funzionante

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione della Hager witty park 2

- Versione firmware testata: V1.1.0.11

1.  Connettiti alla stazione Hager tramite LAN o WLAN (i dettagli per la connessione si trovano nelle istruzioni di installazione)

2.  Maschera di login (i dati di accesso necessari si trovano anch'essi nelle istruzioni di installazione.)

3.  Analogamente all'integrazione della Hager witty pro, puoi inserire allo stesso modo il tuo URL eCarUp. [Link](/ocpp-ladestationen/hager#integrazione-della-hager-witty-pro)

4\. Se desideri personalizzare anche lo schermo, puoi farlo in "Stazioni di ricarica" ("Ladestationen") e poi in Schermo (Bildschirm). 

![Hager – Figura 4](/img/ocpp-ladestationen-hager/04.png)

5. Suggerimento: puoi far proiettare i codici QR direttamente tramite OCPP sul display della stazione. 

- Tramite ChangeConfiguration nello strumento di manutenzione, puoi inviare il seguente comando:

\[2, "b1a70001-6e37-b9a9-d242-a5f2e0ab6860", "ChangeConfiguration", &#123;"key":"HagerQrCodeURL1","value":"[https://admin.ecarup.com/instant-payment?serial=I3M264mupkyqFp4fu21QTqZeY](https://admin.ecarup.com/instant-payment?serial=I3M264mupkyqFp4fu21QTqZeY)"&#125;\]

- Come ottenere l'URL è spiegato qui: [Link](/stationsbetreiber/qr-code)

- Tutto sullo strumento di manutenzione qui: [Link](/funktionen/wartung)

Esempio:

![Hager – Figura 5](/img/ocpp-ladestationen-hager/05.jpg)

![Hager – Figura 6](/img/ocpp-ladestationen-hager/06.png)

## Integrazione della Hager witty pro

- XVL122SCH e XVL122CCH

- Versione firmware testata: V1.1.5.3

1.  Connettiti alla stazione Hager tramite LAN o WLAN (i dettagli per la connessione si trovano nelle istruzioni di installazione)

2.  Maschera di login (i dati di accesso necessari si trovano anch'essi nelle istruzioni di installazione.).

3.  Nella voce di menu Charging Station è possibile impostare la connessione desiderata. 

4\. In Access Management è possibile aggiungere il Charge Point Operator. 

5\. Server OCPP: l'URL del tuo account, ad es.    wss://www.ecarup.com/api/Ocpp16/D037xxxxxxxxxx

6\. Il ChargePoint-ID può essere lasciato con le impostazioni predefinite.

 7\. Tipo di autenticazione su Nessuna.

8\. Salva e riavvia

![Hager – Figura 7](/img/ocpp-ladestationen-hager/07.png)

![Hager – Figura 8](/img/ocpp-ladestationen-hager/08.png)

Opzionale: wss + Basic Auth. 

![Hager – Figura 9](/img/ocpp-ladestationen-hager/09.png)

## Gestore del carico Hager

XEM 520

Importante: deve essere presente la versione firmware LLM\_2023\_098. 

1.  Connettiti al gestore del carico

2.  Clicca sulla voce di menu Stazioni di ricarica (Ladestationen)

3.  Cerca la stazione di ricarica e configura l'assegnazione delle fasi

4.  Vai alla stazione di ricarica, attiva Gestore della stazione di ricarica CPO (Ladestationsbetreiber CPO) e poi clicca su Impostazioni (Einstellungen).

![Hager – Figura 10](/img/ocpp-ladestationen-hager/10.png)

5\. Seleziona eCarUp nell'elenco e aggiungi il tuo ID eCarUp. (non l'intero URL)

ad es. (ws://www.ecarup.com/api/Ocpp16/) D037xxxxxxxxxx

poi clicca anche su avanti. 

![Hager – Figura 11](/img/ocpp-ladestationen-hager/11.png)

6. Inserisci il numero di serie della stazione di ricarica nel campo OCPP ID. 

7\. Clicca ora su Connetti al server CPO (Verbinden zum CPO Server).

8\. La stazione si riavvia. 

![Hager – Figura 12](/img/ocpp-ladestationen-hager/12.png)

Controllo finale

![Hager – Figura 13](/img/ocpp-ladestationen-hager/13.png)

## Integrazione della Hager witty plus

<div className="row">
<div className="col col--6">

- XVL122S e XVL122C

- Versione firmware testata: V1.1.1.6

- Installa a tal fine l'app Hager Charge

</div>
<div className="col col--6 text--center">

![Hager – Figura 14](/img/ocpp-ladestationen-hager/14.png)

</div>
</div>

1.  ### Attivare l'accoppiamento

![Hager – Figura 15](/img/ocpp-ladestationen-hager/15.png)

### 2\. Aggiungere la stazione

![Hager – Figura 16](/img/ocpp-ladestationen-hager/16.png)

Aggiungi una rete alla stazione di ricarica

### 3.

![Hager – Figura 17](/img/ocpp-ladestationen-hager/17.png)

### 4.

![Hager – Figura 18](/img/ocpp-ladestationen-hager/18.png)

### 5.

![Hager – Figura 19](/img/ocpp-ladestationen-hager/19.png)

### 6.

![Hager – Figura 20](/img/ocpp-ladestationen-hager/20.png)

### 7.

![Hager – Figura 21](/img/ocpp-ladestationen-hager/21.png)

- Inserisci il tuo URL eCarUp nel campo dell'indirizzo. 

- OCPP ID: inserisci qui il numero di serie della stazione. 

- Salva. 

## Integrazione della Hager witty share

- XEV1R22T2

- è stata dismessa da Hager. 

<Video src="g2omgn1jWo0" title="Video YouTube, guida all'integrazione di Hager nel backend eCarUp" />

Guida rapida all'integrazione di una stazione Hager nel backend eCarUp

1.  Connettiti alla stazione Hager tramite LAN o WLAN (i dettagli per la connessione si trovano nelle istruzioni di installazione)

2.  Maschera di login (i dati di accesso necessari si trovano anch'essi nelle istruzioni di installazione.).

- Nome utente: admin

- PW:1234

3.  In Configurazione (Konfiguration) puoi effettuare le impostazioni LAN e/o WLAN.

4.  In Protocollo (Protokoll) imposta il tipo su OCPP e la modalità di autorizzazione su OCPP completo (OCPP Voll). 

5.  Server OCPP: l'URL del tuo account, ad es. ws://www.ecarup.com/api/Ocpp16/D037xxxxxxxxxx

6.  Il ChargePoint-ID può essere lasciato con le impostazioni predefinite. 

7.  Tipo di autenticazione su Nessuna (Keine).

8.  Salva e riavvia

### 2\. Passo: effettuare l'accesso

![Hager – Figura 22](/img/ocpp-ladestationen-hager/22.png)

### 3\. Passo: configurare le impostazioni WLAN e LAN

![Hager – Figura 23](/img/ocpp-ladestationen-hager/23.png)

### 4.-7. Passo: inserire e adattare i dati

![Hager – Figura 24](/img/ocpp-ladestationen-hager/24.png)

### 8\. Passo: salvare e riavviare.

## Impostazioni avanzate tramite strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio la potenza di ricarica attuale nell'app. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Hager – Figura 25](/img/ocpp-ladestationen-hager/25.png)

![Hager – Figura 26](/img/ocpp-ladestationen-hager/26.png)
