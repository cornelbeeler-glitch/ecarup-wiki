---
title: 'Charge Amps'
slug: '/ocpp-ladestationen/charge-amps'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Charge Amps'
---
![Charge Amps – Figura 1](/img/ocpp-ladestationen-charge-amps/01.jpg)

[Charge Amps Aura](https://www.chargeamps.com/de/product/charge-amps-aura/)

![Charge Amps – Figura 2](/img/ocpp-ladestationen-charge-amps/02.jpg)

[Charge Amps Dawn](https://www.chargeamps.com/de/product/charge-amps-aura/)

![Charge Amps – Figura 3](/img/ocpp-ladestationen-charge-amps/03.jpg)

[Charge Amps Halo](https://www.chargeamps.com/de/product/charge-amps-aura/)

## Guida all'integrazione nel backend

Le stazioni Charge Amps possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel Suo account, può definire autonomamente e senza complicazioni le condizioni d'uso delle Sue stazioni (prezzi, utenti, orari disponibili ecc.). È Lei a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopra di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione di stazioni OCPP

1.  Si assicuri che le Sue stazioni di ricarica siano installate e che il Suo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apra il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettui l'accesso con i dati del Suo account.

3.  Nel menu a sinistra, clicchi sulla scheda "Stazioni" ("Stationen").

4.  Selezioni la scheda "OCPP".

5.  Copi l'URL negli appunti.

6.  Acceda all'interfaccia web della stazione desiderata e incolli l'URL copiato.

## Integrazione delle stazioni Charge Amps

### HALO (1 x 11 kW)

⚠️ Importante: il firmware della stazione deve essere almeno alla versione 158 

### Passaggi preliminari per l'integrazione della wallbox HALO

1.  Apra la seguente pagina e si registri: [https://my.charge.space](https://my.charge.space/userapp/#/dashboard)

2.  Dopo aver effettuato l'accesso, può aggiungere la Sua wallbox HALO tramite il profilo.

3.  Vada quindi alla voce di menu "Controllo remoto" ("Fernsteuerung") e attivi il blocco RFID. 

⚠️ ATTENZIONE: questo blocco deve essere attivato PRIMA dell'implementazione OCPP!

![Charge Amps – Figura 4](/img/ocpp-ladestationen-charge-amps/04.png)

### Integrazione OCPP

1.  Accenda la Sua HALO

2.  Utilizzi uno smartphone e apra le impostazioni WLAN

3.  Selezioni l'hotspot della wallbox HALO (HALO\_numero di serie)

4.  Apra il browser sullo smartphone e inserisca il seguente indirizzo IP: 192.168.250.1

5.  Si apre la pagina di configurazione della HALO

6.  Inserisca la password richiesta. La password si trova nella lettera di Charge Amps fornita in dotazione 

7.  Nelle impostazioni, clicchi sulla freccia del menu (in alto a destra)

- Alla voce di menu Wi-Fi è possibile connettere la stazione alla rete WLAN desiderata 

-  Selezioni la voce di menu "OCPP"

8.  Ora occorre inserire l'URL eCarUp. Clicchi quindi su "Aggiorna" ("Aktualisieren") e riavvii la wallbox.

    Esempio di URL: ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxxxxx

![Charge Amps – Figura 5](/img/ocpp-ladestationen-charge-amps/05.png)

![Charge Amps – Figura 6](/img/ocpp-ladestationen-charge-amps/06.png)

## AURA (2 x 22 kW)

### Passaggi preliminari per l'integrazione della wallbox AURA

1.  Apra la seguente pagina e si registri: [https://my.charge.space](https://my.charge.space/userapp/#/dashboard)

2.  Dopo aver effettuato l'accesso, può aggiungere la Sua wallbox Aura tramite il profilo.

3.  Vada quindi alla voce di menu "Controllo remoto" ("Fernsteuerung") e attivi il blocco RFID. Lo faccia per entrambi i connettori!

⚠️ ATTENZIONE: questo blocco deve essere attivato PRIMA dell'implementazione OCPP!

![Charge Amps – Figura 7](/img/ocpp-ladestationen-charge-amps/07.png)

### Integrazione OCPP

1.  Accenda la Sua AURA

2.  Utilizzi uno smartphone e apra le impostazioni WLAN

3.  Selezioni l'hotspot della wallbox AURA (AURA\_numero di serie)

4.  Apra il browser sullo smartphone e inserisca il seguente indirizzo IP: 192.168.250.1

5.  Si apre la pagina di configurazione della AURA

6.  Inserisca la password richiesta. La password si trova nella lettera di Charge Amps fornita in dotazione 

7.  Nelle impostazioni, clicchi sulla freccia del menu (in alto a destra)

- Alla voce di menu Wi-Fi è possibile connettere la stazione alla rete WLAN desiderata 

-  Selezioni la voce di menu "OCPP"

8.  Ora occorre inserire l'URL eCarUp. Clicchi quindi su "Aggiorna" ("Aktualisieren") e riavvii la wallbox.

    Esempio di URL: ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxxxxx

![Charge Amps – Figura 8](/img/ocpp-ladestationen-charge-amps/05.png)

![Charge Amps – Figura 9](/img/ocpp-ladestationen-charge-amps/06.png)

### Informazioni importanti sulla AURA

- Di serie, la AURA è configurata in modo che, al termine della sessione di ricarica, possa essere sbloccata solo tramite la tessera RFID. (Sgancio della spina) 

- Ciò significa che, se termina la sessione di ricarica dal lato del veicolo, il meccanismo della stazione che trattiene la spina non viene sbloccato automaticamente. 

- Questo comportamento può essere modificato con il nostro strumento di manutenzione (eCarUp Premium). Proceda come segue:

1.  Parametro Get Configuration con la chiave UnlockConnectorOnEVSideDisconnect (default su false).

2.  Parametro per la modifica Change Configuration, sempre con la chiave UnlockConnectorOn EVSideDisconnect + impostare Value su true e salvare con Set.

1.

![Charge Amps – Figura 10](/img/ocpp-ladestationen-charge-amps/10.png)

2.

![Charge Amps – Figura 11](/img/ocpp-ladestationen-charge-amps/11.png)

## Dawn (1 x 22 kW)

Importante: versione firmware testata, 1.3.5

### Passaggi preliminari per l'integrazione della wallbox Dawn

1.  Apra la seguente pagina e si registri: [https://my.charge.space](https://my.charge.space/userapp/#/dashboard)

2.  Dopo aver effettuato l'accesso, può aggiungere la Sua wallbox Dawn tramite il profilo.

3.  Vada quindi alla voce di menu "Controllo remoto" ("Fernsteuerung") e attivi il blocco RFID. 

⚠️ ATTENZIONE: questo blocco deve essere attivato PRIMA dell'implementazione OCPP!

![Charge Amps – Figura 12](/img/ocpp-ladestationen-charge-amps/12.png)

### Integrazione OCPP

1.  Accenda la Sua Dawn.

2.  Per l'integrazione utilizzi il Suo smartphone e installi l'app Installer di Charge Amps

3.  Apra l'app e avvii una ricerca (via Bluetooth). Importante: ciò è possibile solo nei primi 10min dopo l'alimentazione della stazione.

![Charge Amps – Figura 13](/img/ocpp-ladestationen-charge-amps/13.png)

<div className="row">
<div className="col col--6">

4\. Connetta la stazione di ricarica al mezzo desiderato (Wlan, LAN o tramite eSim )

5\. Vada su CPMS e clicchi su modifica

</div>
<div className="col col--6 text--center">

![Charge Amps – Figura 14](/img/ocpp-ladestationen-charge-amps/14.png)

</div>
</div>

<div className="row">
<div className="col col--6">

6\. Clicchi su Connect to ohter CPMS per inserire l'URL eCarUp

</div>
<div className="col col--6 text--center">

![Charge Amps – Figura 15](/img/ocpp-ladestationen-charge-amps/15.png)

</div>
</div>

<div className="row">
<div className="col col--6">

7\. Digiti manualmente l'URL eCarUp del Suo account.

Esempio: ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxxxxx

8\. Clicchi su Connect

</div>
<div className="col col--6 text--center">

![Charge Amps – Figura 16](/img/ocpp-ladestationen-charge-amps/16.png)

</div>
</div>

8. Compare una conferma

![Charge Amps – Figura 17](/img/ocpp-ladestationen-charge-amps/17.png)

<div className="row">
<div className="col col--6">

9\. Verifica nella panoramica, incluso lo stato della connessione.

10\. Confermi e completi la configurazione.

</div>
<div className="col col--6 text--center">

![Charge Amps – Figura 18](/img/ocpp-ladestationen-charge-amps/18.png)

</div>
</div>

11\. La stazione compare ora nel Suo account eCarUp. 

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Può modificarlo come segue:

1.  Get Configuration (per leggere il valore programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Charge Amps – Figura 19](/img/ocpp-ladestationen-charge-amps/19.png)

![Charge Amps – Figura 20](/img/ocpp-ladestationen-charge-amps/20.png)
