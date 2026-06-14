
export function showZiroError() {
    alert("Container can not go below 0!")
}

export function decrease(count) {
    if(count <=0){
        showZiroError();
        return count;
    }

    count--;
    return count;
}
