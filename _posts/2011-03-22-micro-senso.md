---
layout: post
status: publish
published: true
title: Senso-Spiel mit PIC Microcontroller
author:
  display_name: olav
  login: olav
  email: olav@schettler.net
  url: ''
author_login: olav
author_email: olav@schettler.net
wordpress_id: 460
wordpress_url: http://tinkerthon.de/?p=460
date: '2011-03-22 08:03:20 +0100'
date_gmt: '2011-03-22 07:03:20 +0100'
categories:
- Allgemein
tags: []
comments:
- id: 140
  author: Aladins Lampen | Tinkerthon
  author_email: ''
  author_url: http://tinkerthon.de/2011/10/aladins-lampen/
  date: '2011-10-02 23:46:11 +0200'
  date_gmt: '2011-10-02 21:46:11 +0200'
  content: '[...] prima als Projekt zur Realisierung mit Microcontrollern eignet.
    Das Spielfeld besteht, &auml;hnlich wie Senso, aus Tastern und beigeordneten Lampen.
    Ziel des Spiel ist es, von einer gegebenen Ausgangssituation [...]'
---
<p>Am letzten Wochenende musste der Workshop leider mangels Anmeldungen ausfallen. Ich habe die Zeit genutzt und einen ersten Prototypen f&uuml;r den <strong>n&auml;chsten Workshop am 9. April im Haus M&uuml;llestumpe<&#47;strong> gebaut. Es ist ein Spiel nach dem Vorbild des bekannten Senso. Senso. Senso - oder Simons - wie das amerikanische Original auch heisst - wurde in den 60er Jahren von<a href="http:&#47;&#47;www.ralphbaer.com&#47;"> Ralph H. Baer<&#47;a> erfunden und war eines der ersten, erfolgreichen Spielekonsolen. </p>
<p>Meine Version ist ein Nachbau des Projektes des <a href="http:&#47;&#47;www.waitingforfriday.com&#47;">Schweden Simon Inns<&#47;a>, der Schaltung und Spieleprogrammierung auf einem PIC 12F683-Microcontroller realisierte und als <a href="http:&#47;&#47;www.instructables.com&#47;id&#47;MicroSimon&#47;">Instructable<&#47;a> ver&ouml;ffentlichte. </p>
<p>Ich habe die Schaltung zun&auml;chst auf einer Lochrasterplatine mit einem PIC im DIL-Geh&auml;use aufgebaut. Die Software von Simon ist in C programmiert und ben&ouml;tigt daher ein PIC-Programmierger&auml;t, um es auf den Microcontroller zu bringen.</p>
<p>Der PIC 12F683 ist derselbe Microcontroller, der auch hinter unserem bekannten PICAXE 08M steckt. Es ist also reizvoll zu schauen, ob sich das Spiel auch in PICAXE-Basic programmieren l&auml;sst und dann als Projekt f&uuml;r einen tinkerthon-Workshop taugt.</p>
<p>Unver&auml;ndert l&auml;sst sich die Schaltung jedenfalls nicht mit einem PICAXE-Controller betreiben. Da st&ouml;rt schon der Piezo-Summer an Pin 2, welcher beim PICAXE f&uuml;r die Programmierschnittstelle reserviert ist. </p>
<p>[gallery link="file"]</p>
<p>Hier noch ein Video eines Spiels:</p>
<p><iframe title="YouTube video player" width="640" height="390" src="http:&#47;&#47;www.youtube.com&#47;embed&#47;Bt6VE0NwHpM" frameborder="0" allowfullscreen><&#47;iframe></p>
