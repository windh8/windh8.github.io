/*Functionality for this file?
				To implement a new function and add a Event Handler function to handle
				on-click events for the SVG Skills Window (#skill_window)

  Is this file in testing?
  				Yes.

  How many charts will this handle?
				One at first, to test it out.
				If successful then it will be modified and utilized to handle multiple charts.
*/
$(function(){
	var count = 1;

	$(".skill_window").click(function(){
		if(count % 2 === 1){
			$("#Java").css("visibility", "visible");
			$("#SQL").css("visibility", "visible");
			$("#C").css("visibility", "visible");
			$("#JavaScript").css("visibility", "visible");
			$("#HTML").css("visibility", "visible");
			$("#CSS").css("visibility", "visible");
		}
		else
		{
			$("#Java").css("visibility", "hidden");
			$("#SQL").css("visibility", "hidden");
			$("#C").css("visibility", "hidden");
			$("#JavaScript").css("visibility", "hidden");
			$("#HTML").css("visibility", "hidden");
			$("#CSS").css("visibility", "hidden");
		}
		count = count + 1;
	});
});

/*Result of Test?
			Success>

  Next Phase?
  			1.	Think of (and possibly code) an animation to utilize when openning/closing the chart

  			2.	Create multiple (three - four) skill chart menus:
  															Back-End, Front-End, Editors/Tools

			3.	Modify index.html to include extra charts

  			4.	Modify the file 'svg_functions.js' to account for the added charts:
  					- Additional Skill Paths
  					- Position for the text to be displayed for each path

  			5.	Modify the file 'svg.css' to account for the style for the new paths and charts

  			6.	Modify this file to handle the additional charts 
*/