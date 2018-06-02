---
title: Ein Homepage-Editor fürs Töchterchen
author: olav
excerpt: >
    Wenn die neunjährige Tochter eine eigene Homepage will, kann man sie entweder
    zu NeoCities schicken oder ihr einen Platz auf dem eigenen Server frei räumen.
published: 02.06.2018
layout: post
permalink: "/2018/06/editor-fuer-die-homepage"
thumbnail: "/uploads/2018/06/screen-editor_212x212.png"

categories:
  - Web
tags:
  - Indieweb
  - Laravel
  - Homepage
---
Ein langsamer Feiertag, wir haben uns auf der Suche nach einem Bastelprojekt die [Web-Projekte der Raspberry Pi Foundation](https://projects.raspberrypi.org/en/projects/?software[]=html-css-javascript) angesehen. Sie benutzen [Trinket](https://trinket.io/) als Hoster - sicher nicht verkehrt. Mit dem Revival von Static Websites gibt es inzwischen noch andere Alternativen. Eine sehr kultige Möglichkeit ist auch [NeoCities](https://neocities.org/).

Für das Veröffentlichen im Web gibt es zwei Ansätze: PESOS und POSSE. Dries Buytaert beschreibt sie in [einem Blog-Artikel](https://dri.es/to-pesos-or-to-posse). Der [Indiweb-Ansatz ist also POSSE](https://indieweb.org/POSSE): Publish on your own site, syndicate everywhere.

Meinem Töchterchen ist das sicher egal. Aber es ist sicher auch eine Frage der Gewöhnung, ob wir zu Drittwerkzeugen greifen oder unsere Inhalte auf einseren eigenen Servern halten. Also: Früh anfangen!

Ich habe ihr also einen eigenen Editor gebaut: [Tunes](https://github.com/oschettler/tunes). Ich wollte dieses Mal kein neues Web-Startup gründen, sondern möglichst in zwei Stunden fertig sein. [Deadlines](https://www.goodreads.com/quotes/1398-i-love-deadlines-i-love-the-whooshing-noise-they-make) sind super. Ich habe also [Laravel](https://laravel.com/) ausgepackt und einen Strauss von Modulen installiert:

* [knowfox/crud](https://github.com/knowfox/crud): Formulare. Einfach eine [Konfigurationsdatei mit den Feldern](https://github.com/oschettler/tunes/blob/master/config/tunes.php) anlegen, im Controller [den Dienst und die Konfigurationsdatei einbinden](https://github.com/oschettler/tunes/blob/master/app/Http/Controllers/ProjectController.php#L32), und schon steht das Grundgerüst. Diesen CRUD-Service (_Crud_ steht für die die Grundoperationen Create, Read, Update und Delete) habe ich nun schon in einigen Projekten eingesetzt. Er schafft ein Gerüst für die Formulare und Verarbeitungsfunktionen, lässt einem aber viele Freiheiten bei der Ausgestaltung.
* [spatie/laravel-medialibrary](https://docs.spatie.be/laravel-medialibrary/v7/introduction). Bilder. Auch diesen Dienst habe ich inzwischen schon einige Male verwandt. Damit lassen sich Bilder hochladen und verkleinern.
* [spatie/laravel-sluggable](https://murze.be/a-php-7-laravel-package-to-create-slugs). Sprechende Adressen. Dieses Modul stammt von derselben, belgischen Agentur wie die Bildverarbeitung. Damit hat jedes Projekt eine sprechende Adresse, die einfach aus seinem Titel abgeleitet wird.
* [mpociot/versionable](https://github.com/mpociot/versionable). Es gibt noch keine Oberfläche dafür, aber bei jedem Speichern eines Projektes wird eine neue Version angelegt. So geht nichts verloren und Papa kann zur Not ohne Tränen aus versehen Gelöschtes wieder zurückholen.  

Neben diesen Laravel-Komponenten habe ich noch ein paar Javascript-Bibliotheken genutzt.

* [CodeMirror](https://codemirror.net/) - Markup, Styles und Skripte bearbeiten
* [Dropzone](http://www.dropzonejs.com/) - Bilder hochladen. Nicht der [Film von 1994](https://de.wikipedia.org/wiki/Drop_Zone) mit Wesley Snipes

Mit Laravel, diesen Bausteinen und ~2h Zeit habe ich einen kleinen Web-Editor gebaut. Der Editor ist Open Source und treibt die [Website meiner Tochter](https://lena.schettler.net/) - läuft! 
