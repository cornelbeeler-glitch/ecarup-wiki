---
title: 'Webinar eCarUp Backend basic + eaton'
slug: '/drittsysteme/box-proxy-green-motion/webinar-ecarup-backend-basic-eaton'
description: 'eaton Box Proxy und OCPP 29:19'
sidebar_label: 'Webinar eCarUp Backend basic + eaton'
---
## Webinar

<Video src="Jowm4Ke0Z38" title="YouTube Video, Webinaraufzeichnung „eCarUp Grundlagen & Box Proxy / Green Motion“ (Teil 2 Box Proxy)" />

- Einführung [00:00](https://www.youtube.com/watch?v=Jowm4Ke0Z38)

- eCarUp Basics [1:21](https://youtu.be/Jowm4Ke0Z38?si=SuDE9wxrD7aNVNg0&t=81)

- eCarup Live Demo [22:46](https://youtu.be/Jowm4Ke0Z38?si=E4N2BBLPiRUDdoKy&t=1366)

- eaton Box Proxy und OCPP [29:19](https://youtu.be/Jowm4Ke0Z38?si=9uUrVfyatrvgiLUG&t=1759)

## Allgemein

<details id="wie-werde-ich-partner-wo-finde-ich-partner">
<summary>Wie werde ich Partner, wo finde ich Partner?</summary>

- [Partner werden](https://web.ecarup.com/partnerschulung-ecarup/)

- [Partner suchen](https://web.ecarup.com/partner-de/)

</details>

<details id="wo-finde-ich-weitere-informationen">
<summary>Wo finde ich weitere Informationen?</summary>

- Im Wiki sind alle Informationen auf DE und EN. FR enthält derzeit nur das Nötigste und konzentriert sich auf Fahrer und einfache Anwendungsfälle. eCarUp Wiki 

</details>
## Stationsbetreiber

<details id="fragen-zu-preisen">
<summary>Fragen zu Preisen</summary>

- Der Preis pro kWh und pro Stunde aktiver Ladung wird vom Stationsbetreiber selbst festgelegt. Der Preis kann höher oder niedriger sein.

- Es ist möglich, mehrere Preise für eine Station zu definieren, alle öffentlich und dann einen weiteren Preis pro Nutzer, der limitiert ist:  [Webportal](/stationsbetreiber/webportal) 

- Wird das Geld per Kreditkarte eingezogen, fallen 10% Kreditkartengebühren an. Bei einer Inkassolösung ohne Kreditkarte, z.B. [Reports](/funktionen/reports) , entfallen diese Gebühren, da eCarUp nicht mehr in den Geldfluss involviert ist.

- Beim Roaming kannst du den Preis festlegen, den du bekommst, der Preis, der dem Fahrer in Rechnung gestellt wird, liegt nicht mehr in unserer Hoheit und wird vom Roaming-Partner ohne Rücksprache mit uns festgelegt:  [Roaming](/funktionen/roaming) 

- Dynamische preise werden von eCarUp nicht untersützt.

- Hoch- und Niedertarif sind nicht möglich, der Grund ist, dass OCPP dafür nicht ausgelegt ist, es gibt einige Plattformen, die dies anbieten, aber nur den Beginn der Ladung berücksichtigen. Wir haben uns bewusst dagegen entschieden, da einige Energieversorger den Niedertarif nur über Mittag anbieten und dies zur Folge hätte, dass jemand kurz nach Mittag eine Ladung zum Niedertarif aktivieren und dann den ganzen Nachmittag zum Hochtarif zum Niedertarifpreis laden könnte.

</details>

<details id="sind-strafrechtliche-sanktionen-möglich">
<summary>Sind strafrechtliche Sanktionen möglich?</summary>

- Nein, wir haben derzeit keine vernünftige Lösung, die alles abdeckt. Zum Beispiel: Verbrennungsmotoren, die parken. Kabel, die eingesteckt werden und dann weglaufen, ohne die Ladung zu aktivieren, jemand, der bewusst die Ladung z.B. auf 6 Ampere beim Auto drosselt und somit lange auf dem Parkplatz steht und immer etwas lädt, aber nicht viel

</details>

<details id="kann-man-zu-bestimmten-zeiten-stationen-zugänglich-oder-sichtbar-machen">
<summary>Kann man zu bestimmten Zeiten Stationen zugänglich oder sichtbar machen?</summary>

- Ja, [Wiki --> Stationsbetreiber --> Zeiten definieren](/stationsbetreiber/webportal)

</details>

<details id="kann-man-in-der-app-in-echtzeit-sehen-ob-die-station-verfügbar-besetzt-oder-ausgefallen-ist">
<summary>Kann man in der App in Echtzeit sehen, ob die Station verfügbar, besetzt oder ausgefallen ist?</summary>

- Ja

</details>

<details id="ist-es-möglich-den-gesamtverbrauch-in-kwh-einer-ladestation-für-1-jahr-zu-ermitteln">
<summary>Ist es möglich, den Gesamtverbrauch in kWh einer Ladestation für 1 Jahr zu ermitteln?</summary>

- Ja, mit einem [Reports](/funktionen/reports)  

</details>

<details id="können-wir-im-backend-nicht-verschiedene-gruppen-erstellen-um-für-jede-gruppe-unterschiedliche-regeln-mit-preisen-definieren">
<summary>Können wir im Backend nicht verschiedene Gruppen erstellen, um für jede Gruppe unterschiedliche Regeln mit preisen definieren?</summary>

- Ja, [Rollen & Rechte\*](/funktionen/rollen-rechte) 

</details>

<details id="ist-es-möglich-zwei-verschiedene-limiterte-gruppen-zu-erstellen-in-denen-jeweils-ein-anderer-tarif-gilt">
<summary>Ist es möglich, zwei verschiedene „Limiterte“-Gruppen zu erstellen, in denen jeweils ein anderer Tarif gilt?</summary>

- Ja, [Rollen & Rechte\*](/funktionen/rollen-rechte) 

</details>

<details id="bis-zu-welchem-zeitpunkt-werden-die-daten-rückwirkend-gespeichert-bzw-sind-sie-sichtbar---report">
<summary>Bis zu welchem Zeitpunkt werden die Daten rückwirkend gespeichert bzw. sind sie sichtbar? -> Report</summary>

- Aktuell 10 Jahre.

</details>
## Eaton

<details id="bietet-ecarup-ein-lademanagement">
<summary>Bietet eCarUp ein Lademanagement?</summary>

- Nein, dafür ist das OCPP-Protokoll nicht ausgelegt. Dies muss der Hersteller der Ladestation übernehmen.

</details>

<details id="benötige-ich-zusätzliche-hardware-für-den-boxproxy">
<summary>Benötige ich zusätzliche Hardware für den BoxProxy?</summary>

- Nein, nur der QR-Code muss vor Ort angebracht werden.

- Anleitung: [Box-Proxy Green Motion](/drittsysteme/box-proxy-green-motion) 

</details>

<details id="kann-ich-weiterhin-shell-oder-evpass-verwenden">
<summary>Kann ich weiterhin Shell oder evpass verwenden?</summary>

- Ja, das sind ganz normale Roaming Partner für uns. Die Station muss öffentlich und 24/7 verfügbar sein, der Standort muss festgelegt sein und Hubject muss aktiviert sein. Mehr Infos: [Webportal](/stationsbetreiber/webportal), [Roaming](/funktionen/roaming) 

</details>

<details id="wie-kann-ich-eine-eaton-station-einbinden">
<summary>Wie kann ich eine Eaton Station einbinden?</summary>

- OCPP: [Eaton](/ocpp-ladestationen/eaton) 

- Ältere Modelle, die OCPP noch nicht unterstützen: [Box-Proxy Green Motion](/drittsysteme/box-proxy-green-motion) 

- Wichtig, es wird immer ein QR Code benötigt: [QR-Code](/stationsbetreiber/qr-code) 

- Station ist nicht im Wiki im BoxProxy gelistet: In diesem Fall haben wir die HW noch nicht von eaton erhalten und konnten den Test noch nicht durchführen. Bitte bei eaton nachfragen.

</details>

<details id="kann-ich-die-stationen-von-eaton-egal-ob-boxproxy-oder-ocpp-auch-mit-rfid-app-oder-qr-aktivieren">
<summary>Kann ich die Stationen von eaton, egal ob BoxProxy oder OCPP, auch mit RFID, App oder QR aktivieren?</summary>

- Ja

</details>

<details id="ist-es-möglich-dass-während-der-migration-eine-station-gleichzeitig-auf-den-plattformen-von-eaton-und-ecarup-angezeigt-wird">
<summary>Ist es möglich, dass während der Migration eine Station gleichzeitig auf den Plattformen von eaton und eCarUp angezeigt wird?</summary>

- Nein

</details>

<details id="wo-können-wir-die-mit-boxproxy-kompatiblen-eaton-modelle-auf-ihrer-website-finden">
<summary>Wo können wir die mit Boxproxy kompatiblen Eaton-Modelle auf Ihrer Website finden?</summary>

- Hier: [Box-Proxy Green Motion](/drittsysteme/box-proxy-green-motion) 

- Für alle Stationen, die nicht auf der Liste stehen, wenden Sie sich bitte direkt an Eaton.

</details>

<details id="muss-ich-für-die-integration-einen-link-im-eaton-portal-ändern">
<summary>Muss ich für die Integration einen Link im Eaton Portal ändern?</summary>

- Folgen Sie einfach den Anweisungen: [Eaton OCPP](/ocpp-ladestationen/eaton)

- Folgen Sie einfach den Anweisungen: [BoxProxy Green Motion](/drittsysteme/box-proxy-green-motion) 

</details>

<details id="ist-es-möglich-die-auf-der-eaton-plattform-erstellten-konten-auf-die-ecarup-plattform-zu-übertragen">
<summary>Ist es möglich, die auf der Eaton-Plattform erstellten Konten auf die ecarup-Plattform zu übertragen?</summary>

- Nein

</details>

<details id="was-kostet-der-boxproxy">
<summary>Was kostet der BoxProxy?</summary>

- Eine Premium Lizenz pro Ladepunkt (Connector): [Preis](https://web.ecarup.com/preise-ladestationen-backend/) 

</details>
## Fahrer

<details id="wie-aktiviere-ich-eine-station">
<summary>Wie aktiviere ich eine Station?</summary>

- QR-Code ohne App: [Sofort Bezahl Funktion](/fahrer/sofort-bezahl-funktion) 

- App: [App](/fahrer/ecarup-app) 

- RFID, wenn dies in der Fahrer-App hinzugefügt wurde und die Station über einen RFID-Sensor verfügt: [RFID / NFC Tags / CarID](/fahrer/rfid-nfc-tags-carid) 

</details>

<details id="fragen-zur-bezahlung">
<summary>Fragen zur Bezahlung</summary>

- Google Pay, Apple Pay und Kreditkarte sind die Zahlungsmittel, die direkt auf eCarUp geladen werden können.

- Die PostfinanceCard kann nicht als Zahlungsmittel hinterlegt werden, da unser Finanzdienstleister Stripe dies nicht implementiert hat.

- Eine RFID-Karte ist kein Zahlungsmittel, sondern dient nur der Authentifizierung.

</details>

<details id="der-fahrer-der-station-muss-kein-abonnement-abschliessen-sondern-zahlt-nur-für-seinen-verbrauch">
<summary>Der Fahrer der Station muss kein Abonnement abschliessen, sondern zahlt nur für seinen Verbrauch.</summary>

- Korrekt, für den Fahrer fallen keine Gebühren an.

</details>

<details id="können-ladestationen-reserviert-werden">
<summary>Können Ladestationen reserviert werden?</summary>

- Nein

</details>
