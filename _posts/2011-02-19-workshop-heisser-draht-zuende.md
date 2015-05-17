---
layout: post
status: publish
published: true
title: Workshop "Heisser Draht" zuende
author:
  display_name: olav
  login: olav
  email: olav@schettler.net
  url: ''
author_login: olav
author_email: olav@schettler.net
wordpress_id: 423
wordpress_url: http://tinkerthon.de/?p=423
date: '2011-02-19 18:52:15 +0100'
date_gmt: '2011-02-19 17:52:15 +0100'
categories:
- Workshops
tags:
- Bericht
- PICAXE 08M
- AXE102
- Alarm-Bausatz
comments: []
---
<p>Ein sch&ouml;ner und ganz erfolgreicher Workshop ist zu Ende. Jeder der Teilnehmer hat am Ende auf seine PICAXE-Alarmplatine das Spiel programmiert und das Platinchen mit einem selbstgebastelten heissen Draht verbunden. Wer nicht teilnehmen konnte: In einem <a href="http:&#47;&#47;tinkerthon.de&#47;2011&#47;01&#47;picaxe-heiser-draht-haus-mullestumpe-kinder-workshop-29-1-2011&#47;">fr&uuml;heren Artikel<&#47;a> habe ich ein paar Fotos des Spieles.</p>
<p>Unser Programm gibt dem Spieler 30 Sekunden Zeit, den Draht mit der &Ouml;se mit m&ouml;glichst wenigen Ber&uuml;hrungen zu &uuml;berstreichen. Das Programm auf dem PICAXE-Chip z&auml;hlt die Ber&uuml;hrungen und blinkt am Ende deren Anzahl auf der LED.</p>
<p>Eine erg&auml;nzenden Funktion hatten wir am Ende nicht hinbekommen. Wir wollten an den Analogeingang der Platine einen Fotowiderstand anschliessen und diesen als Taster benutzen, um das Spiel vorzeitig abzubrechen. Leider haben wir es nicht geschafft, verl&auml;ssliche Werte &uuml;ber den Befehl <strong>readadc<&#47;strong> aus dem Analog-zu-Digital-Wandler herauszulesen. Ich habe jetzt auch den Grund daf&uuml;r gefunden. Wir hatten beim L&ouml;ten die kleine Drahtbr&uuml;cke &uuml;ber den Buchstaben <strong>PK<&#47;strong> auf der Platine vergessen. Nach dem Einl&ouml;ten dieses Drahtes funktioniert der Analogeingang ohne Probleme.</p>
<p>Wenn ihr also zuhause einen L&ouml;tkolben habt, l&ouml;tet doch diese kleine Drahtbr&uuml;cke noch ein. Dieser Schritt ist auch auf Seite 31 unter Punkt 3 der Anleitung f&uuml;r die Alarmplatine beschrieben. Ich habe diese Anleitung an diesen Artikel angeh&auml;ngt, ihr k&ouml;nnt sie aber auch auf der Webseite von Revolution Ltd. unter <a href="http:&#47;&#47;www.rev-ed.co.uk&#47;picaxe&#47;">Datasheets<&#47;a> mit der Nummer 	<strong>AXE102<&#47;strong> finden.</p>
<p>Im Anhang findet ihr auch noch ein erweitertes Programm mit Auslesen des Fotowiderstandes.</p>
<p>Der n&auml;chste Workshop-Termin ist am 19.3.2011. Ich freue mich immer &uuml;ber alte Hasen. Wenn noch Teilnehmer aus dem letzten Jahr dabei sind, k&ouml;nnen wir auch die Fernsteuerungen f&uuml;r die Rentiere bauen. Die Teile habe ich inzwischen. Ansonsten habe ich viele Ideen zum Basteln mit den PICAXE-Chips: Klopfgeist, Miniorgel, Lichtobjekte, Roboter, usw. Wenn ihr selber Ideen habt, schreibt mir einfach einen Kommentar auf diesen Beitrag oder schickt mir eine E-Mail.</p>
<p>Bis zum n&auml;chsten Mal,<br />
Olav</p>
<p><a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2011&#47;02&#47;axe102.pdf">axe102<&#47;a></p>
<p><a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2011&#47;02&#47;heisser_draht_04.bas_.txt">Erweitertes Programm "Heisser Draht" mit Fotowiderstand<&#47;a></p>
<p>[gallery link="file" columns="2"]</p>
