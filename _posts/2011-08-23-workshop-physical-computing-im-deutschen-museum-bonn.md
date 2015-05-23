---
title: 'Workshop &#8220;Physical Computing&#8221; im Deutschen Museum in Bonn'
author: olav
published: 23.08.2011
thumbnail: /wp-content/uploads/2011/08/Bildschirmfoto-2011-08-24-um-00.33.21-212x212.png
layout: post
permalink: /2011/08/workshop-physical-computing-im-deutschen-museum-bonn/
aktt_notify_twitter:
  - yes
aktt_tweeted:
  - 1
categories:
  - PICAXE
  - Workshops
---
Heute war der erste von zwei Sommerworkshops zum Thema Physical Computing im Bonner Ableger des Deutschen Museums. Super: Die Lokalzeit des WDR brachte einen Hinweis auf diesen Workshop gestern unter [Tipps und Termine][1]. Der Workshop war voll besetzt und hat allen Beteiligten viel Spaß gemacht. Zum 2. Termin am 2.9. sind noch einige Plätze frei.

Eine grundlegende Entscheidung habe ich erst im Laufe der Veranstaltung getroffen: Programmierung der PICAXE-Chips in Flowcharts oder  BASIC. Ich hatte beides vorbereitet und den wagemutigen Plan, nach einer kurzen Einführung mit Flowcharts die Möglichkeit der Generierung von BASIC aus den Flowcharts zu nutzen und das eigentliche Spiel in BASIC zu programmieren.

Es wurde mir aber schnell klar, dass das vielleicht für 2 Stunden Schnellkurs eine Nummer zu viel Stoff wäre und bin dann komplett bei Flowcharts geblieben. Dazu kam, dass einige der Teilnehmer beim Mittag von ihren Erfahrungen mit LEGO Mindstorms berichteten und also schon Erfahrungen mit Flowcharts hatten. Der Schwenk ging dann auch halbwegs unbemerkt und glatt über die Bühne, obwohl ich mir dann doch zeitweilig wie ein Simultanübersetzer vorkam.

Flowcharts haben natürlich auch ein paar Nachteile, so unterstützen sie keine Konstrukte zur strukturierten Programmierung, sondern fördern eher einen Spaghetti-Stil. [Revolution Education][2] fasst Vor- und Nachteile von Flowcharts so zusammen:

Vorteile:

  * Junge Programmierer finden Flowcharts oft einfacher zu lernen
  * Es können keine Schreibfehler gemacht werden
  * Das Programm kann am Bildschirm simuliert werden
  * Der Flowchart kann automatisch nach BASIC gewandelt werden, so dass junge Programmierer aus dem generierten Code lernen können.

Dem stehen einige handfeste Nachteile gegenüber:

  * Komplexe Programme sind schwer graphisch darzustellen
  * Gewisse Programmstrukturen in BASIC wie z.B. for..next-Schleifen können nicht graphisch dargestellt werden
  * Auch weitere BASIC-Befehle werden nicht in Flowcharts abgebildet, darunter z.B. serin.

In diesem Einführungsworkshop überwiegen aber klar die Vorteile von Flowcharts.

Für den zweiten Termin am 2. September habe ich dann auch einen Schwung der <a title="PDF zu den neuen M2-Modellen" href="http://www.rev-ed.co.uk/docs/picaxem2.pdf" target="_blank">neuen PICAXE-08M2</a> bestellt. Da bin ich sehr gespannt drauf, weil diese einige interessante neue Möglichkeiten haben, die wir auch bei der Programmierung des Spieles nutzen können, nämlich eine Variable &#8220;time&#8221; zum Messen der Zeit in Sekunden und die Fähigkeit, bis zu vier Ausführungsstränge gleichzeitig auszuführen, ideal also, gleichzeitig die Zeit zu messen und auf Berührungen abzufragen.

Ich vermute, dass die neuen Möglichkeiten der M2-Chips das Zünglein die Wage Flowcharts gegen BASIC noch einmal zugunsten der Flowcharts ausschlagen läßt. Nach einigen Versuchen, meine letzte &#8220;Heißer Draht&#8221;-Software sowohl mit dem Flowchart-Editor in der kostenlosen Programmierumgebung als auch mit dem neueren <a title="PDF zu Logicator for PIC® and PICAXE® micros (version 3)" href="http://www.rev-ed.co.uk/docs/cat_06.pdf" target="_blank">Logicator</a> in der Shareware-Version umzusetzen habe ich allerdings den dringenden Verdacht, dass Flowcharts schnell derart unübersichtlich werden, dass ihr Einsatz schon bei dieser bescheidenen Programmgröße nicht mehr praktikabel, sondern nur noch eine Codierung in Programmtext sinnvoll ist. Das heisst dann, dass der Einführungs-Workshop mit Flowcharts beginnen, aber eben doch schon auf die BASIC-Programmierung hinarbeiten sollte.

 [1]: http://www.wdr.de/mediathek/html/regional/rueckschau/2011/08/22/lokalzeit_bonn.xml?noscript=true&offset=1273&autoPlay=true&#flashPlayer
 [2]: http://www.rev-ed.co.uk/picaxe/flowchart.htm
