/*
This is empty on purpose! Your code to build the resume will go here.
 */
$("#mapDiv").append(googleMap);
// bio["city"] = "Sandy Springs";
// $("#main").append(bio["city"]);
var bio = {
    name: "Kevin Lanzing",
    role: "Web Developer",
    contacts: {
        mobile: "<a href='tel:678-448-2814'>678-448-2814</a>",
        email: "<a href='mailto:klanzing@gmail.com'>klanzing@gmail.com</a>",
        github: "<a href='https://gist.github.com/M0merath'>https://gist.github.com/M0merath</a>",
        location: "<a href='http://www.suwanee.com/'>Suwanee, GA</a>"
    },
    biopic: "C:\\Users\\USER\\Documents\\Atom\\Web Dev Portfolio\\resume\\images\\me_in_cafe.jpg",
    welcomeMessage: "Web Developer looking to help develop, maintain, and host web apps.",
    skills: ["Web Development <em>(HTML, CSS, Javascript, Flask)</em>", "Coding <em>(Python, Java, C++)</em>", "Database <em>(SQLite, postgreSQL)</em>", "Graphic Design <em>(Photoshop, CorelDraw)</em>", "Teaching (College)"]
};
//var name = bio.name;
//var formattedName = HTMLheaderName.replace("%data%", name);
//var role = bio.role;
//var formattedRole = HTMLheaderRole.replace("%data%", role);
//var contact = bio.contact;
//var formattedContact = HTMLemail.replace("%data%", contact);
//var picture = bio.picture;
//var formattedPicture = HTMLbioPic.replace("%data%", picture);
//var welcome = bio.welcome;
//var formattedWelcome = HTMLwelcomeMsg.replace("%data%", welcome);
//var skills = bio.skills;
//var formattedSkills = HTMLskills.replace("%data%", skills);
//$("#header").append(formattedName);
//$("#header").append(formattedRole);
//$("#header").append(formattedContact);
//$("#header").append(formattedPicture);
//$("#header").append(formattedWelcome);
//$("#header").append(formattedSkills);
var work = {
    "jobs": [{
        "employer": "Chattahoochee Technical College",
        "title": "Adjunct Instructor of American Government",
        "dates": "2010-2018",
        "location": "Acworth, GA",
        "description": "Taught American Government in a college environment. Online and on-site courses.",
        "url": "http://www.chattahoocheetech.edu/"
    }, {
        "employer": "Clockwork Colossus Games",
        "title": "Game Designer",
        "dates": "2010-2013",
        "location": "Buford, GA",
        "description": "Designed, produced, and sold independent board games like Flash Point: Fire Rescue (later licensed to Indie Boards & Cards)",
        "url": "http://indieboardsandcards.com/"
    }, {
        "employer": "Japan-America Society of Georgia",
        "title": "Summer Intern",
        "dates": "2008",
        "location": "Atlanta, GA",
        "description": "Assisted with planning of our annual JapanFest. Designed T-shirts for the event.",
        "url": "http://www.jasgeorgia.org/"
    }, {
        "employer": "Target Roswell",
        "title": "Backroom Day Employee",
        "dates": "2009",
        "location": "Roswell, GA",
        "description": "Stocked and stored inventory; retail work",
        "url": "https://www.target.com/"
    }]
};
var education = {
    "schools": [{
        "name": "Texas A&M University",
        "dates": "2007-2009",
        "location": "College Station, TX",
        "majors": ["International Affairs"],
        "degree": "MA",
        "url": "https://www.tamu.edu/"
    }, {
        "name": "Georgia College",
        "dates": "2003-2007",
        "location": "Milledgeville, GA",
        "majors": ["Political Science"],
        "degree": "BA",
        "url": "http://www.gcsu.edu/"
    }],
    "onlineCourses": [{
    	"title": "Full-Stack Developer Program",
    	"school": "Udacity",
    	"dates": "2017-2018",
    	"url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
    }, {
        "title": "Intro to Programming",
        "school": "Udacity",
        "dates": "2017-2017",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }]
};
var projects = {
    "projects": [
    {   "title": "Udacity Full-Stack Developer",
        "description": "An online course on web development, version control, servers, and code refactoring. Est. completion: Dec 2017.",
        "dates": "2017-2018",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4mpZdxeWyK-W1KcFCSBXmFRYAwmCN_cgcn8wEYAJRUbUrWrA"],
        "url": "https://www.udacity.com/"
    }, {
        "title": "Udacity Intro to Programming",
        "description": "An online course on the fundamentals of programming, from HTML to CSS to Python and Javascript. Completed in May.",
        "dates": "2017",
        "images": ["https://lh3.googleusercontent.com/-osRkx7imz2M/VrTxpdY6rhI/AAAAAAABGD4/CvoOSnNHPB8/s640/blogger-image-1553734871.jpg"],
        "url": "https://www.udacity.com/"
    }, {
        "title": "Flash Point: Fire Rescue",
        "description": "A cooperative firefighting game for the whole family, designed by Kevin Lanzing (AKA: Me) and published by Indie Boards and Cards",
        "dates": "2011",
        "images": ["http://www.theboardgamefamily.com/wp-content/uploads/2012/03/FlashPoint-all.jpg"],
        "url": "http://indieboardsandcards.com/"
    }]
};
//HTMLworkStart.replace("%data%", work[job]);
//replace("%data%",
//function displayWork() {
//  for (job in work){
//      if (work.hasOwnProperty(job)) {
//          $("#workExperience").append(HTMLworkStart);
//          var formattedEmployer = HTMLworkEmployer.replace("%data%", work[job].employer);
//          var formattedTitle = HTMLworkTitle.replace("%data%", work[job].title);
//          var formattedEmployerTitle =
//            formattedEmployer + formattedTitle;
//          $(".work-entry:last").append(formattedEmployerTitle);
//          var formattedDates = HTMLworkDates.replace("%data%", work[job].dates);
//          $(".work-entry:last").append(formattedDates);
//          var formattedDescription = HTMLworkDescription.replace("%data%", work[job].description);
//          $(".work-entry:last").append(formattedDescription);
//        }
//      }
//}
//displayWork();
//$("#main").append(work["position"]);
//$("#main").append(education.name);
//$(document).click(function(loc) {
//  logClicks (event.pageX, event.pageY);
//});
//$("#lets-connect").append(internationalizeButton);
//function inName() {
//  var intlName = bio.name;
//  var nameArray = intlName.split(" ");
//nameArray[0] = nameArray[0].substr(0,1).toUpperCase() + nameArray.substr(1).toLowerCase();
//  nameArray[1] = nameArray[1].toUpperCase();
//  intlName = nameArray.join(" ");
//  intlName = intlName[0].toUpperCase() + intlName.substr(1);
//  var name = intlName;
//  var formattedName = HTMLheaderName.replace("%data%", name);
//  return formattedName
//  var project1 = HTMLprojectStart.replace("%data%", name);
//  var project2 = HTMLprojectStart.replace("%data%", name);
//$("#header").append(formattedName);
//}
bio.display = function() {
    //$("#header").append(HTMLheaderName);
    //formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    //$(".bio-entry:last").append(formattedRole);
    //formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    //$(".bio-entry:last").append(formattedMobile);
    //formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    //$(".bio-entry:last").append(formattedEmail);
    //formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    //$(".bio-entry:last").append(formattedGithub);
    //formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    //$(".bio-entry:last").append(formattedLocation)
    var name = bio.name;
    var formattedName = HTMLheaderName.replace("%data%", name);
    var role = bio.role;
    var formattedRole = HTMLheaderRole.replace("%data%", role);
    var email = bio.contacts.email;
    var formattedEmail = HTMLemail.replace("%data%", email);
    var mobile = bio.contacts.mobile;
    var formattedMobile = HTMLmobile.replace("%data%", mobile);
    var github = bio.contacts.github;
    var formattedGithub = HTMLgithub.replace("%data%", github);
    var location = bio.contacts.location;
    var formattedLocation = HTMLlocation.replace("%data%", location);
    var picture = bio.biopic;
    var formattedPicture = HTMLbioPic.replace("%data%", picture);
    var welcome = bio.welcomeMessage;
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", welcome);
    var skills = bio.skills;
    var formattedSkills = HTMLskills.replace("%data%", skills);
    $("#header").prepend(formattedRole, formattedName, formattedPicture);
    $("#topContacts, #footerContacts").append(formattedEmail, formattedMobile, formattedGithub, formattedLocation);
    $("#header").append(formattedWelcome, HTMLskillsStart);
    for (var skill = 0; skill < bio.skills.length; skill++) {
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    }
};
work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace('#', work.jobs[job].url);
        formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        //for (var project in projects.projects) {
        //  if (projects.projects.hasOwnProperty(project)) {
        $("#projects").append(HTMLprojectStart);
        formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace('#', projects.projects[project].url);
        $(".project-entry:last").append(formattedTitle);
        formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        for (imageCount = 0; imageCount < projects.projects[project].images.length; imageCount++) {
            //projects.projects[project].images.forEach(function(image) {
            formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
            $(".project-entry:last").append(formattedImage);
        }
        //formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        //$(".project-entry:last").append(formattedImage);
    }
    //  }
};
education.display = function() {
    //for (var school in education.schools) {
    //if (education.schools.hasOwnProperty(school)) {
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);
        formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name).replace('#', education.schools[school].url);
        //HTMLschoolName.replace('%data%', school.name).replace('#', school.url);
        $(".education-entry:last").append(formattedSchool);
        formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);
        formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);
        formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);
    }
    $("#education").append(HTMLonlineClasses);
    for (var course = 0; course < education.onlineCourses.length; course++) {
        $("#education").append(HTMLschoolStart);
        formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace('#', education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOnlineTitle);
        //formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        //$(".education-entry:last").append(formattedOnlineSchool);
        formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        //formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        //$(".education-entry:last").append(formattedOnlineURL);
        //$(".education-entry:last").append(HTMLschoolStart);
    }
};
//  }
bio.display();
work.display();
projects.display();
education.display();
