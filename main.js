Adults = new Meteor.Collection("adults");
Childrens = new Meteor.Collection("childrens");
Canines = new Meteor.Collection("canines");
Vegetarians = new Meteor.Collection("vegetarians");
// var callback = function(){
//     console.log("HEREE", this.Results.find(), this.coll);
//     return this.Results.find({});
//     // return self.Results.find({});
// }


if (Meteor.isClient) {
  //Default Settings
  //var P = new Paginate(Coll);

  var childrenPages = new Paginate(Childrens, "peopleTemplate", {perPage:3, resultName:"people"});
  var Adult = new Paginate(Adults, "peopleTemplate", {perPage:4, resultName:"people" });
  var Canine = new Paginate(Canines, "animalTemplate", {perPage:2, resultName:"animals"});
  var Vegetarian = new Paginate(Vegetarians, "animalTemplate", {perPage:5, resultName:"animals"});

  


  //P1.removeAllData();
  //P1.populateData();

  // Template.peopleTemplate.people = function () {
  //   //return Paginate.pages.results.find({});
  //   return Adult.Results.find({});
  // };

  // Template.animalTemplate.animal = function () {
  //   //return Paginate.p1.Results.find({});
  //   return Animal.Results.find({});
  // };


  Meteor.autorun(function() {

    console.log('autorun ran!');
    Meteor.subscribe("adults");
    Meteor.subscribe("childrens");
    Meteor.subscribe("canines");
    Meteor.subscribe("vegetarians");
  });

  Meteor.startup(function () {

    // code to run on server at startup

    // console.log(childrenPages);
  

    // childrenPages.next()
    // childrenPages.next()

    // childrenPages.goTo(2)
    // childrenPages.previous()
  });

}

if (Meteor.isServer) {
  Adults.remove({});
  Childrens.remove({});
  Canines.remove({});
  Vegetarians.remove({});

  Adults.insert({"name":"Jose", "location":"New York"});
  Adults.insert({"name":"Carlos", "location":"France"});
  Adults.insert({"name":"Nathan", "location":"New York"});
  Adults.insert({"name":"Enrique", "location":"New Jersey"});
  Adults.insert({"name":"Eddie", "location":"Brasil"});
  Adults.insert({"name":"Rusian", "location":"China"});
  Adults.insert({"name":"Josh", "location":"Costa Rica"});
  Adults.insert({"name":"James", "location":"Hong Kong"});

  
  Childrens.insert({"name":"Alex", "location":"New York"});
  Childrens.insert({"name":"Slava", "location":"Hong Kong"});
  Childrens.insert({"name":"Mike", "location":"Malaysia"});
  Childrens.insert({"name":"Ruth", "location":"Brooklyn"});
  Childrens.insert({"name":"Amy", "location":"Canada"});
  Childrens.insert({"name":"Tikky", "location":"Miami"});
  Childrens.insert({"name":"Rosa", "location":"Albany"});
  Childrens.insert({"name":"Lisa", "location":"Italy"});
  Childrens.insert({"name":"Uncle", "location":"Russia"});
  Childrens.insert({"name":"Dennis", "location":"California"});


  Canines.insert({"name":"Tiger", "size":"120"});
  Canines.insert({"name":"Sharks", "size":"400"});
  Canines.insert({"name":"Dino", "size":"5"});
  Canines.insert({"name":"Dog", "size":"30"});
  Canines.insert({"name":"Rhyno", "size":"600"});
  Canines.insert({"name":"Elephant", "size":"1555"});
  Canines.insert({"name":"Cat", "size":"300"});
  Canines.insert({"name":"Ants", "size":"1"});


  Vegetarians.insert({"name":"Birds", "size":"30"});
  Vegetarians.insert({"name":"Lol", "size":"234"});
  Vegetarians.insert({"name":"Elephant", "size":"234"});
  Vegetarians.insert({"name":"Cat", "size":"300"});
  Vegetarians.insert({"name":"Ants", "size":"1234"});
  Vegetarians.insert({"name":"Dog", "size":"2343"});
  Vegetarians.insert({"name":"Rhyno", "size":"602330"});
  Vegetarians.insert({"name":"Elephant", "size":"355"});
  Vegetarians.insert({"name":"Cat", "size":"23"});
  Vegetarians.insert({"name":"Ants", "size":"1"});


  Meteor.publish("adults", function() { 
    return Adults.find({}, {fields: {}});
  });
  Meteor.publish("childrens", function() { 
    return Childrens.find({}, {fields: {}});
  });
  Meteor.publish("canines", function() { 
    return Canines.find({}, {fields: {}});
  });
  Meteor.publish("vegetarians", function() { 
    return Vegetarians.find({}, {fields: {}});
  });


}

