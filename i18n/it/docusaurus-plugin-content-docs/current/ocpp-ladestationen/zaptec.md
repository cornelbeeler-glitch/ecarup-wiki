---
title: 'Zaptec'
slug: '/ocpp-ladestationen/zaptec'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Zaptec'
---
![Zaptec – Figura 1](/img/ocpp-ladestationen-zaptec/01.jpg)

[Zaptec Go](https://www.zaptec.com/de-ch)

![Zaptec – Figura 2](/img/ocpp-ladestationen-zaptec/02.jpg)

[Zaptec Pro](https://www.zaptec.com/de-ch)

## Guida all'integrazione nel backend

Le stazioni Zaptec possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire in modo semplice e autonomo le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)


### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) e accedi con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.


## Integrazione delle stazioni di ricarica Zaptec

La stazione Zaptec può inoltre trasmettere i valori a 15 minuti a smart-me. Per saperne di più, consulta [Importazione dati a 15 minuti](/funktionen/15-minuten-datenimport).

[![Zaptec – Figura 3](/img/ocpp-ladestationen-zaptec/03.jpg)](https://youtu.be/jK-UypywXZU)

Videoguida all'integrazione di Zaptec nel backend eCarUp

## Zaptec Go e Pro

### Installazione nel portale Zaptec

1.  Vai al [portale web Zaptec](https://portal.zaptec.com/) ed effettua l'accesso

2.  Nella barra dei menu in alto seleziona "Installazioni" ("Installationen") e il gruppo di stazioni Zaptec desiderato per l'integrazione nel sistema di conteggio eCarUp

3.  Seleziona ora "Impostazioni" ("Einstellungen") e poi, nel sottomenu, "Autenticazione" ("Authentifizierung")

4.  Visualizzi la seguente interfaccia di menu:


5\. Attiva il campo "Autenticazione OCPP 1.6" ("OCPP 1.6 Authentifizierung")

6\. Inserisci in "URL" l'URL OCPP che hai ricevuto durante i preparativi nel portale eCarUp. 

Attenzione: l'URL deve ancora essere completato con / & &#123;deviceid&#125;

- Esempio: ws://www.ecarup.com/api/Ocpp16/wei948gfhwe/&#123;deviceid&#125;


7\. Attiva il campo "Authorization required" e clicca infine su "Salva" ("Speichern")

⚠️ Importante:  la stazione deve essere riavviata. 

I charger Zaptec del gruppo selezionato sono ora registrati come stazioni di ricarica nel tuo account eCarUp e possono essere configurati secondo le tue condizioni di utilizzo individuali.

![Zaptec – Figura 4](/img/ocpp-ladestationen-zaptec/04.png)

### Conteggio dei charger Zaptec in un sistema multitariffa

I valori a 15 minuti della stazione Zaptec possono essere esportati. Ciò consente strutture tariffarie avanzate come, ad esempio, i conteggi RCP o i sistemi multitariffa. Per saperne di più, consulta la pagina [Importazione dati a 15 minuti](/funktionen/15-minuten-datenimport).

## Senza autenticazione + ricarica offline

Collega come di consueto le tue stazioni Zaptec a eCarUp tramite l'installazione. ( passaggi da 5. a 7. )

1.  Se non è ancora registrato, registra un conducente

2.  Vai quindi alla stazione di ricarica

3.  Disattiva l'autenticazione

4.  Aggiungi un ID tag standard del tuo conducente. 


Importante: il token RFID deve essere registrato anche in eCarUp sotto il conducente. Qui trovi maggiori informazioni: [LINK](/fahrer/rfid-nfc-tags-carid)

![Zaptec – Figura 5](/img/ocpp-ladestationen-zaptec/05.png)

Cosa succede:

Se non è memorizzato alcun token, eCarUp invia un messaggio "Invalid", poiché l'ID tag è vuoto. In quanto backend, dobbiamo poter verificare in qualsiasi momento chi si autorizza. 

![Zaptec – Figura 6](/img/ocpp-ladestationen-zaptec/06.png)

Se presso Zaptec è memorizzato un token, eCarUp invia un messaggio "Accepted", poiché ora l'ID tag viene trasmesso. La ricarica viene comunque registrata in eCarUp. 

![Zaptec – Figura 7](/img/ocpp-ladestationen-zaptec/07.png)

La ricarica può ora essere effettuata anche in modalità offline. La stazione ci invia la transazione offline non appena torna online. 

![Zaptec – Figura 8](/img/ocpp-ladestationen-zaptec/08.png)

Il vantaggio è che anche il conducente può essere addebitato a posteriori. (se configurato in tal senso)

## Più proprietari di stazioni eCarUp su un'unica installazione Zaptec ?

### Sì, funziona!

Procedi come segue:

1.  Sull'installazione imposta come di consueto l'autenticazione su OCPP 1.6J

2.  Lascia vuoto il campo dell'URL

3.  Seleziona la casella di controllo per l'autenticazione obbligatoria.

4.  Vai ora alla stazione: nelle impostazioni puoi inserire l'URL individuale con il numero di serie della stazione Zaptec. 

5.  Salva.


![Zaptec – Figura 9](/img/ocpp-ladestationen-zaptec/09.png)

![Zaptec – Figura 10](/img/ocpp-ladestationen-zaptec/10.png)

### Link

[Registrazione del webinar sulle stazioni di ricarica Zaptec nel backend eCarUp](https://web.ecarup.com/webinar-zaptec-stationen-mit-ecarup-backend/)

[Importazione dati a 15 minuti](/funktionen/15-minuten-datenimport)

[Funzioni della wallbox Zaptec nel backend eCarUp](https://web.ecarup.com/backend/novavolt-zaptec-charger-abrechnen/)

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 



Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![Zaptec – Figura 11](/img/ocpp-ladestationen-zaptec/11.png)

![Zaptec – Figura 12](/img/ocpp-ladestationen-zaptec/12.png)
