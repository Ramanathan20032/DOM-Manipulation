// button selection
const button = document.querySelector("button");

// creating new div
var resultdiv = document.createElement("div");
resultdiv.id = "result";

// appending into wrapper div
let wrapper = document.getElementById("wrapper");
wrapper.appendChild(resultdiv);

// eventlistner
button.addEventListener("click", function () {
  const input = document.getElementById("input");

  // ---- procedure for selecting the drop down element in javaScript ----
  // selectedIndex - index of the element which is selected in the dropdown
  // options - which has all the option in the dropdown as a array
  const city = input.options[input.selectedIndex].value;

  let population = 0;
  let literacyRate = 0;
  let language = 0;

  switch (city) {
    case "Benguluru":
      population = 4646732;
      literacyRate = 90.2;
      language = "Kannada";
      break;
    case "Chennai":
      population = 8443675;
      literacyRate = 88.71;
      language = "Tamil";
      break;
    case "Mumbai":
      population = 12442373;
      literacyRate = 89.73;
      language = "Marathi";
      break;
    case "Delhi":
      population = 16787941;
      literacyRate = 86.2;
      language = "Hindi";
      break;
  }

  // template literals
  let text = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}`;
  console.log(text);

  // id = result from the resultdiv
  document.getElementById("result").innerHTML = text;
});
