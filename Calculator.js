HTML:
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <link rel="stylesheet" href="CSS/style2.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

</head>
<body>
<script>
  let memory = 0;
  let currentDisplay = '';

  function appendToDisplay(value) {
    currentDisplay += value;
    document.getElementById('inp1').value = currentDisplay;
  }

  function clearDisplay() {
    currentDisplay = '';
    document.getElementById('inp1').value = currentDisplay;
  }

  function calculateResult() {
    try {
      currentDisplay = eval(currentDisplay).toString();
      document.getElementById('inp1').value = currentDisplay;
    } catch (e) {
      document.getElementById('inp1').value = 'Error';
    }
  }

  function calculate(operation) {
    try {
      let result = eval(operation.replace(/x/g, currentDisplay));
      currentDisplay = result.toString();
      document.getElementById('inp1').value = currentDisplay;
    } catch (e) {
      document.getElementById('inp1').value = 'Error';
    }
  }

  function memoryClear() {
    memory = 0;
  }

  function memoryRecall() {
    currentDisplay = memory.toString();
    document.getElementById('inp1').value = currentDisplay;
  }

  function memoryAdd() {
    memory += parseFloat(currentDisplay);
  }

  function memorySubtract() {
    memory -= parseFloat(currentDisplay);
  }

  function memoryStore() {
    memory = parseFloat(currentDisplay);
  }

  function randomNumber() {
    currentDisplay = Math.random().toString();
    document.getElementById('inp1').value = currentDisplay;
  }

  function toggleSign() {
    if (currentDisplay.startsWith('-')) {
      currentDisplay = currentDisplay.substring(1);
    } else {
      currentDisplay = '-' + currentDisplay;
    }
    document.getElementById('inp1').value = currentDisplay;
  }
</script>

<center>
  <div class="body">
    <div>
      <form>
        <input type="text" id="inp1">
      </form>
    </div>
    <div class="buttons">
      <button class="button" onclick="memoryClear()" id="store">MC</button>
      <button class="button" onclick="memoryRecall()" id="store1">MR</button>
      <button class="button" onclick="memoryAdd()" id="store2">M+</button>
      <button class="button" onclick="memorySubtract()" id="store3">M-</button>
      <button class="button" onclick="memoryStore()" id="store4">MS</button>


      <button class="button" onclick="randomNumber()">rand</button>
      <button class="button" onclick="calculate('x % y')">mod</button>
      <button class="button" onclick="calculate('Math.sin')">sin</button>
      <button class="button" onclick="calculate('Math.cos')">cos</button>
      <button class="button" onclick="calculate('Math.tan')">tan</button>
      <button class="button" onclick="calculate('1/Math.sin')">csc</button>


      <button class="button" onclick="calculate('1/Math.cos')">sec</button>
      <button class="button" onclick="calculate('1/Math.tan')">cot</button>
      <button class="button" onclick="calculate('mean')">mean</button>
      <button class="button" onclick="calculate('Math.exp')">exp</button>
      <button class="button" onclick="calculate('Math.log10')">log</button>



      <button class="button" onclick="calculate('Math.pow(x, 2)')">x^2</button>
      <button class="button" onclick="calculate('1/x')">1/x</button>
      <button class="button" onclick="calculate('Math.abs')">|x|</button>
      <button class="button" onclick="calculate('Math.pow(10, x)')">10^x</button>
      <button class="button" onclick="calculate('Math.exp(x)')">e^x</button>
      <button class="button" onclick="appendToDisplay('7')" id="num1">7</button>
      <button class="button" onclick="appendToDisplay('8')" id="num2">8</button>
      <button class="button" onclick="appendToDisplay('9')" id="num3">9</button>


      <button class="button" onclick="clearDisplay()">C</button>



      <button class="button" onclick="appendToDisplay('.')">.</button>
      <button class="button" onclick="appendToDisplay('e')">e</button>
      <button class="button" onclick="toggleSign()">+/-</button>
      <button class="button" onclick="appendToDisplay('4')" id="num4">4</button>
      <button class="button" onclick="appendToDisplay('5')" id="num5">5</button>
      <button class="button" onclick="appendToDisplay('6')" id="num7">6</button>
      <button class="button" onclick="appendToDisplay('(')">(</button>
      <button class="button" onclick="appendToDisplay(')')">)</button>
      <button class="button" onclick="appendToDisplay('v')">v</button>
      <button class="button" onclick="calculate('Math.pow(x, y)')">x^y</button>

      <button class="button" onclick="appendToDisplay('1')" id="num8">1</button>
      <button class="button" onclick="appendToDisplay('2')" id="num9">2</button>
      <button class="button" onclick="appendToDisplay('3')" id="num10">3</button>
      <button class="button" onclick="appendToDisplay('+')">+</button>
      <button class="button" onclick="appendToDisplay('-')">-</button>
      <button class="button" onclick="appendToDisplay('*')">*</button>
      <button class="button" onclick="appendToDisplay('/')">/</button>

      <button class="button" onclick="appendToDisplay('0')" id="num11">0</button>

      <button class="button" id=result onclick="calculateResult()">=</button>
</div>
   </div>
 </center>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>







CSS:
.body{
    border:5px solid black;
    width:700px;
    height:550px;
    margin-top:80px;
    background-color: black;
    border-radius: 10px;
    box-shadow: 20px 20px 20px gray;
}
#inp1{
    width: 100%;
    height: 90px;
    margin-bottom: 20px;
    text-align: right;
    font-size: 40px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(7, 2fr);
    gap: 10px;
}
.button {
    padding: 10px;
    font-size: 15px;
    width: 90px;
    height:50px;
    border: none;
    border-radius: 10px;
    background-color: dodgerblue;
    cursor: pointer;
    box-shadow: 4px 4px 4px gray;
}
.button:hover {
    background-color: #ddd;
}
#result{
    background-color: orangered;
}
#result:hover{
    background-color: lightgray;
}
#store,#store1,#store2,#store3,#store4{
    background-color: lightblue;
}
#num1, #num2, #num3, #num4, #num5, #num6, #num7, #num8,
#num9,#num10,#num11{
    background-color: floralwhite;
}
#num1:hover, #num2:hover, #num3:hover, #num4:hover, #num5:hover,
#num6:hover, #num7:hover, #num8:hover,
#num9:hover,#num10:hover,#num11:hover{
    background-color: lightgray;
}
#store:hover,#store1:hover,#store2:hover,#store3:hover,#store4:hover{
    background-color: lightgray;
}
