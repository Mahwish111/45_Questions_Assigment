// More Guests : You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.







let guest_list :  string [] = ['Basit', 'Mahwish', 'Rabia', 'Usamn'];
// for(let i=0; i<guest_list.length; i++{
//     console.log(' Respected Sir/Madam ' + guest_list [i] +'\nWe invited you for dinner tomorrow.\nThank You!');
//}
let not_present : string = 'Basit';
let new_guest : string = 'Imran';
guest_list[0] = new_guest;
for(let i=0; i < guest_list.length; i++ ){
    console.log(' Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you for dinner tomorrow.\nThank You!');
}
console.log(`Mr. ${not_present} will not be coming for dinner tomorrow.`);

guest_list.unshift('Diya', 'Laiba', 'Emaan');
for(let i=0; i < guest_list.length; i++ ){
    console.log(' Respected Sir/Madam ' + guest_list [i] + '\nwe invited you for dinner tomorrow.\nThank You!');
}