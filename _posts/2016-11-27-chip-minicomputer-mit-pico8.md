---
title: C.H.I.P. Minicomputer mit PICO-8
author: olav
excerpt: >
    C.H.I.P. Ein vollständiger Computer für 9 US$.
    Jetzt auch als Plattform zur Spieleentwicklung mit PICO-8.
published: 27.11.2016
layout: post
thumbnail: "/uploads/2016/chip_212x212.jpg"
categories:
  - Platformen
tags:
  - Kinder
  - C.H.I.P.
---
Es begann im Mai 2015 mit einer [Kickstarter-Kampagne: CHIP - Der erste Computer für 9 US$](https://www.kickstarter.com/projects/1598272670/chip-the-worlds-first-9-computer?lang=de). Die Auslieferung verzögerte sich um einige Monate. Im November 2016 kam dann das Paket mit meinen zwei C.H.I.P. und dem VGA-Adapter endlich in Bonn an.

Die Welt ist natürlich in der Zwischenzeit nicht stehengeblieben. Es gibt inzwischen den RaspberryPi 3, ebenfalls mit eingebautem Wifi und Bluetooth. Trotzdem: Der Chip ist immer noch viel günstiger und enthält bereits ein Betriebsystem auf dem eingebauten Speicher. Also: Tastatur und Monitor angeschlossen und losgelegt.

Damit könnte der Chip die kostengünstigste Basis für Workshops mit Kindern sein. Und tatsächlich: Man kann einen BBC micro per Chip programmieren.

Seit Mitte November gibt es aber eine weitere, interessante Anwendungsmöglichkeit in Workshops, die ich heute entdeckt habe. Es gibt eine Variante des Chips, den [PocketChip](https://getchip.com/pages/pocketchip), mit eingebauter Tastatur und kleinem Monitor. Der Clue an diesem Gerät war bis vor kurzem das mitgelieferte PICO-8.

PICO-8 ist ein Vertreter einer neuen Generation von Retro-Game Dev-Kits. Der Hersteller Lexaloffle bezeichnet es als Phantasiekonsole. Künstlich auf die Funktionalität eines Homecomputers aus den 80ern beschränkt, kann man mit PICO-8 Spiele mit dem Charm dieser Ära entwickeln und spielen. PICO-8 verpackt Spiele in als Cartridges in PNG-Dateien und hat einen Web-Player. Auf der [PICO-8 Website](http://www.lexaloffle.com/pico-8.php) kann man viele solcher Spiele im Web spielen.

Das Witzige: Für jedes der Spiele gibt es einen EDIT-Knopf, über den man zum Lua-Quellcode des Spieles gelangt und dieses direkt bearbeiten kann. Wer schon Programmieren kann, bekommt einen schnellen Überblick über die Programmiersprache bei [Learn Lua in Y Minutes](https://learnxinyminutes.com/docs/lua/). Lua ist überraschend weit verbreitet. Ein Dialekt, Squirrel, unterstützt im [electric imp](https://tinkerthon.de/2014/01/internet-der-dinge/) ein ganzes IoT-Ökosystem. Der beliebte [ESP8266-Microcontroller](https://tinkerthon.de/2015/06/makerfaire-hannover/) wird ebenfalls gerne in Lua programmiert. Schliesslich gibt es mit [Luvit sogar einen Node-Konkurrenten](https://luvit.io/) für die Web-Entwicklung. Dabei ist Lua schon lange auch in populären OpenSource-Projekten integriert und hat dort die Rolle von Tcl als Scriptsprache und Integration-Layer übernommen:

* [Prosody Chat-Server](https://prosody.im/)
* [NGinx Web Server](https://www.nginx.com/resources/wiki/modules/lua/)

Neben dem Code-Editor enthält PICO-8 einen Sprite-Editor, mit dem sich kleine Graphiken erstellen lassen, einem Karteneditor für das Platzieren von Sprites in einem 128x32 Grid, einem Soundeffekt-Editor und schliesslich einem Musikeditor zum Komponieren von Soundeffekten.

Bisher gab es PICO-8 nur auf dem PocketChip. Seit Mitte November nun verkauft Next Thing Co. [ein Console Kit](http://blog.nextthing.co/pico-8-now-free-for-all-c-h-i-p-s/) und macht gleichzeitig PICO-8 für alle Chips frei verfügbar:

<div><img src="/uploads/2016/console-kit-carousel2.png"></div>

PICO-8 ist mit einigen anderen Programmierumgebungen verwandt:

* [LÖVE 2G](https://love2d.org/) ist quasi die Lua-Spieleentwicklungsumgebung für Erwachsene. Wo PICO-8 dem Programmierer künstlich Beschränkungen auferlegt und damit eine reizvolle Retroumgebung schafft, lassen sich mit LÖVE state of the art 2D-Spiele erschaffen.
* [Voxatron](http://www.lexaloffle.com/voxatron.php) ist vom selben Hersteller wie PICO-8 und so etwas wie die Fortsetzung von PICO-8 in eine 3D Voxelwelt, also einer Welt, die aus kleinen bunten Würfeln besteht.
* [Lowres Coder](http://lowres.inutilis.com/) ist eine Spieleentwicklungsumgebung für iPad oder iPhone. Die Programmiersprache ist hier ein BASIC-Dialekt. Ganz ähnlich wie bie PICO-8 gibt es auch hier eine stark eingeschränkte Zielumgebung, die stark an die Homecomputer der 80er erinnert.
* [PyGame](http://pygame.org/hifi.html) ist der älteste Vertreter dieser Familiensaga. Es dient zum Schreiben von Spielen in der Programmiersprache Python.
