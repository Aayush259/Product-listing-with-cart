import{j as e,u as p,r as a,a as j,L as b}from"./index-OYO9wQhX.js";const C="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='21'%20height='20'%20fill='none'%20viewBox='0%200%2021%2020'%3e%3cg%20fill='%23C73B0F'%20clip-path='url(%23a)'%3e%3cpath%20d='M6.583%2018.75a1.25%201.25%200%201%200%200-2.5%201.25%201.25%200%200%200%200%202.5ZM15.334%2018.75a1.25%201.25%200%201%200%200-2.5%201.25%201.25%200%200%200%200%202.5ZM3.446%201.752a.625.625%200%200%200-.613-.502h-2.5V2.5h1.988l2.4%2011.998a.625.625%200%200%200%20.612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625%200%200%200%20.61-.49l1.417-6.385h-1.28L16.083%2010H5.096l-1.65-8.248Z'/%3e%3cpath%20d='M11.584%203.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M.333%200h20v20h-20z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",y="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='10'%20height='10'%20fill='none'%20viewBox='0%200%2010%2010'%3e%3cpath%20fill='%23fff'%20d='M10%204.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z'/%3e%3c/svg%3e",N="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='10'%20height='2'%20fill='none'%20viewBox='0%200%2010%202'%3e%3cpath%20fill='%23fff'%20d='M0%20.375h10v1.25H0V.375Z'/%3e%3c/svg%3e";function I({addedInCartCount:s,addItemToCart:r,removeItemFromCart:o}){return e.jsx(e.Fragment,{children:s<=0?e.jsxs("button",{className:"flex items-center min-w-36 gap-2 border border-rose400 py-3 px-5 mx-auto -translate-y-1/2 rounded-3xl bg-rose50 hover:text-redGiven hover:border-redGiven",onClick:r,children:[e.jsx("img",{src:C,alt:"Add to cart"}),e.jsx("span",{children:"Add to Cart"})]}):e.jsxs("div",{className:"flex items-center justify-between w-36 py-3 px-5 mx-auto -translate-y-1/2 rounded-3xl bg-redGiven border border-redGiven text-rose50",children:[e.jsx("button",{className:"flex items-center justify-center rounded-full border border-rose50 h-5 w-5 p-1 hover:opacity-65",onClick:o,children:e.jsx("img",{src:N,alt:"Decrease quantity",className:"w-full"})}),e.jsx("span",{children:s}),e.jsx("button",{className:"flex items-center justify-center rounded-full border border-rose50 h-5 w-5 p-1 hover:opacity-65",onClick:r,children:e.jsx("img",{src:y,alt:"Increase quantity",className:"w-full"})})]})})}function D({dessertItem:s}){const r=s.name,o=s.category,i=s.price,d=s.image.thumbnail,{cartItems:l,setCartItems:n}=p(),[c,m]=a.useState(0);a.useEffect(()=>{[...l].findIndex(x=>x.name===r)<0&&m(0)},[l]),a.useEffect(()=>{const t=[...l],h=t.findIndex(x=>x.name===r);h>=0?t[h]={name:r,price:i,count:c,thumbnail:`.${d}`}:c>0&&t.push({name:r,price:i,count:c,thumbnail:`.${d}`}),n(t)},[c]);const f=t=>t>=1024?`.${s.image.desktop}`:t>=768?`.${s.image.tablet}`:`.${s.image.mobile}`,[u,g]=a.useState(f(window.innerWidth));a.useEffect(()=>{const t=()=>{g(f(window.innerWidth))};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const v=()=>{m(t=>t+1)},w=()=>{m(t=>t-1)};return e.jsxs("div",{className:"w-52 max-w-[90vw] mx-4 my-4",children:[e.jsx("img",{src:u,alt:r,className:`rounded-lg w-full border-2 ${c>0?"border-redGiven":"border-transparent"}`}),e.jsx(I,{addedInCartCount:c,addItemToCart:v,removeItemFromCart:w}),e.jsxs("div",{children:[e.jsx("p",{className:"text-rose500 text-sm -mt-2",children:o}),e.jsx("p",{className:"text-rose900 font-semibold",children:r}),e.jsxs("p",{className:"text-redGiven font-semibold",children:["$",i.toFixed(2)]})]})]})}function E(){return e.jsxs("div",{className:"sm:w-[40vw] w-[100vw] text-redGiven font-semibold",children:[e.jsx("p",{className:"text-2xl mt-8",children:"Something went wrong"}),e.jsx("p",{className:"text-xl",children:"Try refreshing the page!!"})]})}function G(){const{dessertData:s,setDessertData:r}=j(),[o,i]=a.useState(!0),[d,l]=a.useState(!1);return a.useEffect(()=>{fetch("/Product-listing-with-cart/data.json").then(n=>n.json()).then(n=>{r(n),i(!1)}).catch(n=>{console.log(n),l(!0),i(!1)})},[]),e.jsxs("div",{className:"max-w-[750px]",children:[e.jsx("h1",{className:"ml-14 mr-14 mb-3 text-rose900 text-3xl font-bold",children:"Desserts"}),e.jsx("div",{className:"flex flex-wrap relative justify-center min-w-10",children:o?e.jsx(b,{height:"100vh"}):d?e.jsx(E,{}):s.map(n=>e.jsx(D,{dessertItem:n},n.name))})]})}export{G as default};
