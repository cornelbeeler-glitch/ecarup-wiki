---
title: '15-Minuten Datenimport'
slug: '/funktionen/15-minuten-datenimport'
description: 'Mit den 15-Minuten-Verbräuchen können Lastgangdatenabrechnungen realisiert werden.'
sidebar_label: '15 Minuten Datenimport'
---
[Allgemeines](#allgemeines)

[Authentifizierung eCarUp und Abrechnung im Mehrtarifsystem:](#authentifizierung-ecarup-und-abrechnung-im-mehrtarifsystem)

[Datenqualität](#datenqualität)

[Zaptec](#zaptec)

[Easee](#easee)

[Anleitung für den Datenimport](#anleitung-für-den-datenimport)

[Zaptec Einstellungen](#zaptec-einstellungen)

[easee Einstellungen](#easee-einstellungen)

[smart-me Einstellungen](#smart-me-einstellungen)

[ISE-Load Profile](#ise-load-profile)

[smart-me Billing Beispiel](#smart-me-billing-beispiel)

## Allgemeines

Mit den 15-Minuten-Verbräuchen können Lastgangdatenabrechnungen realisiert werden. Dies ermöglicht erweiterte Tarifstrukturen wie beispielsweise ZEV-Abrechnungen oder Mehrtarifsysteme. Mit Hilfe des Datenimporttools können die Daten von bestimmten Ladestationen in die smart-me Cloud importiert werden. 

## Authentifizierung eCarUp und Abrechnung im Mehrtarifsystem:

Wenn die Authentifizierung von eCarUp gewünscht wird, aber die Abrechnung über die smart-me Billing\-Plattform im Mehrtarifsystem erfolgen soll, dürfen die OCPP-Stationen nicht im gleichnamigen automatisch erstellten eCarUp Account installiert werden. Beim Importieren der OCPP-Lastgangdaten über das Importtool werden zusätzlich Lastgangzählerpunkte erstellt. Entspricht der eCarUp Account auch dem ZEV\-Account, ist die doppelte Menge an Zählerpunkten für Transaktionsdaten und Lastgangzählerpunkte im Account, welche alle lizenzpflichtig wären. 

Um dies zu verhindern, können kann ein separater eCarUp Account erstellt und die OCPP-Stationen getrennt zur ZEV / Hausinstallation installiert werden.

![15-Minuten Datenimport – Abbildung 1](/img/funktionen-15-minuten-datenimport/01.png)

### Grüner Diagrammbereich: 15min Datenimport in den Liegenschaftsaccount

Die Migration in den grünen Diagrammbereich kann bei bereits installierten Ladestationen im Hintergrund und ohne Auswirkungen auf den Endkunden vorgenommen werden (da die Authentifizierung vor Ort nicht verändert wird). 

Achtung: Die Authentifzierung funktioniert in dieser Variante vor Ort / mit den Ladestationen direkt. eCarUp hat keinen Einfluss auf die Freischaltung.

Vorteil: Da es sich um einen Datenipmort im Hintergund handelt, merken die Kunden im Falle einer Migration nichts.

Nachteil: Da keine Authentifizierung über eCarUp stattfinden, werden die Ladedaten der Kunden nicht erfasst und können auch nicht eingesehen werden.

### Rot: 15min Datenimport mit Freischaltung über eCarUp App

Hier muss ein separater Account für die Aktivierung der Ladestationen über eCarUp erstellt werden. inkl. der OCPP Implementierung via einer der folgenden Anleitungen je nach verwendetem Ladestationshersteller ([Zaptec](/ocpp-ladestationen/zaptec) / [easee](/ocpp-ladestationen/easee))

Vorteil: Kunde kann über die App oder RFID-Karte aktivieren und sieht seine Ladehistorie.

Nachteil: Es müssen zwei separate Logins bewirtschaftet werden.

## Datenqualität

Hinweis: Die Qualität wird durch den Drittanbieter definiert und kann von Seiten smart-me oder eCarUp nicht verändert oder verbessert werden.

Wichtig, wir empfehlen einen smart-me Zähler beim E-Mobility Abgang zu installieren und dies aus folgenden Gründen:

- Wenn kein smart-me Zähler verbaut wird, hilft der Support dir bei der Suche von Differenzen zwischen smart-me Billing und der Rechnung des Stromanbieters nicht. Dies gilt immer wenn Messungen durch Drittanbieter erfolgen.


- Beim smart-me Billing kann der Gesamtverbrauch E-Mobilität referenziert werden.

- Es kann eine separate Abrechnungseinheit für den Gesamtverbrauch erstellt und ausgewiesen werden (Anwendungsfall ext. Verwaltung)


### Zaptec

Die aktuellen Daten werden im 15-Minuten-Intervall von der Zaptec Cloud abgefragt. 

[https://api.zaptec.com/help/index.html#/Charger/get\_api\_chargers\_\_id\_](https://api.zaptec.com/help/index.html#/Charger/get_api_chargers__id_)  

Die Zaptec-Schnittstelle liefert nur Live-Daten bei einer aktiven Ladung. 

- Wenn die Station offline ist, werden keine Live-Daten und Zählerstände geliefert. 

- Das gilt auch, wenn die Station online ist, aber niemand lädt. 


Wenn eine Ladestation mehrere Wochen lang nicht verwendet wird, sendet sie nie aktualisierte Zählerstände an die API. Sowohl der [Auto-Export](https://wiki.smart-me.com/schnittstellen/auto-export) als auch die Abrechnung im [smart-me Billing](https://wiki.smart-me.com/konfiguration/billing) sind von den Daten der Messpunkte abhängig. Wenn ein Messpunkt keine Daten sendet, wird der Auto-Export nicht ausgeführt und die Tarifberechnung im Smart-Me Billing bleibt stehen. Eine Rechnungserstellung ist somit nicht zeitnah möglich. 

Um zu verhindern, dass eine Rechnungsstellung über mehrere Wochen/Monate nicht möglich ist, gehen wir wie folgt vor: 

- Wir möchten stellen sicher, dass das smart-me Billing und der Auto-Export mit einem maximalen Rückstand von drei Tagen durchführbar sind und die Daten in den 15-Minuten-Intervallen möglichst korrekt sind.

- Wenn die Station lädt, erhalten wir über den API-Endpunkt chargers/&#123;chargerId&#125; Live-Daten, die wir zum Zeitpunkt der Abfrage speichern.

- Wenn die Station online ist, speichern wir für den Zeitpunkt der Abfrage den letzten Messwert, den wir über den API-Endpunkt chargers/&#123;chargerId&#125; erhalten haben. Auch wenn dieser mehrere Wochen alt ist.

- Wenn die Station offline ist, speichern wir den Wert, den uns die Station als OCMF-Message über den API-Endpoint chargers/&#123;chargerId&#125; sendet. Als Zeitstempel verwenden wir den der OCMF-Meldung, sofern dieser jünger als drei Tage ist. Wenn dieser älter ist, speichern wir den Wert per X-3Tage. Damit stellen wir sicher, dass Stationen, die offline sind, auch zeitnah abgerechnet werden können und das gesamte System nicht unnötig blockieren. 


Wenn du einen [Alarm](https://wiki.smart-me.com/konfiguration/wenndann-aktionen/alarme) in smart-me eingerichtet hast, empfehlen wir, mindestens drei Tage Offline-Zeit einzukalkulieren, da der Alarm den zuletzt gespeicherten Wert prüft und dieser im Offline-Fall, auch wenn nur für zehn Minuten, bis zu drei Tage alt sein kann.

### Easee

Auf der smart-me Cloud werden 15-Minuten-Messwerte auf deine easee Ladestationen gespeichert. Diese stehen im Normalfall mit einer Verzögerung von 1-3h bereit.

Bei Internet- oder Serverausfällen kann es ausnahmsweise länger dauern. Sobald der Ausfall behoben ist, werden die Messwerte des Ausfallzeitraums automatisch in die smart-me Cloud übernommen.

Konfiguration von easee Ladestation:

Smart-me konfiguriert easee Ladestationen mit einem Messintervall von 15 Minuten. Dies betrifft alle Ladestationen deines zum Import konfigurierten easee Kontos. Die Konfiguration erfolgt pro Ladestation einmalig, und zwar:

- bei Einrichtung des Imports: alle schon im easee Konto vorhandenen Ladestationen

- später neu im easee installierte Ladestationen: innerhalb von 3h.


Hinweis: Diese Konfiguration hat keinen Einfluss auf die Messung und Abrechnung von Ladetransaktionen.

Achtung:

Falls du (oder eine ermächtigte Person) den Messintervall einer easee Ladestation änderst, beeinflusst das die in der smart-me Cloud zur Verfügung stehenden Messwerte. In diesem Fall wird der Messintervall nicht von smart-me korrigiert.

Weitergehende Informationen findest du in der Dokumentation von easee:

- [https://developer.easee.cloud/docs](https://developer.easee.cloud/docs)

- [https://developer.easee.cloud/docs/consumption-report-types#lifetime-energy](https://developer.easee.cloud/docs/consumption-report-types#lifetime-energy)


## Anleitung für den Datenimport

1.  Zaptec Einstellungen machen oder Easee Einstellungen machen

2.  smart-me Einstellungen machen


## Zaptec Einstellungen

1.  Erstelle in der Zaptec Cloud für jedes ZEV-Objekt einen separaten Account (untenstehenden Beispiel mit einem alias Trick) und teile darin die Berechtigungen für die entsprechende Installation dem erstellten Account aus dem Hauptaccount zu.


Die Berechtigung muss "Besitzer" Rolle einnehmen

Hinweis: Um den Liegenschaftsaccount hinzuzufügen muss dieser auf der Zaptec-Cloud zuerst registriert werden. (Bild links)

![15-Minuten Datenimport – Abbildung 2](/img/funktionen-15-minuten-datenimport/02.jpg)

![15-Minuten Datenimport – Abbildung 3](/img/funktionen-15-minuten-datenimport/03.jpg)

## easee Einstellungen

1.  Erstelle in der easee Cloud für jedes ZEV-Objekt einen Account, die Registierung erfolgt über eine E-Mail (hier in diesem Beispiel einer Alias-E-Mailadresse). Die Handynummer ist ein Pflichtfeld und es kann immer die gleiche Nummer eingetragen werden. 

2.  E-Mail muss bestätigt werden

3.   Teile darin die Berechtigungen für die entsprechende Installation. 


![15-Minuten Datenimport – Abbildung 4](/img/funktionen-15-minuten-datenimport/04.jpg)

4. Wichtig: Immer als "Besitzer oder Admin des Standorts" eintragen.

![15-Minuten Datenimport – Abbildung 5](/img/funktionen-15-minuten-datenimport/05.jpg)

## smart-me Einstellungen

1. Logge dich mit dem smart-me Zielaccount (ZEV-Account) ein. Klicke bei Schnittstellen auf "API". 

![15-Minuten Datenimport – Abbildung 6](/img/funktionen-15-minuten-datenimport/06.png)

2. Klicke oben auf den Link zur API-Schlüssel

3. Erstelle einen neuen Schlüssel, Bennene diesen und vergib die Berechtigung device.readwrite



![15-Minuten Datenimport – Abbildung 7](/img/funktionen-15-minuten-datenimport/07.png)

4. Kopiere den erstellten Token

![15-Minuten Datenimport – Abbildung 8](/img/funktionen-15-minuten-datenimport/08.png)

5. Klicke auf Schnittstellen und wähle Drittanbieter-Import.

![15-Minuten Datenimport – Abbildung 9](/img/funktionen-15-minuten-datenimport/09.png)

6. Logge dich ein oder klicke auf Accept. Erstelle einen Zaptec/Easee Datenimport über "Add"

![15-Minuten Datenimport – Abbildung 10](/img/funktionen-15-minuten-datenimport/10.jpg)

7. Klicke oben rechts auf deinen Accountnamen und wähle Kontoeinstellungen.

8. Wechsle auf API Schlüssel und geben den davor kopierten schlüssel ein. Vergesse nicht zu speichern.

![15-Minuten Datenimport – Abbildung 11](/img/funktionen-15-minuten-datenimport/11.png)

9. Gib den zu importierenden Account der Zaptec/Easee Cloud-Installation an

Wichtig: Bitte nicht mit dem Hauptaccount von Zaptec/Eaasee arbeiten sondern mit der Berechtigung die nun für den Liegenschaft- oder ZEV-Account eingerichtet wurde. 

10\. Warte etwas bis die Stationen im smart-me Account ersichtlich sind.

- Zaptec: ca 25min 

- Easee: ca 3 Stunden


11\. Wir empfehlen im smart-me Account ein Alarm einzurichten, damit ein Unterbruch der Verbindung alarmiert wird

- [https://wiki.smart-me.com/konfiguration/wenndann-aktionen/alarme](https://wiki.smart-me.com/konfiguration/wenndann-aktionen/alarme) 


Was geschieht?

- Für jede importierte Station wird  im smart-me Account ein Zählerpunkt erstellt.

- Nicht verwendete Zählerpunkte von z. B. öffentlichen Stationen können in der [Zählerkonfiguration](https://wiki.smart-me.com/konfiguration/ordnerkonfiguration) auf inaktiv gesetzt werden, um nicht lizenzpflichtig zu sein.

- Nun kann auf der Seite smart-me weiter konfiguriert werden [(smart-me Billing)](https://wiki.smart-me.com/konfiguration/billing). 


Hinweis: Alle Zukünftigen Stationen die mit dieser Installation verbunden werden, werden automatisch ins smart-me Portal migriert. 

## ISE-Load Profile

## smart-me Billing Beispiel

[Test-File](https://drive.google.com/file/d/19fD_H9M23XtC0MXnxbyaTgf1tlUjcLhy/view?usp=sharing)

[Musterrechnung](https://drive.google.com/file/d/1fGI2lC8IzfSzpk6fpke9Xe9cX0l18I2w/view?usp=sharing)
