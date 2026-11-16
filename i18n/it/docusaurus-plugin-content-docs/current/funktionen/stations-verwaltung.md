---
title: 'Gestione stazioni'
slug: '/funktionen/stations-verwaltung'
description: 'Qui puoi gestire le stazioni.'
sidebar_label: 'Gestione stazioni'
---
Qui puoi gestire le stazioni.

Puoi filtrare in base alle seguenti opzioni:

- Nome (Name).
    Inserisci il nome della stazione di ricarica.

- Indirizzo (Adresse)
    Inserisci l'indirizzo della stazione di ricarica.

- Tipo di accesso (Zugriffsart)
    Inserisci il tipo di accesso (Pubblico (Öffentlich), Limitato (Limitiert) o Privato/Manutenzione (Privat/Wartung))

- Prezzo per kWh (Preis pro kWh)
    Inserisci il prezzo per kWh.

- Prezzo per ora (Preis pro Stunde)
    Inserisci il prezzo per ora.

- Stato (Status)
    Inserisci lo stato della stazione cercata (Disponibile (Verfügbar), Connessa (Verbunden) o Occupata (Besetzt))

![Gestione stazioni – Figura 1](/img/funktionen-stations-verwaltung/01.png)

⚠️Importante: lo stato non corrisponde a quello della wallbox?

- In caso di interruzioni sulla wallbox (in particolare durante sessioni di ricarica attive) può succedere che in eCarUp lo stato sia rosso (sessione di ricarica attiva), mentre la wallbox è di nuovo pronta. Ciò significa che non abbiamo ancora ricevuto dalla stazione il comando di fine della sessione di ricarica (Stop Transaction). 

- Un riavvio o un reset può risolvere il problema.

Potenza di ricarica

- La potenza di ricarica attuale non viene visualizzata durante la sessione di ricarica? Consulta il seguente articolo in [Manutenzione](/funktionen/wartung). 

## Configurare la stazione

<div className="row">
<div className="col col--8">

Clicca sui tre puntini a destra per modificare la stazione di ricarica. Si apre quindi questo menu, in cui puoi scegliere tra le seguenti voci:

- Modifica (Bearbeiten)

- Modifica connettore (Anschluss bearbeiten)

- Imposta posizione (Standort setzen)

- Definisci utenti (Benutzer definieren)

- Definisci orari (Zeiten definieren)

- Attiva (Aktivieren)

</div>
<div className="col col--4 text--center">

![Gestione stazioni – Figura 2](/img/funktionen-stations-verwaltung/02.png)

</div>
</div>

## Modifica

In Modifica (Bearbeiten) puoi fare quanto segue:

- Modificare il nome e la descrizione della stazione
    (Queste informazioni sono visibili nell'app sulla mappa)

- Eliminare la stazione
    (Per eliminarla occorre inserire il nome completo della stazione. Lo trovi alla voce "Informazioni" ("Informationen") nella stessa finestra.)

- Impostare la stazione come non licenziata
    La stazione viene disattivata e quindi non richiede una licenza, ma non funziona più con eCarUp.

- Caricare immagini delle stazioni
    Non è obbligatorio, ma è consigliato, perché il conducente vede queste immagini nell'app e può così trovare e identificare meglio la stazione di ricarica.

⚠️Importante: sono adatte immagini con una dimensione di circa 605 x 806 pixel. 

![Gestione stazioni – Figura 3](/img/funktionen-stations-verwaltung/03.png)

![Gestione stazioni – Figura 4](/img/funktionen-stations-verwaltung/04.png)

## Modifica connettore

Informazioni:

(queste informazioni sono visibili nell'app)

- Nome del connettore

- Descrizione (facoltativa)

- Tipo di connettore (tipo di spina) \[consigliato\]

- Energia max. (kW) \[consigliato\]
    Queste impostazioni non sono strettamente necessarie, ma sono consigliate, perché così il conducente vede la potenza della stazione di ricarica. Inoltre (se Hubject è attivato) questo dato viene trasmesso correttamente.

Prezzi:

- Impostare i prezzi per energia e tempo
    Il prezzo può essere modificato anche in seguito. Il prezzo per kWh si riferisce all'energia elettrica, mentre il prezzo per h è una "tariffa di parcheggio".

⚠️Importante: con l'accesso "limitato" ("limitiert") il campo è disattivato, perché in questo caso il prezzo viene impostato in "Definisci utenti" ("Benutzer definieren") o nella [gestione utenti avanzata](/funktionen/erw-nutzerverwaltung).

Accesso:

- Qui puoi gestire l'accesso alla stazione.
    Puoi scegliere tra le seguenti varianti di accesso:
    Pubblico (Öffentlich), Privato/Manutenzione (Privat/Wartung) e Limitato (Limitiert).

- Pubblico (Öffentlich):
    La stazione di ricarica è visibile e accessibile a tutti. Chiunque può quindi ricaricare.

- Limitato (Limitiert):
    Solo gli utenti selezionati sono autorizzati a utilizzare la stazione di ricarica. Gli altri utenti non la vedono e non possono utilizzarla.

![Gestione stazioni – Figura 5](/img/funktionen-stations-verwaltung/05.png)

![Gestione stazioni – Figura 6](/img/funktionen-stations-verwaltung/06.png)

![Gestione stazioni – Figura 7](/img/funktionen-stations-verwaltung/07.png)

![Gestione stazioni – Figura 8](/img/funktionen-stations-verwaltung/08.png)

- Privato / Manutenzione (Privat / Wartung):
    La stazione di ricarica è visibile e accessibile solo all'utente che l'ha installata. Nessun altro utente può utilizzarla, nemmeno se è stato autorizzato.

- Definisci utenti / orari (Benutzer / Zeiten definieren):
    Vedi sotto

Sessione di ricarica automatica (Automatischer Ladevorgang):

- Questa opzione si usa quando la stazione di ricarica è utilizzata in ambito privato. In questo modo si disattiva l'autorizzazione: basta collegare e ricaricare.

Hubject (rete di roaming):

- La stazione di ricarica viene pubblicata nella rete di roaming Hubject ed è quindi visibile e utilizzabile anche da conducenti che non usano eCarUp (ad es. Move, Swisscharge ecc.).

- Questa opzione è disponibile solo se la stazione di ricarica è pubblica 24/7. 

- Una volta attivata, occorre scegliere un piano tariffario. Si può scegliere tra LowCHF, MediumCHF, HighCHF ed ExtraCHF.

- Garantiamo che il proprietario della stazione riceva il 90% del piano tariffario indicato, ossia con 0,50CHF riceve 0,45CHF. Quanto paga alla fine il conducente non possiamo dirlo, perché sono i fornitori terzi a definire questi prezzi.

⚠️Importante: dopo l'attivazione di Hubject la stazione di ricarica non compare subito sulle altre piattaforme. A volte possono volerci fino a 1 settimana. Purtroppo questo non dipende da noi, perché sono gli altri fornitori a doverla pubblicare.

## Modifica posizione

<div className="row">
<div className="col col--8">

Qui viene impostata la posizione della stazione (se necessaria)
Se non vuoi che altri conducenti vedano la stazione sulla mappa, puoi anche lasciare vuota la posizione.
Se la stazione è limitata, anche la posizione è limitata, ossia viene mostrata solo agli utenti selezionati.

- Verifica che l'indirizzo esista davvero.

- Dopo averlo inserito, clicca su "Cerca indirizzo" ("Adresse suchen"), in modo che il nostro sistema formatti automaticamente l'indirizzo in modo corretto.

- Se più stazioni di ricarica si trovano nello stesso punto, è consigliabile distanziarle (come nell'immagine di esempio), in modo che non siano tutte nello stesso punto. Questo è meglio per il conducente, perché ha così una visione più chiara.

- Una volta impostata, la posizione viene mostrata direttamente sulla mappa di eCarUp.

</div>
<div className="col col--4 text--center">

![Gestione stazioni – Figura 9](/img/funktionen-stations-verwaltung/09.png)

</div>
</div>

## Definisci utenti

In questa voce di menu puoi definire gli utenti singolarmente. 

Aggiungi gli utenti uno alla volta cliccando in alto a destra su "Aggiungi utente" ("Benutzer hinzufügen").  Dopodiché puoi inserire l'indirizzo e-mail dell'utente e definire la tariffa.

Fai attenzione a inserire correttamente l'indirizzo e-mail, perché non ricevi alcun messaggio di errore se indichi un account che non esiste.

![Gestione stazioni – Figura 10](/img/funktionen-stations-verwaltung/10.png)

## Definisci orari

<div className="row">
<div className="col col--8">

Se vuoi che la stazione di ricarica sia pubblica o limitata per un periodo di tempo determinato, puoi impostarlo in "Definisci orari" ("Zeiten definieren"). Lì puoi scegliere tra "Pubblico" ("Öffentlich"), "Privato / Manutenzione" ("Privat / Wartung") e "Limitato" ("Limitiert").

Pubblico (Öffentlich): tutti hanno accesso alla stazione di ricarica e possono ricaricare.

Privato / Manutenzione (Privat / Wartung): solo il gestore della stazione ha accesso alla stazione di ricarica; nessun altro utente, nemmeno quelli autorizzati.

Limitato (Limitiert): solo gli utenti autorizzati hanno accesso alla stazione di ricarica.

Se durante il cambio è in corso una ricarica, questa non viene terminata automaticamente. Il veicolo resta collegato finché il conducente non scollega l'auto e termina la ricarica.

</div>
<div className="col col--4 text--center">

![Gestione stazioni – Figura 11](/img/funktionen-stations-verwaltung/11.png)

</div>
</div>

## Attiva

Alla voce "Attiva" ("Aktivieren") puoi attivare la stazione di ricarica, ovvero la ricarica, e quindi abilitarla. In questa impostazione puoi scegliere se abilitarla per 1h, 2, 4h, 8h o 12h. Non è però possibile definire una tariffa, che è sempre di 0 CHF.

Puoi usare questa funzione, ad esempio, se hai una stazione limitata che non ha un "utente ospite" ("Gast-Benutzer") e vuoi così abilitare una ricarica per un ospite.

![Gestione stazioni – Figura 12](/img/funktionen-stations-verwaltung/12.png)
