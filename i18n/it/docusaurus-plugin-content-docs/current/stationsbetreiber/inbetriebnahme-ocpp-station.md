---
title: 'Messa in servizio della stazione OCPP'
slug: '/stationsbetreiber/inbetriebnahme-ocpp-station'
description: 'eCarUp raccomanda la seguente procedura:'
sidebar_label: 'Messa in servizio della stazione OCPP'
---
## eCarUp raccomanda la seguente procedura:

### 1\. Installazione della stazione

- Si assicuri che la Sua stazione di ricarica sia compatibile con eCarUp. Un elenco sempre aggiornato è disponibile su questa [pagina del Wiki](/ocpp-ladestationen). 

- Installi la Sua stazione e la metta in servizio. Le stazioni devono disporre di una connessione Internet stabile e la porta 53 (DNS) e la porta 80 (o la porta configurata sulla stazione) devono essere aperte in uscita. Per un'integrazione riuscita, le stazioni devono poter comunicare con i nostri server. Si assicuri che la comunicazione non sia bloccata (ad es. da firewall ecc.).

- Se è ancora alla ricerca di una scheda SIM, Le raccomandiamo le schede SIM del nostro [partner](/drittsysteme/provider-sim-karte).

- Deve avere accesso all'interfaccia della stazione e trovarsi nella stessa rete.


⚠️Importante: se la Sua stazione non figura nell'elenco delle stazioni compatibili, La preghiamo di contattarci.

![Messa in servizio della stazione OCPP – figura 1](/img/stationsbetreiber-inbetriebnahme-ocpp-station/01.png)

### 2\. Attivazione e registrazione

- Crei un account eCarUp: [Registrazione](https://admin.ecarup.com/authentication/login).

- Tenga a portata di mano l'URL OCPP per il collegamento tra la stazione e l'account. 

- WS, WSS e WSS incl. Basic Auth. Per saperne di più: [Portale web](/stationsbetreiber/webportal)


Importante: per utilizzare WSS e WSS incl. Basic, la stazione desiderata deve supportarli. 

URL OCPP: 

![Messa in servizio della stazione OCPP – figura 2](/img/stationsbetreiber-inbetriebnahme-ocpp-station/02.png)

- Per poter effettuare il conteggio tramite carta di credito e ricevere il denaro degli incassi, deve verificare il Suo account. Le relative informazioni sono disponibili su questa [pagina](/stationsbetreiber/account-verifizieren).

- Utilizzi la nostra guida per collegare la Sua stazione OCPP al [backend eCarUp](/ocpp-ladestationen).


⚠️Importante: eCarUp non crea i punti di misura in anticipo, ma solo alla prima comunicazione tra la stazione e il backend. Ciò significa che, finché la stazione non invia informazioni tramite il protocollo OCPP, eCarUp non sa che questa stazione di ricarica esiste.  

Ciò può verificarsi nei seguenti casi:

- -   1.  -   nessuna connessione Internet

            - il firewall blocca la comunicazione in uscita

            - la scheda SIM non è attiva o non trova una connessione

- Non appena la stazione ha stabilito attivamente la comunicazione con eCarUp, il sistema crea un punto di misura nel Suo account (gestione delle stazioni (Stationsmanagement)).


### 3\. Configurare il punto di ricarica

Può configurare il punto di ricarica secondo le Sue esigenze.

- Definire [prezzi, ubicazione, utenti speciali e altri parametri](/stationsbetreiber/webportal).

- Affinché gli utenti possano ricaricare nel modo più semplice possibile, può dotare le stazioni anche di [codici QR e di un'etichettatura](/stationsbetreiber/qr-code).

- Se desidera utilizzare anche [tag RFID/NFC](/fahrer/rfid-nfc-tags-carid), qui trova tutte le informazioni.

- Se la stazione deve essere pubblicata facoltativamente nella [rete di roaming](/funktionen/roaming), qui trova tutte le informazioni. Tenga presente le limitazioni che ne derivano riguardo agli orari di apertura e ai prezzi.

- Al termine, eCarUp raccomanda sempre di effettuare una ricarica di prova.




![Messa in servizio della stazione OCPP – figura 3](/img/stationsbetreiber-inbetriebnahme-ocpp-station/03.png)
