[
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    " birthday ": '2016-03-18T00:00:00',
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    " birthday ": '1991-02-11T00:00:00',
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    " birthday ": '1984-04-17T00:00:00',
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    " birthday ": '1994-04-17T00:00:00',
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
]

let getNubers = (string) => {
  let number = [];
  for (let i=0; i < string.length; i++) {
    if (string[i] >=0 || string[i] <= 0) {
      numbers.push(string[i]);
    }
  }
  return number;
};

function findTypes() {
    let ob = {}
    for (let i = 0; i < arguments.length; i++) {
        if (ob[typeof arguments[i]]) {
            ob[typeof arguments[i]] += 1
        } else {
            ob[typeof arguments[i]] = 1
        }
    }
    return ob;
}

function executeforEach(ar, func) {
    for (let i = 0; i < ar.length; i++) {
        func(ar[i], i, ar);
    }
}

function mapArray(ar, func) {
    let newAr = [];
    executeforEach(arr, function(one, i, ar) {
        newAr.push( func(one, i, ar) )
    });
    return newAr;
}

function filterArray(ar, func) {
    let newAr = [];
    executeforEach(ar, function(one, i, ar) {
        if(func(one, i, ar)) {
            newArr.push(one)
        }
    });
    return newAr;
}

function showFormattedDate(day) {
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `Date: ${month[day.getMonth()]} ${day.getDate()} ${day.getFullYear()}`
}

function canConvertToDate(str) {
    return !!Date.parse(str);
}

function daysBetween(day1, day2) {
    const inDay = 86400000;
    return Math.round((+day2 - +day1) / inDay)
}

function getAmountOfAdultPeople (ar) {
    let count = 0;
    const inYear = 365;
    const age = 18;
    executeforEach(ar, function(one) {
        if (daysBetween(new Date(one['birthday']), new Date()) / inYear > age) {
            count += 1;
        }
    })
    return count;
}

function keys(obj) {
    let ar = [];
    for(let key in obj) {
        if ({}.hasOwnProperty.call(obj, key)) {
            ar.push(key)
        }
    }
    return ar;
}

function values(obj) {
    let ar = [];
    for(let key in obj) {
        if ({}.hasOwnProperty.call(obj, key)) {
            ar.push(obj[key])
        }
    }
    return ar;
}
