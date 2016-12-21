var request = require("request");

var get_highest = function()
{

  request({
    hostname: 'localhost',
    port: 3000,
    path: 'features/',
    url: "http://localhost:3000/features",
    method: "GET",

  }, function(error, response, body) {

  //  var resu = body;
  var jsonBody = JSON.parse(body);
  var max_id = 0 ; //max_id
  for(var i = 0; i < jsonBody.length; i++) {
    console.log(jsonBody[i].id) //the object itself - The feature
    if (i == jsonBody.length-1)
    {
      max_id = jsonBody[i].id;
    }
  }

//  console.log(max_id);

});

}


var addNewFeature = function(name) {

  var formData = {
      "id" : 5,
      "applicationId" : 258,
      "name" : "latest"
  }

  //get the highest id and increment
  var id = get_highest() + 1;
  formData.id = id;
  formData.name = name;

  request({
    url: "http://localhost:3000/features",
    method: "POST",
    json: true,
    body: formData
  }, function(error, response, body) {
    if(error) {
      console.log("something went wrong with posting");
      return error;
    }

    console.log(response);
  });
}

addNewFeature("Latest_Feature");
