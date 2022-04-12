let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

var heading = document.getElementById("title");
heading.addEventListener("mouseover", demonstrationFunction);
function demonstrationFunction() {

  var randomRed = Math.random() * 255;
  var randomGreen = Math.random() * 255;
  var randomBlue = Math.random() * 255;
  console.log(randomRed);
  console.log(randomGreen);
  console.log(randomBlue);

  // rgb(100,400,300);
  var outputColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  console.log(outputColorString);

  heading.style.color = outputColorString;
  heading.style.fontSize = "8rem";
  heading.style.textShadow = "10px 10px 10px #fff";
  heading.style.transform = "rotate(20deg)";

  console.log(heading.classList);

  heading.classList.toggle("specialTitle");

  console.log(heading.classList);
}

let jsonDatabase = [
  {
    "title" : "Study in da City",
    "picture_url" : "creative.jpg",
    "favorite_color" : "#ff0072",
    "highlights" : ["Media", "Design", "Producing"]
  },
  {
    "title" : "Here are what I love",
    "picture_url" : "coffee.jpg",
    "favorite_color" : "#405f7c",
    "highlights" : ["oatmilk coffee", "seasonal fruits", "city walk"]
  },
  {
    "title" : "Where do I live",
    "picture_url" : "springNYC.JPEG",
    "favorite_color" : "#c1a411",
    "highlights" : ["Shanghai", "New York", "Coming Up..."]
  },

];

for (var i = 0; i < jsonDatabase.length; i++) {
  myPage(jsonDatabase[i]);
}

function myPage(incomingJSON){
  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
  newContentElement.classList.add('contentItem');

  /// Create HEADLINE h3, set class, set content
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);

  /// Create & add LIST HEADLINE to the item
  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerText = "Highlights:";
  newContentElement.appendChild(newContentSubhead);

  /// Create & add PET LIST to the item
  let newContentHighlights = document.createElement("UL");
  newContentElement.appendChild(newContentHighlights);

  /// Create & add all the pet LIST ITEMS to the PET LIST
  for (var i = 0; i < incomingJSON['highlights'].length; i++) {
    var highlightsString = incomingJSON['highlights'][i];
    var newHighlight = document.createElement("LI");
    newHighlight.innerText = highlightsString;
    newContentHighlights.appendChild(newHighlight);
  }

  /// Create & add footer image
  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  /// Add the item to the page
  contentGridElement.appendChild(newContentElement);
}
