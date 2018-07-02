---
title: Eine Firefox-Erweiterung für Chefkoch
author: olav
excerpt: >
    Hier geht es um eine einfache Erweiterung, die für jede Webseite QR-Codes anzeigt und zusätzlich auf Rezepten von Chefkoch den Chefkoch Alexa Skill per Sprachbefehl startet.
published: 02.07.2018
layout: post
permalink: "/2018/07/firefox-erweiterung-fuer-chefkoch"
thumbnail: "/uploads/2018/07/voico_212x212.png"

categories:
  - Web
tags:
  - Indieweb
  - Laravel
  - Homepage

---
Firefox-Erweiterungen sind eine einfache Möglichkeit, Websites um Funktionalitäten zu erweitern, die der Anbieter selber gerade nicht auf der Liste seiner Prioritäten hat.

Ich habe am Wochenende eine [kleine Erweiterung](https://addons.mozilla.org/de/firefox/addon/voico/) gebaut, die für jede Webseite einen QR-Code anzeigt. So ist es einfach möglich, diese Seite auf einem Smartphone zu öffnen.

Das ist besonders bei Chefkoch-Rezepten praktisch. Die Chefkoch Apps haben schon lange die Möglichkeit eingebaut, Rezepte aus QR-Codes zu öffnen. Das wurde eingebaut, um im Printmagazin einfach auf Rezepte verweisen zu können. Diese QR-Codes haben es leider nie auf die Website geschafft.

Die Erweiterung enthält noch ein weiteres Detail. Auf Chefkoch-Rezepten wird unter dem QR-Code ein Knopf eingebunden, der über die HTML5-Spracherzeugung einen Befehl an Amazon Alexa absetzt, um das Rezept im Chefkoch Skill zu öffnen.

Zur Klarstellung: Diese Erweiterung ist ein reines Hobbyprojekt, welches ich in meiner Freizeit programmiert und [open source](https://github.com/oschettler/voico-extension) veröffentlicht habe. Chefkoch hat mich nicht ermuntert, diese Erweiterung zu bauen.    
