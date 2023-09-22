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

				/*	"Date @ Time @ Task @ Duration @ <a href=\" \"> Venue </a> @ Type",

					Conventions (for last space after @) -->
					1) LPU = Anything LPU related (Exam/assignment/CA etc)
					2) LiveEvent = Seminar/Webinar/Any Live session
					3) codechefStyle = Any Coding codechefStyle/ Hackathon etc
					4) Blank/Anything = Any other event
				*/
				const Tasktuples = [
					"2023 9 12 @ 2:00 pm @ WISSEN TECHNOLOGY (PPT + Test) @ 3hrs @ <a href=\"http://email.click2redirect.me/ls/click?upn=6Zx57d02W-2Bi-2BJHqESYwSXSXxtnog0HYPjT5PulZ5JYgHVglzwH36rPUaucgQt-2BsTr3w6DbluEG10d6GAZkBtmoJ8dzpOxliBB-2BcGbpylFNabVHmNN2Im5ui7UdTYFodNRl9br7o6MCjxcb-2FS798jLHeQZ0LTQ7bpktfjc3NirGZMGpKc-2B8hubM-2FH-2BmkErT8T2HXXCk38pgRXMrOy34YRncAB06l8-2FsvehEQqRkIoTzU4cpXbhy-2B8cN-2Fgi8-2BRSXxd0pj20kIArD6m5EhXADFA455ZP8fp-2FECrv1NgeBNdtUiih9xZWa3v-2FUXB6f1I4fbhc5225LhH9B09wdsvOPuLYAkHeZxd0Dijc8ymns-2BKF365V877KCkti0ik7nfjLQZKIPrWfraK7PqfN3abWvoIA72SMKihD6Dyx2wnESZvHWCfJ4eJ-2B1iKT0-2BpO8wHQHPCXIj-2FNyOcfDhfRSF982Ku8A-3D-3DZhGb_q2b7oOBWagP3wAooQxcAsqqeO-2FKKnHTvJAY8SSJ4KKHNSfWIx9A-2Fdp5ZWNh1Vb3p4iwknNLXV3tzLCGy65PDfu4u0McZLxviy0RTQSdWONOtxCA2wbwXUzQ73VXpkZBeWRxUk9b24UZRQZw520sd0WnZX3LV7TnHjwIqlCeRH1G2X3Gu02DbLpwUM6W5PHddXDw3cAjMElEDwVL7XflKr4sMXkzshfd71jg1Tg-2FoliQf7YYNFxm5Qpi52JirEFPMefm8FL6XTvr6Y6yzxRWqMAYlBwwzoPVWDVNxvhqSaVrzfI6RuLXKl6WK8v7sRpQDdFJe6ajVrB0xRqqI7uop-2BhZDigpENrpg1qg3EBDf9T8tNZAGVZLlb6Oa-2FdOkr9Nvql7mAIqd4RR5Sg2aTaNCJJsnv-2B0KoJtlifeFqMmSdHR0vgj4RjI3YmfcVQ2k9REw1YDvgp2eyir6rVPSitlH1q2teKd4Vt6MiVLp0q5jlGvKt-2FHMRqTaSXH4Sx6rZz48e0kYP5DSsE-2BVlfeiSa98joNX9bP4WxChGMNZYDaVUW-2FGQA5YwihUmztVnWJEzQB3VEejma70PPSDI9RkHlxX3A-3D-3D\">Gmeet</a> @none",
					"2023 9 12 @ 6:00 pm @ EDVEDHA (batch23) @ 1hrs @ <a href=\"https://meet.google.com/joz-imrd-uca\">Gmeet</a> @none",
					"2023 9 13 @ 11:00 am @ Accenture @ 2hrs @ 38-808 @none",
					"2023 12 3 @ 1:00 pm @ JLPT @ 3hrs @ Kolkata"
				];
				// Would be great if I provide a counter of how many tasks completed and efficiency. Can be really be a booster for reassurance

			/*"2022 11 30 @ 9:00 pm @ Newton's November Coding Contest @ 2.5hrs @ <a href=\"https://my.newtonschool.co/contest/all\">NewtonSchool</a>@LiveEvent",
				
			"2022 12 10 @ 8:00 pm @ LeetCode BiWeekly contest 93 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
			"2022 12 11 @ 8:00 am @ LeetCode Weekly contest 323 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
			"2022 12 16 @ 9:00 pm @ Newton's Grand Coding Contest 2022 @ 3hrs @ <a href=\"https://my.newtonschool.co/contest/all\">NewtonSchool</a>@LiveEvent",
			"2022 12 18 @ 8:00 am @ LeetCode Weekly contest 324 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
			"2022 12 24 @ 8:00 pm @ LeetCode BiWeekly contest 94 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
			"2022 12 25 @ 8:00 am @ LeetCode Weekly contest 325 @ 1.5hrs @ <a href=\"https://leetcode.com/contest/\">LeetCode</a>@LeetCodeStyle",
			"2023 1 26 @ 9:00 pm @ Newton's Grand Coding Contest 2023 @ 3hrs @ <a href=\"https://my.newtonschool.co/contest/all\">NewtonSchool</a>@LiveEvent",*/
			var today = new Date();
			const convertTime12to24 = time12h => {const [time, modifier] = time12h.split(" "); let [hours, minutes] = time.split(":");if (hours === "12") hours = "00"; if (modifier === "pm") hours = parseInt(hours, 10) + 12; return `${hours}:${minutes}`;};
			let timeChangedToDash = false;

			for(task=0;task<Tasktuples.length;task++){
				let tupleStrArr = Tasktuples[task].split("@");
				if(tupleStrArr[1]==" - ") {tupleStrArr[1] = " 11:59 pm ";timeChangedToDash = true;}
				let date = new Date(tupleStrArr[0] + convertTime12to24(tupleStrArr[1].trim()));
				if (date<today) continue;

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
