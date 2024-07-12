// Récupération des différents éléments
const cursor1 = document.querySelector(".cursor--1");
const cursor2 = document.querySelector(".cursor--2");
console.log(cursor1);

// Ecoute de l'événement "mousemove" sur la page
// L'événement mousemove est déclenché à partir d'un élément lorsqu'un dispositif de pointage (ex. une souris) est déplacé lorsque le curseur est à l'intérieur de l'élément.
document.addEventListener("mousemove", (e) => {
  let x = e.clientX; // coordonnée horizontale
  let y = e.clientY; // coordonnée verticale
  console.log({ x, y });
  cursor1.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
  cursor2.style.left = x + "px";
  cursor2.style.top = y + "px";
});

// Ecoute de l'événement "mousedown" sur la page
// L'événement mousedown est déclenché à partir d'un Element lorsqu'on appuie sur le bouton d'un dispositif de pointage (une souris par exemple) pendant que le curseur est sur l'élément.
document.addEventListener("mousedown", (e) => {
  // Ajout de la classe "scale"
  cursor1.classList.add("scale");
});

// Ecoute de l'événement "mouseup" sur la page
// L'événement mouseup est déclenché à partir d'un Element lorsqu'un bouton d'un dispositif de pointage (une souris ou un pavé tactile par exemple) est relâché lorsque le pointeur est sur cet élément.
document.addEventListener("mouseup", (e) => {
  // Retrait de la classe "scale"
  cursor1.classList.remove("scale");
});
