---
title: 'Ricarica a casa con importazione a 15 minuti'
slug: '/anwendungsfaelle/privat-billing'
description: 'Videoguida: conteggio delle stazioni di ricarica elettriche in smart-me Billing'
sidebar_label: 'Billing privato'
---

<Video src="Mi6Ru4lhTiw" title="Video YouTube, conteggio delle stazioni di ricarica elettriche" />

Videoguida: conteggio delle stazioni di ricarica elettriche in smart-me Billing

## 1\. Informazioni generali

Il seguente articolo descrive una configurazione standard per la ricarica a casa con eCarUp/smart-me (ad esempio per condomini, proprietà per piani o raggruppamenti per il consumo proprio).

Il vantaggio di questa variante è che i dati possono essere importati direttamente dalla stazione (e senza hardware aggiuntivo) nella piattaforma smart-me a intervalli di 15 minuti. Con questa qualità dei dati è poi possibile un conteggio multitariffa, ad esempio con tariffa alta e tariffa bassa, ma anche conteggi RCP inclusa la tariffa solare. 

Questo tipo di conteggio è attualmente possibile solo con i seguenti produttori di stazioni, poiché consentono un'importazione dei dati a 15 minuti:

[Pico](/smart-me-pico)

[easee](/ocpp-ladestationen/easee)

[Zaptec](/ocpp-ladestationen/zaptec)

Le fatture vengono poi create automaticamente nel portale smart-me tramite [smart-me Billing](https://wiki.smart-me.com/konfiguration/billing) e possono essere inviate agli abitanti.

Con le impostazioni descritte di seguito è possibile configurare il caso d'uso "Ricarica a casa con importazione a 15 minuti" su smart-me/eCarUp. Lo stato finale/i vantaggi sono i seguenti:

- Le stazioni non sono visibili pubblicamente (solo per gli utenti speciali invitati)

- I conducenti possono ricaricare direttamente tramite l'app o la carta RFID (a pagamento)

- "Onboarding" semplice per i conducenti

- I prezzi devono essere adeguati solo 1 volta all'anno (modifica di massa)

- In aggiunta è possibile creare anche un account per la ricarica gratuita (ad es. per il custode)

Per questo caso d'uso è necessaria una [licenza eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/)

## 2\. Configurare l'importazione dei dati a 15 minuti verso smart-me

In un primo passo occorre configurare per le stazioni desiderate l'importazione dei dati verso l'account smart-me corretto. Una guida in merito è descritta in un [articolo del Wiki](/funktionen/15-minuten-datenimport) separato.

## 3\. Configurare smart-me Billing

Una volta create le stazioni di ricarica come punti di misura in smart-me, è possibile impostare il conteggio.

La configurazione e l'impostazione di [smart-me Billing](https://wiki.smart-me.com/konfiguration/billing) sono descritte in dettaglio nel Wiki smart-me. Se necessario, per la configurazione si rivolga a uno dei nostri numerosi partner di [smart-me](https://web.smart-me.com/projektpartner/) o di [eCarUp](https://web.ecarup.com/partner-de/).

Se esiste già un RCP con smart-me, le stazioni possono essere riportate in fattura in modo variabile.

### Riportare le stazioni di ricarica come voce di conteggio separata

- Il consumo della stazione di ricarica viene indicato in una fattura separata, oltre al consumo dell'appartamento.

- Questa variante è preferibile soprattutto quando i costi della stazione di ricarica devono essere indicati in una fattura separata (ad es. per la nota spese o in caso di locazione a terzi).

- Opzionalmente è possibile riportare e fatturare anche ulteriori voci (ad es. per il noleggio della stazione di ricarica).

![Ricarica a casa con importazione a 15 minuti – Figura 1](/img/anwendungsfaelle-privat-billing/01.png)

### Assegnare le stazioni di ricarica all'unità abitativa

- Il consumo dell'appartamento e della stazione di ricarica sono rappresentati in un'unica fattura.

- Le stazioni di ricarica vengono conteggiate direttamente nel consumo dell'appartamento come "contatore" aggiuntivo. Non è possibile un'attribuzione esatta del consumo alle singole voci.

![Ricarica a casa con importazione a 15 minuti – Figura 2](/img/anwendungsfaelle-privat-billing/02.png)

Se le stazioni devono essere conteggiate solo tramite smart-me Billing, la configurazione termina qui. In questo caso l'abilitazione/autenticazione deve essere gestita localmente tramite il rispettivo sistema del produttore.

Di seguito viene descritto come integrare inoltre le stazioni nel backend eCarUp:

IMPORTANTE: per il collegamento al backend eCarUp descritto di seguito utilizzi [un account diverso da quello usato per il collegamento con l'importazione a 15 minuti](/funktionen/15-minuten-datenimport). Altrimenti le stazioni vengono create due volte e le licenze acquistate non sono sufficienti.

L'integrazione in eCarUp offre alcuni vantaggi:

- Monitoraggio semplice dei punti di ricarica nella dashboard eCarUp e nei report

- Le stazioni devono essere autenticate tramite eCarUp e possono essere abilitate per gli utenti corretti

- I conducenti vedono la propria cronologia di ricarica nell'app o nel portale web

- Gestione flessibile di RFID/NFC per l'autenticazione alle stazioni

- Le stazioni per i visitatori vengono conteggiate in modo semplice tramite carta di credito 

- Nessun costo aggiuntivo

## 4\. Collegare le stazioni di ricarica al backend eCarUp

Inoltre le stazioni devono essere collegate al backend eCarUp. L'integrazione dei modelli di stazione supportati da questo modello è descritta direttamente presso ciascuno di essi:

[Pico](/smart-me-pico)

[easee](/ocpp-ladestationen/easee)

[Zaptec](/ocpp-ladestationen/zaptec)

È disponibile anche una [guida passo per passo per l'integrazione delle stazioni](/stationsbetreiber/inbetriebnahme-ocpp-station).

Poiché non avviene alcun addebito tramite carta di credito, il prezzo delle stazioni in eCarUp deve essere impostato a 0.- per kWh e 0.- per h. Le transazioni di ricarica vengono registrate come consumo e successivamente richieste tramite fattura in base alla struttura tariffaria impostata nel Billing.

## 5\. Configurare le stazioni di ricarica

Una volta collegate a eCarUp, le stazioni di ricarica compaiono nell'account eCarUp nella dashboard e nella gestione stazioni.

![Ricarica a casa con importazione a 15 minuti – Figura 3](/img/anwendungsfaelle-privat-billing/03.png)

### Impostazioni di base

Successivamente le stazioni vengono configurate cliccando su "Stazioni" ("Stationen") e poi su "Gestione stazioni" ("Stationsverwaltung"):

- Modificare nome e descrizione della stazione

- Eliminare stazioni

- Impostare le ubicazioni

- Modificare le prese (se più di una)

- Definire i tipi di presa (ad es. Typ 2,CSS o Chademo)

- Definire l'energia max.  (ad es. 22 kW)

- Definire l'accesso (pubblico, limitato e privato)

Pubblico = tutti gli utenti / Limitato = proprietario della stazione e utenti speciali

Privato = SOLO il proprietario della stazione o l'account in cui sono installate le stazioni

- Impostare i prezzi per energia e tempo

- Definire gli orari riservati

- Attivare la stazione dal portale web

Tutte le [impostazioni per i proprietari di stazioni](/stationsbetreiber/webportal) sono riassunte in un articolo del Wiki.

### Creare gruppi di stazioni

Per la gestione delle stazioni di ricarica è importante organizzarle in gruppi di stazioni (ad es. per ubicazione o per blocco abitativo):

![Ricarica a casa con importazione a 15 minuti – Figura 4](/img/anwendungsfaelle-privat-billing/04.png)

Una volta configurato, può avere questo aspetto:

![Ricarica a casa con importazione a 15 minuti – Figura 5](/img/anwendungsfaelle-privat-billing/05.png)

### Creare utenti speciali

Affinché le stazioni vengano sbloccate solo dai conducenti/clienti finali autorizzati, le autorizzazioni devono essere impostate di conseguenza. Esistono due possibilità:

1. Gestire i gruppi di utenti

In questa variante viene creato un gruppo di utenti e assegnato alle stazioni. In questo modo, in caso di cambio di inquilino o di nuovi conducenti aggiuntivi, è possibile aggiungere o rimuovere facilmente un membro dal gruppo di utenti. Ciò riduce l'onere amministrativo.

- Le stazioni vengono impostate sullo stato "limitato" ("limitiert")

- Viene creato un gruppo di utenti con tutti i conducenti autorizzati

- Il gruppo di utenti viene assegnato al gruppo di stazioni

- Viene registrata un'ubicazione per le stazioni

![Ricarica a casa con importazione a 15 minuti – Figura 6](/img/anwendungsfaelle-privat-billing/06.png)

![Ricarica a casa con importazione a 15 minuti – Figura 7](/img/anwendungsfaelle-privat-billing/07.png)

2. Assegnare singoli utenti alle stazioni

In questa variante i singoli conducenti/clienti finali vengono assegnati alle rispettive stazioni. Solo l'utente speciale può sbloccare la propria stazione di ricarica. Ciò significa che in caso di cambio di inquilino o di nuovi conducenti gli account devono essere assegnati ogni volta alle stazioni. L'account deve essere gestito attivamente in modo continuo.

- Le stazioni vengono impostate sullo stato "limitato" ("limitiert")

- L'account del conducente corretto viene abilitato con il prezzo corretto per la stazione

- Viene registrata un'ubicazione per la stazione

![Ricarica a casa con importazione a 15 minuti – Figura 8](/img/anwendungsfaelle-privat-billing/08.png)

![Ricarica a casa con importazione a 15 minuti – Figura 9](/img/anwendungsfaelle-privat-billing/09.png)

## 6\. Informare i conducenti / clienti finali

Si consiglia di informare i conducenti/clienti finali dell'abilitazione della stazione.  Per il pagamento i conducenti devono creare un proprio account eCarUp e registrare una carta di credito valida come mezzo di pagamento:

- Una  possibile guida/modello da inviare ai conducenti è disponibile in questo [documento](https://docs.google.com/document/d/1WVdQFd3flkJsQTIyEgS5zUauPbomZ3kOBfhEasXHgFs/edit).

- [Tutte le funzioni per i conducenti](/fahrer) sono riassunte in una pagina del Wiki dedicata.

- Esiste inoltre anche una [FAQ per i conducenti](/faq) con le domande e risposte più importanti.

- I conducenti possono [aggiungere autonomamente tag RFID/NFC al proprio account](/fahrer/rfid-nfc-tags-carid) e utilizzarli poi per sbloccare la stazione di ricarica.

Con il sistema flessibile di eCarUp l'onere amministrativo è ridotto al minimo. I conducenti/clienti finali possono creare e gestire gli account in modo autonomo.

## 7\. Etichettare le stazioni

Affinché i conducenti possano sbloccare le stazioni anche senza carta RFID e con l'app, consigliamo di etichettare le stazioni con un codice QR e un breve testo di istruzioni. Ciò è utile ad es. se un conducente perde la propria carta RFID o non l'ha con sé.

Trova alcuni [esempi di etichettatura](/stationsbetreiber/qr-code) direttamente in questa pagina del Wiki.

## 8\. Parcheggi per visitatori

<div className="row">
<div className="col col--6">

Con eCarUp le stazioni di ricarica possono essere conteggiate anche pubblicamente e quindi nei confronti di conducenti anonimi. A tale scopo, nella configurazione occorre assegnare alle stazioni lo stato "pubblico" ("öffentlich") e impostare un'ubicazione. Inoltre in questo caso l'etichettatura delle stazioni di ricarica è molto importante, poiché tramite il codice QR si ricarica anche ad hoc e quindi senza barriere.

Ai parcheggi per visitatori è possibile assegnare senza problemi anche prezzi diversi. (vedi sotto).

Opzionalmente le stazioni possono anche essere pubblicate [tramite la funzione di roaming nelle reti di ricarica di terzi](/funktionen/roaming). Ciò è possibile però solo se la stazione è disponibile pubblicamente 24 ore su 24, 7 giorni su 7. Deve essere consapevole che la stazione sarà poi trovata molto ampiamente (nelle app più diverse e nei sistemi di navigazione delle auto) e attirerà quindi utenti esterni.

</div>
<div className="col col--6 text--center">

![Ricarica a casa con importazione a 15 minuti – Figura 10](/img/anwendungsfaelle-privat-billing/10.png)

</div>
</div>

![Ricarica a casa con importazione a 15 minuti – Figura 11](/img/anwendungsfaelle-privat-billing/11.png)

## 9\. Analisi e risoluzione degli errori

Con l'aiuto del portale eCarUp vengono riconosciuti i guasti semplici e avviate le misure corrispondenti. Se le stazioni nella dashboard o nella gestione stazioni sono visualizzate in grigio e quindi come "inattive" ("inaktiv"), hanno perso la connessione con il backend (da più di 10  minuti) e per questo non possono essere utilizzate tramite eCarUp. Due possibili cause:

Interruzione di Internet: ripristini la connessione Internet. Non appena le stazioni raggiungono di nuovo eCarUp, lo stato passa a "disponibile" ("verfügbar") ovvero blu e possono essere nuovamente utilizzate normalmente.

Interruzione di corrente: ripristini l'alimentazione elettrica. Non appena le stazioni raggiungono di nuovo eCarUp, lo stato passa a "disponibile" ("verfügbar") ovvero blu e possono essere nuovamente utilizzate normalmente.

Con lo strumento di manutenzione incluso in eCarUp Premium è possibile tracciare la comunicazione tra stazione di ricarica e backend ed effettuare un'analisi approfondita degli errori.

Se l'errore è più profondo, deve contattare il responsabile del progetto (ad es. l'elettroinstallatore esecutore).

![Ricarica a casa con importazione a 15 minuti – Figura 12](/img/anwendungsfaelle-privat-billing/09.png)

![Ricarica a casa con importazione a 15 minuti – Figura 13](/img/anwendungsfaelle-privat-billing/13.png)

Consiglio pratico: per testare o verificare sul posto il funzionamento delle stazioni, è possibile creare un account per il servizio tecnico o per un'altra persona responsabile sul posto (ad es. hauswart\[at\]musterhaus.ch). Questo account può essere registrato presso le stazioni come utente speciale con prezzo 0 per kWh e 0 per h e può quindi eseguire test senza costi.
