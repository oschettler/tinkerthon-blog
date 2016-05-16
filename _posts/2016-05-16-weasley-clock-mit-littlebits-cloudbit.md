---
title: Eine Weasley-Clock mit dem LittleBits Cloudbit für Lena
author: olav
excerpt: >
    Das Internet der Dinge ganz einfach
published: 14.04.2016
layout: post
thumbnail: "/uploads/2016-05-16/IMG_20160516_141257_thumb.jpg"
categories:
  - Projekte
tags:
  - Internet of Things
  - LittleBits
  - Servo
  - Harry Potter
  - Zauberei
gallery_title: Wo steckt Lena gerade - Ein Sonntagsprojekt mit LittleBits
gallery:
- small: /uploads/2016-05-16/IMG_20160516_130536_thumb.jpg
  big: /uploads/2016-05-16/IMG_20160516_130536.jpg
- small: /uploads/2016-05-16/IMG_20160516_130603_thumb.jpg
  big: /uploads/2016-05-16/IMG_20160516_130603.jpg
- small: /uploads/2016-05-16/IMG_20160516_131109_thumb.jpg
  big: /uploads/2016-05-16/IMG_20160516_131109.jpg
- small: /uploads/2016-05-16/IMG_20160516_132639_thumb.jpg
  big: /uploads/2016-05-16/IMG_20160516_132639.jpg
- small: /uploads/2016-05-16/IMG_20160516_132805_thumb.jpg
  big: /uploads/2016-05-16/IMG_20160516_132805.jpg
- small: /uploads/2016-05-16/IMG_20160516_133637_thumb.jpg
  big: /uploads/2016-05-16/IMG_20160516_133637.jpg
- small: /uploads/2016-05-16/IMG_20160516_142511_thumb.jpg
  big: /uploads/2016-05-16/IMG_20160516_142511.jpg
- small: /uploads/2016-05-16/IMG_20160516_142520_thumb.jpg
  big: /uploads/2016-05-16/IMG_20160516_142520.jpg   
---
Vernetzte Dinge faszinieren mich seit jeher. Ich bin dabei aber nicht allein. Im Internet der Dinge gibt es ein paar schöne Ansätze, soziale Verbindungen über das Internet zu transportieren. Die zugehörigen Geräte sind dabei bewußt untechnisch in Szene gesetzt. Die [Goodnight Lamp](http://goodnightlamp.com/) von Alexandra Deschamps-Sonsino verband bereits 2012 heimische Nachttischlampen über das Internet. Wenn die Oma zuhause abends das Licht löscht, erlischt auch bei der Enkelin das Licht in ihrer kleinen Lampe auf dem Nachtisch.

<figure>
    <img class="thumbnail" src="/uploads/2016-05-16/goodnightlamp.png" alt="Goodnight Lamp von Alexandra Deschamps-Sonsino">
    <figcaption>Abb 1. Goodnight Lamp von Alexandra Deschamps-Sonsin</figcaption>
</figure>

Oder [Ugle](http://voyoslo.com/projects/ugle/). Die wunderschöne Holzeule dreht ihren Schlabel auf einen bestimmte Farbe in ihrem Fuß, je nachdem, welche Farbe man auf der zugehörigen App ausgewählt hat. Die Farben sind bewußt abstrakt gehalten und möchten eine Familie einladen, ihre eigene Sprache um die Bedeutung der einzelnen Farben zu entwickeln. Gelb könnte z.B. "Ich bin bald zuhause bedeuten", grau "Die Arbeit ist heute langweilig" oder blau "Ich mache heute das Abendessen". Der norwegische Hersteller beschreibt diese Art der Nachrichten als "Slow Messaging".

<figure>
    <img class="thumbnail" src="/uploads/2016-05-16/Voy_—_Ugle_thumb.jpg" alt="Holzeule Ugle der Firma Voy aus Oslo">
    <figcaption>Abb 2. Holzeule Ugle der Firma Voy aus Oslo</figcaption>
</figure>

Lange vor dem Internet der Dinge erdachte Joanne K. Rowling einen ähnlichen Benachrichtigungsdienst für Familien. Im "Fuchsbau" genannten Heim der Familie Weasley hängt im Wohnzimmer eine [Uhr mit neun Zeigern](http://de.harry-potter.wikia.com/wiki/Magische_Uhren), auf der die Weasley-Mutter Molly jederzeit ablesen kann, wo sich die einzelnen Familienmitglieder gerade aufhalten.

Schon seit einiger Zeit überlege ich, mir auch eine solche Uhr zu bauen. Eine mechanisch einfache Idee wäre, eine LED-Matrix zur Anzeige zu nehmen. Spalten wären dann Familienmitglieder, Zeilen deren Aktivitäten. Oder ein [Neopixel-Ring](https://www.adafruit.com/products/2853): Jede Position ist eine Person, jede Farbe symbolisiert einen Ort oder eine Aktivität.

In einem kleinen Pfingstprojekt wollte ich eine einfache Weasley-Uhr für Lena bauen. Dabei wollten wir und auf das Basteln konzentrieren und diesmal nicht löten oder Programmieren. Ein perfektes Projekt also für ein LittleBits CloudBit.

<figure>
    <img class="thumbnail" src="/uploads/2016-05-16/cloud_diagram2_thumb.jpg" alt="Das CloudBit von LittleBits">
    <figcaption>Abb 3. Das CloudBit von LittleBits</figcaption>
</figure>

Unten habe ich Fotos der einzelnen Schritte zusammengetragen:

* Eine Pappschachtel dient als Gehäuse der Uhr. Zeichne die Umrisse des LittleBits-Servos auf die Mitte der einen Seite der Schachtel und schneide ein Loch in der Größe des Servos. Lass dabei zwei kleine Klappen an den beiden Schmalseiten hängen. Damit wird die Klebeverbindung mit dem Servo stabiler.
* Stecke anschliessend den Servomotor durch das Loch. Bei mir hat geholfen, den kleinen Stecker auf der LittleBits-Platine des Servos vor dem Durchstecken vorsichtig herauszuziehen.
* Klebe anschliessend den Servo mit einem Streifen Tesafilm in der Schachtel fest.
* Befestige nun eine LittleBits-Schaltung aus USB-Power, CloudBit und Servo-Bit auf einer der Längskanten der Schachtel.
* Schraube den Aufsatz auf der Servoachse mit meinem kleinen Kreuzschlitzschrauber ab.
* Zeichne mit einem Zirkel eine runde Scheibe auf ein untertassengroßes Stück Fotokarton und schneide sie aus. Bohre mit einer Schere ein Loch in die Mitte der Scheibe, so dass die Achse des Servos hindurchpasst.
* Schneide aus vier Streifen Tonpappe Abstandshalter, die das Ziffernblatt in etwa einem Zentimeter Höhe über der Schachtel fixieren. Da du die Streifen beim Aufkleben gegeneinander schräg stellen kannst, kommt es beim Schneiden nicht auf ein genaues Messen an.
* Klebe das Ziffernblatt mit Bastelkleber auf die Abstandshalter und stecke dabei die Achse des Servos durch das Loch in der Mitte.
* Schneide nun noch aus einem Stück Tonpapier einen Zeiger aus und klebe ihn mit Bastelkleber auf den wieder aufgesetzten Aufsatz des Servos.
* Verbinde dein CloudBit jetzt über [My Cloudbits](control.littlebitscloud.cc) mit deinem WLAN und steuere per "send" und den Schieberegler mit dem Zeiger vier oder fünf unterschiedliche Positionen an.
* Markiere diese Positionen mit typischen Aufenthaltsorten deines Nutzers. Bei meiner Tochter sind das unterwegs, Spielplatz, Freundin, zuhause und Schule.

Jetzt fehlt noch eine App, die die zugehörigen Zahlenwerte per API an das CloudBit sendet. Dafür hat aber heute die Zeit nicht mehr gereicht.   

Und so sieht die fertige Uhr aus:

<iframe width="640" height="360" src="https://www.youtube.com/embed/UxZ9aSsohBE" frameborder="0" allowfullscreen></iframe>
