---
title: Internet-Buttons
author: olav
excerpt: |
  Das Internet der Dinge ganz einfach
published: true
layout: post
thumbnail: /system/files/000/000/219/teaser/abutton_212x212.png
categories:
  - Internet-Buttons
tags:
  - Internet of Things
  - ESP8266
  - IfTTT
  - APixel
  - Espruino
---
Ich bin ja immer auf der Suche nach einer einfachen Technologie für Kinder-Workshops.
Bisher bin ich ganz zufrieden mit meinen PICAXE-Boards und der Heisser-Draht-Anwendung. Aber die Welt dreht sich weiter. Gerade erst wurde "Physical Computing" durch Arduino und eben PICAXE erfahrbar. Inzwischen ist man auch im Internet der Dinge bei einfachen und kostengünstigen Basistechnologien angekommen.

## Ein langer Weg

Dabei ist schon fast die Vielzahl der angebotenen Lösungen ein neues Problem. In einer Zeit, als teure Wifi- und Bluetooth-Erweiterungen für Arduinos die einzige Option waren, um mit vernetzten Microcontrollern zu eperimentieren, bot Jean-Claude Wippler über seine [JeeLabs](http://jeelabs.org/) das Arduino-kompatible Board [JeeNode](http://www.digitalsmarties.net/products/jeenode) an, das schon früh komfortable Microcontroller-Vernetzung ermöglichte. Allerdings nicht per Wifi, sondern über das drahtlose Funkmodul RFM12B von
Dabei ist schon fast die Vielzahl der angebotenen Lösungen ein neues Problem. In einer Zeit, als teure Wifi- und Bluetooth-Erweiterungen für Arduinos die einzige Option waren, um mit vernetzten Microcontrollern zu eperimentieren, bot Jean-Claude Wippler über seine [JeeLabs](http://jeelabs.org/) das Arduino-kompatible Board [JeeNode](http://www.digitalsmarties.net/products/jeenode) an, das schon früh komfortable Microcontroller-Vernetzung ermöglichte.

Schon bei meinem [ersten Tinkerthon 2010 im Haus Müllestumpe](/2010/01/1-tinkerthon-in-bonn-20-und-21-februar-2010-14-17-uhr-im-haus-mullestumpe/) hatte ich drei JeeNodes dabei.

Allerdings wird bei dieser Lösung nicht per Wifi, sondern über das drahtlose Funkmodul [RFM12B von HopeRF](http://www.hoperf.com/upload/rf/RFM12B.pdf) gefunkt. Um seine Microcontroller ins Internet zu bringen, braucht es also bei dieser Lösung einen Adapter. Auch dafür hat Jean-Claude gesorgt. Der umtriebige Erfinder hat mit seinem [JeeLink](http://www.digitalsmarties.net/products/jeelink-classic) auch einen solchen Adapter im Programm. Er hat sein Hardware-Angebot in ein umfangreiches, [redaktionelles Angebot](http://jeelabs.net/projects/cafe/wiki/Dive_Into_JeeNodes) eingebettet, schreibt [ein Buch über seine Abenteuer](https://leanpub.com/jeebook) in Physical Computing und hat eine kleine, aber sehr [treue Gefolgschaft](http://www.digitalsmarties.net/products/jeelink-classic) aufgebaut.

Schneller Vorlauf zum Anfang des Jahres 2014. Ich hatte ein [erstes Meetup zum Internet of Things in Bonn](/2014/01/internet-der-dinge/) organisiert und ein paar Beispiele mitgebracht. Darunter ein [electricimp](https://electricimp.com/), ein Microcontroller mit Wifi-Adapter im Format einer SD-Karte. Electricimps werden in einem [Lua-Dialekt](https://electricimp.com/docs/squirrel/) in einer kostenlosen IDE direkt über das Internet programmiert. Auf der Hardware-Seite gibt es verschiedene, recht günstige [Entwicklungsplatinen](https://electricimp.com/docs/gettingstarted/devkits/).  

Im Jahr 2015 dann die große Überraschung. Kurz vor der [MakerFaire in Hannover](/2015/06/makerfaire-hannover/) stiess ich auf die ESP8266-Microcontroller. Über einen Tweet konnte ich auch ein Exemplar ergattern. Auch einen Platz in einem Anfänger-Workshop gab es noch für mich.

## Internet-Buttons

Leider war ich seitdem nicht allzu aktiv im Tinkerthon-Land. Mein Dayjob ist über lange Strecken existenziell aufreibend. Genau daher kam vor kurzem aber die Anregung, sich mit dem neuen Trend der Internet-Buttons näher zu beschäftigen. Ein Kollege in meiner neuen Produktmanagement-Familie hatte die Idee, über die Anbindung eines Internet-Buttons kleine Spenden auszulösen. Ich machte mich also auf die Suche nach einer geeigneten Hardware. Hier die Kandidaten:

* [littlebits.cc](http://littlebits.cc/bits/cloudbit). Ein CloudBit kombiniert mit USB-Power, einem Button und evtl. einer Leuchtdiode gibt einen flexible Internet-Button, leider wegen des wackeligen Aufbaus nicht ganz alltagstauglich
* [particle.io](https://docs.particle.io/guide/tools-and-features/button/photon/). Der Anbieter des beliebten IoT-Boards hab ebenfalls einen Button im Programm. Ein bisschen "techie" und ohne Batteriebetrieb, aber mit einem netten Gehäuse und vielen bunten LEDs
* [bt.tn](https://bt.tn/). Ein sehr schöner Knopf von finnischen Entwicklern mit umfangreichen Ökosystem
* [flic.io](https://flic.io/). [IfTTT-Rezepte von fic](https://ifttt.com/p/Flic/shared). Ein kleiner Knopf aus Schweden, dessen Entwicklung über eine [sehr erfolgreiche Indigogo-Kampagne](https://www.indiegogo.com/projects/flic-the-wireless-smart-button#/) finanziert wurde, der allerdings nicht direkt, sondern über ein Handy mit dem Netz kommuniziert. Da man das aber sowieso immer dabei hat, ist das vielleicht gar kein Problem.
* [AButton](https://www.tindie.com/products/AprilBrother/abutton-dev-kit/). Die günstigste Lösung auf Basis des ESP8266. Direkte Verbindung mit [IfTTT](https://ifttt.com/). Hackable!

Andere Knöpfe sind unterwegs:

* [1btn](https://www.crowdsupply.com/knewron/1btn). Die Kampagne endete im Mai 2016
* [Amazon Dash](http://www.spiegel.de/netzwelt/web/dash-button-amazon-irritiert-mit-bestellknoepfen-fuer-den-haushalt-a-1026652.html). Noch nicht in Europa erhältlich
* [kwik](http://www.kwik.me/).
* [NUIMO by SENIC](https://www.senic.com/). Mehr als ein Knopf
* [puck.js von Gordon Williams (Espruino)](https://www.kickstarter.com/projects/gfw/puckjs-the-ground-breaking-bluetooth-beacon). Javascript, Bluetooth Low Energy, Web IDE
