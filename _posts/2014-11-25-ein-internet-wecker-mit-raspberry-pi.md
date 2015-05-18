---
title: Ein Internet-Wecker mit Raspberry PI
author: olav
layout: post
permalink: /2014/11/ein-internet-wecker-mit-raspberry-pi/
ks_metadata:
  - 'a:7:{s:4:"lang";s:2:"en";s:8:"keywords";s:32:"ein,das,mit,und,die,ich,auf,für";s:19:"keywords_autoupdate";i:1;s:11:"description";s:157:"ein passendes Gehäuse. Raspberry Pi mit aufgestecktem Display (Bild: Watterott) Passendes TEX Berry Gehäuse (Bild: Watterott) Ich hatte lange Zeit ein ganz";s:22:"description_autoupdate";i:1;s:5:"title";s:0:"";s:6:"robots";s:12:"index,follow";}'
categories:
  - Allgemein
---
Letzten Freitag erwähnte Lena, dass sie gerne einen eigenen Wecker hätte. Ungefähr zur gleichen Zeit stolperte ich über den [2,8&#8221; LCD-Touchscreen für das Raspberry Pi][1] von Watterott. Das Display ist einfach auf die GPIO-Pins des Pi aufsteckbar und es gibt für beides sogar ein [passendes Gehäuse][2].

<div id="attachment_960" style="width: 310px" class="wp-caption alignnone">
  <a href="http://tinkerthon.de/wp-content/uploads/2014/11/20110750_1.jpg" rel="lightbox[955]" title="Ein Internet-Wecker mit Raspberry PI"><img class="wp-image-960 size-medium" src="http://tinkerthon.de/wp-content/uploads/2014/11/20110750_1-300x216.jpg" alt="20110750_1" width="300" height="216" /></a>
  
  <p class="wp-caption-text">
    Raspberry Pi mit aufgestecktem Display (Bild: Watterott)
  </p>
</div>

<div id="attachment_961" style="width: 310px" class="wp-caption alignnone">
  <a href="http://tinkerthon.de/wp-content/uploads/2014/11/20110803.jpg" rel="lightbox[955]" title="Ein Internet-Wecker mit Raspberry PI"><img class="wp-image-961 size-medium" src="http://tinkerthon.de/wp-content/uploads/2014/11/20110803-300x187.jpg" alt="20110803" width="300" height="187" /></a>
  
  <p class="wp-caption-text">
    Passendes TEX Berry Gehäuse (Bild: Watterott)
  </p>
</div>

Ich hatte lange Zeit ein ganz ähnliches Gerät, ein Chumby, als Wecker am Bett. Das Chumby war ein kleines, ARM-basierendes Gerät, ebenfalls mit einfachem Touchscreen, welches neben dem eingebauten Wecker und Internet-Radio noch flash-basierende Apps über Channel abonnieren und diese im Wechsel abspielen konnte. Eigentlich immer noch ein ganz valider Nutzungsfall, denn ich für Lena und auf Basis der Combo aus RaspberryPi und Touchscreen wieder zum Leben erwecken wollte.

Meine Idee war zunächst, auf Basis von PyGame und dessen Framebuffer-Unterstützung ein eigenes GUI zu programmieren. Das sollte ähnlich wie die Oberfläche des Chumby ein paar eingebaute Funktionen mitbringen: Uhr mit Weckfunktion, vielleicht ein Kalender, Steuerung eines lokalen Music Player Demons MDM für Musik und Hörspiele, vielleicht noch eine einfacher Mail- oder Chat-Client.

Die Basis-Installation des Displays war zunächst erfreulich einfach. Watterott bietet zu dem Display ein modifiziertes Raspbian-Image inklusive einem X11 mit Framebuffer-Unterstützung für das Display. Auch der Touchscreen funktioniert damit auf Anhieb. Lediglich die Anbindung an das heimische WLAN ist ein kleines Ratespiel und z.B. beim [Coder von Google][3] wesentlich eleganter gelöst. Nach ein paar Versuchen und ein bisschen Herum-Googlen hat es aber dann geklappt.

Für das Schreiben der Oberfläche ist PyGame leider kein sehr komfortabler GUI-Baukasten. Ich machte mich also auf die Suche nach etwas Produktiverem. Leider ist die Auswahl bei einem Anzeigegerät ohne OpenGL-Unterstützung sehr mau. Die libSDL wird noch am ehesten unterstützt. Ich habe dann auch einige Libraries probiert:

Für PyGame gibt es ein Beispiel einer MPD-Steuerung.

Daneben gibt es mit [PyMPDTouchGui][4] auch eine ausgewachsene Alternative. Das habe ich aber auf meinem Display nicht zum Laufen gebracht.

Eine Bibliothek für LUA ([TekUI][5]) sah sehr vielversprechend aus. Die habe ich aber letztlich nicht ausprobiert.

Für das [FLTK-Toolkit][6] gibt es eine [DirectFB-Unterstützung][7].

[iliXi][8] läuft ebenfalls auf DirectFB, ebenso <http://libagar.org/>

Selbst [Tcl/Tk][9] hätte eine Alternative sein können.

[JavaFX][10] wäre vielleicht auch eine Alternative gewesen.

Sehr interessant fand ich QML. Das hätte auch fast funktioniert, scheiterte am Ende aber an der fehlenden OpenGL-Unterstützung. Sollte ich noch einmal ein Kiosk-System mit dem regulären HDMI-Anschluss bauen wollen, ist das aber sicher ein atraktiver Ansatz mit wenig Overhead. Mein Vorgehen basierte dabei auf einem [Posting im RaspberryPi-Forum][11] und basierte auf den Paketen

<div>
  sudo apt-get install \
</div>

<div>
       libqt5declarative5 libqt5webkit5-dev \
</div>

<div>
       qmlscene \
</div>

<div>
       libqt5webkit5-qmlwebkitplugin \
</div>

<div>
       libegl1-mesa \
</div>

<div>
       qtdeclarative5-qtquick2-plugin
</div>

<div>
</div>

<div>
  Der einfache Aufruf hätte dann sein sollen:
</div>

<div>
</div>

<div>
  <div>
    QT_QPA_PLATFORM=linuxfb:fb=/dev/fb1 /usr/lib/arm-linux-gnueabihf/qt5/bin/qmlscene webkit.qml
  </div>
  
  <div>
  </div>
  
  <div>
    &#8230; bricht aber leider wegen mangelnder OpenGL-Unterstützung ab.
  </div>
  
  <div>
  </div>
  
  <div>
    Letztlich läuft der RaspberryPi jetzt mit einem normalen X11 mit Chromium-Browser im Kiosk Mode. Die Anleitung dafür liefert <a href="https://www.danpurdy.co.uk/web-development/raspberry-pi-kiosk-screen-tutorial/">Dan Purdy</a>.  Den Startschirm bildet eine HTML-Seite mit <a href="http://randomibis.com/coolclock/demos/demo2.html">CoolClock</a>. Es sollen weitere Seiten mit Weckeinstellungen und einer einfachen Steuerung des MPD folgen. Damit hätte ich auch endlich eine bedienbare Alternative zu meinem ersten <a href="http://tinkerthon.de/2013/04/internet-radio-mit-raspberrypi-2-zeiligem-rgb-lcd-und-5-tasten/">Projekt mit dem Music Player Demon</a> gefunden.
  </div>
  
  <div>
  </div>
  
  <div>
    <div id="attachment_958" style="width: 310px" class="wp-caption alignnone">
      <a href="http://tinkerthon.de/wp-content/uploads/2014/11/2014-11-25-08.04.14-e1416986351267.jpg" rel="lightbox[955]" title="Ein Internet-Wecker mit Raspberry PI"><img class="wp-image-958 size-medium" src="http://tinkerthon.de/wp-content/uploads/2014/11/2014-11-25-08.04.14-e1416986033782-300x242.jpg" alt="2014-11-25 08.04.14" width="300" height="242" /></a>
      
      <p class="wp-caption-text">
        Die Uhr als HTML-Seite. Rechts das Menü macht noch nichts
      </p>
    </div>
  </div>
</div>

Der aktuelle Stand der Software liegt bei [Bitbucket][12] und ist open source.

 [1]: http://www.watterott.com/de/RPi-Display
 [2]: http://www.watterott.com/de/TEK-BERRY-Gehaeuse-transparent-v12-mit-Ausschnitt-fuer-RPi-Display
 [3]: http://tinkerthon.de/2013/09/raspberry-pi-lehrt-web-programmierung/
 [4]: http://www.spida.net/projects/software/pympdtouchgui/index.en.html
 [5]: http://tekui.neoscientists.org
 [6]: http://www.fltk.org/
 [7]: https://www.mail-archive.com/fltk-dev@easysw.com/msg00762.html
 [8]: http://ilixi.org/
 [9]: http://www.androwish.org/
 [10]: http://harmoniccode.blogspot.de/2014/02/fun-with-javafx-on-raspberry-pi-again.html
 [11]: http://www.raspberrypi.org/forums/viewtopic.php?f=31&t=26142
 [12]: https://bitbucket.org/olav/lenas-uhr