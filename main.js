const arrow1 = document.querySelectorAll('#arrow')
const txt1 = document.querySelectorAll('.txt')
const Pt = document.querySelectorAll('#p')
const box11 = document.querySelectorAll('#box1')

for (let i = 0; i < box11.length; i++) {
    txt1[i].addEventListener("click", function() {
        txt1[i].classList.toggle("black");
        for (let j = 0; j < txt1.length; j++) {
            if (j !== i) {
                txt1[j].classList.remove("black");
            }
        }
        arrow1[i].classList.toggle("rotate");
        for (let j = 0; j < box11.length; j++) {
            if (j !== i) {
                arrow1[j].classList.remove("rotate");
            }
        }
        Pt[i].classList.toggle("active");
        for (let j = 0; j < box11.length; j++) {
            if (j !== i) {
                Pt[j].classList.remove("active");
            }
        }
    });
}