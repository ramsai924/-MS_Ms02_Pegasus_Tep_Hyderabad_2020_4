
var arr = [
	    
	    [5,3,0,0,7,0,0,0,0],
	    [6,0,0,1,9,5,0,0,0],
	    [0,9,8,0,0,0,0,6,0],
	    [8,0,0,0,6,0,0,0,3],
	    [4,0,0,8,0,3,0,0,1],
	    [7,0,0,0,2,0,0,0,6],
	    [0,6,0,0,0,0,2,8,0],
	    [0,0,0,4,1,9,0,0,5],
	    [0,0,0,8,0,0,0,7,9]

	    ]; 

    function solve(y,x,n){

	            for(let i=0;i<9;i++){
			                if(arr[y][i] === n){
						                return false;
						            }
			            }

	            for(let j=0;j<9;j++){
			                if(arr[j][x] === n){
						                return false;
						            }
			            }

	            var x0 = Math.floor((x/3) * 3); 
	            var y0 = Math.floor((y/3) * 3);

	            for(let k=0;k<3;k++){
			         for(let l=0;l<3;l++){
						   if(arr[x0 + k][y0 + l] === n){
									                  
                                                         return false;
									                    
	                                           }else{
					                  return true;
							}
			                }
			    }
	            
	        }

//console.log(solve(4,4,5))

function create(){

	for(let i=0;i<arr.length;i++){

	    for(let j=0;j<arr.length;j++){

	             if(arr[i][j] === 0){

			  for(let n=1;n<10;n++){

			                if(solve(i,j,n)){

							arr[i][j] = n;
			                                return create();

	                                                 }
						         else{

			                                  arr[i][j] = 0;
											                   
			                                    }
								               
					        }
				        }
			    }
        	}
     
}


create(arr);
    
console.log(arr);
