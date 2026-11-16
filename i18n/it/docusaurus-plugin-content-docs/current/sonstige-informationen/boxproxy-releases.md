---
title: 'Aggiornamento release BoxProxy'
slug: '/sonstige-informationen/boxproxy-releases'
description: 'Release BoxProxy v2026-05-26'
sidebar_label: 'Release BoxProxy'
---
Release BoxProxy v2026-05-26

- Caso particolare per le stazioni Network 2: invia "!SPVAL with spvalPlugAction:Stop" al posto di RemoteStop


Release BoxProxy v2025-12-10

Soluzioni alternative a causa di bug del firmware nelle stazioni eaton:

- L'intervallo di attività della presa deve essere uguale a quello dell'heartbeat.

- L'ID della richiesta per SetPlugValueRequest deve essere 0

    Release Box Proxy 2025-11-19


Correzioni

- Se la firma non è valida, viene inviata una risposta con stato elaborato = 0:

- Soluzione alternativa per dati energetici non validi nel messaggio meter-stop

- Aggiunto PlugActivityUpdateTime configurabile dall'utente per le stazioni di ricarica

- Limitazione delle OCPP Status Notifications a un intervallo di 55s o a cambiamenti di stato importanti


Release BoxProxy 2025-10-27

Funzionalità

- Invio di un RemoteStop aggiuntivo se eCarUp rifiuta una StartTransaction (bug nelle stazioni eaton)


Gateway BoxProxy eCarUp 2025-10-02

Correzioni

-  Corretta una perdita di memoria (terminazione dei Ghost Websocket dopo 15 min)

-  Aggiunti health check


Release BoxProxy eCarUp 2025-09-25

Correzione di bug

- Soluzione alternativa della soluzione alternativa: il valore del contatore di una stazione eaton viene corretto solo se la presa non è libera


Release BoxProxy eCarUp 2025-09-24

Funzionalità

- Correzione del problema del firmware della stazione nel cloud, parte 2: reset della stazione se nei primi 50s non è stato ricevuto alcun Mode3\_C


Release BoxProxy eCarUp 2025-09-16

Funzionalità

- Sostituzione dell'auth tag vuoto per le ricariche gratuite con un auth tag configurabile dall'utente

- Aggiunto il logging per le firme non valide

- Aggiunto all'interfaccia un contatore dei riavvii per ogni stazione


Release BoxProxy eCarUp 2025-09-09

Funzionalità

- Aggiunta la funzione Terminate BoxProxy Connection all'interfaccia RocketmasterStationAssignment


Release BoxProxy eCarUp 2025-09-02

Bug corretto

- Tentativo di risolvere nel cloud il problema delle stazioni eaton: correzione dei MeterValues delle stazioni se sono errati. Invio di uno SPVAL per aggiornare il MeterValue sulla stazione.


Release BoxProxy eCarUp 2025-09-01

Bug corretto

- Corretto il bug delle transazioni miste (problema LanguageExt non atteso)


Release Boxproxy 2025-08-20 v2

Funzionalità

- Timeout del Websocket OCPP di 15 min. Il socket viene chiuso se per 15 min non è stato ricevuto nulla dal backend.


Bug

- Ora è possibile scaricare log di grandi dimensioni


Release Boxproxy 2025-08-20

Funzionalità

- Soluzione alternativa per le stazioni eaton che azzerano il meterValue durante una sessione di ricarica. 


Alcune stazioni Eaton si riavviano e azzerano erroneamente il conteggio dell'energia durante una sessione di ricarica. Abbiamo rilasciato una correzione che ora rileva questi eventi e corregge il valore energetico finale.

Release BoxProxy OCPP Gateway 2025-03-13

- Soluzione alternativa per gli ID di sessione incoerenti delle stazioni eaton
