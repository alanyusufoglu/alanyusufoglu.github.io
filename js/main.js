let cartCount = 0;
const ürürnsayisi = 5; 
// ürün ekleme 1
function addToCart() {
    if (enfazlabukadar()) {
        cartCount++;
        updateCartCount();
    } else {
        alert("tek seferde sepete ekleyebileciğiniz ürün sayisi bukadar");
    }
}

function enfazlabukadar() {
    return cartCount < ürürnsayisi;
}

function updateCartCount() {
    let cartCountElement = document.getElementById("cartCount");
    cartCountElement.innerText = cartCount;
    if (cartCount > 0) {
        cartCountElement.classList.add("red-circle");
    } else {
        cartCountElement.classList.remove("red-circle");
    }
}
//ürün çıkarma 2
function removetocart()
{
    cartCount--;
    updateCartCount();
}
//karanlık mod 3
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}
//saat 4
 function displayTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var currentTime = hours + ":" + minutes + ":" + seconds;
    document.getElementById("saat").innerHTML = currentTime; 
}

document.getElementById("saatGosterButton").addEventListener("click", function() {
    displayTime(); 
    
    
});
 //button kaçma  5
var button = document.getElementById("myButton");

        button.addEventListener("mouseenter", function() {
           
            moveButton();
        });

        button.addEventListener("mouseleave", function() {
           
            resetButtonPosition();
        });

        function moveButton() {
            var x = Math.random() * (window.innerWidth - button.offsetWidth);
            var y = Math.random() * (window.innerHeight - button.offsetHeight);
            button.style.position = "absolute";
            button.style.left = x + "px";
            button.style.top = y + "px";
        }

        function resetButtonPosition() {
            button.style.position = "static";
        }
//site yenileme  6
        setInterval(function() {
            location.reload(); 
        }, 50000); 
        
    //giriş kısmı 7
        function greetUser() {
            var userName = prompt("Adinizi girin:");
            if (userName) {
                alert("Hoş geldiniz, " + userName + "!");
            } else {
                alert("Hoş geldiniz!");
            }
        }
       

        greetUser();

      
        
        // Kalp ikonunu göster 8
        function showHeartIcon() {
            var heartIcon = document.createElement("i");
            heartIcon.classList.add("fas", "fa-heart", "heart-icon");
            document.body.appendChild(heartIcon);

            
            setTimeout(function() {
                heartIcon.remove();
            }, 1000);
        }
        //ekrana görsel çizme 9
        function drawImageSlowly() {
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            var img = new Image();
            var x = 0;
            var y = 0;
            var width = 100; 
            var height = 100; 

            img.onload = function() {
                
                var timer = setInterval(function() {
                    ctx.drawImage(img, x, y, width, height);
                    x += width;
                    if (x > canvas.width) {
                        x = 0;
                        y += height;
                    }
                    if (y > canvas.height) {
                        clearInterval(timer);
                    }
                }, 100);
            };

            img.src = "image/görsel.jpeg"; 
        } 
        drawImageSlowly();
 //toplama  10
 function topla(a, b) {
    return a + b;
  }
  
 // yönlendirme fonksiyonu 11
 function redirectToSocialMedia(platform) {
    let url;
    switch (platform) {
      case 'facebook':
        url = 'https://www.facebook.com/';
        break;
      case 'twitter':
        url = 'https://twitter.com/';
        break;
      case 'instagram':
        url = 'https://www.instagram.com/';
        break;
      case 'linkedin':
        url = 'https://www.linkedin.com/';
        break;
      default:
        console.error('Geçersiz sosyal medya platformu');
        return;
    }
    window.location.href = url;
  }

  function geriSayim(baslangicSuresi) {
    
    let kalanSure = baslangicSuresi * 1000;

    const interval = setInterval(function() {
      
      let saniye = Math.floor(kalanSure / 1000);

      
      document.getElementById('geriSayim').textContent = `Geri Sayım: ${saniye} saniye`;

      
      kalanSure -= 1000;

     
      if (kalanSure < 0) {
        clearInterval(interval);
        document.getElementById('geriSayim').textContent = "Geri sayım tamamlandı!";
      }
    }, 1000); 
  }

  
  geriSayim(10);

  //yazı küçültme 13
  function metniKucult() {
    var giris = document.getElementById("inputAlanı").value;
    var kucukHarfli = kucult(giris);
    alert("Küçük Harfli Metin: " + kucukHarfli);
  }
  
  function kucult(yazi) {
    return yazi.toLowerCase();
  }
  //rastgele sayı üretme 14
  function rastgeleSayiGoster(min, max) {
    var sayi = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("rastgeleSayi").textContent = "Rastgele Sayı: " + sayi;
  }


  window.onload = function() {
    rastgeleSayiGoster(1, 100); 
  };
  //blur olayı 15
  var resim = document.getElementById('resim');
resim.style.filter = 'blur(10px)';

//  sayfayı enbaşa atma 16

function sayfaBasinaGit() {
  window.scrollTo({
      top: 0,
      behavior: "smooth" 
  });
}

// JQUERY

//1 metin değiştirme
$(document).ready(function(){
    $("#degistir").click(function(){
      $("#metin2").text("bu bir web teknolojileri ödevidir");
    });
  });



  //2 metin görünürlüğü
  $(document).ready(function(){
    $("#goster").click(function(){
      $("#metin").show();
    });
    $("#gizle").click(function(){
      $("#metin").hide();
    });
  }); 

  //3 yeni öge ekleme 
  $(document).ready(function(){
    $("#kartEkle").click(function(){
      var kart = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">çekilişli süpriz ürün</h5>
            <p class="card-text">20 alişveriten sonra bu eklediğimiz çekilişe katilabileceksiniz</p>
            <button class="btn btn-danger kartSil">Karti Sil</button>
          </div>
        </div>
      `;
      $("#kartlar").append(kart);
    });
  

    $(document).on("click", ".kartSil", function(){
      $(this).closest(".card").remove();
    });
  });


// 4 yavaş bir şekide görünmez yap
$('#myDiv').fadeOut(5000);

//5 metin kutusuna girilen metni göster
$('#myInpu').keypress(function(event){
    var inputValue = $(this).val();
    alert('Girilen metin: ' + inputValue);
});

//6 imleç üzrine geldiğinde büyüyen nesne
$(document).ready(function(){
    // Mouse üzerine gelindiğinde
    $('.box').hover(function(){
        $(this).css('transform', 'scale(1.2)');
    }, function(){
        $(this).css('transform', 'scale(1)'); 
    });
}); 

//7 menü alt katagorilere gitme
$(document).ready(function(){
    $('.menu > li').click(function(){
        var submenu = $(this).find('.submenu');
        $('.submenu').not(submenu).hide();
        submenu.toggle();
    });
});

//8 yıldızlı dercelendirme sistemi
$(document).ready(function(){
    $('.star').click(function(){
       
        $(this).prevAll().addBack().addClass('active');
       
        $(this).nextAll().removeClass('active');
    });
});
//9 item arama
$(document).ready(function(){
    
    $('#search').keyup(function(){
        var searchText = $(this).val().toLowerCase(); 
        var searchList = $('#data li'); 
        $('.result').addClass('show'); 
        
        searchList.each(function(){
            var text = $(this).text().toLowerCase(); 
            if(text.indexOf(searchText) !== -1) { 
                $(this).show(); 
            } else {
                $(this).hide(); 
            }
        });
    });
});


//10 müzik aleti ekleme
$(document).ready(function(){
    
    $(document).keydown(function(e){
        var note = $('.key[data-note="' + e.key.toUpperCase() + '"]');
        if(note.length > 0){
            playSound(note.data('note'));
            note.addClass('active');
        }
    });

    $(document).keyup(function(){
        $('.key').removeClass('active');
    });

  
    $('.key').click(function(){
        var note = $(this).data('note');
        playSound(note);
        $(this).addClass('active');
        setTimeout(function(){
            $('.key').removeClass('active');
        }, 300);
    });

    function playSound(note){
        var audio = $('audio[data-note="' + note + '"]')[0];
        audio.currentTime = 0;
        audio.play();
    }
});
