---
title: 'Setec-Power'
slug: '/ocpp-ladestationen/setec-power'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Setec-Power'
---
<div className="row">
<div className="col col--8">

## Guida all'integrazione nel backend

Le stazioni Setec-Power possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire in modo semplice e autonomo le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari di disponibilità ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo.

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--4 text--center">

![Setec-Power – Figura 1](/img/ocpp-ladestationen-setec-power/01.jpg)

</div>
</div>

[Wallbox Setec](https://www.setec-power.com/)

### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) e accedi con i dati del tuo account.

3.  Nel menu a sinistra, fai clic sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione delle stazioni di ricarica Setec-Power

I primi passaggi devono essere eseguiti direttamente sul display della stazione:

1.   Assicurati che la tua stazione disponga di una connessione Internet

2.   Tocca il logo (Setec) sul display

3.   Compare una finestra con la richiesta della password (PW: 88888888)

4.  Fai clic su "Charge Point Settings"

5.  Tocca poi "Public Setting"

6.   Fai clic ora su "IP Config"

7.   Effettua direttamente sul display le impostazioni OCPP descritte di seguito

1.  Immagine: 

- Impostazione predefinita

![Setec-Power – Figura 2](/img/ocpp-ladestationen-setec-power/02.png)

2\. Immagine: 

- Inserisci l'URL OCPP del tuo account eCarUp

- Attiva "Enable OCPP on"

- Nel campo di inserimento "ID": definisci il nome desiderato della stazione (può essere modificato in qualsiasi momento in seguito su eCarUp)

![Setec-Power – Figura 3](/img/ocpp-ladestationen-setec-power/03.png)

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Setec-Power – Figura 4](/img/ocpp-ladestationen-setec-power/04.png)

![Setec-Power – Figura 5](/img/ocpp-ladestationen-setec-power/05.png)
