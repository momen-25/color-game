import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './main.html';
import './main.html';
import './login.html';
import './game2.html'
import './game3.html'
import './score.html'
import './nav.html'
import './game.html'
import './home.html';
import '../collection.js';
import '../routes.js';
import './login.js';
import '../collection.js';

var pColor = function (event) {
   if (Session.get("playerSelectedColor")) {
        //change color
        Session.set("playerSelectedColor" , $(event.target).attr('data'));
        console.log(Session.get("playerSelectedColor"))
        $(event.target).addClass("selected");
        $(event.target).parent().siblings().children().removeClass("selected");
    } else {
       Session.set("playerSelectedColor" , $(event.target).attr('data'));
       $(event.target).addClass("selected");
       console.log(Session.get("playerSelectedColor"))


         if (Session.get("game1SelectedColor") && Session.get("game2SelectedColor")) {
           console.log("player game")
           if ((Session.get("game1SelectedColor")==="yellow"||Session.get("game1SelectedColor")==="red") && (Session.get("game2SelectedColor")==="red"||Session.get("game2SelectedColor")==="yellow")&&(Session.get("playerSelectedColor")==="orange")) {
                  console.log('done^2');
                  $(event.target).addClass("selected");
                  $(".selected").css("display","none");
                 Session.set("playerSelectedColor",false)
                 Session.set("game1SelectedColor",false);
                 Session.set("game2SelectedColor",false);
                 Session.set("score" , Session.get("score") + 10);
                 console.log(Session.get("score"))               

           }


            else {if ((Session.get("game1SelectedColor")==="yellow"||Session.get("game1SelectedColor")==="blue") && (Session.get("game2SelectedColor")==="blue"||Session.get("game2SelectedColor")==="yellow")&&(Session.get("playerSelectedColor")==="green")) {
                  console.log('done^3');
                  $(event.target).addClass("selected");
                  $(".selected").css("display","none");
                 Session.set("playerSelectedColor",false)
                 Session.set("game1SelectedColor",false);
                 Session.set("game2SelectedColor",false);
                 Session.set("score" , Session.get("score") + 10) 
                 console.log(Session.get("score"))               

            } else {if ((Session.get("game1SelectedColor")==="red"||Session.get("game1SelectedColor")==="blue") && (Session.get("game2SelectedColor")==="blue"||Session.get("game2SelectedColor")==="red")&&(Session.get("playerSelectedColor")==="purple")) {
                  console.log('done^4');
                  $(event.target).addClass("selected");
                  $(".selected").css("display","none");
                 Session.set("playerSelectedColor",false)
                 Session.set("game1SelectedColor",false);
                 Session.set("game2SelectedColor",false);
                 Session.set("score" , Session.get("score") + 10)
                 console.log(Session.get("score"))               
            } else {
              if (Session.get("game1SelectedColor")&&Session.get("game2SelectedColor")&&Session.get("playerSelectedColor")) {
                 $(event.target).addClass("selected");
                 Session.set("playerSelectedColor",false)
                 Session.set("game1SelectedColor",false);
                 Session.set("game2SelectedColor",false);
                 $(".selected").removeClass("selected");                 
              }
            }
                  
            }
          }

   //simple match
        } else {
                if (Session.get("playerSelectedColor") === Session.get("game1SelectedColor")) {
                 $(event.target).addClass("selected");
                 console.log ('simple match');
                 $(".selected").css("display","none");
                 Session.set("playerSelectedColor",false)
                 Session.set("game1SelectedColor",false);
                 Session.set("score" , Session.get("score") + 5)
                 console.log(Session.get("score"))               

                } else {
                 if (Session.get("playerSelectedColor")&&Session.get("game1SelectedColor")) {
                 $(event.target).addClass("selected");
                 Session.set("playerSelectedColor",false)
                 Session.set("game1SelectedColor",false);
                 $(".selected").removeClass("selected");
                 }else {
                  $(event.target).addClass("selected");
                  console.log(Session.get("playerSelectedColor"))
                 }

                }
         }

    }

}

var gColor = function (event) {
  if (Session.get("game1SelectedColor")) {
        Session.set("game2SelectedColor" , $(event.target).attr('data'));
        $(event.target).addClass("selected");
        if ((Session.get("game1SelectedColor")==="yellow"||Session.get("game1SelectedColor")==="red") && (Session.get("game2SelectedColor")==="red"||Session.get("game2SelectedColor")==="yellow")&&(Session.get("playerSelectedColor")==="orange")) {
                  console.log('done^2');
                  $(".selected").css("display","none");
                 Session.set("playerSelectedColor",false)
                 Session.set("game1SelectedColor",false);
                 Session.set("game2SelectedColor",false);          

        }else{
          if ((Session.get("game1SelectedColor")==="yellow"||Session.get("game1SelectedColor")==="blue") && (Session.get("game2SelectedColor")==="blue"||Session.get("game2SelectedColor")==="yellow")&&(Session.get("playerSelectedColor")==="green")) {
                  console.log('done^3');
                  $(".selected").css("display","none");
                 Session.set("playerSelectedColor",false)
                 Session.set("game1SelectedColor",false);
                 Session.set("game2SelectedColor",false); 
          } else {
            if ((Session.get("game1SelectedColor")==="red"||Session.get("game1SelectedColor")==="blue") && (Session.get("game2SelectedColor")==="blue"||Session.get("game2SelectedColor")==="red")&&(Session.get("playerSelectedColor")==="purple")) {
                  console.log('done^4');
                  $(".selected").css("display","none");
                 Session.set("playerSelectedColor",false)
                 Session.set("game1SelectedColor",false);
                 Session.set("game2SelectedColor",false); 
            } else {
              if (Session.get("game1SelectedColor")&&Session.get("game2SelectedColor")&&Session.get("playerSelectedColor")) {
                 Session.set("playerSelectedColor",false)
                 Session.set("game1SelectedColor",false);
                 Session.set("game2SelectedColor",false);
                 $(".selected").removeClass("selected");                
              }
            }
          }
        }
//simple match....
    } else {

      Session.set("game1SelectedColor" , $(event.target).attr('data'));
      $(event.target).addClass("selected");
      if (Session.get("game1SelectedColor")===Session.get("playerSelectedColor")) {
      console.log(Session.get("game1SelectedColor"));
      $(".selected").css("display","none");
      Session.set("game1SelectedColor",false);
      Session.set("playerSelectedColor",false)
      Session.set("score" , Session.get("score") + 5)


      } else {
          if (Session.get("game1SelectedColor")&&Session.get("playerSelectedColor")) {
            $(event.target).addClass("selected");
            Session.set("game1SelectedColor",false);
            Session.set("playerSelectedColor",false);
            $(".selected").removeClass("selected");  

          } else {
            $(event.target).addClass("selected");
            console.log(Session.get("game1SelectedColor"))
          }
      }

    }
}

Template.home.events({
  "click .game":function (event) {
    
    Session.set("name" , $(".name").val());
    console.log(Session.get("name"))
    if (Session.get("name")) {
      Session.set("page",1);
    } else {
      alert("enter your name please")
    }
  }
})

Template.game.helpers({
  colors : function () {
    colors = Colors.findOne().colors
    var random1 = Math.floor(Math.random() * colors.length);
    var random2 = Math.floor(Math.random() * colors.length);
    var random3 = Math.floor(Math.random() * colors.length);
    var random4 = Math.floor(Math.random() * colors.length);
    var random5 = Math.floor(Math.random() * colors.length);
    var random6 = Math.floor(Math.random() * colors.length);
    var selectedColoers = 
    {
      color1 :colors[random1],
      color2 :colors[random2],
      color3 :colors[random3],
      color4 :colors[random4],
      color5 :colors[random5],
      color6 :colors[random6]
    }
    console.log(selectedColoers)
    Session.set("score" , 0)
    return selectedColoers
  },
    colorPlayer : function () {
    colors = Colors.findOne().colors
    var random1 = Math.floor(Math.random() * colors.length);
    var random2 = Math.floor(Math.random() * colors.length);
    var random3 = Math.floor(Math.random() * colors.length);
    var selectedColoers = {color1 : colors[random1] ,color2 :colors[random2],color3 :colors[random3],}
    console.log(selectedColoers)
    return selectedColoers
  }

})

Template.game.events({
  "click .pColor" : function (event) {
      pColor(event)
  },
  "click .gColor" : function (event) {
      gColor(event)    
  },
  "click .next" :function(event){
    Session.set("page" , 2 );
    Session.set("game1SelectedColor",false);
    Session.set("playerSelectedColor",false);
    Session.set("game2SelectedColor",false);

  }
})


Template.game2.helpers({
  colors : function () {
    colors = Colors.findOne().colors
    var random1 = Math.floor(Math.random() * colors.length);
    var random2 = Math.floor(Math.random() * colors.length);
    var random3 = Math.floor(Math.random() * colors.length);
    var random4 = Math.floor(Math.random() * colors.length);
    var selectedColoers = {color1 : colors[random1] ,color2 :colors[random2],color3 :colors[random3],color4 :colors[random4]}
    console.log(selectedColoers)
    
    return selectedColoers
  },
    colorPlayer : function () {
    colors = Colors.findOne().colors
    var random1 = Math.floor(Math.random() * colors.length);
    var random2 = Math.floor(Math.random() * colors.length);
    var random3 = Math.floor(Math.random() * colors.length);
    var selectedColoers = {color1 : colors[random1] ,color2 :colors[random2],color3 :colors[random3],}
    console.log(selectedColoers)
    return selectedColoers
  }

})



Template.game2.events({
  "click .pColor" : function (event) {
    pColor(event)

  },
  "click .gColor" : function (event) {
     gColor(event)  
  },
  "click .next" :function(event){
    Session.set("game1SelectedColor",false);
    Session.set("playerSelectedColor",false);
    Session.set("game2SelectedColor",false);
    Session.set("page",3)


  }
})

Template.game3.helpers({
  colors : function () {
    colors = Colors.findOne().colors
    var random1 = Math.floor(Math.random() * colors.length);
    var random2 = Math.floor(Math.random() * colors.length);
    var random3 = Math.floor(Math.random() * colors.length);
    var random4 = Math.floor(Math.random() * colors.length);
    var selectedColoers = {color1 : colors[random1] ,color2 :colors[random2],color3 :colors[random3],color4 :colors[random4]}
    console.log(selectedColoers)
    
    return selectedColoers
  },
    colorPlayer : function () {
    colors = Colors.findOne().colors
    var random1 = Math.floor(Math.random() * colors.length);
    var random2 = Math.floor(Math.random() * colors.length);
    var random3 = Math.floor(Math.random() * colors.length);
    var selectedColoers = {color1 : colors[random1] ,color2 :colors[random2],color3 :colors[random3],}
    console.log(selectedColoers)
    return selectedColoers
  }

})

Template.game3.events({
  "click .pColor" : function (event) {
    pColor(event) 
  },
  "click .gColor" : function (event) {
    gColor(event)  
  },
  "click .next" :function(event){
    Session.set("page" , 4 );
    Session.set("game1SelectedColor",false);
    Session.set("playerSelectedColor",false);
    Session.set("game2SelectedColor",false);
    var score = {
      score : Session.get("score"),
      createdOn : new Date(),
      name : Session.get("name")
    }
    Score.insert(score)

  }
})

Template.score.helpers({
  yourScore : function(){
    return Session.get("score")
  },
  allScore : function(){
    return Score.find({},{sort: {score : -1}})
  }
})




