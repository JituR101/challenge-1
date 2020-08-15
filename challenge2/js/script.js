function toggle()
{
    var close = document.getElementById("navbar-close");
    var hamburger = document.getElementById("navbar-hamburger");

    if (close.style.display == "inline")
    {
        close.style.display = "none";
        hamburger.style.display = "inline";
    }
    else
    {
        close.style.display = "inline";
        hamburger.style.display = "none";
    }
}