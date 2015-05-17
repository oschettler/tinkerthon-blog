---
title: Lenas Wecker
permalink: /2014/12/wecker-stimmungslampe/
published: 09.12.2014
layout: default
summary: >
    Ich habe gerade zwei neue Blinkstick-Varianten bekommen und musste den Blinkstick Square gleich mit dem Raspberry Pi verbinden und als Mood-Licht in die Uhrensoftware integrieren.
thumbnail: /res/2014-12/lenas-lampe-212x212.png
bigpicture: /res/uhr_800x480.jpg
---
# {{ page.title }}

Ich habe gerade zwei neue Blinkstick-Varianten bekommen und musste den Blinkstick Square gleich mit dem Raspberry Pi verbinden und als Mood-Licht in die [Uhrensoftware](/2014/11/ein-internet-wecker-mit-raspberry-pi/) integrieren. So sieht das Ergebnis aus:

Das [Blinkstick Square](https://www.blinkstick.com/products/blinkstick-square) ist eine kleine Platine mit acht superhellen LEDs, die über einen kleinen MicroController (ein ATtiny 85) direkt und ohne Treiber über einen USB-Port gesteuert werden können. Der Anbieter bietet ein Kommandozeilenprogramm und jede Menge APIs zur Steuerung. Für mein Mood Light habe ich die [NodeJS-API](https://github.com/arvydas/blinkstick-node) benutzt. Das Programm findet ihr auf [BitBucket](https://bitbucket.org/olav/lenas-uhr). Zu den Details des Kiosk-Browsers schreibe ich später noch was.
