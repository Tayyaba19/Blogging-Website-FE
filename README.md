<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->




.home-container {
  position: relative;
  text-align: center;
  color: white;
}
.bg-img{
width: 100%;
height: 800px
}
/* Bottom left text */
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

/* Top left text */
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

/* Top right text */
.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

/* Bottom right text */
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}

.logo-name{
text-decoration: solid;
font-size: 45px;
color: #000000;
margin: 40px;
margin-top: 40px;
}
.logo{
  width: 100px;
  height: 100px;  
}
h1{
  margin: 0px;
  font-size: clamp(30px, 7vw, 70px);
  margin: 0px 0px 10px;
  font-weight: 600;
  color: rgb(217, 225, 232);
  line-height: 1.1;
}

.sidebarlistItem {
  display: inline-block;
  width: 50%;
  margin-top: 15px;
  cursor: pointer;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
}

*{
  font-family: "Josefin Sans", sans-serif;

}
/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
/* .header a.logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  cursor: pointer;
  /* font-weight: 14px; */


button.get-started {
  padding: 9px;
  background-color: black;
  color: white;
  font-size: 20px;
  border-color: black;
  border-radius: 8px;

  
}
/* Float the link section to the right */
.header-right {
  float: right;
}

/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  .header-right {
    float: none;
  }
}
.logo-img{
  width: 50px;
  height: 50px;
}
.text{
  padding: 0px 15px;
}
/* .section{

 background-color: white;
 display: flex ;
 justify-content: space-between;
 padding: 50px;
 width: 80%;
 height: 50%;
 margin: 0 auto; 
 margin-bottom: 40px;
} 
.section h1{
  padding-top: 150px;
  padding-bottom: 20px;
  margin:  0 auto;
  color: rgb(11, 11, 11);
}
.section img{
width: 300px;
float: right;
margin-left: 100px ;
/* margin:  0 auto; */
/* }
html{
  scroll-behavior: smooth;
}
#home{
margin-top: 0;
padding-bottom: 0;
}
*/ 

/* .container {
  width: 100%;
  height: 600px;
  padding-right: 50px;
  padding-left: 70px;
  padding-top: 130px ;
  padding-bottom: 100px;
  margin-right: auto;
  margin-left: auto;
} */
/* .row {
  color: #000000;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}
h1 span {
  display: inline-block;
  background-color: #170e13;
  color: #fff;
  border-radius: 8px;
  padding: 2px 20px;
  font-size: 40px;
  line-height: 50px;
}
.divv{
  /* margin-top: 300px; */
  /* width: 100%;
  height: 80px;
  background-color: black;
  color:white;
  text-align: center;
  padding-top: 20px;
} */

* {
  box-sizing: border-box;
}

.container {
  padding: 60px;
}

/* Clear floats */
.row:after {
  content: "";
  display: table;
  clear: both
}

/* 2/3 column */
.column-66 {
  float: left;
  width: 66.66666%;
  padding: 20px;
}

/* 1/3 column */
.column-33 {
  float: left;
  width: 33.33%;
  padding:10px;
}

/* Add responsiveness - make the columns appear on top of each other instead of next to each other on small screens */
@media screen and (max-width: 1000px) {
  .column-66,
  .column-33
     {
    width: 100%;
    text-align: center;
  }
}

.ii-img, .img-width{
height: 400px;
}
.container h1,p{
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;

}
hr{
  padding-top: 40px;
}
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding in columns */
.row1 {margin: 0 -5px;}

/* Clear floats after the columns */
.row1:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
} */

/* Responsive columns - one column layout (vertical) on small screens */
/* @media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 900px) {
    .column {
      width: 50%;
      display: block;
    margin-bottom: 20px;
    }
  }
} */

/* Create four equal columns that floats next to each other */
.column-1 {
  float: left;
  width: 25%;
}

/* Clear floats */
.row-1:after {
  content: "";
  display: table;
   clear: both;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 900px) {
  .column-1 {
    width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column-1 {
    width: 100%;
  }
}
.container h5{
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}
.LogInmain{
  position: relative;
  width: 1440px;
  height: 787px;
  
  background: #FFFFFF
}
.SignUpcontent{
  box-sizing: border-box;

  position: absolute;
  width: 682px;
  height: 787px;
  left: 914px;
  top: 0px;

  background: #D9D9D9;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
}

.heading{
  position: absolute;
  width: 431px;
  height: 59px;
  left: 261px;
  top: 174px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
}

.inputEmail{
  position: absolute;
  width: 470px;
  height: 64px;
  left: 152px;
  top: 263px;
  border: 1px solid #000000;
  background: #EDE4E4;

  /* position: absolute;
  width: 88px;
  height: 42px;
  left: 132px;
  top: 270px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 42px;

  color: #000000; */
}

.inputUsername{
  position: absolute;
  width: 470px;
  height: 64px;
  left: 152px;
  top: 351px;
  background: #EDE4E4;
}

.RememberCheck{
  position: absolute;
  width: 23px;
  height: 24px;
  left: 171px;
  top: 447px;
  background: #D9D9D9;
}
.RememberText{
  position: absolute;
  width: 206px;
  height: 36px;
  left: 201px;
  top: 442px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
}

.Forget{
  position: absolute;
  width: 254px;
  height: 36px;
  left: 423px;
  top: 442px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
}

.SignInButton{
  position: absolute;
  width: 143px;
  height: 57px;
  left: 304px;
  top: 506px;
  background: #D9D9D9;
}

.SignUpcontent .Hello{
      position: absolute;
      width: 265px;
      height: 42px;
      left: 269px;
      top: 257px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 35px;
      line-height: 42px;
      color: #000000;
}

.SignUpcontent .Para{
  position: absolute;
  width: 385px;
  height: 108px;
  left: 208px;
  top: 325px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  color: #000000;
}

.SignUpcontent .ForSignUp .SignUpLink{
  position: absolute;
  width: 120px;
  height: 42px;
  left: 316px;
  top: 465px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100;
  font-size: 25px;
  line-height: 42px;
  color: #000000;
}
