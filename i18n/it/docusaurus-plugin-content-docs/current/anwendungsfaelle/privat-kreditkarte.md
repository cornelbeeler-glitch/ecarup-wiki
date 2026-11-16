---
title: 'Ricarica a casa con carta di credito'
slug: '/anwendungsfaelle/privat-kreditkarte'
description: '1\. Informazioni generali'
sidebar_label: 'Privato carta di credito'
---

## 1\. Informazioni generali

Il seguente articolo descrive una configurazione standard per la ricarica a casa con eCarUp (ad esempio per una casa plurifamiliare, una comunità di proprietari per piani o una comunità di autoconsumo).  I conducenti pagano con carta di credito e il credito viene trasferito automaticamente dal conducente al proprietario della stazione.

Il vantaggio di questa variante è che il denaro viene trasferito automaticamente dalla carta di credito del conducente al conto del proprietario della stazione. Ciò comporta due vantaggi decisivi:

1.  L'intero processo di incasso è completamente automatizzato: eCarUp trasferisce il denaro delle transazioni direttamente sul conto del proprietario della stazione subito dopo la loro conclusione. 

2.  In questo modo il credito non è mai in possesso di eCarUp AG e tutte le transazioni (anche, ad esempio, quelle degli ospiti sui parcheggi per visitatori) rientrano nelle disposizioni di legge vigenti.


Nel nostro wiki trova tutte le ulteriori informazioni sul [conteggio con carta di credito](/stationsbetreiber/abrechnen-auszahlen) e sulle [disposizioni di legge relative al credito trasferito](/stationsbetreiber/account-verifizieren).

Il conteggio con carta di credito comporta sempre una commissione del 10%, indipendentemente dal fatto che sia attiva o meno una [licenza eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/).

Con le impostazioni descritte di seguito è possibile configurare su eCarUp il caso d'uso "ricarica a casa con carta di credito". Lo stato finale e i vantaggi sono i seguenti:

- Le stazioni non sono visibili pubblicamente (solo per gli utenti speciali invitati)

- I conducenti possono ricaricare direttamente tramite l'app o la carta RFID (a pagamento)

- "Onboarding" semplice per i conducenti

- I prezzi devono essere adeguati solo 1 volta all'anno (modifica di massa)

- In aggiunta è possibile creare anche un account per la ricarica gratuita (ad esempio per il custode)


Per questo caso d'uso si raccomanda vivamente una [licenza eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/) (altrimenti mancano alcune funzioni importanti come lo strumento di manutenzione, i report o la gestione estesa degli utenti con i gruppi di utenti).

## 2\. Collegare le stazioni di ricarica al backend eCarUp

Per prima cosa le stazioni devono essere collegate al backend eCarUp:

- Nel nostro wiki trova un elenco aggiornato di tutti i [modelli di stazioni di ricarica supportati](/ocpp-ladestationen).

- È inoltre disponibile una [guida passo per passo per l'integrazione delle stazioni](/stationsbetreiber/inbetriebnahme-ocpp-station).

- Affinché il denaro possa essere trasferito sull'account, quest'ultimo deve essere verificato. Le relative informazioni si trovano qui: [Verificare l'account in eCarUp](/sonstige-informationen/stripe). Raccomandiamo di effettuare questo passaggio prima o durante l'installazione delle stazioni di ricarica. Senza verifica, per motivi legali eCarUp non può trasferire denaro sull'account e non sono possibili ricariche a pagamento.



Il denaro trasferito viene accreditato costantemente sul Suo account di proprietario della stazione e può essere versato in qualsiasi momento su un IBAN a scelta alla voce di menu "Account" (Account).

![Ricarica a casa con carta di credito – Figura 1](/img/anwendungsfaelle-privat-kreditkarte/01.png)

## 3\. Configurare le stazioni di ricarica

Una volta collegate a eCarUp, le stazioni di ricarica compaiono nell'account eCarUp nella dashboard e nella gestione delle stazioni.

![Ricarica a casa con carta di credito – Figura 2](/img/anwendungsfaelle-privat-kreditkarte/02.png)

### Impostazioni di base

In seguito le stazioni possono essere configurate cliccando su "Stazioni" (Stationen) e poi su "Gestione stazioni" (Stationsverwaltung):

- Modificare nome e descrizione della stazione

- Eliminare stazioni

- Impostare le ubicazioni

- Modificare le prese (se più di una)

- Definire i tipi di presa (ad esempio Typ 2, CSS o Chademo)

- Definire l'energia massima (ad esempio 22 kW)

- Definire l'accesso (Pubblico (Öffentlich), Limitato (Limitiert) e Privato (Privat))


Pubblico = tutti gli utenti/Limitato = proprietario della stazione e utenti speciali/Privato = SOLO il proprietario della stazione, ovvero l'account in cui sono installate le stazioni

- Impostare i prezzi per energia e tempo

- Definire gli orari riservati

- Attivare la stazione dal portale web


Tutte le [impostazioni per i proprietari delle stazioni](/stationsbetreiber/webportal) sono riassunte in questo articolo del wiki.



### Creare gruppi di stazioni

Per la gestione delle stazioni di ricarica è importante organizzarle in gruppi di stazioni (ad esempio per ubicazione o per palazzina):

![Ricarica a casa con carta di credito – Figura 3](/img/anwendungsfaelle-privat-kreditkarte/03.png)



Una volta completata la configurazione, il risultato può presentarsi così:

![Ricarica a casa con carta di credito – Figura 4](/img/anwendungsfaelle-privat-kreditkarte/04.png)

## 4\. Accesso semplice per i conducenti

Per consentire al conducente un accesso semplice senza grande onere amministrativo, il punto di ricarica viene creato come pubblico e senza indicazione dell'ubicazione. In questo modo il punto di ricarica non compare sulla mappa eCarUp e non è necessaria una gestione particolare degli utenti. Ciononostante, ogni conducente che ha accesso all'autorimessa sotterranea può ricaricare. 

![Ricarica a casa con carta di credito – Figura 5](/img/anwendungsfaelle-privat-kreditkarte/05.png)

### Accesso dei conducenti con gruppi di utenti

Gestire i gruppi di utenti

In questa variante viene creato un gruppo di utenti che viene assegnato alle stazioni. In questo modo, in caso di cambio di inquilino o di nuovi conducenti, è possibile aggiungere o rimuovere facilmente un membro dal gruppo di utenti. Ciò riduce l'onere amministrativo.

- Le stazioni vengono impostate sullo stato "limitato" (limitiert)

- Viene creato un gruppo di utenti con tutti i conducenti autorizzati

- Il gruppo di utenti viene assegnato al gruppo di stazioni


![Ricarica a casa con carta di credito – Figura 6](/img/anwendungsfaelle-privat-kreditkarte/06.png)

![Ricarica a casa con carta di credito – Figura 7](/img/anwendungsfaelle-privat-kreditkarte/07.png)

### Assegnare i conducenti singolarmente

Assegnazione di singoli utenti alle stazioni

In questa variante i singoli conducenti/clienti finali vengono assegnati alle rispettive stazioni; solo il rispettivo utente speciale può sbloccare la propria stazione di ricarica. Ciò significa che, in caso di cambio di inquilino o di nuovi conducenti, gli account devono essere assegnati ogni volta alle stazioni, il che comporta una gestione attiva e costante dell'account.

- Le stazioni vengono impostate sullo stato "limitato" (limitiert)

- L'account del conducente corretto viene abilitato per la stazione con il prezzo corretto

- Per la stazione viene registrata un'ubicazione


![Ricarica a casa con carta di credito – Figura 8](/img/anwendungsfaelle-privat-kreditkarte/08.png)

![Ricarica a casa con carta di credito – Figura 9](/img/anwendungsfaelle-privat-kreditkarte/09.png)

## 5\. Informare i conducenti / clienti finali

Si consiglia di informare i conducenti/clienti finali dell'abilitazione della stazione. Per il pagamento, i conducenti devono creare un proprio account eCarUp e registrare una propria carta di credito valida come mezzo di pagamento:

- Una possibile guida / un modello da inviare ai conducenti è disponibile in questo [documento](https://docs.google.com/document/d/1WVdQFd3flkJsQTIyEgS5zUauPbomZ3kOBfhEasXHgFs/edit).

- [Tutte le funzioni per i conducenti](/fahrer) sono riassunte in una pagina wiki dedicata

- Esistono inoltre delle [FAQ per i conducenti](/faq) con le domande e risposte più importanti.

- I conducenti possono [aggiungere autonomamente tag RFID / NFC al proprio account](/fahrer/rfid-nfc-tags-carid) e utilizzarli poi per sbloccare la stazione di ricarica.


Grazie al sistema flessibile di eCarUp, l'onere amministrativo è ridotto al minimo. I conducenti/clienti finali possono creare e gestire autonomamente gli account.

## 6\. Etichettare le stazioni

Affinché i conducenti possano sbloccare le stazioni anche senza carta RFID e tramite l'app, raccomandiamo di etichettare le stazioni con un codice QR e un breve testo di istruzioni. Ciò è utile ad esempio quando un conducente perde la propria carta RFID o non l'ha con sé.
Trova alcuni [esempi di etichettatura](/stationsbetreiber/qr-code) direttamente in questa pagina wiki.

## 7\. Parcheggi per visitatori

Con eCarUp le stazioni di ricarica possono essere conteggiate anche pubblicamente e quindi nei confronti di conducenti anonimi. A tale scopo, nella configurazione deve essere assegnato alle stazioni lo stato "pubblico" (öffentlich) e deve essere impostata un'ubicazione. Qui è inoltre molto importante l'etichettatura delle stazioni di ricarica, poiché tramite il codice QR è possibile ricaricare anche ad hoc e quindi senza barriere.

Ai parcheggi per visitatori possono essere assegnati senza problemi anche prezzi diversi (vedi sotto). 

Facoltativamente, le stazioni possono anche essere [pubblicate nelle reti di ricarica di terzi tramite la funzione di roaming](/funktionen/roaming). Ciò è possibile però solo se la stazione è pubblicamente disponibile 24 ore su 24, 7 giorni su 7. Deve inoltre essere consapevole che in seguito la stazione sarà trovata da un pubblico molto ampio (nelle più svariate app e nei sistemi di navigazione delle auto) e attirerà quindi utenti esterni.

![Ricarica a casa con carta di credito – Figura 10](/img/anwendungsfaelle-privat-kreditkarte/10.png)

![Ricarica a casa con carta di credito – Figura 11](/img/anwendungsfaelle-privat-kreditkarte/11.png)

## 8\. Analisi e risoluzione degli errori

Con l'aiuto del portale eCarUp è possibile individuare guasti semplici e avviare le misure corrispondenti. Se nella dashboard o nella gestione delle stazioni le stazioni sono visualizzate in grigio e quindi come "inattive" (inaktiv), hanno perso la connessione con il backend (da più di 10  minuti) e per questo non possono essere utilizzate tramite eCarUp. Le cause possibili sono due:

- Interruzione di internet: ripristini la connessione internet. Non appena le stazioni raggiungono di nuovo eCarUp, lo stato passa a "disponibile" (verfügbar), ovvero blu, e le stazioni possono essere nuovamente utilizzate normalmente.

- Interruzione di corrente: ripristini l'alimentazione elettrica. Non appena le stazioni raggiungono di nuovo eCarUp, lo stato passa a "disponibile" (verfügbar), ovvero blu, e le stazioni possono essere nuovamente utilizzate normalmente.


Con lo strumento di manutenzione incluso in [eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/) è possibile tracciare [la comunicazione tra stazione di ricarica e backend](/funktionen/wartung) ed effettuare un'analisi approfondita degli errori.

Se l'errore è più profondo, deve contattare il responsabile del progetto (ad esempio l'elettroinstallatore esecutore).

![Ricarica a casa con carta di credito – Figura 12](/img/anwendungsfaelle-privat-kreditkarte/12.png)

Consiglio pratico: per testare o verificare sul posto il funzionamento delle stazioni, è possibile creare un account per il servizio tecnico o per un'altra persona responsabile sul posto (ad esempio hauswart\[at\]musterhaus.ch). Questo account può essere registrato presso le stazioni come utente speciale con prezzo 0.- per kWh e 0.- per h e può quindi eseguire test gratuitamente.
