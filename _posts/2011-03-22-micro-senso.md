---
title: Senso-Spiel mit PIC Microcontroller
author: olav
published: 22.03.2011
thumbnail: /wp-content/uploads/2011/03/Simon_game-212x212.jpg
layout: post
permalink: /2011/03/micro-senso/
aktt_notify_twitter:
  - yes
aktt_tweeted:
  - 1
categories:
  - Allgemein
---
Am letzten Wochenende musste der Workshop leider mangels Anmeldungen ausfallen. Ich habe die Zeit genutzt und einen ersten Prototypen für den **nächsten Workshop am 9. April im Haus Müllestumpe** gebaut. Es ist ein Spiel nach dem Vorbild des bekannten Senso. Senso. Senso &#8211; oder Simons &#8211; wie das amerikanische Original auch heisst &#8211; wurde in den 60er Jahren von[ Ralph H. Baer][1] erfunden und war eines der ersten, erfolgreichen Spielekonsolen.

Meine Version ist ein Nachbau des Projektes des [Schweden Simon Inns][2], der Schaltung und Spieleprogrammierung auf einem PIC 12F683-Microcontroller realisierte und als [Instructable][3] veröffentlichte.

Ich habe die Schaltung zunächst auf einer Lochrasterplatine mit einem PIC im DIL-Gehäuse aufgebaut. Die Software von Simon ist in C programmiert und benötigt daher ein PIC-Programmiergerät, um es auf den Microcontroller zu bringen.

Der PIC 12F683 ist derselbe Microcontroller, der auch hinter unserem bekannten PICAXE 08M steckt. Es ist also reizvoll zu schauen, ob sich das Spiel auch in PICAXE-Basic programmieren lässt und dann als Projekt für einen tinkerthon-Workshop taugt.

Unverändert lässt sich die Schaltung jedenfalls nicht mit einem PICAXE-Controller betreiben. Da stört schon der Piezo-Summer an Pin 2, welcher beim PICAXE für die Programmierschnittstelle reserviert ist.

<!-- see gallery_shortcode() in wp-includes/media.php -->

<div id='gallery-10' class='gallery galleryid-460 gallery-columns-3 gallery-size-thumbnail'>
  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='/wp-content/uploads/2011/03/IMG_0095-e1300777577112.jpg' rel="lightbox[460]" title="Senso-Spiel mit PIC Microcontroller"><img width="150" height="150" src="/wp-content/uploads/2011/03/IMG_0095-150x150.jpg" class="attachment-thumbnail" alt="IMG_0095" /></a>
    </dt>
  </dl>

  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='/wp-content/uploads/2011/03/IMG_0094-e1300777527781.jpg' rel="lightbox[460]" title="Senso-Spiel mit PIC Microcontroller"><img width="150" height="150" src="/wp-content/uploads/2011/03/IMG_0094-150x150.jpg" class="attachment-thumbnail" alt="IMG_0094" /></a>
    </dt>
  </dl>

  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='/wp-content/uploads/2011/03/IMG_0093-e1300777547884.jpg' rel="lightbox[460]" title="Senso-Spiel mit PIC Microcontroller"><img width="150" height="150" src="/wp-content/uploads/2011/03/IMG_0093-150x150.jpg" class="attachment-thumbnail" alt="IMG_0093" /></a>
    </dt>
  </dl>

  <br style="clear: both" />

  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='/wp-content/uploads/2011/03/Simon_game.jpg' rel="lightbox[460]" title="Senso-Spiel mit PIC Microcontroller"><img width="150" height="150" src="/wp-content/uploads/2011/03/Simon_game-150x150.jpg" class="attachment-thumbnail" alt="Simon_game" /></a>
    </dt>
  </dl>

  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='/wp-content/uploads/2011/03/IMG_0076.jpg' rel="lightbox[460]" title="Senso-Spiel mit PIC Microcontroller"><img width="150" height="150" src="/wp-content/uploads/2011/03/IMG_0076-150x150.jpg" class="attachment-thumbnail" alt="Kleiner Drahtigel zum Anschluss des Microcontrollers an das Programmiergerät" /></a>
    </dt>
  </dl>

  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='/wp-content/uploads/2011/03/IMG_0075-e1300790314409.jpg' rel="lightbox[460]" title="Senso-Spiel mit PIC Microcontroller"><img width="150" height="150" src="/wp-content/uploads/2011/03/IMG_0075-150x150.jpg" class="attachment-thumbnail" alt="Programmierung des Microcontrollers mit dem PICkit 2" /></a>
    </dt>
  </dl>

  <br style="clear: both" /> <br style='clear: both;' />
</div>

Hier noch ein Video eines Spiels:

 [1]: http://www.ralphbaer.com/
 [2]: http://www.waitingforfriday.com/
 [3]: http://www.instructables.com/id/MicroSimon/
