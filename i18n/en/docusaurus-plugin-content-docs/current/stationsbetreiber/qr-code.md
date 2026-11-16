---
title: 'Create a QR code'
slug: '/stationsbetreiber/qr-code'
description: 'eCarUp stations can be labelled with a QR code.'
sidebar_label: 'QR code'
---
eCarUp stations can be labelled with a QR code. It serves several purposes:

- Users with the eCarUp app can scan the QR code with the app and are taken directly to the right station.

- Users without the eCarUp app can scan the QR code with their phone camera and then make a one-time payment via our web-based [Instant Pay](/fahrer/sofort-bezahl-funktion).

## Label generator & video guide

As a station operator, you can now create your own labels for your charging stations. There are three templates to choose from. Each generates an A4 PDF that is printed on labels. We recommend weatherproof labels: 

- Small 42.3 x 21.2mm, Zweckform L7911-10

- Medium: 99.1 x 42.3mm, Zweckform J4776-10, Herma 9533

- Large: 99.1 x 67.7mm,  Zweckform L4715-20

When printing, please make sure the PDF is not scaled. 

You can access the label generator here:
[https://ecarup-tools.azurewebsites.net/](https://ecarup-tools.azurewebsites.net/) 

1.  Use the link above

2.  Click Login at the top right and use your eCarUp login. 

3.  Select Station Labels on the left-hand side.

4.  Your charge points are listed.

5.  Select the desired charge point and click Create.

6.  Select the size and click Continue.

7.  Fill in your contact details and click Next (weiter). 

8.  The label for your charging station is created. 

<Video src="XZsSTTjWRq0" title="YouTube video, creating a label with the QR code generator" />

![Create a QR code – Figure 1](/img/stationsbetreiber-qr-code/01.png)

![Create a QR code – Figure 2](/img/stationsbetreiber-qr-code/02.png)

## Example label sizes

<Embed src="https://drive.google.com/file/d/14jB4ijGYBqT_-VNWn3m63W9t4OAA5WsQ/preview" aspect="1.284" title="Drive, QR-Code Beispiel KLEIN.pdf" />

QR-Code Beispiel KLEIN.pdf

<Embed src="https://drive.google.com/file/d/14l4YzEHyXDPbXo0LqbHBfGF-ifG3HsbU/preview" aspect="1.299" title="Drive, QR-Code Beispiel GROSS.pdf" />

QR-Code Beispiel GROSS.pdf

<Embed src="https://drive.google.com/file/d/14tHDMxWWF1TYVasyjddI8FBAGY_7imtv/preview" aspect="1.350" title="Drive, QR-Code Beispiel MITTEL.pdf" />

QR-Code Beispiel MITTEL.pdf

## Create a QR code manually & video guide

You can create a QR code manually.

To do this, select the desired station in the web portal and click Generate (Generieren). Please note that for stations with more than one connector, you must select the connector explicitly. 

For the best results, we always recommend using our label generator.

![Create a QR code – Figure 3](/img/stationsbetreiber-qr-code/03.png)

<Video src="G68GjgYycLc" title="YouTube video, creating a QR code" />

## Example of custom labelling (designed by the customer)

<div className="row">
<div className="col col--4 text--center">

![Create a QR code – Figure 4](/img/stationsbetreiber-qr-code/04.png)

</div>
<div className="col col--4 text--center">

![Create a QR code – Figure 5](/img/stationsbetreiber-qr-code/05.png)

</div>
<div className="col col--4 text--center">

![Create a QR code – Figure 6](/img/stationsbetreiber-qr-code/06.jpg)

</div>
</div>

<div className="row">
<div className="col col--4 text--center">

![Create a QR code – Figure 7](/img/stationsbetreiber-qr-code/07.jpg)

</div>
<div className="col col--4 text--center">

![Create a QR code – Figure 8](/img/stationsbetreiber-qr-code/08.jpg)

</div>
<div className="col col--4 text--center">

![Create a QR code – Figure 9](/img/stationsbetreiber-qr-code/09.jpg)

</div>
</div>

<div className="row">
<div className="col col--6 text--center">

![Create a QR code – Figure 10](/img/stationsbetreiber-qr-code/10.png)

</div>
<div className="col col--6 text--center">

![Create a QR code – Figure 11](/img/stationsbetreiber-qr-code/11.png)

</div>
</div>

## Map an existing QR code to a new station

1.  Scan the existing QR code

2.  Copy the station code from the URL. Copy the code after "stations=" (marked in bold in the example below)

e.g. [https://www.ecarup.com/InstantPay/InstantPayWithCreditCard.aspx?serial=I4zp6A12urpfdJK9dKRbFbMAhn](https://www.ecarup.com/InstantPay/InstantPayWithCreditCard.aspx?station=I4zp6A12urpfdJK9dKRbFbMAhn) 

3.  Navigate to the menu Stations (Stationen) --> QR codes (QR-Codes)

4.  Under "Manual QR code creation (Manuelle QR-Code-Erstellung)", select the station and paste the copied code into "Custom station code (Benutzerdefinierter Stationscode).

5.  Select Generate (Generieren). 

6.  Select Cancel (Abbrechen).

7.  Check that the code is shown under "Current custom station code (Aktueller benutzerdefinierter Stationscode)".

![Create a QR code – Figure 12](/img/stationsbetreiber-qr-code/12.png)

### Custom station code

Have you already used a custom code for the old station?

- The custom code must be deleted in our system; after that, it can be used again. 

![Create a QR code – Figure 13](/img/stationsbetreiber-qr-code/13.png)
