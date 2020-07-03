function o_szukanko(arr, x, y) {
    let k = 0;
    if (x-1 >= 0 && y-1 >= 0 && arr[x-1][y-1] === 'black') k++;
    if (x-1 >= 0 && arr[x-1][y] === 'black') k++;
    if (x-1 >= 0 && y+1 < arr.length && arr[x-1][y+1] === 'black') k++;
    if (y-1 >= 0 && arr[x][y-1] === 'black') k++;
    if (y+1 < arr.length && arr[x][y+1] === 'black') k++;
    if (x+1 < arr.length && y-1 >= 0 && arr[x+1][y-1] === 'black') k++;
    if (x+1 < arr.length && arr[x+1][y] === 'black') k++;
    if (x+1 < arr.length && y+1 < arr.length && arr[x+1][y+1] === 'black') k++;
    if (k === 3) return 'black';
    else return 'white';
}

function krop_szukanko(arr, x, y) {
    let k = 0;
    if (x-1 >= 0 && y-1 >= 0 && arr[x-1][y-1] === 'black') k++;
    if (x-1 >= 0 && arr[x-1][y] === 'black') k++;
    if (x-1 >= 0 && y+1 < arr.length && arr[x-1][y+1] === 'black') k++;
    if (y-1 >= 0 && arr[x][y-1] === 'black') k++;
    if (y+1 < arr.length && arr[x][y+1] === 'black') k++;
    if (x+1 < arr.length && y-1 >= 0 && arr[x+1][y-1] === 'black') k++;
    if (x+1 < arr.length && arr[x+1][y] === 'black') k++;
    if (x+1 < arr.length && y+1 < arr.length && arr[x+1][y+1] === 'black') k++;
    if (k < 2 || k > 3) return 'white';
    else return 'black';
}

function turn(arr) {
    let arr_temp = new Array();
    for (let i = 0; i < arr.length; i++) arr_temp.push(arr[i].slice());
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            arr_temp[i][j] = (arr[i][j] === 'black')? krop_szukanko(arr, i, j) : o_szukanko(arr, i, j);
        }
    }
    return arr_temp;
}

export default turn;