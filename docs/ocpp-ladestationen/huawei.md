---
title: 'Huawei'
slug: '/ocpp-ladestationen/huawei'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Huawei'
---
<div className="row">
<div className="col col--6">

## Backend Integrationsanleitung

Huawei Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--6 text--center">

![Huawei – Abbildung 1](/img/ocpp-ladestationen-huawei/01.png)

</div>
</div>

[Fusion Charge](https://digitalpower.huawei.com/en/smart-charging-network/ultra-fast-charging)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung der Fusion Charge DC

### Vorbereitende Schritte für die Integration der Fusion Charge DC

1.  Bitte prüfe zuerst die mitgelieferte Anleitung, über welchen Weg du dich auf die Station verbinden kannst. 

2.  Installiere auf deinem Handy die Antohill  App von Huawei oder gehe über den Browser.

### ⚠️ Wichtig

1.  Die Station wurde mit der Firmware Version V100R025C10SPC060 erfolgreich getestet

### In der App

<div className="row">
<div className="col col--8">

1.  Gehe zu Konfiguration (Maintenance), dann Business Plattform Parameters

2.  Füge bei Busines Platform Domain Name "[www.ecarup.com](http://www.ecarup.com)" ein.

3.  Bei Acces Path "/api/Ocpp16/xxxxxxxxx (aus deinem Account) /Seriennummer

4.  Speichern (Submit).

</div>
<div className="col col--4 text--center">

![Huawei – Abbildung 2](/img/ocpp-ladestationen-huawei/02.png)

</div>
</div>

## Webportal

![Huawei – Abbildung 3](/img/ocpp-ladestationen-huawei/03.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Huawei – Abbildung 4](/img/ocpp-ladestationen-huawei/04.png)

![Huawei – Abbildung 5](/img/ocpp-ladestationen-huawei/05.png)
