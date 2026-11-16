---
title: 'Analisi degli errori OCPP'
slug: '/stoerungsbehebung/ocpp-fehleranalyse'
description: 'Qui sono descritti diversi errori che possono essere letti e analizzati con un log OCPP.'
sidebar_label: 'Analisi degli errori OCPP'
---
Qui sono descritti diversi errori che possono essere letti e analizzati con un log OCPP.

## OCPP = Open Charge Point Protocol

OCPP è un protocollo applicativo universale che standardizza la comunicazione tra le stazioni di ricarica per veicoli elettrici e un sistema di gestione centrale.

eCarUp supporta attualmente la versione 1.6j

⚠️ Importante: la stazione di ricarica Pico non supporta il protocollo OCPP e dispone di log propri, più limitati.

## Generare un log OCPP della stazione di ricarica

<div className="row">
<div className="col col--8">

Nel portale, sul lato sinistro, vada alla voce "Manutenzione" ("Wartung") e poi su "Azioni" ("Aktionen").

</div>
<div className="col col--4 text--center">

![Analisi degli errori OCPP – Figura 1](/img/stoerungsbehebung-ocpp-fehleranalyse/01.png)

</div>
</div>

Quindi clicchi sui tre puntini che si trovano sul lato destro della stazione di ricarica interessata.

Dovrebbe quindi aprirsi un menu, nel quale clicca su "Log" ("Logs").

![Analisi degli errori OCPP – Figura 2](/img/stoerungsbehebung-ocpp-fehleranalyse/02.png)

Dovrebbe aprirsi un menu nel quale può filtrare per data di inizio e data di fine. Conviene impostare 1 giorno prima e 1 giorno dopo, in modo che vengano visualizzate tutte le informazioni. Se il tentativo di ricarica è stato effettuato il 05.05.2025, occorre quindi scegliere come data di inizio il 04.05.2025 e come data di fine il 06.05.2025 (a meno che il tentativo sia stato effettuato nella data odierna)

In seguito, in basso dovrebbero comparire i log. Se, come mostrato nell'esempio, non sono disponibili log, è possibile che la stazione non ci invii alcun log e quindi non comunichi con eCarUp. In tal caso l'errore si trova per lo più dal lato della stazione di ricarica o della configurazione.

Se compaiono voci di log, occorre verificare che riportino anche la data indicata. Attenzione: l'orario è in UTC, quindi, se la stazione di ricarica si trova in Europa, l'orario nei log è spostato di una o due ore.

Dopo aver impostato e controllato tutto correttamente, può cliccare su "Esporta CSV" ("CSV exportieren") e scaricare così un CSV con i log.

![Analisi degli errori OCPP – Figura 3](/img/stoerungsbehebung-ocpp-fehleranalyse/03.png)

![Analisi degli errori OCPP – Figura 4](/img/stoerungsbehebung-ocpp-fehleranalyse/04.png)

⚠️ Importante: per generare un log è necessaria una licenza eCarUp-Premium

### Il Tag ID è "" &lt;null>

Request In StartTransaction \[2,"33736216","StartTransaction",&#123;"connectorId":1,"meterStart":9664049,"idTag":"","timestamp":"2025-08-14T11:40:44Z"&#125;\]

Se la stazione ci invia un "idTag":""

- Occorre verificare che la messa in servizio sia stata eseguita secondo la guida in [Stazioni di ricarica OCPP](/ocpp-ladestationen).

- Se il problema non viene risolto in questo modo, deve essere analizzato insieme al produttore della stazione di ricarica. Ci invii pure la soluzione, così potremo integrare il wiki di conseguenza.

![Analisi degli errori OCPP – Figura 5](/img/stoerungsbehebung-ocpp-fehleranalyse/05.png)

### Stato Authorize invalide

Authorize \[2, "6b2ff788-524f-47e0-9a6d-7843ff2caccbb", "Authorize", &#123;"idTag":"xxxxx"&#125;\]

Authorize \[3, "6b2ff788-524f-47e0-9a6d-7843ff2caccbb", &#123;"idTagInfo":&#123;"status":"Invalid","expiryDate":"2025-12-10T06:26:06.234Z"&#125;&#125;\] 

Non si tratta direttamente di un errore, ma significa che qualcuno presenta una carta RFID alla stazione.

Se dopo un Authorize viene visualizzato „invalide”, significa

- o che non possiamo associare la carta RFID a nessun account,

- oppure che la carta RFID è associata a un account, ma questo account non può ricaricare presso la stazione, perché la stazione è limitata o privata.

- oppure che la persona tenta di ricaricare presso una stazione di ricarica a pagamento, ma non ha aggiunto una carta di credito valida al proprio account.

![Analisi degli errori OCPP – Figura 6](/img/stoerungsbehebung-ocpp-fehleranalyse/06.png)

### Tariffs or currency not or invalidly configured

StatusNotification

\[2, "16927", "StatusNotification", &#123;"connectorId":1,"errorCode":"OtherError","info":"Tariffs or currency not or invalidly configured","status":"Faulted","vendorErrorCode":"214"&#125;\]
