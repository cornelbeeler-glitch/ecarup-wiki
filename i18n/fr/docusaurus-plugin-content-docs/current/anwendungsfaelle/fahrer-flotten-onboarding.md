---
title: 'Onboarding des conducteurs et des flottes'
slug: '/anwendungsfaelle/fahrer-flotten-onboarding'
description: 'Un onboarding efficace des conducteurs et des flottes est une étape essentielle pour utiliser avec succès le système eCarUp.'
sidebar_label: 'Onboarding des conducteurs et des flottes'
---

## Introduction

Un onboarding efficace des conducteurs et des flottes est une étape essentielle pour utiliser avec succès le système eCarUp. Ce processus garantit que les conducteurs individuels comme les grandes flottes de véhicules puissent accéder rapidement et simplement à l'infrastructure de recharge. 

- Structure des comptes et évaluation : 

    - Pour évaluer précisément les sessions de recharge payantes par conducteur et par véhicule, il est indispensable de créer un compte distinct pour chaque conducteur.  

    - Pour les recharges gratuites au sein de l'entreprise via un compte d'exploitant de station auquel vous avez accès, il est également possible de remettre aux conducteurs une carte RFID issue d'un compte central conducteurs/flotte. Nous déconseillons de le faire dans le compte d'exploitant de station.

- Gestion des comptes : nous recommandons de laisser les conducteurs créer eux-mêmes leur compte. Si toutefois un compte de flotte est mis en place (comme décrit dans la section suivante), une gestion centralisée par un administrateur est judicieuse.  

- Cartes RFID : les cartes des conducteurs peuvent être enregistrées simplement (via l'[application](/fahrer/ecarup-app)) ou, pour gagner du temps, téléversées en masse dans le portail web. 

- Activation et service EMP : veuillez noter qu'eCarUp ne propose pas ses propres services EMP (E-Mobility Provider). Cela signifie que vous ne pouvez pas déverrouiller les bornes Move, Gofast, etc. avec votre carte RFID. Les cartes RFID peuvent être utilisées exclusivement sur toutes les bornes de recharge eCarUp. 

- ⚠️Important : veuillez noter que les cartes RFID ne sont pas sûres en soi. Comme le numéro de la carte RFID n'est pas unique, une autre personne peut avoir le même numéro que vous et lancer ainsi une recharge à vos frais. Nous déclinons toute responsabilité en cas d'utilisation abusive de votre numéro RFID. L'utilisation se fait à vos propres risques. 

## Compte conducteur avec une ou plusieurs cartes RFID

### Rôle conducteur

Application

- Dans l'application, le conducteur peut enregistrer lui-même ses cartes RFID. Vous trouverez le guide correspondant ici. [Application](/fahrer/rfid-nfc-tags-carid)

### Rôle exploitant de station

<div className="row">
<div className="col col--8">

Portail web

- En tant qu'exploitant de station, vous pouvez ajouter le conducteur soit via le connecteur concerné, soit via la gestion étendue des utilisateurs dans le portail web. Vous trouverez plus d'informations ici : [Lien](/funktionen/erw-nutzerverwaltung)

</div>
<div className="col col--4 text--center">

![Onboarding des conducteurs et des flottes – Figure 1](/img/anwendungsfaelle-fahrer-flotten-onboarding/01.png)

</div>
</div>

## Compte de flotte avec plusieurs cartes RFID qui rechargent sur des bornes internes

### Rôle responsable de flotte

- Créez une adresse e-mail fonctionnelle, p. ex. flottenfahrzeuge@ecarup.com

### Portail web

- Connectez-vous au portail web avec le compte que vous venez de créer, p. ex. flottenfahrzeuge@ecarup.com.

- Sous Conducteur (Fahrer) -> Cartes RFID (RFID-Karten) -> la carte RFID, les jetons RFID, nom compris, peuvent être téléversés manuellement ou via un fichier CSV. 

![Onboarding des conducteurs et des flottes – Figure 2](/img/anwendungsfaelle-fahrer-flotten-onboarding/02.png)

### Exemple :

1.Compte conducteur auquel plusieurs cartes RFID sont attribuées pour différents véhicules.

Le fichier CSV pour le téléversement peut se présenter comme suit :

Colonne A : nom de la carte

Colonne B : jeton RFID

![Onboarding des conducteurs et des flottes – Figure 3](/img/anwendungsfaelle-fahrer-flotten-onboarding/03.png)

![Onboarding des conducteurs et des flottes – Figure 4](/img/anwendungsfaelle-fahrer-flotten-onboarding/04.png)

### Évaluation du compte propriétaire de station à l'aide de la fonction de rapport

- Vous trouverez plus d'informations sur la fonction de rapport ici : [Lien](/funktionen/reports)

- Dans le fichier CSV, vous trouverez notamment l'e-mail du compte conducteur, la carte RFID utilisée et la consommation en kWh.

![Onboarding des conducteurs et des flottes – Figure 5](/img/anwendungsfaelle-fahrer-flotten-onboarding/05.png)

## Les adresses e-mail alias facilitent la création de plusieurs comptes eCarUp.

Une adresse e-mail alias est en fait un surnom ou une désignation alternative de votre compte e-mail principal réel. Vous pouvez recevoir des e-mails à cette adresse alias sans que les expéditeurs connaissent votre véritable adresse e-mail. Les messages envoyés à l'alias arrivent automatiquement dans votre boîte de réception habituelle. 

Exemple : avec Gmail et Outlook, cela fonctionne comme suit :

- E-mail d'origine : max.mustermann@ecarup.com

- E-mail alias : max.mustermann+auto123@ecarup.com
