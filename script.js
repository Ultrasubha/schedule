//	window.addEventListener("resize", function() {
//		"use strict"; window.location.reload(); 
//	});
	document.addEventListener("DOMContentLoaded", function(){
  
    	/////// Prevent closing from click inside dropdown
		document.querySelectorAll('.dropdown-menu').forEach(function(element){
			element.addEventListener('click', function (e) {
			  e.stopPropagation();
			});
		})



		// make it as accordion for smaller screens
		if (window.innerWidth < 992) {

			// close all inner dropdowns when parent is closed
			document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
				everydropdown.addEventListener('hidden.bs.dropdown', function () {
					// after dropdown is hidden, then find all submenus
					  this.querySelectorAll('.submenu').forEach(function(everysubmenu){
					  	// hide every submenu as well
					  	everysubmenu.style.display = 'none';
					  });
				})
			});
			
			document.querySelectorAll('.dropdown-menu a').forEach(function(element){
				element.addEventListener('click', function (e) {
		
				  	let nextEl = this.nextElementSibling;
				  	if(nextEl && nextEl.classList.contains('submenu')) {	
				  		// prevent opening link if link needs to open dropdown
				  		e.preventDefault();
				  		console.log(nextEl);
				  		if(nextEl.style.display == 'block'){
				  			nextEl.style.display = 'none';
				  		} else {
				  			nextEl.style.display = 'block';
				  		}

				  	}
				});
			})
		}
		// end if innerWidth

	}); 
	// DOMContentLoaded  end
	function getRandomItem(arr) {
		const randomIndex = Math.floor(Math.random() * arr.length);
		const item = arr[randomIndex];
		return item;
	}
	function init() {
		const bani = [
			"“Anything is edible if you deep fry it long enough.” - Richard Watterson",
			"“An Appalling performance is a cumulative outcome of several Abysmal practices.”",
			"“Nothing is insurmountable, Nothing is unassailable”",
			"“Surpass your limits, surpass it now”",
			"“Kimino ikigai wa nanda?”",
			"Always envisage the probabilities of all possibiliies",
			"Have faith in your abilities.It won't fail you",
			"Have faith in your conviction",
			"Let's Conquor","Today we Rule",
			"Divide and Conquor",
			"Let's bring some chaos",
			"Everything should be in order. Let's Sort",
			"What's today's plan Sir?",
			"Will we be doing a new project today Sir?",
			"Aiming for Rank-1 today Sir?",
			"How are we planning to upskill today Sir?",
			"Lets introduce some anarchy",
			"Fake it till you make it",
			"Chaos,Order and Causality",
			"We are the rulers of this world"];
			document.getElementById("Bani").innerHTML = "<h2>" + getRandomItem(bani) + "</h2>";

			tableStr = "<tr><th>S.No.</th><th>Date</th><th>Time</th><th>Task</th><th>Duration</th><th>Venue</th></tr>";
			const Tasktuples = [
				//"Date @ Time @ Task @ Duration @ Venue @ Type",
				//"Date @ Time @ Task @ Duration @ <a href=\" \"> Name </a> @ Type",
				/*
					Conventions (for last space after @) -->
					1) LPU = Anything LPU related (Exam/assignment/CA etc)
					2) LiveEvent = Seminar/Webinar/Any Live session
					3) competition = Any Coding competition/ Hackathon etc
					4) Blank/Anything = Any other event
				*/
				"May 4 @ 11:30 am @ Math @ 1.5hrs @ <a href=\"https://myclass.lpu.in\">MyClass</a>@LPU",
				"May 4 @ 8:00 pm @ CodeChef @ 3hrs @ <a href=\"https://www.codechef.com\">CodeChef</a>@competition",
				"May 6 @ 9:30 am @ OS @ 1.5hrs @ <a href=\"https://myclass.lpu.in\">MyClass</a>@LPU",
				"May 6 @ 3:00 pm @ CodeChef @ 3days @ <a href=\"https://www.codechef.com\">CodeChef</a>@competition",
				"May 9 @ 9:30 am @ Network @ 1.5hrs @ <a href=\"https://myclass.lpu.in\">MyClass</a>@LPU",
				"May 11 @ 9:30 am @ Java @ 1.5hrs @ <a href=\"https://myclass.lpu.in\">MyClass</a>@LPU",
				"May 11 @ 8:00 pm @ CodeChef @ 3hrs @ <a href=\"https://www.codechef.com\">CodeChef</a>@competition",
				"May 13 @ 9:30 am @ AI @ 1.5hrs @ <a href=\"https://myclass.lpu.in\">MyClass</a>@LPU",
				"May 15 @ 8:00 pm @ CodeChef @ 3hrs @ <a href=\"https://www.codechef.com\">CodeChef</a>@competition",
				"May 16 @ 2:30 pm @ OS @ 1.5hrs @ <a href=\"https://myclass.lpu.in\">MyClass</a>@LPU",
				"May 18 @ 9:30 am @ DSA @ 1.5hrs @ <a href=\"https://myclass.lpu.in\">MyClass</a>@LPU",
				"May 18 @ 8:00 pm @ CodeChef @ 3hrs @ <a href=\"https://www.codechef.com\">CodeChef</a>@competition",
				"May 20 @ 3:00 pm @ CodeChef @ 3days @ <a href=\"https://www.codechef.com\">CodeChef</a>@competition",
				"May 22 @ 4:30 pm @ Google KickStart @ 3hrs @ <a href=\"https://codingcompetitions.withgoogle.com/kickstart/schedule\"> Round C </a> @competition",
				"May 25 @ 8:00 pm @ CodeChef @ 3hrs @ <a href=\"https://www.codechef.com\">CodeChef</a>@competition",
				"Jun 5 @ 8:00 pm @ CodeChef @ 2.5hrs @ <a href=\"https://www.codechef.com\">CodeChef</a>@competition",
				"Jun 8 @ 8:00 pm @ CodeChef @ 3hrs @ <a href=\"https://www.codechef.com\">CodeChef</a>@competition",
				"Jun 10 @ 3:00 pm @ CodeChef @ 3days @ <a href=\"https://www.codechef.com\">CodeChef</a>@competition",
				"Jun 15 @ 8:00 pm @ CodeChef @ 3hrs @ <a href=\"https://www.codechef.com\">CodeChef</a>@competition",
				"Jun 19 @ 8:00 pm @ CodeChef @ 3hrs @ <a href=\"https://www.codechef.com\">CodeChef</a>@competition",
				"Jun 22 @ 8:00 pm @ CodeChef @ 3hrs @ <a href=\"https://www.codechef.com\">CodeChef</a>@competition",
				"Jun 24 @ 3:00 pm @ CodeChef @ 3days @ <a href=\"https://www.codechef.com\">CodeChef</a>@competition",
				"Jun 27 @ 9:30 pm @ Google KickStart @ 3hrs @ <a href=\"https://codingcompetitions.withgoogle.com/kickstart/schedule\"> Practice 2</a> @competition",
				"Jun 29 @ 8:00 pm @ CodeChef @ 3hrs @ <a href=\"https://www.codechef.com\">CodeChef</a>@competition",
				"Jul 3 @ 11:00 am @ JLPT @ 2hr 10 mins @ Kolkata",
				"Jul 10 @ - @ Summer Training Completion @ - @ - @ Deadline",
				"Jul 10 @ 10:30 am @ Google KickStart @ 3hrs @ <a href=\"https://codingcompetitions.withgoogle.com/kickstart/schedule\"> Round D </a> @competition",
				"Aug 21 @ 9:00 am @ Google KickStart @ 3hrs @ <a href=\"https://codingcompetitions.withgoogle.com/kickstart/schedule\"> Round E </a> @competition",
				"Aug 29 @ 9:30 pm @ Google KickStart @ 3hrs @ <a href=\"https://codingcompetitions.withgoogle.com/kickstart/schedule\"> Practice 3</a> @competition",
				"Sep 18 @ 10:30 pm @ Google KickStart @ 3hrs @ <a href=\"https://codingcompetitions.withgoogle.com/kickstart/schedule\"> Round F </a> @competition",
				"Oct 15 @ 5:30 pm @ Google KickStart @ 3hrs @ <a href=\"https://codingcompetitions.withgoogle.com/kickstart/schedule\"> Round G </a> @competition",
				"Nov 12 @ 8:30 am @ Google KickStart @ 3hrs @ <a href=\"https://codingcompetitions.withgoogle.com/kickstart/schedule\"> Round H </a> @competition",
			];
			
			for(task=0;task<Tasktuples.length;task++){
				let tupleStrArr = Tasktuples[task].split("@");

				switch (tupleStrArr[5]) {
					case "LPU":
						tableStr+="<tr class=\"LPU\"><td>"+(task+1)+"</td>";
						break;
					case "LiveEvent":
						tableStr+="<tr class=\"LiveEvent\"><td>"+(task+1)+"</td>";
						break;
					case "competition":
						tableStr+="<tr class=\"competition\"><td>"+(task+1)+"</td>";
						break;
					default:
						tableStr+="<tr class=\"futsu\"><td>"+(task+1)+"</td>";
						break;
				}
				
				for(column=0;column<5;column++)
						tableStr+="<td>"+tupleStrArr[column]+"</td>";
				tableStr+="</tr>";
				
			}
			document.getElementById("scheduler1").innerHTML = tableStr;
	}
