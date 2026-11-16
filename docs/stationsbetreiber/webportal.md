---
title: 'Webportal'
slug: '/stationsbetreiber/webportal'
description: 'Logge dich bei eCarUp mit deinen bestehenden Login-Daten ein.'
sidebar_label: 'Webportal'
---

## Login

Logge dich bei [eCarUp](https://admin.ecarup.com/authentication/login) mit deinen bestehenden Login-Daten ein. Hast du noch kein Benutzerkonto kannst du dich auch gleich [Registrieren](https://admin.ecarup.com/authentication/login). 

## Übersicht Dashboard

- Stations-Status: Sehe auf einen Blick den Status alle Ladestationen (verfügbar, verbunden, besetzt, ausser Betrieb)

- Letzte Ladevorgänge: An Stationen in diesem Account (von allen Usern), die letzten 20 Einträge. Die Farben sagen hier nichts über den Status aus.

- Einnahmen:  Das zur Auszahlung verfügbare Guthaben aus den Ladevorgängen an den Stationen in diesem Account. Bald verfügbar heisst, dies wird von unserem Zahlungsdienstleister auf Geldwäscherei überprüft und wird im Normallfall innert 1-2h zur Auszahlung gutgeschrieben. 


⚠️Wichtig: Beim Status "ausser Betrieb" hat die Station keine aktive Kommunikation zum Backend. Wir markieren die Station nach 15 Minuten automatisiert als "ausser Betrieb". Möchtest du bei einem Unterbruch benachrichtigt werden, dann schaue dir folgende Einstellung "[Alarm](/funktionen/wartung/alarme)" an. 

Info: Möchtest du ein eigenes individuelles Dashboard kreieren, dann schau dir folgende [Seite](/drittsysteme/api-visualisierung) an. Die [eCarUp API](/funktionen/ecarup-api) machts möglich. 

![Webportal – Abbildung 1](/img/stationsbetreiber-webportal/01.png)

## Stationsverwaltung

- Stationen filtern

- Stationen in Gruppen organisieren

- Status überwachen


![Webportal – Abbildung 2](/img/stationsbetreiber-webportal/02.png)

⚠️Wichtig: Korrespondiert der Status nicht mit der Wallbox ?

- Bei Unterbrüchen auf der Wallbox (insbesondere bei aktiven Ladevorgänge) kann es vorkommen, dass bei eCarUp der Status auf rot ist (aktiver Ladevorgang), aber die Wallbox wieder bereit ist. Das heisst, dass wir von der Station noch keinen Befehl für ein Ende des Ladevorgangs erhalten haben (Stop Transaction) erhalten haben. 

- Neustart oder Reset kann Abhilfe schaffen.


Ladeleistung

- Wird die aktuelle Ladeleistung während dem Ladevorgang nicht angezeigt ? Schaue dir folgenden Artikel in der [Wartung](/funktionen/wartung) an. 


### Station konfigurieren

- Klicke rechts auf die drei Punkte zum bearbeiten der Ladestation. 

- Hast du mehrere Ladepunkte die du gleichzeitig bearbeiten möchtest ? Hier geht es zur Anleitung für Massenmutationen.




![Webportal – Abbildung 3](/img/stationsbetreiber-webportal/03.png)

### Bearbeiten

Unter Bearbeiten kannst du Folgendes machen:

- Name und Beschreibung der Station ändern (diese Informationen sind in der App auf der Karte sichtbar)

- Stationen löschen (Wichtig, damit verschwinden auch die historischen Daten, wir empfehlen die Station auf nicht lizenziert zu stellen)

- Nicht lizenzierte Station (Station inaktiv setzen)

- Bilder zu den Stationen hochladen


⚠️Wichtig: Es eignen sich Bilder mit einer Grösse von ca. 605 x 806 Pixel. 

![Webportal – Abbildung 4](/img/stationsbetreiber-webportal/04.png)

### Anschluss bearbeiten

Informationen:

(diese Informationen sind in der App sichtbar)

- Name des Anschlusses

- Beschreibung (optional)

- Anschlusstyp (Steckertyp)

- Max. Energie (kW)


Preise:

- Preise für Energie und Zeit setzen


⚠️Wichtig: Beim Zugriff "limitiert" wird das Feld ausgegraut, da in diesem Fall der Preis bei "Benutzer definieren oder bei der [erweiterten Nutzerverwaltung](/funktionen/erw-nutzerverwaltung)" gesetzt wird.

![Webportal – Abbildung 5](/img/stationsbetreiber-webportal/05.png)

### Zugriff

- Privat: Nur der "Besitzer-Account" kann aktivieren, d. h. derjenige Account, in welchem die Station installiert wurde.

- Limited: Nur der "Besitzer-Account" und die pro Station definierten "Spezial-User" (über individuelle "Spezial-User oder über die [erweiterte Nutzerverwaltung](/funktionen/erw-nutzerverwaltung)") können aktivieren. Andere Accounts haben keinen Zugriff - weder per App noch per QR-Code.

- Öffentlich: Alle User können freischalten, entweder per App oder per QR-Code Sofort-Bezahlmethode per Handykamera oder Scanner-App (mit dem Status öffentlich ist die Station aber noch nicht im [Roaming](/funktionen/roaming) bei anderen Ladenetzwerken veröffentlicht, dies muss separat vorgenommen werden. 


### Benutzer definieren

- Hier kann ein individueller Nutzer mit einem eigenen Preis  hinterlegt werden. 

- Oder \*Special-User" können auch via die Preisregel hinzugefügt werden


⚠️Wichtig: Ist ein User bei beiden Kategorien hinterlegt, gilt der Preis in der er als "Einzelner Benutzer" hinzugefügt wurde. 

![Webportal – Abbildung 6](/img/stationsbetreiber-webportal/06.png)

### Zeiten definieren

Die Öffnungszeiten können zudem zeitlich angepasst werden, sodass die Ladestationen beispielsweise nur zu bestimmten Zeiten des Tages öffentlich zugänglich sind. ( ähnlich wie AirBnB)




Zum Beispiel: Ein KMU kann Ladestationen für Mitarbeitende (Spezia- User) während den Öffnungszeiten zu einem Sonderpreis zur Verfügung stellen. Am Abend und am Wochenende können die ungenutzten Stationen mit einem anderen Preis für die Öffentlichkeit freigegeben werden.

Es entsteht eine Win-Win-Situation: Der Stationsinhaber kann mit sowieso vorhandener Ladeinfrastruktur Geld verdienen und es entstehen mehr öffentlich zugängliche Ladepunkte (auch an Orten z.B. in Industriegebieten, wo sonst nicht in öffentliche Ladeinfrastruktur investiert wird).

### Automatischer Ladevorgang

- Beim automatischen Ladevorgang wird, sobald das Backend ein "Preparing" Status erreicht, ein Ladevorgang unter dem Namen des Stationsbetreibers gestartet. Diese Anwendung eignet sich nur im privaten Bereich und nicht für den limitierten und öffentlichen Anwendungsfall. 


### Hubject

- Hier kannst Du die Station optional zum Romaingnetzwerk Hubject hinzufügen. Vertiefte Informationen zur Funktionsweise findest du im folgendem Artikel zum [Roaming](/funktionen/roaming). 


![Webportal – Abbildung 7](/img/stationsbetreiber-webportal/07.png)

![Webportal – Abbildung 8](/img/stationsbetreiber-webportal/08.png)

### Standort setzen

Setze den Standort der Station auf der Karte und passe wenn nötig die Adresse manuell an. Achtung, bitte unbedingt in der Karte die "Nadel" setzen. 

⚠️Wichtig, hast du mehrere Ladepunkte an einem Ort ? Dann ziehe bitte die Standpunkte ewas auseinander wie hier im Printscreen. 







Der Standort kann auch wieder gelöscht werden. 

![Webportal – Abbildung 9](/img/stationsbetreiber-webportal/09.png)

![Webportal – Abbildung 10](/img/stationsbetreiber-webportal/10.png)

### Aktivieren

- Die Station kann aus dem Webportal aktiviert werden. Dies ohne Kostenfolge, da die Stationen im Name des Stationsbetreibers aktiviert werden. 


## Massenmutation

Möchtest du alle Ladepunkte in Sachen Nutzer oder Preis gemeinsam bearbeiten?

Dann führe folgende Schritte aus:

- Wähle die gewünschten Stationen aus (siehe Checkbox am Anfang).

- Klicke auf "Ausgewählte Stationen bearbeiten". 


- Nun siehst du die Anzahl der ausgewählten Stationen und kannst für alle ausgewählten Stationen den Zugriff, den Preis, die reservierten Zeiten und das Roaming aktivieren. 


![Webportal – Abbildung 11](/img/stationsbetreiber-webportal/11.png)

![Webportal – Abbildung 12](/img/stationsbetreiber-webportal/12.png)

## OCPP

Unter dem Abschnitt OCPP findest du deine individuelle URL für die Einbindung der OCPP Ladestationen. 

- Wenn du mehr über OCPP wissen möchtest, findest du deine Antworten im Artikel zu den [OCPP Logs](/funktionen/wartung/ocpp-logs) hier.

- Wenn du eine OCPP Ladestation mit eCarUp integrieren möchtest findest du hier eine [Anleitung pro Hersteller](/ocpp-ladestationen). 


![Webportal – Abbildung 13](/img/stationsbetreiber-webportal/13.png)



Basic Authentifizierung 

- Wozu: Sie schützt davor, dass unbekannte oder gefälschte Stationen sich mit dem System und deinem Account verbinden.

- Wichtig: Immer in Verbindung mit WSS (verschlüsselte Verbindung) anwenden

- Die Authentifizierung betrifft den gesamten Account- das heisst, alle darin enthaltenen Stationen müssen das Passwort kennen, um sich verbinden zu können. 


Beispiel Zaptec: 



![Webportal – Abbildung 14](/img/stationsbetreiber-webportal/14.png)

## QR-Code

Alles zum Thema QR-Code findest du unter folgendem Link: [generieren von QR-Codes](/stationsbetreiber/qr-code) 

![Webportal – Abbildung 15](/img/stationsbetreiber-webportal/15.png)

## Gruppen

- Stationsgruppen: Hier kannst du Stationsgruppen erstellen, um deinen eCarUp Account etwas mehr Übersicht zu verleihen.

- Benutzergruppen: Hier kannst du ganze Benutzergruppen erstellen und Preisregeln bei den Stationsgruppen hinterlegen. Dies ist im Premium Abo möglich und du findest eine Anleitung unter folgendem [Link](/funktionen/erw-nutzerverwaltung). 


⚠️Wichtig: Eine Station kannst du auch in mehrere Gruppen aufteilen. 

![Webportal – Abbildung 16](/img/stationsbetreiber-webportal/16.png)

## Reports

Alle Infos zu den Reports findest du unter folgendem [Link](/funktionen/reports).

## Wartung

Alle Infos zu der Wartung findest du unter folgendem [Link](/funktionen/wartung).

## Account und Auszahlung

- Einnahmen: Das zur Auszahlung verfügbare Guthaben aus den Ladevorgängen an den Stationen in diesem Account

- Rechtliche Angaben: Als Stationsbetreiber musst du aufgrund des in Europa geltenden [Know Your Customer Prinzip](https://de.wikipedia.org/wiki/Know_your_customer) aus rechtlichen Gründen (Geldwäscherei) einige Informationen hinterlegen. Diese unterscheiden sich je nach Privatperson oder Unternehmen.

- Account Verifizieren: Nach erfolgreicher Eingabe der "Rechtlichen Angaben" muss dein Account noch verifiziert werden. Du gelangst hierfür auf die Landingpage von Stripe (Online-Zahlungsdienstleister) und wirst Schritt für Schritt angeleitet. Unter folgender  [Wiki-Seite](/stationsbetreiber/account-verifizieren) findest du noch mehr Informationen zu diesem Thema. 

- Informationen zum Bankkonto: Gib die IBAN des Bankkontos an, auf das die Auszahlung überwiesen werden soll 

- Auszahlung: Fordere die Auszahlung des aktuell vorhanden Guthabens in deinem Account an. Die Banküberweisung dauert üblicherweise 2-3 Arbeitstage. Auf der Seite [Abrechnen](/stationsbetreiber/abrechnen-auszahlen) findest du ein Beispiel einer Auszahlungsquittung. Hier kann als Zwischenschritt noch eine Kommission oder ein Kommentar hinzugefügt werden. 

- Automatisierter Auszahlungsplan: Premium Kunden können die Auszahlung auch automatisieren. Lese hier mehr dazu: [Automatische Auszahlung](/funktionen/automatische-auszahlung)

- MwSt. Informationen: Dieser Wert wird in der Auszahlungsquittung und den Fahrerquittungen angezeigt.

- E-Mail und Passwort ändern

- Support-Kontaktinformationen: Hier können Sie für den Fahrer nützliche Informationen platzieren. 


### Saldoverlauf

- Der Stationsbetreiber sieht hier den Verlauf  der Zahlungen und Auszahlungen. Zugleich kann die Quittungen erneut an die E-Mail Adresse des Accounts versenden werden.


![Webportal – Abbildung 17](/img/stationsbetreiber-webportal/17.png)

![Webportal – Abbildung 18](/img/stationsbetreiber-webportal/18.png)

### Lizenzen

- Im Menüpunkt „Lizenzen“ siehst du jederzeit die Gesamtzahl deiner gekauften Premium-Lizenzen. Ab Januar 2025 hast du ausserdem die Möglichkeit, die Lizenzen online per Kreditkarte zu erwerben. 


![Webportal – Abbildung 19](/img/stationsbetreiber-webportal/19.png)

## Fahrer

Auch Fahrer können sich im eCarUp Webportal einloggen. Unter dem Menüpunkt "Fahrer" findest du alle Ladevorgänge des Accounts und kannst diese nach beliebigen Zeiträumen filtern.

Zudem können Fahrer irgendeine RFID-Karte (beispielsweise einen Mitarbeiter Patch) zu deinem Account hinzufügen, um sich mit diesem an RFID-fähigen Ladestationen zu identifizieren. Die Anleitung dazu findest du auf der Seite [RFID / NFC Tags](/fahrer/rfid-nfc-tags-carid) .

![Webportal – Abbildung 20](/img/stationsbetreiber-webportal/20.png)

Info, Hast du ein Fingerabdruck in der Historie in der Spalte Signatur. Dann erfahre mehr zum [Eichrecht in Deutschland](/sonstige-informationen/eichrecht-in-deutschland) hier. 

### eCarUp Premium

Für folgende Funktionen benötigst du eine eCarUp Premium Lizenz:

[Wartung](/funktionen/wartung)

[Reports](/funktionen/reports)

[Preispläne](/funktionen/preisplaene)

[Roaming](/funktionen/roaming)

[erweiterte Nutzerverwaltung](/funktionen/erw-nutzerverwaltung)

[15-Minuten Datenimport](/funktionen/15-minuten-datenimport)

[Statistiken](/funktionen/statistiken)

[Automatische Auszahlung](/funktionen/automatische-auszahlung)

[eCarUp API](/funktionen/ecarup-api)
