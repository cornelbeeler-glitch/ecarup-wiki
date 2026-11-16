---
title: 'Mise en service d''une station OCPP'
slug: '/stationsbetreiber/inbetriebnahme-ocpp-station'
description: 'eCarUp recommande la procédure suivante :'
sidebar_label: 'Mise en service d''une station OCPP'
---
## eCarUp recommande la procédure suivante :

### 1\. Installation de la station

- Assurez-vous que votre borne de recharge est compatible avec eCarUp. Vous trouverez une liste toujours à jour sur cette [page du wiki](/ocpp-ladestationen). 

- Installez votre station et mettez-la en service. Les stations doivent disposer d'une connexion Internet stable et le port 53 (DNS) ainsi que le port 80 (ou le port configuré sur la station) doivent être ouverts en sortie. Pour une intégration réussie, les stations doivent pouvoir communiquer avec nos serveurs. Assurez-vous que la communication n'est pas bloquée (p. ex. par des pare-feu, etc.).

- Si vous cherchez encore une carte SIM, nous vous recommandons les cartes SIM de notre [partenaire](/drittsysteme/provider-sim-karte).

- Vous devez avoir accès à l'interface de la station et vous trouver sur le même réseau.


⚠️Important : si votre station ne figure pas dans la liste des stations compatibles, veuillez nous contacter.

![Mise en service d'une station OCPP – Illustration 1](/img/stationsbetreiber-inbetriebnahme-ocpp-station/01.png)

### 2\. Activation et enregistrement

- Créez un compte eCarUp : [Enregistrement](https://admin.ecarup.com/authentication/login).

- Tenez l'URL OCPP à disposition pour la connexion entre la station et le compte. 

- WS, WSS et WSS avec Basic Auth. Pour en savoir plus : [Portail web](/stationsbetreiber/webportal)


Important : pour utiliser WSS et WSS avec Basic Auth, la station concernée doit prendre en charge ces options. 

URL OCPP : 

![Mise en service d'une station OCPP – Illustration 2](/img/stationsbetreiber-inbetriebnahme-ocpp-station/02.png)

- Pour pouvoir facturer par carte de crédit et recevoir l'argent des recettes, vous devez vérifier votre compte. Vous trouverez les informations à ce sujet sur cette [page](/stationsbetreiber/account-verifizieren).

- Utilisez notre guide pour connecter votre station OCPP au [backend eCarUp](/ocpp-ladestationen).


⚠️Important : eCarUp ne crée pas de points de mesure à l'avance, mais seulement lors de la première communication entre la station et le backend. Autrement dit, tant que la station n'envoie aucune information via le protocole OCPP, eCarUp ne sait pas que cette borne de recharge existe.  

Cela peut se produire dans les cas suivants :

- -   1.  -   pas de connexion Internet

            - un pare-feu bloque la communication sortante

            - la carte SIM n'est pas active ou ne trouve pas de connexion

- Dès que la station a activement établi la communication avec eCarUp, le système crée un point de mesure dans votre compte (gestion des stations (Stationsmanagement)).


### 3\. Configurer le point de recharge

Vous pouvez configurer le point de recharge selon vos besoins.

- Définir les [prix, l'emplacement, les utilisateurs spéciaux ainsi que d'autres paramètres](/stationsbetreiber/webportal).

- Pour que les utilisateurs accèdent le plus simplement possible à l'électricité, vous pouvez en outre équiper les stations de [codes QR et d'un étiquetage](/stationsbetreiber/qr-code).

- Si vous souhaitez également utiliser des [badges RFID/NFC](/fahrer/rfid-nfc-tags-carid), vous trouverez ici toutes les informations.

- Si la station doit éventuellement être publiée dans le [réseau de roaming](/funktionen/roaming), vous trouverez ici toutes les informations. Veuillez tenir compte des restrictions qui en découlent concernant les heures d'ouverture et la tarification.

- eCarUp recommande de toujours effectuer une recharge de test à la fin.




![Mise en service d'une station OCPP – Illustration 3](/img/stationsbetreiber-inbetriebnahme-ocpp-station/03.png)
