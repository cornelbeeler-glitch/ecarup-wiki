---
title: 'BoxProxy Green Motion'
slug: '/drittsysteme/box-proxy-green-motion'
description: 'IMPORTANTE: L''utilizzo del software BoxProxy richiede sempre una licenza eCarUp Premium per ogni punto di ricarica: ulteriori informazioni'
sidebar_label: 'Box-Proxy Green Motion'
---
IMPORTANTE: L'utilizzo del software BoxProxy richiede sempre una licenza eCarUp Premium per ogni punto di ricarica: [Ulteriori informazioni](https://web.ecarup.com/preise-ladestationen-backend/) 

eCarUp ha sviluppato un software che consente di trasferire nel backend eCarUp i modelli meno recenti di stazioni di ricarica GreenMotion / Eaton. Una volta collegate a noi seguendo la guida riportata in questa pagina del wiki, possono essere utilizzate come tutti gli altri modelli di stazioni di ricarica compatibili con eCarUp. 

[Webinar eCarUp Backend basic + Box Proxy / Green Motion](/drittsysteme/box-proxy-green-motion/webinar-ecarup-backend-basic-eaton) (DE) incl. FAQ

[Link BoxProxy](https://web.boxproxy.ecarup.com)

## Stazioni di ricarica OCPP

I modelli più recenti di stazioni di ricarica GreenMotion / EATON possono essere integrati nella piattaforma eCarUp seguendo la guida OCPP. Non è un problema combinare i diversi tipi di stazioni di ricarica in un unico account eCarUp. A parte il tipo di integrazione, la funzionalità delle stazioni di ricarica su eCarUp non cambia.

I seguenti modelli di stazioni di ricarica sono attualmente supportati dal [protocollo OCPP](/ocpp-ladestationen):

[Green Motion Building](/ocpp-ladestationen/eaton)

[Green Motion DC 22 & 26](/ocpp-ladestationen/eaton)

## Stazioni di ricarica Box Proxy

<div className="row">
<div className="col col--8">

Il Box Proxy è disponibile da subito per l'integrazione delle stazioni Green Motion. Ciò significa che le stazioni di ricarica possono già essere collegate alla piattaforma eCarUp e testate seguendo la guida riportata di seguito. Potrebbero tuttavia seguire ancora ampliamenti e/o miglioramenti.

Attualmente sono supportati i seguenti modelli di stazioni di ricarica:

- Private-One con un connettore

- xChargeLN xCIM Client con un connettore

- Network TWO

- Smart One

- È sufficiente migrare la Smart One. Le stazioni collegate vengono riconosciute e visualizzate automaticamente in eCarUp.

- Master One

Ulteriori modelli vengono verificati continuamente e aggiunti a questo elenco dopo l'integrazione riuscita. Fino alla verifica positiva non possiamo offrire supporto in caso di errori.

</div>
<div className="col col--4 text--center">

![BoxProxy Green Motion – Figura 1](/img/drittsysteme-box-proxy-green-motion/01.png)

</div>
</div>

Stazione di ricarica con tre connettori, ad es. Smart One con tre Private One.

## Connessione Internet

### Scheda SIM

⚠️Importante: anche la scheda SIM di Eaton installata nella stazione viene disattivata al momento dello spegnimento. Se desidera mantenere la connessione al backend eCarUp, è quindi importante sostituire per tempo la scheda SIM. Se non ha ancora scelto un operatore, le consigliamo il seguente:  [LINK](/drittsysteme/provider-sim-karte). 

## Esempio di integrazione della Private One

<Video src="wPLyrBUKTU4" title="Video YouTube" />

## Guida Box Proxy

Passo 1

- Se la stazione di ricarica si trova dietro un firewall, occorre aprire anche la porta 83 TCP verso l'IP 74.242.170.252.

Passo 2

- Per collegare la stazione alla piattaforma eCarUp sono necessari il BoxID e il ServerKey.

- Per ottenere queste informazioni, occorre estrarre la scheda SD dalla stazione di ricarica. 

Ecco un esempio dalla Network TWO

![BoxProxy Green Motion – Figura 2](/img/drittsysteme-box-proxy-green-motion/02.jpg)

Passo 3

- Inserisca la scheda SD nel PC e apra il file. 

- Clicchi su "settings"

- Modifichi ora manualmente l'indirizzo ServerHostname in 74.242.170.252

- Copi il Box ID e il ServerKey. 

- Salvi il file di testo.

- Reinserisca la scheda nel controller; la stazione si riavvia. 

![BoxProxy Green Motion – Figura 3](/img/drittsysteme-box-proxy-green-motion/03.png)

![BoxProxy Green Motion – Figura 4](/img/drittsysteme-box-proxy-green-motion/04.png)

<div className="row">
<div className="col col--8">

Passo 4

- Registri la stazione nel tool eCarUp BoxProxy utilizzando il seguente link: [https://web.boxproxy.ecarup.com](https://web.boxproxy.ecarup.com)

- Importante: qui servono le credenziali di accesso eCarUp; se non le ha ancora create, è disponibile una guida in merito.

Creare un account: [/stationsbetreiber/webportal

](/stationsbetreiber/webportal)

- Clicchi su Accept (l'account di destinazione viene visualizzato in alto).

</div>
<div className="col col--4 text--center">

![BoxProxy Green Motion – Figura 5](/img/drittsysteme-box-proxy-green-motion/05.png)

</div>
</div>

Passo 5

- Nel menu vada su "Stazioni" ("Stationen") e clicchi su "Aggiungi" ("Hinzufügen").

![BoxProxy Green Motion – Figura 6](/img/drittsysteme-box-proxy-green-motion/06.png)

Passo 6

- Inserisca qui l'ID e la chiave segreta copiati al passo 3 e clicchi su salva (speichern). 

![BoxProxy Green Motion – Figura 7](/img/drittsysteme-box-proxy-green-motion/07.png)

Passo 7

- La stazione dovrebbe riavviarsi; se ciò non avviene, esegua un riavvio manuale. 

- Torni al tool eCarUp BoxProxy e verifichi lo stato.

- Se lo stato è "online", ha eseguito tutto correttamente. 

![BoxProxy Green Motion – Figura 8](/img/drittsysteme-box-proxy-green-motion/08.png)

Passo 8

- Torni ora al suo account eCarUp tramite il seguente link: [https://admin.ecarup.com/authentication/login](https://admin.ecarup.com/authentication/login)

- La stazione è stata creata e può configurarla come di consueto nel portale web eCarUp. 

## Caso speciale Network 2 (novità dal 1.6.2026)

Contesto e problematica

La comunicazione tramite la Network 2 segue una logica diversa. A causa di problemi nella disattivazione delle sessioni di ricarica si sono resi necessari degli interventi di ottimizzazione. Nel Q2 2026 abbiamo ricevuto da eaton le informazioni e i presupposti necessari per risolvere in modo mirato questi problemi e migliorare il processo.

Implementazione tecnica ed eccezioni

Poiché il sistema non è in grado di identificare il tipo specifico di stazione di ricarica, non è possibile una conversione automatica in blocco; l'adeguamento deve essere effettuato manualmente per ogni stazione. È tuttavia possibile che l'adeguamento sia già stato eseguito in background; ciò può accadere se è stato elaborato un ticket di supporto in cui abbiamo potuto attribuire chiaramente il problema a questa specifica stazione. Non vi è alcuna garanzia che ciò avvenga sistematicamente.

Guida per la conversione

- Aprire [https://web.boxproxy.ecarup.com](https://web.boxproxy.ecarup.com)

- Accedere al proprio account

- Selezionare Stazioni (Stationen)

- Selezionare la stazione interessata

- Selezionare Modifica (Editieren)

- Impostare il tipo di stazione su Network 2

- Salvare

![BoxProxy Green Motion – Figura 9](/img/drittsysteme-box-proxy-green-motion/09.png)

## Dove si trova la scheda SD?

### smart-one

⚠️Importante: nella Smart-One l'unità di controllo (box grigio) assume il comando centrale e integra le due stazioni Private One come connessioni remote. 

![BoxProxy Green Motion – Figura 10](/img/drittsysteme-box-proxy-green-motion/10.png)

![BoxProxy Green Motion – Figura 11](/img/drittsysteme-box-proxy-green-motion/11.jpg)

![BoxProxy Green Motion – Figura 12](/img/drittsysteme-box-proxy-green-motion/12.jpg)

### Network TWO

![BoxProxy Green Motion – Figura 13](/img/drittsysteme-box-proxy-green-motion/13.jpg)

![BoxProxy Green Motion – Figura 14](/img/drittsysteme-box-proxy-green-motion/14.jpg)

### Private One

![BoxProxy Green Motion – Figura 15](/img/drittsysteme-box-proxy-green-motion/15.jpg)

## Firewall

Se la stazione di ricarica si trova dietro un firewall, occorre aprire anche la porta 83 TCP verso l'IP 74.242.170.252.

## Plug and Charge

Segua i passaggi descritti.

- Crei un nuovo account conducente eCarup. Importante: deve trattarsi di un nuovo account sul quale non devono essere registrate carte di credito.

- Nell'account vada su Conducente (Fahrer).

- Selezioni Carta RFID (RFID-Karte).

- Aggiunga la carta RFID con nome della carta e Tag-ID. Per il Tag-ID utilizzi solo cifre da 0 a 9 e lettere da A a F. Consigliamo inoltre una lunghezza di circa 10 caratteri casuali, ad es. 76435abd56. Il numero di caratteri deve essere pari.

- Acceda al Box Proxy con il suo account admin eCarUp (account del gestore della stazione). Si tratta dell'account con cui ha collegato le stazioni Box Proxy: [https://web.boxproxy.ecarup.com/](https://web.boxproxy.ecarup.com/) 

- Verifichi che in questo account siano collegate le stazioni sulle quali desidera utilizzare Plug and Charge.

- Vada al menu «Impostazioni account» («Account Einstellungen»).

- Copi il tag senza i :, registrato nel suo account conducente eCarup, ad es. 76435ABD56.

- Salvi l'impostazione.

- Acceda all'account admin eCarUp (account del gestore della stazione).

- Aggiunga a ogni stazione l'e-mail dell'account conducente eCarUp, con un prezzo di 0 CHF

- Oppure aggiunga l'e-mail a un gruppo di utenti che può ricaricare gratuitamente.

Cosa succede ora:

- Ora tutte le stazioni di ricarica che nel file Settings locale hanno RFIDType = 0 avvieranno automaticamente la ricarica.

- Nei report tutte le stazioni di ricarica vengono ora visualizzate con l'e-mail dell'account conducente eCarup.

![BoxProxy Green Motion – Figura 16](/img/drittsysteme-box-proxy-green-motion/16.png)

![BoxProxy Green Motion – Figura 17](/img/drittsysteme-box-proxy-green-motion/17.png)

![BoxProxy Green Motion – Figura 18](/img/drittsysteme-box-proxy-green-motion/18.png)

![BoxProxy Green Motion – Figura 19](/img/drittsysteme-box-proxy-green-motion/19.png)

## Problemi noti / limitazioni delle stazioni eaton

### Limitazioni dei permessi utente su più connettori

Se una stazione di ricarica dispone di più connettori (prese), la gestione dei permessi degli utenti deve essere identica su tutti i connettori. Non deve esistere una configurazione in cui, ad esempio, un utente è autorizzato a ricaricare sul connettore 1, ma non sul connettore 2, ossia in cui i permessi sono diversi. Inoltre Hubject non deve essere attivato.

![BoxProxy Green Motion – Figura 20](/img/drittsysteme-box-proxy-green-motion/20.png)

Quando si verifica il problema?

Questo problema si verifica quando gli utenti utilizzano una carta RFID per avviare la sessione di ricarica.

Perché si verifica il problema?
Attualmente, durante l'"Authorize", la stazione di ricarica ci trasmette solo i dati della carta RFID, ma non il numero del connettore utilizzato. Ciò è dovuto allo standard OCPP. Per questo motivo inviamo sempre una risposta "Accepted" non appena viene presentata la carta RFID.

```
[2, "b5790013-43ad-0f00-384e-b4799a00ad0e", "Authorize", {"idTag":"ABCD"}]
[3, "eff00013-902d-27df-4b4e-9d6ae7f5ad7f", {"idTagInfo":{"status":"Accepted","expiryDate":"2025-07-10T13:00:36.754Z"}}]
```

Solo in seguito, quando la stazione di ricarica ci invia lo "StartTransaction", riceviamo l'informazione sul connettore utilizzato. A questo punto il nostro sistema verifica nuovamente la validità della combinazione con la carta RFID. Se la combinazione non è valida, restituiamo lo stato "Invalid".

```
[2, "31f10017-fe9a-9de1-cb45-85f36ce47d0c", "StartTransaction", {"connectorId":1,"idTag":"ABCD","meterStart":0,"timestamp":"2025-07-09T13:00:34Z"}]
[3, "31f10017-fe9a-9de1-cb45-85f36ce47d0c", {"idTagInfo":{"status":"Invalid","expiryDate":"2025-07-09T13:00:39.489Z"},"transactionId":66039489}]
```

Questo produttore di colonnine di ricarica non interpreta correttamente la nostra risposta "Invalid" all'avvio della transazione. Non possiamo modificare il comportamento della stazione di ricarica e ciò deve essere tenuto in considerazione nella configurazione degli utenti.

### Un consumo di 0 kWh viene trasmesso al nostro sistema

Può accadere che, al riavvio della stazione di ricarica, venga trasmesso erroneamente al nostro sistema un consumo di 0 kWh. Ciò può portare a conteggi errati.

Quando si verifica il problema?

Su determinate stazioni, quando si riavviano. 

Perché si verifica il problema?
A causa di un errore sulla stazione di ricarica

![BoxProxy Green Motion – Figura 21](/img/drittsysteme-box-proxy-green-motion/21.png)

Come si può riconoscere il problema?

Nei log viene inviato ad es. un Meter Value di 1338

\[2, "b4a3001c-b5f5-576c-ae4d-83b28150ee34", "MeterValues", &#123;"connectorId":1,"transactionId":295103899,"meterValue":\[&#123;"timestamp":"2025-08-04T10:34:11.278Z","sampledValue":\[&#123;"value":"1338","context":"Sample.Periodic","format":"Raw","measurand":"Energy.Active.Import.Register","location":"Body","unit":"Wh"&#125;,&#123;"value":"0","context":"Sample.Periodic","format":"Raw","measurand":"Power.Active.Import","location":"Body","unit":"W"&#125;\]&#125;\]&#125;\]

Successivamente, durante la ricarica attiva, viene trasmesso un Meter Value di 0. La stazione riparte quindi da 0 kWh e poi riprende a contare.

\[2, "cdf2001c-71f6-3991-734e-94e99d4bff05", "MeterValues", &#123;"connectorId":1,"transactionId":295103899,"meterValue":\[&#123;"timestamp":"2025-08-04T10:35:10.88Z","sampledValue":\[&#123;"value":"0","context":"Sample.Periodic","format":"Raw","measurand":"Energy.Active.Import.Register","location":"Body","unit":"Wh"&#125;,&#123;"value":"0","context":"Sample.Periodic","format":"Raw","measurand":"Power.Active.Import","location":"Body","unit":"W"&#125;\]&#125;\]&#125;\]

Come è stato risolto il problema?

Il 18.08.2025 il produttore Eaton ci ha fornito nuove informazioni che mostrano come questo problema potrebbe essere risolto con un workaround. Il nostro team di sviluppo software ha esaminato immediatamente queste informazioni ed è riuscito a risolvere con successo il problema delle sessioni di ricarica a 0 kWh il 21.08.2025. Da quel momento i conteggi delle sessioni di ricarica sulle stazioni di ricarica interessate dovrebbero essere corretti e non presentare più l'errore descritto.

Con questa correzione abbiamo implementato soltanto un workaround che, nel conteggio, risolve il problema delle letture del contatore trasmesse in modo errato dalla stazione di ricarica.
