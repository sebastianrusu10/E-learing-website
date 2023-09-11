const dropArea = document.querySelector(".drop_box"),
  button = dropArea.querySelector("button"),
  dragText = dropArea.querySelector("header"),
  input = dropArea.querySelector("input");
let file;
var filename;
button.onclick = () => {
  input.click();
};
input.addEventListener("change", function (e) {
  var fileName = e.target.files[0].name;
  let filedata = `
    <h4>Tema de acasa a fost incarcata</h4>`;
  dropArea.innerHTML = filedata;
});