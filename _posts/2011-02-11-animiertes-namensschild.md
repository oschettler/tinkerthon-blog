---
title: Animiertes Namensschild
author: olav
layout: post
permalink: /2011/02/animiertes-namensschild/
aktt_notify_twitter:
  - yes
aktt_tweeted:
  - 1
categories:
  - Allgemein
  - Projektideen
tags:
  - '#dsez'
  - Arduino
  - Echtzeit Köln
  - Elevator Pitch
  - JeeNode
---
Gestern war in Köln die [Echtzeit][1], eine Veranstaltung, zu der Gründer von Internet-Firmen und mögliche Geldgeber eingeladen wurden, um sich kennenzulernen.

Ich hatte eine Konstruktion aus einer Arduino-kompatiblen [JeeNode][2], einem [LCD-Display mit 2&#215;16 Zeichen][3], einer 4,5 Volt-Batterie und einem einfachen Pappständer dabei, um leichter mit Leuten ins Gespräch zu kommen. Das Gerät zeigte im Wechsel die Adressen von [ein][4] [paar][5] [meiner][6] [Web][7]&#8211;[Projekte][8].

So etwas wurde schon öfter als Namensschild für Kennenlern-Parties vorgeschlagen, dann oft mit Netzwerkfunktion, um Kontaktdaten auszutauschen oder gemeinsame Interessen anzuzeigen.

Mein Display kann rein von der Hardware ebenfalls mit der Aussenwelt kommunizieren, denn das JeeNode enthält einen Funk-Sender und -Empfängerm It dem entsprechenden Programm könnten also sehr wohl solche Namensschilder untereinander Kontakt aufnehmen oder auch nur drahtlos neu programmiert werden.

Hier ist das Arduino-Programm:

[serlcd2_lines][9]

<!-- see gallery_shortcode() in wp-includes/media.php -->

<div id='gallery-7' class='gallery galleryid-370 gallery-columns-2 gallery-size-thumbnail'>
  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/02/IMG_0059-e1297406274660.jpg' rel="lightbox[370]" title="Animiertes Namensschild"><img width="150" height="150" src="http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/02/IMG_0059-150x150.jpg" class="attachment-thumbnail" alt="IMG_0059" /></a>
    </dt>
  </dl>
  
  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/02/IMG_0054-e1297406299674.jpg' rel="lightbox[370]" title="Animiertes Namensschild"><img width="150" height="150" src="http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/02/IMG_0054-150x150.jpg" class="attachment-thumbnail" alt="IMG_0054" /></a>
    </dt>
  </dl>
  
  <br style="clear: both" /> <br style='clear: both;' />
</div>

 [1]: http://www.deutsche-startups.de/echtzeit/echtzeit-koeln/
 [2]: http://jeelabs.net/projects/hardware/wiki/JeeNode
 [3]: http://www.watterott.com/de/16x2-Zeichen-LED-weiss-auf-schwarz-serielle-Ansteuerung-33V
 [4]: http://olav.net "Personal Blog"
 [5]: http://tribe.de "Social Site"
 [6]: http://cv8.me "Online CVs"
 [7]: http://dankbarkeit-ist-nicht-erforderlich.de/ "Dankbarkeit zeigen"
 [8]: http://vorlesebuch.de "Vorlesebücher"
 [9]: http://tinkerthon.de/wp-content/uploads/2011/02/serlcd2_lines.txt