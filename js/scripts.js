// Utitliy logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

// Business Logic

/* function topThree(word, text) {
  const wordArray = text.split(" ");
  let counter = 0;
  wordArray.forEach(function(element) {
    if (element === word) {
      counter ++;
      if (wordArray.length === counter) {
        console.log(word + ": " + counter);
      }
    }
  });
}; 
element === element.inside(wordArray) && element === element.array[pos, -1]

else if
counter ++ 
return value 
*/
function topThree(text) {
  let wordArray = text.split(" ");
  let sortArray = wordArray.sort();
  let counter = 0;
  word = wordArray[0]
  resultArray = []

  sortArray.forEach(function(element) {
    if (element === word) {
      counter ++;
      } else {
        resultArray.push(word + ": " + counter)
        word = element
        counter = 1 
    }
  });
  resultArray.push(word + ": " + counter)
  console.log(resultArray)
  let reverseArray = resultArray.reverse();
  console.log(reverseArray)
  let numSortArray = reverseArray.sort();
  console.log(numSortArray)
  let finalArray = numSortArray.reverse();
  console.log(finalArray)
};

sortArray.forEach(function(element) {
  if (element === word) {
    counter ++;
    } else {
      word = element
      counter = 1
  }


function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text))  {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}
// UI Logic

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});


















/*
Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

<!-- Our second test. -->
Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(word) {
    wordCount++;
  });
  return wordCount;
}
*/

// function wordCounter(text) {

  // const loopCount = text.split(" ");
  // let counter = 0;
  // loopCount.forEach(function(element){
  //   counter ++;
  // });
  // console.log(counter);
  // };
  

  // $(document).ready(function() {
  
  // });