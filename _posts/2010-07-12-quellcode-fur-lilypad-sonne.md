---
title: Quellcode für Lilypad-Sonne
author: olav
layout: post
permalink: /2010/07/quellcode-fur-lilypad-sonne/
aktt_notify_twitter:
  - no
categories:
  - Workshops
tags:
  - Arduino Lilypad
  - Bericht
  - Source Code
---
OK, Version 1 meiner Lilypad-Sonne reagiert noch nicht auf ihre Umwelt, aber durch die zufällige Variation von Richtung und Länge der Blink-Sequenzen ist das Ganze schon recht abwechslungsreich. Hier ist der Quellcode:

<pre>/**
 * Control some LEDs.
 * The LEDs are sequenced in random counts and random directions
 */
// Number of connected LEDs = count of entries in array 'led'
#define N 10
// Pin numbers of the connected LEDs. Following the digital pins,
// we also have LEDs on analog pins a1 = 15, a3 = 17, a4 = 18
int led[] = { 2, 4, 5, 7, 9, 11, 13, 15, 17, 18 };
// The currently lit LED from 0 through N - 1
int cur = 0;

/**
 * The standard setup routine.
 * Setup serial to facilitate debugging
 * and set all pins in array 'led' as output.
 */
void
setup() {
  Serial.begin(9600);
  for (int i = 0; i &lt; N; i++) {
    pinMode(led[i], OUTPUT);
  }
}

/**
 * Run a sequence of 'len' steps in direction 'dir'
 * The values of len, dir, cur, and i are reflected on the serial output
 */
void
seq(int len, int dir) {
  Serial.println(len);
  Serial.println(dir);
  for (int i = 0; i &lt; len; i++) {
    Serial.print(i);
    Serial.print(' ');
    // Make sure cur is never greater than N - 1
    cur = (cur + dir) % N;
    // If cur becomes negative, wrap around
    if (cur &lt; 0) {
      cur = N + cur;
    }
    Serial.println(cur);
    // Blink the current LED
    digitalWrite(led[cur], HIGH);
    delay(300);
    digitalWrite(led[cur], LOW);
  }
  Serial.println();
}

/**
 * The standard loop.
 * Run a sequence with random LED count and directions
 */
void
loop() {
  int dir = random(2) ? 1 : -1;
  seq(random(5, 10), dir);
}</pre>