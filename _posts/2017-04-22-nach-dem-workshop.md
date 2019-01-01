---
title: Nach dem Physical Computing Workshop
author: olav
excerpt: >
    Am 18. bis 21. April veranstaltete ich einen Physical Computing Workshop im Deutschen Museum in Bonn. Mit
    10 Teens lernten wir den BBC Micro:bit und Python kennen.
published: 22.04.2017
layout: post
permalink: "/der-heisse-draht"
thumbnail: "/uploads/2017/pong-212.jpg"
categories:
  - Workshops
tags:
  - Kinder
  - BBC micro:bit
---
Die letzten drei Tage habe ich einen Ferienworkshop zu *Physical Computing* im Deutschen Museum in Bonn veranstaltet. Der Workshop diente der Berufsorientierung der teilnehmenden Schüler in den MINT-Fächern mit Hinblick auf Fächer wie Informationselektroniker/in oder ein Studium wie Internetbasierte Systeme oder E-Services. Gefördert wurde das Ganze im Rahmen des zdi-BSO-MINT-Programms.

Mit den 10 Teilnehmern haben wir den BBC Micro:bit und MicroPython erforscht. Das Ergebnis war ein über eine Funkverbindung vernetztes Spiel "Der heiße Draht" mit zentraler Rangliste. Weil zum Schluß noch etwas Zeit war, haben wir uns noch anderen Spielideen gewidmet. Dabei herausgekommen sind ein Würfel und ein objektorientiertes Pong-Spiel.

Wer das Pong-Spiel noch weiterentwickeln möchte; hier ist eine Idee zu **"Multi-Pong":** Auf mehreren Micro:bits läuft das Spiel. Jeder Micro:bit bekommt eine eindeutige Zahl zugewiesen. Am Ende jeder Runde schickt der Micro:bit ein Radio-Signal mit einer zufälligen Zahl an alle Micro:bits im Raum. Der Micro:bit mit dieser Zahl nimmt den Ball auf und zeigt eine Runde des Spiels an. Am Ende dieser Runde wählt dieser Micro:bit die Zufallszahl und schickt den Ball erneut an einen anderen Micro:bit.

Marian Mehling hatte bereits eine ähnliche Idee. [Seine Variante](https://www.hackster.io/marian-mehling/funk-pong-49cce5) ist aber in PXT entwickelt. Eine Version in MicroPython steht also noch aus ;)

Alle Programmquellen und das Workshop-Konzept liegen zur freien Nutzung [auf Github](https://github.com/tinkerthon/Der-heisse-Draht-2017).

<!-- Begin MailChimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-081711.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
	/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="//tinkerthon.us1.list-manage.com/subscribe/post?u=a7d32a98e524ac53109bab878&amp;id=f36f19c7ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h2>Möchtest du gelegentliche Ankündigungen und Projektideen erhalten? Melde dich zu unserem Newsletter an.</h2>
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">E-Mail Adresse  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
<div class="mc-field-group">
	<label for="mce-NAME">Name </label>
	<input type="text" value="" name="NAME" class="" id="mce-NAME">
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;"><input type="text" name="b_a7d32a98e524ac53109bab878_f36f19c7ef" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='NAME';ftypes[1]='text'; /*
 * Translated default messages for the $ validation plugin.
 * Locale: DE
 */
$.extend($.validator.messages, {
	required: "Dieses Feld ist ein Pflichtfeld.",
	maxlength: $.validator.format("Geben Sie bitte maximal {0} Zeichen ein."),
	minlength: $.validator.format("Geben Sie bitte mindestens {0} Zeichen ein."),
	rangelength: $.validator.format("Geben Sie bitte mindestens {0} und maximal {1} Zeichen ein."),
	email: "Geben Sie bitte eine gültige E-Mail Adresse ein.",
	url: "Geben Sie bitte eine gültige URL ein.",
	date: "Bitte geben Sie ein gültiges Datum ein.",
	number: "Geben Sie bitte eine Nummer ein.",
	digits: "Geben Sie bitte nur Ziffern ein.",
	equalTo: "Bitte denselben Wert wiederholen.",
	range: $.validator.format("Geben Sie bitten einen Wert zwischen {0} und {1}."),
	max: $.validator.format("Geben Sie bitte einen Wert kleiner oder gleich {0} ein."),
	min: $.validator.format("Geben Sie bitte einen Wert größer oder gleich {0} ein."),
	creditcard: "Geben Sie bitte ein gültige Kreditkarten-Nummer ein."
});}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->
