17; //Shrinking Guest List:
var guest_list = ['Basit', 'Mahwish', 'Rabia', 'Usman'];
// for (let i=0; i <guest_list,length; i++){
//   console.log(' Respected Sir/Madam ' + guest_list [i] +',\n\n we invited you for dinner tomorrow);
// }
var not_present = 'Basit';
var new_guest = 'Imran';
guest_list[0] = new_guest;
//for (let i=0 i < guest_list.length; i++ ){
//    console.log(' Respected Sir/Madam ' + guest_list[i] +',\nwe invited you for dinner tomorrow\n);
// }  
// console.log(' Mr,Basit ${not_present} will not be coming for dinner tomorrow');
guest_list.unshift('Diya', 'Laiba', 'Emaan');
//for (let i=0 i < guest_list.length; i++ ){ 
//   console.log(' Respected Sir/Madam ' + guest_list[i] +',\nwe invited you for dinner tomorrow\n);
// } 
console.log('\n Unfortunately we can not arrange a bigger table, so only two people are allowed');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("sorry Sir/Madam, ".concat(remove_guest, " You are not invited for dinner tomorrow!"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log(' Respected Sir/Madam ' + guest_list[i] + ',\nYou are still invited for tomorrows dinner.\nThank You!');
}
guest_list.splice(0, 2);
console.log(guest_list);
