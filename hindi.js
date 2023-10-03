function move(){
    
    for (let click = 0; click < 1; click++) {
        var position = ["up", "left"];
        var position = position[Math.floor(Math.random()*position.length)];
        
        const random = Math.floor(Math.random() * 200);
        
        if(position == "left"){
            const hindi = document.getElementById("hindi").style.left = random + "px";
        }
        if(position == "up"){
            const hindi = document.getElementById("hindi").style.top = random + "px";
            
        }
        console.log(position);
        console.log(random);
    }
}
