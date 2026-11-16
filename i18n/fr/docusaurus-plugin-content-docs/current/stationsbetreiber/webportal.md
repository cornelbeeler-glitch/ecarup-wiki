---
title: 'Portail web'
slug: '/stationsbetreiber/webportal'
description: 'Connectez-vous à eCarUp avec vos identifiants existants.'
sidebar_label: 'Portail web'
---

## Connexion

Connectez-vous à [eCarUp](https://admin.ecarup.com/authentication/login) avec vos identifiants existants. Si vous n'avez pas encore de compte utilisateur, vous pouvez aussi vous [inscrire (Registrieren)](https://admin.ecarup.com/authentication/login) tout de suite. 

## Aperçu du tableau de bord

- Statut des stations : voyez d'un coup d'œil le statut de toutes les bornes de recharge (disponible (verfügbar), connecté (verbunden), occupé (besetzt), hors service (ausser Betrieb))

- Dernières sessions de recharge : les 20 dernières entrées aux stations de ce compte (de tous les utilisateurs). Ici, les couleurs n'indiquent rien sur le statut.

- Revenus :  le crédit disponible pour le versement, issu des sessions de recharge aux stations de ce compte. « Bientôt disponible » (Bald verfügbar) signifie que notre prestataire de paiement le vérifie dans le cadre de la lutte contre le blanchiment d'argent ; il est normalement crédité pour le versement dans un délai de 1-2h. 


⚠️Important : avec le statut « hors service » (ausser Betrieb), la station n'a pas de communication active avec le backend. Nous marquons automatiquement la station comme « hors service » (ausser Betrieb) après 15 minutes. Si vous souhaitez être averti en cas d'interruption, consultez le paramètre « [Alarme](/funktionen/wartung/alarme) ». 

Info : si vous souhaitez créer votre propre tableau de bord individuel, consultez la [page](/drittsysteme/api-visualisierung) suivante. L'[eCarUp API](/funktionen/ecarup-api) le rend possible. 

![Portail web – Illustration 1](/img/stationsbetreiber-webportal/01.png)

## Gestion des stations

- Filtrer les stations

- Organiser les stations en groupes

- Surveiller le statut


![Portail web – Illustration 2](/img/stationsbetreiber-webportal/02.png)

⚠️Important : le statut ne correspond pas à la wallbox ?

- En cas d'interruptions sur la wallbox (en particulier lors de sessions de recharge actives), il peut arriver que le statut soit rouge dans eCarUp (session de recharge active) alors que la wallbox est de nouveau prête. Cela signifie que nous n'avons pas encore reçu de la station la commande de fin de la session de recharge (Stop Transaction). 

- Un redémarrage ou une réinitialisation peut y remédier.


Puissance de recharge

- La puissance de recharge actuelle ne s'affiche pas pendant la session de recharge ? Consultez l'article suivant dans la section [Maintenance](/funktionen/wartung). 


### Configurer la station

- Cliquez à droite sur les trois points pour modifier la borne de recharge. 

- Vous avez plusieurs points de recharge que vous souhaitez modifier en même temps ? Le guide pour les mutations en masse se trouve ici.




![Portail web – Illustration 3](/img/stationsbetreiber-webportal/03.png)

### Modifier (Bearbeiten)

Sous Modifier (Bearbeiten), vous pouvez effectuer les opérations suivantes :

- Modifier le nom et la description de la station (ces informations sont visibles sur la carte dans l'app)

- Supprimer des stations (important : les données historiques disparaissent également ; nous recommandons de passer la station en non licenciée)

- Station non licenciée (rendre la station inactive)

- Télécharger des images des stations


⚠️Important : les images d'une taille d'environ 605 x 806 pixels conviennent. 

![Portail web – Illustration 4](/img/stationsbetreiber-webportal/04.png)

### Modifier le raccordement (Anschluss bearbeiten)

Informations :

(ces informations sont visibles dans l'app)

- Nom du raccordement

- Description (facultative)

- Type de raccordement (type de prise)

- Énergie max. (kW)


Prix :

- Définir les prix pour l'énergie et le temps


⚠️Important : avec l'accès « limité » (limitiert), le champ est grisé, car dans ce cas le prix est défini sous « Définir les utilisateurs (Benutzer definieren) ou dans la [gestion avancée des utilisateurs](/funktionen/erw-nutzerverwaltung) ».

![Portail web – Illustration 5](/img/stationsbetreiber-webportal/05.png)

### Accès (Zugriff)

- Privé (Privat) : seul le « compte propriétaire » peut activer, c.-à-d. le compte dans lequel la station a été installée.

- Limité (Limited) : seuls le « compte propriétaire » et les « utilisateurs spéciaux » définis par station (via des « utilisateurs spéciaux » individuels ou via la [gestion avancée des utilisateurs](/funktionen/erw-nutzerverwaltung)) peuvent activer. Les autres comptes n'ont pas d'accès – ni par l'app ni par code QR.

- Public (Öffentlich) : tous les utilisateurs peuvent déverrouiller, soit par l'app, soit par le moyen de paiement instantané par code QR avec l'appareil photo du téléphone ou une app de scan (avec le statut public, la station n'est toutefois pas encore publiée en [roaming](/funktionen/roaming) auprès d'autres réseaux de recharge ; cela doit être effectué séparément. 


### Définir les utilisateurs (Benutzer definieren)

- Ici, un utilisateur individuel peut être enregistré avec son propre prix. 

- Ou des \*utilisateurs spéciaux" peuvent aussi être ajoutés via la règle de prix


⚠️Important : si un utilisateur est enregistré dans les deux catégories, c'est le prix sous lequel il a été ajouté comme « utilisateur individuel » (Einzelner Benutzer) qui s'applique. 

![Portail web – Illustration 6](/img/stationsbetreiber-webportal/06.png)

### Définir les horaires (Zeiten definieren)

Les heures d'ouverture peuvent en outre être adaptées dans le temps, de sorte que les bornes de recharge ne soient par exemple accessibles au public qu'à certaines heures de la journée. ( semblable à AirBnB)




Par exemple : une PME peut mettre des bornes de recharge à disposition de ses collaborateurs (utilisateurs spéciaux) à un prix spécial pendant les heures d'ouverture. Le soir et le week-end, les stations inutilisées peuvent être ouvertes au public à un autre prix.

Il en résulte une situation gagnant-gagnant : le propriétaire de la station peut gagner de l'argent avec une infrastructure de recharge de toute façon disponible, et davantage de points de recharge accessibles au public voient le jour (y compris à des endroits, p. ex. dans des zones industrielles, où l'on n'investirait sinon pas dans une infrastructure de recharge publique).

### Session de recharge automatique (Automatischer Ladevorgang)

- Avec la session de recharge automatique, dès que le backend atteint un statut « Preparing », une session de recharge est démarrée au nom de l'exploitant de la station. Cette application ne convient qu'au domaine privé et non aux cas d'utilisation limité et public. 


### Hubject

- Ici, vous pouvez ajouter la station de manière facultative au réseau de roaming Hubject. Vous trouverez des informations approfondies sur le fonctionnement dans l'article suivant sur le [roaming](/funktionen/roaming). 


![Portail web – Illustration 7](/img/stationsbetreiber-webportal/07.png)

![Portail web – Illustration 8](/img/stationsbetreiber-webportal/08.png)

### Définir l'emplacement (Standort setzen)

Définissez l'emplacement de la station sur la carte et adaptez l'adresse manuellement si nécessaire. Attention, placez impérativement l'« épingle » sur la carte. 

⚠️Important : vous avez plusieurs points de recharge au même endroit ? Dans ce cas, écartez un peu les emplacements les uns des autres, comme sur cette capture d'écran. 







L'emplacement peut aussi être supprimé. 

![Portail web – Illustration 9](/img/stationsbetreiber-webportal/09.png)

![Portail web – Illustration 10](/img/stationsbetreiber-webportal/10.png)

### Activer (Aktivieren)

- La station peut être activée depuis le portail web. Cela sans frais, car les stations sont activées au nom de l'exploitant de la station. 


## Mutation en masse

Vous souhaitez modifier tous les points de recharge ensemble en ce qui concerne les utilisateurs ou le prix ?

Effectuez alors les étapes suivantes :

- Sélectionnez les stations souhaitées (voir la case à cocher au début).

- Cliquez sur « Modifier les stations sélectionnées » (Ausgewählte Stationen bearbeiten). 


- Vous voyez maintenant le nombre de stations sélectionnées et pouvez, pour toutes les stations sélectionnées, activer l'accès, le prix, les horaires réservés et le roaming. 


![Portail web – Illustration 11](/img/stationsbetreiber-webportal/11.png)

![Portail web – Illustration 12](/img/stationsbetreiber-webportal/12.png)

## OCPP

Dans la section OCPP, vous trouvez votre URL individuelle pour l'intégration des bornes de recharge OCPP. 

- Si vous souhaitez en savoir plus sur OCPP, vous trouverez vos réponses ici dans l'article sur les [logs OCPP](/funktionen/wartung/ocpp-logs).

- Si vous souhaitez intégrer une borne de recharge OCPP à eCarUp, vous trouverez ici un [guide par fabricant](/ocpp-ladestationen). 


![Portail web – Illustration 13](/img/stationsbetreiber-webportal/13.png)



Authentification Basic 

- À quoi sert-elle : elle empêche que des stations inconnues ou falsifiées se connectent au système et à votre compte.

- Important : toujours l'utiliser en combinaison avec WSS (connexion chiffrée)

- L'authentification concerne l'ensemble du compte – c'est-à-dire que toutes les stations qu'il contient doivent connaître le mot de passe pour pouvoir se connecter. 


Exemple Zaptec : 



![Portail web – Illustration 14](/img/stationsbetreiber-webportal/14.png)

## Code QR

Vous trouverez tout sur le thème du code QR sous le lien suivant : [générer des codes QR](/stationsbetreiber/qr-code) 

![Portail web – Illustration 15](/img/stationsbetreiber-webportal/15.png)

## Groupes

- Groupes de stations : ici, vous pouvez créer des groupes de stations pour donner un peu plus de clarté à votre compte eCarUp.

- Groupes d'utilisateurs : ici, vous pouvez créer des groupes d'utilisateurs entiers et enregistrer des règles de prix pour les groupes de stations. Cela est possible avec l'abonnement Premium et vous trouverez un guide sous le [lien](/funktionen/erw-nutzerverwaltung) suivant. 


⚠️Important : vous pouvez aussi répartir une station dans plusieurs groupes. 

![Portail web – Illustration 16](/img/stationsbetreiber-webportal/16.png)

## Rapports

Vous trouverez toutes les informations sur les rapports sous le [lien](/funktionen/reports) suivant.

## Maintenance

Vous trouverez toutes les informations sur la maintenance sous le [lien](/funktionen/wartung) suivant.

## Compte et versement

- Revenus : le crédit disponible pour le versement, issu des sessions de recharge aux stations de ce compte

- Informations légales : en tant qu'exploitant de station, vous devez, en raison du [principe Know Your Customer](https://de.wikipedia.org/wiki/Know_your_customer) en vigueur en Europe et pour des raisons légales (blanchiment d'argent), enregistrer certaines informations. Celles-ci diffèrent selon qu'il s'agit d'une personne privée ou d'une entreprise.

- Vérifier le compte : après la saisie réussie des « Informations légales » (Rechtliche Angaben), votre compte doit encore être vérifié. Pour cela, vous êtes redirigé vers la page d'accueil de Stripe (prestataire de paiement en ligne) et guidé étape par étape. Vous trouverez davantage d'informations à ce sujet sur la [page du wiki](/stationsbetreiber/account-verifizieren) suivante. 

- Informations sur le compte bancaire : indiquez l'IBAN du compte bancaire sur lequel le versement doit être effectué 

- Versement : demandez le versement du crédit actuellement disponible sur votre compte. Le virement bancaire prend habituellement 2-3 jours ouvrables. Sur la page [Décompte](/stationsbetreiber/abrechnen-auszahlen), vous trouverez un exemple de quittance de versement. Ici, une commission ou un commentaire peut encore être ajouté comme étape intermédiaire. 

- Plan de versement automatisé : les clients Premium peuvent aussi automatiser le versement. Pour en savoir plus : [Versement automatique](/funktionen/automatische-auszahlung)

- Informations TVA : cette valeur est affichée dans la quittance de versement et dans les quittances des conducteurs.

- Modifier l'e-mail et le mot de passe

- Coordonnées du support : ici, vous pouvez placer des informations utiles pour le conducteur. 


### Historique du solde (Saldoverlauf)

- L'exploitant de la station voit ici l'historique des paiements et des versements. Il peut en même temps renvoyer les quittances à l'adresse e-mail du compte.


![Portail web – Illustration 17](/img/stationsbetreiber-webportal/17.png)

![Portail web – Illustration 18](/img/stationsbetreiber-webportal/18.png)

### Licences (Lizenzen)

- Dans le menu « Licences » (Lizenzen), vous voyez à tout moment le nombre total de vos licences Premium achetées. À partir de janvier 2025, vous avez en outre la possibilité d'acheter les licences en ligne par carte de crédit. 


![Portail web – Illustration 19](/img/stationsbetreiber-webportal/19.png)

## Conducteur

Les conducteurs peuvent aussi se connecter au portail web eCarUp. Sous le menu « Conducteur » (Fahrer), vous trouvez toutes les sessions de recharge du compte et pouvez les filtrer selon n'importe quelle période.

De plus, les conducteurs peuvent ajouter n'importe quelle carte RFID (par exemple un badge de collaborateur) à votre compte, afin de s'identifier avec celle-ci aux bornes de recharge compatibles RFID. Vous trouverez le guide correspondant sur la page [Tags RFID / NFC](/fahrer/rfid-nfc-tags-carid) .

![Portail web – Illustration 20](/img/stationsbetreiber-webportal/20.png)

Info : vous voyez une empreinte digitale dans l'historique, dans la colonne Signature (Signatur) ? Apprenez-en alors davantage ici sur le [droit de la métrologie en Allemagne](/sonstige-informationen/eichrecht-in-deutschland). 

### eCarUp Premium

Pour les fonctions suivantes, vous avez besoin d'une licence eCarUp Premium :

[Maintenance](/funktionen/wartung)

[Rapports](/funktionen/reports)

[Plans tarifaires](/funktionen/preisplaene)

[Roaming](/funktionen/roaming)

[Gestion avancée des utilisateurs](/funktionen/erw-nutzerverwaltung)

[Importation des données au quart d'heure](/funktionen/15-minuten-datenimport)

[Statistiques](/funktionen/statistiken)

[Versement automatique](/funktionen/automatische-auszahlung)

[eCarUp API](/funktionen/ecarup-api)
