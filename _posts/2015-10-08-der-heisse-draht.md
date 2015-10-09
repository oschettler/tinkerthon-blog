---
title: Physical Computing für Kinder
author: olav
excerpt: >
    Kinder lernen moderne Medien oft nur als
    Konsumenten kennen. In unserem zweitägigen
    Workshop wollen wir mit den 8-12-jährigen
    Teilnehmern erleben, dass moderne Elektronik
    auch ein spannendes Material für eigene
    kreative Basteleien sein kann.
published: 05.10.2015
layout: post
permalink: /der-heisse-draht
thumbnail: "/system/files/000/000/130/teaser/IMG_20150908_132917.jpg"
categories:
  - Workshops
---
# Physical Computing - "Der heiße Draht"

Gestern und heute (8. bis 9. Oktober 2015) war es wieder soweit. Diesmal sogar mit 10 Kindern haben wir im Rahmen eines Ferienworkshops im Deutschen Museum in Bonn wieder ein elektronisches Spiel gebaut.

Nach ein paar Lötübungen haben Alexander, Constantin, Fabian, Finn, Hannah, Henrik, Julius, Tameo, Tilman und Yannick gestern die Platine mit dem PICAXE-Microcontroller aufgebaut, das Spiel zusammengeleimt und damit erste kleine Wettkämpfe veranstaltet. Zur Unterstützung diente uns ein einfacher Stromkreis mit LED zur Anzeige der Berührungen und ein Handy als Stoppuhr.

Der Aufbau der Platinen hat wieder bei allen Kindern problemlos geklappt. Lediglich bei zwei der Kinder waren die LEDs nicht ganz dicht auf die Platine gelötet. Beim nachträglichen RUnterdrücken lösten sich dann die Kuperbahnen um die LEDs ab. Wir haben statt eines Reparaturversuches lieber komplett neue  Platinen bestückt.

Heute ging es an die Programmierung. Ich hatte vor, die neue, Blockly-basierte Programmiersoftware zu verwenden und hatte diese auf allen unseren Laptops installiert. Beim Test zeigte sich leider, dass die Software auch auf den Windows-XP-basierenden Laptops zwar lief, aber beim Aufruf des Blockly-Teils eine kryptische Fehlermeldung warf. Also mussten die Kinder heute doch in BASIC programmieren. Bei den einfacheren Beispielprogrammen ist das auch kein Problem. Für die komplexeren Spielprogramme mit Schleifen, paralleler Programmausführung, Variablen und Bedingungen reicht dann aber ein einzelner Tag nicht zur Einführung.

Wenn ihr zuhause mit den Platinen weiterprogrammieren wollt, installiert euch in jedem Fall die [separate Blockly-App](http://www.picaxe.com/Software/PICAXE/Blockly-for-PICAXE/). Damit geht die PICAXE-Programmierung so einfach wie mit [MIT Scratch](https://scratch.mit.edu/), was einige der Kinder schon aus der Informatik-AG in ihrer Schule kannten. Der [Standard-Editor](http://www.picaxe.com/Software/PICAXE/PICAXE-Editor-6/) enthält jetzt zwar auch eine Blockly-Option. Die Software ist aber deutlich zu überladen und unübersichtlich.      

Hier sind noch weitere *Materialien zum Workshop:*

* Kostenlose Programmiersoftware für [PICAXE Microcontroller](http://www.picaxe.com/Software/). 
* [Beispielprogramme](https://github.com/tinkerthon/Der-heisse-Draht)
* Weitere PICAXE-Projektideen bei [PICAXE.com](http://www.picaxe.com/Project-Gallery) und [Instructables](http://www.instructables.com/howto/picaxe/)
* [Deutscher Anbieter](http://www.picaxe-shop.de/) von PICAXE-Microcontrollern

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
