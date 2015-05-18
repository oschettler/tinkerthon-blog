---
title: Internet der Dinge
author: olav
layout: post
permalink: /2014/01/internet-der-dinge/
categories:
  - IoT
tags:
  - electric imp
  - i2c
  - IoT
---
> Erstes [Treffen][1] zum Internet der Dinge am 11.2.2014 in Bonn

Bisher hatte ich mich hier vornehmlich mit der faszinierenden Welt des Physical Computing beschäftigt, also mit der Verbindung von Computertechnik mit der realen Welt. Gegenüber meinen ersten Erfahrungen mit Micro-Controllern als Teenie in den Achtzigern kann man heute mit minimalem Aufwand an Zeit und Geld Schaltungen mit Micro-Controllern aufbauen und programmieren. Damals mussten wir unsere selbst gebauten Computersysteme aus einzelnen Komponenten wie [Micro-Prozessoren][2], Arbeits- und Programmspeicher, Peripherieadapter und ähnlichem aufbauen.

Heute gibt es komplette Systeme auf eine Chip (SoC &#8211; system on a chip), in denen diese Komponenten bereits integriert sind. Das Ergebnis sind einfach zu handhabende Chips und Platinchen wie die der [PICAXE][3]&#8211; oder [Arduino][4]-Serien, die ich nun viele Male auch in [Workshops mit Kindern ][5]eingesetzt habe.<span style="line-height: 1.5em;"> </span>

Ein faszinierendes Gebiet ist die Vernetzung einzelner Schaltungen. [Tom Igoe][6] hat bereits vor sieben Jahren ein Buch über dieses Thema geschrieben: [Making Things Talk][7]. Doch die Entwicklung bleibt nicht stehen. War es 2007 noch recht kompliziert, Micro-Controller-Schaltungen zu vernetzen, gab es in den letzten Monaten einige Projekte, die den Anschluß von Micro-Controllern an das Internet drastisch vereinfachen. Auch große Unternehmen haben die Marktmöglichkeiten dieser Technolgie mittlerweile erkannt. Die Bonner Telekom etwa engagiert sich in der [Machine-to-Machine-Alliance][8].

Noch fehlt allerdings vielen die Phantasie, was solche vernetzten Dinge eigentlich tun sollen.  Das Portal Postscapes liefert einen [Überblick über mögliche Anwendungsfelder][9] für das Internet der Dinge: Erste Produkte zur Steuerung von Beleuchtung oder Heizung sind auf dem Markt. Gerade hat die [Übernahme der Firma Nest][10], Hersteller von Thermostaten und Rauchmeldern, für den Rekordbetrag von 3,2 Milliarden Dollar durch Google für plötzliche Aufmerksamkeit gesorgt. Der Automobilbereich und die intelligente Steuerung des &#8220;Smart Grid&#8221; für die Energiewende sind weitere, offensichtliche Anwendungen. Die Prognose steht im Raum, dass 2020 50 Milliarden Geräte online sein werden. Bei solch einem riesigen Markt werden selbst verschlafene Saurier geweckt.

Was bedeutet das alles für Tinkerthon? Wir [wollen][11] &#8220;Kinder und Jugendliche an den kreativen Umgang mit technischen Dingen heranzuführen, indem wir selber welche bauen.&#8221; Bis vor kurzem war es aber viel zu kompliziert, nicht nur Löten, Hardware-Komponenten und Programmieren in einem Workshop kennen zu lernen, sondern auch noch Funkmodule, Netzwerk- und Web-Technologien unterzubringen.

Das könnte sich mit einigen Entwicklungen der letzten Monate grundlegend ändern.

Der [Einplatinen-Computer Raspberry Pi][12], von seinen Erfindern eigentlich für die Vermittlung von Wissen um Computertechnik jenseits von Playstation oder MS Office gedacht, kam vor zwei Jahren auf den Markt und wurde von der Bastler-Szene begeistert aufgenommen. Damit ist es erstmals möglich, eigene Projekte mit einem vollständigen Computer auszustatten und mit ein bisschen Fummelei sogar drahtlos an das Internet anzuschließen.

Aber es geht noch einfacher. Zwei interessante Crowdfunding-Projekte, [Tessel][13] und [Espruino][14], bringen die Web-Programmiersprache Javascript auf kleine Hardware. Auch Arduinos gibt es inzwischen [mit integriertem Wifi][15]. Besonders das [Flutter-Projekt][16] sollte man im Auge behalten: Ein Arduino-kompatibles Platinchen für 20 Dollar und einem Funknetzwerk mit 1km Reichweite. Ein weiteres, interessantes Platinchen für US$ 39, welches mit einen Cloud-Dienst integriert ist, ist der [Spark Core][17], der ab März 2014 verfügbar sein wird. Postscapes hat auch zum Thema Selbstmachplattformen die [wichtigsten Kandidaten][18] zusammengetragen.

Den mit Abstand einfachsten, kostengünstigsten und bereits seit einiger Zeit verfügbaren Ansatz,  Hardware-Projekte ins Web zu bringen, bietet allerdings der [electric imp][19]. Durch den zeitlichen Vorsprung gibt es bereits eine ganze Reihe Anleitungen zum electric imp im Netz, z.B. gibt es [20 Projekte][20] bei Instructables, die einen electric imp einsetzen. Bei YouTube gibt es [15.000 Filme zum electric imp][21]. Der electric imp ist ein kleiner Computer im Format einer SD-Karte, in der neben dem Kern noch ein Wifi-Modul integriert ist. Diese Karte wird in darauf vorbereitete Geräte eingesetzt und verbindet das Gerät dann mit dem dazugehörigen Cloud-Angebot. Sowohl der Code auf dem electric imp als auch die Cloud-Seite wird in der [Programmiersprache Squirrel][22] programmiert. Diese Sprache ist von Lua abgeleitet und wird vor allem im [Umfeld von Spielen][23] eingesetzt.

Um mit dem electric imp zu arbeiten, benötigt man eine Basisplatine. Beides bekommt man in Deutschland z.B. bei [Exp-Tech][24]. Mit dem [Hannah-Board][25] gibt es ein weiteres Board mit umfangreichen Sensoren, einer RGB-LED und zwei Servo-Treibern an Bord. Dieses Board muss man allerdings z.B. noch [in China bestellen][26]. Meines ist heute angekommen.

Die Entwicklung mit dem electric imp ist wirklich einfach. Die Programmierung des Boards und der Dienste in der Cloud erfolgt über eine web-basierende IDE. Hier ist ein [Beispielprojekt][27]:

<a href="http://tinkerthon.de/wp-content/uploads/2014/01/Electric_Imp_-_IDE.png" rel="lightbox[871]" title="Internet der Dinge"><img class="size-medium wp-image-877 aligncenter" alt="IDE für den electric imp" src="http://tinkerthon.de/wp-content/uploads/2014/01/Electric_Imp_-_IDE-300x183.png" width="300" height="183" /></a>

In diesem Beispiel habe ich eine [MinM-Mehrfarbleuchtdiode][28] von ThingM per i2c an den electric imp angeschlossen. Noch einfacher geht es mit einer RGB-Leuchtdiode:

<a href="http://tinkerthon.de/wp-content/uploads/2014/01/IMG_0001_6-16.jpg" rel="lightbox[871]" title="Internet der Dinge"><img class="size-medium wp-image-878 aligncenter" alt="RGB-LED am electric imp" src="http://tinkerthon.de/wp-content/uploads/2014/01/IMG_0001_6-16-266x300.jpg" width="266" height="300" /></a>

Der imp hat zwar nur sechs Pins, diese sind aber [flexibel beschaltbar][29]:

<a href="http://tinkerthon.de/wp-content/uploads/2014/01/Electric_Imp_-_Imp_Pin_Mux-2.png" rel="lightbox[871]" title="Internet der Dinge"><img class="size-medium wp-image-879 aligncenter" alt="Flexible Anschlußbelegung des electric imp" src="http://tinkerthon.de/wp-content/uploads/2014/01/Electric_Imp_-_Imp_Pin_Mux-2-300x121.png" width="300" height="121" /></a>

Für die ThingM-LED benutze ich einen der zwei verfügbaren i2c-Kanäle, für die Vielfarbdiode waren es drei der Ausgänge mit Pulsweitenmodulation (PWM).

Neben dem im Bild oben gezeigten, einfachen [Breakout-Board von Sparkfun][30] gibt es ein weiteres Referenz-Design, das Hannah-Board, welches [von SmartMaker][26] bezogen werden kann. Dieses Board ist für erste Experimente mit dem electric imp besonders interessant, weil es viele Eingabe- und Ausgabegeräte wie Drehpoti, zwei Drucktaster, RGB-Lichtfühler, Temperaturfühler, 3-Achsen-Accelerometer, Hall-Sensor, RGB-Leuchtdiode und 2 Servo-Ausgänge<span style="line-height: 1.5em;"> bereits integriert und dazu noch ein Batteriefach hat.</span>

Und Tinkerthon? Nun, mit dem electric imp sind Hardware-Basteleien mit Internet-Anbindung nun endlich so einfach geworden, dass sie in einem zweitägigen Workshop mit Teenies hineinpassen könnten! Ich arbeite an einer Konzeption für einen solchen Workshop.

 [1]: http://www.meetup.com/Internet-of-Things-Bonn/events/162208982/
 [2]: http://6502.org/
 [3]: http://www.picaxe.com/
 [4]: http://arduino.cc/
 [5]: http://tinkerthon.de/?s=workshop
 [6]: http://tigoe.net/
 [7]: http://www.oreilly.de/catalog/9780596510510/
 [8]: http://m2m-alliance.de/
 [9]: http://postscapes.com/internet-of-things-examples/
 [10]: http://www.heise.de/newsticker/meldung/Google-kauft-Heimvernetzer-Nest-fuer-3-2-Milliarden-Dollar-2084501.html
 [11]: http://tinkerthon.de/konzept/
 [12]: http://www.raspberrypi.org/
 [13]: http://tessel.io/
 [14]: http://www.espruino.com/
 [15]: http://arduino.cc/en/Main/ArduinoBoardYun
 [16]: http://www.flutterwireless.com/
 [17]: https://www.spark.io/
 [18]: http://postscapes.com/internet-of-things-diy
 [19]: http://electricimp.com/
 [20]: http://www.instructables.com/tag/type-id/category-technology/keyword-electric%20imp/
 [21]: http://www.youtube.com/results?search_query=electric+imp
 [22]: http://squirrel-lang.org/
 [23]: http://en.wikipedia.org/wiki/Squirrel_(programming_language)#Games_using_Squirrel
 [24]: http://www.exp-tech.de/Shields/Electric-Imp-Breakout.html
 [25]: http://electricimp.com/docs/hardware/resources/reference-designs/hannah/
 [26]: http://smartmaker.com/index.php/electric-imp/electric-imp-hannah-development-board.html
 [27]: https://github.com/tinkerthon/electricimp-blinkm
 [28]: http://thingm.com/products/blinkm-minm/
 [29]: http://electricimp.com/docs/hardware/imp/pinmux/
 [30]: https://www.sparkfun.com/products/11400