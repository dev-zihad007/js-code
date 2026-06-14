 
export function showZiroError() {
    alert("Container can not go below0!")
}

export function decrease(count) {
    if(count <=0){
        showZiroError();
        return count;
    }

    count--;
}






let count = 0;

const countvalue = document.getElementById("count");
const increaseBtn = document.getElementById("Increase");

const decreaseBtn = document.getElementById("Decrease");
const resetBtn = document.getElementById("Reset");

increaseBtn.addEventListener("click", () =>{
    count++ ;
    countvalue.textContent = count;
});

decreaseBtn.addEventListener("click", () =>{
    count= decrease(count);
    countvalue.textContent = count;
});

resetBtn.addEventListener("click", () =>{
    count = 0;
    countvalue.textContent = count;
});




