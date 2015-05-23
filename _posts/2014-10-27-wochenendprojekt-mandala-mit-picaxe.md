---
title: 'Wochenendprojekt: Mandala mit PICAXE'
author: olav
published: 27.10.2014
thumbnail: /wp-content/uploads/2014/10/IMG_0874-212x212.jpg
layout: post
permalink: /2014/10/wochenendprojekt-mandala-mit-picaxe/
ks_metadata:
  - 'a:7:{s:4:"lang";s:2:"en";s:8:"keywords";s:34:"ein,die,mit,ich,das,einem,ist,habe";s:19:"keywords_autoupdate";i:1;s:11:"description";s:159:"ein paar Stunden mit einem kleinen Bastelprojekt drinnen verbringen. Ich stelle euch hier ein blinkendes Mandala vor, das ich mit meiner fünfjährigen Tochter";s:22:"description_autoupdate";i:1;s:5:"title";s:0:"";s:6:"robots";s:12:"index,follow";}'
categories:
  - PICAXE
  - Projektideen
---
Die Zeit ist wieder Winterzeit umgestellt, das Wetter wird schlechter. Da kann man am Wochenende schon einmal ein paar Stunden mit einem kleinen Bastelprojekt drinnen verbringen. Ich stelle euch hier ein blinkendes Mandala vor, das ich mit meiner fünfjährigen Tochter gebastelt habe und dass sich gut als Wochenendprojekt eignet.

Die Schaltung ist supereinfach:

  * ein [PICAXE 08][1]. Ich habe einen alten 08er benutzt. Natürlich funktioniert die Schaltung auch mit einem neuen 08M2
  * sechs rote 3mm Leuchtdioden (LEDs)
  * ein Mandalabild mit sechs Achsen
  * ein 8-poligen IC-Sockel
  * ein 10k Widerstand
  * ein Batteriegehäuse für drei AA-Batterien mit Schalter
  * ein kleines Stück Lochraster- oder Veroboard-Platine
  * eine Möglichkeit, PICAXE-Chips zu programmieren
  * Klebeband

Die Leuchtdioden werden paarweise zusammengelötet, so dass sie im Abstand auf je zwei benachbarte Bildelemente des Mandala passen. Es wird jeweils ein kurzer mit einem langen Anschlußdraht verbunden.

<a href="http://tinkerthon.de/wp-content/uploads/2014/10/IMG_0876-e1414393322594.jpg" rel="lightbox[943]" title="Wochenendprojekt: Mandala mit PICAXE"><img class="size-medium wp-image-944 aligncenter" src="http://tinkerthon.de/wp-content/uploads/2014/10/IMG_0876-300x300.jpg" alt="IMG_0876" width="300" height="300" /></a>

Die LEDs werden durch kleine Löcher auf der Rückseite des Mandalas gesteckt und mit kurzen Streifen Klebeband befestigt.

<a href="http://tinkerthon.de/wp-content/uploads/2014/10/IMG_0874-e1414393529951.jpg" rel="lightbox[943]" title="Wochenendprojekt: Mandala mit PICAXE"><img class="size-medium wp-image-945 aligncenter" src="http://tinkerthon.de/wp-content/uploads/2014/10/IMG_0874-300x300.jpg" alt="IMG_0874" width="300" height="300" /></a>

Die Leuchtdioden werden per Charlieplex mit drei Pins am PICAXE-Microcontroller verbunden. Das ist dieselbe Schaltung, die sich schon bei unseren [Glühwürmchen im Marmeladenglas][2] bewährt hatte.

<a href="http://tinkerthon.de/wp-content/uploads/2014/10/IMG_0880-e1414394505653.jpg" rel="lightbox[943]" title="Wochenendprojekt: Mandala mit PICAXE"><img class="size-medium wp-image-946 aligncenter" src="http://tinkerthon.de/wp-content/uploads/2014/10/IMG_0880-300x300.jpg" alt="IMG_0880" width="300" height="300" /></a>

Die Schaltung läuft prima mit nur drei Volt, deshalb konnte ich sie auf ein kleines Platinches direkt in eine Batteriebox einbauen:

<a href="http://tinkerthon.de/wp-content/uploads/2014/10/IMG_0878-e1414394599194.jpg" rel="lightbox[943]" title="Wochenendprojekt: Mandala mit PICAXE"><img class="size-medium wp-image-947 aligncenter" src="http://tinkerthon.de/wp-content/uploads/2014/10/IMG_0878-300x300.jpg" alt="IMG_0878" width="300" height="300" /></a>

Hier die künstlerische Rückseite der Platine:

<a href="http://tinkerthon.de/wp-content/uploads/2014/10/IMG_0879-e1414394665901.jpg" rel="lightbox[943]" title="Wochenendprojekt: Mandala mit PICAXE"><img class="size-medium wp-image-948 aligncenter" src="http://tinkerthon.de/wp-content/uploads/2014/10/IMG_0879-300x300.jpg" alt="IMG_0879" width="300" height="300" /></a>

Die Platine hat keine Vorkehrungen zur Programmierung. Ich habe mir auf einem Breadboard und einer kleinen [AXE029-Adapterplatine][3] eine Möglichkeit zum Programmieren geschaffen. Es lässt sich natürlich auch jedes andere PICAXE-08-Projektboard, z.B. eines aus meinen [Heißerdraht-Workshops][4] verwenden.

<a href="http://tinkerthon.de/wp-content/uploads/2014/10/IMG_0877-e1414394918798.jpg" rel="lightbox[943]" title="Wochenendprojekt: Mandala mit PICAXE"><img class="size-medium wp-image-949 aligncenter" src="http://tinkerthon.de/wp-content/uploads/2014/10/IMG_0877-300x300.jpg" alt="IMG_0877" width="300" height="300" /></a>

Das Steuerprogramm muss jetzt die Leuchtdioden möglichst abwechslungsreich ansteuern. Ich habe mich für ein Zufallsmuster mit weichem Ein-/Ausblenden entschieden. Hier ist das Programm:

 [1]: http://www.picaxe.com/Hardware/PICAXE-Chips/PICAXE-08M2-microcontroller/
 [2]: /2011/03/gluhwurmchen-im-marmeladenglas/
 [3]: http://www.picaxe.com/Hardware/Cables/Breadboard-Cable-Adapter/
 [4]: /2014/10/2-workshop-tag-zum-heissen-draht/
