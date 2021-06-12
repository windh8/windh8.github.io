/*Creator: Heaten Mistry*/

/*The skill & skillLevel arrays below are used to match skills with their corresponding skill
 *level values*/
var skill = ["Java", "C", "SQL", "CSS", "HTML", "JavaScript"];
var skillLevel = [90, 70, 80, 85, 83, 85];

/*The o_t_span arrays, below, correspond to the x & y coordinate values that certain tspan elements
  (containing the skill name, i.e.: Java, C, SQL, ...) will have*/
var o_t_span_x = ["195", "208", "195", "195", "188", "167"];
var o_t_span_y = ["220", "220", "220", "220", "220", "220"];

/*The t_span arrays, below, correspond to the x & y coordinate values that certain tspan elements
  (containing the skill percentage values, i.e.: 50%, 70%, 100%, ...) will have*/
var t_span_x = ["203", "203", "203", "203", "203", "203"];
var t_span_y = ["245", "245", "245", "245", "245", "245"];

/*The t_span_f_size array below corresponds to the font-size that the skills, in the skill array
 *above, would have, based on their index*/
var t_span_f_size = ["30px", "30px", "30px", "30px", "27px", "25px"];




/*When the client's mouse hovers over an SVG Path on the web document, the function 
 *SVG_Mouse_On_Path will be executed. What this function does is that it modifies the text element
 *located (positionally) inside the skill_window element, such that the text reflects the skill
 *related to the path that is currently being hovered over.*/
function SVG_Mouse_On_Path(param){
    var info = document.getElementById("skill-info");
    var result;
    var i;
    var skill_name;
    var skill_value;
    for(i = 0; i < skill.length; i++){
      if(skill[i] == param.id){
        result = "<tspan id=\"text_n\" x=\"195\" y=\"220\">" + param.id + "</tspan>";
        result += "<tspan id=\"text_p\" x=\"195\" y=\"220\">" + skillLevel[i] + "%</tspan>";
        break;
      }
    }
    info.innerHTML = result;

    skill_name = document.getElementById("text_n");
    skill_value = document.getElementById("text_p");
    skill_name.style.fontSize = t_span_f_size[i];
    skill_value.style.fontSize ="20px";
    skill_name.setAttribute("x", o_t_span_x[i]);
    skill_name.setAttribute("y", o_t_span_y[i]);
    skill_value.setAttribute("x", t_span_x[i]);
    skill_value.setAttribute("y", t_span_y[i]);
}



/*When the client's mouse hovers over an SVG Path on the web document, the function 
 *SVG_Mouse_Off_Path will be executed. What this function does is that it re-modifies the text element
 *located (positionally) inside the skill_window element, such that the text reverts back to what it
 *was originally ("Skills").*/


function SVG_Mouse_Off_Path(param){
    var info = document.getElementById("skill-info");
    info.innerHTML = "Skills";
}

