Coll = new Meteor.Collection("coll");

if (Meteor.isClient) {
  var P = new Paginate({collection:Coll, perPage:5, name:'pages'});
  //P1.removeAllData();
  //P1.populateData();

  Template.myTemplate.collection = function () {
    //return Paginate.pages.results.find({});
    return P.results.find({});
  };
  
  Meteor.autorun(function() {
    Meteor.subscribe("coll");

  });

}

if (Meteor.isServer) {
  Coll.remove({});
  Coll.insert({"name":"Jose", "location":"New York"});
  Coll.insert({"name":"Carlos", "location":"France"});
  Coll.insert({"name":"Nathan", "location":"New York"});
  Coll.insert({"name":"Enrique", "location":"New Jersey"});
  Coll.insert({"name":"Eddie", "location":"Brasil"});
  Coll.insert({"name":"Rusian", "location":"China"});
  Coll.insert({"name":"Josh", "location":"Costa Rica"});
  Coll.insert({"name":"James", "location":"Hong Kong"});
  Coll.insert({"name":"Alex", "location":"New York"});
  Coll.insert({"name":"Slava", "location":"Hong Kong"});
  Coll.insert({"name":"Mike", "location":"Malaysia"});
  Coll.insert({"name":"Ruth", "location":"Brooklyn"});
  Coll.insert({"name":"Amy", "location":"Canada"});
  Coll.insert({"name":"Tikky", "location":"Miami"});
  Coll.insert({"name":"Rosa", "location":"Albany"});
  Coll.insert({"name":"Lisa", "location":"Italy"});
  Coll.insert({"name":"Uncle", "location":"Russia"});
  Coll.insert({"name":"Dennis", "location":"California"});

  Meteor.publish("coll", function() { 
    return Coll.find({}, {fields: {}});
  });
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

