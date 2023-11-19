// array [1, 2, 3, 4]
function calcMedia(array){
    // sum all array elements then divide them between the number of elements//

    let arraySum = 0;

    for (let i = 0; i < array.length; i++) {
        arraySum = arraySum + array[i];
    }

    const media = arraySum / array.length;
    console.log(media);
    return media;

    // array.length //
}