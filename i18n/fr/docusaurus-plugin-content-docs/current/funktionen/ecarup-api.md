---
title: 'eCarUp API'
slug: '/funktionen/ecarup-api'
description: 'Pour utiliser l''API eCarUp, vous avez besoin d''une licence eCarUp Premium.'
sidebar_label: 'eCarUp API'
---
Pour utiliser l'API eCarUp, vous avez besoin d'une licence eCarUp Premium.

L'API (Application Programming Interface) est un ensemble de commandes qui permet à différentes applications logicielles de communiquer entre elles. 

[Préparation](#préparation)

[Identifiants pour l'autorisation](#identifiants-pour-lautorisation)

[Tester eCarUp Swagger](#tester-ecarup-swagger)

[Exemple](#exemple)

[Exemple de code](#exemple-de-code)

## Préparation

### Identifiants pour l'autorisation

Pour pouvoir utiliser l'API eCarUp, procédez comme suit :

1.  Connectez-vous au [portail web smart-me](https://webforms.smart-me.com/Embedded/smartme/SignIn.aspx) (société mère) avec votre e-mail et votre mot de passe. 

2.  Allez dans Configuration (Konfiguration) et sélectionnez-y le point API. (Image 1)

3.  Cliquez sur Ajouter un appareil (Client Credentials) (Gerät (Client Credentials) hinzufügen).

4.  Pour les autorisations, vous avez besoin de user.read et device.read. Cliquez ensuite sur Créer/Enregistrer (erstellen/speichern). (Image 2)

5.  Important : un champ contenant le Client ID et le Client Secret apparaît ensuite. Ce sont les identifiants pour l'autorisation de l'API. Enregistrez ces identifiants en lieu sûr.


Le champ n'apparaît qu'une seule fois.

![eCarUp API – Illustration 1](/img/funktionen-ecarup-api/01.png)

Image 1

![eCarUp API – Illustration 2](/img/funktionen-ecarup-api/02.png)

Image 2

## Tester eCarUp Swagger

[eCarUp API Swagger](https://public-api.ecarup.com/swagger/index.html)

Dans Swagger, vous pouvez exécuter et tester les commandes actuelles. 

Allez sur [eCarUp Public API Swagger](https://public-api.ecarup.com/swagger/index.html) et saisissez les identifiants que vous avez obtenus à l'étape 5.

![eCarUp API – Illustration 3](/img/funktionen-ecarup-api/03.png)

## Exemple

La commande "get/v1/history/station/&#123;id&#125;" permet également d'extraire des statistiques par conducteur pour chaque borne de recharge.

![eCarUp API – Illustration 4](/img/funktionen-ecarup-api/04.png)

Statistiques de conducteur avec conducteur connu

![eCarUp API – Illustration 5](/img/funktionen-ecarup-api/05.png)

Statistiques de conducteur avec conducteur inconnu

## Exemple de code

est disponible sous : [https://github.com/eCarUp/ecarup-api-examples](https://github.com/eCarUp/ecarup-api-examples)

![eCarUp API – Illustration 6](/img/funktionen-ecarup-api/06.png)
