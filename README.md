# Vegetable price & volume data over 522 Wednesdays
The scripts used to gather data from USDA market news -- for econometric analysis in the MSc thesis http://edepot.wur.nl/441511


# Notes to self on how to set it all up
Step 1: finding out how the website wants to get your request (aka sending a single request and extracting the data out of the response)  
Step 2: saving the part of the data you want in a format you can use  
Step 3: automating the process

## Preliminary:  
Make directory: `echo.> C:\Users\Dana\Desktop\Thesis\522-wednesdays`

## Step 1: Get data from the website to print out in the command line  
1. `npm init -y` creates C:\Users\Dana\Desktop\Thesis\Data\package.json  
2. create index.js with `echo.> index.js` (note: you can also do echo hi)  
3. now install the npm module called request, with `npm i request --save` -- that will automatically save it as a dependency in the package.json  
4. Paste the text from https://www.npmjs.com/package/request into index.js  
5. `node index.js` to run it  
6. `node index.js > results` to save the results in a new file

## Step 2: Data extraction part  
Find the text I want, make a regular expression to call it.  
Useful websites to learn how to write a regex:
- https://ryanstutorials.net/regular-expressions-tutorial
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
- https://www.w3schools.com/js/js_loop_for.asp