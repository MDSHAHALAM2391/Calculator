function number(value)
    {
        document.getElementById("inp1").value += value
    }
function equal()
{
    document.getElementById("inp1").value = eval(document.getElementById("inp1").value)
}
function sin()
{
    document.getElementById("inp1").value = Math.sin(document.getElementById("inp1").value)
}
function cos()
{
    document.getElementById("inp1").value = Math.cos(document.getElementById("inp1").value)
}
function tan()
{
    document.getElementById("inp1").value = Math.tan(document.getElementById("inp1").value)
}
function log()
{
    document.getElementById("inp1").value = Math.log(document.getElementById("inp1").value)
}
function clr(value)
{
    document.getElementById("inp1").value = value;
}
function backspace()
{
    let a = document.getElementById("inp1").value
    document.getElementById("inp1").value = a.substr(0,a.length-1)
}