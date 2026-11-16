---
title: 'Juice Technology'
slug: '/ocpp-ladestationen/juice-technology'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Juice Technology'
---
![Juice Technology – Figura 1](/img/ocpp-ladestationen-juice-technology/01.jpg)

[Charger me 3](https://juice.world/)

![Juice Technology – Figura 2](/img/ocpp-ladestationen-juice-technology/02.jpg)

[Charger 2](https://juice.world/)

## Guida all'integrazione nel backend

Le stazioni Juice possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel Suo account, può definire autonomamente e senza complicazioni le condizioni d'uso delle Sue stazioni (prezzi, utenti, orari di disponibilità ecc.). È Lei a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopra di più sulle nostre [funzioni Premium](/funktionen)


### Integrazione di stazioni OCPP

1.  Si assicuri che le Sue stazioni di ricarica siano installate e che il Suo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apra il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettui l'accesso con i dati del Suo account.

3.  Nel menu a sinistra, clicchi sulla scheda "Stazioni" ("Stationen").

4.  Selezioni la scheda "OCPP".

5.  Copi l'URL negli appunti.

6.  Vada all'interfaccia web della stazione desiderata e inserisca l'URL copiato.


## Integrazione delle stazioni di ricarica Juice

<Video src="nj_x0WNQhNk" title="Video YouTube, guida all'integrazione «Juice Technology nel backend eCarUp»" />

Video guida all'integrazione di Juice Technology nel backend eCarUp

## Juice Charger me 3

### Installazione

Accesso alla stazione (statico):

1\. Non appena è connesso alla stazione (attenzione: il PC deve trovarsi nello stesso intervallo IP), apra il browser che preferisce e inserisca il seguente indirizzo IP: 192.168.123.123/

2\. Accesso: i dati di accesso si trovano nelle istruzioni fornite in dotazione.

Standard: 

Username: operator

PW: JuiCeMeUP!

3\. Configuri quindi il Juice Charger me 3 secondo le Sue esigenze. 



Accesso alla stazione (dinamico):

1.  Colleghi il cavo di rete al router e individui l'indirizzo IP nell'elenco del router. 

2.   Accesso: i dati di accesso si trovano nelle istruzioni fornite in dotazione.


Standard: 

Username: operator

PW: JuiCeMeUP!

3.   Configuri quindi il Juice Charger me 3 secondo le Sue esigenze. 




### Impostazioni OCPP:

![Juice Technology – Figura 3](/img/ocpp-ladestationen-juice-technology/03.png)

1.  Selezioni il tipo di connessione (WLAN, LAN ecc.)

2.  Aggiunga l'URL eCarUp dal Suo account. 


Esempio: ws://www.ecarup.com/api/OCPP16/wgwepog4980h4ho

![Juice Technology – Figura 4](/img/ocpp-ladestationen-juice-technology/04.png)

\+ imposti Meter Value Sample Interval su max. 60 secondi. 

### Impostazioni di autorizzazione

![Juice Technology – Figura 5](/img/ocpp-ladestationen-juice-technology/05.png)

- Disattivi la ricarica gratuita

- Disattivi la whitelist locale


salvi tutte le impostazioni e riavvii la stazione. 

## Juice Charger 2

### Installazione

Accesso alla stazione:

1\. Non appena è connesso alla stazione, apra il browser che preferisce e inserisca il seguente indirizzo IP: 192.168.4.1:1234

2\. Accesso: inserisca in questa pagina la password standard 1234567890.

3\. Configuri quindi il Juice Charger 2 secondo le Sue esigenze. 

![Juice Technology – Figura 6](/img/ocpp-ladestationen-juice-technology/06.png)

### Integrazione OCPP

⚠️ Importante: l'URL generato dall'account eCarUp deve essere scomposto secondo l'esempio seguente. 

1.  ws:// va omesso, hostpath e dominio devono essere inseriti singolarmente / separatamente.

2.  (\*\*\*\* deve essere sostituito ad es. con F749E....)

3.  La Chargebox ID non deve contenere spazi

4.  Salvi la configurazione

5.  La stazione si riavvia.


![Juice Technology – Figura 7](/img/ocpp-ladestationen-juice-technology/07.png)

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Può modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![Juice Technology – Figura 8](/img/ocpp-ladestationen-juice-technology/08.png)

![Juice Technology – Figura 9](/img/ocpp-ladestationen-juice-technology/09.png)
