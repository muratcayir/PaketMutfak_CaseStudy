function handleClick(e) {
    if (e.value === "getir") {
      document.querySelector("#content1").style.display = "block";
      document.querySelector("#content2").style.display = "none";
      document.querySelector("#content3").style.display = "none";
    } else if (e.value === "trendyol") {
      document.querySelector("#content1").style.display = "none";
      document.querySelector("#content2").style.display = "block";
      document.querySelector("#content3").style.display = "none";
    } else {
      document.querySelector("#content1").style.display = "none";
      document.querySelector("#content2").style.display = "none";
      document.querySelector("#content3").style.display = "block";
    }
  }
  
  const getirAppKey = document.getElementById("getirAppKey");
  const getirRestKey = document.getElementById("getirRestKey");
  const trendApiKey = document.querySelector("#trendApiKey");
  const trendAppKey = document.querySelector("#trendAppKey");
  const trendSuppId = document.querySelector("#trendSuppId");
  const yemekUsername = document.getElementById("yemekUsername");
  const yemekPassword = document.getElementById("yemekPassword");
  const yemekCatName = document.getElementById("yemekCatName");
  const yemekCatId = document.getElementById("yemekCatId");
  const h2= document.getElementsByTagName("hr p")
  const ent = document.getElementById("entegre");
  
  const clickBtn = document.querySelector("#clickBtn");
  clickBtn.addEventListener("click", saveRest);
  
  let counter = 0;
  
  const createInput = (inputName) => {
    let inp = `<input class="inp-cls" value="${inputName} entegrasyon tamamlandı"/>`;
  
    return inp;
  };
  
  const btnColor = (value) => {
    if (value === true) {
      clickBtn.classList.add("green");
      clickBtn.value = "Tebrikler! Entegrasyon Tamamladı.";
    } else {
      clickBtn.classList.add("red");
      clickBtn.value = "Üzgünüz, Bir hata oluştu! Entegrasyon Tamamlanamadı..";
    }
    setTimeout(() => {
      clickBtn.classList.remove("green", "red");
      clickBtn.value = "Restoran Ekle";
      if (counter === 3) {
        clickBtn.style.visibility = "hidden";
  
      }
    }, 3000);
  };
  
  function entegre(item) {
    ent.innerHTML += createInput(item);
    console.log(counter);
    
  }
  
  
  function saveRest() {
    if (getirAppKey.value == 1 && getirRestKey.value == 1) {
      document.getElementById("getir").style.display = "none";
      document.getElementById("getirlab").style.display = "none";
      document.getElementById("content1").style.display = "none";
  
      btnColor(true);
      counter++;
      entegre("getir");
  
      getirAppKey.value = "";
      getirRestKey.value = "";
    } else if (
      trendApiKey.value == 2 &&
      trendAppKey.value == 2 &&
      trendSuppId.value == 2
    ) {
      document.getElementById("trendyol").style.display = "none";
      document.getElementById("trendlab").style.display = "none";
      document.getElementById("content2").style.display = "none";
  
      btnColor(true);
      counter++;
      entegre("trendyol");
  
      trendApiKey.value = "";
      trendAppKey.value = "";
      trendSuppId.value = "";
    } else if (
      yemekUsername.value == 3 &&
      yemekPassword.value == 3 &&
      yemekCatName.value == 3 &&
      yemekCatId.value == 3
    ) {
      document.getElementById("yemeksepeti").style.display = "none";
      document.getElementById("yemeklab").style.display = "none";
      document.getElementById("content3").style.display = "none";
  
      btnColor(true);
      counter++;
      entegre("yemeksepeti");
  
      yemekUsername.value = "";
      yemekPassword.value = "";
      yemekCatName.value = "";
      yemekCatId.value = "";
    } else {
      btnColor(false);
    }
  }