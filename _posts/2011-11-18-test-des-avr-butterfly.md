---
title: Test des AVR Butterfly
author: olav
published: 18.11.2011
thumbnail: /wp-content/uploads/2011/11/IMG_0123-212x212.jpg
layout: post
permalink: /2011/11/test-des-avr-butterfly/
aktt_notify_twitter:
  - yes
aktt_tweeted:
  - 1
categories:
  - Allgemein
---
Auf der Suche nach einer Plattform für Workshops, bei denen weniger gelötet und mehr experimentiert wird, bin ich auf den [AVR Butterfly][1] gestossen. Ich habe mir einmal einen dieser kleinen Schmetterlinge von [farnell][2] kommen lassen. Das AVR Butterfly ist eine Evaluierungsplatine auf der Basis des ATmega 169 Prozessors. Die Platine hat die Größe einer Checkkarte und besitzt neben dem Prozessor eine beeindruckende Menge an eingebauten Ein- und Ausgabegeräten:

  * LCD-Anzeige mit 120 Segmenten
  * Piezo-Lautsprecher
  * Mini-Joystick mit Taster
  * Sensoren für Spannung und Temperatur und (Eingang für) einen Lichtsensor.

Das Platinchen wird mit einer 3V-Knopfzelle geliefert und hat eine Nadel auf der Rückseite, so das man es als Namensschild tragen kann.

Interessant an der Platine ist die komplette Ausstattung mit Ein- und Ausgängen. Von der Hardware her wäre das also eine perfekte Basis für erste Experimente in Physical Computing. Programmiert wird die Platine über eine serielle Schnittstelle, an der sogar die Pegel RS232-Niveau haben, also direkt mit der seriellen Schnittstelle eines PCs oder über ein USB/Seriell-Kabel auch mit einem Mac verbunden werden können.

Software-seitig gibt es zunächst einmal das frei von der Atmel-Seite herunterladbare AVR-Studio. Damit lässt sich der AVR Butterfly in C programmieren. Es gibt allerdings auch eine Anbindung an die Arduino-Umgebung. Darauf hatte ich grosse Hoffnung gelegt. Leider habe ich diese Umgebung bisher noch nicht dazu gebracht, Programme auf den Butterfly zu laden. Das werde ich aber weiter versuchen.

Wenn das erst einmal gelungen ist, lässt sich der Butterfly zusammen mit einem Steckbrett wunderbar für viele Experimente nutzen.  Ich bin dazu der Anleitung von Smiley Micros gefolgt und habe die kleine Platine um ein paar Stecksockel und einen seriellen Anschluss erweitert. Aber -wie gesagt, leider funktioniert die Ansteuerung aus der Arduino-Umgebung noch nicht. Ich werde es weiter versuchen und hier berichten.

Hier noch ein paar nützliche Links zum AVR Butterfly:

  * [Produktseite von Atmel][3]
  * [Atmel-Seite][4] bei Farnell Deutschland
  * [Arduino Projekt][5] und die [Anleitung][6] für die Umstellung
  * [Wikipedia][7] &#8211; &#8220;&#8230;Größe einer Kreditkarte, günstigste vollständiger, batteriebetriebener Einplatinencomputer&#8221;
  * [Buch][8] von Smiley Micros &#8211; locker geschrieben, stellenweise *wirklich* lustig
  * Treiber für [mein USB/RS232-Kabel von Scratch Board][9]

<!-- see gallery_shortcode() in wp-includes/media.php -->

<div id='gallery-14' class='gallery galleryid-662 gallery-columns-2 gallery-size-thumbnail'>
  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='/wp-content/uploads/2011/11/IMG_0123-e1321580034203.jpg' rel="lightbox[662]" title="Test des AVR Butterfly"><img width="150" height="150" src="/wp-content/uploads/2011/11/IMG_0123-150x150.jpg" class="attachment-thumbnail" alt="IMG_0123" /></a>
    </dt>
  </dl>

  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='/wp-content/uploads/2011/11/IMG_0121-e1321580055516.jpg' rel="lightbox[662]" title="Test des AVR Butterfly"><img width="150" height="150" src="/wp-content/uploads/2011/11/IMG_0121-150x150.jpg" class="attachment-thumbnail" alt="IMG_0121" /></a>
    </dt>
  </dl>

  <br style="clear: both" /> <br style='clear: both;' />
</div>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

 [1]: http://de.farnell.com/atmel/atavrbfly/demo-evaluation-kit-for-atmega169/dp/4745061
 [2]: http://de.farnell.com
 [3]: http://www.atmel.com/dyn/products/tools_card.asp?tool_id=3146
 [4]: http://de.farnell.com/atmel/
 [5]: http://code.google.com/p/butteruino/
 [6]: http://www.arduino.cc/cgi-bin/yabb2/YaBB.pl?num=1222630663
 [7]: http://en.wikipedia.org/wiki/AVR_Butterfly
 [8]: http://www.smileymicros.com/index.php?module=pagemaster&PAGE_user_op=view_page&PAGE_id=41
 [9]: http://www.prolific.com.tw/eng/downloads.asp?ID=31
