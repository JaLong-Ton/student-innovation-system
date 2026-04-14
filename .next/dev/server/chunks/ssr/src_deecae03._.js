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
"[project]/src/app/actions/data:5fc74b [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "batchReviewRegistrations",
    ()=>$$RSC_SERVER_ACTION_14
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"7000681646cab0df678faaf021ae964d8a48068d27":"batchReviewRegistrations"},"src/app/actions/admin.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7000681646cab0df678faaf021ae964d8a48068d27", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "batchReviewRegistrations");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWRtaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSdcbmltcG9ydCB7IGF1dGggfSBmcm9tICdAY2xlcmsvbmV4dGpzL3NlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcblxuLyoqXG4gKiDpqozor4HnrqHnkIblkZjmnYPpmZDnmoTovoXliqnlh73mlbDvvIjln7rkuo7mnKzlnLAgSldUIFRva2Vu77yM6Zu2572R57uc6K+35rGC77yJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VySWQsIHNlc3Npb25DbGFpbXMgfSA9IGF3YWl0IGF1dGgoKVxuXG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5pyq55m75b2V77yM6K+35YWI55m75b2VJylcbiAgICB9XG4gICAgXG4gICAgLy8g55u05o6l5LuO5pys5ZywIEpXVCBUb2tlbiDkuK3or7vlj5Ygcm9sZe+8jOmbtue9kee7nOivt+axgu+8gVxuICAgIGNvbnN0IHJvbGUgPSAoc2Vzc2lvbkNsYWltcyBhcyBhbnkpPy5yb2xlXG4gICAgaWYgKHJvbGUgIT09ICdhZG1pbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5p2D6ZmQ5LiN6Laz77ya5oKo55qE6LSm5Y+35LiN5piv566h55CG5ZGYJylcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgdXNlcklkIH0gLy8g5LiN5YaN6L+U5Zue5a6M5pW055qEIHVzZXIg5a+56LGh77yM5Zug5Li65oiR5Lus5LiN6ZyA6KaB5LqGXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign566h55CG5ZGY5p2D6ZmQ5qCh6aqM5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IG5ldyBFcnJvcihlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfmnYPpmZDmoKHpqozpgYfliLDmnKrnn6XplJnor68nKVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W5omA5pyJ55So5oi3XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxVc2VycygpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIGNvbnN0IGNsZXJrID0gYXdhaXQgY2xlcmtDbGllbnQoKVxuICAgIGNvbnN0IHVzZXJMaXN0ID0gYXdhaXQgY2xlcmsudXNlcnMuZ2V0VXNlckxpc3Qoe1xuICAgICAgbGltaXQ6IDEwMCxcbiAgICAgIG9yZGVyQnk6ICctY3JlYXRlZF9hdCdcbiAgICB9KVxuXG4gICAgLy8g6L+U5Zue57K+566A55qE55So5oi35L+h5oGvXG4gICAgcmV0dXJuIHVzZXJMaXN0LmRhdGEubWFwKHVzZXIgPT4gKHtcbiAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgZmlyc3ROYW1lOiB1c2VyLmZpcnN0TmFtZSxcbiAgICAgIGxhc3ROYW1lOiB1c2VyLmxhc3ROYW1lLFxuICAgICAgZW1haWxBZGRyZXNzZXM6IHVzZXIuZW1haWxBZGRyZXNzZXMsXG4gICAgICBpbWFnZVVybDogdXNlci5pbWFnZVVybFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPlueUqOaIt+WIl+ihqOWksei0pTonLCBlcnJvcilcbiAgICBcbiAgICAvLyDmo4Dmn6XmmK/lkKbmmK8gQ2xlcmsgQVBJIOmUmeivr1xuICAgIGlmIChlcnJvciAmJiB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnICYmICdjbGVya0Vycm9yJyBpbiBlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignQ2xlcmsgQVBJIOmUmeivr+ivpuaDhTonLCBKU09OLnN0cmluZ2lmeShlcnJvciwgbnVsbCwgMikpXG4gICAgICAvLyDov5Tlm57nqbrmlbDnu4TogIzkuI3mmK/mipvlh7rplJnor6/vvIzpmLLmraLpobXpnaLltKnmuoNcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICBcbiAgICAvLyDmo4Dmn6XmmK/lkKbmmK/nvZHnu5zplJnor6/miJblhbbku5YgQVBJIOmUmeivr1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnZmV0Y2gnKSB8fCBcbiAgICAgICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCduZXR3b3JrJykgfHxcbiAgICAgICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdFQ09OTlJFRlVTRUQnKSB8fFxuICAgICAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ3RpbWVvdXQnKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfnvZHnu5zov57mjqXplJnor6/vvIzlj6/og73mmK8gQ2xlcmsg5pyN5Yqh5LiN5Y+v55SoOicsIGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnQ2xlcmtBUElSZXNwb25zZUVycm9yJykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQ2xlcmsgQVBJIOWTjeW6lOmUmeivrzonLCBlcnJvci5tZXNzYWdlKVxuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8g5YW25LuW5pyq55+l6ZSZ6K+v77yM6L+U5Zue56m65pWw57uE6Ziy5q2i6aG16Z2i5bSp5rqDXG4gICAgY29uc29sZS5lcnJvcign5pyq55+l6ZSZ6K+v57G75Z6L77yM6L+U5Zue56m65pWw57uEOicsIGVycm9yKVxuICAgIHJldHVybiBbXVxuICB9XG59XG5cbi8qKlxuICog5qC55o2u55So5oi3SUTojrflj5bmiJDlsLFcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjaGlldmVtZW50c0J5VXNlcklkKHRhcmdldFVzZXJJZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBcbiAgICBjb25zdCBhY2hpZXZlbWVudHMgPSBhd2FpdCBwcmlzbWEuYWNoaWV2ZW1lbnQuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHsgdXNlcklkOiB0YXJnZXRVc2VySWQgfSxcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gYWNoaWV2ZW1lbnRzXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W55So5oi35oiQ5bCx5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcign6I635Y+W55So5oi35oiQ5bCx5aSx6LSlJylcbiAgfVxufVxuXG4vKipcbiAqIOeuoeeQhuWRmOWIoOmZpOaIkOWwse+8iOaXoOinhuaJgOacieiAhe+8iVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRtaW5EZWxldGVBY2hpZXZlbWVudChhY2hpZXZlbWVudElkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIC8vIOebtOaOpeWIoOmZpOaIkOWwseiusOW9le+8jOS4jeajgOafpeaJgOacieiAhVxuICAgIGF3YWl0IHByaXNtYS5hY2hpZXZlbWVudC5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGFjaGlldmVtZW50SWQgfVxuICAgIH0pXG5cbiAgICAvLyDph43mlrDpqozor4HnvJPlrZjvvIzliLfmlrDnm7jlhbPpobXpnaJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3VzZXJzJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2ZpbGUnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWNoaWV2ZW1lbnRzJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ+aIkOWwseW3suaIkOWKn+WIoOmZpCdcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5Yig6Zmk5oiQ5bCx5aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+WIoOmZpOaIkOWwseWksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDliJvlu7rmlrDnq57otZvvvIjnrqHnkIblkZjmnYPpmZDvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbXBldGl0aW9uKGRhdGE6IHtcbiAgbmFtZTogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgZGVhZGxpbmU6IHN0cmluZ1xuICBtYXhQYXJ0aWNpcGFudHM6IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gICAgXG4gICAgLy8g6aqM6K+B6L6T5YWl5pWw5o2uXG4gICAgaWYgKCFkYXRhLm5hbWUgfHwgZGF0YS5uYW1lLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn56ue6LWb5ZCN56ew5LiN6IO95Li656m6J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIWRhdGEuY2F0ZWdvcnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn6K+36YCJ5oup56ue6LWb5YiG57G7J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIWRhdGEuZGVhZGxpbmUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn6K+36YCJ5oup5oiq5q2i5pel5pyfJ1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBkZWFkbGluZURhdGUgPSBuZXcgRGF0ZShkYXRhLmRlYWRsaW5lKVxuICAgIGlmIChpc05hTihkZWFkbGluZURhdGUuZ2V0VGltZSgpKSB8fCBkZWFkbGluZURhdGUgPD0gbmV3IERhdGUoKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfmiKrmraLml6XmnJ/lv4XpobvmmK/mnKrmnaXml7bpl7QnXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG1heFBhcnRpY2lwYW50c051bSA9IHBhcnNlSW50KGRhdGEubWF4UGFydGljaXBhbnRzKVxuICAgIGlmIChpc05hTihtYXhQYXJ0aWNpcGFudHNOdW0pIHx8IG1heFBhcnRpY2lwYW50c051bSA8PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+S6uuaVsOS4iumZkOW/hemhu+aYr+Wkp+S6jjDnmoTmlbDlrZcnXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOWIm+W7uuernui1m1xuICAgIGNvbnN0IGNvbXBldGl0aW9uID0gYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IGRhdGEubmFtZS50cmltKCksXG4gICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5LFxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbj8udHJpbSgpIHx8ICcnLFxuICAgICAgICBkZWFkbGluZTogZGVhZGxpbmVEYXRlLFxuICAgICAgICBtYXhQYXJ0aWNpcGFudHM6IG1heFBhcnRpY2lwYW50c051bSxcbiAgICAgICAgY3VycmVudFBhcnRpY2lwYW50czogMFxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDliLfmlrDnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9jb21wZXRpdGlvbnMnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiBjb21wZXRpdGlvbixcbiAgICAgIG1lc3NhZ2U6ICfnq57otZvliJvlu7rmiJDlip/vvIEnXG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5Yib5bu656ue6LWb5aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+WIm+W7uuernui1m+Wksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDmm7TmlrDnq57otZvvvIjnrqHnkIblkZjmnYPpmZDvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNvbXBldGl0aW9uKGlkOiBzdHJpbmcsIGRhdGE6IHtcbiAgbmFtZTogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgZGVhZGxpbmU6IHN0cmluZ1xuICBtYXhQYXJ0aWNpcGFudHM6IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gICAgXG4gICAgLy8g6aqM6K+B6L6T5YWl5pWw5o2uXG4gICAgaWYgKCFkYXRhLm5hbWUgfHwgZGF0YS5uYW1lLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn56ue6LWb5ZCN56ew5LiN6IO95Li656m6J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIWRhdGEuY2F0ZWdvcnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn6K+36YCJ5oup56ue6LWb5YiG57G7J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIWRhdGEuZGVhZGxpbmUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn6K+36YCJ5oup5oiq5q2i5pel5pyfJ1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBkZWFkbGluZURhdGUgPSBuZXcgRGF0ZShkYXRhLmRlYWRsaW5lKVxuICAgIGlmIChpc05hTihkZWFkbGluZURhdGUuZ2V0VGltZSgpKSB8fCBkZWFkbGluZURhdGUgPD0gbmV3IERhdGUoKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfmiKrmraLml6XmnJ/lv4XpobvmmK/mnKrmnaXml7bpl7QnXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG1heFBhcnRpY2lwYW50c051bSA9IHBhcnNlSW50KGRhdGEubWF4UGFydGljaXBhbnRzKVxuICAgIGlmIChpc05hTihtYXhQYXJ0aWNpcGFudHNOdW0pIHx8IG1heFBhcnRpY2lwYW50c051bSA8PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+S6uuaVsOS4iumZkOW/hemhu+aYr+Wkp+S6jjDnmoTmlbDlrZcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5qOA5p+l56ue6LWb5piv5ZCm5a2Y5ZyoXG4gICAgY29uc3QgZXhpc3RpbmdDb21wZXRpdGlvbiA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH1cbiAgICB9KVxuXG4gICAgaWYgKCFleGlzdGluZ0NvbXBldGl0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ernui1m+S4jeWtmOWcqCdcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8g5pu05paw56ue6LWbXG4gICAgY29uc3QgY29tcGV0aXRpb24gPSBhd2FpdCBwcmlzbWEuY29tcGV0aXRpb24udXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IGRhdGEubmFtZS50cmltKCksXG4gICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5LFxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbj8udHJpbSgpIHx8ICcnLFxuICAgICAgICBkZWFkbGluZTogZGVhZGxpbmVEYXRlLFxuICAgICAgICBtYXhQYXJ0aWNpcGFudHM6IG1heFBhcnRpY2lwYW50c051bVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDliLfmlrDnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9jb21wZXRpdGlvbnMnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiBjb21wZXRpdGlvbixcbiAgICAgIG1lc3NhZ2U6ICfnq57otZvmm7TmlrDmiJDlip/vvIEnXG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5pu05paw56ue6LWb5aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+abtOaWsOernui1m+Wksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDliKDpmaTnq57otZvvvIjnrqHnkIblkZjmnYPpmZDvvIzlronlhajlpITnkIblpJbplK7kvp3otZbvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvbXBldGl0aW9uKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuXG4gICAgLy8g5qOA5p+l56ue6LWb5piv5ZCm5a2Y5ZyoXG4gICAgY29uc3QgZXhpc3RpbmdDb21wZXRpdGlvbiA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH1cbiAgICB9KVxuXG4gICAgaWYgKCFleGlzdGluZ0NvbXBldGl0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ernui1m+S4jeWtmOWcqCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDkvb/nlKggUHJpc21hIOS6i+WKoeWuieWFqOWIoOmZpOernui1m+WPiuWFtuebuOWFs+aVsOaNrlxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XG4gICAgICAvLyDnrKzkuIDmraXvvJrliKDpmaTmiYDmnInnm7jlhbPnmoTmiqXlkI3orrDlvZVcbiAgICAgIGF3YWl0IHR4LnJlZ2lzdHJhdGlvbi5kZWxldGVNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgY29tcGV0aXRpb25JZDogaWQgfVxuICAgICAgfSlcbiAgICAgIFxuICAgICAgLy8g56ys5LqM5q2l77ya5Yig6Zmk56ue6LWb5pys6LqrXG4gICAgICBhd2FpdCB0eC5jb21wZXRpdGlvbi5kZWxldGUoe1xuICAgICAgICB3aGVyZTogeyBpZCB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyDliLfmlrDnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9jb21wZXRpdGlvbnMnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiAn56ue6LWb5Yig6Zmk5oiQ5Yqf77yBJ1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+WIoOmZpOernui1m+Wksei0pTonLCBlcnJvcilcbiAgICBcbiAgICAvLyDmo4Dmn6XmmK/lkKbmmK/lpJbplK7nuqbmnZ/plJnor69cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdmb3JlaWduIGtleSBjb25zdHJhaW50JykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5Yig6Zmk5aSx6LSl77ya6K+l56ue6LWb5LuN5pyJ5YWz6IGU5pWw5o2u77yM6K+35YWI5aSE55CG55u45YWz6K6w5b2VJ1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfliKDpmaTnq57otZvlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W5omA5pyJ5oyH5a+86ICB5biI5YiX6KGoXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUZWFjaGVycygpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIGNvbnN0IHRlYWNoZXJzID0gYXdhaXQgcHJpc21hLnRlYWNoZXIuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9XG4gICAgfSlcblxuICAgIHJldHVybiB0ZWFjaGVyc1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluiAgeW4iOWIl+ihqOWksei0pTonLCBlcnJvcilcbiAgICB0aHJvdyBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiBuZXcgRXJyb3IoJ+iOt+WPluiAgeW4iOWIl+ihqOWksei0pe+8jOivt+eojeWQjumHjeivlScpXG4gIH1cbn1cblxuLyoqXG4gKiDliJvlu7rmlrDmjIflr7zogIHluIhcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRlYWNoZXIoZGF0YToge1xuICBuYW1lOiBzdHJpbmdcbiAgZGVwYXJ0bWVudD86IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gICAgXG4gICAgLy8g6aqM6K+B6L6T5YWl5pWw5o2uXG4gICAgaWYgKCFkYXRhLm5hbWUgfHwgZGF0YS5uYW1lLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5pWZ5biI5aeT5ZCN5LiN6IO95Li656m6J1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOafpeivouW9k+WJjeaVsOaNruW6k+S4reWFseacieWkmuWwkeS9jeiAgeW4iFxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG4gICAgY29uc3QgdGVhY2hlckNvdW50ID0gYXdhaXQgcHJpc21hLnRlYWNoZXIuY291bnQoKVxuICAgIFxuICAgIC8vIOeUn+aIkOagvOW8j+S4uiBUICsg5bm05Lu9ICsgM+S9jea1geawtOWPt+eahOaVmeW4iOe8luWPt1xuICAgIGNvbnN0IHRlYWNoZXJObyA9IGBUJHtjdXJyZW50WWVhcn0ke1N0cmluZyh0ZWFjaGVyQ291bnQgKyAxKS5wYWRTdGFydCgzLCAnMCcpfWBcbiAgICBcbiAgICAvLyDliJvlu7rogIHluIjorrDlvZVcbiAgICBjb25zdCB0ZWFjaGVyID0gYXdhaXQgcHJpc21hLnRlYWNoZXIuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLnRyaW0oKSxcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50Py50cmltKCkgfHwgbnVsbCxcbiAgICAgICAgdGVhY2hlck5vXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIOWIt+aWsOe8k+WtmFxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vdGVhY2hlcnMnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiB0ZWFjaGVyLFxuICAgICAgbWVzc2FnZTogJ+aMh+WvvOiAgeW4iOa3u+WKoOaIkOWKn++8gSdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfliJvlu7rogIHluIjlpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5Yib5bu66ICB5biI5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOWIoOmZpOaMh+WvvOiAgeW4iFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVGVhY2hlcihpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcblxuICAgIC8vIOajgOafpeiAgeW4iOaYr+WQpuWtmOWcqFxuICAgIGNvbnN0IGV4aXN0aW5nVGVhY2hlciA9IGF3YWl0IHByaXNtYS50ZWFjaGVyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQgfVxuICAgIH0pXG5cbiAgICBpZiAoIWV4aXN0aW5nVGVhY2hlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfmjIflr7zogIHluIjkuI3lrZjlnKgnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5qOA5p+l5piv5ZCm5pyJ5YWz6IGU55qE5oql5ZCN6K6w5b2VXG4gICAgY29uc3QgcmVnaXN0cmF0aW9uQ291bnQgPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmNvdW50KHtcbiAgICAgIHdoZXJlOiB7IHRlYWNoZXJJZDogaWQgfVxuICAgIH0pXG5cbiAgICBpZiAocmVnaXN0cmF0aW9uQ291bnQgPiAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ivpeiAgeW4iOi/mOacieWFs+iBlOeahOaKpeWQjeiusOW9le+8jOaXoOazleWIoOmZpCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDliKDpmaTogIHluIjorrDlvZVcbiAgICBhd2FpdCBwcmlzbWEudGVhY2hlci5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfVxuICAgIH0pXG5cbiAgICAvLyDliLfmlrDnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3RlYWNoZXJzJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ+aMh+WvvOiAgeW4iOWIoOmZpOaIkOWKn++8gSdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfliKDpmaTogIHluIjlpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5Yig6Zmk6ICB5biI5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPluaJgOacieaKpeWQjeiusOW9le+8iOeuoeeQhuWRmOWuoeaJueS4k+eUqO+8iVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUmVnaXN0cmF0aW9ucygpIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgY29uc3QgcmVnaXN0cmF0aW9ucyA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uZmluZE1hbnkoe1xuICAgICAgaW5jbHVkZToge1xuICAgICAgICBjb21wZXRpdGlvbjoge1xuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IHRydWUsXG4gICAgICAgICAgICBkZWFkbGluZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGVhY2hlcjoge1xuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgICAgdGVhY2hlck5vOiB0cnVlLFxuICAgICAgICAgICAgZGVwYXJ0bWVudDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvcmRlckJ5OiB7XG4gICAgICAgIGNyZWF0ZWRBdDogJ2Rlc2MnXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiByZWdpc3RyYXRpb25zXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W5oql5ZCN6K6w5b2V5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcign6I635Y+W5oql5ZCN6K6w5b2V5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJylcbiAgfVxufVxuXG4vKipcbiAqIOWuoeaguOaKpeWQjeiusOW9lVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmV2aWV3UmVnaXN0cmF0aW9uKHJlZ2lzdHJhdGlvbklkOiBzdHJpbmcsIHN0YXR1czogc3RyaW5nLCBmZWVkYmFjaz86IHN0cmluZykge1xuICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICBcbiAgdHJ5IHtcbiAgICAvLyDpqozor4HnirbmgIHlgLxcbiAgICBjb25zdCB2YWxpZFN0YXR1c2VzID0gWydQRU5ESU5HJywgJ0FQUFJPVkVEJywgJ1JFSkVDVEVEX1JFVFJZJywgJ1JFSkVDVEVEX0ZJTkFMJ11cbiAgICBpZiAoIXZhbGlkU3RhdHVzZXMuaW5jbHVkZXMoc3RhdHVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfml6DmlYjnmoTlrqHmibnnirbmgIEnKVxuICAgIH1cblxuICAgIC8vIOWmguaenOeKtuaAgeS4uiBSRUpFQ1RFRF9SRVRSWSDmiJYgUkVKRUNURURfRklOQUzvvIzlv4Xpobvmj5Dkvpvlj43ppojmhI/op4FcbiAgICBpZiAoKHN0YXR1cyA9PT0gJ1JFSkVDVEVEX1JFVFJZJyB8fCBzdGF0dXMgPT09ICdSRUpFQ1RFRF9GSU5BTCcpICYmICghZmVlZGJhY2sgfHwgZmVlZGJhY2sudHJpbSgpLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign6amz5Zue55Sz6K+35pe25b+F6aG75o+Q5L6b5Y+N6aaI5oSP6KeBJylcbiAgICB9XG5cbiAgICAvLyDmo4Dmn6XmiqXlkI3orrDlvZXmmK/lkKblrZjlnKhcbiAgICBjb25zdCBleGlzdGluZ1JlZ2lzdHJhdGlvbiA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZDogcmVnaXN0cmF0aW9uSWQgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgY29tcGV0aXRpb246IHRydWUsXG4gICAgICAgIHVzZXI6IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKCFleGlzdGluZ1JlZ2lzdHJhdGlvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfmiqXlkI3orrDlvZXkuI3lrZjlnKgnKVxuICAgIH1cblxuICAgIC8vIOabtOaWsOaKpeWQjeiusOW9lVxuICAgIGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24udXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiByZWdpc3RyYXRpb25JZCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGZlZWRiYWNrOiBmZWVkYmFjaz8udHJpbSgpIHx8IG51bGxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g5aaC5p6c5a6h5om56YCa6L+H77yM6Ieq5Yqo55Sf5oiQ5oiQ5bCx6K6w5b2VXG4gICAgaWYgKHN0YXR1cyA9PT0gJ0FQUFJPVkVEJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5bey5a2Y5Zyo55u45ZCM55qE5oiQ5bCx6K6w5b2V77yI6YG/5YWN6YeN5aSN55Sf5oiQ77yJXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nQWNoaWV2ZW1lbnQgPSBhd2FpdCBwcmlzbWEuYWNoaWV2ZW1lbnQuZmluZEZpcnN0KHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgdXNlcklkOiBleGlzdGluZ1JlZ2lzdHJhdGlvbi51c2VySWQsXG4gICAgICAgICAgICB0aXRsZTogZXhpc3RpbmdSZWdpc3RyYXRpb24uY29tcGV0aXRpb24ubmFtZSxcbiAgICAgICAgICAgIHR5cGU6ICdBV0FSRCcgLy8g56ue6LWb6I635aWW6buY6K6k5Li65aWW6aG557G75Z6LXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghZXhpc3RpbmdBY2hpZXZlbWVudCkge1xuICAgICAgICAgIC8vIOagueaNruernui1m+exu+WIq+ehruWumuaIkOWwsee6p+WIq1xuICAgICAgICAgIGxldCBhY2hpZXZlbWVudExldmVsOiAnU1RBVEUnIHwgJ1BST1ZJTkNFJyB8ICdTQ0hPT0wnID0gJ1NDSE9PTCdcbiAgICAgICAgICBpZiAoZXhpc3RpbmdSZWdpc3RyYXRpb24uY29tcGV0aXRpb24uY2F0ZWdvcnkgPT09ICdURUNITklDQUwnIHx8IFxuICAgICAgICAgICAgICBleGlzdGluZ1JlZ2lzdHJhdGlvbi5jb21wZXRpdGlvbi5jYXRlZ29yeSA9PT0gJ0FJJykge1xuICAgICAgICAgICAgYWNoaWV2ZW1lbnRMZXZlbCA9ICdTVEFURSdcbiAgICAgICAgICB9IGVsc2UgaWYgKGV4aXN0aW5nUmVnaXN0cmF0aW9uLmNvbXBldGl0aW9uLmNhdGVnb3J5ID09PSAnUFJPR1JBTU1JTkcnIHx8IFxuICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdSZWdpc3RyYXRpb24uY29tcGV0aXRpb24uY2F0ZWdvcnkgPT09ICdJTk5PVkFUSU9OJykge1xuICAgICAgICAgICAgYWNoaWV2ZW1lbnRMZXZlbCA9ICdQUk9WSU5DRSdcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyDliJvlu7rmiJDlsLHorrDlvZVcbiAgICAgICAgICBhd2FpdCBwcmlzbWEuYWNoaWV2ZW1lbnQuY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgdXNlcklkOiBleGlzdGluZ1JlZ2lzdHJhdGlvbi51c2VySWQsXG4gICAgICAgICAgICAgIHRpdGxlOiBleGlzdGluZ1JlZ2lzdHJhdGlvbi5jb21wZXRpdGlvbi5uYW1lLFxuICAgICAgICAgICAgICB0eXBlOiAnQVdBUkQnLFxuICAgICAgICAgICAgICBsZXZlbDogYWNoaWV2ZW1lbnRMZXZlbCxcbiAgICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSwgLy8g5L2/55So5a6h5om56YCa6L+H55qE5pe26Ze05L2c5Li66I635b6X5pe26Ze0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnNvbGUubG9nKGDlt7LkuLrnlKjmiLcgJHtleGlzdGluZ1JlZ2lzdHJhdGlvbi51c2VySWR9IOiHquWKqOeUn+aIkOaIkOWwseiusOW9le+8miR7ZXhpc3RpbmdSZWdpc3RyYXRpb24uY29tcGV0aXRpb24ubmFtZX1gKVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChhY2hpZXZlbWVudEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+iHquWKqOeUn+aIkOaIkOWwseiusOW9leWksei0pTonLCBhY2hpZXZlbWVudEVycm9yKVxuICAgICAgICAvLyDkuI3lvbHlk43lrqHmibnmtYHnqIvvvIzlj6rorrDlvZXplJnor69cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDph43mlrDpqozor4HnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3JlZ2lzdHJhdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvZmlsZScpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9hY2hpZXZlbWVudHMnKSAvLyDliLfmlrDnrqHnkIblkZjmiJDlsLHpobXpnaLvvIjlpoLmnpzlrZjlnKjvvIlcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogc3RhdHVzID09PSAnQVBQUk9WRUQnID8gJ+aKpeWQjeW3sumAmui/h++8jOW3suiHquWKqOeUn+aIkOaIkOWwseiusOW9le+8gScgOiAn5oql5ZCN5bey5pu05pawJ1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+WuoeaguOaKpeWQjeWksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICflrqHmoLjlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W566h55CG5ZGY5o6n5Yi25Y+w57uf6K6h5pWw5o2uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXNoYm9hcmRTdGF0cygpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIGNvbnN0IGNsZXJrID0gYXdhaXQgY2xlcmtDbGllbnQoKVxuICAgIFxuICAgIC8vIOiOt+WPlueUqOaIt+aAu+aVsO+8jOa3u+WKoOmUmeivr+WkhOeQhlxuICAgIGxldCB0b3RhbFVzZXJzID0gMFxuICAgIHRyeSB7XG4gICAgICB0b3RhbFVzZXJzID0gYXdhaXQgY2xlcmsudXNlcnMuZ2V0Q291bnQoKVxuICAgIH0gY2F0Y2ggKGNsZXJrRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPlueUqOaIt+aAu+aVsOWksei0pTonLCBjbGVya0Vycm9yKVxuICAgICAgLy8g5aaC5p6c5piv572R57uc5oiWIEFQSSDplJnor6/vvIzkvb/nlKjpu5jorqTlgLxcbiAgICAgIGlmIChjbGVya0Vycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgKFxuICAgICAgICBjbGVya0Vycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ2ZldGNoJykgfHwgXG4gICAgICAgIGNsZXJrRXJyb3IubWVzc2FnZS5pbmNsdWRlcygnbmV0d29yaycpIHx8XG4gICAgICAgIGNsZXJrRXJyb3IubWVzc2FnZS5pbmNsdWRlcygnRUNPTk5SRUZVU0VEJykgfHxcbiAgICAgICAgY2xlcmtFcnJvci5tZXNzYWdlLmluY2x1ZGVzKCd0aW1lb3V0JykgfHxcbiAgICAgICAgY2xlcmtFcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdDbGVya0FQSVJlc3BvbnNlRXJyb3InKVxuICAgICAgKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfnvZHnu5zmiJYgQ2xlcmsgQVBJIOmUmeivr++8jOS9v+eUqOm7mOiupOeUqOaIt+aVsCAwJylcbiAgICAgIH0gZWxzZSBpZiAoY2xlcmtFcnJvciAmJiB0eXBlb2YgY2xlcmtFcnJvciA9PT0gJ29iamVjdCcgJiYgJ2NsZXJrRXJyb3InIGluIGNsZXJrRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQ2xlcmsgQVBJIOmUmeivr+ivpuaDhTonLCBKU09OLnN0cmluZ2lmeShjbGVya0Vycm9yLCBudWxsLCAyKSlcbiAgICAgIH1cbiAgICAgIHRvdGFsVXNlcnMgPSAwIC8vIOS9v+eUqOm7mOiupOWAvFxuICAgIH1cbiAgICBcbiAgICAvLyDlubbooYzojrflj5blhbbku5bnu5/orqHmlbDmja5cbiAgICBjb25zdCBbXG4gICAgICB0b3RhbENvbXBldGl0aW9ucyxcbiAgICAgIHRvdGFsUmVnaXN0cmF0aW9ucyxcbiAgICAgIHBlbmRpbmdSZXZpZXdzLFxuICAgICAgY2F0ZWdvcnlTdGF0cyxcbiAgICAgIHRvcENvbXBldGl0aW9ucyxcbiAgICAgIHJlY2VudFBlbmRpbmdcbiAgICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgLy8g6LWb5LqL5oC75pWwXG4gICAgICBwcmlzbWEuY29tcGV0aXRpb24uY291bnQoKSxcbiAgICAgIFxuICAgICAgLy8g5oql5ZCN5oC75pWwXG4gICAgICBwcmlzbWEucmVnaXN0cmF0aW9uLmNvdW50KCksXG4gICAgICBcbiAgICAgIC8vIOW+heWuoeaguOaVsOmHj1xuICAgICAgcHJpc21hLnJlZ2lzdHJhdGlvbi5jb3VudCh7XG4gICAgICAgIHdoZXJlOiB7IHN0YXR1czogJ1BFTkRJTkcnIH1cbiAgICAgIH0pLFxuICAgICAgXG4gICAgICAvLyDmjInliIbnsbvnu5/orqHotZvkuovmlbDph49cbiAgICAgIHByaXNtYS5jb21wZXRpdGlvbi5ncm91cEJ5KHtcbiAgICAgICAgYnk6IFsnY2F0ZWdvcnknXSxcbiAgICAgICAgX2NvdW50OiB7XG4gICAgICAgICAgaWQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBcbiAgICAgIC8vIOaKpeWQjeS6uuaVsOacgOWkmueahOWJjTXkuKrotZvkuotcbiAgICAgIHByaXNtYS5jb21wZXRpdGlvbi5maW5kTWFueSh7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgX2NvdW50OiB7XG4gICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uczogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3JkZXJCeToge1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbnM6IHtcbiAgICAgICAgICAgIF9jb3VudDogJ2Rlc2MnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0YWtlOiA1XG4gICAgICB9KSxcbiAgICAgIFxuICAgICAgLy8g5pyA5pawNeadoeW+heWuoeaguOaKpeWQjVxuICAgICAgcHJpc21hLnJlZ2lzdHJhdGlvbi5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHN0YXR1czogJ1BFTkRJTkcnIH0sXG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgIGFwcGxpY2FudE5hbWU6IHRydWUsXG4gICAgICAgICAgY29tcGV0aXRpb246IHtcbiAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICBuYW1lOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjcmVhdGVkQXQ6IHRydWUsXG4gICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgIG5hbWU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJ1xuICAgICAgICB9LFxuICAgICAgICB0YWtlOiA1XG4gICAgICB9KVxuICAgIF0pXG5cbiAgICAvLyDlpITnkIbliIbnsbvnu5/orqHmlbDmja7vvIzlkIjlubbnm7jkvLzliIbnsbtcbiAgICBjb25zdCBwcm9jZXNzZWRDYXRlZ29yeVN0YXRzID0gY2F0ZWdvcnlTdGF0cy5yZWR1Y2UoKGFjYzogeyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfVtdLCBpdGVtOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gaXRlbS5jYXRlZ29yeSB8fCAn5YW25LuWJ1xuICAgICAgY29uc3QgZXhpc3RpbmdJdGVtID0gYWNjLmZpbmQoKHN0YXQ6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH0pID0+IHN0YXQubmFtZSA9PT0gY2F0ZWdvcnkpXG4gICAgICBcbiAgICAgIGlmIChleGlzdGluZ0l0ZW0pIHtcbiAgICAgICAgZXhpc3RpbmdJdGVtLnZhbHVlICs9IGl0ZW0uX2NvdW50LmlkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2MucHVzaCh7XG4gICAgICAgICAgbmFtZTogY2F0ZWdvcnksXG4gICAgICAgICAgdmFsdWU6IGl0ZW0uX2NvdW50LmlkXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBcbiAgICAgIHJldHVybiBhY2NcbiAgICB9LCBbXSBhcyB7IG5hbWU6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9W10pXG5cbiAgICByZXR1cm4ge1xuICAgICAgdG90YWxVc2VycyxcbiAgICAgIHRvdGFsQ29tcGV0aXRpb25zLFxuICAgICAgdG90YWxSZWdpc3RyYXRpb25zLFxuICAgICAgcGVuZGluZ1Jldmlld3MsXG4gICAgICBjYXRlZ29yeVN0YXRzOiBwcm9jZXNzZWRDYXRlZ29yeVN0YXRzLFxuICAgICAgdG9wQ29tcGV0aXRpb25zOiB0b3BDb21wZXRpdGlvbnMubWFwKChjb21wOiBhbnkpID0+ICh7XG4gICAgICAgIG5hbWU6IGNvbXAubmFtZSxcbiAgICAgICAgcmVnaXN0cmF0aW9uczogY29tcC5fY291bnQucmVnaXN0cmF0aW9uc1xuICAgICAgfSkpLFxuICAgICAgcmVjZW50UGVuZGluZzogcmVjZW50UGVuZGluZy5tYXAoKHJlZzogYW55KSA9PiAoe1xuICAgICAgICBpZDogcmVnLmlkLFxuICAgICAgICBhcHBsaWNhbnROYW1lOiByZWcuYXBwbGljYW50TmFtZSB8fCByZWcudXNlcj8ubmFtZSB8fCAn5pyq55+lJyxcbiAgICAgICAgY29tcGV0aXRpb25OYW1lOiByZWcuY29tcGV0aXRpb24ubmFtZSxcbiAgICAgICAgY3JlYXRlZEF0OiByZWcuY3JlYXRlZEF0XG4gICAgICB9KSlcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W5Luq6KGo5p2/57uf6K6h5pWw5o2u5aSx6LSlOicsIGVycm9yKVxuICAgIFxuICAgIC8vIOWmguaenOaYr+adg+mZkOmqjOivgemUmeivr++8jOi/lOWbnum7mOiupOe7n+iuoeaVsOaNrlxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIChcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+e9kee7nOivt+axgui2heaXticpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCforqTor4HmnI3liqEnKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn5p2D6ZmQ5LiN6LazJykgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+acqueZu+W9lScpXG4gICAgKSkge1xuICAgICAgY29uc29sZS5lcnJvcign5p2D6ZmQ6aqM6K+B5aSx6LSl77yM6L+U5Zue6buY6K6k57uf6K6h5pWw5o2uOicsIGVycm9yLm1lc3NhZ2UpXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3RhbFVzZXJzOiAwLFxuICAgICAgICB0b3RhbENvbXBldGl0aW9uczogMCxcbiAgICAgICAgdG90YWxSZWdpc3RyYXRpb25zOiAwLFxuICAgICAgICBwZW5kaW5nUmV2aWV3czogMCxcbiAgICAgICAgY2F0ZWdvcnlTdGF0czogW10sXG4gICAgICAgIHRvcENvbXBldGl0aW9uczogW10sXG4gICAgICAgIHJlY2VudFBlbmRpbmc6IFtdXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOWFtuS7lumUmeivr+S5n+i/lOWbnum7mOiupOe7n+iuoeaVsOaNru+8jOmYsuatoumhtemdouW0qea6g1xuICAgIGNvbnNvbGUuZXJyb3IoJ+acquefpemUmeivr++8jOi/lOWbnum7mOiupOe7n+iuoeaVsOaNrjonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgdG90YWxVc2VyczogMCxcbiAgICAgIHRvdGFsQ29tcGV0aXRpb25zOiAwLFxuICAgICAgdG90YWxSZWdpc3RyYXRpb25zOiAwLFxuICAgICAgcGVuZGluZ1Jldmlld3M6IDAsXG4gICAgICBjYXRlZ29yeVN0YXRzOiBbXSxcbiAgICAgIHRvcENvbXBldGl0aW9uczogW10sXG4gICAgICByZWNlbnRQZW5kaW5nOiBbXVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOaJuemHj+WvvOWFpeaMh+WvvOiAgeW4iFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYmF0Y2hJbXBvcnRUZWFjaGVycyh0ZWFjaGVyc0RhdGE6IHsgbmFtZTogc3RyaW5nOyBkZXBhcnRtZW50Pzogc3RyaW5nIH1bXSkge1xuICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICBjb25zdCBjbGVyayA9IGF3YWl0IGNsZXJrQ2xpZW50KClcbiAgXG4gIHRyeSB7XG4gICAgLy8g6I635Y+W5b2T5YmN5bm05Lu9XG4gICAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcbiAgICBjb25zdCB5ZWFyUHJlZml4ID0gYFQke2N1cnJlbnRZZWFyfWBcbiAgICBcbiAgICAvLyDmn6Xor6LlvZPliY3lubTku73mnIDmlrDnmoTmlZnluIjnvJblj7dcbiAgICBjb25zdCBsYXRlc3RUZWFjaGVyID0gYXdhaXQgcHJpc21hLnRlYWNoZXIuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRlYWNoZXJObzoge1xuICAgICAgICAgIHN0YXJ0c1dpdGg6IHllYXJQcmVmaXhcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgdGVhY2hlck5vOiAnZGVzYydcbiAgICAgIH1cbiAgICB9KVxuICAgIFxuICAgIC8vIOiuoeeul+i1t+Wni+a1geawtOWPt1xuICAgIGxldCBzZXJpYWxOdW1iZXIgPSAxXG4gICAgaWYgKGxhdGVzdFRlYWNoZXIpIHtcbiAgICAgIGNvbnN0IGxhdGVzdFNlcmlhbCA9IHBhcnNlSW50KGxhdGVzdFRlYWNoZXIudGVhY2hlck5vLnNsaWNlKC0zKSlcbiAgICAgIGlmICghaXNOYU4obGF0ZXN0U2VyaWFsKSkge1xuICAgICAgICBzZXJpYWxOdW1iZXIgPSBsYXRlc3RTZXJpYWwgKyAxXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOagvOW8j+WMluaVmeW4iOaVsOaNrlxuICAgIGNvbnN0IGZvcm1hdHRlZFRlYWNoZXJzID0gdGVhY2hlcnNEYXRhLm1hcCgodGVhY2hlciwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlYWNoZXJObyA9IGAke3llYXJQcmVmaXh9JHtzZXJpYWxOdW1iZXIudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWBcbiAgICAgIHNlcmlhbE51bWJlcisrXG4gICAgICBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHRlYWNoZXIubmFtZS50cmltKCksXG4gICAgICAgIGRlcGFydG1lbnQ6IHRlYWNoZXIuZGVwYXJ0bWVudD8udHJpbSgpIHx8IG51bGwsXG4gICAgICAgIHRlYWNoZXJOb1xuICAgICAgfVxuICAgIH0pXG4gICAgXG4gICAgLy8g5om56YeP5o+S5YWl5pWw5o2u5bqTXG4gICAgYXdhaXQgcHJpc21hLnRlYWNoZXIuY3JlYXRlTWFueSh7XG4gICAgICBkYXRhOiBmb3JtYXR0ZWRUZWFjaGVyc1xuICAgIH0pXG4gICAgXG4gICAgLy8g6YeN5paw6aqM6K+B57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi90ZWFjaGVycycpXG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBjb3VudDogZm9ybWF0dGVkVGVhY2hlcnMubGVuZ3RoLFxuICAgICAgbWVzc2FnZTogYOaIkOWKn+WvvOWFpSAke2Zvcm1hdHRlZFRlYWNoZXJzLmxlbmd0aH0g5L2N5oyH5a+86ICB5biIYFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfmibnph4/lr7zlhaXmjIflr7zogIHluIjlpLHotKU6JywgZXJyb3IpXG4gICAgdGhyb3cgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yIDogbmV3IEVycm9yKCfmibnph4/lr7zlhaXlpLHotKXvvIzor7fnqI3lkI7ph43or5UnKVxuICB9XG59XG5cbi8qKlxuICog5om56YeP5a6h5om55oql5ZCN6K6w5b2VXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBiYXRjaFJldmlld1JlZ2lzdHJhdGlvbnMoXG4gIGlkczogc3RyaW5nW10sIFxuICBzdGF0dXM6ICdBUFBST1ZFRCcgfCAnUkVKRUNURURfUkVUUlknIHwgJ1JFSkVDVEVEX0ZJTkFMJywgXG4gIGZlZWRiYWNrPzogc3RyaW5nXG4pIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgLy8g6aqM6K+B54q25oCB5YC8XG4gICAgY29uc3QgdmFsaWRTdGF0dXNlcyA9IFsnQVBQUk9WRUQnLCAnUkVKRUNURURfUkVUUlknLCAnUkVKRUNURURfRklOQUwnXVxuICAgIGlmICghdmFsaWRTdGF0dXNlcy5pbmNsdWRlcyhzdGF0dXMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ+aXoOaViOeahOWuoeaJueeKtuaAgScpXG4gICAgfVxuXG4gICAgLy8g5aaC5p6c54q25oCB5Li6IFJFSkVDVEVEX1JFVFJZIOaIliBSRUpFQ1RFRF9GSU5BTO+8jOW/hemhu+aPkOS+m+WPjemmiOaEj+ingVxuICAgIGlmICgoc3RhdHVzID09PSAnUkVKRUNURURfUkVUUlknIHx8IHN0YXR1cyA9PT0gJ1JFSkVDVEVEX0ZJTkFMJykgJiYgKCFmZWVkYmFjayB8fCBmZWVkYmFjay50cmltKCkubGVuZ3RoID09PSAwKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfpqbPlm57nlLPor7fml7blv4Xpobvmj5Dkvpvlj43ppojmhI/op4EnKVxuICAgIH1cblxuICAgIC8vIOmqjOivgUlE5pWw57uEXG4gICAgaWYgKCFpZHMgfHwgaWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfor7fpgInmi6nopoHlrqHmibnnmoTmiqXlkI3orrDlvZUnKVxuICAgIH1cblxuICAgIC8vIOiOt+WPluimgeabtOaWsOeahOaKpeWQjeiusOW9leivpuaDhe+8iOeUqOS6jueUn+aIkOaIkOWwse+8iVxuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbnNUb1VwZGF0ZSA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHsgXG4gICAgICAgIGlkOiB7IGluOiBpZHMgfVxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgY29tcGV0aXRpb246IHRydWUsXG4gICAgICAgIHVzZXI6IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g5om56YeP5pu05paw5oql5ZCN6K6w5b2VXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi51cGRhdGVNYW55KHtcbiAgICAgIHdoZXJlOiB7IFxuICAgICAgICBpZDogeyBpbjogaWRzIH1cbiAgICAgIH0sXG4gICAgICBkYXRhOiB7IFxuICAgICAgICBzdGF0dXMsIFxuICAgICAgICBmZWVkYmFjazogZmVlZGJhY2s/LnRyaW0oKSB8fCBudWxsIFxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDlpoLmnpzlrqHmibnpgJrov4fvvIzmibnph4/nlJ/miJDmiJDlsLHorrDlvZVcbiAgICBpZiAoc3RhdHVzID09PSAnQVBQUk9WRUQnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lzdHJhdGlvbiBvZiByZWdpc3RyYXRpb25zVG9VcGRhdGUpIHtcbiAgICAgICAgICAvLyDmo4Dmn6XmmK/lkKblt7LlrZjlnKjnm7jlkIznmoTmiJDlsLHorrDlvZXvvIjpgb/lhY3ph43lpI3nlJ/miJDvvIlcbiAgICAgICAgICBjb25zdCBleGlzdGluZ0FjaGlldmVtZW50ID0gYXdhaXQgcHJpc21hLmFjaGlldmVtZW50LmZpbmRGaXJzdCh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICB1c2VySWQ6IHJlZ2lzdHJhdGlvbi51c2VySWQsXG4gICAgICAgICAgICAgIHRpdGxlOiByZWdpc3RyYXRpb24uY29tcGV0aXRpb24ubmFtZSxcbiAgICAgICAgICAgICAgdHlwZTogJ0FXQVJEJyAvLyDnq57otZvojrflpZbpu5jorqTkuLrlpZbpobnnsbvlnotcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgaWYgKCFleGlzdGluZ0FjaGlldmVtZW50KSB7XG4gICAgICAgICAgICAvLyDmoLnmja7nq57otZvnsbvliKvnoa7lrprmiJDlsLHnuqfliKtcbiAgICAgICAgICAgIGxldCBhY2hpZXZlbWVudExldmVsOiAnU1RBVEUnIHwgJ1BST1ZJTkNFJyB8ICdTQ0hPT0wnID0gJ1NDSE9PTCdcbiAgICAgICAgICAgIGlmIChyZWdpc3RyYXRpb24uY29tcGV0aXRpb24uY2F0ZWdvcnkgPT09ICdURUNITklDQUwnIHx8IFxuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi5jb21wZXRpdGlvbi5jYXRlZ29yeSA9PT0gJ0FJJykge1xuICAgICAgICAgICAgICBhY2hpZXZlbWVudExldmVsID0gJ1NUQVRFJ1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWdpc3RyYXRpb24uY29tcGV0aXRpb24uY2F0ZWdvcnkgPT09ICdQUk9HUkFNTUlORycgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi5jb21wZXRpdGlvbi5jYXRlZ29yeSA9PT0gJ0lOTk9WQVRJT04nKSB7XG4gICAgICAgICAgICAgIGFjaGlldmVtZW50TGV2ZWwgPSAnUFJPVklOQ0UnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWIm+W7uuaIkOWwseiusOW9lVxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmFjaGlldmVtZW50LmNyZWF0ZSh7XG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHJlZ2lzdHJhdGlvbi51c2VySWQsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlZ2lzdHJhdGlvbi5jb21wZXRpdGlvbi5uYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdBV0FSRCcsXG4gICAgICAgICAgICAgICAgbGV2ZWw6IGFjaGlldmVtZW50TGV2ZWwsXG4gICAgICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSwgLy8g5L2/55So5a6h5om56YCa6L+H55qE5pe26Ze05L2c5Li66I635b6X5pe26Ze0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDlt7LkuLrnlKjmiLcgJHtyZWdpc3RyYXRpb24udXNlcklkfSDoh6rliqjnlJ/miJDmiJDlsLHorrDlvZXvvJoke3JlZ2lzdHJhdGlvbi5jb21wZXRpdGlvbi5uYW1lfWApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChhY2hpZXZlbWVudEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+aJuemHj+eUn+aIkOaIkOWwseiusOW9leWksei0pTonLCBhY2hpZXZlbWVudEVycm9yKVxuICAgICAgICAvLyDkuI3lvbHlk43lrqHmibnmtYHnqIvvvIzlj6rorrDlvZXplJnor69cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDph43mlrDpqozor4HnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3JlZ2lzdHJhdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvZmlsZScpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9hY2hpZXZlbWVudHMnKSAvLyDliLfmlrDnrqHnkIblkZjmiJDlsLHpobXpnaLvvIjlpoLmnpzlrZjlnKjvvIlcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgY291bnQ6IHJlc3VsdC5jb3VudCxcbiAgICAgIG1lc3NhZ2U6IHN0YXR1cyA9PT0gJ0FQUFJPVkVEJyBcbiAgICAgICAgPyBg5oiQ5Yqf6YCa6L+HICR7cmVzdWx0LmNvdW50fSDmnaHmiqXlkI3nlLPor7fvvIzlt7Loh6rliqjnlJ/miJDmiJDlsLHorrDlvZXvvIFgIFxuICAgICAgICA6IGDmiJDlip/lpITnkIYgJHtyZXN1bHQuY291bnR9IOadoeaKpeWQjeiusOW9lWBcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5om56YeP5a6h5om55aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+aJuemHj+WuoeaJueWksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDojrflj5bmiYDmnInnlKjmiLfnmoTmiJDlsLHorrDlvZXvvIjnrqHnkIblkZjkuJPnlKjvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEFjaGlldmVtZW50cygpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIGNvbnN0IGFjaGlldmVtZW50cyA9IGF3YWl0IHByaXNtYS5hY2hpZXZlbWVudC5maW5kTWFueSh7XG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIGVtYWlsOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb3JkZXJCeToge1xuICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJ1xuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gYWNoaWV2ZW1lbnRzXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W5oiQ5bCx6K6w5b2V5aSx6LSlOicsIGVycm9yKVxuICAgIFxuICAgIC8vIOWmguaenOaYr+adg+mZkOmqjOivgemUmeivr++8jOi/lOWbnuepuuaVsOe7hOiAjOS4jeaYr+aKm+WHuumUmeivr1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIChcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+e9kee7nOivt+axgui2heaXticpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCforqTor4HmnI3liqEnKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn5p2D6ZmQ5LiN6LazJykgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+acqueZu+W9lScpXG4gICAgKSkge1xuICAgICAgY29uc29sZS5lcnJvcign5p2D6ZmQ6aqM6K+B5aSx6LSl77yM6L+U5Zue56m65pWw57uEOicsIGVycm9yLm1lc3NhZ2UpXG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgXG4gICAgLy8g5YW25LuW6ZSZ6K+v5Lmf6L+U5Zue56m65pWw57uE77yM6Ziy5q2i6aG16Z2i5bSp5rqDXG4gICAgY29uc29sZS5lcnJvcign5pyq55+l6ZSZ6K+v77yM6L+U5Zue56m65pWw57uEOicsIGVycm9yKVxuICAgIHJldHVybiBbXVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W5a+85Ye65pWw5o2uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBvcnREYXRhKGNvbXBldGl0aW9uSWQ6IHN0cmluZykge1xuICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICBcbiAgdHJ5IHtcbiAgICAvLyDmn6Xor6Lor6XotZvkuovkuIvmiYDmnInlt7LpgJrov4fnmoTmiqXlkI3orrDlvZVcbiAgICBjb25zdCByZWdpc3RyYXRpb25zID0gYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjb21wZXRpdGlvbklkLFxuICAgICAgICBzdGF0dXM6ICdBUFBST1ZFRCdcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHRlYWNoZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgICBkZXBhcnRtZW50OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb3JkZXJCeToge1xuICAgICAgICBjcmVhdGVkQXQ6ICdhc2MnXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIOaJgeW5s+WMluagvOW8j+WMluaVsOaNrlxuICAgIGNvbnN0IGV4cG9ydERhdGEgPSByZWdpc3RyYXRpb25zLm1hcChyZWcgPT4gKHtcbiAgICAgIOeUs+ivt+S6ujogcmVnLmFwcGxpY2FudE5hbWUgfHwgJ+acquefpScsXG4gICAgICDkvZzlk4HlkI3np7A6IHJlZy5wcm9qZWN0TmFtZSB8fCAn5pegJyxcbiAgICAgIOWboumYn+aIkOWRmDogcmVnLnRlYW1NZW1iZXJzIHx8ICfml6AnLFxuICAgICAg5oyH5a+86ICB5biIOiByZWcudGVhY2hlcj8ubmFtZSB8fCAn5pegJyxcbiAgICAgIOiAgeW4iOWtpumZojogcmVnLnRlYWNoZXI/LmRlcGFydG1lbnQgfHwgJ+aXoCcsXG4gICAgICDmiqXlkI3or7TmmI46IHJlZy5ub3RlcyB8fCAn5pegJyxcbiAgICAgIOaPkOS6pOaXtumXtDogcmVnLmNyZWF0ZWRBdC50b0xvY2FsZURhdGVTdHJpbmcoJ3poLUNOJywge1xuICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXG4gICAgICAgIGRheTogJzItZGlnaXQnXG4gICAgICB9KVxuICAgIH0pKVxuXG4gICAgcmV0dXJuIGV4cG9ydERhdGFcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfojrflj5blr7zlh7rmlbDmja7lpLHotKU6JywgZXJyb3IpXG4gICAgdGhyb3cgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yIDogbmV3IEVycm9yKCfojrflj5blr7zlh7rmlbDmja7lpLHotKXvvIzor7fnqI3lkI7ph43or5UnKVxuICB9XG59XG5cbi8qKlxuICog5YiH5o2i56ue6LWb5b2S5qGj54q25oCBXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b2dnbGVDb21wZXRpdGlvbkFyY2hpdmUoaWQ6IHN0cmluZywgY3VycmVudFN0YXR1czogYm9vbGVhbikge1xuICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICBcbiAgdHJ5IHtcbiAgICAvLyDmm7TmlrDnq57otZvnirbmgIFcbiAgICBjb25zdCBuZXdTdGF0dXMgPSAhY3VycmVudFN0YXR1c1xuICAgIGNvbnN0IGNvbXBldGl0aW9uID0gYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YTogeyBpc0FjdGl2ZTogbmV3U3RhdHVzIH1cbiAgICB9KVxuXG4gICAgLy8g6YeN5paw6aqM6K+B57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9jb21wZXRpdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvY29tcGV0aXRpb25zJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgZGF0YTogY29tcGV0aXRpb24sXG4gICAgICBtZXNzYWdlOiBuZXdTdGF0dXMgPyAn56ue6LWb5bey6YeN5paw5LiK5p62JyA6ICfnq57otZvlt7LlvZLmoaMnXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+WIh+aNouernui1m+eKtuaAgeWksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfliIfmjaLnq57otZvnirbmgIHlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFTQTAyQnNCLHVNQUFBIn0=
}),
"[project]/src/app/actions/data:6066f7 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reviewRegistration",
    ()=>$$RSC_SERVER_ACTION_11
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"700184bcf6a5e75db180067246bb5eeaabfccf0821":"reviewRegistration"},"src/app/actions/admin.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("700184bcf6a5e75db180067246bb5eeaabfccf0821", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "reviewRegistration");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWRtaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSdcbmltcG9ydCB7IGF1dGggfSBmcm9tICdAY2xlcmsvbmV4dGpzL3NlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcblxuLyoqXG4gKiDpqozor4HnrqHnkIblkZjmnYPpmZDnmoTovoXliqnlh73mlbDvvIjln7rkuo7mnKzlnLAgSldUIFRva2Vu77yM6Zu2572R57uc6K+35rGC77yJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VySWQsIHNlc3Npb25DbGFpbXMgfSA9IGF3YWl0IGF1dGgoKVxuXG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5pyq55m75b2V77yM6K+35YWI55m75b2VJylcbiAgICB9XG4gICAgXG4gICAgLy8g55u05o6l5LuO5pys5ZywIEpXVCBUb2tlbiDkuK3or7vlj5Ygcm9sZe+8jOmbtue9kee7nOivt+axgu+8gVxuICAgIGNvbnN0IHJvbGUgPSAoc2Vzc2lvbkNsYWltcyBhcyBhbnkpPy5yb2xlXG4gICAgaWYgKHJvbGUgIT09ICdhZG1pbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5p2D6ZmQ5LiN6Laz77ya5oKo55qE6LSm5Y+35LiN5piv566h55CG5ZGYJylcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgdXNlcklkIH0gLy8g5LiN5YaN6L+U5Zue5a6M5pW055qEIHVzZXIg5a+56LGh77yM5Zug5Li65oiR5Lus5LiN6ZyA6KaB5LqGXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign566h55CG5ZGY5p2D6ZmQ5qCh6aqM5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IG5ldyBFcnJvcihlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfmnYPpmZDmoKHpqozpgYfliLDmnKrnn6XplJnor68nKVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W5omA5pyJ55So5oi3XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxVc2VycygpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIGNvbnN0IGNsZXJrID0gYXdhaXQgY2xlcmtDbGllbnQoKVxuICAgIGNvbnN0IHVzZXJMaXN0ID0gYXdhaXQgY2xlcmsudXNlcnMuZ2V0VXNlckxpc3Qoe1xuICAgICAgbGltaXQ6IDEwMCxcbiAgICAgIG9yZGVyQnk6ICctY3JlYXRlZF9hdCdcbiAgICB9KVxuXG4gICAgLy8g6L+U5Zue57K+566A55qE55So5oi35L+h5oGvXG4gICAgcmV0dXJuIHVzZXJMaXN0LmRhdGEubWFwKHVzZXIgPT4gKHtcbiAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgZmlyc3ROYW1lOiB1c2VyLmZpcnN0TmFtZSxcbiAgICAgIGxhc3ROYW1lOiB1c2VyLmxhc3ROYW1lLFxuICAgICAgZW1haWxBZGRyZXNzZXM6IHVzZXIuZW1haWxBZGRyZXNzZXMsXG4gICAgICBpbWFnZVVybDogdXNlci5pbWFnZVVybFxuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPlueUqOaIt+WIl+ihqOWksei0pTonLCBlcnJvcilcbiAgICBcbiAgICAvLyDmo4Dmn6XmmK/lkKbmmK8gQ2xlcmsgQVBJIOmUmeivr1xuICAgIGlmIChlcnJvciAmJiB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnICYmICdjbGVya0Vycm9yJyBpbiBlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignQ2xlcmsgQVBJIOmUmeivr+ivpuaDhTonLCBKU09OLnN0cmluZ2lmeShlcnJvciwgbnVsbCwgMikpXG4gICAgICAvLyDov5Tlm57nqbrmlbDnu4TogIzkuI3mmK/mipvlh7rplJnor6/vvIzpmLLmraLpobXpnaLltKnmuoNcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICBcbiAgICAvLyDmo4Dmn6XmmK/lkKbmmK/nvZHnu5zplJnor6/miJblhbbku5YgQVBJIOmUmeivr1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnZmV0Y2gnKSB8fCBcbiAgICAgICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCduZXR3b3JrJykgfHxcbiAgICAgICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdFQ09OTlJFRlVTRUQnKSB8fFxuICAgICAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ3RpbWVvdXQnKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfnvZHnu5zov57mjqXplJnor6/vvIzlj6/og73mmK8gQ2xlcmsg5pyN5Yqh5LiN5Y+v55SoOicsIGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnQ2xlcmtBUElSZXNwb25zZUVycm9yJykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQ2xlcmsgQVBJIOWTjeW6lOmUmeivrzonLCBlcnJvci5tZXNzYWdlKVxuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8g5YW25LuW5pyq55+l6ZSZ6K+v77yM6L+U5Zue56m65pWw57uE6Ziy5q2i6aG16Z2i5bSp5rqDXG4gICAgY29uc29sZS5lcnJvcign5pyq55+l6ZSZ6K+v57G75Z6L77yM6L+U5Zue56m65pWw57uEOicsIGVycm9yKVxuICAgIHJldHVybiBbXVxuICB9XG59XG5cbi8qKlxuICog5qC55o2u55So5oi3SUTojrflj5bmiJDlsLFcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjaGlldmVtZW50c0J5VXNlcklkKHRhcmdldFVzZXJJZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBcbiAgICBjb25zdCBhY2hpZXZlbWVudHMgPSBhd2FpdCBwcmlzbWEuYWNoaWV2ZW1lbnQuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHsgdXNlcklkOiB0YXJnZXRVc2VySWQgfSxcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gYWNoaWV2ZW1lbnRzXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W55So5oi35oiQ5bCx5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcign6I635Y+W55So5oi35oiQ5bCx5aSx6LSlJylcbiAgfVxufVxuXG4vKipcbiAqIOeuoeeQhuWRmOWIoOmZpOaIkOWwse+8iOaXoOinhuaJgOacieiAhe+8iVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRtaW5EZWxldGVBY2hpZXZlbWVudChhY2hpZXZlbWVudElkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIC8vIOebtOaOpeWIoOmZpOaIkOWwseiusOW9le+8jOS4jeajgOafpeaJgOacieiAhVxuICAgIGF3YWl0IHByaXNtYS5hY2hpZXZlbWVudC5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGFjaGlldmVtZW50SWQgfVxuICAgIH0pXG5cbiAgICAvLyDph43mlrDpqozor4HnvJPlrZjvvIzliLfmlrDnm7jlhbPpobXpnaJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3VzZXJzJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2ZpbGUnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWNoaWV2ZW1lbnRzJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ+aIkOWwseW3suaIkOWKn+WIoOmZpCdcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5Yig6Zmk5oiQ5bCx5aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+WIoOmZpOaIkOWwseWksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDliJvlu7rmlrDnq57otZvvvIjnrqHnkIblkZjmnYPpmZDvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbXBldGl0aW9uKGRhdGE6IHtcbiAgbmFtZTogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgZGVhZGxpbmU6IHN0cmluZ1xuICBtYXhQYXJ0aWNpcGFudHM6IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gICAgXG4gICAgLy8g6aqM6K+B6L6T5YWl5pWw5o2uXG4gICAgaWYgKCFkYXRhLm5hbWUgfHwgZGF0YS5uYW1lLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn56ue6LWb5ZCN56ew5LiN6IO95Li656m6J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIWRhdGEuY2F0ZWdvcnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn6K+36YCJ5oup56ue6LWb5YiG57G7J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIWRhdGEuZGVhZGxpbmUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn6K+36YCJ5oup5oiq5q2i5pel5pyfJ1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBkZWFkbGluZURhdGUgPSBuZXcgRGF0ZShkYXRhLmRlYWRsaW5lKVxuICAgIGlmIChpc05hTihkZWFkbGluZURhdGUuZ2V0VGltZSgpKSB8fCBkZWFkbGluZURhdGUgPD0gbmV3IERhdGUoKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfmiKrmraLml6XmnJ/lv4XpobvmmK/mnKrmnaXml7bpl7QnXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG1heFBhcnRpY2lwYW50c051bSA9IHBhcnNlSW50KGRhdGEubWF4UGFydGljaXBhbnRzKVxuICAgIGlmIChpc05hTihtYXhQYXJ0aWNpcGFudHNOdW0pIHx8IG1heFBhcnRpY2lwYW50c051bSA8PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+S6uuaVsOS4iumZkOW/hemhu+aYr+Wkp+S6jjDnmoTmlbDlrZcnXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOWIm+W7uuernui1m1xuICAgIGNvbnN0IGNvbXBldGl0aW9uID0gYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IGRhdGEubmFtZS50cmltKCksXG4gICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5LFxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbj8udHJpbSgpIHx8ICcnLFxuICAgICAgICBkZWFkbGluZTogZGVhZGxpbmVEYXRlLFxuICAgICAgICBtYXhQYXJ0aWNpcGFudHM6IG1heFBhcnRpY2lwYW50c051bSxcbiAgICAgICAgY3VycmVudFBhcnRpY2lwYW50czogMFxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDliLfmlrDnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9jb21wZXRpdGlvbnMnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiBjb21wZXRpdGlvbixcbiAgICAgIG1lc3NhZ2U6ICfnq57otZvliJvlu7rmiJDlip/vvIEnXG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5Yib5bu656ue6LWb5aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+WIm+W7uuernui1m+Wksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDmm7TmlrDnq57otZvvvIjnrqHnkIblkZjmnYPpmZDvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNvbXBldGl0aW9uKGlkOiBzdHJpbmcsIGRhdGE6IHtcbiAgbmFtZTogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgZGVhZGxpbmU6IHN0cmluZ1xuICBtYXhQYXJ0aWNpcGFudHM6IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gICAgXG4gICAgLy8g6aqM6K+B6L6T5YWl5pWw5o2uXG4gICAgaWYgKCFkYXRhLm5hbWUgfHwgZGF0YS5uYW1lLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn56ue6LWb5ZCN56ew5LiN6IO95Li656m6J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIWRhdGEuY2F0ZWdvcnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn6K+36YCJ5oup56ue6LWb5YiG57G7J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIWRhdGEuZGVhZGxpbmUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn6K+36YCJ5oup5oiq5q2i5pel5pyfJ1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBkZWFkbGluZURhdGUgPSBuZXcgRGF0ZShkYXRhLmRlYWRsaW5lKVxuICAgIGlmIChpc05hTihkZWFkbGluZURhdGUuZ2V0VGltZSgpKSB8fCBkZWFkbGluZURhdGUgPD0gbmV3IERhdGUoKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfmiKrmraLml6XmnJ/lv4XpobvmmK/mnKrmnaXml7bpl7QnXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG1heFBhcnRpY2lwYW50c051bSA9IHBhcnNlSW50KGRhdGEubWF4UGFydGljaXBhbnRzKVxuICAgIGlmIChpc05hTihtYXhQYXJ0aWNpcGFudHNOdW0pIHx8IG1heFBhcnRpY2lwYW50c051bSA8PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+S6uuaVsOS4iumZkOW/hemhu+aYr+Wkp+S6jjDnmoTmlbDlrZcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5qOA5p+l56ue6LWb5piv5ZCm5a2Y5ZyoXG4gICAgY29uc3QgZXhpc3RpbmdDb21wZXRpdGlvbiA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH1cbiAgICB9KVxuXG4gICAgaWYgKCFleGlzdGluZ0NvbXBldGl0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ernui1m+S4jeWtmOWcqCdcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8g5pu05paw56ue6LWbXG4gICAgY29uc3QgY29tcGV0aXRpb24gPSBhd2FpdCBwcmlzbWEuY29tcGV0aXRpb24udXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IGRhdGEubmFtZS50cmltKCksXG4gICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5LFxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbj8udHJpbSgpIHx8ICcnLFxuICAgICAgICBkZWFkbGluZTogZGVhZGxpbmVEYXRlLFxuICAgICAgICBtYXhQYXJ0aWNpcGFudHM6IG1heFBhcnRpY2lwYW50c051bVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDliLfmlrDnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9jb21wZXRpdGlvbnMnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiBjb21wZXRpdGlvbixcbiAgICAgIG1lc3NhZ2U6ICfnq57otZvmm7TmlrDmiJDlip/vvIEnXG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5pu05paw56ue6LWb5aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+abtOaWsOernui1m+Wksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDliKDpmaTnq57otZvvvIjnrqHnkIblkZjmnYPpmZDvvIzlronlhajlpITnkIblpJbplK7kvp3otZbvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvbXBldGl0aW9uKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuXG4gICAgLy8g5qOA5p+l56ue6LWb5piv5ZCm5a2Y5ZyoXG4gICAgY29uc3QgZXhpc3RpbmdDb21wZXRpdGlvbiA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH1cbiAgICB9KVxuXG4gICAgaWYgKCFleGlzdGluZ0NvbXBldGl0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ernui1m+S4jeWtmOWcqCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDkvb/nlKggUHJpc21hIOS6i+WKoeWuieWFqOWIoOmZpOernui1m+WPiuWFtuebuOWFs+aVsOaNrlxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XG4gICAgICAvLyDnrKzkuIDmraXvvJrliKDpmaTmiYDmnInnm7jlhbPnmoTmiqXlkI3orrDlvZVcbiAgICAgIGF3YWl0IHR4LnJlZ2lzdHJhdGlvbi5kZWxldGVNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgY29tcGV0aXRpb25JZDogaWQgfVxuICAgICAgfSlcbiAgICAgIFxuICAgICAgLy8g56ys5LqM5q2l77ya5Yig6Zmk56ue6LWb5pys6LqrXG4gICAgICBhd2FpdCB0eC5jb21wZXRpdGlvbi5kZWxldGUoe1xuICAgICAgICB3aGVyZTogeyBpZCB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyDliLfmlrDnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9jb21wZXRpdGlvbnMnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiAn56ue6LWb5Yig6Zmk5oiQ5Yqf77yBJ1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+WIoOmZpOernui1m+Wksei0pTonLCBlcnJvcilcbiAgICBcbiAgICAvLyDmo4Dmn6XmmK/lkKbmmK/lpJbplK7nuqbmnZ/plJnor69cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdmb3JlaWduIGtleSBjb25zdHJhaW50JykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5Yig6Zmk5aSx6LSl77ya6K+l56ue6LWb5LuN5pyJ5YWz6IGU5pWw5o2u77yM6K+35YWI5aSE55CG55u45YWz6K6w5b2VJ1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfliKDpmaTnq57otZvlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W5omA5pyJ5oyH5a+86ICB5biI5YiX6KGoXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUZWFjaGVycygpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIGNvbnN0IHRlYWNoZXJzID0gYXdhaXQgcHJpc21hLnRlYWNoZXIuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9XG4gICAgfSlcblxuICAgIHJldHVybiB0ZWFjaGVyc1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluiAgeW4iOWIl+ihqOWksei0pTonLCBlcnJvcilcbiAgICB0aHJvdyBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiBuZXcgRXJyb3IoJ+iOt+WPluiAgeW4iOWIl+ihqOWksei0pe+8jOivt+eojeWQjumHjeivlScpXG4gIH1cbn1cblxuLyoqXG4gKiDliJvlu7rmlrDmjIflr7zogIHluIhcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRlYWNoZXIoZGF0YToge1xuICBuYW1lOiBzdHJpbmdcbiAgZGVwYXJ0bWVudD86IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gICAgXG4gICAgLy8g6aqM6K+B6L6T5YWl5pWw5o2uXG4gICAgaWYgKCFkYXRhLm5hbWUgfHwgZGF0YS5uYW1lLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5pWZ5biI5aeT5ZCN5LiN6IO95Li656m6J1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOafpeivouW9k+WJjeaVsOaNruW6k+S4reWFseacieWkmuWwkeS9jeiAgeW4iFxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG4gICAgY29uc3QgdGVhY2hlckNvdW50ID0gYXdhaXQgcHJpc21hLnRlYWNoZXIuY291bnQoKVxuICAgIFxuICAgIC8vIOeUn+aIkOagvOW8j+S4uiBUICsg5bm05Lu9ICsgM+S9jea1geawtOWPt+eahOaVmeW4iOe8luWPt1xuICAgIGNvbnN0IHRlYWNoZXJObyA9IGBUJHtjdXJyZW50WWVhcn0ke1N0cmluZyh0ZWFjaGVyQ291bnQgKyAxKS5wYWRTdGFydCgzLCAnMCcpfWBcbiAgICBcbiAgICAvLyDliJvlu7rogIHluIjorrDlvZVcbiAgICBjb25zdCB0ZWFjaGVyID0gYXdhaXQgcHJpc21hLnRlYWNoZXIuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLnRyaW0oKSxcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50Py50cmltKCkgfHwgbnVsbCxcbiAgICAgICAgdGVhY2hlck5vXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIOWIt+aWsOe8k+WtmFxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vdGVhY2hlcnMnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiB0ZWFjaGVyLFxuICAgICAgbWVzc2FnZTogJ+aMh+WvvOiAgeW4iOa3u+WKoOaIkOWKn++8gSdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfliJvlu7rogIHluIjlpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5Yib5bu66ICB5biI5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOWIoOmZpOaMh+WvvOiAgeW4iFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVGVhY2hlcihpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcblxuICAgIC8vIOajgOafpeiAgeW4iOaYr+WQpuWtmOWcqFxuICAgIGNvbnN0IGV4aXN0aW5nVGVhY2hlciA9IGF3YWl0IHByaXNtYS50ZWFjaGVyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQgfVxuICAgIH0pXG5cbiAgICBpZiAoIWV4aXN0aW5nVGVhY2hlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfmjIflr7zogIHluIjkuI3lrZjlnKgnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5qOA5p+l5piv5ZCm5pyJ5YWz6IGU55qE5oql5ZCN6K6w5b2VXG4gICAgY29uc3QgcmVnaXN0cmF0aW9uQ291bnQgPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmNvdW50KHtcbiAgICAgIHdoZXJlOiB7IHRlYWNoZXJJZDogaWQgfVxuICAgIH0pXG5cbiAgICBpZiAocmVnaXN0cmF0aW9uQ291bnQgPiAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ivpeiAgeW4iOi/mOacieWFs+iBlOeahOaKpeWQjeiusOW9le+8jOaXoOazleWIoOmZpCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDliKDpmaTogIHluIjorrDlvZVcbiAgICBhd2FpdCBwcmlzbWEudGVhY2hlci5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfVxuICAgIH0pXG5cbiAgICAvLyDliLfmlrDnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3RlYWNoZXJzJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ+aMh+WvvOiAgeW4iOWIoOmZpOaIkOWKn++8gSdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfliKDpmaTogIHluIjlpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5Yig6Zmk6ICB5biI5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPluaJgOacieaKpeWQjeiusOW9le+8iOeuoeeQhuWRmOWuoeaJueS4k+eUqO+8iVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUmVnaXN0cmF0aW9ucygpIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgY29uc3QgcmVnaXN0cmF0aW9ucyA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uZmluZE1hbnkoe1xuICAgICAgaW5jbHVkZToge1xuICAgICAgICBjb21wZXRpdGlvbjoge1xuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IHRydWUsXG4gICAgICAgICAgICBkZWFkbGluZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGVhY2hlcjoge1xuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgICAgdGVhY2hlck5vOiB0cnVlLFxuICAgICAgICAgICAgZGVwYXJ0bWVudDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvcmRlckJ5OiB7XG4gICAgICAgIGNyZWF0ZWRBdDogJ2Rlc2MnXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiByZWdpc3RyYXRpb25zXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W5oql5ZCN6K6w5b2V5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcign6I635Y+W5oql5ZCN6K6w5b2V5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJylcbiAgfVxufVxuXG4vKipcbiAqIOWuoeaguOaKpeWQjeiusOW9lVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmV2aWV3UmVnaXN0cmF0aW9uKHJlZ2lzdHJhdGlvbklkOiBzdHJpbmcsIHN0YXR1czogc3RyaW5nLCBmZWVkYmFjaz86IHN0cmluZykge1xuICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICBcbiAgdHJ5IHtcbiAgICAvLyDpqozor4HnirbmgIHlgLxcbiAgICBjb25zdCB2YWxpZFN0YXR1c2VzID0gWydQRU5ESU5HJywgJ0FQUFJPVkVEJywgJ1JFSkVDVEVEX1JFVFJZJywgJ1JFSkVDVEVEX0ZJTkFMJ11cbiAgICBpZiAoIXZhbGlkU3RhdHVzZXMuaW5jbHVkZXMoc3RhdHVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfml6DmlYjnmoTlrqHmibnnirbmgIEnKVxuICAgIH1cblxuICAgIC8vIOWmguaenOeKtuaAgeS4uiBSRUpFQ1RFRF9SRVRSWSDmiJYgUkVKRUNURURfRklOQUzvvIzlv4Xpobvmj5Dkvpvlj43ppojmhI/op4FcbiAgICBpZiAoKHN0YXR1cyA9PT0gJ1JFSkVDVEVEX1JFVFJZJyB8fCBzdGF0dXMgPT09ICdSRUpFQ1RFRF9GSU5BTCcpICYmICghZmVlZGJhY2sgfHwgZmVlZGJhY2sudHJpbSgpLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign6amz5Zue55Sz6K+35pe25b+F6aG75o+Q5L6b5Y+N6aaI5oSP6KeBJylcbiAgICB9XG5cbiAgICAvLyDmo4Dmn6XmiqXlkI3orrDlvZXmmK/lkKblrZjlnKhcbiAgICBjb25zdCBleGlzdGluZ1JlZ2lzdHJhdGlvbiA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZDogcmVnaXN0cmF0aW9uSWQgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgY29tcGV0aXRpb246IHRydWUsXG4gICAgICAgIHVzZXI6IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKCFleGlzdGluZ1JlZ2lzdHJhdGlvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfmiqXlkI3orrDlvZXkuI3lrZjlnKgnKVxuICAgIH1cblxuICAgIC8vIOabtOaWsOaKpeWQjeiusOW9lVxuICAgIGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24udXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiByZWdpc3RyYXRpb25JZCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGZlZWRiYWNrOiBmZWVkYmFjaz8udHJpbSgpIHx8IG51bGxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g5aaC5p6c5a6h5om56YCa6L+H77yM6Ieq5Yqo55Sf5oiQ5oiQ5bCx6K6w5b2VXG4gICAgaWYgKHN0YXR1cyA9PT0gJ0FQUFJPVkVEJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5bey5a2Y5Zyo55u45ZCM55qE5oiQ5bCx6K6w5b2V77yI6YG/5YWN6YeN5aSN55Sf5oiQ77yJXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nQWNoaWV2ZW1lbnQgPSBhd2FpdCBwcmlzbWEuYWNoaWV2ZW1lbnQuZmluZEZpcnN0KHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgdXNlcklkOiBleGlzdGluZ1JlZ2lzdHJhdGlvbi51c2VySWQsXG4gICAgICAgICAgICB0aXRsZTogZXhpc3RpbmdSZWdpc3RyYXRpb24uY29tcGV0aXRpb24ubmFtZSxcbiAgICAgICAgICAgIHR5cGU6ICdBV0FSRCcgLy8g56ue6LWb6I635aWW6buY6K6k5Li65aWW6aG557G75Z6LXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghZXhpc3RpbmdBY2hpZXZlbWVudCkge1xuICAgICAgICAgIC8vIOagueaNruernui1m+exu+WIq+ehruWumuaIkOWwsee6p+WIq1xuICAgICAgICAgIGxldCBhY2hpZXZlbWVudExldmVsOiAnU1RBVEUnIHwgJ1BST1ZJTkNFJyB8ICdTQ0hPT0wnID0gJ1NDSE9PTCdcbiAgICAgICAgICBpZiAoZXhpc3RpbmdSZWdpc3RyYXRpb24uY29tcGV0aXRpb24uY2F0ZWdvcnkgPT09ICdURUNITklDQUwnIHx8IFxuICAgICAgICAgICAgICBleGlzdGluZ1JlZ2lzdHJhdGlvbi5jb21wZXRpdGlvbi5jYXRlZ29yeSA9PT0gJ0FJJykge1xuICAgICAgICAgICAgYWNoaWV2ZW1lbnRMZXZlbCA9ICdTVEFURSdcbiAgICAgICAgICB9IGVsc2UgaWYgKGV4aXN0aW5nUmVnaXN0cmF0aW9uLmNvbXBldGl0aW9uLmNhdGVnb3J5ID09PSAnUFJPR1JBTU1JTkcnIHx8IFxuICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdSZWdpc3RyYXRpb24uY29tcGV0aXRpb24uY2F0ZWdvcnkgPT09ICdJTk5PVkFUSU9OJykge1xuICAgICAgICAgICAgYWNoaWV2ZW1lbnRMZXZlbCA9ICdQUk9WSU5DRSdcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyDliJvlu7rmiJDlsLHorrDlvZVcbiAgICAgICAgICBhd2FpdCBwcmlzbWEuYWNoaWV2ZW1lbnQuY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgdXNlcklkOiBleGlzdGluZ1JlZ2lzdHJhdGlvbi51c2VySWQsXG4gICAgICAgICAgICAgIHRpdGxlOiBleGlzdGluZ1JlZ2lzdHJhdGlvbi5jb21wZXRpdGlvbi5uYW1lLFxuICAgICAgICAgICAgICB0eXBlOiAnQVdBUkQnLFxuICAgICAgICAgICAgICBsZXZlbDogYWNoaWV2ZW1lbnRMZXZlbCxcbiAgICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSwgLy8g5L2/55So5a6h5om56YCa6L+H55qE5pe26Ze05L2c5Li66I635b6X5pe26Ze0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnNvbGUubG9nKGDlt7LkuLrnlKjmiLcgJHtleGlzdGluZ1JlZ2lzdHJhdGlvbi51c2VySWR9IOiHquWKqOeUn+aIkOaIkOWwseiusOW9le+8miR7ZXhpc3RpbmdSZWdpc3RyYXRpb24uY29tcGV0aXRpb24ubmFtZX1gKVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChhY2hpZXZlbWVudEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+iHquWKqOeUn+aIkOaIkOWwseiusOW9leWksei0pTonLCBhY2hpZXZlbWVudEVycm9yKVxuICAgICAgICAvLyDkuI3lvbHlk43lrqHmibnmtYHnqIvvvIzlj6rorrDlvZXplJnor69cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDph43mlrDpqozor4HnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3JlZ2lzdHJhdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvZmlsZScpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9hY2hpZXZlbWVudHMnKSAvLyDliLfmlrDnrqHnkIblkZjmiJDlsLHpobXpnaLvvIjlpoLmnpzlrZjlnKjvvIlcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogc3RhdHVzID09PSAnQVBQUk9WRUQnID8gJ+aKpeWQjeW3sumAmui/h++8jOW3suiHquWKqOeUn+aIkOaIkOWwseiusOW9le+8gScgOiAn5oql5ZCN5bey5pu05pawJ1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+WuoeaguOaKpeWQjeWksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICflrqHmoLjlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W566h55CG5ZGY5o6n5Yi25Y+w57uf6K6h5pWw5o2uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXNoYm9hcmRTdGF0cygpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIGNvbnN0IGNsZXJrID0gYXdhaXQgY2xlcmtDbGllbnQoKVxuICAgIFxuICAgIC8vIOiOt+WPlueUqOaIt+aAu+aVsO+8jOa3u+WKoOmUmeivr+WkhOeQhlxuICAgIGxldCB0b3RhbFVzZXJzID0gMFxuICAgIHRyeSB7XG4gICAgICB0b3RhbFVzZXJzID0gYXdhaXQgY2xlcmsudXNlcnMuZ2V0Q291bnQoKVxuICAgIH0gY2F0Y2ggKGNsZXJrRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPlueUqOaIt+aAu+aVsOWksei0pTonLCBjbGVya0Vycm9yKVxuICAgICAgLy8g5aaC5p6c5piv572R57uc5oiWIEFQSSDplJnor6/vvIzkvb/nlKjpu5jorqTlgLxcbiAgICAgIGlmIChjbGVya0Vycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgKFxuICAgICAgICBjbGVya0Vycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ2ZldGNoJykgfHwgXG4gICAgICAgIGNsZXJrRXJyb3IubWVzc2FnZS5pbmNsdWRlcygnbmV0d29yaycpIHx8XG4gICAgICAgIGNsZXJrRXJyb3IubWVzc2FnZS5pbmNsdWRlcygnRUNPTk5SRUZVU0VEJykgfHxcbiAgICAgICAgY2xlcmtFcnJvci5tZXNzYWdlLmluY2x1ZGVzKCd0aW1lb3V0JykgfHxcbiAgICAgICAgY2xlcmtFcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdDbGVya0FQSVJlc3BvbnNlRXJyb3InKVxuICAgICAgKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfnvZHnu5zmiJYgQ2xlcmsgQVBJIOmUmeivr++8jOS9v+eUqOm7mOiupOeUqOaIt+aVsCAwJylcbiAgICAgIH0gZWxzZSBpZiAoY2xlcmtFcnJvciAmJiB0eXBlb2YgY2xlcmtFcnJvciA9PT0gJ29iamVjdCcgJiYgJ2NsZXJrRXJyb3InIGluIGNsZXJrRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQ2xlcmsgQVBJIOmUmeivr+ivpuaDhTonLCBKU09OLnN0cmluZ2lmeShjbGVya0Vycm9yLCBudWxsLCAyKSlcbiAgICAgIH1cbiAgICAgIHRvdGFsVXNlcnMgPSAwIC8vIOS9v+eUqOm7mOiupOWAvFxuICAgIH1cbiAgICBcbiAgICAvLyDlubbooYzojrflj5blhbbku5bnu5/orqHmlbDmja5cbiAgICBjb25zdCBbXG4gICAgICB0b3RhbENvbXBldGl0aW9ucyxcbiAgICAgIHRvdGFsUmVnaXN0cmF0aW9ucyxcbiAgICAgIHBlbmRpbmdSZXZpZXdzLFxuICAgICAgY2F0ZWdvcnlTdGF0cyxcbiAgICAgIHRvcENvbXBldGl0aW9ucyxcbiAgICAgIHJlY2VudFBlbmRpbmdcbiAgICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgLy8g6LWb5LqL5oC75pWwXG4gICAgICBwcmlzbWEuY29tcGV0aXRpb24uY291bnQoKSxcbiAgICAgIFxuICAgICAgLy8g5oql5ZCN5oC75pWwXG4gICAgICBwcmlzbWEucmVnaXN0cmF0aW9uLmNvdW50KCksXG4gICAgICBcbiAgICAgIC8vIOW+heWuoeaguOaVsOmHj1xuICAgICAgcHJpc21hLnJlZ2lzdHJhdGlvbi5jb3VudCh7XG4gICAgICAgIHdoZXJlOiB7IHN0YXR1czogJ1BFTkRJTkcnIH1cbiAgICAgIH0pLFxuICAgICAgXG4gICAgICAvLyDmjInliIbnsbvnu5/orqHotZvkuovmlbDph49cbiAgICAgIHByaXNtYS5jb21wZXRpdGlvbi5ncm91cEJ5KHtcbiAgICAgICAgYnk6IFsnY2F0ZWdvcnknXSxcbiAgICAgICAgX2NvdW50OiB7XG4gICAgICAgICAgaWQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBcbiAgICAgIC8vIOaKpeWQjeS6uuaVsOacgOWkmueahOWJjTXkuKrotZvkuotcbiAgICAgIHByaXNtYS5jb21wZXRpdGlvbi5maW5kTWFueSh7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgX2NvdW50OiB7XG4gICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uczogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3JkZXJCeToge1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbnM6IHtcbiAgICAgICAgICAgIF9jb3VudDogJ2Rlc2MnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0YWtlOiA1XG4gICAgICB9KSxcbiAgICAgIFxuICAgICAgLy8g5pyA5pawNeadoeW+heWuoeaguOaKpeWQjVxuICAgICAgcHJpc21hLnJlZ2lzdHJhdGlvbi5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHN0YXR1czogJ1BFTkRJTkcnIH0sXG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgIGFwcGxpY2FudE5hbWU6IHRydWUsXG4gICAgICAgICAgY29tcGV0aXRpb246IHtcbiAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICBuYW1lOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjcmVhdGVkQXQ6IHRydWUsXG4gICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgIG5hbWU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJ1xuICAgICAgICB9LFxuICAgICAgICB0YWtlOiA1XG4gICAgICB9KVxuICAgIF0pXG5cbiAgICAvLyDlpITnkIbliIbnsbvnu5/orqHmlbDmja7vvIzlkIjlubbnm7jkvLzliIbnsbtcbiAgICBjb25zdCBwcm9jZXNzZWRDYXRlZ29yeVN0YXRzID0gY2F0ZWdvcnlTdGF0cy5yZWR1Y2UoKGFjYzogeyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfVtdLCBpdGVtOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gaXRlbS5jYXRlZ29yeSB8fCAn5YW25LuWJ1xuICAgICAgY29uc3QgZXhpc3RpbmdJdGVtID0gYWNjLmZpbmQoKHN0YXQ6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH0pID0+IHN0YXQubmFtZSA9PT0gY2F0ZWdvcnkpXG4gICAgICBcbiAgICAgIGlmIChleGlzdGluZ0l0ZW0pIHtcbiAgICAgICAgZXhpc3RpbmdJdGVtLnZhbHVlICs9IGl0ZW0uX2NvdW50LmlkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2MucHVzaCh7XG4gICAgICAgICAgbmFtZTogY2F0ZWdvcnksXG4gICAgICAgICAgdmFsdWU6IGl0ZW0uX2NvdW50LmlkXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBcbiAgICAgIHJldHVybiBhY2NcbiAgICB9LCBbXSBhcyB7IG5hbWU6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9W10pXG5cbiAgICByZXR1cm4ge1xuICAgICAgdG90YWxVc2VycyxcbiAgICAgIHRvdGFsQ29tcGV0aXRpb25zLFxuICAgICAgdG90YWxSZWdpc3RyYXRpb25zLFxuICAgICAgcGVuZGluZ1Jldmlld3MsXG4gICAgICBjYXRlZ29yeVN0YXRzOiBwcm9jZXNzZWRDYXRlZ29yeVN0YXRzLFxuICAgICAgdG9wQ29tcGV0aXRpb25zOiB0b3BDb21wZXRpdGlvbnMubWFwKChjb21wOiBhbnkpID0+ICh7XG4gICAgICAgIG5hbWU6IGNvbXAubmFtZSxcbiAgICAgICAgcmVnaXN0cmF0aW9uczogY29tcC5fY291bnQucmVnaXN0cmF0aW9uc1xuICAgICAgfSkpLFxuICAgICAgcmVjZW50UGVuZGluZzogcmVjZW50UGVuZGluZy5tYXAoKHJlZzogYW55KSA9PiAoe1xuICAgICAgICBpZDogcmVnLmlkLFxuICAgICAgICBhcHBsaWNhbnROYW1lOiByZWcuYXBwbGljYW50TmFtZSB8fCByZWcudXNlcj8ubmFtZSB8fCAn5pyq55+lJyxcbiAgICAgICAgY29tcGV0aXRpb25OYW1lOiByZWcuY29tcGV0aXRpb24ubmFtZSxcbiAgICAgICAgY3JlYXRlZEF0OiByZWcuY3JlYXRlZEF0XG4gICAgICB9KSlcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W5Luq6KGo5p2/57uf6K6h5pWw5o2u5aSx6LSlOicsIGVycm9yKVxuICAgIFxuICAgIC8vIOWmguaenOaYr+adg+mZkOmqjOivgemUmeivr++8jOi/lOWbnum7mOiupOe7n+iuoeaVsOaNrlxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIChcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+e9kee7nOivt+axgui2heaXticpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCforqTor4HmnI3liqEnKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn5p2D6ZmQ5LiN6LazJykgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+acqueZu+W9lScpXG4gICAgKSkge1xuICAgICAgY29uc29sZS5lcnJvcign5p2D6ZmQ6aqM6K+B5aSx6LSl77yM6L+U5Zue6buY6K6k57uf6K6h5pWw5o2uOicsIGVycm9yLm1lc3NhZ2UpXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3RhbFVzZXJzOiAwLFxuICAgICAgICB0b3RhbENvbXBldGl0aW9uczogMCxcbiAgICAgICAgdG90YWxSZWdpc3RyYXRpb25zOiAwLFxuICAgICAgICBwZW5kaW5nUmV2aWV3czogMCxcbiAgICAgICAgY2F0ZWdvcnlTdGF0czogW10sXG4gICAgICAgIHRvcENvbXBldGl0aW9uczogW10sXG4gICAgICAgIHJlY2VudFBlbmRpbmc6IFtdXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOWFtuS7lumUmeivr+S5n+i/lOWbnum7mOiupOe7n+iuoeaVsOaNru+8jOmYsuatoumhtemdouW0qea6g1xuICAgIGNvbnNvbGUuZXJyb3IoJ+acquefpemUmeivr++8jOi/lOWbnum7mOiupOe7n+iuoeaVsOaNrjonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgdG90YWxVc2VyczogMCxcbiAgICAgIHRvdGFsQ29tcGV0aXRpb25zOiAwLFxuICAgICAgdG90YWxSZWdpc3RyYXRpb25zOiAwLFxuICAgICAgcGVuZGluZ1Jldmlld3M6IDAsXG4gICAgICBjYXRlZ29yeVN0YXRzOiBbXSxcbiAgICAgIHRvcENvbXBldGl0aW9uczogW10sXG4gICAgICByZWNlbnRQZW5kaW5nOiBbXVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOaJuemHj+WvvOWFpeaMh+WvvOiAgeW4iFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYmF0Y2hJbXBvcnRUZWFjaGVycyh0ZWFjaGVyc0RhdGE6IHsgbmFtZTogc3RyaW5nOyBkZXBhcnRtZW50Pzogc3RyaW5nIH1bXSkge1xuICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICBjb25zdCBjbGVyayA9IGF3YWl0IGNsZXJrQ2xpZW50KClcbiAgXG4gIHRyeSB7XG4gICAgLy8g6I635Y+W5b2T5YmN5bm05Lu9XG4gICAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcbiAgICBjb25zdCB5ZWFyUHJlZml4ID0gYFQke2N1cnJlbnRZZWFyfWBcbiAgICBcbiAgICAvLyDmn6Xor6LlvZPliY3lubTku73mnIDmlrDnmoTmlZnluIjnvJblj7dcbiAgICBjb25zdCBsYXRlc3RUZWFjaGVyID0gYXdhaXQgcHJpc21hLnRlYWNoZXIuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRlYWNoZXJObzoge1xuICAgICAgICAgIHN0YXJ0c1dpdGg6IHllYXJQcmVmaXhcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgdGVhY2hlck5vOiAnZGVzYydcbiAgICAgIH1cbiAgICB9KVxuICAgIFxuICAgIC8vIOiuoeeul+i1t+Wni+a1geawtOWPt1xuICAgIGxldCBzZXJpYWxOdW1iZXIgPSAxXG4gICAgaWYgKGxhdGVzdFRlYWNoZXIpIHtcbiAgICAgIGNvbnN0IGxhdGVzdFNlcmlhbCA9IHBhcnNlSW50KGxhdGVzdFRlYWNoZXIudGVhY2hlck5vLnNsaWNlKC0zKSlcbiAgICAgIGlmICghaXNOYU4obGF0ZXN0U2VyaWFsKSkge1xuICAgICAgICBzZXJpYWxOdW1iZXIgPSBsYXRlc3RTZXJpYWwgKyAxXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOagvOW8j+WMluaVmeW4iOaVsOaNrlxuICAgIGNvbnN0IGZvcm1hdHRlZFRlYWNoZXJzID0gdGVhY2hlcnNEYXRhLm1hcCgodGVhY2hlciwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlYWNoZXJObyA9IGAke3llYXJQcmVmaXh9JHtzZXJpYWxOdW1iZXIudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWBcbiAgICAgIHNlcmlhbE51bWJlcisrXG4gICAgICBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHRlYWNoZXIubmFtZS50cmltKCksXG4gICAgICAgIGRlcGFydG1lbnQ6IHRlYWNoZXIuZGVwYXJ0bWVudD8udHJpbSgpIHx8IG51bGwsXG4gICAgICAgIHRlYWNoZXJOb1xuICAgICAgfVxuICAgIH0pXG4gICAgXG4gICAgLy8g5om56YeP5o+S5YWl5pWw5o2u5bqTXG4gICAgYXdhaXQgcHJpc21hLnRlYWNoZXIuY3JlYXRlTWFueSh7XG4gICAgICBkYXRhOiBmb3JtYXR0ZWRUZWFjaGVyc1xuICAgIH0pXG4gICAgXG4gICAgLy8g6YeN5paw6aqM6K+B57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi90ZWFjaGVycycpXG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBjb3VudDogZm9ybWF0dGVkVGVhY2hlcnMubGVuZ3RoLFxuICAgICAgbWVzc2FnZTogYOaIkOWKn+WvvOWFpSAke2Zvcm1hdHRlZFRlYWNoZXJzLmxlbmd0aH0g5L2N5oyH5a+86ICB5biIYFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfmibnph4/lr7zlhaXmjIflr7zogIHluIjlpLHotKU6JywgZXJyb3IpXG4gICAgdGhyb3cgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yIDogbmV3IEVycm9yKCfmibnph4/lr7zlhaXlpLHotKXvvIzor7fnqI3lkI7ph43or5UnKVxuICB9XG59XG5cbi8qKlxuICog5om56YeP5a6h5om55oql5ZCN6K6w5b2VXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBiYXRjaFJldmlld1JlZ2lzdHJhdGlvbnMoXG4gIGlkczogc3RyaW5nW10sIFxuICBzdGF0dXM6ICdBUFBST1ZFRCcgfCAnUkVKRUNURURfUkVUUlknIHwgJ1JFSkVDVEVEX0ZJTkFMJywgXG4gIGZlZWRiYWNrPzogc3RyaW5nXG4pIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgLy8g6aqM6K+B54q25oCB5YC8XG4gICAgY29uc3QgdmFsaWRTdGF0dXNlcyA9IFsnQVBQUk9WRUQnLCAnUkVKRUNURURfUkVUUlknLCAnUkVKRUNURURfRklOQUwnXVxuICAgIGlmICghdmFsaWRTdGF0dXNlcy5pbmNsdWRlcyhzdGF0dXMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ+aXoOaViOeahOWuoeaJueeKtuaAgScpXG4gICAgfVxuXG4gICAgLy8g5aaC5p6c54q25oCB5Li6IFJFSkVDVEVEX1JFVFJZIOaIliBSRUpFQ1RFRF9GSU5BTO+8jOW/hemhu+aPkOS+m+WPjemmiOaEj+ingVxuICAgIGlmICgoc3RhdHVzID09PSAnUkVKRUNURURfUkVUUlknIHx8IHN0YXR1cyA9PT0gJ1JFSkVDVEVEX0ZJTkFMJykgJiYgKCFmZWVkYmFjayB8fCBmZWVkYmFjay50cmltKCkubGVuZ3RoID09PSAwKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfpqbPlm57nlLPor7fml7blv4Xpobvmj5Dkvpvlj43ppojmhI/op4EnKVxuICAgIH1cblxuICAgIC8vIOmqjOivgUlE5pWw57uEXG4gICAgaWYgKCFpZHMgfHwgaWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfor7fpgInmi6nopoHlrqHmibnnmoTmiqXlkI3orrDlvZUnKVxuICAgIH1cblxuICAgIC8vIOiOt+WPluimgeabtOaWsOeahOaKpeWQjeiusOW9leivpuaDhe+8iOeUqOS6jueUn+aIkOaIkOWwse+8iVxuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbnNUb1VwZGF0ZSA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHsgXG4gICAgICAgIGlkOiB7IGluOiBpZHMgfVxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgY29tcGV0aXRpb246IHRydWUsXG4gICAgICAgIHVzZXI6IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g5om56YeP5pu05paw5oql5ZCN6K6w5b2VXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi51cGRhdGVNYW55KHtcbiAgICAgIHdoZXJlOiB7IFxuICAgICAgICBpZDogeyBpbjogaWRzIH1cbiAgICAgIH0sXG4gICAgICBkYXRhOiB7IFxuICAgICAgICBzdGF0dXMsIFxuICAgICAgICBmZWVkYmFjazogZmVlZGJhY2s/LnRyaW0oKSB8fCBudWxsIFxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDlpoLmnpzlrqHmibnpgJrov4fvvIzmibnph4/nlJ/miJDmiJDlsLHorrDlvZVcbiAgICBpZiAoc3RhdHVzID09PSAnQVBQUk9WRUQnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lzdHJhdGlvbiBvZiByZWdpc3RyYXRpb25zVG9VcGRhdGUpIHtcbiAgICAgICAgICAvLyDmo4Dmn6XmmK/lkKblt7LlrZjlnKjnm7jlkIznmoTmiJDlsLHorrDlvZXvvIjpgb/lhY3ph43lpI3nlJ/miJDvvIlcbiAgICAgICAgICBjb25zdCBleGlzdGluZ0FjaGlldmVtZW50ID0gYXdhaXQgcHJpc21hLmFjaGlldmVtZW50LmZpbmRGaXJzdCh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICB1c2VySWQ6IHJlZ2lzdHJhdGlvbi51c2VySWQsXG4gICAgICAgICAgICAgIHRpdGxlOiByZWdpc3RyYXRpb24uY29tcGV0aXRpb24ubmFtZSxcbiAgICAgICAgICAgICAgdHlwZTogJ0FXQVJEJyAvLyDnq57otZvojrflpZbpu5jorqTkuLrlpZbpobnnsbvlnotcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgaWYgKCFleGlzdGluZ0FjaGlldmVtZW50KSB7XG4gICAgICAgICAgICAvLyDmoLnmja7nq57otZvnsbvliKvnoa7lrprmiJDlsLHnuqfliKtcbiAgICAgICAgICAgIGxldCBhY2hpZXZlbWVudExldmVsOiAnU1RBVEUnIHwgJ1BST1ZJTkNFJyB8ICdTQ0hPT0wnID0gJ1NDSE9PTCdcbiAgICAgICAgICAgIGlmIChyZWdpc3RyYXRpb24uY29tcGV0aXRpb24uY2F0ZWdvcnkgPT09ICdURUNITklDQUwnIHx8IFxuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi5jb21wZXRpdGlvbi5jYXRlZ29yeSA9PT0gJ0FJJykge1xuICAgICAgICAgICAgICBhY2hpZXZlbWVudExldmVsID0gJ1NUQVRFJ1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWdpc3RyYXRpb24uY29tcGV0aXRpb24uY2F0ZWdvcnkgPT09ICdQUk9HUkFNTUlORycgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi5jb21wZXRpdGlvbi5jYXRlZ29yeSA9PT0gJ0lOTk9WQVRJT04nKSB7XG4gICAgICAgICAgICAgIGFjaGlldmVtZW50TGV2ZWwgPSAnUFJPVklOQ0UnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWIm+W7uuaIkOWwseiusOW9lVxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmFjaGlldmVtZW50LmNyZWF0ZSh7XG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHJlZ2lzdHJhdGlvbi51c2VySWQsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlZ2lzdHJhdGlvbi5jb21wZXRpdGlvbi5uYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdBV0FSRCcsXG4gICAgICAgICAgICAgICAgbGV2ZWw6IGFjaGlldmVtZW50TGV2ZWwsXG4gICAgICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSwgLy8g5L2/55So5a6h5om56YCa6L+H55qE5pe26Ze05L2c5Li66I635b6X5pe26Ze0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDlt7LkuLrnlKjmiLcgJHtyZWdpc3RyYXRpb24udXNlcklkfSDoh6rliqjnlJ/miJDmiJDlsLHorrDlvZXvvJoke3JlZ2lzdHJhdGlvbi5jb21wZXRpdGlvbi5uYW1lfWApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChhY2hpZXZlbWVudEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+aJuemHj+eUn+aIkOaIkOWwseiusOW9leWksei0pTonLCBhY2hpZXZlbWVudEVycm9yKVxuICAgICAgICAvLyDkuI3lvbHlk43lrqHmibnmtYHnqIvvvIzlj6rorrDlvZXplJnor69cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDph43mlrDpqozor4HnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3JlZ2lzdHJhdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvZmlsZScpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9hY2hpZXZlbWVudHMnKSAvLyDliLfmlrDnrqHnkIblkZjmiJDlsLHpobXpnaLvvIjlpoLmnpzlrZjlnKjvvIlcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgY291bnQ6IHJlc3VsdC5jb3VudCxcbiAgICAgIG1lc3NhZ2U6IHN0YXR1cyA9PT0gJ0FQUFJPVkVEJyBcbiAgICAgICAgPyBg5oiQ5Yqf6YCa6L+HICR7cmVzdWx0LmNvdW50fSDmnaHmiqXlkI3nlLPor7fvvIzlt7Loh6rliqjnlJ/miJDmiJDlsLHorrDlvZXvvIFgIFxuICAgICAgICA6IGDmiJDlip/lpITnkIYgJHtyZXN1bHQuY291bnR9IOadoeaKpeWQjeiusOW9lWBcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5om56YeP5a6h5om55aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+aJuemHj+WuoeaJueWksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDojrflj5bmiYDmnInnlKjmiLfnmoTmiJDlsLHorrDlvZXvvIjnrqHnkIblkZjkuJPnlKjvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEFjaGlldmVtZW50cygpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIGNvbnN0IGFjaGlldmVtZW50cyA9IGF3YWl0IHByaXNtYS5hY2hpZXZlbWVudC5maW5kTWFueSh7XG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIGVtYWlsOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb3JkZXJCeToge1xuICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJ1xuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gYWNoaWV2ZW1lbnRzXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W5oiQ5bCx6K6w5b2V5aSx6LSlOicsIGVycm9yKVxuICAgIFxuICAgIC8vIOWmguaenOaYr+adg+mZkOmqjOivgemUmeivr++8jOi/lOWbnuepuuaVsOe7hOiAjOS4jeaYr+aKm+WHuumUmeivr1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIChcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+e9kee7nOivt+axgui2heaXticpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCforqTor4HmnI3liqEnKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn5p2D6ZmQ5LiN6LazJykgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+acqueZu+W9lScpXG4gICAgKSkge1xuICAgICAgY29uc29sZS5lcnJvcign5p2D6ZmQ6aqM6K+B5aSx6LSl77yM6L+U5Zue56m65pWw57uEOicsIGVycm9yLm1lc3NhZ2UpXG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgXG4gICAgLy8g5YW25LuW6ZSZ6K+v5Lmf6L+U5Zue56m65pWw57uE77yM6Ziy5q2i6aG16Z2i5bSp5rqDXG4gICAgY29uc29sZS5lcnJvcign5pyq55+l6ZSZ6K+v77yM6L+U5Zue56m65pWw57uEOicsIGVycm9yKVxuICAgIHJldHVybiBbXVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W5a+85Ye65pWw5o2uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBvcnREYXRhKGNvbXBldGl0aW9uSWQ6IHN0cmluZykge1xuICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICBcbiAgdHJ5IHtcbiAgICAvLyDmn6Xor6Lor6XotZvkuovkuIvmiYDmnInlt7LpgJrov4fnmoTmiqXlkI3orrDlvZVcbiAgICBjb25zdCByZWdpc3RyYXRpb25zID0gYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjb21wZXRpdGlvbklkLFxuICAgICAgICBzdGF0dXM6ICdBUFBST1ZFRCdcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHRlYWNoZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgICBkZXBhcnRtZW50OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb3JkZXJCeToge1xuICAgICAgICBjcmVhdGVkQXQ6ICdhc2MnXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIOaJgeW5s+WMluagvOW8j+WMluaVsOaNrlxuICAgIGNvbnN0IGV4cG9ydERhdGEgPSByZWdpc3RyYXRpb25zLm1hcChyZWcgPT4gKHtcbiAgICAgIOeUs+ivt+S6ujogcmVnLmFwcGxpY2FudE5hbWUgfHwgJ+acquefpScsXG4gICAgICDkvZzlk4HlkI3np7A6IHJlZy5wcm9qZWN0TmFtZSB8fCAn5pegJyxcbiAgICAgIOWboumYn+aIkOWRmDogcmVnLnRlYW1NZW1iZXJzIHx8ICfml6AnLFxuICAgICAg5oyH5a+86ICB5biIOiByZWcudGVhY2hlcj8ubmFtZSB8fCAn5pegJyxcbiAgICAgIOiAgeW4iOWtpumZojogcmVnLnRlYWNoZXI/LmRlcGFydG1lbnQgfHwgJ+aXoCcsXG4gICAgICDmiqXlkI3or7TmmI46IHJlZy5ub3RlcyB8fCAn5pegJyxcbiAgICAgIOaPkOS6pOaXtumXtDogcmVnLmNyZWF0ZWRBdC50b0xvY2FsZURhdGVTdHJpbmcoJ3poLUNOJywge1xuICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXG4gICAgICAgIGRheTogJzItZGlnaXQnXG4gICAgICB9KVxuICAgIH0pKVxuXG4gICAgcmV0dXJuIGV4cG9ydERhdGFcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfojrflj5blr7zlh7rmlbDmja7lpLHotKU6JywgZXJyb3IpXG4gICAgdGhyb3cgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yIDogbmV3IEVycm9yKCfojrflj5blr7zlh7rmlbDmja7lpLHotKXvvIzor7fnqI3lkI7ph43or5UnKVxuICB9XG59XG5cbi8qKlxuICog5YiH5o2i56ue6LWb5b2S5qGj54q25oCBXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b2dnbGVDb21wZXRpdGlvbkFyY2hpdmUoaWQ6IHN0cmluZywgY3VycmVudFN0YXR1czogYm9vbGVhbikge1xuICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICBcbiAgdHJ5IHtcbiAgICAvLyDmm7TmlrDnq57otZvnirbmgIFcbiAgICBjb25zdCBuZXdTdGF0dXMgPSAhY3VycmVudFN0YXR1c1xuICAgIGNvbnN0IGNvbXBldGl0aW9uID0gYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YTogeyBpc0FjdGl2ZTogbmV3U3RhdHVzIH1cbiAgICB9KVxuXG4gICAgLy8g6YeN5paw6aqM6K+B57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9jb21wZXRpdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvY29tcGV0aXRpb25zJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgZGF0YTogY29tcGV0aXRpb24sXG4gICAgICBtZXNzYWdlOiBuZXdTdGF0dXMgPyAn56ue6LWb5bey6YeN5paw5LiK5p62JyA6ICfnq57otZvlt7LlvZLmoaMnXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+WIh+aNouernui1m+eKtuaAgeWksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfliIfmjaLnq57otZvnirbmgIHlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IitSQTBoQnNCLGlNQUFBIn0=
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$5fc74b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:5fc74b [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$6066f7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:6066f7 [app-ssr] (ecmascript) <text/javascript>");
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$5fc74b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["batchReviewRegistrations"])(selectedIds, 'APPROVED');
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
                                                                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$6066f7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["reviewRegistration"])(id, status, feedback);
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

//# sourceMappingURL=src_deecae03._.js.map