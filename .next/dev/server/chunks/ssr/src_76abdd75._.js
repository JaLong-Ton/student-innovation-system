module.exports = [
"[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/node_modules/radix-ui/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
            secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
            destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
            outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
            ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
            link: "text-primary underline-offset-4 hover:underline"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-base leading-snug font-medium group-data-[size=sm]/card:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-4 group-data-[size=sm]/card:px-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript) <export * as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
"use client";
;
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Root, {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Trigger, {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Portal, {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 31,
        columnNumber: 10
    }, this);
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Overlay, {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Content, {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-background p-4 text-sm ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
                        "data-slot": "dialog-close",
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            className: "absolute top-2 right-2",
                            size: "icon-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/ui/dialog.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/dialog.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/dialog.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
function DialogFooter({ className, showCloseButton = false, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end", className),
        ...props,
        children: [
            children,
            showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dialog.tsx",
                    lineNumber: 118,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Title, {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-base leading-none font-medium", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Description, {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/textarea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Label$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript) <export * as Label>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Label$3e$__["Label"].Root, {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/admin/review-registration-dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewRegistrationDialog",
    ()=>ReviewRegistrationDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$zh$2d$CN$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/zh-CN.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
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
function ReviewRegistrationDialog({ registration, onReview }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rejectionMode, setRejectionMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // 获取状态信息
    const getStatusInfo = (status)=>{
        const statusMapping = {
            PENDING: {
                label: '待审批',
                className: 'bg-yellow-100 text-yellow-800 border-yellow-200'
            },
            pending: {
                label: '待审批',
                className: 'bg-yellow-100 text-yellow-800 border-yellow-200'
            },
            APPROVED: {
                label: '已通过',
                className: 'bg-green-100 text-green-800 border-green-200'
            },
            approved: {
                label: '已通过',
                className: 'bg-green-100 text-green-800 border-green-200'
            },
            REJECTED_RETRY: {
                label: '退回修改',
                className: 'bg-orange-100 text-orange-800 border-orange-200'
            },
            rejected_retry: {
                label: '退回修改',
                className: 'bg-orange-100 text-orange-800 border-orange-200'
            },
            REJECTED_FINAL: {
                label: '彻底驳回',
                className: 'bg-red-100 text-red-800 border-red-200'
            },
            rejected_final: {
                label: '彻底驳回',
                className: 'bg-red-100 text-red-800 border-red-200'
            },
            REJECTED: {
                label: '彻底驳回',
                className: 'bg-red-100 text-red-800 border-red-200'
            },
            rejected: {
                label: '彻底驳回',
                className: 'bg-red-100 text-red-800 border-red-200'
            }
        };
        const normalizedStatus = status?.toString().toUpperCase() || 'UNKNOWN';
        return statusMapping[normalizedStatus] || {
            label: '未知状态',
            className: 'bg-gray-100 text-gray-800 border-gray-200'
        };
    };
    const handleApprove = async ()=>{
        setIsSubmitting(true);
        try {
            const result = await onReview(registration.id, 'APPROVED');
            if (result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('✅ 报名审批通过');
                setOpen(false);
                window.location.reload();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(result.message);
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('审批失败，请稍后重试');
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleReject = async (status)=>{
        if (!feedback.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('请填写驳回原因');
            return;
        }
        setIsSubmitting(true);
        try {
            const result = await onReview(registration.id, status, feedback.trim());
            if (result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`✅ 报名已${status === 'REJECTED_RETRY' ? '退回修改' : '彻底驳回'}`);
                setOpen(false);
                window.location.reload();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(result.message);
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('审批失败，请稍后重试');
        } finally{
            setIsSubmitting(false);
            setRejectionMode(null);
            setFeedback('');
        }
    };
    const statusInfo = getStatusInfo(registration.status);
    const isPending = registration.status?.toString().toUpperCase() === 'PENDING';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: isPending ? "default" : "outline",
                    size: "sm",
                    className: isPending ? "bg-blue-600 hover:bg-blue-700 text-white" : "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                            className: "h-4 w-4 mr-1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        isPending ? '审查' : '查看详情'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "sm:max-w-[600px] max-h-[80vh] overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "报名审查详情"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                children: isPending ? '请仔细审查以下报名信息并做出审批决定' : '查看该报名的详细信息'
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "申请人姓名"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-sm text-gray-900",
                                                children: registration.applicantName || registration.user.name || '未知'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "联系邮箱"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-sm text-gray-900",
                                                children: registration.user.email
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "赛事名称"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-sm text-gray-900",
                                                children: registration.competition.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "指导老师"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-sm text-gray-900",
                                                children: registration.teacher ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: registration.teacher.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-500",
                                                            children: [
                                                                registration.teacher.department && `[${registration.teacher.department}] `,
                                                                registration.teacher.teacherNo
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-500",
                                                    children: "未选择"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "提交时间"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-sm text-gray-900",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(registration.createdAt, 'yyyy年MM月dd日 HH:mm', {
                                                    locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$zh$2d$CN$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zhCN"]
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 p-4 rounded-md space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-medium text-gray-900 mb-3",
                                        children: "详细资料"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "作品名称"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 181,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-sm text-gray-900",
                                                children: registration.projectName || '未填写'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 182,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "团队成员"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-sm text-gray-900 whitespace-pre-wrap",
                                                children: registration.teamMembers || '无'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 189,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "报名说明/备注"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-sm text-gray-900 whitespace-pre-wrap",
                                                children: registration.notes || '无'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 196,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t pt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "当前状态"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                        className: statusInfo.className,
                                                        children: statusInfo.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-600",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(registration.createdAt, 'yyyy年MM月dd日', {
                                                            locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$zh$2d$CN$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zhCN"]
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 204,
                                                columnNumber: 15
                                            }, this),
                                            registration.feedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 p-2 bg-red-50 text-red-700 rounded text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "驳回原因："
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 19
                                                    }, this),
                                                    registration.feedback
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    rejectionMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "feedback",
                                                className: "text-sm font-medium text-gray-700",
                                                children: [
                                                    "驳回原因 ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 26
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 228,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                                id: "feedback",
                                                value: feedback,
                                                onChange: (e)=>setFeedback(e.target.value),
                                                placeholder: "请详细说明驳回原因，帮助学生改进...",
                                                className: "min-h-[80px]",
                                                disabled: isSubmitting
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 231,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                        lineNumber: 227,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: rejectionMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    onClick: ()=>{
                                                        setRejectionMode(null);
                                                        setFeedback('');
                                                    },
                                                    disabled: isSubmitting,
                                                    children: "取消驳回"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: rejectionMode === 'REJECTED_RETRY' ? 'default' : 'outline',
                                                    className: rejectionMode === 'REJECTED_RETRY' ? 'bg-orange-600 hover:bg-orange-700 text-white' : '',
                                                    onClick: ()=>handleReject('REJECTED_RETRY'),
                                                    disabled: isSubmitting || !feedback.trim(),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                            className: "h-4 w-4 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 23
                                                        }, this),
                                                        "确认退回修改"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "destructive",
                                                    onClick: ()=>handleReject('REJECTED_FINAL'),
                                                    disabled: isSubmitting || !feedback.trim(),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "h-4 w-4 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 23
                                                        }, this),
                                                        "确认彻底驳回"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    className: "bg-green-600 hover:bg-green-700 text-white",
                                                    onClick: handleApprove,
                                                    disabled: isSubmitting,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "h-4 w-4 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                            lineNumber: 281,
                                                            columnNumber: 23
                                                        }, this),
                                                        "通过"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    className: "text-orange-600 border-orange-200 hover:bg-orange-50",
                                                    onClick: ()=>setRejectionMode('REJECTED_RETRY'),
                                                    disabled: isSubmitting,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                            className: "h-4 w-4 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 23
                                                        }, this),
                                                        "驳回修改"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    className: "text-red-600 border-red-200 hover:bg-red-50",
                                                    onClick: ()=>setRejectionMode('REJECTED_FINAL'),
                                                    disabled: isSubmitting,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "h-4 w-4 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 23
                                                        }, this),
                                                        "彻底驳回"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                        children: !isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>setOpen(false),
                            children: "关闭"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                            lineNumber: 311,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/actions/data:7d215e [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "batchReviewRegistrations",
    ()=>$$RSC_SERVER_ACTION_13
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"7000681646cab0df678faaf021ae964d8a48068d27":"batchReviewRegistrations"},"src/app/actions/admin.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7000681646cab0df678faaf021ae964d8a48068d27", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "batchReviewRegistrations");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWRtaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSdcbmltcG9ydCB7IGF1dGgsIGNsZXJrQ2xpZW50IH0gZnJvbSAnQGNsZXJrL25leHRqcy9zZXJ2ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnXG5cbi8qKlxuICog6aqM6K+B566h55CG5ZGY5p2D6ZmQ55qE6L6F5Yqp5Ye95pWwXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHZlcmlmeUFkbWluUGVybWlzc2lvbigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5pyq55m75b2V77yM6K+35YWI55m75b2VJylcbiAgICB9XG5cbiAgICBjb25zdCBjbGVyayA9IGF3YWl0IGNsZXJrQ2xpZW50KClcbiAgICBcbiAgICAvLyDmoLjlv4PljYfnuqfvvJrlop7liqDluKbmnInmjIfmlbDpgIDpgb/vvIjlu7bov5/vvInnmoQgMyDmrKHph43or5XmnLrliLZcbiAgICBsZXQgdXNlcjtcbiAgICBsZXQgcmV0cmllcyA9IDM7XG4gICAgXG4gICAgd2hpbGUgKHJldHJpZXMgPiAwKSB7XG4gICAgICB0cnkge1xuICAgICAgICB1c2VyID0gYXdhaXQgY2xlcmsudXNlcnMuZ2V0VXNlcih1c2VySWQpXG4gICAgICAgIGJyZWFrOyAvLyDlpoLmnpzor7fmsYLmiJDlip/vvIznq4vliLvot7Plh7rlvqrnjq9cbiAgICAgIH0gY2F0Y2ggKGNsZXJrRXJyb3I6IGFueSkge1xuICAgICAgICByZXRyaWVzIC09IDE7XG4gICAgICAgIGlmIChyZXRyaWVzID09PSAwKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignQ2xlcmsg55So5oi35p+l6K+i5b275bqV5aSx6LSl77yM5bey6ICX5bC96YeN6K+V5qyh5pWwOicsIGNsZXJrRXJyb3IpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcign572R57uc6K+35rGC6LaF5pe277yM5peg5rOV6L+e5o6l5Yiw6K6k6K+B5pyN5Yqh5Zmo77yM6K+35Yi35paw6YeN6K+VJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g562J5b6FIDUwMCDmr6vnp5LlkI7lho3ov5vooYzkuIvkuIDmrKHlsJ3or5VcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUwMCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWuieWFqOagoemqjO+8mueUseS6jiBUeXBlU2NyaXB0IOeahOexu+Wei+aOqOaWre+8jOaIkeS7rOmcgOimgeWGjeasoeehruiupCB1c2VyIOaYr+WQpuaIkOWKn+aLv+WIsFxuICAgIGlmICghdXNlciB8fCB1c2VyLnB1YmxpY01ldGFkYXRhLnJvbGUgIT09ICdhZG1pbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5p2D6ZmQ5LiN6Laz77ya5oKo55qE6LSm5Y+35LiN5piv566h55CG5ZGYJylcbiAgICB9XG5cbiAgICByZXR1cm4geyB1c2VySWQsIHVzZXIgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+euoeeQhuWRmOadg+mZkOagoemqjOWksei0pTonLCBlcnJvcilcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5p2D6ZmQ5qCh6aqM6YGH5Yiw5pyq55+l6ZSZ6K+vJylcbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPluaJgOacieeUqOaIt1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVXNlcnMoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBcbiAgICBjb25zdCBjbGVyayA9IGF3YWl0IGNsZXJrQ2xpZW50KClcbiAgICBjb25zdCB1c2VyTGlzdCA9IGF3YWl0IGNsZXJrLnVzZXJzLmdldFVzZXJMaXN0KHtcbiAgICAgIGxpbWl0OiAxMDAsXG4gICAgICBvcmRlckJ5OiAnLWNyZWF0ZWRfYXQnXG4gICAgfSlcblxuICAgIC8vIOi/lOWbnueyvueugOeahOeUqOaIt+S/oeaBr1xuICAgIHJldHVybiB1c2VyTGlzdC5kYXRhLm1hcCh1c2VyID0+ICh7XG4gICAgICBpZDogdXNlci5pZCxcbiAgICAgIGZpcnN0TmFtZTogdXNlci5maXJzdE5hbWUsXG4gICAgICBsYXN0TmFtZTogdXNlci5sYXN0TmFtZSxcbiAgICAgIGVtYWlsQWRkcmVzc2VzOiB1c2VyLmVtYWlsQWRkcmVzc2VzLFxuICAgICAgaW1hZ2VVcmw6IHVzZXIuaW1hZ2VVcmxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfojrflj5bnlKjmiLfliJfooajlpLHotKU6JywgZXJyb3IpXG4gICAgXG4gICAgLy8g5qOA5p+l5piv5ZCm5pivIENsZXJrIEFQSSDplJnor69cbiAgICBpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAnY2xlcmtFcnJvcicgaW4gZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NsZXJrIEFQSSDplJnor6/or6bmg4U6JywgSlNPTi5zdHJpbmdpZnkoZXJyb3IsIG51bGwsIDIpKVxuICAgICAgLy8g6L+U5Zue56m65pWw57uE6ICM5LiN5piv5oqb5Ye66ZSZ6K+v77yM6Ziy5q2i6aG16Z2i5bSp5rqDXG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgXG4gICAgLy8g5qOA5p+l5piv5ZCm5piv572R57uc6ZSZ6K+v5oiW5YW25LuWIEFQSSDplJnor69cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgaWYgKGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ2ZldGNoJykgfHwgXG4gICAgICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnbmV0d29yaycpIHx8XG4gICAgICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnRUNPTk5SRUZVU0VEJykgfHxcbiAgICAgICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCd0aW1lb3V0JykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcign572R57uc6L+e5o6l6ZSZ6K+v77yM5Y+v6IO95pivIENsZXJrIOacjeWKoeS4jeWPr+eUqDonLCBlcnJvci5tZXNzYWdlKVxuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ0NsZXJrQVBJUmVzcG9uc2VFcnJvcicpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NsZXJrIEFQSSDlk43lupTplJnor686JywgZXJyb3IubWVzc2FnZSlcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOWFtuS7luacquefpemUmeivr++8jOi/lOWbnuepuuaVsOe7hOmYsuatoumhtemdouW0qea6g1xuICAgIGNvbnNvbGUuZXJyb3IoJ+acquefpemUmeivr+exu+Wei++8jOi/lOWbnuepuuaVsOe7hDonLCBlcnJvcilcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG4vKipcbiAqIOagueaNrueUqOaIt0lE6I635Y+W5oiQ5bCxXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBY2hpZXZlbWVudHNCeVVzZXJJZCh0YXJnZXRVc2VySWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gICAgXG4gICAgY29uc3QgYWNoaWV2ZW1lbnRzID0gYXdhaXQgcHJpc21hLmFjaGlldmVtZW50LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7IHVzZXJJZDogdGFyZ2V0VXNlcklkIH0sXG4gICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogJ2Rlc2MnIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGFjaGlldmVtZW50c1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPlueUqOaIt+aIkOWwseWksei0pTonLCBlcnJvcilcbiAgICB0aHJvdyBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiBuZXcgRXJyb3IoJ+iOt+WPlueUqOaIt+aIkOWwseWksei0pScpXG4gIH1cbn1cblxuLyoqXG4gKiDnrqHnkIblkZjliKDpmaTmiJDlsLHvvIjml6Dop4bmiYDmnInogIXvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkbWluRGVsZXRlQWNoaWV2ZW1lbnQoYWNoaWV2ZW1lbnRJZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBcbiAgICAvLyDnm7TmjqXliKDpmaTmiJDlsLHorrDlvZXvvIzkuI3mo4Dmn6XmiYDmnInogIVcbiAgICBhd2FpdCBwcmlzbWEuYWNoaWV2ZW1lbnQuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBhY2hpZXZlbWVudElkIH1cbiAgICB9KVxuXG4gICAgLy8g6YeN5paw6aqM6K+B57yT5a2Y77yM5Yi35paw55u45YWz6aG16Z2iXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi91c2VycycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9maWxlJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FjaGlldmVtZW50cycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6ICfmiJDlsLHlt7LmiJDlip/liKDpmaQnXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+WIoOmZpOaIkOWwseWksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfliKDpmaTmiJDlsLHlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog5Yib5bu65paw56ue6LWb77yI566h55CG5ZGY5p2D6ZmQ77yJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb21wZXRpdGlvbihkYXRhOiB7XG4gIG5hbWU6IHN0cmluZ1xuICBjYXRlZ29yeTogc3RyaW5nXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gIGRlYWRsaW5lOiBzdHJpbmdcbiAgbWF4UGFydGljaXBhbnRzOiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIC8vIOmqjOivgei+k+WFpeaVsOaNrlxuICAgIGlmICghZGF0YS5uYW1lIHx8IGRhdGEubmFtZS50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ernui1m+WQjeensOS4jeiDveS4uuepuidcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKCFkYXRhLmNhdGVnb3J5KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ivt+mAieaLqeernui1m+WIhuexuydcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKCFkYXRhLmRlYWRsaW5lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ivt+mAieaLqeaIquatouaXpeacnydcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGVhZGxpbmVEYXRlID0gbmV3IERhdGUoZGF0YS5kZWFkbGluZSlcbiAgICBpZiAoaXNOYU4oZGVhZGxpbmVEYXRlLmdldFRpbWUoKSkgfHwgZGVhZGxpbmVEYXRlIDw9IG5ldyBEYXRlKCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5oiq5q2i5pel5pyf5b+F6aG75piv5pyq5p2l5pe26Ze0J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBtYXhQYXJ0aWNpcGFudHNOdW0gPSBwYXJzZUludChkYXRhLm1heFBhcnRpY2lwYW50cylcbiAgICBpZiAoaXNOYU4obWF4UGFydGljaXBhbnRzTnVtKSB8fCBtYXhQYXJ0aWNpcGFudHNOdW0gPD0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfkurrmlbDkuIrpmZDlv4XpobvmmK/lpKfkuo4w55qE5pWw5a2XJ1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyDliJvlu7rnq57otZtcbiAgICBjb25zdCBjb21wZXRpdGlvbiA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUudHJpbSgpLFxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24/LnRyaW0oKSB8fCAnJyxcbiAgICAgICAgZGVhZGxpbmU6IGRlYWRsaW5lRGF0ZSxcbiAgICAgICAgbWF4UGFydGljaXBhbnRzOiBtYXhQYXJ0aWNpcGFudHNOdW0sXG4gICAgICAgIGN1cnJlbnRQYXJ0aWNpcGFudHM6IDBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g5Yi35paw57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jb21wZXRpdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vY29tcGV0aXRpb25zJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgZGF0YTogY29tcGV0aXRpb24sXG4gICAgICBtZXNzYWdlOiAn56ue6LWb5Yib5bu65oiQ5Yqf77yBJ1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+WIm+W7uuernui1m+Wksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfliJvlu7rnq57otZvlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog5pu05paw56ue6LWb77yI566h55CG5ZGY5p2D6ZmQ77yJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDb21wZXRpdGlvbihpZDogc3RyaW5nLCBkYXRhOiB7XG4gIG5hbWU6IHN0cmluZ1xuICBjYXRlZ29yeTogc3RyaW5nXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gIGRlYWRsaW5lOiBzdHJpbmdcbiAgbWF4UGFydGljaXBhbnRzOiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIC8vIOmqjOivgei+k+WFpeaVsOaNrlxuICAgIGlmICghZGF0YS5uYW1lIHx8IGRhdGEubmFtZS50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ernui1m+WQjeensOS4jeiDveS4uuepuidcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKCFkYXRhLmNhdGVnb3J5KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ivt+mAieaLqeernui1m+WIhuexuydcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKCFkYXRhLmRlYWRsaW5lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ivt+mAieaLqeaIquatouaXpeacnydcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGVhZGxpbmVEYXRlID0gbmV3IERhdGUoZGF0YS5kZWFkbGluZSlcbiAgICBpZiAoaXNOYU4oZGVhZGxpbmVEYXRlLmdldFRpbWUoKSkgfHwgZGVhZGxpbmVEYXRlIDw9IG5ldyBEYXRlKCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5oiq5q2i5pel5pyf5b+F6aG75piv5pyq5p2l5pe26Ze0J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBtYXhQYXJ0aWNpcGFudHNOdW0gPSBwYXJzZUludChkYXRhLm1heFBhcnRpY2lwYW50cylcbiAgICBpZiAoaXNOYU4obWF4UGFydGljaXBhbnRzTnVtKSB8fCBtYXhQYXJ0aWNpcGFudHNOdW0gPD0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfkurrmlbDkuIrpmZDlv4XpobvmmK/lpKfkuo4w55qE5pWw5a2XJ1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOajgOafpeernui1m+aYr+WQpuWtmOWcqFxuICAgIGNvbnN0IGV4aXN0aW5nQ29tcGV0aXRpb24gPSBhd2FpdCBwcmlzbWEuY29tcGV0aXRpb24uZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9XG4gICAgfSlcblxuICAgIGlmICghZXhpc3RpbmdDb21wZXRpdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfnq57otZvkuI3lrZjlnKgnXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOabtOaWsOernui1m1xuICAgIGNvbnN0IGNvbXBldGl0aW9uID0gYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUudHJpbSgpLFxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24/LnRyaW0oKSB8fCAnJyxcbiAgICAgICAgZGVhZGxpbmU6IGRlYWRsaW5lRGF0ZSxcbiAgICAgICAgbWF4UGFydGljaXBhbnRzOiBtYXhQYXJ0aWNpcGFudHNOdW1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g5Yi35paw57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jb21wZXRpdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vY29tcGV0aXRpb25zJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgZGF0YTogY29tcGV0aXRpb24sXG4gICAgICBtZXNzYWdlOiAn56ue6LWb5pu05paw5oiQ5Yqf77yBJ1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+abtOaWsOernui1m+Wksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfmm7TmlrDnq57otZvlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog5Yig6Zmk56ue6LWb77yI566h55CG5ZGY5p2D6ZmQ77yM5a6J5YWo5aSE55CG5aSW6ZSu5L6d6LWW77yJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb21wZXRpdGlvbihpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcblxuICAgIC8vIOajgOafpeernui1m+aYr+WQpuWtmOWcqFxuICAgIGNvbnN0IGV4aXN0aW5nQ29tcGV0aXRpb24gPSBhd2FpdCBwcmlzbWEuY29tcGV0aXRpb24uZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9XG4gICAgfSlcblxuICAgIGlmICghZXhpc3RpbmdDb21wZXRpdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfnq57otZvkuI3lrZjlnKgnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5L2/55SoIFByaXNtYSDkuovliqHlronlhajliKDpmaTnq57otZvlj4rlhbbnm7jlhbPmlbDmja5cbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xuICAgICAgLy8g56ys5LiA5q2l77ya5Yig6Zmk5omA5pyJ55u45YWz55qE5oql5ZCN6K6w5b2VXG4gICAgICBhd2FpdCB0eC5yZWdpc3RyYXRpb24uZGVsZXRlTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IGNvbXBldGl0aW9uSWQ6IGlkIH1cbiAgICAgIH0pXG4gICAgICBcbiAgICAgIC8vIOesrOS6jOatpe+8muWIoOmZpOernui1m+acrOi6q1xuICAgICAgYXdhaXQgdHguY29tcGV0aXRpb24uZGVsZXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8g5Yi35paw57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jb21wZXRpdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vY29tcGV0aXRpb25zJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ+ernui1m+WIoOmZpOaIkOWKn++8gSdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfliKDpmaTnq57otZvlpLHotKU6JywgZXJyb3IpXG4gICAgXG4gICAgLy8g5qOA5p+l5piv5ZCm5piv5aSW6ZSu57qm5p2f6ZSZ6K+vXG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnZm9yZWlnbiBrZXkgY29uc3RyYWludCcpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+WIoOmZpOWksei0pe+8muivpeernui1m+S7jeacieWFs+iBlOaVsOaNru+8jOivt+WFiOWkhOeQhuebuOWFs+iusOW9lSdcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5Yig6Zmk56ue6LWb5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPluaJgOacieaMh+WvvOiAgeW4iOWIl+ihqFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGVhY2hlcnMoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBcbiAgICBjb25zdCB0ZWFjaGVycyA9IGF3YWl0IHByaXNtYS50ZWFjaGVyLmZpbmRNYW55KHtcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gdGVhY2hlcnNcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfojrflj5bogIHluIjliJfooajlpLHotKU6JywgZXJyb3IpXG4gICAgdGhyb3cgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yIDogbmV3IEVycm9yKCfojrflj5bogIHluIjliJfooajlpLHotKXvvIzor7fnqI3lkI7ph43or5UnKVxuICB9XG59XG5cbi8qKlxuICog5Yib5bu65paw5oyH5a+86ICB5biIXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUZWFjaGVyKGRhdGE6IHtcbiAgbmFtZTogc3RyaW5nXG4gIGRlcGFydG1lbnQ/OiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIC8vIOmqjOivgei+k+WFpeaVsOaNrlxuICAgIGlmICghZGF0YS5uYW1lIHx8IGRhdGEubmFtZS50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+aVmeW4iOWnk+WQjeS4jeiDveS4uuepuidcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDmn6Xor6LlvZPliY3mlbDmja7lupPkuK3lhbHmnInlpJrlsJHkvY3ogIHluIhcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICAgIGNvbnN0IHRlYWNoZXJDb3VudCA9IGF3YWl0IHByaXNtYS50ZWFjaGVyLmNvdW50KClcbiAgICBcbiAgICAvLyDnlJ/miJDmoLzlvI/kuLogVCArIOW5tOS7vSArIDPkvY3mtYHmsLTlj7fnmoTmlZnluIjnvJblj7dcbiAgICBjb25zdCB0ZWFjaGVyTm8gPSBgVCR7Y3VycmVudFllYXJ9JHtTdHJpbmcodGVhY2hlckNvdW50ICsgMSkucGFkU3RhcnQoMywgJzAnKX1gXG4gICAgXG4gICAgLy8g5Yib5bu66ICB5biI6K6w5b2VXG4gICAgY29uc3QgdGVhY2hlciA9IGF3YWl0IHByaXNtYS50ZWFjaGVyLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IGRhdGEubmFtZS50cmltKCksXG4gICAgICAgIGRlcGFydG1lbnQ6IGRhdGEuZGVwYXJ0bWVudD8udHJpbSgpIHx8IG51bGwsXG4gICAgICAgIHRlYWNoZXJOb1xuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDliLfmlrDnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3RlYWNoZXJzJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgZGF0YTogdGVhY2hlcixcbiAgICAgIG1lc3NhZ2U6ICfmjIflr7zogIHluIjmt7vliqDmiJDlip/vvIEnXG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5Yib5bu66ICB5biI5aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+WIm+W7uuiAgeW4iOWksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDliKDpmaTmjIflr7zogIHluIhcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRlYWNoZXIoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG5cbiAgICAvLyDmo4Dmn6XogIHluIjmmK/lkKblrZjlnKhcbiAgICBjb25zdCBleGlzdGluZ1RlYWNoZXIgPSBhd2FpdCBwcmlzbWEudGVhY2hlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH1cbiAgICB9KVxuXG4gICAgaWYgKCFleGlzdGluZ1RlYWNoZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5oyH5a+86ICB5biI5LiN5a2Y5ZyoJ1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOajgOafpeaYr+WQpuacieWFs+iBlOeahOaKpeWQjeiusOW9lVxuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbkNvdW50ID0gYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi5jb3VudCh7XG4gICAgICB3aGVyZTogeyB0ZWFjaGVySWQ6IGlkIH1cbiAgICB9KVxuXG4gICAgaWYgKHJlZ2lzdHJhdGlvbkNvdW50ID4gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfor6XogIHluIjov5jmnInlhbPogZTnmoTmiqXlkI3orrDlvZXvvIzml6Dms5XliKDpmaQnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5Yig6Zmk6ICB5biI6K6w5b2VXG4gICAgYXdhaXQgcHJpc21hLnRlYWNoZXIuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH1cbiAgICB9KVxuXG4gICAgLy8g5Yi35paw57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi90ZWFjaGVycycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6ICfmjIflr7zogIHluIjliKDpmaTmiJDlip/vvIEnXG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5Yig6Zmk6ICB5biI5aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+WIoOmZpOiAgeW4iOWksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDojrflj5bmiYDmnInmiqXlkI3orrDlvZXvvIjnrqHnkIblkZjlrqHmibnkuJPnlKjvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFJlZ2lzdHJhdGlvbnMoKSB7XG4gIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gIFxuICB0cnkge1xuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbnMgPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmZpbmRNYW55KHtcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgY29tcGV0aXRpb246IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxuICAgICAgICAgICAgZGVhZGxpbmU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRlYWNoZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIHRlYWNoZXJObzogdHJ1ZSxcbiAgICAgICAgICAgIGRlcGFydG1lbnQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgZW1haWw6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb3JkZXJCeToge1xuICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJ1xuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVnaXN0cmF0aW9uc1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaKpeWQjeiusOW9leWksei0pTonLCBlcnJvcilcbiAgICB0aHJvdyBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiBuZXcgRXJyb3IoJ+iOt+WPluaKpeWQjeiusOW9leWksei0pe+8jOivt+eojeWQjumHjeivlScpXG4gIH1cbn1cblxuLyoqXG4gKiDlrqHmoLjmiqXlkI3orrDlvZVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJldmlld1JlZ2lzdHJhdGlvbihyZWdpc3RyYXRpb25JZDogc3RyaW5nLCBzdGF0dXM6IHN0cmluZywgZmVlZGJhY2s/OiBzdHJpbmcpIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgLy8g6aqM6K+B54q25oCB5YC8XG4gICAgY29uc3QgdmFsaWRTdGF0dXNlcyA9IFsnUEVORElORycsICdBUFBST1ZFRCcsICdSRUpFQ1RFRF9SRVRSWScsICdSRUpFQ1RFRF9GSU5BTCddXG4gICAgaWYgKCF2YWxpZFN0YXR1c2VzLmluY2x1ZGVzKHN0YXR1cykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5peg5pWI55qE5a6h5om554q25oCBJylcbiAgICB9XG5cbiAgICAvLyDlpoLmnpznirbmgIHkuLogUkVKRUNURURfUkVUUlkg5oiWIFJFSkVDVEVEX0ZJTkFM77yM5b+F6aG75o+Q5L6b5Y+N6aaI5oSP6KeBXG4gICAgaWYgKChzdGF0dXMgPT09ICdSRUpFQ1RFRF9SRVRSWScgfHwgc3RhdHVzID09PSAnUkVKRUNURURfRklOQUwnKSAmJiAoIWZlZWRiYWNrIHx8IGZlZWRiYWNrLnRyaW0oKS5sZW5ndGggPT09IDApKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ+mps+WbnueUs+ivt+aXtuW/hemhu+aPkOS+m+WPjemmiOaEj+ingScpXG4gICAgfVxuXG4gICAgLy8g5qOA5p+l5oql5ZCN6K6w5b2V5piv5ZCm5a2Y5ZyoXG4gICAgY29uc3QgZXhpc3RpbmdSZWdpc3RyYXRpb24gPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHJlZ2lzdHJhdGlvbklkIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIGNvbXBldGl0aW9uOiB0cnVlLFxuICAgICAgICB1c2VyOiB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghZXhpc3RpbmdSZWdpc3RyYXRpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5oql5ZCN6K6w5b2V5LiN5a2Y5ZyoJylcbiAgICB9XG5cbiAgICAvLyDmm7TmlrDmiqXlkI3orrDlvZVcbiAgICBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogcmVnaXN0cmF0aW9uSWQgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBmZWVkYmFjazogZmVlZGJhY2s/LnRyaW0oKSB8fCBudWxsXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIOWmguaenOWuoeaJuemAmui/h++8jOiHquWKqOeUn+aIkOaIkOWwseiusOW9lVxuICAgIGlmIChzdGF0dXMgPT09ICdBUFBST1ZFRCcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIOajgOafpeaYr+WQpuW3suWtmOWcqOebuOWQjOeahOaIkOWwseiusOW9le+8iOmBv+WFjemHjeWkjeeUn+aIkO+8iVxuICAgICAgICBjb25zdCBleGlzdGluZ0FjaGlldmVtZW50ID0gYXdhaXQgcHJpc21hLmFjaGlldmVtZW50LmZpbmRGaXJzdCh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIHVzZXJJZDogZXhpc3RpbmdSZWdpc3RyYXRpb24udXNlcklkLFxuICAgICAgICAgICAgdGl0bGU6IGV4aXN0aW5nUmVnaXN0cmF0aW9uLmNvbXBldGl0aW9uLm5hbWUsXG4gICAgICAgICAgICB0eXBlOiAnQVdBUkQnIC8vIOernui1m+iOt+Wllum7mOiupOS4uuWllumhueexu+Wei1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIWV4aXN0aW5nQWNoaWV2ZW1lbnQpIHtcbiAgICAgICAgICAvLyDmoLnmja7nq57otZvnsbvliKvnoa7lrprmiJDlsLHnuqfliKtcbiAgICAgICAgICBsZXQgYWNoaWV2ZW1lbnRMZXZlbDogJ1NUQVRFJyB8ICdQUk9WSU5DRScgfCAnU0NIT09MJyA9ICdTQ0hPT0wnXG4gICAgICAgICAgaWYgKGV4aXN0aW5nUmVnaXN0cmF0aW9uLmNvbXBldGl0aW9uLmNhdGVnb3J5ID09PSAnVEVDSE5JQ0FMJyB8fCBcbiAgICAgICAgICAgICAgZXhpc3RpbmdSZWdpc3RyYXRpb24uY29tcGV0aXRpb24uY2F0ZWdvcnkgPT09ICdBSScpIHtcbiAgICAgICAgICAgIGFjaGlldmVtZW50TGV2ZWwgPSAnU1RBVEUnXG4gICAgICAgICAgfSBlbHNlIGlmIChleGlzdGluZ1JlZ2lzdHJhdGlvbi5jb21wZXRpdGlvbi5jYXRlZ29yeSA9PT0gJ1BST0dSQU1NSU5HJyB8fCBcbiAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUmVnaXN0cmF0aW9uLmNvbXBldGl0aW9uLmNhdGVnb3J5ID09PSAnSU5OT1ZBVElPTicpIHtcbiAgICAgICAgICAgIGFjaGlldmVtZW50TGV2ZWwgPSAnUFJPVklOQ0UnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8g5Yib5bu65oiQ5bCx6K6w5b2VXG4gICAgICAgICAgYXdhaXQgcHJpc21hLmFjaGlldmVtZW50LmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIHVzZXJJZDogZXhpc3RpbmdSZWdpc3RyYXRpb24udXNlcklkLFxuICAgICAgICAgICAgICB0aXRsZTogZXhpc3RpbmdSZWdpc3RyYXRpb24uY29tcGV0aXRpb24ubmFtZSxcbiAgICAgICAgICAgICAgdHlwZTogJ0FXQVJEJyxcbiAgICAgICAgICAgICAgbGV2ZWw6IGFjaGlldmVtZW50TGV2ZWwsXG4gICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksIC8vIOS9v+eUqOWuoeaJuemAmui/h+eahOaXtumXtOS9nOS4uuiOt+W+l+aXtumXtFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhg5bey5Li655So5oi3ICR7ZXhpc3RpbmdSZWdpc3RyYXRpb24udXNlcklkfSDoh6rliqjnlJ/miJDmiJDlsLHorrDlvZXvvJoke2V4aXN0aW5nUmVnaXN0cmF0aW9uLmNvbXBldGl0aW9uLm5hbWV9YClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoYWNoaWV2ZW1lbnRFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfoh6rliqjnlJ/miJDmiJDlsLHorrDlvZXlpLHotKU6JywgYWNoaWV2ZW1lbnRFcnJvcilcbiAgICAgICAgLy8g5LiN5b2x5ZON5a6h5om55rWB56iL77yM5Y+q6K6w5b2V6ZSZ6K+vXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g6YeN5paw6aqM6K+B57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9yZWdpc3RyYXRpb25zJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2ZpbGUnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vYWNoaWV2ZW1lbnRzJykgLy8g5Yi35paw566h55CG5ZGY5oiQ5bCx6aG16Z2i77yI5aaC5p6c5a2Y5Zyo77yJXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IHN0YXR1cyA9PT0gJ0FQUFJPVkVEJyA/ICfmiqXlkI3lt7LpgJrov4fvvIzlt7Loh6rliqjnlJ/miJDmiJDlsLHorrDlvZXvvIEnIDogJ+aKpeWQjeW3suabtOaWsCdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCflrqHmoLjmiqXlkI3lpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5a6h5qC45aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPlueuoeeQhuWRmOaOp+WItuWPsOe7n+iuoeaVsOaNrlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFzaGJvYXJkU3RhdHMoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBjb25zdCBjbGVyayA9IGF3YWl0IGNsZXJrQ2xpZW50KClcbiAgICBcbiAgICAvLyDojrflj5bnlKjmiLfmgLvmlbDvvIzmt7vliqDplJnor6/lpITnkIZcbiAgICBsZXQgdG90YWxVc2VycyA9IDBcbiAgICB0cnkge1xuICAgICAgdG90YWxVc2VycyA9IGF3YWl0IGNsZXJrLnVzZXJzLmdldENvdW50KClcbiAgICB9IGNhdGNoIChjbGVya0Vycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfojrflj5bnlKjmiLfmgLvmlbDlpLHotKU6JywgY2xlcmtFcnJvcilcbiAgICAgIC8vIOWmguaenOaYr+e9kee7nOaIliBBUEkg6ZSZ6K+v77yM5L2/55So6buY6K6k5YC8XG4gICAgICBpZiAoY2xlcmtFcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIChcbiAgICAgICAgY2xlcmtFcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdmZXRjaCcpIHx8IFxuICAgICAgICBjbGVya0Vycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ25ldHdvcmsnKSB8fFxuICAgICAgICBjbGVya0Vycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ0VDT05OUkVGVVNFRCcpIHx8XG4gICAgICAgIGNsZXJrRXJyb3IubWVzc2FnZS5pbmNsdWRlcygndGltZW91dCcpIHx8XG4gICAgICAgIGNsZXJrRXJyb3IubWVzc2FnZS5pbmNsdWRlcygnQ2xlcmtBUElSZXNwb25zZUVycm9yJylcbiAgICAgICkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcign572R57uc5oiWIENsZXJrIEFQSSDplJnor6/vvIzkvb/nlKjpu5jorqTnlKjmiLfmlbAgMCcpXG4gICAgICB9IGVsc2UgaWYgKGNsZXJrRXJyb3IgJiYgdHlwZW9mIGNsZXJrRXJyb3IgPT09ICdvYmplY3QnICYmICdjbGVya0Vycm9yJyBpbiBjbGVya0Vycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NsZXJrIEFQSSDplJnor6/or6bmg4U6JywgSlNPTi5zdHJpbmdpZnkoY2xlcmtFcnJvciwgbnVsbCwgMikpXG4gICAgICB9XG4gICAgICB0b3RhbFVzZXJzID0gMCAvLyDkvb/nlKjpu5jorqTlgLxcbiAgICB9XG4gICAgXG4gICAgLy8g5bm26KGM6I635Y+W5YW25LuW57uf6K6h5pWw5o2uXG4gICAgY29uc3QgW1xuICAgICAgdG90YWxDb21wZXRpdGlvbnMsXG4gICAgICB0b3RhbFJlZ2lzdHJhdGlvbnMsXG4gICAgICBwZW5kaW5nUmV2aWV3cyxcbiAgICAgIGNhdGVnb3J5U3RhdHMsXG4gICAgICB0b3BDb21wZXRpdGlvbnMsXG4gICAgICByZWNlbnRQZW5kaW5nXG4gICAgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIC8vIOi1m+S6i+aAu+aVsFxuICAgICAgcHJpc21hLmNvbXBldGl0aW9uLmNvdW50KCksXG4gICAgICBcbiAgICAgIC8vIOaKpeWQjeaAu+aVsFxuICAgICAgcHJpc21hLnJlZ2lzdHJhdGlvbi5jb3VudCgpLFxuICAgICAgXG4gICAgICAvLyDlvoXlrqHmoLjmlbDph49cbiAgICAgIHByaXNtYS5yZWdpc3RyYXRpb24uY291bnQoe1xuICAgICAgICB3aGVyZTogeyBzdGF0dXM6ICdQRU5ESU5HJyB9XG4gICAgICB9KSxcbiAgICAgIFxuICAgICAgLy8g5oyJ5YiG57G757uf6K6h6LWb5LqL5pWw6YePXG4gICAgICBwcmlzbWEuY29tcGV0aXRpb24uZ3JvdXBCeSh7XG4gICAgICAgIGJ5OiBbJ2NhdGVnb3J5J10sXG4gICAgICAgIF9jb3VudDoge1xuICAgICAgICAgIGlkOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgXG4gICAgICAvLyDmiqXlkI3kurrmlbDmnIDlpJrnmoTliY015Liq6LWb5LqLXG4gICAgICBwcmlzbWEuY29tcGV0aXRpb24uZmluZE1hbnkoe1xuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgIF9jb3VudDoge1xuICAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbnM6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgICByZWdpc3RyYXRpb25zOiB7XG4gICAgICAgICAgICBfY291bnQ6ICdkZXNjJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGFrZTogNVxuICAgICAgfSksXG4gICAgICBcbiAgICAgIC8vIOacgOaWsDXmnaHlvoXlrqHmoLjmiqXlkI1cbiAgICAgIHByaXNtYS5yZWdpc3RyYXRpb24uZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyBzdGF0dXM6ICdQRU5ESU5HJyB9LFxuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICBhcHBsaWNhbnROYW1lOiB0cnVlLFxuICAgICAgICAgIGNvbXBldGl0aW9uOiB7XG4gICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgbmFtZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxuICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICBuYW1lOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcmRlckJ5OiB7XG4gICAgICAgICAgY3JlYXRlZEF0OiAnZGVzYydcbiAgICAgICAgfSxcbiAgICAgICAgdGFrZTogNVxuICAgICAgfSlcbiAgICBdKVxuXG4gICAgLy8g5aSE55CG5YiG57G757uf6K6h5pWw5o2u77yM5ZCI5bm255u45Ly85YiG57G7XG4gICAgY29uc3QgcHJvY2Vzc2VkQ2F0ZWdvcnlTdGF0cyA9IGNhdGVnb3J5U3RhdHMucmVkdWNlKChhY2M6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH1bXSwgaXRlbTogYW55KSA9PiB7XG4gICAgICBjb25zdCBjYXRlZ29yeSA9IGl0ZW0uY2F0ZWdvcnkgfHwgJ+WFtuS7lidcbiAgICAgIGNvbnN0IGV4aXN0aW5nSXRlbSA9IGFjYy5maW5kKChzdGF0OiB7IG5hbWU6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9KSA9PiBzdGF0Lm5hbWUgPT09IGNhdGVnb3J5KVxuICAgICAgXG4gICAgICBpZiAoZXhpc3RpbmdJdGVtKSB7XG4gICAgICAgIGV4aXN0aW5nSXRlbS52YWx1ZSArPSBpdGVtLl9jb3VudC5pZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgIG5hbWU6IGNhdGVnb3J5LFxuICAgICAgICAgIHZhbHVlOiBpdGVtLl9jb3VudC5pZFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSwgW10gYXMgeyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfVtdKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsVXNlcnMsXG4gICAgICB0b3RhbENvbXBldGl0aW9ucyxcbiAgICAgIHRvdGFsUmVnaXN0cmF0aW9ucyxcbiAgICAgIHBlbmRpbmdSZXZpZXdzLFxuICAgICAgY2F0ZWdvcnlTdGF0czogcHJvY2Vzc2VkQ2F0ZWdvcnlTdGF0cyxcbiAgICAgIHRvcENvbXBldGl0aW9uczogdG9wQ29tcGV0aXRpb25zLm1hcCgoY29tcDogYW55KSA9PiAoe1xuICAgICAgICBuYW1lOiBjb21wLm5hbWUsXG4gICAgICAgIHJlZ2lzdHJhdGlvbnM6IGNvbXAuX2NvdW50LnJlZ2lzdHJhdGlvbnNcbiAgICAgIH0pKSxcbiAgICAgIHJlY2VudFBlbmRpbmc6IHJlY2VudFBlbmRpbmcubWFwKChyZWc6IGFueSkgPT4gKHtcbiAgICAgICAgaWQ6IHJlZy5pZCxcbiAgICAgICAgYXBwbGljYW50TmFtZTogcmVnLmFwcGxpY2FudE5hbWUgfHwgcmVnLnVzZXI/Lm5hbWUgfHwgJ+acquefpScsXG4gICAgICAgIGNvbXBldGl0aW9uTmFtZTogcmVnLmNvbXBldGl0aW9uLm5hbWUsXG4gICAgICAgIGNyZWF0ZWRBdDogcmVnLmNyZWF0ZWRBdFxuICAgICAgfSkpXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluS7quihqOadv+e7n+iuoeaVsOaNruWksei0pTonLCBlcnJvcilcbiAgICBcbiAgICAvLyDlpoLmnpzmmK/mnYPpmZDpqozor4HplJnor6/vvIzov5Tlm57pu5jorqTnu5/orqHmlbDmja5cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAoXG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfnvZHnu5zor7fmsYLotoXml7YnKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn6K6k6K+B5pyN5YqhJykgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+adg+mZkOS4jei2sycpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfmnKrnmbvlvZUnKVxuICAgICkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+adg+mZkOmqjOivgeWksei0pe+8jOi/lOWbnum7mOiupOe7n+iuoeaVsOaNrjonLCBlcnJvci5tZXNzYWdlKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG90YWxVc2VyczogMCxcbiAgICAgICAgdG90YWxDb21wZXRpdGlvbnM6IDAsXG4gICAgICAgIHRvdGFsUmVnaXN0cmF0aW9uczogMCxcbiAgICAgICAgcGVuZGluZ1Jldmlld3M6IDAsXG4gICAgICAgIGNhdGVnb3J5U3RhdHM6IFtdLFxuICAgICAgICB0b3BDb21wZXRpdGlvbnM6IFtdLFxuICAgICAgICByZWNlbnRQZW5kaW5nOiBbXVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyDlhbbku5bplJnor6/kuZ/ov5Tlm57pu5jorqTnu5/orqHmlbDmja7vvIzpmLLmraLpobXpnaLltKnmuoNcbiAgICBjb25zb2xlLmVycm9yKCfmnKrnn6XplJnor6/vvIzov5Tlm57pu5jorqTnu5/orqHmlbDmja46JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsVXNlcnM6IDAsXG4gICAgICB0b3RhbENvbXBldGl0aW9uczogMCxcbiAgICAgIHRvdGFsUmVnaXN0cmF0aW9uczogMCxcbiAgICAgIHBlbmRpbmdSZXZpZXdzOiAwLFxuICAgICAgY2F0ZWdvcnlTdGF0czogW10sXG4gICAgICB0b3BDb21wZXRpdGlvbnM6IFtdLFxuICAgICAgcmVjZW50UGVuZGluZzogW11cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDmibnph4/lr7zlhaXmjIflr7zogIHluIhcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJhdGNoSW1wb3J0VGVhY2hlcnModGVhY2hlcnNEYXRhOiB7IG5hbWU6IHN0cmluZzsgZGVwYXJ0bWVudD86IHN0cmluZyB9W10pIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgY29uc3QgY2xlcmsgPSBhd2FpdCBjbGVya0NsaWVudCgpXG4gIFxuICB0cnkge1xuICAgIC8vIOiOt+WPluW9k+WJjeW5tOS7vVxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG4gICAgY29uc3QgeWVhclByZWZpeCA9IGBUJHtjdXJyZW50WWVhcn1gXG4gICAgXG4gICAgLy8g5p+l6K+i5b2T5YmN5bm05Lu95pyA5paw55qE5pWZ5biI57yW5Y+3XG4gICAgY29uc3QgbGF0ZXN0VGVhY2hlciA9IGF3YWl0IHByaXNtYS50ZWFjaGVyLmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICB0ZWFjaGVyTm86IHtcbiAgICAgICAgICBzdGFydHNXaXRoOiB5ZWFyUHJlZml4XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvcmRlckJ5OiB7XG4gICAgICAgIHRlYWNoZXJObzogJ2Rlc2MnXG4gICAgICB9XG4gICAgfSlcbiAgICBcbiAgICAvLyDorqHnrpfotbflp4vmtYHmsLTlj7dcbiAgICBsZXQgc2VyaWFsTnVtYmVyID0gMVxuICAgIGlmIChsYXRlc3RUZWFjaGVyKSB7XG4gICAgICBjb25zdCBsYXRlc3RTZXJpYWwgPSBwYXJzZUludChsYXRlc3RUZWFjaGVyLnRlYWNoZXJOby5zbGljZSgtMykpXG4gICAgICBpZiAoIWlzTmFOKGxhdGVzdFNlcmlhbCkpIHtcbiAgICAgICAgc2VyaWFsTnVtYmVyID0gbGF0ZXN0U2VyaWFsICsgMVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyDmoLzlvI/ljJbmlZnluIjmlbDmja5cbiAgICBjb25zdCBmb3JtYXR0ZWRUZWFjaGVycyA9IHRlYWNoZXJzRGF0YS5tYXAoKHRlYWNoZXIsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZWFjaGVyTm8gPSBgJHt5ZWFyUHJlZml4fSR7c2VyaWFsTnVtYmVyLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gXG4gICAgICBzZXJpYWxOdW1iZXIrK1xuICAgICAgXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiB0ZWFjaGVyLm5hbWUudHJpbSgpLFxuICAgICAgICBkZXBhcnRtZW50OiB0ZWFjaGVyLmRlcGFydG1lbnQ/LnRyaW0oKSB8fCBudWxsLFxuICAgICAgICB0ZWFjaGVyTm9cbiAgICAgIH1cbiAgICB9KVxuICAgIFxuICAgIC8vIOaJuemHj+aPkuWFpeaVsOaNruW6k1xuICAgIGF3YWl0IHByaXNtYS50ZWFjaGVyLmNyZWF0ZU1hbnkoe1xuICAgICAgZGF0YTogZm9ybWF0dGVkVGVhY2hlcnNcbiAgICB9KVxuICAgIFxuICAgIC8vIOmHjeaWsOmqjOivgee8k+WtmFxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vdGVhY2hlcnMnKVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgY291bnQ6IGZvcm1hdHRlZFRlYWNoZXJzLmxlbmd0aCxcbiAgICAgIG1lc3NhZ2U6IGDmiJDlip/lr7zlhaUgJHtmb3JtYXR0ZWRUZWFjaGVycy5sZW5ndGh9IOS9jeaMh+WvvOiAgeW4iGBcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5om56YeP5a+85YWl5oyH5a+86ICB5biI5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcign5om56YeP5a+85YWl5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJylcbiAgfVxufVxuXG4vKipcbiAqIOaJuemHj+WuoeaJueaKpeWQjeiusOW9lVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYmF0Y2hSZXZpZXdSZWdpc3RyYXRpb25zKFxuICBpZHM6IHN0cmluZ1tdLCBcbiAgc3RhdHVzOiAnQVBQUk9WRUQnIHwgJ1JFSkVDVEVEX1JFVFJZJyB8ICdSRUpFQ1RFRF9GSU5BTCcsIFxuICBmZWVkYmFjaz86IHN0cmluZ1xuKSB7XG4gIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gIFxuICB0cnkge1xuICAgIC8vIOmqjOivgeeKtuaAgeWAvFxuICAgIGNvbnN0IHZhbGlkU3RhdHVzZXMgPSBbJ0FQUFJPVkVEJywgJ1JFSkVDVEVEX1JFVFJZJywgJ1JFSkVDVEVEX0ZJTkFMJ11cbiAgICBpZiAoIXZhbGlkU3RhdHVzZXMuaW5jbHVkZXMoc3RhdHVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfml6DmlYjnmoTlrqHmibnnirbmgIEnKVxuICAgIH1cblxuICAgIC8vIOWmguaenOeKtuaAgeS4uiBSRUpFQ1RFRF9SRVRSWSDmiJYgUkVKRUNURURfRklOQUzvvIzlv4Xpobvmj5Dkvpvlj43ppojmhI/op4FcbiAgICBpZiAoKHN0YXR1cyA9PT0gJ1JFSkVDVEVEX1JFVFJZJyB8fCBzdGF0dXMgPT09ICdSRUpFQ1RFRF9GSU5BTCcpICYmICghZmVlZGJhY2sgfHwgZmVlZGJhY2sudHJpbSgpLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign6amz5Zue55Sz6K+35pe25b+F6aG75o+Q5L6b5Y+N6aaI5oSP6KeBJylcbiAgICB9XG5cbiAgICAvLyDpqozor4FJROaVsOe7hFxuICAgIGlmICghaWRzIHx8IGlkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign6K+36YCJ5oup6KaB5a6h5om555qE5oql5ZCN6K6w5b2VJylcbiAgICB9XG5cbiAgICAvLyDojrflj5bopoHmm7TmlrDnmoTmiqXlkI3orrDlvZXor6bmg4XvvIjnlKjkuo7nlJ/miJDmiJDlsLHvvIlcbiAgICBjb25zdCByZWdpc3RyYXRpb25zVG9VcGRhdGUgPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7IFxuICAgICAgICBpZDogeyBpbjogaWRzIH1cbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIGNvbXBldGl0aW9uOiB0cnVlLFxuICAgICAgICB1c2VyOiB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIOaJuemHj+abtOaWsOaKpeWQjeiusOW9lVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24udXBkYXRlTWFueSh7XG4gICAgICB3aGVyZTogeyBcbiAgICAgICAgaWQ6IHsgaW46IGlkcyB9XG4gICAgICB9LFxuICAgICAgZGF0YTogeyBcbiAgICAgICAgc3RhdHVzLCBcbiAgICAgICAgZmVlZGJhY2s6IGZlZWRiYWNrPy50cmltKCkgfHwgbnVsbCBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g5aaC5p6c5a6h5om56YCa6L+H77yM5om56YeP55Sf5oiQ5oiQ5bCx6K6w5b2VXG4gICAgaWYgKHN0YXR1cyA9PT0gJ0FQUFJPVkVEJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChjb25zdCByZWdpc3RyYXRpb24gb2YgcmVnaXN0cmF0aW9uc1RvVXBkYXRlKSB7XG4gICAgICAgICAgLy8g5qOA5p+l5piv5ZCm5bey5a2Y5Zyo55u45ZCM55qE5oiQ5bCx6K6w5b2V77yI6YG/5YWN6YeN5aSN55Sf5oiQ77yJXG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdBY2hpZXZlbWVudCA9IGF3YWl0IHByaXNtYS5hY2hpZXZlbWVudC5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgdXNlcklkOiByZWdpc3RyYXRpb24udXNlcklkLFxuICAgICAgICAgICAgICB0aXRsZTogcmVnaXN0cmF0aW9uLmNvbXBldGl0aW9uLm5hbWUsXG4gICAgICAgICAgICAgIHR5cGU6ICdBV0FSRCcgLy8g56ue6LWb6I635aWW6buY6K6k5Li65aWW6aG557G75Z6LXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGlmICghZXhpc3RpbmdBY2hpZXZlbWVudCkge1xuICAgICAgICAgICAgLy8g5qC55o2u56ue6LWb57G75Yir56Gu5a6a5oiQ5bCx57qn5YirXG4gICAgICAgICAgICBsZXQgYWNoaWV2ZW1lbnRMZXZlbDogJ1NUQVRFJyB8ICdQUk9WSU5DRScgfCAnU0NIT09MJyA9ICdTQ0hPT0wnXG4gICAgICAgICAgICBpZiAocmVnaXN0cmF0aW9uLmNvbXBldGl0aW9uLmNhdGVnb3J5ID09PSAnVEVDSE5JQ0FMJyB8fCBcbiAgICAgICAgICAgICAgICByZWdpc3RyYXRpb24uY29tcGV0aXRpb24uY2F0ZWdvcnkgPT09ICdBSScpIHtcbiAgICAgICAgICAgICAgYWNoaWV2ZW1lbnRMZXZlbCA9ICdTVEFURSdcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVnaXN0cmF0aW9uLmNvbXBldGl0aW9uLmNhdGVnb3J5ID09PSAnUFJPR1JBTU1JTkcnIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RyYXRpb24uY29tcGV0aXRpb24uY2F0ZWdvcnkgPT09ICdJTk5PVkFUSU9OJykge1xuICAgICAgICAgICAgICBhY2hpZXZlbWVudExldmVsID0gJ1BST1ZJTkNFJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDliJvlu7rmiJDlsLHorrDlvZVcbiAgICAgICAgICAgIGF3YWl0IHByaXNtYS5hY2hpZXZlbWVudC5jcmVhdGUoe1xuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdXNlcklkOiByZWdpc3RyYXRpb24udXNlcklkLFxuICAgICAgICAgICAgICAgIHRpdGxlOiByZWdpc3RyYXRpb24uY29tcGV0aXRpb24ubmFtZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnQVdBUkQnLFxuICAgICAgICAgICAgICAgIGxldmVsOiBhY2hpZXZlbWVudExldmVsLFxuICAgICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksIC8vIOS9v+eUqOWuoeaJuemAmui/h+eahOaXtumXtOS9nOS4uuiOt+W+l+aXtumXtFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg5bey5Li655So5oi3ICR7cmVnaXN0cmF0aW9uLnVzZXJJZH0g6Ieq5Yqo55Sf5oiQ5oiQ5bCx6K6w5b2V77yaJHtyZWdpc3RyYXRpb24uY29tcGV0aXRpb24ubmFtZX1gKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoYWNoaWV2ZW1lbnRFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfmibnph4/nlJ/miJDmiJDlsLHorrDlvZXlpLHotKU6JywgYWNoaWV2ZW1lbnRFcnJvcilcbiAgICAgICAgLy8g5LiN5b2x5ZON5a6h5om55rWB56iL77yM5Y+q6K6w5b2V6ZSZ6K+vXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g6YeN5paw6aqM6K+B57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9yZWdpc3RyYXRpb25zJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2ZpbGUnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vYWNoaWV2ZW1lbnRzJykgLy8g5Yi35paw566h55CG5ZGY5oiQ5bCx6aG16Z2i77yI5aaC5p6c5a2Y5Zyo77yJXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGNvdW50OiByZXN1bHQuY291bnQsXG4gICAgICBtZXNzYWdlOiBzdGF0dXMgPT09ICdBUFBST1ZFRCcgXG4gICAgICAgID8gYOaIkOWKn+mAmui/hyAke3Jlc3VsdC5jb3VudH0g5p2h5oql5ZCN55Sz6K+377yM5bey6Ieq5Yqo55Sf5oiQ5oiQ5bCx6K6w5b2V77yBYCBcbiAgICAgICAgOiBg5oiQ5Yqf5aSE55CGICR7cmVzdWx0LmNvdW50fSDmnaHmiqXlkI3orrDlvZVgXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+aJuemHj+WuoeaJueWksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfmibnph4/lrqHmibnlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W5omA5pyJ55So5oi355qE5oiQ5bCx6K6w5b2V77yI566h55CG5ZGY5LiT55So77yJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxBY2hpZXZlbWVudHMoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBcbiAgICBjb25zdCBhY2hpZXZlbWVudHMgPSBhd2FpdCBwcmlzbWEuYWNoaWV2ZW1lbnQuZmluZE1hbnkoe1xuICAgICAgaW5jbHVkZToge1xuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgICBlbWFpbDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgY3JlYXRlZEF0OiAnZGVzYydcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGFjaGlldmVtZW50c1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaIkOWwseiusOW9leWksei0pTonLCBlcnJvcilcbiAgICBcbiAgICAvLyDlpoLmnpzmmK/mnYPpmZDpqozor4HplJnor6/vvIzov5Tlm57nqbrmlbDnu4TogIzkuI3mmK/mipvlh7rplJnor69cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAoXG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfnvZHnu5zor7fmsYLotoXml7YnKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn6K6k6K+B5pyN5YqhJykgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+adg+mZkOS4jei2sycpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfmnKrnmbvlvZUnKVxuICAgICkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+adg+mZkOmqjOivgeWksei0pe+8jOi/lOWbnuepuuaVsOe7hDonLCBlcnJvci5tZXNzYWdlKVxuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICAgIFxuICAgIC8vIOWFtuS7lumUmeivr+S5n+i/lOWbnuepuuaVsOe7hO+8jOmYsuatoumhtemdouW0qea6g1xuICAgIGNvbnNvbGUuZXJyb3IoJ+acquefpemUmeivr++8jOi/lOWbnuepuuaVsOe7hDonLCBlcnJvcilcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPluWvvOWHuuaVsOaNrlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwb3J0RGF0YShjb21wZXRpdGlvbklkOiBzdHJpbmcpIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgLy8g5p+l6K+i6K+l6LWb5LqL5LiL5omA5pyJ5bey6YCa6L+H55qE5oql5ZCN6K6w5b2VXG4gICAgY29uc3QgcmVnaXN0cmF0aW9ucyA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgY29tcGV0aXRpb25JZCxcbiAgICAgICAgc3RhdHVzOiAnQVBQUk9WRUQnXG4gICAgICB9LFxuICAgICAgaW5jbHVkZToge1xuICAgICAgICB0ZWFjaGVyOiB7XG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgICAgZGVwYXJ0bWVudDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgY3JlYXRlZEF0OiAnYXNjJ1xuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDmiYHlubPljJbmoLzlvI/ljJbmlbDmja5cbiAgICBjb25zdCBleHBvcnREYXRhID0gcmVnaXN0cmF0aW9ucy5tYXAocmVnID0+ICh7XG4gICAgICDnlLPor7fkuro6IHJlZy5hcHBsaWNhbnROYW1lIHx8ICfmnKrnn6UnLFxuICAgICAg5L2c5ZOB5ZCN56ewOiByZWcucHJvamVjdE5hbWUgfHwgJ+aXoCcsXG4gICAgICDlm6LpmJ/miJDlkZg6IHJlZy50ZWFtTWVtYmVycyB8fCAn5pegJyxcbiAgICAgIOaMh+WvvOiAgeW4iDogcmVnLnRlYWNoZXI/Lm5hbWUgfHwgJ+aXoCcsXG4gICAgICDogIHluIjlrabpmaI6IHJlZy50ZWFjaGVyPy5kZXBhcnRtZW50IHx8ICfml6AnLFxuICAgICAg5oql5ZCN6K+05piOOiByZWcubm90ZXMgfHwgJ+aXoCcsXG4gICAgICDmj5DkuqTml7bpl7Q6IHJlZy5jcmVhdGVkQXQudG9Mb2NhbGVEYXRlU3RyaW5nKCd6aC1DTicsIHtcbiAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICBtb250aDogJzItZGlnaXQnLFxuICAgICAgICBkYXk6ICcyLWRpZ2l0J1xuICAgICAgfSlcbiAgICB9KSlcblxuICAgIHJldHVybiBleHBvcnREYXRhXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W5a+85Ye65pWw5o2u5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcign6I635Y+W5a+85Ye65pWw5o2u5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJylcbiAgfVxufVxuXG4vKipcbiAqIOWIh+aNouernui1m+W9kuaho+eKtuaAgVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG9nZ2xlQ29tcGV0aXRpb25BcmNoaXZlKGlkOiBzdHJpbmcsIGN1cnJlbnRTdGF0dXM6IGJvb2xlYW4pIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgLy8g5pu05paw56ue6LWb54q25oCBXG4gICAgY29uc3QgbmV3U3RhdHVzID0gIWN1cnJlbnRTdGF0dXNcbiAgICBjb25zdCBjb21wZXRpdGlvbiA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGE6IHsgaXNBY3RpdmU6IG5ld1N0YXR1cyB9XG4gICAgfSlcblxuICAgIC8vIOmHjeaWsOmqjOivgee8k+WtmFxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vY29tcGV0aXRpb25zJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGRhdGE6IGNvbXBldGl0aW9uLFxuICAgICAgbWVzc2FnZTogbmV3U3RhdHVzID8gJ+ernui1m+W3sumHjeaWsOS4iuaeticgOiAn56ue6LWb5bey5b2S5qGjJ1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfliIfmjaLnq57otZvnirbmgIHlpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5YiH5o2i56ue6LWb54q25oCB5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxU0E2M0JzQix1TUFBQSJ9
}),
"[project]/src/app/actions/data:e7cebf [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reviewRegistration",
    ()=>$$RSC_SERVER_ACTION_10
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"700184bcf6a5e75db180067246bb5eeaabfccf0821":"reviewRegistration"},"src/app/actions/admin.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("700184bcf6a5e75db180067246bb5eeaabfccf0821", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "reviewRegistration");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWRtaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSdcbmltcG9ydCB7IGF1dGgsIGNsZXJrQ2xpZW50IH0gZnJvbSAnQGNsZXJrL25leHRqcy9zZXJ2ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnXG5cbi8qKlxuICog6aqM6K+B566h55CG5ZGY5p2D6ZmQ55qE6L6F5Yqp5Ye95pWwXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHZlcmlmeUFkbWluUGVybWlzc2lvbigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5pyq55m75b2V77yM6K+35YWI55m75b2VJylcbiAgICB9XG5cbiAgICBjb25zdCBjbGVyayA9IGF3YWl0IGNsZXJrQ2xpZW50KClcbiAgICBcbiAgICAvLyDmoLjlv4PljYfnuqfvvJrlop7liqDluKbmnInmjIfmlbDpgIDpgb/vvIjlu7bov5/vvInnmoQgMyDmrKHph43or5XmnLrliLZcbiAgICBsZXQgdXNlcjtcbiAgICBsZXQgcmV0cmllcyA9IDM7XG4gICAgXG4gICAgd2hpbGUgKHJldHJpZXMgPiAwKSB7XG4gICAgICB0cnkge1xuICAgICAgICB1c2VyID0gYXdhaXQgY2xlcmsudXNlcnMuZ2V0VXNlcih1c2VySWQpXG4gICAgICAgIGJyZWFrOyAvLyDlpoLmnpzor7fmsYLmiJDlip/vvIznq4vliLvot7Plh7rlvqrnjq9cbiAgICAgIH0gY2F0Y2ggKGNsZXJrRXJyb3I6IGFueSkge1xuICAgICAgICByZXRyaWVzIC09IDE7XG4gICAgICAgIGlmIChyZXRyaWVzID09PSAwKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignQ2xlcmsg55So5oi35p+l6K+i5b275bqV5aSx6LSl77yM5bey6ICX5bC96YeN6K+V5qyh5pWwOicsIGNsZXJrRXJyb3IpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcign572R57uc6K+35rGC6LaF5pe277yM5peg5rOV6L+e5o6l5Yiw6K6k6K+B5pyN5Yqh5Zmo77yM6K+35Yi35paw6YeN6K+VJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g562J5b6FIDUwMCDmr6vnp5LlkI7lho3ov5vooYzkuIvkuIDmrKHlsJ3or5VcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUwMCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWuieWFqOagoemqjO+8mueUseS6jiBUeXBlU2NyaXB0IOeahOexu+Wei+aOqOaWre+8jOaIkeS7rOmcgOimgeWGjeasoeehruiupCB1c2VyIOaYr+WQpuaIkOWKn+aLv+WIsFxuICAgIGlmICghdXNlciB8fCB1c2VyLnB1YmxpY01ldGFkYXRhLnJvbGUgIT09ICdhZG1pbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5p2D6ZmQ5LiN6Laz77ya5oKo55qE6LSm5Y+35LiN5piv566h55CG5ZGYJylcbiAgICB9XG5cbiAgICByZXR1cm4geyB1c2VySWQsIHVzZXIgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+euoeeQhuWRmOadg+mZkOagoemqjOWksei0pTonLCBlcnJvcilcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5p2D6ZmQ5qCh6aqM6YGH5Yiw5pyq55+l6ZSZ6K+vJylcbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPluaJgOacieeUqOaIt1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVXNlcnMoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBcbiAgICBjb25zdCBjbGVyayA9IGF3YWl0IGNsZXJrQ2xpZW50KClcbiAgICBjb25zdCB1c2VyTGlzdCA9IGF3YWl0IGNsZXJrLnVzZXJzLmdldFVzZXJMaXN0KHtcbiAgICAgIGxpbWl0OiAxMDAsXG4gICAgICBvcmRlckJ5OiAnLWNyZWF0ZWRfYXQnXG4gICAgfSlcblxuICAgIC8vIOi/lOWbnueyvueugOeahOeUqOaIt+S/oeaBr1xuICAgIHJldHVybiB1c2VyTGlzdC5kYXRhLm1hcCh1c2VyID0+ICh7XG4gICAgICBpZDogdXNlci5pZCxcbiAgICAgIGZpcnN0TmFtZTogdXNlci5maXJzdE5hbWUsXG4gICAgICBsYXN0TmFtZTogdXNlci5sYXN0TmFtZSxcbiAgICAgIGVtYWlsQWRkcmVzc2VzOiB1c2VyLmVtYWlsQWRkcmVzc2VzLFxuICAgICAgaW1hZ2VVcmw6IHVzZXIuaW1hZ2VVcmxcbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfojrflj5bnlKjmiLfliJfooajlpLHotKU6JywgZXJyb3IpXG4gICAgXG4gICAgLy8g5qOA5p+l5piv5ZCm5pivIENsZXJrIEFQSSDplJnor69cbiAgICBpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAnY2xlcmtFcnJvcicgaW4gZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NsZXJrIEFQSSDplJnor6/or6bmg4U6JywgSlNPTi5zdHJpbmdpZnkoZXJyb3IsIG51bGwsIDIpKVxuICAgICAgLy8g6L+U5Zue56m65pWw57uE6ICM5LiN5piv5oqb5Ye66ZSZ6K+v77yM6Ziy5q2i6aG16Z2i5bSp5rqDXG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgXG4gICAgLy8g5qOA5p+l5piv5ZCm5piv572R57uc6ZSZ6K+v5oiW5YW25LuWIEFQSSDplJnor69cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgaWYgKGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ2ZldGNoJykgfHwgXG4gICAgICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnbmV0d29yaycpIHx8XG4gICAgICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnRUNPTk5SRUZVU0VEJykgfHxcbiAgICAgICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCd0aW1lb3V0JykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcign572R57uc6L+e5o6l6ZSZ6K+v77yM5Y+v6IO95pivIENsZXJrIOacjeWKoeS4jeWPr+eUqDonLCBlcnJvci5tZXNzYWdlKVxuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ0NsZXJrQVBJUmVzcG9uc2VFcnJvcicpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NsZXJrIEFQSSDlk43lupTplJnor686JywgZXJyb3IubWVzc2FnZSlcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOWFtuS7luacquefpemUmeivr++8jOi/lOWbnuepuuaVsOe7hOmYsuatoumhtemdouW0qea6g1xuICAgIGNvbnNvbGUuZXJyb3IoJ+acquefpemUmeivr+exu+Wei++8jOi/lOWbnuepuuaVsOe7hDonLCBlcnJvcilcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG4vKipcbiAqIOagueaNrueUqOaIt0lE6I635Y+W5oiQ5bCxXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBY2hpZXZlbWVudHNCeVVzZXJJZCh0YXJnZXRVc2VySWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gICAgXG4gICAgY29uc3QgYWNoaWV2ZW1lbnRzID0gYXdhaXQgcHJpc21hLmFjaGlldmVtZW50LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7IHVzZXJJZDogdGFyZ2V0VXNlcklkIH0sXG4gICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogJ2Rlc2MnIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGFjaGlldmVtZW50c1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPlueUqOaIt+aIkOWwseWksei0pTonLCBlcnJvcilcbiAgICB0aHJvdyBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiBuZXcgRXJyb3IoJ+iOt+WPlueUqOaIt+aIkOWwseWksei0pScpXG4gIH1cbn1cblxuLyoqXG4gKiDnrqHnkIblkZjliKDpmaTmiJDlsLHvvIjml6Dop4bmiYDmnInogIXvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkbWluRGVsZXRlQWNoaWV2ZW1lbnQoYWNoaWV2ZW1lbnRJZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBcbiAgICAvLyDnm7TmjqXliKDpmaTmiJDlsLHorrDlvZXvvIzkuI3mo4Dmn6XmiYDmnInogIVcbiAgICBhd2FpdCBwcmlzbWEuYWNoaWV2ZW1lbnQuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBhY2hpZXZlbWVudElkIH1cbiAgICB9KVxuXG4gICAgLy8g6YeN5paw6aqM6K+B57yT5a2Y77yM5Yi35paw55u45YWz6aG16Z2iXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi91c2VycycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9maWxlJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FjaGlldmVtZW50cycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6ICfmiJDlsLHlt7LmiJDlip/liKDpmaQnXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+WIoOmZpOaIkOWwseWksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfliKDpmaTmiJDlsLHlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog5Yib5bu65paw56ue6LWb77yI566h55CG5ZGY5p2D6ZmQ77yJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb21wZXRpdGlvbihkYXRhOiB7XG4gIG5hbWU6IHN0cmluZ1xuICBjYXRlZ29yeTogc3RyaW5nXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gIGRlYWRsaW5lOiBzdHJpbmdcbiAgbWF4UGFydGljaXBhbnRzOiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIC8vIOmqjOivgei+k+WFpeaVsOaNrlxuICAgIGlmICghZGF0YS5uYW1lIHx8IGRhdGEubmFtZS50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ernui1m+WQjeensOS4jeiDveS4uuepuidcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKCFkYXRhLmNhdGVnb3J5KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ivt+mAieaLqeernui1m+WIhuexuydcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKCFkYXRhLmRlYWRsaW5lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ivt+mAieaLqeaIquatouaXpeacnydcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGVhZGxpbmVEYXRlID0gbmV3IERhdGUoZGF0YS5kZWFkbGluZSlcbiAgICBpZiAoaXNOYU4oZGVhZGxpbmVEYXRlLmdldFRpbWUoKSkgfHwgZGVhZGxpbmVEYXRlIDw9IG5ldyBEYXRlKCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5oiq5q2i5pel5pyf5b+F6aG75piv5pyq5p2l5pe26Ze0J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBtYXhQYXJ0aWNpcGFudHNOdW0gPSBwYXJzZUludChkYXRhLm1heFBhcnRpY2lwYW50cylcbiAgICBpZiAoaXNOYU4obWF4UGFydGljaXBhbnRzTnVtKSB8fCBtYXhQYXJ0aWNpcGFudHNOdW0gPD0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfkurrmlbDkuIrpmZDlv4XpobvmmK/lpKfkuo4w55qE5pWw5a2XJ1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyDliJvlu7rnq57otZtcbiAgICBjb25zdCBjb21wZXRpdGlvbiA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUudHJpbSgpLFxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24/LnRyaW0oKSB8fCAnJyxcbiAgICAgICAgZGVhZGxpbmU6IGRlYWRsaW5lRGF0ZSxcbiAgICAgICAgbWF4UGFydGljaXBhbnRzOiBtYXhQYXJ0aWNpcGFudHNOdW0sXG4gICAgICAgIGN1cnJlbnRQYXJ0aWNpcGFudHM6IDBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g5Yi35paw57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jb21wZXRpdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vY29tcGV0aXRpb25zJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgZGF0YTogY29tcGV0aXRpb24sXG4gICAgICBtZXNzYWdlOiAn56ue6LWb5Yib5bu65oiQ5Yqf77yBJ1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+WIm+W7uuernui1m+Wksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfliJvlu7rnq57otZvlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog5pu05paw56ue6LWb77yI566h55CG5ZGY5p2D6ZmQ77yJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDb21wZXRpdGlvbihpZDogc3RyaW5nLCBkYXRhOiB7XG4gIG5hbWU6IHN0cmluZ1xuICBjYXRlZ29yeTogc3RyaW5nXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gIGRlYWRsaW5lOiBzdHJpbmdcbiAgbWF4UGFydGljaXBhbnRzOiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIC8vIOmqjOivgei+k+WFpeaVsOaNrlxuICAgIGlmICghZGF0YS5uYW1lIHx8IGRhdGEubmFtZS50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ernui1m+WQjeensOS4jeiDveS4uuepuidcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKCFkYXRhLmNhdGVnb3J5KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ivt+mAieaLqeernui1m+WIhuexuydcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKCFkYXRhLmRlYWRsaW5lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ivt+mAieaLqeaIquatouaXpeacnydcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGVhZGxpbmVEYXRlID0gbmV3IERhdGUoZGF0YS5kZWFkbGluZSlcbiAgICBpZiAoaXNOYU4oZGVhZGxpbmVEYXRlLmdldFRpbWUoKSkgfHwgZGVhZGxpbmVEYXRlIDw9IG5ldyBEYXRlKCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5oiq5q2i5pel5pyf5b+F6aG75piv5pyq5p2l5pe26Ze0J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBtYXhQYXJ0aWNpcGFudHNOdW0gPSBwYXJzZUludChkYXRhLm1heFBhcnRpY2lwYW50cylcbiAgICBpZiAoaXNOYU4obWF4UGFydGljaXBhbnRzTnVtKSB8fCBtYXhQYXJ0aWNpcGFudHNOdW0gPD0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfkurrmlbDkuIrpmZDlv4XpobvmmK/lpKfkuo4w55qE5pWw5a2XJ1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOajgOafpeernui1m+aYr+WQpuWtmOWcqFxuICAgIGNvbnN0IGV4aXN0aW5nQ29tcGV0aXRpb24gPSBhd2FpdCBwcmlzbWEuY29tcGV0aXRpb24uZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9XG4gICAgfSlcblxuICAgIGlmICghZXhpc3RpbmdDb21wZXRpdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfnq57otZvkuI3lrZjlnKgnXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOabtOaWsOernui1m1xuICAgIGNvbnN0IGNvbXBldGl0aW9uID0gYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUudHJpbSgpLFxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24/LnRyaW0oKSB8fCAnJyxcbiAgICAgICAgZGVhZGxpbmU6IGRlYWRsaW5lRGF0ZSxcbiAgICAgICAgbWF4UGFydGljaXBhbnRzOiBtYXhQYXJ0aWNpcGFudHNOdW1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g5Yi35paw57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jb21wZXRpdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vY29tcGV0aXRpb25zJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgZGF0YTogY29tcGV0aXRpb24sXG4gICAgICBtZXNzYWdlOiAn56ue6LWb5pu05paw5oiQ5Yqf77yBJ1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+abtOaWsOernui1m+Wksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfmm7TmlrDnq57otZvlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog5Yig6Zmk56ue6LWb77yI566h55CG5ZGY5p2D6ZmQ77yM5a6J5YWo5aSE55CG5aSW6ZSu5L6d6LWW77yJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb21wZXRpdGlvbihpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcblxuICAgIC8vIOajgOafpeernui1m+aYr+WQpuWtmOWcqFxuICAgIGNvbnN0IGV4aXN0aW5nQ29tcGV0aXRpb24gPSBhd2FpdCBwcmlzbWEuY29tcGV0aXRpb24uZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9XG4gICAgfSlcblxuICAgIGlmICghZXhpc3RpbmdDb21wZXRpdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfnq57otZvkuI3lrZjlnKgnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5L2/55SoIFByaXNtYSDkuovliqHlronlhajliKDpmaTnq57otZvlj4rlhbbnm7jlhbPmlbDmja5cbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xuICAgICAgLy8g56ys5LiA5q2l77ya5Yig6Zmk5omA5pyJ55u45YWz55qE5oql5ZCN6K6w5b2VXG4gICAgICBhd2FpdCB0eC5yZWdpc3RyYXRpb24uZGVsZXRlTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IGNvbXBldGl0aW9uSWQ6IGlkIH1cbiAgICAgIH0pXG4gICAgICBcbiAgICAgIC8vIOesrOS6jOatpe+8muWIoOmZpOernui1m+acrOi6q1xuICAgICAgYXdhaXQgdHguY29tcGV0aXRpb24uZGVsZXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8g5Yi35paw57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jb21wZXRpdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vY29tcGV0aXRpb25zJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ+ernui1m+WIoOmZpOaIkOWKn++8gSdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfliKDpmaTnq57otZvlpLHotKU6JywgZXJyb3IpXG4gICAgXG4gICAgLy8g5qOA5p+l5piv5ZCm5piv5aSW6ZSu57qm5p2f6ZSZ6K+vXG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnZm9yZWlnbiBrZXkgY29uc3RyYWludCcpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+WIoOmZpOWksei0pe+8muivpeernui1m+S7jeacieWFs+iBlOaVsOaNru+8jOivt+WFiOWkhOeQhuebuOWFs+iusOW9lSdcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5Yig6Zmk56ue6LWb5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPluaJgOacieaMh+WvvOiAgeW4iOWIl+ihqFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGVhY2hlcnMoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBcbiAgICBjb25zdCB0ZWFjaGVycyA9IGF3YWl0IHByaXNtYS50ZWFjaGVyLmZpbmRNYW55KHtcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gdGVhY2hlcnNcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfojrflj5bogIHluIjliJfooajlpLHotKU6JywgZXJyb3IpXG4gICAgdGhyb3cgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yIDogbmV3IEVycm9yKCfojrflj5bogIHluIjliJfooajlpLHotKXvvIzor7fnqI3lkI7ph43or5UnKVxuICB9XG59XG5cbi8qKlxuICog5Yib5bu65paw5oyH5a+86ICB5biIXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUZWFjaGVyKGRhdGE6IHtcbiAgbmFtZTogc3RyaW5nXG4gIGRlcGFydG1lbnQ/OiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIC8vIOmqjOivgei+k+WFpeaVsOaNrlxuICAgIGlmICghZGF0YS5uYW1lIHx8IGRhdGEubmFtZS50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+aVmeW4iOWnk+WQjeS4jeiDveS4uuepuidcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDmn6Xor6LlvZPliY3mlbDmja7lupPkuK3lhbHmnInlpJrlsJHkvY3ogIHluIhcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICAgIGNvbnN0IHRlYWNoZXJDb3VudCA9IGF3YWl0IHByaXNtYS50ZWFjaGVyLmNvdW50KClcbiAgICBcbiAgICAvLyDnlJ/miJDmoLzlvI/kuLogVCArIOW5tOS7vSArIDPkvY3mtYHmsLTlj7fnmoTmlZnluIjnvJblj7dcbiAgICBjb25zdCB0ZWFjaGVyTm8gPSBgVCR7Y3VycmVudFllYXJ9JHtTdHJpbmcodGVhY2hlckNvdW50ICsgMSkucGFkU3RhcnQoMywgJzAnKX1gXG4gICAgXG4gICAgLy8g5Yib5bu66ICB5biI6K6w5b2VXG4gICAgY29uc3QgdGVhY2hlciA9IGF3YWl0IHByaXNtYS50ZWFjaGVyLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IGRhdGEubmFtZS50cmltKCksXG4gICAgICAgIGRlcGFydG1lbnQ6IGRhdGEuZGVwYXJ0bWVudD8udHJpbSgpIHx8IG51bGwsXG4gICAgICAgIHRlYWNoZXJOb1xuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDliLfmlrDnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3RlYWNoZXJzJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgZGF0YTogdGVhY2hlcixcbiAgICAgIG1lc3NhZ2U6ICfmjIflr7zogIHluIjmt7vliqDmiJDlip/vvIEnXG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5Yib5bu66ICB5biI5aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+WIm+W7uuiAgeW4iOWksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDliKDpmaTmjIflr7zogIHluIhcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRlYWNoZXIoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG5cbiAgICAvLyDmo4Dmn6XogIHluIjmmK/lkKblrZjlnKhcbiAgICBjb25zdCBleGlzdGluZ1RlYWNoZXIgPSBhd2FpdCBwcmlzbWEudGVhY2hlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH1cbiAgICB9KVxuXG4gICAgaWYgKCFleGlzdGluZ1RlYWNoZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5oyH5a+86ICB5biI5LiN5a2Y5ZyoJ1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOajgOafpeaYr+WQpuacieWFs+iBlOeahOaKpeWQjeiusOW9lVxuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbkNvdW50ID0gYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi5jb3VudCh7XG4gICAgICB3aGVyZTogeyB0ZWFjaGVySWQ6IGlkIH1cbiAgICB9KVxuXG4gICAgaWYgKHJlZ2lzdHJhdGlvbkNvdW50ID4gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfor6XogIHluIjov5jmnInlhbPogZTnmoTmiqXlkI3orrDlvZXvvIzml6Dms5XliKDpmaQnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5Yig6Zmk6ICB5biI6K6w5b2VXG4gICAgYXdhaXQgcHJpc21hLnRlYWNoZXIuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH1cbiAgICB9KVxuXG4gICAgLy8g5Yi35paw57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi90ZWFjaGVycycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6ICfmjIflr7zogIHluIjliKDpmaTmiJDlip/vvIEnXG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5Yig6Zmk6ICB5biI5aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+WIoOmZpOiAgeW4iOWksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDojrflj5bmiYDmnInmiqXlkI3orrDlvZXvvIjnrqHnkIblkZjlrqHmibnkuJPnlKjvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFJlZ2lzdHJhdGlvbnMoKSB7XG4gIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gIFxuICB0cnkge1xuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbnMgPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmZpbmRNYW55KHtcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgY29tcGV0aXRpb246IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxuICAgICAgICAgICAgZGVhZGxpbmU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRlYWNoZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIHRlYWNoZXJObzogdHJ1ZSxcbiAgICAgICAgICAgIGRlcGFydG1lbnQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgZW1haWw6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb3JkZXJCeToge1xuICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJ1xuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVnaXN0cmF0aW9uc1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaKpeWQjeiusOW9leWksei0pTonLCBlcnJvcilcbiAgICB0aHJvdyBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiBuZXcgRXJyb3IoJ+iOt+WPluaKpeWQjeiusOW9leWksei0pe+8jOivt+eojeWQjumHjeivlScpXG4gIH1cbn1cblxuLyoqXG4gKiDlrqHmoLjmiqXlkI3orrDlvZVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJldmlld1JlZ2lzdHJhdGlvbihyZWdpc3RyYXRpb25JZDogc3RyaW5nLCBzdGF0dXM6IHN0cmluZywgZmVlZGJhY2s/OiBzdHJpbmcpIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgLy8g6aqM6K+B54q25oCB5YC8XG4gICAgY29uc3QgdmFsaWRTdGF0dXNlcyA9IFsnUEVORElORycsICdBUFBST1ZFRCcsICdSRUpFQ1RFRF9SRVRSWScsICdSRUpFQ1RFRF9GSU5BTCddXG4gICAgaWYgKCF2YWxpZFN0YXR1c2VzLmluY2x1ZGVzKHN0YXR1cykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5peg5pWI55qE5a6h5om554q25oCBJylcbiAgICB9XG5cbiAgICAvLyDlpoLmnpznirbmgIHkuLogUkVKRUNURURfUkVUUlkg5oiWIFJFSkVDVEVEX0ZJTkFM77yM5b+F6aG75o+Q5L6b5Y+N6aaI5oSP6KeBXG4gICAgaWYgKChzdGF0dXMgPT09ICdSRUpFQ1RFRF9SRVRSWScgfHwgc3RhdHVzID09PSAnUkVKRUNURURfRklOQUwnKSAmJiAoIWZlZWRiYWNrIHx8IGZlZWRiYWNrLnRyaW0oKS5sZW5ndGggPT09IDApKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ+mps+WbnueUs+ivt+aXtuW/hemhu+aPkOS+m+WPjemmiOaEj+ingScpXG4gICAgfVxuXG4gICAgLy8g5qOA5p+l5oql5ZCN6K6w5b2V5piv5ZCm5a2Y5ZyoXG4gICAgY29uc3QgZXhpc3RpbmdSZWdpc3RyYXRpb24gPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHJlZ2lzdHJhdGlvbklkIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIGNvbXBldGl0aW9uOiB0cnVlLFxuICAgICAgICB1c2VyOiB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghZXhpc3RpbmdSZWdpc3RyYXRpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5oql5ZCN6K6w5b2V5LiN5a2Y5ZyoJylcbiAgICB9XG5cbiAgICAvLyDmm7TmlrDmiqXlkI3orrDlvZVcbiAgICBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogcmVnaXN0cmF0aW9uSWQgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBmZWVkYmFjazogZmVlZGJhY2s/LnRyaW0oKSB8fCBudWxsXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIOWmguaenOWuoeaJuemAmui/h++8jOiHquWKqOeUn+aIkOaIkOWwseiusOW9lVxuICAgIGlmIChzdGF0dXMgPT09ICdBUFBST1ZFRCcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIOajgOafpeaYr+WQpuW3suWtmOWcqOebuOWQjOeahOaIkOWwseiusOW9le+8iOmBv+WFjemHjeWkjeeUn+aIkO+8iVxuICAgICAgICBjb25zdCBleGlzdGluZ0FjaGlldmVtZW50ID0gYXdhaXQgcHJpc21hLmFjaGlldmVtZW50LmZpbmRGaXJzdCh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIHVzZXJJZDogZXhpc3RpbmdSZWdpc3RyYXRpb24udXNlcklkLFxuICAgICAgICAgICAgdGl0bGU6IGV4aXN0aW5nUmVnaXN0cmF0aW9uLmNvbXBldGl0aW9uLm5hbWUsXG4gICAgICAgICAgICB0eXBlOiAnQVdBUkQnIC8vIOernui1m+iOt+Wllum7mOiupOS4uuWllumhueexu+Wei1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIWV4aXN0aW5nQWNoaWV2ZW1lbnQpIHtcbiAgICAgICAgICAvLyDmoLnmja7nq57otZvnsbvliKvnoa7lrprmiJDlsLHnuqfliKtcbiAgICAgICAgICBsZXQgYWNoaWV2ZW1lbnRMZXZlbDogJ1NUQVRFJyB8ICdQUk9WSU5DRScgfCAnU0NIT09MJyA9ICdTQ0hPT0wnXG4gICAgICAgICAgaWYgKGV4aXN0aW5nUmVnaXN0cmF0aW9uLmNvbXBldGl0aW9uLmNhdGVnb3J5ID09PSAnVEVDSE5JQ0FMJyB8fCBcbiAgICAgICAgICAgICAgZXhpc3RpbmdSZWdpc3RyYXRpb24uY29tcGV0aXRpb24uY2F0ZWdvcnkgPT09ICdBSScpIHtcbiAgICAgICAgICAgIGFjaGlldmVtZW50TGV2ZWwgPSAnU1RBVEUnXG4gICAgICAgICAgfSBlbHNlIGlmIChleGlzdGluZ1JlZ2lzdHJhdGlvbi5jb21wZXRpdGlvbi5jYXRlZ29yeSA9PT0gJ1BST0dSQU1NSU5HJyB8fCBcbiAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUmVnaXN0cmF0aW9uLmNvbXBldGl0aW9uLmNhdGVnb3J5ID09PSAnSU5OT1ZBVElPTicpIHtcbiAgICAgICAgICAgIGFjaGlldmVtZW50TGV2ZWwgPSAnUFJPVklOQ0UnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8g5Yib5bu65oiQ5bCx6K6w5b2VXG4gICAgICAgICAgYXdhaXQgcHJpc21hLmFjaGlldmVtZW50LmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIHVzZXJJZDogZXhpc3RpbmdSZWdpc3RyYXRpb24udXNlcklkLFxuICAgICAgICAgICAgICB0aXRsZTogZXhpc3RpbmdSZWdpc3RyYXRpb24uY29tcGV0aXRpb24ubmFtZSxcbiAgICAgICAgICAgICAgdHlwZTogJ0FXQVJEJyxcbiAgICAgICAgICAgICAgbGV2ZWw6IGFjaGlldmVtZW50TGV2ZWwsXG4gICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksIC8vIOS9v+eUqOWuoeaJuemAmui/h+eahOaXtumXtOS9nOS4uuiOt+W+l+aXtumXtFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhg5bey5Li655So5oi3ICR7ZXhpc3RpbmdSZWdpc3RyYXRpb24udXNlcklkfSDoh6rliqjnlJ/miJDmiJDlsLHorrDlvZXvvJoke2V4aXN0aW5nUmVnaXN0cmF0aW9uLmNvbXBldGl0aW9uLm5hbWV9YClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoYWNoaWV2ZW1lbnRFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfoh6rliqjnlJ/miJDmiJDlsLHorrDlvZXlpLHotKU6JywgYWNoaWV2ZW1lbnRFcnJvcilcbiAgICAgICAgLy8g5LiN5b2x5ZON5a6h5om55rWB56iL77yM5Y+q6K6w5b2V6ZSZ6K+vXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g6YeN5paw6aqM6K+B57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9yZWdpc3RyYXRpb25zJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2ZpbGUnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vYWNoaWV2ZW1lbnRzJykgLy8g5Yi35paw566h55CG5ZGY5oiQ5bCx6aG16Z2i77yI5aaC5p6c5a2Y5Zyo77yJXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IHN0YXR1cyA9PT0gJ0FQUFJPVkVEJyA/ICfmiqXlkI3lt7LpgJrov4fvvIzlt7Loh6rliqjnlJ/miJDmiJDlsLHorrDlvZXvvIEnIDogJ+aKpeWQjeW3suabtOaWsCdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCflrqHmoLjmiqXlkI3lpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5a6h5qC45aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPlueuoeeQhuWRmOaOp+WItuWPsOe7n+iuoeaVsOaNrlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFzaGJvYXJkU3RhdHMoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBjb25zdCBjbGVyayA9IGF3YWl0IGNsZXJrQ2xpZW50KClcbiAgICBcbiAgICAvLyDojrflj5bnlKjmiLfmgLvmlbDvvIzmt7vliqDplJnor6/lpITnkIZcbiAgICBsZXQgdG90YWxVc2VycyA9IDBcbiAgICB0cnkge1xuICAgICAgdG90YWxVc2VycyA9IGF3YWl0IGNsZXJrLnVzZXJzLmdldENvdW50KClcbiAgICB9IGNhdGNoIChjbGVya0Vycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfojrflj5bnlKjmiLfmgLvmlbDlpLHotKU6JywgY2xlcmtFcnJvcilcbiAgICAgIC8vIOWmguaenOaYr+e9kee7nOaIliBBUEkg6ZSZ6K+v77yM5L2/55So6buY6K6k5YC8XG4gICAgICBpZiAoY2xlcmtFcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIChcbiAgICAgICAgY2xlcmtFcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdmZXRjaCcpIHx8IFxuICAgICAgICBjbGVya0Vycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ25ldHdvcmsnKSB8fFxuICAgICAgICBjbGVya0Vycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ0VDT05OUkVGVVNFRCcpIHx8XG4gICAgICAgIGNsZXJrRXJyb3IubWVzc2FnZS5pbmNsdWRlcygndGltZW91dCcpIHx8XG4gICAgICAgIGNsZXJrRXJyb3IubWVzc2FnZS5pbmNsdWRlcygnQ2xlcmtBUElSZXNwb25zZUVycm9yJylcbiAgICAgICkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcign572R57uc5oiWIENsZXJrIEFQSSDplJnor6/vvIzkvb/nlKjpu5jorqTnlKjmiLfmlbAgMCcpXG4gICAgICB9IGVsc2UgaWYgKGNsZXJrRXJyb3IgJiYgdHlwZW9mIGNsZXJrRXJyb3IgPT09ICdvYmplY3QnICYmICdjbGVya0Vycm9yJyBpbiBjbGVya0Vycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NsZXJrIEFQSSDplJnor6/or6bmg4U6JywgSlNPTi5zdHJpbmdpZnkoY2xlcmtFcnJvciwgbnVsbCwgMikpXG4gICAgICB9XG4gICAgICB0b3RhbFVzZXJzID0gMCAvLyDkvb/nlKjpu5jorqTlgLxcbiAgICB9XG4gICAgXG4gICAgLy8g5bm26KGM6I635Y+W5YW25LuW57uf6K6h5pWw5o2uXG4gICAgY29uc3QgW1xuICAgICAgdG90YWxDb21wZXRpdGlvbnMsXG4gICAgICB0b3RhbFJlZ2lzdHJhdGlvbnMsXG4gICAgICBwZW5kaW5nUmV2aWV3cyxcbiAgICAgIGNhdGVnb3J5U3RhdHMsXG4gICAgICB0b3BDb21wZXRpdGlvbnMsXG4gICAgICByZWNlbnRQZW5kaW5nXG4gICAgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIC8vIOi1m+S6i+aAu+aVsFxuICAgICAgcHJpc21hLmNvbXBldGl0aW9uLmNvdW50KCksXG4gICAgICBcbiAgICAgIC8vIOaKpeWQjeaAu+aVsFxuICAgICAgcHJpc21hLnJlZ2lzdHJhdGlvbi5jb3VudCgpLFxuICAgICAgXG4gICAgICAvLyDlvoXlrqHmoLjmlbDph49cbiAgICAgIHByaXNtYS5yZWdpc3RyYXRpb24uY291bnQoe1xuICAgICAgICB3aGVyZTogeyBzdGF0dXM6ICdQRU5ESU5HJyB9XG4gICAgICB9KSxcbiAgICAgIFxuICAgICAgLy8g5oyJ5YiG57G757uf6K6h6LWb5LqL5pWw6YePXG4gICAgICBwcmlzbWEuY29tcGV0aXRpb24uZ3JvdXBCeSh7XG4gICAgICAgIGJ5OiBbJ2NhdGVnb3J5J10sXG4gICAgICAgIF9jb3VudDoge1xuICAgICAgICAgIGlkOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgXG4gICAgICAvLyDmiqXlkI3kurrmlbDmnIDlpJrnmoTliY015Liq6LWb5LqLXG4gICAgICBwcmlzbWEuY29tcGV0aXRpb24uZmluZE1hbnkoe1xuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgIF9jb3VudDoge1xuICAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbnM6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgICByZWdpc3RyYXRpb25zOiB7XG4gICAgICAgICAgICBfY291bnQ6ICdkZXNjJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGFrZTogNVxuICAgICAgfSksXG4gICAgICBcbiAgICAgIC8vIOacgOaWsDXmnaHlvoXlrqHmoLjmiqXlkI1cbiAgICAgIHByaXNtYS5yZWdpc3RyYXRpb24uZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyBzdGF0dXM6ICdQRU5ESU5HJyB9LFxuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICBhcHBsaWNhbnROYW1lOiB0cnVlLFxuICAgICAgICAgIGNvbXBldGl0aW9uOiB7XG4gICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgbmFtZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxuICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICBuYW1lOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcmRlckJ5OiB7XG4gICAgICAgICAgY3JlYXRlZEF0OiAnZGVzYydcbiAgICAgICAgfSxcbiAgICAgICAgdGFrZTogNVxuICAgICAgfSlcbiAgICBdKVxuXG4gICAgLy8g5aSE55CG5YiG57G757uf6K6h5pWw5o2u77yM5ZCI5bm255u45Ly85YiG57G7XG4gICAgY29uc3QgcHJvY2Vzc2VkQ2F0ZWdvcnlTdGF0cyA9IGNhdGVnb3J5U3RhdHMucmVkdWNlKChhY2M6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH1bXSwgaXRlbTogYW55KSA9PiB7XG4gICAgICBjb25zdCBjYXRlZ29yeSA9IGl0ZW0uY2F0ZWdvcnkgfHwgJ+WFtuS7lidcbiAgICAgIGNvbnN0IGV4aXN0aW5nSXRlbSA9IGFjYy5maW5kKChzdGF0OiB7IG5hbWU6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9KSA9PiBzdGF0Lm5hbWUgPT09IGNhdGVnb3J5KVxuICAgICAgXG4gICAgICBpZiAoZXhpc3RpbmdJdGVtKSB7XG4gICAgICAgIGV4aXN0aW5nSXRlbS52YWx1ZSArPSBpdGVtLl9jb3VudC5pZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgIG5hbWU6IGNhdGVnb3J5LFxuICAgICAgICAgIHZhbHVlOiBpdGVtLl9jb3VudC5pZFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSwgW10gYXMgeyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfVtdKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsVXNlcnMsXG4gICAgICB0b3RhbENvbXBldGl0aW9ucyxcbiAgICAgIHRvdGFsUmVnaXN0cmF0aW9ucyxcbiAgICAgIHBlbmRpbmdSZXZpZXdzLFxuICAgICAgY2F0ZWdvcnlTdGF0czogcHJvY2Vzc2VkQ2F0ZWdvcnlTdGF0cyxcbiAgICAgIHRvcENvbXBldGl0aW9uczogdG9wQ29tcGV0aXRpb25zLm1hcCgoY29tcDogYW55KSA9PiAoe1xuICAgICAgICBuYW1lOiBjb21wLm5hbWUsXG4gICAgICAgIHJlZ2lzdHJhdGlvbnM6IGNvbXAuX2NvdW50LnJlZ2lzdHJhdGlvbnNcbiAgICAgIH0pKSxcbiAgICAgIHJlY2VudFBlbmRpbmc6IHJlY2VudFBlbmRpbmcubWFwKChyZWc6IGFueSkgPT4gKHtcbiAgICAgICAgaWQ6IHJlZy5pZCxcbiAgICAgICAgYXBwbGljYW50TmFtZTogcmVnLmFwcGxpY2FudE5hbWUgfHwgcmVnLnVzZXI/Lm5hbWUgfHwgJ+acquefpScsXG4gICAgICAgIGNvbXBldGl0aW9uTmFtZTogcmVnLmNvbXBldGl0aW9uLm5hbWUsXG4gICAgICAgIGNyZWF0ZWRBdDogcmVnLmNyZWF0ZWRBdFxuICAgICAgfSkpXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluS7quihqOadv+e7n+iuoeaVsOaNruWksei0pTonLCBlcnJvcilcbiAgICBcbiAgICAvLyDlpoLmnpzmmK/mnYPpmZDpqozor4HplJnor6/vvIzov5Tlm57pu5jorqTnu5/orqHmlbDmja5cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAoXG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfnvZHnu5zor7fmsYLotoXml7YnKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn6K6k6K+B5pyN5YqhJykgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+adg+mZkOS4jei2sycpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfmnKrnmbvlvZUnKVxuICAgICkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+adg+mZkOmqjOivgeWksei0pe+8jOi/lOWbnum7mOiupOe7n+iuoeaVsOaNrjonLCBlcnJvci5tZXNzYWdlKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG90YWxVc2VyczogMCxcbiAgICAgICAgdG90YWxDb21wZXRpdGlvbnM6IDAsXG4gICAgICAgIHRvdGFsUmVnaXN0cmF0aW9uczogMCxcbiAgICAgICAgcGVuZGluZ1Jldmlld3M6IDAsXG4gICAgICAgIGNhdGVnb3J5U3RhdHM6IFtdLFxuICAgICAgICB0b3BDb21wZXRpdGlvbnM6IFtdLFxuICAgICAgICByZWNlbnRQZW5kaW5nOiBbXVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyDlhbbku5bplJnor6/kuZ/ov5Tlm57pu5jorqTnu5/orqHmlbDmja7vvIzpmLLmraLpobXpnaLltKnmuoNcbiAgICBjb25zb2xlLmVycm9yKCfmnKrnn6XplJnor6/vvIzov5Tlm57pu5jorqTnu5/orqHmlbDmja46JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsVXNlcnM6IDAsXG4gICAgICB0b3RhbENvbXBldGl0aW9uczogMCxcbiAgICAgIHRvdGFsUmVnaXN0cmF0aW9uczogMCxcbiAgICAgIHBlbmRpbmdSZXZpZXdzOiAwLFxuICAgICAgY2F0ZWdvcnlTdGF0czogW10sXG4gICAgICB0b3BDb21wZXRpdGlvbnM6IFtdLFxuICAgICAgcmVjZW50UGVuZGluZzogW11cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDmibnph4/lr7zlhaXmjIflr7zogIHluIhcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJhdGNoSW1wb3J0VGVhY2hlcnModGVhY2hlcnNEYXRhOiB7IG5hbWU6IHN0cmluZzsgZGVwYXJ0bWVudD86IHN0cmluZyB9W10pIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgY29uc3QgY2xlcmsgPSBhd2FpdCBjbGVya0NsaWVudCgpXG4gIFxuICB0cnkge1xuICAgIC8vIOiOt+WPluW9k+WJjeW5tOS7vVxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG4gICAgY29uc3QgeWVhclByZWZpeCA9IGBUJHtjdXJyZW50WWVhcn1gXG4gICAgXG4gICAgLy8g5p+l6K+i5b2T5YmN5bm05Lu95pyA5paw55qE5pWZ5biI57yW5Y+3XG4gICAgY29uc3QgbGF0ZXN0VGVhY2hlciA9IGF3YWl0IHByaXNtYS50ZWFjaGVyLmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICB0ZWFjaGVyTm86IHtcbiAgICAgICAgICBzdGFydHNXaXRoOiB5ZWFyUHJlZml4XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvcmRlckJ5OiB7XG4gICAgICAgIHRlYWNoZXJObzogJ2Rlc2MnXG4gICAgICB9XG4gICAgfSlcbiAgICBcbiAgICAvLyDorqHnrpfotbflp4vmtYHmsLTlj7dcbiAgICBsZXQgc2VyaWFsTnVtYmVyID0gMVxuICAgIGlmIChsYXRlc3RUZWFjaGVyKSB7XG4gICAgICBjb25zdCBsYXRlc3RTZXJpYWwgPSBwYXJzZUludChsYXRlc3RUZWFjaGVyLnRlYWNoZXJOby5zbGljZSgtMykpXG4gICAgICBpZiAoIWlzTmFOKGxhdGVzdFNlcmlhbCkpIHtcbiAgICAgICAgc2VyaWFsTnVtYmVyID0gbGF0ZXN0U2VyaWFsICsgMVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyDmoLzlvI/ljJbmlZnluIjmlbDmja5cbiAgICBjb25zdCBmb3JtYXR0ZWRUZWFjaGVycyA9IHRlYWNoZXJzRGF0YS5tYXAoKHRlYWNoZXIsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZWFjaGVyTm8gPSBgJHt5ZWFyUHJlZml4fSR7c2VyaWFsTnVtYmVyLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX1gXG4gICAgICBzZXJpYWxOdW1iZXIrK1xuICAgICAgXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiB0ZWFjaGVyLm5hbWUudHJpbSgpLFxuICAgICAgICBkZXBhcnRtZW50OiB0ZWFjaGVyLmRlcGFydG1lbnQ/LnRyaW0oKSB8fCBudWxsLFxuICAgICAgICB0ZWFjaGVyTm9cbiAgICAgIH1cbiAgICB9KVxuICAgIFxuICAgIC8vIOaJuemHj+aPkuWFpeaVsOaNruW6k1xuICAgIGF3YWl0IHByaXNtYS50ZWFjaGVyLmNyZWF0ZU1hbnkoe1xuICAgICAgZGF0YTogZm9ybWF0dGVkVGVhY2hlcnNcbiAgICB9KVxuICAgIFxuICAgIC8vIOmHjeaWsOmqjOivgee8k+WtmFxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vdGVhY2hlcnMnKVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgY291bnQ6IGZvcm1hdHRlZFRlYWNoZXJzLmxlbmd0aCxcbiAgICAgIG1lc3NhZ2U6IGDmiJDlip/lr7zlhaUgJHtmb3JtYXR0ZWRUZWFjaGVycy5sZW5ndGh9IOS9jeaMh+WvvOiAgeW4iGBcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5om56YeP5a+85YWl5oyH5a+86ICB5biI5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcign5om56YeP5a+85YWl5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJylcbiAgfVxufVxuXG4vKipcbiAqIOaJuemHj+WuoeaJueaKpeWQjeiusOW9lVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYmF0Y2hSZXZpZXdSZWdpc3RyYXRpb25zKFxuICBpZHM6IHN0cmluZ1tdLCBcbiAgc3RhdHVzOiAnQVBQUk9WRUQnIHwgJ1JFSkVDVEVEX1JFVFJZJyB8ICdSRUpFQ1RFRF9GSU5BTCcsIFxuICBmZWVkYmFjaz86IHN0cmluZ1xuKSB7XG4gIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gIFxuICB0cnkge1xuICAgIC8vIOmqjOivgeeKtuaAgeWAvFxuICAgIGNvbnN0IHZhbGlkU3RhdHVzZXMgPSBbJ0FQUFJPVkVEJywgJ1JFSkVDVEVEX1JFVFJZJywgJ1JFSkVDVEVEX0ZJTkFMJ11cbiAgICBpZiAoIXZhbGlkU3RhdHVzZXMuaW5jbHVkZXMoc3RhdHVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfml6DmlYjnmoTlrqHmibnnirbmgIEnKVxuICAgIH1cblxuICAgIC8vIOWmguaenOeKtuaAgeS4uiBSRUpFQ1RFRF9SRVRSWSDmiJYgUkVKRUNURURfRklOQUzvvIzlv4Xpobvmj5Dkvpvlj43ppojmhI/op4FcbiAgICBpZiAoKHN0YXR1cyA9PT0gJ1JFSkVDVEVEX1JFVFJZJyB8fCBzdGF0dXMgPT09ICdSRUpFQ1RFRF9GSU5BTCcpICYmICghZmVlZGJhY2sgfHwgZmVlZGJhY2sudHJpbSgpLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign6amz5Zue55Sz6K+35pe25b+F6aG75o+Q5L6b5Y+N6aaI5oSP6KeBJylcbiAgICB9XG5cbiAgICAvLyDpqozor4FJROaVsOe7hFxuICAgIGlmICghaWRzIHx8IGlkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign6K+36YCJ5oup6KaB5a6h5om555qE5oql5ZCN6K6w5b2VJylcbiAgICB9XG5cbiAgICAvLyDojrflj5bopoHmm7TmlrDnmoTmiqXlkI3orrDlvZXor6bmg4XvvIjnlKjkuo7nlJ/miJDmiJDlsLHvvIlcbiAgICBjb25zdCByZWdpc3RyYXRpb25zVG9VcGRhdGUgPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7IFxuICAgICAgICBpZDogeyBpbjogaWRzIH1cbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIGNvbXBldGl0aW9uOiB0cnVlLFxuICAgICAgICB1c2VyOiB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIOaJuemHj+abtOaWsOaKpeWQjeiusOW9lVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24udXBkYXRlTWFueSh7XG4gICAgICB3aGVyZTogeyBcbiAgICAgICAgaWQ6IHsgaW46IGlkcyB9XG4gICAgICB9LFxuICAgICAgZGF0YTogeyBcbiAgICAgICAgc3RhdHVzLCBcbiAgICAgICAgZmVlZGJhY2s6IGZlZWRiYWNrPy50cmltKCkgfHwgbnVsbCBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g5aaC5p6c5a6h5om56YCa6L+H77yM5om56YeP55Sf5oiQ5oiQ5bCx6K6w5b2VXG4gICAgaWYgKHN0YXR1cyA9PT0gJ0FQUFJPVkVEJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChjb25zdCByZWdpc3RyYXRpb24gb2YgcmVnaXN0cmF0aW9uc1RvVXBkYXRlKSB7XG4gICAgICAgICAgLy8g5qOA5p+l5piv5ZCm5bey5a2Y5Zyo55u45ZCM55qE5oiQ5bCx6K6w5b2V77yI6YG/5YWN6YeN5aSN55Sf5oiQ77yJXG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdBY2hpZXZlbWVudCA9IGF3YWl0IHByaXNtYS5hY2hpZXZlbWVudC5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgdXNlcklkOiByZWdpc3RyYXRpb24udXNlcklkLFxuICAgICAgICAgICAgICB0aXRsZTogcmVnaXN0cmF0aW9uLmNvbXBldGl0aW9uLm5hbWUsXG4gICAgICAgICAgICAgIHR5cGU6ICdBV0FSRCcgLy8g56ue6LWb6I635aWW6buY6K6k5Li65aWW6aG557G75Z6LXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGlmICghZXhpc3RpbmdBY2hpZXZlbWVudCkge1xuICAgICAgICAgICAgLy8g5qC55o2u56ue6LWb57G75Yir56Gu5a6a5oiQ5bCx57qn5YirXG4gICAgICAgICAgICBsZXQgYWNoaWV2ZW1lbnRMZXZlbDogJ1NUQVRFJyB8ICdQUk9WSU5DRScgfCAnU0NIT09MJyA9ICdTQ0hPT0wnXG4gICAgICAgICAgICBpZiAocmVnaXN0cmF0aW9uLmNvbXBldGl0aW9uLmNhdGVnb3J5ID09PSAnVEVDSE5JQ0FMJyB8fCBcbiAgICAgICAgICAgICAgICByZWdpc3RyYXRpb24uY29tcGV0aXRpb24uY2F0ZWdvcnkgPT09ICdBSScpIHtcbiAgICAgICAgICAgICAgYWNoaWV2ZW1lbnRMZXZlbCA9ICdTVEFURSdcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVnaXN0cmF0aW9uLmNvbXBldGl0aW9uLmNhdGVnb3J5ID09PSAnUFJPR1JBTU1JTkcnIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RyYXRpb24uY29tcGV0aXRpb24uY2F0ZWdvcnkgPT09ICdJTk5PVkFUSU9OJykge1xuICAgICAgICAgICAgICBhY2hpZXZlbWVudExldmVsID0gJ1BST1ZJTkNFJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDliJvlu7rmiJDlsLHorrDlvZVcbiAgICAgICAgICAgIGF3YWl0IHByaXNtYS5hY2hpZXZlbWVudC5jcmVhdGUoe1xuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdXNlcklkOiByZWdpc3RyYXRpb24udXNlcklkLFxuICAgICAgICAgICAgICAgIHRpdGxlOiByZWdpc3RyYXRpb24uY29tcGV0aXRpb24ubmFtZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnQVdBUkQnLFxuICAgICAgICAgICAgICAgIGxldmVsOiBhY2hpZXZlbWVudExldmVsLFxuICAgICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksIC8vIOS9v+eUqOWuoeaJuemAmui/h+eahOaXtumXtOS9nOS4uuiOt+W+l+aXtumXtFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg5bey5Li655So5oi3ICR7cmVnaXN0cmF0aW9uLnVzZXJJZH0g6Ieq5Yqo55Sf5oiQ5oiQ5bCx6K6w5b2V77yaJHtyZWdpc3RyYXRpb24uY29tcGV0aXRpb24ubmFtZX1gKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoYWNoaWV2ZW1lbnRFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfmibnph4/nlJ/miJDmiJDlsLHorrDlvZXlpLHotKU6JywgYWNoaWV2ZW1lbnRFcnJvcilcbiAgICAgICAgLy8g5LiN5b2x5ZON5a6h5om55rWB56iL77yM5Y+q6K6w5b2V6ZSZ6K+vXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g6YeN5paw6aqM6K+B57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9yZWdpc3RyYXRpb25zJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2ZpbGUnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vYWNoaWV2ZW1lbnRzJykgLy8g5Yi35paw566h55CG5ZGY5oiQ5bCx6aG16Z2i77yI5aaC5p6c5a2Y5Zyo77yJXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGNvdW50OiByZXN1bHQuY291bnQsXG4gICAgICBtZXNzYWdlOiBzdGF0dXMgPT09ICdBUFBST1ZFRCcgXG4gICAgICAgID8gYOaIkOWKn+mAmui/hyAke3Jlc3VsdC5jb3VudH0g5p2h5oql5ZCN55Sz6K+377yM5bey6Ieq5Yqo55Sf5oiQ5oiQ5bCx6K6w5b2V77yBYCBcbiAgICAgICAgOiBg5oiQ5Yqf5aSE55CGICR7cmVzdWx0LmNvdW50fSDmnaHmiqXlkI3orrDlvZVgXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+aJuemHj+WuoeaJueWksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfmibnph4/lrqHmibnlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W5omA5pyJ55So5oi355qE5oiQ5bCx6K6w5b2V77yI566h55CG5ZGY5LiT55So77yJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxBY2hpZXZlbWVudHMoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBcbiAgICBjb25zdCBhY2hpZXZlbWVudHMgPSBhd2FpdCBwcmlzbWEuYWNoaWV2ZW1lbnQuZmluZE1hbnkoe1xuICAgICAgaW5jbHVkZToge1xuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgICBlbWFpbDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgY3JlYXRlZEF0OiAnZGVzYydcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGFjaGlldmVtZW50c1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaIkOWwseiusOW9leWksei0pTonLCBlcnJvcilcbiAgICBcbiAgICAvLyDlpoLmnpzmmK/mnYPpmZDpqozor4HplJnor6/vvIzov5Tlm57nqbrmlbDnu4TogIzkuI3mmK/mipvlh7rplJnor69cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAoXG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfnvZHnu5zor7fmsYLotoXml7YnKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn6K6k6K+B5pyN5YqhJykgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+adg+mZkOS4jei2sycpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfmnKrnmbvlvZUnKVxuICAgICkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+adg+mZkOmqjOivgeWksei0pe+8jOi/lOWbnuepuuaVsOe7hDonLCBlcnJvci5tZXNzYWdlKVxuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICAgIFxuICAgIC8vIOWFtuS7lumUmeivr+S5n+i/lOWbnuepuuaVsOe7hO+8jOmYsuatoumhtemdouW0qea6g1xuICAgIGNvbnNvbGUuZXJyb3IoJ+acquefpemUmeivr++8jOi/lOWbnuepuuaVsOe7hDonLCBlcnJvcilcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPluWvvOWHuuaVsOaNrlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwb3J0RGF0YShjb21wZXRpdGlvbklkOiBzdHJpbmcpIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgLy8g5p+l6K+i6K+l6LWb5LqL5LiL5omA5pyJ5bey6YCa6L+H55qE5oql5ZCN6K6w5b2VXG4gICAgY29uc3QgcmVnaXN0cmF0aW9ucyA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgY29tcGV0aXRpb25JZCxcbiAgICAgICAgc3RhdHVzOiAnQVBQUk9WRUQnXG4gICAgICB9LFxuICAgICAgaW5jbHVkZToge1xuICAgICAgICB0ZWFjaGVyOiB7XG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgICAgZGVwYXJ0bWVudDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgY3JlYXRlZEF0OiAnYXNjJ1xuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDmiYHlubPljJbmoLzlvI/ljJbmlbDmja5cbiAgICBjb25zdCBleHBvcnREYXRhID0gcmVnaXN0cmF0aW9ucy5tYXAocmVnID0+ICh7XG4gICAgICDnlLPor7fkuro6IHJlZy5hcHBsaWNhbnROYW1lIHx8ICfmnKrnn6UnLFxuICAgICAg5L2c5ZOB5ZCN56ewOiByZWcucHJvamVjdE5hbWUgfHwgJ+aXoCcsXG4gICAgICDlm6LpmJ/miJDlkZg6IHJlZy50ZWFtTWVtYmVycyB8fCAn5pegJyxcbiAgICAgIOaMh+WvvOiAgeW4iDogcmVnLnRlYWNoZXI/Lm5hbWUgfHwgJ+aXoCcsXG4gICAgICDogIHluIjlrabpmaI6IHJlZy50ZWFjaGVyPy5kZXBhcnRtZW50IHx8ICfml6AnLFxuICAgICAg5oql5ZCN6K+05piOOiByZWcubm90ZXMgfHwgJ+aXoCcsXG4gICAgICDmj5DkuqTml7bpl7Q6IHJlZy5jcmVhdGVkQXQudG9Mb2NhbGVEYXRlU3RyaW5nKCd6aC1DTicsIHtcbiAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICBtb250aDogJzItZGlnaXQnLFxuICAgICAgICBkYXk6ICcyLWRpZ2l0J1xuICAgICAgfSlcbiAgICB9KSlcblxuICAgIHJldHVybiBleHBvcnREYXRhXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W5a+85Ye65pWw5o2u5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcign6I635Y+W5a+85Ye65pWw5o2u5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJylcbiAgfVxufVxuXG4vKipcbiAqIOWIh+aNouernui1m+W9kuaho+eKtuaAgVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG9nZ2xlQ29tcGV0aXRpb25BcmNoaXZlKGlkOiBzdHJpbmcsIGN1cnJlbnRTdGF0dXM6IGJvb2xlYW4pIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgLy8g5pu05paw56ue6LWb54q25oCBXG4gICAgY29uc3QgbmV3U3RhdHVzID0gIWN1cnJlbnRTdGF0dXNcbiAgICBjb25zdCBjb21wZXRpdGlvbiA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGE6IHsgaXNBY3RpdmU6IG5ld1N0YXR1cyB9XG4gICAgfSlcblxuICAgIC8vIOmHjeaWsOmqjOivgee8k+WtmFxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vY29tcGV0aXRpb25zJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGRhdGE6IGNvbXBldGl0aW9uLFxuICAgICAgbWVzc2FnZTogbmV3U3RhdHVzID8gJ+ernui1m+W3sumHjeaWsOS4iuaeticgOiAn56ue6LWb5bey5b2S5qGjJ1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfliIfmjaLnq57otZvnirbmgIHlpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5YiH5o2i56ue6LWb54q25oCB5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrUkE2aUJzQixpTUFBQSJ9
}),
"[project]/src/components/admin/registration-data-table.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RegistrationDataTable",
    ()=>RegistrationDataTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$review$2d$registration$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/review-registration-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$7d215e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:7d215e [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$e7cebf__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:e7cebf [app-ssr] (ecmascript) <text/javascript>");
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
function RegistrationDataTable({ registrations }) {
    const [selectedIds, setSelectedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isBatchProcessing, setIsBatchProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // 获取所有待审批的记录ID
    const pendingIds = registrations.filter((reg)=>reg.status === 'PENDING').map((reg)=>reg.id);
    // 全选/取消全选
    const toggleAll = ()=>{
        if (selectedIds.length === pendingIds.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(pendingIds);
        }
    };
    // 切换单个选中状态
    const toggleOne = (id)=>{
        setSelectedIds((prev)=>prev.includes(id) ? prev.filter((selectedId)=>selectedId !== id) : [
                ...prev,
                id
            ]);
    };
    // 批量通过
    const handleBatchApprove = async ()=>{
        if (selectedIds.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('请选择要审批的记录');
            return;
        }
        setIsBatchProcessing(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$7d215e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["batchReviewRegistrations"])(selectedIds, 'APPROVED');
            if (result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`成功通过 ${result.count} 条报名申请`);
                setSelectedIds([]);
                // 刷新页面数据
                window.location.reload();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(result.message || '批量审批失败');
            }
        } catch (error) {
            console.error('批量审批失败:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('批量审批失败，请稍后重试');
        } finally{
            setIsBatchProcessing(false);
        }
    };
    // 获取状态徽章样式
    const getStatusBadge = (status)=>{
        const statusConfig = {
            PENDING: {
                label: '待审批',
                variant: 'secondary'
            },
            APPROVED: {
                label: '已通过',
                variant: 'default'
            },
            REJECTED_RETRY: {
                label: '驳回重试',
                variant: 'destructive'
            },
            REJECTED_FINAL: {
                label: '最终驳回',
                variant: 'destructive'
            }
        };
        const config = statusConfig[status] || statusConfig.PENDING;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
            variant: config.variant,
            children: config.label
        }, void 0, false, {
            fileName: "[project]/src/components/admin/registration-data-table.tsx",
            lineNumber: 94,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "报名审批管理"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/registration-data-table.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: [
                    selectedIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 mb-4 bg-blue-50 rounded-lg border border-blue-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-blue-800",
                                children: [
                                    "已选择 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: selectedIds.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                        lineNumber: 107,
                                        columnNumber: 19
                                    }, this),
                                    " 项待审批记录"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleBatchApprove,
                                disabled: isBatchProcessing,
                                className: "bg-green-600 hover:bg-green-700",
                                children: isBatchProcessing ? '处理中...' : '批量通过'
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full border-collapse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left p-3 font-medium",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: selectedIds.length === pendingIds.length && pendingIds.length > 0,
                                                        onChange: toggleAll,
                                                        className: "rounded border-gray-300",
                                                        disabled: pendingIds.length === 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left p-3 font-medium",
                                                    children: "申请人"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left p-3 font-medium",
                                                    children: "比赛名称"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left p-3 font-medium",
                                                    children: "项目名称"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left p-3 font-medium",
                                                    children: "指导老师"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left p-3 font-medium",
                                                    children: "申请时间"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left p-3 font-medium",
                                                    children: "状态"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left p-3 font-medium",
                                                    children: "操作"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: registrations.map((registration)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b hover:bg-gray-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3",
                                                        children: registration.status === 'PENDING' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: selectedIds.includes(registration.id),
                                                            onChange: ()=>toggleOne(registration.id),
                                                            className: "rounded border-gray-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium",
                                                                    children: registration.applicantName || registration.user.name || '未知'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                                    lineNumber: 162,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-500",
                                                                    children: registration.user.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                                    lineNumber: 165,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium",
                                                                    children: registration.competition.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                                    lineNumber: 174,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-500",
                                                                    children: registration.competition.category
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                                    lineNumber: 175,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3",
                                                        children: registration.projectName || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-400",
                                                            children: "未填写"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3",
                                                        children: registration.teacher ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium",
                                                                    children: registration.teacher.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-500",
                                                                    children: registration.teacher.department
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-400",
                                                            children: "未选择"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3",
                                                        children: registration.createdAt.toLocaleString('zh-CN', {
                                                            year: 'numeric',
                                                            month: '2-digit',
                                                            day: '2-digit',
                                                            hour: '2-digit',
                                                            minute: '2-digit'
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3",
                                                        children: getStatusBadge(registration.status)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$review$2d$registration$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReviewRegistrationDialog"], {
                                                            registration: registration,
                                                            onReview: async (id, status, feedback)=>{
                                                                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$e7cebf__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["reviewRegistration"])(id, status, feedback);
                                                                if (result.success) {
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(result.message);
                                                                    window.location.reload();
                                                                } else {
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(result.message);
                                                                }
                                                                return result;
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, registration.id, true, {
                                                fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            registrations.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-8 text-gray-500",
                                children: "暂无报名记录"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/registration-data-table.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/registration-data-table.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_76abdd75._.js.map