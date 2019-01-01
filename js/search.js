/**
 */
jQuery(function ($) {

    var
        index = lunr(function () {
           this.field('title', {boost: 10});
           this.field('content');
           this.field('tags');
           this.ref('url');
        }),
        content = null;

    function fillIndex(data) {

        content = {};

        $.each(data, function () {
            content[this.url] = this;
            index.add({
                url: this.url,
                title: this.title,
                content: this.content,
                tags: this.tags
            });
        });
    }

    /**
     * @see http://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
     */
    function tpl(str, mapObj)
    {
        var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

        return str.replace(re, function(matched){
            return mapObj[matched.toLowerCase()];
        });
    }

    function parseDate(str) {
        var parts = str.split('.');
        // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
        return new Date(parts[2], parts[1]-1, parts[0]); // Note: months are 0-based
    }

    function decodeAmp(str) {
        return str.replace(/&amp;/g, '&');
    }

    function search(term) {

        var result,
            template = $('#result-item-template').html();

        result = index
            .search(term)
            .map(function (item) {
                return content[item.ref];
            });

        result.sort(function (a, b) {
            return parseDate(b.date) - new parseDate(a.date);
        });

        $('.container.page-content').addClass('hidden');
        $('.container.search-result').removeClass('hidden');

        if (result.length == 0) {
            $('#result-list').html('<p>kein Ergebnis</p>');
        }
        else {
            $('#result-list').html('');

            $.each(result, function (i) {
                $('#result-list').append(
                    tpl(template, {
                        '%title%': decodeAmp(this.title),
                        '%content%': decodeAmp(this.content),
                        '%date%': this.date,
                        '%url%': this.url
                    })
                );
            });
        }
    }

    function indexAndSearch(term) {

        if (content === null) {
            $.ajax({
                url: '/search.json',
                dataType: 'json',
                success: function (data) {

                    fillIndex(data);
                    search(term);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(textStatus);
                }
            });
        }
        else {
            search(term);
        }
    }

    /**
     * @see view-source:http://lunrjs.com/example/app.js
     */
    function debounce(fn) {
        var timeout;
        return function () {
            var args = Array.prototype.slice.call(arguments),
            ctx = this;

            clearTimeout(timeout)
            timeout = setTimeout(function () {
                fn.apply(ctx, args)
            }, 100);
        }
    }

    function hideSearchResult() {
        $('.container.page-content').removeClass('hidden');
        $('.container.search-result').addClass('hidden');
    }

    $('#search-field').bind('keyup', debounce(function () {
        var term = $(this).val();

        if (term.length < 2) {
            hideSearchResult();
            return;
        }
        indexAndSearch(term);
    }))

    $('#search-form').submit(function (e) {
        var term = $('#search-field').val();

        e.preventDefault();

        if (term.length < 2) {
            hideSearchResult();
            return;
        }
        indexAndSearch(term);
    });
});
