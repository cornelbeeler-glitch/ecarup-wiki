---
title: 'Alarme'
slug: '/funktionen/wartung/alarme'
description: 'Diese Funktion ist ein Bestandteil der Wartung, welche Lizenzpflichtig ist.'
sidebar_label: 'Alarme'
---
Diese Funktion ist ein Bestandteil der Wartung, welche Lizenzpflichtig ist.

## Information

Mit der Alarmfunktion können für gewisse Aktionen automatische Benachrichtigungen per E-Mail konfiguriert werden. Damit sollen vor allem Verbindungsausfälle (Ladestationen gehen offline) erkannt und eine proaktive Reaktion ermöglicht werden. 

![Alarme – Abbildung 1](/img/funktionen-wartung-alarme/01.png)

Die Alarmfunktion steht für alle via OCPP eingebundenen Ladestationen zur Verfügung (Alarmmeldungen für [Pico](/smart-me-pico) Ladestationen können via den [smart-me Wenn / Dann Akionen](https://wiki.smart-me.com/konfiguration/wenndann-aktionen/alarme) eingerichtet werden). Aktuell können für drei Ereignisse Alarmmeldungen erfasst werden:

1.  Aktivierung einer Ladesession

2.  Deaktivierung einer Ladesession

3.  Alarm für Stationen mit Status "offline" oder "inaktiv" (inkl. einer Benachrichtigung bei Wiederherstellung der Verbindung)


Wichtig: Die E-Mail benachrichtigung wird mit unterschiedlichem Betreff versendet. Eine Mail für das offline gehen und eine Mail für das online kommen der Station. 


Die Alarme können pro Stationsgruppe oder für einzelne Station hinterlegt werden.

Achtung: In der aktuellen Fassung kann nur die englische Sprachbenachrichtigung ausgewählt werden.

## Konfiguration

![Alarme – Abbildung 2](/img/funktionen-wartung-alarme/02.png)

1.  Klicke auf erstellen

2.  Benenne deine Alarm-Regel

3.  Du kannst zwischen einer Station und der Stationsgruppe entscheiden

4.  Wähle die gewünschte Station aus / wenn du dich für die Gruppe entschieden hast, kannst du dort die Gruppe auswählen

5.  Auslösertyp wählen:


- Aufladung gestartet

- Aufladung gestoppt

- Station nicht verfügbar


6.  Hier kannst du die E-Mail Adresse hinterlegen.


Wichtig, es können auch mehrere Adressen hinterlegt werden. Du kannst die verschiedenen Empfänger mit einem Semikolon ; zwischen den Adressen trennen.

Beispiel: info@ecarup.com;support@ecarup.com

7.  Die Alarm E-Mail kommt in einem ersten Schritt nur in Englisch. 

8.  Speichern


## Funktion der "offline" oder "inaktiv" Meldung

Der Alarm für Stationen mit Status "offline" oder "inaktiv" funktioniert folgendermassen:

Dieser Status wird vom eCarUp Backend automatisch vergeben, wenn sich eine Station länger als 15 Minuten nicht mehr mit dem Backend verbindet und eine Aktivierung / Abrechnung darum nicht mehr gewährleistet werden kann . Danach ist das Vorgehen folgendermassen:


1.  Bei einem Ausfall von länger als 15 Minuten wird an alle definierten Empfänger eine E-Mail versandt.

2.  Bleibt der Ausfall bestehen, wird nach einer Stunde eine weitere E-Mail an alle definierten Empfänger versandt.

3.  Bleibt der Ausfall weiterhin bestehen, wird nach 24 Stunden eine weitere E-Mail an alle definierten Empfänger versandt.


Danach ist der Alarm für das eCarUp System abgeschlossen und wird nicht weiter verfolgt. Ausfälle von weniger als 15 Minuten werden nicht als E-Mail verarbeitet.

Die Ursache für einen Ausfalls ist in den allermeisten Fällen ein Ausfall (oder eine Störung) des Internets, welches die Kommunikation mit unseren Servern verunmöglicht. Seltener kann es auch eine Stromausfall sein. In beiden Fällen verbindet sich die Station nach Behebung der Ursache automatisch wieder mit dem Backend (Status "Bereit\*) und kann normal weiter genutzt werden.

Wichtig: beim Online gehen der Station kommt ebenfalls eine Meldung (E-Mail), dass die Station wieder verfügbar ist. 

## Wann wird ein Alarm abgesetzt

Beim Detektieren von Lost oder Finish Connection/Processing wird ein Alarm abgesetzt.

![Alarme – Abbildung 3](/img/funktionen-wartung-alarme/03.png)

![Alarme – Abbildung 4](/img/funktionen-wartung-alarme/04.png)

## Funktion bei Status "Faulted" oder "Unavailable"

Sobald von der Station der Status „Faulted“ oder „Unavailable“ empfangen wird, löst eCarUp nach einer Wartezeit von 15 Minuten automatisch einen Alarm aus. 

![Alarme – Abbildung 5](/img/funktionen-wartung-alarme/05.png)

Wenn der Status als gelöst markiert ist und die Station uns den Status "Available" sendet, benachrichtigen wir umgehend den Stationsbetreiber, damit dieser über die Wiederherstellung der Funktion informiert wird.
