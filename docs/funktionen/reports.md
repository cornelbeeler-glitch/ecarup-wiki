---
title: 'Reports'
slug: '/funktionen/reports'
description: 'Für die Nutzung von Reports benötigst du eine eCarUp Premium Lizenz.'
sidebar_label: 'Reports'
---
Für die Nutzung von Reports benötigst du eine eCarUp Premium Lizenz.

[Videoanleitung Reports](#videoanleitung-reports)

[Funktionen](#funktionen)

[Erstellen von Reports](#erstellen-von-reports)

[Stationsreport](#stationsreport)

[Nutzerreports](#nutzerreports)

[Unterstützte Dateiformate](#unterstützte-dateiformate)

[Benutzer Report mit Preiskalkulation](#benutzer-report-mit-preiskalkulation)

[Stationsreport CSV (erweitert)](#stationsreport-csv-erweitert)

## Videoanleitung Reports

<Embed src="https://share.synthesia.io/embeds/videos/fd7eeb3e-5aeb-4453-80ca-223ec4f5f0ad" aspect="1.781" title="Reports" />

### Funktionen

- Verbrauch pro Ladestation über beliebigen Zeitraum auswerten

- Verbrauch pro Nutzer (sofern der Fahrer bekannt ist) über beliebigen Zeitraum auswerten

- Energie und Kosten ausweisen

- Reports in PDF, CSV oder erweitertem CSV

- Preis für kWh und Parkdauer inkl. MWST pro User selber konfigurieren


### Erstellen von Reports

Besuche [www.ecarup.com](https://www.ecarup.com/) und klicke oben rechts auf Login. Melde dich danach mit deinen Logindaten an. Du gelangst zur Stationsübersicht. Kontrolliere ob alle Ladepunkte, für welche du die Reports erzeugen willst, bereits in deinem Account installiert sind. 

### Stationsreport

Wähle dazu einen oder mehrere Ladepunkte an. Klicke danach unten links auf Erstellen. Im Pop-Up Fenster kannst du nun den Mehrwertsteuersatz und den gewünschten Zeitraum bestimmen. Danach wähle das gewünschte Format – zur Auswahl stehen derzeit PDF, CSV oder erweiterter CSV. Klicke dann auf den Button. Alle Ladevorgänge aller angewählten Stationen werden in chronologischer Reihenfolge ausgegeben. Du siehst von links nach rechts den Stationsnamen, das Startdatum, die Ladedauer in Sekunden, das Enddatum, eine anonymisierte User Nummer, den Energiebezug, den Preis für die Energie, die Parkzeit, den Preis für die Parkzeit und das Total. Beim Stationsreport (CSV-Erweitert) werden auch Spezial-User + zusätzliche Informationen (siehe beim Artikel Stationsreport CSV erweitert) ausgewiesen. Wichtig:

### Nutzerreports

Mit dem gleichen Vorgehen können auch Nutzerreports erstellt werden. Dieser zeigt die Verbrauchsdaten eines bestimmten Nutzers für einen oder mehrere Ladepunkte. Dies eignet sich insbesondere für Pool-Ladestationen, wo sich mehrere Nutzer mehrere eCarUp Stationen teilen. Wähle wiederum die gewünschten Ladepunkte aus und nimm die Einstellungen im Pop-Up Fenster vor. Der Nutzerreport kann nur für Fahrer-Accounts erstellt werden, welche du als «Speziellen Benutzer» für deine Stationen definiert hast. Mit dem Klick auf den PDF oder CSV Button werden nur die Verbrauchsdaten von diesem Account für alle gewählten Ladestationen ausgegeben (summiert). Alternativ kannauch für einen "gratis" User ein Preis kalkuliert werden. 

### Unterstützte Dateiformate

Ein erweiterter CSV-Export erlaubt die Verarbeitung der Daten in deiner eigenen Softwarelösung. Alternativ bietet das eCarUp System offene Schnittstellen für den automatisierten Datenaustausch (API, MSCONS, IS-E). Anleitung zur eCarUp API findest du hier: [API Version 1](/funktionen/ecarup-api)

## Benutzer Report mit Preiskalkulation

1.  Hinterlegte User können über einen bestimmten Zeitraum Reports erstellen. Hier wird der User mit dem vordefinierten Preis unbearbeitet im PDF oder CSV ausgewiesen. 

2.  Für gratis User kann nachträglich ein Report mit Preis und Währung erstellt werden. Hier wird der ursprüngliche Preis überschrieben und mit dem Preis , den du definierst, gerechnet.


Beispiel: Bei Mitarbeiter, die gratis laden, kann nachträglich ein Preis kalkuliert werden. Das Inkasso bleibt aber beim Stationsbetreiber. 

Wichtig, aktuell wird der kalkulierte Preis auf dem PDF  & CSV nicht ausgewiesen. 

![Reports – Abbildung 1](/img/funktionen-reports/01.png)

## Beispiele:

### Stations-Report in PDF

<Embed src="https://drive.google.com/file/d/1h6JtWuyjq3Y1vy69zqWrFGFOtr8C3fJd/preview" aspect="1.350" title="Drive, eCarUp Station Report.pdf" />

eCarUp Station Report.pdf

### User-Report in PDF

@@EMBED|url|https://drive.google.com/file/d/1hw1NTbWFySg5uk_KcQLqwZpKIcOzAZr_/preview|1.350|Drive, eCarUp report_user_demo@ecarup.com_2023-09-20.pdf@@

eCarUp report\_user\_demo@ecarup.com\_2023-09-20.pdf

## Stationsreport CSV (erweitert)

Im erweiterten Stationsreport CSV befinden sich folgende informationen:



- Station name: Name der Ladestation mit Serienummer

- Start date: Startzeitpunkt der Ladung 

- Durations: Dauer des Ladevorgangs in Sekunden

- End date: Ende des Ladevorgangs 

- User: Hier wird anzegeigt wer an der Station geladen hat.

    - Eine E-Mail wird angezeigt, wenn bei der Station ein Limitierter User hinterlegt ist. Dies kann über die [Erw. Nutzerverwaltung](/funktionen/erw-nutzerverwaltung) gemacht werden oder direkt auf der Station unter "Station / Benutzer Definieren"

    - Kryptische Zeichen (z.B LshD4G0WaxPMH++hv55o) werden angezeigt wenn ein nicht bekannter User an einer öffentlichen Ladestation geladen hat.

- Provider: Anzeige womit geladen wird.

    - Unknown: Kommt für alle Transaktionen vor dem 06.05.2024

    - Ecarup: Wenn die Ladung mit einem eCarUp Konto gemacht wurden.

    - Hubject: Wenn die Ladung über ein Hubject (Roaming) Anbieter gestartet wurde.

- Mode: Wie die Authentifizierung stattgefunden hat

    - Car ID, aktuell nur in Kombination mit der [Pico](/smart-me-pico) Ladestation.

    - Cloud (Aktivierung über APP, Webportal, Instant Payment, API oder Automatischer Ladevorgang)

    - RFID- Karte

    - Unknown (vor der Einführung des Updates, 06.05.2024)

- Identifier: Die nummer der RFID Karte, wird nur angezeigt, sofern die Ladung über die RFID gestartet wurde. In allen anderen fällen ist es leer.

- Identifier Name: Die Name der RFID Karte, sofern die Ladung über die RFID gestartet wurde. In allen anderen fällen ist es leer.

- Payment Status: Bezahlstatus, Paid = bezahlt, notCharged = Betrag zu klein, Failed = beim Kunden kann das Geld nicht eingezogen werden (lesen Sie unter folgendem [Link](/fahrer/fehlgeschlagene-zahlung) mehr dazu) , Unknown = kommt für alle Transaktionen vor dem 13.06.2024

- Energy price ( CHF )  Der Preis welcher für den Strom definiert wurde

- Parking price (CHF) Der Preis für den Parkplatz 

- Total (CHF oder EUR) Ist das Total, welches der Stationsbesitzter erhält. (90%) Erfahre hier mehr über die [Abrechnung.](/stationsbetreiber/abrechnen-auszahlen) 


Wichtig, alle zusätzlichen Informationen (E-Mail, ID-Tag und Name der RFID) werden nur aufgelistet, sofern der User beim Statiosbetreiber bekannt und hinterlegt ist. 

### Stations-Report erweitert im CSV

![Reports – Abbildung 2](/img/funktionen-reports/02.png)

## Hinweis:

### Hoppla

Es ist etwas Unerwartetes passiert. Bitte versuchen Sie es erneut.

- Dies kann beim Reporttyp Benutzer vorkommen. Dabei wird ein Benutzer gewählt, welcher im gewählten Zeitraum keinen Ladevorgang hatte.




![Reports – Abbildung 3](/img/funktionen-reports/03.png)
