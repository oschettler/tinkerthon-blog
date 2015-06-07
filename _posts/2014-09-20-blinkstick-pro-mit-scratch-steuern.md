---
title: Blinkstick Pro mit Scratch steuern
author: olav
published: 20.09.2014
thumbnail: /wp-content/uploads/2014/09/Scratch_2_Offline_Editor-212x212.png
excerpt: >
    Im letzen Beitrag habe ich den Blinkstick Pro als einfaches Lötprojekt für Kinder beschrieben. Der Blinkstick kommt schon von Hause aus mit einer reichen Unterstützung für die unterschiedlichsten Programmiersprachen. Auch eine Steuerung aus dem Web ist möglich.
layout: post
permalink: /2014/09/blinkstick-pro-mit-scratch-steuern/
category: Projekte
tags:
  - Blinkstick
  - MIT Scratch
  - Python
  - ScratchJr
---
Im [letzen Beitrag][1] habe ich den [Blinkstick Pro][2] als einfaches Lötprojekt für Kinder beschrieben. Der Blinkstick kommt schon von Hause aus mit einer reichen Unterstützung für die unterschiedlichsten Programmiersprachen. Auch eine Steuerung aus dem Web ist möglich.

Ich habe heute versucht, den Blickstick mit angeschlossenem Ring aus 16 Neopixeln aus der[ Scratch Programmierumgebung (Version 2.0)][3] zu steuern. Scratch wurde am MIT Media Lab entwickelt und ist seit langem eine beliebte Umgebung, um Kindern ab 8 Jahren das Programmieren nahezubringen. seit diesem Juli gibt es mit [ScratchJr][4] eine Version für das iPad für noch jüngere Kinder ab 5 Jahren.

Scratch mit Python-Programmen zu erweitern ist nicht schwierig. Das Ergebnis sind neue Blöcke, über die sich über den Blinkstick die 16 bunten Leuchtdioden steuern lassen.

Zur Installation benötigen wir zunächst die Python-Erweiterungen für Blinkstick und für Scratch-Erweiterungen:

Danach geben wir in einem Texteditor die folgende Datei ein und speichern sie als blinkscratch.py

Diese Datei starten wir mit &#8220;python blinkscratch.py&#8221;. Sie startet einen Webserver auf 5000. Unter der Adresse http://localhost:5000 können wir die Erweiterungsdatei *.s2e für Scratch herunterladen:

<a  data-lity href="/wp-content/uploads/2014/09/localhost_5000.png" rel="lightbox[925]" title="Blinkstick Pro mit Scratch steuern"><img class="thumbnail img-responsive center-block" src="/wp-content/uploads/2014/09/localhost_5000.png" alt="localhost_5000" width="253" height="129" /></a>

Die so heruntergeladene Datei kann man per Shift-Klick auf das Datei-Menü in Scratch importieren:

<a data-lity href="/wp-content/uploads/2014/09/Vollbild_20_09_14_23_03.png" rel="lightbox[925]" title="Blinkstick Pro mit Scratch steuern"><img class="thumbnail img-responsive center-block" src="/wp-content/uploads/2014/09/Vollbild_20_09_14_23_03-300x231.png" alt="Vollbild_20_09_14_23_03" width="300" height="231" /></a>

Damit stehen uns die neuen Blöcke für ein erstes Beispielprogramm zur Verfügung:

<a data-lity href="/wp-content/uploads/2014/09/Scratch_2_Offline_Editor.png" rel="lightbox[925]" title="Blinkstick Pro mit Scratch steuern"><img class="thumbnail img-responsive center-block" src="/wp-content/uploads/2014/09/Scratch_2_Offline_Editor-300x183.png" alt="Scratch_2_Offline_Editor" width="300" height="183" /></a>

 [1]: /2014/09/ein-einfaches-projekt-zum-weltkindertag/
 [2]: http://www.blinkstick.com/products/blinkstick-pro
 [3]: http://scratch.mit.edu/scratch2download/
 [4]: http://www.scratchjr.org/
