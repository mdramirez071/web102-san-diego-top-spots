$(document).ready(function() { 
// write your code here
$.getJSON('data.json', function(data){
   var item = [];
   $.each(data,function(key,value){
   item.push("<tr><td>" + value.name + '</td><td>' + value.description + "</td><td><a href='https://www.google.com/maps?q=" + value.location + "'>link</a></td></tr>" );
   });
   $('table').append(item);
});
 
});