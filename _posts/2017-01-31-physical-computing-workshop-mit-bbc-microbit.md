---
title: Osterferien-Workshop zu Physical Computing und Internet of Things
author: olav
excerpt: >
    Am 18. bis 21. April gibt es wieder einen Physical Computing Workshop im Deutschen Museum in Bonn. Dieses Jahr läuft alles ganz anders.
published: 31.01.2017
layout: post
thumbnail: "/uploads/2017/microbit-pomodoro.jpg"
categories:
  - Workshops
tags:
  - Kinder
  - BBC micro:bit
---
In den Osterferien 2017 (18. bis 21. April) veranstalte ich wieder einen Workshop *Physical Computing* im Deutschen Museum in Bonn. Format und Inhalt werden dieses Jahr anders als in den letzten Jahren. Dieses Jahr ist der Workshop einen Tag länger und die Zielgruppe ist älter. Dieses Mal richtet sich der Workshop an 13 bis 16-jährige und soll der Berufsorientierung dienen.

Auch die Plattform ist eine Andere. [Erste Überlegungen zum neuen Format](/iot/) hatte ich ja schon auf dem IoT-Barcamp letztes Jahr in Düsseldorf präsentiert. Technische Plattform wird also der BBC micro:bit sein. Ich hatte kurz gehofft, dass wir auch schon den neuen [Calliope Mini](http://calliope.cc/ueber-mini) einsetzen können. Der ist aber aktuell noch nicht lieferbar. Immerhin sind die beiden Platinen aber weitestgehend kompatibel.

<iframe style="float:right;margin-left:10px;width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=DE&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=dankbar-21&marketplace=amazon&region=DE&placement=B01MQL04TB&asins=B01MQL04TB&linkId=6ccae10d06d989ab7ce71b64f87b48ed&show_border=false&link_opens_in_new_window=true"></iframe>Zur Vorbereitung für den Workshop habe ich mit das Büchlein von Burkhard Kainka zugelegt. Darin wird eine geniale Methode beschrieben, auf dem 5x5 LED-Display des Micro:bit gut lesbar 5 Dezimalziffern darzustellen.

Mit diesem Verfahren habe ich in MicroPython einen einfachen [Pomodoro-Timer](https://de.wikipedia.org/wiki/Pomodoro-Technik) programmiert:

<script src="https://gist.github.com/oschettler/c14aa3c7af3666aacffce028b9e4f7ec.js"></script>

Nach dem Start zeigt der Timer die abgelaufene Zeit sekundengenau an, gibt nach Ablauf der 20 Minuten Arbeitszeit ein Tonsignal, zählt dann noch einmal 5 Minuten Pause ab und endet mit einem erneuten Tonsignal. Ein neues Interval wird mit der linken Taste gestartet. Mit der rechten Taste lassen sich minutenweise auch kürzere Intervalle einstellen.

Wie man auf dem Foto meines Micro:bits vielleicht erkennen kann, habe ich für die Tonerzeugung einen gekapselten Piezo-Schallwandler mit einem kleinen Stück Velcro auf die Platine geklebt und an die Pins *GND* und *0* gelötet.    

Als Programmierumgebung habe ich den [Mu-Editor von Nicholas H.Tollervey](https://codewith.mu/) benutzt. Dieser funktioniert vollständig offline und kann übersetzten Python-Code direkt auf den Micro:bit speichern.

MicroPython ist eine attraktive Programmierumgebung für den Workshop, weil Python eine sehr beliebte Programmiersprache ist und zusätzliche der Mu-Editor offline funktioniert. Im Workshop werden wir aber sicher auch die anderen Programmieroptionen für den Micro:bit nutzen.

Besonders attraktiv scheint mit augenblicklich das [PXT](https://pxt.microbit.org/) von Microsoft. Auch das habe ich schon offline ans Laufen gebracht. Vorteil hierbei ist die Zielsprache Javascript. Ganz cool ist, dass im Gegensatz zu Microbit auch Bluetooth Low Energy mit PXT zusammen funktioniert.
