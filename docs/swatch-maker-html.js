const color1 = document.getElementsByClassName('one')[0];
const color2 = document.getElementsByClassName('two')[0];
const color3 = document.getElementsByClassName('three')[0];
const color4 = document.getElementsByClassName('four')[0];
const color5 = document.getElementsByClassName('five')[0];

const fileSourceInput = document.getElementById('file-source');

const img = new Image();

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

fileSourceInput.addEventListener('keyup', () => {
    img.src = fileSourceInput.value;
    ctx.drawImage(img, 0, 0);
})

function getSwatch() {

    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    let data = [];

    //iterate through img pixels and populate array(data) with complete list of colors (in rgba)

    for (let i = 0; i <= imgData.data.length / 4; i++) {
        data[i] = [
            imgData.data[4 * i],
            imgData.data[4 * i + 1],
            imgData.data[4 * i + 2],
            imgData.data[4 * i + 3],
        ]
    }

    //remove duplicate colors to produce more manageable array(dataSet)

    let stringData = data.map(JSON.stringify);

    let stringSet = new Set(stringData);

    let allColors = Array.from(stringSet).map(JSON.parse);

    //filter to top five colors only

    let count;
    let countObj = {};

    console.log('starting color filtering');
    allColors.forEach(color => {
        count = 0;
        data.forEach(arr => {
            if (arr.toString() === color.toString()) {count++};
            data.shift();
        })
        countObj[color.toString()] = count;
        console.log('running...')
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

    //format topColors for input into css

    const rgbaColorsArr = []

    topColors.forEach(arr => {
        rgbaColorsArr.push(`rgba(${arr})`);
    })

    //display top colors as color pallette
    color1.style.backgroundColor = rgbaColorsArr[0]
    color2.style.backgroundColor = rgbaColorsArr[1]
    color3.style.backgroundColor = rgbaColorsArr[2]
    color4.style.backgroundColor = rgbaColorsArr[3]
    color5.style.backgroundColor = rgbaColorsArr[4]


}