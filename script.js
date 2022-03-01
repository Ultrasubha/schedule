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
				"Mar 2 @ 9:30 am @ CSE306 (Networks) @ 1hr @ <a href=\"https://myclass.lpu.in/\">MyClass</a>@LPU",
				"Mar 3 @ 9:30 am @ CSE408 (Algo) @ 1hr @ <a href=\"https://myclass.lpu.in/\">MyClass</a>@LPU",
				"Mar 4 @ 11:30 am @ MTH302 (Math) @ 1hr @ <a href=\"https://myclass.lpu.in/\">MyClass</a>@LPU",
				"Mar 5 @ 11:30 am @ PEV108 @ 1.5 hr @ <a href=\"https://myclass.lpu.in/\">MyClass</a>@LPU",
				"Mar 5 @ 7:00 pm @ Thapar ML @ 1hr @ Zoom @Thapar",
				"Mar 7 @ @ CSE310 (Java) | CBT3 @ 1hr @ <a href=\"https://myclass.lpu.in/\">MyClass</a>@LPU",
				"Mar 12 @ @ CSE408 (Algo) | CA @ 1hr @ <a href=\"https://myclass.lpu.in/\">MyClass</a>@LPU",
				"Mar 12 @ 7:00 pm @ Thapar ML @ 1hr @ Zoom @Thapar",
				"Mar 19 @ 7:00 pm @ Thapar ML @ 1hr @ Zoom @Thapar",
				"Mar 21 @ @ CSE310 (Java) | CBT4 @ 1hr @ <a href=\"https://myclass.lpu.in/\">MyClass</a>@LPU",
				"Mar 21 @ All Day @ Nvidia GTC @ All Day @ <a href=\"https://reg.rainfocus.com/flow/nvidia/gtcspring2022/aplive/page/ap?tab.day=20220321\"> Click Here </a>",
				"Mar 22 @ All Day @ Nvidia GTC @ All Day @ <a href=\"https://reg.rainfocus.com/flow/nvidia/gtcspring2022/aplive/page/ap?tab.day=20220321\"> Click Here </a>",
				"Mar 23 @ All Day @ Nvidia GTC @ All Day @ <a href=\"https://reg.rainfocus.com/flow/nvidia/gtcspring2022/aplive/page/ap?tab.day=20220321\"> Click Here </a>",
				"Mar 24 @ All Day @ Nvidia GTC @ All Day @ <a href=\"https://reg.rainfocus.com/flow/nvidia/gtcspring2022/aplive/page/ap?tab.day=20220321\"> Click Here </a>",
				"Mar 26 @ 7:00 pm @ Thapar ML @ 1hr @ Zoom @Thapar",
				"Apr 2 @ 7:00 pm @ Thapar ML @ 1hr @ Zoom @Thapar",
				"July 3 @ 11:00 am @ JLPT @ 2hr 10 mins @ Kolkata",
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
