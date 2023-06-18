const fileContents = fs.readFileSync("data.txt", "utf-8");
console.log(fileContents);
// nema da se ispecati tekstot vo data(bez utf), tuku nekoj buffer - go cita failot vo bajti

fs.readFile("data.txt", "utf-8", (error, data) => {
    //async call
    if(error) {
        console.log(error);
    } else {
        console.log(data)
    }
    
});
console.log("Third");




fs.writeFileSync("greet.txt", "Hello Semos"); 

fs.writeFile("greet.txt", "Hello Semos 2" , (error) => {
    if(error) {
        console.log(error);

    } else {
        console.log("File was written")
    }
});


fs.writeFile("name.txt", "Elena Koceska", (error) => {
    if(error) {
        console.log(error);

    } else {
        console.log("File was written")
    }
});

fs.writeFile("name.txt", "39", {flag: "a"}, (error) => {
    if(error) {
        console.log(error);

    } else {
        console.log("File was written")
    }
}
);