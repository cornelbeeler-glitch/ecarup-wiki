---
title: 'Laden Zuhause mit 15 Minuten Import'
slug: '/anwendungsfaelle/privat-billing'
description: 'Videoanleitung: Abrechnung von E-Ladestationen im smart-me Billing'
sidebar_label: 'Privat Billing'
---

<Video src="Mi6Ru4lhTiw" title="YouTube Video, Abrechnung von E-Ladestationen" />

Videoanleitung: Abrechnung von E-Ladestationen im smart-me Billing

## 1\. Allgemeine Informationen

Im folgenden Artikel wird eine Standardkonfiguration für das  Laden zuhause mit eCarUp/smart-me beschrieben (zum Beispiel für das MFH/STWEG/MEG).

Der Vorteil dieser Variante liegt darin, dass die Daten direkt von der Station (und ohne zusätzlich Hardware) in 15 Minuten\-Intervallen Daten von der Station in die smart-me Plattform importiert werden können. Mit dieser Datenqualität ist danach mehrtariffähiges Abrechnen wie z.B. Hoch- und Niedertarif aber auch ZEV Abrechnungen inklusive Solartarif möglich. 

Diese Art der Abrechnung ist aktuell nur mit den folgenden Stationsherstellern möglich, da diese einen 15 Minuten Datenimport erlauben:

[Pico](/smart-me-pico)

[easee](/ocpp-ladestationen/easee)

[Zaptec](/ocpp-ladestationen/zaptec)

Die Rechnungen werden danach im smart-me Portal mithilfe von [smart-me Billing](https://wiki.smart-me.com/konfiguration/billing) automatisch erstellt und können an die Bewohner versandt werden.

Mit den unten beschriebenen Einstellungen kann der Anwendungsfall "Laden zuhause mit 15-Minuten Import " auf smart-me/eCarUp konfiguriert werden. Der Zielzustand/die Vorteile sind folgendermassen:

- Stationen sind nicht öffentlich ersichtlich (nur für eingeladene Spezialuser)

- Fahrer können direkt über die App oder RFID-Karte laden (kostenpflichtig)

- Einfaches "Onboarding" für die Fahrer

- Preise müssen nur 1x im Jahr angepasst werden (Massenmutation)

- Als extra kann auch ein Account für kostenloses Laden erstellt werden (z.B. für den Hauswart)

Eine [eCarUp Premium-Lizenz](https://web.ecarup.com/preise-ladestationen-backend/) ist für diesen Anwendungsfall Voraussetzung

## 2\. 15-Minuten Datenimport zu smart-me einrichten

In einem ersten Schritt muss für die gewünschten Stationen der Datenimport zum richtigen smart-me Account aufgesetzt werden . Eine Anleitung dazu ist in einem separaten [Wiki Artikel](/funktionen/15-minuten-datenimport) beschrieben.

## 3\. smart-me Billing konfigurieren

Sind die Ladestationen als Messpunkte in smart-me erstellt, kann die Abrechnung aufgesetzt werden.

Die Konfiguration und das Aufsetzen von [smart-me Billing](https://wiki.smart-me.com/konfiguration/billing) ist im smart-me Wiki ausführlich beschrieben. Wende dich bei Bedarf an einen von unseren zahlreichen Partnern von [smart-me](https://web.smart-me.com/projektpartner/) oder [eCarUp](https://web.ecarup.com/partner-de/) für die Konfiguration.

Besteht bereits ein ZEV mit smart-me, können die Stationen variabel in der Rechnung aufgeführt werden.

### Ladestationen als separate Abrechnungsposition aufführen

- Der Verbrauch der Ladestation wird neben dem Verbrauch der Wohnung in einer separaten Rechnung ausgewiesen.

- Insbesondere wenn die Kosten für die Ladestation in einer separaten Rechnung ausgewiesen werden müssen (z.B. für die Spesenabrechnung oder bei Fremdvermietung), ist diese Variante besser.

- Es können optional auch noch weitere Positionen (z.B. für die Ladestationsmiete) aufgeführt und verrechnet werden.

![Laden Zuhause mit 15 Minuten Import – Abbildung 1](/img/anwendungsfaelle-privat-billing/01.png)

### Ladestationen auf die Wohnungseinheit zuordnen

- Der Verbrauch für die Wohnung und der Ladestation sind in einer Rechnung dargestellt.

- Ladestationen werden als zusätzlicher "Zähler" direkt im Wohnungsverbrauch eingerechnet. Es kann keine einwandfreie Zuordnung des Verbrauchs auf die einzelnen Positionen gemacht werden.

![Laden Zuhause mit 15 Minuten Import – Abbildung 2](/img/anwendungsfaelle-privat-billing/02.png)

Falls die Stationen nur über smart-me Billing abgerechnet werden sollen, ist die Konfiguration hier abgeschlossen. In diesem Fall muss die Freigabe /Authentifizierung lokal über das jeweilige System des Herstellers gelöst werden.

Im Folgenden wird beschrieben, wie die Stationen zusätzlich in das eCarUp Backend integriert werden können:

WICHITIG:  Bitte verwende für die unten beschriebene Anbindung an das eCarUp Backend [einen anderen Account, sowohl als auch für die Anbindung mit dem 15-Minuten Import](/funktionen/15-minuten-datenimport). Ansonsten werden die Stationen doppelt angelegt und die gelösten Lizenzen reichen nicht aus.

Die Einbindung in eCarUp bringt einige Vorteile mit sich:

- Unkompliziertes Monitoring der Ladepunkte im eCarUp Dashboard und in den Reports

- Stationen müssen über eCarUp authentifiziert und können für die richtigen Nutzer freigegeben werden

- Fahrer sehen den eigenen Ladeverlauf im App oder im Webportal

- Flexible RFID/NFC Handhabung für die Authentifizierung  an den Stationen

- Besucherstationen werden unkompliziert über die Kreditkarte abgerechnet 

- Keine zusätzlichen Kosten

## 4\. Ladestationen mit dem eCarUp Backend verbinden

Zusätzlich müssen die Stationen mit dem eCarUp Backend verbunden werden. Die Einbindung der mit diesem Modell unterstützten Stationsmodelle sind direkt bei diesen beschrieben:

[Pico](/smart-me-pico)

[easee](/ocpp-ladestationen/easee)

[Zaptec](/ocpp-ladestationen/zaptec)

Eine [Schritt für Schritt Anleitung zur Einbindung der Stationen](/stationsbetreiber/inbetriebnahme-ocpp-station) ist ebenfalls aufgeschaltet.

Da keine Verrechnung über die Kreditkarte stattfindet, muss der Preis für die Stationen in eCarUp auf 0.- pro kWh und 0.- pro h gestellt werden. Die Ladetransaktionen werden als Verbrauch erfasst und danach per Rechnung anhand der im Billing eingerichteten Tarifstruktur eingefordert.

## 5\. Ladestationen einrichten

Wenn die Ladestationen mit eCarUp verbunden wurden, erscheinen diese im eCarUp Account im Dashboard und in der Stationsverwaltung.

![Laden Zuhause mit 15 Minuten Import – Abbildung 3](/img/anwendungsfaelle-privat-billing/03.png)

### Grundlegende Einstellungen

Danach werden die Stationen mit Klick auf "Stationen" und dann "Stationsverwaltung" eingerichtet:

- Name und Beschreibung der Station ändern

- Stationen löschen

- Standorte setzen

- Anschlüsse bearbeiten (falls mehrere)

- Anschlusstypen definieren (z.B. Typ 2,CSS oder Chademo)

- max.  Energie definieren (z.B. 22 kW)

- Zugriff definieren (öffentlich, limitiert und privat)

Öffentlich = alle User / Limitiert = Stationsbesitzer und Spezial\-User

Privat = NUR Stationsbesitzer bzw. Account in welchem die Stationen installiert sind

- Preise für Energie und Zeit setzen

- reservierte Zeiten definieren

- Station aus dem Webportal aktivieren

Alle [Einstellungen für Stationsbesitzer](/stationsbetreiber/webportal) sind in einem Wiki Artikel zusammengefasst.

### Stationsgruppen erstellen

Wichtig für die Verwaltung von der Ladestationen ist die Organisation in Stationsgruppen (z.B. nach Standorten oder nach Wohnblöcken):

![Laden Zuhause mit 15 Minuten Import – Abbildung 4](/img/anwendungsfaelle-privat-billing/04.png)

Fertig konfiguriert, kann das so aussehen:

![Laden Zuhause mit 15 Minuten Import – Abbildung 5](/img/anwendungsfaelle-privat-billing/05.png)

### Spezial User erstellen

Damit die Stationen nur von den berechtigten Fahrern/Endkunden freigeschaltet werden, müssen die Berechtigungen entsprechend eingestellt werden. Dafür gibt es zwei Möglichkeiten:

1. Nutzergruppen pflegen

In dieser Variante wird eine Nutzergruppe erstellt und auf die Stationen zugordnet. Somit kann bei einem Mieterwechsel oder bei neuen zusätzlichen Fahrern unkompliziert ein neues Mitglied in der Nutzergruppen hinzugefügt oder entfernt werden. Dies macht den administrativen Aufwand kleiner.

- Die Stationen werden auf den Status "limitiert" gestellt

- Es wird eine Nutzergruppe mit allen berechtigten Fahrern erstellt

- Die Nutzergruppe wird der Stationsgruppe zugeordnet

- Es wird ein Standort für die Stationen hinterlegt

![Laden Zuhause mit 15 Minuten Import – Abbildung 6](/img/anwendungsfaelle-privat-billing/06.png)

![Laden Zuhause mit 15 Minuten Import – Abbildung 7](/img/anwendungsfaelle-privat-billing/07.png)

2. Zuordnen von einzelnen Nutzern auf die Stationen

In dieser Variante werden die einzelnen Fahrer/Endkunden auf ihre jeweiligen Stationen zugeordnet. Nur der Spezialnutzer kann seine eigene Ladestation freischalten. D.h. die Accounts beim Mieterwechsel oder bei neuen Fahrern müssen jeweils auf die Stationen zugeordnet werden. Der Account muss laufend aktiv bewirtschaftet werden.

- Die Stationen werden auf den Status "limitiert" gestellt

- Der richtige  Fahreraccount wird mit dem richtigen Preis für die Station freigeschaltet

- Es wird ein Standort für die Station hinterlegt

![Laden Zuhause mit 15 Minuten Import – Abbildung 8](/img/anwendungsfaelle-privat-billing/08.png)

![Laden Zuhause mit 15 Minuten Import – Abbildung 9](/img/anwendungsfaelle-privat-billing/09.png)

## 6\. Fahrer / Endkunden informieren

Es empfiehlt sich, die Fahrer/Endkunden über die Freigabe der Station zu informieren.  Die Fahrer müssen für die Bezahlung einen eigenen eCarUp Account erstellen und eine gültige Kreditkarte als Zahlungsmittel hinterlegen:

- Eine  mögliche Anleitung/Vorlage zum Versand an die Fahrer findest du auf diesem [Dokument](https://docs.google.com/document/d/1WVdQFd3flkJsQTIyEgS5zUauPbomZ3kOBfhEasXHgFs/edit).

- [Alle Funktionen für Fahrer](/fahrer) sind auf einer eigenen Wiki Seite zusammengefasst.

- Zudem gibt es auch ein [FAQ für die Fahrer](/faq) mit den wichtigsten Fragen und Antworten.

- Die Fahrer können selbstständig [RFID/NFC Tags zu ihrem Account hinzufügen](/fahrer/rfid-nfc-tags-carid) und diesen dann zum Freischalten der Ladestation nutzen.

Mit dem flexiblen System von eCarUp ist der Verwaltungsaufwand minimiert. Die Fahrer/Endkunden können die Accounts selbstständig erstellen und verwalten.

## 7\. Stationen beschriften

Damit die Fahrer die Stationen auch ohne RFID Karte und mit der App freischalten können, empfehlen wir die Stationen mit einem QR-Code und einem kurzen Instruktionstext zu beschriften. Das hilft z.B.., wenn ein Fahrer seine RFID Karte verliert oder nicht bei sich hat.

Du findest einige [Beispiele für die Beschriftung](/stationsbetreiber/qr-code) direkt auf dieser Wiki Seite.

## 8\. Besucherparkplätze

<div className="row">
<div className="col col--6">

Ladestationen können mit eCarUp auch öffentlich und damit gegenüber anonymen Fahrern abgerechnet werden. Dafür muss den Stationen in der Einrichtung der Status "öffentlich" zugeteilt und ein Standort gesetzt werden. Zudem ist hier die Beschriftung der Ladestationen sehr wichtig, da über den QR-Cod auch ad-hoc und damit barrierefrei geladen wird.

Besucherparkplätzen kann man auch problemlos andere Preise zuordnen. (siehe unten).

Optional können die Stationen auch [über die Roaming Funktion in den Ladenetzwerken von Drittanbietern](/funktionen/roaming) veröffentlicht werden. Das geht aber nur, wenn die Station 24 Stunden 7 Tage in der Woche öffentlich zur Verfügung steht. Du musst dir bewusst sein, dass die Station danach sehr breit gefunden wird (in verschiedensten Apps und Navigationsgeräten von Autos) und damit fremde Nutzer angezogen werden.

</div>
<div className="col col--6 text--center">

![Laden Zuhause mit 15 Minuten Import – Abbildung 10](/img/anwendungsfaelle-privat-billing/10.png)

</div>
</div>

![Laden Zuhause mit 15 Minuten Import – Abbildung 11](/img/anwendungsfaelle-privat-billing/11.png)

## 9\. Fehleranalyse und -behebung

Mithilfe vom eCarUp Portal werden einfache Störungen erkannt und die entsprechenden Massnahmen eingeleitet. Falls Stationen im Dashboard oder in der Stationsverwaltung grau und damit als "inaktiv" hinterlegt sind, haben diese die Verbindung mit dem Backend verloren (länger als 10  Minuten) und können darum nicht über eCarUp verwendet werden. Zwei mögliche Gründe dafür:

Internetausfall: Stelle die Internetverbindung wieder her. Sobald die Stationen eCarUp wieder erreichen, wechselt der Satus auf "verfügbar" bzw. blau und können wieder normal verwendet werden.

Stromausfall: Stelle die Stromversorgung wieder her. Sobald die Stationen eCarUp wieder erreichen, wechselt der Satus auf "verfügbar" bzw. blau und können wieder normal verwendet werden.

Mit dem in eCarUp Premium inbegriffenen Wartungstool kann die Kommunikation zwischen Ladestation und Backend nachverfolgt und eine vertiefte Fehleranalyse getätigt werden.

Sollte der Fehler tiefer liegen, musst du mit dem Projektverantwortlichen (z.B. ausführender Elektroinstallateur) Kontakt aufnehmen.

![Laden Zuhause mit 15 Minuten Import – Abbildung 12](/img/anwendungsfaelle-privat-billing/09.png)

![Laden Zuhause mit 15 Minuten Import – Abbildung 13](/img/anwendungsfaelle-privat-billing/13.png)

Praxistipp: Um die Funktionalität von Stationen vor Ort zu testen oder zu überprüfen, kann ein Account für den technischen Dienst oder sonst eine verantwortliche Person vor Ort erstellt werden (z.B. hauswart\[at\]musterhaus.ch). Dieser Account kann bei den Stationen als Spezialnutzer mit Preis 0 pro kWh und 0 pro h hinterlegt werden und kann somit ohne kostenfolge Tests durchführen.
