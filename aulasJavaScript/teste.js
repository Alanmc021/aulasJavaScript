var weeklyPass = 'darlene';
var weekDay = 'friday';
var currentPass;

switch (weekDay) {
    case 'friday':
        currentPass = weeklyPass + 'frd';
        break;
    case 'saturday':
        currentPass = weelyPass +  'stdr';
        break;
    case 'sunday':
        currentPass = weeklyPass + 'snd';
        break;
    case 'monday': 
        currentPass = weeklyPass + 'mnd';
        break;
    case 'tuesday':
        currentPass = weeklyPass + 'tsd';
        break;
    case 'wednesday':
        currentPass = weeklyPass + 'wdnsd';
        break;
    case 'thursday':
        currentPass = weeklyPass + 'thrsd';
        break; 
}
console.log(currentPass);