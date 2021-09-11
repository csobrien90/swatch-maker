const img = new Image(150, 100);
img.src = "smalltest.png";
img.onload = () => {ctx.drawImage(img, 0, 0)}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function getSwatch() {

    var imgData = ctx.getImageData(0, 0, 150, 100);

    let data = [];

    //iterate through img pixels and populate array(data) with complete list of colors (in rgba)

    for (let i = 0; i <= imgData.length / 4; i++) {
        data[i] = [
            imgData[4 * i],
            imgData[4 * i + 1],
            imgData[4 * i + 2],
            imgData[4 * i + 3],
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

}