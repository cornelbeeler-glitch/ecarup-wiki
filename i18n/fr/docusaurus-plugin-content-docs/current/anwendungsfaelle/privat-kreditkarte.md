---
title: 'Recharger à domicile avec une carte de crédit'
slug: '/anwendungsfaelle/privat-kreditkarte'
description: '1\. Informations générales'
sidebar_label: 'Privé carte de crédit'
---

## 1\. Informations générales

L'article suivant décrit une configuration standard pour la recharge à domicile avec eCarUp (par exemple pour un immeuble locatif, une PPE ou une communauté d'autoconsommation).  Les conducteurs paient par carte de crédit et le montant est transféré automatiquement du conducteur au propriétaire de la station.

L'avantage de cette variante réside dans le fait que l'argent est transféré automatiquement de la carte de crédit du conducteur vers le compte du propriétaire de la station. Cela présente deux avantages décisifs :

1.  L'ensemble du processus d'encaissement est entièrement automatisé : eCarUp transfère l'argent des transactions directement sur le compte du propriétaire de la station dès leur fin. 

2.  De ce fait, le montant n'est jamais en possession d'eCarUp AG et toutes les transactions (y compris, par exemple, celles des invités sur les places de parc visiteurs) respectent les dispositions légales en vigueur.


Vous trouverez dans notre wiki toutes les autres informations sur le [décompte par carte de crédit](/stationsbetreiber/abrechnen-auszahlen) et sur les [dispositions légales relatives aux montants transférés](/stationsbetreiber/account-verifizieren).

Le décompte par carte de crédit entraîne toujours une commission de 10 %, qu'une [licence eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/) soit active ou non.

Les paramètres décrits ci-dessous permettent de configurer le cas d'application « recharger à domicile par carte de crédit » dans eCarUp. L'état cible et les avantages sont les suivants :

- Les stations ne sont pas visibles publiquement (uniquement pour les utilisateurs spéciaux invités)

- Les conducteurs peuvent recharger directement via l'application ou une carte RFID (payant)

- « Onboarding » simple pour les conducteurs

- Les prix ne doivent être adaptés qu'une fois par an (mutation en masse)

- En complément, un compte pour la recharge gratuite peut également être créé (p. ex. pour le concierge)


Une [licence eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/) est vivement recommandée pour ce cas d'application (sinon, certaines fonctionnalités importantes comme l'outil de maintenance, les rapports ou la gestion étendue des utilisateurs avec les groupes d'utilisateurs ne sont pas disponibles).

## 2\. Connecter les bornes de recharge au backend eCarUp

Les stations doivent d'abord être connectées au backend eCarUp :

- Vous trouverez dans notre wiki une liste actuelle de tous les [modèles de bornes de recharge pris en charge](/ocpp-ladestationen).

- Un [guide pas à pas pour l'intégration des stations](/stationsbetreiber/inbetriebnahme-ocpp-station) est également disponible.

- Pour que de l'argent puisse être transféré sur le compte, celui-ci doit être vérifié. Vous trouverez les informations à ce sujet ici : [Vérifier le compte dans eCarUp](/sonstige-informationen/stripe). Nous recommandons d'effectuer cette étape avant ou pendant l'installation des bornes de recharge. Sans vérification, eCarUp ne peut, pour des raisons juridiques, transférer aucun argent sur le compte et aucune recharge payante n'est possible.



L'argent transféré est versé en continu sur votre compte de propriétaire de station et peut être versé à tout moment sur l'IBAN de votre choix sous l'élément de menu « Compte » (Account).

![Recharger à domicile avec une carte de crédit – Illustration 1](/img/anwendungsfaelle-privat-kreditkarte/01.png)

## 3\. Configurer les bornes de recharge

Une fois les bornes de recharge connectées à eCarUp, elles apparaissent dans le compte eCarUp, dans le tableau de bord et dans la gestion des stations.

![Recharger à domicile avec une carte de crédit – Illustration 2](/img/anwendungsfaelle-privat-kreditkarte/02.png)

### Paramètres de base

Ensuite, les stations peuvent être configurées en cliquant sur « Stations » (Stationen) puis sur « Gestion des stations » (Stationsverwaltung) :

- Modifier le nom et la description de la station

- Supprimer des stations

- Définir les emplacements

- Modifier les connecteurs (s'il y en a plusieurs)

- Définir les types de connecteurs (p. ex. Typ 2,CSS ou Chademo)

- Définir l'énergie max.  (p. ex. 22 kW)

- Définir l'accès (Public (Öffentlich), Limité (Limitiert) et Privé (Privat))


Public = tous les utilisateurs/Limité = propriétaire de la station et utilisateurs spéciaux/Privé = UNIQUEMENT le propriétaire de la station ou le compte dans lequel les stations sont installées

- Définir les prix pour l'énergie et le temps

- Définir les heures réservées

- Activer la station depuis le portail web


Tous les [paramètres pour les propriétaires de stations](/stationsbetreiber/webportal) sont résumés dans cet article du wiki.



### Créer des groupes de stations

L'organisation en groupes de stations (p. ex. par emplacement ou par immeuble) est importante pour la gestion des bornes de recharge :

![Recharger à domicile avec une carte de crédit – Illustration 3](/img/anwendungsfaelle-privat-kreditkarte/03.png)



Une fois la configuration terminée, cela peut ressembler à ceci :

![Recharger à domicile avec une carte de crédit – Illustration 4](/img/anwendungsfaelle-privat-kreditkarte/04.png)

## 4\. Accès simple pour les conducteurs

Pour permettre au conducteur un accès simple sans charge administrative importante, le point de recharge est créé en mode public et sans indication d'emplacement. Ainsi, le point de recharge n'apparaît pas sur la carte eCarUp et aucune gestion particulière des utilisateurs n'est nécessaire. Tout conducteur ayant accès au parking souterrain peut néanmoins recharger. 

![Recharger à domicile avec une carte de crédit – Illustration 5](/img/anwendungsfaelle-privat-kreditkarte/05.png)

### Accès des conducteurs avec des groupes d'utilisateurs

Gérer les groupes d'utilisateurs

Dans cette variante, un groupe d'utilisateurs est créé et attribué aux stations. Ainsi, lors d'un changement de locataire ou de l'arrivée de nouveaux conducteurs, un membre peut être ajouté au groupe d'utilisateurs ou en être retiré sans complication. Cela réduit la charge administrative.

- Les stations sont placées sur le statut « limité » (limitiert)

- Un groupe d'utilisateurs comprenant tous les conducteurs autorisés est créé

- Le groupe d'utilisateurs est attribué au groupe de stations


![Recharger à domicile avec une carte de crédit – Illustration 6](/img/anwendungsfaelle-privat-kreditkarte/06.png)

![Recharger à domicile avec une carte de crédit – Illustration 7](/img/anwendungsfaelle-privat-kreditkarte/07.png)

### Attribuer les conducteurs individuellement

Attribution d'utilisateurs individuels aux stations

Dans cette variante, chaque conducteur/client final est attribué à sa propre station ; seul l'utilisateur spécial concerné peut déverrouiller sa propre borne de recharge. Cela signifie que, lors d'un changement de locataire ou de l'arrivée de nouveaux conducteurs, les comptes doivent chaque fois être attribués aux stations, ce qui implique une gestion active et continue du compte.

- Les stations sont placées sur le statut « limité » (limitiert)

- Le bon compte de conducteur est autorisé pour la station avec le bon prix

- Un emplacement est enregistré pour la station


![Recharger à domicile avec une carte de crédit – Illustration 8](/img/anwendungsfaelle-privat-kreditkarte/08.png)

![Recharger à domicile avec une carte de crédit – Illustration 9](/img/anwendungsfaelle-privat-kreditkarte/09.png)

## 5\. Informer les conducteurs / clients finaux

Il est recommandé d'informer les conducteurs/clients finaux de la mise à disposition de la station. Pour le paiement, les conducteurs doivent créer leur propre compte eCarUp et y enregistrer leur propre carte de crédit valable comme moyen de paiement :

- Vous trouverez un guide / modèle possible à envoyer aux conducteurs dans ce [document](https://docs.google.com/document/d/1WVdQFd3flkJsQTIyEgS5zUauPbomZ3kOBfhEasXHgFs/edit).

- [Toutes les fonctions pour les conducteurs](/fahrer) sont résumées sur une page wiki dédiée

- Il existe en outre une [FAQ pour les conducteurs](/faq) avec les principales questions et réponses.

- Les conducteurs peuvent [ajouter eux-mêmes des tags RFID / NFC à leur compte](/fahrer/rfid-nfc-tags-carid) et les utiliser ensuite pour déverrouiller la borne de recharge.


Grâce au système flexible d'eCarUp, la charge administrative est réduite au minimum. Les conducteurs/clients finaux peuvent créer et gérer leurs comptes eux-mêmes.

## 6\. Étiqueter les stations

Pour que les conducteurs puissent aussi déverrouiller les stations sans carte RFID et avec l'application, nous recommandons d'étiqueter les stations avec un code QR et un court texte d'instructions. Cela aide p. ex. lorsqu'un conducteur perd sa carte RFID ou ne l'a pas sur lui.
Vous trouverez quelques [exemples d'étiquetage](/stationsbetreiber/qr-code) directement sur cette page wiki.

## 7\. Places de parc visiteurs

Avec eCarUp, les bornes de recharge peuvent aussi être décomptées en mode public et donc envers des conducteurs anonymes. Pour cela, il faut attribuer aux stations le statut « public » (öffentlich) lors de la configuration et définir un emplacement. L'étiquetage des bornes de recharge est ici très important, car le code QR permet aussi de recharger ad hoc et donc sans obstacle.

D'autres prix peuvent aussi être attribués sans problème aux places de parc visiteurs (voir ci-dessous). 

En option, les stations peuvent aussi être [publiées dans les réseaux de recharge de fournisseurs tiers via la fonction de roaming](/funktionen/roaming). Cela n'est toutefois possible que si la station est accessible au public 24 heures sur 24, 7 jours sur 7. Vous devez en outre être conscient que la station sera ensuite très largement visible (dans les applications et systèmes de navigation de voitures les plus divers) et attirera ainsi des utilisateurs externes.

![Recharger à domicile avec une carte de crédit – Illustration 10](/img/anwendungsfaelle-privat-kreditkarte/10.png)

![Recharger à domicile avec une carte de crédit – Illustration 11](/img/anwendungsfaelle-privat-kreditkarte/11.png)

## 8\. Analyse et résolution des erreurs

Le portail eCarUp permet de détecter des dysfonctionnements simples et d'engager les mesures correspondantes. Si des stations apparaissent en gris dans le tableau de bord ou dans la gestion des stations et sont donc marquées comme « inactives » (inaktiv), elles ont perdu la connexion avec le backend (depuis plus de 10  minutes) et ne peuvent donc pas être utilisées via eCarUp. Il y a deux raisons possibles :

- Panne d'Internet : rétablissez la connexion Internet. Dès que les stations atteignent à nouveau eCarUp, le statut passe à « disponible » (verfügbar), c'est-à-dire bleu, et elles peuvent de nouveau être utilisées normalement.

- Panne de courant : rétablissez l'alimentation électrique. Dès que les stations atteignent à nouveau eCarUp, le statut passe à « disponible » (verfügbar), c'est-à-dire bleu, et elles peuvent de nouveau être utilisées normalement.


L'outil de maintenance inclus dans [eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/) permet de suivre [la communication entre la borne de recharge et le backend](/funktionen/wartung) et d'effectuer une analyse approfondie des erreurs.

Si l'erreur est plus profonde, vous devez prendre contact avec le responsable du projet (p. ex. l'installateur électricien chargé des travaux).

![Recharger à domicile avec une carte de crédit – Illustration 12](/img/anwendungsfaelle-privat-kreditkarte/12.png)

Conseil pratique : pour tester ou vérifier le fonctionnement des stations sur place, un compte peut être créé pour le service technique ou pour une autre personne responsable sur place (p. ex. hauswart\[at\]musterhaus.ch). Ce compte peut être enregistré auprès des stations comme utilisateur spécial avec un prix de 0.- par kWh et 0.- par h et peut ainsi effectuer des tests gratuitement.
