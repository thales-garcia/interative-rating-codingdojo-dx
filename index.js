const btnSubmit = document.getElementById("submit-rating")
const btnRating = document.querySelectorAll(".btn-rate")
const valueRating = document.getElementById("rating-value")

const rating_container = document.querySelector(".rating-box")
const thankyou_container = document.querySelector(".thankyou-box")

btnSubmit.addEventListener("click", () => {
    if (valueRating.innerHTML != 0){
        rating_container.classList.add("invisible")
        thankyou_container.classList.remove("invisible")
    }
})

btnRating.forEach(rating => {
    rating.addEventListener("click", () => {
        valueRating.innerHTML = rating.innerHTML;
    })
});



