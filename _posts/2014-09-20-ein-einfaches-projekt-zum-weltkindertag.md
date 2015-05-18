---
title: Ein einfaches Projekt zum Weltkindertag
author: olav
layout: post
permalink: /2014/09/ein-einfaches-projekt-zum-weltkindertag/
categories:
  - Projektideen
---
Heute ist Weltkindertag, an dem weltweit an die Rechte von Kindern erinnert wird. Dazu gibt es in [Berlin][1] und [Köln][2] große Feste. In Köln wird am Sonntag, dem 21.09.2014 zwischen 12 und 18 Uhr im Rheingarten und auf dem Heumarkt gefeiert. Aber auch schon am heutigen Samstag gibt es von 18.45 bis 21.00 Uhr auf der WDR-Bühne im Rheingarten ein buntes Programm mit den Kuschelbären Johannes und Stachel.

Wer es nicht zu einem der Feste schafft, kann vielleicht die lieben Kleinen zuhause mit einem einfachen Bastelprojekt animieren. Gestern habe ich z.B. mit meiner 5-jährigen Tochter eine kleine Platine zusammengelötet, mit der sich anschließend ein Ring aus 16 Adafruit Neopixeln steuern läßt.

Die Platine war ein [Blinkstick Pro][3], den ich vor einigen Tagen direkt beim Hersteller in England für 11 € bestellt hatte.  Die Schaltung besteht nur aus wenigen Teilen und ist mit der [reich bebilderten Anleitung][4] des Herstellers in ein paar Minuten aufgebaut.

Mit dem Platinchen lassen sich einfache LEDs genau so steuern wie die neuen, intelligenten Neopixel. Auf <a rel="nofollow" href="http://blinkstick.com/help/tutorials">blinkstick.com</a> gibt es einige einfach umzusetzende Projektideen, u.a. auch mit <a rel="nofollow"  href="http://www.ikea.com/de/de/catalog/products/40192361/">IKEA DIODER</a> LED Strips.

Ich hatte mir vor einiger Zeit einen Ring mit 16 LEDs (ca. 10€) bestellt, bisher aber mit der Ansteuerung kein Glück gehabt. Mein ursprünglicher Plan war, den Ring über ein Electric Imp aus dem Internet steuerbar zu machen. Es gibt dafür auch eine entsprechende Software. Diese funktionierte bei mir aber leider nicht zuverlässig. Die Neopixel brauchen 5V, der Electric Imp läuft aber mit 3,3V.

Mit dem Blinkstick geht die Ansteuerung problemlos. Es gibt Software-Unterstützung für [viele Programmiersprachen][5]. Ich habe die Python-Variante ausprobiert. Damit lassen sich als einfache Beispiele mit wenigen Zeilen Python-Code eine Analog-Uhr oder ein rotierender Farbring steuern.

Ich habe eine Idee für eine Websteuerung unter Zuhilfenahme eines <a title="Link auf den RaspberryPi bei unserem Partner ELV"  rel="nofollow" href="http://ad.zanox.com/ppc/?28982277C94550477&ULP=[[controller.aspx?cid=74&detail=10&detail2=43791&refid=zanox]]">Raspberry Pis</a> und des [Python Frameworks Bottle][6]. Mal sehen, ob ich Zeit dafür finde 😉

Hier ist ein Video, in dem der Erfinder des Blinksticks, Arvydas Juskevicus über die Einsatzmöglichkeiten seines Produktes nachdenkt &#8211; in Englisch:

 [1]: http://www.weltkindertag.de/
 [2]: http://www.weltkindertag-koeln.de/
 [3]: http://blinkstick.com/products/blinkstick-pro
 [4]: http://blinkstick.com/help/build-pro-1-0
 [5]: http://blinkstick.com/help/api-implementations
 [6]: http://bottlepy.org/docs/dev/index.html