---
title: 'Charging power displayed incorrectly'
slug: '/stoerungsbehebung/ladeleistung-falsch-angezeigt'
description: 'This section shows and describes what to do if the power of an active charging session is displayed incorrectly.'
sidebar_label: 'Charging power displayed incorrectly'
---
This section shows and describes what to do if the power of an active charging session is displayed incorrectly.

When you start a charging session, the charging power is displayed live. If the charging power shown under Charging station management ("Ladestationen Verwaltung") is not correct, in most cases the OCCP attributes are incomplete.

These therefore need to be adjusted and changed

The OCPP attributes can be adjusted and changed as follows:

![Charging power displayed incorrectly – Figure 1](/img/stoerungsbehebung-ladeleistung-falsch-angezeigt/01.png)

<div className="row">
<div className="col col--8">

Log in to the eCarUp portal and click "Maintenance" ("Wartung") on the left-hand side.
Then click "Actions" ("Aktionen")

</div>
<div className="col col--4 text--center">

![Charging power displayed incorrectly – Figure 2](/img/stoerungsbehebung-ladeleistung-falsch-angezeigt/02.png)

</div>
</div>

On the right-hand side, click the three small dots next to the affected charging station.
A drop-down menu should then open, in which you click "Change configuration".

![Charging power displayed incorrectly – Figure 3](/img/stoerungsbehebung-ladeleistung-falsch-angezeigt/03.png)

Then enter "MeterValuesSampleData" as the Key.
Then in the Value: "Energy.Active.Import.Register,Power.Active.Import"

You can then click "Set", and it should work again afterwards.

![Charging power displayed incorrectly – Figure 4](/img/stoerungsbehebung-ladeleistung-falsch-angezeigt/04.png)

If you could not find an answer to your question here, our support team will be happy to help.

Technical support: 

- support@ecarup.com / +41 41 510 17 18

Technical support Germany:

- support@smartred.de / +49 (0) 7348 9870 510
