const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;

function flipCard(e) {
  let clickedCard = e.target;
  if (clickedCard !== cardOne) {
    clickedCard.classList.add("flip");
    if(!cardOne) {
        return cardOne = clickedCard;
    }
    cardTwo = clickedCard;

    let cardOneImg = cardOne.querySelector("img").src,
    cardTwoImg = cardTwo.querySelector("img").src;
    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
   if(img1 === img2) {
   cardOne.removeEventListener("click", flipCard);
   cardTwo.removeEventListener("click", flipCard);
   cardOne = cardTwo ="";
   return;
   }

   setTimeout(()=> {
   cardOne.classList.add("shake");
   cardTwo.classList.add("shake");
}, 400);

setTimeout(() => {
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = ""; // setting both card value to blank
},1200);



}

cards.forEach(card => {
   card.addEventListener("click", flipCard);
});