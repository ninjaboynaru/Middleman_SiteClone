





/* Quick And Dirty with no dependancy on JQUERY
*  Assumes an element with id=nav
*/
function ToggleNav()
{
	var nav = document.getElementById("nav");
	console.log(nav.style.display);
	if(getComputedStyle(nav, null).display != "none")
	{
		nav.style.display = "none";
	}
	else
	{
		nav.style.display = "block";
	}
}