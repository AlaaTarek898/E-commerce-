(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/services/brand.services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBrand",
    ()=>getBrand
]);
async function getBrand() {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/brands");
    const data = await res.json();
    if (data) {
        return data.data;
    } else {
        console.log('error');
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/services/category.services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllCategories",
    ()=>getAllCategories
]);
async function getAllCategories() {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/categories');
    // console.log(res)
    if (res.ok) {
        const data = await res.json();
        return data;
    } else {
        throw new Error('not found');
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/_components/Product/FilterProduct.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FilterProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/InputLabel/InputLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/FormControl/FormControl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Select/Select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$brand$2e$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/brand.services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$category$2e$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/category.services.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function FilterProduct(param) {
    let { onFilter } = param;
    _s();
    const [brands, setBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedBrand, setSelectedBrand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedSort, setSelectedSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilterProduct.useEffect": ()=>{
            async function fetchData() {
                var _catRes_data;
                const brandRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$brand$2e$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrand"])();
                if ((brandRes === null || brandRes === void 0 ? void 0 : brandRes.length) > 0) setBrands(brandRes);
                const catRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$category$2e$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllCategories"])();
                if ((catRes === null || catRes === void 0 ? void 0 : (_catRes_data = catRes.data) === null || _catRes_data === void 0 ? void 0 : _catRes_data.length) > 0) setCategories(catRes.data);
            }
            fetchData();
        }
    }["FilterProduct.useEffect"], []);
    const handleChangeBrand = (event)=>{
        const value = event.target.value;
        setSelectedBrand(value);
        onFilter({
            brand: value,
            category: selectedCategory
        });
    };
    const handleChangeCategory = (event)=>{
        const value = event.target.value;
        setSelectedCategory(value);
        onFilter({
            brand: selectedBrand,
            category: value
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6 md:flex-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-11/12 md:w-3/12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        minWidth: 120,
                        marginBottom: 4
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        fullWidth: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                id: "brand-select-label",
                                children: "Filter By Brand"
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                labelId: "brand-select-label",
                                id: "brand-select",
                                value: selectedBrand,
                                label: "Brand",
                                onChange: handleChangeBrand,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        value: "",
                                        children: "All"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    brands.map((ele)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            value: ele.name,
                                            children: ele.name
                                        }, ele._id, false, {
                                            fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-11/12 md:w-3/12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        minWidth: 120,
                        marginBottom: 4
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        fullWidth: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                id: "category-select-label",
                                children: "Filter By Category"
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                labelId: "category-select-label",
                                id: "category-select",
                                value: selectedCategory,
                                label: "Category",
                                onChange: handleChangeCategory,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        value: "",
                                        children: "All"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    categories.map((ele)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            value: ele.name,
                                            children: ele.name
                                        }, ele._id, false, {
                                            fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-11/12 md:w-3/12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        minWidth: 120,
                        marginBottom: 4
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        fullWidth: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                id: "sort-select-label",
                                children: "Sort By Price"
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                labelId: "sort-select-label",
                                id: "sort-select",
                                value: selectedSort,
                                label: "Sort",
                                onChange: (e)=>{
                                    const value = e.target.value;
                                    setSelectedSort(value);
                                    onFilter({
                                        brand: selectedBrand,
                                        category: selectedCategory,
                                        sort: value
                                    });
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        value: "",
                                        children: "Default"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        value: "asc",
                                        children: "Price: Low to High"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        value: "desc",
                                        children: "Price: High to Low"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/_components/Product/FilterProduct.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(FilterProduct, "d3JMXZXL4uSGhSPwnu7kA4ircfc=");
_c = FilterProduct;
var _c;
__turbopack_context__.k.register(_c, "FilterProduct");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/services/data:90524c [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60e93c4ea3ef10ff9fcfd2c421d70ee0e8b9aa66aa":"addToCart"},"src/lib/services/cart.services.ts",""] */ __turbopack_context__.s([
    "addToCart",
    ()=>addToCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var addToCart = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60e93c4ea3ef10ff9fcfd2c421d70ee0e8b9aa66aa", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addToCart"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY2FydC5zZXJ2aWNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCBHZXRNeVRva2VuIGZyb20gXCJAL2FwcC9VdGlsaXRpZXMvR2V0TXlUb2tlblwiO1xyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFRvQ2FydChwcm9kdWN0SWQ6IHN0cmluZykge1xyXG4vLyAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBHZXRNeVRva2VuKCk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcIlRva2VuIGZyb20gR2V0TXlUb2tlbjpcIiwgdG9rZW4pOyBcclxuXHJcbi8vICAgICBpZiAoIXRva2VuKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIHRva2VuIGZvdW5kLCBjYW5ub3QgYWRkIHRvIGNhcnRcIik7XHJcbi8vICAgICAgICAgcmV0dXJuO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2Vjb21tZXJjZS5yb3V0ZW1pc3IuY29tL2FwaS92MS9jYXJ0Jywge1xyXG4vLyAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4vLyAgICAgICAgIGhlYWRlcnM6IHtcclxuLy8gICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbi8vICAgICAgICAgICAgIHRva2VuOiB0b2tlbiA/IFN0cmluZyh0b2tlbikgOiBcIlwiLCBcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcHJvZHVjdElkIH0pLFxyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbi8vICAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykgcmV0dXJuIGRhdGE7XHJcbi8vICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcclxuLy8gfVxyXG4vLyBsaWIvc2VydmljZXMvY2FydC5zZXJ2aWNlcy50c1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVG9DYXJ0KHByb2R1Y3RJZDogc3RyaW5nLCB0b2tlbjogc3RyaW5nKSB7XHJcbiAgaWYgKCF0b2tlbikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIk5vIHRva2VuIGZvdW5kLCBjYW5ub3QgYWRkIHRvIGNhcnRcIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9lY29tbWVyY2Uucm91dGVtaXNyLmNvbS9hcGkvdjEvY2FydCcsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgdG9rZW4sXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwcm9kdWN0SWQgfSksXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIGlmIChkYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSByZXR1cm4gZGF0YTtcclxuICBjb25zb2xlLmxvZygnZXJyb3InKTtcclxufVxyXG5cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2dnZWRDYXJ0KCkge1xyXG4vLyAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBHZXRNeVRva2VuKCk7XHJcblxyXG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZWNvbW1lcmNlLnJvdXRlbWlzci5jb20vYXBpL3YxL2NhcnRgLCB7XHJcbi8vICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuLy8gICAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAgIHRva2VuOiB0b2tlbiA/IFN0cmluZyh0b2tlbikgOiBcIlwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuLy8gICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSByZXR1cm4gZGF0YTtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TG9nZ2VkQ2FydCgpIHtcclxuLy8gICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpOyAvLyDZhdik2YLYqiDZhNi62KfZitipINmF2Kcg2YbYsdis2Lkgc3lzdGVtIGxvZ2luINmF2LbYqNmI2LdcclxuLy8gICBpZiAoIXRva2VuKSByZXR1cm47XHJcblxyXG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2Vjb21tZXJjZS5yb3V0ZW1pc3IuY29tL2FwaS92MS9jYXJ0YCwge1xyXG4vLyAgICAgbWV0aG9kOiAnR0VUJyxcclxuLy8gICAgIGhlYWRlcnM6IHsgdG9rZW4gfSxcclxuLy8gICAgIGNhY2hlOiAnbm8tc3RvcmUnLFxyXG4vLyAgIH0pO1xyXG5cclxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuLy8gICBpZiAoZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykgcmV0dXJuIGRhdGE7XHJcbi8vICAgY29uc29sZS5sb2coJ2Vycm9yJywgZGF0YSk7XHJcbi8vIH1cclxuXHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlU3BlY2lmaWNJdGVtKHByb2R1Y3RJZDogc3RyaW5nKSB7XHJcbi8vICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IEdldE15VG9rZW4oKTtcclxuXHJcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9lY29tbWVyY2Uucm91dGVtaXNyLmNvbS9hcGkvdjEvY2FydC8ke3Byb2R1Y3RJZH1gLCB7XHJcbi8vICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuLy8gICAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAgIHRva2VuOiB0b2tlbiA/IFN0cmluZyh0b2tlbikgOiBcIlwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuLy8gICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSByZXR1cm4gZGF0YTtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gVXBkYXRlU3BlY2lmaWNJdGVtKHsgcHJvZHVjdElkLCBjb3VudCB9OiB7IHByb2R1Y3RJZDogc3RyaW5nLCBjb3VudDogbnVtYmVyIH0pIHtcclxuLy8gICAgIGNvbnN0IHRva2VuID0gYXdhaXQgR2V0TXlUb2tlbigpO1xyXG5cclxuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2Vjb21tZXJjZS5yb3V0ZW1pc3IuY29tL2FwaS92MS9jYXJ0LyR7cHJvZHVjdElkfWAsIHtcclxuLy8gICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4vLyAgICAgICAgIGhlYWRlcnM6IHtcclxuLy8gICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbi8vICAgICAgICAgICAgIHRva2VuOiB0b2tlbiA/IFN0cmluZyh0b2tlbikgOiBcIlwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwcm9kdWN0SWQsIGNvdW50IH0pLFxyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbi8vICAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykgcmV0dXJuIGRhdGE7XHJcbi8vICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcclxuLy8gfVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9TQTJCc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/_components/Product/Product.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Products
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Rating$2f$Rating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Rating/Rating.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FavoriteBorderOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/FavoriteBorderOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Favorite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Favorite.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Visibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Visibility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$90524c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/services/data:90524c [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartConetxt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartConetxt.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$wishlist$2e$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/wishlist.services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WishListContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/WishListContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function Products(param) {
    let { data } = param;
    _s();
    const [favourites, setFavourites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const { setNoCartItems, setCartItems, setPrice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartConetxt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartContext"]);
    const { setNoWishItems, setWishItems, wishItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WishListContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WishList"]);
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    console.log("SESSION DATA ===>", session);
    const isLoggedIn = !!(session === null || session === void 0 ? void 0 : session.user);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Products.useEffect": ()=>{
            if (wishItems === null || wishItems === void 0 ? void 0 : wishItems.data) {
                const favMap = {};
                wishItems.data.forEach({
                    "Products.useEffect": (item)=>{
                        favMap[item._id] = true;
                    }
                }["Products.useEffect"]);
                setFavourites(favMap);
            }
        }
    }["Products.useEffect"], [
        wishItems
    ]);
    const toggleFavourite = async (id)=>{
        if (favourites[id]) {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$wishlist$2e$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteFromWishList"])(id);
            if ((data === null || data === void 0 ? void 0 : data.status) === "success") {
                var _data_data;
                var _data_count, _ref;
                setNoWishItems((_ref = (_data_count = data.count) !== null && _data_count !== void 0 ? _data_count : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.length) !== null && _ref !== void 0 ? _ref : 0);
                setWishItems(data);
            }
        } else {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$wishlist$2e$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToWishList"])(id);
            if ((data === null || data === void 0 ? void 0 : data.status) === "success") {
                var _data_data1;
                var _data_count1, _ref1;
                setNoWishItems((_ref1 = (_data_count1 = data.count) !== null && _data_count1 !== void 0 ? _data_count1 : (_data_data1 = data.data) === null || _data_data1 === void 0 ? void 0 : _data_data1.length) !== null && _ref1 !== void 0 ? _ref1 : 0);
                setWishItems(data);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-4 gap-4 mt-10",
            children: data.map((ele)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-2 rounded-xl group overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-70",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: ele.imageCover,
                                alt: ele.title,
                                fill: true,
                                className: "object-cover bg-gray-400 transition duration-300 ease-in-out group-hover:opacity-100"
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/Product/Product.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/_components/Product/Product.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this),
                        isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-black text-white p-2 w-full hover:cursor-pointer transition-transform group-hover:scale-110 transition-colors duration-500 ease-in-out hover:bg-red-500",
                            onClick: ()=>{
                                if (!(session === null || session === void 0 ? void 0 : session.token)) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("You should login first");
                                    return;
                                }
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$data$3a$90524c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addToCart"])(ele._id, session.token).then((res)=>{
                                    if ((res === null || res === void 0 ? void 0 : res.status) === "success") {
                                        setCartItems(res);
                                        setNoCartItems(res.numOfCartItems);
                                        setPrice(res.data.totalCartPrice);
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Successfully Added to Cart!");
                                    } else {
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("This didn't work.");
                                    }
                                });
                            },
                            children: "Add to Cart.."
                        }, void 0, false, {
                            fileName: "[project]/src/app/_components/Product/Product.tsx",
                            lineNumber: 72,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl font-bold line-clamp-1",
                                    children: ele.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/_components/Product/Product.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm line-clamp-2",
                                    children: ele.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/_components/Product/Product.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl font-bold",
                                                    children: "Price: "
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/_components/Product/Product.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this),
                                                ele.price
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/_components/Product/Product.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/ProductDetails/".concat(ele._id),
                                                    className: "hover:cursor-pointer m-3 hover:scale-110 transition-transform duration-300 ease-in-out",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Visibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/_components/Product/Product.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/_components/Product/Product.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>toggleFavourite(ele._id),
                                                    className: "hover:cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out",
                                                    children: favourites[ele._id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Favorite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "text-red-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/_components/Product/Product.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FavoriteBorderOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "text-red-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/_components/Product/Product.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/_components/Product/Product.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/_components/Product/Product.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/_components/Product/Product.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Rating$2f$Rating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    name: "half-rating-read",
                                    defaultValue: ele.ratingsAverage,
                                    precision: 0.5,
                                    readOnly: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/_components/Product/Product.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/_components/Product/Product.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this)
                    ]
                }, ele._id, true, {
                    fileName: "[project]/src/app/_components/Product/Product.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/_components/Product/Product.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/_components/Product/Product.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(Products, "WP05Nl9+ujMyCtMYmkKSCsk7tC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = Products;
var _c;
__turbopack_context__.k.register(_c, "Products");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/_components/Product/Product_bridge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Productbridge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Product$2f$FilterProduct$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/_components/Product/FilterProduct.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Product$2f$Product$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/_components/Product/Product.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Productbridge(param) {
    let { data } = param;
    _s();
    const [filteredProducts, setFilteredProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(data);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const productsPerPage = 16;
    const handleFilter = (param)=>{
        let { brand, category, sort } = param;
        let filtered = [
            ...data
        ];
        if (brand) {
            filtered = filtered.filter((item)=>{
                var _item_brand;
                return ((_item_brand = item.brand) === null || _item_brand === void 0 ? void 0 : _item_brand.name) === brand;
            });
        }
        if (category) {
            filtered = filtered.filter((item)=>{
                var _item_category;
                return ((_item_category = item.category) === null || _item_category === void 0 ? void 0 : _item_category.name) === category;
            });
        }
        if (sort === "asc") {
            filtered.sort((a, b)=>a.price - b.price);
        } else if (sort === "desc") {
            filtered.sort((a, b)=>b.price - a.price);
        }
        setFilteredProducts(filtered);
        setCurrentPage(1);
    };
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-11/12 m-auto mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Product$2f$FilterProduct$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onFilter: handleFilter
            }, void 0, false, {
                fileName: "[project]/src/app/_components/Product/Product_bridge.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Product$2f$Product$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: currentProducts
            }, void 0, false, {
                fileName: "[project]/src/app/_components/Product/Product_bridge.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center gap-4 mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: currentPage === 1,
                        onClick: ()=>setCurrentPage((prev)=>prev - 1),
                        className: "px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300 transition",
                        children: "Prev"
                    }, void 0, false, {
                        fileName: "[project]/src/app/_components/Product/Product_bridge.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    Array.from({
                        length: totalPages
                    }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCurrentPage(index + 1),
                            className: "px-3 py-1 rounded ".concat(currentPage === index + 1 ? "bg-red-500 text-white" : "bg-gray-100 hover:bg-gray-200"),
                            children: index + 1
                        }, index, false, {
                            fileName: "[project]/src/app/_components/Product/Product_bridge.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: currentPage === totalPages,
                        onClick: ()=>setCurrentPage((prev)=>prev + 1),
                        className: "px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300 transition",
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/src/app/_components/Product/Product_bridge.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/_components/Product/Product_bridge.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/_components/Product/Product_bridge.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(Productbridge, "54u0cFi68W0tnuo9cohYXW8i758=");
_c = Productbridge;
var _c;
__turbopack_context__.k.register(_c, "Productbridge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_8718829e._.js.map