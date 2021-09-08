var PNG = require('png-js');

let data = [];

PNG.decode('test2.png', (pixels) => {
    
    //iterate through img pixels and populate array(data) with complete list of colors (in rgba)

    for (let i = 0; i <= pixels.length / 4; i++) {
        data[i] = [
            pixels[4 * i],
            pixels[4 * i + 1],
            pixels[4 * i + 2],
            pixels[4 * i + 3],
        ]
    }

    //remove duplicate colors to produce more manageable array(dataSet)

    let stringData = data.map(JSON.stringify);
    let stringSet = new Set(stringData);
    let summedArr = Array.from(stringSet, JSON.parse);

    //output total array of colors
    
    summedArr.forEach(subArr => console.log(subArr));
    
    //filter to top colors only
    //display top colors color pallette?

//something is up with the scope - need to keep everything inside this callback to use data array
})

