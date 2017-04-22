---
title: Nach dem Physical Computing Workshop
author: olav
excerpt: >
    Am 18. bis 21. April veranstaltete ich einen Physical Computing Workshop im Deutschen Museum in Bonn. Mit
    10 Teens lernten wir den BBC Micro:bit und Python kennen.
published: 22.04.2017
layout: post
thumbnail: "/uploads/2017/pong-212.jpg"
categories:
  - Workshops
tags:
  - Kinder
  - BBC micro:bit
---
Die letzten drei Tage habe ich einen Ferienworkshop zu *Physical Computing* im Deutschen Museum in Bonn veranstaltet.

Mit den 10 Teilnehmern haben wir den BBC Micro:bit und MicroPython erforscht. Das Ergebnis war ein über eine Funkverbindung vernetztes Spiel "Der heiße Draht" mit zentraler Rangliste. Weil zum Schluß noch etwas Zeit war, haben wir uns noch anderen Spielideen gewidmet. Dabei herausgekommen sind ein Würfel und ein objektorientiertes Pong-Spiel.

Wer das Pong-Spiel noch weiterentwickeln möchte. Hier ist eine Idee zu **"Multi-Pong":** Auf mehreren Micro:bits läuft das Spiel. Jeder Micro:bit bekommt eine eindeutige Zahl zugewiesen. Am Ende jeder Runde schickt der Micro:bit ein Radio-Signal mit einer zufälligen Zahl an alle Micro:bits im Raum. Der Micro:bit mit dieser Zahl nimmt den Ball auf und zeigt eine Runde des Spiels an. Am Ende dieser Runde wählt dieser Micro:bit die Zufallszahl und schickt den Ball erneut an einen anderen Micro:bit.

Alle Programmquellen und das Workshop-Konzept liegen zur freien Nutzung [auf Github](https://github.com/tinkerthon/Der-heisse-Draht-2017).
