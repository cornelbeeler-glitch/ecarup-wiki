---
title: 'Eaton OCPP'
slug: '/ocpp-ladestationen/eaton'
description: 'Stazioni di ricarica Green Motion meno recenti (Box Proxy)'
sidebar_label: 'Eaton OCPP'
---
## Stazioni di ricarica Box Proxy

## Stazioni di ricarica Green Motion meno recenti (Box Proxy)

Il Box Proxy è disponibile da subito per l'integrazione delle stazioni Green Motion meno recenti. Ciò significa che le stazioni di ricarica possono già essere collegate alla piattaforma eCarUp e testate seguendo la guida riportata di seguito. Potrebbero tuttavia esserci ancora ampliamenti e/o miglioramenti.

Attualmente sono supportati i seguenti modelli di stazioni di ricarica:

[Private-One con un connettore](/drittsysteme/box-proxy-green-motion)

[xChargeLN xCIM Client con un connettore](/drittsysteme/box-proxy-green-motion)

[Master One](/drittsysteme/box-proxy-green-motion)

[Network TWO](/drittsysteme/box-proxy-green-motion)

[Smart One](/drittsysteme/box-proxy-green-motion)

## Stazioni di ricarica OCPP

![Eaton OCPP – Figura 1](/img/ocpp-ladestationen-eaton/01.jpg)

[Green Motion Duo](https://www.eaton.com/ch/de-de.html)

![Eaton OCPP – Figura 2](/img/ocpp-ladestationen-eaton/02.jpg)

[Green Motion DC 22&66](https://www.eaton.com/ch/de-de.html)

![Eaton OCPP – Figura 3](/img/ocpp-ladestationen-eaton/03.jpg)

[Green Motion Building](https://www.eaton.com/ch/de-de.html)

## Guida all'integrazione nel backend

Le stazioni Eaton possono essere integrate in pochi passaggi nel sistema di conteggio eCarUp. Una volta installate nel tuo account, puoi definire tu stesso in modo semplice le condizioni d'uso delle tue stazioni (prezzi, utenti, orari di disponibilità ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Collegamento delle stazioni di ricarica Eaton

### Green Motion DC 22 & 66

Versione firmware testata: 2003

### Collegamento della stazione di ricarica

Info: la pagina di configurazione rimane attiva per 30 minuti, dopodiché la stazione deve essere riavviata. 

- Accendi la stazione tramite l'interruttore di protezione

- Collega il PC via Ethernet a una delle tre porte LAN del router Teltronika nella stazione

- Nel browser, vai al seguente IP: 192.168.52.11

- Clicca su «Apri pagina» e inserisci nel browser i dati di accesso forniti in dotazione. (Di default può essere admin/admin)

![Eaton OCPP – Figura 4](/img/ocpp-ladestationen-eaton/04.png)

![Eaton OCPP – Figura 5](/img/ocpp-ladestationen-eaton/05.png)

### Passo 1

- Verifica la versione del software: Bienne 2003 è il firmware testato. 

![Eaton OCPP – Figura 6](/img/ocpp-ladestationen-eaton/06.png)

### Passo 2

- Seleziona OCPP Server

- In Backend, imposta Custom

- Aggiungi l'URL eCarUp dal tuo account

Esempio: 

wss://[www.ecarup.com/api/Ocpp16/D037091EE3xxxxxx/](http://www.ecarup.com/api/Ocpp16/D037091EE3026BE0/HL68P28001)

- Imposta Security Profile su None

- Salva

![Eaton OCPP – Figura 7](/img/ocpp-ladestationen-eaton/07.png)

### Passo 3

- Riavvia la stazione

## Green Motion Building

- Firmware testato v.1807

### Collegamento della stazione di ricarica

<div className="row">
<div className="col col--8">

Info: la pagina di configurazione rimane attiva per 30 minuti, dopodiché la stazione deve essere riavviata.

- Accendi la stazione

- Attiva il WLAN sul tuo PC o smartphone

- La stazione crea un hotspot con le ultime 4 cifre del numero di serie. Ad es. GM\_Mxxxxx

- La password è riportata su un adesivo fornito con la documentazione del caricatore. I modelli meno recenti hanno una password standard (GreenMotion!1052).

- Collega il tuo PC o smartphone all'hotspot e nel browser vai al seguente IP: 192.168.53.1

- Configura la rete e prosegui con i passi riportati di seguito.

- È possibile che tu riceva un messaggio di avviso prima di accedere alla pagina di configurazione. Clicca su «Continua».

</div>
<div className="col col--4 text--center">

![Eaton OCPP – Figura 8](/img/ocpp-ladestationen-eaton/08.png)

</div>
</div>

![Eaton OCPP – Figura 9](/img/ocpp-ladestationen-eaton/09.png)

### Passo 1

- Seleziona OCPP Server

- In Backend, imposta Custom

- Aggiungi l'URL eCarUp dal tuo account

Esempio: 

wss://[www.ecarup.com/api/Ocpp16/D037091EE3026BE0/](http://www.ecarup.com/api/Ocpp16/D037091EE3026BE0/HL68P28001)

- Imposta Security Profile su None

- Salva

![Eaton OCPP – Figura 10](/img/ocpp-ladestationen-eaton/10.png)

### Passo 2

- Riavvia la stazione

## Verificare l'autorizzazione

![Eaton OCPP – Figura 11](/img/ocpp-ladestationen-eaton/11.png)

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Eaton OCPP – Figura 12](/img/ocpp-ladestationen-eaton/12.png)

![Eaton OCPP – Figura 13](/img/ocpp-ladestationen-eaton/13.png)

### Download dei log

Se la stazione non dovesse comparire nel nostro sistema e nemmeno il supporto Eaton trovasse una soluzione al problema, ti chiediamo di metterci a disposizione i file di log per una verifica.

Maintenance --> System Log --> Get the Logs
