---
title: 'Huawei'
slug: '/ocpp-ladestationen/huawei'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Huawei'
---
<div className="row">
<div className="col col--6">

## Guida all'integrazione nel backend

Le stazioni Huawei possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari di disponibilità ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo.

- Requisiti per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

</div>
<div className="col col--6 text--center">

![Huawei – Figura 1](/img/ocpp-ladestationen-huawei/01.png)

</div>
</div>

[Fusion Charge](https://digitalpower.huawei.com/en/smart-charging-network/ultra-fast-charging)

### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia connesso alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) e accedi con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione della Fusion Charge DC

### Passaggi preliminari per l'integrazione della Fusion Charge DC

1.  Verifica innanzitutto nella guida fornita in dotazione in che modo puoi connetterti alla stazione. 

2.  Installa sul tuo smartphone l'app Antohill  di Huawei oppure utilizza il browser.

### ⚠️ Importante

1.  La stazione è stata testata con successo con la versione firmware V100R025C10SPC060

### Nell'app

<div className="row">
<div className="col col--8">

1.  Vai a Configurazione (Maintenance), poi Business Plattform Parameters

2.  In Busines Platform Domain Name inserisci "[www.ecarup.com](http://www.ecarup.com)".

3.  In Acces Path "/api/Ocpp16/xxxxxxxxx (dal tuo account) /numero di serie

4.  Salva (Submit).

</div>
<div className="col col--4 text--center">

![Huawei – Figura 2](/img/ocpp-ladestationen-huawei/02.png)

</div>
</div>

## Portale web

![Huawei – Figura 3](/img/ocpp-ladestationen-huawei/03.png)

## Impostazione avanzata tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di invio dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30-60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Huawei – Figura 4](/img/ocpp-ladestationen-huawei/04.png)

![Huawei – Figura 5](/img/ocpp-ladestationen-huawei/05.png)
