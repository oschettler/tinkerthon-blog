---
title: Physical Computing ohne Löten
author: olav
layout: post
permalink: /2011/11/physical-computing-ohne-loten/
aktt_notify_twitter:
  - yes
aktt_tweeted:
  - 1
categories:
  - Allgemein
---
Ich habe ja nun einige Workshops hinter mir, bei denen die Teilnehmer zunächst Bauteile auf eine Platine gelötet, anschließend diese Platinen am PC programmiert und dann vielleicht noch mit einem Bauwerk (Heißer Draht, Kuscheltier)  verbunden hatten. Die Teilnehmer lernen natürlich eine ganze Menge bei einer solchen Vielzahl von Aktivitäten und es ist für reichlich Abwechslung gesorgt. Nachteil ist jedoch, dass für eine erfolgreiche Teilnahme ein kompletter Durchlauf von Löten über Programmieren bis zum Einbau notwendig ist. Ein wirkliches Erfolgserlebnis gibt es erst ganz zum Schluss.

Ich suche nun nach Ansätzen, bei denen sich das Erfolgserlebnis bereits früher einstellt und vielleicht mehr Gelegenheit zum explorativen Arbeiten ist. Mal sehen&#8230;

[littleBits][1] ist ein Baukasten aus kleinen Elektronik-Modulen, von der Libanesin Ayah Bdeir gestartet und u.a. von Nicholas Negroponte gefördert. Es gibt Power-, Input-, Output- und Wire-Module. Überraschenderweise keine expliziten Microcontroller. Die Module werden über drei Drähte (+/GND, Signal) mittels Magneten miteinander verbunden. Die Module wirken unmittelbar aufeinander und laden zum Experimentieren ein.

[aniomagic][2] bietet Module für das einfache Basteln mit elektrifizierten Textilien an. Nwanua Elumeze betreibt diese Firma auf der Basis ihrer [Forschungsarbeit][3] über &#8220;Ambiente Programming&#8221;. Das Kernstück dieser Module ist der Sparkle, Das ist eine kleine, programmierbare Platine, die sich mit allerlei LEDs und Sensoren über einen Zweidrahtbus verbinden lässt.

[JeeLabs][4] von Jean-Claude Wippler bietet seit einiger Zeit JeeNodes als Standard-Arduino-Platinen in einem kleineren und günstigeren Formfaktor an. Als Arduino sind sie mit den in diesem Umfeld üblichen Methoden programmierbar. JeeNodes verfügen über Funksender und -Empfänger zur Kommunikation untereinander. Ausserdem haben sie standardisierte Sechsdraht-Ports, die  u.a. I2C-Anschlüsse enthalten. Zu den Jeenodes sind im Laufe der Zeit viele Module, alle mit kompatiblen Ports, hinzugekommen.

[seeedstudio][5] hat gleich mehrere Modulsätze im Angebot. Dabei liefern sie weltweit versandkostenfrei.  Einmal das Arduino Sidekick Kit mit einem Breadboard als Basis. Dann das [b-squares][6] System. Die [Electronic Brick][7]s, basierend auf einem Arduino-Shield. Das [Grove &#8211; Starter Kit][8] sieht ganz ähnlich aus.

[Revolution Education Ltd.][9] die Erfinder des Picaxe, haben seit einiger Zeit einen [günstigen Roboter][10] mit Erweiterungsmodulen im Angebot. Auf derselben Technik zum Verbinden der Module basiert das neue [Create Starter Kit][11]. Das zugehörige Angebot [Circuit Create][12] beschreibt kochbuchartig die einzelnen Module.

Der Franzis-Verlag vermarktet [kleine Pakete mit Elektronik-Experimenten][13] rund um ein Breadboard. Rund um das [Pong-Spiel][14] haben sie mit einer kleinen Programmierplatine einen [Microcontroller-Kurs auf Bascom-Basis][15] aufgebaut.

In einem Artikel über Hardware ohne Löten darf natürlich auch das [Arduino-Lilypad][16] von [Leah Buechley][17] nicht fehlen. Dazu gibt es eine Reihe Erweiterungsmodule, die mit leitfähigem Garn verbunden werden.

In der High-low-Tech-Gruppe am MIT Media Lab gibt es einige Perlen, z.B. [Elektronische Popup-Bücher][18]. Bei einigen hat Leah ebenfalls mitgearbeitet.

Das [Homesense-Kit][19] von [Alexandra Deschamps-Sonsino][20] ist inzwischen als [TinkerKit im offiziellen Arduino-Shop][21] zu kaufen.

Eine Menge Möglichkeiten also. Leider alle etwas kostspielig, wenn es um die Ausstattung eines Workshops geht.

 [1]: http://littlebits.cc/
 [2]: http://www.aniomagic.com/
 [3]: http://www.aniomagic.com/sparkle/research.php
 [4]: http://jeelabs.com/
 [5]: http://www.seeedstudio.com/
 [6]: http://www.b-squares.com/
 [7]: http://www.seeedstudio.com/depot/electronic-brick-starter-kit-p-506.html?cPath=138
 [8]: Grove - Starter Kit
 [9]: http://picaxe.com
 [10]: http://www.picaxe.com/Hardware/Robot-Kits/PICAXE-20X2-Microbot/
 [11]: http://www.picaxe.com/Hardware/Teaching-Systems/Create-Starter-Pack/
 [12]: http://www.picaxe.com/Circuit-Creator
 [13]: http://www.elo-web.de/elektronik-lernpakete
 [14]: http://www.elo-web.de/elektronik-lernpakete/grundlagen/franzis-ping-pong
 [15]: http://www.elo-web.de/elektronik-lernpakete/mikrocontroller/lernpaket-mikrocontroller-programmierung-in-bascom-und-c
 [16]: http://www.watterott.com/de/Boards-Kits/Arduino/Lilypad
 [17]: http://www.media.mit.edu/people/leah
 [18]: http://hlt.media.mit.edu/?p=5
 [19]: http://www.homesenseproject.com/homesense-kit/
 [20]: http://designswarm.com/
 [21]: http://store.arduino.cc/eu/index.php?main_page=index&cPath=16