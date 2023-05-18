function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
// 1) function exists
// 2) uses the default activity 'roller-skate' when no arguments are passed
// 3) permits the default activity to be overriden

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
// 4) function exists
// 5) uses the default activity 'go to the office' when no arguments are passed
// 6) permits the default activity to be overriden
function wrapAdjective(symbol){
    return function innerFunc(def = "special"){
        return `You are ${symbol}${def}${symbol}!`
    }
}
// 7) function exists
// 8) when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
// 9) when initialized with '||' creates a function that, when called, wraps an adjective in a highlight

