$(document).ready(function(){
    function test()
    {
        var d=new Date();

        $("#time").html(d.toLocaleTimeString("hi-IN"));
    }
    setInterval(test,1000);
})
