document.addEventListener("scroll", function() {
    let e = document.getElementById("navbar");
    const n = window.scrollY,
        o = window.location.pathname === "/";
    window.screen.width >= 1e3 && o ? n >= 810 ? e.classList.add("notinvi") : e.classList.remove("notinvi") : n >= 50 ? e.classList.add("notinvi") : e.classList.remove("notinvi")
});
document.addEventListener("click", function(e) {
    const n = document.querySelector("details");
    n.contains(e.target) || n.removeAttribute("open")
});
window.addEventListener("scroll", function() {
    document.querySelector("details").removeAttribute("open")
});
document.addEventListener("keydown", function(e) {
    const n = document.querySelector("details");
    e.key === "Escape" && n.removeAttribute("open")
});
const t = document.querySelector(".daisy-drawer-toggle");
document.addEventListener("keydown", function(e) {
    e.key === "Escape" && (t.checked = !1)
});
document.addEventListener("click", function(e) {
    e.target instanceof HTMLAnchorElement && (t.checked = !1)
});