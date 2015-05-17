---
layout: post
status: publish
published: true
title: Sonnenbild
author:
  display_name: olav
  login: olav
  email: olav@schettler.net
  url: ''
author_login: olav
author_email: olav@schettler.net
wordpress_id: 744
wordpress_url: http://tinkerthon.de/?p=744
date: '2012-04-09 22:04:08 +0200'
date_gmt: '2012-04-09 20:04:08 +0200'
categories:
- Allgemein
tags: []
comments: []
---
<p>Ein kleines Feiertagsprojekt mit Paul: Ein Sonnenbild mit sechs gelben LEDs hinter einem transparenten St&uuml;ck Kunststoff aus einer IKEA-Schrankt&uuml;r:</p>
<p><object width="400" height="300" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http:&#47;&#47;download.macromedia.com&#47;pub&#47;shockwave&#47;cabs&#47;flash&#47;swflash.cab#version=6,0,40,0"><param name="flashvars" value="intl_lang=en-us&amp;photo_secret=bb3d9d33a9&amp;photo_id=6915176704" &#47;><param name="allowFullScreen" value="true" &#47;><param name="src" value="http:&#47;&#47;www.flickr.com&#47;apps&#47;video&#47;stewart.swf?v=109786" &#47;><param name="allowfullscreen" value="true" &#47;><embed width="400" height="300" type="application&#47;x-shockwave-flash" src="http:&#47;&#47;www.flickr.com&#47;apps&#47;video&#47;stewart.swf?v=109786" flashvars="intl_lang=en-us&amp;photo_secret=bb3d9d33a9&amp;photo_id=6915176704" allowFullScreen="true" allowfullscreen="true" &#47;><&#47;object></p>
<p>Die Schaltung besteht aus sechs LEDs, die in Charlieplex-Manier an drei Anschl&uuml;ssen eines PICAXE08M2 angeschossen sind. Die Schaltung hat Paul auf einem <a href="http:&#47;&#47;www.picaxe.com&#47;Hardware&#47;Project-Boards&#47;PICAXE-08-Proto-Board&#47;">PICAXE08-Protoboard<&#47;a> gel&ouml;tet.</p>
<p>&Uuml;ber eine der LEDs wird zus&auml;tzlich die Umgebungshelligkeit gemessen, um damit die Blinkgeschwindigkeit zu steuern.</p>
<p>Hier das Programm:</p>
<p><script src="https:&#47;&#47;gist.github.com&#47;2346193.js?file=sun01.bas"><&#47;script></p>
