---
title: 'Créer un code QR'
slug: '/stationsbetreiber/qr-code'
description: 'Les stations eCarUp peuvent être munies d''un code QR.'
sidebar_label: 'Code QR'
---
Les stations eCarUp peuvent être munies d'un code QR. Celui-ci remplit plusieurs fonctions :

- Les utilisateurs de l'app eCarUp peuvent scanner le code QR avec l'app et arrivent alors directement à la bonne station.

- Les utilisateurs sans l'app eCarUp peuvent scanner le code QR avec l'appareil photo de leur téléphone et payer ensuite une seule fois via notre [paiement immédiat](/fahrer/sofort-bezahl-funktion) sur le web.

## Générateur d'étiquettes & guide vidéo

En tant qu'exploitant de station, vous pouvez désormais créer vos propres étiquettes pour vos bornes de recharge. Trois modèles sont disponibles. Un PDF au format A4 est généré, puis imprimé sur des étiquettes. Nous recommandons des étiquettes résistantes aux intempéries :

- Petit 42.3 x 21.2mm, Zweckform L7911-10

- Moyen : 99.1 x 42.3mm, Zweckform J4776-10, Herma 9533

- Grand : 99.1 x 67.7mm,  Zweckform L4715-20

Lors de l'impression, veillez à ce que le PDF ne soit pas mis à l'échelle.

Accédez au générateur d'étiquettes ici :
[https://ecarup-tools.azurewebsites.net/](https://ecarup-tools.azurewebsites.net/) 

1.  Utilisez le lien mentionné ci-dessus.

2.  Cliquez en haut à droite sur Login et utilisez pour cela votre login eCarUp.

3.  Sélectionnez Station Labels sur le côté gauche.

4.  Vos points de recharge sont listés.

5.  Sélectionnez le point de recharge souhaité et cliquez sur Create.

6.  Choisissez la taille et cliquez sur Continue.

7.  Remplissez les coordonnées et cliquez sur suivant (weiter).

8.  L'étiquette de votre borne de recharge est créée.

<Video src="XZsSTTjWRq0" title="Vidéo YouTube, créer une étiquette avec le générateur de codes QR" />

![Créer un code QR – Figure 1](/img/stationsbetreiber-qr-code/01.png)

![Créer un code QR – Figure 2](/img/stationsbetreiber-qr-code/02.png)

## Exemples de tailles d'étiquettes

<Embed src="https://drive.google.com/file/d/14jB4ijGYBqT_-VNWn3m63W9t4OAA5WsQ/preview" aspect="1.284" title="Drive, QR-Code Beispiel KLEIN.pdf" />

QR-Code Beispiel KLEIN.pdf

<Embed src="https://drive.google.com/file/d/14l4YzEHyXDPbXo0LqbHBfGF-ifG3HsbU/preview" aspect="1.299" title="Drive, QR-Code Beispiel GROSS.pdf" />

QR-Code Beispiel GROSS.pdf

<Embed src="https://drive.google.com/file/d/14tHDMxWWF1TYVasyjddI8FBAGY_7imtv/preview" aspect="1.350" title="Drive, QR-Code Beispiel MITTEL.pdf" />

QR-Code Beispiel MITTEL.pdf

## Créer un code QR manuellement & guide vidéo

Il est possible de créer un code QR manuellement.

Pour ce faire, sélectionnez la station souhaitée dans le portail web et cliquez sur Générer (Generieren). Veuillez noter que pour les stations comportant plus d'une prise (Connector), vous devez sélectionner celle-ci explicitement.

Pour un résultat optimal, nous vous recommandons de toujours utiliser notre générateur d'étiquettes.

![Créer un code QR – Figure 3](/img/stationsbetreiber-qr-code/03.png)

<Video src="G68GjgYycLc" title="Vidéo YouTube, créer un code QR" />

## Exemple d'étiquetage propre (conçu par le client lui-même)

<div className="row">
<div className="col col--4 text--center">

![Créer un code QR – Figure 4](/img/stationsbetreiber-qr-code/04.png)

</div>
<div className="col col--4 text--center">

![Créer un code QR – Figure 5](/img/stationsbetreiber-qr-code/05.png)

</div>
<div className="col col--4 text--center">

![Créer un code QR – Figure 6](/img/stationsbetreiber-qr-code/06.jpg)

</div>
</div>

<div className="row">
<div className="col col--4 text--center">

![Créer un code QR – Figure 7](/img/stationsbetreiber-qr-code/07.jpg)

</div>
<div className="col col--4 text--center">

![Créer un code QR – Figure 8](/img/stationsbetreiber-qr-code/08.jpg)

</div>
<div className="col col--4 text--center">

![Créer un code QR – Figure 9](/img/stationsbetreiber-qr-code/09.jpg)

</div>
</div>

<div className="row">
<div className="col col--6 text--center">

![Créer un code QR – Figure 10](/img/stationsbetreiber-qr-code/10.png)

</div>
<div className="col col--6 text--center">

![Créer un code QR – Figure 11](/img/stationsbetreiber-qr-code/11.png)

</div>
</div>

## Associer un code QR existant à une nouvelle station

1.  Scannez le code QR existant.

2.  Copiez le code de station à partir de l'adresse URL. Copiez le code qui suit « stations= » (marqué en gras dans l'exemple ci-dessous).

p. ex. [https://www.ecarup.com/InstantPay/InstantPayWithCreditCard.aspx?serial=I4zp6A12urpfdJK9dKRbFbMAhn](https://www.ecarup.com/InstantPay/InstantPayWithCreditCard.aspx?station=I4zp6A12urpfdJK9dKRbFbMAhn) 

3.  Naviguez vers le menu Stations --> Codes QR (Stationen --> QR-Codes).

4.  Sous « Création manuelle de code QR » (Manuelle QR-Code-Erstellung), sélectionnez la station et collez le « Code de station personnalisé » (Benutzerdefinierter Stationscode) que vous avez copié.

5.  Sélectionnez Générer (Generieren).

6.  Sélectionnez Annuler (Abbrechen).

7.  Vérifiez que le code apparaît sous « Code de station personnalisé actuel » (Aktueller benutzerdefinierter Stationscode).

![Créer un code QR – Figure 12](/img/stationsbetreiber-qr-code/12.png)

### Code de station personnalisé

Avez-vous déjà utilisé un code personnalisé pour l'ancienne station ?

- Le code personnalisé doit être supprimé dans notre système ; il peut ensuite être réutilisé librement.

![Créer un code QR – Figure 13](/img/stationsbetreiber-qr-code/13.png)
