function preload(){
    imgs=Array('img/f1.jpg','img/f2.jpg','img/f3.jpg','img/f4.jpg','img/f5.jpg','img/f6.jpg');
    imgQtde=imgs.length;

    for ( i = 0 ;i < imgQtde ; i++) {

      var preloadimg=new Image();

      preloadimg.src=imgs[i];
    }
  }




    function iniciaSlider(){
      preload();

      max = 4 ;
      min = 1 ;

      fi = min;

      tr = true;
      carregaFoto("img/f1.jpg");

      document.getElementById("moldura").addEventListener("transitionend",fimTr);
      document.getElementById("moldura2").addEventListener("transitionend",fimTr);
      document.getElementById("moldura3").addEventListener("transitionend",fimTr);
      tmr = setInterval(trocaFoto,10000);
    }

    function trocaFoto(){
      tr= false;
        
          fi++;

      if(fi > max){
        fi = min;
        }
        carregaFoto(" img/f"+fi+".jpg");
    }

    function fimTr(){
      tr=true;
    }


    function carregaFoto(foto){
      document.getElementById("moldura").style.backgroundImage="URL("+foto+")";
      document.getElementById("moldura2").style.backgroundImage="URL("+foto+")";
      document.getElementById("moldura3").style.backgroundImage="URL("+foto+")";
    }

    function troca(dr){
      clearInterval(tmr);
      if (tr) {
        tr= false;
        
        fi += dr;

      if(fi > max){
        fi = min;
        }
      else if (fi < min) {
        fi -= max;
      }
        carregaFoto(" img/f"+fi+".jpg");
      }
            tmr = setInterval(trocaFoto,10000);

    

  } 
  function preload1(){
    imgss=Array('img/b1.jpg','img/b22.jpg','img/b33.jpg','img/b4.jpg','img/f5.jpg','img/f6.jpg');
    imgQtdee=imgss.length;

    for ( rr = 0 ;r < imgQtdee ;+rr+) {

      var preloadimg=new Image();

      preloadimgg.src=rr[i];
    }
  }




    function iniciaSlider1(){
      preload1();

      maxx = 4 ;
      min = 1 ;

      fii = minn;

      trr = true;
      carregaFoto1("img/f1.jpg");

      document.getElementById("moldura5").addEventListener("transitionend",fimTr);
      document.getElementById("moldura6").addEventListener("transitionend",fimTr);
      document.getElementById("moldura7").addEventListener("transitionend",fimTr);
      tmrr = setInterval(trocaFoto1,10000);
    }

    function trocaFoto1(){
      trr= false;
        
          fii++;

      if(fii > maxx){
        fii = minn;
        }
        carregaFoto1(" img/f"+fi+".jpg");
    }

    function fimTr1(){
      trr=true;
    }


    function carregaFoto1(foto){
      document.getElementById("moldura").style.backgroundImage="URL("+foto+")";
      document.getElementById("moldura2").style.backgroundImage="URL("+foto+")";
      document.getElementById("moldura3").style.backgroundImage="URL("+foto+")";
    }

    function troca1(dr){
      clearInterval(tmr);
      if (trr) {
        trr= false;
        
        fii += dr;

      if(fii > maxx){
        fii = minn;
        }
      else if (fii < minn) {
        fii -= maxx;
      }
        carregaFoto1(" img/f"+fii+".jpg");
      }
            tmrr = setInterval(trocaFoto,10000);

    

  } 