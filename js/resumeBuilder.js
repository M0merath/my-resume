$("#mapDiv").append(googleMap);
var bio = {
    name: "Kevin Lanzing",
    role: "Web Developer",
    contacts: {
        mobile: "<a href='tel:678-448-2814'>678-448-2814</a>",
        email: "<a href='mailto:klanzing@gmail.com'>klanzing@gmail.com</a>",
        github: "<a href='https://github.com/M0merath'>https://github.com/M0merath</a>",
        location: "<a href='http://www.suwanee.com/'>Suwanee, GA</a>"
    },
    biopic: "images/ME_Wedding.jpg",
    welcomeMessage: "Web Developer with graphic design experience looking to help develop, maintain, and host web apps.",
    skills: ["Web Development <em>(HTML, CSS, Javascript, Flask)</em>", "Coding <em>(Python, Java, C++)</em>", "Database <em>(SQLite, postgreSQL)</em>", "Graphic Design <em>(Photoshop, CorelDraw)</em>", "Teaching (College)"]
};
//
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
    	"name": "Kansai Gaidai University",
    	"dates": "2005-2006",
    	"location": "Hirakata, Japan",
    	"majors": ["Political Science", "Asia Studies"],
    	"degree": "Asia Studies Certificate",
    	"url": "https://www.kansaigaidai.ac.jp/asp/"
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
    {   "title": "Gastronaut.com",
        "description": "A recipe website, with login through Google+ and Facebook. Users can submit recipes, which are added to a growing database. Hosted on an Amazon Web Services server, with Ubuntu OS.",
        "dates": "2017",
        "images": ["images/gastronaut.png"],
        "url": "https://gastronaut-com.herokuapp.com/"
    }, {
        "title": "Korean BBQ Finder",
        "description": "Finds great Korean BBQ in Duluth, GA. Combines Google Maps and Foursquare API to find up-to-date restaurant data and plots locations to a map. Responsive design supports various screen sizes. Search function (using Knockout.js) updates the map in real-time.",
        "dates": "2017",
        "images": ["images/Korean_BBQ_Finder.png"],
        "url": "https://www.udacity.com/"
    }, {
        "title": "Flash Point: Fire Rescue",
        "description": "A cooperative firefighting game for the whole family, designed by Kevin Lanzing (AKA: Me) and published by Indie Boards and Cards. Recently released (2018) as an app for PC and iOS.",
        "dates": "2011",
        "images": ["http://www.theboardgamefamily.com/wp-content/uploads/2012/03/FlashPoint-all.jpg"],
        "url": "http://indieboardsandcards.com/"
    }]
};

bio.display = function() {
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
        $("#projects").append(HTMLprojectStart);
        formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace('#', projects.projects[project].url);
        $(".project-entry:last").append(formattedTitle);
        formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        for (imageCount = 0; imageCount < projects.projects[project].images.length; imageCount++) {
            formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
            $(".project-entry:last").append(formattedImage);
        }
    }
};
education.display = function() {
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);
        formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name).replace('#', education.schools[school].url);
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
        formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);
        formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedOnlineDates);
    }
};
bio.display();
work.display();
projects.display();
education.display();
