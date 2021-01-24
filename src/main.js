/* eslint-disable */
import "bootstrap";
import "./style.css";
const PRONOUNS = ["the", "our", "da"];
const ADJS = ["greatest", "almighty", "super"];
const NAMES = ["site", "hive", "place"];
const LINKERS = ["of", "for", "from"];
const SURNAMES = ["coders", "hackers", "crackheads", "memes"];
const DOMAIN_EXTENSIONS = [
  ".com",
  ".org",
  ".net",
  ".de",
  ".ru",
  ".uk",
  ".jp",
  ".it",
  ".fr",
  ".nl",
  ".ca",
  ".au",
  ".es",
  ".ch",
  ".edu",
  ".gov",
  ".se",
  ".us",
  ".no",
  ".mil",
  ".tech",
  ".shop",
  ".info",
  ".io"
];

const THE_DOMAIN_PIECES = [
  PRONOUNS,
  ADJS,
  NAMES,
  LINKERS,
  SURNAMES,
  DOMAIN_EXTENSIONS
];

function generateDomains(ourARR) {
  let auxiliarArray = ourARR.slice();
  let headOfAuxArr = auxiliarArray.shift();
  if (auxiliarArray.length > 0) {
    let list = generateDomains(auxiliarArray);
    let returARR = [];
    for (let elem of headOfAuxArr) {
      for (let elem2 of list) {
        let domaincreated;
        domaincreated = elem.concat(elem2); //concat the pieces where we are
        returARR.push(domaincreated);
      }
    }
    return returARR;
  } else {
    return headOfAuxArr; //stop condition
  }
}
window.onload = function() {
  let allDomains = [];
  allDomains = generateDomains(THE_DOMAIN_PIECES);
  let list = document.querySelector(".dList");
  for (let elem of allDomains) {
    let newItem = document.createElement("li");
    let textnode = document.createTextNode(elem);
    newItem.appendChild(textnode);
    list.appendChild(newItem);
  }
};
