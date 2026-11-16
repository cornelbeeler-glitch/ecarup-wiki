---
title: 'Potenza di ricarica visualizzata in modo errato'
slug: '/stoerungsbehebung/ladeleistung-falsch-angezeigt'
description: 'Questa sezione mostra e descrive cosa fare se la potenza di una ricarica attiva viene visualizzata in modo errato.'
sidebar_label: 'Potenza di ricarica visualizzata in modo errato'
---
Questa sezione mostra e descrive cosa fare se la potenza di una ricarica attiva viene visualizzata in modo errato.

Quando si avvia una ricarica, la potenza di ricarica viene visualizzata in tempo reale. Se la potenza di ricarica visualizzata in Gestione stazioni di ricarica (Ladestationen Verwaltung) non è corretta, nella maggior parte dei casi gli attributi OCPP sono incompleti.

Occorre quindi adattarli e modificarli

Gli attributi OCPP possono essere adattati e modificati come segue:

![Potenza di ricarica visualizzata in modo errato – Figura 1](/img/stoerungsbehebung-ladeleistung-falsch-angezeigt/01.png)

<div className="row">
<div className="col col--8">

Acceda al portale eCarUp e clicchi su "Manutenzione" ("Wartung") sul lato sinistro.
Clicchi poi su "Azioni" ("Aktionen")

</div>
<div className="col col--4 text--center">

![Potenza di ricarica visualizzata in modo errato – Figura 2](/img/stoerungsbehebung-ladeleistung-falsch-angezeigt/02.png)

</div>
</div>

Sul lato destro, clicchi sui tre puntini accanto alla stazione di ricarica interessata.
Si dovrebbe quindi aprire un menu a tendina, nel quale clicca su "Change configuration".

![Potenza di ricarica visualizzata in modo errato – Figura 3](/img/stoerungsbehebung-ladeleistung-falsch-angezeigt/03.png)

Inserisca poi nel campo Key "MeterValuesSampleData".
Nel campo Value inserisca quindi: "Energy.Active.Import.Register,Power.Active.Import"

Può quindi cliccare su "Set" e in seguito tutto dovrebbe funzionare di nuovo.

![Potenza di ricarica visualizzata in modo errato – Figura 4](/img/stoerungsbehebung-ladeleistung-falsch-angezeigt/04.png)

Se qui non ha trovato una risposta alla Sua domanda, il nostro supporto è a Sua disposizione.

Supporto tecnico: 

- support@ecarup.com / +41 41 510 17 18

Supporto tecnico Germania:

- support@smartred.de / +49 (0) 7348 9870 510
