module.exports = [
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/app/Utilities/GetMyToken.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0006d5513570e8170bf74c742cf75aa4d77a066a61":"default"},"",""] */ __turbopack_context__.s([
    "default",
    ()=>GetMyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$jwt$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/jwt/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function GetMyToken() {
    try {
        const cookieStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        const allCookies = cookieStore.getAll();
        // جربي ترتيب الأولويات بالشكل ده
        const sessionCookie = allCookies.find((c)=>c.name === 'next-auth.session-token')?.value || allCookies.find((c)=>c.name === '__Secure-next-auth.session-token')?.value;
        if (!sessionCookie) {
            console.warn('No session cookie found');
            return null;
        }
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$jwt$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decode"])({
            token: sessionCookie,
            secret: process.env.NEXTAUTH_SECRET
        });
        return data?.token ?? null;
    } catch (err) {
        console.error('Error in GetMyToken:', err);
        return null;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    GetMyToken
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(GetMyToken, "0006d5513570e8170bf74c742cf75aa4d77a066a61", null);
}),
"[project]/src/lib/services/cart.services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60e93c4ea3ef10ff9fcfd2c421d70ee0e8b9aa66aa":"addToCart"},"",""] */ __turbopack_context__.s([
    "addToCart",
    ()=>addToCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
async function addToCart(productId, token) {
    if (!token) {
        console.error("No token found, cannot add to cart");
        return;
    }
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/cart', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            token
        },
        body: JSON.stringify({
            productId
        })
    });
    const data = await res.json();
    if (data.status === 'success') return data;
    console.log('error');
} // export async function getLoggedCart() {
 //     const token = await GetMyToken();
 //     const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
 //         method: 'GET',
 //         headers: {
 //             token: token ? String(token) : "",
 //         },
 //     });
 //     const data = await res.json();
 //     if (data.status === 'success') return data;
 //     console.log('error');
 // }
 // export async function getLoggedCart() {
 //   const token = localStorage.getItem('token'); // مؤقت لغاية ما نرجع system login مضبوط
 //   if (!token) return;
 //   const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
 //     method: 'GET',
 //     headers: { token },
 //     cache: 'no-store',
 //   });
 //   const data = await res.json();
 //   if (data.status === 'success') return data;
 //   console.log('error', data);
 // }
 // export async function deleteSpecificItem(productId: string) {
 //     const token = await GetMyToken();
 //     const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
 //         method: 'DELETE',
 //         headers: {
 //             token: token ? String(token) : "",
 //         },
 //     });
 //     const data = await res.json();
 //     if (data.status === 'success') return data;
 //     console.log('error');
 // }
 // export async function UpdateSpecificItem({ productId, count }: { productId: string, count: number }) {
 //     const token = await GetMyToken();
 //     const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
 //         method: 'PUT',
 //         headers: {
 //             "Content-Type": "application/json",
 //             token: token ? String(token) : "",
 //         },
 //         body: JSON.stringify({ productId, count }),
 //     });
 //     const data = await res.json();
 //     if (data.status === 'success') return data;
 //     console.log('error');
 // }
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    addToCart
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addToCart, "60e93c4ea3ef10ff9fcfd2c421d70ee0e8b9aa66aa", null);
}),
"[project]/.next-internal/server/app/Products/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/Utilities/GetMyToken.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/services/cart.services.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Utilities$2f$GetMyToken$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Utilities/GetMyToken.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$cart$2e$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/cart.services.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/.next-internal/server/app/Products/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/Utilities/GetMyToken.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/services/cart.services.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0006d5513570e8170bf74c742cf75aa4d77a066a61",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Utilities$2f$GetMyToken$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "60e93c4ea3ef10ff9fcfd2c421d70ee0e8b9aa66aa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$cart$2e$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addToCart"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$Products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$Utilities$2f$GetMyToken$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$services$2f$cart$2e$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/Products/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/Utilities/GetMyToken.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/services/cart.services.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Utilities$2f$GetMyToken$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Utilities/GetMyToken.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$cart$2e$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/cart.services.ts [app-rsc] (ecmascript)");
}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/services/product.services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllProduct",
    ()=>getAllProduct
]);
async function getAllProduct() {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/products');
    // console.log(res)
    if (res.ok) {
        const data = await res.json();
        return data;
    } else {
        throw new Error('not found');
    }
}
}),
"[project]/src/app/_components/Product/Product_bridge.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/_components/Product/Product_bridge.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/_components/Product/Product_bridge.tsx <module evaluation>", "default");
}),
"[project]/src/app/_components/Product/Product_bridge.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/_components/Product/Product_bridge.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/_components/Product/Product_bridge.tsx", "default");
}),
"[project]/src/app/_components/Product/Product_bridge.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Product$2f$Product_bridge$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/_components/Product/Product_bridge.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Product$2f$Product_bridge$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/_components/Product/Product_bridge.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Product$2f$Product_bridge$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/Products/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/products/page.tsx
__turbopack_context__.s([
    "default",
    ()=>ProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$product$2e$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/product.services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Product$2f$Product_bridge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/_components/Product/Product_bridge.tsx [app-rsc] (ecmascript)");
;
;
;
async function ProductPage() {
    const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$product$2e$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllProduct"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Product$2f$Product_bridge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            data: data
        }, void 0, false, {
            fileName: "[project]/src/app/Products/page.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/Products/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
} //  {
 //           "sold": 20692,
 //           "images": [
 //               "https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg",
 //               "https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-2.jpeg",
 //               "https://ecommerce.routemisr.com/Route-Academy-products/1680403397483-3.jpeg",
 //               "https://ecommerce.routemisr.com/Route-Academy-products/1680403397485-4.jpeg"
 //           ],
 //           "subcategory": [
 //               {
 //                   "_id": "6407f1bcb575d3b90bf95797",
 //                   "name": "Women's Clothing",
 //                   "slug": "women's-clothing",
 //                   "category": "6439d58a0049ad0b52b9003f"
 //               }
 //           ],
 //           "ratingsQuantity": 18,
 //           "_id": "6428ebc6dc1175abc65ca0b9",
 //           "title": "Woman Shawl",
 //           "slug": "woman-shawl",
 //           "description": "Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen",
 //           "quantity": 225,
 //           "price": 191,
 //           "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg",
 //           "category": {
 //               "_id": "6439d58a0049ad0b52b9003f",
 //               "name": "Women's Fashion",
 //               "slug": "women's-fashion",
 //               "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
 //           },
 //           "brand": {
 //               "_id": "64089bbe24b25627a253158b",
 //               "name": "DeFacto",
 //               "slug": "defacto",
 //               "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
 //           },
 //           "ratingsAverage": 4.8,
 //           "createdAt": "2023-04-02T02:43:18.400Z",
 //           "updatedAt": "2025-09-21T19:16:15.979Z",
 //           "id": "6428ebc6dc1175abc65ca0b9"
 //       },
}),
"[project]/src/app/Products/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/Products/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d8c7fd71._.js.map