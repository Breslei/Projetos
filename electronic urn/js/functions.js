
var digited, state=0 ;

var displayDigit1 = document.getElementById('firstNumberDisplayPresident');
var displayDigit2;



function addDigit1(){
  var td1 = getElementById('firstNumberDisplayPresident'); 
   td1.innerHTML = 
    `<label>${displayDigit1.textContent}</label>`
   
  var td2 = getElementById('secondNumberDisplayPresident');    
   td2.innerHTML = 
    `<label>${displayDigit2.textContent}</label>`
}


function btnValue(btnClicked){
    let clicked = btnClicked.value;

    if(state == 0 && clicked >= '0' && clicked <= '9' || clicked == "null"){
        
        switch(clicked){
           
            case '1':
            displayDigit1.textContent = clicked;
            //Object.freeze(displayDigit1.textContent);
            state += 1;
            break;
            
            case '2':
            displayDigit1.textContent = clicked;
            state += 1;
            break;
            
            case '3':
            displayDigit1.textContent = clicked;
            state += 1;
            break;
            
            case '4':
            displayDigit1.textContent = clicked;
            state += 1;
            break;

            case '5':
            displayDigit1.textContent = clicked;
            state += 1;
            break;
            
            case '6':
            displayDigit1.textContent = clicked;
            state += 1;
            break;

            case '7':
            displayDigit1.textContent = clicked;
            state += 1;
            break;

            case '8':
            displayDigit1.textContent = clicked;
            state += 1;
            break;
            
            case '9':
            displayDigit1.textContent = clicked;
            state += 1;
            break;

            case '0':
            displayDigit1.textContent = clicked;
            state = 1;
            break;

            default:
            state=0;
            break;

          }//switch
            state += 1;
            clicked= null;

        }//if

        displayDigit2 = document.getElementById('secondNumberDisplayPresident');

        if(state == 2  && clicked >= '0' && clicked <= '9' || clicked == "null"){
             
            
            switch(clicked){

              case '1':
              displayDigit2.textContent = clicked;
              state +=1;
              break;
                       
              case '2':
              displayDigit2.textContent = clicked;
              state +=1
              break;
                        
              case '3':
              displayDigit2.textContent = clicked;
              state +=1;
              break;
                 
              case '4':
              displayDigit2.textContent = clicked;
              state +=1;
              break;
     
              case '5':
              displayDigit2.textContent = clicked;
              state +=1;
              break;
                 
              case '6':
              displayDigit2.textContent = clicked;
              state +=1;
              break;
                 
              case '7':
              displayDigit2.textContent = clicked;
              state +=1;
              break;
                 
              case '8':
              displayDigit2.textContent = clicked;
              state +=1;
              break;
                 
              case '9':
              displayDigit2.textContent = clicked;
              state +=1;
              break;
                 
              case '0':
              displayDigit2.textContent = clicked;
              state +=1;
              break;
              
              default:
              clicked=null;
              break;
             } 
         }
            clicked=-1;
            
        digited=displayDigit1.textContent.concat(displayDigit2.textContent);

      if(state==3){      
         if(digited == 17){
             //document.getElementById("Photo").style.backgroundImage= "url('img/bolsonaro-180X180.webp')";
             document.getElementById("NamePresident").innerHTML= ("Jair Bolsonaro");
             document.getElementById("PartyPresident").innerHTML=("PSL");
            
            var img= document.getElementById("photoCanditade");
            var src= 'img/bolsonaro-180X180.jpg';

                img.innerHTML= `<img src="${src}"/>`;

           //https://www.w3schools.com/jsref/prop_style_backgroundimage.asp            
         }

         if(digited == 19){
            document.getElementById("NamePresident").innerHTML= ("Alvaro Dias");
            document.getElementById("PartyPresident").innerHTML=("PODE");
            var img= document.getElementById("photoCanditade");
            var src= 'img/alvaro-dias-180x180.jpg';

                img.innerHTML= `<img src="${src}"/>`;

        }

        if(digited == 12){
            document.getElementById("NamePresident").innerHTML= ("Ciro Gomes");
            document.getElementById("PartyPresident").innerHTML=("PDT");
            var img= document.getElementById("photoCanditade");
            var src= 'img/Ciro-gomes-180x180.jpg';

                img.innerHTML= ` <img src="${src}"/>`;

        }

        if(digited == 13){
            document.getElementById("NamePresident").innerHTML= ("Fernando Haddad");
            document.getElementById("PartyPresident").innerHTML=("PT");
            var img= document.getElementById("photoCanditade");
          var src= 'img/Haddad-180x180.jpg';

            img.innerHTML= ` <img src="${src}"/>`;

        } 
        if(digited == 45){
            //document.getElementById("Photo").style.backgroundImage= "url('img/bolsonaro-180X180.webp')";
            document.getElementById("NamePresident").innerHTML= ("Geraldo Alckmin");
            document.getElementById("PartyPresident").innerHTML=("PSDB");
            var img= document.getElementById("photoCanditade");
            var src= 'img/Alckmin-180x180.jpg';

                img.innerHTML= `<img src="${src}"/>`;
        }


        if(digited == 18){
            //document.getElementById("Photo").style.backgroundImage= "url('img/bolsonaro-180X180.webp')";
            document.getElementById("NamePresident").innerHTML= ("Marina Silva");
            document.getElementById("PartyPresident").innerHTML=("REDE");
            var img= document.getElementById("photoCanditade");
            var src= 'img/Marina-180x180.jpg';

                img.innerHTML= `<img src="${src}"/>`;
        }

    }//if



}//function


   function btnClear(){//ver como fazer um construtor para inicializar esse metodo no construtor
    displayDigit1.textContent = "";
    displayDigit2.textContent = "";
    state = 0;
    clicked = null;
    document.getElementById("photoCanditade").innerHTML= "";
    document.getElementById("NamePresident").innerHTML= "";
    document.getElementById("PartyPresident").innerHTML= "";
    }

    function btnConfirm(btnVal){
        
        let btn =0;//ver pq n funciona direito

        document.querySelector(".displayPresident").style.display= "none";
        text = document.getElementById('labelDisplayEnd').innerHTML ="OBRIGADO PELO SEU VOTO!";
        let img= document.getElementById("photoLogoEnd");
        let src= 'img/logo.png';
            img.innerHTML= `<img src="${src}"/>`;

        document.getElementById("labelDisplayEnd").style.display= "block";
        
        if(btn==0){
        setTimeout(()=>{
            document.querySelector('.displayPresidentEnd').style.display= "none";
            document.getElementById("photoLogoEnd").style.display= "none";
            document.querySelector('.displayEnd').innerHTML= "";
        }, 2500);
        btn= btn+1;
    }    
  }
    
    function btnNull(){
        let question = "Você deseja realmente anular o seu voto?";
        let awnser = false;

        awnser = window.confirm(question);// dúvida? acesse: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/confirm
        if( awnser==true){
            digit1 = "0";
            digit2 = "0";
            state = "1";
            alert("Até mais!");

            window.close();
        }else{
            alert("Ótimo, volte e vote!");
        }
    }
 
