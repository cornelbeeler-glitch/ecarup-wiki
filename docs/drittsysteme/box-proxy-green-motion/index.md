---
title: 'BoxProxy Green Motion'
slug: '/drittsysteme/box-proxy-green-motion'
description: 'WICHTIG: Für die Nutzung des BoxProxy Sofware-Tools erfordert immer eine eCarUp Premium-Lizenz pro Ladepunkt: Weitere Informationen'
sidebar_label: 'Box-Proxy Green Motion'
---
WICHTIG: Für die Nutzung des BoxProxy Sofware-Tools erfordert immer eine eCarUp Premium-Lizenz pro Ladepunkt: [Weitere Informationen](https://web.ecarup.com/preise-ladestationen-backend/) 

eCarUp hat ein Software-Tool entwickelt, damit ältere Ladestationsmodelle von GreenMotion / Eaton in das  eCarUp Backend überführt werden können. Nachdem diese via Anleitung auf dieser Wiki-Seite mit uns verbunden wurden, können sie wie alle anderen mit eCarUp kompatiblen Ladestationsmodelle genutzt werden. 

[Webinar eCarUp Backend basic + Box Proxy / Green Motion](/drittsysteme/box-proxy-green-motion/webinar-ecarup-backend-basic-eaton) (DE) inkl. FAQ

[Link BoxProxy](https://web.boxproxy.ecarup.com)

## OCPP Ladestationen

Neuere Ladestationsmodelle von GreenMotion / EATON können via OCPP-Anleitung auf die eCarUp Plattform integriert werden. Es ist dabei kein Problem, die Ladestationstypen in einem eCarUp Account zu mischen. Abgesehen von der Art der EInbindung, unterscheidet sich die Funktionalität der Ladestationen auf eCarUp nicht.

Die folgenden Modelle von Ladestationen werden derzeit vom [OCPP Protokol](/ocpp-ladestationen) unterstützt:

[Green Motion Building](/ocpp-ladestationen/eaton)

[Green Motion DC 22 & 26](/ocpp-ladestationen/eaton)

## Box Proxy Ladestationen

<div className="row">
<div className="col col--8">

Das Box Proxy ist für die Integration von Green Motions Stationen ab sofort verfügbar. Das heisst, die Ladestationen können bereits mittels der untenstehenden Anleitung auf die eCarUp Plattform verbunden und gestestet werden. Es finden aber ggf. noch Erweiterungen und/oder Verbesserungen statt.

Aktuell werden die folgenden Ladestationsmodelle unterstützt:

- Private-One mit einem Connector

- xChargeLN xCIM Client mit einem Connector

- Network TWO

- Smart One

- Du musst nur die Smart One migrieren. Die angebunden Stationen werden automatisch in eCarUp erkannt und angezeigt.

- Master One

Weitere Modelle werden laufend geprüft und nach der erfolgreichen Integration in dieser Liste ergänzt. Bis zur erfolgreichen Prüfung können wir in Fehlerfällen keinen Support bieten.

</div>
<div className="col col--4 text--center">

![BoxProxy Green Motion – Abbildung 1](/img/drittsysteme-box-proxy-green-motion/01.png)

</div>
</div>

Ladestation mit drei Connectoren, z. B. Smart One mit drei Private One.

## Internetverbindung

### SIM-Karte

⚠️Wichtig: Die in der Station verbaute SIM-Karte von Eaton wird zum Zeitpunkt der Abschaltung ebenfalls deaktiviert. Möchtest du die Verbindung zum eCarUp-Backend weiterhin aufrechterhalten, ist es daher wichtig, die SIM-Karte frühzeitig zu ersetzen. Falls du noch keinen Anbieter gewählt hast, empfehlen wir folgenden:  [LINK](/drittsysteme/provider-sim-karte). 

## Beispiel für die Integration von der Private One

<Video src="wPLyrBUKTU4" title="YouTube Video" />

## Anleitung Box Proxy

Schritt 1

- Wenn die Ladestation hinter einer Firewall ist, muss der Port 83 TCP zur IP 74.242.170.252 zusätzlich geöffnet werden.

Schritt 2

- Damit du die Station mit der eCarUp Plattform verbinden kannst, brauchst du die BoxID und ServerKey.

- Damit du an diese Informationen kommst, muss die SD Karte bei der Ladestation entnommen werden. 

Hier ein Beispiel aus der Network TWO

![BoxProxy Green Motion – Abbildung 2](/img/drittsysteme-box-proxy-green-motion/02.jpg)

Schritt 3

- Stecke die SD Karte an dein PC und öffne die Datei. 

- Klicke auf "settings"

- Ändere nun manuell die ServerHostname Adresse auf 74.242.170.252

- Kopiere die Box ID und den ServerKey heraus. 

- Text-Datei speichern.

- Schiebe die Karte wieder in den Controller, die Station startet sich neu. 

![BoxProxy Green Motion – Abbildung 3](/img/drittsysteme-box-proxy-green-motion/03.png)

![BoxProxy Green Motion – Abbildung 4](/img/drittsysteme-box-proxy-green-motion/04.png)

<div className="row">
<div className="col col--8">

Schritt 4

- Trage die Station beim eCarUp BoxProxy Tool ein, bitte folgenden Link verwenden: [https://web.boxproxy.ecarup.com](https://web.boxproxy.ecarup.com)

- Wichtig: Hier brauchst Du dein eCarUp Login, wenn dieses noch nicht erstellt wurde, gibt es hierzu eine Anleitung.

Account erstellen: [/stationsbetreiber/webportal

](/stationsbetreiber/webportal)

- Klicke auf Accept (Ziel-Account wird oben eingeblendet).

</div>
<div className="col col--4 text--center">

![BoxProxy Green Motion – Abbildung 5](/img/drittsysteme-box-proxy-green-motion/05.png)

</div>
</div>

Schritt 5

- Gehe im Menü zu "Stationen" und klicke auf "Hinzufügen".

![BoxProxy Green Motion – Abbildung 6](/img/drittsysteme-box-proxy-green-motion/06.png)

Schritt 6

- Füge hier deine herauskopierten ID und Geheimschlüssel aus Schritt 3 ein und klicke auf speichern. 

![BoxProxy Green Motion – Abbildung 7](/img/drittsysteme-box-proxy-green-motion/07.png)

Schritt 7

- Die Station sollte sich neu starten, wenn dies nicht geschieht mache einen manuellen Neustart. 

- Gehe zurück in das eCarUp BoxProxy Tool und überprüfe den Status.

- Wenn der Status "online" ist, hast du alles richtig gemacht. 

![BoxProxy Green Motion – Abbildung 8](/img/drittsysteme-box-proxy-green-motion/08.png)

Schritt 8

- Gehe nun zurück zu deinem eCarUp Account unter folgendem Link: [https://admin.ecarup.com/authentication/login](https://admin.ecarup.com/authentication/login)

- Die Station wurde erstellt und du kannst wie gewohnt die Station auf dem eCarUp Webportal konfigurieren. 

## Spezialfall Network 2 (Neu seit 1.6.2026)

Kontext und Problemstellung

Die Kommunikation über das Network 2 folgt einer veränderten Logik. Aufgrund von Problemen bei der Deaktivierung von Ladevorgängen wurden Optimierungen notwendig. Im Q2 2026 haben wir die nötigen Informationen und Voraussetzungen von eaton erhalten, um diese Probleme gezielt zu lösen und den Prozess zu verbessern.

Technische Umsetzung und Ausnahmen

Da das System den spezifischen Ladestationstyp nicht identifizieren kann, ist eine automatische Massenumstellung nicht möglich; die Anpassung muss für jede Station manuell erfolgen. Es besteht jedoch die Möglichkeit, dass die Anpassung im Hintergrund bereits vorgenommen wurde, dies kann vorkommen wenn ein Support-Ticket bearbeitet wurde, bei dem wir das Problem eindeutig dieser spezifischen Station zuordnen konnten. Es gibt keine Garantie dafür, dass dies systematisch geschieht.

Anleitung für die Umstellung

- [https://web.boxproxy.ecarup.com](https://web.boxproxy.ecarup.com) aufrufen

- Sich im Konto einloggen

- Stationen wählen

- Betroffen Station wählen

- Editieren wählen

- Stationstyp auf Network 2 setzten

- Speichern

![BoxProxy Green Motion – Abbildung 9](/img/drittsysteme-box-proxy-green-motion/09.png)

## Wo finde ich die SD-Karte ?

### smart-one

⚠️Wichtig: Bei der Smart-One übernimmt die Steuereinheit (graue Box) die zentrale Steuerung und bindet die beiden Private One Stationen als abgesetzte Anschlüsse ein. 

![BoxProxy Green Motion – Abbildung 10](/img/drittsysteme-box-proxy-green-motion/10.png)

![BoxProxy Green Motion – Abbildung 11](/img/drittsysteme-box-proxy-green-motion/11.jpg)

![BoxProxy Green Motion – Abbildung 12](/img/drittsysteme-box-proxy-green-motion/12.jpg)

### Network TWO

![BoxProxy Green Motion – Abbildung 13](/img/drittsysteme-box-proxy-green-motion/13.jpg)

![BoxProxy Green Motion – Abbildung 14](/img/drittsysteme-box-proxy-green-motion/14.jpg)

### Private One

![BoxProxy Green Motion – Abbildung 15](/img/drittsysteme-box-proxy-green-motion/15.jpg)

## Firewall

Wenn die Ladestation hinter einer Firewall ist, muss der Port 83 TCP zur IP 74.242.170.252 zusätzlich geöffnet werden.

## Plug and Charge

Bitte befolgen die beschriebenen Schritte.

- Erstellen ein neues eCarup-Fahrer-Konto. Wichtig: Es muss ein neues Konto sein, auf dem keine Kreditkarten hinterlegt werden darf.

- Gehe auf dem Konto unter Fahrer.

- RFID-Karte auswählen.

- RFID-Karte hinzufügen mit Kartennamen und Tag-ID. Bei der Tag-ID nur Zahlen von 0 bis 9 und Buchstaben von A bis F verwenden. Wir empfehlen zudem eine Länge von ca. 10 zufälligen Zeichen, z. B. 76435abd56. Es muss eine gerade Anzahl von Charakteren sein.

- Logge dich mit deinem eCarUp-Admin-Account (Stationsbetreiber-Account) auf dem Box Proxy ein. Das ist der Account, mit dem du die Box-Proxy-Stationen verbunden hast: [https://web.boxproxy.ecarup.com/](https://web.boxproxy.ecarup.com/) 

- Prüfe, ob in diesem Konto die Stationen verbunden sind, bei denen du Plug-and-Charge nutzen möchtest.

- Gehe ins Menü „Account Einstellungen“.

- Kopiere den Tag ohne die :, der in deinem eCarup-Fahrer-Konto hinterlegt wurde, z. B. 76435ABD56.

- Speichere die Einstellung.

- Logge dich im eCarUp-Admin-Account (Stationsbetreiber-Account) ein.

- Füge entweder jeder Station die E-Mail vom eCarUp-Fahrerkonto hinzu, für ein Preis von 0 CHF

- Oder füge die E-Mail in einer Benutzergruppe hinzu, die gratis laden kann.

Was passiert nun:

- Nun werden alle Ladestationen welche lokal in der Settings Datei den RFIDType = 0 haben die Ladung automatisch starten.

- In den Reports werden nun alle Ladestationen mit dem E-Mail vom eCarup-Fahrer-Konto angeziegt.

![BoxProxy Green Motion – Abbildung 16](/img/drittsysteme-box-proxy-green-motion/16.png)

![BoxProxy Green Motion – Abbildung 17](/img/drittsysteme-box-proxy-green-motion/17.png)

![BoxProxy Green Motion – Abbildung 18](/img/drittsysteme-box-proxy-green-motion/18.png)

![BoxProxy Green Motion – Abbildung 19](/img/drittsysteme-box-proxy-green-motion/19.png)

## Bekannte Probleme / Einschränkungen bei eaton Stationen

### Einschränkungen bei Benutzerberechtigungen über mehrere Connectoren

Wenn eine Ladestation über mehrere Connectoren (Steckern) verfügt, muss die Berechtigungsverwaltung der Benutzer auf allen Connectoren identisch sein. Es darf keine Konfiguration geben, bei der ein Benutzer beispielsweise an Connector 1 zum Laden berechtigt ist, diese Berechtigung aber an Connector 2 nicht gegeben ist, also unterschiedlich ist. Zudem darf Hubject nicht aktiviert werden.

![BoxProxy Green Motion – Abbildung 20](/img/drittsysteme-box-proxy-green-motion/20.png)

Wann tritt das Problem auf?

Dieses Problem tritt dann auf, wenn die Benutzer eine RFID-Karte zum Starten des Ladevorgangs verwenden.

Warum Tritt das Problem auf?
Aktuell übermittelt uns die Ladestation beim "Authorize" nur die Daten der RFID-Karte, aber nicht die Nummer des verwendeten Connectors. Dies liegt am OCPP-Standard. Aus diesem Grund senden wir immer eine "Accepted"-Antwort, sobald die RFID-Karte präsentiert wird.

```
[2, "b5790013-43ad-0f00-384e-b4799a00ad0e", "Authorize", {"idTag":"ABCD"}]
[3, "eff00013-902d-27df-4b4e-9d6ae7f5ad7f", {"idTagInfo":{"status":"Accepted","expiryDate":"2025-07-10T13:00:36.754Z"}}]
```

Erst später, wenn die Ladestation uns den "StartTransaction" sendet, erhalten wir die Information über den verwendeten Connector. An diesem Punkt überprüft unser System erneut die Gültigkeit der Kombination aus RFID-Karte. Wenn die Kombination nicht gültig ist, geben wir den Status "Invalid" zurück.

```
[2, "31f10017-fe9a-9de1-cb45-85f36ce47d0c", "StartTransaction", {"connectorId":1,"idTag":"ABCD","meterStart":0,"timestamp":"2025-07-09T13:00:34Z"}]
[3, "31f10017-fe9a-9de1-cb45-85f36ce47d0c", {"idTagInfo":{"status":"Invalid","expiryDate":"2025-07-09T13:00:39.489Z"},"transactionId":66039489}]
```

Dieser Ladesäulenhersteller interpretieren unsere "Invalid"-Antwort beim Start der Transaktion nicht korrekt. Wir das Verhalten der Ladestation nicht ändern und es muss bei der Konfiguration der User entsprechend berücksichtig werden.

### Verbrauch von 0 kWh wird an unser System übermittelt

Es kann vorkommen, dass beim Neustart der Ladestation, dass fälschlicherweise ein Verbrauch von 0 kWh an unser System übermittelt wird. Dies kann zu fehlerhaften Abrechnungen führen.

Wann tritt das Problem auf?

Bei gewissen Stationen wenn diese neu starten. 

Warum Tritt das Problem auf?
Aufgrund eines Fehlers auf der Ladestation

![BoxProxy Green Motion – Abbildung 21](/img/drittsysteme-box-proxy-green-motion/21.png)

Wie kann das Problem erkannt werden?

In den Logs wird z.B. eine Meter Value von 1338 gesendet

\[2, "b4a3001c-b5f5-576c-ae4d-83b28150ee34", "MeterValues", &#123;"connectorId":1,"transactionId":295103899,"meterValue":\[&#123;"timestamp":"2025-08-04T10:34:11.278Z","sampledValue":\[&#123;"value":"1338","context":"Sample.Periodic","format":"Raw","measurand":"Energy.Active.Import.Register","location":"Body","unit":"Wh"&#125;,&#123;"value":"0","context":"Sample.Periodic","format":"Raw","measurand":"Power.Active.Import","location":"Body","unit":"W"&#125;\]&#125;\]&#125;\]

Anschliessend wird während der aktiven Ladung ein Meter Value von 0 übermittelt. Die Station beginnt also wieder bei 0 kWh und zählt dann wieder hoch.

\[2, "cdf2001c-71f6-3991-734e-94e99d4bff05", "MeterValues", &#123;"connectorId":1,"transactionId":295103899,"meterValue":\[&#123;"timestamp":"2025-08-04T10:35:10.88Z","sampledValue":\[&#123;"value":"0","context":"Sample.Periodic","format":"Raw","measurand":"Energy.Active.Import.Register","location":"Body","unit":"Wh"&#125;,&#123;"value":"0","context":"Sample.Periodic","format":"Raw","measurand":"Power.Active.Import","location":"Body","unit":"W"&#125;\]&#125;\]&#125;\]

Wie wurde das Problem gelöst?

Der Hersteller Eaton hat uns am 18.08.2025 neue Informationen zur Verfügung gestellt, die aufzeigen, wie dieses Problem mit einem Workaroud behoben werden könnte. Unser Software-Entwicklungsteam hat diese Informationen umgehend geprüft und konnte das Problem der 0-kWh-Ladevorgänge am 21.08.2025 erfolgreich beheben. Ab diesem Zeitpunkt sollten die Abrechnungen für Ladevorgänge an den betroffenen Ladestationen, korrekt sein und den genannten Fehler nicht mehr aufweisen.

Mit diesem Fix haben wir lediglich einen Workaround implementiert, der das Problem der falsch übermittelten Zählerstände durch die Ladestation bei der Abrechnung behebt.
