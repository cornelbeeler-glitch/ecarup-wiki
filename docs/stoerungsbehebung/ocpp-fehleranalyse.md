---
title: 'OCPP Fehleranalyse'
slug: '/stoerungsbehebung/ocpp-fehleranalyse'
description: 'Hier werden verschiedene Fehler beschrieben, welche mit einem OCPP-Log ausgelesen und analysiert werden können.'
sidebar_label: 'OCPP Fehleranalyse'
---
Hier werden verschiedene Fehler beschrieben, welche mit einem OCPP-Log ausgelesen und analysiert werden können.

## OCPP = Open Charge Point Protocol

OCPP ist ein universelles Anwendungsprotokoll, das die Kommunikation zwischen Ladestationen für Elektrofahrzeuge und einem zentralen Managementsystem standardisiert.

eCarUp unterstützt aktuell die Version 1.6j

⚠️ Wichtig: Die Pico Ladestation unterstützt das OCPP Protokoll nicht und hat eigene eingeschränktere Logs.

## Generieren eines OCPP-Logs der Ladestation

<div className="row">
<div className="col col--8">

Gehe auf der linken Seite im Portal auf den Punkt "Wartung" im Anschluss auf "Aktionen."

</div>
<div className="col col--4 text--center">

![OCPP Fehleranalyse – Abbildung 1](/img/stoerungsbehebung-ocpp-fehleranalyse/01.png)

</div>
</div>

Danach gehst du auf die drei kleinen Punkte, welche sich auf der rechten Seite der betroffenen Ladestation befinden.

Danach sollte ein Menü aufgehen, bei welchem du auf "Logs" klickst.

![OCPP Fehleranalyse – Abbildung 2](/img/stoerungsbehebung-ocpp-fehleranalyse/02.png)

Ein Menü sollte sich öffnen, bei dem du nach dem Start- wie auch dem Enddatum filtern kannst. Am besten nimmst du 1 Tag im vorhinein und 1 Tag im nachhinein, sodass auch alle Informationen abgebildet werden. Wenn der Ladungsversuch also am 05.05.2025 gemacht wurde sollte man das Startdatum 04.05.2025 und das Enddatum 06.05.2025 wählen (ausser der Versuch wurde am aktuellem Datum getätigt)

Danach sollten unten die Logs erscheinen. Falls, wie im Beispiel aufgezeigt, keine Logs verfügbar sind, könnte es sein, dass die Station uns keine Logs schickt und somit nicht mit eCarUp kommuniziert. Somit liegt der Fehler meistens auf der Seite der Ladestation oder der Konfiguration.

Wenn Log-Einträge erscheinen muss man beachten, dass diese auch das angegebene Datum aufweisen. Aufgepasst bei der Uhrzeit handelt es sich um UTC somit ist die Uhrzeit auf den Logs, falls die Ladestation sich in Europa befindet, um eine oder zwei Stunden verschoben.

Wenn man alles richtig eingestellt und kontrolliert hat, kann man auf "CSV exportieren" klicken und somit ein CSV mit den Logs herunterladen.

![OCPP Fehleranalyse – Abbildung 3](/img/stoerungsbehebung-ocpp-fehleranalyse/03.png)

![OCPP Fehleranalyse – Abbildung 4](/img/stoerungsbehebung-ocpp-fehleranalyse/04.png)

⚠️ Wichtig: Um ein Log zu generieren braucht man eine eCarUp-Premium Lizenz

### Tag ID ist "" &lt;null>

Request In StartTransaction \[2,"33736216","StartTransaction",&#123;"connectorId":1,"meterStart":9664049,"idTag":"","timestamp":"2025-08-14T11:40:44Z"&#125;\]

Wenn uns die Station ein "idTag":"" sendet

- Muss geprüft werden ob die Anleitung für die Inbetriebnahme gemäss [OCPP Ladestationen](/ocpp-ladestationen) erfolgt ist.

- Wenn das Problem dadurch nicht gelöst wird, muss es gemeinsam mit dem Hersteller der Ladestation untersucht werden. Gerne kannst du uns die Lösung zustellen, damit wir das Wiki entsprechend ergänzen können.

![OCPP Fehleranalyse – Abbildung 5](/img/stoerungsbehebung-ocpp-fehleranalyse/05.png)

### Authorize status invalide

Authorize \[2, "6b2ff788-524f-47e0-9a6d-7843ff2caccbb", "Authorize", &#123;"idTag":"xxxxx"&#125;\]

Authorize \[3, "6b2ff788-524f-47e0-9a6d-7843ff2caccbb", &#123;"idTagInfo":&#123;"status":"Invalid","expiryDate":"2025-12-10T06:26:06.234Z"&#125;&#125;\] 

Es ist nicht direkt ein Fehler, sonder es bedeutet, dass jemand eine RFID-Karte an der Station vorlegt.

Wenn „invalide” nach eine Authorize angezeigt wird, bedeutet dies

- entweder, dass wir die RFID-Karte keinem Konto zuordnen können,

- oder dass die RFID-Karte zwar einem Konto zugeordnet ist, dieses Konto jedoch nicht an der Station aufgeladen werden kann, da es begrenzt oder privat ist.

- oder dass die Person versucht, an einer kostenpflichtigen Ladestation aufzuladen, aber keine gültige Kreditkarte zu ihrem Konto hinzugefügt hat.

![OCPP Fehleranalyse – Abbildung 6](/img/stoerungsbehebung-ocpp-fehleranalyse/06.png)

### Tariffs or currency not or invalidly configured

StatusNotification

\[2, "16927", "StatusNotification", &#123;"connectorId":1,"errorCode":"OtherError","info":"Tariffs or currency not or invalidly configured","status":"Faulted","vendorErrorCode":"214"&#125;\]
