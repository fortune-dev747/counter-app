let count = 0;

let result = document.querySelector("#result");
let btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        const styles = event.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }
        if (count > 0) {
            result.style.color = "green";
        }
        if (count < 0) {
            result.style.color = "red";
        }
        if (count === 0) {
            result.style.color = "blue";
        }
        result.textContent = count;
    });
});
