var ATBSTEAM=ATBSTEAM||{};!function($){"use strict";var $window=$(window),$document=$(document);ATBSTEAM.documentOnReady={init:function(){ATBSTEAM.documentOnReady.searchToggle(),ATBSTEAM.documentOnReady.offCanvasMenu(),ATBSTEAM.documentOnReady.show_sub_menu(),ATBSTEAM.documentOnReady.load_more_post(),ATBSTEAM.documentOnReady.go_to_top(),ATBSTEAM.documentOnReady.wembley_slider(),ATBSTEAM.documentOnReady.empty_post()},empty_post:function(){$(".atbs-empty-post").each((function(){var htmlHome=$(".atbs-home-design");htmlHome.find(".atbs-home-design__wrap").addClass("hidden"),htmlHome.find(".message-empty-posts").removeClass("hidden")}))},go_to_top:function(){$(".js-go-top-el").each((function(){$(this).click((function(){return $("html, body").animate({scrollTop:0},"slow"),!1}))}))},wembley_slider:function(){$(".js-wembley-flickity-slider").each((function(){var $carousel=$(this);$carousel.flickity({wrapAround:!0,pageDots:!1,imagesLoaded:!0,groupCells:!0}),$carousel.on("staticClick.flickity",(function(event,pointer,cellElement,cellIndex){"number"==typeof cellIndex&&$carousel.data("flickity").selectedIndex!=cellIndex&&$carousel.flickity("selectCell",cellIndex)}))}))},load_more_post:function(){$(".js-ajax-load-post-trigger").on("click",(function(e){var moduleID=$(this).closest(".wembley-block"),number=$(moduleID).find(".posts-list").attr("data-number");e.preventDefault();var listItem=$(moduleID).find(".item-hidden:hidden");$(listItem).slice(0,number).fadeIn(1500),0==$(".item-hidden:hidden").length&&($(".js-ajax-load-post-trigger").fadeOut("slow"),$(".wembley-no-more-button").removeClass("hidden")),$("html,body").animate({scrollTop:$(this).offset().top},1500)}))},show_sub_menu:function(){$(".wembley-offcanvas .has-submenu").each((function(){var $this=this;$($this).click((function(e){$($this).toggleClass("focus")}))}))},offCanvasMenu:function(){var $backdrop=$('<div class="wembley-offcanvas-backdrop"></div>'),$offCanvas=$(".js-wembley-offcanvas"),$offCanvasToggle=$(".js-wembley-offcanvas-toggle"),$offCanvasClose=$(".js-wembley-offcanvas-close"),$offCanvasMenuHasChildren=$(".navigation--offcanvas").find("li.menu-item-has-children > a"),check_show_more=!1;$backdrop.on("click",(function(){var button_hide=$offCanvas.find(".btn-nav-show_full i");$(this).fadeOut(0,(function(){$(this).detach()}));var check_show_full=$offCanvas;$(check_show_full).hasClass("show-full")?($(check_show_full).removeClass("animation"),setTimeout((function(){$(check_show_full).removeClass("show-full"),$(check_show_full).removeClass("is-active")}),400)):($(check_show_full).removeClass("show-full"),$(check_show_full).removeClass("is-active")),setTimeout((function(){$(check_show_full).removeClass("animation"),$(check_show_full).removeClass("show-full"),$(check_show_full).removeClass("is-active")}),400),check_show_more=!1,button_hide.attr("class","mdicon mdicon-chevron-thin-right")})),$offCanvasToggle.on("click",(function(e){e.preventDefault();var targetID=$(this).attr("href");$(targetID).toggleClass("is-active"),$backdrop.hide().appendTo(document.body).fadeIn(200)})),$offCanvasClose.on("click",(function(e){e.preventDefault();var button_hide=$offCanvas.find(".btn-nav-show_full i");$backdrop.fadeOut(200,(function(){$(this).detach()})),check_show_more=!1;var check_show_full=$offCanvas;$(check_show_full).hasClass("show-full")?($(check_show_full).removeClass("animation"),setTimeout((function(){$(check_show_full).removeClass("show-full"),$(check_show_full).removeClass("is-active")}),400)):($(check_show_full).removeClass("show-full"),$(check_show_full).removeClass("is-active")),button_hide.attr("class","mdicon mdicon-chevron-thin-right")})),$offCanvasMenuHasChildren.append((function(){return $('<div class="submenu-toggle"><i class="mdicon mdicon-expand_more"></i></div>').on("click",(function(e){e.preventDefault(),$(this).parent().siblings(".sub-menu").slideToggle(200)}))})),$(window).on("resize",(function(e){var checkExist=setInterval((function(){var elementPC=$("#wembley-offcanvas-primary"),elementMB=$("#wembley-offcanvas-mobile");elementPC.hasClass("is-active")&&("none"==elementPC.css("display")&&($backdrop.css("display","none"),clearInterval(checkExist)));elementMB.hasClass("is-active")&&("none"==elementMB.css("display")&&($backdrop.css("display","none"),clearInterval(checkExist)));(elementPC.hasClass("is-active")&&"none"!=elementPC.css("display")||elementMB.hasClass("is-active")&&"none"!=elementMB.css("display"))&&($backdrop.css("display","block"),clearInterval(checkExist)),clearInterval(checkExist)}),100)}));var btn_show_more=$(".btn-nav-show_full");$(btn_show_more).click((function(){var $this=$(this).parents(".wembley-offcanvas"),button_hide=$(this).find("i");$(this).fadeOut(500),0==check_show_more?($($this).addClass("animation"),setTimeout((function(){$($this).addClass("show-full"),button_hide.attr("class","mdicon mdicon-chevron-thin-left"),$(btn_show_more).fadeIn(50)}),600),check_show_more=!0):($($this).removeClass("show-full"),$(this).fadeOut(1e3),setTimeout((function(){$($this).removeClass("animation"),$(btn_show_more).fadeIn(50),button_hide.attr("class","mdicon mdicon-chevron-thin-right")}),200),check_show_more=!1)}))},searchToggle:function(){var $headerSearchDropdown=$("#header-search-dropdown"),$searchDropdownToggle=$(".js-search-dropdown-toggle"),$mobileHeader=$("#wembley-mobile-header"),$stickyHeaderNav=$("#wembley-sticky-header").find(".navigation-bar__inner"),$staticHeaderNav=$(".site-header").find(".navigation-bar__inner"),$headerSearchDropdownInput=$headerSearchDropdown.find(".search-form__input");$headerSearchDropdown.on("click",(function(e){e.stopPropagation()})),$searchDropdownToggle.on("click",(function(e){e.stopPropagation();var $toggleBtn=$(this),position="";switch(position=$toggleBtn.hasClass("mobile-header-btn")?"mobile":$toggleBtn.parents(".sticky-header").length?"sticky":"navbar",!$headerSearchDropdown.hasClass("is-in-"+position)&&$headerSearchDropdown.hasClass("is-active")||$headerSearchDropdown.toggleClass("is-active"),position){case"mobile":$headerSearchDropdown.hasClass("is-in-mobile")||($headerSearchDropdown.addClass("is-in-mobile"),$headerSearchDropdown.removeClass("is-in-sticky"),$headerSearchDropdown.removeClass("is-in-navbar"),$headerSearchDropdown.appendTo($mobileHeader));break;case"sticky":$headerSearchDropdown.hasClass("is-in-sticky")||($headerSearchDropdown.addClass("is-in-sticky"),$headerSearchDropdown.removeClass("is-in-mobile"),$headerSearchDropdown.removeClass("is-in-navbar"),$headerSearchDropdown.insertAfter($stickyHeaderNav));break;default:$headerSearchDropdown.hasClass("is-in-navbar")||($headerSearchDropdown.addClass("is-in-navbar"),$headerSearchDropdown.removeClass("is-in-sticky"),$headerSearchDropdown.removeClass("is-in-mobile"),$headerSearchDropdown.insertAfter($staticHeaderNav))}$headerSearchDropdown.hasClass("is-active")&&setTimeout((function(){$headerSearchDropdownInput.focus()}),200)})),$document.on("click",(function(event){switch(event.which){case 1:$headerSearchDropdown.removeClass("is-active")}})),$window.on("stickyHeaderHidden",(function(){$headerSearchDropdown.hasClass("is-in-sticky")&&$headerSearchDropdown.removeClass("is-active")}))}},$document.ready(ATBSTEAM.documentOnReady.init)}(jQuery);
//# sourceURL=https://cdn2.hubspot.net/hub/20002096/hub_generated/template_assets/48629437813/1623751488850/Wembley/js/scripts.js