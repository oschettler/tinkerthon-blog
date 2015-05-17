---
layout: post
status: publish
published: true
title: Quellcode f&uuml;r Lilypad-Sonne
author:
  display_name: olav
  login: olav
  email: olav@schettler.net
  url: ''
author_login: olav
author_email: olav@schettler.net
wordpress_id: 55
wordpress_url: http://tinkerthon.de/?p=55
date: '2010-07-12 19:55:03 +0200'
date_gmt: '2010-07-12 17:55:03 +0200'
categories:
- Workshops
tags:
- Bericht
- Arduino Lilypad
- Source Code
comments: []
---
<p>OK, Version 1 meiner Lilypad-Sonne reagiert noch nicht auf ihre Umwelt, aber durch die zuf&auml;llige Variation von Richtung und L&auml;nge der Blink-Sequenzen ist das Ganze schon recht abwechslungsreich. Hier ist der Quellcode:</p>
<pre>&#47;**<br />
 * Control some LEDs.<br />
 * The LEDs are sequenced in random counts and random directions<br />
 *&#47;<br />
&#47;&#47; Number of connected LEDs = count of entries in array 'led'<br />
#define N 10<br />
&#47;&#47; Pin numbers of the connected LEDs. Following the digital pins,<br />
&#47;&#47; we also have LEDs on analog pins a1 = 15, a3 = 17, a4 = 18<br />
int led[] = { 2, 4, 5, 7, 9, 11, 13, 15, 17, 18 };<br />
&#47;&#47; The currently lit LED from 0 through N - 1<br />
int cur = 0;</p>
<p>&#47;**<br />
 * The standard setup routine.<br />
 * Setup serial to facilitate debugging<br />
 * and set all pins in array 'led' as output.<br />
 *&#47;<br />
void<br />
setup() {<br />
  Serial.begin(9600);<br />
  for (int i = 0; i < N; i++) {<br />
    pinMode(led[i], OUTPUT);<br />
  }<br />
}</p>
<p>&#47;**<br />
 * Run a sequence of 'len' steps in direction 'dir'<br />
 * The values of len, dir, cur, and i are reflected on the serial output<br />
 *&#47;<br />
void<br />
seq(int len, int dir) {<br />
  Serial.println(len);<br />
  Serial.println(dir);<br />
  for (int i = 0; i < len; i++) {<br />
    Serial.print(i);<br />
    Serial.print(' ');<br />
    &#47;&#47; Make sure cur is never greater than N - 1<br />
    cur = (cur + dir) % N;<br />
    &#47;&#47; If cur becomes negative, wrap around<br />
    if (cur < 0) {<br />
      cur = N + cur;<br />
    }<br />
    Serial.println(cur);<br />
    &#47;&#47; Blink the current LED<br />
    digitalWrite(led[cur], HIGH);<br />
    delay(300);<br />
    digitalWrite(led[cur], LOW);<br />
  }<br />
  Serial.println();<br />
}</p>
<p>&#47;**<br />
 * The standard loop.<br />
 * Run a sequence with random LED count and directions<br />
 *&#47;<br />
void<br />
loop() {<br />
  int dir = random(2) ? 1 : -1;<br />
  seq(random(5, 10), dir);<br />
}<&#47;pre></p>
