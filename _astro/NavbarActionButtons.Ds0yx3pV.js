import {
    j as e
} from "./jsx-runtime.A3Yln4pu.js";
import {
    k as r,
    l as o,
    i as n,
    m as a
} from "./index.3g3TFjd1.js";
import "./index.CJfaO8Nv.js";
import "./_commonjsHelpers.Cpj98o6Y.js";
import "./final-judges.iqngaDGA.js";
let i = "false";
const b = () => {
    let t = r(),
        s = o();
    return (t || s) && n() ? e.jsxs(e.Fragment, {
        children: [e.jsx("a", {
            className: "daisy-btn px-4 sm:px-6 py-2 border border-orange-1 bg-transparent text-white  text-center hover:bg-white hover:text-[#000000ca] ms-4 max-sm:ms-2 font-medium",
            onClick: a,
            children: "Sign out"
        }), e.jsx("a", {
            className: "daisy-btn px-4 sm:px-6 py-2 border-none bg-orange-1 text-[#000000]  text-center hover:bg-white hover:text-[#000000ca] ms-4 max-sm:ms-2 font-medium",
            href: `${t?"/dashboard":"/judge/dashboard"}`,
            children: "Dashboard"
        })]
    }) : e.jsxs(e.Fragment, {
        children: [e.jsx("a", {
            className: "daisy-btn px-4 sm:px-6 py-2 border border-none bg-orange-1 text-black text-center hover:bg-white hover:text-[#000000ca] ms-4 max-sm:ms-2 font-medium",
            href: "/login",
            children: "Log in"
        }), i === "true"]
    })
};
export {
    b as NavbarActionButtons
};