---
title: 'Alarmes'
slug: '/funktionen/wartung/alarme'
description: 'Cette fonction fait partie de la maintenance, qui est soumise à licence.'
sidebar_label: 'Alarmes'
---
Cette fonction fait partie de la maintenance, qui est soumise à licence.

## Information

La fonction d'alarme permet de configurer des notifications automatiques par e-mail pour certaines actions. Elle sert avant tout à détecter les pertes de connexion (bornes de recharge qui passent hors ligne) et à permettre une réaction proactive. 

![Alarmes – Illustration 1](/img/funktionen-wartung-alarme/01.png)

La fonction d'alarme est disponible pour toutes les bornes de recharge intégrées via OCPP (les messages d'alarme pour les bornes de recharge [Pico](/smart-me-pico) peuvent être configurés via les [actions Si / Alors de smart-me](https://wiki.smart-me.com/konfiguration/wenndann-aktionen/alarme)). Actuellement, des messages d'alarme peuvent être définis pour trois événements :

1.  Activation d'une session de recharge

2.  Désactivation d'une session de recharge

3.  Alarme pour les stations au statut "offline" ou "inactif" (y compris une notification lors du rétablissement de la connexion)


Important : la notification par e-mail est envoyée avec des objets différents. Un e-mail lorsque la station passe hors ligne et un e-mail lorsque la station revient en ligne. 


Les alarmes peuvent être définies par groupe de stations ou pour une station individuelle.

Attention : dans la version actuelle, seule la notification en anglais peut être sélectionnée.

## Configuration

![Alarmes – Illustration 2](/img/funktionen-wartung-alarme/02.png)

1.  Cliquez sur Créer (erstellen)

2.  Nommez votre règle d'alarme

3.  Vous pouvez choisir entre une station et le groupe de stations

4.  Sélectionnez la station souhaitée / si vous avez opté pour le groupe, vous pouvez y sélectionner le groupe

5.  Choisir le type de déclencheur :


- Recharge démarrée (Aufladung gestartet)

- Recharge arrêtée (Aufladung gestoppt)

- Station non disponible (Station nicht verfügbar)


6.  Vous pouvez saisir ici l'adresse e-mail.


Important : plusieurs adresses peuvent également être saisies. Vous pouvez séparer les différents destinataires par un point-virgule ; entre les adresses.

Exemple : info@ecarup.com;support@ecarup.com

7.  Dans un premier temps, l'e-mail d'alarme n'est envoyé qu'en anglais. 

8.  Enregistrer (Speichern)


## Fonctionnement du message "offline" ou "inactif"

L'alarme pour les stations au statut "offline" ou "inactif" fonctionne comme suit :

Ce statut est attribué automatiquement par le backend eCarUp lorsqu'une station ne se connecte plus au backend pendant plus de 15 minutes et que l'activation / le décompte ne peut donc plus être garanti. La procédure est ensuite la suivante :


1.  En cas de panne de plus de 15 minutes, un e-mail est envoyé à tous les destinataires définis.

2.  Si la panne persiste, un nouvel e-mail est envoyé à tous les destinataires définis après une heure.

3.  Si la panne persiste encore, un nouvel e-mail est envoyé à tous les destinataires définis après 24 heures.


L'alarme est ensuite clôturée pour le système eCarUp et n'est plus suivie. Les pannes de moins de 15 minutes ne donnent lieu à aucun e-mail.

Dans la grande majorité des cas, la cause d'une panne est une coupure (ou une perturbation) d'Internet, qui rend impossible la communication avec nos serveurs. Plus rarement, il peut aussi s'agir d'une panne de courant. Dans les deux cas, la station se reconnecte automatiquement au backend une fois la cause éliminée (statut "Prêt" (Bereit\*)) et peut être utilisée normalement.

Important : lorsque la station revient en ligne, un message (e-mail) est également envoyé pour signaler que la station est de nouveau disponible. 

## Quand une alarme est-elle déclenchée

Une alarme est déclenchée lors de la détection de Lost ou Finish Connection/Processing.

![Alarmes – Illustration 3](/img/funktionen-wartung-alarme/03.png)

![Alarmes – Illustration 4](/img/funktionen-wartung-alarme/04.png)

## Fonctionnement en cas de statut "Faulted" ou "Unavailable"

Dès que le statut „Faulted“ ou „Unavailable“ est reçu de la station, eCarUp déclenche automatiquement une alarme après un délai d'attente de 15 minutes. 

![Alarmes – Illustration 5](/img/funktionen-wartung-alarme/05.png)

Lorsque le statut est marqué comme résolu et que la station nous envoie le statut "Available", nous en informons immédiatement l'exploitant de la station afin qu'il soit informé du rétablissement du fonctionnement.
