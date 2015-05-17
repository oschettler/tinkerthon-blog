---
layout: post
status: publish
published: true
title: Blinkstick Pro mit Scratch steuern
author:
  display_name: olav
  login: olav
  email: olav@schettler.net
  url: ''
author_login: olav
author_email: olav@schettler.net
wordpress_id: 925
wordpress_url: http://tinkerthon.de/?p=925
date: '2014-09-20 22:56:37 +0200'
date_gmt: '2014-09-20 20:56:37 +0200'
categories:
- Projektideen
tags:
- Blinkstick
- MIT Scratch
- ScratchJr
- Python
comments:
- id: 510
  author: arvydev
  author_email: twitter.172698812@example.com
  author_url: https://twitter.com/arvydev
  date: '2014-09-21 00:15:44 +0200'
  date_gmt: '2014-09-20 22:15:44 +0200'
  content: 'I''m absolutely blown away! Can''t wait to try it out!!! RT @tinkerthon:
    Control Blinkstick Pro with MIT Scratch: http:&#47;&#47;t.co&#47;ZlJHQAGdEd'
- id: 572
  author: 2. Workshop-Tag zum Hei&szlig;en Draht | Tinkerthon
  author_email: ''
  author_url: http://tinkerthon.de/2014/10/2-workshop-tag-zum-heissen-draht/
  date: '2014-10-09 08:21:45 +0200'
  date_gmt: '2014-10-09 06:21:45 +0200'
  content: '[&#8230;] an einer Adapter-Software zwischen dem neuen Scratch 2 und den
    PICAXE-Microcontrollern. Ich habe ja f&uuml;r den Blinkstick auch schon mit Scratch-Erweiterungen
    experimentiert. &nbsp;Diese neue Adapter sollen auf Windows, Linux [&#8230;]'
---
<p>Im <a href="&#47;2014&#47;09&#47;ein-einfaches-projekt-zum-weltkindertag&#47;">letzen Beitrag<&#47;a> habe ich den <a href="http:&#47;&#47;www.blinkstick.com&#47;products&#47;blinkstick-pro">Blinkstick Pro<&#47;a> als einfaches L&ouml;tprojekt f&uuml;r Kinder beschrieben. Der Blinkstick kommt schon von Hause aus mit einer reichen Unterst&uuml;tzung f&uuml;r die unterschiedlichsten Programmiersprachen. Auch eine Steuerung aus dem Web ist m&ouml;glich.</p>
<p>Ich habe heute versucht, den Blickstick mit angeschlossenem Ring aus 16 Neopixeln aus&nbsp;der<a href="http:&#47;&#47;scratch.mit.edu&#47;scratch2download&#47;"> Scratch Programmierumgebung (Version 2.0)<&#47;a> zu steuern. Scratch wurde am MIT Media Lab entwickelt und ist seit langem eine beliebte Umgebung, um Kindern ab 8 Jahren das Programmieren nahezubringen. seit diesem Juli gibt es mit <a href="http:&#47;&#47;www.scratchjr.org&#47;">ScratchJr<&#47;a> eine Version f&uuml;r das iPad f&uuml;r noch j&uuml;ngere Kinder ab 5 Jahren.</p>
<p>Scratch mit Python-Programmen zu erweitern ist nicht schwierig. Das Ergebnis sind neue Bl&ouml;cke, &uuml;ber die sich &uuml;ber den&nbsp;Blinkstick die 16 bunten Leuchtdioden steuern lassen.</p>
<p>Zur Installation ben&ouml;tigen wir zun&auml;chst die Python-Erweiterungen f&uuml;r Blinkstick und f&uuml;r Scratch-Erweiterungen:</p>
<p><script src="https:&#47;&#47;gist.github.com&#47;tinkerthon&#47;674181eaf571b1556741.js"><&#47;script>Danach geben wir in einem Texteditor die folgende Datei ein und speichern sie als blinkscratch.py<script src="https:&#47;&#47;gist.github.com&#47;tinkerthon&#47;da3bf9dc384b24220418.js"><&#47;script></p>
<p>Diese Datei starten wir mit "python blinkscratch.py". Sie startet einen Webserver auf 5000. Unter der Adresse http:&#47;&#47;localhost:5000 k&ouml;nnen wir die Erweiterungsdatei *.s2e f&uuml;r Scratch herunterladen:</p>
<p><a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;09&#47;localhost_5000.png"><img class="alignnone size-full wp-image-927" src="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;09&#47;localhost_5000.png" alt="localhost_5000" width="253" height="129" &#47;><&#47;a></p>
<p>Die so heruntergeladene Datei kann man per Shift-Klick auf das Datei-Men&uuml; in Scratch importieren:</p>
<p><a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;09&#47;Vollbild_20_09_14_23_03.png"><img class="alignnone size-medium wp-image-929" src="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;09&#47;Vollbild_20_09_14_23_03-300x231.png" alt="Vollbild_20_09_14_23_03" width="300" height="231" &#47;><&#47;a></p>
<p>Damit stehen uns die neuen Bl&ouml;cke f&uuml;r ein erstes Beispielprogramm zur Verf&uuml;gung:</p>
<p><a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;09&#47;Scratch_2_Offline_Editor.png"><img class="alignnone size-medium wp-image-930" src="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;09&#47;Scratch_2_Offline_Editor-300x183.png" alt="Scratch_2_Offline_Editor" width="300" height="183" &#47;><&#47;a></p>
