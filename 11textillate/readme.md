# Go to this website -> (textillate js)[https://textillate.js.org/]

1. click on Download Github
2. find -> or pass in options on initialization (see full list of options below):

   ```
   $('.tlt').textillate({ in: { effect: 'rollIn' } });
   ```

3. now in script.js ->
   ```
   gsap.from("h1", {
      onStart: function () {
        $("h1").textillate({ in: { effect: "rollOut" } });
      },
   });
   ```

- "rollOut", ye effect name hai jo textillate js yaha se dekh skte hai.
- "h1", jis text ko animate krna hota hai.
