---
layout: post
status: publish
published: true
title: 'Wochenendprojekt: Mandala mit PICAXE'
author:
  display_name: olav
  login: olav
  email: olav@schettler.net
  url: ''
author_login: olav
author_email: olav@schettler.net
wordpress_id: 943
wordpress_url: http://tinkerthon.de/?p=943
date: '2014-10-27 08:33:49 +0100'
date_gmt: '2014-10-27 07:33:49 +0100'
categories:
- Projektideen
- PICAXE
tags: []
comments: []
---
<p>Die Zeit ist wieder Winterzeit umgestellt, das Wetter wird schlechter. Da kann man am Wochenende schon einmal ein paar Stunden mit einem kleinen Bastelprojekt drinnen verbringen. Ich stelle euch hier ein blinkendes Mandala vor, das ich mit meiner f&uuml;nfj&auml;hrigen Tochter gebastelt habe und dass sich gut als Wochenendprojekt eignet.</p>
<p>Die Schaltung ist supereinfach:</p>
<ul>
<li>ein <a href="http:&#47;&#47;www.picaxe.com&#47;Hardware&#47;PICAXE-Chips&#47;PICAXE-08M2-microcontroller&#47;">PICAXE 08<&#47;a>. Ich habe einen alten 08er benutzt. Nat&uuml;rlich funktioniert die Schaltung auch mit einem neuen 08M2<&#47;li>
<li>sechs rote 3mm Leuchtdioden (LEDs)<&#47;li>
<li>ein Mandalabild mit sechs Achsen<&#47;li>
<li>ein 8-poligen IC-Sockel<&#47;li>
<li>ein 10k Widerstand<&#47;li>
<li>ein Batteriegeh&auml;use f&uuml;r drei AA-Batterien mit Schalter<&#47;li>
<li>ein kleines St&uuml;ck Lochraster- oder Veroboard-Platine<&#47;li>
<li>eine M&ouml;glichkeit, PICAXE-Chips zu programmieren<&#47;li>
<li>Klebeband<&#47;li><br />
<&#47;ul><br />
Die Leuchtdioden werden paarweise zusammengel&ouml;tet, so dass sie im Abstand auf je zwei&nbsp;benachbarte Bildelemente des Mandala passen. Es wird jeweils ein kurzer mit einem langen Anschlu&szlig;draht verbunden.</p>
<p><a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;10&#47;IMG_0876-e1414393322594.jpg"><img class="size-medium wp-image-944 aligncenter" src="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;10&#47;IMG_0876-300x300.jpg" alt="IMG_0876" width="300" height="300" &#47;><&#47;a></p>
<p>Die LEDs werden durch kleine L&ouml;cher auf der R&uuml;ckseite des Mandalas gesteckt und mit kurzen Streifen Klebeband befestigt.</p>
<p><a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;10&#47;IMG_0874-e1414393529951.jpg"><img class="size-medium wp-image-945 aligncenter" src="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;10&#47;IMG_0874-300x300.jpg" alt="IMG_0874" width="300" height="300" &#47;><&#47;a></p>
<p>Die Leuchtdioden werden per Charlieplex mit drei Pins am PICAXE-Microcontroller verbunden. Das ist dieselbe Schaltung, die sich schon bei unseren <a href="&#47;2011&#47;03&#47;gluhwurmchen-im-marmeladenglas&#47;">Gl&uuml;hw&uuml;rmchen im Marmeladenglas<&#47;a> bew&auml;hrt hatte.</p>
<p><a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;10&#47;IMG_0880-e1414394505653.jpg"><img class="size-medium wp-image-946 aligncenter" src="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;10&#47;IMG_0880-300x300.jpg" alt="IMG_0880" width="300" height="300" &#47;><&#47;a></p>
<p>Die Schaltung l&auml;uft prima mit nur drei Volt, deshalb konnte ich sie auf ein kleines Platinches direkt in eine Batteriebox einbauen:</p>
<p><a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;10&#47;IMG_0878-e1414394599194.jpg"><img class="size-medium wp-image-947 aligncenter" src="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;10&#47;IMG_0878-300x300.jpg" alt="IMG_0878" width="300" height="300" &#47;><&#47;a></p>
<p>Hier die k&uuml;nstlerische R&uuml;ckseite der Platine:</p>
<p><a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;10&#47;IMG_0879-e1414394665901.jpg"><img class="size-medium wp-image-948 aligncenter" src="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;10&#47;IMG_0879-300x300.jpg" alt="IMG_0879" width="300" height="300" &#47;><&#47;a></p>
<p>Die Platine hat keine Vorkehrungen zur Programmierung. Ich habe mir auf einem Breadboard und einer kleinen <a href="http:&#47;&#47;www.picaxe.com&#47;Hardware&#47;Cables&#47;Breadboard-Cable-Adapter&#47;">AXE029-Adapterplatine<&#47;a> eine M&ouml;glichkeit zum Programmieren geschaffen. Es l&auml;sst&nbsp;sich nat&uuml;rlich auch jedes andere PICAXE-08-Projektboard, z.B. eines aus meinen&nbsp;<a href="&#47;2014&#47;10&#47;2-workshop-tag-zum-heissen-draht&#47;">Hei&szlig;erdraht-Workshops<&#47;a> verwenden.</p>
<p><a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;10&#47;IMG_0877-e1414394918798.jpg"><img class="size-medium wp-image-949 aligncenter" src="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2014&#47;10&#47;IMG_0877-300x300.jpg" alt="IMG_0877" width="300" height="300" &#47;><&#47;a></p>
<p>Das Steuerprogramm muss jetzt die Leuchtdioden m&ouml;glichst abwechslungsreich ansteuern. Ich habe mich f&uuml;r ein Zufallsmuster mit weichem Ein-&#47;Ausblenden entschieden. Hier ist das Programm:</p>
<p><script src="https:&#47;&#47;gist.github.com&#47;tinkerthon&#47;7d220eda62086b93704e.js"><&#47;script></p>
