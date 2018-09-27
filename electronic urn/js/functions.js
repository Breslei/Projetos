
var digited, state=0 ;
class urnFunctions{
    
    constructor(){
        
  //      btnValue();
    }
}



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
    
    

    
    
    
    
    
    
    
    
    
    
    /*       
    let btn = document.querySelectorAll('.btn');
    //o [0] indica a primeira posição do ponteiro
    btn[0].addEventListener('click', buttonClicked=>{    
          buttonClicked.forEach(button=>{ 
            switch(button.values('1')){
                
                case '1':
                buttonClicked=1;
                break;
                
                default:
                alert(buttonClicked.name);
                break;     
            }  
        });
    });
    
    
    
    let btn = document.querySelectorAll('.btn');
    
    btn.addEventListener('click',e=>{
        for( i=0 ; i<btn.length; i++){
            alert(btn[i].textContent)};
            alert(e.getAttribute('value'))
        });
        
        
        
        
        let btn = document.querySelectorAll('.btn');
          btn.forEach(button=>{
            button.addEventListener('click', buttonClicked=>{
               alert(buttonClicked)
                // buttonClicked.getAttribute('value');//pd ser o comando getAttribute('value') ou tbmo comando btn.value
          });//para fazer string virar inteiro parseInt(btn1.value), esse comando ja está funcionando. pois ja foi testado no navegador
        
        
        
        
        
        
        let btn = document.querySelectorAll('.btn');
        btn.forEach(button=>{ 
            button.addEventListener('click',e=>{ 
                    switch(e.getAttribute('value')  ){
                        case'1':
                        alert(e)
                        break
                
                        case'2':
                        alert(e)
                        break    
                
                        case'3':
                        alert(e)
                        break
                    };
                    
                });
            });





                        
    
    switch(lastNumber.toString()){
        case'1':
        alert(btn[i].textContent)
        break

        case'2':
        alert(btn[i].textContent)
        break    

        case'3':
        alert(btn[i].textContent)
        break
    };*/
/*

//pegando tds as teclas
    let btn = document.querySelectorAll('.btn');
         btn[0].addEventListener('click',e=>{ 
             for( i=0 ; i<btn.length; i++){
                 alert(btn[i].getAttributeNode('value'))};
              alert (e)
    });
    
    //ou  assim
    let btn = document.querySelectorAll('.btn');
    btn.forEach(function(valueBtn,index){
        valueBtn.addEventListener('onclick', 
        alert (valueBtn.value)) 
   });




       let btn = document.querySelectorAll('.btn');
       btn.forEach(function(valueBtn,index){

        if (valueBtn.firstChild.nodeValue == text)
        return valueBtn;

           alert (valueBtn.value) 
           
      });
    let btn = document.querySelectorAll('.btn');
         btn[0].addEventListener('click',e=>{ 
             for( i=0 ; i<btn.length; i++){
                 alert(btn[i].firstChild.nodeValue == text)
                 return btn;};
              alert (btn)
    });

 















      

    let btnValue = document.getElementById('btn1').value
    alert(btnValue)





function clickar(){
    let num =0
    alert(num)
   for( i=0 ; i<btn.length; i++){
    num =btn[i].textContent

 };
        if (num == '1')
        alert('ola')
};




    









        
        let btn = document.querySelector('#btn1').value;
            btn[0].addEventListener('click', btn1=>{
            alert(btn1)
            });
        
        let btn = document.querySelector('#btn2');
            btn.addEventListener('click', btn=>{
                btn.value;
            });

            let btn = document.querySelector('#btn3');
            btn.addEventListener('click', btn=>{
                btn.value;
            });
        
        let btn = document.querySelector('#btn4');
            btn.addEventListener('click', btn=>{
                btn.value;
            });
        
    //comando está pegando, testar document.querySelectorAll('.btn');
    //tntar fazer esse codigo funcionar
    let valuesBtn = document.querySelectorAll('.btn');
        valuesBtn.addEventListener('click', e=>{
            e.forEach(btn => {
                let btn1 = document.getElementById('btn1').addEventListener("click", e=> { btn1 = e.value; alert(btn1);}); 
                console.log(btn1);
            });
        });
    };
*/

   





















    

/*
let btnValue= document.getElementsByClassName('btn')

function btnValue(btnClicked){
    let clicked = btnClicked.value;
        if(clicked == '1'){
            alert('olá')
        }
}


function btnValue(btnClicked){
    let clicked = btnClicked.value;
        if(clicked >= '0' || clicked >= '9'){
            alert('olá')
        }
		
}

let btn1 = document.getElementById('btn1').value;*/
/*

let btn1 = document.getElementById('btn1').addEventListener("click", e=> { btn1 = e.value; alert(btn1);});   
let btn2 = document.getElementById('btn2').addEventListener("click", e=> { btn2 = 2; console.log(e.value) });    
let btn3 = document.getElementById('btn3').addEventListener("click", e=> { btn3 = 3; alert(btn3);});
let btn4 = document.getElementById('btn4').addEventListener("click", e=> { btn4 = 4; alert(btn4);});
let btn5 = document.getElementById('btn5').addEventListener("click", e=> { btn5 = 5; alert(btn5);});
let btn6 = document.getElementById('btn6').addEventListener("click", e=> { btn6 = 6; alert(btn6);});
let btn7 = document.getElementById('btn7').addEventListener("click", e=> { btn7 = 7; alert(btn7);});
let btn8 = document.getElementById('btn8').addEventListener("click", e=> { btn8 = 8; alert(btn8);});
let btn9 = document.getElementById('btn9').addEventListener("click", e=> { btn9 = 9; alert(btn9);});
let btn0 = document.getElementById('btn0').addEventListener("click", e=> { btn0 = 0; alert(btn0);});
*/
