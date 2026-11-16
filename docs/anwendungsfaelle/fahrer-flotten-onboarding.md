---
title: 'Fahrer & Flotten Onboarding'
slug: '/anwendungsfaelle/fahrer-flotten-onboarding'
description: 'Ein effizientes Onboarding von Fahrern und Flotten ist ein zentraler Schritt für die erfolgreiche Nutzung des eCarUp-Systems.'
sidebar_label: 'Fahrer & Flotten Onboarding'
---

## Einleitung

Ein effizientes Onboarding von Fahrern und Flotten ist ein zentraler Schritt für die erfolgreiche Nutzung des eCarUp-Systems. Dieser Prozess stellt sicher, dass sowohl einzelne Fahrer als auch grosse Fahrzeugflotten schnell und einfach auf die Ladeinfrastruktur zugreifen können. 

- Account-Struktur und Auswertung: 

    - Um kostenpflichtige Ladevorgänge präzise nach Fahrer und Fahrzeug auszuwerten, ist es unerlässlich, separate Accounts für jeden Fahrer einzurichten.  

    - Um gratis Ladungen innerhalb der Firma über eine Stationsbetreiberkonto auf dem du zugriff hast, ist es auch möglich den Fahrer eine RIFD von einem zentralen Fahrer/Flotten Konto auszustellen. Wir raten davon ab, dies im Stationsbetreiber Konto zu machen.

- Kontoverwaltung: Wir empfehlen, die Kontoregistrierung den Fahrern selbst zu überlassen. Wenn jedoch ein Flotten-Konto (wie im folgendem Abschnitt beschrieben) eingerichtet wird, ist eine zentrale Verwaltung durch einen Administrator sinnvoll.  

- RFID-Karten: Karten für Fahrer können einfach (über die [App](/fahrer/ecarup-app)) oder zeitsparend über eine Massenfunktion im Webportal hochgeladen werden. 

- Aktivierung und EMP-Dienstleistung: Bitte beachte, dass eCarUp keine eigenen EMP-Dienstleistungen (E-Mobility Provider) anbietet. Das heisst, du kannst nicht mit deiner RFID-Karte Move, Gofast etc. -Stationen freischalten. Die RFID-Karten können ausschliesslich an allen eCarUp-Ladestationen genutzt werden. 

- ⚠️Wichtig: Bitte beachte, dass RFID-Karten an sich nicht sicher sind, da die Nummer auf der RFID-Karte nicht eindeutig ist kann jemand dieselbe Nummer haben wie du und somit auf deine Koste eine Ladung starten. Wir übernehmen keine Haftung für Missbrauch deiner RFID-Nummer. Die Nutzung erfolgt auf eigenes Risiko. 

## Fahrer Account inkl. 1 oder mehreren RFID-Karten

### Rolle Fahrer

App

- In der App kann der Fahrer seine RFID-Karten selbst einpflegen. Hier gelangst du zur entsprechenden Anleitung. [App](/fahrer/rfid-nfc-tags-carid)

### Rolle Stationsbetreiber

<div className="row">
<div className="col col--8">

Webportal

- Als Stationsbetreiber kannst du den Fahrer entweder über den einzelnen Connector oder über die erweiterte Benutzerverwaltung im Webportal hinzufügen. Weitere Informationen findest du hier: [Link](/funktionen/erw-nutzerverwaltung)

</div>
<div className="col col--4 text--center">

![Fahrer & Flotten Onboarding – Abbildung 1](/img/anwendungsfaelle-fahrer-flotten-onboarding/01.png)

</div>
</div>

## Flotten Account mit mehreren RFID-Karten die an internen Stationen laden

### Rolle Flotten-Verantwortlicher

- Erstelle eine funktionsfähige E-Mail Adresse z.B. flottenfahrzeuge@ecarup.com

### Webportal

- Logge dich mit gerade eben erstellen Account z.B. flottenfahrzeuge@ecarup.com imWebportal ein.

- Unter Fahrer -> RFID-Karten -> die RFID-Karte, kann manuell oder via CSV Datei , die RFID-Token inkl. Name, hochgeladen werden. 

![Fahrer & Flotten Onboarding – Abbildung 2](/img/anwendungsfaelle-fahrer-flotten-onboarding/02.png)

### Beispiel:

1.Fahrer Account und es werden mehrer RFID-Karten an untersschiedlichen Fahrzeugen zugewiesen.

Das CSV für den Upload kann wie folgt aussehen:

Spalte A: Karten Name

Spalte B: RFID-Token

![Fahrer & Flotten Onboarding – Abbildung 3](/img/anwendungsfaelle-fahrer-flotten-onboarding/03.png)

![Fahrer & Flotten Onboarding – Abbildung 4](/img/anwendungsfaelle-fahrer-flotten-onboarding/04.png)

### Auswertung Stationsbesitzer Account mittels Reporting-Funktion

- Mehr Infos zur Report Funktion findest du hier: [Link](/funktionen/reports)

- Auf dem CSV findest du unter anderen die E-Mail vom Fahrerekonto, die verwendetet RFID und den Verbrauch in kWh.

![Fahrer & Flotten Onboarding – Abbildung 5](/img/anwendungsfaelle-fahrer-flotten-onboarding/05.png)

## Alias E-Mail Adressen schaffen Abhilfe beim erstellen von mehreren eCarup Accounts.

Eine Alias-E-Mail-Adresse ist im Grunde ein Spitzname oder eine alternative Bezeichnung für Ihr tatsächliches, primäres E-Mail-Konto. Sie können E-Mails unter dieser Alias-Adresse empfangen, ohne dass die Absender Ihre eigentliche E-Mail-Adresse kennen. Die Nachrichten, die an den Alias gesendet werden, landen automatisch in Ihrem normalen Posteingang. 

Beispiel: Bei Gmail und Outlook funktioniert dies wie folgt:

- Ursprüngliche E-Mail: max.mustermann@ecarup.com

- Alias E-Mail: max.mustermann+auto123@ecarup.com
