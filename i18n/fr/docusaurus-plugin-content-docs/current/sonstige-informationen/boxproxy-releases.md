---
title: 'Mise à jour des versions BoxProxy'
slug: '/sonstige-informationen/boxproxy-releases'
description: 'Version BoxProxy v2026-05-26'
sidebar_label: 'Versions BoxProxy'
---
Version BoxProxy v2026-05-26

- Cas particulier pour les bornes de recharge Network 2 : envoi de « !SPVAL with spvalPlugAction:Stop » au lieu de RemoteStop


Version BoxProxy v2025-12-10

Solutions de contournement en raison de bugs du firmware des bornes de recharge Eaton :

- L'intervalle d'activité de la prise doit être identique à celui du heartbeat.

- L'ID de requête pour SetPlugValueRequest doit être 0

    Version Box Proxy 2025-11-19


Corrections

- Si la signature n'est pas valide, une réponse est envoyée avec l'état de traitement = 0 :

- Solution de contournement pour les données d'énergie non valides dans le message meter-stop

- Ajout d'un PlugActivityUpdateTime configurable par l'utilisateur pour les bornes de recharge

- Limitation des OCPP Status Notifications à un intervalle de 55 s ou aux changements d'état importants


Version BoxProxy 2025-10-27

Fonctionnalités

- Envoi d'un RemoteStop supplémentaire si eCarUp refuse une StartTransaction (bug des bornes de recharge Eaton)


Passerelle BoxProxy ecarup 2025-10-02

Corrections

-  Correction d'une fuite de mémoire (fermeture des websockets fantômes après 15 min)

-  Ajout de contrôles de santé (health checks)


Version BoxProxy ecarup 2025-09-25

Correction de bug

- Contournement du contournement : la valeur du compteur d'une borne de recharge Eaton n'est corrigée que si la prise n'est pas libre


Version BoxProxy ecarup 2025-09-24

Fonctionnalités

- Correction du problème de firmware de la borne de recharge dans le cloud, partie 2 : réinitialisation de la borne de recharge si aucun Mode3\_C n'a été reçu dans les 50 premières secondes


Version BoxProxy ecarup 2025-09-16

Fonctionnalités

- Remplacement du tag d'authentification vide pour les recharges gratuites par un tag d'authentification configurable par l'utilisateur

- Ajout de la journalisation des signatures non valides

- Ajout d'un compteur de redémarrages par borne de recharge dans l'interface utilisateur


Version BoxProxy eCarUp 2025-09-09

Fonctionnalités

- Ajout de la fonction de fermeture de la connexion BoxProxy (Terminate BoxProxy Connection) dans l'interface RocketmasterStationAssignment


Version BoxProxy eCarUp 2025-09-02

Bug corrigé

- Tentative de résoudre dans le cloud le problème des bornes de recharge Eaton : correction des MeterValues des bornes de recharge lorsqu'elles sont complètement fausses. Envoi d'un SPVAL pour mettre à jour la MeterValue sur la borne de recharge.


Version BoxProxy eCarUp 2025-09-01

Bug corrigé

- Correction d'un bug de transactions mélangées (problème LanguageExt non attendu)


Version Boxproxy 2025-08-20 v2

Fonctionnalités

- Délai d'expiration du websocket OCPP de 15 min. Le socket est fermé si rien n'a été reçu du backend pendant 15 min.


Bugs

- Le téléchargement de journaux volumineux est désormais possible


Version Boxproxy 2025-08-20

Fonctionnalités

- Solution de contournement pour les bornes de recharge Eaton qui remettent la meterValue à 0 pendant une session de recharge. 


Certaines bornes de recharge Eaton redémarrent et remettent à tort le compteur d'énergie à zéro pendant une session de recharge. Nous avons publié une correction qui enregistre désormais ces événements et corrige la valeur d'énergie finale.

Version de la passerelle OCPP BoxProxy 2025-03-13

- Solution de contournement pour les ID de session incohérents des bornes de recharge Eaton
