---
title: 'Webinar eCarUp Backend basic + eaton'
slug: '/drittsysteme/box-proxy-green-motion/webinar-ecarup-backend-basic-eaton'
description: 'eaton Box Proxy e OCPP 29:19'
sidebar_label: 'Webinar eCarUp Backend basic + eaton'
---
## Webinar

<Video src="Jowm4Ke0Z38" title="Video YouTube, registrazione del webinar «Nozioni di base eCarUp & Box Proxy / Green Motion» (parte 2 Box Proxy)" />

- Introduzione [00:00](https://www.youtube.com/watch?v=Jowm4Ke0Z38)

- Nozioni di base eCarUp [1:21](https://youtu.be/Jowm4Ke0Z38?si=SuDE9wxrD7aNVNg0&t=81)

- Demo dal vivo eCarUp [22:46](https://youtu.be/Jowm4Ke0Z38?si=E4N2BBLPiRUDdoKy&t=1366)

- eaton Box Proxy e OCPP [29:19](https://youtu.be/Jowm4Ke0Z38?si=9uUrVfyatrvgiLUG&t=1759)

## In generale

<details id="wie-werde-ich-partner-wo-finde-ich-partner">
<summary>Come si diventa partner, dove si trovano i partner?</summary>

- [Diventare partner](https://web.ecarup.com/partnerschulung-ecarup/)

- [Cercare un partner](https://web.ecarup.com/partner-de/)

</details>

<details id="wo-finde-ich-weitere-informationen">
<summary>Dove trovo ulteriori informazioni?</summary>

- Nel wiki tutte le informazioni sono disponibili in DE e EN. FR contiene attualmente solo l'essenziale e si concentra sui conducenti e sui casi d'uso semplici. eCarUp Wiki 

</details>
## Gestori di stazioni

<details id="fragen-zu-preisen">
<summary>Domande sui prezzi</summary>

- Il prezzo per kWh e per ora di ricarica attiva è stabilito dal gestore della stazione stesso. Il prezzo può essere più alto o più basso.

- È possibile definire più prezzi per una stazione, tutti pubblici, e poi un ulteriore prezzo per utente, che è limitato:  [Portale web](/stationsbetreiber/webportal) 

- Se il denaro viene incassato tramite carta di credito, si applicano commissioni per carta di credito del 10%. Con una soluzione di incasso senza carta di credito, ad es. [Report](/funktionen/reports) , queste commissioni non si applicano, poiché eCarUp non è più coinvolta nel flusso di denaro.

- Con il roaming può stabilire il prezzo che riceve; il prezzo fatturato al conducente non è più di nostra competenza e viene stabilito dal partner di roaming senza consultarci:  [Roaming](/funktionen/roaming) 

- I prezzi dinamici non sono supportati da eCarUp.

- Tariffa alta e tariffa bassa non sono possibili, perché OCPP non è concepito per questo; alcune piattaforme lo offrono, ma tengono conto solo dell'inizio della ricarica. Abbiamo deciso consapevolmente di non farlo, poiché alcuni fornitori di energia offrono la tariffa bassa solo a mezzogiorno e ciò significherebbe che qualcuno potrebbe attivare una ricarica a tariffa bassa poco dopo mezzogiorno e poi ricaricare per tutto il pomeriggio, durante la tariffa alta, al prezzo della tariffa bassa.

</details>

<details id="sind-strafrechtliche-sanktionen-möglich">
<summary>Sono possibili sanzioni penali?</summary>

- No, al momento non disponiamo di una soluzione ragionevole che copra tutti i casi. Ad esempio: veicoli con motore a combustione che parcheggiano. Cavi che vengono collegati e poi ci si allontana senza attivare la ricarica, qualcuno che riduce consapevolmente la ricarica, ad es. a 6 ampere sull'auto, e rimane così a lungo sul parcheggio ricaricando sempre qualcosa, ma non molto

</details>

<details id="kann-man-zu-bestimmten-zeiten-stationen-zugänglich-oder-sichtbar-machen">
<summary>È possibile rendere le stazioni accessibili o visibili in determinati orari?</summary>

- Sì, [Wiki --> Gestori di stazioni --> Definire gli orari](/stationsbetreiber/webportal)

</details>

<details id="kann-man-in-der-app-in-echtzeit-sehen-ob-die-station-verfügbar-besetzt-oder-ausgefallen-ist">
<summary>Nell'app si può vedere in tempo reale se la stazione è disponibile, occupata o fuori servizio?</summary>

- Sì

</details>

<details id="ist-es-möglich-den-gesamtverbrauch-in-kwh-einer-ladestation-für-1-jahr-zu-ermitteln">
<summary>È possibile determinare il consumo totale in kWh di una stazione di ricarica per 1 anno?</summary>

- Sì, con un [Report](/funktionen/reports)  

</details>

<details id="können-wir-im-backend-nicht-verschiedene-gruppen-erstellen-um-für-jede-gruppe-unterschiedliche-regeln-mit-preisen-definieren">
<summary>Non possiamo creare diversi gruppi nel backend, per definire per ogni gruppo regole diverse con i prezzi?</summary>

- Sì, [Ruoli & diritti\*](/funktionen/rollen-rechte) 

</details>

<details id="ist-es-möglich-zwei-verschiedene-limiterte-gruppen-zu-erstellen-in-denen-jeweils-ein-anderer-tarif-gilt">
<summary>È possibile creare due diversi gruppi «limitati» («Limiterte»), in ciascuno dei quali si applica una tariffa diversa?</summary>

- Sì, [Ruoli & diritti\*](/funktionen/rollen-rechte) 

</details>

<details id="bis-zu-welchem-zeitpunkt-werden-die-daten-rückwirkend-gespeichert-bzw-sind-sie-sichtbar---report">
<summary>Fino a quando i dati vengono salvati retroattivamente, ovvero restano visibili? -> Report</summary>

- Attualmente 10 anni.

</details>
## Eaton

<details id="bietet-ecarup-ein-lademanagement">
<summary>eCarUp offre una gestione della ricarica?</summary>

- No, il protocollo OCPP non è concepito per questo. Se ne deve occupare il produttore della stazione di ricarica.

</details>

<details id="benötige-ich-zusätzliche-hardware-für-den-boxproxy">
<summary>Ho bisogno di hardware aggiuntivo per il BoxProxy?</summary>

- No, è sufficiente applicare il codice QR sul posto.

- Guida: [Box-Proxy Green Motion](/drittsysteme/box-proxy-green-motion) 

</details>

<details id="kann-ich-weiterhin-shell-oder-evpass-verwenden">
<summary>Posso continuare a utilizzare Shell o evpass?</summary>

- Sì, per noi sono normali partner di roaming. La stazione deve essere pubblica e disponibile 24/7, l'ubicazione deve essere definita e Hubject deve essere attivato. Maggiori informazioni: [Portale web](/stationsbetreiber/webportal), [Roaming](/funktionen/roaming) 

</details>

<details id="wie-kann-ich-eine-eaton-station-einbinden">
<summary>Come posso integrare una stazione Eaton?</summary>

- OCPP: [Eaton](/ocpp-ladestationen/eaton) 

- Modelli più vecchi che non supportano ancora OCPP: [Box-Proxy Green Motion](/drittsysteme/box-proxy-green-motion) 

- Importante: è sempre necessario un codice QR: [Codice QR](/stationsbetreiber/qr-code) 

- La stazione non è elencata nel wiki alla voce BoxProxy: in questo caso non abbiamo ancora ricevuto l'hardware da eaton e non abbiamo ancora potuto eseguire il test. Si prega di informarsi presso eaton.

</details>

<details id="kann-ich-die-stationen-von-eaton-egal-ob-boxproxy-oder-ocpp-auch-mit-rfid-app-oder-qr-aktivieren">
<summary>Posso attivare le stazioni eaton, sia tramite BoxProxy sia tramite OCPP, anche con RFID, app o QR?</summary>

- Sì

</details>

<details id="ist-es-möglich-dass-während-der-migration-eine-station-gleichzeitig-auf-den-plattformen-von-eaton-und-ecarup-angezeigt-wird">
<summary>È possibile che durante la migrazione una stazione venga visualizzata contemporaneamente sulle piattaforme di eaton e di eCarUp?</summary>

- No

</details>

<details id="wo-können-wir-die-mit-boxproxy-kompatiblen-eaton-modelle-auf-ihrer-website-finden">
<summary>Dove possiamo trovare sul vostro sito web i modelli Eaton compatibili con Boxproxy?</summary>

- Qui: [Box-Proxy Green Motion](/drittsysteme/box-proxy-green-motion) 

- Per tutte le stazioni che non figurano nell'elenco, si rivolga direttamente a Eaton.

</details>

<details id="muss-ich-für-die-integration-einen-link-im-eaton-portal-ändern">
<summary>Per l'integrazione devo modificare un link nel portale Eaton?</summary>

- Segua semplicemente le istruzioni: [Eaton OCPP](/ocpp-ladestationen/eaton)

- Segua semplicemente le istruzioni: [BoxProxy Green Motion](/drittsysteme/box-proxy-green-motion) 

</details>

<details id="ist-es-möglich-die-auf-der-eaton-plattform-erstellten-konten-auf-die-ecarup-plattform-zu-übertragen">
<summary>È possibile trasferire gli account creati sulla piattaforma Eaton alla piattaforma ecarup?</summary>

- No

</details>

<details id="was-kostet-der-boxproxy">
<summary>Quanto costa il BoxProxy?</summary>

- Una licenza Premium per punto di ricarica (connettore): [Prezzo](https://web.ecarup.com/preise-ladestationen-backend/) 

</details>
## Conducenti

<details id="wie-aktiviere-ich-eine-station">
<summary>Come attivo una stazione?</summary>

- Codice QR senza app: [Funzione di pagamento immediato](/fahrer/sofort-bezahl-funktion) 

- App: [App](/fahrer/ecarup-app) 

- RFID, se è stato aggiunto nell'app per conducenti e la stazione dispone di un sensore RFID: [RFID / tag NFC / CarID](/fahrer/rfid-nfc-tags-carid) 

</details>

<details id="fragen-zur-bezahlung">
<summary>Domande sul pagamento</summary>

- Google Pay, Apple Pay e carta di credito sono i mezzi di pagamento con cui si può ricaricare direttamente su eCarUp.

- La PostFinance Card non può essere registrata come mezzo di pagamento, poiché il nostro fornitore di servizi finanziari Stripe non l'ha implementata.

- Una carta RFID non è un mezzo di pagamento, ma serve solo all'autenticazione.

</details>

<details id="der-fahrer-der-station-muss-kein-abonnement-abschliessen-sondern-zahlt-nur-für-seinen-verbrauch">
<summary>Il conducente della stazione non deve sottoscrivere un abbonamento, ma paga solo il proprio consumo.</summary>

- Corretto, per il conducente non sono previste commissioni.

</details>

<details id="können-ladestationen-reserviert-werden">
<summary>Le stazioni di ricarica possono essere prenotate?</summary>

- No

</details>
