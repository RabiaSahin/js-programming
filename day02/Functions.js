/**
 * This function is used to display greetings to the console.
 * It prints two messages: "Hello Programmers" and "Welcome to Playwright Automation".
 *
 * @returns {void} This function does not return any value.
 */
function greetings() {
    console.log("Hello Programmers");
    console.log("Welcome to Playwright Automation");
  }
  
  greetings();
  greetings();
  
  console.log("----------------------------------------------------------------");
  
  /**
   * This function is used to display a personalized greeting to the console.
   * If no name is provided, it defaults to "Adam".
   *
   * @param {string} [personName="Adam"] - The name of the person to be greeted.
   * @returns {void} This function does not return any value. It only prints a greeting to the console.
   */
  function displayName(personName = "Adam") {
    console.log(`The name of the person is ${personName}`);
  }
  
  displayName();
  displayName("John Doe");
  
  
  console.log("----------------------------------------------------------------");
  
  /**
   * This function is used to add two numbers together.
   *
   * @param {number} num1 - The first number to be added.
   * @param {number} num2 - The second number to be added.
   * @returns {number} The sum of the two input numbers.
   */
  function addNumbers(num1, num2) {
    return num1 + num2;
  }
  
  
  result = addNumbers(10, 20);
  console.log(result);