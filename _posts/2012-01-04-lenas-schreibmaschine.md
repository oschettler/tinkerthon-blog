---
title: Lenas Schreibmaschine
author: olav
published: 04.01.2012
thumbnail: /wp-content/uploads/2012/01/BILD0486-212x212.jpg
layout: post
permalink: /2012/01/lenas-schreibmaschine/
aktt_notify_twitter:
  - yes
aktt_tweeted:
  - 1
category: Projekte
tags:
  - PICAXE

---
Lena entwickelte in der letzten Zeit an starkes Interesse daran, Briefe am Computer zu schreiben. Wie schön, dass es bei Conrad gerade PS/2-Tastaturen für unter 3€ zu kaufen gibt. Grund genug, eine kleine Schreibmaschine für Lena zu basteln. Die aktuelle Version lebt noch auf einem Breadboard, aber das lässt sich sicher noch ändern. Lena findet&#8217;s gut:



Die Schaltung ist sehr einfach und besteht neben dem Elektronenhirn, einem [PICAXE-14M2][1], aus einem [kleinen Display][2] und eben der PS/2-Tastatur.

Das kleine BASIC-Programm macht noch nicht sehr viel. Es nutzt den kbin-Befehl des Microcontrollers, dekodiert die Tasten über eine Datentabelle im EEPROM und gibt die so ermittelten ASCII-Codes auf dem seriellen Display aus. Zwei spezielle Tasten-Codes werden bisher interpretiert: BACKSPACE zum Löschen des letzten Zeichens und PAGELOCK zum Löschen des Bildschirminhaltes.

<!-- see gallery_shortcode() in wp-includes/media.php -->

<div id='gallery-15' class='gallery galleryid-684 gallery-columns-3 gallery-size-thumbnail'>
  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='/wp-content/uploads/2012/01/kids_typewriter-e1325702193243.jpg' rel="lightbox[684]" title="Lenas Schreibmaschine"><img width="150" height="150" src="/wp-content/uploads/2012/01/kids_typewriter-150x150.jpg" class="attachment-thumbnail" alt="kids_typewriter" /></a>
    </dt>
  </dl>

  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='/wp-content/uploads/2012/01/BILD0486-e1325700960283.jpg' rel="lightbox[684]" title="Lenas Schreibmaschine"><img width="150" height="150" src="/wp-content/uploads/2012/01/BILD0486-150x150.jpg" class="attachment-thumbnail" alt="DIGITAL CAMERA" /></a>
    </dt>
  </dl>

  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='/wp-content/uploads/2012/01/BILD0485-e1325700939981.jpg' rel="lightbox[684]" title="Lenas Schreibmaschine"><img width="150" height="150" src="/wp-content/uploads/2012/01/BILD0485-150x150.jpg" class="attachment-thumbnail" alt="DIGITAL CAMERA" /></a>
    </dt>
  </dl>

  <br style="clear: both" /> <br style='clear: both;' />
</div>

Hier ist das Programm bisher: [echo_keyb.bas][3]

 [1]: http://www.picaxe.com/Hardware/PICAXE-Chips/PICAXE-14M2-microcontroller/ "PICAXE-14M2 Microcontroller"
 [2]: http://www.4dsystems.com.au/prod.php?id=77 "µOLED-96-G1(SGC) von 4D Systems"
 [3]: /wp-content/uploads/2012/01/echo_keyb.bas_.txt
