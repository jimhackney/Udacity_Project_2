var bio = {
	"name" : "James R. Hackney",
	"role" : "Software Developer",
	"contactInfo" : {
		"mobile" : "417-860-1387",
		"email" :  "jhackney01@outlook.com",
		"gitHub" : "https://github.com/jimhackney",
		"twitter": "@developerWannab",
		"location" : "Columbia, MO <br>"
	},	
	"welcomeMessage" : "Welcome. My name is Jim Hackney and I am a junior VB.NET developer working towards becoming a front-end developer",
	"skills" : [
		"C#,","VB.NET,","Java,","HTML/CSS,","JavaScript,",
		"Business Analysis,","Git/GitHub,","Bootstrap,","T-SQL,",
		"PLSQL,","Toad,","Systems Analysis and Design"
	],
	"bioPic" : "images/Jim_Hackney.jpg"
}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
$("#header").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
$("#header").append(formattedEmail);

var formattedGitHub = HTMLgithub.replace("%data%", bio.contactInfo.gitHub);
$("#header").append(formattedGitHub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
$("#header").append(formattedTwitter);

var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
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

var work = {
	"jobs": [
		{
			"employer":  "Missouri Department of Health and Senior Services",
			"title": "Information Technologist II, Software Developer",
			"location": "Jefferson City, MO",
			"dates": "May 2015 - Present",
			"description": "I'm presently modernizing a 3 year old web app that <br> DHSS employees use to sign up for instructor led training by redesigning the front end and making it responsive using Bootstrap 3, CSS3, HTML5 and ASP.NET. I'm also updating the back end (VB.NET) where required such as upgrading from the System.Web.Mail namespace to System.Net.Mail namespace."						
		},
		{
			"employer": "Missouri Department of Health and Senior Services",
			"title": "Information Technologist II, Business Analyst",
			"location": "Jefferson City, MO",
			"dates": "May 2014 - May 2015",
			"description": "Performed research to assist project manager in development of project scope; Conducted business user, developer and stakeholder interviews; Gathered, analyzed, defined and documented technical and functional requirements; used waterfall analysis and design models and used the Unified Modeling Language (UML) for process modeling and use cases; Used MS Visio to create context diagrams, data flow diagrams, cross-functional flow charts, work flow flowcharts, activity diagrams, sequence diagrams and use case diagrams; Used MS Word and/or MS Excel to create detailed narrative use cases, <br< event decomposition and event tables and process narratives; interacted with business users and software developers to <br> ensure reports and models are developed to the specification; Knowledge of Health Level 7 (HL7) messaging Knowledge of Extensible Markup Language (XML)" 
		},
		{
			"employer": "Paperwise",
			"title": "Support Technician",
			"location": "Springfield, MO",
			"dates": "September 2013 - November 2013",
			"description": "Provided help desk support for 16 companies consisting of more than 400 computers in 21 locations throughout the United States (Windows XP, Windows 7, Windows 8, Windows 8.1); Monitored and responded quickly and effectively to requests received through the IT help desk; Monitored Service Desk for tickets assigned to queue and processed first-in first-out based on priority; Modified configurations, utilities, software default settings, etc. for the local workstation, Active Directory, and MS Exchange; Utilized and maintained the help desk tracking software; Documented internal procedures; assisted with on-boarding of new users; ensured each workstation had a computer, monitor, keyboard, mouse, hard drive, and any additional specialized equipment; Installed, tested and configured new workstations, servers, peripheral equipment and software; Performed timely workstation and server hardware and software upgrades as required" 
		},
		{
			"employer": "Associated Electric Cooperative Inc.",
			"title": "Helpdesk Support Intern",	
			"location": "Springfield, MO",
			"dates": "January 2013 – August 2013",
			"description": "Completed 100 notebook builds and 43 desktop builds; created 27 model/job specific images using Clonezilla; provided help desk support and resolved problems to the end user’s satisfaction; monitored and responded quickly and effectively to requests received through the IT help desk; monitored Service Desk for tickets assigned to my queue and processed first-in first-out based on priority; modified configurations, utilities, software default settings, etc. for the local workstation; utilized and maintained the help desk tracking software; documented internal procedures; assisted with on-boarding of new users; ensured each workstation had a computer, monitor, keyboard, mouse, hard drive, and any additional specialized equipment; installed, tested and configured new workstations, peripheral equipment and software; reported issues to the Service Desk for escalation; performed timely workstation hardware and software upgrades as required"
		},
		{
			"employer": "Associated Electric Cooperative Inc.",
			"title": "Programming Intern",
			"location": "Springfield, MO",
			"dates": "May 2012 – August 2012",
			"description": "Member of a software development team tasked with creating a system that streamlined and automated the key performance indicator reporting process, greatly decreasing the time it took to create reports; translated Transact-SQL queries into LINQ-to-SQL queries and tested them in LINQPad for correctness; once queries verified, created .NET libraries in Visual Studio 2010 using LINQ-to-SQL query methods to pull data from MS SQL Server database and LINQ-to-XML to translate pulled data into XML; created LINQ-to-XML queries to pull data from XML reports on MS SQL Server database; transformed XML data into needed format for output to SQL Server Reporting Services using XSLT and XSD; created unit and functional tests to test .NET libraries methods; created reports based upon Harvester data using SQL Server Reporting Services"
		},
		{
			"employer": "Battery Doctors of the 4-States",
			"title": "Owner/Operator",
			"location": "Cassville, MO",			
			"dates": "July 2005 – August 2009",
			"description": "Owner and operator of a Battery reconditioning and recycling service. Collected old automobile/marine/industrial lead-acid batteries and reconditioned them with a proprietary chemical for resale. Recycled all batteries that did not meet reconditioning specifications. Interfaced with customers on a daily basis and performed all bookkeeping functions."			
		},
		{
			"employer": "Georges Foods Llc.",
			"title": "Electrical Technician",
			"location": "Butterfield, MO",
			"dates": "August 2005 – June 2006",
			"description": "Applied electrical, mechanical, and pneumatic theory to maintain, troubleshoot and repair automation and control system and ancillary electrical equipment in a large chicken processing plant; diagnosed causes of electrical malfunctions or failure of operational equipment and performed preventative and corrective maintenance on Programmable Logic Controllers, relay control circuits, 3-phase 480 VAC Motors and control circuitry, single-phase AC Motors and control circuits, 24V DC control circuits, drum switches, limit switches, contact relays, proximity switches, photoelectric, temperature, pressure, and position sensors; read and interpreted blueprints, schematics, and ladder diagrams; ensured proper set-points, schedules and sequences of operation were correctly programmed; performed inspections and preventive maintenance tasks for the control systems including point-to-point check-out, sensor calibration, and software back-up; installed all electrical wiring in plant and maintained records of all activities"		
		},
		{
			"employer": "LightCore",
			"title": "Network Technician II",
			"location": "Cassville, MO",
			"dates": "March 2000 – July 2005",
			"description": "Maintained an 150+ miles of fiber as well as 17 points of presence (POP) throughout Southwest Missouri and Northwest Arkansas for an independent local telephone company; equipment included Nortel TransportNode Optical Add/Drop multiplexers and regenerators (both BSLR and Linear OC-48's), Nortel TransportNode Optical Add/Drop Multiplexers (OC-12), Lucent DDM-1000 M13 multiplexers and Telecom Systems 828 M13 multiplexers; inside plant responsibilities included installation, maintenance and repair of optical and digital multiplexers, rectifiers and batteries; performed DS1, DS3, OC3, OC12 and OC48 physical and software circuit installation, troubleshooting, and repair; outside plant responsibilities included providing locate and watchdog services along fiber route, supervise cable moves and installations, and respond to fiber cuts to perform emergency restorations (mechanical splice) as well as permanent restorations (fusion splice)"			
		},
		{
			"employer": "Broadwing Communications",
			"title": "Switch Technician II",
			"location": "Joplin, MO",
			"dates": "February 1998 – March 2000 ",
			"description": "Provided on-site maintenance for 77k+ port Nortel DMS-250 Supernode equipped with Spectrum Peripheral Modules (SPM's), Tekelec Eagle STP, Alcatel 1630, 1631, and 1633 Digital Cross-Connect systems (DXC), Telecom Solutions IDST 1/0 DXC, IEX SCP, IEX Switch, Nortel OC-48's and OC-192's, as well as Ditech and Tellabs echo cancellers, Nortel rectifiers, and facility batteries; performed preventative maintenance IAW vendor and Broadwing standards on all equipment; performed billing and image/database backups on a daily basis for all equipment; performed preload tasks and assisted Nortel in software upgrades on DMS core; performed XPM software upgrades (to include SPM's); applied patches to DMS as required; isolated alarms, tested and replaced hardware on all equipment supported; installed, tested, turned-up and troubleshot circuits, from DS0 to OC-192; provided technical support to network management center (NMC) for all equipment and circuit troubleshooting as needed"
		},
		{
			"employer": "MCI Telecommunications Corporation",
			"title": "Engineer I",
			"location": "Cary, NC",
			"dates": "July 1997 – February 1998 ",
			"description": "Provided technical support to National Switch Operations (NSO) on all network platforms supported; provided Project Management functions for NSO to include gathering organizational requirements, tracking and resolving issues, coordinating rollout of new platforms between development, technical support groups and NSO; managed multiple highly technical projects concurrently; prepared executive summary reports defining project statuses and delivered project presentations to network surveillance engineers and management; determined NSO training needs and developed training programs to meet those needs"
		},
		{
			"employer": "MCI Telecommunications Corporation",
			"title": "Network Surveillance Engineer II",
			"location": "Cary, NC",
			"dates": "July 1996 – July 1997",
			"description": "Ensured optimal performance of all switched service platforms by providing real-time monitoring and remote maintenance support of MCI's switched network and subsystems; central control point for switched network and subsystem outages; 1st level field support for all switched service platforms, to include DSC DEX 600-E Megahub and Megahub STP, DMS-250 Supernode, AXE-10 International Gateway, Stratus XA/2000 midrange computer, and VAX 4500A/7610 computers; managed and monitored switch subsystem networks, to include Frame Relay, CCS7, X.25, and SNA; interfaced with the customers, data test centers, and numerous second and third level support groups on a daily basis; performed and tracked preventive maintenance, switch database maintenance, off-hour provisioning, and real-time ANI fraud deactivation of DMS-250 and DEX 600-E; improved call and network stability through real-time root cause analysis; primary instructor for new personnel on DSC platforms; hired as Network Surveillance Engineer I"		
		},
		{
			"employer": "United States Army Reserve",
			"title": "Drill Sergeant",
			"location": "Durham, NC",
			"dates": "July 1996 – July 1997",
			"description":	"Conducted Basic Combat training for all IET Soldiers in preparation for Advanced Individual Training; provided technical and tactical support on all training and logistical matters and responsible for the health, welfare, and supervision of approximately 240 soldiers assigned; planned and executed near flawless training events for hundreds of tactical and mission essential tasks for each training cycle; mastered the training and assisted in the implementation of over 40 Common Task Training tasks and drills for a company of basic training soldiers"
		},
		{
			"employer": "United States Army (Active Duty)",
			"title": "Electronics Instructor",
			"location": "Ft. Gordon, GA",	
			"dates": "May 1995 – July 1996",
			"description":	"Incorporated field experience and technical knowledge into lectures and managed group learning through practical, interactive hands-on practice; taught electronics theory and applications, to include AC/DC circuits, semiconductor devices, digital logic, test equipment, troubleshooting techniques, preventive maintenance and safety; received the United States Army Achievement Medal for performance"
		},
		{
			"employer": "United States Army (Active Duty)",
			"title": "Officer Candidate",
			"location": "Ft. Benning, GA",
			"dates": "January 1995 – April 1995",
			"description": "One of approximately one hundred soldiers selected from a pool of more than two thousand applicants to attend the fourteen week U.S. Army Officer Candidate School; learned about and demonstrated core leadership attributes and competencies, as well as leadership skills at the team and squad levels; Army values and ethics; the Army management systems; demonstrated knowledge of the orders process and troop leading procedures while executing small unit tactics, etc.; did not graduate due to knee injury received in the twelfth week of school which required surgery and prevented me from completing the end of course physical fitness test"	
		},
		{
			"employer": "United States Army (Active Duty)",
			"title": "Telecommunications Installation Manager",
			"location": "Ft. Huachuca, AZ",
			"dates": "January 1994 – December 1994",
			"description": "Managed and supervised a team of up to twenty-five mobile communications-electronics installers responsible for installing Department of Defense LAN/WAN systems nationwide; coached and administered performance counseling and behavior management to employees; mediated conflicts and resolved disputes among employees; performed quality control checks of all work completed; scheduled daily work assignments and handled all personnel problems; reviewed specifications with project managers, modifying as needed. Inspected and tested equipment to ensure compliance; installed, supervised, and performed quality control checks on the installation of work/bays/equipment racks, servers, workstations, modems, fiber optic cable, thinnet cable, category five cable, LAN cards, MAU's, DSX panels, fiber optic transceivers, repeaters, bridges, routers, and multiple types of connectors, both optical and copper; completed daily, weekly, monthly reports for upper management, trip reports, and gave daily presentation to customers, to include field grade and General officers; responsible for daily physical fitness requirements for all subordinates, sick call scheduling, daily work flow, subordinate pay problems and other soldier needs while on temporary duty; received the United States Army Commendation Medal for performance; 504th Signal Battalion non-commissioned officer of the Quarter"
		},
		{
			"employer": "United States Army (Active Duty)",
			"title": "Training Manager",
			"location": "Ft. Huachuca, AZ",
			"dates": "January 1993 – January 1994",
			"description": "Managed staff training programs for up to 130 assigned personnel; identified, planned, organized, prioritized, scheduled and directed all company level training, to include physical fitness programs and tests, annual marksmanship qualifications, Nuclear, Biological and Chemical training, U.S. Army Common Task Training (CTT), and any specialized installation training personnel may require prior to deploying on mission; managed the company urinalysis program"
		},
		{
			"employer": "United States Army (Active Duty)",
			"title": "Telecommunications Installer",
			"location": "Ft. Huachuca, AZ",
			"dates": "February 1992 – January 1993 ",
			"description": "Member of a mobile communications-electronics installation team responsible for the worldwide installation of telecommunications equipment, LAN/WAN systems, satellite facilities, and any other fixed-station communications required by the U.S. Army, Department of Defense, and/or U.S. State Department; installed iron work/bays/equipment racks, ran and terminated cables, from 25 to 100 pair data cables with wire wrap terminations, to coaxial cable with BNC connectors, to fiber optic cable with SC, FC, ST, SMA or biconic connectors; Ran wiring for AC and/or DC power; ensured all grounding was in accordance with military standard; followed Engineering Installation Plans (EIP), read and interpreted block diagrams, flowcharts, and schematics"
		},
		{
			"employer": "United States Army (Active Duty)",
			"title": "Communications-Electronics Repair Supervisor",
			"location": "Camp Walker, Republic of Korea",
			"dates": "February 1990 – February 1992 ",
			"description": "Member of a direct support/limited general support communications-electronics repair facility; performed and supervised the performance of quarterly, semi-annual, annual maintenance and limited emergency repair on the Defense Information Systems Agency (DISA) microwave network; performed and supervised the testing, troubleshooting, repair and maintenance of analog and digital circuitry on a variety of communications equipment including personal and military computer systems, facsimiles, teletypewriters, digital and analog microwave radios, multiplexers, digital telecommunications terminals and other miscellaneous equipment; installed, modified, and repaired personal computer hardware and software and provided technical assistance and training to system users; conducted fault analysis using standard electronic test equipment; localized and repaired at system, subsystem, and component level; supervised junior technicians performing all facets of electronics maintenance and repair and trained new personnel on proper maintenance and safety techniques; examined plans and specifications to determine work procedures and requisitioned needed parts and equipment; supervised the generation, updates and completion of work orders; conducted parts inventory and ordered parts; researched, analyzed, and compiled historical maintenance data; laterally promoted from Specialist to Corporal due to leadership position; received U.S. Army Commendation Medal for work performed." 
		}
	]
}

for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	
	var employer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var title = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var employerInfo = employer + title;
	$(".work-entry:last").append(employerInfo);	
	
	var location = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(location);
	
	var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(dates);
	
	var description = HTMLworkDescription.replace("%data%",work.jobs[job].description);	
	$(".work-entry:last").append(description);	
}

var education = {
	"schools": [
		{
			"name": "Vernon College",
			"location": "Witchita Falls, TX",
			"degree": "Diploma",
			"major": "Digital Electronics Technology",
			"date": 1987,
			"url": "http://www.vernoncollege.edu/"
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
			"name": "Missouri State University",
			"location": "Springfield, MO",
			"degree": "BS",
			"major": "Technology Management (CIS), minor in Information Technology Service Management",			
			"date": 2012,
			"url": "http://www.missouristate.edu/"
		}	
	],
	"online classes": [
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
			"year": 2015,
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
			"year": 2015,
			"url": "https://www.codeschool.com/courses/front-end-foundations"
		},
		{
			"title": "Front-End Formations",
			"school": "CodeSchool",						
			"year": 2015,
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

var projects = {
	"projects": [
		{
			"title": "Project 1: Portfolio",
			"dates": 2015,
			"description": "A responsive web page for presenting the projects I will be making in the Udacity program.",
			"images": "images/Project1.jpg"
		},
		{
			"title": "Project 2: Resume",
			"dates": 2015,
			"description": "A responsive resume",
			"images": ""
		}
	]	
}










	






 




