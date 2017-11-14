// tslint:disable-next-line:max-file-line-count
import { Injectable } from '@angular/core';
import { SenseuiService } from './senseui.service';

@Injectable()
export class MainnavService
{
    public $menulink: any;
    public mainNavHeight: any;
    public scrollbar: any;
    public updateMethod: any;
    public isSmallNav: any;
    public screenCat: any;
    public defaultSize: any;

    private senseui: SenseuiService;
    public constructor(senseui: SenseuiService)
    {
        this.senseui = senseui;
    }

    public InitMainnav(): any
    {
        let _this = this;

        _this.$menulink = $('#mainnav-menu > li > a, #mainnav-menu-wrap .mainnav-widget a[data-toggle="menu-widget"]');
        _this.mainNavHeight = $('#mainnav').height();
        _this.scrollbar = null;
        _this.updateMethod = false;
        _this.isSmallNav = false;
        _this.screenCat = null;
        _this.defaultSize = null;

        _this.initSenseuiNav();
        _this.addIsOnScreen();
        _this.senseui.window.on('resizeend', (e: any) => _this.updateNav(e)).trigger('resize');
        _this.initMetisMenu();
    }

    // Determine and bind hover or "touch" event
    // ===============================================
    public bindSmallNav(): any
    {
        let _this = this;
        let hidePopover: any;

        _this.$menulink.each(function (event: JQueryEventObject): any
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

            $(document).click(function (event2: any): any
            {
                if (!$(event2.currentTarget).closest('#mainnav-container').length)
                {
                    $el.removeClass('hover').popover('hide');
                }
            });

            $('#mainnav-menu-wrap > .nano').on('update', function (event2: any, values: any): any
            {
                $el.removeClass('hover').popover('hide');
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
                        if (_this.senseui.container.hasClass('navbar-fixed') ||
                            _this.senseui.mainNav.hasClass('affix-top'))
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
                _this.$menulink.popover('hide');
                $el.addClass('hover').popover('show');
            }).hover(
                function (): any
                {
                    _this.$menulink.popover('hide');
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
                });
        });
        _this.isSmallNav = true;
    };

    public unbindSmallNav(): any
    {
        let _this = this;

        let colapsed = $('#mainnav-menu').find('.collapse');
        if (colapsed.length)
        {
            colapsed.each(function (index: number): any
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
        if (_this.scrollbar != null && _this.scrollbar.length)
        {
            _this.scrollbar.nanoScroller({
                stop: true
            });
        }

        _this.$menulink.popover('destroy').unbind('mouseenter mouseleave');
        _this.isSmallNav = false;
    };

    public updateSize(): any
    {
        let _this = this;
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

        if (_this.screenCat !== currentScreen)
        {
            _this.screenCat = currentScreen;
            _this.senseui.screenSize = currentScreen;

            if (_this.senseui.screenSize === 'sm' && _this.senseui.container.hasClass('mainnav-lg'))
            {
                $.senseuiNav('collapse');
            }
        }
    };

    public updateNav(e: any): any
    {
        let _this = this;

        _this.senseui.mainNav.senseuiAffix('update');
        _this.unbindSmallNav();
        _this.updateSize();

        if (_this.updateMethod === 'collapse' || _this.senseui.container.hasClass('mainnav-sm'))
        {
            _this.senseui.container.removeClass('mainnav-in mainnav-out mainnav-lg');
            _this.bindSmallNav();
        }

        _this.mainNavHeight = $('#mainnav').height();
        _this.updateMethod = false;

        return null;
    };

    public init(): any
    {
        let _this = this;

        if (!_this.defaultSize)
        {
            _this.defaultSize = {
                xs: 'mainnav-out',
                sm: _this.senseui.mainNav.data('sm') || _this.senseui.mainNav.data('all'),
                md: _this.senseui.mainNav.data('md') || _this.senseui.mainNav.data('all'),
                lg: _this.senseui.mainNav.data('lg') || _this.senseui.mainNav.data('all')
            };

            let hasData = false;
            for (let item in _this.defaultSize)
            {
                if (_this.defaultSize[item])
                {
                    hasData = true;
                    break;
                }
            }

            if (!hasData) { _this.defaultSize = null; }
            _this.updateSize();
        }
    };

    public initSenseuiNav(): any
    {
        let _this = this;

        let methods: any = {
            revealToggle(): any
            {
                if (!_this.senseui.container.hasClass('reveal'))
                {
                    _this.senseui.container.addClass('reveal');
                }
                _this.senseui.container.toggleClass('mainnav-in mainnav-out').removeClass('mainnav-lg mainnav-sm');
                if (_this.isSmallNav) { _this.unbindSmallNav(); }
                return;
            },
            revealIn(): any
            {
                if (!_this.senseui.container.hasClass('reveal')) { _this.senseui.container.addClass('reveal'); }
                _this.senseui.container.addClass('mainnav-in').removeClass('mainnav-out mainnav-lg mainnav-sm');
                if (_this.isSmallNav) { _this.unbindSmallNav(); }
                return;
            },
            revealOut(): any
            {
                if (!_this.senseui.container.hasClass('reveal')) { _this.senseui.container.addClass('reveal'); }
                _this.senseui.container.removeClass('mainnav-in mainnav-lg mainnav-sm').addClass('mainnav-out');
                if (_this.isSmallNav) { _this.unbindSmallNav(); }
                return;
            },
            slideToggle(): any
            {
                if (!_this.senseui.container.hasClass('slide')) { _this.senseui.container.addClass('slide'); }
                _this.senseui.container.toggleClass('mainnav-in mainnav-out').removeClass('mainnav-lg mainnav-sm');
                if (_this.isSmallNav) { _this.unbindSmallNav(); }
                return;
            },
            slideIn(): any
            {
                if (!_this.senseui.container.hasClass('slide')) { _this.senseui.container.addClass('slide'); }
                _this.senseui.container.addClass('mainnav-in').removeClass('mainnav-out mainnav-lg mainnav-sm');
                if (_this.isSmallNav) { _this.unbindSmallNav(); }
                return;
            },
            slideOut(): any
            {
                if (!_this.senseui.container.hasClass('slide')) { _this.senseui.container.addClass('slide'); }
                _this.senseui.container.removeClass('mainnav-in mainnav-lg mainnav-sm').addClass('mainnav-out');
                if (_this.isSmallNav) { _this.unbindSmallNav(); }
                return;
            },
            pushToggle(): any
            {
                _this.senseui.container.toggleClass('mainnav-in mainnav-out').removeClass('mainnav-lg mainnav-sm');
                if (_this.senseui.container.hasClass('mainnav-in mainnav-out'))
                {
                    _this.senseui.container.removeClass('mainnav-in');
                }
                // if (wSenseui.container.hasClass('mainnav-in')) //wSenseui.container.removeClass('aside-in');
                if (_this.isSmallNav) { _this.unbindSmallNav(); }
                return;
            },
            pushIn(): any
            {
                _this.senseui.container.addClass('mainnav-in').removeClass('mainnav-out mainnav-lg mainnav-sm');
                if (_this.isSmallNav) { _this.unbindSmallNav(); }
                return;
            },
            pushOut(): any
            {
                _this.senseui.container.removeClass('mainnav-in mainnav-lg mainnav-sm').addClass('mainnav-out');
                if (_this.isSmallNav) { _this.unbindSmallNav(); }
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
                _this.updateMethod = 'collapse';
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
                _this.senseui.mainNav.senseuiAffix('update');
            },
            fixedPosition(): any
            {
                _this.senseui.container.addClass('mainnav-fixed');
                _this.senseui.mainNav.senseuiAffix('update');
            },
            staticPosition(): any
            {
                _this.senseui.container.removeClass('mainnav-fixed');
                _this.senseui.mainNav.senseuiAffix('update');
            },
            update: _this.updateNav,
            forceUpdate: _this.updateSize,
            getScreenSize(): any
            {
                return _this.screenCat;
            }
        };

        $.senseuiNav = function (method: any, complete: any): any
        {
            if (methods[method])
            {
                if (method === 'colExpToggle' || method === 'expand' || method === 'collapse')
                {
                    if (_this.senseui.screenSize === 'xs' && method === 'collapse')
                    {
                        method = 'pushOut';
                    }
                    else if ((_this.senseui.screenSize === 'xs' || _this.senseui.screenSize === 'sm') &&
                        (method === 'colExpToggle' || method === 'expand') &&
                        _this.senseui.container.hasClass('mainnav-sm'))
                    {
                        method = 'pushIn';
                    }
                }
                let val = methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
                if (complete)
                {
                    return complete();
                }
                else if (val)
                {
                    return val;
                }
            }
            return null;
        };
    }

    public addIsOnScreen(): any
    {
        let _this = this;
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

            return (!(viewport.right < bounds.left || viewport.left > bounds.right ||
                viewport.bottom < bounds.bottom || viewport.top > bounds.top));
        };
    }

    public initMetisMenu(): any
    {
        let _this = this;
        let toggleBtn = $('.mainnav-toggle');
        if (toggleBtn.length)
        {
            toggleBtn.on('click', function (e: any): any
            {
                e.preventDefault();

                if (toggleBtn.hasClass('push'))
                {
                    $.senseuiNav('pushToggle');
                }
                else if (toggleBtn.hasClass('slide'))
                {
                    $.senseuiNav('slideToggle');
                }
                else if (toggleBtn.hasClass('reveal'))
                {
                    $.senseuiNav('revealToggle');
                }
                else
                {
                    $.senseuiNav('colExpToggle');
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
            _this.scrollbar = _this.senseui.mainNav.find('.nano');
            if (_this.scrollbar.length)
            {
                _this.scrollbar.nanoScroller({ preventPageScrolling: true });
            }
        }
    }
}
