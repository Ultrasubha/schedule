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
			"Have faith in your abilities.It won't fail you",
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
				//"Date @ Time @ Task @ Duration @ Venue",
				//"Date @ Time @ Task @ Duration @ <a href=\" \"> Name </a>",
				"Mar 4 @ 11:30 am @ MTH302 (Math) @ 1hr @ <a href=\"https://myclass.lpu.in/\">MyClass</a>@LPU",
				"Mar 5 @ 11:30 am @ PEV108 @ 1hr @ <a href=\"https://myclass.lpu.in/\">MyClass</a>@LPU",
				"Mar 5 @ 7:00 pm @ Thapar ML @ 1.5hrs @ Zoom @Thapar",
				"Mar 5 @ 8:00 pm @ CodeChef @ 3hrs @ <a href=\"https://www.codechef.com/COOK139?itm_medium=hpevents&itm_campaign=COOK139\">CodeChef</a>@competition",
				"Mar 7 @ 10:00 am @ HackWithInfy @ 3hrs @ @competition",
				"Mar 7 @ @ CSE310 (Java) | CBT3 @ 1hr @ <a href=\"https://myclass.lpu.in/\">MyClass</a>@LPU",
				"Mar 11 @ 3:00 pm @ Engg. Minor @ 2hr @ <a href=\"https://myclass.lpu.in/\">MyClass</a>@LPU",
				"Mar 12 @ @ CSE408 (Algo) | CA @ 1hr @ <a href=\"https://myclass.lpu.in/\">MyClass</a>@LPU",
				"Mar 12 @ 7:00 pm @ Thapar ML @ 1.5hrs @ Zoom @Thapar",
				"Mar 19 @ 7:00 pm @ Thapar ML @ 1.5hrs @ Zoom @Thapar",
				"Mar 20 @ 9:30 am @ Google KickStart @ 3hrs @ <a href=\"https://codingcompetitions.withgoogle.com/kickstart/schedule\"> Round A </a> @competition",
				"Mar 21 @ @ CSE310 (Java) | CBT4 @ 1hr @ <a href=\"https://myclass.lpu.in/\">MyClass</a>@LPU",
				"Mar 21 @ All Day @ Nvidia GTC @ All Day @ <a href=\"https://reg.rainfocus.com/flow/nvidia/gtcspring2022/aplive/page/ap?tab.day=20220321\"> Click Here </a>",
				"Mar 22 @ All Day @ Nvidia GTC @ All Day @ <a href=\"https://reg.rainfocus.com/flow/nvidia/gtcspring2022/aplive/page/ap?tab.day=20220321\"> Click Here </a>",
				"Mar 23 @ All Day @ Nvidia GTC @ All Day @ <a href=\"https://reg.rainfocus.com/flow/nvidia/gtcspring2022/aplive/page/ap?tab.day=20220321\"> Click Here </a>",
				"Mar 24 @ All Day @ Nvidia GTC @ All Day @ <a href=\"https://reg.rainfocus.com/flow/nvidia/gtcspring2022/aplive/page/ap?tab.day=20220321\"> Click Here </a>",
				"Mar 26 @ 7:00 pm @ Thapar ML @ 1.5hrs @ Zoom @Thapar",
				"Apr 2 @ 7:00 pm @ Thapar ML @ 1.5hrs @ Zoom @Thapar",
				"Apr 9 @ 7:00 pm @ Thapar ML @ 1.5hrs @ Zoom @Thapar",
				"Apr 16 @ 7:00 pm @ Thapar ML @ 1.5hrs @ Zoom @Thapar",
				"Apr 23 @ 7:00 pm @ Thapar ML @ 1.5hrs @ Zoom @Thapar",
				"Apr 30 @ 7:00 pm @ Thapar ML @ 1.5hrs @ Zoom @Thapar",
				"May 7 @ 7:00 pm @ Thapar ML @ 1.5hrs @ Zoom @Thapar",
				"May 14 @ 7:00 pm @ Thapar ML @ 1.5hrs @ Zoom @Thapar",
				"May 21 @ 7:00 pm @ Thapar ML @ 1.5hrs @ Zoom @Thapar",
				"May 28 @ 7:00 pm @ Thapar ML @ 1.5hrs @ Zoom @Thapar",
				"Apr 24 @ 4:30 am @ Google KickStart @ 3hrs @ <a href=\"https://codingcompetitions.withgoogle.com/kickstart/schedule\"> Round B </a> @competition",
				"May 22 @ 4:30 pm @ Google KickStart @ 3hrs @ <a href=\"https://codingcompetitions.withgoogle.com/kickstart/schedule\"> Round C </a> @competition",
				"Jun 27 @ 9:30 pm @ Google KickStart @ 3hrs @ <a href=\"https://codingcompetitions.withgoogle.com/kickstart/schedule\"> Practice 2</a> @competition",
				"Jul 3 @ 11:00 am @ JLPT @ 2hr 10 mins @ Kolkata",
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
					case "Thapar":
						tableStr+="<tr class=\"Thapar\"><td>"+(task+1)+"</td>";
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
