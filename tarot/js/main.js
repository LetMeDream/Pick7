var up,down;
function displayWebsite()
{
    if(typeof up!=="undefined")return;
    up=setInterval(goUp,20);
    down=setInterval(goDown,20);

    
}
function goUp(x)
{
    var h1=document.getElementById("hider1");
    if(h1.offsetHeight<=80)
    {
        clearInterval(up);
        return;
    }
    h1.style.height=parseInt(h1.style.height)-1+"%";
}
function goDown(x)
{
    var h2=document.getElementById("hider2");
    if(h2.offsetHeight<=80)
    {
        clearInterval(down);
        return;
    }
    h2.style.top=parseInt(h2.style.top)+1+"%";
    h2.style.height=parseInt(h2.style.height)-1+"%";
}