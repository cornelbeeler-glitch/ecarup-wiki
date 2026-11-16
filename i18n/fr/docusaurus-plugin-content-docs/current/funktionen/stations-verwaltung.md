---
title: 'Gestion des stations'
slug: '/funktionen/stations-verwaltung'
description: 'Ici, vous pouvez gérer les stations.'
sidebar_label: 'Gestion des stations'
---
Ici, vous pouvez gérer les stations.

Vous pouvez filtrer selon les options suivantes :

- Nom.
    Saisissez pour cela le nom de la borne de recharge.

- Adresse
    Saisissez pour cela l'adresse de la borne de recharge.

- Type d'accès
    Saisissez pour cela le type d'accès (Public (Öffentlich), Limité (Limitiert) ou Privé/Maintenance (Privat/Wartung))

- Prix par kWh
    Saisissez pour cela le prix par kWh.

- Prix par heure
    Saisissez pour cela le prix par heure.

- Statut
    Saisissez pour cela le statut de la station recherchée (Disponible (Verfügbar), Connecté (Verbunden) ou Occupé (Besetzt))

![Gestion des stations – Illustration 1](/img/funktionen-stations-verwaltung/01.png)

⚠️Important : le statut ne correspond pas à celui de la wallbox ?

- En cas d'interruptions sur la wallbox (en particulier pendant des sessions de recharge actives), il peut arriver que le statut soit rouge dans eCarUp (session de recharge active) alors que la wallbox est de nouveau prête. Cela signifie que nous n'avons pas encore reçu de la station la commande de fin de session de recharge (Stop Transaction). 

- Un redémarrage ou une réinitialisation peut remédier au problème.

Puissance de recharge

- La puissance de recharge actuelle n'est pas affichée pendant la session de recharge ? Consultez l'article suivant dans la rubrique [Maintenance](/funktionen/wartung). 

## Configurer la station

<div className="row">
<div className="col col--8">

Cliquez à droite sur les trois points pour modifier la borne de recharge. Ce menu devrait alors s'ouvrir, dans lequel vous pouvez choisir parmi les points suivants :

- Modifier (Bearbeiten)

- Modifier le raccordement (Anschluss bearbeiten)

- Définir l'emplacement (Standort setzen)

- Définir les utilisateurs (Benutzer definieren)

- Définir les horaires (Zeiten definieren)

- Activer (Aktivieren)

</div>
<div className="col col--4 text--center">

![Gestion des stations – Illustration 2](/img/funktionen-stations-verwaltung/02.png)

</div>
</div>

## Modifier

Sous Modifier (Bearbeiten), vous pouvez effectuer les opérations suivantes :

- Modifier le nom et la description de la station
    (Ces informations sont visibles dans l'app sur la carte)

- Supprimer la station
    (Pour la supprimer, il faut saisir le nom complet de la station. Celui-ci est visible sous le point « Informations » (Informationen) dans la même fenêtre.)

- Définir la station comme non licenciée
    La station est désactivée et n'a donc plus besoin de licence, mais elle ne fonctionne plus non plus avec eCarUp.

- Télécharger des images des stations
    Ce n'est pas obligatoire, mais recommandé, car le conducteur voit ces images dans l'app et peut ainsi mieux trouver et identifier la borne de recharge.

⚠️Important : les images d'une taille d'environ 605 x 806 pixels conviennent. 

![Gestion des stations – Illustration 3](/img/funktionen-stations-verwaltung/03.png)

![Gestion des stations – Illustration 4](/img/funktionen-stations-verwaltung/04.png)

## Modifier le raccordement

Informations :

(ces informations sont visibles dans l'app)

- Nom du raccordement

- Description (facultatif)

- Type de raccordement (type de prise) \[recommandé\]

- Énergie max. (kW) \[recommandé\]
    Ces paramètres ne sont pas strictement nécessaires, mais recommandés, car le conducteur voit ainsi la puissance de la borne de recharge. De plus (si Hubject est activé), cette information est également transmise correctement.

Prix :

- Définir les prix pour l'énergie et le temps
    Le prix peut également être modifié ultérieurement. Le prix par kWh correspond ici à l'électricité et le prix par h à un « tarif de stationnement ».

⚠️Important : avec l'accès « limité » (limitiert), le champ est grisé, car dans ce cas le prix est défini sous « Définir les utilisateurs (Benutzer definieren) ou dans la [gestion étendue des utilisateurs](/funktionen/erw-nutzerverwaltung) ».

Accès :

- Ici, vous pouvez gérer l'accès à la station.
    Vous pouvez choisir parmi les variantes d'accès suivantes :
    Public (Öffentlich), Privé/Maintenance (Privat/Wartung) et Limité (Limitiert).

- Public (Öffentlich) :
    La  borne de recharge est visible et accessible pour tout le monde. Tout le monde peut donc recharger.

- Limité (Limitiert) :
    Seuls les utilisateurs sélectionnés sont autorisés à utiliser la borne de recharge. Les autres utilisateurs ne la voient pas et ne peuvent pas non plus l'utiliser.

![Gestion des stations – Illustration 5](/img/funktionen-stations-verwaltung/05.png)

![Gestion des stations – Illustration 6](/img/funktionen-stations-verwaltung/06.png)

![Gestion des stations – Illustration 7](/img/funktionen-stations-verwaltung/07.png)

![Gestion des stations – Illustration 8](/img/funktionen-stations-verwaltung/08.png)

- Privé / Maintenance (Privat / Wartung) :
    La borne de recharge n'est visible et accessible que pour l'utilisateur d'installation. Aucun autre utilisateur ne peut l'utiliser, même s'il a été autorisé.

- Définir les utilisateurs / horaires (Benutzer / Zeiten definieren) :
    Voir ci-dessous

Session de recharge automatique (Automatischer Ladevorgang) :

- Cette option est utilisée lorsque la borne de recharge est utilisée à titre privé. L'autorisation est ainsi désactivée, c'est-à-dire brancher et recharger.

Hubject (réseau d'itinérance) :

- La borne de recharge est publiée dans le réseau d'itinérance Hubject et est ainsi également visible et utilisable par les conducteurs qui n'utilisent pas eCarUp (c'est-à-dire Move, Swisscharge, etc.).

- Cette option n'est disponible que si la borne de recharge est publique 24h/24, 7j/7. 

- Dès que cette option est activée, un plan tarifaire doit être choisi. Le choix se fait entre LowCHF, MediumCHF, HighCHF et ExtraCHF.

- Nous garantissons que le propriétaire de la station reçoit 90% du plan tarifaire indiqué, c'est-à-dire 0,45CHF pour 0,50CHF. Nous ne pouvons pas dire ce que le conducteur paie finalement, car ce sont les fournisseurs tiers qui définissent ces prix.

⚠️Important : après l'activation de Hubject, la borne de recharge n'apparaît pas immédiatement sur les autres plateformes. Cela peut parfois prendre jusqu'à 1 semaine. Cela ne dépend malheureusement pas de nous, car ce sont les autres fournisseurs qui doivent la mettre en ligne.

## Modifier l'emplacement

<div className="row">
<div className="col col--8">

Ici, l'emplacement de la station est défini (si nécessaire)
Si vous ne souhaitez pas que d'autres conducteurs voient la station sur la carte, l'emplacement peut aussi être laissé vide.
Si la station est limitée, l'emplacement l'est aussi, c'est-à-dire qu'il n'est affiché que pour les utilisateurs sélectionnés.

- Pour l'adresse, veillez à ce qu'elle existe réellement.

- Après l'avoir saisie, cliquez sur « Rechercher l'adresse » (Adresse suchen) afin que notre système formate automatiquement l'adresse correctement.

- Si plusieurs bornes de recharge se trouvent au même point, il est recommandé de les écarter les unes des autres (comme sur l'image d'exemple) afin qu'elles ne soient pas toutes au même endroit. C'est mieux pour le conducteur, car la vue est ainsi plus claire pour lui.

- Une fois l'emplacement défini, il est directement affiché sur la carte eCarUp.

</div>
<div className="col col--4 text--center">

![Gestion des stations – Illustration 9](/img/funktionen-stations-verwaltung/09.png)

</div>
</div>

## Définir les utilisateurs

Dans ce point de menu, vous pouvez définir les utilisateurs individuellement. 

Ajoutez des utilisateurs un par un en cliquant en haut à droite sur « Ajouter un utilisateur » (Benutzer hinzufügen).  Vous pouvez ensuite saisir l'adresse e-mail de l'utilisateur et définir le tarif.

Veillez à saisir correctement l'adresse e-mail, car vous ne recevez aucun message d'erreur si vous indiquez un compte qui n'existe pas.

![Gestion des stations – Illustration 10](/img/funktionen-stations-verwaltung/10.png)

## Définir les horaires

<div className="row">
<div className="col col--8">

Si vous souhaitez que la borne de recharge soit publique ou limitée pendant une durée limitée, vous pouvez le configurer sous « Définir les horaires » (Zeiten definieren). Vous pouvez y choisir entre « Public » (Öffentlich), « Privé / Maintenance » (Privat / Wartung) et « Limité » (Limitiert).

Public (Öffentlich) : tout le monde a accès à la borne de recharge et peut recharger.

Privé / Maintenance (Privat / Wartung) : seul l'exploitant de la station a accès à la borne de recharge, aucun autre utilisateur, pas même ceux qui ont été autorisés.

Limité (Limitiert) : seuls les utilisateurs autorisés ont accès à la borne de recharge.

Si une recharge est en cours pendant le changement, elle n'est pas terminée automatiquement. Le véhicule reste branché jusqu'à ce que le conducteur débranche la voiture et termine la recharge.

</div>
<div className="col col--4 text--center">

![Gestion des stations – Illustration 11](/img/funktionen-stations-verwaltung/11.png)

</div>
</div>

## Activer

Sous le point « Activer » (Aktivieren), vous pouvez activer la borne de recharge, respectivement la recharge, et ainsi la débloquer. Dans ce paramètre, vous pouvez choisir de la débloquer pour 1h, 2, 4h, 8h ou 12h. Il n'est toutefois pas possible de définir un tarif, qui est toujours de 0 CHF.

Vous pouvez utiliser cette fonction si, par exemple, vous avez une station limitée qui n'a pas d'« utilisateur invité » (Gast-Benutzer) et que vous souhaitez ainsi débloquer une recharge pour l'invité.

![Gestion des stations – Illustration 12](/img/funktionen-stations-verwaltung/12.png)
