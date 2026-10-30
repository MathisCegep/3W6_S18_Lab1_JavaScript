function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
  let demo = document.getElementById("demo") // récupéré le div avec l'id "demo"
  demo.innerHTML = "" // remplacer le contenu de demo
  let nb = document.getElementById("qty").value // get les value de l'utilisateur
  console.log(nb)

  for (let i = 0; i<nb; i++){

    let h2 = document.createElement("h2") // créer une balise "h2"
    h2.textContent = "Asside" + i
    h2.setAttribute("monId", "Id" + i) // attribut custom
    h2.style.backgroundColor = "white"

    let aside = document.createElement("aside") // créer une balise "h2"
    aside.textContent = "asside" + i
    demo.appendChild(aside)

    h2.addEventListener("mouseenter", function(){
      aside.classList.add("show")
    })
      h2.addEventListener("mouseleave", function(){
      aside.classList.remove("show")
    })


    h2.addEventListener("mousedown", function(event){
      console.log(event)
      console.log(event.target)
      let currentBalise = event.target
      console.log(currentBalise.getAttribute("monId"))

      if (currentBalise.style.backgroundColor == "gray"){
        currentBalise.style.backgroundColor = "white"
      } else  currentBalise.style.backgroundColor = "gray"

    })
    demo.appendChild(h2)

    let p = document.createElement("p") // créer une balise "p"
    p.textContent = "Texte" + i
    demo.appendChild(p)

  }
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
  let demo = document.getElementById("demo") 
  let color = document.getElementById("couleur").value
  let pList = demo.getElementsByTagName("p")
  for (let p of pList) {
    p.style.color = color
  }
}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
  let buttonsList = document.getElementsByTagName("button")
  let className = document.getElementById("btnClass").value
  for (let button of buttonsList) {
    button.className = className
  }

}