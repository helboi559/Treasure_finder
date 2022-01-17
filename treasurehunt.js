// test to see if javascript page is connected to the html page
// alert("hey im connected");

let numTries = 5;

const winImage =
  "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/04/02/5ac259d2b312500b48a85017_waldo2.jpg.rend.hgtvcom.1280.960.suffix/1573240432590.jpeg";
const loseImage =
  "https://cdn.shopify.com/s/files/1/0439/3104/1951/products/Wheres-Waldo-DELUXE-Adult-Costume-Set-Men4__86955.1589205856.1280.1280.jpg?v=1611244846";
const neutralImage =
  "https://images.fineartamerica.com/images/artworkimages/medium/3/4-wheres-waldo-fred-potter-transparent.png";

const numCells = document.getElementsByTagName("td").length;

// get a random number between 0 and 8
const getRandomNum = () => {
  return Math.floor(Math.random() * numCells);
};

// store location of treasure and bomb
let treasureLocation = getRandomNum();
let bombLocation = getRandomNum();

// make sure bomb treasure and bomb location are not the same
while (bombLocation === treasureLocation) {
  bombLocation = getRandomNum();
}

const treasure = (loc) => {
  if (numTries === 0) return alert("No more tries, you lost!");

  if (loc === treasureLocation) {
    // if user clicks on treasure, alert that they won and reload the page when they exit the alert
    // document.getElementById(loc).innerHTML = "&#x1f308";
    document.getElementById(
      loc
    ).innerHTML = `<img class="cell-icon" src="${winImage}" />`;
    setTimeout(() => alert("You found the right Waldo! You win!"), 200);
    // location.reload();
  } else if (loc === bombLocation) {
    // if user clicks on bomb, alert that they lost and reload the page when they exit the alert
    document.getElementById(
      loc
    ).innerHTML = `<img class="cell-icon" src="${loseImage}" />`;
    setTimeout(() => alert("Wrong Waldo, you lose. Try again!"), 200);
    // location.reload();
  } else {
    // if user clicks on neutral square, let user keep going
    document.getElementById(
      loc
    ).innerHTML = `<img class="cell-icon" src="${neutralImage}" />`;
  }

  if (numTries > 0) numTries--;
  document.getElementById("counter").innerHTML = numTries;
};
