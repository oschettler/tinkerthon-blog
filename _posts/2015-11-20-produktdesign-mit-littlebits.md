---
title: Prototyping-Workshop mit littleBits
author: olav
excerpt: >
    LittleBits sind nicht nur Kinderkram. Auch beim Produktdesign erweitern
    sie die verfügbaren Materialien um interaktive Werkstoffe. In einem kleinen Versuchsballon bei Chefkoch haben wir uns mögliche interaktive Produkte in den Bereich Küche & Kochen überlegt und dabei mit meinen littleBits ordentlich Spaß gehabt.
published: 21.11.2015
layout: post
thumbnail: "/system/files/000/000/215/teaser/IMG_20151120_161213.jpg"
categories:
  - Workshops
---
Ich hatte ja [schon beschrieben](http://localhost:4000/2015/09/littlebits-und-kreativitaet/), dass Ayah Bdeir mit ihren littleBits eine neue Zielgruppe ausgemacht hat: Produkt-Designer. In einem [Video-Interview](http://www.lynda.com/littleBits-tutorials/Creative-Insights-Ayah-Bdeir-littleBits/140921-2.html) auf der Tutorial-Seite lynda.com beschreibt sie diese erweiterte Vision für ihr Startup.  

Das diese Zielgruppe auch in Deutschland eine Schwäche für die bunten Bausteine hat, ist spätestens seit dem [Workshop Bits ‘n’ Beatz](http://bits-n-beatz.de/) von Matthias M. Wolf und "DieProduktMacher" in München im Juni 2015 klar. Am Freitag gab es die Gelegenheit, bei Chefkoch eine Kompaktform eines Kreativworkshops zu physikalischen und interaktiven Produkten rund um Küche und Kochen zu veranstalten.

Als Auftakt präsentierte ich den neun Teilnehmern aus den Bereichen Produktmanagement und Software-Entwicklung als Motivation, sich mit physikalischen Produkten zu beschäftigen, zwei Diagramme aus dem [exzellenten Blogbeitrag von Ian Bach von MadeByMany](https://madebymany.com/blog/designing-connected-products). Darauf folgte ein schneller Überblick über Design Thinking. Dazu stellte ich die fünf Phasen und drei Denkweisen aus dem eBook der New Yorker [The Design Gym](http://www.thedesigngym.com/) vor.

Dann ging es endlich ans Brainstormen. Ich hatte als Anregung einige Ideen aus den Interwebs zusammengetragen:

* Cooking timer
* Cooking food temperature sensor
* Controller for sous vide cooking
* Internet-connected BBQ thermometer
* Water level indicator with alarm
* Light-Up LED Lollipops
* Simple Garden Automation ("aquaponics")
* 3d food printer platform
* Food dehydrator
* PancakeBot
* LED food art
* Food mixing robot
* Pixelate (Spiel mit Obst)

Es geht also um

* das Messen und Regeln von Temperatur,
* das zeitliche Steuern von Abläufen, aber auch um
* Dekoration
* Gamification
* Automatisierung bei komplexen Zubereitungsvorschriften.

Am Ende haben wir uns dann für eine Teekochmaschine als Gegenstand unseres Prototypen entschieden. Sie sollte

* zeitgesteuert starten,
* Wasser kochen,
* Teebeutel eintauchen und herausholen,
* dem fertigen Tee kalt pusten
* und einen Alarm bei Fertigstellung abgeben - ganz schön kompliziert.

Das zeitgesteuerte Starten konnten wir mit dem CloudBit und einem [If-this-then-that-Rezept](https://ifttt.com/) erledigen - check!

Wasser kochen mussten wir mangels einer ferngesteuerten Kochplatte über eine Leuchtdiode simulieren.

Für den Teebeutel experimentierten wir mit einer Winde, haben uns aber letztlich für einen Servo mit langem Hebearm entschieden.

Für die zeitliche Steuerung der einzelnen Schritte kam eigentlich nur ein Arduino at Heart-Bit in Frage. Dessen konkrete Programmierung im Rahmen des kurzen Workshops war dann aber doch etwas zu viel.  

Bei diesem kurzen Workshop habe ein paar Dinge gelernt:

Bis die Kreativität der Teilnehmer in Gang kommt, braucht es mindestens eine halbe bis zu einer ganzen Stunde. Das, plus eine Stunde Kernzeit plus eine Stunde an kniffligen Problemen Arbeiten macht mindestens drei Stunden reine Making-Zeit. Davor ein bis zwei Stunden für Kontext, Motivation, Methodik und Thematik, danach ein bis zwei Stunden Nachbereitung und Dokumentation. Unter *sechs Stunden* sollte man also einen solchen Workshop nicht planen.

Je nach Thema braucht man einfach Bits für das Erfassen und Steuern bestimmter, physikalischer Größen. Beim Kochen ist fast immer Wärme im Spiel. Bei anderen Themen vielleicht Licht, Töne, Farben. Man muss die Domäne *vor* dem Workshop wenigstens soweit durchdrungen haben, dass man die passenden Bits dabei hat. Für das Thema Küche und Kochen wäre also ein feuchtigkeitsunempfindlicher Temperatursensor ebenso nützlich gewesen wie eine steuerbare Heizplatte. Beides gibt es nicht out-of-the-Box als littleBits.

Schon für milde komplizierte Abläufe braucht man eine Ablaufsteuerung. Diese kann man entweder mit Logik-Bits und Timern zusammenstecken oder man programmiert sie mit dem Arduino-Bit. Das Arduino-Bit bietet natürlich wesentlich mehr Flexibilität bei kleinerem Formfaktor. Allerdings muss man sich schon etwas in die Besonderheiten des littleBits-Arduino einfinden. Dafür hat unsere eine Stunde im Workshop bei Chefkoch nicht gereicht.
