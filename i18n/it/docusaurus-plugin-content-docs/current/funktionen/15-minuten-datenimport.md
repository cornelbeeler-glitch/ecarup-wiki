---
title: 'Importazione dati a 15 minuti'
slug: '/funktionen/15-minuten-datenimport'
description: 'Con i consumi a 15 minuti è possibile realizzare conteggi basati sui dati del profilo di carico.'
sidebar_label: 'Importazione dati a 15 minuti'
---
[Informazioni generali](#informazioni-generali)

[Autenticazione eCarUp e conteggio nel sistema multitariffa:](#autenticazione-ecarup-e-conteggio-nel-sistema-multitariffa)

[Qualità dei dati](#qualità-dei-dati)

[Zaptec](#zaptec)

[Easee](#easee)

[Guida all'importazione dei dati](#guida-allimportazione-dei-dati)

[Impostazioni Zaptec](#impostazioni-zaptec)

[Impostazioni easee](#impostazioni-easee)

[Impostazioni smart-me](#impostazioni-smart-me)

[ISE-Load Profile](#ise-load-profile)

[Esempio smart-me Billing](#esempio-smart-me-billing)

## Informazioni generali

Con i consumi a 15 minuti è possibile realizzare conteggi basati sui dati del profilo di carico. Ciò consente strutture tariffarie avanzate, come ad esempio i conteggi RCP o i sistemi multitariffa. Con l'aiuto dello strumento di importazione dati, i dati di determinate stazioni di ricarica possono essere importati nel cloud smart-me. 

## Autenticazione eCarUp e conteggio nel sistema multitariffa:

Se si desidera l'autenticazione tramite eCarUp, ma il conteggio deve avvenire tramite la piattaforma smart-me Billing\-nel sistema multitariffa, le stazioni OCPP non devono essere installate nell'account eCarUp omonimo creato automaticamente. Durante l'importazione dei dati del profilo di carico OCPP tramite lo strumento di importazione vengono creati anche punti di misura del profilo di carico. Se l'account eCarUp corrisponde anche all'account RCP\-, nell'account si trova il doppio dei punti di misura, per i dati delle transazioni e per i punti di misura del profilo di carico, tutti soggetti a licenza. 

Per evitarlo, è possibile creare un account eCarUp separato e installare le stazioni OCPP separatamente dal RCP / dall'impianto domestico.

![Importazione dati a 15 minuti – Figura 1](/img/funktionen-15-minuten-datenimport/01.png)

### Area verde del diagramma: importazione dati a 15 minuti nell'account dell'immobile

La migrazione nell'area verde del diagramma può essere eseguita in background per le stazioni di ricarica già installate, senza ripercussioni per il cliente finale (poiché l'autenticazione in loco non viene modificata). 

Attenzione: in questa variante l'autenticazione funziona in loco / direttamente con le stazioni di ricarica. eCarUp non ha alcuna influenza sull'abilitazione.

Vantaggio: poiché si tratta di un'importazione di dati in background, in caso di migrazione i clienti non si accorgono di nulla.

Svantaggio: poiché non avviene alcuna autenticazione tramite eCarUp, i dati di ricarica dei clienti non vengono registrati e non possono nemmeno essere consultati.

### Rosso: importazione dati a 15 minuti con abilitazione tramite l'app eCarUp

In questo caso occorre creare un account separato per l'attivazione delle stazioni di ricarica tramite eCarUp, inclusa l'implementazione OCPP secondo una delle seguenti guide, a seconda del produttore della stazione di ricarica utilizzato ([Zaptec](/ocpp-ladestationen/zaptec) / [easee](/ocpp-ladestationen/easee))

Vantaggio: il cliente può attivare la ricarica tramite l'app o la carta RFID e vede la propria cronologia di ricarica.

Svantaggio: occorre gestire due login separati.

## Qualità dei dati

Nota: la qualità è definita dal fornitore terzo e non può essere modificata o migliorata da smart-me o eCarUp.

Importante: consigliamo di installare un contatore smart-me sulla partenza E-Mobility per i seguenti motivi:

- Se non viene installato alcun contatore smart-me, il supporto non ti aiuta nella ricerca di differenze tra smart-me Billing e la fattura del fornitore di energia elettrica. Ciò vale sempre quando le misurazioni vengono effettuate da fornitori terzi.


- In smart-me Billing è possibile fare riferimento al consumo totale della mobilità elettrica.

- È possibile creare e indicare un'unità di conteggio separata per il consumo totale (caso d'uso amministrazione esterna)


### Zaptec

I dati attuali vengono richiesti al cloud Zaptec a intervalli di 15 minuti. 

[https://api.zaptec.com/help/index.html#/Charger/get\_api\_chargers\_\_id\_](https://api.zaptec.com/help/index.html#/Charger/get_api_chargers__id_)  

L'interfaccia Zaptec fornisce dati live solo durante una ricarica attiva. 

- Se la stazione è offline, non vengono forniti né dati live né letture del contatore. 

- Ciò vale anche se la stazione è online ma nessuno sta ricaricando. 


Se una stazione di ricarica non viene utilizzata per diverse settimane, non invia mai letture del contatore aggiornate all'API. Sia l'[Auto-Export](https://wiki.smart-me.com/schnittstellen/auto-export) sia il conteggio in [smart-me Billing](https://wiki.smart-me.com/konfiguration/billing) dipendono dai dati dei punti di misura. Se un punto di misura non invia dati, l'Auto-Export non viene eseguito e il calcolo delle tariffe in smart-me Billing si blocca. Non è quindi possibile emettere una fattura in modo tempestivo. 

Per evitare che la fatturazione non sia possibile per diverse settimane/mesi, procediamo come segue: 

- Vogliamo garantire che smart-me Billing e l'Auto-Export siano eseguibili con un ritardo massimo di tre giorni e che i dati negli intervalli di 15 minuti siano il più possibile corretti.

- Quando la stazione ricarica, riceviamo tramite l'endpoint API chargers/&#123;chargerId&#125; dati live, che salviamo al momento della richiesta.

- Quando la stazione è online, salviamo per il momento della richiesta l'ultimo valore misurato ricevuto tramite l'endpoint API chargers/&#123;chargerId&#125;. Anche se risale a diverse settimane prima.

- Quando la stazione è offline, salviamo il valore che la stazione ci invia come messaggio OCMF tramite l'endpoint API chargers/&#123;chargerId&#125;. Come marca temporale utilizziamo quella del messaggio OCMF, se risale a meno di tre giorni prima. Se è più vecchia, salviamo il valore alla data X-3 giorni. In questo modo garantiamo che anche le stazioni offline possano essere conteggiate tempestivamente e non blocchino inutilmente l'intero sistema. 


Se hai configurato un [allarme](https://wiki.smart-me.com/konfiguration/wenndann-aktionen/alarme) in smart-me, consigliamo di prevedere almeno tre giorni di tempo offline, poiché l'allarme verifica l'ultimo valore salvato e questo, in caso di stato offline, anche solo per dieci minuti, può risalire fino a tre giorni prima.

### Easee

Nel cloud smart-me vengono salvati i valori misurati a 15 minuti delle tue stazioni di ricarica easee. Di norma sono disponibili con un ritardo di 1-3h.

In caso di interruzioni di Internet o dei server, eccezionalmente può volerci più tempo. Non appena l'interruzione è risolta, i valori misurati del periodo di interruzione vengono trasferiti automaticamente nel cloud smart-me.

Configurazione della stazione di ricarica easee:

Smart-me configura le stazioni di ricarica easee con un intervallo di misurazione di 15 minuti. Ciò riguarda tutte le stazioni di ricarica del tuo account easee configurato per l'importazione. La configurazione avviene una sola volta per ogni stazione di ricarica, ovvero:

- alla configurazione dell'importazione: tutte le stazioni di ricarica già presenti nell'account easee

- stazioni di ricarica installate successivamente in easee: entro 3h.


Nota: questa configurazione non influisce sulla misurazione e sul conteggio delle transazioni di ricarica.

Attenzione:

Se tu (o una persona autorizzata) modifichi l'intervallo di misurazione di una stazione di ricarica easee, ciò influisce sui valori misurati disponibili nel cloud smart-me. In questo caso l'intervallo di misurazione non viene corretto da smart-me.

Ulteriori informazioni sono disponibili nella documentazione di easee:

- [https://developer.easee.cloud/docs](https://developer.easee.cloud/docs)

- [https://developer.easee.cloud/docs/consumption-report-types#lifetime-energy](https://developer.easee.cloud/docs/consumption-report-types#lifetime-energy)


## Guida all'importazione dei dati

1.  Effettuare le impostazioni Zaptec oppure le impostazioni Easee

2.  Effettuare le impostazioni smart-me


## Impostazioni Zaptec

1.  Nel cloud Zaptec crea un account separato per ogni oggetto RCP (nell'esempio sottostante con un trucco alias) e, dall'account principale, assegna all'account creato le autorizzazioni per l'installazione corrispondente.


L'autorizzazione deve avere il ruolo "Proprietario" ("Besitzer")

Nota: per aggiungere l'account dell'immobile, questo deve prima essere registrato nel cloud Zaptec. (immagine a sinistra)

![Importazione dati a 15 minuti – Figura 2](/img/funktionen-15-minuten-datenimport/02.jpg)

![Importazione dati a 15 minuti – Figura 3](/img/funktionen-15-minuten-datenimport/03.jpg)

## Impostazioni easee

1.  Nel cloud easee crea un account per ogni oggetto RCP; la registrazione avviene tramite un indirizzo e-mail (in questo esempio un indirizzo e-mail alias). Il numero di cellulare è un campo obbligatorio e si può inserire sempre lo stesso numero. 

2.  L'e-mail deve essere confermata

3.   Condividi in esso le autorizzazioni per l'installazione corrispondente. 


![Importazione dati a 15 minuti – Figura 4](/img/funktionen-15-minuten-datenimport/04.jpg)

4. Importante: inserire sempre come "Proprietario o amministratore del sito" ("Besitzer oder Admin des Standorts").

![Importazione dati a 15 minuti – Figura 5](/img/funktionen-15-minuten-datenimport/05.jpg)

## Impostazioni smart-me

1. Accedi con l'account smart-me di destinazione (account RCP). In Interfacce (Schnittstellen) clicca su "API". 

![Importazione dati a 15 minuti – Figura 6](/img/funktionen-15-minuten-datenimport/06.png)

2. Clicca in alto sul link alle chiavi API (API-Schlüssel)

3. Crea una nuova chiave, assegnale un nome e attribuisci l'autorizzazione device.readwrite



![Importazione dati a 15 minuti – Figura 7](/img/funktionen-15-minuten-datenimport/07.png)

4. Copia il token creato

![Importazione dati a 15 minuti – Figura 8](/img/funktionen-15-minuten-datenimport/08.png)

5. Clicca su Interfacce (Schnittstellen) e seleziona Importazione da terze parti (Drittanbieter-Import).

![Importazione dati a 15 minuti – Figura 9](/img/funktionen-15-minuten-datenimport/09.png)

6. Accedi oppure clicca su Accept. Crea un'importazione dati Zaptec/Easee tramite "Add"

![Importazione dati a 15 minuti – Figura 10](/img/funktionen-15-minuten-datenimport/10.jpg)

7. Clicca in alto a destra sul nome del tuo account e seleziona Impostazioni account (Kontoeinstellungen).

8. Passa a Chiavi API (API Schlüssel) e inserisci la chiave copiata in precedenza. Non dimenticare di salvare.

![Importazione dati a 15 minuti – Figura 11](/img/funktionen-15-minuten-datenimport/11.png)

9. Indica l'account dell'installazione cloud Zaptec/Easee da importare

Importante: non lavorare con l'account principale di Zaptec/Eaasee, ma con l'autorizzazione che è stata ora configurata per l'account dell'immobile o l'account RCP. 

10\. Attendi un po' finché le stazioni sono visibili nell'account smart-me.

- Zaptec: ca 25min 

- Easee: ca 3 ore


11\. Consigliamo di configurare un allarme nell'account smart-me, in modo da essere avvisati in caso di interruzione della connessione

- [https://wiki.smart-me.com/konfiguration/wenndann-aktionen/alarme](https://wiki.smart-me.com/konfiguration/wenndann-aktionen/alarme) 


Cosa succede?

- Per ogni stazione importata viene creato un punto di misura nell'account smart-me.

- I punti di misura non utilizzati, ad es. di stazioni pubbliche, possono essere impostati come inattivi nella [configurazione dei contatori](https://wiki.smart-me.com/konfiguration/ordnerkonfiguration), per non essere soggetti a licenza.

- Ora è possibile proseguire con la configurazione sul lato smart-me [(smart-me Billing)](https://wiki.smart-me.com/konfiguration/billing). 


Nota: tutte le stazioni future collegate a questa installazione vengono migrate automaticamente nel portale smart-me. 

## ISE-Load Profile

## Esempio smart-me Billing

[File di test](https://drive.google.com/file/d/19fD_H9M23XtC0MXnxbyaTgf1tlUjcLhy/view?usp=sharing)

[Fattura di esempio](https://drive.google.com/file/d/1fGI2lC8IzfSzpk6fpke9Xe9cX0l18I2w/view?usp=sharing)
