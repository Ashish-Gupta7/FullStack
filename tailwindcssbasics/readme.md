# Tailwind CSS installation steps

1. install node.js
2. Run the following commands to install tailwindcss:
   - npm install -D tailwindcss postcss autoprefixer vite
   - npx tailwindcss init -p
3. install tailwind css intelisense extention
4. open tailwindcss.config.js and iske ander ek content naam se key hogi uski value me ye likhna hai =>    ["*"]
   iska mtlb ye hai ki jitni bhi files hai unme tailwindcss likha ho to usey chala do.
5. Add scripts in package.json file => 
    ```
    "scripts": {
        "start": "vite"
    },
    ```
6. create main.css file and link with html file and insert these links:
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
7. code ko run krne ke liye run this command => 
    ```
    npm run start
    or
    npm start
    ```
    when you are running this command you can see the output is =>

    ```
    > start
    > vite

    VITE v5.2.11  ready in 488 ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  press h + enter to show help
    ```
    then, you copy local link and paste it into your browser then you can see your website is live with tailwindcss.

8. when you want to upload this repo on github make sure tailwindcss cdn added and node_modules file deleted.
   abhi ke liye mujhe sirf yahi tarika pta hai jisse site ko github pr upload krke live kr skte hai.
