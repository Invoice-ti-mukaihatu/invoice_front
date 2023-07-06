import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { Test } from "./pages/test";
import { Unko } from "./pages/unko";
import { Home } from "./pages/home";
import { TestUser } from "./pages/testUser";

export const App = () => {
    return (
        <BrowserRouter>
            {/* <NavigationLinks /> */}

            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/test" Component={Test} />
                <Route path="/unko" Component={Unko} />
                <Route path="/testUser" Component={TestUser} />
            </Routes>
        </BrowserRouter>
    );
};

// const NavigationLinks = () => {
//     const location = useLocation();

//     return (
//         <div>
//             {location.pathname !== "/test" && (
//                 <Link to="/test">
//                     <button>testページへ</button>
//                 </Link>
//             )}
//             <br />
//             {location.pathname !== "/unko" && (
//                 <Link to="/unko">
//                     unkoページへ
//                 </Link>
//             )}
//             <br />
//             {location.pathname !== "/testUser" && (
//                 <Link to="/testUser">
//                     testUserページへ
//                 </Link>
//             )}
//         </div>
//     );
// };
