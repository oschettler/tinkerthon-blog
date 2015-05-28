---
title: 'Workshop &#8220;Heisser Draht&#8221; zuende'
author: olav
published: 19.02.2011
thumbnail: /wp-content/uploads/2011/03/IMG_0058-212x212.jpg
layout: post
permalink: /2011/02/workshop-heisser-draht-zuende/
aktt_notify_twitter:
  - yes
aktt_tweeted:
  - 1
categories:
  - Workshops
tags:
  - Alarm-Bausatz
  - AXE102
  - Bericht
  - PICAXE 08M
---
Ein schöner und ganz erfolgreicher Workshop ist zu Ende. Jeder der Teilnehmer hat am Ende auf seine PICAXE-Alarmplatine das Spiel programmiert und das Platinchen mit einem selbstgebastelten heissen Draht verbunden. Wer nicht teilnehmen konnte: In einem [früheren Artikel][1] habe ich ein paar Fotos des Spieles.

Unser Programm gibt dem Spieler 30 Sekunden Zeit, den Draht mit der Öse mit möglichst wenigen Berührungen zu überstreichen. Das Programm auf dem PICAXE-Chip zählt die Berührungen und blinkt am Ende deren Anzahl auf der LED.

Eine ergänzenden Funktion hatten wir am Ende nicht hinbekommen. Wir wollten an den Analogeingang der Platine einen Fotowiderstand anschliessen und diesen als Taster benutzen, um das Spiel vorzeitig abzubrechen. Leider haben wir es nicht geschafft, verlässliche Werte über den Befehl **readadc** aus dem Analog-zu-Digital-Wandler herauszulesen. Ich habe jetzt auch den Grund dafür gefunden. Wir hatten beim Löten die kleine Drahtbrücke über den Buchstaben **PK** auf der Platine vergessen. Nach dem Einlöten dieses Drahtes funktioniert der Analogeingang ohne Probleme.

Wenn ihr also zuhause einen Lötkolben habt, lötet doch diese kleine Drahtbrücke noch ein. Dieser Schritt ist auch auf Seite 31 unter Punkt 3 der Anleitung für die Alarmplatine beschrieben. Ich habe diese Anleitung an diesen Artikel angehängt, ihr könnt sie aber auch auf der Webseite von Revolution Ltd. unter [Datasheets][2] mit der Nummer **AXE102** finden.

Im Anhang findet ihr auch noch ein erweitertes Programm mit Auslesen des Fotowiderstandes.

Der nächste Workshop-Termin ist am 19.3.2011. Ich freue mich immer über alte Hasen. Wenn noch Teilnehmer aus dem letzten Jahr dabei sind, können wir auch die Fernsteuerungen für die Rentiere bauen. Die Teile habe ich inzwischen. Ansonsten habe ich viele Ideen zum Basteln mit den PICAXE-Chips: Klopfgeist, Miniorgel, Lichtobjekte, Roboter, usw. Wenn ihr selber Ideen habt, schreibt mir einfach einen Kommentar auf diesen Beitrag oder schickt mir eine E-Mail.

Bis zum nächsten Mal,  
Olav

[axe102][3]

[Erweitertes Programm &#8220;Heisser Draht&#8221; mit Fotowiderstand][4]

<!-- see gallery_shortcode() in wp-includes/media.php -->

<div id='gallery-8' class='gallery galleryid-423 gallery-columns-2 gallery-size-thumbnail'>
  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/02/IMG_0696-e1298146993869.jpg' rel="lightbox[423]" title="Workshop "><img width="150" height="150" src="http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/02/IMG_0696-150x150.jpg" class="attachment-thumbnail" alt="IMG_0696" /></a>
    </dt>
  </dl>

  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/02/IMG_0697-e1298146973612.jpg' rel="lightbox[423]" title="Workshop "><img width="150" height="150" src="http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/02/IMG_0697-150x150.jpg" class="attachment-thumbnail" alt="IMG_0697" /></a>
    </dt>
  </dl>

  <br style="clear: both" />

  <dl class='gallery-item'>
    <dt class='gallery-icon'>
      <a href='http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/02/IMG_0698-e1298146939624.jpg' rel="lightbox[423]" title="Workshop "><img width="150" height="150" src="http://wp-tinkerthon.vm.lst.pm/wp-content/uploads/2011/02/IMG_0698-150x150.jpg" class="attachment-thumbnail" alt="IMG_0698" /></a>
    </dt>
  </dl>

  <br style='clear: both;' />
</div>

 [1]: /2011/01/picaxe-heiser-draht-haus-mullestumpe-kinder-workshop-29-1-2011/
 [2]: http://www.rev-ed.co.uk/picaxe/
 [3]: /wp-content/uploads/2011/02/axe102.pdf
 [4]: /wp-content/uploads/2011/02/heisser_draht_04.bas_.txt
