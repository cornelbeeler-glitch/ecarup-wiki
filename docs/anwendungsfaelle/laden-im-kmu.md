---
title: 'Laden im KMU'
slug: '/anwendungsfaelle/laden-im-kmu'
description: '1\. Allgemeine Informationen'
sidebar_label: 'Laden im KMU'
---

## 1\. Allgemeine Informationen

Im folgenden Artikel wird eine Standardkonfiguration für das Laden im KMU mit eCarUp beschrieben. Dabei werden die verschiedenen Modelle für die Abrechnung von Ladestationen am Firmensitz für Mitarbeiter, Partner und Kunden aber auch zuhause beschrieben. 

Der Vorteil der eCarUp Plattform liegt darin, dass die verschiedenen Anwendungsfälle des KMU über eine Plattform gelöst werden können und jede Station, falls nötig, einzeln konfiguriert werden kann.

### Verrechnung via Kreditkarte

Eine sehr effiziente Möglichkeit ist das Abrechnen per Kreditkarte, weil dann das Geld automatisiert von der Kreditkarte des Fahrers auf das Konto des Stationsbesitzers übertragen wird. Dies hat zwei entscheidende Vorteile:

1.  Der ganze Inkassoprozess ist vollständig automatisiert, eCarUp überträgt das Geld der Transaktionen direkt nach deren Ende auf das Konto des Stationsbesitzers. 

2.  Dadurch ist das Guthaben nie im Besitz der eCarUp AG und alle Transaktionen (auch z.B. von Gästen auf den Besucherparkplätzen) sind innerhalb der geltenden gesetzlichen Bestimmungen.

Du findest bei uns im Wiki alle weiteren Angaben zum [Abrechnen per Kreditkarte](/stationsbetreiber/abrechnen-auszahlen) und zu den [gesetzlichen Bestimmungen zum übertragenen Guthaben](/stationsbetreiber/account-verifizieren).

Das Abrechnen per Kreditkarte hat immer eine 10%ige Kommission zur Folge, unabhängig davon ob eine [eCarUp Premiumlizenz](https://web.ecarup.com/preise-ladestationen-backend/) aktiv ist oder nicht.

### Verrechnung via Reporting

Die Stationen können auch über das [eCarUp Reporting-Tool](/funktionen/reports) verrechnet werden.

- Dabei werden die Stationen für alle Nutzer mit einem Preis von 0.- pro kWh und 0.- pro Stunde hinterlegt. Die Ladevorgänge haben damit keine direkte Kostenfolge und es findet keine Verrechnung über die Kreditkarte statt.

- Am Ende der Abrechnungsperiode (Ende Monat, Ende Quartal, Ende Halbjahr) kann entweder pro Station oder pro (vorher angelegtem) Spezialnutzer ein Report mit dem Verbrauch erstellt werden.

- Anhand dieser Verbrauchszahlen kann die Energie z.b. auf einer Spesenabrechnung oder einer anderen internen Abrechnung verrechnet werden (ausserhalb des eCarUp Systems).

![Laden im KMU – Abbildung 1](/img/anwendungsfaelle-laden-im-kmu/01.png)

![Laden im KMU – Abbildung 2](/img/anwendungsfaelle-laden-im-kmu/02.png)

Eine [eCarUp Premium-Lizenz](https://web.ecarup.com/preise-ladestationen-backend/) wird für diesen Anwendungsfall dringend empfohlen da sonst einige wichtige Features wie das Wartungstool, die Reports oder die erweiterte Nutzerverwaltung mit den Nutzergruppen fehlen.

## 2\. Ladestationen mit dem eCarUp Backend verbinden

Zuerst müssen die Stationen mit dem eCarUp Backend verbunden werden:

- Sie finden eine aktuelle Liste mit allen [unterstützen Ladestationsmodellen](/ocpp-ladestationen) in unserem Wiki

- Eine [Schritt für Schritt Anleitung zur Einbindung der Stationen](/stationsbetreiber/inbetriebnahme-ocpp-station) ist ebenfalls aufgeschaltet

- Damit Geld auf den Account übertragen werden kann, muss dieser verifiziert werden. Die Informationen dazu finden Sie unter [Account in eCarUp verifizieren](/sonstige-informationen/stripe). Wir empfehlen, diesen Schritt vor oder während der Installation der Ladestationen vorzunehmen. Ohne Verifizierung kann eCarUp aus rechtlichen Gründen kein Geld auf den Account übertragen und es sind keine kostenpflichtigen Ladungen möglich.
    Die Einnahmen werden laufend auf den Stationsinhaber Account übertragen und können unter dem Menüpunkt "Account" jederzeit auf eine beliebige IBAN ausbezahlt werden.

![Laden im KMU – Abbildung 3](/img/anwendungsfaelle-laden-im-kmu/03.png)

## 3\. Ladestationen einrichten

Wenn die Ladestationen mit eCarUp verbunden wurden, erscheinen diese im eCarUp Account im Dashboard und in der Stationsverwaltung.

![Laden im KMU – Abbildung 4](/img/anwendungsfaelle-laden-im-kmu/04.png)

### Grundlegende Einstellungen

Danach können die Stationen mit einem Klick auf "Stationen" und dann "Stationsverwaltung" eingerichtet werden:

- Name und Beschreibung der Station ändern

- Stationen löschen

- Standorte setzen

- Anschlüsse bearbeiten (falls mehrere)

- Anschlusstypen definieren (z.B. Typ 2, CSS oder Chademo)

- Maximale Energie definieren (z.B. 22 kW)

- Zugriff definieren (Öffentlich, Limitiert und Privat)

Öffentlich = alle User / Limitiert = Stationsbesitzer und SpezialUser
Privat = NUR Stations Besitzer  bzw. Account in welchem die Stationen installiert sind

- Preise für Energie und Zeit setzen

- Reservierte Zeiten definieren

- Station aus dem Webportal aktivieren

Alle [Einstellungen für Stationsbesitzer](/stationsbetreiber/webportal) sind in einem Wiki Artikel zusammengefasst.

### Stationsgruppen erstellen

Wichtig für die Verwaltung von der Ladestationen, ist die Organisation in Stationsgruppen (z.B. nach Standorten oder nach Wohnblöcken):

![Laden im KMU – Abbildung 5](/img/anwendungsfaelle-laden-im-kmu/05.png)

Fertig konfiguriert, kann das so aussehen:

![Laden im KMU – Abbildung 6](/img/anwendungsfaelle-laden-im-kmu/06.png)

### Spezial User erstellen

Damit die Stationen  nur von den berechtigten Fahrern/Endkunden freigeschaltet werden können, müssen  die Berechtigungen entsprechend vorgenommen werden. Dafür gibt es zwei Möglichkeiten:

1. Nutzergruppen pflegen

In dieser Variante wird eine Nutzergruppe erstellt und auf die Stationen zugeordnet. Damit kann bei Mieterwechseln oder bei neuen Fahrer unkompliziert ein neues Mitglied in der Nutzergruppen hinzugefügt oder entfernt werden. Dies macht den administrativen Aufwand kleiner.

- Die Stationen werden auf den Status "limitiert" gestellt

- Es wird eine Nutzergruppe mit allen berechtigten Fahrern erstellt

- Die Nutzergruppe wird auf die Stationsgruppe zugeordnet

![Laden im KMU – Abbildung 7](/img/anwendungsfaelle-laden-im-kmu/07.png)

![Laden im KMU – Abbildung 8](/img/anwendungsfaelle-laden-im-kmu/08.png)

2. Zuordnen von einzelnen Nutzern auf die Stationen

In dieser Variante werden die einzelnen Fahrer/Endkunden auf ihre jeweiligen Stationen zugeordnet. Nur der jeweilige Spezialnutzer kann seine eigene Ladestation freischalten. Die Accounts müssen bei Mieterwechseln oder bei neuen Fahrern jeweils auf die Stationen zugeordnet werden. Der Account muss also laufend  aktiv bewirtschaftet werden.

- Die Stationen werden auf den Status "limitiert" gestellt

- Der richtige  Fahrer Account wird mit dem richtigen Preis für die Station freigeschaltet

- Es wird ein Standort für die Station hinterlegt

![Laden im KMU – Abbildung 9](/img/anwendungsfaelle-laden-im-kmu/09.png)

![Laden im KMU – Abbildung 10](/img/anwendungsfaelle-laden-im-kmu/10.png)

## 4\. Stationen beschriften

Damit die Fahrer die Stationen auch ohne RFID Karte und mit der App freischalten können, empfehlen wir die Stationen mit einem QR-Code und einer kurzen Ladeanleitung zu beschriften. Das hilft z.B., wenn ein Fahrer seine RFID Karte verliert oder nicht bei sich hat.
Du findest  einige [Beispiele für die Beschriftung](/stationsbetreiber/qr-code).

## 5\. Regelmässige Nutzer informieren

Es empfiehlt sich Fahrer, welche regelmässig laden (z.B. Mitarbeitende) über die korrekte Nutzung der Stationen zu informieren. Die Fahrer müssen bei der Bezahlung per Kreditkarte einen eigenen eCarUp Account erstellen und  eine gültige Kreditkarte hinterlegen:

- Eine  mögliche Anleitung/Vorlage zum Versand an die Fahrer finden Sie hier: [Vorlage Kommunikation eCarUp Endkunden](https://docs.google.com/document/d/1WVdQFd3flkJsQTIyEgS5zUauPbomZ3kOBfhEasXHgFs/edit)

- [Alle Funktionen für Fahrer](/fahrer) sind auf einer eigenen Wiki Seite zusammengefasst

- Zudem gibt es auch [ein FAQ für die Fahrer](/faq) mit den wichtigsten Fragen und Antworten

- Die Fahrer können selbstständig [RFID / NFC Tags zu ihrem Account hinzufügen](/fahrer/rfid-nfc-tags-carid) und diesen dann zum Freischalten der Ladestation nutzen

Mit dem flexiblen System von eCarUp ist der Verwaltungsaufwand minimiert. Die Fahrer/Endkunden können die Accounts selbstständig erstellen und verwalten.

## 6\. Einrichten von Besucher- und Kundenparkplätzen

<div className="row">
<div className="col col--6">

Ladestationen können mit eCarUp auch öffentlich und damit gegenüber anonymen Fahrern abgerechnet werden. Dafür muss den Stationen in der Einrichtung der Status "öffentlich" zugeteilt werden und ein Standort gesetzt werden. Zudem ist hier die Beschriftung der Ladestationen sehr wichtig, da über den QR-Code auch ad-hoc und damit barrierefrei geladen werden kann.

Den Besucherparkplätzen können auch problemlos andere Preise zugeordnet werden (siehe unten).

Optional können die Stationen auch [über die Roaming Funktion in den Ladenetzwerken von Drittanbietern veröffentlicht werden](/funktionen/roaming). Das geht aber nur, wenn die Station 24 Stunden an 7 Tage in der Woche öffentlich zur Verfügung steht. Du musst dich zudem bewusst sein, dass die Station danach sehr breit gefunden wird (in verschiedensten Apps und Navigationsgeräten von Autos) und damit fremde Nutzer angezogen werden.

</div>
<div className="col col--6 text--center">

![Laden im KMU – Abbildung 11](/img/anwendungsfaelle-laden-im-kmu/11.png)

</div>
</div>

![Laden im KMU – Abbildung 12](/img/anwendungsfaelle-laden-im-kmu/12.png)

## 7\. Aktivieren von Besucher- und Kundenparkplätzen

Falls du Ladestationen auf Parkfeldern für Besucher und/oder Kunden hast, gibt es die folgende Möglichkeiten, um diese für die Kunden kostenfrei zu aktivieren.

- Per RFID-Karte:  Erstelle einen eCarUp Account (z.B. muster(at)musterfirma.ch) und ordne diesen den Besucherstationen als Spezialuser mit dem Preis 0 pro kWh und 0 pro h zu. Fügen Sie dem Account einen oder mehrere [RFID Karten](/fahrer/rfid-nfc-tags-carid) hinzu. Nun können die Stationen über diese RFID/NFC Karten kostenfrei aktiviert werden. Der Kunde kann die RFID Karte z.B. an der Rezeption entgegen nehmen und sein Auto kostenfrei laden.

- Aktivieren im Webportal: Über das Webportal können Stationen ebenfalls aktiviert werden. Da die Freischaltung über den Inhaberaccount (muster(at)musterfirma.ch) gemacht wird, ist die Ladung kostenlos und es findet keine Kreditkartentransaktion statt. Mit dieser Variante hat man den Vorteil, dass der Kunde nicht noch einmal zum Auto zurücklaufen muss.

![Laden im KMU – Abbildung 13](/img/anwendungsfaelle-laden-im-kmu/13.png)

## 8\. Laden zuhause

Falls Mitarbeitende das Geschäftsfahrzeug zu Hause laden und die Energie dafür abgerechnet werden soll, gibt es die folgenden Varianten:

1.  Die Station wird im Account der Firma integriert (muster(at)musterfirma.ch) und der Preis wird auf 0 pro kWh und 0 pro h gestellt. Der Mitarbeitende kann damit zuhause kostenfrei laden. Am Ende der Abrechnungsperiode wird [ein eCarUp Report](/funktionen/reports) mit dem Verbrauch (in kWh) generiert und die Kosten für die Ladungen zuhause können abgerechnet werden. Dies kann für verschiedene Fahrer/Mitarbeitenden im gleichen Account gemacht werden.

2.  Die Station wird in den privaten Account des Mitarbeitenden installiert und es wird ein Preis (abgemacht zwischen Mitarbeitenden und Firma) hinterlegt. Der Mitarbeitende aktiviert die Station über den Geschäftsaccount (wo normalerweise eine Kreditkarte der Firma hinterlegt ist) zuhause. Damit "verkauft" der Mitarbeitende quasi seinen Strom an die Firma und die Verrechnung ist  automatisiert.

## 9\. Fehleranalyse und -Behebung

Mithilfe vom eCarUp Portal können einfache Störungen erkannt und die entsprechenden Massnahmen eingeleitet werden. Falls Stationen im Dashboard oder in der Stationsverwaltung grau und damit als "inaktiv" hinterlegt sind, haben diese die Verbindung mit dem Backend verloren (länger als 10  Minuten) und können darum nicht über eCarUp verwendet werden. Dafür gibt es zwei mögliche Gründe:

- Internetausfall: Stelle das Internet wieder her. Sobald die Stationen eCarUp wieder erreichen, wechselt der Status auf "verfügbar" bzw. blau und können wieder normal verwendet werden.

- Stromausfall: Stelle die Stromversorgung wieder her. Sobald die Stationen eCarUp wieder erreichen, wechselt der Status auf "verfügbar" bzw. blau und können wieder normal verwendet werden.

Mit dem in [eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/) inbegriffenen Wartungstool kann [die Kommunikation zwischen Ladestation und Backend](/funktionen/wartung) nachverfolgt werden und eine vertiefte Fehleranalyse getätigt werden.

Sollte der Fehler tiefer liegen, musst du mit dem Projektverantwortlichen (z.B. ausführender Elektroinstallateur) Kontakt aufnehmen.

![Laden im KMU – Abbildung 14](/img/anwendungsfaelle-laden-im-kmu/14.png)

Praxistipp: Um die Funktionalität von Stationen vor Ort zu testen oder zu überprüfen, kann ein Account für den technischen Dienst oder sonst eine verantwortliche Person vor Ort erstellt werden (z.B. hauswart\[at\]musterhaus.ch). Dieser Account kann bei den Stationen als Spezialnutzer mit Preis 0.- pro kWh und 0.- pro h hinterlegt werden und kann somit ohne Kostenfolge Tests durchführen.
