var PNG = require('png-js');

let data = [];

PNG.decode('test.png', (pixels) => {
    
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
    
    let allColors = Array.from(stringSet).map(JSON.parse);

    //filter to top five colors only

    let count;
    let countObj = {};

    console.log('starting count');
    allColors.forEach(color => {
        count = 0;
        data.forEach(arr => {
            if (arr.toString() === color.toString()) {count++};
        })
        countObj[color.toString()] = count;
        console.log('running...');
    })

    let countArr = [];

    for (element in countObj) {
        countArr.push(countObj[element]);
    }

    countArr.sort((a, b) => a - b);
    let fifthTopColor = countArr[countArr.length - 5];
    let topColors = [];

    for (element in countObj) {
        if (countObj[element] >= fifthTopColor) {
            topColors.push(element);
        }
    };

    //display top colors color pallette?

    console.log(topColors);

})

