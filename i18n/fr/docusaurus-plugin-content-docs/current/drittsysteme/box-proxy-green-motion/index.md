---
title: 'BoxProxy Green Motion'
slug: '/drittsysteme/box-proxy-green-motion'
description: 'IMPORTANT : l''utilisation de l''outil logiciel BoxProxy nécessite toujours une licence eCarUp Premium par point de recharge : plus d''informations'
sidebar_label: 'Box-Proxy Green Motion'
---
IMPORTANT : l'utilisation de l'outil logiciel BoxProxy nécessite toujours une licence eCarUp Premium par point de recharge : [Plus d'informations](https://web.ecarup.com/preise-ladestationen-backend/) 

eCarUp a développé un outil logiciel permettant de transférer les anciens modèles de bornes de recharge GreenMotion / Eaton vers le backend eCarUp. Une fois connectées à notre plateforme à l'aide du guide de cette page wiki, elles peuvent être utilisées comme tous les autres modèles de bornes de recharge compatibles avec eCarUp. 

[Webinaire eCarUp Backend basic + Box Proxy / Green Motion](/drittsysteme/box-proxy-green-motion/webinar-ecarup-backend-basic-eaton) (DE) avec FAQ

[Lien BoxProxy](https://web.boxproxy.ecarup.com)

## Bornes de recharge OCPP

Les modèles plus récents de bornes de recharge GreenMotion / EATON peuvent être intégrés à la plateforme eCarUp à l'aide du guide OCPP. Il n'y a aucun problème à combiner les différents types de bornes de recharge dans un même compte eCarUp. Mis à part le mode d'intégration, les fonctionnalités des bornes de recharge sur eCarUp sont identiques.

Les modèles de bornes de recharge suivants sont actuellement pris en charge par le [protocole OCPP](/ocpp-ladestationen) :

[Green Motion Building](/ocpp-ladestationen/eaton)

[Green Motion DC 22 & 26](/ocpp-ladestationen/eaton)

## Bornes de recharge Box Proxy

<div className="row">
<div className="col col--8">

Le Box Proxy est dès à présent disponible pour l'intégration des bornes Green Motion. Cela signifie que les bornes de recharge peuvent déjà être connectées à la plateforme eCarUp et testées à l'aide du guide ci-dessous. Des extensions et/ou des améliorations peuvent toutefois encore être apportées.

Les modèles de bornes de recharge suivants sont actuellement pris en charge :

- Private-One avec un connecteur

- xChargeLN xCIM Client avec un connecteur

- Network TWO

- Smart One

- Vous devez uniquement migrer la Smart One. Les bornes qui y sont raccordées sont automatiquement détectées et affichées dans eCarUp.

- Master One

D'autres modèles sont examinés en continu et ajoutés à cette liste après une intégration réussie. Tant que l'examen n'est pas concluant, nous ne pouvons pas fournir d'assistance en cas d'erreur.

</div>
<div className="col col--4 text--center">

![BoxProxy Green Motion – Illustration 1](/img/drittsysteme-box-proxy-green-motion/01.png)

</div>
</div>

Borne de recharge avec trois connecteurs, p. ex. Smart One avec trois Private One.

## Connexion Internet

### Carte SIM

⚠️Important : la carte SIM d'Eaton installée dans la borne sera également désactivée au moment de l'arrêt du service. Si vous souhaitez maintenir la connexion au backend eCarUp, il est donc important de remplacer la carte SIM suffisamment tôt. Si vous n'avez pas encore choisi de fournisseur, nous vous recommandons le suivant :  [LIEN](/drittsysteme/provider-sim-karte). 

## Exemple d'intégration de la Private One

<Video src="wPLyrBUKTU4" title="Vidéo YouTube" />

## Guide Box Proxy

Étape 1

- Si la borne de recharge se trouve derrière un pare-feu, le port 83 TCP vers l'IP 74.242.170.252 doit en plus être ouvert.

Étape 2

- Pour pouvoir connecter la borne à la plateforme eCarUp, vous avez besoin de la BoxID et de la ServerKey.

- Pour obtenir ces informations, vous devez retirer la carte SD de la borne de recharge. 

Voici un exemple avec la Network TWO

![BoxProxy Green Motion – Illustration 2](/img/drittsysteme-box-proxy-green-motion/02.jpg)

Étape 3

- Insérez la carte SD dans votre PC et ouvrez le fichier. 

- Cliquez sur "settings"

- Modifiez maintenant manuellement l'adresse ServerHostname en 74.242.170.252

- Copiez la Box ID et la ServerKey. 

- Enregistrez le fichier texte.

- Réinsérez la carte dans le contrôleur, la borne redémarre. 

![BoxProxy Green Motion – Illustration 3](/img/drittsysteme-box-proxy-green-motion/03.png)

![BoxProxy Green Motion – Illustration 4](/img/drittsysteme-box-proxy-green-motion/04.png)

<div className="row">
<div className="col col--8">

Étape 4

- Enregistrez la borne dans l'outil eCarUp BoxProxy en utilisant le lien suivant : [https://web.boxproxy.ecarup.com](https://web.boxproxy.ecarup.com)

- Important : vous avez besoin ici de votre identifiant eCarUp ; s'il n'a pas encore été créé, un guide est disponible à ce sujet.

Créer un compte : [/stationsbetreiber/webportal

](/stationsbetreiber/webportal)

- Cliquez sur Accept (le compte cible s'affiche en haut).

</div>
<div className="col col--4 text--center">

![BoxProxy Green Motion – Illustration 5](/img/drittsysteme-box-proxy-green-motion/05.png)

</div>
</div>

Étape 5

- Dans le menu, allez à « Stations » (Stationen) et cliquez sur « Ajouter » (Hinzufügen).

![BoxProxy Green Motion – Illustration 6](/img/drittsysteme-box-proxy-green-motion/06.png)

Étape 6

- Collez ici l'ID et la clé secrète copiées à l'étape 3, puis cliquez sur « Enregistrer » (Speichern). 

![BoxProxy Green Motion – Illustration 7](/img/drittsysteme-box-proxy-green-motion/07.png)

Étape 7

- La borne devrait redémarrer ; si ce n'est pas le cas, effectuez un redémarrage manuel. 

- Retournez dans l'outil eCarUp BoxProxy et vérifiez le statut.

- Si le statut est "online", vous avez tout fait correctement. 

![BoxProxy Green Motion – Illustration 8](/img/drittsysteme-box-proxy-green-motion/08.png)

Étape 8

- Retournez maintenant dans votre compte eCarUp à l'adresse suivante : [https://admin.ecarup.com/authentication/login](https://admin.ecarup.com/authentication/login)

- La borne a été créée et vous pouvez la configurer comme d'habitude sur le portail web eCarUp. 

## Cas particulier Network 2 (nouveau depuis le 1.6.2026)

Contexte et problématique

La communication via la Network 2 suit une logique différente. En raison de problèmes lors de la désactivation des sessions de recharge, des optimisations sont devenues nécessaires. Au T2 2026, nous avons reçu d'eaton les informations et conditions nécessaires pour résoudre ces problèmes de manière ciblée et améliorer le processus.

Mise en œuvre technique et exceptions

Comme le système ne peut pas identifier le type spécifique de borne de recharge, une conversion automatique en masse n'est pas possible ; l'adaptation doit être effectuée manuellement pour chaque borne. Il est toutefois possible que l'adaptation ait déjà été effectuée en arrière-plan, ce qui peut arriver lorsqu'un ticket de support a été traité et que nous avons pu attribuer clairement le problème à cette borne spécifique. Il n'y a aucune garantie que cela se fasse systématiquement.

Guide pour la conversion

- Ouvrir [https://web.boxproxy.ecarup.com](https://web.boxproxy.ecarup.com)

- Se connecter au compte

- Sélectionner « Stations » (Stationen)

- Sélectionner la borne concernée

- Sélectionner « Modifier » (Editieren)

- Définir le type de borne sur Network 2

- Enregistrer

![BoxProxy Green Motion – Illustration 9](/img/drittsysteme-box-proxy-green-motion/09.png)

## Où trouver la carte SD ?

### smart-one

⚠️Important : sur la Smart-One, l'unité de commande (boîtier gris) assure la commande centrale et intègre les deux bornes Private One comme raccordements déportés. 

![BoxProxy Green Motion – Illustration 10](/img/drittsysteme-box-proxy-green-motion/10.png)

![BoxProxy Green Motion – Illustration 11](/img/drittsysteme-box-proxy-green-motion/11.jpg)

![BoxProxy Green Motion – Illustration 12](/img/drittsysteme-box-proxy-green-motion/12.jpg)

### Network TWO

![BoxProxy Green Motion – Illustration 13](/img/drittsysteme-box-proxy-green-motion/13.jpg)

![BoxProxy Green Motion – Illustration 14](/img/drittsysteme-box-proxy-green-motion/14.jpg)

### Private One

![BoxProxy Green Motion – Illustration 15](/img/drittsysteme-box-proxy-green-motion/15.jpg)

## Pare-feu

Si la borne de recharge se trouve derrière un pare-feu, le port 83 TCP vers l'IP 74.242.170.252 doit en plus être ouvert.

## Plug and Charge

Veuillez suivre les étapes décrites.

- Créez un nouveau compte conducteur eCarup. Important : il doit s'agir d'un nouveau compte, sur lequel aucune carte de crédit ne doit être enregistrée.

- Dans le compte, allez sous « Conducteur » (Fahrer).

- Sélectionnez « Carte RFID » (RFID-Karte).

- Ajoutez une carte RFID avec un nom de carte et un Tag-ID. Pour le Tag-ID, utilisez uniquement les chiffres de 0 à 9 et les lettres de A à F. Nous recommandons en outre une longueur d'environ 10 caractères aléatoires, p. ex. 76435abd56. Le nombre de caractères doit être pair.

- Connectez-vous au Box Proxy avec votre compte administrateur eCarUp (compte exploitant de bornes). Il s'agit du compte avec lequel vous avez connecté les bornes Box Proxy : [https://web.boxproxy.ecarup.com/](https://web.boxproxy.ecarup.com/) 

- Vérifiez que les bornes sur lesquelles vous souhaitez utiliser Plug and Charge sont bien connectées à ce compte.

- Allez dans le menu « Paramètres du compte » (Account Einstellungen).

- Copiez le tag sans les :, tel qu'il a été enregistré dans votre compte conducteur eCarup, p. ex. 76435ABD56.

- Enregistrez le paramètre.

- Connectez-vous au compte administrateur eCarUp (compte exploitant de bornes).

- Ajoutez à chaque borne l'e-mail du compte conducteur eCarUp, pour un prix de 0 CHF

- Ou ajoutez l'e-mail à un groupe d'utilisateurs qui peut recharger gratuitement.

Que se passe-t-il ensuite :

- Toutes les bornes de recharge dont le fichier de paramètres local contient RFIDType = 0 démarrent désormais automatiquement la recharge.

- Dans les rapports, toutes les bornes de recharge sont désormais affichées avec l'e-mail du compte conducteur eCarup.

![BoxProxy Green Motion – Illustration 16](/img/drittsysteme-box-proxy-green-motion/16.png)

![BoxProxy Green Motion – Illustration 17](/img/drittsysteme-box-proxy-green-motion/17.png)

![BoxProxy Green Motion – Illustration 18](/img/drittsysteme-box-proxy-green-motion/18.png)

![BoxProxy Green Motion – Illustration 19](/img/drittsysteme-box-proxy-green-motion/19.png)

## Problèmes connus / limitations des bornes eaton

### Limitations des autorisations des utilisateurs sur plusieurs connecteurs

Lorsqu'une borne de recharge dispose de plusieurs connecteurs (prises), la gestion des autorisations des utilisateurs doit être identique sur tous les connecteurs. Il ne doit exister aucune configuration dans laquelle un utilisateur est par exemple autorisé à recharger sur le connecteur 1 alors que cette autorisation n'est pas donnée sur le connecteur 2, c'est-à-dire qu'elle diffère. De plus, Hubject ne doit pas être activé.

![BoxProxy Green Motion – Illustration 20](/img/drittsysteme-box-proxy-green-motion/20.png)

Quand le problème survient-il ?

Ce problème survient lorsque les utilisateurs utilisent une carte RFID pour démarrer la session de recharge.

Pourquoi le problème survient-il ?
Actuellement, lors du "Authorize", la borne de recharge nous transmet uniquement les données de la carte RFID, mais pas le numéro du connecteur utilisé. Cela est dû au standard OCPP. C'est pourquoi nous envoyons toujours une réponse "Accepted" dès que la carte RFID est présentée.

```
[2, "b5790013-43ad-0f00-384e-b4799a00ad0e", "Authorize", {"idTag":"ABCD"}]
[3, "eff00013-902d-27df-4b4e-9d6ae7f5ad7f", {"idTagInfo":{"status":"Accepted","expiryDate":"2025-07-10T13:00:36.754Z"}}]
```

Ce n'est que plus tard, lorsque la borne de recharge nous envoie le "StartTransaction", que nous recevons l'information sur le connecteur utilisé. À ce moment, notre système vérifie à nouveau la validité de la combinaison avec la carte RFID. Si la combinaison n'est pas valide, nous renvoyons le statut "Invalid".

```
[2, "31f10017-fe9a-9de1-cb45-85f36ce47d0c", "StartTransaction", {"connectorId":1,"idTag":"ABCD","meterStart":0,"timestamp":"2025-07-09T13:00:34Z"}]
[3, "31f10017-fe9a-9de1-cb45-85f36ce47d0c", {"idTagInfo":{"status":"Invalid","expiryDate":"2025-07-09T13:00:39.489Z"},"transactionId":66039489}]
```

Ce fabricant de bornes de recharge n'interprète pas correctement notre réponse "Invalid" au démarrage de la transaction. Nous ne pouvons pas modifier le comportement de la borne de recharge, et il faut en tenir compte lors de la configuration des utilisateurs.

### Une consommation de 0 kWh est transmise à notre système

Il peut arriver que, lors du redémarrage de la borne de recharge, une consommation de 0 kWh soit transmise par erreur à notre système. Cela peut entraîner des décomptes erronés.

Quand le problème survient-il ?

Sur certaines bornes, lorsqu'elles redémarrent. 

Pourquoi le problème survient-il ?
En raison d'une erreur sur la borne de recharge

![BoxProxy Green Motion – Illustration 21](/img/drittsysteme-box-proxy-green-motion/21.png)

Comment le problème peut-il être détecté ?

Dans les logs, une Meter Value de 1338 est par exemple envoyée

\[2, "b4a3001c-b5f5-576c-ae4d-83b28150ee34", "MeterValues", &#123;"connectorId":1,"transactionId":295103899,"meterValue":\[&#123;"timestamp":"2025-08-04T10:34:11.278Z","sampledValue":\[&#123;"value":"1338","context":"Sample.Periodic","format":"Raw","measurand":"Energy.Active.Import.Register","location":"Body","unit":"Wh"&#125;,&#123;"value":"0","context":"Sample.Periodic","format":"Raw","measurand":"Power.Active.Import","location":"Body","unit":"W"&#125;\]&#125;\]&#125;\]

Ensuite, une Meter Value de 0 est transmise pendant la recharge active. La borne recommence donc à 0 kWh, puis compte à nouveau vers le haut.

\[2, "cdf2001c-71f6-3991-734e-94e99d4bff05", "MeterValues", &#123;"connectorId":1,"transactionId":295103899,"meterValue":\[&#123;"timestamp":"2025-08-04T10:35:10.88Z","sampledValue":\[&#123;"value":"0","context":"Sample.Periodic","format":"Raw","measurand":"Energy.Active.Import.Register","location":"Body","unit":"Wh"&#125;,&#123;"value":"0","context":"Sample.Periodic","format":"Raw","measurand":"Power.Active.Import","location":"Body","unit":"W"&#125;\]&#125;\]&#125;\]

Comment le problème a-t-il été résolu ?

Le 18.08.2025, le fabricant Eaton nous a fourni de nouvelles informations montrant comment ce problème pouvait être corrigé à l'aide d'un contournement. Notre équipe de développement logiciel a immédiatement examiné ces informations et a pu corriger avec succès le problème des sessions de recharge à 0 kWh le 21.08.2025. Depuis cette date, les décomptes des sessions de recharge sur les bornes de recharge concernées devraient être corrects et ne plus présenter l'erreur mentionnée.

Avec ce correctif, nous avons uniquement mis en place un contournement qui corrige, lors du décompte, le problème des relevés du compteur transmis de manière erronée par la borne de recharge.
