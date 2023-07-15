var s="";
function val(num)
{
    if(s=="0")
    {
        s="";
    }
    s+=num;
    document.getElementById("first").innerHTML=s;
}
function equ()
{
    var val1=eval(s);
    s=val1;
    document.getElementById("first").innerHTML=s;
}
function clr()
{
    s="0";
    document.getElementById("first").innerHTML=s;
    s="";
}
function del()
{
    s=s.substring(0,s.length-1);
    if(s=="")
    {
        s="0";
    }
    document.getElementById("first").innerHTML=s;
}