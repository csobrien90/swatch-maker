var PNG = require('png-js');

let data = [];

PNG.decode('smalltest.png', (pixels) => {
    
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
    //this method is trash for some reason...
    dataSet = [[0, 0, 0, 0]];
    data.forEach(arr => {
        for (let i = 0; i < dataSet.length; i++) {
            for (let j = 0; j < 4; j++) {
                if (arr[j] != dataSet[i][j]) {
                    dataSet.push(arr);
                    console.log(arr);
                }
            }
        }
    })

    //output array of colors
    //filter to top colors only
    //display top colors color pallette?

//something is up with the scope - need to keep everything inside this callback to use data array
})

