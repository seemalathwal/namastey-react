let heading =  React.createElement('div',{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"we are here h1"),React.createElement("h2",{},"we are here h2")]));
console.log(heading); ////object
let root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(heading);