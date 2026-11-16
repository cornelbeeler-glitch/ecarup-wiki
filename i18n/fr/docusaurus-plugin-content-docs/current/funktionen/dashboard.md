---
title: 'Dashboard'
slug: '/funktionen/dashboard'
description: 'Si vous voyez cette barre jaune sur votre dashboard, cela signifie que vous n''avez pas encore correctement vérifié votre compte.'
sidebar_label: 'Dashboard'
---
## Barre jaune

Si vous voyez cette barre jaune sur votre dashboard, cela signifie que vous n'avez pas encore correctement vérifié votre compte. Votre compte peut alors être restreint et les versements, les dépôts ainsi que les sessions de recharge peuvent être bloqués.

Vérifiez votre compte à l'aide du guide suivant :

![Dashboard – Illustration 1](/img/funktionen-dashboard/01.png)

[Vérifier le compte](/stationsbetreiber/account-verifizieren)

### Statut de la borne de recharge

Visualisez d'un coup d'œil le statut de toutes les bornes qui ont été connectées à votre compte.
Il existe au total 4 affichages de statut : 

- Disponible (Verfügbar)
    Votre borne est connectée et communique avec notre backend.

- Connecté (Verbunden)
    Une voiture est branchée et attend qu'une recharge soit démarrée.

- Occupé (Besetzt)
    Une voiture est connectée à la borne et une recharge a été démarrée.

- Hors service (Ausser Betrieb)
    La borne de recharge ne communique pas avec nous. 


![Dashboard – Illustration 2](/img/funktionen-dashboard/02.png)

⚠️Important : avec le statut « hors service » (ausser Betrieb), la borne n'a aucune communication active avec le backend. Nous marquons automatiquement la borne comme « hors service » (ausser Betrieb) après 15 minutes. Si vous souhaitez être averti en cas d'interruption, consultez le paramètre suivant : « [Alarme](/funktionen/wartung/alarme) ».  

## Dernières sessions de recharge

Sous ce point, vous voyez les dernières sessions de recharge effectuées.
Dans cet aperçu, vous voyez les éléments suivants :

- Nom de la borne de recharge sur laquelle la recharge a été effectuée.

- Recettes générées par cette recharge.

- Date et heure de la session de recharge.

- Combien d'heures la recharge a duré et combien de kWh elle a consommé. 


## Recettes

Vous voyez ici combien d'argent est disponible pour un versement sur votre compte eCarUp. Dès que vous effectuez un versement, le montant diminue. Il s'agit donc uniquement du montant actuel qui se trouve sur votre compte.

Si vous voyez un montant sous le point « Bientôt disponible » (Bald verfügbar), l'argent encaissé est en cours de vérification anti-blanchiment par Stripe. La vérification a lieu en quelques heures, après quoi l'argent devrait être automatiquement transféré vers les recettes normales.
