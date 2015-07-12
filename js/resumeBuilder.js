$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	
	logClicks(x, y);
});

var bio = {
	"name" : "James R. Hackney",
	"role" : "Software Developer",
	"contacts" : {
		"mobile" : "417-860-1387",
		"email" :  "jhackney01@outlook.com",
		"gitHub" : "https://github.com/jimhackney",
		"twitter": "@developerWannab",
		"location" : "Columbia, MO "
	},	
	"welcomeMessage" : "<br>Welcome. My name is Jim Hackney and I am a junior VB.NET developer working towards becoming a front-end developer",
	"skills" : [
		"C#,","VB.NET,","Java,","HTML/CSS,","JavaScript,",
		"Business Analysis,","Git/GitHub,","Bootstrap,","T-SQL,",
		"PLSQL,","Toad,","Systems Analysis and Design"
	],
	"bioPic" : "images/Jim_Hackney.jpg"
}

function displayBio() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#header").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#header").append(formattedEmail);

	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
	$("#header").append(formattedGitHub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#header").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#header").append(formattedLocation);

	var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);

	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPic);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);	
		
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);	
		
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);	
		
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);	
		
		formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
		$("#skills").append(formattedSkill);	
		
		formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
		$("#skills").append(formattedSkill);	
		
		formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
		$("#skills").append(formattedSkill);	
		
		formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
		$("#skills").append(formattedSkill);	
		
		formattedSkill = HTMLskills.replace("%data%", bio.skills[8]);
		$("#skills").append(formattedSkill);	
		
		formattedSkill = HTMLskills.replace("%data%", bio.skills[9]);
		$("#skills").append(formattedSkill);	
		
		formattedSkill = HTMLskills.replace("%data%", bio.skills[10]);
		$("#skills").append(formattedSkill);	
		
		formattedSkill = HTMLskills.replace("%data%", bio.skills[11]);
		$("#skills").append(formattedSkill);		
	}	
}

displayBio()

var work = {
	"jobs": [
		{
			"employer":  "Missouri Department of Health and Senior Services",
			"title": "Information Technologist II, Software Developer",
			"location": "Jefferson City, MO",
			"dates": "May 2015 - Present",
			"description": "I'm presently modernizing a 3 year old web app that DHSS employees use to sign up for instructor led training by redesigning the front end and making it responsive using Bootstrap 3, CSS3, HTML5 and ASP.NET. I'm also updating the back end (VB.NET) where required such as upgrading from the System.Web.Mail namespace to System.Net.Mail namespace."						
		},
		{
			"employer": "Missouri Department of Health and Senior Services",
			"title": "Information Technologist II, Business Analyst",
			"location": "Jefferson City, MO",
			"dates": "May 2014 - May 2015",
			"description": "• Performed research to assist project manager in development of project scope <br> • Conducted business user, developer and stakeholder interviews <br> • Gathered, analyzed, defined and documented technical and functional requirements <br> • Used waterfall analysis and design models and used the Unified Modeling Language (UML) for process modeling and use cases <br> • Used MS Visio to create context diagrams, data flow diagrams, cross-functional flow charts, work flow flowcharts, activity diagrams, sequence diagrams and use case diagrams <br> • Used MS Word and/or MS Excel to create detailed narrative use cases, event decomposition and event tables and process narratives <br> • Interacted with business users and software developers to ensure reports and models are developed to the specification <br> • Knowledge of Health Level 7 (HL7) messaging <br> • Knowledge of Extensible Markup Language (XML)" 
		},		
		{
			"employer": "Paperwise",
			"title": "Support Technician",
			"location": "Springfield, MO",
			"dates": "September 2013 - November 2013",
			"description": "• Provided help desk support for 16 companies consisting of more than 400 computers in 21 locations throughout the United States (Windows XP, Windows 7, Windows 8, Windows 8.1) <br> • Monitored and responded quickly and effectively to requests received through the IT help desk <br> • Monitored Service Desk for tickets assigned to queue and processed first-in first-out based on priority <br> • Modified configurations, utilities, software default settings, etc. for the local workstation, Active Directory, and MS Exchange <br> • Utilized and maintained the help desk tracking software <br> • Documented internal procedures; assisted with on-boarding of new users <br> • Ensured each workstation had a computer, monitor, keyboard, mouse, hard drive, and any additional specialized equipment <br> • Installed, tested and configured new workstations, servers, peripheral equipment and software <br> • Performed timely workstation and server hardware and software upgrades as required" 
		},
		{
			"employer": "Associated Electric Cooperative Inc.",
			"title": "Helpdesk Support Intern",	
			"location": "Springfield, MO",
			"dates": "January 2013 – August 2013",
			"description": "• Completed 100 notebook builds and 43 desktop builds <br> • Created 27 model/job specific images using Clonezilla <br> • Provided help desk support and resolved problems to the end user’s satisfaction <br> • Monitored and responded quickly and effectively to requests received through the IT help desk <br> • Monitored Service Desk for tickets assigned to my queue and processed first-in first-out based on priority <br> • Modified configurations, utilities, software default settings, etc. for the local workstation <br> • Utilized and maintained the help desk tracking software <br> • Documented internal procedures <br> • Assisted with on-boarding of new users <br> • Ensured each workstation had a computer, monitor, keyboard, mouse, hard drive, and any additional specialized equipment <br> • Installed, tested and configured new workstations, peripheral equipment and software <br> • Reported issues to the Service Desk for escalation <br> • Performed timely workstation hardware and software upgrades as required"
		},
		{
			"employer": "Associated Electric Cooperative Inc.",
			"title": "Programming Intern",
			"location": "Springfield, MO",
			"dates": "May 2012 – August 2012",
			"description": "• Member of a software development team tasked with creating a system that streamlined and automated the key performance indicator reporting process, greatly decreasing the time it took to create reports <br> • Translated Transact-SQL queries into LINQ-to-SQL queries and tested them in LINQPad for correctness <br> • Once queries verified, created .NET libraries in Visual Studio 2010 using LINQ-to-SQL query methods to pull data from MS SQL Server database and LINQ-to-XML to translate pulled data into XML <br> • Created LINQ-to-XML queries to pull data from XML reports on MS SQL Server database <br> • Transformed XML data into needed format for output to SQL Server Reporting Services using XSLT and XSD <br> • Created unit and functional tests to test .NET libraries methods <br> • Created reports based upon Harvester data using SQL Server Reporting Services"
		},
		{
			"employer": "Battery Doctors of the 4-States",
			"title": "Owner/Operator",
			"location": "Cassville, MO",			
			"dates": "July 2005 – August 2009",
			"description": "• Owner and operator of a Battery reconditioning and recycling service <br> • Collected old automobile/marine/industrial lead-acid batteries and reconditioned them with a proprietary chemical for resale <br> • Recycled all batteries that did not meet reconditioning specifications <br> • Interfaced with customers on a daily basis and performed all bookkeeping functions."			
		},
		{
			"employer": "Georges Foods Llc.",
			"title": "Electrical Technician",
			"location": "Butterfield, MO",
			"dates": "August 2005 – June 2006",
			"description": "• Applied electrical, mechanical, and pneumatic theory to maintain, troubleshoot and repair automation and control system and ancillary electrical equipment in a large chicken processing plant <br> • Diagnosed causes of electrical malfunctions or failure of operational equipment and performed preventative and corrective maintenance on Programmable Logic Controllers, relay control circuits, 3-phase 480 VAC Motors and control circuitry, single-phase AC Motors and control circuits, 24V DC control circuits, drum switches, limit switches, contact relays, proximity switches, photoelectric, temperature, pressure, and position sensors <br> • Read and interpreted blueprints, schematics, and ladder diagrams <br> • Ensured proper set-points, schedules and sequences of operation were correctly programmed in PLC's <br> • Performed inspections and preventive maintenance tasks for the control systems including point-to-point check-out, sensor calibration, and software back-up <br> • Installed all electrical wiring in plant and maintained records of all activities"		
		},
		{
			"employer": "LightCore",
			"title": "Network Technician II",
			"location": "Cassville, MO",
			"dates": "March 2000 – July 2005",
			"description": "• Maintained an 150+ miles of fiber as well as 17 points of presence (POP) throughout Southwest Missouri and Northwest Arkansas for an independent local telephone company <br> • Equipment included Nortel TransportNode Optical Add/Drop multiplexers and regenerators (both BSLR and Linear OC-48's), Nortel TransportNode Optical Add/Drop Multiplexers (OC-12), Lucent DDM-1000 M13 multiplexers and Telecom Systems 828 M13 multiplexers <br> • Inside plant responsibilities included installation, maintenance and repair of optical and digital multiplexers, rectifiers and batteries <br> • Performed DS1, DS3, OC3, OC12 and OC48 physical and software circuit installation, troubleshooting, and repair <br> • Outside plant responsibilities included providing locate and watchdog services along fiber route, supervise cable moves and installations, and respond to fiber cuts to perform emergency restorations (mechanical splice) as well as permanent restorations (fusion splice)"			
		},
		{
			"employer": "Broadwing Communications",
			"title": "Switch Technician II",
			"location": "Joplin, MO",
			"dates": "February 1998 – March 2000 ",
			"description": "• Provided on-site maintenance for 77k+ port Nortel DMS-250 Supernode equipped with Spectrum Peripheral Modules (SPM's), Tekelec Eagle STP, Alcatel 1630, 1631, and 1633 Digital Cross-Connect systems (DXC), Telecom Solutions IDST 1/0 DXC, IEX SCP, IEX Switch, Nortel OC-48's and OC-192's, as well as Ditech and Tellabs echo cancellers, Nortel rectifiers, and facility batteries <br> • Performed preventative maintenance IAW vendor and Broadwing standards on all equipment <br> • Performed billing and image/database backups on a daily basis for all equipment <br> • Performed preload tasks and assisted Nortel in software upgrades on DMS core <br> • Performed XPM software upgrades (to include SPM's) <br> • Applied software patches to DMS as required <br> • Isolated alarms, tested and replaced hardware on all equipment supported <br> • Installed, tested, turned-up and troubleshot circuits, from DS0 to OC-192 <r> • Provided technical support to network management center (NMC) for all equipment and circuit troubleshooting as needed"
		},
		{
			"employer": "MCI Telecommunications Corporation",
			"title": "Engineer I",
			"location": "Cary, NC",
			"dates": "July 1997 – February 1998 ",
			"description": "• Provided technical support to National Switch Operations (NSO) on all network platforms supported <br> • Provided Project Management functions for NSO to include gathering organizational requirements, tracking and resolving issues, coordinating rollout of new platforms between development, technical support groups and NSO <br> • Managed multiple highly technical projects concurrently <br> • Prepared executive summary reports defining project statuses and delivered project presentations to network surveillance engineers and management <br> • Determined NSO training needs and developed training programs to meet those needs"
		},
		{
			"employer": "MCI Telecommunications Corporation",
			"title": "Network Surveillance Engineer II",
			"location": "Cary, NC",
			"dates": "July 1996 – July 1997",
			"description": "• Ensured optimal performance of all switched service platforms by providing real-time monitoring and remote maintenance support of MCI's switched network and subsystems <br> • Central control point for switched network and subsystem outages <br> • 1st level field support for all switched service platforms, to include DSC DEX 600-E Megahub and Megahub STP, DMS-250 Supernode, AXE-10 International Gateway, Stratus XA/2000 midrange computer, and VAX 4500A/7610 computers <br> •Managed and monitored switch subsystem networks, to include Frame Relay, CCS7, X.25, and SNA <br> • Interfaced with the customers, data test centers, and numerous second and third level support groups on a daily basis <br> • Performed and tracked preventive maintenance, switch database maintenance, off-hour provisioning, and real-time ANI fraud deactivation of DMS-250 and DEX 600-E <br> • Improved call and network stability through real-time root cause analysis <br> • Primary instructor for new personnel on DSC platforms; hired as Network Surveillance Engineer I"		
		},
		{
			"employer": "United States Army Reserve",
			"title": "Drill Sergeant",
			"location": "Durham, NC",
			"dates": "July 1996 – July 1997",
			"description":	"• Conducted Basic Combat training for all IET Soldiers in preparation for Advanced Individual Training; provided technical and tactical support on all training and logistical matters and responsible for the health, welfare, and supervision of approximately 240 soldiers assigned <br> • Planned and executed near flawless training events for hundreds of tactical and mission essential tasks for each training cycle <br> • Mastered the training and assisted in the implementation of over 40 Common Task Training tasks and drills for a company of basic training soldiers"
		},
		{
			"employer": "United States Army (Active Duty)",
			"title": "Electronics Instructor",
			"location": "Fort Gordon, GA",	
			"dates": "May 1995 – July 1996",
			"description":	"• Incorporated field experience and technical knowledge into lectures and managed group learning through practical, interactive hands-on practice <br> • Taught electronics theory and applications, to include AC/DC circuits, semiconductor devices, digital logic, test equipment, troubleshooting techniques, preventive maintenance and safety <br> • Received the United States Army Achievement Medal for performance"
		},
		{
			"employer": "United States Army (Active Duty)",
			"title": "Officer Candidate",
			"location": "Fort Benning, GA",
			"dates": "January 1995 – April 1995",
			"description": "• One of approximately one hundred soldiers selected from a pool of more than two thousand applicants to attend the fourteen week U.S. Army Officer Candidate School <br> • Received training in and demonstrated core leadership attributes and competencies, as well as leadership skills at the team and squad levels; Army values and ethics; the Army management systems <br> • Demonstrated knowledge of the orders process and troop leading procedures while executing small unit tactics, etc. <br>  • Did not graduate due to knee injury received in the twelfth week of school which required surgery and prevented me from completing the end of course physical fitness test"	
		},
		{
			"employer": "United States Army (Active Duty)",
			"title": "Telecommunications Installation Manager",
			"location": "Fort Huachuca, AZ",
			"dates": "January 1994 – December 1994",
			"description": "• Managed and supervised a team of up to twenty-five mobile communications-electronics installers responsible for installing Department of Defense LAN/WAN systems nationwide <br> • Coached and administered performance counselling and behavior management to employees <br> • Mediated conflicts and resolved disputes among employees <br> • Performed quality control checks of all work completed <br> • Scheduled daily work assignments and handled all personnel problems <br> • Reviewed specifications with project managers, modifying as needed <br> • Inspected and tested equipment to ensure compliance <br> • Installed, supervised, and performed quality control checks on the installation of work/bays/equipment racks, servers, workstations, modems, fiber optic cable, thinnet cable, category five cable, LAN cards, MAU's, DSX panels, fiber optic transceivers, repeaters, bridges, routers, and multiple types of connectors, both optical and copper <br> • Completed daily, weekly, monthly reports for upper management, trip reports, and gave daily presentation to customers, to include field grade and General officers <br> • Responsible for daily physical fitness requirements for all subordinates, sick call scheduling, daily work flow, subordinate pay problems and other soldier needs while on temporary duty <br> • Received the United States Army Commendation Medal for performance <br> • 504th Signal Battalion non-commissioned officer of the Quarter"
		},
		{
			"employer": "United States Army (Active Duty)",
			"title": "Training Manager",
			"location": "Fort Huachuca, AZ",
			"dates": "January 1993 – January 1994",
			"description": "• Managed staff training programs for up to 130 assigned personnel <br> • Identified, planned, organized, prioritized, scheduled and directed all company level training, to include physical fitness programs and tests, annual marksmanship qualifications, Nuclear, Biological and Chemical training, U.S. Army Common Task Training (CTT), and any specialized installation training personnel may have required prior to deploying on mission <br> • Managed the company urinalysis program"
		},
		{
			"employer": "United States Army (Active Duty)",
			"title": "Telecommunications Installer",
			"location": "Fort Huachuca, AZ",
			"dates": "February 1992 – January 1993 ",
			"description": "• Member of a mobile communications-electronics installation team responsible for the worldwide installation of telecommunications equipment, LAN/WAN systems, satellite facilities, and any other fixed-station communications required by the U.S. Army, Department of Defense, and/or U.S. State Department <br> • Installed iron work/bays/equipment racks, ran and terminated cables, from 25 to 100 pair data cables with wire wrap terminations, to coaxial cable with BNC connectors, to fiber optic cable with SC, FC, ST, SMA or biconic connectors <br> • Ran wiring for AC and/or DC power <br> • Ensured all grounding was in accordance with military standard <br> • Followed Engineering Installation Plans (EIP), read and interpreted block diagrams, flowcharts, and schematics"
		},
		{
			"employer": "United States Army (Active Duty)",
			"title": "Communications-Electronics Repair Supervisor",
			"location": "Daegu, Republic of Korea",
			"dates": "February 1990 – February 1992 ",
			"description": "• Member of a direct support/limited general support communications-electronics repair facility <br> • Performed and supervised the performance of quarterly, semi-annual, annual maintenance and limited emergency repair on the Defense Information Systems Agency (DISA) microwave network <br> • Performed and supervised the testing, troubleshooting, repair and maintenance of analog and digital circuitry on a variety of communications equipment including personal and military computer systems, facsimiles, teletypewriters, digital and analog microwave radios, multiplexers, digital telecommunications terminals and other miscellaneous equipment <br> • Installed, modified, and repaired personal computer hardware and software and provided technical assistance and training to system users <br> • Conducted fault analysis using standard electronic test equipment <br> • Localized and repaired at system, subsystem, and component level <br> • Supervised junior technicians performing all facets of electronics maintenance and repair and trained new personnel on proper maintenance and safety techniques <br> • Examined plans and specifications to determine work procedures and requisitioned needed parts and equipment <br> • Supervised the generation, updates and completion of work orders <br> • Conducted parts inventory and ordered parts <br> • Researched, analyzed, and compiled historical maintenance data <br> • Laterally promoted from Specialist to Corporal due to leadership position <br> • Received U.S. Army Commendation Medal for work performed." 
		}
	]
}

function displayWork() {
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerInfo = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerInfo);	
		
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);	
		$(".work-entry:last").append(formattedDescription);	
	}
}

displayWork();


var education = {
	"schools": [
		{
			"name": "Missouri State University",
			"location": "Springfield, MO",
			"degree": "BS",
			"major": "Technology Management (CIS), Minor: Information Technology Service Management",			
			"date": 2012,
			"url": "http://www.missouristate.edu/"
		},
		{
			"name": "Crowder College",
			"location": "Neosho, MO",
			"degree": "AA",
			"major": "General Studies",
			"date": 2007,
			"url": "http://www.crowder.edu/"
		},
		{
			"name": "Vernon College",
			"location": "Wichita Falls, TX",
			"degree": "Diploma",
			"major": "Digital Electronics Technology",
			"date": 1987,
			"url": "http://www.vernoncollege.edu/"
		}		
	]
}

education.display = function() {
	$("#education").append(HTMLschoolStart);		
	
	for(school in education.schools){
		
		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);		
		formattedSchool = formattedSchool.replace('#', education.schools[school].url)	
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var schoolInfo = formattedSchool + formattedDegree			
		$(".education-entry:last").append(schoolInfo);		

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);	

		var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].date);
		$(".education-entry:last").append(formattedDate); 	
		
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);		
	}
}

education.display();
	

var onlineClasses = {
	"onlineClasses": [
		{
			"title": "TCM 701 Project Management",
			"school": "University of Missouri",				
			"date": 2011,
			"url": "http://www.missouristate.edu/registrar/catalog/courses_im.htm#TCM701"
		},
		{
			"title": "MGT 600 Administrative, Organizational, and Operations Concepts for Managers",
			"school": "University of Missouri",				
			"date": 2011,
			"url": "http://www.missouristate.edu/registrar/catalog/courses_mg.htm#MGT600"
		},
		{
			"title": "ECO 600 Fundamentals of Economics",
			"school": "University of Missouri",			
			"date": 2013,
			"url": "http://www.missouristate.edu/registrar/catalog/courses_ec.htm#ECO600"
		},
		{
			"title": "Think. Create. Code (Processing.js)",
			"school": "University of Adelaide via EdX",				
			"date": 2015,
			"url": "https://s3.amazonaws.com/verify.edx.org/downloads/ef86d6c35f2a4e18a3cca603b4b65397/Certificate.pdf"
		},		
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",		
			"date": 2015,
			"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		},
		{
			"title": "Responsive Web Design Fundamentals",
			"school": "Udacity",			
			"date": 2015,
			"url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
		},
		{
			"title": "Responsive Images",
			"school": "Udacity",		
			"date": 2015,
			"url": "https://www.udacity.com/course/responsive-images--ud882"
		},
		{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",						
			"date": 2015,
			"url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",						
			"date": 2015,
			"url": "https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title": "Front-End Foundations",
			"school": "CodeSchool",						
			"date": 2015,
			"url": "https://www.codeschool.com/courses/front-end-foundations"
		},
		{
			"title": "Front-End Formations",
			"school": "CodeSchool",						
			"date": 2015,
			"url": "https://www.codeschool.com/courses/front-end-formations"
		},
		{
			"title": "CSS Cross-Country",
			"school": "CodeSchool",						
			"date": 2015,
			"url": "https://www.codeschool.com/courses/css-cross-country"
		},
		{
			"title": "Journey Into Mobile",
			"school": "CodeSchool",						
			"date": 2015,
			"url": "https://www.codeschool.com/courses/journey-into-mobile"
		},
		{
			"title": "Assembling Sass, Part I",
			"school": "CodeSchool",			
			"date": 2015,
			"url": "https://www.codeschool.com/courses/assembling-sass"
		},
		{
			"title": "Assembling Sass, Part II",
			"school": "CodeSchool",			
			"date": 2015,
			"url": "https://www.codeschool.com/courses/assembling-sass-part-2"
		},
		{
			"title": "Fundamentals of Design",
			"school": "CodeSchool",		
			"date": 2015,
			"url": "https://www.codeschool.com/courses/fundamentals-of-design"
		},
		{
			"title": "Blasting off with Bootstrap",
			"school": "CodeSchool",		
			"date": 2015,
			"url": "https://www.codeschool.com/courses/blasting-off-with-bootstrap"
		},
		{
			"title": "Introduction to Web Development: HTML, CSS",
			"school": "udemy.com",				
			"date": 2015,
			"url": "https://www.udemy.com/certificate/UC-44E1IETL/"
		},
		{
			"title": "CSS Development with CSS3 ",
			"school": "udemy.com",			
			"date": 2015,
			"url": "https://www.udemy.com/certificate/UC-ZGTKBKN6/"
		},
		{
			"title": "Intro to JavaScript Development",	
			"school": "udemy.com",					
			"date": 2015,
			"url": "https://www.udemy.com/certificate/UC-TQA36KRY/"
		},
		{
			"title": "Intermediate JavaScript Development",
			"school": "udemy.com",			
			"date": 2015,
			"url": "https://www.udemy.com/certificate/UC-5XV5CX92/"
		},
		{
			"title": "CSS",
			"school": "udemy.com",			
			"date": 2015,
			"url": "https://www.udemy.com/certificate/UC-MBK3GIB7/"
		},
		{
			"title": "HTML Basics I/II/III ",
			"school": "codecademy.com",		
			"date": 2015,
			"url": "http://www.codecademy.com/users/JimHackney/achievements"
		},	
		{
			"title": "CSS: An Overview",
			"school": "codecademy.com",			
			"date": 2015,
			"url": "http://www.codecademy.com/users/JimHackney/achievements"			
		},	
		{
			"title": "HTML Workshop",	
			"school": "udemy.com",					
			"date": 2014,
			"url": "https://www.udemy.com/certificate/UC-Q7HBQIY9/"
		},
		{
			"title": "CSS Selectors ",
			"school": "codecademy.com",		
			"date": 2015,
			"url": "http://www.codecademy.com/users/JimHackney/achievements"
		},	
		{
			"title": "CSS Positioning ",
			"school": "codecademy.com",						
			"date": 2015,
			"url": "http://www.codecademy.com/users/JimHackney/achievements"
		},
		{
			"title": "CSS Layout  ",
			"school": "codecademy.com",						
			"date": 2015,
			"url": "http://www.codecademy.com/users/JimHackney/achievements"
		},
		{
			"title": "CSS Styling",	
			"school": "codecademy.com",				
			"date": 2015,
			"url": "http://www.codecademy.com/users/JimHackney/achievements"
		},
		{
			"title": "Intro to Functions in JS",
			"school": "codecademy.com",						
			"date": 2015,
			"url": "http://www.codecademy.com/users/JimHackney/achievements"
		},
		{
			"title": "Intro to For Loops in JS",
			"school": "codecademy.com",						
			"date": 2015,
			"url": "http://www.codecademy.com/users/JimHackney/achievements"
		},
		{
			"title": " Intro to While Loops in JS",	
			"school": "codecademy.com",					
			"date": 2015,
			"url": "http://www.codecademy.com/users/JimHackney/achievements"
		},
		{
			"title": "A How to Guide in HTML",
			"school": "udemy.com",						
			"date": 2014,
			"url": "https://www.udemy.com/certificate/UC-Q7HBQIY9/"
		}			
	]
}
	
onlineClasses.display = function() {
	$("#onlineClasses").append(HTMLonlineStart);	
	
	for(classes in onlineClasses.onlineClasses) {		
		
		var formattedTitle = HTMLonlineTitle.replace("%data%", onlineClasses.onlineClasses[classes].title);
		/*$(".online-entry:last").append(formattedTitle);*/
		
		var formattedSchool = HTMLonlineSchool.replace("%data%", onlineClasses.onlineClasses[classes].school);
		/*$(".online-entry:last").append(formattedSchool);*/
		
		var schoolInfo = formattedTitle + formattedSchool
		$(".online-entry:last").append(schoolInfo);
		
		var formattedDate = HTMLonlineDates.replace("%data%", onlineClasses.onlineClasses[classes].date);
		$(".online-entry:last").append(formattedDate); 
		
		var formattedUrl = HTMLonlineURL.replace("%data%", onlineClasses.onlineClasses[classes].url);
		$(".online-entry:last").append(formattedUrl); 		
	}
}

onlineClasses.display();

var projects = {
	"projects": [
		{
			"title": "Project 1: Portfolio",
			"dates": 2015,
			"description": "A responsive web page for presenting the projects I will be making in the Udacity Nanodegree program. It was created using HTML/CSS and Bootstrap",
			"images": "images/Project1.jpg"
		},
		{
			"title": "Project 2: Resume",
			"dates": 2015,
			"description": "An interactive resume created using HTML/CSS, JavaScript, and JQuery",
			"images": "images/Project2.jpg"
		}
	]	
}

projects.display = function() {	
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", 
			projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle)
		
		var formattedDates = HTMLprojectDates.replace("%data%", 
			projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", 
			projects.projects[project].description);	
		$(".project-entry:last").append(formattedDescription);			

		if (projects.projects[project].images.length > 0) {
			var formattedImage = HTMLprojectImage.replace("%data%", 
				projects.projects[project].images);
				$(".project-entry:last").append(formattedImage);						
		}
	}	
}

projects.display();
$("#mapDiv").append(googleMap);





	






 




