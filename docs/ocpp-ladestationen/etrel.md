---
title: 'Etrel'
slug: '/ocpp-ladestationen/etrel'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Etrel'
---
<div className="row">
<div className="col col--8">

## Backend Integrationsanleitung

Etrel Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--4 text--center">

![Etrel – Abbildung 1](/img/ocpp-ladestationen-etrel/01.jpg)

</div>
</div>

[Etrel Wallbox](https://etrel.com/)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung der Etrel Wallbox

- Öffne die Netzwerk und Internet Einstellungen ihres PC\`s

- Hier musst du eine statische IP-Adresse vergeben, z.B. 192.168.1.50

- Danach verbindest du dein PC mit der Wallbox und öffne im Browser folgende "Default"  IP der Station: 192.168.1.250 genauere Login Daten entwendest du bitte aus der mitgelieferten Anleitung

- Software Version muss mindestens 4.0.4 sein

![Etrel – Abbildung 2](/img/ocpp-ladestationen-etrel/02.png)

Unter Diagnostics kannst du deinen aktuellen Software Stand überprüfen. 

1.  Bei Device Mode bitte umstellen von 1. User ohne Autorisierung zu mehreren Usern mit Autorisierung!

![Etrel – Abbildung 3](/img/ocpp-ladestationen-etrel/03.png)

2\. Über EVSE Configuration kannst du den generierten QR-Code aus dem eCarUp Webportal auf dem Display des Chargers aufzeigen lassen. 

Benutze hierfür immer https://ecarup.com/app/?serial=xxxxxxxxxxxxx (benutzerdefiniert siehe Beispiel rechts)

![Etrel – Abbildung 4](/img/ocpp-ladestationen-etrel/04.png)

![Etrel – Abbildung 5](/img/ocpp-ladestationen-etrel/05.png)

3\. Bei User unter Charging autohrization auf Central System Only umstellen. 

![Etrel – Abbildung 6](/img/ocpp-ladestationen-etrel/06.png)

4\. Connectivity, ein Medium entweder Ethernet oder WiFi Verbindung auswählen.

5\. Die Kommunikation mit dem Central System "enabled"

6\. Bei Central System Connectivity unter Endpoint URL dein eCarUp URL aus dem Stationsbesitzter Account hinzufügen.

![Etrel – Abbildung 7](/img/ocpp-ladestationen-etrel/07.png)

### Die Additional Settings beachten:

1.  Hearbeat Intervall auf 60s

2.  Meter Values auf 60s

und zum Schluss Speichern nicht vergessen. 

![Etrel – Abbildung 8](/img/ocpp-ladestationen-etrel/08.png)

### Schlusskontrolle:

<div className="row">
<div className="col col--8">

- Wenn die "Cloud" wie im Bild rechts aus sieht, hat die Station eine erfolgreiche Verbindung zum Backend aufgenommen.

</div>
<div className="col col--4 text--center">

![Etrel – Abbildung 9](/img/ocpp-ladestationen-etrel/09.png)

</div>
</div>

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Etrel – Abbildung 10](/img/ocpp-ladestationen-etrel/10.png)

![Etrel – Abbildung 11](/img/ocpp-ladestationen-etrel/11.png)
