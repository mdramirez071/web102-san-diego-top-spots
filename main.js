$(document).ready(function() { 
// write your code here

$.getJSON('data.json', function(data){
   //console.log(data);
   var item = [];
   $.each(data,function(key,value){
      //console.log(data);
   item.push("<tr><td>" + value.name + '</td><td>' + value.description + "</td><td><a href='https://www.google.com/maps?q=" + value.location + "'>link</a></td></tr>" );
   //console.log(item);
   });
   $('table').append(item);
});
 
});

//All the lines below are used for TESTING PURPOSES ONLY: 

 //The 3 lines below are supposed to insert the first name, description, and link into the first row within the table.
   // $('#san-diego-top-spots tr > td:eq(0)').text(value.name).css("background-color", "red");
   // $('#san-diego-top-spots tr > td:eq(1)').text(value.description).css("background-color", "green");
   // $('#san-diego-top-spots tr > td:eq(2)').text(value.location).css("background-color", "grey");
   // //this is printing out each "name" within the JSON object line by line (0 thru 29)   
   // console.log(value.name); 
   // //this is printing out each "description" within the JSON object line by line (0 thru 29)
   // console.log(value.description);
   // //this is printing out each "location" within the JSON object line by line (0 thru 29)
   // console.log(value.location);