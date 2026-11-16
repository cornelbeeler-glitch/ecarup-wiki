---
title: 'Webasto Live'
slug: '/ocpp-ladestationen/webasto'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Webasto Live'
---
<div className="row">
<div className="col col--6">

## Backend Integrationsanleitung

Webasto Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann.

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

</div>
<div className="col col--6 text--center">

![Webasto Live – Abbildung 1](/img/ocpp-ladestationen-webasto/01.jpg)

</div>
</div>

[Webasto Wallbox](https://www.webasto.com/de-de.html)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung der Webasto Live

<Video src="qm5e3OEWeP4" title="YouTube Video, Webasto Ladestation ins eCarUp Backend integrieren" />

Auf die Station mit Ethernet verbinden

1.  Laptop muss folgende IP 192.168.0.150 und Subnetmaske: 255.255.255.0 haben.

2.  Öffne den Browser deines Laptops und gib folgende URL in die Adressleiste ein 192.168.0.100

3.  Login Daten entnimmst du aus dem mitgeliefertem Benutzerhandbuch (nur Passwort nötig) 

### Weboberfläche

### Backend

- Gewünschten Verbindungstyp anwählen

- ChargePoint ID kann geändert werden jedoch erscheint die Station im eCarUp Portal immer mit Ihrer Seriennummer

- OCPP-j 1.6 anwählen

- Ganze URL von deinem Account beim Websocket einfügen.

- Speichern und Neustarten

![Webasto Live – Abbildung 2](/img/ocpp-ladestationen-webasto/02.png)

### Energiezähler

- Beim Energiezähler kann der Uploadintervall der Leistungsübertragung heruntergesetzt werden. Dieses legt fest, in welchem Intervall die Station uns die Verbraucherdaten (kW) schickt. 

![Webasto Live – Abbildung 3](/img/ocpp-ladestationen-webasto/03.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Webasto Live – Abbildung 4](/img/ocpp-ladestationen-webasto/04.png)

![Webasto Live – Abbildung 5](/img/ocpp-ladestationen-webasto/05.png)
