---
title: 'Inbetriebnahme OCPP-Station'
slug: '/stationsbetreiber/inbetriebnahme-ocpp-station'
description: 'eCarUp empfiehlt folgendes Vorgehen:'
sidebar_label: 'Inbetriebnahme OCPP-Station'
---
## eCarUp empfiehlt folgendes Vorgehen:

### 1\. Installation der Station

- Stelle sicher, dass deine Ladestation mit eCarUp kompatibel ist. Eine immer aktuelle Liste findest du unter dieser [Wiki-Seite](/ocpp-ladestationen). 

- Installiere deine Station und nehme diese in Betrieb. Die Stationen müssen eine stabile Internetverbindung haben und der Port 53 (DNS) & Port 80 (oder der auf der Station konfigurierte Port) muss ausgangsseitig offen sein. Die Stationen müssen für eine erfolgreiche Integration mit unseren Servern kommunizieren können. Stelle sicher, dass die Kommunikation nicht blockiert wird (z.B. Firewalls etc.).

- Falls du noch auf der Suche nach einer SIM-Karte bist, empfehlen wir SIM-Karten von unserem [Partner](/drittsysteme/provider-sim-karte).

- Du musst Zugriff auf das Interface der Station haben und im gleichen Netzwerk sein.


⚠️Wichtig: Wenn deine Station nicht auf der Liste der kompatiblen Stationen erscheint, nehme bitte mit uns Kontakt auf.

![Inbetriebnahme OCPP-Station – Abbildung 1](/img/stationsbetreiber-inbetriebnahme-ocpp-station/01.png)

### 2\. Aktivieren und Registrieren

- Kreiere einen eCarUp Account: [Registrierung](https://admin.ecarup.com/authentication/login).

- Halte den OCPP URL bereit für die Verbindung zwischen Station und Account. 

- WS, WSS & WSS inkl. Basic Auth. Erfahre hier mehr dazu: [Webportal](/stationsbetreiber/webportal)


Wichtig: Beim verwenden des WSS und WSS inkl. Basic muss die gewünschte Station das unterstützen können. 

OCPP URL: 

![Inbetriebnahme OCPP-Station – Abbildung 2](/img/stationsbetreiber-inbetriebnahme-ocpp-station/02.png)

- Damit du über die Kreditkarte abrechnen und Geld von den Einnahmen empfangen kannst, musst du deinen Account verifizieren. Die Informationen dazu findest du auf dieser [Seite](/stationsbetreiber/account-verifizieren).

- Verwende unsere Anleitung zur Verbindung Ihrer OCPP Station mit dem [eCarUp Backend](/ocpp-ladestationen).


⚠️Wichtig: eCarUp erstellt keine Messpunkte im Voraus, sondern erst bei der erstmaligen Kommunikation zwischen Station und Backend. D.h. solange die Station keine Informationen über das  OCPP- Protokoll sendet, weiss eCarUp nicht, dass diese Ladestation existiert.  

Dies kann in folgenden Fällen eintreten:

- -   1.  -   keine Internetverbindung

            - Firewall blockiert die ausgehende Kommunikation

            - Die SIM Karte ist nicht aktiv oder findet keine Verbindung

- Sobald die Station aktiv die Kommunikation zu eCarUp aufgebaut hat, erstellt das System einen Messpunkt in deinem Account (Stationsmanagement).


### 3\. Ladepunkt einrichten

Du kannst den Ladepunkt nach deinen Bedürfnissen einrichten.

- [Preise, Standort, Spezialuser sowie weitere Parameter](/stationsbetreiber/webportal) definieren.

- Damit die User möglichst einfach zu Strom kommen, kannst du die Stationen noch mit [QR-Codes und einer Beschriftung](/stationsbetreiber/qr-code) ausrüsten.

- Falls du zudem [RFID/NFC Tags](/fahrer/rfid-nfc-tags-carid) verwenden möchtest, findest du hier alle Informationen.

- Falls die Station optional im [Roaming-Netzwerk](/funktionen/roaming) veröffentlicht werden soll, findest du hier alle Informationen. Bitte beachte die damit einhergehenden Einschränkungen bezgl. Öffnungszeiten und Pricing.

- eCarUp empfiehlt am Ende immer eine Testladung durchzuführen.




![Inbetriebnahme OCPP-Station – Abbildung 3](/img/stationsbetreiber-inbetriebnahme-ocpp-station/03.png)
