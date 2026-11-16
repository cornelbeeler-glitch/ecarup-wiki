---
title: 'Webinaire eCarUp Backend basic + eaton'
slug: '/drittsysteme/box-proxy-green-motion/webinar-ecarup-backend-basic-eaton'
description: 'eaton Box Proxy et OCPP 29:19'
sidebar_label: 'Webinaire eCarUp Backend basic + eaton'
---
## Webinaire

<Video src="Jowm4Ke0Z38" title="Vidéo YouTube, enregistrement du webinaire « Bases d’eCarUp & Box Proxy / Green Motion » (partie 2 Box Proxy)" />

- Introduction [00:00](https://www.youtube.com/watch?v=Jowm4Ke0Z38)

- Bases d’eCarUp [1:21](https://youtu.be/Jowm4Ke0Z38?si=SuDE9wxrD7aNVNg0&t=81)

- Démo en direct d’eCarUp [22:46](https://youtu.be/Jowm4Ke0Z38?si=E4N2BBLPiRUDdoKy&t=1366)

- eaton Box Proxy et OCPP [29:19](https://youtu.be/Jowm4Ke0Z38?si=9uUrVfyatrvgiLUG&t=1759)

## Généralités

<details id="wie-werde-ich-partner-wo-finde-ich-partner">
<summary>Comment devenir partenaire, où trouver des partenaires ?</summary>

- [Devenir partenaire](https://web.ecarup.com/partnerschulung-ecarup/)

- [Trouver un partenaire](https://web.ecarup.com/partner-de/)

</details>

<details id="wo-finde-ich-weitere-informationen">
<summary>Où trouver d’autres informations ?</summary>

- Le wiki contient toutes les informations en DE et EN. La version FR ne contient pour l’instant que l’essentiel et se concentre sur les conducteurs et les cas d’application simples. eCarUp Wiki 

</details>
## Exploitants de stations

<details id="fragen-zu-preisen">
<summary>Questions sur les prix</summary>

- Le prix par kWh et par heure de recharge active est fixé par l’exploitant de la station lui-même. Le prix peut être plus élevé ou plus bas.

- Il est possible de définir plusieurs prix pour une station, tous publics, puis un autre prix par utilisateur, qui est limité :  [Portail web](/stationsbetreiber/webportal) 

- Si l’argent est encaissé par carte de crédit, des frais de carte de crédit de 10% s’appliquent. Avec une solution d’encaissement sans carte de crédit, p. ex. [Rapports](/funktionen/reports) , ces frais disparaissent, car eCarUp n’intervient plus dans le flux financier.

- En roaming, vous pouvez fixer le prix que vous recevez ; le prix facturé au conducteur ne relève plus de notre compétence et est fixé par le partenaire de roaming sans nous consulter :  [Roaming](/funktionen/roaming) 

- Les prix dynamiques ne sont pas pris en charge par eCarUp.

- Le tarif haut et le tarif bas ne sont pas possibles, car OCPP n’est pas conçu pour cela. Certaines plateformes le proposent, mais ne tiennent compte que du début de la recharge. Nous avons délibérément choisi de ne pas le faire, car certains fournisseurs d’énergie ne proposent le tarif bas qu’à midi : quelqu’un pourrait alors activer une recharge au tarif bas peu après midi et recharger ensuite tout l’après-midi, pendant le tarif haut, au prix du tarif bas.

</details>

<details id="sind-strafrechtliche-sanktionen-möglich">
<summary>Des sanctions pénales sont-elles possibles ?</summary>

- Non, nous n’avons actuellement aucune solution raisonnable qui couvre tous les cas. Par exemple : des véhicules à moteur thermique qui stationnent. Des câbles qui sont branchés, puis la personne s’en va sans activer la recharge, quelqu’un qui bride volontairement la recharge sur la voiture, p. ex. à 6 ampères, et reste ainsi longtemps sur la place de stationnement en rechargeant toujours un peu, mais pas beaucoup

</details>

<details id="kann-man-zu-bestimmten-zeiten-stationen-zugänglich-oder-sichtbar-machen">
<summary>Peut-on rendre des stations accessibles ou visibles à certaines heures ?</summary>

- Oui, [Wiki --> Exploitants de stations --> Définir les horaires](/stationsbetreiber/webportal)

</details>

<details id="kann-man-in-der-app-in-echtzeit-sehen-ob-die-station-verfügbar-besetzt-oder-ausgefallen-ist">
<summary>Peut-on voir en temps réel dans l’app si la station est disponible, occupée ou en panne ?</summary>

- Oui

</details>

<details id="ist-es-möglich-den-gesamtverbrauch-in-kwh-einer-ladestation-für-1-jahr-zu-ermitteln">
<summary>Est-il possible de déterminer la consommation totale en kWh d’une borne de recharge sur 1 an ?</summary>

- Oui, avec un [Rapports](/funktionen/reports)  

</details>

<details id="können-wir-im-backend-nicht-verschiedene-gruppen-erstellen-um-für-jede-gruppe-unterschiedliche-regeln-mit-preisen-definieren">
<summary>Ne pouvons-nous pas créer différents groupes dans le backend afin de définir pour chaque groupe des règles différentes avec des prix ?</summary>

- Oui, [Rôles & droits\*](/funktionen/rollen-rechte) 

</details>

<details id="ist-es-möglich-zwei-verschiedene-limiterte-gruppen-zu-erstellen-in-denen-jeweils-ein-anderer-tarif-gilt">
<summary>Est-il possible de créer deux groupes « limités » différents, dans lesquels un tarif différent s’applique à chacun ?</summary>

- Oui, [Rôles & droits\*](/funktionen/rollen-rechte) 

</details>

<details id="bis-zu-welchem-zeitpunkt-werden-die-daten-rückwirkend-gespeichert-bzw-sind-sie-sichtbar---report">
<summary>Jusqu’à quand les données sont-elles enregistrées rétroactivement, ou visibles ? -> Rapport</summary>

- Actuellement 10 ans.

</details>
## Eaton

<details id="bietet-ecarup-ein-lademanagement">
<summary>eCarUp propose-t-il une gestion de la charge ?</summary>

- Non, le protocole OCPP n’est pas conçu pour cela. C’est le fabricant de la borne de recharge qui doit s’en charger.

</details>

<details id="benötige-ich-zusätzliche-hardware-für-den-boxproxy">
<summary>Ai-je besoin de matériel supplémentaire pour le BoxProxy ?</summary>

- Non, seul le code QR doit être apposé sur place.

- Guide : [Box-Proxy Green Motion](/drittsysteme/box-proxy-green-motion) 

</details>

<details id="kann-ich-weiterhin-shell-oder-evpass-verwenden">
<summary>Puis-je continuer à utiliser Shell ou evpass ?</summary>

- Oui, ce sont pour nous des partenaires de roaming tout à fait normaux. La station doit être publique et disponible 24h/24 et 7j/7, l’emplacement doit être défini et Hubject doit être activé. Plus d’infos : [Portail web](/stationsbetreiber/webportal), [Roaming](/funktionen/roaming) 

</details>

<details id="wie-kann-ich-eine-eaton-station-einbinden">
<summary>Comment intégrer une station Eaton ?</summary>

- OCPP : [Eaton](/ocpp-ladestationen/eaton) 

- Modèles plus anciens qui ne prennent pas encore en charge OCPP : [Box-Proxy Green Motion](/drittsysteme/box-proxy-green-motion) 

- Important : un code QR est toujours nécessaire : [Code QR](/stationsbetreiber/qr-code) 

- La station n’est pas listée dans le wiki sous BoxProxy : dans ce cas, nous n’avons pas encore reçu le matériel d’eaton et n’avons pas encore pu effectuer le test. Veuillez vous renseigner auprès d’eaton.

</details>

<details id="kann-ich-die-stationen-von-eaton-egal-ob-boxproxy-oder-ocpp-auch-mit-rfid-app-oder-qr-aktivieren">
<summary>Puis-je aussi activer les stations d’eaton, que ce soit via BoxProxy ou OCPP, avec RFID, l’app ou un code QR ?</summary>

- Oui

</details>

<details id="ist-es-möglich-dass-während-der-migration-eine-station-gleichzeitig-auf-den-plattformen-von-eaton-und-ecarup-angezeigt-wird">
<summary>Est-il possible qu’une station soit affichée simultanément sur les plateformes d’eaton et d’eCarUp pendant la migration ?</summary>

- Non

</details>

<details id="wo-können-wir-die-mit-boxproxy-kompatiblen-eaton-modelle-auf-ihrer-website-finden">
<summary>Où trouver sur votre site web les modèles Eaton compatibles avec Boxproxy ?</summary>

- Ici : [Box-Proxy Green Motion](/drittsysteme/box-proxy-green-motion) 

- Pour toutes les stations qui ne figurent pas dans la liste, veuillez vous adresser directement à Eaton.

</details>

<details id="muss-ich-für-die-integration-einen-link-im-eaton-portal-ändern">
<summary>Dois-je modifier un lien dans le portail Eaton pour l’intégration ?</summary>

- Suivez simplement les instructions : [Eaton OCPP](/ocpp-ladestationen/eaton)

- Suivez simplement les instructions : [BoxProxy Green Motion](/drittsysteme/box-proxy-green-motion) 

</details>

<details id="ist-es-möglich-die-auf-der-eaton-plattform-erstellten-konten-auf-die-ecarup-plattform-zu-übertragen">
<summary>Est-il possible de transférer vers la plateforme eCarUp les comptes créés sur la plateforme Eaton ?</summary>

- Non

</details>

<details id="was-kostet-der-boxproxy">
<summary>Combien coûte le BoxProxy ?</summary>

- Une licence Premium par point de recharge (connecteur) : [Prix](https://web.ecarup.com/preise-ladestationen-backend/) 

</details>
## Conducteurs

<details id="wie-aktiviere-ich-eine-station">
<summary>Comment activer une station ?</summary>

- Code QR sans app : [Fonction de paiement immédiat](/fahrer/sofort-bezahl-funktion) 

- App : [App](/fahrer/ecarup-app) 

- RFID, si celle-ci a été ajoutée dans l’app conducteur et que la station dispose d’un capteur RFID : [RFID / tags NFC / CarID](/fahrer/rfid-nfc-tags-carid) 

</details>

<details id="fragen-zur-bezahlung">
<summary>Questions sur le paiement</summary>

- Google Pay, Apple Pay et la carte de crédit sont les moyens de paiement qui peuvent être utilisés directement sur eCarUp.

- La PostFinance Card ne peut pas être enregistrée comme moyen de paiement, car notre prestataire de services financiers Stripe ne l’a pas implémentée.

- Une carte RFID n’est pas un moyen de paiement, elle sert uniquement à l’authentification.

</details>

<details id="der-fahrer-der-station-muss-kein-abonnement-abschliessen-sondern-zahlt-nur-für-seinen-verbrauch">
<summary>Le conducteur de la station n’a pas besoin de souscrire un abonnement, il paie uniquement sa consommation.</summary>

- Exact, aucuns frais ne sont facturés au conducteur.

</details>

<details id="können-ladestationen-reserviert-werden">
<summary>Les bornes de recharge peuvent-elles être réservées ?</summary>

- Non

</details>
