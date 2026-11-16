---
title: 'Ricarica pubblica'
slug: '/anwendungsfaelle/oeffentlich'
description: '1\. Informazioni generali'
sidebar_label: 'Pubblica'
---

## 1\. Informazioni generali

Il seguente articolo descrive una configurazione standard per allestire e gestire una stazione di ricarica pubblica con eCarUp. I conducenti pagano con carta di credito e l'importo viene trasferito automaticamente dal conducente al proprietario della stazione. Se la Sua stazione è a disposizione in modo semipubblico (ad es. all'interno di una PMI), abbiamo documentato questo caso in un [articolo del wiki](/anwendungsfaelle/laden-im-kmu) separato.

Il vantaggio di questa variante consiste nel fatto che il denaro viene trasferito automaticamente dalla carta di credito del conducente al conto del proprietario della stazione. 

Ciò comporta due vantaggi decisivi:

1.  L'intero processo d'incasso è completamente automatizzato: eCarUp trasferisce il denaro delle transazioni sul conto del proprietario della stazione direttamente al loro termine. 

2.  In questo modo il credito non è mai in possesso di eCarUp AG e tutte le transazioni (anche ad es. quelle degli ospiti sui parcheggi per visitatori) rientrano nelle disposizioni di legge vigenti.

Nel nostro wiki trova tutte le ulteriori indicazioni sul [conteggio tramite carta di credito](/stationsbetreiber/abrechnen-auszahlen) e sulle [disposizioni di legge relative al credito trasferito](/stationsbetreiber/account-verifizieren).

Il conteggio tramite carta di credito comporta sempre una commissione del 10%, indipendentemente dal fatto che una [licenza eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/) sia attiva o meno.

Per questo caso d'uso si raccomanda vivamente una [licenza eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/) (altrimenti mancano alcune funzioni importanti come lo strumento di manutenzione, i report o il roaming).

## 2\. Collegare le stazioni di ricarica al backend eCarUp

Per prima cosa le stazioni devono essere collegate al backend eCarUp:

- Nel nostro wiki trova un elenco aggiornato di tutti i [modelli di stazioni di ricarica supportati](/ocpp-ladestationen).

- È inoltre disponibile una [guida passo per passo per l'integrazione delle stazioni](/stationsbetreiber/inbetriebnahme-ocpp-station).

- Affinché il denaro possa essere trasferito sull'account, quest'ultimo deve essere verificato. Le informazioni in merito sono disponibili qui: [Verificare l'account in eCarUp](/sonstige-informationen/stripe). Raccomandiamo di eseguire questo passaggio prima o durante l'installazione delle stazioni di ricarica. Senza verifica, per motivi legali eCarUp non può trasferire denaro sull'account e non sono possibili ricariche a pagamento.

    Il denaro trasferito viene accreditato costantemente sul Suo account di proprietario della stazione e può essere versato in qualsiasi momento su un IBAN a scelta alla voce di menu "Account" (Account).

![Ricarica pubblica – Figura 1](/img/anwendungsfaelle-oeffentlich/01.png)

## 3\. Configurare le stazioni di ricarica

Una volta collegate a eCarUp, le stazioni di ricarica compaiono nell'account eCarUp nel dashboard e nella gestione delle stazioni.

Con eCarUp le stazioni di ricarica possono essere conteggiate senza problemi in modo pubblico, quindi anche nei confronti di conducenti anonimi. A tale scopo, nella configurazione occorre assegnare alle stazioni lo stato "pubblico" (öffentlich) e impostare un'ubicazione. 

![Ricarica pubblica – Figura 2](/img/anwendungsfaelle-oeffentlich/02.png)

### Impostazioni di base

In seguito le stazioni possono essere configurate cliccando su "Stazioni" (Stationen) e poi su "Gestione stazioni" (Stationsverwaltung):

- Modificare nome e descrizione della stazione

- Eliminare stazioni

- Impostare ubicazioni

- Modificare le prese (se più di una)

- Definire i tipi di presa (ad es. Typ 2,CSS o Chademo)

- Definire l'energia max.  (ad es. 22 kW)

- Definire l'accesso (Pubblico, Limitato e Privato)

Pubblico = tutti gli utenti / Limitato = proprietario della stazione e utenti speciali / Privato = SOLO il proprietario della stazione o l'account in cui sono installate le stazioni

- Impostare i prezzi per energia e tempo

- Definire orari riservati

- Attivare la stazione dal portale web

Tutte le [impostazioni per i proprietari delle stazioni](/stationsbetreiber/webportal) sono riassunte in un articolo del wiki.

Una volta completata la configurazione, il risultato può presentarsi così:

![Ricarica pubblica – Figura 3](/img/anwendungsfaelle-oeffentlich/03.png)

## 4\. Etichettare le stazioni

Nella ricarica accessibile al pubblico l'etichettatura delle stazioni di ricarica è molto importante, affinché i conducenti sappiano come sbloccare la stazione di ricarica. Con un'etichettatura chiara può anche comunicare ai conducenti informazioni importanti, come ad es. regole aggiuntive (durata massima di parcheggio, tariffe di parcheggio ecc.).

Per lo sblocco direttamente tramite eCarUp esistono due possibilità:

### Ricarica tramite l'app eCarUp

- -   Il conducente scarica l'app gratuita eCarUp (Android/Apple)

    - Crea un account e registra una carta di credito valida come mezzo di pagamento

    - Può sbloccare la stazione scansionando il codice QR nell'app oppure premendo un pulsante tramite la funzione mappa ([Guida alla ricarica tramite Webstory](https://web.ecarup.com/web-stories/laden-mit-der-ecarup-app/))

    - Al termine della sessione di ricarica l'importo dovuto viene addebitato automaticamente sulla carta di credito registrata

    - Una [descrizione dettagliata per i conducenti](/fahrer) è disponibile nel wiki  o in queste [FAQ](/faq)

### Ricarica ad hoc tramite codice QR

<div className="row">
<div className="col col--6">

- Il conducente scansiona il codice QR sulla stazione con la fotocamera dello smartphone o con un'app per la scansione di codici QR

- Accede a una pagina web mobile dove, indicando i dati della carta di credito, può effettuare un pagamento unico

- Per e-mail riceve un permalink per terminare la ricarica (è possibile anche staccando il cavo di ricarica) e una ricevuta al termine della sessione di ricarica

- Una descrizione dettagliata della ricarica senza barriere è disponibile nel nostro wiki

- ATTENZIONE: a tutela dei proprietari delle stazioni, con questa variante viene effettuata sulla carta di credito utilizzata una prenotazione temporanea di CHF 60.-. Questa viene annullata automaticamente al termine della sessione di ricarica.

Trova alcuni [esempi di etichettatura](/stationsbetreiber/qr-code) direttamente sulla pagina del wiki.

</div>
<div className="col col--6 text--center">

![Ricarica pubblica – Figura 4](/img/anwendungsfaelle-oeffentlich/04.png)

</div>
</div>

## 5\. Roaming

Facoltativamente, le stazioni possono anche essere pubblicate nelle reti di ricarica di terzi tramite la [funzione roaming](/funktionen/roaming). Ciò è possibile solo se la stazione è disponibile al pubblico 24 ore su 24, 7 giorni su 7. Deve inoltre essere consapevole che in seguito la stazione sarà trovata da moltissime persone (in svariate app e nei sistemi di navigazione delle auto), attirando così utenti esterni. 

Per il roaming deve inoltre definire un prezzo separato. Questo viene trasmesso da eCarUp alla rete di roaming e serve da base per la definizione dei prezzi delle altre reti di ricarica collegate. Né Lei come gestore della stazione né eCarUp come piattaforma ha tuttavia alcuna influenza sulla definizione delle tariffe delle altre piattaforme.

Informazioni dettagliate sono disponibili nell'[articolo del wiki sul roaming](/funktionen/roaming).

![Ricarica pubblica – Figura 5](/img/anwendungsfaelle-oeffentlich/05.png)

## 6\. Analisi e risoluzione degli errori

Con l'aiuto del portale eCarUp è possibile riconoscere semplici guasti e avviare le misure corrispondenti. Se nel dashboard o nella gestione delle stazioni le stazioni sono visualizzate in grigio e quindi come "inattive" (inaktiv), hanno perso la connessione con il backend (da più di 10  minuti) e non possono pertanto essere utilizzate tramite eCarUp. Le cause possibili sono due:

- Interruzione di Internet: ripristini la connessione Internet. Non appena le stazioni raggiungono di nuovo eCarUp, lo stato passa a "disponibile" (verfügbar) ovvero blu e possono essere nuovamente utilizzate normalmente.

- Interruzione di corrente: ripristini l'alimentazione elettrica. Non appena le stazioni raggiungono di nuovo eCarUp, lo stato passa a "disponibile" (verfügbar) ovvero blu e possono essere nuovamente utilizzate normalmente.

Con lo strumento di manutenzione incluso in [eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/) è possibile seguire [la comunicazione tra stazione di ricarica e backend](/funktionen/wartung) ed effettuare un'analisi approfondita degli errori.

Se l'errore è più profondo, deve contattare il responsabile del progetto (ad es. l'elettroinstallatore esecutore).

![Ricarica pubblica – Figura 6](/img/anwendungsfaelle-oeffentlich/06.png)

Consiglio pratico: per testare o verificare sul posto il funzionamento delle stazioni, è possibile creare un account per il servizio tecnico o per un'altra persona responsabile in loco. Questo account può essere registrato presso le stazioni come utente speciale con prezzo 0 per kWh e 0 per h e può così eseguire test senza costi.

## 7\. Facoltativo: creare gruppi di stazioni di ricarica e definire utenti speciali

Anche per le stazioni di ricarica pubbliche è possibile definire in qualsiasi momento utenti speciali aggiuntivi (ad es. collaboratori, vicini ecc.), che potranno poi ricaricare presso le stazioni a una tariffa speciale.

### Creare gruppi di stazioni

Per la gestione delle stazioni di ricarica è importante l'organizzazione in gruppi di stazioni (ad es. per ubicazione):

![Ricarica pubblica – Figura 7](/img/anwendungsfaelle-oeffentlich/07.png)

### Creare utenti speciali

Affinché le stazioni  possano essere sbloccate solo dai conducenti/clienti finali autorizzati, le autorizzazioni devono essere impostate di conseguenza. Esistono due possibilità:

1. Gestire i gruppi di utenti

In questa variante viene creato un gruppo di utenti, che viene assegnato alle stazioni. In questo modo, in caso di cambio di inquilino o di nuovi conducenti, è possibile aggiungere o rimuovere senza complicazioni un membro dal gruppo di utenti. Ciò riduce l'onere amministrativo.

- Le stazioni vengono impostate sullo stato "limitato" (limitiert)

- Viene creato un gruppo di utenti con tutti i conducenti autorizzati

- Il gruppo di utenti viene assegnato al gruppo di stazioni

![Ricarica pubblica – Figura 8](/img/anwendungsfaelle-oeffentlich/08.png)

![Ricarica pubblica – Figura 9](/img/anwendungsfaelle-oeffentlich/09.png)

2. Assegnare singoli utenti alle stazioni

In questa variante i singoli conducenti/clienti finali vengono assegnati alle rispettive stazioni; solo il rispettivo utente speciale può sbloccare la propria stazione di ricarica. Ciò significa che, in caso di cambio di inquilino o di nuovi conducenti, gli account devono essere di volta in volta assegnati alle stazioni, il che comporta che l'account debba essere gestito  attivamente in modo continuo.

- Le stazioni vengono impostate sullo stato "limitato" (limitiert)

- L'account del conducente corretto viene abilitato per la stazione con il prezzo corretto

- Per la stazione viene registrata un'ubicazione

![Ricarica pubblica – Figura 10](/img/anwendungsfaelle-oeffentlich/10.png)

![Ricarica pubblica – Figura 11](/img/anwendungsfaelle-oeffentlich/11.png)
