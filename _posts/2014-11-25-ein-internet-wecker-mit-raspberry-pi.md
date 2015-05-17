---
layout: post
status: publish
published: true
title: Ein Internet-Wecker mit Raspberry PI
author:
  display_name: olav
  login: olav
  email: olav@schettler.net
  url: ''
author_login: olav
author_email: olav@schettler.net
wordpress_id: 955
wordpress_url: http://tinkerthon.de/static/?p=955
date: '2014-11-25 23:19:00 +0100'
date_gmt: '2014-11-25 22:19:00 +0100'
categories:
- Allgemein
tags: []
comments:
- id: 959
  author: Tinkerthon Wecker + Stimmungslampe - Tinkerthon
  author_email: ''
  author_url: http://tinkerthon.de/2014/12/wecker-stimmungslampe/
  date: '2014-12-09 00:48:50 +0100'
  date_gmt: '2014-12-08 23:48:50 +0100'
  content: '[&#8230;] den Blinkstick Square gleich mit dem Raspberry Pi verbinden
    und als Mood-Licht in die Uhrensoftware integrieren. So sieht das Ergebnis [&#8230;]'
---
<p>Letzten Freitag erw&auml;hnte Lena, dass sie gerne einen eigenen Wecker h&auml;tte. Ungef&auml;hr zur gleichen Zeit stolperte ich &uuml;ber den&nbsp;<a href="http:&#47;&#47;www.watterott.com&#47;de&#47;RPi-Display">2,8'' LCD-Touchscreen f&uuml;r das Raspberry Pi<&#47;a> von Watterott. Das Display ist einfach auf die GPIO-Pins des Pi aufsteckbar und es gibt f&uuml;r beides sogar ein <a href="http:&#47;&#47;www.watterott.com&#47;de&#47;TEK-BERRY-Gehaeuse-transparent-v12-mit-Ausschnitt-fuer-RPi-Display">passendes Geh&auml;use<&#47;a>.</p>
<p>[caption id="attachment_960" align="alignnone" width="300"]<a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;11&#47;20110750_1.jpg"><img class="wp-image-960 size-medium" src="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;11&#47;20110750_1-300x216.jpg" alt="20110750_1" width="300" height="216" &#47;><&#47;a> Raspberry Pi mit aufgestecktem Display (Bild: Watterott)[&#47;caption]</p>
<p>[caption id="attachment_961" align="alignnone" width="300"]<a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;11&#47;20110803.jpg"><img class="wp-image-961 size-medium" src="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;11&#47;20110803-300x187.jpg" alt="20110803" width="300" height="187" &#47;><&#47;a> Passendes TEX Berry Geh&auml;use (Bild: Watterott)[&#47;caption]</p>
<p>Ich hatte lange Zeit ein ganz &auml;hnliches Ger&auml;t, ein Chumby, als Wecker am Bett. Das Chumby war ein kleines, ARM-basierendes Ger&auml;t, ebenfalls mit einfachem Touchscreen, welches neben dem eingebauten Wecker und Internet-Radio noch flash-basierende Apps &uuml;ber Channel abonnieren und diese im Wechsel abspielen konnte. Eigentlich immer noch ein ganz valider Nutzungsfall, denn ich f&uuml;r Lena und auf Basis der Combo aus RaspberryPi und Touchscreen wieder zum Leben erwecken wollte.</p>
<p>Meine Idee war zun&auml;chst, auf Basis von PyGame und dessen Framebuffer-Unterst&uuml;tzung ein eigenes GUI zu programmieren. Das sollte &auml;hnlich wie die Oberfl&auml;che des Chumby ein paar eingebaute Funktionen mitbringen: Uhr mit Weckfunktion, vielleicht ein Kalender, Steuerung eines lokalen Music Player Demons MDM f&uuml;r Musik und H&ouml;rspiele, vielleicht noch eine einfacher Mail- oder Chat-Client.</p>
<p>Die Basis-Installation des Displays war zun&auml;chst erfreulich einfach. Watterott bietet zu dem Display ein modifiziertes Raspbian-Image inklusive einem X11 mit Framebuffer-Unterst&uuml;tzung f&uuml;r das Display. Auch der&nbsp;Touchscreen funktioniert damit auf Anhieb. Lediglich die Anbindung an das heimische WLAN ist ein kleines Ratespiel und z.B. beim <a href="http:&#47;&#47;tinkerthon.de&#47;2013&#47;09&#47;raspberry-pi-lehrt-web-programmierung&#47;">Coder von Google<&#47;a> wesentlich eleganter gel&ouml;st. Nach ein paar Versuchen und ein bisschen Herum-Googlen hat es aber dann geklappt.</p>
<p>F&uuml;r das Schreiben der Oberfl&auml;che ist&nbsp;PyGame leider kein sehr komfortabler GUI-Baukasten. Ich machte mich also auf die Suche nach etwas Produktiverem. Leider ist die Auswahl bei einem Anzeigeger&auml;t ohne OpenGL-Unterst&uuml;tzung sehr mau. Die libSDL wird noch am ehesten unterst&uuml;tzt. Ich habe dann auch einige Libraries probiert:</p>
<p>F&uuml;r PyGame gibt es ein Beispiel einer MPD-Steuerung.</p>
<p>Daneben gibt es mit <a href="http:&#47;&#47;www.spida.net&#47;projects&#47;software&#47;pympdtouchgui&#47;index.en.html">PyMPDTouchGui<&#47;a> auch eine ausgewachsene Alternative. Das habe ich aber auf meinem Display nicht zum Laufen gebracht.</p>
<p>Eine Bibliothek f&uuml;r LUA (<a href="http:&#47;&#47;tekui.neoscientists.org">TekUI<&#47;a>) sah sehr vielversprechend aus. Die habe ich aber letztlich nicht ausprobiert.</p>
<p>F&uuml;r das&nbsp;<a href="http:&#47;&#47;www.fltk.org&#47;">FLTK-Toolkit<&#47;a> gibt es eine <a href="https:&#47;&#47;www.mail-archive.com&#47;fltk-dev@easysw.com&#47;msg00762.html">DirectFB-Unterst&uuml;tzung<&#47;a>.</p>
<p><a href="http:&#47;&#47;ilixi.org&#47;">iliXi<&#47;a> l&auml;uft ebenfalls auf DirectFB, ebenso&nbsp;<a href="http:&#47;&#47;libagar.org&#47;">http:&#47;&#47;libagar.org&#47;<&#47;a></p>
<p>Selbst <a href="http:&#47;&#47;www.androwish.org&#47;">Tcl&#47;Tk<&#47;a> h&auml;tte eine Alternative sein k&ouml;nnen.</p>
<p><a href="http:&#47;&#47;harmoniccode.blogspot.de&#47;2014&#47;02&#47;fun-with-javafx-on-raspberry-pi-again.html">JavaFX<&#47;a> w&auml;re vielleicht auch eine Alternative gewesen.</p>
<p>Sehr interessant fand ich QML. Das h&auml;tte auch fast funktioniert, scheiterte am Ende aber an der fehlenden OpenGL-Unterst&uuml;tzung. Sollte ich noch einmal ein Kiosk-System mit&nbsp;dem regul&auml;ren HDMI-Anschluss bauen wollen, ist das aber sicher ein atraktiver Ansatz mit wenig Overhead. Mein Vorgehen basierte dabei auf einem <a href="http:&#47;&#47;www.raspberrypi.org&#47;forums&#47;viewtopic.php?f=31&amp;t=26142">Posting im RaspberryPi-Forum<&#47;a> und basierte auf den Paketen</p>
<div>sudo apt-get install \<&#47;div></p>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;libqt5declarative5 libqt5webkit5-dev \<&#47;div></p>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;qmlscene \<&#47;div></p>
<div>&nbsp; &nbsp; &nbsp;libqt5webkit5-qmlwebkitplugin \<&#47;div></p>
<div>&nbsp; &nbsp; &nbsp;libegl1-mesa \<&#47;div></p>
<div>&nbsp; &nbsp; &nbsp;qtdeclarative5-qtquick2-plugin<&#47;div></p>
<div><&#47;div></p>
<div>Der einfache Aufruf h&auml;tte dann sein sollen:<&#47;div></p>
<div><&#47;div></p>
<div>
<div>QT_QPA_PLATFORM=linuxfb:fb=&#47;dev&#47;fb1 &#47;usr&#47;lib&#47;arm-linux-gnueabihf&#47;qt5&#47;bin&#47;qmlscene webkit.qml<&#47;div></p>
<div><&#47;div></p>
<div>... bricht aber leider wegen mangelnder OpenGL-Unterst&uuml;tzung ab.<&#47;div></p>
<div><&#47;div></p>
<div>Letztlich l&auml;uft der RaspberryPi jetzt mit einem normalen X11 mit Chromium-Browser im Kiosk Mode. Die Anleitung daf&uuml;r liefert <a href="https:&#47;&#47;www.danpurdy.co.uk&#47;web-development&#47;raspberry-pi-kiosk-screen-tutorial&#47;">Dan Purdy<&#47;a>. &nbsp;Den&nbsp;Startschirm bildet eine HTML-Seite mit <a href="http:&#47;&#47;randomibis.com&#47;coolclock&#47;demos&#47;demo2.html">CoolClock<&#47;a>. Es sollen weitere Seiten mit Weckeinstellungen und einer einfachen Steuerung des MPD folgen. Damit h&auml;tte ich auch endlich eine bedienbare Alternative zu meinem ersten <a href="http:&#47;&#47;tinkerthon.de&#47;2013&#47;04&#47;internet-radio-mit-raspberrypi-2-zeiligem-rgb-lcd-und-5-tasten&#47;">Projekt mit dem Music Player Demon<&#47;a> gefunden.<&#47;div></p>
<div><&#47;div></p>
<div>
<p>[caption id="attachment_958" align="alignnone" width="300"]<a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;11&#47;2014-11-25-08.04.14-e1416986351267.jpg"><img class="wp-image-958 size-medium" src="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;11&#47;2014-11-25-08.04.14-e1416986033782-300x242.jpg" alt="2014-11-25 08.04.14" width="300" height="242" &#47;><&#47;a> Die Uhr als HTML-Seite. Rechts das Men&uuml; macht noch nichts[&#47;caption]</p>
<p><&#47;div><br />
<&#47;div><br />
Der aktuelle Stand der Software liegt bei <a href="https:&#47;&#47;bitbucket.org&#47;olav&#47;lenas-uhr">Bitbucket<&#47;a>&nbsp;und ist open source.</p>
