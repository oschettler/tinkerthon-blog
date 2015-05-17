---
layout: post
status: publish
published: true
title: Lenas Schreibmaschine
author:
  display_name: olav
  login: olav
  email: olav@schettler.net
  url: ''
author_login: olav
author_email: olav@schettler.net
wordpress_id: 684
wordpress_url: http://tinkerthon.de/?p=684
date: '2012-01-04 19:12:57 +0100'
date_gmt: '2012-01-04 18:12:57 +0100'
categories:
- Projektideen
- PICAXE
tags: []
comments: []
---
<p>Lena entwickelte in der letzten Zeit an starkes Interesse daran, Briefe am Computer zu schreiben. Wie sch&ouml;n, dass es bei Conrad gerade PS&#47;2-Tastaturen f&uuml;r unter 3&euro; zu kaufen gibt. Grund genug, eine kleine Schreibmaschine f&uuml;r Lena zu basteln. Die aktuelle Version lebt noch auf einem Breadboard, aber das l&auml;sst sich sicher noch &auml;ndern. Lena findet's gut:</p>
<p><iframe src="http:&#47;&#47;www.youtube.com&#47;embed&#47;kY14lr_lSS4" frameborder="0" width="560" height="315"><&#47;iframe></p>
<p>Die Schaltung ist sehr einfach und besteht neben dem Elektronenhirn, einem <a title="PICAXE-14M2 Microcontroller" href="http:&#47;&#47;www.picaxe.com&#47;Hardware&#47;PICAXE-Chips&#47;PICAXE-14M2-microcontroller&#47;">PICAXE-14M2<&#47;a>, aus einem <a title="&micro;OLED-96-G1(SGC) von 4D Systems" href="http:&#47;&#47;www.4dsystems.com.au&#47;prod.php?id=77">kleinen Display<&#47;a> und eben der PS&#47;2-Tastatur.</p>
<p>Das kleine BASIC-Programm macht noch nicht sehr viel. Es nutzt den kbin-Befehl des Microcontrollers, dekodiert die Tasten &uuml;be eine Datentabelle im EEPROM und gibt die so ermittelten ASCII-Codes auf dem seriellen Display aus. Zwei spezielle Tasten-Codes werden bisher interpretiert: BACKSPACE zum L&ouml;schen des letzten Zeichens und PAGELOCK zum L&ouml;schen des Bildschirminhaltes.</p>
<p>[gallery link="file"]</p>
<p>Hier ist das Programm bisher:&nbsp;<a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2012&#47;01&#47;echo_keyb.bas_.txt">echo_keyb.bas<&#47;a></p>
