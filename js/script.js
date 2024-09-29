

function fillSkills() {
    var skills = ["English", "french", "Malgasy", "Spanish"];
    var result = "";
    for(let i =0 ; i <  skills.length; i++) {
        result += "<div class='skill'>";
        result+= skills[i];
        result += "<div><div class='progress'></div></div></div>"
    }

    document.getElementById("skills").innerHTML = result;
}

function fillEducations() {
    var years  = ["2023-ongoing", "2018-2020" , "2013-2015"];
    var educations = ["LaSalle College - Canada (Montreal)", "43 Air school - South Africa (Port alfred)","lycee Saint Michel Amparibe - Madagascar"];
    var links = ["https://www.lasallecollege.com/", "https://www.43airschool.com/","https://en.wikipedia.org/wiki/College_of_Saint_Michael,_Amparibe"];
    var result = "";
    for(let i =0 ; i <  educations.length; i++) {
        result += "<div class='education'>";
        result += "<p>" + years[i] + "</p>";
        result += "<p> <a href ='"+ links[i]+"' >"+ educations[i] + "</a></p>";
        result += "</div>";
    }
    document.getElementById("educations").innerHTML = result;
    
}

function fillHobbies() {
    var hobbies = ["Body building", "Gaming" , "music"];
    var result = "";
    for(let i = 0; i < hobbies.length; i++) {
        result += "<p class='hobby'>";
        result += hobbies[i];
        result += "</p>";
    }
    document.getElementById("hobbies").innerHTML = result;
}



///////////////////



fillSkills();
fillHobbies();
fillEducations();