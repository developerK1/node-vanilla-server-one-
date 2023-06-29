//MODULES
const fs = require('fs');

//PROCESSING THE FILE AND RENDERING CONTENTS
const bufferFile = (res, file) =>{

    fs.readFile(file,'utf8' ,(err, contents)=> {

        //ERROR CHECHING FOR FILE FOUND
        if(err){
            res.writeHead(404, {'Content-type': 'text/html'});
            console.log("there is an erra")
            res.end("<h2>FILE NOT FOUND !</h2>")  
        }
        else{
        //FOUND FILE PROCESSED BACK AS RESPONSE
        res.writeHead(200, {'Content-type': 'text/html'});   
        console.log("there is NO erra")
        return res.end(contents)
        }
        
        
    })

}


module.exports = bufferFile;