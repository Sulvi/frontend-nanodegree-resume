 var bio = {
	"name" : "Jamie Campbell Pope ",
	"role" : "I.T Service Desk Analyst ",
	"welcomeMessage" : "Change your thoughts and you change your world. - Norman Vincent Peale ",
	"contacts" {
		"mobile" : "07586734297 ",
		"email" : "blablabla@oohlala.com ",
		"github" : "Sulvi ",
		"location" : "Hebden Bridge "
	},
	"skills" ["Problem Solver ", "Logical thinker ", "Java ", "HTML & CSS ", "JavaScript "]
};

 var work = {
	"jobs" [
		{
			"employer" : "Provident ",
			"title" : "I.T Service Desk Analyst ",
			"location" : "Bradford ",
			"dates" : "03 Nov 2014 - Present "
		},
		{
			"employer" : "HBOS plc ",
			"title" : "Retail Fraud Officer ",
			"location" : "Halifax Town ",
			"dates" : "Sept 2008 - Dec 2008 "
		}
	]
}; 

var project = {
	"projects" [
		{
			"title" : "",
			"dates" : "",
			"description" : ""
		}
	]

};

var education = {
	"schools" [
		{
			"name" : "Staffordshire University ",
			"location" : "Stafford ",
			"degree" : "Computing Science ",
			"dates" : "Sept 2010 - April 2015 ",
			"url" : "www.staffs.ac.uk "
		},
		{
			"name" : "Huddersfield New College ",
			"location" : "Huddersfield ",
			"degree" : "BTEC Computer Media, Arts & Games Design ",
			"dates" : "Sept 2007 - April 2009 ",
			"url" : "www.huddnewcoll.ac.uk/ "
		}
	]
};

 if (bio.skills.length > 0)
{

	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
} 

for (jobs in work.jobs)
{
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formmatedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry: last").append(formmatedEmployerTitle);
}