---
title: 'Ladeleistung falsch angezeigt'
slug: '/stoerungsbehebung/ladeleistung-falsch-angezeigt'
description: 'In diesem Abschnitt wird gezeigt und beschrieben, was gemacht werden soll, wenn die Leistung einer aktiven Ladung falsch angezeigt wird.'
sidebar_label: 'Ladeleistung falsch angezeigt'
---
In diesem Abschnitt wird gezeigt und beschrieben, was gemacht werden soll, wenn die Leistung einer aktiven Ladung falsch angezeigt wird.

Wenn man eine Ladung startet, wird die Ladeleistung live angezeigt. Falls die angezeigte Ladeleistung unter Ladestationen Verwaltung nicht korrekt sein sollte, sind in den meisten Fällen die OCCP-Attribute unvollständeig.

Somit müssten diese angepasst und geändert werden

Die OCPP-Attribute können wie folgt angepasst und geändert werden:

![Ladeleistung falsch angezeigt – Abbildung 1](/img/stoerungsbehebung-ladeleistung-falsch-angezeigt/01.png)

<div className="row">
<div className="col col--8">

Logge dich ins eCarUp Portal ein und klicke auf "Wartung" auf der linken Seite.
Klicke im Anschluss auf "Aktionen"

</div>
<div className="col col--4 text--center">

![Ladeleistung falsch angezeigt – Abbildung 2](/img/stoerungsbehebung-ladeleistung-falsch-angezeigt/02.png)

</div>
</div>

Klicke, auf der rechten Seite, auf die drei kleinen Punkte neben der betroffenen Ladestation.
Danach sollte sich ein dropdown-Menü öffnen, bei welchem du auf "Change configuration" klickst.

![Ladeleistung falsch angezeigt – Abbildung 3](/img/stoerungsbehebung-ladeleistung-falsch-angezeigt/03.png)

Danach gibst du beim Key "MeterValuesSampleData" ein.
Im Value dann anschliessend: "Energy.Active.Import.Register,Power.Active.Import"

Danach kannst du auf "Set" klicken und dies sollte im Anschluss dann wieder funktionieren.

![Ladeleistung falsch angezeigt – Abbildung 4](/img/stoerungsbehebung-ladeleistung-falsch-angezeigt/04.png)

Falls du hier keine Antwort auf deine Frage finden konntest, steht dir unser Support gerne zur Verfügung.

Technischer Support: 

- support@ecarup.com / +41 41 510 17 18

Technischer Support Deutschland:

- support@smartred.de / +49 (0) 7348 9870 510
