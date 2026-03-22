// 1. Linear Search (Գծային փնտրում)
function linearSearch(arr, target) {
    let start = performance.now();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            let end = performance.now();
            console.log(`Linear Search գտավ ${target}-ը ${i} ինդեքսում: Ժամանակ՝ ${(end - start).toFixed(4)}ms`);
            return i;
        }
    }
    return -1;
}

// 2. Binary Search (Երկուական փնտրում)
function binarySearch(arr, target) {
    let start = performance.now();
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            let end = performance.now();
            console.log(`Binary Search գտավ ${target}-ը ${mid} ինդեքսում: Ժամանակ՝ ${(end - start).toFixed(4)}ms`);
            return mid;
        } else if (target < arr[mid]) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
}

// Թեստային տվյալներ
const data = Array.from({length: 1000}, (_, i) => i + 1); // 1-ից 1000 թվերը
const target = 789;

console.log("--- Փնտրման ալգորիթմների թեստավորում ---");
linearSearch(data, target);
binarySearch(data, target);
