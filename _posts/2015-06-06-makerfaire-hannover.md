---
title: Dritte MakerFaire in Hannover
author: olav
layout: post
published: 07.06.2015
thumbnail: /wp-content/uploads/2015/06/IMG_20150606_102937_212x212.png
excerpt: >
    Am 06./07. Juni war die dritte MakerFaire in Hannover. Ich war am Samstag dort und habe viele Eindrücke mitgebracht. Themen meines Ausflugs waren kleine Arduinos, ESP8266-WiFi-Boards, Physical Computing und IoT für Kinder und wie schaffe ich es, mit diesen Themen meine Familie zu ernähren.
permalink: /2015/06/makerfaire-hannover/
categories:
  - Ausflug
tags:
  - makerfaire
---
Am 06./07. Juni war die dritte MakerFaire in Hannover. Ich war am Samstag dort. Puh, das war ein langer Tag! Um zwanzig nach sechs in Bonn mit dem Zug los, abends um halb zwölf wieder daheim.

Es war gut, direkt um zehn am Hannoveraner Congress Centrum zu sein und meine ersten Runden durch die beiden Hallen in relativer Ruhe drehen zu können. Auf dem Aussengelände waren um diese Zeit noch viele Stände beim Aufbau.

Die beiden Hallen hatten unterschiedliche Schwerpunkte.

<div class="thumbnail pull-left">
    <a data-lity href="/wp-content/uploads/2015/06/gelaendeplan.jpg">
        <img src="/wp-content/uploads/2015/06/gelaende_square_212x212.png">
        <h4 class="small">Aussengelände und zwei Hallen</h4>
    </a>
</div>

Während es in der Niedersachsenhalle sehr gedrängt und lärmig und dabei sehr technisch zuging, waren das Layout der Stände in der größeren Eilenriedhalle luftiger. In der Eilenriedhalle gab es viele Stände mit Schülerprojekten, zu Crafting-Themen und massig Steampunk im Eingangsbereich.

Als erstes kaufte ich mir ein [**Hacklace**](http://makerfairehannover.com/2015/05/meet-the-makers-hacklace2-a-hackable-necklace/). Das habe ich gerade mit Lena zusammengelötet. Wirklich einfach und [gut beschrieben](http://www.doku.fab4u.de/de/kits/hacklace/start). Neben Animationen sind auch ein paar einfache Spielchen dabei. Total faszinierend, wie einfach es ist, eigene Spiele mit dem Arduino-kompatiblen Hacklace zu programmieren. Auf der Github-Seite des Projektes finden sich [ein paar Beispiele](https://github.com/fab4U/Hacklace2/blob/master/Hacklace_Games/). Das Spiel *Snake*, geschrieben von Schülern der [Karl Kuebel Schule](http://www.karlkuebelschule.de/), einem beruflichen Schulzentrum in Bensheim, hat z.B. nicht mehr als 250 Zeilen.

<div class="thumbnail pull-right">
    <a data-lity href="/wp-content/uploads/2015/06/IMG_20150607_115707.jpg">
        <img src="/wp-content/uploads/2015/06/lena_hacklace_212x212.png">
        <h4 class="small">Lenas fertig gelötetes Hacklace</h4>
    </a>
</div>

Wichtiges **Ziel meines Besuches auf der MakerFaire** war es, neue Ideen für meine Physical Computing Workshops zu bekommen.

Eine Idee ist, die PICAXEn durch **kleine Arduino-Boards** zu ersetzen. Eine schnelle Recherche gab diese Kandidaten:

<table class="table table-striped table-condensed" style="width:auto">
  <thead>
    <tr>
      <th>Preis</th>
      <th>Produkt</th>
      <th>Anbieter</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>$8,95</td>
      <td><a href="http://digistump.com/products/1">Digispark - ATtiny85</a></td>
      <td>Digistump</td>
    </tr>
    <tr>
      <td>4,76€</td>
      <td><a href="http://www.watterott.com/de/OLIMEXINO-85-KIT">Olimexino-85-Kit</a></td>
      <td>Watterott</td>
    </tr>
    <tr>
      <td>7,39€</td>
      <td><a href="http://www.watterott.com/de/Adafruit-Trinket-Mini-Microcontroller-5V-Logic">Adafruit Trinket 5V</a></td>
      <td>Watterott</td>
    </tr>
    <tr>
      <td>6€</td>
      <td><a href="http://www.watterott.com/de/Wattuino-Nanite85">Nanite 85</a></td>
      <td>Watterott</td>
    </tr>
  </tbody>
</table>

Für Workshops ist wohl der Olimexino 85 wegen seiner Durchkontakte am besten geeignet. Zum Ausprobieren habe ich mir beim Watterott-Stand auf dem Aussengelände ein Nanite-85-Platinchen gekauft. Das ist wirklich lächerlich klein. Hier ist eines zusammen mit einer AA-Batterie:

<div class="thumbnail pull-left">
    <a data-lity href="/wp-content/uploads/2015/06/IMG_20150607_144737.jpg">
        <img src="/wp-content/uploads/2015/06/IMG_20150607_144737_212x212.png">
        <h4 class="small">Watterott Nanite 85: Größenvergleich</h4>
    </a>
</div>

Im Gegensatz zur Situation bei PICAXEn gibt es für Arduinos auch block-orientierte, frei verfügbare Programmierumgebungen. Sparkfun gibt einen [schönen Überblick](https://learn.sparkfun.com/tutorials/alternative-arduino-interfaces) über alternative Programmierumgebungen für Arduino. [Ardublock](http://blog.ardublock.com/) sieht sehr vielversprechend aus.

Bei der Vorbereitung zur Veranstaltung bin ich auf einen weiteren, heissen Kandidaten für Workshops gestossen: Das [**ESP8266-WiFi-System on a Chip**](http://www.mikrocontroller.net/articles/ESP8266). Dieses Modul tauchte im August letzten Jahres in einem Artikel auf Hackaday auf und fand wegen seines supergünstigen Preises von wenigen Euro und seiner Leistungsfähigkeit schnell viele Anhänger. Inzwischen gibt es auch ganz ordentliche Werkzeugunterstützung.

Weil ich nicht wusste, ob ich noch beim ausgebuchten [Workshop zum ESP8266 von Rin Räuber und Angelo Wyszengrad](http://makerfairehannover.com/ueber/workshops/#ESP8266) würde mitmachen können, versuchte ich auf dem Gelände einen ESP8266 zu kaufen, leider ohne Erfolg. Dann versuchte ich es mit einem Tweet. Das gab [ein wenig Resonanz](https://twitter.com/oschettler/status/607180906021986305). Am Ende konnte ich dann am Stand der [Arduino Hannover Initiative](http://arduino-hannover.de/) zwei Exemplare ergattern:

<blockquote class="twitter-tweet" lang="en"><p lang="de" dir="ltr"><a href="https://twitter.com/oschettler">@oschettler</a> komm mal bei arduino hannover vorbei.</p>&mdash; Andreas Dunker (@DanimathDunker) <a href="https://twitter.com/DanimathDunker/status/607181724028661760">June 6, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Vielen Dank an dieser Stelle noch einmal dafür.

Neben dem günstigen Preis und der vergleichbaren Leistungsfähigkeit macht eine [Lua-basierende Firmware](http://nodemcu.com/index_en.html) den ESP8266 interessant. Das die Programmiersprache Lua für das Internet-of-Things längst kein Geheimtipp mehr ist, weiss ich spätestens seit meinen Experimenten mit dem electricimp [Anfang letzten Jahres]({% post_url 2014-01-23-internet-der-dinge %}). Lua ist mir spätestens seit 2009 ein Begriff, damals im Zusammenhang mit einem [programmierbaren MySQL-Proxy](https://olav.net/node/2829). Es wird Zeit, dass ich mich damit einmal intensiver beschäftige.

Noch eine andere Lua-Umgebung war auf der MakerFaire sehr präsent: [Nogs](http://nogs.cc) von der gleichnamigen Firma aus Wallenhorst bei Osnabrück. Das verteilte Software-Konzept (NOGS = nodes go savy) wurde in Zusammenarbeit mit [Watterot](https://plus.google.com/+watterott/posts/V5eB15NUEK7) um eine Platine erweitert, auf der eine NOGS Clever Node auf einem ARM Cortex M4 arbeitet.

<div class="thumbnail pull-right">
    <a data-lity href="/wp-content/uploads/2015/06/netio.png">
        <img src="/wp-content/uploads/2015/06/netio_212x212.png">
        <h4 class="small">NetIO. Fernbedienung fürs IoT</h4>
    </a>
</div>

Auch für das iPad kann man inzwischen Apps in Lua entwickeln. Mit der [App Codea vom Anbieter Two Lives Left](https://itunes.apple.com/us/app/codify/id439571171?ls=1&mt=8) geht das sogar direkt auf dem iPad. Lua scheint sich also zu einer End-to-end-Technolgie für das Internet der Dinge zu entwickeln.

Die [Applikation NetIO](https://itunes.apple.com/app/apple-store/id464924297?mt=8&ls=1) verfolgt einen etwas anderen Ansatz zur Erstellung von Apps für das IoT. [Am Stand](http://makerfairehannover.com/2015/05/meet-the-makers-netio-app-2/) konnte ich mir ansehen, wie man über eine [Web-Applikation](http://netioapp.com/editor) eine Oberfläche konfiguriert und diese dann - auf einem iPad - nutzen kann, um Hardware über einen Webservice zu steuern.

Bei allem Enthusiasmus für das Internet der Dinge ist ein ESP8266 für ein Wochenend-Workshop für 8-12-jährige aber vielleicht doch eine Nummer zu groß. Meine **PICAXE-Platinchen** bieten immer noch einiges an Herausforderung für die Kids. [Am Stand der Renata-Schule aus Hildesheim](http://makerfairehannover.com/2015/05/meet-the-makers-mikrocontroller-programmieren-fuer-kinder/), an dem die Kinder ihre PICAXE-Projekte (u.a. eine Ampelschaltung) vorstellten, hatte ich ein interessantes Gespräch mit drei Lehrern, einer aus Dortmund, über deren positive Erfahrungen mit PICAXEn.

<div class="thumbnail pull-left">
    <a data-lity href="/wp-content/uploads/2015/06/vaikai.png">
        <img src="/wp-content/uploads/2015/06/vaikai_212x212.png">
        <h4 class="small">Ein Avakai Companion</h4>
    </a>
</div>

Nun noch etwas ganz anderes. Am Stand von [Vai Kai](http://vaikai.com) habe ich mir die schönen Holzpuppen namens **Avakai Companion** vorführen lassen. Diese kommunizieren über Bluetooth und erinnern mich irgendwie an an die [Goodnight Lamp](http://goodnightlamp.com/) von Alexandra Deschamps-Sonsino und Bäm!, die Lampe wird sogar [im Blog erwähnt](http://blog.vaikai.com/). Auch das ebenfalls zitierte Spiel [Journey](http://en.wikipedia.org/wiki/Journey_%282012_video_game%29) hatte ich sehr genossen. Am **9. Juni** startet die Kickstarter-Kampagne für das Spielzeug.

MakerFaire ohne **3D-Drucker**? Natürlich bin ich auch vor ein paar Druckern stehen geblieben. Den [printmate3d](http://printmate3d.com) habe ich mir sogar erklären lassen. Aber Bonn bekommt jetzt ja vielleicht irgendwann [ein FabLab](https://twitter.com/sascha_foerster/status/607094867265769472), dann brauche ich keinen eigenen.

Hier noch [ein paar Foto-Inspirationen](https://goo.gl/photos/Dd65hvZmwNwqPqhL8) von der MakerFaire. Nächstes Jahr bin ich wieder dort, wer weiss, vielleicht mit einem eigenen Tinkerthon-Stand.
