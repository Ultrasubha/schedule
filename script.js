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
			"Let's introduce some chaos",
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

			tableStr = "<tr><th>Day</th><th>Date</th><th>Time</th><th>Task</th><th>Duration</th><th>Venue</th></tr>";
			const Tasktuples = [
				/*	"Date @ Time @ Task @ Duration @ <a href=\" \"> Venue </a> @ Type",

					Conventions (for last space after @) -->
					1) LPU = Anything LPU related (Exam/assignment/CA etc)
					2) LiveEvent = Seminar/Webinar/Any Live session
					3) codechefStyle = Any Coding codechefStyle/ Hackathon etc
					4) Blank/Anything = Any other event
				*/
				"2022 8 6 @ 8:00 pm @ LeetCode BiWeekly contest 84 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 8 7 @ 8:00 am @ LeetCode Weekly contest 305 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 8 10 @ 8:00 pm @ CodeChef @ 3hrs @ <a href=\"https://www.codechef.com\">CodeChef</a>@codechefStyle",
				"2022 8 12 @ 3:00 pm @ CodeChef Long Challenge @ 3days @ <a href=\"https://www.codechef.com\">CodeChef</a>@codechefStyle",
				"2022 8 14 @ 8:00 am @ LeetCode Weekly contest 306 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 8 17 @ 8:00 pm @ CodeChef @ 3hrs @ <a href=\"https://www.codechef.com\">CodeChef</a>@codechefStyle",
				"2022 8 20 @ 8:00 pm @ LeetCode BiWeekly contest 85 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 8 21 @ 8:00 am @ LeetCode Weekly contest 307 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 8 21 @ 9:00 am @ Google KickStart @ 3hrs @ <a href=\"https://codingcompetitions.withgoogle.com/kickstart/schedule\"> Round E </a> @LiveEvent",
				"2022 8 21 @ 8:00 pm @ CodeChef @ 3hrs @ <a href=\"https://www.codechef.com\">CodeChef</a>@codechefStyle",
				"2022 8 24 @ 8:00 pm @ CodeChef @ 3hrs @ <a href=\"https://www.codechef.com\">CodeChef</a>@codechefStyle",
				"2022 8 26 @ 3:00 pm @ CodeChef Long Challenge @ 3days @ <a href=\"https://www.codechef.com\">CodeChef</a>@codechefStyle",
				"2022 8 28 @ 8:00 am @ LeetCode Weekly contest 308 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 8 29 @ 9:30 pm @ Google KickStart @ 3hrs @ <a href=\"https://codingcompetitions.withgoogle.com/kickstart/schedule\"> Practice 3</a> @LiveEvent",
				"2022 9 3 @ 8:00 pm @ LeetCode BiWeekly contest 86 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 9 4 @ 8:00 am @ LeetCode Weekly contest 309 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 9 4 @ 8:00 pm @ CodeChef @ 3hrs @ <a href=\"https://www.codechef.com\">CodeChef</a>@codechefStyle",
				"2022 9 7 @ 8:00 pm @ CodeChef @ 3hrs @ <a href=\"https://www.codechef.com\">CodeChef</a>@codechefStyle",
				"2022 9 11 @ 8:00 am @ LeetCode Weekly contest 310 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 9 17 @ 8:00 pm @ LeetCode BiWeekly contest 87 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 9 18 @ 8:00 am @ LeetCode Weekly contest 311 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 9 18 @ 10:30 pm @ Google KickStart @ 3hrs @ <a href=\"https://codingcompetitions.withgoogle.com/kickstart/schedule\"> Round F </a> @LiveEvent",
				"2022 9 25 @ 8:00 am @ LeetCode Weekly contest 312 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 10 1 @ 8:00 pm @ LeetCode BiWeekly contest 88 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 10 2 @ 8:00 am @ LeetCode Weekly contest 313 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 10 9 @ 8:00 am @ LeetCode Weekly contest 314 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 10 15 @ 5:30 pm @ Google KickStart @ 3hrs @ <a href=\"https://codingcompetitions.withgoogle.com/kickstart/schedule\"> Round G </a> @LiveEvent",
				"2022 10 15 @ 8:00 pm @ LeetCode BiWeekly contest 89 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 10 16 @ 8:00 am @ LeetCode Weekly contest 315 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 10 23 @ 8:00 am @ LeetCode Weekly contest 316 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 10 29 @ 8:00 pm @ LeetCode BiWeekly contest 90 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 10 30 @ 8:00 am @ LeetCode Weekly contest 317 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 11 6 @ 8:00 am @ LeetCode Weekly contest 318 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 11 12 @ 8:30 am @ Google KickStart @ 3hrs @ <a href=\"https://codingcompetitions.withgoogle.com/kickstart/schedule\"> Round H </a> @LiveEvent",
				"2022 11 12 @ 8:00 pm @ LeetCode BiWeekly contest 91 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 11 13 @ 8:00 am @ LeetCode Weekly contest 319 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 11 20 @ 8:00 am @ LeetCode Weekly contest 320 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 11 26 @ 8:00 pm @ LeetCode BiWeekly contest 92 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 11 27 @ 8:00 am @ LeetCode Weekly contest 321 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 12 4 @ 11:00 am @ JLPT @ 3hrs @ Delhi",
				"2022 12 10 @ 8:00 pm @ LeetCode BiWeekly contest 93 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 12 11 @ 8:00 am @ LeetCode Weekly contest 323 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 12 16 @ 9:00 pm @ Newton's Grand Coding Contest 2022 @ 3hrs @ <a href=\"https://my.newtonschool.co/contest/all\">NewtonSchool</a>@LiveEvent",
				"2022 12 18 @ 8:00 am @ LeetCode Weekly contest 324 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 12 24 @ 8:00 pm @ LeetCode BiWeekly contest 94 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
				"2022 12 25 @ 8:00 am @ LeetCode Weekly contest 325 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
			];
			
			var today = new Date();
			const convertTime12to24 = time12h => {const [time, modifier] = time12h.split(" "); let [hours, minutes] = time.split(":");if (hours === "12") hours = "00"; if (modifier === "pm") hours = parseInt(hours, 10) + 12; return `${hours}:${minutes}`;};
			let timeChangedToDash = false;

			for(task=0;task<Tasktuples.length;task++){
				let tupleStrArr = Tasktuples[task].split("@");
				if(tupleStrArr[1]==" - ") {tupleStrArr[1] = " 11:59 pm ";timeChangedToDash = true;}
				let dT = tupleStrArr[0] + convertTime12to24(tupleStrArr[1].trim()); // date & time gets appended to make date
				let date = new Date(dT);
				if (date<today) continue;	// compares till millisecond

				let day = date.toString().slice(0, 3);
				let slicedDate = date.toString().slice(3, 10);
				switch (tupleStrArr[5]) {
					case "LPU":				tableStr+="<tr class=\"LPU\"><td>"+day+"</td><td>"+slicedDate+"</td>"; break;
					case "LiveEvent":		tableStr+="<tr class=\"LiveEvent\"><td>"+day+"</td><td>"+slicedDate+"</td>"; break;
					case "codechefStyle":	tableStr+="<tr class=\"codechefStyle\"><td>"+day+"</td><td>"+slicedDate+"</td>"; break;
					case "LeetCodeStyle":	tableStr+="<tr class=\"LeetCodeStyle\"><td>"+day+"</td><td>"+slicedDate+"</td>"; break;
					default:				tableStr+="<tr class=\"futsu\"><td>"+day+"</td><td>"+slicedDate+"</td>"; break;
				}
				
				if(timeChangedToDash) {tupleStrArr[1] = " - ";timeChangedToDash = false; }
				for(column=1;column<5;column++)
						tableStr+="<td>"+tupleStrArr[column]+"</td>";
				tableStr+="</tr>";
			}
			document.getElementById("scheduler1").innerHTML = tableStr;
	}
