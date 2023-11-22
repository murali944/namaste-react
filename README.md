Namaste React 
*************

Know more about CDN 
know about Crossorigin keyword used in cdn links 

eg : 
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

Below command purpose :

npm
npm init
package.json

why we using caret symbol(^) and tilde(~) symbols in package.json 


Bundlers : which will pack all our html,css and JS files in to bundle 
Dev dependencies and normal dependencies

Webpack, parcel,veet etc are bundlers


Node_modules:
Meaning : we don't commit node_modules into git repository, then how those dependencies will be recreated while building code 

With help of package and package-lock.json files, we can recreate the node_modules using npm install

Transitive dependencies: we included Parcel in package.json, all the parcel required dependencies are call transitive dependencies.


Using Parcel :  
**************
npx parcel index.html

npm will install the dependencies

npx will execute the dependencies.

NOTE : using cdn links to bring the react into our application is not recommended

So, use npm install react
	npm install react-dom 
above command will download react and react-dom packages into node_modules


NOTE To remove App.js entry from package.json


Babel :
*******
Know more about attributes in babel


Extensions in vscode :

Better comments
Bracker Pair colorization
Prettier
ESlint

