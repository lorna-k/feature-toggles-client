var request = require("request");
var deleteFeature = function(name)
{
   var match=false;
  request({
    url: "http://localhost:3000/features",
    method: "GET",

  }, function(error, response, body)
     {
          var jsonBody = JSON.parse(body);
          for(var i = 0; i < jsonBody.length; i++)
          {
            if (name === (jsonBody[i].name))
            {
              match=true;
              deleteFeatureById(jsonBody[i].id);

            }

          }
          if(!match)
          {
            console.log("Feature to delete not found");
          }

      });

}

var deleteFeatureById = function(ID)
{

  request({
      url:`http://localhost:3000/features/`+""+ID,
      method:"DELETE",
      json:true,


    }, function (error,response,body)
       {
            if(error)
            {
              console.log("feature not deleted error");
              return error;
            }

         });
}

//module.export.deleteFeature = deleteFeature;
