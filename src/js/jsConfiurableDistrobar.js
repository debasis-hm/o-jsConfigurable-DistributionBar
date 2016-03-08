function origamijsConfigurableDistro_bar(parms) {

		let db = this;

	    db.draw_DistroBar = function(parms){


   				if( parms.animationstyle == "o-distroBar"){

					let jsonDatalength = parms.dataLabels.length;

					if(jsonDatalength){

						let index = -1;

						setInterval(function() {
							index++;
							if(index < jsonDatalength){

								let parentDiv = document.getElementById(parms.dataLabels[index].progresshtmlElement);
								let outerclsinfo = parms.dataLabels[index].outerBackgroundclassName;
								if(outerclsinfo){parentDiv.classList.add(outerclsinfo);}

								let childlength = parms.dataLabels[index].progress.length;
								let childindex = -1;
								setInterval(function() {
									childindex++;
									if(childindex < childlength){

										let innerDiv = document.createElement("DIV");
										let innerclsinfo = parms.dataLabels[index].className[childindex];
										innerDiv.classList.add(innerclsinfo);
										parentDiv.appendChild(innerDiv);
										let width = 0;
										let progressjson = Math.round(parms.dataLabels[index].progress[childindex]) || 0;
										if(progressjson >= 0 && progressjson <= 100 ){
											if(progressjson > 0){
													let progress = setInterval(function () { 
													if (width == progressjson) {
														 clearInterval(progress);						
													}
													else{
														width++;
														innerDiv.style.display = "inline-block";
														innerDiv.style.width = width+ "%";													   
													    innerDiv.innerHTML = width+ "%";													    	
													}
																	    
										     }, 10); 
											 }
											else
											  {
											  	innerDiv.style.width = "0%";	
											  
											  }

									
										}
										else
											  {
											  	innerDiv.style.width = "0%";
											  	console.log("Invalid data");
											  }

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
