function Cell(i,j){
	this.i = i; //col
	this.j = j; //row
	this.walls = [true,true,true,true];
	this.visited = false;
	this.inStack = false;

	this.highlight = function() {
		var x = this.i*w;
		var y = this.j*w;
		noStroke();
		fill(255, 255, 255, 100);
		rect(x,y,w,w);
	}

	this.show = function() {
		var x = this.i*w;
		var y = this.j*w;
		stroke(255);
		if (this.walls[0]){line(x  ,y  ,x+w,y)}; //top
		if (this.walls[1]){line(x+w,y  ,x+w,y+w)}; //right
		if (this.walls[2]){line(x  ,y+w,x+w,y+w)}; //bottom
		if (this.walls[3]){line(x  ,y  ,x  ,y+w)}; //left

		if (this.visited){
			noStroke();
			fill(255, 94, 68, 100);
			rect(x, y, w, w);
		}

		if (this.inStack){
			noStroke();
			fill(107, 251, 68, 100);
			rect(x, y, w, w);
		}

	}

	this.checkNeighbors = function() {
		var neighbors = [];
		var top    = grid[index(i, j - 1)];
		var right  = grid[index(i + 1 ,j)];
		var bottom = grid[index(i,j+1)];
		var left   = grid[index(i - 1,j)];

		if (top && !top.visited) {neighbors.push(top)};
		if (right && !right.visited) {neighbors.push(right)};
		if (bottom && !bottom.visited) {neighbors.push(bottom)};
		if (left && !left.visited) {neighbors.push(left)};
	
		if (neighbors.length > 0) {
			var r = floor(random(0, neighbors.length));
			return neighbors[r];
		}else {return undefined};

}



}





	// this.unvisitedNeighbours = function(visitedList, grid, totalRows) {
	// 	var unvisitedNeighbours = [];
	// 	for (var i = 0; i < visitedList.length; i++){
	// 		if (this.i === visitedList[i].i){
	// 			if(!(this.j + 1 === visitedList[i].j)){
	// 				unvisitedNeighbours.push(grid[(this.j + 1) * totalRows + this.i]);
	// 			}
	// 			if(!(this.j - 1 === visitedList[i].j)){
	// 				unvisitedNeighbours.push(grid[(this.j - 1) * totalRows + this.i]);
	// 			}
	// 		}
	// 		if (this.j === visitedList[i].j){
	// 			if(!(this.i + 1 === visitedList[i].i)){
	// 				unvisitedNeighbours.push(grid[(this.i + 1) * totalRows + this.i]);
	// 			}
	// 			if(!(this.i - 1 === visitedList[i].i)){
	// 				unvisitedNeighbours.push(grid[(this.i - 1) * totalRows + this.i]);
	// 			}
	// 		}

	// 	}
	// 	return unvisitedNeighbours;
	// }
	// this.removeWall = function(cell2){
	// 	if (this.i === cell2.i){
	// 		if(this.j + 1 === cell2.j){
	// 			this.walls[1] = false;
	// 			cell2.walls[3] = false;
	// 		}
	// 		else if(this.j - 1 === cell2.j){
	// 			this.walls[3] = false;
	// 			cell2.walls[1] = false;
	// 		}
	// 	}
	// 	else if(this.j === cell2.j){
	// 		if(this.i + 1 === cell2.i){
	// 			this.walls[0] = false;
	// 			cell2.walls[2] = false;
	// 		}
	// 		else if(this.i - 1 === cell2.i){
	// 			this.walls[2] = false;
	// 			cell2.walls[0] = false;
	// 		}
	// 	}


	// }






	