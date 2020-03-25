function sudoku(solve) {
	    var initObj = {}, tempObj, iter = 81;
	    while(iter > 0) {
		 iter = 0;
		  for(var v = 0; v < solve.length; v++ ){
			 for(var h = 0; h < solve.length; h++ ){
					 initObj = {};
							               
					 if(solve[v][h] === 0){
								for(var i = 0; i < 9; i++){
											 if(solve[v][i] > 0){
																 initObj[solve[v][i]] = true;
														 }
													 if(solve[i][h] > 0){
																initObj[solve[i][h]] = true;
													 }
										 }
							for(var vBox = Math.floor(v / 3) * 3; vBox <  Math.floor(v / 3) * 3 + 3; vBox++ ){
								 for(var hBox = Math.floor(h / 3) * 3; hBox <  Math.floor(h / 3) * 3 + 3; hBox++ ){
												 if(solve[vBox][hBox]){
														initObj[solve[vBox][hBox]] = true;
									 }
						 }
				 }
										                   
						 tempObj = Object.keys(initObj);
										                   
								if(tempObj.length === 8){
										 for(var j = 0; j < 10; j++){
																	                                
											 if(tempObj.indexOf(j.toString()) < 0){
																						                            
													 solve[v][h] = j;
													}
											}
										 }
										   else {
													iter++;
												}
									 }
							                
							  }
				            }
		        }
	    return initialInput;
}


var initialInput = [
	    [0,0,0,2,6,0,7,0,1],
	    [6,8,0,0,7,0,0,9,0],
	    [1,9,0,0,0,4,5,0,0],
	    [8,2,0,1,0,0,0,4,0],
	    [0,0,4,6,0,2,9,0,0],
	    [0,5,0,0,0,3,0,2,8],
	    [0,0,9,3,0,0,0,7,4],
	    [0,4,0,0,5,0,0,3,6],
	    [7,0,3,0,1,8,0,0,0]
	    ];

console.log(sudoku(initialInput));
