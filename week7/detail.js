const params = new URLSearchParams(window.location.search);
const image = params.get("image");
const photographer = params.get("photographer");
const keyword = params.get("keyword");
const date = params.get("date");


document.getElementById("detail-image").src = image;
document.getElementById("detail-date").innerText = `날짜: ${date.slice(2,4)}/${date.slice(4,6)}/${date.slice(6,8)}`;
document.getElementById("detail-photographer").innerText = `촬영자: ${photographer}`;
document.getElementById("detail-keyword").innerText = `키워드: ${keyword}`;