Adults = new Meteor.Collection("adults");
Childrens = new Meteor.Collection("childrens");

Animals = new Meteor.Collection("animals");

if (Meteor.isClient) {

  //SINGLE PAGINATE WITH ONE TEMPLATE
  var animalPages = new Paginate(Animals, "animalTemplate", {perPage:2});

  //MULTIPLE PAGINATE WITH ONE TEMPLATE
  var childrenPages = new Paginate(Childrens, "peopleTemplate", {perPage:3, templateData:"people"});
  var adultPages = new Paginate(Adults, "peopleTemplate", {perPage:4, templateData:"people" });

  Meteor.autorun(function() {
    Meteor.Router.add({ 
      '/': "home"
    });

    console.log('autorun ran!');
    Meteor.subscribe("adults");
    Meteor.subscribe("childrens");
    Meteor.subscribe("animals");
  });

  Template.home.events({
    'click #animalBtn': function(e){
      e.preventDefault();
      Meteor.Router.to("/animals/1");
    },
    'click #adultBtn': function(e){
      e.preventDefault();
      Meteor.Router.to("/adults/1");
    },
    'click #childrenBtn': function(e){
      e.preventDefault();
      Meteor.Router.to("/childrens/1");
    }

  });
}

if (Meteor.isServer) {
  Adults.remove({});
  Childrens.remove({});
  Animals.remove({});

  Adults.insert({"name":"Jose", "age":"26"});
  Adults.insert({"name":"Carlos", "age":"18"});
  Adults.insert({"name":"Nathan", "age":"60"});
  Adults.insert({"name":"Enrique", "age":"102"});
  Adults.insert({"name":"Eddie", "age":"20"});
  Adults.insert({"name":"Rusian", "age":"21"});
  Adults.insert({"name":"Josh", "age":"45"});
  Adults.insert({"name":"James", "age":"36"});

  
  Childrens.insert({"name":"Alex", "age":"2"});
  Childrens.insert({"name":"Slava", "age":"9"});
  Childrens.insert({"name":"Mike", "age":"3"});
  Childrens.insert({"name":"Ruth", "age":"3"});
  Childrens.insert({"name":"Amy", "age":"5"});
  Childrens.insert({"name":"Tikky", "age":"4"});
  Childrens.insert({"name":"Rosa", "age":"7"});
  Childrens.insert({"name":"Lisa", "age":"6.5"});
  Childrens.insert({"name":"Uncle", "age":"1"});
  Childrens.insert({"name":"Dennis", "age":"0.5"});


  Animals.insert({"name":"Tiger", "size":"120"});
  Animals.insert({"name":"Sharks", "size":"400"});
  Animals.insert({"name":"Dino", "size":"5"});
  Animals.insert({"name":"Dog", "size":"30"});
  Animals.insert({"name":"Rhyno", "size":"600"});
  Animals.insert({"name":"Elephant", "size":"1555"});
  Animals.insert({"name":"Cat", "size":"300"});
  Animals.insert({"name":"Ants", "size":"1"});
  Animals.insert({"name":"Birds", "size":"30"});
  Animals.insert({"name":"Lol", "size":"234"});
  Animals.insert({"name":"Elephant", "size":"234"});
  Animals.insert({"name":"Cat", "size":"300"});
  Animals.insert({"name":"Ants", "size":"1234"});



  Meteor.publish("adults", function() { 
    return Adults.find({}, {fields: {}});
  });
  Meteor.publish("childrens", function() { 
    return Childrens.find({}, {fields: {}});
  });
  Meteor.publish("animals", function() { 
    return Animals.find({}, {fields: {}});
  });

}

