---
title: 'Portale web'
slug: '/stationsbetreiber/webportal'
description: 'Acceda a eCarUp con i Suoi dati di login esistenti.'
sidebar_label: 'Portale web'
---

## Login

Acceda a [eCarUp](https://admin.ecarup.com/authentication/login) con i Suoi dati di login esistenti. Se non ha ancora un account utente, può anche [registrarsi](https://admin.ecarup.com/authentication/login) subito. 

## Panoramica della dashboard

- Stato delle stazioni: visualizzi a colpo d'occhio lo stato di tutte le stazioni di ricarica (disponibile, connessa, occupata, fuori servizio)

- Ultime sessioni di ricarica: alle stazioni di questo account (di tutti gli utenti), gli ultimi 20 inserimenti. Qui i colori non indicano nulla sullo stato.

- Entrate:  il credito disponibile per il versamento, derivante dalle sessioni di ricarica alle stazioni di questo account. «Presto disponibile» significa che il credito viene verificato dal nostro fornitore di servizi di pagamento in materia di riciclaggio di denaro e normalmente viene accreditato per il versamento entro 1-2h. 


⚠️Importante: con lo stato «fuori servizio» (ausser Betrieb) la stazione non ha alcuna comunicazione attiva con il backend. Contrassegniamo automaticamente la stazione come «fuori servizio» (ausser Betrieb) dopo 15 minuti. Se desidera essere avvisato in caso di interruzione, consulti l'impostazione «[Allarme](/funktionen/wartung/alarme)». 

Info: se desidera creare una propria dashboard personalizzata, consulti la seguente [pagina](/drittsysteme/api-visualisierung). L'[eCarUp API](/funktionen/ecarup-api) lo rende possibile. 

![Portale web – Figura 1](/img/stationsbetreiber-webportal/01.png)

## Gestione delle stazioni

- Filtrare le stazioni

- Organizzare le stazioni in gruppi

- Monitorare lo stato


![Portale web – Figura 2](/img/stationsbetreiber-webportal/02.png)

⚠️Importante: lo stato non corrisponde a quello della wallbox?

- In caso di interruzioni sulla wallbox (in particolare durante sessioni di ricarica attive) può succedere che in eCarUp lo stato sia rosso (sessione di ricarica attiva), ma che la wallbox sia di nuovo pronta. Ciò significa che non abbiamo ancora ricevuto dalla stazione alcun comando di fine della sessione di ricarica (Stop Transaction). 

- Un riavvio o un reset può risolvere il problema.


Potenza di ricarica

- La potenza di ricarica attuale non viene visualizzata durante la sessione di ricarica? Consulti il seguente articolo nella sezione [Manutenzione](/funktionen/wartung). 


### Configurare la stazione

- Clicchi sui tre puntini a destra per modificare la stazione di ricarica. 

- Ha più punti di ricarica che desidera modificare contemporaneamente? Qui trova la guida alle modifiche di massa.




![Portale web – Figura 3](/img/stationsbetreiber-webportal/03.png)

### Modifica (Bearbeiten)

Alla voce «Modifica» (Bearbeiten) può effettuare le seguenti operazioni:

- Modificare il nome e la descrizione della stazione (queste informazioni sono visibili nell'app sulla mappa)

- Eliminare stazioni (importante: in questo modo vengono eliminati anche i dati storici; consigliamo di impostare la stazione su non licenziata)

- Stazione non licenziata (impostare la stazione come inattiva)

- Caricare immagini delle stazioni


⚠️Importante: sono adatte immagini con una dimensione di circa 605 x 806 pixel. 

![Portale web – Figura 4](/img/stationsbetreiber-webportal/04.png)

### Modifica connettore (Anschluss bearbeiten)

Informazioni:

(queste informazioni sono visibili nell'app)

- Nome del connettore

- Descrizione (opzionale)

- Tipo di connettore (tipo di spina)

- Energia max. (kW)


Prezzi:

- Impostare i prezzi per energia e tempo


⚠️Importante: con l'accesso «limitato» (limitiert) il campo è disattivato, poiché in questo caso il prezzo viene impostato in «Definisci utenti» (Benutzer definieren) o nella [gestione utenti avanzata](/funktionen/erw-nutzerverwaltung).

![Portale web – Figura 5](/img/stationsbetreiber-webportal/05.png)

### Accesso (Zugriff)

- Privato (Privat): solo l'«account proprietario» può attivare, cioè l'account in cui è stata installata la stazione.

- Limitato (Limited): solo l'«account proprietario» e gli «utenti speciali» definiti per ogni stazione (tramite singoli «utenti speciali» o tramite la [gestione utenti avanzata](/funktionen/erw-nutzerverwaltung)) possono attivare. Gli altri account non hanno accesso, né tramite app né tramite codice QR.

- Pubblico (Öffentlich): tutti gli utenti possono attivare, tramite app oppure con il metodo di pagamento immediato tramite codice QR, usando la fotocamera del cellulare o un'app di scansione (con lo stato pubblico, tuttavia, la stazione non è ancora pubblicata nel [Roaming](/funktionen/roaming) presso altre reti di ricarica; ciò deve essere effettuato separatamente. 


### Definisci utenti (Benutzer definieren)

- Qui è possibile registrare un singolo utente con un proprio prezzo. 

- Oppure gli \*utenti speciali" possono essere aggiunti anche tramite la regola di prezzo


⚠️Importante: se un utente è registrato in entrambe le categorie, vale il prezzo con cui è stato aggiunto come «Singolo utente» (Einzelner Benutzer). 

![Portale web – Figura 6](/img/stationsbetreiber-webportal/06.png)

### Definisci orari (Zeiten definieren)

Gli orari di apertura possono inoltre essere adattati nel tempo, in modo che le stazioni di ricarica siano accessibili al pubblico, ad esempio, solo in determinate fasce orarie della giornata. (simile ad AirBnB)




Ad esempio: una PMI può mettere a disposizione dei collaboratori (utenti speciali) le stazioni di ricarica a un prezzo speciale durante gli orari di apertura. La sera e nel fine settimana le stazioni inutilizzate possono essere rese disponibili al pubblico a un altro prezzo.

Si crea una situazione vantaggiosa per tutti: il proprietario della stazione può guadagnare con un'infrastruttura di ricarica comunque già presente e si creano più punti di ricarica accessibili al pubblico (anche in luoghi, ad es. in zone industriali, dove altrimenti non si investirebbe in infrastrutture di ricarica pubbliche).

### Sessione di ricarica automatica

- Con la sessione di ricarica automatica, non appena il backend raggiunge lo stato «Preparing», viene avviata una sessione di ricarica a nome del gestore della stazione. Questa applicazione è adatta solo all'ambito privato e non ai casi d'uso limitato e pubblico. 


### Hubject

- Qui può aggiungere facoltativamente la stazione alla rete di roaming Hubject. Informazioni approfondite sul funzionamento sono disponibili nel seguente articolo sul [Roaming](/funktionen/roaming). 


![Portale web – Figura 7](/img/stationsbetreiber-webportal/07.png)

![Portale web – Figura 8](/img/stationsbetreiber-webportal/08.png)

### Imposta posizione (Standort setzen)

Imposti la posizione della stazione sulla mappa e, se necessario, adatti manualmente l'indirizzo. Attenzione: è assolutamente necessario posizionare lo «spillo» sulla mappa. 

⚠️Importante: ha più punti di ricarica nello stesso luogo? In tal caso distanzi leggermente i punti di posizione tra loro, come nello screenshot. 







La posizione può anche essere nuovamente eliminata. 

![Portale web – Figura 9](/img/stationsbetreiber-webportal/09.png)

![Portale web – Figura 10](/img/stationsbetreiber-webportal/10.png)

### Attiva (Aktivieren)

- La stazione può essere attivata dal portale web. Ciò avviene senza costi, poiché le stazioni vengono attivate a nome del gestore della stazione. 


## Modifica di massa

Desidera modificare insieme tutti i punti di ricarica per quanto riguarda utenti o prezzi?

Proceda come segue:

- Selezioni le stazioni desiderate (vedi casella di controllo all'inizio).

- Clicchi su «Modifica stazioni selezionate» (Ausgewählte Stationen bearbeiten). 


- Ora vede il numero di stazioni selezionate e può attivare per tutte le stazioni selezionate l'accesso, il prezzo, gli orari riservati e il roaming. 


![Portale web – Figura 11](/img/stationsbetreiber-webportal/11.png)

![Portale web – Figura 12](/img/stationsbetreiber-webportal/12.png)

## OCPP

Nella sezione OCPP trova il Suo URL individuale per l'integrazione delle stazioni di ricarica OCPP. 

- Se desidera saperne di più su OCPP, trova le risposte qui nell'articolo sugli [OCPP Logs](/funktionen/wartung/ocpp-logs).

- Se desidera integrare una stazione di ricarica OCPP con eCarUp, qui trova una [guida per produttore](/ocpp-ladestationen). 


![Portale web – Figura 13](/img/stationsbetreiber-webportal/13.png)



Autenticazione Basic 

- A cosa serve: protegge dal fatto che stazioni sconosciute o contraffatte si colleghino al sistema e al Suo account.

- Importante: utilizzarla sempre in combinazione con WSS (connessione crittografata)

- L'autenticazione riguarda l'intero account, ciò significa che tutte le stazioni in esso contenute devono conoscere la password per potersi collegare. 


Esempio Zaptec: 



![Portale web – Figura 14](/img/stationsbetreiber-webportal/14.png)

## Codice QR

Tutto sul tema dei codici QR è disponibile al seguente link: [generazione di codici QR](/stationsbetreiber/qr-code) 

![Portale web – Figura 15](/img/stationsbetreiber-webportal/15.png)

## Gruppi

- Gruppi di stazioni: qui può creare gruppi di stazioni per conferire al Suo account eCarUp una maggiore chiarezza.

- Gruppi di utenti: qui può creare interi gruppi di utenti e registrare regole di prezzo nei gruppi di stazioni. Ciò è possibile con l'abbonamento Premium; trova una guida al seguente [link](/funktionen/erw-nutzerverwaltung). 


⚠️Importante: può assegnare una stazione anche a più gruppi. 

![Portale web – Figura 16](/img/stationsbetreiber-webportal/16.png)

## Report

Tutte le informazioni sui report sono disponibili al seguente [link](/funktionen/reports).

## Manutenzione

Tutte le informazioni sulla manutenzione sono disponibili al seguente [link](/funktionen/wartung).

## Account e versamento

- Entrate: il credito disponibile per il versamento, derivante dalle sessioni di ricarica alle stazioni di questo account

- Dati legali: in qualità di gestore della stazione, in base al [principio Know Your Customer](https://de.wikipedia.org/wiki/Know_your_customer) vigente in Europa, per motivi legali (riciclaggio di denaro) deve registrare alcune informazioni. Queste variano a seconda che si tratti di una persona privata o di un'azienda.

- Verifica account: dopo aver inserito correttamente i «Dati legali» (Rechtliche Angaben), il Suo account deve ancora essere verificato. A tale scopo viene indirizzato alla landing page di Stripe (fornitore di servizi di pagamento online) e guidato passo dopo passo. Alla seguente [pagina wiki](/stationsbetreiber/account-verifizieren) trova ulteriori informazioni su questo tema. 

- Informazioni sul conto bancario: indichi l'IBAN del conto bancario su cui deve essere effettuato il versamento 

- Versamento: richieda il versamento del credito attualmente disponibile nel Suo account. Il bonifico bancario richiede di solito 2-3 giorni lavorativi. Alla pagina [Conteggio](/stationsbetreiber/abrechnen-auszahlen) trova un esempio di ricevuta di versamento. Qui, come passaggio intermedio, è possibile aggiungere una commissione o un commento. 

- Piano di versamento automatizzato: i clienti Premium possono anche automatizzare il versamento. Maggiori informazioni qui: [Versamento automatico](/funktionen/automatische-auszahlung)

- Informazioni IVA: questo valore viene visualizzato nella ricevuta di versamento e nelle ricevute dei conducenti.

- Modificare e-mail e password

- Informazioni di contatto del supporto: qui può inserire informazioni utili per il conducente. 


### Cronologia del saldo

- Qui il gestore della stazione vede la cronologia dei pagamenti e dei versamenti. Allo stesso tempo è possibile inviare nuovamente le ricevute all'indirizzo e-mail dell'account.


![Portale web – Figura 17](/img/stationsbetreiber-webportal/17.png)

![Portale web – Figura 18](/img/stationsbetreiber-webportal/18.png)

### Licenze

- Nella voce di menu «Licenze» (Lizenzen) vede in qualsiasi momento il numero totale delle Sue licenze Premium acquistate. Da gennaio 2025 ha inoltre la possibilità di acquistare le licenze online tramite carta di credito. 


![Portale web – Figura 19](/img/stationsbetreiber-webportal/19.png)

## Conducente

Anche i conducenti possono accedere al portale web eCarUp. Nella voce di menu «Conducente» (Fahrer) trova tutte le sessioni di ricarica dell'account e può filtrarle per periodi a piacere.

Inoltre i conducenti possono aggiungere al Suo account una qualsiasi carta RFID (ad esempio un badge per collaboratori) per identificarsi con essa presso le stazioni di ricarica compatibili con RFID. La guida è disponibile alla pagina [RFID / NFC Tags](/fahrer/rfid-nfc-tags-carid) .

![Portale web – Figura 20](/img/stationsbetreiber-webportal/20.png)

Info: nella cronologia, nella colonna Firma (Signatur), compare un'impronta digitale? Allora scopra qui di più sull'[Eichrecht in Germania](/sonstige-informationen/eichrecht-in-deutschland). 

### eCarUp Premium

Per le seguenti funzioni Le occorre una licenza eCarUp Premium:

[Manutenzione](/funktionen/wartung)

[Report](/funktionen/reports)

[Piani tariffari](/funktionen/preisplaene)

[Roaming](/funktionen/roaming)

[gestione utenti avanzata](/funktionen/erw-nutzerverwaltung)

[Importazione dati a 15 minuti](/funktionen/15-minuten-datenimport)

[Statistiche](/funktionen/statistiken)

[Versamento automatico](/funktionen/automatische-auszahlung)

[eCarUp API](/funktionen/ecarup-api)
