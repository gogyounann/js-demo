// 1.要素の取得
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");
console.log(empties);

// 2.ドラッグのトリガー
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// 4.1つ1つのempty要素を取得
for (const empty of empties){
    empty.addEventListener("dragover",dragOver);
    empty.addEventListener("dragenter",dragEnter);
    empty.addEventListener("dragleave",dragLeave);
    empty.addEventListener("drop",dragDrop);
}


// 3.ドラッグ関数
function dragStart() {
    console.log("start");
    fill.className += " hold";
    setTimeout(() => {
        fill.className = "invizible"
    }, 0);
}

function dragEnd() {
    console.log("end");
    fill.className = "fill"
}

function dragOver(e) {
    e.preventDefault();
    console.log("Over");
}

function dragEnter() {
    console.log("Enter");
    this.className += " hovered"
}
function dragLeave() {
    console.log("Leave");
    this.className = "empty"
}

function dragDrop() {
    console.log("Drop");
    this.className = "empty";
    this.appendChild(fill);
}
