var coin = 0;
  var imageArr = ["https://i.postimg.cc/nhdCZm9b/upPic.png", "https://i.postimg.cc/bNmz2hy1/downPic.png",
    "https://i.postimg.cc/cJQ2wRRP/worker-Down-Pic.png", "https://i.postimg.cc/4Nh6ftD9/worker-Up-Pic.png",
    "https://i.postimg.cc/tJGzm9Hs/gold.png", "https://i.postimg.cc/fWYCSSxm/silver.png", "https://i.postimg.cc/c4mcXqkJ/bronze.png",
    "https://i.postimg.cc/59LN2yHv/Steel.png", "https://i.postimg.cc/7hY43MHC/Statuette.png", "https://i.postimg.cc/2j2tm88R/angryPic.png",
    "https://i.postimg.cc/fTkjh6pL/Shop.png", "https://i.postimg.cc/DmkhdnbC/statuette1-Part.png", "https://i.postimg.cc/0jLkW7h0/statuette2-Part.png",
    "https://i.postimg.cc/W1HYqXL3/statuette3-Part.png"]
  function clicker() {
    coin++
    document.getElementById("click").src = imageArr[1];
    setTimeout(changeMe, 200)
    document.getElementById("number").innerText = coin
  }

  var workerCapacity = 10;
  var workerCapacityPower = 10;
  var workerPrice = 20;
  var steel = 0;
  var checkWorker = true;
  var workerMailArr = ["gloves", "boots", "helmet", "cuirass"];

  function workerClick() {
    checkArmor();
    if (coin >= workerPrice && checkWorker) {
      checkWorker = false;
      coin -= workerPrice;
      workerPrice += workerPrice;
      document.getElementById("workerCost").style.fontSize = "2vw";
      document.getElementById("workerCost").style.color = "red";
      setTimeout(function () { document.getElementById("workerCost").style.fontSize = "1.5vw"; }, 500);
      setTimeout(function () { document.getElementById("workerCost").style.color = "white"; }, 500);
      document.getElementById("workerCost").innerText = workerPrice;
      document.getElementById("number").innerText = coin;
      increment();
      workerWork();
    } else if (coin < workerPrice) {
      document.getElementById("workerCost").style.color = "red";
      document.getElementById("workerCost").innerText = "No enough ";
      setTimeout(function () {
        document.getElementById("workerCost").innerText = workerPrice;
        document.getElementById("workerCost").style.color = "";
      }, 400);
    }
  }

  var checkShop = false;
  var index = 0;
  var price = 20;
  var countArmor = 0;
  function checkArmor() {
    if (workerCapacity == price && countArmor <= 3) {
      checkWorker = false;
      document.getElementById("item").innerText = workerMailArr[index];
      document.getElementById("warning").style.display = "block";
      document.getElementById("click").src = imageArr[9];
      setTimeout(function () { document.getElementById("click").src = imageArr[0]; }, 500);
      checkShop = true;
    }
  }

  var checkGloves = true;
  var glovesPrice = 5;
  function gloves() {
    if (checkGloves && workerCapacity == 20 && steel >= glovesPrice) {
      let decrementSteel = setInterval(function () {
        steel--;
        document.getElementById("steelCount").innerText = steel;
        document.getElementById("glovesPic").src = "https://i.postimg.cc/13srB8b8/check.png";
        if (steel == glovesPrice) {
          clearInterval(decrementSteel);
        }
      }, 70);
      checkWorker = true;
      document.getElementById("workerCapacity").innerText = workerCapacity;
      document.getElementById("warning").style.display = "none";
      index++;
      price += price;
      countArmor++;
      checkShop = false;
      checkGloves = false;
    } else {
      document.getElementById("nowIsNot").style.display = "block";
      setTimeout(function () { document.getElementById("nowIsNot").style.display = "none"; }, 500)
    }
  }

  var checkBoots = true;
  var bootsPrice = 15;
  function boots() {
    if (checkBoots && workerCapacity == 40 && steel >= bootsPrice) {
      let decrementSteel = setInterval(function () {
        steel--;
        document.getElementById("steelCount").innerText = steel;
        document.getElementById("bootsPic").src = "https://i.postimg.cc/13srB8b8/check.png";
        if (steel == bootsPrice - 5) {
          clearInterval(decrementSteel);
        }
      }, 70);
      checkWorker = true;
      document.getElementById("workerCapacity").innerText = workerCapacity;
      document.getElementById("warning").style.display = "none";
      index++;
      price += price;
      countArmor++;
      checkShop = false;
      checkBoots = false;
    } else {
      document.getElementById("nowIsNot").style.display = "block";
      setTimeout(function () { document.getElementById("nowIsNot").style.display = "none"; }, 500)
    }
  }

  var checkHelmet = true;
  var helmetPrice = 30;
  function helmet() {
    if (checkHelmet && workerCapacity == 80 && steel >= helmetPrice) {
      let decrementSteel = setInterval(function () {
        steel--;
        document.getElementById("steelCount").innerText = steel;
        document.getElementById("helmetPic").src = "https://i.postimg.cc/13srB8b8/check.png";
        if (steel == helmetPrice - 10) {
          clearInterval(decrementSteel);
        }
      }, 70);
      checkWorker = true;
      document.getElementById("workerCapacity").innerText = workerCapacity;
      document.getElementById("warning").style.display = "none";
      index++;
      price += price;
      countArmor++;
      checkShop = false;
      checkHelmet = false;
    } else {
      document.getElementById("nowIsNot").style.display = "block";
      setTimeout(function () { document.getElementById("nowIsNot").style.display = "none"; }, 500)
    }
  }

  var checkCuirass = true;
  var cuirassPrice = 60;
  function cuirass() {
    if (checkCuirass && workerCapacity == 160 && steel >= cuirassPrice) {
      let decrementSteel = setInterval(function () {
        steel--;
        document.getElementById("steelCount").innerText = steel;
        document.getElementById("cuirassPic").src = "https://i.postimg.cc/13srB8b8/check.png";
        if (steel == cuirassPrice - 20) {
          clearInterval(decrementSteel);
        }
      }, 70);
      checkWorker = true;
      document.getElementById("workerCapacity").innerText = workerCapacity;
      document.getElementById("warning").style.display = "none";
      index++;
      countArmor += 2;
      checkShop = false;
      checkCuirass = false;
    } else {
      document.getElementById("nowIsNot").style.display = "block";
      setTimeout(function () { document.getElementById("nowIsNot").style.display = "none"; }, 500)
    }
  }

  function increment() {
    let coinsInterval = setInterval(function () {
      coin++;
      steel++;
      document.getElementById("number").innerText = coin;
      document.getElementById("steelCount").innerText = steel;
      workerCapacity--;
      document.getElementById("workerCapacity").innerText = workerCapacity;
      if (workerCapacity == 0) {
        clearInterval(coinsInterval);
      }
    }, 700)
  }

  function workerWork() {
    let moveWorkerInterval = setInterval(function () {
      document.getElementById("workerImg").src = imageArr[2];
      setTimeout(upWorker, 500);
      if (workerCapacity == 0) {
        clearInterval(moveWorkerInterval);
        workerCapacityPower += workerCapacityPower;
        workerCapacity += workerCapacityPower;
        checkWorker = true;
        document.getElementById("workerCapacity").style.fontSize = "2vw";
        document.getElementById("workerCapacity").style.color = "green";
        setTimeout(function () { document.getElementById("workerCapacity").style.fontSize = "1.5vw"; }, 500);
        setTimeout(function () { document.getElementById("workerCapacity").style.color = "white"; }, 500);
        document.getElementById("workerCapacity").innerText = workerCapacity;
      }
    }, 1000)
    document.getElementById("moveSteel").className = "steelImage";
    setTimeout(function () { document.getElementById("moveSteel").className = ""; }, 2000);
  }

  function changeMe() {
    document.getElementById("click").src = imageArr[0]
  }

  function upWorker() {
    document.getElementById("workerImg").src = imageArr[3]
  }

  var quantBronze = 0;
  var quantSilver = 0;
  var quantGold = 0;
  var checkDeposit = true;

  function bank() {
    var depositBronze = setInterval(function () {
      ++quantBronze;
      coin--;
      document.getElementById("bankBronze").innerText = quantBronze;
      document.getElementById("number").innerText = coin;
      if (coin == 0) {
        clearInterval(depositBronze);
      }
      if (quantBronze == 50) {
        quantSilver++;
        quantBronze -= 50;
        document.getElementById("bankBronze").innerText = quantBronze;
        document.getElementById("bankSilver").innerText = quantSilver;
      }
      if (quantSilver == 3) {
        quantGold++;
        quantSilver -= 3;
        document.getElementById("bankGold").innerText = quantGold;
        document.getElementById("bankSilver").innerText = quantSilver;
      }
      if (coin > 0) {
        checkDeposit = false;
        document.getElementById("bankBronze").style.fontSize = "2.5vw";
        document.getElementById("bankBronze").style.color = "red";
      } else {
        checkDeposit = true;
        document.getElementById("bankBronze").style.fontSize = "2vw";
        setTimeout(function () { document.getElementById("bankBronze").style.color = "white" }, 100);
      }
    }, 50)
    document.getElementById("moveImage").className = "depositImage";
    setTimeout(function () { document.getElementById("moveImage").className = ""; }, 2000);
  }

  function deposit() {
    if (coin > 0 && checkDeposit) {
      bank();
    }
  }

  function shop() {
    if (checkShop) {
      document.getElementById("all").style.backgroundImage = "none";
      document.getElementById("allGameDisplay").style.display = "none";
      document.getElementById("shopInside").style.display = "block";
      document.getElementById("backGameButt").style.display = "block";
      document.getElementById("backButt").style.display = "none";
      document.getElementById("steel").style.display = "block";
    } else {
      document.getElementById("shop").style.color = "red";
      document.getElementById("shop").style.backgroundColor = "white";
      document.getElementById("shop").style.fontSize = "3vw";
      document.getElementById("shop").innerText = "There is no need !";
      setTimeout(function () {
        document.getElementById("shop").innerText = "Shop";
        document.getElementById("shop").style.color = "white";
        document.getElementById("shop").style.fontSize = "2vw";
        document.getElementById("shop").style.backgroundColor = "";
      }, 500)
    }
  }



  function backFromShop() {
    document.getElementById("all").style.backgroundImage = "url(https://i.postimg.cc/qgfs9zGy/Game-Background.jpg)";
    document.getElementById("allGameDisplay").style.display = "block";
    document.getElementById("backButt").style.display = "block";
    document.getElementById("backGameButt").style.display = "none";
    document.getElementById("shopInside").style.display = "none";

  }

  function starting() {
    document.getElementById("all").style.backgroundImage = "url(https://i.postimg.cc/qgfs9zGy/Game-Background.jpg)";
    document.getElementById("allGameDisplay").style.display = "block";
    document.getElementById("startButt").style.display = "none";
    document.getElementById("historyButt").style.display = "none";
    document.getElementById("backButt").style.display = "block";
    document.getElementById("cinematicButt").style.display = "none";
    setTimeout(function () {
      document.getElementById("steel").style.display = "block";
      document.getElementById("steelCount").style.display = "block";
    }, 150)
  }

  function history() {
    document.getElementById("historyButt").style.display = "none";
    document.getElementById("startButt").style.display = "none";
    document.getElementById("all").style.backgroundImage = "url(https://i.postimg.cc/X7QFfHR9/History-Background.jpg)";
    document.getElementById("backButt").style.display = "block";
    document.getElementById("historyT").style.display = "block";
    document.getElementById("cinematicButt").style.display = "none";
  }

  function back() {
    document.getElementById("videoPlay").style.display = "none";
    document.getElementById("startButt").style.display = "block";
    document.getElementById("all").style.backgroundImage = "url(https://i.postimg.cc/yxChGDj9/Home-Background.webp)";
    document.getElementById("historyButt").style.display = "block";
    document.getElementById("backButt").style.display = "none";
    document.getElementById("historyT").style.display = "none";
    document.getElementById("allGameDisplay").style.display = "none";
    document.getElementById("cinematicButt").style.display = "block";
    document.getElementById("steel").style.display = "none";
    document.getElementById("steelCount").style.display = "none";

    function stop() {
      let video = document.getElementById("videoPlay")
      video.contentWindow.postMessage('{"event":"command", "func":"stopVideo", "args":""}', '*');
    }
    stop();
  }

  function cinematic() {
    document.getElementById("videoPlay").style.display = "block";
    document.getElementById("historyButt").style.display = "none";
    document.getElementById("startButt").style.display = "none";
    document.getElementById("backButt").style.display = "block";

    function play() {
      let video = document.getElementById("videoPlay")
      video.contentWindow.postMessage('{"event":"command", "func":"playVideo", "args":""}', '*');
    }
    play();
  }

  var checkOnePart = true;
  var checkTwoPart = false;
  var checkThreePart = false;
  var currentSteel = steel;
  function statuette() {
    if (steel >= 200 && quantGold >= 1 && checkOnePart) {
      steel -= 200;
      quantGold -= 1;
      document.getElementById("bankGold").innerText = quantGold;
      document.getElementById("steelCount").innerText = steel;
      document.getElementById("build").style.display = "block";
      setTimeout(function () { document.getElementById("build").style.display = "none"; }, 800);
      setTimeout(function () { document.getElementById("statuettePic").src = "https://i.postimg.cc/DmkhdnbC/statuette1-Part.png" }, 800);
      checkOnePart = false;
      checkTwoPart = true;
    } else if (steel >= 200 && quantGold >= 1 && checkTwoPart) {
      steel -= 200;
      quantGold -= 1;
      document.getElementById("bankGold").innerText = quantGold;
      document.getElementById("steelCount").innerText = steel;
      document.getElementById("build").style.display = "block";
      setTimeout(function () { document.getElementById("build").style.display = "none"; }, 800);
      setTimeout(function () { document.getElementById("statuettePic").src = "https://i.postimg.cc/0jLkW7h0/statuette2-Part.png" }, 800);
      checkTwoPart = false;
      checkThreePart = true;
    } else if (steel >= 200 && quantGold >= 1 && checkThreePart) {
      steel -= 200;
      quantGold -= 1;
      document.getElementById("bankGold").innerText = quantGold;
      document.getElementById("steelCount").innerText = steel;
      document.getElementById("build").style.display = "block";
      setTimeout(function () { document.getElementById("build").style.display = "none"; }, 800);
      setTimeout(function () { document.getElementById("statuettePic").src = "https://i.postimg.cc/W1HYqXL3/statuette3-Part.png" }, 800);
      checkTwoPart = false;
      checkThreePart = false;
      setTimeout(function () {
        document.getElementById("allGameDisplay").style.display = "none";
        document.getElementById("steel").style.display = "none";
        document.getElementById("backButt").style.display = "none";
        document.getElementById("steelCount").style.display = "none";
        document.getElementById("all").style.backgroundImage = "none";
        document.getElementById("done").style.display = "block"
      }, 1000)
    } else {
      document.getElementById("notEnough").style.display = "block";
      setTimeout(function () { document.getElementById("notEnough").style.display = "none" }, 500)
    }
  }