var images =
["https://i.posting.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png","https://i.postimg.cc/wjMnFtmx/father.jpg",
"https://i.postimg.cc/SymDKL83/bro.jpg",
"https://i.postimg.cc/JnL6wtrd/sister.jpg",
"https://i.postimg.cc/bwSWSzSK/mother.jpg"];

var names = ["family Book","John Parr", "Jom Parr", "San Parr",
"Ala Parr", "Soi Parr"];

var i = 0;
function update(){
    i++;
    var numbers_of_family_member_in_array = 5 
    if(i > numbers_of_family_member_in_array)
{
    i = 0
}
var updatedImage = images[i];
var updatedName = names[i];
document.getElementById("family_member_image").src = updatedImage;
document.getElementById("family_member_name").innerHTML = updatedName;
}

