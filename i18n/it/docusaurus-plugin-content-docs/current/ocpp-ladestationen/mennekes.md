---
title: 'Mennekes'
slug: '/ocpp-ladestationen/mennekes'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Mennekes'
---
![Mennekes – Figura 1](/img/ocpp-ladestationen-mennekes/01.jpg)

[Professional](https://www.mennekes.ch/emobility/produkte/portfolio/ladesaeulen/)

![Mennekes – Figura 2](/img/ocpp-ladestationen-mennekes/02.jpg)

[Wallbox Premium](https://www.mennekes.ch/emobility/produkte/portfolio/ladesaeulen/)

![Mennekes – Figura 3](/img/ocpp-ladestationen-mennekes/03.jpg)

[Amtron Professional](https://www.mennekes.ch/emobility/produkte/portfolio/ladesaeulen/)

![Mennekes – Figura 4](/img/ocpp-ladestationen-mennekes/04.png)

[Amtron 4Business/4You](https://www.mennekes.ch/emobility/produkt-details/1347012405BK/#)

## Guida all'integrazione nel backend

Le stazioni Mennekes possono essere integrate in pochi passi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Amtron 4Business/4You

- Versione firmware testata 1.2.15

Integra la stazione in una rete a cui puoi accedere tramite l'indirizzo IP.  

<Embed src="https://demo.arcade.software/pn64vzJQpOAvqVOZLRlT?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" aspect="1.570" title="Wiki - Mennekes" />

1.  Attiva la modalità esperto

2.  Nelle impostazioni, clicca su Backend.

![Mennekes – Figura 5](/img/ocpp-ladestationen-mennekes/05.png)

3\. Aggiungi il tuo URL eCarUp e riavvia la stazione di ricarica. 

Esempio di URL:

![Mennekes – Figura 6](/img/ocpp-ladestationen-mennekes/06.png)

## Integrazione della colonnina di ricarica Amedio Professional e della Wallbox Amtron Professional

### 1\. Collegare il notebook al controller Bender tramite cavo USB:

⚠️ Importante: utilizzare l'interfaccia Micro-USB

![Mennekes – Figura 7](/img/ocpp-ladestationen-mennekes/07.png)

### 2\. Aprire il browser sul notebook

Inserisci il seguente URL: http://192.168.123.123/operator/

- Nome utente predefinito: operator

- Password predefinita: yellow\_zone

### 3\. Verificare la versione del firmware:

<div className="row">
<div className="col col--8">

Deve essere installata almeno la versione 4.00-2139.

In State -> Firmware Version si trova la versione attuale.

Eseguire l'aggiornamento del firmware:

a) Copiare il file del firmware su una chiavetta USB. Inserire la chiavetta USB.

b) Riavviare il controller Bender

</div>
<div className="col col--4 text--center">

![Mennekes – Figura 8](/img/ocpp-ladestationen-mennekes/08.png)

</div>
</div>

### 4\. Configurare il Bender

OCPP Mode: OCPP-J 1.6

WebSocket JSON OCPP URL: ws://www.ecarup.com/api/Ocpp16/&#123;ecarupID&#125;/

Esempio: ws://www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508/

⚠️ Importante: dopo l'URL OCPP di eCarUp occorre aggiungere un "/" (come mostrato nell'esempio). Inoltre, la "ChargePoint ID (OCPP)" non deve contenere caratteri speciali.

![Mennekes – Figura 9](/img/ocpp-ladestationen-mennekes/09.png)

## Integrazione dell'ACU V3 &V4

### Integrazione dei controller ACU

Collegarsi alla stazione tramite Ethernet

1.  Il laptop deve avere il seguente IP 192.168.0.21 e la subnet mask: 255.255.255.0.

2.  Apri il browser del tuo laptop e inserisci il seguente URL nella barra degli indirizzi 192.168.0.10

3.  Nome utente e password sono "admin"

![Mennekes – Figura 10](/img/ocpp-ladestationen-mennekes/10.png)

### Aggiornamenti software e guida Mennekes:

Il software, inclusa la guida, è disponibile alla pagina [Aggiornamenti software di Mennekes](https://www.chargeupyourday.de/services/software-updates/).

## Interfaccia web di Mennekes

1.  Verifica del firmware attuale

2.  Se non è aggiornato, aggiorna l'ACU. La versione software attuale, inclusa la guida, è disponibile sulla [pagina degli aggiornamenti software di Mennekes](https://www.chargeupyourday.de/services/software-updates/).

3.  Selezionare il protocollo di trasmissione v1.6J

4.  Inserire l'URL OCPP del tuo account e OCPP 1.6 

ws://www.ecarup.com/api/Ocpp16/(il tuo ID)/

Non dimenticare lo slash alla fine. ! 

Rispettare le impostazioni

![Mennekes – Figura 11](/img/ocpp-ladestationen-mennekes/11.png)

![Mennekes – Figura 12](/img/ocpp-ladestationen-mennekes/12.png)

![Mennekes – Figura 13](/img/ocpp-ladestationen-mennekes/13.png)

![Mennekes – Figura 14](/img/ocpp-ladestationen-mennekes/14.png)

## Download

Softwareupdate-ACU-v3-v4\_v03\_30-09-2019\_de.pdf

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30-60s. Solo così possiamo calcolare e visualizzare meglio la potenza di ricarica attuale nell'app. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Mennekes – Figura 15](/img/ocpp-ladestationen-mennekes/15.png)

![Mennekes – Figura 16](/img/ocpp-ladestationen-mennekes/16.png)
