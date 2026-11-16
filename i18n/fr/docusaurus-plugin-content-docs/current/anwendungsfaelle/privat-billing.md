---
title: 'Recharge à domicile avec import 15 minutes'
slug: '/anwendungsfaelle/privat-billing'
description: 'Guide vidéo : décompte des bornes de recharge pour véhicules électriques dans smart-me Billing'
sidebar_label: 'Billing privé'
---

<Video src="Mi6Ru4lhTiw" title="Vidéo YouTube, décompte des bornes de recharge pour véhicules électriques" />

Guide vidéo : décompte des bornes de recharge pour véhicules électriques dans smart-me Billing

## 1\. Informations générales

L'article suivant décrit une configuration standard pour la recharge à domicile avec eCarUp/smart-me (par exemple pour un immeuble locatif, une PPE ou une copropriété).

L'avantage de cette variante est que les données peuvent être importées directement depuis la borne (et sans matériel supplémentaire) dans la plateforme smart-me à intervalles de 15 minutes. Avec cette qualité de données, il est ensuite possible d'établir des décomptes multitarifs, par exemple tarif haut et tarif bas, mais aussi des décomptes RCP incluant un tarif solaire.

Ce type de décompte n'est actuellement possible qu'avec les fabricants de bornes suivants, car ils permettent un import de données toutes les 15 minutes :

[Pico](/smart-me-pico)

[easee](/ocpp-ladestationen/easee)

[Zaptec](/ocpp-ladestationen/zaptec)

Les factures sont ensuite créées automatiquement dans le portail smart-me à l'aide de [smart-me Billing](https://wiki.smart-me.com/konfiguration/billing) et peuvent être envoyées aux habitants.

Avec les paramètres décrits ci-dessous, le cas d'application « Recharge à domicile avec import 15 minutes » peut être configuré sur smart-me/eCarUp. L'état visé et les avantages sont les suivants :

- Les bornes ne sont pas visibles publiquement (uniquement pour les utilisateurs spéciaux invités)

- Les conducteurs peuvent recharger directement via l'app ou une carte RFID (payant)

- « Onboarding » simple pour les conducteurs

- Les prix ne doivent être adaptés qu'une fois par an (modification groupée)

- En option, un compte pour la recharge gratuite peut également être créé (par ex. pour le concierge)

Une [licence eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/) est requise pour ce cas d'application

## 2\. Configurer l'import de données 15 minutes vers smart-me

Dans un premier temps, l'import de données vers le bon compte smart-me doit être configuré pour les bornes souhaitées. Un guide à ce sujet est disponible dans un [article du wiki](/funktionen/15-minuten-datenimport) séparé.

## 3\. Configurer smart-me Billing

Une fois les bornes de recharge créées comme points de mesure dans smart-me, le décompte peut être mis en place.

La configuration et la mise en place de [smart-me Billing](https://wiki.smart-me.com/konfiguration/billing) sont décrites en détail dans le wiki smart-me. Si nécessaire, adressez-vous à l'un de nos nombreux partenaires de [smart-me](https://web.smart-me.com/projektpartner/) ou d'[eCarUp](https://web.ecarup.com/partner-de/) pour la configuration.

S'il existe déjà un RCP avec smart-me, les bornes peuvent figurer de manière variable sur la facture.

### Faire figurer les bornes de recharge comme poste de décompte séparé

- La consommation de la borne de recharge est indiquée sur une facture séparée, en plus de la consommation de l'appartement.

- Cette variante est préférable en particulier lorsque les coûts de la borne de recharge doivent figurer sur une facture séparée (par ex. pour la note de frais ou en cas de location à des tiers).

- D'autres postes peuvent également être ajoutés et facturés en option (par ex. pour la location de la borne de recharge).

![Recharge à domicile avec import 15 minutes – Illustration 1](/img/anwendungsfaelle-privat-billing/01.png)

### Attribuer les bornes de recharge à l'unité d'habitation

- La consommation de l'appartement et celle de la borne de recharge sont présentées sur une seule facture.

- Les bornes de recharge sont intégrées directement dans la consommation de l'appartement en tant que « compteur » supplémentaire. Une attribution exacte de la consommation aux différents postes n'est pas possible.

![Recharge à domicile avec import 15 minutes – Illustration 2](/img/anwendungsfaelle-privat-billing/02.png)

Si les bornes doivent être décomptées uniquement via smart-me Billing, la configuration est terminée ici. Dans ce cas, l'autorisation /authentification doit être réglée localement via le système du fabricant concerné.

La suite décrit comment les bornes peuvent en plus être intégrées au backend eCarUp :

IMPORTANT : pour la connexion au backend eCarUp décrite ci-dessous, veuillez utiliser [un autre compte que celui utilisé pour la connexion avec l'import 15 minutes](/funktionen/15-minuten-datenimport). Sinon, les bornes sont créées en double et les licences acquises ne suffisent pas.

L'intégration dans eCarUp présente plusieurs avantages :

- Surveillance simple des points de recharge dans le tableau de bord eCarUp et dans les rapports

- Les bornes doivent être authentifiées via eCarUp et peuvent être autorisées pour les bons utilisateurs

- Les conducteurs voient leur propre historique de recharge dans l'app ou sur le portail web

- Gestion RFID/NFC flexible pour l'authentification aux bornes

- Les bornes visiteurs sont décomptées simplement par carte de crédit

- Aucun coût supplémentaire

## 4\. Connecter les bornes de recharge au backend eCarUp

Les bornes doivent en outre être connectées au backend eCarUp. L'intégration des modèles de bornes pris en charge par ce modèle est décrite directement pour chacun d'eux :

[Pico](/smart-me-pico)

[easee](/ocpp-ladestationen/easee)

[Zaptec](/ocpp-ladestationen/zaptec)

Un [guide pas à pas pour l'intégration des bornes](/stationsbetreiber/inbetriebnahme-ocpp-station) est également disponible.

Comme aucune facturation par carte de crédit n'a lieu, le prix des bornes dans eCarUp doit être réglé sur 0.- par kWh et 0.- par h. Les transactions de recharge sont enregistrées comme consommation, puis facturées selon la structure tarifaire configurée dans le Billing.

## 5\. Configurer les bornes de recharge

Une fois les bornes de recharge connectées à eCarUp, elles apparaissent dans le compte eCarUp, dans le tableau de bord et dans la gestion des stations.

![Recharge à domicile avec import 15 minutes – Illustration 3](/img/anwendungsfaelle-privat-billing/03.png)

### Paramètres de base

Les bornes sont ensuite configurées en cliquant sur « Stations » (Stationen), puis sur « Gestion des stations » (Stationsverwaltung) :

- Modifier le nom et la description de la borne

- Supprimer des bornes

- Définir les emplacements

- Modifier les connecteurs (s'il y en a plusieurs)

- Définir les types de connecteurs (par ex. Typ 2, CSS ou Chademo)

- Définir l'énergie max. (par ex. 22 kW)

- Définir l'accès (public, limité et privé)

Public = tous les utilisateurs / Limité = propriétaire de la borne et utilisateurs spéciaux

Privé = UNIQUEMENT le propriétaire de la borne, ou le compte dans lequel les bornes sont installées

- Définir les prix pour l'énergie et le temps

- Définir des plages horaires réservées

- Activer la borne depuis le portail web

Tous les [paramètres pour les propriétaires de bornes](/stationsbetreiber/webportal) sont résumés dans un article du wiki.

### Créer des groupes de stations

Pour la gestion des bornes de recharge, l'organisation en groupes de stations est importante (par ex. par emplacement ou par immeuble) :

![Recharge à domicile avec import 15 minutes – Illustration 4](/img/anwendungsfaelle-privat-billing/04.png)

Une fois la configuration terminée, cela peut ressembler à ceci :

![Recharge à domicile avec import 15 minutes – Illustration 5](/img/anwendungsfaelle-privat-billing/05.png)

### Créer des utilisateurs spéciaux

Pour que les bornes ne puissent être débloquées que par les conducteurs/clients finaux autorisés, les autorisations doivent être configurées en conséquence. Il existe deux possibilités :

1. Gérer des groupes d'utilisateurs

Dans cette variante, un groupe d'utilisateurs est créé et attribué aux bornes. Ainsi, lors d'un changement de locataire ou lors de l'arrivée de nouveaux conducteurs, un membre peut simplement être ajouté au groupe d'utilisateurs ou en être retiré. Cela réduit la charge administrative.

- Les bornes sont réglées sur le statut « limité » (limitiert)

- Un groupe d'utilisateurs comprenant tous les conducteurs autorisés est créé

- Le groupe d'utilisateurs est attribué au groupe de stations

- Un emplacement est enregistré pour les bornes

![Recharge à domicile avec import 15 minutes – Illustration 6](/img/anwendungsfaelle-privat-billing/06.png)

![Recharge à domicile avec import 15 minutes – Illustration 7](/img/anwendungsfaelle-privat-billing/07.png)

2. Attribuer des utilisateurs individuels aux bornes

Dans cette variante, chaque conducteur/client final est attribué à sa propre borne. Seul l'utilisateur spécial peut débloquer sa propre borne de recharge. Cela signifie que, lors d'un changement de locataire ou de l'arrivée de nouveaux conducteurs, les comptes doivent à chaque fois être attribués aux bornes. Le compte doit être géré activement en continu.

- Les bornes sont réglées sur le statut « limité » (limitiert)

- Le bon compte conducteur est autorisé avec le bon prix pour la borne

- Un emplacement est enregistré pour la borne

![Recharge à domicile avec import 15 minutes – Illustration 8](/img/anwendungsfaelle-privat-billing/08.png)

![Recharge à domicile avec import 15 minutes – Illustration 9](/img/anwendungsfaelle-privat-billing/09.png)

## 6\. Informer les conducteurs / clients finaux

Il est recommandé d'informer les conducteurs/clients finaux de l'autorisation de la borne. Pour le paiement, les conducteurs doivent créer leur propre compte eCarUp et enregistrer une carte de crédit valide comme moyen de paiement :

- Vous trouverez un guide/modèle possible à envoyer aux conducteurs dans ce [document](https://docs.google.com/document/d/1WVdQFd3flkJsQTIyEgS5zUauPbomZ3kOBfhEasXHgFs/edit).

- [Toutes les fonctions pour les conducteurs](/fahrer) sont résumées sur une page du wiki dédiée.

- Il existe en outre une [FAQ pour les conducteurs](/faq) avec les principales questions et réponses.

- Les conducteurs peuvent [ajouter eux-mêmes des badges RFID/NFC à leur compte](/fahrer/rfid-nfc-tags-carid) et les utiliser ensuite pour débloquer la borne de recharge.

Grâce au système flexible d'eCarUp, la charge administrative est réduite au minimum. Les conducteurs/clients finaux peuvent créer et gérer leurs comptes eux-mêmes.

## 7\. Étiqueter les bornes

Pour que les conducteurs puissent débloquer les bornes avec l'app, même sans carte RFID, nous recommandons d'étiqueter les bornes avec un code QR et un court texte d'instructions. Cela aide par ex. lorsqu'un conducteur perd sa carte RFID ou ne l'a pas sur lui.

Vous trouverez quelques [exemples d'étiquetage](/stationsbetreiber/qr-code) directement sur cette page du wiki.

## 8\. Places de stationnement visiteurs

<div className="row">
<div className="col col--6">

Avec eCarUp, les bornes de recharge peuvent également être rendues publiques et ainsi facturées à des conducteurs anonymes. Pour cela, il faut attribuer aux bornes le statut « public » (öffentlich) lors de la configuration et définir un emplacement. L'étiquetage des bornes de recharge est ici très important, car la recharge se fait aussi ad hoc via le code QR, et donc sans barrière.

Il est également possible d'attribuer sans problème d'autres prix aux places de stationnement visiteurs (voir ci-dessous).

En option, les bornes peuvent aussi être publiées [dans les réseaux de recharge de fournisseurs tiers via la fonction de roaming](/funktionen/roaming). Cela n'est toutefois possible que si la borne est accessible au public 24 heures sur 24, 7 jours sur 7. Vous devez être conscient que la borne sera ensuite trouvée très largement (dans les applications et les systèmes de navigation des véhicules les plus divers) et attirera ainsi des utilisateurs externes.

</div>
<div className="col col--6 text--center">

![Recharge à domicile avec import 15 minutes – Illustration 10](/img/anwendungsfaelle-privat-billing/10.png)

</div>
</div>

![Recharge à domicile avec import 15 minutes – Illustration 11](/img/anwendungsfaelle-privat-billing/11.png)

## 9\. Analyse et dépannage des erreurs

Le portail eCarUp permet de détecter les dérangements simples et de prendre les mesures appropriées. Si des bornes apparaissent en gris dans le tableau de bord ou dans la gestion des stations, et donc comme « inactives », elles ont perdu la connexion avec le backend (depuis plus de 10 minutes) et ne peuvent donc pas être utilisées via eCarUp. Deux raisons possibles :

Panne d'Internet : rétablissez la connexion Internet. Dès que les bornes atteignent à nouveau eCarUp, le statut passe à « disponible » (verfügbar), ou en bleu, et elles peuvent de nouveau être utilisées normalement.

Panne de courant : rétablissez l'alimentation électrique. Dès que les bornes atteignent à nouveau eCarUp, le statut passe à « disponible » (verfügbar), ou en bleu, et elles peuvent de nouveau être utilisées normalement.

L'outil de maintenance inclus dans eCarUp Premium permet de suivre la communication entre la borne de recharge et le backend et d'effectuer une analyse approfondie des erreurs.

Si l'erreur est plus profonde, vous devez prendre contact avec le responsable du projet (par ex. l'électricien installateur mandaté).

![Recharge à domicile avec import 15 minutes – Illustration 12](/img/anwendungsfaelle-privat-billing/09.png)

![Recharge à domicile avec import 15 minutes – Illustration 13](/img/anwendungsfaelle-privat-billing/13.png)

Conseil pratique : pour tester ou vérifier le fonctionnement des bornes sur place, un compte peut être créé pour le service technique ou pour une autre personne responsable sur place (par ex. hauswart\[at\]musterhaus.ch). Ce compte peut être enregistré auprès des bornes comme utilisateur spécial avec un prix de 0 par kWh et 0 par h, et peut ainsi effectuer des tests sans frais.
