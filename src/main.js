
const showData = () => {
  document.getElementById("welcomeBlock").style.display = "none";
  document.getElementById("idButton").style.display = "block";
  document.getElementById("infoBlock").style.display = "grid";
 };
  document.getElementById("enterButton").addEventListener("click", showData);
  document.getElementById("registerButton").addEventListener("click", showData);

   const showButtons = () => {
      let buttonInjuriesList = document.getElementById("totalData");
      const arrayYearFilter = window.data.filterData(INJURIES);
      for(let i=0; i<arrayYearFilter.length; i++){
        let spanInjurie = document.createElement("span");
        spanInjurie.id = "Injurie" + [i];
        let buttonInjurie = document.createElement("button");
        buttonInjurie.value = arrayYearFilter[i];
        spanInjurie.appendChild(buttonInjurie);
        spanInjurie.innerHTML =` <button name="button" value = "${arrayYearFilter[i]}-01-04">${arrayYearFilter[i]}</button>`;
        buttonInjuriesList.insertAdjacentElement("beforeend", spanInjurie);
      }

   };

   const activateButtonFunctionFilterOrder = (INJURIES) =>{
    let activateButton = document.getElementsByName("button");
    let arrayButton = Array.from(activateButton);
    arrayButton.forEach(function (element) {
      element.addEventListener("click",(event)=>{
        elementsOfDOM();
        const valueButton = event.target.value;
        let showNumber = window.data.ShowNumbers(INJURIES, valueButton);
        return showNumber.forEach((element)=>{
          document.getElementById("Resultado").innerHTML += element + `<br />`;
        });
      });
    });
  };

  const filter = () =>{
    document.getElementById("totalData").innerHTML = '';
     const values = document.getElementById("filterMenu").value;
     switch(values){
      case "filterForYear":
        showData();
        showButtons();
        activateButtonFunctionFilterOrder(INJURIES);
        break;
     // case "filterForRisk":

     }
  };

  document.getElementById("filterMenu").addEventListener("change",filter);

   const showButtonsOrder = () => {
    let buttonInjuriesList = document.getElementById("totalData");
    const arrayYearFilter = window.data.fillElementsOrder(INJURIES, buttonInjuriesList);
    for(let i=0; i<arrayYearFilter.length; i++){
      let spanInjurie = document.createElement("span");
      spanInjurie.id = "Injurie" + [i];
      let buttonInjurie = document.createElement("button");
      buttonInjurie.value = arrayYearFilter[i];
      spanInjurie.appendChild(buttonInjurie);
      spanInjurie.innerHTML =` <button name="button" value = "${arrayYearFilter[i]}-01-04">${arrayYearFilter[i]}</button>`;
      buttonInjuriesList.insertAdjacentElement("beforeend", spanInjurie);
    }
    activateButtonFunctionFilterOrder(INJURIES);
  };

  const order = () =>{
    document.getElementById("totalData").innerHTML = '';
     const values = document.getElementById("sortMenu").value;
     switch(values){
      case "lastToFirst":
        showData();
        showButtonsOrder(INJURIES);
        break;
      case "FirstToLast":
        showData();
        showButtons();
        activateButtonFunctionFilterOrder(INJURIES);
        break;
      case "default":
       alert("No has elegido ninguno");
     }
  };

  document.getElementById("sortMenu").addEventListener("change",order);

  const calculate = () =>{
    document.getElementById("totalData").innerHTML = '';
     const values = document.getElementById("calculusMenu").value;
     switch(values){
      case "YearWithFewerInjuries":
        showData();
        showButtons();
        activateButtonFunctionToCalculate();
        break;
     // case "filterForRisk":

     }
  };

  document.getElementById("calculusMenu").addEventListener("change",calculate);

   const closeModal = () =>{
     document.getElementById("closeModal").style.display = "none";
     document.getElementById("Resultado").style.display = "none";
   };
   document.getElementById("closeModal").addEventListener("click",closeModal);

  const elementsOfDOM = () =>{
    document.getElementById("Resultado").innerHTML = "";
    document.getElementById("closeModal").style.display = "block";
    document.getElementById("Resultado").style.display = "block";
  };

  const activateButtonFunctionToCalculate = () =>{
    let activateButton = document.getElementsByName("button");
    let arrayButton = Array.from(activateButton);
    arrayButton.forEach(function (element) {
      element.addEventListener("click", (event)=>{
        elementsOfDOM();
        const valueButton = event.target.value;
        const averacheDate = window.data.showNumbersOfCalculate(INJURIES, valueButton);
        document.getElementById("Resultado").innerHTML += "El promedio de accidentes en el año " + valueButton + " es de " + averacheDate + `<br />`;
      });
    });
  };
