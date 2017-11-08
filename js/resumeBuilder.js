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
        mobile: "678-448-2814",
        email: "klanzing@gmail.com",
        github: "https://gist.github.com/M0merath",
        location: "Sandy Springs, GA"
    },
    biopic: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/8/000/203/11e/290fd62.jpg",
    welcomeMessage: "Kevin is a teacher, game developer, and all-around cool guy!",
    skills: [" Python", " Javascript", " Adobe Creative Suite", " HTML", " CSS"]
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
        "dates": "2010-2017",
        "location": "Acworth, GA",
        "description": "Taught American Government in a college environment"
    }, {
        "employer": "Target Roswell",
        "title": "Backroom Day Employee",
        "dates": "2009",
        "location": "Roswell, GA",
        "description": "Stocked and stored inventory; retail work"
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
        "title": "Intro to Programming",
        "school": "Udacity",
        "dates": "2017-2017",
        "url": "udacity.com"
    }]
};
var projects = {
    "projects": [{
        "title": "Udacity Intro to Programming",
        "description": "An online course on the fundamentals of programming, from HTML to CSS to Python and Javascript.",
        "dates": "2017",
        "images": ["https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAjXAAAAJDAzMmNlYmVjLTRmZmQtNGM5ZC1iMGJjLWM2MDUzZjhmZWI5Mg.png"]
    }, {
        "title": "Flash Point: Fire Rescue",
        "description": "A cooperative firefighting game for the whole family, designed by Kevin Lanzing (AKA: Me) and published by Indie Boards and Cards",
        "dates": "2011",
        "images": ["http://www.theboardgamefamily.com/wp-content/uploads/2012/03/FlashPoint-all.jpg"]
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
        formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
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
        formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
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
    //for (var institution in education.schools) {
    //if (education.schools.hasOwnProperty(institution)) {
    for (var institution = 0; institution < projects.projects.length; institution++) {
        $("#education").append(HTMLschoolStart);
        formattedSchool = HTMLschoolName.replace("%data%", education.schools[institution].name).replace('#', education.schools[institution].url);
        //HTMLschoolName.replace('%data%', school.name).replace('#', school.url);
        $(".education-entry:last").append(formattedSchool);
        formattedDates = HTMLschoolDates.replace("%data%", education.schools[institution].dates);
        $(".education-entry:last").append(formattedDates);
        formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[institution].majors);
        $(".education-entry:last").append(formattedMajor);
        formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[institution].degree);
        $(".education-entry:last").append(formattedDegree);
        formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[institution].location);
        $(".education-entry:last").append(formattedLocation);
    }
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    //for (var course in education.onlineCourses) {
    for (var course = 0; course < education.onlineCourses.length; course++) {
        //  if (education.onlineCourses.hasOwnProperty(course)) {
        formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        $(".education-entry:last").append(formattedOnlineTitle);
        formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedOnlineSchool);
        formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOnlineURL);
        $(".education-entry:last").append(HTMLschoolStart);
    }
};
//  }
bio.display();
work.display();
projects.display();
education.display();
