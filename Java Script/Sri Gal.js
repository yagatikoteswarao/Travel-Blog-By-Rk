function colo()
{
    var col=["S1.jpg","S2.jpg","S3.jpg","S4.jpg","S5.jpg","S6.jpg","S7.jpg","S8.jpg"]
    var len=col.length;
    var ran=Math.random()*len;
    var rannum=Math.round(ran)
    document.getElementById("a").style.backgroundImage="URL(../Asset/Images/"+col[rannum]+")"
    var updatethetime=setTimeout(function(){colo()},5000)
}
// from Here Gallary Code Starts
function imgK(pic,heading,discription)
{
    document.getElementById("bigscreen").removeAttribute("style")
    document.getElementById("imgheading").innerHTML=heading;
    document.getElementById("imgparagraph").innerHTML=discription;
    bigscreen.style.display="flex"
    fullImg.src=pic;
}
function imgV()
{
    document.getElementById("bigscreen").setAttribute("style","display:none;")
}