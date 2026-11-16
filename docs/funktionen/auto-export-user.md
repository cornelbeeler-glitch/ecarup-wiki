---
title: 'Auto-Export (User)'
slug: '/funktionen/auto-export-user'
description: 'Um alle eCarUp- und Goldpartner-Funktionen zu nutzen, braucht es eine engere Zusammenarbeit.'
sidebar_label: 'Auto-Export (User)*'
---
Um alle eCarUp- und Goldpartner-Funktionen zu nutzen, braucht es eine engere Zusammenarbeit. Melde dich für mehr Infos einfach bei verkauf@ecarup.com.

## Auto-Export (User)

### Mit der eCarUp User Export Funktion sind Sie in der Lage, User basierende Transaktionen aus dem eCarUp Portal direkt ins IS-E zu transportieren.

Wichtig hierfür sind folgende Punkte:

- Der Fahrer muss bekannt sein und mit dem Preis 0.00.- hinterlegt werden.

- Definieren Sie eine Stationsgruppe, worin der Fahrer sich bewegen resp. laden kann.

- Ein Server (FTPs oder SFTP) muss auf Ihrer Seite vorhanden sein. 


### 1\. Zielort des Auto-Exportes definieren

![Auto-Export (User) – Abbildung 1](/img/funktionen-auto-export-user/01.png)

![Auto-Export (User) – Abbildung 2](/img/funktionen-auto-export-user/02.png)

- Gehen Sie bei der Konfiguration der Reiter im Auto-Export von rechts nach links vor (analog smart-me)

- Im Menüpunkt Zielort anwählen

- Danach können Sie einmalig den Server für alle Auto-Exporte bei eCarUp  einrichten (SFTP / FTPS)

- Bei SFTP ist der Port immer 22 

- Bei FTPS ist der Port immer 21


### 2\. Formatierung des Auto-Exportes einrichten

![Auto-Export (User) – Abbildung 3](/img/funktionen-auto-export-user/03.png)

![Auto-Export (User) – Abbildung 4](/img/funktionen-auto-export-user/04.jpg)

- Danach Formatieren anwählen (ebenfalls einmalige Einrichtung)

- Beim Metering Code kann folgendes definiert werden:

    -  DeviceLocationID: Identifikationsnummer  im IS-E

    -  FactoryNo: Fabrikationsnummer

    - InternalNo: Interne Nummer

    - Metering Code: definierten Code für den Meter/Zähler

- Neu kann der Obis-Code zwischen 1.8.0 und 1.9.0 ausgewählt und definiert werden.


1.8.0 = Virtueller Zählerstand

1.9.0 = Vorschub

Wir empfehlen, diese Einstellungen mit dem IS-E Verantwortlichen Ihrer Organisation abzusprechen. 

### 3\. Aufgaben des Auto-Exports definieren

![Auto-Export (User) – Abbildung 5](/img/funktionen-auto-export-user/05.png)

![Auto-Export (User) – Abbildung 6](/img/funktionen-auto-export-user/06.png)

- Danach Aufgabe anwählen. Hier wird definiert, für welchen User und welche Stationsgruppe die Daten exportiert werden. Für jeden Auto-Export muss eine Aufgabe eingerichtet werden.

- Definieren Sie den eCarUp-User  (via verwendete Email-Adresse für den eCarUp Account)

- Wählen Sie die korrespondierende Stationsgruppe 

- Danach Format und Zielort - welche schon vorgängig in Schritt 1 und 2 definiert wurden - einfügen

- Das Upload-Intervall einstellen

- Abschliessend kontrollieren, ob der Status hinten rechts auf "OK " wechselt, dann werden die Daten auf den Server exportiert


Der ganze Funktionsumfang ist natürlich nicht abschliessen und der Goldpartner bei eCarUp profitiert automatisch bei zukünftigen Features mit. 

## Test XML File

<Embed src="https://drive.google.com/file/d/1n96bHZNEQ66znDATheV5jT1Bjro4MF9h/preview" aspect="1.350" title="Drive, XML File Auto Export eCarUp.pdf" />

XML File Auto Export eCarUp.pdf
