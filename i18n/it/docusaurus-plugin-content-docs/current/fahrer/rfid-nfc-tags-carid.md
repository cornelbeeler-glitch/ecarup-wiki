---
title: 'RFID / NFC Tags / CarID'
slug: '/fahrer/rfid-nfc-tags-carid'
description: '⚠️ Importante: eCarUp non vende tag RFID.'
sidebar_label: 'RFID / NFC Tags / CarID'
---
<Video src="Rhmi6IUkedY" title="Video YouTube, collegare un tag RFID a un account eCarUp" />

⚠️ Importante: eCarUp non vende tag RFID. Informazioni importanti sull'acquisto di un tag RFID sono disponibili qui: [LINK](/drittprodukte#portachiavi-tag-rfid--nfc-ntag215)

## Principio di funzionamento:

![RFID / NFC Tags / CarID – Figura 1](/img/fahrer-rfid-nfc-tags-carid/01.png)

\*CarID funziona attualmente solo con la [stazione di ricarica Pico](/smart-me-pico) di smart-me

![RFID / NFC Tags / CarID – Figura 2](/img/fahrer-rfid-nfc-tags-carid/02.png)

![RFID / NFC Tags / CarID – Figura 3](/img/fahrer-rfid-nfc-tags-carid/03.png)

### Importante

- I singoli tag RFID sono registrati negli account dei conducenti, non presso il proprietario della stazione. 

- Non tutte le stazioni dispongono di un lettore RFID / NFC. Di conseguenza, un tag RFID non può essere utilizzato presso ogni stazione.

- [Tag RFID compatibili con Pico (dati tecnici)](https://wiki.smart-me.com/produkte/pico-ladestation)

- È possibile che eCarUp riesca a leggere un tag RFID che però non è supportato dalla stazione. Verifichi in primo luogo la compatibilità con la stazione.

- Lo sblocco tramite schede RFID non soddisfa di norma gli elevati requisiti di sicurezza di eCarUp. Le schede RFID possono essere facilmente copiate e falsificate.  L'aggiunta e l'utilizzo di schede RFID avvengono a proprio rischio.

- eCarUp non emette schede RFID / NFC proprie. L'aggiunta e la gestione dei tag devono essere effettuate dal conducente stesso.

- I tag RFID possono essere utilizzati solo per lo sblocco locale delle stazioni di ricarica eCarUp e non funzionano per stazioni di reti terze (ad es. Hubject).

- Nel sistema eCarUp, il TagID della scheda RFID può essere assegnato a un solo utente. (Funzione di protezione)

## Guida per aggiungere una scheda RFID:

### Guida app Android

Requisito: smartphone Android con funzione NFC.

1\. Acceda con l'app Android di eCarUp all'account conducente che desidera collegare a un tag RFID/NFC.  Nel menu in basso, clicchi su Account (Account) e poi su Schede RFID (RFID Karten).

2\. Clicchi sul simbolo + in alto a destra, quindi potrà specificare il nome e il Tag-ID (come nella versione web). 

3\. Se il Suo smartphone Android dispone di una funzione NFC, può leggere direttamente il tag della scheda desiderata. A tale scopo, tenga la scheda contro il retro del dispositivo (dove si trova la maggior parte dei lettori NFC).

Se inserisce il Tag-ID (UID) manualmente, può determinarlo leggendo il tag RFID desiderato. Ciò può avvenire direttamente tramite un lettore RFID (ad es. in un'azienda) oppure tramite un'app su un telefono cellulare dotato di lettore NFC. Un esempio è l'app gratuita [NFC-Tools](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc&hl=de_CH) (Apple impedisce la lettura dei numeri RFID / NFC).

4\. Il Suo Tag-ID è ora collegato all'account e può essere utilizzato per lo sblocco.

### Guida app iOS

Requisito: iPhone con funzione NFC (da iOS 14 & > iPhone 6).

(Apple supporta questa funzione solo a partire dalla versione iOS 13/14).

1\. Acceda nell'app eCarUp (iOS) all'account conducente che desidera collegare a un tag RFID/NFC. Nel menu in basso, clicchi su Account (Account) e poi su Schede RFID (RFID Karten).

2\. Clicchi sul simbolo + in alto a destra, quindi potrà specificare il nome e il Tag-ID (come nella versione web). 

3\. Se il Suo smartphone Apple dispone di una funzione NFC (>iPhone 10), può leggere direttamente il tag della scheda desiderata. A tale scopo, tenga la scheda contro il retro (dove si trova la maggior parte dei lettori NFC\-) del Suo dispositivo.

4\. Il Suo Tag-ID è ora collegato all'account e può essere utilizzato per lo sblocco.

<div className="row">
<div className="col col--6 text--center">

![RFID / NFC Tags / CarID – Figura 4](/img/fahrer-rfid-nfc-tags-carid/04.png)

</div>
<div className="col col--6 text--center">

![RFID / NFC Tags / CarID – Figura 5](/img/fahrer-rfid-nfc-tags-carid/05.png)

</div>
</div>

Esempio di TagID:

- Importante: non è necessario inserire i due punti.

- Attenzione: lo SwissPass ha 2 tag RFID, eCarUp consiglia di registrarli entrambi.

![RFID / NFC Tags / CarID – Figura 6](/img/fahrer-rfid-nfc-tags-carid/06.png)

### Nota su Apple iPhone (iOS):

Android riconosce quasi tutti i tipi di chip. Apple, tuttavia, limita fortemente l'interfaccia NFC lato produttore: i chip più vecchi o proprietari (ad es. Mifare Classic o Legic), spesso utilizzati sulle schede di ricarica, vengono bloccati da iOS per motivi di sicurezza. eCarUp non ha alcuna influenza su questo aspetto.

Se il Suo iPhone non riconosce la scheda:

- Inserimento manuale: inserisca semplicemente a mano nell'app eCarUp il numero stampato sulla scheda (UID, se presente) (senza spazi).

- Registrazione tramite Android: acceda una volta su un dispositivo Android con il Suo account eCarUp e scansioni lì la scheda. Sarà subito registrata nel Suo account.

![RFID / NFC Tags / CarID – Figura 7](/img/fahrer-rfid-nfc-tags-carid/07.png)

## CarID:

La funzione Plug & Charge consente un'autenticazione semplice e sicura tra il veicolo elettrico e una stazione di ricarica, rendendo superfluo lo sblocco tramite app o scheda RFID.

Dopo un'unica registrazione del veicolo con l'app eCarUp, per ogni sessione di ricarica è sufficiente che l'utente colleghi il veicolo elettrico. Il veicolo trasmette automaticamente alla stazione di ricarica i dati necessari per autorizzare il pagamento.

⚠️Importante: attualmente questa funzione è disponibile solo con la stazione di ricarica [Pico](https://wiki.smart-me.com/produkte/pico-ladestation) di smart-me AG.

### Collegamento con l'account

<div className="row">
<div className="col col--6">

Requisito di base: il gestore della stazione [Pico](/smart-me-pico) deve aver attivato la funzione sulla stazione di ricarica e l'auto deve essere un veicolo elettrico a batteria.

1.  Colleghi il Suo veicolo alla Pico

2.  Attenda che sul display compaia la croce arancione (X CAR-ID)

3.  Sul display compare un'icona (persona con scudo)

4.  Successivamente può avviare la sessione di ricarica come di consueto tramite l'app eCarUp

5.  Non appena ciò è avvenuto, compare una finestra pop-up di eCarUp che Le chiede se desidera assegnare la Car-Id.

⚠️Importante: è importante eliminare il collegamento della CarID con il Suo account non appena l'auto non è più di Sua proprietà, ad esempio dopo una vendita.

⚠️Importante: la Car-Id può essere la stessa su più veicoli, a seconda del produttore dell'auto. Pertanto può avvenire una ricarica sul Suo account anche se non si tratta del Suo veicolo.

</div>
<div className="col col--6 text--center">

![RFID / NFC Tags / CarID – Figura 8](/img/fahrer-rfid-nfc-tags-carid/08.jpg)

</div>
</div>
