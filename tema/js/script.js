$(function(){
    $('.article1,.article2,.article3').wrapAll('<aside id=amain></aside>');
        var arts='.article4,';
    for(var i=5;i<=100;i++){
        arts+='.article'+i+',';
    }
    var nr=arts.length-1;
        arts=arts.substr(0,nr);
    $(arts).wrapAll('<div id=rest></div>')
    $('.search .article1').unwrap();
    for(var i=3; i<=100; i++){
    $('main>#rest>div:nth-child('+i+') p:nth-child(n+2)').text($('main>#rest>div:nth-child('+i+') p:nth-child(n+2)').text().substr(0,300)+'...');
}    
    //navmenu
    $(window).scroll(function(){ 

var a = 10;
var pos = $(window).scrollTop();
if(pos > a) {
    $("nav").css({
                
            });
}else {
    $("nav").css({
                
            });
}
});
})