---
title: Weihnachten 2015
author: olav
excerpt: >
    Papierhäuschen als Doodle, Node.it, Lenas Uhr
published: 25.12.2015
layout: post
thumbnail: "/system/files/000/000/215/teaser/IMG_20151120_161213.jpg"
categories:
  - Basteleien
tags:
  - Basteln mit Papier
  - Raspberry Pi
  - Node.it

---
Zum Adventsbasar in der Marienschule hatte ich ja in Lenas Klasse eine [Stadt aus Papierhäusern](/workshops/2015/11/29/adventsbasar-mit-bunten-papierhaeusern-und-littlebits.html) angeboten. Die Idee war offenbar so gut, dass Google sie aufgegriffen hat und in diesem Jahr seine Homepage an den Weinachtstagen mit einen Papierhaus-Doodle geschmückt hat.

<div class="thumbnail" style="border:none;box-shadow:none">
    <img src="https://www.google.de/logos/doodles/2015/holidays-2015-day-3-6399865393250304-5757334940811264-ror.jpg" alt="Google Doodle zu Weihnachten 2015">
</div>

Naja, wahrscheinlich ist der Doodle-Künstler Robinson Wood von allein drauf gekommen. Jedenfalls gibt es zu dem Doodle auch passende Bastelsätze: [Tag 1](https://www.google.com/doodles/holidays-2015-day-1), [Tag 2](https://www.google.com/doodles/holidays-2015-day-2), [Tag 3](https://www.google.com/doodles/holidays-2015-day-3).

Auf der Seite zum ersten Tag haben sie eine [Suchanfrage zu weiteren Papierbastelbögen](https://www.google.de/search?safe=active&tbm=isch&q=papercraft+cut+outs&cad=h) verlinkt - hübsch. Auf der Seite zum dritten Tag gibt es ein paar Hintergrundinformationen zur Entstehung der Fotos im Doodle. Das sieht doch schon sehr aus wie das Szenario bei unserem Adventsbasteln in der Marienschule.

----
Kurz vor Weihnachten hatte ich ein paar Mon- und Freitage Urlaub und habe einen davon genutzt, Die Software von [Lenas Uhr auf dem Raspberry Pi](/2014/12/wecker-stimmungslampe/) noch einmal neu zu denken. Meine erste Lösung mit Chromium im Kiosk-Modus war auf dem Raspberry Pi der ersten Generation doch sehr zäh. Jetzt habe ich ein Toolkit für PyGame entdeckt, mit dem sich einfach GUIs direkt auf den Frambuffer und damit auf den kleinen Touchscreen bringen lassen. Schon nach einem halben Tag hatte ich damit eine erste Version, die

* Farben des angeschlossenen Blinkstick Square auswählbar macht und
* die Uhrzeit anzeigt.

Das ganze lässt sich auf diesem Weg sicher mit moderatem Aufwand erweiteren zu

* einem Internet-Radio
* einem Schreib-Computer, vielleicht sogar mit Mail-Anbindung
* einer Spiele-Kiste zum Spielen von Interactive Fiction (a.k.a. Text Adventures)

----
Gestern, also am Heiligen Abend, habe ich endlich meinen Perk aus der [Kickstarter-Campagne von Pontus Oldberg](https://www.kickstarter.com/projects/sweetpeas/nodeit-the-worlds-smallest-and-extendable-iot-syst?lang=de) aus Schweden bekommen: Dem kleinen Platinchen ESP210 mit dem WLAN-Chip ESP8266, USB-nach-Seriell-Wandler, und Software in der Arduino-IDE.

<div class="thumbnail">
    <img src="/uploads/800px-Esp-210-1-iso.png" alt="ESP210 Board">
</div>

Pontus bietet auf [seiner Website](http://www.sweetpeas.se/) verschiedene Erweiterungsmodule an. Ich bin gespannt, was das Platinchen kann. Mit seinem Preis von nur 8€ ist es jedenfalls ein heisser Kandidat, die Standard-Basis für IoT-Workshops zu werden.
