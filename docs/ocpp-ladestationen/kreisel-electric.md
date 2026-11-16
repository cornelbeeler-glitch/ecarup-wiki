---
title: 'Kreisel Electric'
slug: '/ocpp-ladestationen/kreisel-electric'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Kreisel Electric'
---
## Backend Integrationsanleitung

Kreisel Electric Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

### Integration von OCPP Stationen:

<div className="row">
<div className="col col--6">

1.  Stelle sicher, dass deine Ladestationen installiert und online sind.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

</div>
<div className="col col--6 text--center">

![Kreisel Electric – Abbildung 1](/img/ocpp-ladestationen-kreisel-electric/01.png)

</div>
</div>

[Kreisel CHIMERO](https://www.kreiselelectric.com/products/high-power-charger/)

## CHIMERO (Leistungsmodelle 180 und 240)

- Firmware muss mindestens Version : 3.2.2 enthalten.

### Hinweis

- Ein Kreditkartenterminal kann parallel zu eCarUp betrieben werden, um maximale Flexibilität zu gewährleisten. Für weitere Informationen steht dir Kreisel Electric gerne zur Verfügung. 

### Einbindung

- Melde dich mit deinen Login Daten auf der Kreisel Plattform (Kreisel Cloud) an

- Die Ladestation wird von Kreisel Electric zugewiesen

### Schritt 1

- Wähle deine Ladestation aus, die mit dem eCarUp Backend kommunizieren soll. 

![Kreisel Electric – Abbildung 2](/img/ocpp-ladestationen-kreisel-electric/02.png)

### Schritt 2

- Gehe zu den Settings und hinterlege den URL wie folgt

- Backend URL: wss://[www.ecarup.com/api/Ocpp16](http://www.ecarup.com/api/Ocpp16)

- Backend Charger ID

Beispiel: wss://[www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508](http://www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508)

Nur die ID nach dem OCPP16/XXXXXXX

![Kreisel Electric – Abbildung 3](/img/ocpp-ladestationen-kreisel-electric/03.png)

### Schritt 3

- Klicke auf "Apply Configruation", danach sollte sie in den gewünschten eCarUp Account kommunizieren. 

## Erweiterte Einstellung via Wartungstool von eCarUp !

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Kreisel Electric – Abbildung 4](/img/ocpp-ladestationen-kreisel-electric/04.png)

![Kreisel Electric – Abbildung 5](/img/ocpp-ladestationen-kreisel-electric/05.png)
