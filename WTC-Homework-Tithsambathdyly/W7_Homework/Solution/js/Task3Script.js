function mergesort(arr,l,r){
    if(l>=r){
        return;//returns recursively
    }
    let m = parseInt((l+r-1)/2);
    mergesort(arr,l,m);
    mergesort(arr,m+1,r);
    merge(arr,l,m,r);
}
function merge(arr,l,m,r){
    let n1 = m - l + 1;
    let n2 = r - m;
 
    // Create temp arrays
    let L = [], R = [];
 
    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
 
    // Merge the temp arrays back into arr[l..r]
    // Initial index of first subarray
    let i = 0;
 
    // Initial index of second subarray
    let j = 0;
 
    // Initial index of merged subarray
    let k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
function sort(){
    let arr = document.getElementById('inputNumber').value;
    arr = filterUserInput(arr.split(','));
    for (let i = 0; i < arr.length;i++){
        arr[i] = parseInt(arr[i]);
    }
    mergesort(arr,0,arr.length-1);
    document.getElementById('outputResult').value = arr;
}
function filterUserInput(arr){
    arr = arr.filter(function(element){
        return element !== '';
    })
    return arr;
}