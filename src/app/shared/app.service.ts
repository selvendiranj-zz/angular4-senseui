// tslint:disable-next-line:max-file-line-count
import { Injectable } from '@angular/core';
import { Senseui } from './senseui';

@Injectable()
export class AppService
{
    private senseui: Senseui;

    public constructor(senseui: Senseui)
    {
        this.senseui = senseui;
    }
    public InitApp(): any
    {
        this.senseui.InitSenseui();
        // attach jasmine to window object
        (window as any).jasmine = this.senseui;

        // call app init methids
        try { this.InitSelectorCache(this); } catch (ex) { console.log(); }
        try { this.RemovePanel(this); } catch (ex) { console.log(); }
        try { this.ScrollToTop(this); } catch (ex) { console.log(); }
        try { this.Overlay(this); } catch (ex) { console.log(); }
        try { this.Notify(this); } catch (ex) { console.log(); }
        try { this.Check(this); } catch (ex) { console.log(); }
        try { this.Popover(this); } catch (ex) { console.log(); }
        try { this.InitMainnav(this); } catch (ex) { console.log(); }
        try { this.InitAsidebar(this); } catch (ex) { console.log(); }
        try { this.InitLangSelector(this); } catch (ex) { console.log(); }
        try { this.InitAffix(this); } catch (ex) { console.log(); }
        try { this.InitProfile(this); } catch (ex) { console.log(); }
        try { this.SetUserOptions(this); } catch (ex) { console.log(); }
    }

    /* ========================================================================
     * SELECTOR CACHE v.1.0
     * -------------------------------------------------------------------------
     * ========================================================================
     * To improve performance and load time, you don't need to create a new variable to get main selector,
     * for the main selector has been cached and used in all of plugins, just need to call the variables.
     */

    public InitSelectorCache(_this: AppService): any
    {
        _this.senseui.window.on('load', function (): any
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
            $('#navbar-container .navbar-top-links').on('shown.bs.dropdown', '.dropdown', function (event: JQueryEventObject): any
            {
                $(this).find('.nano').nanoScroller({
                    preventPageScrolling: true
                });
            });

            _this.senseui.body.addClass('page-effect');
        });
    }

    /* ========================================================================
     * PANEL REMOVAL v1.0
     * -------------------------------------------------------------------------
     * Optional Font Icon : By Font Awesome
     * http://fortawesome.github.io/Font-Awesome/
     * ========================================================================*/
    public RemovePanel(_this: AppService): any
    {
        _this.senseui.window.on('load', function (): any
        {
            let closebtn = $('[data-dismiss="panel"]');

            if (closebtn.length)
            {
                closebtn.one('click', function (e: any): any
                {
                    e.preventDefault();
                    let el = $(e.currentTarget).parents('.panel');

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
    public ScrollToTop(_this: AppService): any
    {
        _this.senseui.window.on('load', function (): any
        {
            if (_this.senseui.scrollTop.length && !_this.senseui.isMobile)
            {
                let isVisible = true;
                let offsetTop = 250;

                _this.senseui.window.scroll(function (): any
                {
                    if (_this.senseui.window.scrollTop() > offsetTop && !isVisible)
                    {
                        _this.senseui.navbar.addClass('shadow');
                        _this.senseui.scrollTop.addClass('in');
                        isVisible = true;
                    } else if (_this.senseui.window.scrollTop() < offsetTop && isVisible)
                    {
                        _this.senseui.navbar.removeClass('shadow');
                        _this.senseui.scrollTop.removeClass('in');
                        isVisible = false;
                    }
                });

                _this.senseui.scrollTop.on('click', function (e: any): any
                {
                    e.preventDefault();

                    _this.senseui.bodyHtml.animate({ scrollTop: 0 }, 500);
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
    public Overlay(_this: AppService): any
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

                el.prop('disabled', true).data('jasmineOverlay', ovId);
                target.addClass('panel-overlay-wrap');
                panelOv.appendTo(target).html(el.data('overlayTemplate'));
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
                    boxLoad.hide().remove();
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
            }
            // tslint:disable-next-line:one-line
            else if (typeof method === 'object' || !method)
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
    public Notify(_this: AppService): any
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
                    if (!_this.senseui.transition)
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
                _this.senseui.bodyHtml.animate({
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
                        _this.senseui.contentContainer.prepend(pageHolder);
                    }

                    notyContainer = pageHolder;
                    if (opt.focus) { focusElement(0); }

                } else if (opt.container === 'floating')
                {
                    if (!floatContainer[opt.floating.position])
                    {
                        floatContainer[opt.floating.position] = $('<div id="floating-' + opt.floating.position +
                            '" class="floating-container"></div>');
                        _this.senseui.container.append(floatContainer[opt.floating.position]);
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
    public Check(_this: AppService): any
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
                    $groupInput.each(function (event: JQueryEventObject): any
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
                return this.checked;
            },
            toggle(): any
            {
                this.checked = !this.checked;
                this.trigger('change');
                return null;
            },
            toggleOn(): any
            {
                if (!this.checked)
                {
                    this.checked = true;
                    this.trigger('change');
                }
                return null;
            },
            toggleOff(): any
            {
                if (this.checked && this.type === 'checkbox')
                {
                    this.checked = false;
                    this.trigger('change');
                }
                return null;
            }
        };

        $.fn.jasmineCheck = function (method: any): any
        {
            let chk = false;
            this.each(function (event: JQueryEventObject): any
            {
                if (methods[method])
                {
                    chk = methods[method].apply($(this).find('input'), Array.prototype.slice.call(arguments, 1));
                } else if (typeof method === 'object' || !method)
                {
                    formElement($(this));
                }
            });
            return chk;
        };

        _this.senseui.document.ready(function (): any
        {
            allFormEl = $('.form-checkbox, .form-radio');
            if (allFormEl.length) { allFormEl.jasmineCheck(); }
        });

        _this.senseui.document.on('change', '.btn-file :file', function (event: JQueryEventObject): any
        {
            let input = $(this);
            let numFiles = input.get(0).files ? input.get(0).files.length : 1;
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

    /* ========================================================================
     * NAVIGATION SHORTCUT BUTTONS
     * Require Bootstrap Popover
     * http://getbootstrap.com/javascript/#popovers
     * ========================================================================*/
    public Popover(_this: AppService): any
    {
        _this.senseui.window.on('load', function (): any
        {
            let shortcutBtn = $('#mainnav-shortcut');

            if (shortcutBtn.length)
            {
                shortcutBtn.find('li').each(function (event: JQueryEventObject): any
                {
                    let $el = $(this);
                    $el.popover({
                        animation: false,
                        trigger: 'hover focus',
                        placement: 'bottom',
                        container: '#mainnav-container',
                        template: '<div class="popover mainnav-shortcut"><div class="arrow"></div><div class="popover-content"></div>'
                    });
                });
            }
        });
    }

    public InitMainnav(_this: AppService): any
    {
        let $menulink = $('#mainnav-menu > li > a, #mainnav-menu-wrap .mainnav-widget a[data-toggle="menu-widget"]');
        let mainNavHeight = $('#mainnav').height();
        let scrollbar: any = null;
        let updateMethod: any = false;
        let isSmallNav = false;
        let screenCat: any = null;
        let defaultSize: any = null;

        // Determine and bind hover or "touch" event
        // ===============================================
        let bindSmallNav = function (): any
        {
            let hidePopover: any;

            $menulink.each(function (event: JQueryEventObject): any
            {
                let $el = $(this);
                let $listTitle = $el.children('.menu-title');
                let $listSub = $el.siblings('.collapse');
                let $listWidget = $($el.attr('data-target'));
                let $listWidgetParent = ($listWidget.length) ? $listWidget.parent() : null;
                let $popover: any = null;
                let $poptitle: any = null;
                let $popcontent: any = null;
                let $popoverSub = null;
                let popoverPosBottom = 0;
                let popoverCssBottom = 0;
                let elPadding = $el.outerHeight() - $el.height() / 4;
                let listSubScroll = false;
                let elHasSub = function (): any
                {
                    if ($listWidget.length)
                    {
                        $el.on('click', function (e: any): any
                        {
                            e.preventDefault();
                        });
                    }
                    if ($listSub.length)
                    {
                        // $listSub.removeClass('in').removeAttr('style');
                        $el.on('click', function (e: any): any
                        {
                            e.preventDefault();
                        }).parent('li').removeClass('active');
                        return true;
                    } else
                    {
                        return false;
                    }
                }();

                let updateScrollInterval: any = null;
                let updateScrollBar = function (el: any): any
                {
                    clearInterval(updateScrollInterval);
                    updateScrollInterval = setInterval(function (): any
                    {
                        el.nanoScroller({
                            preventPageScrolling: true,
                            alwaysVisible: true
                        });
                        clearInterval(updateScrollInterval);
                    }, 700);
                };

                $(document).click(function (event2: JQueryEventObject): any
                {
                    if (!$(event2.currentTarget).closest('#mainnav-container').length)
                    {
                        $el.removeClass('hover').popover('hide');
                    }
                });

                $('#mainnav-menu-wrap > .nano').on('update', function (event2: any, values: any): any
                {
                    $el.removeClass('hover')
                        .popover('hide');
                });

                $el.popover({
                    animation: false,
                    trigger: 'manual',
                    container: '#mainnav',
                    viewport: $el,
                    html: true,
                    title(): any
                    {
                        if (elHasSub) { return $listTitle.html(); }
                        return null;
                    },
                    content(): any
                    {
                        let $content;
                        if (elHasSub)
                        {
                            $content = $('<div class="sub-menu"></div>');
                            $listSub.addClass('pop-in')
                                .wrap('<div class="nano-content"></div>')
                                .parent()
                                .appendTo($content);
                        } else if ($listWidget.length)
                        {
                            $content = $('<div class="sidebar-widget-popover"></div>');
                            $listWidget.wrap('<div class="nano-content"></div>')
                                .parent()
                                .appendTo($content);
                        } else
                        {
                            $content = '<span class="single-content">' + $listTitle.html() + '</span>';
                        }
                        return $content;
                    },
                    template: '<div class="popover menu-popover"><h4 class="popover-title"></h4><div class="popover-content"></div></div>'
                }).on('show.bs.popover', function (): any
                {
                    if (!$popover)
                    {
                        $popover = $el.data('bs.popover').tip();
                        $poptitle = $popover.find('.popover-title');
                        $popcontent = $popover.children('.popover-content');

                        if (!elHasSub && $listWidget.length === 0) { return; }
                        $popoverSub = $popcontent.children('.sub-menu');
                    }
                    if (!elHasSub && $listWidget.length === 0) { return; }
                }).on('shown.bs.popover', function (): any
                {
                    if (!elHasSub && $listWidget.length === 0)
                    {
                        let margintop = 0 - (0.5 * $el.outerHeight());
                        $popcontent.css({
                            'margin-top': margintop + 'px',
                            width: 'auto'
                        });
                        return;
                    }

                    let offsetTop = parseInt($popover.css('top'), 10);
                    let elHeight = $el.outerHeight();
                    let offsetBottom = function (): any
                    {
                        if (_this.senseui.container.hasClass('mainnav-fixed'))
                        {
                            return $(window).outerHeight() - offsetTop - elHeight;
                        } else
                        {
                            return $(document).height() - offsetTop - elHeight;
                        }
                    }();
                    let popoverHeight = $popcontent.find('.nano-content')
                        .children()
                        .css('height', 'auto')
                        .outerHeight();
                    $popcontent.find('.nano-content')
                        .children()
                        .css('height', '');

                    if (offsetTop > offsetBottom)
                    {
                        if ($poptitle.length && !$poptitle.is(':visible'))
                        { elHeight = Math.round(0 - (0.5 * elHeight)); }
                        offsetTop -= 5;
                        $popcontent.css({
                            top: '',
                            bottom: elHeight + 'px',
                            height: offsetTop
                        }).children()
                            .addClass('nano')
                            .css({ width: '100%' })
                            .nanoScroller({ preventPageScrolling: true });
                        updateScrollBar($popcontent.find('.nano'));
                    } else
                    {
                        if (!_this.senseui.container.hasClass('navbar-fixed')
                            && _this.senseui.mainNav.hasClass('affix-top'))
                        {
                            offsetBottom -= 50;
                        }
                        if (popoverHeight > offsetBottom)
                        {
                            if (_this.senseui.container.hasClass('navbar-fixed') || _this.senseui.mainNav.hasClass('affix-top'))
                            {
                                offsetBottom -= (elHeight + 5);
                            }

                            offsetBottom -= 5;
                            $popcontent.css({
                                top: elHeight + 'px',
                                bottom: '',
                                height: offsetBottom
                            })
                                .children()
                                .addClass('nano')
                                .css({
                                    width: '100%'
                                })
                                .nanoScroller({
                                    preventPageScrolling: true
                                });

                            updateScrollBar($popcontent.find('.nano'));
                        } else
                        {
                            if ($poptitle.length && !$poptitle.is(':visible'))
                            {
                                elHeight = Math.round(0 - (0.5 * elHeight));
                            }
                            $popcontent.css({
                                top: elHeight + 'px',
                                bottom: '',
                                height: 'auto'
                            });
                        }
                    }
                    if ($poptitle.length) { $poptitle.css('height', $el.outerHeight()); }
                    $popcontent.on('click', function (): any
                    {
                        $popcontent.find('.nano-pane').hide();
                        updateScrollBar($popcontent.find('.nano'));
                    });
                }).on('hidden.bs.popover', function (): any
                {
                    // detach from popover, fire event then clean up data
                    $el.removeClass('hover');
                    if (elHasSub)
                    {
                        $listSub.removeAttr('style').appendTo($el.parent());
                    } else if ($listWidget.length)
                    {
                        $listWidget.appendTo($listWidgetParent);
                    }
                    clearInterval(hidePopover);
                }).on('click', function (): any
                {
                    if (!_this.senseui.container.hasClass('mainnav-sm')) { return; }
                    $menulink.popover('hide');
                    $el.addClass('hover').popover('show');
                }).hover(
                    function (): any
                    {
                        $menulink.popover('hide');
                        $el.addClass('hover').popover('show');
                    },
                    function (): any
                    {
                        clearInterval(hidePopover);
                        hidePopover = setInterval(function (): any
                        {
                            if ($popover)
                            {
                                $popover.one('mouseleave', function (): any
                                {
                                    $el.removeClass('hover').popover('hide');
                                });
                                if (!$popover.is(':hover'))
                                {
                                    $el.removeClass('hover').popover('hide');
                                }
                            }
                            clearInterval(hidePopover);
                        }, 500);
                    }
                    );
            });
            isSmallNav = true;
        };
        let unbindSmallNav = function (): any
        {
            let colapsed = $('#mainnav-menu').find('.collapse');
            if (colapsed.length)
            {
                colapsed.each(function (event: JQueryEventObject): any
                {
                    let cl = $(this);
                    if (cl.hasClass('in'))
                    {
                        cl.parent('li').addClass('active');
                    } else
                    {
                        cl.parent('li').removeClass('active');
                    }
                });
            }
            if (scrollbar != null && scrollbar.length)
            {
                scrollbar.nanoScroller({
                    stop: true
                });
            }

            $menulink.popover('destroy')
                .unbind('mouseenter mouseleave');
            isSmallNav = false;
        };

        let updateSize = function (): any
        {
            // if(!defaultSize) return;

            let sw = _this.senseui.container.width();
            let currentScreen;

            if (sw <= 740)
            {
                currentScreen = 'xs';
            } else if (sw > 740 && sw < 992)
            {
                currentScreen = 'sm';
            } else if (sw >= 992 && sw <= 1200)
            {
                currentScreen = 'md';
            } else
            {
                currentScreen = 'lg';
            }

            if (screenCat !== currentScreen)
            {
                screenCat = currentScreen;
                _this.senseui.screenSize = currentScreen;

                if (_this.senseui.screenSize === 'sm' && _this.senseui.container.hasClass('mainnav-lg'))
                {
                    $.jasmineNav('collapse');
                }
            }
        };

        let updateNav = function (e: any): any
        {
            _this.senseui.mainNav.jasmineAffix('update');

            unbindSmallNav();
            updateSize();

            if (updateMethod === 'collapse' || _this.senseui.container.hasClass('mainnav-sm'))
            {
                _this.senseui.container.removeClass('mainnav-in mainnav-out mainnav-lg');
                bindSmallNav();
            }

            mainNavHeight = $('#mainnav')
                .height();
            updateMethod = false;
            return null;
        };

        let init = function (): any
        {
            if (!defaultSize)
            {
                defaultSize = {
                    xs: 'mainnav-out',
                    sm: _this.senseui.mainNav.data('sm') || _this.senseui.mainNav.data('all'),
                    md: _this.senseui.mainNav.data('md') || _this.senseui.mainNav.data('all'),
                    lg: _this.senseui.mainNav.data('lg') || _this.senseui.mainNav.data('all')
                };

                let hasData = false;
                for (let item in defaultSize)
                {
                    if (defaultSize[item])
                    {
                        hasData = true;
                        break;
                    }
                }

                if (!hasData) { defaultSize = null; }
                updateSize();
            }
        };

        let methods: any = {
            revealToggle(): any
            {
                if (!_this.senseui.container.hasClass('reveal'))
                {
                    _this.senseui.container.addClass('reveal');
                }
                _this.senseui.container.toggleClass('mainnav-in mainnav-out').removeClass('mainnav-lg mainnav-sm');
                if (isSmallNav) { unbindSmallNav(); }
                return;
            },
            revealIn(): any
            {
                if (!_this.senseui.container.hasClass('reveal')) { _this.senseui.container.addClass('reveal'); }
                _this.senseui.container.addClass('mainnav-in').removeClass('mainnav-out mainnav-lg mainnav-sm');
                if (isSmallNav) { unbindSmallNav(); }
                return;
            },
            revealOut(): any
            {
                if (!_this.senseui.container.hasClass('reveal')) { _this.senseui.container.addClass('reveal'); }
                _this.senseui.container.removeClass('mainnav-in mainnav-lg mainnav-sm').addClass('mainnav-out');
                if (isSmallNav) { unbindSmallNav(); }
                return;
            },
            slideToggle(): any
            {
                if (!_this.senseui.container.hasClass('slide')) { _this.senseui.container.addClass('slide'); }
                _this.senseui.container.toggleClass('mainnav-in mainnav-out').removeClass('mainnav-lg mainnav-sm');
                if (isSmallNav) { unbindSmallNav(); }
                return;
            },
            slideIn(): any
            {
                if (!_this.senseui.container.hasClass('slide')) { _this.senseui.container.addClass('slide'); }
                _this.senseui.container.addClass('mainnav-in').removeClass('mainnav-out mainnav-lg mainnav-sm');
                if (isSmallNav) { unbindSmallNav(); }
                return;
            },
            slideOut(): any
            {
                if (!_this.senseui.container.hasClass('slide')) { _this.senseui.container.addClass('slide'); }
                _this.senseui.container.removeClass('mainnav-in mainnav-lg mainnav-sm').addClass('mainnav-out');
                if (isSmallNav) { unbindSmallNav(); }
                return;
            },
            pushToggle(): any
            {
                _this.senseui.container.toggleClass('mainnav-in mainnav-out')
                    .removeClass('mainnav-lg mainnav-sm');
                if (_this.senseui.container.hasClass('mainnav-in mainnav-out'))
                {
                    _this.senseui.container.removeClass('mainnav-in');
                }
                // if (jasmine.container.hasClass('mainnav-in')) //jasmine.container.removeClass('aside-in');
                if (isSmallNav) { unbindSmallNav(); }
                return;
            },
            pushIn(): any
            {
                _this.senseui.container.addClass('mainnav-in').removeClass('mainnav-out mainnav-lg mainnav-sm');
                if (isSmallNav) { unbindSmallNav(); }
                return;
            },
            pushOut(): any
            {
                _this.senseui.container.removeClass('mainnav-in mainnav-lg mainnav-sm').addClass('mainnav-out');
                if (isSmallNav) { unbindSmallNav(); }
                return;
            },
            colExpToggle(): any
            {
                if (_this.senseui.container.hasClass('mainnav-lg mainnav-sm'))
                {
                    _this.senseui.container.removeClass('mainnav-lg');
                }
                _this.senseui.container.toggleClass('mainnav-lg mainnav-sm').removeClass('mainnav-in mainnav-out');
                return _this.senseui.window.trigger('resize');
            },
            collapse(): any
            {
                _this.senseui.container.addClass('mainnav-sm').removeClass('mainnav-lg mainnav-in mainnav-out');
                updateMethod = 'collapse';
                return _this.senseui.window.trigger('resize');
            },
            expand(): any
            {
                _this.senseui.container.removeClass('mainnav-sm mainnav-in mainnav-out').addClass('mainnav-lg');
                return _this.senseui.window.trigger('resize');
            },
            togglePosition(): any
            {
                _this.senseui.container.toggleClass('mainnav-fixed');
                _this.senseui.mainNav.jasmineAffix('update');
            },
            fixedPosition(): any
            {
                _this.senseui.container.addClass('mainnav-fixed');
                _this.senseui.mainNav.jasmineAffix('update');
            },
            staticPosition(): any
            {
                _this.senseui.container.removeClass('mainnav-fixed');
                _this.senseui.mainNav.jasmineAffix('update');
            },
            update: updateNav,
            forceUpdate: updateSize,
            getScreenSize(): any
            {
                return screenCat;
            }
        };

        $.jasmineNav = function (method: any, complete: any): any
        {
            if (methods[method])
            {
                if (method === 'colExpToggle' || method === 'expand' || method === 'collapse')
                {
                    if (_this.senseui.screenSize === 'xs' && method === 'collapse')
                    {
                        method = 'pushOut';
                    } else if ((_this.senseui.screenSize === 'xs' || _this.senseui.screenSize === 'sm') && (method ===
                        'colExpToggle' ||
                        method === 'expand') && _this.senseui.container.hasClass('mainnav-sm'))
                    {
                        method = 'pushIn';
                    }
                }
                let val = methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
                if (complete)
                {
                    return complete();
                } else if (val)
                {
                    return val;
                }
            }
            return null;
        };

        $.fn.isOnScreen = function (): any
        {
            let viewport: any = {
                top: _this.senseui.window.scrollTop(),
                left: _this.senseui.window.scrollLeft()
            };
            viewport.right = viewport.left + _this.senseui.window.width();
            viewport.bottom = viewport.top + _this.senseui.window.height();

            let bounds = this.offset();
            bounds.right = bounds.left + this.outerWidth();
            bounds.bottom = bounds.top + this.outerHeight();

            return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom <
                bounds.bottom ||
                viewport.top > bounds.top));

        };

        _this.senseui.window.on('resizeEnd', updateNav).trigger('resize');

        _this.senseui.window.on('load', function (): any
        {
            let toggleBtn = $('.mainnav-toggle');
            if (toggleBtn.length)
            {
                toggleBtn.on('click', function (e: any): any
                {
                    e.preventDefault();

                    if (toggleBtn.hasClass('push'))
                    {
                        $.jasmineNav('pushToggle');
                    } else if (toggleBtn.hasClass('slide'))
                    {
                        $.jasmineNav('slideToggle');
                    } else if (toggleBtn.hasClass('reveal'))
                    {
                        $.jasmineNav('revealToggle');
                    } else
                    {
                        $.jasmineNav('colExpToggle');
                    }
                });
            }

            let menu = $('#mainnav-menu');
            if (menu.length)
            {
                // COLLAPSIBLE MENU LIST
                // =================================================================
                // Require MetisMenu
                // http://demo.onokumus.com/metisMenu/
                // =================================================================
                $('#mainnav-menu').metisMenu({ toggle: true });

                // STYLEABLE SCROLLBARS
                // =================================================================
                // Require nanoScroller
                // http://jamesflorentino.github.io/nanoScrollerJS/
                // =================================================================
                scrollbar = _this.senseui.mainNav.find('.nano');
                if (scrollbar.length)
                {
                    scrollbar.nanoScroller({ preventPageScrolling: true });
                }
            }
        });
    }

    /* ========================================================================
     * JASMINE ASIDE v1.0.1
     * -------------------------------------------------------------------------
     * ========================================================================*/
    public InitAsidebar(_this: AppService): any
    {
        let toggleNav = function (): any
        {
            if (_this.senseui.container.hasClass('mainnav-in') && _this.senseui.screenSize !== 'xs')
            {
                if (_this.senseui.screenSize === 'sm')
                {
                    $.jasmineNav('collapse');
                } else
                {
                    _this.senseui.container.removeClass('mainnav-in mainnav-lg mainnav-sm').addClass('mainnav-out');
                }
            }
        };
        let asideMethods: any = {
            toggleHideShow(): any
            {
                _this.senseui.container.toggleClass('aside-in');
                _this.senseui.window.trigger('resize');
                if (_this.senseui.container.hasClass('aside-in'))
                {
                    toggleNav();
                }
            },
            show(): any
            {
                _this.senseui.container.addClass('aside-in');
                _this.senseui.window.trigger('resize');
                toggleNav();
            },
            hide(): any
            {
                _this.senseui.container.removeClass('aside-in');
                _this.senseui.window.trigger('resize');
            },
            toggleAlign(): any
            {
                _this.senseui.container.toggleClass('aside-left');
                _this.senseui.aside.jasmineAffix('update');
            },
            alignLeft(): any
            {
                _this.senseui.container.addClass('aside-left');
                _this.senseui.aside.jasmineAffix('update');
            },
            alignRight(): any
            {
                _this.senseui.container.removeClass('aside-left');
                _this.senseui.aside.jasmineAffix('update');
            },
            togglePosition(): any
            {
                _this.senseui.container.toggleClass('aside-fixed');
                _this.senseui.aside.jasmineAffix('update');
            },
            fixedPosition(): any
            {
                _this.senseui.container.addClass('aside-fixed');
                _this.senseui.aside.jasmineAffix('update');
            },
            staticPosition(): any
            {
                _this.senseui.container.removeClass('aside-fixed');
                _this.senseui.aside.jasmineAffix('update');
            },
            toggleTheme(): any
            {
                _this.senseui.container.toggleClass('aside-bright');
            },
            brightTheme(): any
            {
                _this.senseui.container.addClass('aside-bright');
            },
            darkTheme(): any
            {
                _this.senseui.container.removeClass('aside-bright');
            }
        };

        $.jasmineAside = function (method: any, complete: any): any
        {
            if (asideMethods[method])
            {
                asideMethods[method].apply(this, Array.prototype.slice.call(arguments, 1));
                if (complete) { return complete(); }
            }
            return null;
        };

        _this.senseui.window.on('load', function (): any
        {
            if (_this.senseui.aside.length)
            {
                // STYLEABLE SCROLLBARS
                // =================================================================
                // Require nanoScroller
                // http://jamesflorentino.github.io/nanoScrollerJS/
                // =================================================================
                _this.senseui.aside.find('.nano').nanoScroller({
                    preventPageScrolling: true,
                    alwaysVisible: false
                });

                let toggleBtn = $('.aside-toggle');
                if (toggleBtn.length)
                {
                    toggleBtn.on('click', function (e: any): any
                    {
                        $.jasmineAside('toggleHideShow');
                    });
                }
            }
        });
    }

    /* ========================================================================
     * JASMINE LANGUAGE SELECTOR v1.0
     * -------------------------------------------------------------------------
     * Require Bootstrap Dropdowns
     * http://getbootstrap.com/components/#dropdowns
     * ========================================================================*/
    public InitLangSelector(_this: AppService): any
    {
        let defaults: any = {
            dynamicMode: true,
            selectedOn: null,
            onChange: null
        };

        let langSelector = function (el: any, opt: any): any
        {
            let options = $.extend({}, defaults, opt);
            let $el = el.find('.lang-selected');
            let $langMenu = $el.parent('.lang-selector').siblings('.dropdown-menu');
            let $langBtn = $langMenu.find('a');
            let selectedID = $langBtn.filter('.active').find('.lang-id').text();
            let selectedName = $langBtn.filter('.active').find('.lang-name').text();

            let changeTo = function (te: any): any
            {
                $langBtn.removeClass('active');
                te.addClass('active');
                $el.html(te.html());

                selectedID = te.find('.lang-id').text();
                selectedName = te.find('.lang-name').text();
                el.trigger('onChange', [{
                    id: selectedID,
                    name: selectedName
                }]);

                if (typeof options.onChange === 'function')
                {
                    options.onChange.call(this, {
                        id: selectedID,
                        name: selectedName
                    });
                }
            };

            $langBtn.on('click', function (e: JQueryEventObject): any
            {
                if (options.dynamicMode)
                {
                    e.preventDefault();
                    e.stopPropagation();
                }

                el.dropdown('toggle');
                changeTo($(e.currentTarget));
            });

            if (options.selectedOn) { changeTo($(options.selectedOn)); }

        };
        let methods: any = {
            getSelectedID(): any
            {
                return $(this).find('.lang-id').text();
            },
            getSelectedName(): any
            {
                return $(this).find('.lang-name').text();
            },
            getSelected(): any
            {
                let el = $(this);
                return {
                    id: el.find('.lang-id').text(),
                    name: el.find('.lang-name').text()
                };
            },
            setDisable(): any
            {
                $(this).addClass('disabled');
                return null;
            },
            setEnable(el: any): any
            {
                $(this).removeClass('disabled');
                return null;
            }
        };

        $.fn.jasmineLanguage = function (method: any): any
        {
            let chk = false;
            this.each(function (): any
            {
                if (methods[method])
                {
                    chk = methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
                } else if (typeof method === 'object' || !method)
                {
                    langSelector($(this), method);
                }
            });
            return chk;
        };
    }

    /* ========================================================================
     * JASMINE AFFIX v1.0
     * -------------------------------------------------------------------------
     * Require Bootstrap Affix
     * http://getbootstrap.com/javascript/#affix
     * ========================================================================*/

    public InitAffix(_this: AppService): any
    {
        $.fn.jasmineAffix = function (method: any): any
        {
            return this.each(function (): any
            {
                let el = $(this);
                let className;

                if (typeof method === 'object' || !method)
                {
                    className = method.className;
                    el.data('jasmine.af.class', method.className);
                } else if (method === 'update')
                {
                    className = el.data('jasmine.af.class');
                }

                if (_this.senseui.container.hasClass(className) &&
                    !_this.senseui.container.hasClass('navbar-fixed'))
                {
                    el.affix({
                        offset: {
                            top: $('#navbar').outerHeight()
                        }
                    });
                } else if (!_this.senseui.container.hasClass(className) ||
                    _this.senseui.container.hasClass('navbar-fixed'))
                {
                    _this.senseui.window.off(el.attr('id') + '.affix');
                    el.removeClass('affix affix-top affix-bottom').removeData('bs.affix');
                }
            });
        };

        _this.senseui.window.on('load', function (): any
        {
            if (_this.senseui.mainNav.length)
            {
                _this.senseui.mainNav.jasmineAffix({ className: 'mainnav-fixed' });
            }

            if (_this.senseui.aside.length)
            {
                _this.senseui.aside.jasmineAffix({ className: 'aside-fixed' });
            }
        });
    }

    /* ========================================================================
     * JASMINE PROFILE
     * -------------------------------------------------------------------------
     * ========================================================================*/
    public InitProfile(_this: AppService): any
    {
        $('.inbox-star').click(function (): any
        {
            $(this).toggleClass('starred');
        });

        $('#profilebtn').click(function (): any
        {
            $('#profilebody').slideToggle();
        });
    }

    /* ========================================================================
     * Set user options
     * -------------------------------------------------------------------------
     * ========================================================================*/
    public SetUserOptions(_this: AppService): any
    {
        let elems = Array.prototype.slice.call(document.querySelectorAll('.demo-switch'));
        elems.forEach(function (html: any): any
        {
            let switchery = new Switchery(html);
        });

        // ASIDE
        // =================================================================
        // Toggle Visibe
        // =================================================================
        $('#demo-toggle-aside').on('click', function (ev: any): any
        {
            let asdVisCheckbox: any = $('#demo-toggle-aside');
            ev.preventDefault();
            if (!_this.senseui.container.hasClass('aside-in'))
            {
                $.jasmineAside('show');
                asdVisCheckbox.jasmineCheck('toggleOn');
            } else
            {
                $.jasmineAside('hide');
                asdVisCheckbox.jasmineCheck('toggleOff');
            }
        });

        // Fullscreen
        // ==========
        $('[data-toggle="fullscreen"]').click(function (): any
        {
            if (screenfull.enabled)
            {
                screenfull.toggle();
            }

            return false;
        });

        if (screenfull.enabled)
        {
            document.addEventListener(screenfull.raw.fullscreenchange, function (): any
            {
                $('[data-toggle="fullscreen"]').toggleClass('active', screenfull.isFullscreen);
            });
        }
    }
}
