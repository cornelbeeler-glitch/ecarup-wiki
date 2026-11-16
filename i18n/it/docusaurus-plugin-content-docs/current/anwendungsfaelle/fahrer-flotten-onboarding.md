---
title: 'Onboarding di conducenti e flotte'
slug: '/anwendungsfaelle/fahrer-flotten-onboarding'
description: 'Un onboarding efficiente di conducenti e flotte è un passo centrale per un utilizzo di successo del sistema eCarUp.'
sidebar_label: 'Onboarding di conducenti e flotte'
---

## Introduzione

Un onboarding efficiente di conducenti e flotte è un passo centrale per un utilizzo di successo del sistema eCarUp. Questo processo garantisce che sia i singoli conducenti sia le grandi flotte di veicoli possano accedere in modo rapido e semplice all'infrastruttura di ricarica. 

- Struttura degli account e analisi: 

    - Per analizzare con precisione le sessioni di ricarica a pagamento per conducente e per veicolo, è indispensabile creare un account separato per ogni conducente.  

    - Per le ricariche gratuite all'interno dell'azienda tramite un account gestore della stazione a cui ha accesso, è anche possibile rilasciare al conducente una RFID da un account centrale conducenti/flotta. Sconsigliamo di farlo nell'account gestore della stazione.

- Gestione degli account: consigliamo di lasciare la registrazione dell'account ai conducenti stessi. Se però viene creato un account flotta (come descritto nella sezione seguente), è opportuna una gestione centralizzata da parte di un amministratore.  

- Carte RFID: le carte per i conducenti possono essere caricate in modo semplice (tramite l'[app](/fahrer/ecarup-app)) oppure, risparmiando tempo, tramite una funzione di caricamento massivo nel portale web. 

- Attivazione e servizio EMP: tenga presente che eCarUp non offre servizi EMP (E-Mobility Provider) propri. Ciò significa che con la Sua carta RFID non può sbloccare stazioni Move, Gofast ecc. Le carte RFID possono essere utilizzate esclusivamente su tutte le stazioni di ricarica eCarUp. 

- ⚠️Importante: tenga presente che le carte RFID di per sé non sono sicure: poiché il numero sulla carta RFID non è univoco, qualcuno potrebbe avere lo stesso numero e avviare quindi una ricarica a Sue spese. Non ci assumiamo alcuna responsabilità per l'uso improprio del Suo numero RFID. L'utilizzo avviene a proprio rischio. 

## Account conducente con 1 o più carte RFID

### Ruolo conducente

App

- Nell'app il conducente può registrare autonomamente le proprie carte RFID. Qui trova la guida corrispondente. [App](/fahrer/rfid-nfc-tags-carid)

### Ruolo gestore della stazione

<div className="row">
<div className="col col--8">

Portale web

- In qualità di gestore della stazione può aggiungere il conducente tramite il singolo connettore oppure tramite la gestione utenti avanzata nel portale web. Ulteriori informazioni sono disponibili qui: [Link](/funktionen/erw-nutzerverwaltung)

</div>
<div className="col col--4 text--center">

![Onboarding di conducenti e flotte – Figura 1](/img/anwendungsfaelle-fahrer-flotten-onboarding/01.png)

</div>
</div>

## Account flotta con più carte RFID che ricaricano su stazioni interne

### Ruolo responsabile della flotta

- Crei un indirizzo e-mail funzionante, ad es. flottenfahrzeuge@ecarup.com

### Portale web

- Acceda al portale web con l'account appena creato, ad es. flottenfahrzeuge@ecarup.com.

- In Conducente (Fahrer) -> Carte RFID (RFID-Karten) -> la carta RFID, i token RFID con il relativo nome possono essere caricati manualmente o tramite file CSV. 

![Onboarding di conducenti e flotte – Figura 2](/img/anwendungsfaelle-fahrer-flotten-onboarding/02.png)

### Esempio:

1 account conducente a cui vengono assegnate più carte RFID per veicoli diversi.

Il CSV per il caricamento può essere strutturato come segue:

Colonna A: nome della carta

Colonna B: token RFID

![Onboarding di conducenti e flotte – Figura 3](/img/anwendungsfaelle-fahrer-flotten-onboarding/03.png)

![Onboarding di conducenti e flotte – Figura 4](/img/anwendungsfaelle-fahrer-flotten-onboarding/04.png)

### Analisi dell'account proprietario della stazione tramite la funzione di reporting

- Maggiori informazioni sulla funzione report sono disponibili qui: [Link](/funktionen/reports)

- Nel CSV trova, tra l'altro, l'e-mail dell'account conducente, la RFID utilizzata e il consumo in kWh.

![Onboarding di conducenti e flotte – Figura 5](/img/anwendungsfaelle-fahrer-flotten-onboarding/05.png)

## Gli indirizzi e-mail alias semplificano la creazione di più account eCarUp.

Un indirizzo e-mail alias è in sostanza un soprannome o una denominazione alternativa per il Suo account e-mail principale effettivo. Può ricevere e-mail a questo indirizzo alias senza che i mittenti conoscano il Suo vero indirizzo e-mail. I messaggi inviati all'alias arrivano automaticamente nella Sua normale casella di posta in arrivo. 

Esempio: con Gmail e Outlook funziona come segue:

- E-mail originale: max.mustermann@ecarup.com

- E-mail alias: max.mustermann+auto123@ecarup.com
