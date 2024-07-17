import{j as e,u as i,r as a}from"./index-CT5tn-Fk.js";const c="/Product-listing-with-cart/assets/icon-order-confirmed-Cs-h_Qaw.svg";function m({cartItem:s}){const d=s.thumbnail,t=s.name,r=s.price,o=s.count;return e.jsxs("div",{className:"flex flex-row items-center justify-between mt-4 px-2 sm:px-4 pb-4 border-b",children:[e.jsxs("div",{className:"flex flex-row items-center gap-4",children:[e.jsx("img",{src:d,alt:t,className:"w-10 sm:w-14 rounded-md"}),e.jsxs("div",{className:"flex flex-col justify-between gap-1 text-sm sm:gap-2",children:[e.jsx("p",{className:"font-semibold text-rose900 max-w-[70%] text-ellipsis overflow-hidden whitespace-nowrap sm:max-w-fit",children:t}),e.jsxs("p",{children:[e.jsxs("span",{className:"text-redGiven font-semibold mr-4",children:[o,"x"]}),e.jsxs("span",{className:"text-rose900 font-light",children:["@ $",r.toFixed(2)]})]})]})]}),e.jsxs("p",{className:"font-semibold text-rose900",children:["$",(o*r).toFixed(2)]})]})}function f(){const{cartItems:s,totalOrderPrice:d,setTotalOrderPrice:t,setCartItems:r,setOrderConfirmed:o}=i(),n=()=>{r([]),t(0),o(!1)};return a.useEffect(()=>(window.scrollTo({top:0,behavior:"smooth"}),document.querySelector("body").classList.add("overflow-y-hidden"),()=>{document.querySelector("body").classList.remove("overflow-y-hidden")}),[]),e.jsx("div",{className:"absolute top-0 left-0 bottom-0 right-0 w-full py-5 bg-black bg-opacity-30 min-h-[100vh] flex flex-col justify-center items-center overflow-auto",children:e.jsxs("div",{className:"fixed bottom-0 sm:static bg-rose50 p-4 w-[550px] max-w-[100vw] rounded-bl-none rounded-br-none rounded-xl mt-32 sm:px-8 sm:rounded-br-xl sm:rounded-bl-xl",children:[e.jsx("img",{src:c,alt:"Order confirmed"}),e.jsx("p",{className:"mt-6 font-bold text-rose900 text-4xl",children:"Order Confirmed"}),e.jsx("p",{className:"mt-3 text-rose500 font-semibold",children:"We hope you enjoy your food!"}),e.jsxs("div",{className:"bg-rose100 rounded-lg p-2 mt-6",children:[e.jsx("div",{className:"max-h-[300px] overflow-auto",children:s.map(l=>e.jsx(m,{cartItem:l},l.name))}),e.jsxs("div",{className:"flex flex-row items-center justify-between m-4 my-6 text-rose900",children:[e.jsx("span",{className:"text-sm",children:"Order Total"}),e.jsxs("span",{className:"font-extrabold text-2xl",children:["$",d.toFixed(2)]})]})]}),e.jsx("button",{className:"bg-redGiven w-full py-3 px-2 rounded-3xl text-rose50 font-semibold mt-8 mb-4 hover:opacity-80",onClick:n,children:"Start New Order"})]})})}export{f as default};
//# sourceMappingURL=OrderConfirmedWindow-Crjdp1UX.js.map
