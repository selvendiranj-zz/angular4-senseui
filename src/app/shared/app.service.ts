// tslint:disable-next-line:max-file-line-count
import { Injectable } from '@angular/core';

@Injectable()
export class AppService
{
    private jasmine: any;

    public InitApp(): any
    {
        this.jasmine = {
            container: $('#container'),
            contentContainer: $('#content-container'),
            navbar: $('#navbar'),
            mainNav: $('#mainnav-container'),
            aside: $('#aside-container'),
            footer: $('#footer'),
            scrollTop: $('#scroll-top'),
            window: $(window),
            body: $('body'),
            bodyHtml: $('body, html'),
            document: $(document),
            screenSize: '', // return value xs, sm, md, lg
            isMobile: function (): any
            {
                return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
            }(),
            randomInt(min: any, max: any): any
            {
                return Math.floor(Math.random() * (max - min + 1) + min);
            },
            transition: function (): any
            {
                let thisBody = document.body || document.documentElement;
                let thisStyle = thisBody.style;
                let support = thisStyle.transition !== undefined || thisStyle.webkitTransition !== undefined;
                return support;
            }()
        };

        // attach jasmine to window object
        (window as any).jasmine = this.jasmine;

        // call app init methids
        this.InitSelectorCache();
        this.RemovePanel();
        this.ScrollToTop();
        this.Overlay();
        this.Notify();
        this.Check();
    }

    /* ========================================================================
     * SELECTOR CACHE v.1.0
     * -------------------------------------------------------------------------
     * ========================================================================
     * To improve performance and load time, you don't need to create a new variable to get main selector,
     * for the main selector has been cached and used in all of plugins, just need to call the variables.
     */

    public InitSelectorCache(): any
    {
        this.jasmine.window.on('load', function (): any
        {
            // Activate the Bootstrap tooltips
            let tooltip = $('.add-tooltip');
            if (tooltip.length) { tooltip.tooltip(); }

            let popover = $('.add-popover');
            if (popover.length) { popover.popover(); }

            // STYLEABLE SCROLLBARS
            // =================================================================
            // Require nanoScroller
            // http://jamesflorentino.github.io/nanoScrollerJS/
            // =================================================================
            let nano = $('.nano');
            if (nano.length)
            {
                nano.nanoScroller({
                    preventPageScrolling: true
                });
            }

            // Update nancoscroller
            $('#navbar-container .navbar-top-links').on('shown.bs.dropdown', '.dropdown', function (): any
            {
                $(this).find('.nano').nanoScroller({
                    preventPageScrolling: true
                });
            });

            this.jasmine.body.addClass('page-effect');
        });
    }

    /* ========================================================================
     * PANEL REMOVAL v1.0
     * -------------------------------------------------------------------------
     * Optional Font Icon : By Font Awesome
     * http://fortawesome.github.io/Font-Awesome/
     * ========================================================================*/
    public RemovePanel(): any
    {
        this.jasmine.window.on('load', function (): any
        {
            let closebtn = $('[data-dismiss="panel"]');

            if (closebtn.length)
            {
                closebtn.one('click', function (e: any): any
                {
                    e.preventDefault();
                    let el = $(this).parents('.panel');

                    el.addClass('remove').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
                        function (e2: any): any
                        {
                            if (e2.originalEvent.propertyName === 'opacity')
                            {
                                el.remove();
                            }
                        });
                });
            }
        });

    }

    /* ========================================================================
     * SCROLL TO TOP BUTTON v1.0
     * -------------------------------------------------------------------------
     * Optional Font Icon : By Font Awesome
     * http://fortawesome.github.io/Font-Awesome/
     * ========================================================================*/
    public ScrollToTop(): any
    {
        this.jasmine.window.one('load', function (): any
        {
            if (this.jasmine.scrollTop.length && !this.jasmine.isMobile)
            {
                let isVisible = true;
                let offsetTop = 250;

                this.jasmine.window.scroll(function (): any
                {
                    if (this.jasmine.window.scrollTop() > offsetTop && !isVisible)
                    {
                        this.jasmine.navbar.addClass('shadow');
                        this.jasmine.scrollTop.addClass('in');
                        isVisible = true;
                    } else if (this.jasmine.window.scrollTop() < offsetTop && isVisible)
                    {
                        this.jasmine.navbar.removeClass('shadow');
                        this.jasmine.scrollTop.removeClass('in');
                        isVisible = false;
                    }
                });

                this.jasmine.scrollTop.on('click', function (e: any): any
                {
                    e.preventDefault();

                    this.jasmine.bodyHtml.animate({ scrollTop: 0 }, 500);
                });

            }
        });
    }

    /* ========================================================================
     * JASMINE OVERLAY v1.0
     * -------------------------------------------------------------------------
     * Optional Font Icon : By Font Awesome
     * http://fortawesome.github.io/Font-Awesome/
     * ========================================================================*/
    public Overlay(): any
    {
        let defaults = {
            displayIcon: true,
            // DESC	 		: Should we display the icon or not.
            // VALUE	 	: true or false
            // TYPE 	 	: Boolean
            iconColor: 'text-dark',
            // DESC	 		: The color of the icon..
            // VALUE	 	: text-light || text-primary || text-info || text-success || text-warning || text-danger || text-mint || text-purple || text-pink || text-dark
            // TYPE 	 	: String
            iconClass: 'fa fa-refresh fa-spin fa-2x',
            // DESC  		: Class name of the font awesome icons", Currently we use font-awesome for default value.
            // VALUE 		: (Icon Class Name)
            // TYPE			: String
            title: '',
            // DESC			: Overlay title
            // TYPE			: String
            desc: ''
            // DESC			: Descrition
            // TYPE			: String
        };

        let uID = function (): any
        {
            // tslint:disable-next-line:no-bitwise
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };

        let methods: any = {
            show(el: any): any
            {
                let target = $(el.attr('data-target'));
                let ovId = 'jasmine-overlay-' + uID() + uID() + '-' + uID();
                let panelOv = $('<div id="' + ovId + '" class="panel-overlay"></div>');

                el.prop('disabled', true)
                    .data('jasmineOverlay', ovId);
                target.addClass('panel-overlay-wrap');
                panelOv.appendTo(target)
                    .html(el.data('overlayTemplate'));
                return null;
            },
            hide(el: any): any
            {
                let target = $(el.attr('data-target'));
                let boxLoad = $('#' + el.data('jasmineOverlay'));

                if (boxLoad.length)
                {
                    el.prop('disabled', false);
                    target.removeClass('panel-overlay-wrap');
                    boxLoad.hide()
                        .remove();
                }
                return null;
            }
        };

        let loadBox = function (el: any, options: any): any
        {
            if (el.data('overlayTemplate'))
            {
                return null;
            }
            let opt = $.extend({}, defaults, options);
            let icon = (opt.displayIcon) ? '<span class="panel-overlay-icon ' + opt.iconColor +
                '"><i class="' + opt.iconClass +
                '"></i></span>' : '';
            el.data('overlayTemplate', '<div class="panel-overlay-content pad-all unselectable">' + icon +
                '<h4 class="panel-overlay-title">' + opt.title + '</h4><p>' + opt.desc + '</p></div>');

            return null;
        };

        $.fn.jasmineOverlay = function (method: any): any
        {
            if (methods[method])
            {
                return methods[method](this);
            } else if (typeof method === 'object' || !method)
            {
                return this.each(function (): any
                {
                    loadBox($(this), method);
                });
            }
            return null;
        };
    }

    /* ========================================================================
     * JASMINE NOTIFICATION v1.1
     * -------------------------------------------------------------------------
     * ========================================================================*/
    public Notify(): any
    {
        let pageHolder: any;
        let floatContainer: any = {};
        let notyContainer: any;
        let addNew = false;

        $.jasmineNoty = function (options: any): any
        {
            let defaults: any = {
                type: 'primary',
                // DESC     : Specify style for the alerts.
                // VALUE    : primary || info || success || warning || danger || mint || purple || pink ||  dark
                // TYPE     : String
                icon: '',
                // DESC     : Icon class names
                // VALUE    : (Icon Class Name)
                // TYPE     : String
                title: '',
                // VALUE    : (The title of the alert)
                // TYPE     : String
                message: '',
                // VALUE    : (Message of the alert.)
                // TYPE     : String
                closeBtn: true,
                // VALUE    : Show or hide the close button.
                // TYPE     : Boolean
                container: 'page',
                // DESC     : This option is particularly useful in that it allows you to position the notification.
                // VALUE    : page || floating ||  "specified target name"
                // TYPE     : STRING
                floating: {
                    position: 'top-right',
                    // Floating position.
                    // Currently only supports "top-right". We will make further development for the next version.
                    animationIn: 'jellyIn',
                    // Please use the animated class name from animate.css
                    animationOut: 'fadeOut'
                    // Please use the animated class name from animate.css
                },

                html: null,
                // Insert HTML into the notification.  If false, jQuery's text method will be used to insert content into the DOM.

                focus: true,
                // Scroll to the notification
                timer: 0
                // DESC     : To enable the "auto close" alerts, please specify the time to show the alert before it closed.
                // VALUE    : Value is in milliseconds. (0 to disable the autoclose.)
                // TYPE     : Number
            };

            let opt = $.extend({}, defaults, options);
            let el = $('<div class="alert-wrap"></div>');
            let iconTemplate = function (): any
            {
                let icon = '';
                if (options && options.icon)
                {
                    icon =
                        '<div class="media-left"><span class="icon-wrap icon-wrap-xs icon-circle alert-icon"><i class="' +
                        opt.icon + '"></i></span></div>';
                }
                return icon;
            };

            let alertTimer: any;
            let template = function (): any
            {
                let clsBtn = opt.closeBtn ?
                    '<button class="close" type="button"><i class="fa fa-times-circle"></i></button>' : '';
                let defTemplate = '<div class="alert alert-' + opt.type
                    + '" role="alert">' + clsBtn + '<div class="media">';
                if (!opt.html)
                {
                    return defTemplate + iconTemplate() +
                        '<div class="media-body"><h4 class="alert-title">' + opt.title +
                        '</h4><p class="alert-message">' + opt.message + '</p></div></div>';
                }
                return defTemplate + opt.html + '</div></div>';
            }();

            let closeAlert = function (e: any): any
            {
                if (opt.container === 'floating' && opt.floating.animationOut)
                {
                    el.removeClass(opt.floating.animationIn).addClass(opt.floating.animationOut);
                    if (!this.jasmine.transition)
                    {
                        el.remove();
                    }
                }

                el.removeClass('in').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
                    function (e2: any): any
                    {
                        if (e2.originalEvent.propertyName === 'max-height')
                        {
                            el.remove();
                        }
                    });
                clearInterval(alertTimer);
                return null;
            };
            let focusElement = function (pos: any): any
            {
                this.jasmine.bodyHtml.animate({
                    scrollTop: pos
                }, 300, function (): any
                    {
                        el.addClass('in');
                    });
            };
            let init = function (): any
            {
                if (opt.container === 'page')
                {
                    if (!pageHolder)
                    {
                        pageHolder = $('<div id="page-alert"></div>');
                        this.jasmine.contentContainer.prepend(pageHolder);
                    }

                    notyContainer = pageHolder;
                    if (opt.focus) { focusElement(0); }

                } else if (opt.container === 'floating')
                {
                    if (!floatContainer[opt.floating.position])
                    {
                        floatContainer[opt.floating.position] = $('<div id="floating-' + opt.floating.position +
                            '" class="floating-container"></div>');
                        this.jasmine.container.append(floatContainer[opt.floating.position]);
                    }

                    notyContainer = floatContainer[opt.floating.position];

                    if (opt.floating.animationIn) { el.addClass('in animated ' + opt.floating.animationIn); }
                    opt.focus = false;
                } else
                {
                    let $ct = $(opt.container);
                    let $panelct = $ct.children('.panel-alert');
                    let $panelhd = $ct.children('.panel-heading');

                    if (!$ct.length)
                    {
                        addNew = false;
                        return false;
                    }

                    if (!$panelct.length)
                    {
                        notyContainer = $('<div class="panel-alert"></div>');
                        if ($panelhd.length)
                        {
                            $panelhd.after(notyContainer);
                        } else
                        {
                            $ct.prepend(notyContainer);
                        }
                    } else
                    {
                        notyContainer = $panelct;
                    }

                    if (opt.focus)
                    {
                        focusElement($ct.offset().top - 30);
                    }
                }
                addNew = true;
                return false;
            }();

            if (addNew)
            {
                notyContainer.append(el.html(template));
                el.find('[data-dismiss="noty"]').one('click', closeAlert);
                if (opt.closeBtn) { el.find('.close').one('click', closeAlert); }
                if (opt.timer > 0) { alertTimer = setInterval(closeAlert, opt.timer); }
                if (!opt.focus)
                {
                    let addIn = setInterval(function (): any
                    {
                        el.addClass('in');
                        clearInterval(addIn);
                    }, 200);
                }
            }
        };
    }

    /* ========================================================================
     * JASMINE CHECK v1.1
     * -------------------------------------------------------------------------
     * ========================================================================*/
    public Check(): any
    {
        let allFormEl;
        let formElement = function (el: any): any
        {
            if (el.data('jasmine-check'))
            {
                return;
            } else
            {
                el.data('jasmine-check', true);
                if (el.text().trim().length)
                {
                    el.addClass('form-text');
                } else
                {
                    el.removeClass('form-text');
                }
            }

            let input = el.find('input')[0];
            let groupName = input.name;
            let $groupInput = function (): any
            {
                if (input.type === 'radio' && groupName)
                {
                    return $('.form-radio')
                        .not(el)
                        .find('input')
                        .filter('input[name=' + groupName + ']')
                        .parent();
                } else
                {
                    return false;
                }
            }();
            let changed = function (): any
            {
                if (input.type === 'radio' && $groupInput.length)
                {
                    $groupInput.each(function (): any
                    {
                        let $gi = $(this);
                        if ($gi.hasClass('active')) { $gi.trigger('jasmine.ch.unchecked'); }
                        $gi.removeClass('active');
                    });
                }

                if (input.checked)
                {
                    el.addClass('active')
                        .trigger('jasmine.ch.checked');
                } else
                {
                    el.removeClass('active')
                        .trigger('jasmine.ch.unchecked');
                }
            };

            if (input.checked)
            {
                el.addClass('active');
            } else
            {
                el.removeClass('active');
            }

            $(input).on('change', changed);
        };

        let methods: any = {
            isChecked(): any
            {
                return this[0].checked;
            },
            toggle(): any
            {
                this[0].checked = !this[0].checked;
                this.trigger('change');
                return null;
            },
            toggleOn(): any
            {
                if (!this[0].checked)
                {
                    this[0].checked = true;
                    this.trigger('change');
                }
                return null;
            },
            toggleOff(): any
            {
                if (this[0].checked && this[0].type === 'checkbox')
                {
                    this[0].checked = false;
                    this.trigger('change');
                }
                return null;
            }
        };

        $.fn.jasmineCheck = function (method: any): any
        {
            let chk = false;
            this.each(function (): any
            {
                if (methods[method])
                {
                    chk = methods[method].apply($(this)
                        .find('input'), Array.prototype.slice.call(arguments, 1));
                } else if (typeof method === 'object' || !method)
                {
                    formElement($(this));
                    ;
                }
            });
            return chk;
        };

        this.jasmine.document.ready(function (): any
        {
            allFormEl = $('.form-checkbox, .form-radio');
            if (allFormEl.length) { allFormEl.jasmineCheck(); }
        });

        this.jasmine.document.on('change', '.btn-file :file', function (): any
        {
            let input = $(this);
            let numFiles = input.get(0)
                .files ? input.get(0)
                    .files.length : 1;
            let label = input.val()
                .replace(/\\/g, '/')
                .replace(/.*\//, '');
            let size = function (): any
            {
                try
                {
                    return input[0].files[0].size;
                } catch (err)
                {
                    return 'Nan';
                }
            }();
            let fileSize = function (): any
            {
                if (size === 'Nan')
                {
                    return 'Unknown';
                }
                let rSize = Math.floor(Math.log(size) / Math.log(1024));
                let mathPow: any = (size / Math.pow(1024, rSize));
                return mathPow.toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][rSize];
            }();

            input.trigger('fileselect', [numFiles, label, fileSize]);
        });
    }
}
