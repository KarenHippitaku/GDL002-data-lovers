window.data = {
  
  ShowNumbers: (INJURIES, valueButton) => {
    let wordAndValues = "";
    let result = [];
    const years = INJURIES.filter(INJURIE => valueButton === INJURIE.Year);
    for(let i = 0; i<48; i++){
      let value = Object.values(years[0])[i];
      let key = Object.keys(years[0])[i];
      if(value === null){
        value = 0;
        wordAndValues = key + "     :     " + value;
      }else{
        wordAndValues = key + "     :     " + value;
      }
      result.push(wordAndValues);
    }
    return result;
  },


  filterData: (injuriesList) => {
    const arrayYear = [];
    let year = "";
    for(let i=0; i<injuriesList.length; i++) {
      year = parseInt(injuriesList[i].Year);
      if(year <=2016 & year>=2000){
        arrayYear.push(year);
        }
    }
     return arrayYear;
  },

  fillElementsOrder: (injuriesList) => {
    return window.data.filterData(injuriesList).reverse();
  },

  showNumbersOfCalculate: (INJURIES, valueButton) => {
    let averache = [];
    let result = 0;
    const years = INJURIES.filter(INJURIE => valueButton === INJURIE.Year);
    for(let i = 0; i<48; i++){
      let values =  Object.values(years[0])[i];
      let value = Object.values(years[0])[i];
      if(value === null){
        value = 0;
      }else{
        averache.push(values);
      }
    }
    averache.forEach(function(element){
      result += element;
    });
    result = Math.round(result/48);
    console.log(result);
    return result;
  }

  };
