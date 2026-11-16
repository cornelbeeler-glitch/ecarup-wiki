---
title: 'Puissance de recharge affichée de manière incorrecte'
slug: '/stoerungsbehebung/ladeleistung-falsch-angezeigt'
description: 'Cette section montre et décrit la marche à suivre lorsque la puissance d''une recharge active est affichée de manière incorrecte.'
sidebar_label: 'Puissance de recharge affichée de manière incorrecte'
---
Cette section montre et décrit la marche à suivre lorsque la puissance d'une recharge active est affichée de manière incorrecte.

Lorsque vous démarrez une recharge, la puissance de recharge s'affiche en direct. Si la puissance de recharge affichée sous Gestion des bornes de recharge (Ladestationen Verwaltung) n'est pas correcte, les attributs OCCP sont dans la plupart des cas incomplets.

Il faut donc les adapter et les modifier

Les attributs OCPP peuvent être adaptés et modifiés comme suit :

![Puissance de recharge affichée de manière incorrecte – illustration 1](/img/stoerungsbehebung-ladeleistung-falsch-angezeigt/01.png)

<div className="row">
<div className="col col--8">

Connectez-vous au portail eCarUp et cliquez sur « Maintenance » (« Wartung ») sur le côté gauche.
Cliquez ensuite sur « Actions » (« Aktionen »)

</div>
<div className="col col--4 text--center">

![Puissance de recharge affichée de manière incorrecte – illustration 2](/img/stoerungsbehebung-ladeleistung-falsch-angezeigt/02.png)

</div>
</div>

Sur le côté droit, cliquez sur les trois petits points à côté de la borne de recharge concernée.
Un menu déroulant devrait alors s'ouvrir, dans lequel vous cliquez sur « Change configuration ».

![Puissance de recharge affichée de manière incorrecte – illustration 3](/img/stoerungsbehebung-ladeleistung-falsch-angezeigt/03.png)

Saisissez ensuite « MeterValuesSampleData » dans le champ Key.
Puis, dans le champ Value : « Energy.Active.Import.Register,Power.Active.Import »

Vous pouvez ensuite cliquer sur « Set » et tout devrait de nouveau fonctionner.

![Puissance de recharge affichée de manière incorrecte – illustration 4](/img/stoerungsbehebung-ladeleistung-falsch-angezeigt/04.png)

Si vous n'avez pas trouvé de réponse à votre question ici, notre support se tient volontiers à votre disposition.

Support technique : 

- support@ecarup.com / +41 41 510 17 18

Support technique Allemagne :

- support@smartred.de / +49 (0) 7348 9870 510
