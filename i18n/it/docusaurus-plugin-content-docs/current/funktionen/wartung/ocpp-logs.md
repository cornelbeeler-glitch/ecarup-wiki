---
title: 'OCPP 1.6j'
slug: '/funktionen/wartung/ocpp-logs'
description: 'Per consultare i log OCPP è necessaria la licenza Premium a pagamento'
sidebar_label: 'Log OCPP'
---
Per consultare i log OCPP è necessaria la licenza Premium a pagamento

## OCPP = Open Charge Point Protocol

OCPP è un protocollo applicativo universale che standardizza la comunicazione tra le stazioni di ricarica per veicoli elettrici e un sistema di gestione centrale.

eCarUp supporta attualmente la versione 1.6j

## Analisi e supporto per i log OCPP

### Informazioni sullo stato:

Affinché eCarUp possa visualizzare lo stato corretto della stazione, il sistema ha bisogno del seguente messaggio "StatusNotification" tramite OCPP:

- Available: un connettore/una presa è disponibile per un nuovo utente (conducente). 

- Preparing: un'auto è collegata, ma la ricarica non è ancora stata attivata.

- Charging: un'auto è collegata, l'abilitazione è stata data da eCarUp e la corrente viene erogata. 

- SuspendedEVSE: il veicolo è collegato alla stazione, ma non viene erogata corrente. La causa può essere, ad esempio, la gestione del carico locale. 

- SuspendedEV: la stazione eroga la corrente, ma l'auto non la preleva.

- Unavailable: la stazione non è disponibile.

- Faulted: la stazione ha un problema interno e non può erogare corrente.


### Esempio 1:

![OCPP 1.6j – Figura 1](/img/funktionen-wartung-ocpp-logs/01.png)

### Esempio 2:

![OCPP 1.6j – Figura 2](/img/funktionen-wartung-ocpp-logs/02.jpg)

In questo esempio con la stazione easee, la stazione ci invia uno SuspendedEVSE a causa del VendorErrorCode 55.

Info:

- per l'hardware easee, i vendorErrorCode come nell'esempio sopra si trovano alla seguente pagina: [https://developer.easee.cloud/docs/enumerations](https://developer.easee.com/docs/enumerations)


## Autorizzazione OCPP

### Autenticazione tramite la carta RFID:

- Dai log è possibile identificare se il conducente viene autorizzato o meno e con quale carta RFID (UID) avviene il tentativo di ricarica

- Con l'Authorize viene trasmesso anche l'IdTAG.

- Questo TAG deve essere registrato nell'account del conducente. 

- In caso di Accepted, eCarUp abilita la ricarica.

- In caso di Invalid, eCarUp non abilita la ricarica. 


Le possibili cause sono:

1.  L'UID (idTAG) non è stato assegnato correttamente al conducente

2.  Il conducente non ha l'autorizzazione per la stazione di ricarica

3.  Il conducente non ha registrato una carta di credito valida nel suo account e non può quindi attivare una stazione di ricarica a pagamento. 


Alla seguente pagina trova maggiori informazioni su [RFID](/fahrer/rfid-nfc-tags-carid) ed eCarUp. 

### Esempio:

![OCPP 1.6j – Figura 3](/img/funktionen-wartung-ocpp-logs/03.png)

### Autenticazione tramite il portale web e l'app

- Qui entrano in gioco RemoteStartTransaction o RemoteStopTransaction. 

- Importante: in questo caso l'Id-Tag non può essere ricostruito. 


### Esempio:

![OCPP 1.6j – Figura 4](/img/funktionen-wartung-ocpp-logs/04.jpg)

## errorCode OCPP

### StatusNotification:

- ConnectorLockFailure: la spina non si blocca o non si sblocca

- EVCommunicationError: errore di comunicazione con il veicolo

- GroundFailure: è intervenuto l'interruttore differenziale

- HighTemperature: la temperatura nella stazione di ricarica è troppo alta

- InternalError: errore in un componente hardware o software interno

- NoError: nessun errore

- OtherErro: altro tipo di errore, consultare le informazioni del produttore

- OverCurrentFailure: è intervenuto il dispositivo di protezione da sovracorrente

- OverVoltage: la tensione è salita oltre un livello accettabile

- UnderVoltage: la tensione è scesa sotto un livello accettabile

- PowerMeterFailure: errore nella lettura del contatore di energia

- WeakSignal: la stazione segnala un segnale debole (WLAN, LAN ecc.)


Se questi errori si verificano e persistono, è necessario contattare il produttore della stazione. 

### Esempio:

Estratto della comunicazione dal log di una stazione di ricarica rapida ABB:

 >>"StatusNotification", &#123;"connectorId":0,"errorCode":"OtherError","vendorId":"com.abb.evci/event/v1","vendorErrorCode":"EmergencyButtonReleased"&lt;&lt;

Qui è stato azionato l'arresto di emergenza della stazione.
