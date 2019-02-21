$(document).ready(function (){
     //Redirigir, en desuso
     function letRedir(){
        setTimeout(function() {
            window.location.href = "test.html";
          }, 2100);
    }
    // Trying to shuffle
    function shuffle(array) {
        var copy = [], n = array.length, i;
      
        // While there remain elements to shuffle…
        while (n) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * n--);
      
          // And move it to the new array.
          copy.push(array.splice(i, 1)[0]);
        }
      
        return copy;
      }

    // Inicio Textos de las 24 runas
    var text1 = 'Runa Nº1'; var text13 = 'Mientras más Alemanes más Franceses, Runa Nº13';
    var text2 = 'Runa Nº2'; var text14 = 'Runa Nº14';
    var text3 = "Runa Nº3"; var text15 = 'Y la Nª15';
    var text4 = 'Runa Nº4'; var text16 = 'La décimosexta Runa.';
    var text5 = 'Runa Nº5'; var text17 = 'Runa décimo séptima';
    var text6 = 'Runa Nº6'; var text18 = 'Décimo octava pero zZzZ';
    var text7 = 'Runa Nº7'; var text19 = 'nª19 an closer to the end';
    var text8 = 'Runa Nº8'; var text20 = 'nº20 y cuatro restantes.';
    var text9 = 'Runa Nº9'; var text21 = 'Jackpot!';
    var text10 = 'Runa Nº10'; var text22 = 'As an old number 22.';
    var text11 = 'Runa Nº11'; var text23 = 'One more to go; 23';
    var text12 = 'Runa Nº12'; var text24 = 'Runa Nº24';
    // Fin de las variables de texto de las 24 runas
    // Inicio variables de leyendas de runas.
    var opt1 = 'Leyenda que debe estar en la primera runa'; var opt13 = 'Leyenda que debería estar en la 13va runa';
    var opt2 = 'Leyenda que debería estar en la segunda runa'; var opt14 = 'Leyenda que debería estar en la 14va runa';
    var opt3 = 'Leyenda que debería estar en la tercera runa'; var opt15 = 'Leyenda que debería estar en la 15va runa';
    var opt4 = 'Leyenda que debería estar en la cuarta runa'; var opt16 = 'Leyenda que debería estar en la 16va runa';
    var opt5 = 'Leyenda que debería estar en la quinta runa'; var opt17 = 'Leyenda que debería estar en la 17va runa';
    var opt6 = 'Leyenda que debería estar en la sexta runa'; var opt18 = 'Leyenda que debería estar en la runa nº18';
    var opt7 = 'Leyenda que debería estar en la septima runa'; var opt19 = 'Leyenda que debería estar en la runa nº19';
    var opt8 = 'Leyenda que debería estar en la octava runa'; var opt20 = 'Leyenda que debería estar en la runa nº20';
    var opt9 = 'Leyenda que debería estar en la novena runa'; var opt21 = 'Leyenda que debería estar en la runa nº21';
    var opt10 = 'Leyenda que debería estar en la decima runa'; var opt22 = 'Leyenda que debería estar en la runa nº22';
    var opt11 = 'Leyenda que debería estar en la runa nº 11'; var opt23 = 'Leyenda que debería estar en la runa nº23';
    var opt12 = 'Leyenda que debería estar en la  runa nº 12'; var opt24 = 'Leyenda que debería estar en la runa nº24';
    
    // Fin de variables de leyendas de runas.
      
    //Inicio de las casillas con los 7 destinos
    var firstDestiny = $(document).find('.destinyRow .pDestiny1');
    var secondDestiny = $(document).find('.destinyRow .pDestiny2');
    var thirdDestiny = $(document).find('.destinyRow .pDestiny3');
    var fourthDestiny = $(document).find('.destinyRow .pDestiny4');
    var fifthDestiny = $(document).find('.destinyRow .pDestiny5');
    var sixthDestiny = $(document).find('.destinyRow .pDestiny6');
    var seventhDestiny = $(document).find('.destinyRow .pDestiny7');
    // Fin
    // Inicio de las 7 opciones elegidas
    
      

      var runesPicked = 0;
    
            $('.shuffleBtn').click(function() {
                //Trying to shuffle some html elements, shall we?
                //GOD BLESS FISHER-YATES SHUFFLE
                var ul = document.querySelector('.ulShuffle');
                //var ul2 = document.querySelector('.ulShuffle2');
                for (var i = ul.children.length; i >= 0; i--) {
                    ul.appendChild(ul.children[Math.random() * i | 0]);
                }
                /*for (var i = ul2.children.length; i >= 0; i--) {
                    ul2.appendChild(ul2.children[Math.random() * i | 0]);
                }
                
                   var ulx = document.querySelector('.ulShuffle3');
                   for (var i = ulx.children.length; i >= 0; i--) {
                    ulx.appendChild(ulx.children[Math.random() * i | 0]);
                }*/
            });
        
       
            //First
            $(".btnL").click(function(){
               
                if(runesPicked==0){
                    var option = $(this);
                    if (option.hasClass('picked')) {/*
                            $(this).removeClass('picked');
                           
                        }*/
                        
                    } else {
                            $(this).addClass('picked');
                           
                            
                            runesPicked++;
                        // Talismanes
                        // Gallo
                        setTimeout(()=>{
                            if(option.hasClass('btn1')){
                                $(firstDestiny).text(text1);
                                localStorage.setItem('opt1', opt1);
                                
                                
                            }
                        },555);
                     
                        // Toro
                        setTimeout(()=>{
                            if(option.hasClass('btn2')){
                                $(firstDestiny).text(text2);
                                localStorage.setItem('opt1', opt2);
                                
    
                            }
                        }
                        ,555);
                        
                        // Bonnie
                        setTimeout(()=>{
                            if(option.hasClass('btn3')){
                                $(firstDestiny).text(text3);
                                localStorage.setItem('opt1', opt3);
                                
    
                            }
                        },
                        555);
                        
                        // Sheep  
                        setTimeout(()=>{
                            if(option.hasClass('btn4')){
                                $(firstDestiny).text(text4);
                                localStorage.setItem('opt1', opt4);
                                
                            }
                        },
                        555);     
                            
                        // Serpiente
                        setTimeout(()=>{
                            if(option.hasClass('btn5')){
                                $(firstDestiny).text(text5);
                                localStorage.setItem('opt1', opt5);
                                
    
                            }
                        },
                        555);
                        
                        // Drake
                        setTimeout(()=>{
                            if(option.hasClass('btn6')){
                                $(firstDestiny).text(text6);
                                localStorage.setItem('opt1', opt6);
                                
    
                            }
                        },
                        555);
                        
                        // Ratata
                        setTimeout(()=>{
                            if(option.hasClass('btn7')){
                                $(firstDestiny).text(text7);
                                localStorage.setItem('opt1', opt7);
                                
    
                            }
                        },
                        
                        555);
                         // Octava Runa
                         setTimeout(()=>{
                            if(option.hasClass('btn8')){
                                $(firstDestiny).text(text8);
                                 localStorage.setItem('opt1', opt8);
                                
    
                            }
                        },
                        
                        555);
                         // Novena runa
                         setTimeout(()=>{
                            if(option.hasClass('btn9')){
                                $(firstDestiny).text(text9);
                                 localStorage.setItem('opt1', opt9);
                                
    
                            }
                        },
                        
                        555);
                         // 10
                         setTimeout(()=>{
                            if(option.hasClass('btn10')){
                                $(firstDestiny).text(text10);
                                 localStorage.setItem('opt1', opt10);
                                
    
                            }
                        },
                        
                        555);
                         // 11
                         setTimeout(()=>{
                            if(option.hasClass('btn11')){
                                $(firstDestiny).text(text11);
                                localStorage.setItem('opt1', opt11);
                                
    
                            }
                        },
                        
                        555);
                         // 12
                         setTimeout(()=>{
                            if(option.hasClass('btn12')){
                                $(firstDestiny).text(text12);
                                localStorage.setItem('opt1', opt12);
                                
    
                            }
                        },
                        
                        555);
                         // 13
                         setTimeout(()=>{
                            if(option.hasClass('btn13')){
                                $(firstDestiny).text(text13);
                                localStorage.setItem('opt1', opt13);
                                
    
                            }
                        },
                        
                        555);
                         // 14
                         setTimeout(()=>{
                            if(option.hasClass('btn14')){
                                $(firstDestiny).text(text14);
                                localStorage.setItem('opt1', opt14);
                                
    
                            }
                        },
                        
                        555);
                         // 15
                         setTimeout(()=>{
                            if(option.hasClass('btn15')){
                                $(firstDestiny).text(text15);
                                localStorage.setItem('opt1', opt15);
                                
    
                            }
                        },
                        
                        555);
                         // 16
                         setTimeout(()=>{
                            if(option.hasClass('btn16')){
                                $(firstDestiny).text(text16);
                                localStorage.setItem('opt1', opt16);
                                
    
                            }
                        },
                        
                        555);
                         // 17
                         setTimeout(()=>{
                            if(option.hasClass('btn17')){
                                $(firstDestiny).text(text17);
                                localStorage.setItem('opt1', opt17);
                                
    
                            }
                        },
                        
                        555);
                         // 18
                         setTimeout(()=>{
                            if(option.hasClass('btn18')){
                                $(firstDestiny).text(text18);
                                localStorage.setItem('opt1', opt18);
                                
    
                            }
                        },
                        
                        555);
                         // 19
                         setTimeout(()=>{
                            if(option.hasClass('btn19')){
                                $(firstDestiny).text(text19);
                                localStorage.setItem('opt1', opt19);
                                
    
                            }
                        },
                        
                        555);
                         // 20
                         setTimeout(()=>{
                            if(option.hasClass('btn20')){
                                $(firstDestiny).text(text20);
                                localStorage.setItem('opt1', opt20);
                                
    
                            }
                        },
                        
                        555);
                         // 21
                         setTimeout(()=>{
                            if(option.hasClass('btn21')){
                                $(firstDestiny).text(text21);
                                localStorage.setItem('opt1', opt21);
                                
    
                            }
                        },
                        
                        555);
                         // 22
                         setTimeout(()=>{
                            if(option.hasClass('btn22')){
                                $(firstDestiny).text(text22);
                                localStorage.setItem('opt1', opt22);
                                
    
                            }
                        },
                        
                        555);
                         // 23
                         setTimeout(()=>{
                            if(option.hasClass('btn23')){
                                $(firstDestiny).text(text23);
                                localStorage.setItem('opt1', opt23);
                                
    
                            }
                        },
                        
                        555);
                         // 24
                         setTimeout(()=>{
                            if(option.hasClass('btn24')){
                                $(firstDestiny).text(text24);
                                localStorage.setItem('opt1', opt24);
                                
    
                            }
                        },
                        
                        555);
                        
                    }
                 
                }
                  
            });

            //Second
            $(".btnL").click(function(){
                if(runesPicked==1){
                    
                        var option2 = $(this);
                   
                        
                    
                        if (!option2.hasClass('picked')) {
                            $(this).addClass('picked');
                            runesPicked++;
                    // Talismanes
                    // Gallo
                        setTimeout(() => {
                            if(option2.hasClass('btn1')){
                                $(secondDestiny).text(text1);
                                localStorage.setItem('opt2', opt1);
                            }
                        }, 555);
                    
                    // Toro
                        setTimeout(()=>{
                            if(option2.hasClass('btn2')){
                                $(secondDestiny).text(text2);
                                localStorage.setItem('opt2', opt2);
                            
                            }
                        },555);
                    
                    // Bonnie
                        setTimeout(()=>{
                            if(option2.hasClass('btn3')){
                                $(secondDestiny).text(text3);
                                localStorage.setItem('opt2', opt3);
                            
                            }
                        },555);
                    
                     // Sheep
                        setTimeout(()=>{
                            if(option2.hasClass('btn4')){
                                $(secondDestiny).text(text4);
                                localStorage.setItem('opt2', opt4);
                            
                        }
                        },555);
                     
                     // Snake
                        setTimeout(()=>{
                            if(option2.hasClass('btn5')){
                                $(secondDestiny).text(text5);
                                localStorage.setItem('opt2', opt5);
                            
                            }
                        },555);
                     
                    // Drake
                        setTimeout(() => {
                            if(option2.hasClass('btn6')){
                                $(secondDestiny).text(text6);
                                localStorage.setItem('opt2', opt6);
                            
                        }
                        }, 555);
                    
                    // Ratata
                        setTimeout(() => {
                            if(option2.hasClass('btn7')){
                                $(secondDestiny).text(text7);
                                localStorage.setItem('opt2', opt7);
                            
                            }
                        }, 555);
                        
                         // Octava Runa
                         setTimeout(()=>{
                            if(option2.hasClass('btn8')){
                                $(secondDestiny).text(text8);
                                localStorage.setItem('opt2', opt8);
    
                            }
                        },
                        
                        555);
                         // Novena runa
                         setTimeout(()=>{
                            if(option2.hasClass('btn9')){
                                $(secondDestiny).text(text9);
                                localStorage.setItem('opt2', opt9);
    
                            }
                        },
                        
                        555);
                         // 10
                         setTimeout(()=>{
                            if(option2.hasClass('btn10')){
                                $(secondDestiny).text(text10);
                                localStorage.setItem('opt2', opt10);
    
                            }
                        },
                        
                        555);
                         // 11
                         setTimeout(()=>{
                            if(option2.hasClass('btn11')){
                                $(secondDestiny).text(text11);
                                localStorage.setItem('opt2', opt11);
    
                            }
                        },
                        
                        555);
                         // 12
                         setTimeout(()=>{
                            if(option2.hasClass('btn12')){
                                $(secondDestiny).text(text12);
                                localStorage.setItem('opt2', opt12);
    
                            }
                        },
                        
                        555);
                         // 13
                         setTimeout(()=>{
                            if(option2.hasClass('btn13')){
                                $(secondDestiny).text(text13);
                                localStorage.setItem('opt2', opt13);
    
                            }
                        },
                        
                        555);
                         // 14
                         setTimeout(()=>{
                            if(option2.hasClass('btn14')){
                                $(secondDestiny).text(text14);
                                localStorage.setItem('opt2', opt14);
    
                            }
                        },
                        
                        555);
                         // 15
                         setTimeout(()=>{
                            if(option2.hasClass('btn15')){
                                $(secondDestiny).text(text15);
                                localStorage.setItem('opt2', opt15);
    
                            }
                        },
                        
                        555);
                         // 16
                         setTimeout(()=>{
                            if(option2.hasClass('btn16')){
                                $(secondDestiny).text(text16);
                                localStorage.setItem('opt2', opt16);
    
                            }
                        },
                        
                        555);
                         // 17
                         setTimeout(()=>{
                            if(option2.hasClass('btn17')){
                                $(secondDestiny).text(text17);
                                localStorage.setItem('opt2', opt17);
    
                            }
                        },
                        
                        555);
                         // 18
                         setTimeout(()=>{
                            if(option2.hasClass('btn18')){
                                $(secondDestiny).text(text18);
                                localStorage.setItem('opt2', opt18);
    
                            }
                        },
                        
                        555);
                         // 19
                         setTimeout(()=>{
                            if(option2.hasClass('btn19')){
                                $(secondDestiny).text(text19);
                                localStorage.setItem('opt2', opt19);
    
                            }
                        },
                        
                        555);
                         // 20
                         setTimeout(()=>{
                            if(option2.hasClass('btn20')){
                                $(secondDestiny).text(text20);
                                localStorage.setItem('opt2', opt20);
    
                            }
                        },
                        
                        555);
                         // 21
                         setTimeout(()=>{
                            if(option2.hasClass('btn21')){
                                $(secondDestiny).text(text21);
                                localStorage.setItem('opt2', opt21);
    
                            }
                        },
                        
                        555);
                         // 22
                         setTimeout(()=>{
                            if(option2.hasClass('btn22')){
                                $(secondDestiny).text(text22);
                                localStorage.setItem('opt2', opt22);
    
                            }
                        },
                        
                        555);
                         // 23
                         setTimeout(()=>{
                            if(option2.hasClass('btn23')){
                                $(secondDestiny).text(text23);
                                localStorage.setItem('opt2', opt23);
    
                            }
                        },
                        
                        555);
                         // 24
                         setTimeout(()=>{
                            if(option2.hasClass('btn24')){
                                $(secondDestiny).text(text24);
                                localStorage.setItem('opt2', opt24);
    
                            }
                        },
                        
                        555);
                        
                        
                        
                    
                    
                      
                    } 

                   
                  
                 
                   
                }  else {} 
            });
                
            //Third
            $(".btnL").click(function(){
                if (runesPicked==2) {
                    
                        var option3 = $(this);
                   
                        
                    
                        if (!option3.hasClass('picked')) {
                            $(this).addClass('picked');
                            runesPicked++;
                    // Talismanes
                    // Gallo
                        setTimeout(() => {
                            if(option3.hasClass('btn1')){
                                $(thirdDestiny).text(text1);
                                localStorage.setItem('opt3', opt1);
                                
                            }
                        }, 555);
                    
                    // Toro
                        setTimeout(()=>{
                            if(option3.hasClass('btn2')){
                                $(thirdDestiny).text(text2);
                                localStorage.setItem('opt3', opt2);
                                
                            
                            }
                        },555);
                    
                    // Bonnie
                        setTimeout(()=>{
                            if(option3.hasClass('btn3')){
                                $(thirdDestiny).text(text3);
                                localStorage.setItem('opt3', opt3);
                            
                            }
                        },555);
                    
                     // Sheep
                        setTimeout(()=>{
                            if(option3.hasClass('btn4')){
                                $(thirdDestiny).text(text4);
                                localStorage.setItem('opt3', opt4);
                            
                        }
                        },555);
                     
                     // Snake
                        setTimeout(()=>{
                            if(option3.hasClass('btn5')){
                                $(thirdDestiny).text(text5);
                                localStorage.setItem('opt3', opt5);
                            
                            }
                        },555);
                     
                    // Drake
                        setTimeout(() => {
                            if(option3.hasClass('btn6')){
                                $(thirdDestiny).text(text6);
                                localStorage.setItem('opt3', opt6);
                            
                        }
                        }, 555);
                    
                    // Ratata
                        setTimeout(() => {
                            if(option3.hasClass('btn7')){
                                $(thirdDestiny).text(text7);
                                localStorage.setItem('opt3', opt7);
                            
                            }
                        }, 555);
                        
                         // Octava Runa
                         setTimeout(()=>{
                            if(option3.hasClass('btn8')){
                                $(thirdDestiny).text(text8);
                                localStorage.setItem('opt3', opt8);
    
                            }
                        },
                        
                        555);
                         // Novena runa
                         setTimeout(()=>{
                            if(option3.hasClass('btn9')){
                                $(thirdDestiny).text(text9);
                                localStorage.setItem('opt3', opt9);
    
                            }
                        },
                        
                        555);
                         // 10
                         setTimeout(()=>{
                            if(option3.hasClass('btn10')){
                                $(thirdDestiny).text(text10);
                                localStorage.setItem('opt3', opt10);
    
                            }
                        },
                        
                        555);
                         // 11
                         setTimeout(()=>{
                            if(option3.hasClass('btn11')){
                                $(thirdDestiny).text(text11);
                                localStorage.setItem('opt3', opt11);
    
                            }
                        },
                        
                        555);
                         // 12
                         setTimeout(()=>{
                            if(option3.hasClass('btn12')){
                                $(thirdDestiny).text(text12);
                                localStorage.setItem('opt3', opt12);
    
                            }
                        },
                        
                        555);
                         // 13
                         setTimeout(()=>{
                            if(option3.hasClass('btn13')){
                                $(thirdDestiny).text(text13);
                                localStorage.setItem('opt3', opt13);
    
                            }
                        },
                        
                        555);
                         // 14
                         setTimeout(()=>{
                            if(option3.hasClass('btn14')){
                                $(thirdDestiny).text(text14);
                                localStorage.setItem('opt3', opt14);
    
                            }
                        },
                        
                        555);
                         // 15
                         setTimeout(()=>{
                            if(option3.hasClass('btn15')){
                                $(thirdDestiny).text(text15);
                                localStorage.setItem('opt3', opt15);
    
                            }
                        },
                        
                        555);
                         // 16
                         setTimeout(()=>{
                            if(option3.hasClass('btn16')){
                                $(thirdDestiny).text(text16);
                                localStorage.setItem('opt3', opt16);
    
                            }
                        },
                        
                        555);
                         // 17
                         setTimeout(()=>{
                            if(option3.hasClass('btn17')){
                                $(thirdDestiny).text(text17);
                                localStorage.setItem('opt3', opt17);
    
                            }
                        },
                        
                        555);
                         // 18
                         setTimeout(()=>{
                            if(option3.hasClass('btn18')){
                                $(thirdDestiny).text(text18);
                                localStorage.setItem('opt3', opt18);
    
                            }
                        },
                        
                        555);
                         // 19
                         setTimeout(()=>{
                            if(option3.hasClass('btn19')){
                                $(thirdDestiny).text(text19);
                                localStorage.setItem('opt3', opt19);
    
                            }
                        },
                        
                        555);
                         // 20
                         setTimeout(()=>{
                            if(option3.hasClass('btn20')){
                                $(thirdDestiny).text(text20);
                                localStorage.setItem('opt3', opt20);
    
                            }
                        },
                        
                        555);
                         // 21
                         setTimeout(()=>{
                            if(option3.hasClass('btn21')){
                                $(thirdDestiny).text(text21);
                                localStorage.setItem('opt3', opt21);
    
                            }
                        },
                        
                        555);
                         // 22
                         setTimeout(()=>{
                            if(option3.hasClass('btn22')){
                                $(thirdDestiny).text(text22);
                                localStorage.setItem('opt3', opt22);
    
                            }
                        },
                        
                        555);
                         // 23
                         setTimeout(()=>{
                            if(option3.hasClass('btn23')){
                                $(thirdDestiny).text(text23);
                                localStorage.setItem('opt3', opt23);
    
                            }
                        },
                        
                        555);
                         // 24
                         setTimeout(()=>{
                            if(option3.hasClass('btn24')){
                                $(thirdDestiny).text(text24);
                                localStorage.setItem('opt3', opt24);
    
                            }
                        },
                        
                        555);
                        
                        
                        
                    
                    
                      
                    } 

                   
                  
                 
                  
                }  
                       
            });  
            //Fourth
            $(".btnL").click(function(){
                if (runesPicked==3) {
                    
                        var option4 = $(this);
                   
                        
                    
                        if (!option4.hasClass('picked')) {
                            $(this).addClass('picked');
                            runesPicked++;
                    // Talismanes
                    // Gallo
                        setTimeout(() => {
                            if(option4.hasClass('btn1')){
                                $(fourthDestiny).text(text1);
                                localStorage.setItem('opt4', opt1);

                                
                            }
                        }, 555);
                    
                    // Toro
                        setTimeout(()=>{
                            if(option4.hasClass('btn2')){
                                $(fourthDestiny).text(text2);
                                localStorage.setItem('opt4', opt2);
                            
                            }
                        },555);
                    
                    // Bonnie
                        setTimeout(()=>{
                            if(option4.hasClass('btn3')){
                                $(fourthDestiny).text(text3);
                                localStorage.setItem('opt4', opt3);
                                
                            
                            }
                        },555);
                    
                     // Sheep
                        setTimeout(()=>{
                            if(option4.hasClass('btn4')){
                                $(fourthDestiny).text(text4);
                                localStorage.setItem('opt4', opt4);
                                
                            
                        }
                        },555);
                     
                     // Snake
                        setTimeout(()=>{
                            if(option4.hasClass('btn5')){
                                $(fourthDestiny).text(text5);
                                localStorage.setItem('opt4', opt5);
                                
                            
                            }
                        },555);
                     
                    // Drake
                        setTimeout(() => {
                            if(option4.hasClass('btn6')){
                                $(fourthDestiny).text(text6);
                                localStorage.setItem('opt4', opt6);
                            
                        }
                        }, 555);
                    
                    // Ratata
                        setTimeout(() => {
                            if(option4.hasClass('btn7')){
                                $(fourthDestiny).text(text7);
                                localStorage.setItem('opt4', opt7);
                            
                            }
                        }, 555);
                        
                         // Octava Runa
                         setTimeout(()=>{
                            if(option4.hasClass('btn8')){
                                $(fourthDestiny).text(text8);
                                localStorage.setItem('opt4', opt8);
                                
    
                            }
                        },
                        
                        555);
                         // Novena runa
                         setTimeout(()=>{
                            if(option4.hasClass('btn9')){
                                $(fourthDestiny).text(text9);
                                localStorage.setItem('opt4', opt9);
                                
    
                            }
                        },
                        
                        555);
                         // 10
                         setTimeout(()=>{
                            if(option4.hasClass('btn10')){
                                $(fourthDestiny).text(text10);
                                localStorage.setItem('opt4', opt10);
                                
    
                            }
                        },
                        
                        555);
                         // 11
                         setTimeout(()=>{
                            if(option4.hasClass('btn11')){
                                $(fourthDestiny).text(text11);
                                localStorage.setItem('opt4', opt11);
                                
    
                            }
                        },
                        
                        555);
                         // 12
                         setTimeout(()=>{
                            if(option4.hasClass('btn12')){
                                $(fourthDestiny).text(text12);
                                localStorage.setItem('opt4', opt12);
                                
    
                            }
                        },
                        
                        555);
                         // 13
                         setTimeout(()=>{
                            if(option4.hasClass('btn13')){
                                $(fourthDestiny).text(text13);
                                localStorage.setItem('opt4', opt13);
                                
    
                            }
                        },
                        
                        555);
                         // 14
                         setTimeout(()=>{
                            if(option4.hasClass('btn14')){
                                $(fourthDestiny).text(text14);
                                localStorage.setItem('opt4', opt14);
                            
    
                            }
                        },
                        
                        555);
                         // 15
                         setTimeout(()=>{
                            if(option4.hasClass('btn15')){
                                $(fourthDestiny).text(text15);
                                localStorage.setItem('opt4', opt15);
                            
    
                            }
                        },
                        
                        555);
                         // 16
                         setTimeout(()=>{
                            if(option4.hasClass('btn16')){
                                $(fourthDestiny).text(text16);
                                localStorage.setItem('opt4', opt16);
                            
    
                            }
                        },
                        
                        555);
                         // 17
                         setTimeout(()=>{
                            if(option4.hasClass('btn17')){
                                $(fourthDestiny).text(text17);
                                localStorage.setItem('opt4', opt17);
                                
    
                            }
                        },
                        
                        555);
                         // 18
                         setTimeout(()=>{
                            if(option4.hasClass('btn18')){
                                $(fourthDestiny).text(text18);
                                localStorage.setItem('opt4', opt18);
                                
    
                            }
                        },
                        
                        555);
                         // 19
                         setTimeout(()=>{
                            if(option4.hasClass('btn19')){
                                $(fourthDestiny).text(text19);
                                localStorage.setItem('opt4', opt19);
    
                            }
                        },
                        
                        555);
                         // 20
                         setTimeout(()=>{
                            if(option4.hasClass('btn20')){
                                $(fourthDestiny).text(text20);
                                localStorage.setItem('opt4', opt20);
    
                            }
                        },
                        
                        555);
                         // 21
                         setTimeout(()=>{
                            if(option4.hasClass('btn21')){
                                $(fourthDestiny).text(text21);
                                localStorage.setItem('opt4', opt21);
    
                            }
                        },
                        
                        555);
                         // 22
                         setTimeout(()=>{
                            if(option4.hasClass('btn22')){
                                $(fourthDestiny).text(text22);
                                localStorage.setItem('opt4', opt22);
    
                            }
                        },
                        
                        555);
                         // 23
                         setTimeout(()=>{
                            if(option4.hasClass('btn23')){
                                $(fourthDestiny).text(text23);
                                localStorage.setItem('opt4', opt23);
    
                            }
                        },
                        
                        555);
                         // 24
                         setTimeout(()=>{
                            if(option4.hasClass('btn24')){
                                $(fourthDestiny).text(text24);
                                localStorage.setItem('opt4', opt24);
    
                            }
                        },
                        
                        555);
                        
                        
                        
                    
                    
                      
                    } 

                   
                  
                 
                  
                }  
                       
            }); 
            //Fifth
            $(".btnL").click(function(){
                if (runesPicked==4) {
                    
                        var option5 = $(this);
                   
                        
                    
                        if (!option5.hasClass('picked')) {
                            $(this).addClass('picked');
                            runesPicked++;
                    // Talismanes
                    // Gallo
                        setTimeout(() => {
                            if(option5.hasClass('btn1')){
                                $(fifthDestiny).text(text1);
                                localStorage.setItem('opt5', opt1);
                            }
                        }, 555);
                    
                    // Toro
                        setTimeout(()=>{
                            if(option5.hasClass('btn2')){
                                $(fifthDestiny).text(text2);
                                localStorage.setItem('opt5', opt2);
                                
                            
                            }
                        },555);
                    
                    // Bonnie
                        setTimeout(()=>{
                            if(option5.hasClass('btn3')){
                                $(fifthDestiny).text(text3);
                                localStorage.setItem('opt5', opt3);
                            
                            }
                        },555);
                    
                     // Sheep
                        setTimeout(()=>{
                            if(option5.hasClass('btn4')){
                                $(fifthDestiny).text(text4);
                                localStorage.setItem('opt5', opt4);
                            
                        }
                        },555);
                     
                     // Snake
                        setTimeout(()=>{
                            if(option5.hasClass('btn5')){
                                $(fifthDestiny).text(text5);
                                localStorage.setItem('opt5', opt5);
                            
                            }
                        },555);
                     
                    // Drake
                        setTimeout(() => {
                            if(option5.hasClass('btn6')){
                                $(fifthDestiny).text(text6);
                                localStorage.setItem('opt5', opt6);
                            
                        }
                        }, 555);
                    
                    // Ratata
                        setTimeout(() => {
                            if(option5.hasClass('btn7')){
                                $(fifthDestiny).text(text7);
                                localStorage.setItem('opt5', opt7);
                            
                            }
                        }, 555);
                        
                         // Octava Runa
                         setTimeout(()=>{
                            if(option5.hasClass('btn8')){
                                $(fifthDestiny).text(text8);
                                localStorage.setItem('opt5', opt8);
    
                            }
                        },
                        
                        555);
                         // Novena runa
                         setTimeout(()=>{
                            if(option5.hasClass('btn9')){
                                $(fifthDestiny).text(text9);
                                localStorage.setItem('opt5', opt9);
    
                            }
                        },
                        
                        555);
                         // 10
                         setTimeout(()=>{
                            if(option5.hasClass('btn10')){
                                $(fifthDestiny).text(text10);
                                localStorage.setItem('opt5', opt10);
    
                            }
                        },
                        
                        555);
                         // 11
                         setTimeout(()=>{
                            if(option5.hasClass('btn11')){
                                $(fifthDestiny).text(text11);
                                localStorage.setItem('opt5', opt11);
    
                            }
                        },
                        
                        555);
                         // 12
                         setTimeout(()=>{
                            if(option5.hasClass('btn12')){
                                $(fifthDestiny).text(text12);
                                localStorage.setItem('opt5', opt12);
    
                            }
                        },
                        
                        555);
                         // 13
                         setTimeout(()=>{
                            if(option5.hasClass('btn13')){
                                $(fifthDestiny).text(text13);
                                localStorage.setItem('opt5', opt13);
    
                            }
                        },
                        
                        555);
                         // 14
                         setTimeout(()=>{
                            if(option5.hasClass('btn14')){
                                $(fifthDestiny).text(text14);
                                localStorage.setItem('opt5', opt14);
    
                            }
                        },
                        
                        555);
                         // 15
                         setTimeout(()=>{
                            if(option5.hasClass('btn15')){
                                $(fifthDestiny).text(text15);
                                localStorage.setItem('opt5', opt15);
    
                            }
                        },
                        
                        555);
                         // 16
                         setTimeout(()=>{
                            if(option5.hasClass('btn16')){
                                $(fifthDestiny).text(text16);
                                localStorage.setItem('opt5', opt16);
    
                            }
                        },
                        
                        555);
                         // 17
                         setTimeout(()=>{
                            if(option5.hasClass('btn17')){
                                $(fifthDestiny).text(text17);
                                localStorage.setItem('opt5', opt17);
    
                            }
                        },
                        
                        555);
                         // 18
                         setTimeout(()=>{
                            if(option5.hasClass('btn18')){
                                $(fifthDestiny).text(text18);
                                localStorage.setItem('opt5', opt18);
    
                            }
                        },
                        
                        555);
                         // 19
                         setTimeout(()=>{
                            if(option5.hasClass('btn19')){
                                $(fifthDestiny).text(text19);
                                localStorage.setItem('opt5', opt19);
    
                            }
                        },
                        
                        555);
                         // 20
                         setTimeout(()=>{
                            if(option5.hasClass('btn20')){
                                $(fifthDestiny).text(text20);
                                localStorage.setItem('opt5', opt20);
    
                            }
                        },
                        
                        555);
                         // 21
                         setTimeout(()=>{
                            if(option5.hasClass('btn21')){
                                $(fifthDestiny).text(text21);
                                localStorage.setItem('opt5', opt21);
    
                            }
                        },
                        
                        555);
                         // 22
                         setTimeout(()=>{
                            if(option5.hasClass('btn22')){
                                $(fifthDestiny).text(text22);
                                localStorage.setItem('opt5', opt22);
    
                            }
                        },
                        
                        555);
                         // 23
                         setTimeout(()=>{
                            if(option5.hasClass('btn23')){
                                $(fifthDestiny).text(text23);
                                localStorage.setItem('opt5', opt23);
                                
    
                            }
                        },
                        
                        555);
                         // 24
                         setTimeout(()=>{
                            if(option5.hasClass('btn24')){
                                $(fifthDestiny).text(text24);
                                localStorage.setItem('opt5', opt24);
    
                            }
                        },
                        
                        555);
                        
                        
                        
                    
                    
                      
                    } 

                   
                  
                 
                  
                }  
                       
            });
            //Sixth
            $(".btnL").click(function(){
                if (runesPicked==5) {
                    
                        var option6 = $(this);
                   
                        
                    
                        if (!option6.hasClass('picked')) {
                            $(this).addClass('picked');
                            runesPicked++;
                    // Talismanes
                    // Gallo
                        setTimeout(() => {
                            if(option6.hasClass('btn1')){
                                $(sixthDestiny).text(text1);
                                localStorage.setItem('opt6', opt1);
                            }
                        }, 555);
                    
                    // Toro
                        setTimeout(()=>{
                            if(option6.hasClass('btn2')){
                                $(sixthDestiny).text(text2);
                                localStorage.setItem('opt6', opt2);
                            
                            }
                        },555);
                    
                    // Bonnie
                        setTimeout(()=>{
                            if(option6.hasClass('btn3')){
                                $(sixthDestiny).text(text3);
                                localStorage.setItem('opt6', opt3);
                            
                            }
                        },555);
                    
                     // Sheep
                        setTimeout(()=>{
                            if(option6.hasClass('btn4')){
                                $(sixthDestiny).text(text4);
                                localStorage.setItem('opt6', opt4);
                            
                        }
                        },555);
                     
                     // Snake
                        setTimeout(()=>{
                            if(option6.hasClass('btn5')){
                                $(sixthDestiny).text(text5);
                                localStorage.setItem('opt6', opt5);
                            
                            }
                        },555);
                     
                    // Drake
                        setTimeout(() => {
                            if(option6.hasClass('btn6')){
                                $(sixthDestiny).text(text6);
                                localStorage.setItem('opt6', opt6);
                            
                        }
                        }, 555);
                    
                    // Ratata
                        setTimeout(() => {
                            if(option6.hasClass('btn7')){
                                $(sixthDestiny).text(text7);
                                localStorage.setItem('opt6', opt7);
                            
                            }
                        }, 555);
                        
                         // Octava Runa
                         setTimeout(()=>{
                            if(option6.hasClass('btn8')){
                                $(sixthDestiny).text(text8);
                                localStorage.setItem('opt6', opt8);
    
                            }
                        },
                        
                        555);
                         // Novena runa
                         setTimeout(()=>{
                            if(option6.hasClass('btn9')){
                                $(sixthDestiny).text(text9);
                                localStorage.setItem('opt6', opt9);
    
                            }
                        },
                        
                        555);
                         // 10
                         setTimeout(()=>{
                            if(option6.hasClass('btn10')){
                                $(sixthDestiny).text(text10);
                                localStorage.setItem('opt6', opt10);
    
                            }
                        },
                        
                        555);
                         // 11
                         setTimeout(()=>{
                            if(option6.hasClass('btn11')){
                                $(sixthDestiny).text(text11);
                                localStorage.setItem('opt6', opt11);
    
                            }
                        },
                        
                        555);
                         // 12
                         setTimeout(()=>{
                            if(option6.hasClass('btn12')){
                                $(sixthDestiny).text(text12);
                                localStorage.setItem('opt6', opt12);
    
                            }
                        },
                        
                        555);
                         // 13
                         setTimeout(()=>{
                            if(option6.hasClass('btn13')){
                                $(sixthDestiny).text(text13);
                                localStorage.setItem('opt6', opt13);
    
                            }
                        },
                        
                        555);
                         // 14
                         setTimeout(()=>{
                            if(option6.hasClass('btn14')){
                                $(sixthDestiny).text(text14);
                                localStorage.setItem('opt6', opt14);
    
                            }
                        },
                        
                        555);
                         // 15
                         setTimeout(()=>{
                            if(option6.hasClass('btn15')){
                                $(sixthDestiny).text(text15);
                                localStorage.setItem('opt6', opt15);
    
                            }
                        },
                        
                        555);
                         // 16
                         setTimeout(()=>{
                            if(option6.hasClass('btn16')){
                                $(sixthDestiny).text(text16);
                                localStorage.setItem('opt6', opt16);
    
                            }
                        },
                        
                        555);
                         // 17
                         setTimeout(()=>{
                            if(option6.hasClass('btn17')){
                                $(sixthDestiny).text(text17);
                                localStorage.setItem('opt6', opt17);
    
                            }
                        },
                        
                        555);
                         // 18
                         setTimeout(()=>{
                            if(option6.hasClass('btn18')){
                                $(sixthDestiny).text(text18);
                                localStorage.setItem('opt6', opt18);
    
                            }
                        },
                        
                        555);
                         // 19
                         setTimeout(()=>{
                            if(option6.hasClass('btn19')){
                                $(sixthDestiny).text(text19);
                                localStorage.setItem('opt6', opt19);
    
                            }
                        },
                        
                        555);
                         // 20
                         setTimeout(()=>{
                            if(option6.hasClass('btn20')){
                                $(sixthDestiny).text(text20);
                                localStorage.setItem('opt6', opt20);
    
                            }
                        },
                        
                        555);
                         // 21
                         setTimeout(()=>{
                            if(option6.hasClass('btn21')){
                                $(sixthDestiny).text(text21);
                                localStorage.setItem('opt6', opt21);
    
                            }
                        },
                        
                        555);
                         // 22
                         setTimeout(()=>{
                            if(option6.hasClass('btn22')){
                                $(sixthDestiny).text(text22);
                                localStorage.setItem('opt6', opt22);
    
                            }
                        },
                        
                        555);
                         // 23
                         setTimeout(()=>{
                            if(option6.hasClass('btn23')){
                                $(sixthDestiny).text(text23);
                                localStorage.setItem('opt6', opt23);
    
                            }
                        },
                        
                        555);
                         // 24
                         setTimeout(()=>{
                            if(option6.hasClass('btn24')){
                                $(sixthDestiny).text(text24);
                                localStorage.setItem('opt6', opt24);
    
                            }
                        },
                        
                        555);
                        
                        
                        
                    
                    
                      
                    } 

                   
                  
                 
                  
                }  
                       
            });   
            //Seventh
            $(".btnL").click(function(){
                if (runesPicked==6) {
                    
                        var option7 = $(this);
                   
                        
                    
                        if (!option7.hasClass('picked')) {
                            $(this).addClass('picked');
                            runesPicked++;
                    // Talismanes
                    // Gallo
                        setTimeout(() => {
                            if(option7.hasClass('btn1')){
                                $(seventhDestiny).text(text1);
                                localStorage.setItem('opt7', opt1);
                                
                            }
                        }, 555);
                    
                    // Toro
                        setTimeout(()=>{
                            if(option7.hasClass('btn2')){
                                $(seventhDestiny).text(text2);
                                localStorage.setItem('opt7', opt2);
                            
                            }
                        },555);
                    
                    // Bonnie
                        setTimeout(()=>{
                            if(option7.hasClass('btn3')){
                                $(seventhDestiny).text(text3);
                                localStorage.setItem('opt7', opt3);
                            
                            }
                        },555);
                    
                     // Sheep
                        setTimeout(()=>{
                            if(option7.hasClass('btn4')){
                                $(seventhDestiny).text(text4);
                                localStorage.setItem('opt7', opt4);
                            
                        }
                        },555);
                     
                     // Snake
                        setTimeout(()=>{
                            if(option7.hasClass('btn5')){
                                $(seventhDestiny).text(text5);
                                localStorage.setItem('opt7', opt5);
                            
                            }
                        },555);
                     
                    // Drake
                        setTimeout(() => {
                            if(option7.hasClass('btn6')){
                                $(seventhDestiny).text(text6);
                                localStorage.setItem('opt7', opt6);
                            
                        }
                        }, 555);
                    
                    // Ratata
                        setTimeout(() => {
                            if(option7.hasClass('btn7')){
                                $(seventhDestiny).text(text7);
                                localStorage.setItem('opt7', opt7);
                            
                            }
                        }, 555);
                        
                         // Octava Runa
                         setTimeout(()=>{
                            if(option7.hasClass('btn8')){
                                $(seventhDestiny).text(text8);
                                localStorage.setItem('opt7', opt8);
    
                            }
                        },
                        
                        555);
                         // Novena runa
                         setTimeout(()=>{
                            if(option7.hasClass('btn9')){
                                $(seventhDestiny).text(text9);
                                localStorage.setItem('opt7', opt9);
    
                            }
                        },
                        
                        555);
                         // 10
                         setTimeout(()=>{
                            if(option7.hasClass('btn10')){
                                $(seventhDestiny).text(text10);
                                localStorage.setItem('opt7', opt10);
    
                            }
                        },
                        
                        555);
                         // 11
                         setTimeout(()=>{
                            if(option7.hasClass('btn11')){
                                $(seventhDestiny).text(text11);
                                localStorage.setItem('opt7', opt11);
    
                            }
                        },
                        
                        555);
                         // 12
                         setTimeout(()=>{
                            if(option7.hasClass('btn12')){
                                $(seventhDestiny).text(text12);
                                localStorage.setItem('opt7', opt12);
    
                            }
                        },
                        
                        555);
                         // 13
                         setTimeout(()=>{
                            if(option7.hasClass('btn13')){
                                $(seventhDestiny).text(text13);
                                localStorage.setItem('opt7', opt13);
    
                            }
                        },
                        
                        555);
                         // 14
                         setTimeout(()=>{
                            if(option7.hasClass('btn14')){
                                $(seventhDestiny).text(text14);
                                localStorage.setItem('opt7', opt14);
    
                            }
                        },
                        
                        555);
                         // 15
                         setTimeout(()=>{
                            if(option7.hasClass('btn15')){
                                $(seventhDestiny).text(text15);
                                localStorage.setItem('opt7', opt15);
    
                            }
                        },
                        
                        555);
                         // 16
                         setTimeout(()=>{
                            if(option7.hasClass('btn16')){
                                $(seventhDestiny).text(text16);
                                localStorage.setItem('opt7', opt16);
    
                            }
                        },
                        
                        555);
                         // 17
                         setTimeout(()=>{
                            if(option7.hasClass('btn17')){
                                $(seventhDestiny).text(text17);
                                localStorage.setItem('opt7', opt17);
    
                            }
                        },
                        
                        555);
                         // 18
                         setTimeout(()=>{
                            if(option7.hasClass('btn18')){
                                $(seventhDestiny).text(text18);
                                localStorage.setItem('opt7', opt18);
    
                            }
                        },
                        
                        555);
                         // 19
                         setTimeout(()=>{
                            if(option7.hasClass('btn19')){
                                $(seventhDestiny).text(text19);
                                localStorage.setItem('opt7', opt19);
    
                            }
                        },
                        
                        555);
                         // 20
                         setTimeout(()=>{
                            if(option7.hasClass('btn20')){
                                $(seventhDestiny).text(text20);
                                localStorage.setItem('opt7', opt20);
    
                            }
                        },
                        
                        555);
                         // 21
                         setTimeout(()=>{
                            if(option7.hasClass('btn21')){
                                $(seventhDestiny).text(text21);
                                localStorage.setItem('opt7', opt21);
                                
    
                            }
                        },
                        
                        555);
                         // 22
                         setTimeout(()=>{
                            if(option7.hasClass('btn22')){
                                $(seventhDestiny).text(text22);
                                localStorage.setItem('opt7', opt22);
    
                            }
                        },
                        
                        555);
                         // 23
                         setTimeout(()=>{
                            if(option7.hasClass('btn23')){
                                $(seventhDestiny).text(text23);
                                localStorage.setItem('opt7', opt23);
    
                            }
                        },
                        
                        555);
                         // 24
                         setTimeout(()=>{
                            if(option7.hasClass('btn24')){
                                $(seventhDestiny).text(text24);
                                localStorage.setItem('opt7', opt24);
    
                            }
                        },
                        
                        555);
                        letRedir();
                        
                        
                        
                    
                    
                      
                    } 

                   
                  
                 
                  
                }  
                
                       
            });   
            

        
    
   
});