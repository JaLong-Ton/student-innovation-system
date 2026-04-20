(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/node_modules/radix-ui/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-base leading-snug font-medium group-data-[size=sm]/card:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 group-data-[size=sm]/card:px-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript) <export * as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
"use client";
;
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Root, {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Trigger, {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Portal, {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 31,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Overlay, {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Content, {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-background p-4 text-sm ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
                        "data-slot": "dialog-close",
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            className: "absolute top-2 right-2",
                            size: "icon-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/ui/dialog.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, showCloseButton = false, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end", className),
        ...props,
        children: [
            children,
            showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Title, {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-base leading-none font-medium", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Description, {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Textarea;
;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Label$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript) <export * as Label>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Label$3e$__["Label"].Root, {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/review-registration-dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewRegistrationDialog",
    ()=>ReviewRegistrationDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$zh$2d$CN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/zh-CN.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
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
function ReviewRegistrationDialog({ registration, onReview }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rejectionMode, setRejectionMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
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
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('✅ 报名审批通过');
                setOpen(false);
                window.location.reload();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(result.message);
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('审批失败，请稍后重试');
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleReject = async (status)=>{
        if (!feedback.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('请填写驳回原因');
            return;
        }
        setIsSubmitting(true);
        try {
            const result = await onReview(registration.id, status, feedback.trim());
            if (result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`✅ 报名已${status === 'REJECTED_RETRY' ? '退回修改' : '彻底驳回'}`);
                setOpen(false);
                window.location.reload();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(result.message);
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('审批失败，请稍后重试');
        } finally{
            setIsSubmitting(false);
            setRejectionMode(null);
            setFeedback('');
        }
    };
    const statusInfo = getStatusInfo(registration.status);
    const isPending = registration.status?.toString().toUpperCase() === 'PENDING';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: isPending ? "default" : "outline",
                    size: "sm",
                    className: isPending ? "bg-blue-600 hover:bg-blue-700 text-white" : "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "sm:max-w-[600px] max-h-[80vh] overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "报名审查详情"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "申请人姓名"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "联系邮箱"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "赛事名称"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "指导老师"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-sm text-gray-900",
                                                children: registration.teacher ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: registration.teacher.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "提交时间"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-sm text-gray-900",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(registration.createdAt, 'yyyy年MM月dd日 HH:mm', {
                                                    locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$zh$2d$CN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zhCN"]
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 p-4 rounded-md space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-medium text-gray-900 mb-3",
                                        children: "详细资料"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "作品名称"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 181,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "团队成员"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "报名说明/备注"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t pt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "当前状态"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        className: statusInfo.className,
                                                        children: statusInfo.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/review-registration-dialog.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-600",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(registration.createdAt, 'yyyy年MM月dd日', {
                                                            locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$zh$2d$CN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zhCN"]
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
                                            registration.feedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 p-2 bg-red-50 text-red-700 rounded text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    rejectionMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "feedback",
                                                className: "text-sm font-medium text-gray-700",
                                                children: [
                                                    "驳回原因 ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: rejectionMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: rejectionMode === 'REJECTED_RETRY' ? 'default' : 'outline',
                                                    className: rejectionMode === 'REJECTED_RETRY' ? 'bg-orange-600 hover:bg-orange-700 text-white' : '',
                                                    onClick: ()=>handleReject('REJECTED_RETRY'),
                                                    disabled: isSubmitting || !feedback.trim(),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "destructive",
                                                    onClick: ()=>handleReject('REJECTED_FINAL'),
                                                    disabled: isSubmitting || !feedback.trim(),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    className: "bg-green-600 hover:bg-green-700 text-white",
                                                    onClick: handleApprove,
                                                    disabled: isSubmitting,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    className: "text-orange-600 border-orange-200 hover:bg-orange-50",
                                                    onClick: ()=>setRejectionMode('REJECTED_RETRY'),
                                                    disabled: isSubmitting,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    className: "text-red-600 border-red-200 hover:bg-red-50",
                                                    onClick: ()=>setRejectionMode('REJECTED_FINAL'),
                                                    disabled: isSubmitting,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                        children: !isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
_s(ReviewRegistrationDialog, "J+1ro7gcZ0cyzmA4idKtHSt46xQ=");
_c = ReviewRegistrationDialog;
var _c;
__turbopack_context__.k.register(_c, "ReviewRegistrationDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/actions/data:cc23b1 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "batchReviewRegistrations",
    ()=>$$RSC_SERVER_ACTION_14
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"7000681646cab0df678faaf021ae964d8a48068d27":"batchReviewRegistrations"},"src/app/actions/admin.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7000681646cab0df678faaf021ae964d8a48068d27", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "batchReviewRegistrations");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWRtaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSdcbmltcG9ydCB7IGF1dGggfSBmcm9tICdAY2xlcmsvbmV4dGpzL3NlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcblxuLyoqXG4gKiDpqozor4HnrqHnkIblkZjmnYPpmZDnmoTovoXliqnlh73mlbDvvIjln7rkuo7mnKzlnLAgSldUIFRva2Vu77yM6Zu2572R57uc6K+35rGC77yJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VySWQsIHNlc3Npb25DbGFpbXMgfSA9IGF3YWl0IGF1dGgoKVxuXG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5pyq55m75b2V77yM6K+35YWI55m75b2VJylcbiAgICB9XG4gICAgXG4gICAgLy8g55u05o6l5LuO5pys5ZywIEpXVCBUb2tlbiDkuK3or7vlj5Ygcm9sZe+8jOmbtue9kee7nOivt+axgu+8gVxuICAgIGNvbnN0IHJvbGUgPSAoc2Vzc2lvbkNsYWltcyBhcyBhbnkpPy5yb2xlXG4gICAgaWYgKHJvbGUgIT09ICdhZG1pbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5p2D6ZmQ5LiN6Laz77ya5oKo55qE6LSm5Y+35LiN5piv566h55CG5ZGYJylcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgdXNlcklkIH0gLy8g5LiN5YaN6L+U5Zue5a6M5pW055qEIHVzZXIg5a+56LGh77yM5Zug5Li65oiR5Lus5LiN6ZyA6KaB5LqGXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign566h55CG5ZGY5p2D6ZmQ5qCh6aqM5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IG5ldyBFcnJvcihlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfmnYPpmZDmoKHpqozpgYfliLDmnKrnn6XplJnor68nKVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W5omA5pyJ55So5oi3XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxVc2VycygpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIC8vIOS7juaVsOaNruW6k+iOt+WPlueUqOaIt+S/oeaBr++8jOS4jeWGjeS+nei1liBDbGVyayBBUElcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgY3JlYXRlZEF0OiAnZGVzYydcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g6L+U5Zue55So5oi35L+h5oGvXG4gICAgcmV0dXJuIHVzZXJzLm1hcCgodXNlcjogYW55KSA9PiAoe1xuICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICBmaXJzdE5hbWU6IHVzZXIubmFtZT8uc3BsaXQoJyAnKVswXSB8fCBudWxsLFxuICAgICAgbGFzdE5hbWU6IHVzZXIubmFtZT8uc3BsaXQoJyAnKS5zbGljZSgxKS5qb2luKCcgJykgfHwgbnVsbCxcbiAgICAgIGVtYWlsQWRkcmVzc2VzOiBbeyBlbWFpbEFkZHJlc3M6IHVzZXIuZW1haWwgfV0sXG4gICAgICBpbWFnZVVybDogbnVsbCAvLyDmlbDmja7lupPkuK3msqHmnInlrZjlgqjlpLTlg4/kv6Hmga9cbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfojrflj5bnlKjmiLfliJfooajlpLHotKU6JywgZXJyb3IpXG4gICAgXG4gICAgLy8g5qOA5p+l5piv5ZCm5piv5p2D6ZmQ6aqM6K+B6ZSZ6K+vXG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgKFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn572R57uc6K+35rGC6LaF5pe2JykgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+iupOivgeacjeWKoScpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfmnYPpmZDkuI3otrMnKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn5pyq55m75b2VJylcbiAgICApKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfmnYPpmZDpqozor4HlpLHotKXvvIzov5Tlm57nqbrmlbDnu4Q6JywgZXJyb3IubWVzc2FnZSlcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICBcbiAgICAvLyDmo4Dmn6XmmK/lkKbmmK/nvZHnu5zplJnor6/miJblhbbku5YgQVBJIOmUmeivr1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnZmV0Y2gnKSB8fCBcbiAgICAgICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCduZXR3b3JrJykgfHxcbiAgICAgICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdFQ09OTlJFRlVTRUQnKSB8fFxuICAgICAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ3RpbWVvdXQnKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfnvZHnu5zov57mjqXplJnor6/vvIzlj6/og73mmK8gQ2xlcmsg5pyN5Yqh5LiN5Y+v55SoOicsIGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnQ2xlcmtBUElSZXNwb25zZUVycm9yJykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQ2xlcmsgQVBJIOWTjeW6lOmUmeivrzonLCBlcnJvci5tZXNzYWdlKVxuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8g5qOA5p+l5piv5ZCm5pivIENsZXJrIEFQSSDnibnlrprplJnor69cbiAgICBpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAnY2xlcmtFcnJvcicgaW4gZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NsZXJrIEFQSSDplJnor6/or6bmg4U6JywgSlNPTi5zdHJpbmdpZnkoZXJyb3IsIG51bGwsIDIpKVxuICAgICAgLy8g6L+U5Zue56m65pWw57uE6ICM5LiN5piv5oqb5Ye66ZSZ6K+v77yM6Ziy5q2i6aG16Z2i5bSp5rqDXG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgXG4gICAgLy8g5YW25LuW5pyq55+l6ZSZ6K+v77yM6L+U5Zue56m65pWw57uE6Ziy5q2i6aG16Z2i5bSp5rqDXG4gICAgY29uc29sZS5lcnJvcign5pyq55+l6ZSZ6K+v57G75Z6L77yM6L+U5Zue56m65pWw57uEOicsIGVycm9yKVxuICAgIHJldHVybiBbXVxuICB9XG59XG5cbi8qKlxuICog5qC55o2u55So5oi3SUTojrflj5bmiJDlsLFcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjaGlldmVtZW50c0J5VXNlcklkKHRhcmdldFVzZXJJZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBcbiAgICBjb25zdCBhY2hpZXZlbWVudHMgPSBhd2FpdCBwcmlzbWEuYWNoaWV2ZW1lbnQuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHsgdXNlcklkOiB0YXJnZXRVc2VySWQgfSxcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gYWNoaWV2ZW1lbnRzXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W55So5oi35oiQ5bCx5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcign6I635Y+W55So5oi35oiQ5bCx5aSx6LSlJylcbiAgfVxufVxuXG4vKipcbiAqIOeuoeeQhuWRmOWIoOmZpOaIkOWwse+8iOaXoOinhuaJgOacieiAhe+8iVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRtaW5EZWxldGVBY2hpZXZlbWVudChhY2hpZXZlbWVudElkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIC8vIOebtOaOpeWIoOmZpOaIkOWwseiusOW9le+8jOS4jeajgOafpeaJgOacieiAhVxuICAgIGF3YWl0IHByaXNtYS5hY2hpZXZlbWVudC5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGFjaGlldmVtZW50SWQgfVxuICAgIH0pXG5cbiAgICAvLyDph43mlrDpqozor4HnvJPlrZjvvIzliLfmlrDnm7jlhbPpobXpnaJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3VzZXJzJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2ZpbGUnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWNoaWV2ZW1lbnRzJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ+aIkOWwseW3suaIkOWKn+WIoOmZpCdcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5Yig6Zmk5oiQ5bCx5aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+WIoOmZpOaIkOWwseWksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDliJvlu7rmlrDnq57otZvvvIjnrqHnkIblkZjmnYPpmZDvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbXBldGl0aW9uKGRhdGE6IHtcbiAgbmFtZTogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgbGV2ZWw/OiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgZGVhZGxpbmU6IHN0cmluZ1xuICBtYXhQYXJ0aWNpcGFudHM6IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gICAgXG4gICAgLy8g6aqM6K+B6L6T5YWl5pWw5o2uXG4gICAgaWYgKCFkYXRhLm5hbWUgfHwgZGF0YS5uYW1lLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn56ue6LWb5ZCN56ew5LiN6IO95Li656m6J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIWRhdGEuY2F0ZWdvcnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn6K+36YCJ5oup56ue6LWb5YiG57G7J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIWRhdGEuZGVhZGxpbmUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn6K+36YCJ5oup5oiq5q2i5pel5pyfJ1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBkZWFkbGluZURhdGUgPSBuZXcgRGF0ZShkYXRhLmRlYWRsaW5lKVxuICAgIGlmIChpc05hTihkZWFkbGluZURhdGUuZ2V0VGltZSgpKSB8fCBkZWFkbGluZURhdGUgPD0gbmV3IERhdGUoKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfmiKrmraLml6XmnJ/lv4XpobvmmK/mnKrmnaXml7bpl7QnXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG1heFBhcnRpY2lwYW50c051bSA9IHBhcnNlSW50KGRhdGEubWF4UGFydGljaXBhbnRzKVxuICAgIGlmIChpc05hTihtYXhQYXJ0aWNpcGFudHNOdW0pIHx8IG1heFBhcnRpY2lwYW50c051bSA8PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+S6uuaVsOS4iumZkOW/hemhu+aYr+Wkp+S6jjDnmoTmlbDlrZcnXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOmqjOivgeernui1m+e6p+WIq1xuICAgIGNvbnN0IHZhbGlkTGV2ZWxzID0gWyfmoKHnuqcnLCAn5biC57qnJywgJ+ecgee6pycsICflm73lrrbnuqcnLCAn5Zu96ZmF57qnJ11cbiAgICBjb25zdCBsZXZlbCA9IGRhdGEubGV2ZWwgJiYgdmFsaWRMZXZlbHMuaW5jbHVkZXMoZGF0YS5sZXZlbCkgPyBkYXRhLmxldmVsIDogJ+agoee6pydcblxuICAgIC8vIOWIm+W7uuernui1m1xuICAgIGNvbnN0IGNvbXBldGl0aW9uID0gYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IGRhdGEubmFtZS50cmltKCksXG4gICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5LFxuICAgICAgICBsZXZlbCxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24/LnRyaW0oKSB8fCAnJyxcbiAgICAgICAgZGVhZGxpbmU6IGRlYWRsaW5lRGF0ZSxcbiAgICAgICAgbWF4UGFydGljaXBhbnRzOiBtYXhQYXJ0aWNpcGFudHNOdW0sXG4gICAgICAgIGN1cnJlbnRQYXJ0aWNpcGFudHM6IDBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g5Yi35paw57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jb21wZXRpdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vY29tcGV0aXRpb25zJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgZGF0YTogY29tcGV0aXRpb24sXG4gICAgICBtZXNzYWdlOiAn56ue6LWb5Yib5bu65oiQ5Yqf77yBJ1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+WIm+W7uuernui1m+Wksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfliJvlu7rnq57otZvlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog5pu05paw56ue6LWb77yI566h55CG5ZGY5p2D6ZmQ77yJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDb21wZXRpdGlvbihpZDogc3RyaW5nLCBkYXRhOiB7XG4gIG5hbWU6IHN0cmluZ1xuICBjYXRlZ29yeTogc3RyaW5nXG4gIGxldmVsPzogc3RyaW5nXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gIGRlYWRsaW5lOiBzdHJpbmdcbiAgbWF4UGFydGljaXBhbnRzOiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIC8vIOmqjOivgei+k+WFpeaVsOaNrlxuICAgIGlmICghZGF0YS5uYW1lIHx8IGRhdGEubmFtZS50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ernui1m+WQjeensOS4jeiDveS4uuepuidcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKCFkYXRhLmNhdGVnb3J5KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ivt+mAieaLqeernui1m+WIhuexuydcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKCFkYXRhLmRlYWRsaW5lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ivt+mAieaLqeaIquatouaXpeacnydcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGVhZGxpbmVEYXRlID0gbmV3IERhdGUoZGF0YS5kZWFkbGluZSlcbiAgICBpZiAoaXNOYU4oZGVhZGxpbmVEYXRlLmdldFRpbWUoKSkgfHwgZGVhZGxpbmVEYXRlIDw9IG5ldyBEYXRlKCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5oiq5q2i5pel5pyf5b+F6aG75piv5pyq5p2l5pe26Ze0J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBtYXhQYXJ0aWNpcGFudHNOdW0gPSBwYXJzZUludChkYXRhLm1heFBhcnRpY2lwYW50cylcbiAgICBpZiAoaXNOYU4obWF4UGFydGljaXBhbnRzTnVtKSB8fCBtYXhQYXJ0aWNpcGFudHNOdW0gPD0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfkurrmlbDkuIrpmZDlv4XpobvmmK/lpKfkuo4w55qE5pWw5a2XJ1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOajgOafpeernui1m+aYr+WQpuWtmOWcqFxuICAgIGNvbnN0IGV4aXN0aW5nQ29tcGV0aXRpb24gPSBhd2FpdCBwcmlzbWEuY29tcGV0aXRpb24uZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9XG4gICAgfSlcblxuICAgIGlmICghZXhpc3RpbmdDb21wZXRpdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfnq57otZvkuI3lrZjlnKgnXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOmqjOivgeernui1m+e6p+WIq1xuICAgIGNvbnN0IHZhbGlkTGV2ZWxzID0gWyfmoKHnuqcnLCAn5biC57qnJywgJ+ecgee6pycsICflm73lrrbnuqcnLCAn5Zu96ZmF57qnJ11cbiAgICBjb25zdCBsZXZlbCA9IGRhdGEubGV2ZWwgJiYgdmFsaWRMZXZlbHMuaW5jbHVkZXMoZGF0YS5sZXZlbCkgPyBkYXRhLmxldmVsIDogJ+agoee6pydcblxuICAgIC8vIOabtOaWsOernui1m1xuICAgIGNvbnN0IGNvbXBldGl0aW9uID0gYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUudHJpbSgpLFxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgICAgbGV2ZWwsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uPy50cmltKCkgfHwgJycsXG4gICAgICAgIGRlYWRsaW5lOiBkZWFkbGluZURhdGUsXG4gICAgICAgIG1heFBhcnRpY2lwYW50czogbWF4UGFydGljaXBhbnRzTnVtXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIOWIt+aWsOe8k+WtmFxuICAgIHJldmFsaWRhdGVQYXRoKCcvY29tcGV0aXRpb25zJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL2NvbXBldGl0aW9ucycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGRhdGE6IGNvbXBldGl0aW9uLFxuICAgICAgbWVzc2FnZTogJ+ernui1m+abtOaWsOaIkOWKn++8gSdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfmm7TmlrDnq57otZvlpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5pu05paw56ue6LWb5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOWIoOmZpOernui1m++8iOeuoeeQhuWRmOadg+mZkO+8jOWuieWFqOWkhOeQhuWklumUruS+nei1lu+8iVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29tcGV0aXRpb24oaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG5cbiAgICAvLyDmo4Dmn6Xnq57otZvmmK/lkKblrZjlnKhcbiAgICBjb25zdCBleGlzdGluZ0NvbXBldGl0aW9uID0gYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQgfVxuICAgIH0pXG5cbiAgICBpZiAoIWV4aXN0aW5nQ29tcGV0aXRpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn56ue6LWb5LiN5a2Y5ZyoJ1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOS9v+eUqCBQcmlzbWEg5LqL5Yqh5a6J5YWo5Yig6Zmk56ue6LWb5Y+K5YW255u45YWz5pWw5o2uXG4gICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xuICAgICAgLy8g56ys5LiA5q2l77ya5Yig6Zmk5omA5pyJ55u45YWz55qE5oql5ZCN6K6w5b2VXG4gICAgICBhd2FpdCB0eC5yZWdpc3RyYXRpb24uZGVsZXRlTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IGNvbXBldGl0aW9uSWQ6IGlkIH1cbiAgICAgIH0pXG4gICAgICBcbiAgICAgIC8vIOesrOS6jOatpe+8muWIoOmZpOernui1m+acrOi6q1xuICAgICAgYXdhaXQgdHguY29tcGV0aXRpb24uZGVsZXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8g5Yi35paw57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jb21wZXRpdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vY29tcGV0aXRpb25zJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ+ernui1m+WIoOmZpOaIkOWKn++8gSdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfliKDpmaTnq57otZvlpLHotKU6JywgZXJyb3IpXG4gICAgXG4gICAgLy8g5qOA5p+l5piv5ZCm5piv5aSW6ZSu57qm5p2f6ZSZ6K+vXG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnZm9yZWlnbiBrZXkgY29uc3RyYWludCcpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+WIoOmZpOWksei0pe+8muivpeernui1m+S7jeacieWFs+iBlOaVsOaNru+8jOivt+WFiOWkhOeQhuebuOWFs+iusOW9lSdcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5Yig6Zmk56ue6LWb5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPluaJgOacieaMh+WvvOiAgeW4iOWIl+ihqFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGVhY2hlcnMoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBcbiAgICBjb25zdCB0ZWFjaGVycyA9IGF3YWl0IHByaXNtYS50ZWFjaGVyLmZpbmRNYW55KHtcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gdGVhY2hlcnNcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfojrflj5bogIHluIjliJfooajlpLHotKU6JywgZXJyb3IpXG4gICAgdGhyb3cgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yIDogbmV3IEVycm9yKCfojrflj5bogIHluIjliJfooajlpLHotKXvvIzor7fnqI3lkI7ph43or5UnKVxuICB9XG59XG5cbi8qKlxuICog5Yib5bu65paw5oyH5a+86ICB5biIXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUZWFjaGVyKGRhdGE6IHtcbiAgbmFtZTogc3RyaW5nXG4gIGRlcGFydG1lbnQ/OiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIC8vIOmqjOivgei+k+WFpeaVsOaNrlxuICAgIGlmICghZGF0YS5uYW1lIHx8IGRhdGEubmFtZS50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+aVmeW4iOWnk+WQjeS4jeiDveS4uuepuidcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDmn6Xor6LlvZPliY3mlbDmja7lupPkuK3lhbHmnInlpJrlsJHkvY3ogIHluIhcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICAgIGNvbnN0IHRlYWNoZXJDb3VudCA9IGF3YWl0IHByaXNtYS50ZWFjaGVyLmNvdW50KClcbiAgICBcbiAgICAvLyDnlJ/miJDmoLzlvI/kuLogVCArIOW5tOS7vSArIDPkvY3mtYHmsLTlj7fnmoTmlZnluIjnvJblj7dcbiAgICBjb25zdCB0ZWFjaGVyTm8gPSBgVCR7Y3VycmVudFllYXJ9JHtTdHJpbmcodGVhY2hlckNvdW50ICsgMSkucGFkU3RhcnQoMywgJzAnKX1gXG4gICAgXG4gICAgLy8g5Yib5bu66ICB5biI6K6w5b2VXG4gICAgY29uc3QgdGVhY2hlciA9IGF3YWl0IHByaXNtYS50ZWFjaGVyLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IGRhdGEubmFtZS50cmltKCksXG4gICAgICAgIGRlcGFydG1lbnQ6IGRhdGEuZGVwYXJ0bWVudD8udHJpbSgpIHx8IG51bGwsXG4gICAgICAgIHRlYWNoZXJOb1xuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDliLfmlrDnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3RlYWNoZXJzJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgZGF0YTogdGVhY2hlcixcbiAgICAgIG1lc3NhZ2U6ICfmjIflr7zogIHluIjmt7vliqDmiJDlip/vvIEnXG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5Yib5bu66ICB5biI5aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+WIm+W7uuiAgeW4iOWksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDliKDpmaTmjIflr7zogIHluIhcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRlYWNoZXIoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG5cbiAgICAvLyDmo4Dmn6XogIHluIjmmK/lkKblrZjlnKhcbiAgICBjb25zdCBleGlzdGluZ1RlYWNoZXIgPSBhd2FpdCBwcmlzbWEudGVhY2hlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH1cbiAgICB9KVxuXG4gICAgaWYgKCFleGlzdGluZ1RlYWNoZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5oyH5a+86ICB5biI5LiN5a2Y5ZyoJ1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOajgOafpeaYr+WQpuacieWFs+iBlOeahOaKpeWQjeiusOW9lVxuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbkNvdW50ID0gYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi5jb3VudCh7XG4gICAgICB3aGVyZTogeyB0ZWFjaGVySWQ6IGlkIH1cbiAgICB9KVxuXG4gICAgaWYgKHJlZ2lzdHJhdGlvbkNvdW50ID4gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfor6XogIHluIjov5jmnInlhbPogZTnmoTmiqXlkI3orrDlvZXvvIzml6Dms5XliKDpmaQnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5Yig6Zmk6ICB5biI6K6w5b2VXG4gICAgYXdhaXQgcHJpc21hLnRlYWNoZXIuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH1cbiAgICB9KVxuXG4gICAgLy8g5Yi35paw57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi90ZWFjaGVycycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6ICfmjIflr7zogIHluIjliKDpmaTmiJDlip/vvIEnXG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5Yig6Zmk6ICB5biI5aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+WIoOmZpOiAgeW4iOWksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDojrflj5bmiYDmnInmiqXlkI3orrDlvZXvvIjnrqHnkIblkZjlrqHmibnkuJPnlKjvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFJlZ2lzdHJhdGlvbnMoKSB7XG4gIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gIFxuICB0cnkge1xuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbnMgPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmZpbmRNYW55KHtcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICBhcHBsaWNhbnROYW1lOiB0cnVlLFxuICAgICAgICBwcm9qZWN0TmFtZTogdHJ1ZSxcbiAgICAgICAgdGVhbU1lbWJlcnM6IHRydWUsXG4gICAgICAgIGNyZWF0ZWRBdDogdHJ1ZSxcbiAgICAgICAgY29tcGV0aXRpb246IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxuICAgICAgICAgICAgZGVhZGxpbmU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRlYWNoZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIHRlYWNoZXJObzogdHJ1ZSxcbiAgICAgICAgICAgIGRlcGFydG1lbnQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgZW1haWw6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb3JkZXJCeToge1xuICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJ1xuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVnaXN0cmF0aW9uc1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaKpeWQjeiusOW9leWksei0pTonLCBlcnJvcilcbiAgICB0aHJvdyBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiBuZXcgRXJyb3IoJ+iOt+WPluaKpeWQjeiusOW9leWksei0pe+8jOivt+eojeWQjumHjeivlScpXG4gIH1cbn1cblxuLyoqXG4gKiDlrqHmoLjmiqXlkI3orrDlvZVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJldmlld1JlZ2lzdHJhdGlvbihyZWdpc3RyYXRpb25JZDogc3RyaW5nLCBzdGF0dXM6IHN0cmluZywgZmVlZGJhY2s/OiBzdHJpbmcpIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgLy8g6aqM6K+B54q25oCB5YC8XG4gICAgY29uc3QgdmFsaWRTdGF0dXNlcyA9IFsnUEVORElORycsICdBUFBST1ZFRCcsICdSRUpFQ1RFRF9SRVRSWScsICdSRUpFQ1RFRF9GSU5BTCddXG4gICAgaWYgKCF2YWxpZFN0YXR1c2VzLmluY2x1ZGVzKHN0YXR1cykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5peg5pWI55qE5a6h5om554q25oCBJylcbiAgICB9XG5cbiAgICAvLyDlpoLmnpznirbmgIHkuLogUkVKRUNURURfUkVUUlkg5oiWIFJFSkVDVEVEX0ZJTkFM77yM5b+F6aG75o+Q5L6b5Y+N6aaI5oSP6KeBXG4gICAgaWYgKChzdGF0dXMgPT09ICdSRUpFQ1RFRF9SRVRSWScgfHwgc3RhdHVzID09PSAnUkVKRUNURURfRklOQUwnKSAmJiAoIWZlZWRiYWNrIHx8IGZlZWRiYWNrLnRyaW0oKS5sZW5ndGggPT09IDApKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ+mps+WbnueUs+ivt+aXtuW/hemhu+aPkOS+m+WPjemmiOaEj+ingScpXG4gICAgfVxuXG4gICAgLy8g5qOA5p+l5oql5ZCN6K6w5b2V5piv5ZCm5a2Y5ZyoXG4gICAgY29uc3QgZXhpc3RpbmdSZWdpc3RyYXRpb24gPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHJlZ2lzdHJhdGlvbklkIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIGNvbXBldGl0aW9uOiB0cnVlLFxuICAgICAgICB1c2VyOiB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghZXhpc3RpbmdSZWdpc3RyYXRpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5oql5ZCN6K6w5b2V5LiN5a2Y5ZyoJylcbiAgICB9XG5cbiAgICAvLyDmm7TmlrDmiqXlkI3orrDlvZVcbiAgICBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogcmVnaXN0cmF0aW9uSWQgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBmZWVkYmFjazogZmVlZGJhY2s/LnRyaW0oKSB8fCBudWxsXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIE5PVEU6IOWuoeaJueaTjeS9nOWQjuWQjOatpSBjdXJyZW50UGFydGljaXBhbnRzIOS4uuecn+WunuiuoeaVsOWAvFxuICAgIGNvbnN0IHVwZGF0ZWRDb3VudCA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uY291bnQoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgY29tcGV0aXRpb25JZDogZXhpc3RpbmdSZWdpc3RyYXRpb24uY29tcGV0aXRpb25JZCxcbiAgICAgICAgc3RhdHVzOiB7IG5vdEluOiBbJ1JFSkVDVEVEX0ZJTkFMJ10gfVxuICAgICAgfVxuICAgIH0pXG4gICAgYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogZXhpc3RpbmdSZWdpc3RyYXRpb24uY29tcGV0aXRpb25JZCB9LFxuICAgICAgZGF0YTogeyBjdXJyZW50UGFydGljaXBhbnRzOiB1cGRhdGVkQ291bnQgfVxuICAgIH0pXG5cbiAgICAvLyDph43mlrDpqozor4HnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3JlZ2lzdHJhdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvZmlsZScpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jb21wZXRpdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vY29tcGV0aXRpb25zJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL2FjaGlldmVtZW50cycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IHN0YXR1cyA9PT0gJ0FQUFJPVkVEJyA/ICfmiqXlkI3lt7LpgJrov4fvvIzlt7Loh6rliqjnlJ/miJDmiJDlsLHorrDlvZXvvIEnIDogJ+aKpeWQjeW3suabtOaWsCdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCflrqHmoLjmiqXlkI3lpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5a6h5qC45aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPlueuoeeQhuWRmOaOp+WItuWPsOe7n+iuoeaVsOaNrlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFzaGJvYXJkU3RhdHMoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBcbiAgICAvLyDku47mlbDmja7lupPojrflj5bnlKjmiLfmgLvmlbDvvIzkuI3lho3kvp3otZYgQ2xlcmsgQVBJXG4gICAgbGV0IHRvdGFsVXNlcnMgPSAwXG4gICAgdHJ5IHtcbiAgICAgIHRvdGFsVXNlcnMgPSBhd2FpdCBwcmlzbWEudXNlci5jb3VudCgpXG4gICAgfSBjYXRjaCAoZGJFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign6I635Y+W55So5oi35oC75pWw5aSx6LSlOicsIGRiRXJyb3IpXG4gICAgICB0b3RhbFVzZXJzID0gMCAvLyDkvb/nlKjpu5jorqTlgLxcbiAgICB9XG4gICAgXG4gICAgLy8g5bm26KGM6I635Y+W5YW25LuW57uf6K6h5pWw5o2uXG4gICAgY29uc3QgW1xuICAgICAgdG90YWxDb21wZXRpdGlvbnMsXG4gICAgICB0b3RhbFJlZ2lzdHJhdGlvbnMsXG4gICAgICBwZW5kaW5nUmV2aWV3cyxcbiAgICAgIGNhdGVnb3J5U3RhdHMsXG4gICAgICB0b3BDb21wZXRpdGlvbnMsXG4gICAgICByZWNlbnRQZW5kaW5nXG4gICAgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIC8vIOi1m+S6i+aAu+aVsFxuICAgICAgcHJpc21hLmNvbXBldGl0aW9uLmNvdW50KCksXG4gICAgICBcbiAgICAgIC8vIOaKpeWQjeaAu+aVsFxuICAgICAgcHJpc21hLnJlZ2lzdHJhdGlvbi5jb3VudCgpLFxuICAgICAgXG4gICAgICAvLyDlvoXlrqHmoLjmlbDph49cbiAgICAgIHByaXNtYS5yZWdpc3RyYXRpb24uY291bnQoe1xuICAgICAgICB3aGVyZTogeyBzdGF0dXM6ICdQRU5ESU5HJyB9XG4gICAgICB9KSxcbiAgICAgIFxuICAgICAgLy8g5oyJ5YiG57G757uf6K6h6LWb5LqL5pWw6YePXG4gICAgICBwcmlzbWEuY29tcGV0aXRpb24uZ3JvdXBCeSh7XG4gICAgICAgIGJ5OiBbJ2NhdGVnb3J5J10sXG4gICAgICAgIF9jb3VudDoge1xuICAgICAgICAgIGlkOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgXG4gICAgICAvLyDmiqXlkI3kurrmlbDmnIDlpJrnmoTliY015Liq6LWb5LqLXG4gICAgICBwcmlzbWEuY29tcGV0aXRpb24uZmluZE1hbnkoe1xuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgIF9jb3VudDoge1xuICAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbnM6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgICByZWdpc3RyYXRpb25zOiB7XG4gICAgICAgICAgICBfY291bnQ6ICdkZXNjJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGFrZTogNVxuICAgICAgfSksXG4gICAgICBcbiAgICAgIC8vIOacgOaWsDXmnaHlvoXlrqHmoLjmiqXlkI1cbiAgICAgIHByaXNtYS5yZWdpc3RyYXRpb24uZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyBzdGF0dXM6ICdQRU5ESU5HJyB9LFxuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICBhcHBsaWNhbnROYW1lOiB0cnVlLFxuICAgICAgICAgIGNvbXBldGl0aW9uOiB7XG4gICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgbmFtZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxuICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICBuYW1lOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcmRlckJ5OiB7XG4gICAgICAgICAgY3JlYXRlZEF0OiAnZGVzYydcbiAgICAgICAgfSxcbiAgICAgICAgdGFrZTogNVxuICAgICAgfSlcbiAgICBdKVxuXG4gICAgLy8g5aSE55CG5YiG57G757uf6K6h5pWw5o2u77yM5ZCI5bm255u45Ly85YiG57G7XG4gICAgY29uc3QgcHJvY2Vzc2VkQ2F0ZWdvcnlTdGF0cyA9IGNhdGVnb3J5U3RhdHMucmVkdWNlKChhY2M6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH1bXSwgaXRlbTogYW55KSA9PiB7XG4gICAgICBjb25zdCBjYXRlZ29yeSA9IGl0ZW0uY2F0ZWdvcnkgfHwgJ+WFtuS7lidcbiAgICAgIGNvbnN0IGV4aXN0aW5nSXRlbSA9IGFjYy5maW5kKChzdGF0OiB7IG5hbWU6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9KSA9PiBzdGF0Lm5hbWUgPT09IGNhdGVnb3J5KVxuICAgICAgXG4gICAgICBpZiAoZXhpc3RpbmdJdGVtKSB7XG4gICAgICAgIGV4aXN0aW5nSXRlbS52YWx1ZSArPSBpdGVtLl9jb3VudC5pZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgIG5hbWU6IGNhdGVnb3J5LFxuICAgICAgICAgIHZhbHVlOiBpdGVtLl9jb3VudC5pZFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSwgW10gYXMgeyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfVtdKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsVXNlcnMsXG4gICAgICB0b3RhbENvbXBldGl0aW9ucyxcbiAgICAgIHRvdGFsUmVnaXN0cmF0aW9ucyxcbiAgICAgIHBlbmRpbmdSZXZpZXdzLFxuICAgICAgY2F0ZWdvcnlTdGF0czogcHJvY2Vzc2VkQ2F0ZWdvcnlTdGF0cyxcbiAgICAgIHRvcENvbXBldGl0aW9uczogdG9wQ29tcGV0aXRpb25zLm1hcCgoY29tcDogYW55KSA9PiAoe1xuICAgICAgICBuYW1lOiBjb21wLm5hbWUsXG4gICAgICAgIHJlZ2lzdHJhdGlvbnM6IGNvbXAuX2NvdW50LnJlZ2lzdHJhdGlvbnNcbiAgICAgIH0pKSxcbiAgICAgIHJlY2VudFBlbmRpbmc6IHJlY2VudFBlbmRpbmcubWFwKChyZWc6IGFueSkgPT4gKHtcbiAgICAgICAgaWQ6IHJlZy5pZCxcbiAgICAgICAgYXBwbGljYW50TmFtZTogcmVnLmFwcGxpY2FudE5hbWUgfHwgcmVnLnVzZXI/Lm5hbWUgfHwgJ+acquefpScsXG4gICAgICAgIGNvbXBldGl0aW9uTmFtZTogcmVnLmNvbXBldGl0aW9uLm5hbWUsXG4gICAgICAgIGNyZWF0ZWRBdDogcmVnLmNyZWF0ZWRBdFxuICAgICAgfSkpXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluS7quihqOadv+e7n+iuoeaVsOaNruWksei0pTonLCBlcnJvcilcbiAgICBcbiAgICAvLyDlpoLmnpzmmK/mnYPpmZDpqozor4HplJnor6/vvIzov5Tlm57pu5jorqTnu5/orqHmlbDmja5cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAoXG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfnvZHnu5zor7fmsYLotoXml7YnKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn6K6k6K+B5pyN5YqhJykgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+adg+mZkOS4jei2sycpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfmnKrnmbvlvZUnKVxuICAgICkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+adg+mZkOmqjOivgeWksei0pe+8jOi/lOWbnum7mOiupOe7n+iuoeaVsOaNrjonLCBlcnJvci5tZXNzYWdlKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG90YWxVc2VyczogMCxcbiAgICAgICAgdG90YWxDb21wZXRpdGlvbnM6IDAsXG4gICAgICAgIHRvdGFsUmVnaXN0cmF0aW9uczogMCxcbiAgICAgICAgcGVuZGluZ1Jldmlld3M6IDAsXG4gICAgICAgIGNhdGVnb3J5U3RhdHM6IFtdLFxuICAgICAgICB0b3BDb21wZXRpdGlvbnM6IFtdLFxuICAgICAgICByZWNlbnRQZW5kaW5nOiBbXVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyDlhbbku5bplJnor6/kuZ/ov5Tlm57pu5jorqTnu5/orqHmlbDmja7vvIzpmLLmraLpobXpnaLltKnmuoNcbiAgICBjb25zb2xlLmVycm9yKCfmnKrnn6XplJnor6/vvIzov5Tlm57pu5jorqTnu5/orqHmlbDmja46JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsVXNlcnM6IDAsXG4gICAgICB0b3RhbENvbXBldGl0aW9uczogMCxcbiAgICAgIHRvdGFsUmVnaXN0cmF0aW9uczogMCxcbiAgICAgIHBlbmRpbmdSZXZpZXdzOiAwLFxuICAgICAgY2F0ZWdvcnlTdGF0czogW10sXG4gICAgICB0b3BDb21wZXRpdGlvbnM6IFtdLFxuICAgICAgcmVjZW50UGVuZGluZzogW11cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDmibnph4/lr7zlhaXmjIflr7zogIHluIhcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJhdGNoSW1wb3J0VGVhY2hlcnModGVhY2hlcnNEYXRhOiB7IG5hbWU6IHN0cmluZzsgZGVwYXJ0bWVudD86IHN0cmluZyB9W10pIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgLy8g6I635Y+W5b2T5YmN5bm05Lu9XG4gICAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcbiAgICBjb25zdCB5ZWFyUHJlZml4ID0gYFQke2N1cnJlbnRZZWFyfWBcbiAgICBcbiAgICAvLyDmn6Xor6LlvZPliY3lubTku73mnIDmlrDnmoTmlZnluIjnvJblj7dcbiAgICBjb25zdCBsYXRlc3RUZWFjaGVyID0gYXdhaXQgcHJpc21hLnRlYWNoZXIuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRlYWNoZXJObzoge1xuICAgICAgICAgIHN0YXJ0c1dpdGg6IHllYXJQcmVmaXhcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgdGVhY2hlck5vOiAnZGVzYydcbiAgICAgIH1cbiAgICB9KVxuICAgIFxuICAgIC8vIOiuoeeul+i1t+Wni+a1geawtOWPt1xuICAgIGxldCBzZXJpYWxOdW1iZXIgPSAxXG4gICAgaWYgKGxhdGVzdFRlYWNoZXIpIHtcbiAgICAgIGNvbnN0IGxhdGVzdFNlcmlhbCA9IHBhcnNlSW50KGxhdGVzdFRlYWNoZXIudGVhY2hlck5vLnNsaWNlKC0zKSlcbiAgICAgIGlmICghaXNOYU4obGF0ZXN0U2VyaWFsKSkge1xuICAgICAgICBzZXJpYWxOdW1iZXIgPSBsYXRlc3RTZXJpYWwgKyAxXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOagvOW8j+WMluaVmeW4iOaVsOaNrlxuICAgIGNvbnN0IGZvcm1hdHRlZFRlYWNoZXJzID0gdGVhY2hlcnNEYXRhLm1hcCgodGVhY2hlciwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlYWNoZXJObyA9IGAke3llYXJQcmVmaXh9JHtzZXJpYWxOdW1iZXIudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWBcbiAgICAgIHNlcmlhbE51bWJlcisrXG4gICAgICBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHRlYWNoZXIubmFtZS50cmltKCksXG4gICAgICAgIGRlcGFydG1lbnQ6IHRlYWNoZXIuZGVwYXJ0bWVudD8udHJpbSgpIHx8IG51bGwsXG4gICAgICAgIHRlYWNoZXJOb1xuICAgICAgfVxuICAgIH0pXG4gICAgXG4gICAgLy8g5om56YeP5o+S5YWl5pWw5o2u5bqTXG4gICAgYXdhaXQgcHJpc21hLnRlYWNoZXIuY3JlYXRlTWFueSh7XG4gICAgICBkYXRhOiBmb3JtYXR0ZWRUZWFjaGVyc1xuICAgIH0pXG4gICAgXG4gICAgLy8g6YeN5paw6aqM6K+B57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi90ZWFjaGVycycpXG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBjb3VudDogZm9ybWF0dGVkVGVhY2hlcnMubGVuZ3RoLFxuICAgICAgbWVzc2FnZTogYOaIkOWKn+WvvOWFpSAke2Zvcm1hdHRlZFRlYWNoZXJzLmxlbmd0aH0g5L2N5oyH5a+86ICB5biIYFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfmibnph4/lr7zlhaXmjIflr7zogIHluIjlpLHotKU6JywgZXJyb3IpXG4gICAgdGhyb3cgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yIDogbmV3IEVycm9yKCfmibnph4/lr7zlhaXlpLHotKXvvIzor7fnqI3lkI7ph43or5UnKVxuICB9XG59XG5cbi8qKlxuICog5om56YeP5a6h5om55oql5ZCN6K6w5b2VXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBiYXRjaFJldmlld1JlZ2lzdHJhdGlvbnMoXG4gIGlkczogc3RyaW5nW10sIFxuICBzdGF0dXM6ICdBUFBST1ZFRCcgfCAnUkVKRUNURURfUkVUUlknIHwgJ1JFSkVDVEVEX0ZJTkFMJywgXG4gIGZlZWRiYWNrPzogc3RyaW5nXG4pIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgLy8g6aqM6K+B54q25oCB5YC8XG4gICAgY29uc3QgdmFsaWRTdGF0dXNlcyA9IFsnQVBQUk9WRUQnLCAnUkVKRUNURURfUkVUUlknLCAnUkVKRUNURURfRklOQUwnXVxuICAgIGlmICghdmFsaWRTdGF0dXNlcy5pbmNsdWRlcyhzdGF0dXMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ+aXoOaViOeahOWuoeaJueeKtuaAgScpXG4gICAgfVxuXG4gICAgLy8g5aaC5p6c54q25oCB5Li6IFJFSkVDVEVEX1JFVFJZIOaIliBSRUpFQ1RFRF9GSU5BTO+8jOW/hemhu+aPkOS+m+WPjemmiOaEj+ingVxuICAgIGlmICgoc3RhdHVzID09PSAnUkVKRUNURURfUkVUUlknIHx8IHN0YXR1cyA9PT0gJ1JFSkVDVEVEX0ZJTkFMJykgJiYgKCFmZWVkYmFjayB8fCBmZWVkYmFjay50cmltKCkubGVuZ3RoID09PSAwKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfpqbPlm57nlLPor7fml7blv4Xpobvmj5Dkvpvlj43ppojmhI/op4EnKVxuICAgIH1cblxuICAgIC8vIOmqjOivgUlE5pWw57uEXG4gICAgaWYgKCFpZHMgfHwgaWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfor7fpgInmi6nopoHlrqHmibnnmoTmiqXlkI3orrDlvZUnKVxuICAgIH1cblxuICAgIC8vIOiOt+WPluimgeabtOaWsOeahOaKpeWQjeiusOW9leivpuaDhe+8iOeUqOS6jueUn+aIkOaIkOWwse+8iVxuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbnNUb1VwZGF0ZSA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHsgXG4gICAgICAgIGlkOiB7IGluOiBpZHMgfVxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgY29tcGV0aXRpb246IHRydWUsXG4gICAgICAgIHVzZXI6IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g5om56YeP5pu05paw5oql5ZCN6K6w5b2VXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi51cGRhdGVNYW55KHtcbiAgICAgIHdoZXJlOiB7IFxuICAgICAgICBpZDogeyBpbjogaWRzIH1cbiAgICAgIH0sXG4gICAgICBkYXRhOiB7IFxuICAgICAgICBzdGF0dXMsIFxuICAgICAgICBmZWVkYmFjazogZmVlZGJhY2s/LnRyaW0oKSB8fCBudWxsIFxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBOT1RFOiDmibnph4/lrqHmibnlkI7lkIzmraXmiYDmnInmtonlj4rnq57otZvnmoQgY3VycmVudFBhcnRpY2lwYW50c1xuICAgIGNvbnN0IGFmZmVjdGVkQ29tcGV0aXRpb25JZHMgPSBbLi4ubmV3IFNldChyZWdpc3RyYXRpb25zVG9VcGRhdGUubWFwKChyOiBhbnkpID0+IHIuY29tcGV0aXRpb25JZCkpXVxuICAgIGZvciAoY29uc3QgY29tcElkIG9mIGFmZmVjdGVkQ29tcGV0aXRpb25JZHMpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRDb3VudCA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uY291bnQoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGNvbXBldGl0aW9uSWQ6IGNvbXBJZCxcbiAgICAgICAgICBzdGF0dXM6IHsgbm90SW46IFsnUkVKRUNURURfRklOQUwnXSB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBhd2FpdCBwcmlzbWEuY29tcGV0aXRpb24udXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IGNvbXBJZCB9LFxuICAgICAgICBkYXRhOiB7IGN1cnJlbnRQYXJ0aWNpcGFudHM6IHVwZGF0ZWRDb3VudCB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIOmHjeaWsOmqjOivgee8k+WtmFxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vcmVnaXN0cmF0aW9ucycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9maWxlJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9jb21wZXRpdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vYWNoaWV2ZW1lbnRzJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgY291bnQ6IHJlc3VsdC5jb3VudCxcbiAgICAgIG1lc3NhZ2U6IHN0YXR1cyA9PT0gJ0FQUFJPVkVEJyBcbiAgICAgICAgPyBg5oiQ5Yqf6YCa6L+HICR7cmVzdWx0LmNvdW50fSDmnaHmiqXlkI3nlLPor7fvvIzlt7Loh6rliqjnlJ/miJDmiJDlsLHorrDlvZXvvIFgIFxuICAgICAgICA6IGDmiJDlip/lpITnkIYgJHtyZXN1bHQuY291bnR9IOadoeaKpeWQjeiusOW9lWBcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5om56YeP5a6h5om55aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+aJuemHj+WuoeaJueWksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDojrflj5bmiYDmnInnlKjmiLfnmoTmiJDlsLHorrDlvZXvvIjnrqHnkIblkZjkuJPnlKjvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEFjaGlldmVtZW50cygpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIGNvbnN0IGFjaGlldmVtZW50cyA9IGF3YWl0IHByaXNtYS5hY2hpZXZlbWVudC5maW5kTWFueSh7XG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIGVtYWlsOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb3JkZXJCeToge1xuICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJ1xuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gYWNoaWV2ZW1lbnRzXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W5oiQ5bCx6K6w5b2V5aSx6LSlOicsIGVycm9yKVxuICAgIFxuICAgIC8vIOWmguaenOaYr+adg+mZkOmqjOivgemUmeivr++8jOi/lOWbnuepuuaVsOe7hOiAjOS4jeaYr+aKm+WHuumUmeivr1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIChcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+e9kee7nOivt+axgui2heaXticpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCforqTor4HmnI3liqEnKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn5p2D6ZmQ5LiN6LazJykgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+acqueZu+W9lScpXG4gICAgKSkge1xuICAgICAgY29uc29sZS5lcnJvcign5p2D6ZmQ6aqM6K+B5aSx6LSl77yM6L+U5Zue56m65pWw57uEOicsIGVycm9yLm1lc3NhZ2UpXG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgXG4gICAgLy8g5YW25LuW6ZSZ6K+v5Lmf6L+U5Zue56m65pWw57uE77yM6Ziy5q2i6aG16Z2i5bSp5rqDXG4gICAgY29uc29sZS5lcnJvcign5pyq55+l6ZSZ6K+v77yM6L+U5Zue56m65pWw57uEOicsIGVycm9yKVxuICAgIHJldHVybiBbXVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W5a+85Ye65pWw5o2uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBvcnREYXRhKGNvbXBldGl0aW9uSWQ6IHN0cmluZykge1xuICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICBcbiAgdHJ5IHtcbiAgICAvLyDmn6Xor6Lor6XotZvkuovkuIvmiYDmnInlt7LpgJrov4fnmoTmiqXlkI3orrDlvZVcbiAgICBjb25zdCByZWdpc3RyYXRpb25zID0gYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjb21wZXRpdGlvbklkLFxuICAgICAgICBzdGF0dXM6ICdBUFBST1ZFRCdcbiAgICAgIH0sXG4gICAgICAvLyDmoLjlv4PkvJjljJbvvJrlj6rmn6Xor6Lov5kgNiDkuKrliY3nq6/nnJ/mraPpnIDopoHnmoTlrZfmrrXvvIzkuKLlvIMgaWTjgIF1c2VySWTjgIHnirbmgIHnrYnlhpfkvZnmlbDmja5cbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBhcHBsaWNhbnROYW1lOiB0cnVlLFxuICAgICAgICBwcm9qZWN0TmFtZTogdHJ1ZSxcbiAgICAgICAgdGVhbU1lbWJlcnM6IHRydWUsXG4gICAgICAgIG5vdGVzOiB0cnVlLFxuICAgICAgICBjcmVhdGVkQXQ6IHRydWUsXG4gICAgICAgIHRlYWNoZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgICBkZXBhcnRtZW50OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb3JkZXJCeToge1xuICAgICAgICBjcmVhdGVkQXQ6ICdhc2MnXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIOaJgeW5s+WMluagvOW8j+WMluaVsOaNrlxuICAgIGNvbnN0IGV4cG9ydERhdGEgPSByZWdpc3RyYXRpb25zLm1hcCgocmVnOiBhbnkpID0+ICh7XG4gICAgICDnlLPor7fkuro6IHJlZy5hcHBsaWNhbnROYW1lIHx8ICfmnKrnn6UnLFxuICAgICAg5L2c5ZOB5ZCN56ewOiByZWcucHJvamVjdE5hbWUgfHwgJ+aXoCcsXG4gICAgICDlm6LpmJ/miJDlkZg6IHJlZy50ZWFtTWVtYmVycyB8fCAn5pegJyxcbiAgICAgIOaMh+WvvOiAgeW4iDogcmVnLnRlYWNoZXI/Lm5hbWUgfHwgJ+aXoCcsXG4gICAgICDogIHluIjlrabpmaI6IHJlZy50ZWFjaGVyPy5kZXBhcnRtZW50IHx8ICfml6AnLFxuICAgICAg5oql5ZCN6K+05piOOiByZWcubm90ZXMgfHwgJ+aXoCcsXG4gICAgICDmj5DkuqTml7bpl7Q6IHJlZy5jcmVhdGVkQXQudG9Mb2NhbGVEYXRlU3RyaW5nKCd6aC1DTicsIHtcbiAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICBtb250aDogJzItZGlnaXQnLFxuICAgICAgICBkYXk6ICcyLWRpZ2l0J1xuICAgICAgfSlcbiAgICB9KSlcblxuICAgIHJldHVybiBleHBvcnREYXRhXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W5a+85Ye65pWw5o2u5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcign6I635Y+W5a+85Ye65pWw5o2u5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJylcbiAgfVxufVxuXG4vKipcbiAqIOWIh+aNouernui1m+W9kuaho+eKtuaAgVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG9nZ2xlQ29tcGV0aXRpb25BcmNoaXZlKGlkOiBzdHJpbmcsIGN1cnJlbnRTdGF0dXM6IGJvb2xlYW4pIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgLy8g5pu05paw56ue6LWb54q25oCBXG4gICAgY29uc3QgbmV3U3RhdHVzID0gIWN1cnJlbnRTdGF0dXNcbiAgICBjb25zdCBjb21wZXRpdGlvbiA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGE6IHsgaXNBY3RpdmU6IG5ld1N0YXR1cyB9XG4gICAgfSlcblxuICAgIC8vIOmHjeaWsOmqjOivgee8k+WtmFxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vY29tcGV0aXRpb25zJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGRhdGE6IGNvbXBldGl0aW9uLFxuICAgICAgbWVzc2FnZTogbmV3U3RhdHVzID8gJ+ernui1m+W3sumHjeaWsOS4iuaeticgOiAn56ue6LWb5bey5b2S5qGjJ1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfliIfmjaLnq57otZvnirbmgIHlpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5YiH5o2i56ue6LWb54q25oCB5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOWuoeaguOmAmui/h+aIkOWwsVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBwcm92ZUFjaGlldmVtZW50KGFjaGlldmVtZW50SWQ6IHN0cmluZykge1xuICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICBcbiAgdHJ5IHtcbiAgICBjb25zdCBhY2hpZXZlbWVudCA9IGF3YWl0IHByaXNtYS5hY2hpZXZlbWVudC5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBhY2hpZXZlbWVudElkIH1cbiAgICB9KVxuXG4gICAgaWYgKCFhY2hpZXZlbWVudCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfmiJDlsLHorrDlvZXkuI3lrZjlnKgnXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXdhaXQgcHJpc21hLmFjaGlldmVtZW50LnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogYWNoaWV2ZW1lbnRJZCB9LFxuICAgICAgZGF0YTogeyBzdGF0dXM6ICdBUFBST1ZFRCcgfVxuICAgIH0pXG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL2FjaGlldmVtZW50cycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9maWxlJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ+aIkOWwseWuoeaguOmAmui/h++8gSdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCflrqHmoLjpgJrov4fmiJDlsLHlpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5a6h5qC46YCa6L+H5oiQ5bCx5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOmps+WbnuaIkOWwsVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVqZWN0QWNoaWV2ZW1lbnQoYWNoaWV2ZW1lbnRJZDogc3RyaW5nKSB7XG4gIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gIFxuICB0cnkge1xuICAgIGNvbnN0IGFjaGlldmVtZW50ID0gYXdhaXQgcHJpc21hLmFjaGlldmVtZW50LmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGFjaGlldmVtZW50SWQgfVxuICAgIH0pXG5cbiAgICBpZiAoIWFjaGlldmVtZW50KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+aIkOWwseiusOW9leS4jeWtmOWcqCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuYWNoaWV2ZW1lbnQudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBhY2hpZXZlbWVudElkIH0sXG4gICAgICBkYXRhOiB7IHN0YXR1czogJ1JFSkVDVEVEJyB9XG4gICAgfSlcblxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vYWNoaWV2ZW1lbnRzJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2ZpbGUnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiAn5oiQ5bCx5bey6amz5Zue77yBJ1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+mps+WbnuaIkOWwseWksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfpqbPlm57miJDlsLHlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFTQTgxQnNCLHVNQUFBIn0=
}),
"[project]/src/app/actions/data:ea7a50 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reviewRegistration",
    ()=>$$RSC_SERVER_ACTION_11
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"700184bcf6a5e75db180067246bb5eeaabfccf0821":"reviewRegistration"},"src/app/actions/admin.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("700184bcf6a5e75db180067246bb5eeaabfccf0821", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "reviewRegistration");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWRtaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSdcbmltcG9ydCB7IGF1dGggfSBmcm9tICdAY2xlcmsvbmV4dGpzL3NlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcblxuLyoqXG4gKiDpqozor4HnrqHnkIblkZjmnYPpmZDnmoTovoXliqnlh73mlbDvvIjln7rkuo7mnKzlnLAgSldUIFRva2Vu77yM6Zu2572R57uc6K+35rGC77yJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VySWQsIHNlc3Npb25DbGFpbXMgfSA9IGF3YWl0IGF1dGgoKVxuXG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5pyq55m75b2V77yM6K+35YWI55m75b2VJylcbiAgICB9XG4gICAgXG4gICAgLy8g55u05o6l5LuO5pys5ZywIEpXVCBUb2tlbiDkuK3or7vlj5Ygcm9sZe+8jOmbtue9kee7nOivt+axgu+8gVxuICAgIGNvbnN0IHJvbGUgPSAoc2Vzc2lvbkNsYWltcyBhcyBhbnkpPy5yb2xlXG4gICAgaWYgKHJvbGUgIT09ICdhZG1pbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5p2D6ZmQ5LiN6Laz77ya5oKo55qE6LSm5Y+35LiN5piv566h55CG5ZGYJylcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgdXNlcklkIH0gLy8g5LiN5YaN6L+U5Zue5a6M5pW055qEIHVzZXIg5a+56LGh77yM5Zug5Li65oiR5Lus5LiN6ZyA6KaB5LqGXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign566h55CG5ZGY5p2D6ZmQ5qCh6aqM5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IG5ldyBFcnJvcihlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfmnYPpmZDmoKHpqozpgYfliLDmnKrnn6XplJnor68nKVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W5omA5pyJ55So5oi3XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxVc2VycygpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIC8vIOS7juaVsOaNruW6k+iOt+WPlueUqOaIt+S/oeaBr++8jOS4jeWGjeS+nei1liBDbGVyayBBUElcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgY3JlYXRlZEF0OiAnZGVzYydcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g6L+U5Zue55So5oi35L+h5oGvXG4gICAgcmV0dXJuIHVzZXJzLm1hcCgodXNlcjogYW55KSA9PiAoe1xuICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICBmaXJzdE5hbWU6IHVzZXIubmFtZT8uc3BsaXQoJyAnKVswXSB8fCBudWxsLFxuICAgICAgbGFzdE5hbWU6IHVzZXIubmFtZT8uc3BsaXQoJyAnKS5zbGljZSgxKS5qb2luKCcgJykgfHwgbnVsbCxcbiAgICAgIGVtYWlsQWRkcmVzc2VzOiBbeyBlbWFpbEFkZHJlc3M6IHVzZXIuZW1haWwgfV0sXG4gICAgICBpbWFnZVVybDogbnVsbCAvLyDmlbDmja7lupPkuK3msqHmnInlrZjlgqjlpLTlg4/kv6Hmga9cbiAgICB9KSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfojrflj5bnlKjmiLfliJfooajlpLHotKU6JywgZXJyb3IpXG4gICAgXG4gICAgLy8g5qOA5p+l5piv5ZCm5piv5p2D6ZmQ6aqM6K+B6ZSZ6K+vXG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgKFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn572R57uc6K+35rGC6LaF5pe2JykgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+iupOivgeacjeWKoScpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfmnYPpmZDkuI3otrMnKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn5pyq55m75b2VJylcbiAgICApKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfmnYPpmZDpqozor4HlpLHotKXvvIzov5Tlm57nqbrmlbDnu4Q6JywgZXJyb3IubWVzc2FnZSlcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICBcbiAgICAvLyDmo4Dmn6XmmK/lkKbmmK/nvZHnu5zplJnor6/miJblhbbku5YgQVBJIOmUmeivr1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnZmV0Y2gnKSB8fCBcbiAgICAgICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCduZXR3b3JrJykgfHxcbiAgICAgICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdFQ09OTlJFRlVTRUQnKSB8fFxuICAgICAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ3RpbWVvdXQnKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfnvZHnu5zov57mjqXplJnor6/vvIzlj6/og73mmK8gQ2xlcmsg5pyN5Yqh5LiN5Y+v55SoOicsIGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnQ2xlcmtBUElSZXNwb25zZUVycm9yJykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQ2xlcmsgQVBJIOWTjeW6lOmUmeivrzonLCBlcnJvci5tZXNzYWdlKVxuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8g5qOA5p+l5piv5ZCm5pivIENsZXJrIEFQSSDnibnlrprplJnor69cbiAgICBpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAnY2xlcmtFcnJvcicgaW4gZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NsZXJrIEFQSSDplJnor6/or6bmg4U6JywgSlNPTi5zdHJpbmdpZnkoZXJyb3IsIG51bGwsIDIpKVxuICAgICAgLy8g6L+U5Zue56m65pWw57uE6ICM5LiN5piv5oqb5Ye66ZSZ6K+v77yM6Ziy5q2i6aG16Z2i5bSp5rqDXG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgXG4gICAgLy8g5YW25LuW5pyq55+l6ZSZ6K+v77yM6L+U5Zue56m65pWw57uE6Ziy5q2i6aG16Z2i5bSp5rqDXG4gICAgY29uc29sZS5lcnJvcign5pyq55+l6ZSZ6K+v57G75Z6L77yM6L+U5Zue56m65pWw57uEOicsIGVycm9yKVxuICAgIHJldHVybiBbXVxuICB9XG59XG5cbi8qKlxuICog5qC55o2u55So5oi3SUTojrflj5bmiJDlsLFcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjaGlldmVtZW50c0J5VXNlcklkKHRhcmdldFVzZXJJZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBcbiAgICBjb25zdCBhY2hpZXZlbWVudHMgPSBhd2FpdCBwcmlzbWEuYWNoaWV2ZW1lbnQuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHsgdXNlcklkOiB0YXJnZXRVc2VySWQgfSxcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gYWNoaWV2ZW1lbnRzXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W55So5oi35oiQ5bCx5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcign6I635Y+W55So5oi35oiQ5bCx5aSx6LSlJylcbiAgfVxufVxuXG4vKipcbiAqIOeuoeeQhuWRmOWIoOmZpOaIkOWwse+8iOaXoOinhuaJgOacieiAhe+8iVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRtaW5EZWxldGVBY2hpZXZlbWVudChhY2hpZXZlbWVudElkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIC8vIOebtOaOpeWIoOmZpOaIkOWwseiusOW9le+8jOS4jeajgOafpeaJgOacieiAhVxuICAgIGF3YWl0IHByaXNtYS5hY2hpZXZlbWVudC5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGFjaGlldmVtZW50SWQgfVxuICAgIH0pXG5cbiAgICAvLyDph43mlrDpqozor4HnvJPlrZjvvIzliLfmlrDnm7jlhbPpobXpnaJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3VzZXJzJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2ZpbGUnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWNoaWV2ZW1lbnRzJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ+aIkOWwseW3suaIkOWKn+WIoOmZpCdcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5Yig6Zmk5oiQ5bCx5aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+WIoOmZpOaIkOWwseWksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDliJvlu7rmlrDnq57otZvvvIjnrqHnkIblkZjmnYPpmZDvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbXBldGl0aW9uKGRhdGE6IHtcbiAgbmFtZTogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgbGV2ZWw/OiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgZGVhZGxpbmU6IHN0cmluZ1xuICBtYXhQYXJ0aWNpcGFudHM6IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gICAgXG4gICAgLy8g6aqM6K+B6L6T5YWl5pWw5o2uXG4gICAgaWYgKCFkYXRhLm5hbWUgfHwgZGF0YS5uYW1lLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn56ue6LWb5ZCN56ew5LiN6IO95Li656m6J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIWRhdGEuY2F0ZWdvcnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn6K+36YCJ5oup56ue6LWb5YiG57G7J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIWRhdGEuZGVhZGxpbmUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn6K+36YCJ5oup5oiq5q2i5pel5pyfJ1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBkZWFkbGluZURhdGUgPSBuZXcgRGF0ZShkYXRhLmRlYWRsaW5lKVxuICAgIGlmIChpc05hTihkZWFkbGluZURhdGUuZ2V0VGltZSgpKSB8fCBkZWFkbGluZURhdGUgPD0gbmV3IERhdGUoKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfmiKrmraLml6XmnJ/lv4XpobvmmK/mnKrmnaXml7bpl7QnXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG1heFBhcnRpY2lwYW50c051bSA9IHBhcnNlSW50KGRhdGEubWF4UGFydGljaXBhbnRzKVxuICAgIGlmIChpc05hTihtYXhQYXJ0aWNpcGFudHNOdW0pIHx8IG1heFBhcnRpY2lwYW50c051bSA8PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+S6uuaVsOS4iumZkOW/hemhu+aYr+Wkp+S6jjDnmoTmlbDlrZcnXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOmqjOivgeernui1m+e6p+WIq1xuICAgIGNvbnN0IHZhbGlkTGV2ZWxzID0gWyfmoKHnuqcnLCAn5biC57qnJywgJ+ecgee6pycsICflm73lrrbnuqcnLCAn5Zu96ZmF57qnJ11cbiAgICBjb25zdCBsZXZlbCA9IGRhdGEubGV2ZWwgJiYgdmFsaWRMZXZlbHMuaW5jbHVkZXMoZGF0YS5sZXZlbCkgPyBkYXRhLmxldmVsIDogJ+agoee6pydcblxuICAgIC8vIOWIm+W7uuernui1m1xuICAgIGNvbnN0IGNvbXBldGl0aW9uID0gYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IGRhdGEubmFtZS50cmltKCksXG4gICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5LFxuICAgICAgICBsZXZlbCxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24/LnRyaW0oKSB8fCAnJyxcbiAgICAgICAgZGVhZGxpbmU6IGRlYWRsaW5lRGF0ZSxcbiAgICAgICAgbWF4UGFydGljaXBhbnRzOiBtYXhQYXJ0aWNpcGFudHNOdW0sXG4gICAgICAgIGN1cnJlbnRQYXJ0aWNpcGFudHM6IDBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g5Yi35paw57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jb21wZXRpdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vY29tcGV0aXRpb25zJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgZGF0YTogY29tcGV0aXRpb24sXG4gICAgICBtZXNzYWdlOiAn56ue6LWb5Yib5bu65oiQ5Yqf77yBJ1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+WIm+W7uuernui1m+Wksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfliJvlu7rnq57otZvlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog5pu05paw56ue6LWb77yI566h55CG5ZGY5p2D6ZmQ77yJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDb21wZXRpdGlvbihpZDogc3RyaW5nLCBkYXRhOiB7XG4gIG5hbWU6IHN0cmluZ1xuICBjYXRlZ29yeTogc3RyaW5nXG4gIGxldmVsPzogc3RyaW5nXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gIGRlYWRsaW5lOiBzdHJpbmdcbiAgbWF4UGFydGljaXBhbnRzOiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIC8vIOmqjOivgei+k+WFpeaVsOaNrlxuICAgIGlmICghZGF0YS5uYW1lIHx8IGRhdGEubmFtZS50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ernui1m+WQjeensOS4jeiDveS4uuepuidcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKCFkYXRhLmNhdGVnb3J5KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ivt+mAieaLqeernui1m+WIhuexuydcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKCFkYXRhLmRlYWRsaW5lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ivt+mAieaLqeaIquatouaXpeacnydcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGVhZGxpbmVEYXRlID0gbmV3IERhdGUoZGF0YS5kZWFkbGluZSlcbiAgICBpZiAoaXNOYU4oZGVhZGxpbmVEYXRlLmdldFRpbWUoKSkgfHwgZGVhZGxpbmVEYXRlIDw9IG5ldyBEYXRlKCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5oiq5q2i5pel5pyf5b+F6aG75piv5pyq5p2l5pe26Ze0J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBtYXhQYXJ0aWNpcGFudHNOdW0gPSBwYXJzZUludChkYXRhLm1heFBhcnRpY2lwYW50cylcbiAgICBpZiAoaXNOYU4obWF4UGFydGljaXBhbnRzTnVtKSB8fCBtYXhQYXJ0aWNpcGFudHNOdW0gPD0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfkurrmlbDkuIrpmZDlv4XpobvmmK/lpKfkuo4w55qE5pWw5a2XJ1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOajgOafpeernui1m+aYr+WQpuWtmOWcqFxuICAgIGNvbnN0IGV4aXN0aW5nQ29tcGV0aXRpb24gPSBhd2FpdCBwcmlzbWEuY29tcGV0aXRpb24uZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9XG4gICAgfSlcblxuICAgIGlmICghZXhpc3RpbmdDb21wZXRpdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfnq57otZvkuI3lrZjlnKgnXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOmqjOivgeernui1m+e6p+WIq1xuICAgIGNvbnN0IHZhbGlkTGV2ZWxzID0gWyfmoKHnuqcnLCAn5biC57qnJywgJ+ecgee6pycsICflm73lrrbnuqcnLCAn5Zu96ZmF57qnJ11cbiAgICBjb25zdCBsZXZlbCA9IGRhdGEubGV2ZWwgJiYgdmFsaWRMZXZlbHMuaW5jbHVkZXMoZGF0YS5sZXZlbCkgPyBkYXRhLmxldmVsIDogJ+agoee6pydcblxuICAgIC8vIOabtOaWsOernui1m1xuICAgIGNvbnN0IGNvbXBldGl0aW9uID0gYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUudHJpbSgpLFxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgICAgbGV2ZWwsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uPy50cmltKCkgfHwgJycsXG4gICAgICAgIGRlYWRsaW5lOiBkZWFkbGluZURhdGUsXG4gICAgICAgIG1heFBhcnRpY2lwYW50czogbWF4UGFydGljaXBhbnRzTnVtXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIOWIt+aWsOe8k+WtmFxuICAgIHJldmFsaWRhdGVQYXRoKCcvY29tcGV0aXRpb25zJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL2NvbXBldGl0aW9ucycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGRhdGE6IGNvbXBldGl0aW9uLFxuICAgICAgbWVzc2FnZTogJ+ernui1m+abtOaWsOaIkOWKn++8gSdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfmm7TmlrDnq57otZvlpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5pu05paw56ue6LWb5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOWIoOmZpOernui1m++8iOeuoeeQhuWRmOadg+mZkO+8jOWuieWFqOWkhOeQhuWklumUruS+nei1lu+8iVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29tcGV0aXRpb24oaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG5cbiAgICAvLyDmo4Dmn6Xnq57otZvmmK/lkKblrZjlnKhcbiAgICBjb25zdCBleGlzdGluZ0NvbXBldGl0aW9uID0gYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQgfVxuICAgIH0pXG5cbiAgICBpZiAoIWV4aXN0aW5nQ29tcGV0aXRpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn56ue6LWb5LiN5a2Y5ZyoJ1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOS9v+eUqCBQcmlzbWEg5LqL5Yqh5a6J5YWo5Yig6Zmk56ue6LWb5Y+K5YW255u45YWz5pWw5o2uXG4gICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xuICAgICAgLy8g56ys5LiA5q2l77ya5Yig6Zmk5omA5pyJ55u45YWz55qE5oql5ZCN6K6w5b2VXG4gICAgICBhd2FpdCB0eC5yZWdpc3RyYXRpb24uZGVsZXRlTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IGNvbXBldGl0aW9uSWQ6IGlkIH1cbiAgICAgIH0pXG4gICAgICBcbiAgICAgIC8vIOesrOS6jOatpe+8muWIoOmZpOernui1m+acrOi6q1xuICAgICAgYXdhaXQgdHguY29tcGV0aXRpb24uZGVsZXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8g5Yi35paw57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jb21wZXRpdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vY29tcGV0aXRpb25zJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ+ernui1m+WIoOmZpOaIkOWKn++8gSdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfliKDpmaTnq57otZvlpLHotKU6JywgZXJyb3IpXG4gICAgXG4gICAgLy8g5qOA5p+l5piv5ZCm5piv5aSW6ZSu57qm5p2f6ZSZ6K+vXG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnZm9yZWlnbiBrZXkgY29uc3RyYWludCcpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+WIoOmZpOWksei0pe+8muivpeernui1m+S7jeacieWFs+iBlOaVsOaNru+8jOivt+WFiOWkhOeQhuebuOWFs+iusOW9lSdcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5Yig6Zmk56ue6LWb5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPluaJgOacieaMh+WvvOiAgeW4iOWIl+ihqFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGVhY2hlcnMoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBcbiAgICBjb25zdCB0ZWFjaGVycyA9IGF3YWl0IHByaXNtYS50ZWFjaGVyLmZpbmRNYW55KHtcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gdGVhY2hlcnNcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfojrflj5bogIHluIjliJfooajlpLHotKU6JywgZXJyb3IpXG4gICAgdGhyb3cgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yIDogbmV3IEVycm9yKCfojrflj5bogIHluIjliJfooajlpLHotKXvvIzor7fnqI3lkI7ph43or5UnKVxuICB9XG59XG5cbi8qKlxuICog5Yib5bu65paw5oyH5a+86ICB5biIXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUZWFjaGVyKGRhdGE6IHtcbiAgbmFtZTogc3RyaW5nXG4gIGRlcGFydG1lbnQ/OiBzdHJpbmdcbn0pIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIC8vIOmqjOivgei+k+WFpeaVsOaNrlxuICAgIGlmICghZGF0YS5uYW1lIHx8IGRhdGEubmFtZS50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+aVmeW4iOWnk+WQjeS4jeiDveS4uuepuidcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDmn6Xor6LlvZPliY3mlbDmja7lupPkuK3lhbHmnInlpJrlsJHkvY3ogIHluIhcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICAgIGNvbnN0IHRlYWNoZXJDb3VudCA9IGF3YWl0IHByaXNtYS50ZWFjaGVyLmNvdW50KClcbiAgICBcbiAgICAvLyDnlJ/miJDmoLzlvI/kuLogVCArIOW5tOS7vSArIDPkvY3mtYHmsLTlj7fnmoTmlZnluIjnvJblj7dcbiAgICBjb25zdCB0ZWFjaGVyTm8gPSBgVCR7Y3VycmVudFllYXJ9JHtTdHJpbmcodGVhY2hlckNvdW50ICsgMSkucGFkU3RhcnQoMywgJzAnKX1gXG4gICAgXG4gICAgLy8g5Yib5bu66ICB5biI6K6w5b2VXG4gICAgY29uc3QgdGVhY2hlciA9IGF3YWl0IHByaXNtYS50ZWFjaGVyLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IGRhdGEubmFtZS50cmltKCksXG4gICAgICAgIGRlcGFydG1lbnQ6IGRhdGEuZGVwYXJ0bWVudD8udHJpbSgpIHx8IG51bGwsXG4gICAgICAgIHRlYWNoZXJOb1xuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDliLfmlrDnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3RlYWNoZXJzJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgZGF0YTogdGVhY2hlcixcbiAgICAgIG1lc3NhZ2U6ICfmjIflr7zogIHluIjmt7vliqDmiJDlip/vvIEnXG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5Yib5bu66ICB5biI5aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+WIm+W7uuiAgeW4iOWksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDliKDpmaTmjIflr7zogIHluIhcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRlYWNoZXIoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG5cbiAgICAvLyDmo4Dmn6XogIHluIjmmK/lkKblrZjlnKhcbiAgICBjb25zdCBleGlzdGluZ1RlYWNoZXIgPSBhd2FpdCBwcmlzbWEudGVhY2hlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH1cbiAgICB9KVxuXG4gICAgaWYgKCFleGlzdGluZ1RlYWNoZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5oyH5a+86ICB5biI5LiN5a2Y5ZyoJ1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOajgOafpeaYr+WQpuacieWFs+iBlOeahOaKpeWQjeiusOW9lVxuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbkNvdW50ID0gYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi5jb3VudCh7XG4gICAgICB3aGVyZTogeyB0ZWFjaGVySWQ6IGlkIH1cbiAgICB9KVxuXG4gICAgaWYgKHJlZ2lzdHJhdGlvbkNvdW50ID4gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfor6XogIHluIjov5jmnInlhbPogZTnmoTmiqXlkI3orrDlvZXvvIzml6Dms5XliKDpmaQnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5Yig6Zmk6ICB5biI6K6w5b2VXG4gICAgYXdhaXQgcHJpc21hLnRlYWNoZXIuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH1cbiAgICB9KVxuXG4gICAgLy8g5Yi35paw57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi90ZWFjaGVycycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6ICfmjIflr7zogIHluIjliKDpmaTmiJDlip/vvIEnXG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5Yig6Zmk6ICB5biI5aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+WIoOmZpOiAgeW4iOWksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDojrflj5bmiYDmnInmiqXlkI3orrDlvZXvvIjnrqHnkIblkZjlrqHmibnkuJPnlKjvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFJlZ2lzdHJhdGlvbnMoKSB7XG4gIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gIFxuICB0cnkge1xuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbnMgPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmZpbmRNYW55KHtcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICBhcHBsaWNhbnROYW1lOiB0cnVlLFxuICAgICAgICBwcm9qZWN0TmFtZTogdHJ1ZSxcbiAgICAgICAgdGVhbU1lbWJlcnM6IHRydWUsXG4gICAgICAgIGNyZWF0ZWRBdDogdHJ1ZSxcbiAgICAgICAgY29tcGV0aXRpb246IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxuICAgICAgICAgICAgZGVhZGxpbmU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRlYWNoZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIHRlYWNoZXJObzogdHJ1ZSxcbiAgICAgICAgICAgIGRlcGFydG1lbnQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgZW1haWw6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb3JkZXJCeToge1xuICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJ1xuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVnaXN0cmF0aW9uc1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaKpeWQjeiusOW9leWksei0pTonLCBlcnJvcilcbiAgICB0aHJvdyBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiBuZXcgRXJyb3IoJ+iOt+WPluaKpeWQjeiusOW9leWksei0pe+8jOivt+eojeWQjumHjeivlScpXG4gIH1cbn1cblxuLyoqXG4gKiDlrqHmoLjmiqXlkI3orrDlvZVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJldmlld1JlZ2lzdHJhdGlvbihyZWdpc3RyYXRpb25JZDogc3RyaW5nLCBzdGF0dXM6IHN0cmluZywgZmVlZGJhY2s/OiBzdHJpbmcpIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgLy8g6aqM6K+B54q25oCB5YC8XG4gICAgY29uc3QgdmFsaWRTdGF0dXNlcyA9IFsnUEVORElORycsICdBUFBST1ZFRCcsICdSRUpFQ1RFRF9SRVRSWScsICdSRUpFQ1RFRF9GSU5BTCddXG4gICAgaWYgKCF2YWxpZFN0YXR1c2VzLmluY2x1ZGVzKHN0YXR1cykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5peg5pWI55qE5a6h5om554q25oCBJylcbiAgICB9XG5cbiAgICAvLyDlpoLmnpznirbmgIHkuLogUkVKRUNURURfUkVUUlkg5oiWIFJFSkVDVEVEX0ZJTkFM77yM5b+F6aG75o+Q5L6b5Y+N6aaI5oSP6KeBXG4gICAgaWYgKChzdGF0dXMgPT09ICdSRUpFQ1RFRF9SRVRSWScgfHwgc3RhdHVzID09PSAnUkVKRUNURURfRklOQUwnKSAmJiAoIWZlZWRiYWNrIHx8IGZlZWRiYWNrLnRyaW0oKS5sZW5ndGggPT09IDApKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ+mps+WbnueUs+ivt+aXtuW/hemhu+aPkOS+m+WPjemmiOaEj+ingScpXG4gICAgfVxuXG4gICAgLy8g5qOA5p+l5oql5ZCN6K6w5b2V5piv5ZCm5a2Y5ZyoXG4gICAgY29uc3QgZXhpc3RpbmdSZWdpc3RyYXRpb24gPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHJlZ2lzdHJhdGlvbklkIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIGNvbXBldGl0aW9uOiB0cnVlLFxuICAgICAgICB1c2VyOiB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghZXhpc3RpbmdSZWdpc3RyYXRpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5oql5ZCN6K6w5b2V5LiN5a2Y5ZyoJylcbiAgICB9XG5cbiAgICAvLyDmm7TmlrDmiqXlkI3orrDlvZVcbiAgICBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogcmVnaXN0cmF0aW9uSWQgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBmZWVkYmFjazogZmVlZGJhY2s/LnRyaW0oKSB8fCBudWxsXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIE5PVEU6IOWuoeaJueaTjeS9nOWQjuWQjOatpSBjdXJyZW50UGFydGljaXBhbnRzIOS4uuecn+WunuiuoeaVsOWAvFxuICAgIGNvbnN0IHVwZGF0ZWRDb3VudCA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uY291bnQoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgY29tcGV0aXRpb25JZDogZXhpc3RpbmdSZWdpc3RyYXRpb24uY29tcGV0aXRpb25JZCxcbiAgICAgICAgc3RhdHVzOiB7IG5vdEluOiBbJ1JFSkVDVEVEX0ZJTkFMJ10gfVxuICAgICAgfVxuICAgIH0pXG4gICAgYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogZXhpc3RpbmdSZWdpc3RyYXRpb24uY29tcGV0aXRpb25JZCB9LFxuICAgICAgZGF0YTogeyBjdXJyZW50UGFydGljaXBhbnRzOiB1cGRhdGVkQ291bnQgfVxuICAgIH0pXG5cbiAgICAvLyDph43mlrDpqozor4HnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3JlZ2lzdHJhdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvZmlsZScpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jb21wZXRpdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vY29tcGV0aXRpb25zJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL2FjaGlldmVtZW50cycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IHN0YXR1cyA9PT0gJ0FQUFJPVkVEJyA/ICfmiqXlkI3lt7LpgJrov4fvvIzlt7Loh6rliqjnlJ/miJDmiJDlsLHorrDlvZXvvIEnIDogJ+aKpeWQjeW3suabtOaWsCdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCflrqHmoLjmiqXlkI3lpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5a6h5qC45aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPlueuoeeQhuWRmOaOp+WItuWPsOe7n+iuoeaVsOaNrlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGFzaGJvYXJkU3RhdHMoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBcbiAgICAvLyDku47mlbDmja7lupPojrflj5bnlKjmiLfmgLvmlbDvvIzkuI3lho3kvp3otZYgQ2xlcmsgQVBJXG4gICAgbGV0IHRvdGFsVXNlcnMgPSAwXG4gICAgdHJ5IHtcbiAgICAgIHRvdGFsVXNlcnMgPSBhd2FpdCBwcmlzbWEudXNlci5jb3VudCgpXG4gICAgfSBjYXRjaCAoZGJFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcign6I635Y+W55So5oi35oC75pWw5aSx6LSlOicsIGRiRXJyb3IpXG4gICAgICB0b3RhbFVzZXJzID0gMCAvLyDkvb/nlKjpu5jorqTlgLxcbiAgICB9XG4gICAgXG4gICAgLy8g5bm26KGM6I635Y+W5YW25LuW57uf6K6h5pWw5o2uXG4gICAgY29uc3QgW1xuICAgICAgdG90YWxDb21wZXRpdGlvbnMsXG4gICAgICB0b3RhbFJlZ2lzdHJhdGlvbnMsXG4gICAgICBwZW5kaW5nUmV2aWV3cyxcbiAgICAgIGNhdGVnb3J5U3RhdHMsXG4gICAgICB0b3BDb21wZXRpdGlvbnMsXG4gICAgICByZWNlbnRQZW5kaW5nXG4gICAgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIC8vIOi1m+S6i+aAu+aVsFxuICAgICAgcHJpc21hLmNvbXBldGl0aW9uLmNvdW50KCksXG4gICAgICBcbiAgICAgIC8vIOaKpeWQjeaAu+aVsFxuICAgICAgcHJpc21hLnJlZ2lzdHJhdGlvbi5jb3VudCgpLFxuICAgICAgXG4gICAgICAvLyDlvoXlrqHmoLjmlbDph49cbiAgICAgIHByaXNtYS5yZWdpc3RyYXRpb24uY291bnQoe1xuICAgICAgICB3aGVyZTogeyBzdGF0dXM6ICdQRU5ESU5HJyB9XG4gICAgICB9KSxcbiAgICAgIFxuICAgICAgLy8g5oyJ5YiG57G757uf6K6h6LWb5LqL5pWw6YePXG4gICAgICBwcmlzbWEuY29tcGV0aXRpb24uZ3JvdXBCeSh7XG4gICAgICAgIGJ5OiBbJ2NhdGVnb3J5J10sXG4gICAgICAgIF9jb3VudDoge1xuICAgICAgICAgIGlkOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgXG4gICAgICAvLyDmiqXlkI3kurrmlbDmnIDlpJrnmoTliY015Liq6LWb5LqLXG4gICAgICBwcmlzbWEuY29tcGV0aXRpb24uZmluZE1hbnkoe1xuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgIF9jb3VudDoge1xuICAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbnM6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgICByZWdpc3RyYXRpb25zOiB7XG4gICAgICAgICAgICBfY291bnQ6ICdkZXNjJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGFrZTogNVxuICAgICAgfSksXG4gICAgICBcbiAgICAgIC8vIOacgOaWsDXmnaHlvoXlrqHmoLjmiqXlkI1cbiAgICAgIHByaXNtYS5yZWdpc3RyYXRpb24uZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyBzdGF0dXM6ICdQRU5ESU5HJyB9LFxuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICBhcHBsaWNhbnROYW1lOiB0cnVlLFxuICAgICAgICAgIGNvbXBldGl0aW9uOiB7XG4gICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgbmFtZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxuICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICBuYW1lOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcmRlckJ5OiB7XG4gICAgICAgICAgY3JlYXRlZEF0OiAnZGVzYydcbiAgICAgICAgfSxcbiAgICAgICAgdGFrZTogNVxuICAgICAgfSlcbiAgICBdKVxuXG4gICAgLy8g5aSE55CG5YiG57G757uf6K6h5pWw5o2u77yM5ZCI5bm255u45Ly85YiG57G7XG4gICAgY29uc3QgcHJvY2Vzc2VkQ2F0ZWdvcnlTdGF0cyA9IGNhdGVnb3J5U3RhdHMucmVkdWNlKChhY2M6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH1bXSwgaXRlbTogYW55KSA9PiB7XG4gICAgICBjb25zdCBjYXRlZ29yeSA9IGl0ZW0uY2F0ZWdvcnkgfHwgJ+WFtuS7lidcbiAgICAgIGNvbnN0IGV4aXN0aW5nSXRlbSA9IGFjYy5maW5kKChzdGF0OiB7IG5hbWU6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9KSA9PiBzdGF0Lm5hbWUgPT09IGNhdGVnb3J5KVxuICAgICAgXG4gICAgICBpZiAoZXhpc3RpbmdJdGVtKSB7XG4gICAgICAgIGV4aXN0aW5nSXRlbS52YWx1ZSArPSBpdGVtLl9jb3VudC5pZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgIG5hbWU6IGNhdGVnb3J5LFxuICAgICAgICAgIHZhbHVlOiBpdGVtLl9jb3VudC5pZFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSwgW10gYXMgeyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfVtdKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsVXNlcnMsXG4gICAgICB0b3RhbENvbXBldGl0aW9ucyxcbiAgICAgIHRvdGFsUmVnaXN0cmF0aW9ucyxcbiAgICAgIHBlbmRpbmdSZXZpZXdzLFxuICAgICAgY2F0ZWdvcnlTdGF0czogcHJvY2Vzc2VkQ2F0ZWdvcnlTdGF0cyxcbiAgICAgIHRvcENvbXBldGl0aW9uczogdG9wQ29tcGV0aXRpb25zLm1hcCgoY29tcDogYW55KSA9PiAoe1xuICAgICAgICBuYW1lOiBjb21wLm5hbWUsXG4gICAgICAgIHJlZ2lzdHJhdGlvbnM6IGNvbXAuX2NvdW50LnJlZ2lzdHJhdGlvbnNcbiAgICAgIH0pKSxcbiAgICAgIHJlY2VudFBlbmRpbmc6IHJlY2VudFBlbmRpbmcubWFwKChyZWc6IGFueSkgPT4gKHtcbiAgICAgICAgaWQ6IHJlZy5pZCxcbiAgICAgICAgYXBwbGljYW50TmFtZTogcmVnLmFwcGxpY2FudE5hbWUgfHwgcmVnLnVzZXI/Lm5hbWUgfHwgJ+acquefpScsXG4gICAgICAgIGNvbXBldGl0aW9uTmFtZTogcmVnLmNvbXBldGl0aW9uLm5hbWUsXG4gICAgICAgIGNyZWF0ZWRBdDogcmVnLmNyZWF0ZWRBdFxuICAgICAgfSkpXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluS7quihqOadv+e7n+iuoeaVsOaNruWksei0pTonLCBlcnJvcilcbiAgICBcbiAgICAvLyDlpoLmnpzmmK/mnYPpmZDpqozor4HplJnor6/vvIzov5Tlm57pu5jorqTnu5/orqHmlbDmja5cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAoXG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfnvZHnu5zor7fmsYLotoXml7YnKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn6K6k6K+B5pyN5YqhJykgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+adg+mZkOS4jei2sycpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfmnKrnmbvlvZUnKVxuICAgICkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+adg+mZkOmqjOivgeWksei0pe+8jOi/lOWbnum7mOiupOe7n+iuoeaVsOaNrjonLCBlcnJvci5tZXNzYWdlKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG90YWxVc2VyczogMCxcbiAgICAgICAgdG90YWxDb21wZXRpdGlvbnM6IDAsXG4gICAgICAgIHRvdGFsUmVnaXN0cmF0aW9uczogMCxcbiAgICAgICAgcGVuZGluZ1Jldmlld3M6IDAsXG4gICAgICAgIGNhdGVnb3J5U3RhdHM6IFtdLFxuICAgICAgICB0b3BDb21wZXRpdGlvbnM6IFtdLFxuICAgICAgICByZWNlbnRQZW5kaW5nOiBbXVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyDlhbbku5bplJnor6/kuZ/ov5Tlm57pu5jorqTnu5/orqHmlbDmja7vvIzpmLLmraLpobXpnaLltKnmuoNcbiAgICBjb25zb2xlLmVycm9yKCfmnKrnn6XplJnor6/vvIzov5Tlm57pu5jorqTnu5/orqHmlbDmja46JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsVXNlcnM6IDAsXG4gICAgICB0b3RhbENvbXBldGl0aW9uczogMCxcbiAgICAgIHRvdGFsUmVnaXN0cmF0aW9uczogMCxcbiAgICAgIHBlbmRpbmdSZXZpZXdzOiAwLFxuICAgICAgY2F0ZWdvcnlTdGF0czogW10sXG4gICAgICB0b3BDb21wZXRpdGlvbnM6IFtdLFxuICAgICAgcmVjZW50UGVuZGluZzogW11cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDmibnph4/lr7zlhaXmjIflr7zogIHluIhcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJhdGNoSW1wb3J0VGVhY2hlcnModGVhY2hlcnNEYXRhOiB7IG5hbWU6IHN0cmluZzsgZGVwYXJ0bWVudD86IHN0cmluZyB9W10pIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgLy8g6I635Y+W5b2T5YmN5bm05Lu9XG4gICAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcbiAgICBjb25zdCB5ZWFyUHJlZml4ID0gYFQke2N1cnJlbnRZZWFyfWBcbiAgICBcbiAgICAvLyDmn6Xor6LlvZPliY3lubTku73mnIDmlrDnmoTmlZnluIjnvJblj7dcbiAgICBjb25zdCBsYXRlc3RUZWFjaGVyID0gYXdhaXQgcHJpc21hLnRlYWNoZXIuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHRlYWNoZXJObzoge1xuICAgICAgICAgIHN0YXJ0c1dpdGg6IHllYXJQcmVmaXhcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgdGVhY2hlck5vOiAnZGVzYydcbiAgICAgIH1cbiAgICB9KVxuICAgIFxuICAgIC8vIOiuoeeul+i1t+Wni+a1geawtOWPt1xuICAgIGxldCBzZXJpYWxOdW1iZXIgPSAxXG4gICAgaWYgKGxhdGVzdFRlYWNoZXIpIHtcbiAgICAgIGNvbnN0IGxhdGVzdFNlcmlhbCA9IHBhcnNlSW50KGxhdGVzdFRlYWNoZXIudGVhY2hlck5vLnNsaWNlKC0zKSlcbiAgICAgIGlmICghaXNOYU4obGF0ZXN0U2VyaWFsKSkge1xuICAgICAgICBzZXJpYWxOdW1iZXIgPSBsYXRlc3RTZXJpYWwgKyAxXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOagvOW8j+WMluaVmeW4iOaVsOaNrlxuICAgIGNvbnN0IGZvcm1hdHRlZFRlYWNoZXJzID0gdGVhY2hlcnNEYXRhLm1hcCgodGVhY2hlciwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlYWNoZXJObyA9IGAke3llYXJQcmVmaXh9JHtzZXJpYWxOdW1iZXIudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfWBcbiAgICAgIHNlcmlhbE51bWJlcisrXG4gICAgICBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHRlYWNoZXIubmFtZS50cmltKCksXG4gICAgICAgIGRlcGFydG1lbnQ6IHRlYWNoZXIuZGVwYXJ0bWVudD8udHJpbSgpIHx8IG51bGwsXG4gICAgICAgIHRlYWNoZXJOb1xuICAgICAgfVxuICAgIH0pXG4gICAgXG4gICAgLy8g5om56YeP5o+S5YWl5pWw5o2u5bqTXG4gICAgYXdhaXQgcHJpc21hLnRlYWNoZXIuY3JlYXRlTWFueSh7XG4gICAgICBkYXRhOiBmb3JtYXR0ZWRUZWFjaGVyc1xuICAgIH0pXG4gICAgXG4gICAgLy8g6YeN5paw6aqM6K+B57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi90ZWFjaGVycycpXG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBjb3VudDogZm9ybWF0dGVkVGVhY2hlcnMubGVuZ3RoLFxuICAgICAgbWVzc2FnZTogYOaIkOWKn+WvvOWFpSAke2Zvcm1hdHRlZFRlYWNoZXJzLmxlbmd0aH0g5L2N5oyH5a+86ICB5biIYFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfmibnph4/lr7zlhaXmjIflr7zogIHluIjlpLHotKU6JywgZXJyb3IpXG4gICAgdGhyb3cgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yIDogbmV3IEVycm9yKCfmibnph4/lr7zlhaXlpLHotKXvvIzor7fnqI3lkI7ph43or5UnKVxuICB9XG59XG5cbi8qKlxuICog5om56YeP5a6h5om55oql5ZCN6K6w5b2VXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBiYXRjaFJldmlld1JlZ2lzdHJhdGlvbnMoXG4gIGlkczogc3RyaW5nW10sIFxuICBzdGF0dXM6ICdBUFBST1ZFRCcgfCAnUkVKRUNURURfUkVUUlknIHwgJ1JFSkVDVEVEX0ZJTkFMJywgXG4gIGZlZWRiYWNrPzogc3RyaW5nXG4pIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgLy8g6aqM6K+B54q25oCB5YC8XG4gICAgY29uc3QgdmFsaWRTdGF0dXNlcyA9IFsnQVBQUk9WRUQnLCAnUkVKRUNURURfUkVUUlknLCAnUkVKRUNURURfRklOQUwnXVxuICAgIGlmICghdmFsaWRTdGF0dXNlcy5pbmNsdWRlcyhzdGF0dXMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ+aXoOaViOeahOWuoeaJueeKtuaAgScpXG4gICAgfVxuXG4gICAgLy8g5aaC5p6c54q25oCB5Li6IFJFSkVDVEVEX1JFVFJZIOaIliBSRUpFQ1RFRF9GSU5BTO+8jOW/hemhu+aPkOS+m+WPjemmiOaEj+ingVxuICAgIGlmICgoc3RhdHVzID09PSAnUkVKRUNURURfUkVUUlknIHx8IHN0YXR1cyA9PT0gJ1JFSkVDVEVEX0ZJTkFMJykgJiYgKCFmZWVkYmFjayB8fCBmZWVkYmFjay50cmltKCkubGVuZ3RoID09PSAwKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfpqbPlm57nlLPor7fml7blv4Xpobvmj5Dkvpvlj43ppojmhI/op4EnKVxuICAgIH1cblxuICAgIC8vIOmqjOivgUlE5pWw57uEXG4gICAgaWYgKCFpZHMgfHwgaWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfor7fpgInmi6nopoHlrqHmibnnmoTmiqXlkI3orrDlvZUnKVxuICAgIH1cblxuICAgIC8vIOiOt+WPluimgeabtOaWsOeahOaKpeWQjeiusOW9leivpuaDhe+8iOeUqOS6jueUn+aIkOaIkOWwse+8iVxuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbnNUb1VwZGF0ZSA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHsgXG4gICAgICAgIGlkOiB7IGluOiBpZHMgfVxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgY29tcGV0aXRpb246IHRydWUsXG4gICAgICAgIHVzZXI6IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g5om56YeP5pu05paw5oql5ZCN6K6w5b2VXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi51cGRhdGVNYW55KHtcbiAgICAgIHdoZXJlOiB7IFxuICAgICAgICBpZDogeyBpbjogaWRzIH1cbiAgICAgIH0sXG4gICAgICBkYXRhOiB7IFxuICAgICAgICBzdGF0dXMsIFxuICAgICAgICBmZWVkYmFjazogZmVlZGJhY2s/LnRyaW0oKSB8fCBudWxsIFxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBOT1RFOiDmibnph4/lrqHmibnlkI7lkIzmraXmiYDmnInmtonlj4rnq57otZvnmoQgY3VycmVudFBhcnRpY2lwYW50c1xuICAgIGNvbnN0IGFmZmVjdGVkQ29tcGV0aXRpb25JZHMgPSBbLi4ubmV3IFNldChyZWdpc3RyYXRpb25zVG9VcGRhdGUubWFwKChyOiBhbnkpID0+IHIuY29tcGV0aXRpb25JZCkpXVxuICAgIGZvciAoY29uc3QgY29tcElkIG9mIGFmZmVjdGVkQ29tcGV0aXRpb25JZHMpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRDb3VudCA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uY291bnQoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGNvbXBldGl0aW9uSWQ6IGNvbXBJZCxcbiAgICAgICAgICBzdGF0dXM6IHsgbm90SW46IFsnUkVKRUNURURfRklOQUwnXSB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBhd2FpdCBwcmlzbWEuY29tcGV0aXRpb24udXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IGNvbXBJZCB9LFxuICAgICAgICBkYXRhOiB7IGN1cnJlbnRQYXJ0aWNpcGFudHM6IHVwZGF0ZWRDb3VudCB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIOmHjeaWsOmqjOivgee8k+WtmFxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vcmVnaXN0cmF0aW9ucycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9maWxlJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9jb21wZXRpdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vYWNoaWV2ZW1lbnRzJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgY291bnQ6IHJlc3VsdC5jb3VudCxcbiAgICAgIG1lc3NhZ2U6IHN0YXR1cyA9PT0gJ0FQUFJPVkVEJyBcbiAgICAgICAgPyBg5oiQ5Yqf6YCa6L+HICR7cmVzdWx0LmNvdW50fSDmnaHmiqXlkI3nlLPor7fvvIzlt7Loh6rliqjnlJ/miJDmiJDlsLHorrDlvZXvvIFgIFxuICAgICAgICA6IGDmiJDlip/lpITnkIYgJHtyZXN1bHQuY291bnR9IOadoeaKpeWQjeiusOW9lWBcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5om56YeP5a6h5om55aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+aJuemHj+WuoeaJueWksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDojrflj5bmiYDmnInnlKjmiLfnmoTmiJDlsLHorrDlvZXvvIjnrqHnkIblkZjkuJPnlKjvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEFjaGlldmVtZW50cygpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIGNvbnN0IGFjaGlldmVtZW50cyA9IGF3YWl0IHByaXNtYS5hY2hpZXZlbWVudC5maW5kTWFueSh7XG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIGVtYWlsOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb3JkZXJCeToge1xuICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJ1xuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gYWNoaWV2ZW1lbnRzXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W5oiQ5bCx6K6w5b2V5aSx6LSlOicsIGVycm9yKVxuICAgIFxuICAgIC8vIOWmguaenOaYr+adg+mZkOmqjOivgemUmeivr++8jOi/lOWbnuepuuaVsOe7hOiAjOS4jeaYr+aKm+WHuumUmeivr1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIChcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+e9kee7nOivt+axgui2heaXticpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCforqTor4HmnI3liqEnKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn5p2D6ZmQ5LiN6LazJykgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+acqueZu+W9lScpXG4gICAgKSkge1xuICAgICAgY29uc29sZS5lcnJvcign5p2D6ZmQ6aqM6K+B5aSx6LSl77yM6L+U5Zue56m65pWw57uEOicsIGVycm9yLm1lc3NhZ2UpXG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgXG4gICAgLy8g5YW25LuW6ZSZ6K+v5Lmf6L+U5Zue56m65pWw57uE77yM6Ziy5q2i6aG16Z2i5bSp5rqDXG4gICAgY29uc29sZS5lcnJvcign5pyq55+l6ZSZ6K+v77yM6L+U5Zue56m65pWw57uEOicsIGVycm9yKVxuICAgIHJldHVybiBbXVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W5a+85Ye65pWw5o2uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBvcnREYXRhKGNvbXBldGl0aW9uSWQ6IHN0cmluZykge1xuICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICBcbiAgdHJ5IHtcbiAgICAvLyDmn6Xor6Lor6XotZvkuovkuIvmiYDmnInlt7LpgJrov4fnmoTmiqXlkI3orrDlvZVcbiAgICBjb25zdCByZWdpc3RyYXRpb25zID0gYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjb21wZXRpdGlvbklkLFxuICAgICAgICBzdGF0dXM6ICdBUFBST1ZFRCdcbiAgICAgIH0sXG4gICAgICAvLyDmoLjlv4PkvJjljJbvvJrlj6rmn6Xor6Lov5kgNiDkuKrliY3nq6/nnJ/mraPpnIDopoHnmoTlrZfmrrXvvIzkuKLlvIMgaWTjgIF1c2VySWTjgIHnirbmgIHnrYnlhpfkvZnmlbDmja5cbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBhcHBsaWNhbnROYW1lOiB0cnVlLFxuICAgICAgICBwcm9qZWN0TmFtZTogdHJ1ZSxcbiAgICAgICAgdGVhbU1lbWJlcnM6IHRydWUsXG4gICAgICAgIG5vdGVzOiB0cnVlLFxuICAgICAgICBjcmVhdGVkQXQ6IHRydWUsXG4gICAgICAgIHRlYWNoZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgICBkZXBhcnRtZW50OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb3JkZXJCeToge1xuICAgICAgICBjcmVhdGVkQXQ6ICdhc2MnXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIOaJgeW5s+WMluagvOW8j+WMluaVsOaNrlxuICAgIGNvbnN0IGV4cG9ydERhdGEgPSByZWdpc3RyYXRpb25zLm1hcCgocmVnOiBhbnkpID0+ICh7XG4gICAgICDnlLPor7fkuro6IHJlZy5hcHBsaWNhbnROYW1lIHx8ICfmnKrnn6UnLFxuICAgICAg5L2c5ZOB5ZCN56ewOiByZWcucHJvamVjdE5hbWUgfHwgJ+aXoCcsXG4gICAgICDlm6LpmJ/miJDlkZg6IHJlZy50ZWFtTWVtYmVycyB8fCAn5pegJyxcbiAgICAgIOaMh+WvvOiAgeW4iDogcmVnLnRlYWNoZXI/Lm5hbWUgfHwgJ+aXoCcsXG4gICAgICDogIHluIjlrabpmaI6IHJlZy50ZWFjaGVyPy5kZXBhcnRtZW50IHx8ICfml6AnLFxuICAgICAg5oql5ZCN6K+05piOOiByZWcubm90ZXMgfHwgJ+aXoCcsXG4gICAgICDmj5DkuqTml7bpl7Q6IHJlZy5jcmVhdGVkQXQudG9Mb2NhbGVEYXRlU3RyaW5nKCd6aC1DTicsIHtcbiAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICBtb250aDogJzItZGlnaXQnLFxuICAgICAgICBkYXk6ICcyLWRpZ2l0J1xuICAgICAgfSlcbiAgICB9KSlcblxuICAgIHJldHVybiBleHBvcnREYXRhXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W5a+85Ye65pWw5o2u5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcign6I635Y+W5a+85Ye65pWw5o2u5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJylcbiAgfVxufVxuXG4vKipcbiAqIOWIh+aNouernui1m+W9kuaho+eKtuaAgVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG9nZ2xlQ29tcGV0aXRpb25BcmNoaXZlKGlkOiBzdHJpbmcsIGN1cnJlbnRTdGF0dXM6IGJvb2xlYW4pIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgLy8g5pu05paw56ue6LWb54q25oCBXG4gICAgY29uc3QgbmV3U3RhdHVzID0gIWN1cnJlbnRTdGF0dXNcbiAgICBjb25zdCBjb21wZXRpdGlvbiA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGE6IHsgaXNBY3RpdmU6IG5ld1N0YXR1cyB9XG4gICAgfSlcblxuICAgIC8vIOmHjeaWsOmqjOivgee8k+WtmFxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vY29tcGV0aXRpb25zJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGRhdGE6IGNvbXBldGl0aW9uLFxuICAgICAgbWVzc2FnZTogbmV3U3RhdHVzID8gJ+ernui1m+W3sumHjeaWsOS4iuaeticgOiAn56ue6LWb5bey5b2S5qGjJ1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfliIfmjaLnq57otZvnirbmgIHlpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5YiH5o2i56ue6LWb54q25oCB5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOWuoeaguOmAmui/h+aIkOWwsVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBwcm92ZUFjaGlldmVtZW50KGFjaGlldmVtZW50SWQ6IHN0cmluZykge1xuICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICBcbiAgdHJ5IHtcbiAgICBjb25zdCBhY2hpZXZlbWVudCA9IGF3YWl0IHByaXNtYS5hY2hpZXZlbWVudC5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBhY2hpZXZlbWVudElkIH1cbiAgICB9KVxuXG4gICAgaWYgKCFhY2hpZXZlbWVudCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfmiJDlsLHorrDlvZXkuI3lrZjlnKgnXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXdhaXQgcHJpc21hLmFjaGlldmVtZW50LnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogYWNoaWV2ZW1lbnRJZCB9LFxuICAgICAgZGF0YTogeyBzdGF0dXM6ICdBUFBST1ZFRCcgfVxuICAgIH0pXG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL2FjaGlldmVtZW50cycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9maWxlJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ+aIkOWwseWuoeaguOmAmui/h++8gSdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCflrqHmoLjpgJrov4fmiJDlsLHlpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5a6h5qC46YCa6L+H5oiQ5bCx5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOmps+WbnuaIkOWwsVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVqZWN0QWNoaWV2ZW1lbnQoYWNoaWV2ZW1lbnRJZDogc3RyaW5nKSB7XG4gIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gIFxuICB0cnkge1xuICAgIGNvbnN0IGFjaGlldmVtZW50ID0gYXdhaXQgcHJpc21hLmFjaGlldmVtZW50LmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGFjaGlldmVtZW50SWQgfVxuICAgIH0pXG5cbiAgICBpZiAoIWFjaGlldmVtZW50KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+aIkOWwseiusOW9leS4jeWtmOWcqCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuYWNoaWV2ZW1lbnQudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBhY2hpZXZlbWVudElkIH0sXG4gICAgICBkYXRhOiB7IHN0YXR1czogJ1JFSkVDVEVEJyB9XG4gICAgfSlcblxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vYWNoaWV2ZW1lbnRzJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2ZpbGUnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiAn5oiQ5bCx5bey6amz5Zue77yBJ1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+mps+WbnuaIkOWwseWksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfpqbPlm57miJDlsLHlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IitSQXdqQnNCLGlNQUFBIn0=
}),
"[project]/src/components/admin/registration-data-table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RegistrationDataTable",
    ()=>RegistrationDataTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$review$2d$registration$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/review-registration-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$cc23b1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:cc23b1 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$ea7a50__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:ea7a50 [app-client] (ecmascript) <text/javascript>");
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
function RegistrationDataTable({ registrations }) {
    _s();
    const [selectedIds, setSelectedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // 乐观更新：接管本地状态
    const [optimisticRegistrations, addOptimisticUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimistic"])(registrations, {
        "RegistrationDataTable.useOptimistic": (currentState, update)=>{
            return currentState.map({
                "RegistrationDataTable.useOptimistic": (reg)=>update.ids.includes(reg.id) ? {
                        ...reg,
                        status: update.status
                    } : reg
            }["RegistrationDataTable.useOptimistic"]);
        }
    }["RegistrationDataTable.useOptimistic"]);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    // 获取所有待审批的记录ID（基于乐观状态）
    const pendingIds = optimisticRegistrations.filter((reg)=>reg.status === 'PENDING').map((reg)=>reg.id);
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
    const handleBatchApprove = ()=>{
        if (selectedIds.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('请选择要审批的记录');
            return;
        }
        startTransition(async ()=>{
            // 1. 瞬间欺骗视觉：本地直接将状态改为 APPROVED
            addOptimisticUpdate({
                ids: selectedIds,
                status: 'APPROVED'
            });
            // 2. 后台静默发送真实请求
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$cc23b1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["batchReviewRegistrations"])(selectedIds, 'APPROVED');
                if (result.success) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`成功通过 ${result.count} 条报名申请`);
                    setSelectedIds([]);
                // 注意：成功后不要手动重置状态，Next.js 收到最新 Server 数据后会自动替换
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(result.message || '批量审批失败');
                }
            } catch (error) {
                console.error('批量审批失败:', error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('网络异常，审批状态已回滚');
            // 失败时，React 会自动用服务器的旧数据覆盖掉乐观状态，实现无缝回滚
            }
        });
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: config.variant,
            children: config.label
        }, void 0, false, {
            fileName: "[project]/src/components/admin/registration-data-table.tsx",
            lineNumber: 109,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "报名审批管理"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/registration-data-table.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: [
                    selectedIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 mb-4 bg-blue-50 rounded-lg border border-blue-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-blue-800",
                                children: [
                                    "已选择 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: selectedIds.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                        lineNumber: 122,
                                        columnNumber: 19
                                    }, this),
                                    " 项待审批记录"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleBatchApprove,
                                disabled: isPending,
                                className: "bg-green-600 hover:bg-green-700",
                                children: isPending ? '处理中...' : '批量通过'
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full border-collapse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left p-3 font-medium",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: selectedIds.length === pendingIds.length && pendingIds.length > 0,
                                                        onChange: toggleAll,
                                                        className: "rounded border-gray-300",
                                                        disabled: pendingIds.length === 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left p-3 font-medium",
                                                    children: "申请人"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left p-3 font-medium",
                                                    children: "比赛名称"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left p-3 font-medium",
                                                    children: "项目名称"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left p-3 font-medium",
                                                    children: "指导老师"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left p-3 font-medium",
                                                    children: "申请时间"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left p-3 font-medium",
                                                    children: "状态"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "text-left p-3 font-medium",
                                                    children: "操作"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: optimisticRegistrations.map((registration)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b hover:bg-gray-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3",
                                                        children: registration.status === 'PENDING' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: selectedIds.includes(registration.id),
                                                            onChange: ()=>toggleOne(registration.id),
                                                            className: "rounded border-gray-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium truncate max-w-[150px]",
                                                                    children: registration.applicantName || registration.user.name || '未知'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                                    lineNumber: 177,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-500 truncate max-w-[150px]",
                                                                    children: registration.user.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                                    lineNumber: 180,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium truncate max-w-[150px]",
                                                                    children: registration.competition.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                                    lineNumber: 189,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-500 truncate max-w-[150px]",
                                                                    children: registration.competition.category
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                                    lineNumber: 190,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "truncate max-w-[150px] break-all",
                                                            children: registration.projectName || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-400",
                                                                children: "未填写"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3",
                                                        children: registration.teacher ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium",
                                                                    children: registration.teacher.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                                    lineNumber: 209,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-500",
                                                                    children: registration.teacher.department
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-400",
                                                            children: "未选择"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
                                                        lineNumber: 220,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3",
                                                        children: getStatusBadge(registration.status)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$review$2d$registration$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReviewRegistrationDialog"], {
                                                            registration: registration,
                                                            onReview: async (id, status, feedback)=>{
                                                                return new Promise((resolve)=>{
                                                                    startTransition(async ()=>{
                                                                        // 1. 瞬间欺骗视觉：本地直接将状态改为新状态
                                                                        addOptimisticUpdate({
                                                                            ids: [
                                                                                id
                                                                            ],
                                                                            status
                                                                        });
                                                                        // 2. 后台静默发送真实请求
                                                                        try {
                                                                            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$ea7a50__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["reviewRegistration"])(id, status, feedback);
                                                                            if (result.success) {
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(result.message);
                                                                            } else {
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(result.message);
                                                                            }
                                                                            resolve(result);
                                                                        // 注意：成功后不要手动重置状态，Next.js 收到最新 Server 数据后会自动替换
                                                                        } catch (error) {
                                                                            console.error('审批失败:', error);
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('网络异常，审批状态已回滚');
                                                                            // 失败时，React 会自动用服务器的旧数据覆盖掉乐观状态，实现无缝回滚
                                                                            resolve({
                                                                                success: false,
                                                                                message: '网络异常'
                                                                            });
                                                                        }
                                                                    });
                                                                });
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, registration.id, true, {
                                                fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            optimisticRegistrations.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-8 text-gray-500",
                                children: "暂无报名记录"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/registration-data-table.tsx",
                                lineNumber: 272,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/registration-data-table.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/registration-data-table.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/registration-data-table.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s(RegistrationDataTable, "DsX3nxB77TbTTEcsviApfpGpFgg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimistic"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = RegistrationDataTable;
var _c;
__turbopack_context__.k.register(_c, "RegistrationDataTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_45ea5e83._.js.map