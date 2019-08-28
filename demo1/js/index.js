var arr=[1,2,1,2,456,489,456,258];
function oSort(arr){
    var result ={};
    var newArr=[];
    for(var i = 0; i<arr.length;i++){
        if(!result[arr]){
            newArr.push(arr);
            result[arr]=1
        }
    }
    return newArr
}

