---
layout: post
status: publish
published: true
title: Test des AVR Butterfly
author:
  display_name: olav
  login: olav
  email: olav@schettler.net
  url: ''
author_login: olav
author_email: olav@schettler.net
wordpress_id: 662
wordpress_url: http://tinkerthon.de/?p=662
date: '2011-11-18 02:34:41 +0100'
date_gmt: '2011-11-18 01:34:41 +0100'
categories:
- Allgemein
tags: []
comments: []
---
<p>Auf der Suche nach einer Plattform f&uuml;r Workshops, bei denen weniger gel&ouml;tet und mehr experimentiert wird, bin ich auf den <a href="http:&#47;&#47;de.farnell.com&#47;atmel&#47;atavrbfly&#47;demo-evaluation-kit-for-atmega169&#47;dp&#47;4745061">AVR Butterfly<&#47;a> gestossen. Ich habe mir einmal einen dieser kleinen Schmetterlinge von <a href="http:&#47;&#47;de.farnell.com">farnell<&#47;a> kommen lassen. Das AVR Butterfly ist eine Evaluierungsplatine auf der Basis des ATmega 169 Prozessors. Die Platine hat die Gr&ouml;&szlig;e einer Checkkarte und besitzt neben dem Prozessor eine beeindruckende Menge an eingebauten Ein- und Ausgabeger&auml;ten:</p>
<ul>
<li>LCD-Anzeige mit 120 Segmenten<&#47;li>
<li>Piezo-Lautsprecher<&#47;li>
<li>Mini-Joystick mit Taster<&#47;li>
<li>Sensoren f&uuml;r Spannung und Temperatur und (Eingang f&uuml;r) einen Lichtsensor.<&#47;li><br />
<&#47;ul><br />
Das Platinchen wird mit einer 3V-Knopfzelle geliefert und hat eine Nadel auf der R&uuml;ckseite, so das man es als Namensschild tragen kann.</p>
<p>Interessant an der Platine ist die komplette Ausstattung mit Ein- und Ausg&auml;ngen. Von der Hardware her w&auml;re das also eine perfekte Basis f&uuml;r erste Experimente in Physical Computing. Programmiert wird die Platine &uuml;ber eine serielle Schnittstelle, an der sogar die Pegel RS232-Niveau haben, also direkt mit der seriellen Schnittstelle eines PCs oder &uuml;ber ein USB&#47;Seriell-Kabel auch mit einem Mac verbunden werden k&ouml;nnen.</p>
<p>Software-seitig gibt es zun&auml;chst einmal das frei von der Atmel-Seite herunterladbare AVR-Studio. Damit l&auml;sst sich der AVR Butterfly in C programmieren. Es gibt allerdings auch eine Anbindung an die Arduino-Umgebung. Darauf hatte ich grosse Hoffnung gelegt. Leider habe ich diese Umgebung bisher noch nicht dazu gebracht, Programme auf den Butterfly zu laden. Das werde ich aber weiter versuchen.</p>
<p>Wenn das erst einmal gelungen ist, l&auml;sst sich der Butterfly zusammen mit einem Steckbrett wunderbar f&uuml;r viele Experimente nutzen. &nbsp;Ich bin dazu der Anleitung von Smiley Micros gefolgt und habe die kleine Platine um ein paar Stecksockel und einen seriellen Anschluss erweitert. Aber -wie gesagt, leider funktioniert die Ansteuerung aus der Arduino-Umgebung noch nicht. Ich werde es weiter versuchen und hier berichten.</p>
<p>Hier noch ein paar n&uuml;tzliche Links zum AVR Butterfly:</p>
<ul>
<li><a href="http:&#47;&#47;www.atmel.com&#47;dyn&#47;products&#47;tools_card.asp?tool_id=3146">Produktseite von Atmel<&#47;a><&#47;li>
<li><a href="http:&#47;&#47;de.farnell.com&#47;atmel&#47;">Atmel-Seite<&#47;a> bei Farnell Deutschland<&#47;li>
<li><a href="http:&#47;&#47;code.google.com&#47;p&#47;butteruino&#47;">Arduino Projekt<&#47;a>&nbsp;und die <a href="http:&#47;&#47;www.arduino.cc&#47;cgi-bin&#47;yabb2&#47;YaBB.pl?num=1222630663">Anleitung<&#47;a> f&uuml;r die Umstellung<&#47;li>
<li><a href="http:&#47;&#47;en.wikipedia.org&#47;wiki&#47;AVR_Butterfly">Wikipedia<&#47;a> - "...Gr&ouml;&szlig;e einer Kreditkarte, g&uuml;nstigste vollst&auml;ndiger, batteriebetriebener Einplatinencomputer"<&#47;li>
<li><a href="http:&#47;&#47;www.smileymicros.com&#47;index.php?module=pagemaster&amp;PAGE_user_op=view_page&amp;PAGE_id=41">Buch<&#47;a> von Smiley Micros - locker geschrieben, stellenweise <em>wirklich<&#47;em> lustig<&#47;li>
<li>Treiber f&uuml;r <a href="http:&#47;&#47;www.prolific.com.tw&#47;eng&#47;downloads.asp?ID=31">mein USB&#47;RS232-Kabel von Scratch Board<&#47;a><&#47;li><br />
<&#47;ul><br />
[gallery link="file" columns="2"]</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
