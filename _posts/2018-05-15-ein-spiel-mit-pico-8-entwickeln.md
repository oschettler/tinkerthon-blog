---
title: Ein Spiel mit PICO-8 entwickeln
author: olav
excerpt: >
    PICO-8 ist eine Spielekonsole, die es nur in deiner Phantasie
    gibt. Das Tolle daran: Du kannst nicht nur jede Menge kostenloser Spiele darauf zocken, sondern jedes der Spiele kommt mit seinem Quellcode und du kannst darin rumschreiben. Oder schreibe doch einfach dein eigenes Spiel!
published: 14.05.2018
layout: post
permalink: "/2018/05/ein-spiel-mit-pico-8-entwickeln"
thumbnail: "/uploads/2018/02/bcbn_212x212.png"

categories:
  - Phantasiekonsolen
tags:
  - Spieleentwicklung
  - Lua
  - Programmieren lernen
---
Heute will ich dir zeigen, wie du auf deinem Computer ein eigenes Spiel entwickeln kannst. Wir benutzen dazu das Programm PICO-8. PICO-8 ist leider nicht kostenlos, aber es kostet nur 15 Dollar (ungefähr 13€). Deine Eltern helfen dir sicher, es auf [den Seiten des Herstellers Lexaloffle](https://www.lexaloffle.com/pico-8.php) zu kaufen und herunterzuladen.

Wenn der Preis wirklich ein Problem ist: Es gibt inzwischen ganz viele Nachbauten von PICO-8. Ein sehr guter, kostenloser Nachbau ist [PX8](https://hallucino.itch.io/px8). Eine günstige Alternative ist auch noch [TIC-80](https://tic.computer/). TIC ist ganz cool, weil es das auch für Android-Handies für unterwegs gibt.

Ich habe mich in diesem Artikel allerdings für PICO-8 entschieden, weil es hierfür wirklich am meisten Beispiele, Anleitungen und sogar ein [Fan-Magazin](https://sectordub.itch.io/pico-8-fanzine-1) gibt. Aus diesem Fan-Magazin stammt auch das Beispiel, dass ich dir zeigen möchte. Das Spiel heisst **Squashy** und ist ein einfaches "Tennis"-Spiel.

![Squashy](/uploads/2018/05/squashy/squashy.jpg)

Der folgende Text ist eine Übersetzung aus dem Englischen des Originalartikels von [Alex Mole](https://twitter.com/TheRealMolen) aus dem PICOZINE #1.
Alex hat netterweise zugestimmt, diese Übersetzung hier zu veröffentlichen. Danke Alex!

Doch bevor wir zu dem Spiel kommen, schauen wir uns ein wenig in PICO-8 um. Wenn du das Programm startest, landest du im Befehls-Modus. Der heisst so, weil du PICO-8 hier über getippte Befehle steuerst. Gib einfach einmal *help* ein und drücke die dicke Eingabetaste. PICO-8 listet alle Befehle (Englisch: *Commands*) auf und gibt dir auch Hinweise, was du sonst noch tun kannst.

Drückst du die Taste *Esc* oben links auf deiner Tastatur, gelangst du in den Editor. Hier schreibst du deine Spiele. Ein Editor funktioniert so wie eine Schreibmaschine: Du tippst etwas und der Computer zeigt das auf dem Bildschirm an. Probiere es doch einfach mal aus! Willst du deine Eingaben löschen, kannst du das mit der Taste *Zeichen löschen* (ein großer Pfeil nach links oben rechts über der Eingabetaste) tun.

Willst du dein programmiertes Spiel laufen lassen, drücke noch einmal *Esc* und tippe dann den Befehl *run*, gefolgt von der Eingabetaste. Die *Esc* Taste wechselt also zwischen Editor und Befehlsmodus.

Hast du erst einmal angefangen dein Spiel zu programmieren, solltest du es öfter zwischendurch abspeichern. Tust du das nicht, gehen deinen letzten Änderungen verloren. Im Befehlsmodus speicherst du mit *save spielname* (Eingabetaste). Den Spielnamen denkst du dir selber aus. Du lädst ein gespeichertes Spiel mit dem Befehl *load spielname* (Eingabetaste).

Hast du vergessen, unter welchem Namen du dein Spiel gespeichert hast, kannst du mit dem Befehl *dir* (Eingabetaste) eine Liste deiner gespeicherten Spiele angezeigt bekommen.

Nimm für dieses Spiel den Namen *squashy*. Zum Speichern gibst du also *save squashy* ein.

Jetzt sind wir bereit, um unser erstes Spiel in PICO-8 zu schreiben!

## Ein beweglicher Schläger

Lass uns einen Schläger herumschieben!

Drücke die *Esc* Taste, um in den Editor zu wechseln. Tippe dann den folgenden Programmtext ab. Es lohnt sich, in Textblöcken zwischen *if* und *end* und in Blöcken zwischen *function* und *end* am Anfang der zeile einmal die Leertaste zur drücken. So ist das Programm später leichter lesbar. Es lohnt sich auch, die Kommentare hinter *--* einzutippen. Kommentare beachtet sie  nicht. Sie sind also nur kleine Erinnerungen für dich!

````
-- paddle
padx=52
pady=122
padw=24
padh=4

function movepaddle()
 if btn (0) then
  padx-=3
 elseif btn(1) then
  padx+=3
 end
end

function _update()
 movepaddle()
end

function _draw()
 -- Leere den Bildschirm
 rectfill(0,0, 128,128, 3)

 -- Zeichne einen schläger
 rectfill(padx,pady, padx+padw,pady+padh, 15)
end
````

Drücke die *Esc* Taste und tippe *run*. Wenn du die Pfeiltasten ← oder → drückst, sollte sich der Schläger bewegen!

Hast du es gesehen: Wir haben eine Funktion namens *movepaddle()* geschrieben. Das macht es später einfacher zu verstehen, welcher Code was tut.

### Die benutzten Befehle

````
function _update() -- Das wird 30 mal jede Sekunde aufgerufen.
              -- Hier wird alles verändert, was im Spiel passiert

function _draw() -- Das wird nach dem Aktualisieren aufgerufen.
              -- Hier zeichnen wir das Spiel

btn(b) -- Testet, ob der Knopfe gedrückt ist. Die Zahl b bedeutet das:
       -- 0 is ←, 1 is → , 2 is ↑ , 3 is ↓ , 4 is z and 5 is x

rectfill(x1,y1, x2,y2, col) -- Zeichnen ein Rechteck in der Farbe col
       -- x1,y1 sind die Koordinaten der Ecke oben links
       -- x2,x2 sind die Koordinaten der Ecke unten rechts
````

## Nun kommt der Ball

Drücke zweimal *Esc*, um in den Code Editor zurück zu gelangen.

Ergänze ein paar neue Variable im Kopf der Datei, damit wir wissen, wo der Ball erscheinen soll:

````
-- ball
ballx=64
bally=64
ballsize=3
ballxdir=5
ballydir=-3
````

Und dann ergänze das Folgende zur *_draw()* Funktion am Ende der Datei:

````
function _draw()
 -- Leere den Bildschirm
 rectfill(0,0, 128,128, 3)

 -- zeichne den Schläger
 rectfill(padx,pady, padx+padw,pady+padh, 15)

 -- draw the ball
 circfill(ballx,bally, ballsize, 15)
end
````

Drücke *Esc*, um aus dem Editor herauszukommen, tippe *run* und siehe, wie der Ball erscheint!

### Unsere neuen Befehle

````
circfill(x,y,size,col) -- Zeichne einen Kreis mit dem Mittelpunkt bei x,y
````

## Ein stillstehender Ball ist langweilig

Drücke *Esc*, bis du wieder in den Code Editor gelangst. Ergnze dann eine neue Funktion über der *_update()* Funktion:

````
function
 moveball()
 ballx+=ballxdir
 bally+=ballydir
end
````

Und dann rufe sie in *_update()* auf:

````
function _update()
 movepaddle()
 moveball()
end
````

*run* was du bisher hast, und du solltest einen Ball sehen, der oben rechts aus dem Bildschirm fliegt.

## Halte ihn auf dem Spielfeld

Der Ball muss oben und an den Seitenrändern des Bildschirms abprallen. Das ist nicht allzu schwierig -- wir müssen nur die X und Y Positionen des Balls prüfen.

Denke daran, dass die obere linke Ecke des Bildschirms 0,0 und die untere rechte Ecke 127,127 ist.

Um den Ball von den Seiten zurückprallen zu lassen, müssen wir nur das Vorzeichen der Richtung des Balls umdrehen -- Ist die Geschwindigkeit größer als Null, bewegt sich der Ball nach rechts & wenn die Geschwindigkeit kleiner als Null ist, bewegt sich der Ball nach links.

Mache ein cooles Geräusch für wenn der Ball die Bildschirmkante berührt; sowas wie das folgende funktioniert:

![bounce-sound](/uploads/2018/05/squashy/bounce-sound.jpg)

Füge eine neue Funktion nach dem Ende von *moveball()* hinzu:

````
function bounceball()
 -- left
 if ballx < ballsize then
  ballxdir=-ballxdir
  sfx(0)
end

-- right
 if ballx > 128-ballsize then
  ballxdir=-ballxdir
  sfx(0)
 end

-- top
 if bally < ballsize then
  ballydir=-ballydir
  sfx(0)
 end
end
````

Und dann rufe das in *_update()* auf:

````
function _update()
 movepaddle()
 bounceball()
 moveball()
end
````

*run* was du hast. Du solltest den Ball hoch und wieder runter hüpfen sehen, bis er unten aus dem Bildschirm fällt.

### Unser neuer Befehl

````
sfx(number) -- Spiele einen Klang
````

## Schlage den Ball

Herauszufinden, ob der Ball den Schläger berührt, ist der fummeligste Teil des ganzen Spiels, deshalb brauchst du jetzt etwas Geduld.

Wir müssen prüfen, ob die X Position des Balls innerhalb der Breite des Schlägers liegt und ob der Ball in den Schläger hineingeflogen ist.

Wir benutzen dafür das englische Wort *and* ("und" im Deutschen) in PICO-8.

Füge eine *bouncepaddle* Funktion hinter *bounceball* ein:

````
-- Lasse den Ball vom Schläger abprallen
function bouncepaddle()
 if ballx>=padx and
   ballx<=padx+padw and
   bally>pady then
  sfx(0)
  ballydir=-ballydir
 end
end
````

Wenn du magst, kannst du noch ein anderes Geräusch für wenn der Ball den Schläger trifft machen und diesen stattdessen abspielen!

Vergiss nicht, das ganze von *_update()* aus aufzurufen:

````
function _update()
 movepaddle()
 bounceball()
 bouncepaddle()
 moveball()
end
````

Wenn du dass mit *run* laufen lässt, solltest du den Ball auf dem Bildschirm halten können, indem du den Schläger bewegst. Er verschwindet allerdings immer noch, wenn er den unteren Rand trifft.

## Können wir unseren Ball wiederhaben?

Wenn der Ball unten aus dem Bildschirm fliegt, Müssen wir ihn wieder in die Mitte des Schirms legen. Wir sollten dabei eigentlich auch ein Leben verlieren -- dazu kommen wir später noch!

Füge diese Funktion nach *moveball()* ein:

````
function losedeadball()
 if bally>128 then
  sfx(3)
  bally=24
 end
end
````

Rufe sie in *_update()* auf;

````
function _update()
 movepaddle()
 bounceball()
 bouncepaddle()
 moveball()
 losedeadball()
end
````

Mache ein lustiges Geräusch für wenn er aus dem Bildschirm fällt. So etwas wie das hier funktioniert gut:

![loose-ball](/uploads/2018/05/squashy/looseball-sound.jpg)

Wenn du das mit *run* laufen lässt, solltest du den besten Teil des Spiels haben. Nun müssen wir noch folgendes ergänzen ...

## Punkte zählen!

Natürlich, weil wir ein Spiel haben, wollen wir auch den Highscore knacken! Wir brauchen eine Variable im Kopf des Programms:

````
score=0
````

Dann erhöhen wir den Punktestand (Englisch *score*) jedes Mal, wenn der Ball vom Schläger abprallt. Füge eine Zeile zur *bouncepaddle* Funktion hinzu:

````
-- Lasse den Ball vom Schläger abprallen
function bouncepaddle()
 if ballx>=padx and
   ballx<=padx+padw and
   bally>pady then
  sfx(0)
  score+=10 -- Erhöhe den Score bei einem Treffer! ballydir=-ballydir
 end
end
````

Dann schreibe den Score auf den Bildschirm, indem du eine Zeile in der *_draw()* Funktion ergänzt:

````
function _draw()
-- Leere den Schirm
 rectfill(0,0, 128,128, 3)

-- Schreibe den Score
 print(score, 12, 6, 15)

-- Zeichne den Schläger
 rectfill(padx,pady, padx+padw,pady+padh, 15)

-- Zeichne denn Ball
 circfill(ballx,bally,ballsize,15)
end
````

Lass das mit *run* laufen und "Bob ist dein Onkel" ;)

### Unsere neuen Befehle

````
print(message,x,y,col) -- Schreibe eine Nachricht auf den Schirm
      -- x,y sind unten links des ersten Buchstabens
````

## Herzen

Der nächste Puzzle-Stein ist es, die Anzahl Leben des Spielers zu begrenzen. Wir müssen ein *Sprite* (ein kleines Bild) anlegen, um ein Herz anzuzeigen, daher öffnen wir den Sprite Editor in PICO-8, um ein Sprite wie dieses anzulegen:

![heart-sprite.jpg](/uploads/2018/05/squashy/heart-sprite.jpg)

Merke dir in diesem Fall die Sprite Nummer 001!
Nun kannst du eine neue Variable im Kopf der Datei hinzufügen: *lives=3* und diesen Code zum Zeichnen in *_draw()* ergänzen:

````
function _draw()
-- Leere den Schirm
 rectfill(0,0, 128,128, 3)

-- Zeichne die Leben
 for i=1,lives do
  spr(004, 90+i*8, 4)
 end

-- Schreibe den Score
 print(score, 12, 6, 15)

-- Zeichne den Schläger
 rectfill(padx,pady, padx+padw,pady+padh, 15)

-- Zeichne denn Ball
 circfill(ballx,bally,ballsize,15)
end
````

Stelle sicher, dass die Zahl hinter *spr* die Nummer des Sprites ist, den du angelegt hast!

Das letzte Stück ist, ein Leben abzuziehen, wenn der Ball unten aus dem Bildschirm fliegt und das Spiel zu beenden, wenn der Spieler keine Leben mehr hat. Wir müssen die Funktion *losedeadball* etwas komplizierter machen - ändere sie wie folgt:

````
function losedeadball()
 if bally>128-ballsize then
  if lives>0 then -- Nächstes Leben
   sfx(3)
   bally=24
   lives-=1
  else
   -- Spiel vorbei
   ballydir=0
   ballxdir=0
   bally=64
  end
 end
end
````

Du kannst noch ein lustiges Geräusch für *Spiel vorbei* anlegen! Spiele es mit *sfx()* im Abschnitt *Spiel vorbei*.

### Die neuen Befehle

````
spr(number,x,y) -- Zeichne ein Sprite auf den Bildschirm mit oben links bei x,y
````
