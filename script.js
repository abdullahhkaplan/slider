var models = [
  {
    name: "BMW 420d",
    image: "img/bmw.jpg",
    link: "http://www.arabalar.com.tr/bmw/4-serisi/2021/430i-coupe-2-0-m-sport",
  },
  {
    name: "HONDA",
    image: "img/honda.jpg",
    link: "http://www.arabalar.com.tr/honda/civic/2022/1-5-eco-elegance-cvt",
  },
  {
    name: "MAZDA",
    image: "img/mazda.jpg",
    link: "http://www.arabalar.com.tr/mitsubishi/space-star/2022/1-2-intense-cvt",
  },

  {
    name: "SKODA",
    image: "img/skoda.jpg",
    link: "http://www.arabalar.com.tr/skoda/superb/2022/1-5-tsi-crystal-dsg",
  },
  {
    name: "VOLVO",
    image: "img/volvo.jpg",
    link: "http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance",
  },
];
var index = 1;
var slaytCOunt = models.length;
var interval;
var settings = {
  duration: "1000", // slider time
  random: false,
};
init(settings);
document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
  });

document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
  });
document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
    // mouse ile yön tuşlarının üstüne gelince otomatik devam eden slider durur
  });
});
document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
    // mouse yön tuşlarının üstünden ayrılınca slider otomatik olarak devam eder
  });
});
function init(settings) {
  var prev;

  interval = setInterval(function () {
    if (settings.random) {
      do {
        index = Math.floor(Math.random() * slaytCOunt);
      } while (index == prev);
      prev = index;
    } else {
      if (slaytCOunt == index + 1) {
        index = -1;
      }
    }
    showSlide(index);
    console.log(index);
    index++;
  }, settings.duration);
}

function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slaytCOunt - 1;
  }
  if (i >= slaytCOunt) {
    index = 0;
  }
  document.querySelector(".card-title").textContent = models[index].name;

  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);

  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
