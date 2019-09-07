$("#carshow div img:last-child").on("click",function(){
    $("#carshow div div ul").css("left","-80%")
    $("#carshow div img.zjt").css("display","block")
    $("#carshow div img.yjt").css("display","none")
})
$("#carshow div img:first-child").on("click",function(){
    $("#carshow div div ul").css("left","-30px")
    $("#carshow div img.zjt").css("display","none")
    $("#carshow div img.yjt").css("display","block")
})
$("#carshow ul.carshow-nav li:first-child").on("click",function(){
    $("#carshow div div.cx").css("display","block")
    $("#carshow div div.cslx").css("display","none")
    $("#carshow div img.yjt").css("display","block")
    $(this).addClass("car-underline").siblings().removeClass("car-underline")
})
$("#carshow ul.carshow-nav li:last-child").on("click",function(){
    $("#carshow div div.cx").css("display","none")
    $("#carshow div div.cslx").css("display","block")
    $("#carshow div img.yjt").css("display","none")
    $(this).addClass("car-underline").siblings().removeClass("car-underline")
    $("#carshow div div.cslx").css({"width":"100%"})
})