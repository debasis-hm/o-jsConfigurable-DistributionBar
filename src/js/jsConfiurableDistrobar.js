function origamijsConfigurableDistro_bar(parms) {

		let db = this;

	    db.draw_DistroBar = function(parms){


   				if( parms.animationstyle == "o-distroBar"){

					let jsonDatalength = parms.dataLabels.length;

					if(jsonDatalength){

						let index = -1;

						var outerprogress = setInterval(function() {
							index++;
						    if(index == jsonDatalength ){ clearInterval(outerprogress);}
							if(index < jsonDatalength){

								let parentDiv = document.getElementById(parms.dataLabels[index].progresshtmlElement);
								let outerclsinfo = parms.dataLabels[index].outerBackgroundclassName;
								if(outerclsinfo){parentDiv.classList.add(outerclsinfo);}

								let childlength = parms.dataLabels[index].progress.length;
								let childindex = -1;
								var insideprogress = setInterval(function() {

									    childindex++;
									    if(childlength -childindex   == 1){ clearInterval(insideprogress);}
										let innerDiv = document.createElement("DIV");
										let innerclsinfo = parms.dataLabels[index].className[childindex];
										innerDiv.classList.add(innerclsinfo);
										innerDiv.style.width =  "0%";									
										parentDiv.appendChild(innerDiv);									
										let progressjson = parms.dataLabels[index].progress[childindex] || 0;
										if(progressjson >= 0 && progressjson <= 100 ){											
														
														innerDiv.style.display = "inline-block";
														innerDiv.style.width = progressjson+ "%";	
														innerDiv.className += " widthAnimate";													
														innerDiv.style.animationDuration = '1s';
													    innerDiv.innerHTML = Math.round(progressjson)+ "%";
										}
										else
										{
											  	innerDiv.style.width = "0%";
											  	console.log("Invalid data");
										}

									
								},10);

							}
						},100);
					}
				}
				else {

     				console.log("please provide a type .");
				}

	    };

	};

 let ojsConfigurableDistrobarobj = new origamijsConfigurableDistro_bar();
	export default function (parms) {
		if(parms!= undefined){
			   ojsConfigurableDistrobarobj.draw_DistroBar(parms);
		}	   
	 
	}
