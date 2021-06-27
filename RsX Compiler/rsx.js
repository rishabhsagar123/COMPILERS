var r=parseInt(prompt("Enter a Number 1:"));
var t=parseInt(prompt("Enter a Number 2:"));
// var n=parseInt(prompt("Enter a Limit Upto The Numbers You want To add:"));
var g=r.toString(2);
var h=t.toString(2);
var j=0;
var i;
var l;
var z;
	var f = 0;
	var d = 0;
	var count2;
var w;	
var first=0;
var second=0;
var p;
var k;
var b;
	var l;
	var op1;
	var op2;
	var op3;
	var op4;
	var g=0;
var n=3;
var number1=0;
var number2=0;
var answer1=0;
var answer2=0;
var count=0;
var count2=0;

	
	calculate();
	function calculate() {
		for (i = 0; i < r; i++) {
			z = 0;
			
			for (k = 1; k >=z; k--) {
				second = 0;
				
				document.write("<br>");
				document.write(k);
				document.write("<br>");
				if (k == 0) {
					second++;
					if (second == 1) {
						document.write("Extract-Zero");
						for (l = 0; l <= 1; l++) {
							
							document.write("<br>");
							document.write("Print Digits");
							document.write(l);
							if (l == 1) {
								count++;

								if (count % n == 0) {
									b = 1;
									document.write("<br>");
									document.write("Answer Code");
									document.write(b);


									d++;


								}else if(count%n==1){
									d=d+l;
								}
							} else {
								count2++;
								
								if (count2 % n == 0) {
                                    g++;
                                    if (g == 1) {
									for (var op = 0; op <= 1; op++) {
										if (op == 1) {
											count++;

										}

										}
									}
								}
							}

						}
					}
				} else {
					document.write("Extract:-One");
					for (l = 1; l >= 0; l--) {
						
						document.write("<br>");
						document.write("Print Digits");
						document.write(l);
						if (l == 1) {
							count++;

							if (count % n == 0) {
								b = 1;
								document.write("<br>");
								document.write("Answer Code");
								document.write(b);


								d++;
								
								
							}
						} else {
							count2++;
							
							if (count2 % n == 0) {
                                g++;
                                if (g == 1) {
								for (var op = 0; op <= 1; op++) {
									if (op == 1) {
										count++;

								}

									}
								}
							}

						}
					}


				}


			}


		}




		document.write("<br>");

		for (i = 0; i < t; i++) {
			w = 0;
			
			for (l = 1; l >= w; l--) {
				
				first = 0;
				document.write("<br>");
				document.write(l);
				document.write("<br>");
				if (l == 0) {
					first++;
					if (first == 1) {
						document.write("Extract-Zero");
						for (p = 0; p <= 1; p++) {
				
							document.write("<br>");
							document.write("Print Digits");
							document.write(p);
							if (p == 1) {
								count++;

								if (count % n == 0) {
									b = 1;
									document.write("<br>");
									document.write("Answer Code");
									document.write(b);


									d++;
								}else if(count%n==1){
										d=d+p;
									}


							} else {
								count2++;
								
								if (count2 % n == 0) {
                                    g++;
                                    if (g == 1) {
									for (var op = 0; op <= 1; op++) {
										if (op == 1) {
											count++;

											}		
										}
									}
								}

							}
						}
					}
				} else {
					document.write("Extract:-One");
					for (p = 1; p >= 0; p--) {
						
						document.write("<br>");
						document.write("Print Digits");
						document.write(p);
						if (p == 1) {
							count++;
							if (count % n == 0) {
								b = 1;
								document.write("<br>");
								document.write("Answer Code");
								document.write(b);


								d++;
								

							}	



							


						} else {
							count2++;
							
							if (count2 % n == 0) {
                                g++;
                                if (g == 1) {
								for (var op = 0; op <= 1; op++) {
									if (op == 1) {
										count++;
										}

									}
								}
							}
						}

					}
				}



			}




		}

		/*	if (count % n == 0) {
			b = 1;
			document.write("<br>");
			document.write("Answer Code");
			document.write(b);
		}
		if ((r / n < 20) && (t / n < 20)) {
			if ((r / n == 10 && t / n == 10) || (r % n == 0 && t % n == 0) || (r == 3 && t == 3)) {
				d = d + 2;
			}
		}*/
		
		if ((r % n == 1) && (t % n ==1)||(r%n==0) && (t%n==2)||(r%n==2)&&(t%n==0)) {
			d = d + 1;
		}
		if((r==1)&&(t==0)||(r==0)&&(t==1)){
				d=d+1;
			}
       
			
        document.write("<br>");
        document.write("Sums");
        document.write(d);
		
	
		}

/* develop();
function develop(){
 for(z=0;z<=n;z++){
	if(r==z){
 	   first=r;
             while(first>0){
                	k=first%10;
    			number1=number1*10+k;
			first=parseInt(first/10);
			for(i=0;i<=9;i++){
				if(number1>i){
				 count++;
			 	  for(l=0;l<=count;l++){
                                      document.write("First Number");
					document.write(l);	
						document.write("<br>");
                        if (l > 1) {
                            checker1();
                        }
                                    
	}
                                    
				}
		}
}
              	       
		
	}else if(t==z){
            second=t;
		while(second>0){
			l=second%10;
    			number2=number2*10+l;
			second=parseInt(second/10);
                   			for(i=0;i<=9;i++){
				if(number2>i){
				 count2++;
			 	  for(l=0;l<=count2;l++){
                                      document.write("Second Number");
					document.write(l);	
						document.write("<br>");
						
	                             		
}
					
	
		}
            	
	}
		          
	  }
}
}
}
	function checker1() {
	
			b = l + 1;
			w = b - 1;
			f = parseInt(b % w);
			document.write("Extract This");
			document.write(f);
		b--;
		w--;

		if (l == 0 && w==0) {
			return false;
		} 
}
function checker2(){
if(l>1){
		for(p=0;p<=l;p++){
		  if(p==count2){
			answer2=p%10;
			document.write("Extract Second Number");
			document.write(answer2);										
		}
		}
				
							
						}
}	
*/

	
