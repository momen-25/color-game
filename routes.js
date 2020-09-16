Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

console.log("mmmm")

;

Router.route('/', function () {
    this.render('nav' ,{to : 'nav'});

    if (Session.get("page")===1) {
      this.render('game',{to : 'main'});
    } else {
      if (Session.get("page")===2) {
        console.log("switch")
      this.render('game2',{to : 'main'});

      } else {
        if (Session.get("page")===3) {
          console.log("switch")
        this.render('game3',{to : 'main'});  
        }else{
          if (Session.get("page")===4) {
             this.render('score',{to : 'main'}) 
          } else {
            this.render('home',{to : 'main'});
          }
        
        }
      }

    }
    //space to every route becouse it render kidData evey where 
});

Router.route('/game/:Session.get("playerSelectedColor")', function () {


  this.render('nav', {
    to : 'nav',
 



  })

  this.render('game', {
  	to : "main",
    data: function () {

      return Session.get("playerSelectedColor")
  

    }



  });




});



Router.route('/market/:_id', function () {


  this.render('nav', {
    to : 'nav',
 



  })

  this.render('market', {
  	to : "main",
    data: function () {
      console.log("2from router ",this.params._id);
      var NewMarket = Markets.findOne({_id : this.params._id});
      console.log(NewMarket)
      return NewMarket
  

    }



  });




});

Router.route('/orders/:_id', function () {


  this.render('nav', {
    to : 'nav',
 



  })

  this.render('order', {
  	to : "main",
    data: function () {
      var order = Orders.findOne({_id : this.params._id});
      return order;
  

    }

  });




});

Router.route('/marketClintVeiw/:brandName', function () {


  this.render('nav', {
    to : 'nav',
 



  })

  this.render('marketClintVeiw', {
  	to : "main",
    data: function () {
      return Markets.findOne({brandName : this.params.brandName})
   
  

    }



  });




});


Router.route('/market', function () {


  this.render('nav', {
    to : 'nav',
 



  })

  this.render('market', {
  	to : "main",
    data: function () {

  

    }



  });




});

Router.route('/myOrders/:userName', function () {


  this.render('nav', {
    to : 'nav',
 



  });


  this.render('myOrders', {
  	to : "main",
    data: function () {
      return Orders.find({userName : this.params.userName});
   
  

    }



  });



});