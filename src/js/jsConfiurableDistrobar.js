function origamijsConfigurableDistro_bar(parms) {

		let db = this;

	    db.draw_DistroBar = function(parms){


  				if( parms.animationstyle == "o-distroBar"){

							if(parms.progresshtmlElement){


								let parentDiv = document.getElementById(parms.progresshtmlElement);
								let showLabel = parms.showLabel;

								if( Boolean(parms.outerBackgroundInfo.useExistingClass) == true){
									let clsname = (parms.outerBackgroundInfo.className) ? parms.outerBackgroundInfo.className : "default-outer-o-Distbar";
									parentDiv.classList.add(clsname);
								}
								else{
									parentDiv.style.border = (parms.outerBackgroundInfo.border) ? parms.outerBackgroundInfo.border : "1px solid #AAA" ;
									parentDiv.style.borderRadius = (parms.outerBackgroundInfo.borderRadius) ? parms.outerBackgroundInfo.borderRadius : "5px" ;
									parentDiv.style.backgroundColor = (parms.outerBackgroundInfo.backgroundColor) ? parms.outerBackgroundInfo.backgroundColor : "white" ;
									parentDiv.style.padding = (parms.outerBackgroundInfo.paddingInbet) ? parms.outerBackgroundInfo.paddingInbet : "1px" ;
									parentDiv.style.height = (parms.outerBackgroundInfo.height) ? parms.outerBackgroundInfo.height : "38px" ;
								}

								let jsonDatalength = parms.dataLabels.length;
								if(jsonDatalength){
									let index = -1;
									setInterval(function() {
										index++;
										if(index<jsonDatalength){
														
														let innerDiv = document.createElement("DIV");									

														if(Boolean(parms.dataLabels[index].useExistingClass)== true){
															let clsname = (parms.dataLabels[index].className) ? parms.dataLabels[index].className : "stripedOrange-inner-o-Distbar";
															innerDiv.classList.add(clsname);
															innerDiv.style.display = "inline-block";
															parentDiv.appendChild(innerDiv);
																	
														}
														else{
															innerDiv.style.backgroundColor = (parms.dataLabels[index].backgroundColor) ? parms.dataLabels[index].backgroundColor : "Green";
															innerDiv.style.borderRadius = (parms.dataLabels[index].borderRadius) ? parms.dataLabels[index].borderRadius : "5px";
															innerDiv.style.textColor = (parms.dataLabels[index].textColor) ? parms.dataLabels[index].textColor : "white";
															innerDiv.style.fontSize = (parms.dataLabels[index].fontsize) ? parms.dataLabels[index].fontsize : "1.8vw";
															innerDiv.style.textAlign = (parms.dataLabels[index].textAlignmet) ? parms.dataLabels[index].textAlignmet : "center";
															innerDiv.style.display = "inline-block";
															innerDiv.style.height = "100%";
														    parentDiv.appendChild(innerDiv);
														}

															let width = 0;

															let percentValue = (parms.dataLabels[index].progress) ? parms.dataLabels[index].progress  : width;
															
															let animationSpeed = 40;

															if(parms.dataLabels[index].animationSpeed){
																animationSpeed = parms.dataLabels[index].animationSpeed;
															}

															if(percentValue){

																let progress = setInterval(function () { 
																	if (width == percentValue) {

																		 clearInterval(progress);						
																	}
																	else{
																		width++;
																		innerDiv.style.width = width+ "%";
																	    if(Boolean(showLabel)==true)
																	    	{
																	    		innerDiv.innerHTML = width+ "%";
																	    	} 
																	    else{
																	    	 innerDiv.innerHTML = " .";
                              											     innerDiv.style.textIndent ="9999px"; 
																	    }
																			
																	}
																	    
															    }, animationSpeed); 
															}
													}							
										}, 50);	


								}
								else{

									let errSpan = "<span>Insufficient Data</span>";
									parentDiv.innerHTML = errSpan;
								}

							}else{
								alert("Html Container is empty !");
							}
			
				}
				else {

     				alert("please provide a type .");
				}

	    };

	};

 let ojsConfigurableDistrobarobj = new origamijsConfigurableDistro_bar();
	export default function (parms) {
		if(parms!= undefined){
			   ojsConfigurableDistrobarobj.draw_DistroBar(parms);
		}	   
	 
	}
