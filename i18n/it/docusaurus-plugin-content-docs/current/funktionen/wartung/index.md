---
title: 'Manutenzione'
slug: '/funktionen/wartung'
description: 'Per utilizzare la funzione di manutenzione è necessaria una licenza eCarUp Premium.'
sidebar_label: 'Manutenzione'
---
Per utilizzare la funzione di manutenzione è necessaria una licenza eCarUp Premium.

[Stazioni di ricarica compatibili](#stazioni-di-ricarica-compatibili)

[Manutenzione](#manutenzione)

[Esempi di Get e Change Configuration](#esempi-di-get-e-change-configuration)

[MeterValueSampleInterval](#metervaluesampleinterval)

[MeterValuesSampledData](#metervaluessampleddata)

[UnlockConnectorOnEVSideDisconnect](#unlockconnectoronevsidedisconnect)

La manutenzione consente di eseguire configurazioni avanzate e la diagnosi delle stazioni OCPP. Serve a individuare e risolvere i guasti delle stazioni OCPP.

<Video src="t3Z3fxK62Ak" title="Video YouTube, Manutenzione delle stazioni di ricarica OCPP - nel portale web eCarUp" />

### Stazioni di ricarica compatibili

La funzione di manutenzione è compatibile con tutte le [stazioni di ricarica OCPP](/ocpp-ladestationen) nel sistema eCarUp.

### Manutenzione

Nella scheda "Manutenzione" (Wartung) è possibile diagnosticare, parametrizzare e configurare in modo avanzato una stazione OCPP. Questo serve da un lato a individuare i guasti e dall'altro a risolverli attivamente e direttamente da remoto (tieni presente che anche la stazione deve supportare questi comandi).

- Visualizzazione dei [log OCPP](/funktionen/wartung/ocpp-logs)


- Unlock Connector: il cavo sulla stazione viene sbloccato

- Reset Device: il software della stazione viene riavviato, ATTENZIONE: le sessioni di ricarica attive vengono interrotte

- Get Configuration: viene mostrata la configurazione attuale della stazione

- Change Configuration: la configurazione può essere modificata

- Get Diagnostics: viene generato un rapporto di errore aggiornato (è necessario un server esterno)

- Firmware: viene mostrata la versione attuale del firmware (è necessario un server esterno)


![Manutenzione – Figura 1](/img/funktionen-wartung/01.png)

## Esempi di Get e Change Configuration

Importante: affinché funzioni, la stazione deve supportare i comandi.

### MeterValueSampleInterval

Per poter visualizzare la potenza di ricarica nell'app, abbiamo bisogno dei MeterValues a intervalli regolari. 

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30-60s. 



Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore) 




![Manutenzione – Figura 2](/img/funktionen-wartung/02.png)

![Manutenzione – Figura 3](/img/funktionen-wartung/03.png)

### MeterValuesSampledData

Affinché nell'app venga visualizzata anche la potenza di ricarica corretta, nei MeterValues ci serve anche il valore Power.Active.Import.

L'interrogazione di una stazione di ricarica può presentarsi così:

![Manutenzione – Figura 4](/img/funktionen-wartung/04.png)

Dall'interrogazione abbiamo visto che manca il valore "Power.Active.Import". 

Ora inseriamo il valore mancante in Change Configuration, come nell'esempio qui sotto, e clicchiamo su Set. 

![Manutenzione – Figura 5](/img/funktionen-wartung/05.png)

### UnlockConnectorOnEVSideDisconnect

Vuoi che il cavo resti bloccato in modo fisso sulla stazione di ricarica?

È possibile interrogare il seguente valore:

![Manutenzione – Figura 6](/img/funktionen-wartung/06.png)

Inserisci il cavo nella stazione e, tramite ChangeConfiguration, imposta il valore su false. 

![Manutenzione – Figura 7](/img/funktionen-wartung/07.png)

[Qui accedi all'analisi e al supporto per i log OCPP](/funktionen/wartung/ocpp-logs).
