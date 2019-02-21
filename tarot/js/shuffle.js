

    $( document ).ready(function() {
        function sh(){
            //Trying to shuffle some html elements, shall we?
                   //GOD BLESS FISHER-YATES SHUFFLE
                   var ul = document.querySelector('.ulShuffle');
                 
                   
                   for (var i = ul.children.length; i >= 0; i--) {
                       ul.appendChild(ul.children[Math.random() * i | 0]);
                   }
                
        }
      
        sh();
       
    });