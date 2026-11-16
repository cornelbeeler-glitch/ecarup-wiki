---
title: 'Stations Verwaltung'
slug: '/funktionen/stations-verwaltung'
description: 'Hier kannst du Stationen Verwalten.'
sidebar_label: 'Stations Verwaltung'
---
Hier kannst du Stationen Verwalten.

Du kannst nach folgenden Optionen filtern:

- Name.
    Gebe dazu den Namen der Ladestation ein.

- Adresse
    Gebe dazu die Adresse der Ladestation ein.

- Zugriffsart
    Gebe dazu die Zugriffsart ein (Öffentlich, Limitiert oder Privat/Wartung)

- Preis pro kWh
    Gebe dazu den Preis pro kWh ein.

- Preis pro Stunde
    Gebe dazu den Preis pro Stunde ein.

- Status
    Gebe dazu den Status der gesuchten Station ein (Verfügbar, Verbunden oder Besetzt)

![Stations Verwaltung – Abbildung 1](/img/funktionen-stations-verwaltung/01.png)

⚠️Wichtig: Korrespondiert der Status nicht mit der Wallbox ?

- Bei Unterbrüchen auf der Wallbox (insbesondere bei aktiven Ladevorgänge) kann es vorkommen, dass bei eCarUp der Status auf rot ist (aktiver Ladevorgang), aber die Wallbox wieder bereit ist. Das heisst, dass wir von der Station noch keinen Befehl für ein Ende des Ladevorgangs erhalten haben (Stop Transaction) erhalten haben. 

- Neustart oder Reset kann Abhilfe schaffen.

Ladeleistung

- Wird die aktuelle Ladeleistung während dem Ladevorgang nicht angezeigt ? Schaue dir folgenden Artikel in der [Wartung](/funktionen/wartung) an. 

## Station konfigurieren

<div className="row">
<div className="col col--8">

Klicke rechts auf die drei Punkte zum bearbeiten der Ladestation. Danach sollte sich dieses Menü öffnen bei dem du unter folgenden Punkten auswählen kannst:

- Bearbeiten

- Anschluss bearbeiten

- Standort setzen

- Benutzer definieren

- Zeiten definieren

- Aktivieren

</div>
<div className="col col--4 text--center">

![Stations Verwaltung – Abbildung 2](/img/funktionen-stations-verwaltung/02.png)

</div>
</div>

## Bearbeiten

Unter Bearbeiten kannst du Folgendes machen:

- Name und Beschreibung der Station ändern
    (Diese Informationen sind in der App auf der Karte sichtbar)

- Station löschen
    (Um diese zu löschen muss man den vollständigen Stationsnamen eingeben. Diesen sieht man unter dem Punkt "Informationen" im gleichem Fenster.)

- Station auf nicht lizensiert setzen
    Station wird auf inaktiv geschaltet, braucht somit keine Lizenz jedoch funktioniert Sie auch nicht mehr mit eCarUp.

- Bilder zu den Stationen hochladen
    Dies ist zwar keine Pflicht, dennoch empfehlenswert, da der Fahrer diese Bilder auf der App sieht und somit die Ladestation besser finden und identifizieren kann.

⚠️Wichtig: Es eignen sich Bilder mit einer Grösse von ca. 605 x 806 Pixel. 

![Stations Verwaltung – Abbildung 3](/img/funktionen-stations-verwaltung/03.png)

![Stations Verwaltung – Abbildung 4](/img/funktionen-stations-verwaltung/04.png)

## Anschluss bearbeiten

Informationen:

(diese Informationen sind in der App sichtbar)

- Name des Anschlusses

- Beschreibung (optional)

- Anschlusstyp (Steckertyp) \[empfehlenswert\]

- Max. Energie (kW) \[empfehlenswert\]
    Diese Einstellungen sind zwar nicht zwingend notwendig, jedoch empfehlenswert, da der Fahrer somit die Leistung der Ladestation sieht. Zudem (falls Hubject aktiviert ist) wird dies auch korrekt übertragen.

Preise:

- Preise für Energie und Zeit setzen
    Der Preis kann auch nachträglich geändert werden. Der Preis pro kWh ist hierbei der Strom und der Preis pro h ist hierbei ein "Parktarif".

⚠️Wichtig: Beim Zugriff "limitiert" wird das Feld ausgegraut, da in diesem Fall der Preis bei "Benutzer definieren oder bei der [erweiterten Nutzerverwaltung](/funktionen/erw-nutzerverwaltung)" gesetzt wird.

Zugriff:

- Hier kann der Zugriff der Station verwaltet werden.
    Es kann zwischen folgenden Zugriffsvarianten gewählt werden:
    Öffentlich, Privat/Wartung und Limitiert.

- Öffentlich:
    Die  Ladestation ist für jeden sichtbar und zugänglich. Jeder kann somit Laden.

- Limitiert:
    Nur ausgewählte User sind zugelassen die Ladestation zu verwenden. Andere User sehen sie nicht und können diese auch nicht benutzen.

![Stations Verwaltung – Abbildung 5](/img/funktionen-stations-verwaltung/05.png)

![Stations Verwaltung – Abbildung 6](/img/funktionen-stations-verwaltung/06.png)

![Stations Verwaltung – Abbildung 7](/img/funktionen-stations-verwaltung/07.png)

![Stations Verwaltung – Abbildung 8](/img/funktionen-stations-verwaltung/08.png)

- Privat / Wartung:
    Die Ladestation ist nur ersichtlich und zugänglich für den Installationsuser. Kein anderer User kann diese verwenden, auch nicht wenn dieser freigegeben wurde.

- Benutzer / Zeiten definieren:
    Siehe unten

Automatischer Ladevorgang:

- Diese Option wird verwendet, wenn man die Ladestation im Privatem gebraucht. Somit stellt man die Autorisierung aus, heisst einstecken und Laden.

Hubject (Roaming-Netzwerk):

- Die Ladestation wird in das Roaming-Netzwerk Hubject gepusht und ist somit auch für Fahrer, welche nicht eCarUp benutzen (sprich Move, Swisscharge etc.) ersichtlich und kann benutzt werden.

- Diese Option ist nur verfügbar, wenn die Ladestation 24/7 öffentlich ist. 

- Sobald dies eingeschaltet wurde, muss ein Preisplan gewählt werden. Es wird zwischen LowCHF, MediumCHF, HighCHF und ExtraCHF gewählt.

- Dabei garantieren wir, dass der Stationsinhaber 90% vom angegebenen Preisplan bekommt, sprich bei 0,50CHF sind es 0,45CHF. Was der Fahrer schlussendlich zahlt, können wir nicht sagen, da die dritt Anbieter diese Preise definieren.

⚠️Wichtig: Die Ladestation erscheint nach dem Einschalten von Hubject nicht direkt auf anderen Plattformen. Dies kann manchmal bis zu 1 Woche brauchen. Dies liegt leider nicht in unserer Macht, da die anderen Anbieter diese aufschalten müssen.

## Standort bearbeiten

<div className="row">
<div className="col col--8">

Hier wird der Standort der Station gesetzt (falls dieser benötigt wird)
Falls man nicht möcht, dass andere Fahrer die Station auf der Map sehen, kann der Standort auch leer gelassen werden.
Wenn die Station limitiert ist, ist auch der Standort limitiert, heisst dieser wird nur für die ausgewählten Benutzer angezeigt.

- Bei der Adresse sollte geschaut werden, dass diese auch wirklich existiert.

- Wenn man diese eingibt, sollte man auf "Adresse suchen" klicken, damit unser System die Adresse automatisch richtig formatiert.

- Wenn mehrere Ladestationen auf einem Punkt sind wird empfohlen diese (wie im Beispiel Bild) auseinander zu ziehen, sodass diese nicht alle auf einem Fleck sind. Dies ist besser für den Fahrer, da er es so dann übersichtlicher hat.

- Wenn der Standort gesetzt wurde wird dieser direkt auf der eCarUp-Map angezeigt.

</div>
<div className="col col--4 text--center">

![Stations Verwaltung – Abbildung 9](/img/funktionen-stations-verwaltung/09.png)

</div>
</div>

## Benutzer definieren

In diesem Menüpunkt können Benutzer einzeln definiert werden. 

Füge Benutzer einzeln hinzu, indem du oben Rechts auf "Benutzer hinzufügen" klickst.  Danach kannst du die Email-Adresse des Benutzers eingeben und den Tarif definieren.

Aufgepasst, dass die Email-Adresse korrekt eingegeben wird, da man keine Fehlermeldung bekommt, wenn man ein Konto angibt, welches nicht existiert.

![Stations Verwaltung – Abbildung 10](/img/funktionen-stations-verwaltung/10.png)

## Zeiten definieren

<div className="row">
<div className="col col--8">

Wenn man möchte, dass die Ladestation Zeitlich begrenz öffentlich oder limitiert ist, kann man diese unter "Zeiten definieren" einstellen. Dort kann man zwischen "Öffentlich", "Privat / Wartung" und "Limitiert" auswählen.

Öffentlich: Jeder hat Zugriff auf die Ladestation und kann laden.

Privat / Wartung: Nur der Stationsbetreiber hat Zugriff auf die Ladestation keine anderen Nutzer auch nicht diese, welche Freigegeben wurden.

Limitiert: Nur freigegebene Nutzer haben Zugriff auf die Ladestation.

Wenn man während der Umstellung lädt, wird die Ladung nicht automatisch beendet. Das Fahrzeug bleibt noch eingesteckt, bis der Fahrer das Auto abzieht und die Ladung beendet.

</div>
<div className="col col--4 text--center">

![Stations Verwaltung – Abbildung 11](/img/funktionen-stations-verwaltung/11.png)

</div>
</div>

## Aktivieren

Unter dem Punkt "Aktivieren" kann man die Ladestation beziehungsweise die Ladung aktivieren und somit auch freigeben. In dieser Einstellung kann man wählen, ob man diese für 1h, 2, 4h, 8h oder 12h freischaltet. Ein Tarif kann man jedoch nicht definieren und ist immer 0 CHF.

Dies kann man benutzen wenn man zum Beispiel eine limitierte Station hat, welche keinen "Gast-Benutzer" hat und man somit dem Gast eine Ladung freigibt.

![Stations Verwaltung – Abbildung 12](/img/funktionen-stations-verwaltung/12.png)
