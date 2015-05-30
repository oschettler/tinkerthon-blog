---
title: Internet-Radio mit RaspberryPi, 2-zeiligem RGB-LCD und 5 Tasten
author: olav
published: 02.04.2013
thumbnail: /wp-content/uploads/2013/04/IMG_0021-212x212.jpg
excerpt: >
    Internet-Radio. So 2000er! Heute trägt doch jeder ständig mindestens ein Smartphone und ein iPod, vielleicht auch noch ein Tablet und ein Kindle mit sich herum. Eben! Der Nachwuchs bettelt ständig um verlängerte Medienzeit (&#8220;nur zum Radio hören&#8221;) und nutzt dann das Gadget doch nur zum Daddeln.
layout: post
permalink: /2013/04/internet-radio-mit-raspberrypi-2-zeiligem-rgb-lcd-und-5-tasten/
ks_metadata:
  - 'a:7:{s:4:"lang";s:2:"en";s:8:"keywords";s:35:"mpd,audio,die,radio,mit,und,das,der";s:19:"keywords_autoupdate";i:1;s:11:"description";s:151:"MPD und Kommandozeilen-Client MPC Python-Library für das Display Code meines Radio-Programmes Die Vorbereitung der SDcard für den RaspberryPi ist bei";s:22:"description_autoupdate";i:1;s:5:"title";s:0:"";s:6:"robots";s:12:"index,follow";}'
categories:
  - Allgemein
  - Rasberry Pi
tags:
  - InternetRadio
  - MusicPlayerDaemon
  - RaspberryPi
---
**UPDATE 03/2015:**

Adafruit empfiehlt inzwischen, statt ihrer Occidentalis-Distribution direkt das [Raspbian-Linux][1] zu benutzen.  Von Adafruit gibt es dann einen [Raspberry Pi Finder][2], der die fehlenden Komponenten zur Hardwaresteuerung nachrüstet.

Ich habe damit auf meinem Mac eine passende SD-Karte mit den folgenden Befehlen vorbereitet:

<pre>diskutil unmountDisk /dev/disk3 sudo dd bs=1m if=$HOME/Downloads/2015-02-16-raspbian-wheezy.img of=/dev/disk3</pre>

Dieser Befehl läuft sehr lange. Mit CTRL-T im Terminalfenster kann man sich zwischendurch den Status anzeigen lassen.

Ein Aufruf von

{% highlight bash %}
curl -SLs https://apt.adafruit.com/bootstrap | bash</pre>
{% endhighlight %}

&#8230; findet dann einen über Ethernet-Kabel angebundenen RaspberryPi und konfiguriert ihn.

Hier ist noch ein kurzes Video vom Startvorgang des Radios:

<span class="embed-youtube" style="text-align: center; display: block;"></span>

**UPDATE 2.** Der Niederländer Bob Rathbone hat auf seiner [Website](http://www.bobrathbone.com/ada_pi_radio.htm) eine umfangreiche (120 S.) Anleitung als PDF-Datei mit passender Python-Software verlinkt.

Internet-Radio. So 2000er! Heute trägt doch jeder ständig mindestens ein Smartphone und ein iPod, vielleicht auch noch ein Tablet und ein Kindle mit sich herum. Eben! Der Nachwuchs bettelt ständig um verlängerte Medienzeit (&#8220;nur zum Radio hören&#8221;) und nutzt dann das Gadget doch nur zum Daddeln.

Ein Internet-Radio muss also her! Neu gekauft sind die auch gar nicht mehr so teuer. Es gibt auch [einige Bausätze][3] mit Gehäuse und Software.

Wer allerdings lieber ein quelloffenes Gerät in Küche oder Kinderzimmer stehen haben möchte, kann sich aber mit moderatem Aufwand und für kleines Geld ein solches Hightech-Radio selber bauen. Mit einem RaspberryPi und dem Music Player Daemon ist das auch gar nicht so schwer. Ganz toll ist natürlich, wenn man dieses Bastelprojekt mit den Sprösslingen gemeinsam bearbeitet. Hier die benötigte Hardware:

  * 1 RaspberryPi, z.B. [von Farnell][4]. Inzwischen gibt die Version mit 512MByte Hauptspeicher. Das Radio läuft aber auch gut mit der Version mit nur 256MByte.
  * SDcard ab 4 GByte
  * Netzteil mit Micro-USB-Stecker, wie sie heute bei allen neuen Handys dabei sind
  * WLAN-Adapter [N150 von Conrad][5]
  * 1 Adafruit [RGB LCD Plate][6]
  * Aktive PC-Boxen zum Anschluss an den Audio-Ausgang des Pi
  * 5 Taster, z.B. von Conrad
  * 1 Holzkiste. Ich konnte eine Kiste von Teebeuteln recyclen.

Dieses Software erweckt das Ganze zum Leben:

  * Raspberry [Occidentalis v0.2][7] von Adafruit
  * Music Player Daemon MPD und Kommandozeilen-Client MPC
  * Python-Library für das Display
  * Code [meines Radio-Programmes][8]

Die Vorbereitung der SDcard für den RaspberryPi ist [bei elinux.org][9] beschrieben. Wenn der RaspberryPi damit bootet, bringt ihr am besten als nächstes den RaspberryPi per WLAN-Adapter ins Netz. Die Occidentalis-Distribution enthält glücklicherweise bereits passende Treiber, so dass ich mit dem Eintragen meiner SSID und meines Netzwerkkennwortes in der Datei /etc/network/interfaces auskam.

Nach dem Neustart sollte der Pi dann bereits per WLAN erreichbar sein. Per Avahi macht er sich als **raspberrypi.local** im lokalen Netz bekannt. Da auch ein SSH-Daemon bereits installiert und aktiv ist, können Tastatur und HDMI-Anschluss jetzt von Pi entfernt werden und das weitere Arbeiten kann per Terminal erfolgen.

Jetzt benötigen wir die LCD-Anzeige mit den Tastern. Auf den [Adafruit-Seiten][10] ist der Aufbau erklärt.

Für die ersten Schritte in der Python-Entwicklung ist die [WebIDE von Adafruit][11] eine tolle Wahl. Zur Installation des Internet-Radios gehen wir aber hier einen anderen Weg:

  * Music Player Daemon, des Kommandozeilenprogramms hierfür und Versionsverwaltung Git:
    <pre>sudo apt-get install mpd mpc git</pre>

  * Setzen des Audio-Ausganges auf die Klinken-Buchse:
    <pre>sudo amixer cset numid=3 1</pre>

  * Starten des Radio-Dämons:
    <pre>sudo service mpd start</pre>

  * Über eine Android- oder iOS-App liesse sich die Musik nun bereits steuern.

Jetzt benötigen wir einige Sender-URLs. Bei mir sieht das nach einigem Googlen so aus:

{% highlight bash %}
root@raspberrypi:/var/lib/mpd/playlists# ls -la
total 56
drwxr-xr-x 2 mpd audio 4096 Mar 30 16:43 .
drwxr-xr-x 4 mpd audio 4096 Mar 17 22:28 ..
-rw-r--r-- 1 mpd audio 116 Sep 19 2012 1live_kassettendeck.m3u
-rw-r--r-- 1 mpd audio 106 Dec 14 2011 1live_klubbing.m3u
-rw-r--r-- 1 mpd audio 102 Sep 19 2012 1live_planb.m3u
-rw-r--r-- 1 mpd audio 101 Sep 19 2012 1live_rocker.m3u
-rw-r--r-- 1 mpd audio 30 Mar 17 22:41 90elf.m3u
-rw-r--r-- 1 mpd audio 40 Mar 17 22:52 bigfm-mp3-96.m3u
-rw-r--r-- 1 mpd audio 100 Dec 14 2011 einslivedigi.m3u
-rw-r--r-- 1 mpd audio 88 Sep 28 2012 einslive.m3u
-rw-r--r-- 1 mpd audio 90 Dec 14 2011 kiraka.m3u
-rw-r--r-- 1 mpd audio 77 Mar 30 16:43 klassikradio.m3u
-rw-r--r-- 1 mpd audio 118 Dec 14 2011 wdr2.m3u
-rw-r--r-- 1 mpd audio 87 Dec 14 2011 wdr5.m3u</pre>
{% endhighlight %}

  * Installation der erforderlichen Python-Module

<pre style="padding-left: 30px;">wget https://bootstrap.pypa.io/ez_setup.py -O - | sudo python
sudo easy_install unidecode</pre>

  * Installation des Radio-Programmes:
    <pre>cd ~; git clone https://github.com/oschettler/radio.git</pre>

  * Installation des Start-Scriptes:
    <pre>cd radio; sudo cp initradio.sh /etc/init.d/radio; sudo update-rc.d radio defaults</pre>

    Damit lässt sich das Radio-Programm starten:

    <pre>sudo service radio start</pre>

Die Radio-Applikation ist noch sehr rudimentär. Die Menüeinträge lassen sich per Pfeiltasten auswählen (hoch, runter, Menüpunkt auswählen = rechts, zurück = links). Unter &#8220;Playlists&#8221; werden die Radiosender angezeigt. In einem Sender kann die Lautstärke per hoch/runter eingestellt werden. Es gibt noch keine &#8220;aus&#8221;-Taste! Ich freue mich über Pull-Requests 😉

Wenn Hardware und Software funktionieren, kann das Ergebnis in eine gefällige Kiste eingebaut werden. Ich habe zusätzlich parallel zu den Tastern auf der Platine 5 Taster für die Frontplatte an das LCD-Plate gelötet. Das Ergebnis sieht bei mir so aus:

<a href="/wp-content/uploads/2013/04/IMG_0021.jpg" rel="lightbox[804]" title="Internet-Radio mit RaspberryPi, 2-zeiligem RGB-LCD und 5 Tasten"><img class="alignnone size-medium wp-image-809" src="/wp-content/uploads/2013/04/IMG_0021-300x225.jpg" alt="Frontplatte des Internet-Radios" width="300" height="225" /></a> <a href="/wp-content/uploads/2013/04/IMG_0023.jpg" rel="lightbox[804]" title="Internet-Radio mit RaspberryPi, 2-zeiligem RGB-LCD und 5 Tasten"><img class="alignnone size-medium wp-image-810" src="/wp-content/uploads/2013/04/IMG_0023-e1364855918904-225x300.jpg" alt="IMG_0023" width="225" height="300" /></a> <a href="/wp-content/uploads/2013/04/IMG_0025.jpg" rel="lightbox[804]" title="Internet-Radio mit RaspberryPi, 2-zeiligem RGB-LCD und 5 Tasten"><img class="alignnone size-medium wp-image-811" src="/wp-content/uploads/2013/04/IMG_0025-300x225.jpg" alt="IMG_0025" width="300" height="225" /></a>

&nbsp;

 [1]: http://www.raspberrypi.org/downloads/
 [2]: https://github.com/adafruit/Adafruit-Pi-Finder#adafruit-raspberry-pi-finder
 [3]: http://www.elv.de/internet-radio-ir100-im-alu-profilgehaeuse-komplettbausatz.html
 [4]: http://www.element14.com/community/docs/DOC-51668
 [5]: http://www.conrad.de/ce/de/product/986292/Conrad-WLAN-Stick-N150-Nano
 [6]: http://www.exp-tech.de/Displays/RGB-Negative-16x2-LCD-Keypad-Kit-for-Raspberry-Pi.html
 [7]: http://learn.adafruit.com/adafruit-raspberry-pi-educational-linux-distro/occidentalis-v0-dot-2
 [8]: https://github.com/oschettler/radio
 [9]: http://elinux.org/RPi_Easy_SD_Card_Setup
 [10]: http://learn.adafruit.com/adafruit-16x2-character-lcd-plus-keypad-for-raspberry-pi
 [11]: http://learn.adafruit.com/webide/overview
