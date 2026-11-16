---
title: 'Esportazione automatica (utente)'
slug: '/funktionen/auto-export-user'
description: 'Per utilizzare tutte le funzioni eCarUp e Goldpartner è necessaria una collaborazione più stretta.'
sidebar_label: 'Esportazione automatica (utente)*'
---
Per utilizzare tutte le funzioni eCarUp e Goldpartner è necessaria una collaborazione più stretta. Per maggiori informazioni scriva semplicemente a verkauf@ecarup.com.

## Esportazione automatica (utente)

### Con la funzione di esportazione utenti di eCarUp è possibile trasferire le transazioni basate sugli utenti dal portale eCarUp direttamente nell'IS-E.

A tal fine sono importanti i seguenti punti:

- Il conducente deve essere noto ed essere registrato con il prezzo 0.00.-.

- Definisca un gruppo di stazioni all'interno del quale il conducente può muoversi ovvero ricaricare.

- Da parte Sua deve essere disponibile un server (FTPs o SFTP). 


### 1\. Definire la destinazione dell'esportazione automatica

![Esportazione automatica (utente) – Figura 1](/img/funktionen-auto-export-user/01.png)

![Esportazione automatica (utente) – Figura 2](/img/funktionen-auto-export-user/02.png)

- Nella configurazione delle schede dell'esportazione automatica proceda da destra verso sinistra (analogamente a smart-me)

- Nel menu selezioni Destinazione (Zielort)

- Successivamente può configurare una sola volta il server per tutte le esportazioni automatiche in eCarUp  (SFTP / FTPS)

- Con SFTP la porta è sempre 22 

- Con FTPS la porta è sempre 21


### 2\. Configurare la formattazione dell'esportazione automatica

![Esportazione automatica (utente) – Figura 3](/img/funktionen-auto-export-user/03.png)

![Esportazione automatica (utente) – Figura 4](/img/funktionen-auto-export-user/04.jpg)

- Selezioni poi Formattare (Formatieren) (anche questa è una configurazione da eseguire una sola volta)

- Per il Metering Code è possibile definire quanto segue:

    -  DeviceLocationID: numero di identificazione  nell'IS-E

    -  FactoryNo: numero di fabbricazione

    - InternalNo: numero interno

    - Metering Code: codice definito per il meter/contatore

- Ora è possibile selezionare e definire il codice OBIS tra 1.8.0 e 1.9.0.


1.8.0 = lettura del contatore virtuale

1.9.0 = avanzamento

Le consigliamo di concordare queste impostazioni con il responsabile IS-E della Sua organizzazione. 

### 3\. Definire le attività dell'esportazione automatica

![Esportazione automatica (utente) – Figura 5](/img/funktionen-auto-export-user/05.png)

![Esportazione automatica (utente) – Figura 6](/img/funktionen-auto-export-user/06.png)

- Selezioni poi Attività (Aufgabe). Qui si definisce per quale utente e quale gruppo di stazioni vengono esportati i dati. Per ogni esportazione automatica deve essere configurata un'attività.

- Definisca l'utente eCarUp  (tramite l'indirizzo e-mail utilizzato per l'account eCarUp)

- Selezioni il gruppo di stazioni corrispondente 

- Inserisca poi il formato e la destinazione, già definiti in precedenza nei passaggi 1 e 2

- Imposti l'intervallo di caricamento

- Infine verifichi che lo stato in fondo a destra passi a "OK (OK) ": a quel punto i dati vengono esportati sul server


L'insieme delle funzioni naturalmente non è esaustivo e il Goldpartner di eCarUp beneficia automaticamente anche delle funzioni future. 

## File XML di prova

<Embed src="https://drive.google.com/file/d/1n96bHZNEQ66znDATheV5jT1Bjro4MF9h/preview" aspect="1.350" title="Drive, file XML Auto Export eCarUp.pdf" />

XML File Auto Export eCarUp.pdf
