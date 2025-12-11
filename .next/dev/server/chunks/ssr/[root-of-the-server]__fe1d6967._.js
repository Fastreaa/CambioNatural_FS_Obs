module.exports = [
"[project]/pages/index.md.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MDXContent
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-runtime [external] (react/jsx-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdx$2d$js$2f$react$2f$lib$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mdx-js/react/lib/index.js [ssr] (ecmascript)");
;
;
function _createMdxContent(props) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$runtime$2c$__cjs$29$__["jsx"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$runtime$2c$__cjs$29$__["Fragment"], {});
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mdx$2d$js$2f$react$2f$lib$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return MDXLayout ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$runtime$2c$__cjs$29$__["jsx"])(MDXLayout, {
        ...props,
        children: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$runtime$2c$__cjs$29$__["jsx"])(_createMdxContent, {
            ...props
        })
    }) : _createMdxContent(props);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fe1d6967._.js.map