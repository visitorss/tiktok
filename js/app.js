let itemOne = document.querySelector(".item1");
let itemTwo = document.querySelector(".item2");
let itemThree = document.querySelector(".item3");
let itemFour = document.querySelector(".item4");
let itemFive = document.querySelector(".item5");
let itemSix = document.querySelector(".item6");
let itemSeven = document.querySelector(".item7");
let itemCustom = document.querySelector(".item8");
let customTitle = document.querySelector(".custom");
let customInput = document.querySelector(".custom-input");
let success = document.querySelector(".success");
let rechargeBtn = document.querySelector(".recharge-btn");
let successItem = document.querySelector(".success-item");
let okBtn = document.querySelector(".ok-btn");
let counter = 0;
let paraghrap = document.querySelector(".p-item");
let largeText = document.querySelector(".large");
let amountCoin = document.querySelector(".amountcoin");

okBtn.addEventListener("click", () => {
  success.classList.add("hidden");
});

rechargeBtn.addEventListener("click", () => {
  if (totalResult.innerHTML === "0.00") {
    return;
  } else {
    success.classList.remove("hidden");
    paraghrap.innerHTML = `The coin worth $ ${totalResult.innerHTML} has been recharged to given username account `;
    setTimeout(() => {
      customInput.value = "";
      largeText.innerHTML = "Large amount supported";
      customTitle.classList.remove("hidden");
      customInput.classList.add("hidden");
      totalResult.innerHTML = "0.00";
    }, 300);
  }
});

itemOne.addEventListener("click", () => {
  itemOne.classList.add("active-border");
  itemTwo.classList.remove("active-border");
  itemThree.classList.remove("active-border");
  itemFour.classList.remove("active-border");
  itemFive.classList.remove("active-border");
  itemSix.classList.remove("active-border");
  itemSeven.classList.remove("active-border");
  itemCustom.classList.remove("active-border");
  totalResult.innerHTML = aCent.innerHTML;
  customTitle.classList.remove("hidden");
  customInput.classList.add("hidden");
  largeText.innerHTML = "Large amount supported";
  customInput.value = "";
});

itemTwo.addEventListener("click", () => {
  itemTwo.classList.add("active-border");
  itemOne.classList.remove("active-border");
  itemThree.classList.remove("active-border");
  itemFour.classList.remove("active-border");
  itemFive.classList.remove("active-border");
  itemSix.classList.remove("active-border");
  itemSeven.classList.remove("active-border");
  itemCustom.classList.remove("active-border");
  totalResult.innerHTML = bCent.innerHTML;
  customTitle.classList.remove("hidden");
  customInput.classList.add("hidden");
  largeText.innerHTML = "Large amount supported";
  customInput.value = "";
});

itemThree.addEventListener("click", () => {
  itemCustom.classList.remove("active-border");
  itemTwo.classList.remove("active-border");
  itemOne.classList.remove("active-border");
  itemThree.classList.add("active-border");
  itemFour.classList.remove("active-border");
  itemFive.classList.remove("active-border");
  itemSix.classList.remove("active-border");
  itemSeven.classList.remove("active-border");
  totalResult.innerHTML = cCent.innerHTML;
  customTitle.classList.remove("hidden");
  customInput.classList.add("hidden");
  largeText.innerHTML = "Large amount supported";
  customInput.value = "";
});

itemFour.addEventListener("click", () => {
  itemCustom.classList.remove("active-border");
  itemTwo.classList.remove("active-border");
  itemOne.classList.remove("active-border");
  itemThree.classList.remove("active-border");
  itemFour.classList.add("active-border");
  itemFive.classList.remove("active-border");
  itemSix.classList.remove("active-border");
  itemSeven.classList.remove("active-border");
  totalResult.innerHTML = dCent.innerHTML;
  customTitle.classList.remove("hidden");
  customInput.classList.add("hidden");
  largeText.innerHTML = "Large amount supported";
  customInput.value = "";
});

itemFive.addEventListener("click", () => {
  itemCustom.classList.remove("active-border");
  itemTwo.classList.remove("active-border");
  itemOne.classList.remove("active-border");
  itemThree.classList.remove("active-border");
  itemFour.classList.remove("active-border");
  itemFive.classList.add("active-border");
  itemSix.classList.remove("active-border");
  itemSeven.classList.remove("active-border");
  totalResult.innerHTML = eCent.innerHTML;
  customTitle.classList.remove("hidden");
  customInput.classList.add("hidden");
  largeText.innerHTML = "Large amount supported";
  customInput.value = "";
});

itemSix.addEventListener("click", () => {
  itemCustom.classList.remove("active-border");
  itemTwo.classList.remove("active-border");
  itemOne.classList.remove("active-border");
  itemThree.classList.remove("active-border");
  itemFour.classList.remove("active-border");
  itemFive.classList.remove("active-border");
  itemSix.classList.add("active-border");
  itemSeven.classList.remove("active-border");
  totalResult.innerHTML = fCent.innerHTML;
  customTitle.classList.remove("hidden");
  customInput.classList.add("hidden");
  largeText.innerHTML = "Large amount supported";
  customInput.value = "";
});

itemSeven.addEventListener("click", () => {
  itemCustom.classList.remove("active-border");
  itemTwo.classList.remove("active-border");
  itemOne.classList.remove("active-border");
  itemThree.classList.remove("active-border");
  itemFour.classList.remove("active-border");
  itemFive.classList.remove("active-border");
  itemSix.classList.remove("active-border");
  itemSeven.classList.add("active-border");
  totalResult.innerHTML = jCent.innerHTML;
  customTitle.classList.remove("hidden");
  customInput.classList.add("hidden");
  largeText.innerHTML = "Large amount supported";
  customInput.value = "";
});

itemCustom.addEventListener("click", () => {
  customTitle.classList.add("hidden");
  customInput.classList.remove("hidden");
  itemCustom.classList.add("active-border");
  itemTwo.classList.remove("active-border");
  itemOne.classList.remove("active-border");
  itemThree.classList.remove("active-border");
  itemFour.classList.remove("active-border");
  itemFive.classList.remove("active-border");
  itemSix.classList.remove("active-border");
  itemSeven.classList.remove("active-border");
  largeText.innerHTML = "30-2,500,000";
  totalResult.innerHTML = "0.00";
});

let totalStorage = 0;

let aCent = document.querySelector(".acent");
let bCent = document.querySelector(".bcent");
let cCent = document.querySelector(".ccent");
let dCent = document.querySelector(".dcent");
let eCent = document.querySelector(".ecent");
let fCent = document.querySelector(".fcent");
let jCent = document.querySelector(".jcent");
let totalResult = document.querySelector(".rersult-total");

customInput.addEventListener("keyup", () => {
  aAndB();
  if (customInput.value < 30 && customInput.value > 0) {
    amountCoin.classList.remove("hidden");
    largeText.classList.add("hidden");
    itemCustom.classList.add("errorshadow");
    console.log("shecdomaa");
  } else if (customInput.value === "") {
    amountCoin.classList.add("hidden");
    itemCustom.classList.remove("errorshadow");
    largeText.classList.remove("hidden");
    largeText.innerHTML = "30-2,500,000";
  } else {
    itemCustom.classList.remove("errorshadow");
    amountCoin.classList.add("hidden");
    largeText.classList.remove("hidden");
    console.log("sworia");
    largeText.innerHTML = `${"$ "}${counter}`;
  }
});

function aAndB() {
  let inputNumber = customInput.value;
  let a = 0.0105714285714286;
  let b = a * inputNumber;
  counter = parseFloat(b).toFixed(2);
  totalResult.innerHTML = counter;
}
