//MODULES
const http = require('http');
const fs = require('fs');
const path = require("path");
const dir = '../public/pages';
// const bufferFile = require('../utils/renderFile');



//ENV VARIABLES
const PORT = process.env.Port || 5555;





//POINTING TO THE FILE LOCATIONS
const filePath = path.join(__dirname,dir);

//CREATING THE SERVER
const server = http.createServer((req, res) => {

    if(req.url === "/"){
       if(req.method === "GET"){
        bufferFile(res, `${filePath}/index.html`);
       }
    }else if(req.url === "/about"){
        bufferFile(res, `${filePath}/about.html`);
    }
});


//PROCESSING THE FILE AND RENDERING CONTENTS
const bufferFile = (res, file) =>{

    fs.readFile(file,'utf8' ,(err, contents)=> {

        //ERROR CHECHING FOR FILE FOUND
        if(err){
            res.writeHead(404, {'Content-type': 'text/html'});
            console.log("there is an erra")
            res.end("<h2>FILE NOT FOUND !</h2>")  
        }
        
        //FOUND FILE PROCESSED BACK AS RESPONSE
        res.writeHead(200, {'Content-type': 'text/html'});   
        console.log("there is NO erra")
        return res.end(contents)
    })

}



server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  