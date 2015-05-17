---
layout: post
status: publish
published: true
title: Internet-Radio mit RaspberryPi, 2-zeiligem RGB-LCD und 5 Tasten
author:
  display_name: olav
  login: olav
  email: olav@schettler.net
  url: ''
author_login: olav
author_email: olav@schettler.net
wordpress_id: 804
wordpress_url: http://tinkerthon.de/?p=804
date: '2013-04-02 00:42:10 +0200'
date_gmt: '2013-04-01 22:42:10 +0200'
categories:
- Allgemein
- Rasberry Pi
tags:
- RaspberryPi
- InternetRadio
- MusicPlayerDaemon
comments:
- id: 323
  author: oschettler
  author_email: twitter.722023@example.com
  author_url: http://twitter.com/oschettler
  date: '2013-04-02 00:54:10 +0200'
  date_gmt: '2013-04-01 22:54:10 +0200'
  content: 'RT @tinkerthon: Internet-Radio mit RaspberryPi, 2-zeiligem RGB-LCD und
    5 Tasten - http:&#47;&#47;t.co&#47;S7d3ELzI7g'
- id: 324
  author: Dietmar
  author_email: dkallweit@versanet.de
  author_url: ''
  date: '2013-05-18 16:21:27 +0200'
  date_gmt: '2013-05-18 14:21:27 +0200'
  content: "Hallo, versuche gerade dein Projekt nachzubauen,\r\nDisplay funktioniert,
    wlan funktioniert, mpd &amp; mpc laufen, aber beim starten vom sudo service radio
    start bricht er mit einem syntax error ab,\r\n &#47;home&#47;pi&#47;radio&#47;radio.py:
    5: &#47;home&#47;pi&#47;radio&#47;radio.py: Syntax error: newline unexpected leider
    bin ich nicht der Pytonspezie, etwas in der radio.py ist nicht OK, habe deine
    Datei benutzt, auch w&auml;re es sch&ouml;n, wenn Du mal die Rechte der Dateien
    dokumentieren w&uuml;rdest, und auch das\r\n sudo chmod g+w &#47;var&#47;lib&#47;mpd&#47;music&#47;
    &#47;var&#47;lib&#47;mpd&#47;playlists&#47;\r\nsudo chgrp audio &#47;var&#47;lib&#47;mpd&#47;music&#47;
    &#47;var&#47;lib&#47;mpd&#47;playlists&#47; steht nirgens.\r\n\r\nKannst Du mir
    hier weiterhelfen, ansonsten ist das Projekt schon mal echt klasse."
- id: 325
  author: Dietmar
  author_email: dkallweit@versanet.de
  author_url: ''
  date: '2013-05-20 21:50:27 +0200'
  date_gmt: '2013-05-20 19:50:27 +0200'
  content: "So, habe alles noch mal neu aufgesetzt,\r\nnach einigen &Auml;nderungen
    l&auml;uft jetzt alles so wie Du es beschrieben hasst.\r\nEin Problem tritt auf,
    beim start des Radios, das unidecode nicht als Modul geladen ist, das habe ich
    nachgeladen, so das es jetzt l&auml;uft. Bei adafruit im Termodrucker beschrieben.\r\nDie
    Probleme die ich hatte mit den python dateien lag an meinem Download, bei mir
    waren Dateien als HTTP download gespeichert, also unbrauchbar.\r\nNoch malneu
    und alles ist OK.\r\nDie Installation des Startscripts, sollte in deiner Beschreibung
    ge&auml;ndert werden auf\r\ncd radio; sudo cp initradio.sh &#47;etc&#47;init.d&#47;radio;
    sudo update-rc.d radio defaults\r\n\r\nHier fehlt das Zweite sudo.\r\n\r\nIm startscript
    steht noch ein nicht vorhandener Pfad im Homedir , der auf die eigenen bed&uuml;rfnisse
    angepasst werden mu&szlig;, &#47;olav&#47;work&#47;.\r\n\r\nF&uuml;r mich als
    Anf&auml;nger sind in diesem Projekt zuviele vorraussetzungen von Installationen,
    so das man das Projekt so ohne weiters nicht direkt zumlaufen bekommt. Was mich
    aber selber wieder ein St&uuml;ck tiefer in die sache einblicken lie&szlig;.\r\n\r\nDanke
    f&uuml;r die Idee, wenn Du noch verbesserungen in der radio.py vornimmst, bitte
    lass es mich wissen, python ist leider nicht mein Ding. Aber kann es werden.\r\n\r\nGru&szlig;
    Dietmar"
- id: 326
  author: Dietmar
  author_email: dkallweit@versanet.de
  author_url: ''
  date: '2013-05-20 21:51:28 +0200'
  date_gmt: '2013-05-20 19:51:28 +0200'
  content: Ach ja, shutdown w&auml;re noch eine gute Sache
- id: 328
  author: Dietmar
  author_email: dkallweit@versanet.de
  author_url: ''
  date: '2013-05-22 11:06:31 +0200'
  date_gmt: '2013-05-22 09:06:31 +0200'
  content: "So ich habe noch einen USB Audio Adapter eingebaut, damit klingt das Ganze
    doch wesentlich besser..\r\nBei der Auswahl der Playliste hat die Left Taste die
    gleiche Funktion wie Select,\r\nDa ich mir die radio.py schon mehrfach angeschaut
    habe, aber immer noch keinen einblick in Python habe, ist es m&ouml;glich den
    Selekt Taster auf Zeit abzufragen, also Dr&uuml;cken von>2 Sek und dann ein shutdown
    -h now ausf&uuml;hren l&auml;sst, da alle Funktionen meiner Meinung nach &uuml;ber
    die anderen vier Tasten funktionieren. Was man auch noch machen kann, ist eine
    Playliste laden und dann mit den Komandos mcp play 1 bis x die einzelnen Sender
    starten, so hatte ich es bei der reinen MPC&#47;Radio funktion ohne Display, das
    ergebniss ist aber das gleiche, aber nur eine *.m3u.\r\nFreue mich auf eine Antwort\r\nGru&szlig;
    Dietmar"
- id: 329
  author: Dietmar
  author_email: dkallweit@versanet.de
  author_url: ''
  date: '2013-05-22 11:09:10 +0200'
  date_gmt: '2013-05-22 09:09:10 +0200'
  content: Sorry, ich meine nicht die Left-Taste sondern die Right-Taste.
- id: 330
  author: Dietmar
  author_email: dkallweit@versanet.de
  author_url: ''
  date: '2013-05-22 12:26:06 +0200'
  date_gmt: '2013-05-22 10:26:06 +0200'
  content: "Mir ist doch noch ein Vorteil eingefallen mit einer *.m3u Liste,\r\ndamit
    kann man dann die Sender w&auml;hlen von einem externen Client oder Androide Handy."
- id: 331
  author: olav
  author_email: olav@schettler.net
  author_url: ''
  date: '2013-05-24 08:35:44 +0200'
  date_gmt: '2013-05-24 06:35:44 +0200'
  content: "Per EMail bekam ich noch den Hinweis auf die M&ouml;glichkeit, den MPD
    &uuml;ber ein Web-Interface, etwa per http:&#47;&#47;mpd.wikia.com&#47;wiki&#47;Client:MPDWebinterface
    zu steuern. Ich selbst habe das noch nicht probiert, da ich im Zusammenhang mit
    Drupal auf RaspberryPI den Eindruck hatte, dass Apache&#47;PHP f&uuml;r das Maschinchen
    ein etwas zu schweres Gesch&uuml;tz ist. \r\n\r\nStattdessen nutze ich hin und
    wieder native Apps auf Android (z.B. https:&#47;&#47;play.google.com&#47;store&#47;apps&#47;details?id=com.soreha.droidmpdclient&hl=de)
    &#47; iOS (z.B. https:&#47;&#47;itunes.apple.com&#47;de&#47;app&#47;mpad&#47;id423097706)
    zur Fernsteuerung. Die reden direkt mit dem Daemon und ben&ouml;tigen keine zus&auml;tzliche
    Software auf dem RaspberryPi."
- id: 332
  author: Dietmar
  author_email: dkallweit@versanet.de
  author_url: ''
  date: '2013-05-24 08:52:51 +0200'
  date_gmt: '2013-05-24 06:52:51 +0200'
  content: "Ich habe auch eine APP auf dem PC, per WEB brauche ich das nicht. ich
    benutze unter WIn7 auch noch den GNOME Music Player Client, der genau so funktioniert
    wie die APP'S auf dem Androiden und auch dazu noch parallel laufen kann. \r\nWas
    ist denn mit meinen Vorschl&auml;gen, \r\n1. nur in einer *.M3u die alle Sender
    enth&auml;lt , dann kann man auch die Sender per APP umstellen und ganz wichtig,
    da ich kein python kann, Shutdown &uuml;ber den Selectschalter.\r\neine Vorstellung
    w&auml;re hier \r\n2. Dr&uuml;cht man den Selectschalter kurz sollte es \"MUTE\"
    sein, h&auml;lt man ihn l&auml;nger z.b. 2 Sek dann shutdown. Die Steuerung &uuml;ber
    die Koordinatentaster geht sonst komplett, so das ich den Selecttaster eigentlich
    nicht ben&ouml;tige nach eingehenden Test's.\r\n3. Nach dem Start eine default
    *.m3u laden, damit das radio sofort l&auml;uft, oder sich den letzten Sender merken.\r\n\r\nLeider
    bin ich in Python absoluter Anf&auml;nger, und kann das so noch nicht umsetzen.\r\n\r\nGru&szlig;
    Dietmar"
- id: 333
  author: olav
  author_email: olav@schettler.net
  author_url: ''
  date: '2013-05-24 15:04:05 +0200'
  date_gmt: '2013-05-24 13:04:05 +0200'
  content: "Hallo Dietmar, \r\n\r\ngute Anregungen. Ich werde am WE mal meine Programmierkappe
    aufsetzen und versuchen, dass so umzusetzen.\r\n\r\n-- Olav"
- id: 334
  author: Stefan
  author_email: stefbu@gmail.com
  author_url: http://staedtebau.wordpress.com
  date: '2013-06-08 18:04:06 +0200'
  date_gmt: '2013-06-08 16:04:06 +0200'
  content: "Ein sch&ouml;nes Projekt! mich st&ouml;rt aktuell noch das umst&auml;ndliche
    Anlegen von Radiosendern.\r\nZudem w&auml;re eine solche Funktion noch interessant:
    \r\nhttp:&#47;&#47;blog.scphillips.com&#47;2013&#47;01&#47;using-a-raspberry-pi-with-android-phones-for-media-streaming&#47;\r\nDamit
    kann Musik von der Netzwerk-Festplatte aus abgespielt werden. \r\nMich w&uuml;rde
    au&szlig;erdem interessieren, ob ich zB auch die Tasten von einem alten Kassettenrecorder
    direkt an das GPIO anschlie&szlig;en kann, oder ob da noch widerst&auml;nde o.&auml;.
    dazwischen m&uuml;ssen. Gibt es hierf&uuml;r irgendwo eine gute Einf&uuml;hrung?"
- id: 335
  author: agentshoe
  author_email: martin.kratschmann@me.com
  author_url: http://kratschmann.wordpress.com
  date: '2013-06-09 00:41:10 +0200'
  date_gmt: '2013-06-08 22:41:10 +0200'
  content: "Hallo Olav!\r\n\r\nAbsolut tolle Anleitung - hat mich inspiriert einen
    Raspberry zu kaufen und nachzubauen. Ich w&uuml;rde mir w&uuml;nschen das Internetradio
    noch weiter zu vereinfachen, auf Grund meiner fehlenden Python Kenntnisse werde
    ich das selbst allerdings wohl so bald nicht hinbekommen.\r\n\r\nMein Projekt
    soll so aussehen:\r\n\r\nRaspberry gemeinsam mit einem Verst&auml;rker in der
    abgeh&auml;ngten Decke versteckt und mit einem hochwertigen Deckenlautsprecher
    verbunden, einzig 4 Tasten f&uuml;hren zu einem umfunktionierten EIB Bus Taster
    mit 6 Tasten.\r\n\r\nDamit m&ouml;chte ich einfach folgende Funktionen ausf&uuml;hren:\r\n\r\nlinks-rechts:
    Leiser - Lauter\r\nrauf-runter: Senderwechsel\r\n\r\nShutdown w&auml;re mir garnicht
    so wichtig, der Raspberry braucht ohnehin fast keinen Strom.\r\n\r\nBei dieser
    Konfiguration w&uuml;rde ich ohne Display auskommen, die konfigurierten Sender
    m&uuml;sste ich dann einfach nach Geschmack durchzappen.\r\n\r\nWer kann mir bei
    der Umsetzung helfen?"
- id: 336
  author: Dietmar
  author_email: dkallweit@versanet.de
  author_url: ''
  date: '2013-06-15 16:05:27 +0200'
  date_gmt: '2013-06-15 14:05:27 +0200'
  content: "Hallo Olav,\r\nhast Du schon was auf die beine gestellt?"
- id: 340
  author: thedudiop@web.de
  author_email: thedudiop@web.de
  author_url: ''
  date: '2013-11-06 09:15:19 +0100'
  date_gmt: '2013-11-06 08:15:19 +0100'
  content: "Hallo,\r\n\r\nkam gerade auf die Homepage von dir ;-) nicht schlecht deine
    Ausf&uuml;hrung werde es mal mit dem Adafruit LCD 16x2 mit Keypad Kit ausprobieren
    oder hast du damit schon Erfahrungen gemacht??"
- id: 341
  author: olav
  author_email: olav@schettler.net
  author_url: ''
  date: '2013-11-06 16:33:45 +0100'
  date_gmt: '2013-11-06 15:33:45 +0100'
  content: Genau damit hatte ich mein Radio auch gebaut. Mit der bunten Hintergrundbeleuchtung
    des Displays habe ich allerdings noch nichts angestellt. Ich muss aber gestehen,
    dass ich nicht ganz gl&uuml;cklich &uuml;ber die Taster bin. Der Einbau in ein
    einfaches Geh&auml;use ist doch sehr fummelig. Ich habe mir inzwischen einen <a
    href="http:&#47;&#47;blog.spitzenpfeil.org&#47;wordpress&#47;projects&#47;the-knob-serial-knob&#47;"
    rel="nofollow">Drehknopf<&#47;a> bestellt und will einmal schauen, ob ich damit
    nicht eine einfachere Nutzerf&uuml;hrung hinbekomme.
- id: 342
  author: Johannes
  author_email: thedudiop@web.de
  author_url: ''
  date: '2013-11-14 11:27:20 +0100'
  date_gmt: '2013-11-14 10:27:20 +0100'
  content: "Hallo OLAV,\r\n\r\nhabe versucht dein Script nachvollzuziehen, hier ein
    Auszugs meines Script:\r\n\r\nRaspbian users\r\n\r\nAm Anfang die zwei Befehle
    in das Script hinzugef&uuml;gt\r\nedit &#47;etc&#47;modules (sudo nano &#47;etc&#47;modules)\r\ni2c-bcm2708
    \r\ni2c-dev\r\ndananach\r\nsudo apt-get install python-smbus\r\nsudo apt-get install
    i2c-tools\r\n\r\ndanach \r\nsudo apt-get install git\r\n\tgit clone https:&#47;&#47;github.com&#47;adafruit&#47;Adafruit-Raspberry-Pi-Python-Code.git\r\n\tcd
    Adafruit-Raspberry-Pi-Python-Code\r\n\tcd Adafruit_CharLCDPlate\r\n\r\nsudo python
    Adafruit_CharLCDPlate.py\t\r\n\r\ndanach den Busnummer ge&auml;ndert und es lief
    das Testscript\r\ndanach habe wollte ich mal dein Script Testen mit dem Radio
    nur bis jetzt habe ich ein Wei&szlig;es Display mal angezeigt bekommen (h&auml;ngt
    evt in einem LOOP fest?) und einmal ging es mal ein Text an und mehr nicht mehr.\r\n\r\nDann
    habe ich folgendes eingeben \r\nsudo apt-get install mpd mpc git\r\nsudo amixer
    cset numid=3 1\r\ngit clone https:&#47;&#47;github.com&#47;oschettler&#47;radio.git\r\nsudo
    service mpd start\r\nWollte auch die Playliste erstellen nur irgendwie unterl&auml;uft
    mir ein Fehler dort. Habe jetzt weitere Foren angeschaut einiges Ausprobiert den
    &bdquo;Learning by doing&ldquo; ist ab und zu besser als nachzufragen doch jetzt
    bin cih ein biscchen am verzweifeln ;-( habe auch zum Teil das Script hierzu verwendet
    aber kam leider nur ein Fehler heraus\r\n\r\n\tMit freundlichem Gru&szlig;\r\n\r\nJohannes"
- id: 343
  author: agentshoe
  author_email: martin.kratschmann@me.com
  author_url: http://gravatar.com/agentshoe
  date: '2013-12-26 17:52:36 +0100'
  date_gmt: '2013-12-26 16:52:36 +0100'
  content: "Hallo Olav!\r\n\r\nGibt es schon etwas Neues zu dem Projekt? F&uuml;r
    mich w&auml;re interessant ob du inzwischen geschafft hast das Radio auch auszuschalten,
    und sei es nur durch eine Mute Funktion von MPD. Das ist wirklich ein tolles Projekt
    - w&uuml;rde gerne sehen dass hier auch etwas weiterentwickelt wird.\r\n\r\nLiebe
    Gr&uuml;&szlig;e,\r\n\r\nMartin"
- id: 359
  author: Thore Melitat
  author_email: thore@melitat.de
  author_url: ''
  date: '2014-07-21 21:34:44 +0200'
  date_gmt: '2014-07-21 19:34:44 +0200'
  content: "Hallo Olav,\r\n\r\nich habe mal eine etwas d&uuml;mmerer Frage, auf deinen
    Fotos sehe ich, dass du Taster verwendest die 2 Pole&#47;Kabel haben. Die orginalen
    Taster haben aber 4. An welche der 4 Kontakte auf der Platine hast du die denn
    angel&ouml;tet?\r\n\r\nViele Gr&uuml;&szlig;e,\r\n\r\nThore"
- id: 878
  author: Tinkerthon Ein Internet-Wecker mit Raspberry PI - Tinkerthon
  author_email: ''
  author_url: http://tinkerthon.de/2014/11/ein-internet-wecker-mit-raspberry-pi/
  date: '2014-11-26 08:14:47 +0100'
  date_gmt: '2014-11-26 07:14:47 +0100'
  content: '[&#8230;] des MPD folgen. Damit h&auml;tte ich auch endlich eine bedienbare
    Alternative zu meinem ersten Projekt mit dem Music Player Demon [&#8230;]'
- id: 1006
  author: Alfred Schwarz
  author_email: alfredschwarz@msn.com
  author_url: ''
  date: '2015-03-03 18:53:38 +0100'
  date_gmt: '2015-03-03 17:53:38 +0100'
  content: wer schickt mir gegen &euro; 100,-- eine funktionst&uuml;chtige Micro SD
    f&uuml;r Raspberrypi Radio und adafruit i2C 16x2 RGB LCD Pi Plandiene. Hab schon
    alles Probiert aber es lauft nichts. Bin ich auch in Linux nicht bewandert. Arbeite
    jetzt 25 Jahre nur mit Windows.
- id: 1007
  author: Alfred Schwarz
  author_email: office@cafe-schwarz.at
  author_url: ''
  date: '2015-03-06 17:21:58 +0100'
  date_gmt: '2015-03-06 16:21:58 +0100'
  content: schade das sich keiner meldet
- id: 1008
  author: olav
  author_email: olav@schettler.net
  author_url: ''
  date: '2015-03-13 17:06:13 +0100'
  date_gmt: '2015-03-13 16:06:13 +0100'
  content: "Hallo Herr Schwarz,\r\nich schicke Ihnen eine SD-Karte mit der Software.
    \r\n\r\nAllerdings, wie gesagt: Meine Python-Software ist wirklich mehr als Startpunkt
    und nicht als fertige Anwendung zu verstehen.\r\n\r\nViele Gr&uuml;&szlig;e,\r\n--
    Olav Schettler"
- id: 1009
  author: Konrad
  author_email: IT-Reservist@chello.at
  author_url: ''
  date: '2015-03-16 02:02:26 +0100'
  date_gmt: '2015-03-16 01:02:26 +0100'
  content: "Hallo Olav, habe mir das Display zugelegt und wollte das Radio zum laufen
    bringen, dazu Deine Liste holen. Leider komme ich nicht &uuml;ber Benutzername&#47;PW.
    Kannst Du mir bitte helfen?\r\nGru&szlig;, Konrad."
- id: 1010
  author: Konrad
  author_email: IT_Reservist@chello.at
  author_url: ''
  date: '2015-03-16 17:36:36 +0100'
  date_gmt: '2015-03-16 16:36:36 +0100'
  content: "Sorry, geh&ouml;rt h&auml;tte Underline bei Adresse!\r\nDanke, Konrad."
- id: 1011
  author: olav
  author_email: olav@schettler.net
  author_url: ''
  date: '2015-03-16 23:06:20 +0100'
  date_gmt: '2015-03-16 22:06:20 +0100'
  content: "Hallo Konrad,\r\n\r\nich brauche etwas mehr Kontext. Wo genau kommst du
    nicht &uuml;ber Benutzername&#47;PW hinaus? \r\n\r\nStandard-Nutzer und Kennwort
    von Raspbian Linux sind \"pi\" und \"raspberry\"."
---
<blockquote><strong>UPDATE 03&#47;2015: <&#47;strong>Adafruit empfiehlt inzwischen, statt ihrer Occidentalis-Distribution direkt das <a href="http:&#47;&#47;www.raspberrypi.org&#47;downloads&#47;">Raspbian-Linux<&#47;a> zu benutzen. &nbsp;Von Adafruit gibt es dann einen <a href="https:&#47;&#47;github.com&#47;adafruit&#47;Adafruit-Pi-Finder#adafruit-raspberry-pi-finder">Raspberry Pi Finder<&#47;a>, der die fehlenden Komponenten zur Hardwaresteuerung nachr&uuml;stet.</p>
<p>Ich habe damit auf meinem Mac eine passende SD-Karte mit den&nbsp;folgenden Befehlen vorbereitet:</p>
<pre>diskutil unmountDisk &#47;dev&#47;disk3 sudo dd bs=1m if=$HOME&#47;Downloads&#47;2015-02-16-raspbian-wheezy.img of=&#47;dev&#47;disk3<&#47;pre><br />
Dieser Befehl l&auml;uft sehr lange. Mit CTRL-T im Terminalfenster kann man sich zwischendurch den Status anzeigen lassen.</p>
<div>Ein Aufruf von<&#47;div></p>
<pre>curl -SLs https:&#47;&#47;apt.adafruit.com&#47;bootstrap | bash<&#47;pre><br />
... findet dann einen &uuml;ber Ethernet-Kabel angebundenen RaspberryPi und konfiguriert ihn.</p>
<p>Hier ist noch ein kurzes Video vom&nbsp;Startvorgang des Radios:</p>
<p><span class="embed-youtube" style="text-align: center; display: block;"><iframe class="youtube-player" src="https:&#47;&#47;www.youtube.com&#47;embed&#47;oc5U1_yOtq0?version=3&amp;rel=1&amp;fs=1&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;wmode=transparent" width="500" height="280" frameborder="0" allowfullscreen="allowfullscreen"><&#47;iframe><&#47;span></p>
<p><strong>UPDATE 2.<&#47;strong> Der Niederl&auml;nder Bob Rathbone hat auf seiner <a href="http:&#47;&#47;www.bobrathbone.com&#47;ada_pi_radio.htm" target="_blank">Website<&#47;a> eine umfangreiche (120 S.) Anleitung als PDF-Datei mit passender Python-Software verlinkt.<&#47;blockquote><br />
Internet-Radio. So 2000er! Heute tr&auml;gt doch jeder st&auml;ndig mindestens ein Smartphone und ein iPod, vielleicht auch noch ein Tablet und ein Kindle mit sich herum. Eben! Der Nachwuchs bettelt st&auml;ndig um verl&auml;ngerte Medienzeit ("nur zum Radio h&ouml;ren") und nutzt dann das Gadget doch nur zum Daddeln.</p>
<p>Ein Internet-Radio muss also her! Neu gekauft sind die auch gar nicht mehr so teuer. Es gibt auch <a href="http:&#47;&#47;www.elv.de&#47;internet-radio-ir100-im-alu-profilgehaeuse-komplettbausatz.html">einige Baus&auml;tze<&#47;a> mit Geh&auml;use und Software.</p>
<p>Wer allerdings lieber ein quelloffenes Ger&auml;t in K&uuml;che oder Kinderzimmer stehen haben m&ouml;chte, kann sich aber mit moderatem Aufwand und f&uuml;r kleines Geld ein solches Hightech-Radio selber bauen. Mit einem RaspberryPi und dem Music Player Daemon ist das auch gar nicht so schwer. Ganz toll ist nat&uuml;rlich, wenn man dieses Bastelprojekt mit den Spr&ouml;sslingen gemeinsam bearbeitet. Hier die ben&ouml;tigte Hardware:</p>
<ul>
<li>1 RaspberryPi, z.B. <a href="http:&#47;&#47;www.element14.com&#47;community&#47;docs&#47;DOC-51668">von Farnell<&#47;a>. Inzwischen gibt die Version mit 512MByte Hauptspeicher. Das Radio l&auml;uft aber auch gut mit der Version mit nur 256MByte.<&#47;li>
<li>SDcard ab 4 GByte<&#47;li>
<li>Netzteil mit Micro-USB-Stecker, wie sie heute bei allen neuen Handys dabei sind<&#47;li>
<li>WLAN-Adapter <a href="http:&#47;&#47;www.conrad.de&#47;ce&#47;de&#47;product&#47;986292&#47;Conrad-WLAN-Stick-N150-Nano">N150 von Conrad<&#47;a><&#47;li>
<li>1 Adafruit <a href="http:&#47;&#47;www.exp-tech.de&#47;Displays&#47;RGB-Negative-16x2-LCD-Keypad-Kit-for-Raspberry-Pi.html">RGB LCD Plate<&#47;a><&#47;li>
<li>Aktive PC-Boxen zum Anschluss an den Audio-Ausgang des Pi<&#47;li>
<li>5 Taster, z.B. von Conrad<&#47;li>
<li>1 Holzkiste. Ich konnte eine Kiste von Teebeuteln recyclen.<&#47;li><br />
<&#47;ul><br />
Dieses Software erweckt das Ganze zum Leben:</p>
<ul>
<li>Raspberry <a href="http:&#47;&#47;learn.adafruit.com&#47;adafruit-raspberry-pi-educational-linux-distro&#47;occidentalis-v0-dot-2">Occidentalis v0.2<&#47;a> von Adafruit<&#47;li>
<li>Music Player Daemon MPD und Kommandozeilen-Client MPC<&#47;li>
<li>Python-Library f&uuml;r das Display<&#47;li>
<li>Code <a href="https:&#47;&#47;github.com&#47;oschettler&#47;radio">meines Radio-Programmes<&#47;a><&#47;li><br />
<&#47;ul><br />
Die Vorbereitung der SDcard f&uuml;r den RaspberryPi ist <a href="http:&#47;&#47;elinux.org&#47;RPi_Easy_SD_Card_Setup">bei elinux.org<&#47;a> beschrieben. Wenn der RaspberryPi damit bootet, bringt ihr am besten als n&auml;chstes den RaspberryPi per WLAN-Adapter ins Netz. Die Occidentalis-Distribution enth&auml;lt gl&uuml;cklicherweise bereits passende Treiber, so dass ich mit dem Eintragen meiner SSID und meines Netzwerkkennwortes in der Datei &#47;etc&#47;network&#47;interfaces auskam.</p>
<p>Nach dem Neustart sollte der Pi dann bereits per WLAN erreichbar sein. Per Avahi macht er sich als&nbsp;<strong>raspberrypi.local<&#47;strong> im lokalen Netz bekannt. Da auch ein SSH-Daemon bereits installiert und aktiv ist, k&ouml;nnen Tastatur und HDMI-Anschluss jetzt von Pi entfernt werden und das weitere Arbeiten kann per Terminal erfolgen.</p>
<p>Jetzt ben&ouml;tigen wir die LCD-Anzeige mit den Tastern. Auf den <a href="http:&#47;&#47;learn.adafruit.com&#47;adafruit-16x2-character-lcd-plus-keypad-for-raspberry-pi">Adafruit-Seiten<&#47;a> ist der Aufbau erkl&auml;rt.</p>
<p>F&uuml;r die ersten Schritte in der Python-Entwicklung ist die <a href="http:&#47;&#47;learn.adafruit.com&#47;webide&#47;overview">WebIDE von Adafruit<&#47;a> eine tolle Wahl. Zur Installation des Internet-Radios gehen wir aber hier einen anderen Weg:</p>
<ul>
<li>Music Player Daemon, des Kommandozeilenprogramms hierf&uuml;r und Versionsverwaltung Git:
<pre>sudo apt-get install mpd mpc git<&#47;pre><br />
<&#47;li></p>
<li>Setzen des Audio-Ausganges auf die Klinken-Buchse:
<pre>sudo amixer cset numid=3 1<&#47;pre><br />
<&#47;li></p>
<li>Starten des Radio-D&auml;mons:
<pre>sudo service mpd start<&#47;pre><br />
<&#47;li></p>
<li>&Uuml;ber eine Android- oder iOS-App liesse sich die Musik nun bereits steuern.<&#47;li><br />
<&#47;ul><br />
Jetzt ben&ouml;tigen wir einige Sender-URLs. Bei mir sieht das nach einigem Googlen so aus:</p>
<pre style="padding-left: 30px;">root@raspberrypi:&#47;var&#47;lib&#47;mpd&#47;playlists# ls -la<br />
total 56<br />
drwxr-xr-x 2 mpd audio 4096 Mar 30 16:43 .<br />
drwxr-xr-x 4 mpd audio 4096 Mar 17 22:28 ..<br />
-rw-r--r-- 1 mpd audio 116 Sep 19 2012 1live_kassettendeck.m3u<br />
-rw-r--r-- 1 mpd audio 106 Dec 14 2011 1live_klubbing.m3u<br />
-rw-r--r-- 1 mpd audio 102 Sep 19 2012 1live_planb.m3u<br />
-rw-r--r-- 1 mpd audio 101 Sep 19 2012 1live_rocker.m3u<br />
-rw-r--r-- 1 mpd audio 30 Mar 17 22:41 90elf.m3u<br />
-rw-r--r-- 1 mpd audio 40 Mar 17 22:52 bigfm-mp3-96.m3u<br />
-rw-r--r-- 1 mpd audio 100 Dec 14 2011 einslivedigi.m3u<br />
-rw-r--r-- 1 mpd audio 88 Sep 28 2012 einslive.m3u<br />
-rw-r--r-- 1 mpd audio 90 Dec 14 2011 kiraka.m3u<br />
-rw-r--r-- 1 mpd audio 77 Mar 30 16:43 klassikradio.m3u<br />
-rw-r--r-- 1 mpd audio 118 Dec 14 2011 wdr2.m3u<br />
-rw-r--r-- 1 mpd audio 87 Dec 14 2011 wdr5.m3u<&#47;pre></p>
<ul>
<li>Installation der erforderlichen Python-Module<&#47;li><br />
<&#47;ul></p>
<pre style="padding-left: 30px;">wget https:&#47;&#47;bootstrap.pypa.io&#47;ez_setup.py -O - | sudo python<br />
sudo easy_install unidecode<&#47;pre></p>
<ul>
<li>Installation des Radio-Programmes:
<pre>cd ~; git clone&nbsp;https:&#47;&#47;github.com&#47;oschettler&#47;radio.git<&#47;pre><br />
<&#47;li></p>
<li>Installation des Start-Scriptes:
<pre>cd radio; sudo cp initradio.sh &#47;etc&#47;init.d&#47;radio;&nbsp;sudo update-rc.d radio defaults<&#47;pre><br />
Damit l&auml;sst sich das Radio-Programm starten:</p>
<pre>sudo service radio start<&#47;pre><br />
<&#47;li><br />
<&#47;ul><br />
Die Radio-Applikation ist noch sehr rudiment&auml;r. Die Men&uuml;eintr&auml;ge lassen sich per Pfeiltasten ausw&auml;hlen (hoch, runter, Men&uuml;punkt ausw&auml;hlen = rechts, zur&uuml;ck = links). Unter "Playlists" werden die Radiosender angezeigt. In einem Sender kann die Lautst&auml;rke per hoch&#47;runter eingestellt werden. Es gibt noch keine "aus"-Taste! Ich freue mich &uuml;ber Pull-Requests ;)</p>
<p>Wenn Hardware und Software funktionieren, kann das Ergebnis in eine gef&auml;llige Kiste eingebaut werden. Ich habe zus&auml;tzlich parallel zu den Tastern auf der Platine 5 Taster f&uuml;r die Frontplatte an das LCD-Plate gel&ouml;tet. Das Ergebnis sieht bei mir so aus:</p>
<p><a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2013&#47;04&#47;IMG_0021.jpg"><img class="alignnone size-medium wp-image-809" src="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2013&#47;04&#47;IMG_0021-300x225.jpg" alt="Frontplatte des Internet-Radios" width="300" height="225" &#47;><&#47;a> <a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2013&#47;04&#47;IMG_0023.jpg"><img class="alignnone size-medium wp-image-810" src="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2013&#47;04&#47;IMG_0023-e1364855918904-225x300.jpg" alt="IMG_0023" width="225" height="300" &#47;><&#47;a> <a href="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2013&#47;04&#47;IMG_0025.jpg"><img class="alignnone size-medium wp-image-811" src="http:&#47;&#47;tinkerthon.de&#47;wp-content&#47;uploads&#47;2013&#47;04&#47;IMG_0025-300x225.jpg" alt="IMG_0025" width="300" height="225" &#47;><&#47;a></p>
<p>&nbsp;</p>
