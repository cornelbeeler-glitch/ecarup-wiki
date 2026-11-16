---
title: 'Maintenance'
slug: '/funktionen/wartung'
description: 'Pour utiliser la fonction de maintenance, vous avez besoin d''une licence eCarUp Premium.'
sidebar_label: 'Maintenance'
---
Pour utiliser la fonction de maintenance, vous avez besoin d'une licence eCarUp Premium.

[Bornes de recharge compatibles](#bornes-de-recharge-compatibles)

[Maintenance](#maintenance)

[Exemples pour Get et Change Configuration](#exemples-pour-get-et-change-configuration)

[MeterValueSampleInterval](#metervaluesampleinterval)

[MeterValuesSampledData](#metervaluessampleddata)

[UnlockConnectorOnEVSideDisconnect](#unlockconnectoronevsidedisconnect)

La maintenance permet d'effectuer des configurations avancées et des diagnostics sur les bornes OCPP. Elle sert à détecter et à corriger les dérangements des bornes OCPP.

<Video src="t3Z3fxK62Ak" title="Vidéo YouTube, maintenance des bornes de recharge OCPP – dans le portail web eCarUp" />

### Bornes de recharge compatibles

La fonction de maintenance est compatible avec toutes les [bornes de recharge OCPP](/ocpp-ladestationen) du système eCarUp.

### Maintenance

Dans l'onglet « Maintenance » (Wartung), une borne OCPP peut être diagnostiquée, paramétrée et configurée de manière avancée. Cela permet d'une part de détecter les dérangements et d'autre part de les corriger activement et directement à distance (veuillez noter que la borne doit également prendre en charge ces commandes).

- Consultation des [logs OCPP](/funktionen/wartung/ocpp-logs)


- Unlock Connector : le câble est déverrouillé sur la borne

- Reset Device : le logiciel de la borne est redémarré. ATTENTION : les sessions de recharge actives sont interrompues

- Get Configuration : la configuration actuelle de la borne est affichée

- Change Configuration : la configuration peut être modifiée

- Get Diagnostics : un rapport d'erreurs actuel est généré (serveur externe nécessaire)

- Firmware : la version actuelle du firmware est affichée (serveur externe nécessaire)


![Maintenance – illustration 1](/img/funktionen-wartung/01.png)

## Exemples pour Get et Change Configuration

Important : pour que cela fonctionne, la borne doit prendre en charge les commandes.

### MeterValueSampleInterval

Pour que la puissance de recharge puisse être affichée dans l'app, nous avons besoin des MeterValues à intervalles réguliers. 

L'intervalle de transmission des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30-60s. 



Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur) 




![Maintenance – illustration 2](/img/funktionen-wartung/02.png)

![Maintenance – illustration 3](/img/funktionen-wartung/03.png)

### MeterValuesSampledData

Pour que la puissance de recharge correcte soit aussi affichée dans l'app, nous avons également besoin de la valeur Power.Active.Import dans les MeterValues.

La requête auprès d'une borne de recharge peut se présenter comme suit :

![Maintenance – illustration 4](/img/funktionen-wartung/04.png)

Lors de la requête, nous avons constaté que la valeur « Power.Active.Import » manque. 

Nous ajoutons maintenant la valeur manquante dans Change Configuration, comme dans l'exemple ci-dessous, puis cliquons sur Set. 

![Maintenance – illustration 5](/img/funktionen-wartung/05.png)

### UnlockConnectorOnEVSideDisconnect

Souhaitez-vous que le câble reste verrouillé en permanence sur la borne de recharge ?

La valeur suivante peut être interrogée :

![Maintenance – illustration 6](/img/funktionen-wartung/06.png)

Branchez le câble sur la borne et réglez la valeur sur false via ChangeConfiguration. 

![Maintenance – illustration 7](/img/funktionen-wartung/07.png)

[Accédez ici à l'analyse et à l'aide concernant les logs OCPP](/funktionen/wartung/ocpp-logs).
