---
title: 'Dashboard'
slug: '/funktionen/dashboard'
description: 'Se vede questa barra gialla sul Suo dashboard, non ha ancora verificato correttamente il Suo conto.'
sidebar_label: 'Dashboard'
---
## Barra gialla

Se vede questa barra gialla sul Suo dashboard, non ha ancora verificato correttamente il Suo conto. Il Suo conto può quindi essere limitato e i pagamenti, i versamenti e le sessioni di ricarica possono essere bloccati.

Verifichi il Suo conto con la seguente guida:

![Dashboard – Figura 1](/img/funktionen-dashboard/01.png)

[Verificare il conto](/stationsbetreiber/account-verifizieren)

### Stato della stazione di ricarica

Veda a colpo d'occhio lo stato di tutte le stazioni collegate al Suo conto.
In totale ci sono 4 indicazioni di stato: 

- Disponibile (Verfügbar)
    La Sua stazione è connessa e comunica con il nostro backend.

- Connesso (Verbunden)
    Un'auto è collegata e attende l'avvio di una ricarica.

- Occupato (Besetzt)
    Un'auto è collegata alla stazione e una ricarica è stata avviata.

- Fuori servizio (Ausser Betrieb)
    La stazione di ricarica non comunica con noi. 


![Dashboard – Figura 2](/img/funktionen-dashboard/02.png)

⚠️Importante: con lo stato "fuori servizio (ausser Betrieb)" la stazione non ha alcuna comunicazione attiva con il backend. Dopo 15 minuti contrassegniamo automaticamente la stazione come "fuori servizio (ausser Betrieb)". Se desidera essere avvisato in caso di interruzione, consulti l'impostazione seguente "[Allarme (Alarm)](/funktionen/wartung/alarme)".  

## Ultime sessioni di ricarica

In questa sezione vede le ultime sessioni di ricarica effettuate.
In questa panoramica vede quanto segue:

- Nome della stazione di ricarica presso la quale è stata effettuata la ricarica.

- Entrate generate da questa ricarica.

- Data e ora della sessione di ricarica.

- Quante ore è durata la ricarica e quanti kWh ha consumato. 


## Entrate

Qui vede quanto denaro è disponibile per il pagamento sul Suo conto eCarUp. Non appena effettua un pagamento, l'importo diminuisce. Si tratta quindi solo dell'importo attuale presente sul Suo conto.

Se vede un importo alla voce "Presto disponibile (Bald verfügbar)", il denaro incassato viene verificato da Stripe per escludere il riciclaggio di denaro. La verifica avviene entro poche ore, dopodiché il denaro dovrebbe essere trasferito automaticamente alle entrate normali.
