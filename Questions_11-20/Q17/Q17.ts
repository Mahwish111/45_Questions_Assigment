17 //Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.









let guest_list : string [] = ['Basit', 'Mahwish', 'Rabia', 'Usman'];
// for (let i=0; i <guest_list,length; i++){
//   console.log(' Respected Sir/Madam ' + guest_list [i] +',\n\n we invited you for dinner tomorrow);
// }
let not_present : string = 'Basit';
let new_guest : string = 'Imran';
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
while (guest_list.length >2){
    let remove_guest = guest_list.pop();
    console.log(`sorry Sir/Madam, ${remove_guest} You are not invited for dinner tomorrow!`);
}
for (let i=0; i <guest_list.length; i++ ){
    console.log(' Respected Sir/Madam ' + guest_list[i] + ',\nYou are still invited for tomorrows dinner.\nThank You!');
}
guest_list.splice(0,2);
console.log(guest_list);