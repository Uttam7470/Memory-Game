




var images = [
    { src : 'img/puzzle1.png' , name: 'puzzle' , show : false },
    { src : 'img/puzzle2.png' , name: 'puzzle' , show : false },
    { src : 'img/pencil1.png' , name: 'pencil' , show : false },
    { src : 'img/pencil2.png' , name: 'pencil' , show : false },
    { src : 'img/abc-block1.png' , name: 'abc-block' , show : false },
    { src : 'img/abc-block2.png' , name: 'abc-block' , show : false },
    { src : 'img/pinwheel1.png' , name: 'pinwheel' , show : false },
    { src : 'img/pinwheel2.png' , name: 'pinwheel' , show : false },
    { src : 'img/teddy-bear1.png' , name: 'teddy-bear' , show : false },
    { src : 'img/teddy-bear2.png' , name: 'teddy-bear' , show : false },
    { src : 'img/lollipop1.png' , name: 'lollipop' , show : false },
    { src : 'img/lollipop2.png' , name: 'lollipop' , show : false },
    { src : 'img/rubber-duck1.png' , name: 'rubber-duck' , show : false },
    { src : 'img/rubber-duck2.png' , name: 'rubber-duck' , show : false },
    { src : 'img/gift1.png' , name: 'gift' , show : false },
    { src : 'img/gift2.png' , name: 'gift' , show : false }
  ]
  
  var first = -1;
  var second = -1;
  var attempts = 0;
  
  function displayData() {
    let imagesBox = document.getElementById("images");
    imagesBox.innerHTML = "";
    images.forEach((data, index) => {
      let container = document.createElement("div");
      container.classList.add("box");
      container.classList.toggle("flipped", data.show);
  
      let front = document.createElement("div");
      front.classList.add("front");
  
      let back = document.createElement("div");
      back.classList.add("back");
  
      let img = document.createElement("img");
      img.src = data.src;
      back.appendChild(img);
  
      container.appendChild(front);
      container.appendChild(back);
      
      container.addEventListener("click", () => handleClick(index));
      
      imagesBox.appendChild(container);
    });
  
    document.getElementById("attempts").innerText = `Attempts: ${attempts}`;
  }
  
  function handleClick(index) {
    if (first === -1) {
      images[index].show = true;
      displayData();
      first = index;
    } else if (second === -1) {
      images[index].show = true;
      displayData();
      second = index;
      attempts++;
      setTimeout(checkImages, 1000);
    }
  }
  
  function checkImages() {
    if (images[first].name === images[second].name) {
      first = -1;
      second = -1;
    } else {
      images[first].show = false;
      images[second].show = false;
      first = -1;
      second = -1;
      displayData();
    }
  }
  
  function shuffle() {
    let len = images.length;
    let ans = [];
    for (let i = 0; i < len; i++) {
      let randomIndex = Math.floor(Math.random() * images.length);
      ans.push(images[randomIndex]);
      images.splice(randomIndex, 1);
    }
    images = [...ans];
  }
  
  function restartGame() {
    images.forEach(image => image.show = false);
    first = -1;
    second = -1;
    attempts = 0;
    shuffle();
    displayData();
  }
  
  window.addEventListener("load", () => {
    shuffle();
    displayData();
  });
  