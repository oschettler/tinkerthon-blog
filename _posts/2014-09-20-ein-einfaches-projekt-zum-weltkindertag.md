---
layout: post
status: publish
published: true
title: Ein einfaches Projekt zum Weltkindertag
author:
  display_name: olav
  login: olav
  email: olav@schettler.net
  url: ''
author_login: olav
author_email: olav@schettler.net
wordpress_id: 913
wordpress_url: http://tinkerthon.de/?p=913
date: '2014-09-20 09:17:04 +0200'
date_gmt: '2014-09-20 07:17:04 +0200'
categories:
- Projektideen
tags: []
comments: []
---
<p>Heute ist Weltkindertag, an dem weltweit an die Rechte von Kindern erinnert wird. Dazu gibt es in <a href="http:&#47;&#47;www.weltkindertag.de&#47;">Berlin<&#47;a> und&nbsp;<a href="http:&#47;&#47;www.weltkindertag-koeln.de&#47;">K&ouml;ln<&#47;a>&nbsp;gro&szlig;e Feste. In K&ouml;ln wird am Sonntag, dem&nbsp;21.09.2014 zwischen 12 und&nbsp;18 Uhr im Rheingarten und auf dem Heumarkt&nbsp;gefeiert. Aber auch schon am heutigen Samstag gibt es von&nbsp;18.45 bis 21.00 Uhr auf der WDR-B&uuml;hne im Rheingarten ein buntes Programm mit den Kuschelb&auml;ren Johannes und Stachel.</p>
<p>Wer es nicht zu einem der Feste schafft, kann vielleicht die lieben Kleinen zuhause mit einem einfachen Bastelprojekt animieren. Gestern habe ich z.B. mit meiner 5-j&auml;hrigen Tochter eine kleine Platine zusammengel&ouml;tet, mit der sich anschlie&szlig;end ein Ring aus 16 Adafruit Neopixeln steuern l&auml;&szlig;t.</p>
<p>Die Platine war ein <a href="http:&#47;&#47;blinkstick.com&#47;products&#47;blinkstick-pro">Blinkstick Pro<&#47;a>, den ich vor einigen Tagen direkt beim Hersteller in England f&uuml;r 11&nbsp;&euro; bestellt hatte. &nbsp;Die Schaltung besteht nur aus wenigen Teilen und ist mit der <a href="http:&#47;&#47;blinkstick.com&#47;help&#47;build-pro-1-0">reich bebilderten Anleitung<&#47;a> des Herstellers in ein paar Minuten aufgebaut.</p>
<p>Mit dem Platinchen lassen sich einfache LEDs genau so steuern wie die neuen, intelligenten Neopixel. Auf <a rel="nofollow" href="http:&#47;&#47;blinkstick.com&#47;help&#47;tutorials">blinkstick.com<&#47;a> gibt es einige einfach umzusetzende Projektideen, u.a. auch mit <a rel="nofollow"  href="http:&#47;&#47;www.ikea.com&#47;de&#47;de&#47;catalog&#47;products&#47;40192361&#47;">IKEA DIODER<&#47;a>&nbsp;LED Strips.</p>
<p>Ich hatte mir vor einiger Zeit einen Ring mit 16 LEDs (ca. 10&euro;) bestellt, bisher aber mit der Ansteuerung kein Gl&uuml;ck gehabt. Mein urspr&uuml;nglicher Plan war, den Ring &uuml;ber ein Electric Imp aus dem Internet steuerbar zu machen. Es gibt daf&uuml;r auch eine entsprechende Software. Diese funktionierte bei mir aber leider nicht zuverl&auml;ssig. Die Neopixel brauchen 5V, der Electric Imp l&auml;uft aber mit 3,3V.</p>
<p>Mit dem Blinkstick geht die Ansteuerung problemlos. Es gibt Software-Unterst&uuml;tzung f&uuml;r <a href="http:&#47;&#47;blinkstick.com&#47;help&#47;api-implementations">viele Programmiersprachen<&#47;a>. Ich habe die Python-Variante ausprobiert. Damit lassen sich als einfache Beispiele mit wenigen Zeilen Python-Code eine Analog-Uhr oder ein rotierender Farbring steuern.</p>
<p>Ich habe eine Idee&nbsp;f&uuml;r eine Websteuerung unter Zuhilfenahme eines <a title="Link auf den RaspberryPi bei unserem Partner ELV"  rel="nofollow" href="http:&#47;&#47;ad.zanox.com&#47;ppc&#47;?28982277C94550477&amp;ULP=[[controller.aspx?cid=74&amp;detail=10&amp;detail2=43791&amp;refid=zanox]]">Raspberry Pis<&#47;a> und des <a href="http:&#47;&#47;bottlepy.org&#47;docs&#47;dev&#47;index.html">Python Frameworks Bottle<&#47;a>. Mal sehen, ob ich Zeit daf&uuml;r finde&nbsp;;)</p>
<p>Hier ist ein Video, in dem der Erfinder des Blinksticks, Arvydas Juskevicus &uuml;ber die Einsatzm&ouml;glichkeiten seines&nbsp;Produktes nachdenkt - in Englisch:</p>
<p><script height="300px" src="http:&#47;&#47;player.ooyala.com&#47;iframe.js#pbid=85d52cbb9c924733934b1880e9cde580&amp;ec=Z2Njc2aTqyKUUM5MV0mroP5w_4sHtkza"><&#47;script></p>
