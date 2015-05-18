---
layout: page
status: publish
published: true
title: Benzoltisch
author:
  display_name: olav
  login: olav
  email: olav@schettler.net
  url: ''
author_login: olav
author_email: olav@schettler.net
wordpress_id: 614
wordpress_url: http://tinkerthon.de/?page_id=614
date: '2011-10-29 10:23:16 +0200'
date_gmt: '2011-10-29 08:23:16 +0200'
categories: []
tags: []
comments: []
---
<p>Interaktiver Benzoltisch im Deutschen Museum in Bonn.</p>
<p>Drin! Meine <a href="http:&#47;&#47;www.pjrc.com&#47;store&#47;teensy.html">Teensy<&#47;a> &#47; <a href="http:&#47;&#47;arduino.cc">Arduino<&#47;a> basierende Platine werkelt seit gestern Abend im interaktiven Benzoltisch im Deutschen Museum in Bonn (DMB). Dieses zentrale Exponat der <a href="http:&#47;&#47;www.deutsches-museum.de&#47;bonn&#47;ausstellungen&#47;ausstellungen-2011&#47;kekules-traum&#47;">Ausstellung "Kekul&eacute;s Traum &ndash; Von der Benzolformel zum Bonner Chemiepalast"<&#47;a>&nbsp;(Kurator der Ausstellung ist Ralph Burmester)&nbsp;veranschaulicht den Besuchern die ungeheure Spannbreite und Bedeutung der Verbindungen der Benzol-Chemie. In einer <a href="http:&#47;&#47;www.deutsches-museum.de&#47;fileadmin&#47;Content&#47;2009&#47;01_Information&#47;10_Publikationen&#47;06_K_und_T&#47;2011&#47;kt411&#47;42-45Burmester_RZ.pdf">Brosch&uuml;re zur Ausstellung<&#47;a> ist der Tisch von der oberen Etage des Museums aus zu sehen.</p>
<p>Die Struktur des Benzols als Ring mit sechs Kohlenstoffatomen wurde ja bekanntlich vom Bonner Chemiker&nbsp;August Kekul&eacute; entschl&uuml;sselt. Am interaktiven Benzoltisch k&ouml;nnen die Besucher die Wasserstoffatome des Benzolringes durch andere Molek&uuml;lgruppen ersetzen und dadurch verwandte Stoffe entstehen lassen. Darunter sind so bekannte Substanzen wie <a href="http:&#47;&#47;de.wikipedia.org&#47;wiki&#47;Anilin">Anilin<&#47;a>,&nbsp;<a href="http:&#47;&#47;de.wikipedia.org&#47;wiki&#47;TNT">TNT<&#47;a>,&nbsp;<a href="http:&#47;&#47;de.wikipedia.org&#47;wiki&#47;Acetylsalicyls&auml;ure">Acetylsalicylsaeure<&#47;a> ("Aspirin"), <a href="http:&#47;&#47;de.wikipedia.org&#47;wiki&#47;Styrol">Styrol<&#47;a>,&nbsp;<a href="http:&#47;&#47;de.wikipedia.org&#47;wiki&#47;Vanillin">Vanillin<&#47;a>&nbsp;und noch einiger weiterer. Jedes Mal, wenn auf diese Art eine bekannte Substanz dargestellt wird, spielen die drei Monitore an der zentralen S&auml;ule des Tisches einen Informationsfilm zu dieser Substanz ab.</p>
<p>Die einzelnen Molek&uuml;le sind dabei - ebenso wie die gesamte Konstruktion des Tisches - &uuml;ber sch&ouml;n massive Multiplex-Platten repr&auml;sentiert. In jeder dieser Platten sind an der Unterseite f&uuml;r den Besucher unsichtbar kleine Magnete an insgesamt neun m&ouml;glichen Positionen eingelassen. Diese Magnete dienen als Kodierung der Platten und steuern unter jeder Platte neun <a href="http:&#47;&#47;de.wikipedia.org&#47;wiki&#47;Reedschalter">Reedschalter<&#47;a> an. Diese Schalter sind &uuml;ber Flachbandkabel unter der Tischplatte mit einer zentralen Steuereinheit verbunden.</p>
<p>Diese Steuereinheit besteht haupts&auml;chlich aus einem Video-Player (ein&nbsp;EYEZONE B1080P-2). Der urspr&uuml;ngliche Ansatz f&uuml;r ein Gehirn des Tisches bestand aus einer geschickten Reihenschaltung der einzelnen Reedschalter und Ansteuerung des Players &uuml;ber eine Play-Button-Box mittels ein Infrarot-Signal. Leider verhinderte die interne Schaltung dieser Play-Button-Box bisher das Erkennen von mehr als vier unterschiedlichen Substanzen. Zuf&auml;llig am Rande meiner Physical Computing Workshops im DMB kam ich im Sommer mit dem technischen Betreuer des Museums und auch Realisierer der Steuereinheit im Benzoltisch ins Gespr&auml;ch und wir beschlossen, eine Microcontroller-basierende L&ouml;sung f&uuml;r die Erkennung der Molek&uuml;lgruppen zu finden.</p>
<p>Eine L&ouml;sung auf PICAXE-Basis verwarf ich wegen des zu erwartenden Rechenaufwandes. Stattdessen entschied ich mich bei der Wahl der Hardware f&uuml;r ein <a href="http:&#47;&#47;www.pjrc.com&#47;store&#47;teensy.html">Teensy USB Development Board<&#47;a>, welches ich &uuml;ber die Arduino-Umgebung programmieren wollte.</p>
<p>Die Hardware war schnell in klassischer Manier, gef&auml;delt auf einer Lochrasterplatine, aufgebaut und auch die Implementierung einer ersten Version des Steuerprogrammes ging schnell von der Hand. Die Reedschalter sollten in einer 6x9-Matrix vom Teensy-Board abgetastet werden.</p>
<p>Leider war der erste Test der Eingangsschaltung eine gro&szlig;e Entt&auml;uschung: Es gab &Uuml;bersprechungen zwischen einzelnen Tafeln und die Molek&uuml;lgruppen wurden nicht verl&auml;sslich erkannt. Ein wenig Gr&uuml;beln brachte dann schnell die L&ouml;sung. An jedem Schalter musste eine Diode eingef&uuml;gt werden, 54 St&uuml;ck insgesamt.</p>
<p>Auch die Ansteuerung des Video-Players per Infrarot war zun&auml;chst nicht ganz offensichtlich. Erst das Auslesen der IR-Codes aus den Signalen der Button-Box per&nbsp;&nbsp;IR-Sensor aus dem PICAXE AXE108k und einem Arduino Mini mit der <a href="http:&#47;&#47;www.arcfn.com&#47;2009&#47;08&#47;multi-protocol-infrared-remote-library.html">genialen IR-Bibliothek von Ken Sheriff<&#47;a> gab mir die Codes zur Ansteuerung des Video-Players.</p>
<p>Das alles und noch ein wenig Fine Tuning am Timing des Schalter-Scans und der Codes f&uuml;r die Molek&uuml;lgruppen brachte eine komplette L&ouml;sung, die seit gestern Abend im interaktiven Benzoltisch aktiv ist und heute schon ein paar F&uuml;hrungen erfolgreich bedient hat. Die Kr&ouml;nung wird dann sein, wenn die noch fehlenden Filme erg&auml;nzt sind und der Tisch sein ganzes Potential ausspielen kann.</p>
<p>Das Steuerprogramm hat einige interessante Stellen. Es gibt einen Einzelschrittbetrieb, eingeleitet durch Druck auf die Taste und angezeigt &uuml;ber die serielle Schnittstelle. Die wesentliche Intelligenz des Programms steckt in der Funktion&nbsp;subst_code(), in der die gefundenen Molek&uuml;lgruppen in sechs Positionen und dann noch einmal gespiegelt mit einer Tabelle m&ouml;glicher Substanzen verglichen wird. Beim Anschluss an den Teenys habe ich dessen interne Pullup-Widerst&auml;nde ausgenutzt, so dass die Beschaltung komplett ohne externe Widerst&auml;nde auskommt.</p>
<p>[gallery link="file"]</p>
<p><a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2011&#47;10&#47;Fernsteuer-Codes.pdf">Fernsteuer-Codes<&#47;a></p>
<p><a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2011&#47;10&#47;Filme.zip">Testfilmchen 1..12 f&uuml;r die IR-Ansteuerung<&#47;a></p>
<p><a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2011&#47;10&#47;ir_send.pde_.txt">ir_send.pde zum Testen der IR-Codes<&#47;a></p>
<p><a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2011&#47;10&#47;benzoltisch.pde_.txt">benzoltisch.pde - Treiberprogramm f&uuml;r den Teensy<&#47;a></p>
