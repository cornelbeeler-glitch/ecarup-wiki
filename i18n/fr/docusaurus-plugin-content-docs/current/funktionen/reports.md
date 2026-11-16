---
title: 'Rapports'
slug: '/funktionen/reports'
description: 'Pour utiliser les rapports, vous avez besoin d''une licence eCarUp Premium.'
sidebar_label: 'Rapports'
---
Pour utiliser les rapports, vous avez besoin d'une licence eCarUp Premium.

[Guide vidéo Rapports](#guide-vidéo-rapports)

[Fonctions](#fonctions)

[Création de rapports](#création-de-rapports)

[Rapport de station](#rapport-de-station)

[Rapports utilisateur](#rapports-utilisateur)

[Formats de fichier pris en charge](#formats-de-fichier-pris-en-charge)

[Rapport utilisateur avec calcul du prix](#rapport-utilisateur-avec-calcul-du-prix)

[Rapport de station CSV (étendu)](#rapport-de-station-csv-étendu)

## Guide vidéo Rapports

<Embed src="https://share.synthesia.io/embeds/videos/fd7eeb3e-5aeb-4453-80ca-223ec4f5f0ad" aspect="1.781" title="Rapports" />

### Fonctions

- Évaluer la consommation par borne de recharge sur une période quelconque

- Évaluer la consommation par utilisateur (si le conducteur est connu) sur une période quelconque

- Indiquer l'énergie et les coûts

- Rapports en PDF, CSV ou CSV étendu

- Configurer vous-même le prix par kWh et la durée de stationnement, TVA incluse, par utilisateur


### Création de rapports

Rendez-vous sur [www.ecarup.com](https://www.ecarup.com/) et cliquez sur Connexion (Login) en haut à droite. Connectez-vous ensuite avec vos identifiants. Vous accédez à l'aperçu des stations. Vérifiez que tous les points de recharge pour lesquels vous souhaitez générer les rapports sont déjà installés dans votre compte. 

### Rapport de station

Sélectionnez pour cela un ou plusieurs points de recharge. Cliquez ensuite sur Créer (Erstellen) en bas à gauche. Dans la fenêtre pop-up, vous pouvez maintenant définir le taux de TVA et la période souhaitée. Choisissez ensuite le format souhaité – PDF, CSV ou CSV étendu sont actuellement disponibles. Cliquez ensuite sur le bouton. Toutes les sessions de recharge de toutes les stations sélectionnées sont listées par ordre chronologique. De gauche à droite, vous voyez le nom de la station, la date de début, la durée de recharge en secondes, la date de fin, un numéro d'utilisateur anonymisé, l'énergie consommée, le prix de l'énergie, la durée de stationnement, le prix du stationnement et le total. Le rapport de station (CSV étendu) indique également les utilisateurs spéciaux + des informations supplémentaires (voir l'article Rapport de station CSV étendu). Important :

### Rapports utilisateur

La même procédure permet également de créer des rapports utilisateur. Celui-ci affiche les données de consommation d'un utilisateur donné pour un ou plusieurs points de recharge. Cela convient particulièrement aux bornes de recharge en pool, où plusieurs utilisateurs se partagent plusieurs stations eCarUp. Sélectionnez à nouveau les points de recharge souhaités et effectuez les réglages dans la fenêtre pop-up. Le rapport utilisateur ne peut être créé que pour les comptes conducteur que vous avez définis comme «Utilisateur spécial» («Speziellen Benutzer») pour vos stations. En cliquant sur le bouton PDF ou CSV, seules les données de consommation de ce compte sont éditées (cumulées) pour toutes les bornes de recharge sélectionnées. Alternativement, un prix peut également être calculé pour un utilisateur «gratuit». 

### Formats de fichier pris en charge

Un export CSV étendu permet de traiter les données dans votre propre solution logicielle. Alternativement, le système eCarUp offre des interfaces ouvertes pour l'échange automatisé de données (API, MSCONS, IS-E). Vous trouverez le guide de l'API eCarUp ici : [API Version 1](/funktionen/ecarup-api)

## Rapport utilisateur avec calcul du prix

1.  Les utilisateurs enregistrés peuvent faire l'objet de rapports sur une période donnée. L'utilisateur y figure tel quel dans le PDF ou le CSV, avec le prix prédéfini. 

2.  Pour les utilisateurs gratuits, un rapport avec prix et devise peut être créé a posteriori. Le prix d'origine est alors remplacé et le calcul se fait avec le prix que vous définissez.


Exemple : pour les collaborateurs qui rechargent gratuitement, un prix peut être calculé a posteriori. L'encaissement reste toutefois du ressort de l'exploitant de la station. 

Important : actuellement, le prix calculé n'est pas indiqué sur le PDF & le CSV. 

![Rapports – Illustration 1](/img/funktionen-reports/01.png)

## Exemples :

### Rapport de station en PDF

<Embed src="https://drive.google.com/file/d/1h6JtWuyjq3Y1vy69zqWrFGFOtr8C3fJd/preview" aspect="1.350" title="Drive, eCarUp Station Report.pdf" />

eCarUp Station Report.pdf

### Rapport utilisateur en PDF

@@EMBED|url|https://drive.google.com/file/d/1hw1NTbWFySg5uk_KcQLqwZpKIcOzAZr_/preview|1.350|Drive, eCarUp report_user_demo@ecarup.com_2023-09-20.pdf@@

eCarUp report\_user\_demo@ecarup.com\_2023-09-20.pdf

## Rapport de station CSV (étendu)

Le rapport de station CSV étendu contient les informations suivantes :



- Station name : nom de la borne de recharge avec numéro de série

- Start date : heure de début de la recharge 

- Durations : durée de la session de recharge en secondes

- End date : fin de la session de recharge 

- User : indique qui a rechargé à la station.

    - Une adresse e-mail est affichée si un utilisateur limité est enregistré pour la station. Cela peut se faire via la [gestion étendue des utilisateurs](/funktionen/erw-nutzerverwaltung) ou directement sur la station sous «Station / Définir les utilisateurs» («Station / Benutzer Definieren»)

    - Des caractères cryptiques (p. ex. LshD4G0WaxPMH++hv55o) sont affichés lorsqu'un utilisateur inconnu a rechargé à une borne de recharge publique.

- Provider : indique avec quoi la recharge est effectuée.

    - Unknown : pour toutes les transactions antérieures au 06.05.2024

    - Ecarup : lorsque la recharge a été effectuée avec un compte eCarUp.

    - Hubject : lorsque la recharge a été lancée via un fournisseur Hubject (roaming).

- Mode : mode d'authentification

    - Car ID, actuellement uniquement en combinaison avec la borne de recharge [Pico](/smart-me-pico).

    - Cloud (activation via l'APP, le portail web, Instant Payment, l'API ou la session de recharge automatique)

    - Carte RFID

    - Unknown (avant l'introduction de la mise à jour, 06.05.2024)

- Identifier : le numéro de la carte RFID, affiché uniquement si la recharge a été lancée via RFID. Dans tous les autres cas, ce champ est vide.

- Identifier Name : le nom de la carte RFID, si la recharge a été lancée via RFID. Dans tous les autres cas, ce champ est vide.

- Payment Status : statut de paiement, Paid = payé, notCharged = montant trop faible, Failed = le montant ne peut pas être prélevé auprès du client (pour en savoir plus, consultez le [lien](/fahrer/fehlgeschlagene-zahlung) suivant) , Unknown = pour toutes les transactions antérieures au 13.06.2024

- Energy price ( CHF )  Le prix défini pour l'électricité

- Parking price (CHF) Le prix de la place de stationnement 

- Total (CHF ou EUR) Le total que reçoit le propriétaire de la station. (90%) Pour en savoir plus sur le [décompte.](/stationsbetreiber/abrechnen-auszahlen) 


Important : toutes les informations supplémentaires (e-mail, ID-Tag et nom de la carte RFID) ne sont listées que si l'utilisateur est connu et enregistré auprès de l'exploitant de la station. 

### Rapport de station étendu en CSV

![Rapports – Illustration 2](/img/funktionen-reports/02.png)

## Remarque :

### Oups (Hoppla)

Un événement inattendu s'est produit. Veuillez réessayer. (Es ist etwas Unerwartetes passiert. Bitte versuchen Sie es erneut.)

- Cela peut se produire avec le type de rapport Utilisateur (Benutzer). Un utilisateur a alors été sélectionné qui n'a eu aucune session de recharge pendant la période choisie.




![Rapports – Illustration 3](/img/funktionen-reports/03.png)
