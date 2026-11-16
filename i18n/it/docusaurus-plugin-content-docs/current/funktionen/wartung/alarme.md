---
title: 'Allarmi'
slug: '/funktionen/wartung/alarme'
description: 'Questa funzione fa parte della manutenzione, che è soggetta a licenza.'
sidebar_label: 'Allarmi'
---
Questa funzione fa parte della manutenzione, che è soggetta a licenza.

## Informazioni

Con la funzione di allarme è possibile configurare notifiche automatiche via e-mail per determinate azioni. L'obiettivo principale è rilevare le interruzioni di connessione (stazioni di ricarica che vanno offline) e consentire una reazione proattiva. 

![Allarmi – Figura 1](/img/funktionen-wartung-alarme/01.png)

La funzione di allarme è disponibile per tutte le stazioni di ricarica integrate tramite OCPP (i messaggi di allarme per le stazioni di ricarica [Pico](/smart-me-pico) possono essere configurati tramite le [azioni Se / Allora di smart-me](https://wiki.smart-me.com/konfiguration/wenndann-aktionen/alarme)). Attualmente è possibile impostare messaggi di allarme per tre eventi:

1.  Attivazione di una sessione di ricarica

2.  Disattivazione di una sessione di ricarica

3.  Allarme per stazioni con stato "offline" o "inattivo" ("inaktiv") (inclusa una notifica al ripristino della connessione)


Importante: la notifica via e-mail viene inviata con oggetti diversi. Una e-mail quando la stazione va offline e una e-mail quando la stazione torna online. 


Gli allarmi possono essere impostati per gruppo di stazioni o per singola stazione.

Attenzione: nella versione attuale è possibile selezionare solo la notifica in lingua inglese.

## Configurazione

![Allarmi – Figura 2](/img/funktionen-wartung-alarme/02.png)

1.  Clicca su crea (erstellen)

2.  Assegna un nome alla tua regola di allarme

3.  Puoi scegliere tra una stazione e il gruppo di stazioni

4.  Seleziona la stazione desiderata / se hai scelto il gruppo, puoi selezionare lì il gruppo

5.  Scegli il tipo di attivatore:


- Ricarica avviata (Aufladung gestartet)

- Ricarica interrotta (Aufladung gestoppt)

- Stazione non disponibile (Station nicht verfügbar)


6.  Qui puoi inserire l'indirizzo e-mail.


Importante: è possibile inserire anche più indirizzi. Puoi separare i diversi destinatari con un punto e virgola ; tra gli indirizzi.

Esempio: info@ecarup.com;support@ecarup.com

7.  In una prima fase, l'e-mail di allarme arriva solo in inglese. 

8.  Salva (Speichern)


## Funzionamento della notifica "offline" o "inattivo"

L'allarme per le stazioni con stato "offline" o "inattivo" ("inaktiv") funziona come segue:

Questo stato viene assegnato automaticamente dal backend eCarUp quando una stazione non si connette più al backend per oltre 15 minuti e quindi non è più possibile garantire l'attivazione / il conteggio. La procedura successiva è la seguente:


1.  In caso di interruzione superiore a 15 minuti, viene inviata una e-mail a tutti i destinatari definiti.

2.  Se l'interruzione persiste, dopo un'ora viene inviata un'ulteriore e-mail a tutti i destinatari definiti.

3.  Se l'interruzione continua a persistere, dopo 24 ore viene inviata un'ulteriore e-mail a tutti i destinatari definiti.


Dopodiché l'allarme è concluso per il sistema eCarUp e non viene più seguito. Le interruzioni inferiori a 15 minuti non vengono elaborate come e-mail.

Nella stragrande maggioranza dei casi, la causa di un'interruzione è un'interruzione (o un guasto) di Internet, che impedisce la comunicazione con i nostri server. Più raramente può trattarsi anche di un'interruzione di corrente. In entrambi i casi, una volta eliminata la causa, la stazione si riconnette automaticamente al backend (stato "Pronto" ("Bereit")\*) e può continuare a essere utilizzata normalmente.

Importante: quando la stazione torna online arriva anche una notifica (e-mail) che la stazione è di nuovo disponibile. 

## Quando viene emesso un allarme

Quando viene rilevato Lost o Finish Connection/Processing viene emesso un allarme.

![Allarmi – Figura 3](/img/funktionen-wartung-alarme/03.png)

![Allarmi – Figura 4](/img/funktionen-wartung-alarme/04.png)

## Funzionamento con stato "Faulted" o "Unavailable"

Non appena la stazione invia lo stato „Faulted“ o „Unavailable“, eCarUp attiva automaticamente un allarme dopo un tempo di attesa di 15 minuti. 

![Allarmi – Figura 5](/img/funktionen-wartung-alarme/05.png)

Quando lo stato è contrassegnato come risolto e la stazione ci invia lo stato "Available", informiamo immediatamente il gestore della stazione, in modo che venga a conoscenza del ripristino della funzione.
