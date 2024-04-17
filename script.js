// Menu data structure
var menuLinks = [
    { text: "about", href: "/about" },
    { text: "catalog", href: "/catalog" },
    { text: "orders", href: "/orders" },
    { text: "account", href: "/account" },
];

const mainEl = document.querySelector("main");
const topMenuEl = document.getElementById("top-menu");

mainEl.style.backgroundColor = "var(--main-bg)";
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

mainEl.innerHTML = "<h1>Dom manipulation</h1>";

mainEl.classList.add("flex-ctr");
topMenuEl.classList.add("flex-around");
console.log(document.body);

let arr = ["this", "this", "this"];

menuLinks.forEach((a) => {
    topMenuEl
        .appendChild(document.createElement("a"))
        .setAttribute("href", a.href);
    const anchors = document.querySelectorAll("a");
    for (let i = 0; i < anchors.length; i++) {
        for (x of anchors) {
            anchors[i].textContent = menuLinks[i].text;
        }
    }
});
