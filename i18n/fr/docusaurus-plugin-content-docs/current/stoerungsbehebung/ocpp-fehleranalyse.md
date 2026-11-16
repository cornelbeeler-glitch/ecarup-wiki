---
title: 'Analyse des erreurs OCPP'
slug: '/stoerungsbehebung/ocpp-fehleranalyse'
description: 'Cette page décrit différentes erreurs qui peuvent être lues et analysées à l''aide d''un log OCPP.'
sidebar_label: 'Analyse des erreurs OCPP'
---
Cette page décrit différentes erreurs qui peuvent être lues et analysées à l'aide d'un log OCPP.

## OCPP = Open Charge Point Protocol

OCPP est un protocole d'application universel qui standardise la communication entre les bornes de recharge pour véhicules électriques et un système de gestion central.

eCarUp prend actuellement en charge la version 1.6j

⚠️ Important : la borne de recharge Pico ne prend pas en charge le protocole OCPP et dispose de ses propres logs, plus limités.

## Générer un log OCPP de la borne de recharge

<div className="row">
<div className="col col--8">

Dans le portail, cliquez à gauche sur « Maintenance » (Wartung), puis sur « Actions » (Aktionen).

</div>
<div className="col col--4 text--center">

![Analyse des erreurs OCPP – Illustration 1](/img/stoerungsbehebung-ocpp-fehleranalyse/01.png)

</div>
</div>

Cliquez ensuite sur les trois petits points situés à droite de la borne de recharge concernée.

Un menu devrait alors s'ouvrir, dans lequel vous cliquez sur « Logs » (Logs).

![Analyse des erreurs OCPP – Illustration 2](/img/stoerungsbehebung-ocpp-fehleranalyse/02.png)

Un menu devrait s'ouvrir, dans lequel vous pouvez filtrer par date de début et date de fin. Le mieux est de prendre 1 jour avant et 1 jour après, afin que toutes les informations soient affichées. Si la tentative de recharge a eu lieu le 05.05.2025, il faut donc choisir le 04.05.2025 comme date de début et le 06.05.2025 comme date de fin (sauf si la tentative a eu lieu à la date du jour)

Les logs devraient ensuite apparaître en bas. Si, comme dans l'exemple, aucun log n'est disponible, il se peut que la station ne nous envoie pas de logs et ne communique donc pas avec eCarUp. L'erreur se situe alors le plus souvent du côté de la borne de recharge ou de la configuration.

Lorsque des entrées de log apparaissent, vérifiez qu'elles correspondent bien à la date indiquée. Attention : l'heure est en UTC. Si la borne de recharge se trouve en Europe, l'heure des logs est donc décalée d'une ou deux heures.

Une fois que tout est correctement réglé et contrôlé, vous pouvez cliquer sur « Exporter en CSV » (CSV exportieren) et ainsi télécharger un CSV contenant les logs.

![Analyse des erreurs OCPP – Illustration 3](/img/stoerungsbehebung-ocpp-fehleranalyse/03.png)

![Analyse des erreurs OCPP – Illustration 4](/img/stoerungsbehebung-ocpp-fehleranalyse/04.png)

⚠️ Important : pour générer un log, une licence eCarUp-Premium est nécessaire

### Le Tag ID est "" &lt;null>

Request In StartTransaction \[2,"33736216","StartTransaction",&#123;"connectorId":1,"meterStart":9664049,"idTag":"","timestamp":"2025-08-14T11:40:44Z"&#125;\]

Si la station nous envoie un "idTag":""

- Il faut vérifier si la mise en service a été effectuée conformément au guide [Bornes de recharge OCPP](/ocpp-ladestationen).

- Si cela ne résout pas le problème, il doit être examiné avec le fabricant de la borne de recharge. N'hésitez pas à nous transmettre la solution, afin que nous puissions compléter le wiki en conséquence.

![Analyse des erreurs OCPP – Illustration 5](/img/stoerungsbehebung-ocpp-fehleranalyse/05.png)

### Statut Authorize invalide

Authorize \[2, "6b2ff788-524f-47e0-9a6d-7843ff2caccbb", "Authorize", &#123;"idTag":"xxxxx"&#125;\]

Authorize \[3, "6b2ff788-524f-47e0-9a6d-7843ff2caccbb", &#123;"idTagInfo":&#123;"status":"Invalid","expiryDate":"2025-12-10T06:26:06.234Z"&#125;&#125;\] 

Il ne s'agit pas directement d'une erreur, mais cela signifie que quelqu'un présente une carte RFID à la station.

Si « invalide » s'affiche après un Authorize, cela signifie

- soit que nous ne pouvons associer la carte RFID à aucun compte,

- soit que la carte RFID est bien associée à un compte, mais que ce compte ne peut pas recharger à cette station, car celle-ci est limitée ou privée.

- soit que la personne tente de recharger à une borne de recharge payante, mais n'a pas ajouté de carte de crédit valide à son compte.

![Analyse des erreurs OCPP – Illustration 6](/img/stoerungsbehebung-ocpp-fehleranalyse/06.png)

### Tariffs or currency not or invalidly configured

StatusNotification

\[2, "16927", "StatusNotification", &#123;"connectorId":1,"errorCode":"OtherError","info":"Tariffs or currency not or invalidly configured","status":"Faulted","vendorErrorCode":"214"&#125;\]
