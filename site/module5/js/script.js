document.addEventListener("DOMContentLoaded", 
    function(event) {
      //console.log(event);
      function sayHello () {
        console.log(this);
        this.textContent = "Said it!";
        var name =
         document.getElementById("name").value;
         var message = "<h2>Hello " + name + "!</h2>";

        // document
        //   .getElementById("content")
        //   .textContent = message;

        document
          .getElementById("content")
          .innerHTML = message;

        if (name === "student") {
          var title = 
            document
              .querySelector("#title")
              .textContent;
          title += " & Lovin' it!";
          document
              .querySelector("h1")
              .textContent = title;
        }
      }
      document.querySelector('button')
          .addEventListener('click', sayHello);
      
      document.querySelector('body')
          .addEventListener('mousemove', 
            function(event) {
              var xo = event.clientX;
              var yo = event.clientY;
              if(event.shiftKey === true) {
                console.log('x: ' + xo);
                console.log('y: ' + yo);
              }
              document.getElementById('name').setAttribute(
   "style", "transform: translate(" + xo + "px," + yo + "px);transition:0.3s;");
            }); 
    }
  );

  //document.querySelector('button').onclick = sayHello;

