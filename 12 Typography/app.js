const outputDiv = document.querySelector('.text-container')

let charArray = ['B', 'i', 's', 'w', 'a', 's', 'h', ' ', 'D', 'h', 'u', 'n', 'g', 'a', 'n', 'a']; // Array containing the characters

let index = 0; // Initial index

function printCharacter() {
  if (index < charArray.length) {
    outputDiv.textContent += charArray[index]; // Append the character to the output div

    index++; // Increment the index

    setTimeout(printCharacter, 500); // Call the function recursively with a delay of 2000ms (2 seconds)
  }
}

printCharacter();