(function(a){a.fn.exists=function(){return 0<this.length};a.fn.isVisible=function(){return this.is(":visible")};a.fn.isChecked=function(){return this.is("checked")};a.fn.isDecendantOf=function(a){return 1==this.parents(a).length};a.fn.isChildOf=function(a){return 1==this.parent(a).length};a.fn.disableContextMenu=function(){a(this).on("contextmenu",function(a){a.preventDefault()})};a.fn.removeStyle=function(b){var c=RegExp(b+"[^;]+;?","g");return this.each(function(){a(this).attr("style",function(a,
b){return b.replace(c,"")})})};a.fn.isUnselectable=function(){return"on"==this.attr("unselectable")&&"none"==this.css("user-select")};a.fn.makeUnselectable=function(){this.attr("unselectable","on").css("user-select","none").on("selectstart",!1)};a.fn.hasAttr=function(b){return void 0!==a(this).attr(b)};a.fn.disable=function(){this.attr("disabled",!0)};a.fn.enable=function(){this.removeAttr("disabled")};a.fn.isDisabled=function(){return void 0!==this.attr("disabled")};a.fn.preload=function(){this.each(function(){a("<img/>")[0].src=
this})};a.fn.reframe=function(){this.attr("src",this.attr("src"))};scrollToPosition=function(b,c){a("html, body").stop().animate({scrollTop:b},c)};atTop=function(){return!a(window).scrollTop()};pageElements=function(){return a("*").length};parseURL=function(b){b=a("<a>",{href:b});return{host:b.prop("hostname"),path:b.prop("pathname"),query:b.prop("search"),protocol:b.prop("protocol"),hash:b.prop("hash")}};checkedboxes=function(){return a("input[type=checkbox]:checked")};if("yes"==a("meta[name=apple-mobile-web-app-capable]").attr("content"))for(var e=
document.getElementsByTagName("a"),d=0;d<e.length;d++)e[d].onclick=function(){window.location=this.getAttribute("href");return!1};window.route={routes:{},add:function(a,c){this.routes[a]=c},run:function(){a.each(this.routes,function(a){location.href.match(a)&&this()})}}})(jQuery);