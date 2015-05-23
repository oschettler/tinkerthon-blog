---
title: Physical Computing Workshop am Samstag, 9.4.11 in Bonn
author: olav
published: 08.04.2011
thumbnail: /wp-content/uploads/2011/04/IMG_0117-212x212.jpg
layout: post
permalink: /2011/04/physical-computing-workshop-samstag-9-4-11/
aktt_notify_twitter:
  - yes
aktt_tweeted:
  - 1
categories:
  - Allgemein
---
Dieses Mal werden wir Stimmungslampen mit bunten Leuchtdioden basteln.

Es gibt für diese Lampen mit Mehrfarb-LEDs viele Anleitungen im Internet. Die einfachsten Versionen benutzen Farbwechsel-Leuchtdioden, die bereits einen kleinen Computerchip eingebaut haben und damit festgelegte Farbfolgen abspielen. Conrad in Bonn verkauft solche Farbwechsler-LEDs in verschiedenen Ausführungen, z.B. [#150700][1] direkt zum Anschluss an 3V. Das ist zwar einerseits etwas starr. Man kann aber andererseits zwei oder mehr solcher Farbwechsler in einem Lichtobjekt einsetzen und bekommt dann schnell interessante Farbmuster durch die leicht unterschiedlichen Wechselgeschwindigkeiten. Hier ist eine [Anleitung][2] für ein solches Lichtobjekt vom Erfinder der [Blinkiebugs][3].

Am anderen Spektrum der Farbwechsel-Lampen stehen frei programmierbare Schaltungen, die vielleicht sogar über eine Twitter-Anbindungen verfügen und so auf Ereignisse im Internet mit vorbereiteten Farbspielen reagieren können. Bekannteste Vertreter dieser Gattung ist die Familie der [BlinkM][4]. Das sind sogenannte Smart-LED, bestehend aus einer rot/grün/blauen LED und einem kleinen ATtiny-Microcontroller. Der Erfinder und Hersteller der BlinkMs, Tod E. Kurt, berichtet in seinem [Blog][5] ausführlich über Hintergründe und Entwicklung seiner Erfindung.

Ich habe mir für unser Projekt am Samstag eine Schaltung mit unseren bekannten PIC-Microcontrollern vom Typ PIC 12F863 als Vorlage gesucht. die [zugehörige Firmware][6] &#8211; das ist das Programm, welches auf dem Microcontroller läuft und die Farbwechsel abspielt &#8211; ist zwar nicht frei programmierbar wie die BlinkMs. Es gibt aber eine Variante, die über eine serielle Schnittstelle vom Computer aus steuerbar ist.

Jeder Teilnehmer wird im Workshop seine eigene Farbwechsel-Lampe aufbauen und sie mit nach Hause nehmen. Da wir dieses Mal das Programm für unsere Kreationen nicht selber zu schreiben brauchen &#8211; ich bringe bereits programmierte 12F863 mit &#8211; bleibt sicher genügend Zeit, mit meinem anderen Prototypen zu spielen, die ich seit dem letzten Workshop gebaut habe. Dabei sind

  * ein Marmeladenglas mit Glühwürmchen
  * ein Spiel Senso
  * ein Lichtsequenzer auf der Basis eines BlinkM-Nachbaus

Wir werden also auch dieses Mal einen Menge neuer Dinge kennenlernen und Spass haben. Also: Wir sehen uns am Samstag um 14 Uhr im [Haus Müllestumpe in Bonn.][7]

<!-- see gallery_shortcode() in wp-includes/media.php -->

<div id='gallery-11' class='gallery galleryid-479 gallery-columns-2 gallery-size-thumbnail'>
  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/04/IMG_0117-e1302216651605.jpg' rel="lightbox[479]" title="Physical Computing Workshop am Samstag, 9.4.11 in Bonn"><img width="150" height="150" src="http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/04/IMG_0117-150x150.jpg" class="attachment-thumbnail" alt="Unsere Farbwechsellampe" /></a>
    </dt>
  </dl>

  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/04/IMG_0114-e1302216777959.jpg' rel="lightbox[479]" title="Physical Computing Workshop am Samstag, 9.4.11 in Bonn"><img width="150" height="150" src="http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/04/IMG_0114-e1302216777959-150x150.jpg" class="attachment-thumbnail" alt="Farbwechsler mit 12F683 auf Lochrasterplatine" /></a>
    </dt>
  </dl>

  <br style="clear: both" />

  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/04/IMG_0115-e1302216903881.jpg' rel="lightbox[479]" title="Physical Computing Workshop am Samstag, 9.4.11 in Bonn"><img width="150" height="150" src="http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/04/IMG_0115-e1302216903881-150x150.jpg" class="attachment-thumbnail" alt="Rückseite der Lochrasterplatine" /></a>
    </dt>
  </dl>

  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/04/IMG_0120-e1302217346174.jpg' rel="lightbox[479]" title="Physical Computing Workshop am Samstag, 9.4.11 in Bonn"><img width="150" height="150" src="http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/04/IMG_0120-150x150.jpg" class="attachment-thumbnail" alt="BlinkM-Nachbau mit Arduino und Lichtsequenzer" /></a>
    </dt>
  </dl>

  <br style="clear: both" />

  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/04/IMG_0080-e1302217492570.jpg' rel="lightbox[479]" title="Physical Computing Workshop am Samstag, 9.4.11 in Bonn"><img width="150" height="150" src="http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/04/IMG_0080-150x150.jpg" class="attachment-thumbnail" alt="Glühwürmchen mit PICAXE-Protoplatine" /></a>
    </dt>
  </dl>

  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/04/IMG_0094-e1302216995778.jpg' rel="lightbox[479]" title="Physical Computing Workshop am Samstag, 9.4.11 in Bonn"><img width="150" height="150" src="http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/04/IMG_0094-150x150.jpg" class="attachment-thumbnail" alt="Senso-Spiel mit PIC 12F683" /></a>
    </dt>
  </dl>

  <br style="clear: both" /> <br style='clear: both;' />
</div>

 [1]: http://www.conrad.de/ce/de/product/150700/LED-RGB-FARBWECHSEL-3-VDC
 [2]: http://www.instructables.com/id/Framed-Color-Changing-LED-Art/
 [3]: http://www.blinkybug.com/
 [4]: http://thingm.com/products/blinkm
 [5]: http://todbot.com/blog/
 [6]: http://pic-projects.org.uk/projects/genrgb/index.htm
 [7]: http://muellestumpe.de
