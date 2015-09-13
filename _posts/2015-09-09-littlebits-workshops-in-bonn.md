---
title: littleBits wird vier Jahre alt
author: olav
excerpt: >
  littleBits (die Firma) wurde am 1 September vier Jahre alt. Schon damals in 2011 war ich auf der Suche nach modularen Sets für meine Physical Computing Workshops. Es wird also höchste Zeit, Einsatzmöglichkeiten dieses genialen Modulsystems in Workshops und im Design physischer Produkte näher zu beleuchten.
layout: post
published: 09.09.2015
permalink: "/2015/09/littlebits-workshops-in-bonn/"
thumbnail: "/system/files/000/000/130/teaser/IMG_20150908_132917.jpg"
---
Am 15.10.2011 <a href="/2011/10/littlebits-kaufbar/">schrieb ich</a>, dass littlebits jetzt endlich kaufbar sei. Die Gründerin <a href="http://ayahbdeir.com/">Ayah Bdeir</a> hatte einen Monat vorher in New York ihre Firma <a href="http://littlebits.cc">littlebits</a> gegründet. Das Konzept zu den Bits hatte sie bereits ab 2008 entwickelt. Im selben Jahr <a href="http://www.moma.org/interactives/exhibitions/2011/talktome/objects/146378/">stellte sie</a> in der Gemeinschaftsausstellung <a href="http://www.moma.org/interactives/exhibitions/2011/talktome">talktome</a> zwischen dem Museum of Modern Art (MoMA) und der NY University, an der sie damals zum Thema "Technologie zur Identitätsstiftung" dozierte, einen Vorgänger der heutigen littleBits vor. Schon damals erfolgte die Kopplung der einzelnen Bits über Magnete.

<div class="thumbnail pull-left">
    <img src="/system/files/000/000/131/teaser/TTM_038a-large.jpg">
    <div class="caption">
        <p>Bild: Ted Ullrich</p>
    </div>
</div>

Die Module (sogenannte "Bits") machen Elektronik für Kinder, Designer und Künstler zugänglich. Durch das eingängliche Vokabular aus _Power_, _Eingängen_, _Verbindern_ und _Ausgängen_ und die  beliebige Kombinierbarkeit der Bits treten technische Probleme vollständig in den Hintergrund. Elektronik wird zu einem weiteren künstlerisches und kreativen Material und bereichert so das kreative Repertoir um eine neue Dimension an Ausdrucksmöglichkeiten.

2012 hielt Ayah dann ihren <a href="http://www.ted.com/talks/ayah_bdeir_building_blocks_that_blink_beep_and_teach">viel beachteten TED-Vortrag</a>, in dem sie ihr Konzept von Elektronik-Modulen als weiteren Baustoff in kreativen Prozessen vorstellte.

LittleBits sind von Anfang an Open Hardware. Alle <a href="https://github.com/littlebitselectronics/eagle-files">Schaltpläne und Platinenlayouts liken offen auf Github</a>. Das kommt nicht von ungefähr. Ayah Bdeir war eine der Initiatoren der Open Hardware Bewegung und des <a href="http://openhardwaresummit.org/">Open Hardware Summits</a>.

Seit 2012 ist viel passiert. Seit 2014 gibt es ein programmierbares Arduino-Bit. Im Juli desselben Jahres hat über das cloudBit auch das <a href="http://www.popularmechanics.com/technology/gadgets/a10948/introducing-cloudbit-17014023/">Internet der Dinge</a> Einzug in die stetig wachsende Welt der littleBits gehalten.

LittleBits ist ein faszinierendes System. Ich werde mich hier und in Workshops intensiv damit beschäftigen. Ich sehe es als gute Basis, um auch schon jungen Kinder im Grundschulalter spielerisch einen neuen Werkstoff an die Hand zu geben, mit dem sie ihren künstlerischen Kreationen mehr Ausdruck verleihen können. Für diese anstehenden Workshops habe ich mir erst einmal eine Grundausstattung, bestehend aus Basis- und Premiumkasten zugelegt. Hier ist deren Inhalt:

<table class="table table-striped">
    <thead>
        <tr>
            <th width="20%">Farbkodierte Funktionsgruppe</th>
            <th colspan="2">Bit</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th style="background-color:blue;color:white">Power</th>
            <td><img class="thumbnail" src="/system/files/000/000/132/teaser/power.jpg"></td>
            <td><h4>Stromversorgung</h4>
                Mit dem Stromversorguns-Bit kannst du eine 9-Volt-Batterie zur Versorgung deiner littleBits nutzen. Verbinde Batterie und Kabel und schalte das Bit ein. Für die einfachste Schaltung mit littleBits kannst du das Stromversorguns-Bit mit einer Leuchtdiode verbinden und damit zu strahlen beginnen.
            </td>
        </tr>   
        <tr>
            <th style="background-color:pink;color:white" rowspan="8">Sensoren</th>
            <td><img class="thumbnail" src="/system/files/000/000/133/teaser/dimmer.jpg"></td>
            <td><h4>Dimmer</h4>
                Mit dem Dimmer-Bit kannst du deine Kreationen mit einem einzigen Knopf steuern. Drehe ihn im Uhrzeigersinn und sende sein Signal an die folgenden Bits. Kombiniere ihn z.B. mit dem Vibrationsmotor und lasse ihn herumspringen.

                <p>Auf der littleBits-Seite findest du <a href="http://littlebits.cc/fridays-tips-tricks-10-ways-to-decorate-the-dimmer">Tipps</a> zur Nutzung des Dimmer-Bits.</p>
            </td>
        </tr>   
        <tr>
            <td><img class="thumbnail" src="/system/files/000/000/134/teaser/button.jpg"></td>
            <td><h4>Taster</h4>
            Der Taster ist klassisch, groß und gut federnd. Drücke ihn und erwecke deine Kreationen zum Leben. Verbinde ihn z.B. mit dem Summer und sende Signale in Morsecode.

            <p>Technisch gesehen verbindet der Taster den Signalpfad von seinem Eingang zu seinem Ausgang. Im nicht gedrückten Zustand wird der Ausgang von einem 1M-Widerstand auf Masse gezogen.</p>

            <p>Auf der littleBits-Seite findest du <a href="http://littlebits.cc/fridays-tips-tricks-buttons-switches">Tipps</a> zur Nutzung des Tasters.</p>
            </td>
        </tr>   
        <tr>
            <td><img class="thumbnail" src="/system/files/000/000/135/teaser/lightsensor.jpg"></td>
            <td><h4>Lichtfühler</h4>
            Der Lichtfühler misst die Helligkeit, die auf ihn fällt. Er hat zwei Betriebsarten: <em>Hell</em> und <em>Dunkel</em>. Bei <em>Hell</em> sendet er ein umso höheres Signal, je mehr Licht auf ihn fällt. Bei <em>Dunkel</em> verhält er sich genau anders herum. Du kannst die Empfindlichkeit des Bits mit den Schraubendreher einstellen. Benutze z.B: einen Bargraphen, um dem Bit bei der Arbeit zuzuschauen.

            <p>Auf der littleBits-Seite findest du <a href="http://littlebits.cc/fridays-tips-tricks-light-sensor-light-trigger">Tipps</a> zur Nutzung des Lichtfühlers.</p>
            </td>
        </tr>   
        <tr>
            <td><img class="thumbnail" src="/system/files/000/000/136/teaser/rollerswitch.jpg"></td>
            <td><h4>Microschalter</h4>
            Der Microschalter ist praktisch. Er hat einen kleinen Heben mit einem Rad und wird aktiviert, wenn etwas an dem Rad entlangrollt. Du kannst die Betriebsart des Microschalters ändern, so dass er das Ausgangssignal unterbricht, wenn er gedrückt ist. Baue z.B. ein Kühlschranklicht mit dem Microschalter.

            <p>Auf der littleBits-Seite findest du <a href="http://littlebits.cc/fridays-tips-tricks-the-roller-switch">Tipps</a> zur Nutzung des Microschalters.</p>
            </td>
        </tr>   
        <tr>
            <td><img class="thumbnail" src="/system/files/000/000/137/teaser/soundtrigger.jpg"></td>
            <td><h4>Lautstärke</h4>

            <p>Der Lautstärkesensor misst die Lautstärke im Raum und sende ein An-Signal, wenn eine bestimme Lautstärke überschritten ist. Du kannst diese Schwelle mit einem SChraibendreher einstellen. Kombiniere das Bit z.B. mit einer Leuchtdiode, um den Raum zu beleuchten, wenn du mit den Fingern schnippst.</p>

            <p>Technisch gesprochen enthält der Lautstärkesensor eom Elcretmicrofon, welches bei einem bestimmten Lautstärkepegel ein Ausgangssignal aktiviert. Das Ausgangssignal bleibt für 3s erhalten.</p>

            <p>Auf der littleBits-Seite findest du <a href="http://littlebits.cc/fridays-tips-tricks-the-sound-trigger-bit-2">Tipps</a> zur Nutzung des Lautstärkesensors.</p>
            </td>
        </tr>   
        <tr>
            <td><img class="thumbnail" src="/system/files/000/000/138/teaser/pressuresensor.jpg"></td>
            <td><h4>Drucksensor</h4>

            <p>Der Drucksensor wird durch Berührung aktiviert. Drücke die kleine Scheibe ein wenig und er wird aktiviert. Je mehr Druck du ausübst, desdo höher wird das ausgesandte Signal. Du kann das Bit z.B. vor einen Vibrationsmotor schalten und zusehen, wie er zittert.</p>

            <p>Auf der littleBits-Seite findest du <a href="http://littlebits.cc/fridays-tips-tricks-the-pressure-sensor">Tipps</a> zur Nutzung des Drucksensors.</p>
            </td>
        </tr>   
        <tr>
            <td><img class="thumbnail" src="/system/files/000/000/139/teaser/pulse.jpg"></td>
            <td><h4>Puls</h4>

            <p>Das Puls-Bit ist wie ein elektrischer Herzschlag. Es sendet einen Strom von kurzen An-Signalen. Du kannst die Impulse mit dem Schraubendreher schneller oder langsamer einstellen. Das Bit ist großartig, um Leuchtdioden blinken zu lassen.</p>

            <p>Auf der littleBits-Seite findest du <a href="http://littlebits.cc/tips-tricks-the-pulse-bit">Tipps</a> zur Nutzung des Puls-Bits.</p>
            </td>
        </tr>   
        <tr>
            <td><img class="thumbnail" src="/system/files/000/000/140/teaser/slidedimmer.jpg"></td>
            <td><h4>Lineardimmer</h4>

            <p>Du steuerst den Lineardimmer, in dem du seinen Heben von einem Ende des Bits zum anderen schiebst. Es funktioniert genau wie ein Lichtdimmer, den du vielleicht von zuhause kennst, oder wie ein Laustärkeregler in einem Tonstudio. Schalte z.B. eine Leuchtdiode dahinter, um einen Stimmungslampe zu bauen.</p>

            <p>Auf der littleBits-Seite findest du <a href="http://littlebits.cc/fridays-tips-tricks-the-slide-dimmer-and-dimmer-bits">Tipps</a> zur Nutzung des Lineardimmers.</p>
            </td>
        </tr>   
        <tr>
            <th style="background-color:orange;color:white">Verbindungen</th>
            <td><img class="thumbnail" src="/system/files/000/000/141/teaser/wire.jpg"></td>
            <td><h4>Draht, Y-Stücke</h4>

            <p>Das Draht-Bit macht genau was es sagt. Es lässt dich deine Bits räumlich trennen. Nutze es, wann immer du eine Kette von Bits unterbrechen musst, z.B. um ein Licht im Dach eines Modellhauses anzubringen.</p>
            </td>
        </tr>   
        <tr>
            <th style="background-color:green;color:white" rowspan="8">Aktoren</th>
            <td><img class="thumbnail" src="/system/files/000/000/142/teaser/brightled.jpg"></td>
            <td><h4>Helle Leuchtdiode</h4>

            <p>Die helle Leuchtdiode (oder kurz LED) ist ein kleines Modul mit einen gleißend hellen Licht. Nutze die helle LED, wenn du eine Menge weißes Licht brauchst.</p>

            <p>Auf der littleBits-Seite findest du <a href="http://littlebits.cc/fridays-tips-and-tricks-ways-to-diffuse-the-bright-led">Tipps</a> zur Nutzung der hellen Leuchtdiode.</p>
            </td>
        </tr>   
        <tr>
            <td><img class="thumbnail" src="/system/files/000/000/143/teaser/bargraph.jpg"></td>
            <td><h4>Balkenanzeige</h4>

            Die Balkenanzeige aus fünf LEDs ist eines der vielseitigsten Ausgabemodule. Die Leuchtdioden zeigen die am Modul ankommende Signalstärke an. Kombiniere sie mit einem Drucksensor, um einen Kraftmesser zu bauen.
            </td>
        </tr>   
        <tr>
            <td><img class="thumbnail" src="/system/files/000/000/144/teaser/buzzer.jpg"></td>
            <td><h4>Summer</h4>

            Der Summer ist wonach er klingt: Er macht ein nicht zu ignorierendes Geräusch wann immer ein aktives Eingangssignal bekommt. Du kannst damit eine Türklingel oder einen Alarm bauen.

            <p>Auf der littleBits-Seite findes du <a href="http://littlebits.cc/fridays-tips-tricks-the-buzzer">Tipps</a> zur Nutzung des Summers.</p>
            </td>
        </tr>   
        <tr>
            <td><img class="thumbnail" src="/system/files/000/000/145/teaser/dcmotor.jpg"></td>
            <td><h4>Gleichstrommotor</h4>

            Der Gleichstrommotor dreht seine Achse, wenn du ihm ein aktives Signal sendest. Mit einem eingebauten Schalter kannst du die Drehrichtung wechseln. Mit einem kleinen, beiliegenden Zusatzteil namens "MotorMate" kannst du leicht Räder, Papier, Pappe, Legos und viele weitere Materialien an den Motor anschließen. Damit kannst du Windmühlen, Autos, Hubschrauber und andere Dinge bauen.  

            <p>Auf der littleBits-Seite findes du <a href="http://littlebits.cc/tips-and-tricks-the-dc-motor">Tipps</a> zur Nutzung des Motors.</p>
            </td>
        </tr>   
        <tr>
            <td><img class="thumbnail" src="/system/files/000/000/146/teaser/servo.jpg"></td>
            <td><h4>Servomotor</h4>

            Das Servo-Bit ist sehr vielseitig. Es ist ein steuerbarer Motor, der hin- und herschwingen kann. Er hat zwei Betriebsarten. Bei "Drehen" bestimmt das Signal von anderen Modulen die Positon des Arms. Nutze z.B. einen Dimmer, um den Drehwinkel festzulegen. Bei "Schwingen" bewegt sich der Motor einmal hin und her. Die Stärke des EIngangssignals bestimmt, wie schnell die bewegung ist. Befestige eine Flagge am Arm, um einen Signalstand zu bauen!

            <p>Auf der littleBits-Seite findest du <a href="http://littlebits.cc/fridays-tips-and-tricks-servo">Tipps</a> zur Nutzung des Servomotors.</p>
            </td>
        </tr>   
        <tr>
            <td><img class="thumbnail" src="/system/files/000/000/147/teaser/fan.jpg"></td>
            <td><h4>Ventilator</h4>

            Das Ventilatormodul macht genau, was du dir vorstellst: Ein kleiner elektrischer Ventilator, angeschlossen an ein littleBits-Modul: Damit kannst du flatternde Bewegungen in deinen Werken erzeugen oder nur deinen Kopf kühlen.

            <p>Auf der littleBits-Seite findest du <a href="http://littlebits.cc/tips-tricks-the-fan-bit">Tipps</a> zur Nutzung des Ventilators.</p>
            </td>   
        <tr>
            <td><img class="thumbnail" src="/system/files/000/000/148/teaser/longled.jpg"></td>
            <td><h4>Verlängerte Leuchtdiode</h4>

            Die verlängerte LED ("Leuchtdiode") ist eine weitere Möglichkeit, Licht in deine Kreationen zu integrieren. Die eigentliche LED ist über einen biegsamen Draht mit dem Modul verbunden. Dadurch kannst du das Licht an interessante Orte bringen. Ein beliebter Trick ist, die LED in einen Schaumstoffball zu stecken und ihn damit zum Leuchten bringen.

            <p>Auf der littleBits-Seite findest du <a href="http://littlebits.cc/tips-tricks-led-bits">Tipps</a> zur Nutzung der verlängerten Leuchtdiode.</p>
            </td>
        </tr>   
        <tr>
            <td><img class="thumbnail" src="/system/files/000/000/149/teaser/vibrator.jpg"></td>
            <td><h4>Vibrationsmotor</h4>

            Der Vibrationsmotor ist sehr ähnlich zu den Ding, was dein Handy vibrieren lässt, wenn du einen Nachricht bekommst. Mit diesem Modul kannst alles vibrieren und summen lassen. Dabei ist auch ein kleines Teil namens "vibeSnap" mit dem du z.B. Papier. Alufolie oder Pfeifenreiniger mit dem Motor verbinden kannst.

            <p>Auf der littleBits-Seite findest du <a href="http://littlebits.cc/tips-tricks-vibration-motor">Tipps</a> zur Nutzung des Vibrationsmotors.</p>
            </td>
        </tr>   
    </tbody>
</table>

LittleBits hat eine umfangreiche Seite mit Anregungen für Projekte und Anleitungen für Workshopleiter. Meine Projekte haben dort natürlich auch einen <a href="http://littlebits.cc/users/tinkerthon" title="tinkerthon-Projekte mit littleBits">eigenen Bereich</a>.
