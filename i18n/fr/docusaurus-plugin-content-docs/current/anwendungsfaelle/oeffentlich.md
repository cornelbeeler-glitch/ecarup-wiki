---
title: 'Recharge publique'
slug: '/anwendungsfaelle/oeffentlich'
description: '1\. Informations générales'
sidebar_label: 'Publique'
---

## 1\. Informations générales

L'article suivant décrit une configuration standard pour mettre en place et exploiter une borne de recharge publique avec eCarUp. Les conducteurs paient par carte de crédit et le montant est automatiquement transféré du conducteur au propriétaire de la borne. Si votre borne est accessible de manière semi-publique (par exemple au sein d'une PME), nous avons documenté ce cas dans un [article du wiki](/anwendungsfaelle/laden-im-kmu) séparé.

L'avantage de cette variante est que l'argent est transféré automatiquement de la carte de crédit du conducteur sur le compte du propriétaire de la borne. 

Cela présente deux avantages décisifs :

1.  L'ensemble du processus d'encaissement est entièrement automatisé : eCarUp transfère l'argent des transactions sur le compte du propriétaire de la borne directement après leur clôture. 

2.  Ainsi, le montant n'est jamais en possession d'eCarUp AG et toutes les transactions (y compris, par exemple, celles des visiteurs sur les places de parc réservées aux visiteurs) respectent les dispositions légales en vigueur.

Vous trouverez dans notre wiki toutes les autres informations sur le [décompte par carte de crédit](/stationsbetreiber/abrechnen-auszahlen) et sur les [dispositions légales relatives au montant transféré](/stationsbetreiber/account-verifizieren).

Le décompte par carte de crédit entraîne toujours une commission de 10 %, qu'une [licence eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/) soit active ou non.

Une [licence eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/) est vivement recommandée pour ce cas d'application (sinon, certaines fonctionnalités importantes comme l'outil de maintenance, les rapports ou le roaming ne sont pas disponibles).

## 2\. Connecter les bornes de recharge au backend eCarUp

Les bornes doivent d'abord être connectées au backend eCarUp :

- Vous trouverez sur notre wiki une liste à jour de tous les [modèles de bornes de recharge pris en charge](/ocpp-ladestationen).

- Un [guide pas à pas pour l'intégration des bornes](/stationsbetreiber/inbetriebnahme-ocpp-station) est également disponible.

- Pour que de l'argent puisse être transféré sur le compte, celui-ci doit être vérifié. Vous trouverez les informations à ce sujet ici : [Vérifier le compte dans eCarUp](/sonstige-informationen/stripe). Nous recommandons d'effectuer cette étape avant ou pendant l'installation des bornes de recharge. Sans vérification, eCarUp ne peut, pour des raisons légales, transférer aucun argent sur le compte et aucune recharge payante n'est possible.

    L'argent transféré est versé en continu sur votre compte de propriétaire de borne et peut être versé à tout moment sur n'importe quel IBAN sous le point de menu « Compte » ("Account").

![Recharge publique – Figure 1](/img/anwendungsfaelle-oeffentlich/01.png)

## 3\. Configurer les bornes de recharge

Une fois les bornes de recharge connectées à eCarUp, elles apparaissent dans le compte eCarUp, dans le tableau de bord et dans la gestion des bornes.

Avec eCarUp, les bornes de recharge peuvent sans problème être décomptées publiquement, et donc vis-à-vis de conducteurs anonymes. Pour cela, il faut attribuer aux bornes le statut « public » ("öffentlich") lors de la configuration et définir un emplacement. 

![Recharge publique – Figure 2](/img/anwendungsfaelle-oeffentlich/02.png)

### Paramètres de base

Ensuite, les bornes peuvent être configurées en cliquant sur « Bornes » ("Stationen"), puis sur « Gestion des bornes » ("Stationsverwaltung") :

- Modifier le nom et la description de la borne

- Supprimer des bornes

- Définir des emplacements

- Modifier les connecteurs (s'il y en a plusieurs)

- Définir les types de connecteurs (p. ex. Typ 2,CSS ou Chademo)

- Définir l'énergie max. (p. ex. 22 kW)

- Définir l'accès (« Public » (Öffentlich), « Limité » (Limitiert) et « Privé » (Privat))

Public = tous les utilisateurs / Limité = propriétaire de la borne et utilisateurs spéciaux / Privé = UNIQUEMENT le propriétaire de la borne ou le compte dans lequel les bornes sont installées

- Définir les prix pour l'énergie et le temps

- Définir des plages horaires réservées

- Activer la borne depuis le portail web

Tous les [paramètres pour les propriétaires de bornes](/stationsbetreiber/webportal) sont résumés dans un article du wiki.

Une fois entièrement configuré, cela peut ressembler à ceci :

![Recharge publique – Figure 3](/img/anwendungsfaelle-oeffentlich/03.png)

## 4\. Signaliser les bornes

Pour les bornes accessibles au public, la signalisation des bornes de recharge est très importante, afin que les conducteurs sachent comment débloquer la borne de recharge. Une signalisation claire vous permet également de communiquer aux conducteurs des informations importantes, comme des règles supplémentaires (durée de stationnement max., frais de stationnement, etc.).

Pour le déblocage directement via eCarUp, il existe deux possibilités :

### Recharger avec l'application eCarUp

- -   Le conducteur télécharge l'application gratuite eCarUp (Android/Apple)

    - Il crée un compte et enregistre une carte de crédit valide comme moyen de paiement

    - Il peut débloquer la borne soit en scannant le code QR dans l'application, soit via la fonction carte d'une simple pression ([Guide de recharge en Web Story](https://web.ecarup.com/web-stories/laden-mit-der-ecarup-app/))

    - À la fin de la session de recharge, le montant dû est automatiquement débité de la carte de crédit enregistrée

    - Nous avons décrit une [description détaillée pour les conducteurs](/fahrer) dans le wiki  ou dans cette [FAQ](/faq)

### Recharge ad hoc par code QR

<div className="row">
<div className="col col--6">

- Le conducteur scanne le code QR sur la borne avec l'appareil photo de son téléphone ou une application de lecture de codes QR

- Il arrive sur une page web mobile où il peut déclencher un paiement unique en saisissant les informations de sa carte de crédit

- Il reçoit par e-mail un permalien pour terminer la recharge (cela peut aussi se faire en débranchant le câble de recharge) ainsi qu'une quittance à la fin de la session de recharge

- Une description détaillée de la recharge sans barrière est disponible sur notre wiki

- ATTENTION : pour protéger les propriétaires de bornes, une réservation temporaire de CHF 60.- est effectuée sur la carte de crédit utilisée dans cette variante. Celle-ci est automatiquement levée à la fin de la session de recharge.

Vous trouverez quelques [exemples de signalisation](/stationsbetreiber/qr-code) directement sur la page du wiki.

</div>
<div className="col col--6 text--center">

![Recharge publique – Figure 4](/img/anwendungsfaelle-oeffentlich/04.png)

</div>
</div>

## 5\. Roaming

En option, les bornes peuvent également être publiées dans les réseaux de recharge de fournisseurs tiers via la [fonction de roaming](/funktionen/roaming). Cela n'est toutefois possible que si la borne est accessible au public 24 heures sur 24, 7 jours sur 7. Vous devez en outre être conscient que la borne sera ensuite trouvée très largement (dans les applications et systèmes de navigation des voitures les plus divers) et attirera ainsi des utilisateurs externes. 

De plus, vous devez définir un prix séparé pour le roaming. Celui-ci est transmis par eCarUp au réseau de roaming et sert de base à la tarification des autres réseaux de recharge connectés. Ni vous en tant qu'exploitant de la borne, ni eCarUp en tant que plateforme n'avez toutefois d'influence sur la tarification des autres plateformes.

Vous trouverez des informations détaillées dans l'[article du wiki sur le roaming](/funktionen/roaming).

![Recharge publique – Figure 5](/img/anwendungsfaelle-oeffentlich/05.png)

## 6\. Analyse et résolution des erreurs

Le portail eCarUp permet de détecter des pannes simples et de prendre les mesures appropriées. Si des bornes apparaissent en gris dans le tableau de bord ou dans la gestion des bornes, et donc comme « inactives » ("inaktiv"), elles ont perdu la connexion avec le backend (depuis plus de 10  minutes) et ne peuvent donc pas être utilisées via eCarUp. Il y a deux raisons possibles à cela :

- Panne d'Internet : rétablissez la connexion Internet. Dès que les bornes atteignent à nouveau eCarUp, le statut passe à « disponible » ("verfügbar"), c'est-à-dire en bleu, et elles peuvent à nouveau être utilisées normalement.

- Panne de courant : rétablissez l'alimentation électrique. Dès que les bornes atteignent à nouveau eCarUp, le statut passe à « disponible » ("verfügbar"), c'est-à-dire en bleu, et elles peuvent à nouveau être utilisées normalement.

L'outil de maintenance inclus dans [eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/) permet de suivre [la communication entre la borne de recharge et le backend](/funktionen/wartung) et d'effectuer une analyse approfondie des erreurs.

Si l'erreur est plus profonde, vous devez prendre contact avec le responsable du projet (p. ex. l'électricien-installateur chargé des travaux).

![Recharge publique – Figure 6](/img/anwendungsfaelle-oeffentlich/06.png)

Conseil pratique : pour tester ou vérifier le fonctionnement des bornes sur place, un compte peut être créé pour le service technique ou pour une autre personne responsable sur place. Ce compte peut être enregistré auprès des bornes comme utilisateur spécial avec un prix de 0 par kWh et de 0 par h et peut ainsi effectuer des tests sans frais.

## 7\. Optionnel : créer des groupes de bornes de recharge et définir des utilisateurs spéciaux

Même pour les bornes de recharge publiques, des utilisateurs spéciaux (p. ex. collaborateurs, voisins, etc.) peuvent être définis à tout moment ; ils peuvent ensuite recharger aux bornes à un  tarif spécial.

### Créer des groupes de bornes

Pour la gestion des bornes de recharge, l'organisation en groupes de bornes (p. ex. par emplacement) est importante :

![Recharge publique – Figure 7](/img/anwendungsfaelle-oeffentlich/07.png)

### Créer des utilisateurs spéciaux

Pour que les bornes  ne puissent être débloquées que par les conducteurs/clients finaux autorisés, les autorisations doivent être configurées en conséquence. Il existe deux possibilités pour cela :

1. Gérer des groupes d'utilisateurs

Dans cette variante, un groupe d'utilisateurs est créé et attribué aux bornes. Ainsi, en cas de changement de locataire ou de nouveaux conducteurs, un nouveau membre peut être ajouté au groupe d'utilisateurs ou en être retiré sans complication. Cela réduit la charge administrative.

- Les bornes sont mises sur le statut « limité » ("limitiert")

- Un groupe d'utilisateurs comprenant tous les conducteurs autorisés est créé

- Le groupe d'utilisateurs est attribué au groupe de bornes

![Recharge publique – Figure 8](/img/anwendungsfaelle-oeffentlich/08.png)

![Recharge publique – Figure 9](/img/anwendungsfaelle-oeffentlich/09.png)

2. Attribuer des utilisateurs individuels aux bornes

Dans cette variante, chaque conducteur/client final est attribué à sa propre borne ; seul l'utilisateur spécial concerné peut débloquer sa propre borne de recharge. Cela signifie qu'en cas de changement de locataire ou de nouveaux conducteurs, les comptes doivent à chaque fois être attribués aux bornes, ce qui implique que le compte doit être  géré activement en continu.

- Les bornes sont mises sur le statut « limité » ("limitiert")

- Le bon compte de conducteur est activé pour la borne avec le bon prix

- Un emplacement est enregistré pour la borne

![Recharge publique – Figure 10](/img/anwendungsfaelle-oeffentlich/10.png)

![Recharge publique – Figure 11](/img/anwendungsfaelle-oeffentlich/11.png)
