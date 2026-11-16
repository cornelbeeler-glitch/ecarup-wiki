---
title: 'eCarUp API'
slug: '/funktionen/ecarup-api'
description: 'Für die Nutzung der eCarUp API benötigst du eine eCarUp Premium Lizenz.'
sidebar_label: 'eCarUp API'
---
Für die Nutzung der eCarUp API benötigst du eine eCarUp Premium Lizenz.

Die API (Application Programming Interface) ist eine Sammlung von Befehlen, die es verschiedenen Softwareanwendungen ermöglichen, miteinander zu kommunizieren. 

[Vorbereitung](#vorbereitung)

[Zugangsdaten für die Autorisierung](#zugangsdaten-für-die-autorisierung)

[Test eCarUp Swagger](#test-ecarup-swagger)

[Beispiel](#beispiel)

[Code-Beispiel](#code-beispiel)

## Vorbereitung

### Zugangsdaten für die Autorisierung

Um die eCarUp API nutzen zu können, gehe wie folgt vor:

1.  Logge dich mit deiner E-Mail und Passwort beim [smart-me Webportal](https://webforms.smart-me.com/Embedded/smartme/SignIn.aspx) ein (Mutterfirma). 

2.  Gehe zu Konfiguration und wähle dort den Punkt API aus. (Bild 1)

3.  Klicke auf Gerät  (Client Credentials) hinzufügen.

4.  Bei der Berechtigung benötigst du user.read und device.read. Klicke danach auf erstellen/speichern. (Bild 2)

5.  Wichtig, danach erscheint ein Feld mit Client ID und Client Secret. Das sind die Zugangsdaten für die API Autorisierung. Speichere diese Zugangsdaten irgendwo bei dir sicher ab.


Das Feld erscheint nur einmal.

![eCarUp API – Abbildung 1](/img/funktionen-ecarup-api/01.png)

Bild 1

![eCarUp API – Abbildung 2](/img/funktionen-ecarup-api/02.png)

Bild 2

## Test eCarUp Swagger

[eCarUp API Swagger](https://public-api.ecarup.com/swagger/index.html)

Beim Swagger kannst du die aktuellen Befehle ausführen und testen. 

Gehe zum [eCarUp Public API Swagger](https://public-api.ecarup.com/swagger/index.html) und gebe die Zugangsdaten, die du beim Schritt 5 erhalten hast, ein.

![eCarUp API – Abbildung 3](/img/funktionen-ecarup-api/03.png)

## Beispiel

Mit dem Befehl "get/v1/history/station/&#123;id&#125;" können auch Fahrerstatistiken pro Ladestation herausgezogen werden.

![eCarUp API – Abbildung 4](/img/funktionen-ecarup-api/04.png)

Fahrerstatistik mit bekanntem Fahrer

![eCarUp API – Abbildung 5](/img/funktionen-ecarup-api/05.png)

Fahrerstatistik mit unbekanntem Fahrer

## Code-Beispiel

findest du unter: [https://github.com/eCarUp/ecarup-api-examples](https://github.com/eCarUp/ecarup-api-examples)

![eCarUp API – Abbildung 6](/img/funktionen-ecarup-api/06.png)
