import "./css/index.css"

const  ccBgColorOne = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const  ccBgColorTwo = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const  ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#C69347", "#DF6F29"],
    default: ["black", "gray"],
  } 
  ccBgColorOne.setAttribute("fill" , colors[type][0])
  ccBgColorTwo.setAttribute("fill" , colors[type][1])
  ccLogo.setAttribute("src" , `cc-${type}.svg`)
}

globalThis.setCardType = setCardType('visa')