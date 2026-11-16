---
title: 'Recharge dans les PME'
slug: '/anwendungsfaelle/laden-im-kmu'
description: '1\. Informations générales'
sidebar_label: 'Recharge dans les PME'
---

## 1\. Informations générales

L'article suivant décrit une configuration standard pour la recharge dans les PME avec eCarUp. Il présente les différents modèles de décompte des bornes de recharge au siège de l'entreprise pour les collaborateurs, les partenaires et les clients, mais aussi à domicile. 

L'avantage de la plateforme eCarUp réside dans le fait que les différents cas d'application de la PME peuvent être résolus via une seule plateforme et que chaque borne peut, si nécessaire, être configurée individuellement.

### Facturation par carte de crédit

Le décompte par carte de crédit est une solution très efficace, car l'argent est alors transféré automatiquement de la carte de crédit du conducteur vers le compte du propriétaire de la borne. Cela présente deux avantages décisifs :

1.  L'ensemble du processus d'encaissement est entièrement automatisé : eCarUp transfère l'argent des transactions directement après leur fin sur le compte du propriétaire de la borne. 

2.  Ainsi, l'avoir n'est jamais en possession d'eCarUp AG et toutes les transactions (y compris, par exemple, celles des invités sur les places de parc visiteurs) respectent les dispositions légales en vigueur.

Vous trouverez dans notre wiki toutes les informations complémentaires sur le [décompte par carte de crédit](/stationsbetreiber/abrechnen-auszahlen) et sur les [dispositions légales relatives à l'avoir transféré](/stationsbetreiber/account-verifizieren).

Le décompte par carte de crédit entraîne toujours une commission de 10 %, qu'une [licence Premium eCarUp](https://web.ecarup.com/preise-ladestationen-backend/) soit active ou non.

### Facturation via le reporting

Les bornes peuvent également être facturées via l'[outil de reporting eCarUp](/funktionen/reports).

- Dans ce cas, les bornes sont enregistrées pour tous les utilisateurs avec un prix de 0.- par kWh et 0.- par heure. Les sessions de recharge n'entraînent ainsi aucun coût direct et aucune facturation par carte de crédit n'a lieu.

- À la fin de la période de décompte (fin du mois, fin du trimestre, fin du semestre), un rapport de consommation peut être établi soit par borne, soit par utilisateur spécial (créé au préalable).

- Sur la base de ces chiffres de consommation, l'énergie peut être facturée, par exemple, dans une note de frais ou un autre décompte interne (en dehors du système eCarUp).

![Recharge dans les PME – Illustration 1](/img/anwendungsfaelle-laden-im-kmu/01.png)

![Recharge dans les PME – Illustration 2](/img/anwendungsfaelle-laden-im-kmu/02.png)

Une [licence Premium eCarUp](https://web.ecarup.com/preise-ladestationen-backend/) est vivement recommandée pour ce cas d'application, car sinon certaines fonctionnalités importantes, comme l'outil de maintenance, les rapports ou la gestion étendue des utilisateurs avec les groupes d'utilisateurs, font défaut.

## 2\. Connecter les bornes de recharge au backend eCarUp

Les bornes doivent d'abord être connectées au backend eCarUp :

- Vous trouverez une liste actuelle de tous les [modèles de bornes de recharge pris en charge](/ocpp-ladestationen) dans notre wiki

- Un [guide étape par étape pour l'intégration des bornes](/stationsbetreiber/inbetriebnahme-ocpp-station) est également disponible

- Pour que de l'argent puisse être transféré sur le compte, celui-ci doit être vérifié. Vous trouverez les informations à ce sujet sous [Vérifier le compte dans eCarUp](/sonstige-informationen/stripe). Nous recommandons d'effectuer cette étape avant ou pendant l'installation des bornes de recharge. Sans vérification, eCarUp ne peut, pour des raisons juridiques, transférer aucun argent sur le compte et aucune recharge payante n'est possible.
    Les recettes sont transférées en continu sur le compte du propriétaire de la borne et peuvent être versées à tout moment sur l'IBAN de votre choix via le point de menu « Compte » ("Account").

![Recharge dans les PME – Illustration 3](/img/anwendungsfaelle-laden-im-kmu/03.png)

## 3\. Configurer les bornes de recharge

Une fois les bornes de recharge connectées à eCarUp, elles apparaissent dans le compte eCarUp, dans le tableau de bord et dans la gestion des bornes.

![Recharge dans les PME – Illustration 4](/img/anwendungsfaelle-laden-im-kmu/04.png)

### Paramètres de base

Les bornes peuvent ensuite être configurées en cliquant sur « Bornes » ("Stationen") puis sur « Gestion des bornes » ("Stationsverwaltung") :

- Modifier le nom et la description de la borne

- Supprimer des bornes

- Définir des emplacements

- Modifier les prises (s'il y en a plusieurs)

- Définir les types de prise (p. ex. Typ 2, CSS ou Chademo)

- Définir l'énergie maximale (p. ex. 22 kW)

- Définir l'accès (Public, Limité et Privé)

Public = tous les utilisateurs / Limité = propriétaire de la borne et utilisateurs spéciaux
Privé = UNIQUEMENT le propriétaire de la borne, ou le compte dans lequel les bornes sont installées

- Définir les prix pour l'énergie et le temps

- Définir des plages horaires réservées

- Activer la borne depuis le portail web

Tous les [paramètres pour les propriétaires de bornes](/stationsbetreiber/webportal) sont résumés dans un article du wiki.

### Créer des groupes de bornes

Pour la gestion des bornes de recharge, l'organisation en groupes de bornes (p. ex. par emplacement ou par immeuble) est importante :

![Recharge dans les PME – Illustration 5](/img/anwendungsfaelle-laden-im-kmu/05.png)

Une fois la configuration terminée, cela peut se présenter ainsi :

![Recharge dans les PME – Illustration 6](/img/anwendungsfaelle-laden-im-kmu/06.png)

### Créer des utilisateurs spéciaux

Pour que les bornes ne puissent être déverrouillées que par les conducteurs/clients finaux autorisés, les autorisations doivent être définies en conséquence. Il existe deux possibilités :

1. Gérer des groupes d'utilisateurs

Dans cette variante, un groupe d'utilisateurs est créé et attribué aux bornes. Ainsi, lors d'un changement de locataire ou de l'arrivée de nouveaux conducteurs, un nouveau membre peut être ajouté au groupe d'utilisateurs ou en être retiré sans complication. Cela réduit la charge administrative.

- Les bornes sont mises au statut « limité » ("limitiert")

- Un groupe d'utilisateurs comprenant tous les conducteurs autorisés est créé

- Le groupe d'utilisateurs est attribué au groupe de bornes

![Recharge dans les PME – Illustration 7](/img/anwendungsfaelle-laden-im-kmu/07.png)

![Recharge dans les PME – Illustration 8](/img/anwendungsfaelle-laden-im-kmu/08.png)

2. Attribuer des utilisateurs individuels aux bornes

Dans cette variante, chaque conducteur/client final est attribué à sa propre borne. Seul l'utilisateur spécial concerné peut déverrouiller sa propre borne de recharge. Lors d'un changement de locataire ou de l'arrivée de nouveaux conducteurs, les comptes doivent à chaque fois être attribués aux bornes. Le compte doit donc être géré activement en permanence.

- Les bornes sont mises au statut « limité » ("limitiert")

- Le bon compte conducteur est autorisé avec le bon prix pour la borne

- Un emplacement est enregistré pour la borne

![Recharge dans les PME – Illustration 9](/img/anwendungsfaelle-laden-im-kmu/09.png)

![Recharge dans les PME – Illustration 10](/img/anwendungsfaelle-laden-im-kmu/10.png)

## 4\. Étiqueter les bornes

Pour que les conducteurs puissent aussi déverrouiller les bornes sans carte RFID, avec l'app, nous recommandons d'étiqueter les bornes avec un code QR et un bref guide de recharge. Cela aide par exemple lorsqu'un conducteur perd sa carte RFID ou ne l'a pas sur lui.
Vous trouverez quelques [exemples d'étiquetage](/stationsbetreiber/qr-code).

## 5\. Informer les utilisateurs réguliers

Il est recommandé d'informer les conducteurs qui rechargent régulièrement (p. ex. les collaborateurs) de l'utilisation correcte des bornes. Pour le paiement par carte de crédit, les conducteurs doivent créer leur propre compte eCarUp et y enregistrer une carte de crédit valable :

- Vous trouverez ici un guide/modèle possible à envoyer aux conducteurs : [Modèle de communication clients finaux eCarUp](https://docs.google.com/document/d/1WVdQFd3flkJsQTIyEgS5zUauPbomZ3kOBfhEasXHgFs/edit)

- [Toutes les fonctions pour les conducteurs](/fahrer) sont résumées sur une page wiki dédiée

- Il existe en outre [une FAQ pour les conducteurs](/faq) avec les questions et réponses les plus importantes

- Les conducteurs peuvent [ajouter eux-mêmes des tags RFID / NFC à leur compte](/fahrer/rfid-nfc-tags-carid) et les utiliser ensuite pour déverrouiller la borne de recharge

Grâce au système flexible d'eCarUp, la charge administrative est réduite au minimum. Les conducteurs/clients finaux peuvent créer et gérer leurs comptes eux-mêmes.

## 6\. Configurer les places de parc pour visiteurs et clients

<div className="row">
<div className="col col--6">

Avec eCarUp, les bornes de recharge peuvent également être facturées publiquement, et donc à des conducteurs anonymes. Pour cela, les bornes doivent recevoir le statut « public » ("öffentlich") lors de la configuration et un emplacement doit être défini. L'étiquetage des bornes de recharge est ici très important, car le code QR permet aussi de recharger ad hoc et donc sans obstacle.

Des prix différents peuvent aussi être attribués sans problème aux places de parc visiteurs (voir ci-dessous).

En option, les bornes peuvent également être [publiées dans les réseaux de recharge de fournisseurs tiers via la fonction de roaming](/funktionen/roaming). Cela n'est toutefois possible que si la borne est accessible au public 24 heures sur 24, 7 jours sur 7. Vous devez en outre être conscient que la borne sera ensuite trouvée très largement (dans les apps et les systèmes de navigation des voitures les plus divers) et attirera ainsi des utilisateurs externes.

</div>
<div className="col col--6 text--center">

![Recharge dans les PME – Illustration 11](/img/anwendungsfaelle-laden-im-kmu/11.png)

</div>
</div>

![Recharge dans les PME – Illustration 12](/img/anwendungsfaelle-laden-im-kmu/12.png)

## 7\. Activer les places de parc pour visiteurs et clients

Si vous disposez de bornes de recharge sur des places de parc destinées aux visiteurs et/ou aux clients, les possibilités suivantes permettent de les activer gratuitement pour les clients.

- Par carte RFID : créez un compte eCarUp (p. ex. muster(at)musterfirma.ch) et attribuez-le aux bornes visiteurs en tant qu'utilisateur spécial avec un prix de 0 par kWh et 0 par h. Ajoutez une ou plusieurs [cartes RFID](/fahrer/rfid-nfc-tags-carid) au compte. Les bornes peuvent désormais être activées gratuitement avec ces cartes RFID/NFC. Le client peut par exemple récupérer la carte RFID à la réception et recharger sa voiture gratuitement.

- Activation dans le portail web : les bornes peuvent également être activées via le portail web. Comme le déverrouillage est effectué via le compte du propriétaire (muster(at)musterfirma.ch), la recharge est gratuite et aucune transaction par carte de crédit n'a lieu. Cette variante présente l'avantage que le client n'a pas besoin de retourner à sa voiture.

![Recharge dans les PME – Illustration 13](/img/anwendungsfaelle-laden-im-kmu/13.png)

## 8\. Recharge à domicile

Si des collaborateurs rechargent le véhicule de l'entreprise à domicile et que l'énergie correspondante doit être décomptée, les variantes suivantes sont possibles :

1.  La borne est intégrée dans le compte de l'entreprise (muster(at)musterfirma.ch) et le prix est fixé à 0 par kWh et 0 par h. Le collaborateur peut ainsi recharger gratuitement à domicile. À la fin de la période de décompte, [un rapport eCarUp](/funktionen/reports) indiquant la consommation (en kWh) est généré et les coûts des recharges à domicile peuvent être décomptés. Cela peut être fait pour plusieurs conducteurs/collaborateurs dans le même compte.

2.  La borne est installée dans le compte privé du collaborateur et un prix (convenu entre le collaborateur et l'entreprise) est enregistré. Le collaborateur active la borne à domicile via le compte professionnel (dans lequel une carte de crédit de l'entreprise est normalement enregistrée). Le collaborateur « vend » ainsi en quelque sorte son électricité à l'entreprise et la facturation est automatisée.

## 9\. Analyse et résolution des erreurs

Le portail eCarUp permet de détecter des dérangements simples et de prendre les mesures appropriées. Si des bornes apparaissent en gris dans le tableau de bord ou dans la gestion des bornes, et donc comme « inactives » ("inaktiv"), elles ont perdu la connexion avec le backend (depuis plus de 10 minutes) et ne peuvent donc pas être utilisées via eCarUp. Deux raisons sont possibles :

- Panne d'Internet : rétablissez la connexion Internet. Dès que les bornes atteignent à nouveau eCarUp, le statut passe à « disponible » ("verfügbar"), c'est-à-dire en bleu, et elles peuvent de nouveau être utilisées normalement.

- Panne de courant : rétablissez l'alimentation électrique. Dès que les bornes atteignent à nouveau eCarUp, le statut passe à « disponible » ("verfügbar"), c'est-à-dire en bleu, et elles peuvent de nouveau être utilisées normalement.

L'outil de maintenance inclus dans [eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/) permet de suivre [la communication entre la borne de recharge et le backend](/funktionen/wartung) et d'effectuer une analyse approfondie des erreurs.

Si l'erreur est plus profonde, vous devez prendre contact avec le responsable du projet (p. ex. l'installateur électricien qui a réalisé l'installation).

![Recharge dans les PME – Illustration 14](/img/anwendungsfaelle-laden-im-kmu/14.png)

Conseil pratique : pour tester ou vérifier le fonctionnement des bornes sur place, un compte peut être créé pour le service technique ou une autre personne responsable sur place (p. ex. hauswart\[at\]musterhaus.ch). Ce compte peut être enregistré auprès des bornes comme utilisateur spécial avec un prix de 0.- par kWh et 0.- par h et peut ainsi effectuer des tests sans frais.
