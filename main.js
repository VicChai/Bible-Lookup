document.querySelector(".submit").addEventListener("click", getFetch);
document.querySelector(".reset").addEventListener("click", resetPage);

async function getFetch() {
  try {
    let verse = document.querySelector("input").value;
    console.log(verse);
    let bible = await fetch(`https://bible-api.com/${verse}`);
    let data = await bible.json();
    let book = document.createElement("div");
    book.classList.add("text-2xl");
    book.classList.add("text-center");
    book.classList.add("mb-5");
    book.classList.add("mt-6");
    book.innerText = data.verses[0].book_name;
    document.body.appendChild(book);
    let displas = document.createElement("div");
    displas.classList.add("text-center");
    displas.classList.add("mb-8");
    displas.innerText = `Chapter ${data.verses[0].chapter}`;
    document.body.appendChild(displas);

    for (let i = 0; i < data.verses.length; i++) {
      let displaText = document.createElement("div");
      displaText.classList.add("ml-5");
      displaText.classList.add("mr-5");
      displaText.innerText += `${data.verses[i].verse} ${data.verses[i].text}`;
      document.body.appendChild(displaText);
    }
    let space = document.createElement("div");
    space.classList.add("my-10");
    document.body.appendChild(space);
  } catch (err) {
    console.log(`error ${err}`);
  }
}
function resetPage() {
  location.reload();
}
