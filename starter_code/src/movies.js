/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

/*function calculateAverageMovieRate (anArr) {
    sumRating = 0;
    for (let i in anArr) {
        anArr
    }
}*/

function calculateAverageMovieRate(anArr) {
        sumRating = anArr.reduce((accumulator, value, index, originalArray) => {
        let avg = value.rate
        return accumulator + avg
    }, 0);
    return sumRating / anArr.length
}

// Iteration 2: Drama movies - Get the average of Drama Movies

/*function calculateAverageDramaRate(anArr) {
    const filterDrama = anArr.filter(value, index, originalArray) => {
        if (anArr.genre[index] === 'Drama') {
        return true    
        }
    }*/

function calculateAverageDramaRate(anArr) {
    let newArray = anArr.filter(value => {
        return value.genre.includes('Drama')
    }); if (newArray.length === 0) {
      return 0
    } else {
    return calculateAverageMovieRate(newArray)
}
}


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear (anArr) {
    return anArr.sort((a, b) => {
      if (a.year > b.year) {
          return 1;
        } else if (a.year < b.year) {
          return -1;
        } else {
        if (a.title > b.title) {
            return 1;
          } else if (a.title < b.title) {
            return -1;
        }
        }
})
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function countSpielbergDramaMovies (anArr) {
    let newArray = anArr.filter(value => {
        return value.genre.includes('Drama') && value.director.includes("Steven Spielberg")
    }); if (newArray.length === 0) {
      return 0
    } else {    
    return newArray.length
}
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

 
function orderAlphabetically(arr) {
    let sorted20s = [...arr]
    let finalList = []
    sorted20s = sorted20s.sort((a,b) =>{
        if (a.title > b.title) {
          return 1;
        } else if (a.title < b.title) {
          return -1;
        }
    })
        sorted20s = sorted20s.slice(0,20)
    for (let key in sorted20s) {
     // console.log(sorted20s[key].title)
        finalList.push(sorted20s[key].title)
    }
    return finalList
}



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) { 
    let cloneArr = [...arr]
    let turnHours = cloneArr.map((value, index) => {
  if (cloneArr[index].duration.includes('h') && cloneArr[index].duration.includes('m')) {
    let currentStringMin = cloneArr[index].duration.substring(cloneArr[index].duration.indexOf(' '),  cloneArr[index].duration.indexOf('m'))
    let currentStringHour = cloneArr[index].duration.substring(0,  cloneArr[index].duration.indexOf('h'))
         currentStringHour = parseInt(currentStringHour)
         currentStringMin = parseInt(currentStringMin)
    let durationValue = (currentStringHour * 60) + currentStringMin
    cloneArr[index].duration = durationValue
  } else if (cloneArr[index].duration.includes('h')) {
    currentStringHour = cloneArr[index].duration.substring(0,  cloneArr[index].duration.indexOf('h'))
    currentStringHour = parseInt(currentStringHour)
    durationValue = (currentStringHour * 60)
    cloneArr[index].duration = durationValue
  } else {
  cloneArr[index].duration = parseInt(cloneArr[index].duration)
}
}
)
return cloneArr
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
