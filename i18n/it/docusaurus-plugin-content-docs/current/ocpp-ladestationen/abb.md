---
title: 'ABB'
slug: '/ocpp-ladestationen/abb'
description: 'Tutte le stazioni ABB con funzionalità backend possono essere integrate nel backend di eCarUp.'
sidebar_label: 'ABB'
---
Tutte le stazioni ABB con funzionalità backend possono essere integrate nel backend di eCarUp.
Anche le stazioni di ricarica ABB già installate possono essere migrate a eCarUp. 

![ABB – Figura 1](/img/ocpp-ladestationen-abb/01.jpg)

[AC Terra Wallbox](https://e-mobility.abb.com/en)

![ABB – Figura 2](/img/ocpp-ladestationen-abb/02.jpg)

[AC EV Lunic Pro M / Pro S](https://e-mobility.abb.com/en)

![ABB – Figura 3](/img/ocpp-ladestationen-abb/03.jpg)

[DC Terra 24 / 54 / 54 HV](https://e-mobility.abb.com/en)

![ABB – Figura 4](/img/ocpp-ladestationen-abb/04.jpg)

[DC Terra Wallbox](https://e-mobility.abb.com/en)

## Guida all'integrazione nel backend

Le stazioni ABB possono essere integrate in pochi passaggi nel sistema di conteggio di eCarUp. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) e accedi con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione delle stazioni di ricarica ABB AC

<Video src="UxKCeK8RGSA" title="Video YouTube, guida all'integrazione ABB nel backend di eCarUp" />

### ABB Terra AC Wallbox

Per integrare la ABB Terra AC Wallbox, ABB deve eseguire (una sola volta) i seguenti passaggi:

- Creare un account sul portale TerraConfig. Richiesta tramite  [https://forms.abb.com/form-39881/Antrag-Connected-Services-AC-Terra](https://forms.abb.com/form-39881/Antrag-Connected-Services-AC-Terra))

- Creare un account app nel portale

- Aggiungere l'URL di eCarUp tramite il portale ABB

- Attenzione: nel Third Party Name non usare caratteri speciali né spazi!

- Senza password

 Portale TerraConfig 

![ABB – Figura 5](/img/ocpp-ladestationen-abb/05.png)

![ABB – Figura 6](/img/ocpp-ladestationen-abb/06.png)

### Procedi poi nell'app ABB TerraConfig come segue:

- Accedi all'app TerraConfig con l'account app (ABB)

- Connettiti alla stazione tramite Bluetooth (è necessaria la chiave fornita in dotazione)

- Verificato con la versione software 1.6.9

![ABB – Figura 7](/img/ocpp-ladestationen-abb/07.png)

1.  Nuova configurazione

![ABB – Figura 8](/img/ocpp-ladestationen-abb/08.png)

2\. Eseguire i passaggi da 1 a 5

![ABB – Figura 9](/img/ocpp-ladestationen-abb/09.png)

<div className="row">
<div className="col col--6">

2.1 Selezionare il tipo di connessione desiderato

2.2 Disattivare la ricarica libera

2.3 Configurazione OCPP (spiegata più in dettaglio in seguito)

2.4 Attivare le carte RFID esterne

2.5 Confermare sempre la configurazione

2.3 Configurazione OCPP

</div>
<div className="col col--6 text--center">

![ABB – Figura 10](/img/ocpp-ladestationen-abb/10.png)

</div>
</div>

<div className="row">
<div className="col col--6">

2.3.1Attivare il server esterno

L'URL aggiunto nel portale web può essere selezionato qui.

2.3.2 Aggiungere un URL personalizzato: qui è possibile inserire manualmente l'URL OCPP.

Selezionare e configurare il server OCPP

</div>
<div className="col col--6 text--center">

![ABB – Figura 11](/img/ocpp-ladestationen-abb/11.png)

</div>
</div>

Confermare la configurazione del server OCPP

![ABB – Figura 12](/img/ocpp-ladestationen-abb/12.png)

Salvare l'intera configurazione e riavviare. 

![ABB – Figura 13](/img/ocpp-ladestationen-abb/13.png)

## Integrazione delle stazioni di ricarica ABB DC

### ABB Terra DC (Wallbox e stazioni di ricarica rapida)

Le stazioni di ricarica DC devono essere configurate da ABB con il backend di eCarUp. A tale scopo, rivolgiti direttamente, indicando i dati della stazione e il tuo URL OCPP (dal portale web), a:

-  [emobility@ch.abb.com](mailto:emobility@ch.abb.com)

La migrazione ti verrà confermata via e-mail.

In seguito la stazione è creata nel tuo account eCarUp e puoi effettuare le impostazioni in base al tuo caso d'uso. Maggiori informazioni sono disponibili nella sezione [Backend](/funktionen).

## Versione precedente

### Procedi poi nell'app ABB TerraConfig (versione precedente) come segue:

- Accedi all'app TerraConfig con l'account app (ABB)

- Connettiti alla stazione tramite Bluetooth (è necessaria la chiave fornita in dotazione)

<Video src="6aw4vxHiWwU" title="Video YouTube, configurare il backend OCPP per la stazione di ricarica a parete ABB Terra AC" />

1.  OCPP Server

![ABB – Figura 14](/img/ocpp-ladestationen-abb/14.jpg)

2\. Selezionare "+"

![ABB – Figura 15](/img/ocpp-ladestationen-abb/15.jpg)

3\. Compare il link URL predefinito

![ABB – Figura 16](/img/ocpp-ladestationen-abb/16.jpg)

4\. Cliccare su "Next"

![ABB – Figura 17](/img/ocpp-ladestationen-abb/17.png)

5\. Attivare l'accesso esterno e cliccare su "Configure"

![ABB – Figura 18](/img/ocpp-ladestationen-abb/18.png)

6\. Concludere con OK

![ABB – Figura 19](/img/ocpp-ladestationen-abb/19.png)

⚠️ Se le carte RFID non funzionano, devi "attivare le carte esterne" nell'app Terra Config.

## Importante:

Se le carte RFID non funzionano, devi ancora effettuare la seguente impostazione sulla stazione tramite l'app Terra Config:

![ABB – Figura 20](/img/ocpp-ladestationen-abb/20.png)

Informazione:

Dal rilascio software di ABB (SW V1.6.5), con il badge ABB fornito in dotazione (carta RFID n. xxxxxxxxx) l'UID non viene più trasmesso tramite OCPP per motivi di sicurezza.  

### Possibili ostacoli all'attivazione tramite carta RFID

1.  Se la stazione ci invia una richiesta di autorizzazione con il numero di serie, significa che la stazione è ancora in modalità Free Vending. Disattiva questa modalità alla voce Device Mode nell'app TerraConfig. 

![ABB – Figura 21](/img/ocpp-ladestationen-abb/21.png)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30 e 60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore) 

![ABB – Figura 22](/img/ocpp-ladestationen-abb/22.png)

![ABB – Figura 23](/img/ocpp-ladestationen-abb/23.png)
