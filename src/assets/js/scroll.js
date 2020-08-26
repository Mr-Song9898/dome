$(function(){
    var w_he= $(window).height();
    var t_he=$(".top_c").height();
    var f_he=$(".footer").height();
    var l_he=w_he-t_he-f_he;
    $(".left_c,.right_c").css({height:l_he});
    var Scroll = new iScroll('left',{hScrollbar:false, vScrollbar:true,hScroll:false,vScroll:true,useTransform: false});
    var Scroll = new iScroll('right',{hScrollbar:false, vScrollbar:true,hScroll:false,vScroll:true,useTransform: false});
})