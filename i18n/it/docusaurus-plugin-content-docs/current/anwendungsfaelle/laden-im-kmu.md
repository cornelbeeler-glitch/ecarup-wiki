---
title: 'Ricarica nelle PMI'
slug: '/anwendungsfaelle/laden-im-kmu'
description: '1\. Informazioni generali'
sidebar_label: 'Ricarica nelle PMI'
---

## 1\. Informazioni generali

Il seguente articolo descrive una configurazione standard per la ricarica nelle PMI con eCarUp. Vengono descritti i diversi modelli di conteggio per le stazioni di ricarica presso la sede aziendale per collaboratori, partner e clienti, ma anche a domicilio. 

Il vantaggio della piattaforma eCarUp consiste nel fatto che i diversi casi d'uso della PMI possono essere risolti tramite un'unica piattaforma e che ogni stazione, se necessario, può essere configurata singolarmente.

### Addebito tramite carta di credito

Una possibilità molto efficiente è il conteggio tramite carta di credito, perché in questo caso il denaro viene trasferito automaticamente dalla carta di credito del conducente al conto del proprietario della stazione. Questo comporta due vantaggi decisivi:

1.  L'intero processo d'incasso è completamente automatizzato: eCarUp trasferisce il denaro delle transazioni direttamente al termine delle stesse sul conto del proprietario della stazione. 

2.  In questo modo il credito non è mai in possesso di eCarUp AG e tutte le transazioni (anche, ad esempio, quelle degli ospiti sui parcheggi per visitatori) rientrano nelle disposizioni di legge vigenti.

Nel nostro wiki trova tutte le ulteriori informazioni sul [conteggio tramite carta di credito](/stationsbetreiber/abrechnen-auszahlen) e sulle [disposizioni di legge relative al credito trasferito](/stationsbetreiber/account-verifizieren).

Il conteggio tramite carta di credito comporta sempre una commissione del 10%, indipendentemente dal fatto che una [licenza Premium eCarUp](https://web.ecarup.com/preise-ladestationen-backend/) sia attiva o meno.

### Addebito tramite reporting

Le stazioni possono essere conteggiate anche tramite lo [strumento di reporting eCarUp](/funktionen/reports).

- In questo caso le stazioni vengono impostate per tutti gli utenti con un prezzo di 0.- per kWh e 0.- per ora. Le sessioni di ricarica non comportano quindi costi diretti e non avviene alcun addebito tramite carta di credito.

- Alla fine del periodo di conteggio (fine mese, fine trimestre, fine semestre) è possibile creare un report con il consumo per ogni stazione oppure per ogni utente speciale (creato in precedenza).

- Sulla base di questi dati di consumo, l'energia può essere conteggiata ad esempio in una nota spese o in un altro conteggio interno (al di fuori del sistema eCarUp).

![Ricarica nelle PMI – Figura 1](/img/anwendungsfaelle-laden-im-kmu/01.png)

![Ricarica nelle PMI – Figura 2](/img/anwendungsfaelle-laden-im-kmu/02.png)

Per questo caso d'uso si raccomanda vivamente una [licenza Premium eCarUp](https://web.ecarup.com/preise-ladestationen-backend/), poiché altrimenti mancano alcune funzionalità importanti come lo strumento di manutenzione, i report o la gestione estesa degli utenti con i gruppi di utenti.

## 2\. Collegare le stazioni di ricarica al backend eCarUp

Innanzitutto le stazioni devono essere collegate al backend eCarUp:

- Nel nostro wiki trova un elenco aggiornato di tutti i [modelli di stazioni di ricarica supportati](/ocpp-ladestationen)

- È disponibile anche una [guida passo per passo per l'integrazione delle stazioni](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Affinché il denaro possa essere trasferito sull'account, quest'ultimo deve essere verificato. Le informazioni in merito si trovano in [Verificare l'account in eCarUp](/sonstige-informationen/stripe). Raccomandiamo di eseguire questo passaggio prima o durante l'installazione delle stazioni di ricarica. Senza verifica, per motivi legali eCarUp non può trasferire denaro sull'account e non sono possibili ricariche a pagamento.
    Gli incassi vengono trasferiti continuamente sull'account del proprietario della stazione e possono essere pagati in qualsiasi momento su un IBAN a scelta tramite la voce di menu Account ("Account").

![Ricarica nelle PMI – Figura 3](/img/anwendungsfaelle-laden-im-kmu/03.png)

## 3\. Configurare le stazioni di ricarica

Una volta collegate a eCarUp, le stazioni di ricarica compaiono nell'account eCarUp nella dashboard e nella gestione delle stazioni.

![Ricarica nelle PMI – Figura 4](/img/anwendungsfaelle-laden-im-kmu/04.png)

### Impostazioni di base

In seguito le stazioni possono essere configurate con un clic su Stazioni ("Stationen") e poi su Gestione stazioni ("Stationsverwaltung"):

- Modificare il nome e la descrizione della stazione

- Eliminare stazioni

- Impostare le ubicazioni

- Modificare le prese (se più di una)

- Definire i tipi di presa (ad es. Typ 2, CSS o Chademo)

- Definire l'energia massima (ad es. 22 kW)

- Definire l'accesso (Pubblico, Limitato e Privato)

Pubblico = tutti gli utenti / Limitato = proprietario della stazione e utenti speciali
Privato = SOLO il proprietario della stazione o l'account in cui sono installate le stazioni

- Impostare i prezzi per energia e tempo

- Definire gli orari riservati

- Attivare la stazione dal portale web

Tutte le [impostazioni per i proprietari delle stazioni](/stationsbetreiber/webportal) sono riassunte in un articolo del wiki.

### Creare gruppi di stazioni

Per la gestione delle stazioni di ricarica è importante l'organizzazione in gruppi di stazioni (ad es. per ubicazione o per condominio):

![Ricarica nelle PMI – Figura 5](/img/anwendungsfaelle-laden-im-kmu/05.png)

Una volta completata la configurazione, il risultato può essere il seguente:

![Ricarica nelle PMI – Figura 6](/img/anwendungsfaelle-laden-im-kmu/06.png)

### Creare utenti speciali

Affinché le stazioni possano essere sbloccate solo dai conducenti/clienti finali autorizzati, è necessario impostare le autorizzazioni di conseguenza. A tale scopo esistono due possibilità:

1. Gestire i gruppi di utenti

In questa variante viene creato un gruppo di utenti e assegnato alle stazioni. In questo modo, in caso di cambio di inquilino o di nuovi conducenti, è possibile aggiungere o rimuovere facilmente un membro dal gruppo di utenti. Ciò riduce l'onere amministrativo.

- Le stazioni vengono impostate sullo stato Limitato ("limitiert")

- Viene creato un gruppo di utenti con tutti i conducenti autorizzati

- Il gruppo di utenti viene assegnato al gruppo di stazioni

![Ricarica nelle PMI – Figura 7](/img/anwendungsfaelle-laden-im-kmu/07.png)

![Ricarica nelle PMI – Figura 8](/img/anwendungsfaelle-laden-im-kmu/08.png)

2. Assegnare singoli utenti alle stazioni

In questa variante i singoli conducenti/clienti finali vengono assegnati alle rispettive stazioni. Solo il rispettivo utente speciale può sbloccare la propria stazione di ricarica. In caso di cambio di inquilino o di nuovi conducenti, gli account devono essere ogni volta assegnati alle stazioni. L'account deve quindi essere gestito attivamente in modo continuo.

- Le stazioni vengono impostate sullo stato Limitato ("limitiert")

- L'account del conducente corretto viene abilitato per la stazione con il prezzo corretto

- Per la stazione viene registrata un'ubicazione

![Ricarica nelle PMI – Figura 9](/img/anwendungsfaelle-laden-im-kmu/09.png)

![Ricarica nelle PMI – Figura 10](/img/anwendungsfaelle-laden-im-kmu/10.png)

## 4\. Etichettare le stazioni

Affinché i conducenti possano sbloccare le stazioni anche senza carta RFID e con l'app, raccomandiamo di etichettare le stazioni con un codice QR e una breve guida alla ricarica. Ciò è utile, ad esempio, se un conducente perde la propria carta RFID o non la ha con sé.
Trova alcuni [esempi di etichettatura](/stationsbetreiber/qr-code).

## 5\. Informare gli utenti regolari

È consigliabile informare i conducenti che ricaricano regolarmente (ad es. i collaboratori) sull'uso corretto delle stazioni. In caso di pagamento con carta di credito, i conducenti devono creare un proprio account eCarUp e registrare una carta di credito valida:

- Una possibile guida/modello da inviare ai conducenti è disponibile qui: [Modello di comunicazione per i clienti finali eCarUp](https://docs.google.com/document/d/1WVdQFd3flkJsQTIyEgS5zUauPbomZ3kOBfhEasXHgFs/edit)

- [Tutte le funzioni per i conducenti](/fahrer) sono riassunte in una pagina del wiki dedicata

- Esiste inoltre [una FAQ per i conducenti](/faq) con le domande e risposte più importanti

- I conducenti possono [aggiungere autonomamente tag RFID / NFC al proprio account](/fahrer/rfid-nfc-tags-carid) e utilizzarli poi per sbloccare la stazione di ricarica

Con il sistema flessibile di eCarUp l'onere amministrativo è ridotto al minimo. I conducenti/clienti finali possono creare e gestire autonomamente gli account.

## 6\. Configurare i parcheggi per visitatori e clienti

<div className="row">
<div className="col col--6">

Con eCarUp le stazioni di ricarica possono essere conteggiate anche pubblicamente e quindi nei confronti di conducenti anonimi. A tale scopo, durante la configurazione alle stazioni deve essere assegnato lo stato Pubblico ("öffentlich") e deve essere impostata un'ubicazione. Inoltre, in questo caso l'etichettatura delle stazioni di ricarica è molto importante, poiché tramite il codice QR è possibile ricaricare anche ad hoc e quindi senza barriere.

Ai parcheggi per visitatori possono essere assegnati senza problemi anche prezzi diversi (vedi sotto).

Facoltativamente, le stazioni possono anche essere [pubblicate nelle reti di ricarica di fornitori terzi tramite la funzione di roaming](/funktionen/roaming). Ciò è però possibile solo se la stazione è disponibile pubblicamente 24 ore su 24, 7 giorni su 7. Deve inoltre essere consapevole che in seguito la stazione sarà trovata da un pubblico molto ampio (in svariate app e nei sistemi di navigazione delle auto) e attirerà quindi utenti esterni.

</div>
<div className="col col--6 text--center">

![Ricarica nelle PMI – Figura 11](/img/anwendungsfaelle-laden-im-kmu/11.png)

</div>
</div>

![Ricarica nelle PMI – Figura 12](/img/anwendungsfaelle-laden-im-kmu/12.png)

## 7\. Attivare i parcheggi per visitatori e clienti

Se dispone di stazioni di ricarica su posteggi per visitatori e/o clienti, esistono le seguenti possibilità per attivarle gratuitamente per i clienti.

- Tramite carta RFID: crei un account eCarUp (ad es. muster(at)musterfirma.ch) e lo assegni alle stazioni per visitatori come utente speciale con il prezzo 0 per kWh e 0 per h. Aggiunga all'account una o più [carte RFID](/fahrer/rfid-nfc-tags-carid). Ora le stazioni possono essere attivate gratuitamente tramite queste carte RFID/NFC. Il cliente può, ad esempio, ritirare la carta RFID alla reception e ricaricare la propria auto gratuitamente.

- Attivazione nel portale web: le stazioni possono essere attivate anche tramite il portale web. Poiché lo sblocco avviene tramite l'account del proprietario (muster(at)musterfirma.ch), la ricarica è gratuita e non avviene alcuna transazione con carta di credito. Questa variante ha il vantaggio che il cliente non deve tornare di nuovo all'auto.

![Ricarica nelle PMI – Figura 13](/img/anwendungsfaelle-laden-im-kmu/13.png)

## 8\. Ricarica a domicilio

Se i collaboratori ricaricano il veicolo aziendale a domicilio e l'energia deve essere conteggiata, esistono le seguenti varianti:

1.  La stazione viene integrata nell'account dell'azienda (muster(at)musterfirma.ch) e il prezzo viene impostato a 0 per kWh e 0 per h. Il collaboratore può così ricaricare gratuitamente a domicilio. Alla fine del periodo di conteggio viene generato [un report eCarUp](/funktionen/reports) con il consumo (in kWh) e i costi delle ricariche a domicilio possono essere conteggiati. Ciò può essere fatto per diversi conducenti/collaboratori nello stesso account.

2.  La stazione viene installata nell'account privato del collaboratore e viene registrato un prezzo (concordato tra collaboratore e azienda). Il collaboratore attiva la stazione a domicilio tramite l'account aziendale (in cui di norma è registrata una carta di credito dell'azienda). In questo modo il collaboratore "vende" per così dire la propria elettricità all'azienda e l'addebito è automatizzato.

## 9\. Analisi e risoluzione degli errori

Con l'aiuto del portale eCarUp è possibile individuare semplici guasti e avviare le misure corrispondenti. Se nella dashboard o nella gestione delle stazioni le stazioni sono visualizzate in grigio e quindi come Inattiva ("inaktiv"), hanno perso la connessione con il backend (per più di 10 minuti) e non possono quindi essere utilizzate tramite eCarUp. I motivi possibili sono due:

- Interruzione di internet: ripristini la connessione internet. Non appena le stazioni raggiungono di nuovo eCarUp, lo stato passa a Disponibile ("verfügbar") ovvero blu e possono essere nuovamente utilizzate normalmente.

- Interruzione di corrente: ripristini l'alimentazione elettrica. Non appena le stazioni raggiungono di nuovo eCarUp, lo stato passa a Disponibile ("verfügbar") ovvero blu e possono essere nuovamente utilizzate normalmente.

Con lo strumento di manutenzione incluso in [eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/) è possibile seguire [la comunicazione tra stazione di ricarica e backend](/funktionen/wartung) ed effettuare un'analisi approfondita degli errori.

Se l'errore è più profondo, deve contattare il responsabile del progetto (ad es. l'installatore elettricista esecutore).

![Ricarica nelle PMI – Figura 14](/img/anwendungsfaelle-laden-im-kmu/14.png)

Consiglio pratico: per testare o verificare il funzionamento delle stazioni sul posto, è possibile creare un account per il servizio tecnico o per un'altra persona responsabile in loco (ad es. hauswart\[at\]musterhaus.ch). Questo account può essere registrato presso le stazioni come utente speciale con prezzo 0.- per kWh e 0.- per h e può quindi eseguire test senza costi.
