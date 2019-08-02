(function() {
  function _jsElement(reference = null){
      var _nav  = ".nav-boyager";
      var _tads  = ".tab > [data-active]";
      var _tad_active  = ".tab > [data-active].active";
      var _tad  = ".tab > [data-active='"+reference+ "']";
      var _distinct_tab = ".tab > [data-active!='"+reference+"']";

      var _pages   = ".container-info > [view-page]";
      var _page_active   = ".container-info > [view-page].active";
      var _page   = ".container-info > [view-page='"+reference+"']";
      var _distinct_page  = ".container-info > [view-page!='"+reference+"']";
    
    return {
      "_nav": _nav,
      "_tads": _tads,
      "_tad_active": _tad_active,
      "_tad": _tad,
      "_distinct_tad": _distinct_tab,
      "_pages": _pages,
      "_page_active": _page_active,
      "_page": _page,
      "_distinct_page": _distinct_page
    };
  }
  function timeout(fade = null, element){
    
    setTimeout(explode, 2000);
  }
  console.log(_jsElement()._tads);
  
  
  function _star(reference){
    $(_jsElement(reference)._tad).addClass('active');
    $(_jsElement(reference)._page).addClass('active');
  }
  
  function _star_tabs(){
    var _Active = false;
    var _Array  = ".tab > [data-active].active";
    $(_jsElement()._tad_active).each(function(index, element){
      var _tad = $(element);
      
      (!_Active)
        _star(_tad.attr("data-active"));
        _Active = true;
      console.warn('Star Tab ' + _tab.attr("data-active"));
    });
    (!_Active)
      var _child = $('.tabs-menu  .tab:first-child').find('a');
      
    (_child != undefined)
      _child.addClass('active');
      _star(_child.attr("data-active"));
      console.warn('Default Tab ' + _child.attr("data-active") );
  }
  function disable_tabs(tab){
    $(tab).each(function(index, element){
      var _tab = $(element);
      _tab.removeClass('active');
      console.warn('Tab ' + _tab.attr("data-active"));
    });
  }
  
  function disable_pages(page){
    $(page).each(function(index, element){
      var _page = $(element);
      _page.removeClass('active');
      console.warn('Page ' + _page.attr("view-page"));
    });
  }
  
  function enable_tabs(reference){
    $(_jsElement(reference)._tad).addClass('active');
    $(_jsElement(reference)._page).addClass('active');
    disable_tabs(_jsElement(reference)._distinct_tad);
    disable_pages(_jsElement(reference)._distinct_page);
  }
  
  $(_jsElement()._tads).click(function(event){
      var btn = event.target;
      var item = this.getAttribute('data-active');
      enable_tabs(item);
      console.log("Se hizo click en", item);
  });
  _star_tabs();
  function _collape_active(_element=null){
    if(_element == null){ 
      console.error('_collape_active: identificado '+ _element);
    }else{
      $(_element).toggleClass('active');
    }
    console.log('Click');
  }
  $("[active-collapse='#nav'].nav-button").click(function(){
    _collape_active('section.protec-transparent');
    _collape_active('.header-nav > .nav-boyager');
  });
  
  $(".protec-transparent").click(function(){
    _collape_active('section.protec-transparent');
    _collape_active('.header-nav > .nav-boyager');
  });
  /*$('.tabs-menu .tab').each(function(index, element){
    //var tabs = $(element).attr("class");
    var tabs = $(element);
    var child = tabs.find('a');
    if(child != undefined || child != 'undefined'){
      hrefTad.push(child.attr('href'));
    }
    console.warn('Class ' + tabs.attr("class"));
    console.warn(child.attr('href'));
  });
  if (!found) console.log(hrefTad);
  */

})();
//undefined