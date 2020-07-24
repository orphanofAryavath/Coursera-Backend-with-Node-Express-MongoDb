var rect = require('./rectangle')

function solveRect(l,b){
    console.log("solving for rectangle with l="+l+"and b="+b);

    rect(l,b,(err,rectangle) => {
        if(err){
            console.log("Error",err.message)
        }
        else{
            console.log("the area of rectangle is"+rectangle.area(l,b))
            console.log("the area of perimeter is"+rectangle.perimeter(l,b))
        }
    }) 

    console.log("this is ag=fter call to react")

}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
