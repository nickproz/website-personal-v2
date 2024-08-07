$(document).ready(function() {
    $('body')
        .css('visibility', 'visible')
        .hide()
        .fadeIn('fast');
}),
    $(document).ready(function() {
        $('.experience-tile').on('click', function() {
            var e =
                '#' +
                $(this)
                    .attr('id')
                    .replace('-tile', '');
            $(e).modal('show');
        });
    }),
    $(document).ready(function() {
        var e = $('.nav-link-container'),
            n = 'nav-active',
            a = '.fade-in-block',
            i = ['#home', '#about', '#experience', '#projects', '#contact'],
            o = function() {
                var e = window.location.hash;
                ('' !== e && i.indexOf(e) !== -1) || (window.location.hash = 'home');
            },
            t = function(e) {
                var n;
                (n = e ? i[e - 1] : window.location.hash), c(n), l(n);
            },
            c = function(a) {
                if (i.indexOf(a) >= 0) {
                    e.removeClass(n);
                    var o = "a[href='" + a + "']";
                    $(o)
                        .parent()
                        .addClass(n);
                }
            },
            l = function(e) {
                var n = $(e.replace('#', '.')),
                    i = n.find(a);
                i.length > 0 &&
                    '0' === $(i[0]).css('opacity') &&
                    i.each(function(e) {
                        $(this)
                            .delay(300 * e)
                            .animate({ opacity: '1' }, 1e3);
                    });
            };
        !(function() {
            o(), t();
        })(),
            $('#fullpage').fullpage({
                anchors: ['home', 'about', 'experience', 'projects', 'contact'],
                menu: '#menu',
                fixedElements: '',
                verticalCentered: !1,
                autoScrolling: !1,
                onLeave: function(e, n) {
                    t(n);
                }
            });
    });
