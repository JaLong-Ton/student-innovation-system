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
"[project]/src/app/actions/data:f9508f [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWRtaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSdcbmltcG9ydCB7IGF1dGggfSBmcm9tICdAY2xlcmsvbmV4dGpzL3NlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcblxuLyoqXG4gKiDpqozor4HnrqHnkIblkZjmnYPpmZDnmoTovoXliqnlh73mlbDvvIjln7rkuo7mnKzlnLAgSldUIFRva2Vu77yM6Zu2572R57uc6K+35rGC77yJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VySWQsIHNlc3Npb25DbGFpbXMgfSA9IGF3YWl0IGF1dGgoKVxuXG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5pyq55m75b2V77yM6K+35YWI55m75b2VJylcbiAgICB9XG4gICAgXG4gICAgLy8g55u05o6l5LuO5pys5ZywIEpXVCBUb2tlbiDkuK3or7vlj5Ygcm9sZe+8jOmbtue9kee7nOivt+axgu+8gVxuICAgIGNvbnN0IHJvbGUgPSAoc2Vzc2lvbkNsYWltcyBhcyBhbnkpPy5yb2xlXG4gICAgaWYgKHJvbGUgIT09ICdhZG1pbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5p2D6ZmQ5LiN6Laz77ya5oKo55qE6LSm5Y+35LiN5piv566h55CG5ZGYJylcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgdXNlcklkIH0gLy8g5LiN5YaN6L+U5Zue5a6M5pW055qEIHVzZXIg5a+56LGh77yM5Zug5Li65oiR5Lus5LiN6ZyA6KaB5LqGXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign566h55CG5ZGY5p2D6ZmQ5qCh6aqM5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IG5ldyBFcnJvcihlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfmnYPpmZDmoKHpqozpgYfliLDmnKrnn6XplJnor68nKVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W5omA5pyJ55So5oi3XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxVc2VycygpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIC8vIOS7juaVsOaNruW6k+iOt+WPlueUqOaIt+S/oeaBr++8jOS4jeWGjeS+nei1liBDbGVyayBBUElcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgY3JlYXRlZEF0OiAnZGVzYydcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g6L+U5Zue55So5oi35L+h5oGvXG4gICAgcmV0dXJuIHVzZXJzLm1hcCh1c2VyID0+ICh7XG4gICAgICBpZDogdXNlci5pZCxcbiAgICAgIGZpcnN0TmFtZTogdXNlci5uYW1lPy5zcGxpdCgnICcpWzBdIHx8IG51bGwsXG4gICAgICBsYXN0TmFtZTogdXNlci5uYW1lPy5zcGxpdCgnICcpLnNsaWNlKDEpLmpvaW4oJyAnKSB8fCBudWxsLFxuICAgICAgZW1haWxBZGRyZXNzZXM6IFt7IGVtYWlsQWRkcmVzczogdXNlci5lbWFpbCB9XSxcbiAgICAgIGltYWdlVXJsOiBudWxsIC8vIOaVsOaNruW6k+S4reayoeacieWtmOWCqOWktOWDj+S/oeaBr1xuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPlueUqOaIt+WIl+ihqOWksei0pTonLCBlcnJvcilcbiAgICBcbiAgICAvLyDmo4Dmn6XmmK/lkKbmmK/mnYPpmZDpqozor4HplJnor69cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAoXG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfnvZHnu5zor7fmsYLotoXml7YnKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn6K6k6K+B5pyN5YqhJykgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+adg+mZkOS4jei2sycpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfmnKrnmbvlvZUnKVxuICAgICkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+adg+mZkOmqjOivgeWksei0pe+8jOi/lOWbnuepuuaVsOe7hDonLCBlcnJvci5tZXNzYWdlKVxuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICAgIFxuICAgIC8vIOajgOafpeaYr+WQpuaYr+e9kee7nOmUmeivr+aIluWFtuS7liBBUEkg6ZSZ6K+vXG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGlmIChlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdmZXRjaCcpIHx8IFxuICAgICAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ25ldHdvcmsnKSB8fFxuICAgICAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ0VDT05OUkVGVVNFRCcpIHx8XG4gICAgICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygndGltZW91dCcpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+e9kee7nOi/nuaOpemUmeivr++8jOWPr+iDveaYryBDbGVyayDmnI3liqHkuI3lj6/nlKg6JywgZXJyb3IubWVzc2FnZSlcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdDbGVya0FQSVJlc3BvbnNlRXJyb3InKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDbGVyayBBUEkg5ZON5bqU6ZSZ6K+vOicsIGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyDmo4Dmn6XmmK/lkKbmmK8gQ2xlcmsgQVBJIOeJueWumumUmeivr1xuICAgIGlmIChlcnJvciAmJiB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnICYmICdjbGVya0Vycm9yJyBpbiBlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignQ2xlcmsgQVBJIOmUmeivr+ivpuaDhTonLCBKU09OLnN0cmluZ2lmeShlcnJvciwgbnVsbCwgMikpXG4gICAgICAvLyDov5Tlm57nqbrmlbDnu4TogIzkuI3mmK/mipvlh7rplJnor6/vvIzpmLLmraLpobXpnaLltKnmuoNcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICBcbiAgICAvLyDlhbbku5bmnKrnn6XplJnor6/vvIzov5Tlm57nqbrmlbDnu4TpmLLmraLpobXpnaLltKnmuoNcbiAgICBjb25zb2xlLmVycm9yKCfmnKrnn6XplJnor6/nsbvlnovvvIzov5Tlm57nqbrmlbDnu4Q6JywgZXJyb3IpXG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuLyoqXG4gKiDmoLnmja7nlKjmiLdJROiOt+WPluaIkOWwsVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWNoaWV2ZW1lbnRzQnlVc2VySWQodGFyZ2V0VXNlcklkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIGNvbnN0IGFjaGlldmVtZW50cyA9IGF3YWl0IHByaXNtYS5hY2hpZXZlbWVudC5maW5kTWFueSh7XG4gICAgICB3aGVyZTogeyB1c2VySWQ6IHRhcmdldFVzZXJJZCB9LFxuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9XG4gICAgfSlcblxuICAgIHJldHVybiBhY2hpZXZlbWVudHNcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfojrflj5bnlKjmiLfmiJDlsLHlpLHotKU6JywgZXJyb3IpXG4gICAgdGhyb3cgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yIDogbmV3IEVycm9yKCfojrflj5bnlKjmiLfmiJDlsLHlpLHotKUnKVxuICB9XG59XG5cbi8qKlxuICog566h55CG5ZGY5Yig6Zmk5oiQ5bCx77yI5peg6KeG5omA5pyJ6ICF77yJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZG1pbkRlbGV0ZUFjaGlldmVtZW50KGFjaGlldmVtZW50SWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gICAgXG4gICAgLy8g55u05o6l5Yig6Zmk5oiQ5bCx6K6w5b2V77yM5LiN5qOA5p+l5omA5pyJ6ICFXG4gICAgYXdhaXQgcHJpc21hLmFjaGlldmVtZW50LmRlbGV0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogYWNoaWV2ZW1lbnRJZCB9XG4gICAgfSlcblxuICAgIC8vIOmHjeaWsOmqjOivgee8k+WtmO+8jOWIt+aWsOebuOWFs+mhtemdolxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vdXNlcnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvZmlsZScpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hY2hpZXZlbWVudHMnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiAn5oiQ5bCx5bey5oiQ5Yqf5Yig6ZmkJ1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfliKDpmaTmiJDlsLHlpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5Yig6Zmk5oiQ5bCx5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOWIm+W7uuaWsOernui1m++8iOeuoeeQhuWRmOadg+mZkO+8iVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29tcGV0aXRpb24oZGF0YToge1xuICBuYW1lOiBzdHJpbmdcbiAgY2F0ZWdvcnk6IHN0cmluZ1xuICBsZXZlbD86IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICBkZWFkbGluZTogc3RyaW5nXG4gIG1heFBhcnRpY2lwYW50czogc3RyaW5nXG59KSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBcbiAgICAvLyDpqozor4HovpPlhaXmlbDmja5cbiAgICBpZiAoIWRhdGEubmFtZSB8fCBkYXRhLm5hbWUudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfnq57otZvlkI3np7DkuI3og73kuLrnqbonXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICghZGF0YS5jYXRlZ29yeSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfor7fpgInmi6nnq57otZvliIbnsbsnXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICghZGF0YS5kZWFkbGluZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfor7fpgInmi6nmiKrmraLml6XmnJ8nXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGRlYWRsaW5lRGF0ZSA9IG5ldyBEYXRlKGRhdGEuZGVhZGxpbmUpXG4gICAgaWYgKGlzTmFOKGRlYWRsaW5lRGF0ZS5nZXRUaW1lKCkpIHx8IGRlYWRsaW5lRGF0ZSA8PSBuZXcgRGF0ZSgpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+aIquatouaXpeacn+W/hemhu+aYr+acquadpeaXtumXtCdcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgbWF4UGFydGljaXBhbnRzTnVtID0gcGFyc2VJbnQoZGF0YS5tYXhQYXJ0aWNpcGFudHMpXG4gICAgaWYgKGlzTmFOKG1heFBhcnRpY2lwYW50c051bSkgfHwgbWF4UGFydGljaXBhbnRzTnVtIDw9IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5Lq65pWw5LiK6ZmQ5b+F6aG75piv5aSn5LqOMOeahOaVsOWtlydcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8g6aqM6K+B56ue6LWb57qn5YirXG4gICAgY29uc3QgdmFsaWRMZXZlbHMgPSBbJ+agoee6pycsICfluILnuqcnLCAn55yB57qnJywgJ+WbveWutue6pycsICflm73pmYXnuqcnXVxuICAgIGNvbnN0IGxldmVsID0gZGF0YS5sZXZlbCAmJiB2YWxpZExldmVscy5pbmNsdWRlcyhkYXRhLmxldmVsKSA/IGRhdGEubGV2ZWwgOiAn5qCh57qnJ1xuXG4gICAgLy8g5Yib5bu656ue6LWbXG4gICAgY29uc3QgY29tcGV0aXRpb24gPSBhd2FpdCBwcmlzbWEuY29tcGV0aXRpb24uY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLnRyaW0oKSxcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXG4gICAgICAgIGxldmVsLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbj8udHJpbSgpIHx8ICcnLFxuICAgICAgICBkZWFkbGluZTogZGVhZGxpbmVEYXRlLFxuICAgICAgICBtYXhQYXJ0aWNpcGFudHM6IG1heFBhcnRpY2lwYW50c051bSxcbiAgICAgICAgY3VycmVudFBhcnRpY2lwYW50czogMFxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDliLfmlrDnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9jb21wZXRpdGlvbnMnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiBjb21wZXRpdGlvbixcbiAgICAgIG1lc3NhZ2U6ICfnq57otZvliJvlu7rmiJDlip/vvIEnXG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5Yib5bu656ue6LWb5aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+WIm+W7uuernui1m+Wksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDmm7TmlrDnq57otZvvvIjnrqHnkIblkZjmnYPpmZDvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNvbXBldGl0aW9uKGlkOiBzdHJpbmcsIGRhdGE6IHtcbiAgbmFtZTogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgbGV2ZWw/OiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgZGVhZGxpbmU6IHN0cmluZ1xuICBtYXhQYXJ0aWNpcGFudHM6IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gICAgXG4gICAgLy8g6aqM6K+B6L6T5YWl5pWw5o2uXG4gICAgaWYgKCFkYXRhLm5hbWUgfHwgZGF0YS5uYW1lLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn56ue6LWb5ZCN56ew5LiN6IO95Li656m6J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIWRhdGEuY2F0ZWdvcnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn6K+36YCJ5oup56ue6LWb5YiG57G7J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIWRhdGEuZGVhZGxpbmUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn6K+36YCJ5oup5oiq5q2i5pel5pyfJ1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBkZWFkbGluZURhdGUgPSBuZXcgRGF0ZShkYXRhLmRlYWRsaW5lKVxuICAgIGlmIChpc05hTihkZWFkbGluZURhdGUuZ2V0VGltZSgpKSB8fCBkZWFkbGluZURhdGUgPD0gbmV3IERhdGUoKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfmiKrmraLml6XmnJ/lv4XpobvmmK/mnKrmnaXml7bpl7QnXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG1heFBhcnRpY2lwYW50c051bSA9IHBhcnNlSW50KGRhdGEubWF4UGFydGljaXBhbnRzKVxuICAgIGlmIChpc05hTihtYXhQYXJ0aWNpcGFudHNOdW0pIHx8IG1heFBhcnRpY2lwYW50c051bSA8PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+S6uuaVsOS4iumZkOW/hemhu+aYr+Wkp+S6jjDnmoTmlbDlrZcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5qOA5p+l56ue6LWb5piv5ZCm5a2Y5ZyoXG4gICAgY29uc3QgZXhpc3RpbmdDb21wZXRpdGlvbiA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH1cbiAgICB9KVxuXG4gICAgaWYgKCFleGlzdGluZ0NvbXBldGl0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ernui1m+S4jeWtmOWcqCdcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8g6aqM6K+B56ue6LWb57qn5YirXG4gICAgY29uc3QgdmFsaWRMZXZlbHMgPSBbJ1NUQVRFJywgJ1BST1ZJTkNFJywgJ1NDSE9PTCddXG4gICAgY29uc3QgbGV2ZWwgPSBkYXRhLmxldmVsICYmIHZhbGlkTGV2ZWxzLmluY2x1ZGVzKGRhdGEubGV2ZWwpID8gZGF0YS5sZXZlbCA6ICdTQ0hPT0wnXG5cbiAgICAvLyDmm7TmlrDnq57otZtcbiAgICBjb25zdCBjb21wZXRpdGlvbiA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLnRyaW0oKSxcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXG4gICAgICAgIGxldmVsLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbj8udHJpbSgpIHx8ICcnLFxuICAgICAgICBkZWFkbGluZTogZGVhZGxpbmVEYXRlLFxuICAgICAgICBtYXhQYXJ0aWNpcGFudHM6IG1heFBhcnRpY2lwYW50c051bVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDliLfmlrDnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9jb21wZXRpdGlvbnMnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiBjb21wZXRpdGlvbixcbiAgICAgIG1lc3NhZ2U6ICfnq57otZvmm7TmlrDmiJDlip/vvIEnXG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5pu05paw56ue6LWb5aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+abtOaWsOernui1m+Wksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDliKDpmaTnq57otZvvvIjnrqHnkIblkZjmnYPpmZDvvIzlronlhajlpITnkIblpJbplK7kvp3otZbvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvbXBldGl0aW9uKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuXG4gICAgLy8g5qOA5p+l56ue6LWb5piv5ZCm5a2Y5ZyoXG4gICAgY29uc3QgZXhpc3RpbmdDb21wZXRpdGlvbiA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH1cbiAgICB9KVxuXG4gICAgaWYgKCFleGlzdGluZ0NvbXBldGl0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ernui1m+S4jeWtmOWcqCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDkvb/nlKggUHJpc21hIOS6i+WKoeWuieWFqOWIoOmZpOernui1m+WPiuWFtuebuOWFs+aVsOaNrlxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XG4gICAgICAvLyDnrKzkuIDmraXvvJrliKDpmaTmiYDmnInnm7jlhbPnmoTmiqXlkI3orrDlvZVcbiAgICAgIGF3YWl0IHR4LnJlZ2lzdHJhdGlvbi5kZWxldGVNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgY29tcGV0aXRpb25JZDogaWQgfVxuICAgICAgfSlcbiAgICAgIFxuICAgICAgLy8g56ys5LqM5q2l77ya5Yig6Zmk56ue6LWb5pys6LqrXG4gICAgICBhd2FpdCB0eC5jb21wZXRpdGlvbi5kZWxldGUoe1xuICAgICAgICB3aGVyZTogeyBpZCB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyDliLfmlrDnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9jb21wZXRpdGlvbnMnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiAn56ue6LWb5Yig6Zmk5oiQ5Yqf77yBJ1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+WIoOmZpOernui1m+Wksei0pTonLCBlcnJvcilcbiAgICBcbiAgICAvLyDmo4Dmn6XmmK/lkKbmmK/lpJbplK7nuqbmnZ/plJnor69cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdmb3JlaWduIGtleSBjb25zdHJhaW50JykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5Yig6Zmk5aSx6LSl77ya6K+l56ue6LWb5LuN5pyJ5YWz6IGU5pWw5o2u77yM6K+35YWI5aSE55CG55u45YWz6K6w5b2VJ1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfliKDpmaTnq57otZvlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W5omA5pyJ5oyH5a+86ICB5biI5YiX6KGoXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUZWFjaGVycygpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIGNvbnN0IHRlYWNoZXJzID0gYXdhaXQgcHJpc21hLnRlYWNoZXIuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9XG4gICAgfSlcblxuICAgIHJldHVybiB0ZWFjaGVyc1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluiAgeW4iOWIl+ihqOWksei0pTonLCBlcnJvcilcbiAgICB0aHJvdyBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiBuZXcgRXJyb3IoJ+iOt+WPluiAgeW4iOWIl+ihqOWksei0pe+8jOivt+eojeWQjumHjeivlScpXG4gIH1cbn1cblxuLyoqXG4gKiDliJvlu7rmlrDmjIflr7zogIHluIhcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRlYWNoZXIoZGF0YToge1xuICBuYW1lOiBzdHJpbmdcbiAgZGVwYXJ0bWVudD86IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gICAgXG4gICAgLy8g6aqM6K+B6L6T5YWl5pWw5o2uXG4gICAgaWYgKCFkYXRhLm5hbWUgfHwgZGF0YS5uYW1lLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5pWZ5biI5aeT5ZCN5LiN6IO95Li656m6J1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOafpeivouW9k+WJjeaVsOaNruW6k+S4reWFseacieWkmuWwkeS9jeiAgeW4iFxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG4gICAgY29uc3QgdGVhY2hlckNvdW50ID0gYXdhaXQgcHJpc21hLnRlYWNoZXIuY291bnQoKVxuICAgIFxuICAgIC8vIOeUn+aIkOagvOW8j+S4uiBUICsg5bm05Lu9ICsgM+S9jea1geawtOWPt+eahOaVmeW4iOe8luWPt1xuICAgIGNvbnN0IHRlYWNoZXJObyA9IGBUJHtjdXJyZW50WWVhcn0ke1N0cmluZyh0ZWFjaGVyQ291bnQgKyAxKS5wYWRTdGFydCgzLCAnMCcpfWBcbiAgICBcbiAgICAvLyDliJvlu7rogIHluIjorrDlvZVcbiAgICBjb25zdCB0ZWFjaGVyID0gYXdhaXQgcHJpc21hLnRlYWNoZXIuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLnRyaW0oKSxcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50Py50cmltKCkgfHwgbnVsbCxcbiAgICAgICAgdGVhY2hlck5vXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIOWIt+aWsOe8k+WtmFxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vdGVhY2hlcnMnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiB0ZWFjaGVyLFxuICAgICAgbWVzc2FnZTogJ+aMh+WvvOiAgeW4iOa3u+WKoOaIkOWKn++8gSdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfliJvlu7rogIHluIjlpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5Yib5bu66ICB5biI5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOWIoOmZpOaMh+WvvOiAgeW4iFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVGVhY2hlcihpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcblxuICAgIC8vIOajgOafpeiAgeW4iOaYr+WQpuWtmOWcqFxuICAgIGNvbnN0IGV4aXN0aW5nVGVhY2hlciA9IGF3YWl0IHByaXNtYS50ZWFjaGVyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQgfVxuICAgIH0pXG5cbiAgICBpZiAoIWV4aXN0aW5nVGVhY2hlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfmjIflr7zogIHluIjkuI3lrZjlnKgnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5qOA5p+l5piv5ZCm5pyJ5YWz6IGU55qE5oql5ZCN6K6w5b2VXG4gICAgY29uc3QgcmVnaXN0cmF0aW9uQ291bnQgPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmNvdW50KHtcbiAgICAgIHdoZXJlOiB7IHRlYWNoZXJJZDogaWQgfVxuICAgIH0pXG5cbiAgICBpZiAocmVnaXN0cmF0aW9uQ291bnQgPiAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ivpeiAgeW4iOi/mOacieWFs+iBlOeahOaKpeWQjeiusOW9le+8jOaXoOazleWIoOmZpCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDliKDpmaTogIHluIjorrDlvZVcbiAgICBhd2FpdCBwcmlzbWEudGVhY2hlci5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfVxuICAgIH0pXG5cbiAgICAvLyDliLfmlrDnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3RlYWNoZXJzJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ+aMh+WvvOiAgeW4iOWIoOmZpOaIkOWKn++8gSdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfliKDpmaTogIHluIjlpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5Yig6Zmk6ICB5biI5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPluaJgOacieaKpeWQjeiusOW9le+8iOeuoeeQhuWRmOWuoeaJueS4k+eUqO+8iVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUmVnaXN0cmF0aW9ucygpIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgY29uc3QgcmVnaXN0cmF0aW9ucyA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uZmluZE1hbnkoe1xuICAgICAgc2VsZWN0OiB7XG4gICAgICAgIGlkOiB0cnVlLFxuICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgIGFwcGxpY2FudE5hbWU6IHRydWUsXG4gICAgICAgIHByb2plY3ROYW1lOiB0cnVlLFxuICAgICAgICB0ZWFtTWVtYmVyczogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxuICAgICAgICBjb21wZXRpdGlvbjoge1xuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IHRydWUsXG4gICAgICAgICAgICBkZWFkbGluZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGVhY2hlcjoge1xuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgICAgdGVhY2hlck5vOiB0cnVlLFxuICAgICAgICAgICAgZGVwYXJ0bWVudDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvcmRlckJ5OiB7XG4gICAgICAgIGNyZWF0ZWRBdDogJ2Rlc2MnXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiByZWdpc3RyYXRpb25zXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W5oql5ZCN6K6w5b2V5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcign6I635Y+W5oql5ZCN6K6w5b2V5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJylcbiAgfVxufVxuXG4vKipcbiAqIOWuoeaguOaKpeWQjeiusOW9lVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmV2aWV3UmVnaXN0cmF0aW9uKHJlZ2lzdHJhdGlvbklkOiBzdHJpbmcsIHN0YXR1czogc3RyaW5nLCBmZWVkYmFjaz86IHN0cmluZykge1xuICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICBcbiAgdHJ5IHtcbiAgICAvLyDpqozor4HnirbmgIHlgLxcbiAgICBjb25zdCB2YWxpZFN0YXR1c2VzID0gWydQRU5ESU5HJywgJ0FQUFJPVkVEJywgJ1JFSkVDVEVEX1JFVFJZJywgJ1JFSkVDVEVEX0ZJTkFMJ11cbiAgICBpZiAoIXZhbGlkU3RhdHVzZXMuaW5jbHVkZXMoc3RhdHVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfml6DmlYjnmoTlrqHmibnnirbmgIEnKVxuICAgIH1cblxuICAgIC8vIOWmguaenOeKtuaAgeS4uiBSRUpFQ1RFRF9SRVRSWSDmiJYgUkVKRUNURURfRklOQUzvvIzlv4Xpobvmj5Dkvpvlj43ppojmhI/op4FcbiAgICBpZiAoKHN0YXR1cyA9PT0gJ1JFSkVDVEVEX1JFVFJZJyB8fCBzdGF0dXMgPT09ICdSRUpFQ1RFRF9GSU5BTCcpICYmICghZmVlZGJhY2sgfHwgZmVlZGJhY2sudHJpbSgpLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign6amz5Zue55Sz6K+35pe25b+F6aG75o+Q5L6b5Y+N6aaI5oSP6KeBJylcbiAgICB9XG5cbiAgICAvLyDmo4Dmn6XmiqXlkI3orrDlvZXmmK/lkKblrZjlnKhcbiAgICBjb25zdCBleGlzdGluZ1JlZ2lzdHJhdGlvbiA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZDogcmVnaXN0cmF0aW9uSWQgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgY29tcGV0aXRpb246IHRydWUsXG4gICAgICAgIHVzZXI6IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKCFleGlzdGluZ1JlZ2lzdHJhdGlvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfmiqXlkI3orrDlvZXkuI3lrZjlnKgnKVxuICAgIH1cblxuICAgIC8vIOabtOaWsOaKpeWQjeiusOW9lVxuICAgIGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24udXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiByZWdpc3RyYXRpb25JZCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGZlZWRiYWNrOiBmZWVkYmFjaz8udHJpbSgpIHx8IG51bGxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gTk9URTog5a6h5om55pON5L2c5ZCO5ZCM5q2lIGN1cnJlbnRQYXJ0aWNpcGFudHMg5Li655yf5a6e6K6h5pWw5YC8XG4gICAgY29uc3QgdXBkYXRlZENvdW50ID0gYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi5jb3VudCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjb21wZXRpdGlvbklkOiBleGlzdGluZ1JlZ2lzdHJhdGlvbi5jb21wZXRpdGlvbklkLFxuICAgICAgICBzdGF0dXM6IHsgbm90SW46IFsnUkVKRUNURURfRklOQUwnXSB9XG4gICAgICB9XG4gICAgfSlcbiAgICBhd2FpdCBwcmlzbWEuY29tcGV0aXRpb24udXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBleGlzdGluZ1JlZ2lzdHJhdGlvbi5jb21wZXRpdGlvbklkIH0sXG4gICAgICBkYXRhOiB7IGN1cnJlbnRQYXJ0aWNpcGFudHM6IHVwZGF0ZWRDb3VudCB9XG4gICAgfSlcblxuICAgIC8vIOmHjeaWsOmqjOivgee8k+WtmFxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vcmVnaXN0cmF0aW9ucycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9maWxlJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9jb21wZXRpdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vYWNoaWV2ZW1lbnRzJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogc3RhdHVzID09PSAnQVBQUk9WRUQnID8gJ+aKpeWQjeW3sumAmui/h++8jOW3suiHquWKqOeUn+aIkOaIkOWwseiusOW9le+8gScgOiAn5oql5ZCN5bey5pu05pawJ1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+WuoeaguOaKpeWQjeWksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICflrqHmoLjlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W566h55CG5ZGY5o6n5Yi25Y+w57uf6K6h5pWw5o2uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXNoYm9hcmRTdGF0cygpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIC8vIOS7juaVsOaNruW6k+iOt+WPlueUqOaIt+aAu+aVsO+8jOS4jeWGjeS+nei1liBDbGVyayBBUElcbiAgICBsZXQgdG90YWxVc2VycyA9IDBcbiAgICB0cnkge1xuICAgICAgdG90YWxVc2VycyA9IGF3YWl0IHByaXNtYS51c2VyLmNvdW50KClcbiAgICB9IGNhdGNoIChkYkVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfojrflj5bnlKjmiLfmgLvmlbDlpLHotKU6JywgZGJFcnJvcilcbiAgICAgIHRvdGFsVXNlcnMgPSAwIC8vIOS9v+eUqOm7mOiupOWAvFxuICAgIH1cbiAgICBcbiAgICAvLyDlubbooYzojrflj5blhbbku5bnu5/orqHmlbDmja5cbiAgICBjb25zdCBbXG4gICAgICB0b3RhbENvbXBldGl0aW9ucyxcbiAgICAgIHRvdGFsUmVnaXN0cmF0aW9ucyxcbiAgICAgIHBlbmRpbmdSZXZpZXdzLFxuICAgICAgY2F0ZWdvcnlTdGF0cyxcbiAgICAgIHRvcENvbXBldGl0aW9ucyxcbiAgICAgIHJlY2VudFBlbmRpbmdcbiAgICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgLy8g6LWb5LqL5oC75pWwXG4gICAgICBwcmlzbWEuY29tcGV0aXRpb24uY291bnQoKSxcbiAgICAgIFxuICAgICAgLy8g5oql5ZCN5oC75pWwXG4gICAgICBwcmlzbWEucmVnaXN0cmF0aW9uLmNvdW50KCksXG4gICAgICBcbiAgICAgIC8vIOW+heWuoeaguOaVsOmHj1xuICAgICAgcHJpc21hLnJlZ2lzdHJhdGlvbi5jb3VudCh7XG4gICAgICAgIHdoZXJlOiB7IHN0YXR1czogJ1BFTkRJTkcnIH1cbiAgICAgIH0pLFxuICAgICAgXG4gICAgICAvLyDmjInliIbnsbvnu5/orqHotZvkuovmlbDph49cbiAgICAgIHByaXNtYS5jb21wZXRpdGlvbi5ncm91cEJ5KHtcbiAgICAgICAgYnk6IFsnY2F0ZWdvcnknXSxcbiAgICAgICAgX2NvdW50OiB7XG4gICAgICAgICAgaWQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBcbiAgICAgIC8vIOaKpeWQjeS6uuaVsOacgOWkmueahOWJjTXkuKrotZvkuotcbiAgICAgIHByaXNtYS5jb21wZXRpdGlvbi5maW5kTWFueSh7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgX2NvdW50OiB7XG4gICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uczogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3JkZXJCeToge1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbnM6IHtcbiAgICAgICAgICAgIF9jb3VudDogJ2Rlc2MnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0YWtlOiA1XG4gICAgICB9KSxcbiAgICAgIFxuICAgICAgLy8g5pyA5pawNeadoeW+heWuoeaguOaKpeWQjVxuICAgICAgcHJpc21hLnJlZ2lzdHJhdGlvbi5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHN0YXR1czogJ1BFTkRJTkcnIH0sXG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgIGFwcGxpY2FudE5hbWU6IHRydWUsXG4gICAgICAgICAgY29tcGV0aXRpb246IHtcbiAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICBuYW1lOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjcmVhdGVkQXQ6IHRydWUsXG4gICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgIG5hbWU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJ1xuICAgICAgICB9LFxuICAgICAgICB0YWtlOiA1XG4gICAgICB9KVxuICAgIF0pXG5cbiAgICAvLyDlpITnkIbliIbnsbvnu5/orqHmlbDmja7vvIzlkIjlubbnm7jkvLzliIbnsbtcbiAgICBjb25zdCBwcm9jZXNzZWRDYXRlZ29yeVN0YXRzID0gY2F0ZWdvcnlTdGF0cy5yZWR1Y2UoKGFjYzogeyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfVtdLCBpdGVtOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gaXRlbS5jYXRlZ29yeSB8fCAn5YW25LuWJ1xuICAgICAgY29uc3QgZXhpc3RpbmdJdGVtID0gYWNjLmZpbmQoKHN0YXQ6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH0pID0+IHN0YXQubmFtZSA9PT0gY2F0ZWdvcnkpXG4gICAgICBcbiAgICAgIGlmIChleGlzdGluZ0l0ZW0pIHtcbiAgICAgICAgZXhpc3RpbmdJdGVtLnZhbHVlICs9IGl0ZW0uX2NvdW50LmlkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2MucHVzaCh7XG4gICAgICAgICAgbmFtZTogY2F0ZWdvcnksXG4gICAgICAgICAgdmFsdWU6IGl0ZW0uX2NvdW50LmlkXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBcbiAgICAgIHJldHVybiBhY2NcbiAgICB9LCBbXSBhcyB7IG5hbWU6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9W10pXG5cbiAgICByZXR1cm4ge1xuICAgICAgdG90YWxVc2VycyxcbiAgICAgIHRvdGFsQ29tcGV0aXRpb25zLFxuICAgICAgdG90YWxSZWdpc3RyYXRpb25zLFxuICAgICAgcGVuZGluZ1Jldmlld3MsXG4gICAgICBjYXRlZ29yeVN0YXRzOiBwcm9jZXNzZWRDYXRlZ29yeVN0YXRzLFxuICAgICAgdG9wQ29tcGV0aXRpb25zOiB0b3BDb21wZXRpdGlvbnMubWFwKChjb21wOiBhbnkpID0+ICh7XG4gICAgICAgIG5hbWU6IGNvbXAubmFtZSxcbiAgICAgICAgcmVnaXN0cmF0aW9uczogY29tcC5fY291bnQucmVnaXN0cmF0aW9uc1xuICAgICAgfSkpLFxuICAgICAgcmVjZW50UGVuZGluZzogcmVjZW50UGVuZGluZy5tYXAoKHJlZzogYW55KSA9PiAoe1xuICAgICAgICBpZDogcmVnLmlkLFxuICAgICAgICBhcHBsaWNhbnROYW1lOiByZWcuYXBwbGljYW50TmFtZSB8fCByZWcudXNlcj8ubmFtZSB8fCAn5pyq55+lJyxcbiAgICAgICAgY29tcGV0aXRpb25OYW1lOiByZWcuY29tcGV0aXRpb24ubmFtZSxcbiAgICAgICAgY3JlYXRlZEF0OiByZWcuY3JlYXRlZEF0XG4gICAgICB9KSlcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W5Luq6KGo5p2/57uf6K6h5pWw5o2u5aSx6LSlOicsIGVycm9yKVxuICAgIFxuICAgIC8vIOWmguaenOaYr+adg+mZkOmqjOivgemUmeivr++8jOi/lOWbnum7mOiupOe7n+iuoeaVsOaNrlxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIChcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+e9kee7nOivt+axgui2heaXticpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCforqTor4HmnI3liqEnKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn5p2D6ZmQ5LiN6LazJykgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+acqueZu+W9lScpXG4gICAgKSkge1xuICAgICAgY29uc29sZS5lcnJvcign5p2D6ZmQ6aqM6K+B5aSx6LSl77yM6L+U5Zue6buY6K6k57uf6K6h5pWw5o2uOicsIGVycm9yLm1lc3NhZ2UpXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3RhbFVzZXJzOiAwLFxuICAgICAgICB0b3RhbENvbXBldGl0aW9uczogMCxcbiAgICAgICAgdG90YWxSZWdpc3RyYXRpb25zOiAwLFxuICAgICAgICBwZW5kaW5nUmV2aWV3czogMCxcbiAgICAgICAgY2F0ZWdvcnlTdGF0czogW10sXG4gICAgICAgIHRvcENvbXBldGl0aW9uczogW10sXG4gICAgICAgIHJlY2VudFBlbmRpbmc6IFtdXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOWFtuS7lumUmeivr+S5n+i/lOWbnum7mOiupOe7n+iuoeaVsOaNru+8jOmYsuatoumhtemdouW0qea6g1xuICAgIGNvbnNvbGUuZXJyb3IoJ+acquefpemUmeivr++8jOi/lOWbnum7mOiupOe7n+iuoeaVsOaNrjonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgdG90YWxVc2VyczogMCxcbiAgICAgIHRvdGFsQ29tcGV0aXRpb25zOiAwLFxuICAgICAgdG90YWxSZWdpc3RyYXRpb25zOiAwLFxuICAgICAgcGVuZGluZ1Jldmlld3M6IDAsXG4gICAgICBjYXRlZ29yeVN0YXRzOiBbXSxcbiAgICAgIHRvcENvbXBldGl0aW9uczogW10sXG4gICAgICByZWNlbnRQZW5kaW5nOiBbXVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOaJuemHj+WvvOWFpeaMh+WvvOiAgeW4iFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYmF0Y2hJbXBvcnRUZWFjaGVycyh0ZWFjaGVyc0RhdGE6IHsgbmFtZTogc3RyaW5nOyBkZXBhcnRtZW50Pzogc3RyaW5nIH1bXSkge1xuICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICBcbiAgdHJ5IHtcbiAgICAvLyDojrflj5blvZPliY3lubTku71cbiAgICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICAgIGNvbnN0IHllYXJQcmVmaXggPSBgVCR7Y3VycmVudFllYXJ9YFxuICAgIFxuICAgIC8vIOafpeivouW9k+WJjeW5tOS7veacgOaWsOeahOaVmeW4iOe8luWPt1xuICAgIGNvbnN0IGxhdGVzdFRlYWNoZXIgPSBhd2FpdCBwcmlzbWEudGVhY2hlci5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdGVhY2hlck5vOiB7XG4gICAgICAgICAgc3RhcnRzV2l0aDogeWVhclByZWZpeFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb3JkZXJCeToge1xuICAgICAgICB0ZWFjaGVyTm86ICdkZXNjJ1xuICAgICAgfVxuICAgIH0pXG4gICAgXG4gICAgLy8g6K6h566X6LW35aeL5rWB5rC05Y+3XG4gICAgbGV0IHNlcmlhbE51bWJlciA9IDFcbiAgICBpZiAobGF0ZXN0VGVhY2hlcikge1xuICAgICAgY29uc3QgbGF0ZXN0U2VyaWFsID0gcGFyc2VJbnQobGF0ZXN0VGVhY2hlci50ZWFjaGVyTm8uc2xpY2UoLTMpKVxuICAgICAgaWYgKCFpc05hTihsYXRlc3RTZXJpYWwpKSB7XG4gICAgICAgIHNlcmlhbE51bWJlciA9IGxhdGVzdFNlcmlhbCArIDFcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8g5qC85byP5YyW5pWZ5biI5pWw5o2uXG4gICAgY29uc3QgZm9ybWF0dGVkVGVhY2hlcnMgPSB0ZWFjaGVyc0RhdGEubWFwKCh0ZWFjaGVyLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGVhY2hlck5vID0gYCR7eWVhclByZWZpeH0ke3NlcmlhbE51bWJlci50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YFxuICAgICAgc2VyaWFsTnVtYmVyKytcbiAgICAgIFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogdGVhY2hlci5uYW1lLnRyaW0oKSxcbiAgICAgICAgZGVwYXJ0bWVudDogdGVhY2hlci5kZXBhcnRtZW50Py50cmltKCkgfHwgbnVsbCxcbiAgICAgICAgdGVhY2hlck5vXG4gICAgICB9XG4gICAgfSlcbiAgICBcbiAgICAvLyDmibnph4/mj5LlhaXmlbDmja7lupNcbiAgICBhd2FpdCBwcmlzbWEudGVhY2hlci5jcmVhdGVNYW55KHtcbiAgICAgIGRhdGE6IGZvcm1hdHRlZFRlYWNoZXJzXG4gICAgfSlcbiAgICBcbiAgICAvLyDph43mlrDpqozor4HnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3RlYWNoZXJzJylcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGNvdW50OiBmb3JtYXR0ZWRUZWFjaGVycy5sZW5ndGgsXG4gICAgICBtZXNzYWdlOiBg5oiQ5Yqf5a+85YWlICR7Zm9ybWF0dGVkVGVhY2hlcnMubGVuZ3RofSDkvY3mjIflr7zogIHluIhgXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+aJuemHj+WvvOWFpeaMh+WvvOiAgeW4iOWksei0pTonLCBlcnJvcilcbiAgICB0aHJvdyBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiBuZXcgRXJyb3IoJ+aJuemHj+WvvOWFpeWksei0pe+8jOivt+eojeWQjumHjeivlScpXG4gIH1cbn1cblxuLyoqXG4gKiDmibnph4/lrqHmibnmiqXlkI3orrDlvZVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJhdGNoUmV2aWV3UmVnaXN0cmF0aW9ucyhcbiAgaWRzOiBzdHJpbmdbXSwgXG4gIHN0YXR1czogJ0FQUFJPVkVEJyB8ICdSRUpFQ1RFRF9SRVRSWScgfCAnUkVKRUNURURfRklOQUwnLCBcbiAgZmVlZGJhY2s/OiBzdHJpbmdcbikge1xuICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICBcbiAgdHJ5IHtcbiAgICAvLyDpqozor4HnirbmgIHlgLxcbiAgICBjb25zdCB2YWxpZFN0YXR1c2VzID0gWydBUFBST1ZFRCcsICdSRUpFQ1RFRF9SRVRSWScsICdSRUpFQ1RFRF9GSU5BTCddXG4gICAgaWYgKCF2YWxpZFN0YXR1c2VzLmluY2x1ZGVzKHN0YXR1cykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5peg5pWI55qE5a6h5om554q25oCBJylcbiAgICB9XG5cbiAgICAvLyDlpoLmnpznirbmgIHkuLogUkVKRUNURURfUkVUUlkg5oiWIFJFSkVDVEVEX0ZJTkFM77yM5b+F6aG75o+Q5L6b5Y+N6aaI5oSP6KeBXG4gICAgaWYgKChzdGF0dXMgPT09ICdSRUpFQ1RFRF9SRVRSWScgfHwgc3RhdHVzID09PSAnUkVKRUNURURfRklOQUwnKSAmJiAoIWZlZWRiYWNrIHx8IGZlZWRiYWNrLnRyaW0oKS5sZW5ndGggPT09IDApKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ+mps+WbnueUs+ivt+aXtuW/hemhu+aPkOS+m+WPjemmiOaEj+ingScpXG4gICAgfVxuXG4gICAgLy8g6aqM6K+BSUTmlbDnu4RcbiAgICBpZiAoIWlkcyB8fCBpZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ+ivt+mAieaLqeimgeWuoeaJueeahOaKpeWQjeiusOW9lScpXG4gICAgfVxuXG4gICAgLy8g6I635Y+W6KaB5pu05paw55qE5oql5ZCN6K6w5b2V6K+m5oOF77yI55So5LqO55Sf5oiQ5oiQ5bCx77yJXG4gICAgY29uc3QgcmVnaXN0cmF0aW9uc1RvVXBkYXRlID0gYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi5maW5kTWFueSh7XG4gICAgICB3aGVyZTogeyBcbiAgICAgICAgaWQ6IHsgaW46IGlkcyB9XG4gICAgICB9LFxuICAgICAgaW5jbHVkZToge1xuICAgICAgICBjb21wZXRpdGlvbjogdHJ1ZSxcbiAgICAgICAgdXNlcjogdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDmibnph4/mm7TmlrDmiqXlkI3orrDlvZVcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLnVwZGF0ZU1hbnkoe1xuICAgICAgd2hlcmU6IHsgXG4gICAgICAgIGlkOiB7IGluOiBpZHMgfVxuICAgICAgfSxcbiAgICAgIGRhdGE6IHsgXG4gICAgICAgIHN0YXR1cywgXG4gICAgICAgIGZlZWRiYWNrOiBmZWVkYmFjaz8udHJpbSgpIHx8IG51bGwgXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIE5PVEU6IOaJuemHj+WuoeaJueWQjuWQjOatpeaJgOaciea2ieWPiuernui1m+eahCBjdXJyZW50UGFydGljaXBhbnRzXG4gICAgY29uc3QgYWZmZWN0ZWRDb21wZXRpdGlvbklkcyA9IFsuLi5uZXcgU2V0KHJlZ2lzdHJhdGlvbnNUb1VwZGF0ZS5tYXAociA9PiByLmNvbXBldGl0aW9uSWQpKV1cbiAgICBmb3IgKGNvbnN0IGNvbXBJZCBvZiBhZmZlY3RlZENvbXBldGl0aW9uSWRzKSB7XG4gICAgICBjb25zdCB1cGRhdGVkQ291bnQgPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmNvdW50KHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBjb21wZXRpdGlvbklkOiBjb21wSWQsXG4gICAgICAgICAgc3RhdHVzOiB7IG5vdEluOiBbJ1JFSkVDVEVEX0ZJTkFMJ10gfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLnVwZGF0ZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiBjb21wSWQgfSxcbiAgICAgICAgZGF0YTogeyBjdXJyZW50UGFydGljaXBhbnRzOiB1cGRhdGVkQ291bnQgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyDph43mlrDpqozor4HnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3JlZ2lzdHJhdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvZmlsZScpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jb21wZXRpdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vY29tcGV0aXRpb25zJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL2FjaGlldmVtZW50cycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGNvdW50OiByZXN1bHQuY291bnQsXG4gICAgICBtZXNzYWdlOiBzdGF0dXMgPT09ICdBUFBST1ZFRCcgXG4gICAgICAgID8gYOaIkOWKn+mAmui/hyAke3Jlc3VsdC5jb3VudH0g5p2h5oql5ZCN55Sz6K+377yM5bey6Ieq5Yqo55Sf5oiQ5oiQ5bCx6K6w5b2V77yBYCBcbiAgICAgICAgOiBg5oiQ5Yqf5aSE55CGICR7cmVzdWx0LmNvdW50fSDmnaHmiqXlkI3orrDlvZVgXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+aJuemHj+WuoeaJueWksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfmibnph4/lrqHmibnlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W5omA5pyJ55So5oi355qE5oiQ5bCx6K6w5b2V77yI566h55CG5ZGY5LiT55So77yJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxBY2hpZXZlbWVudHMoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBcbiAgICBjb25zdCBhY2hpZXZlbWVudHMgPSBhd2FpdCBwcmlzbWEuYWNoaWV2ZW1lbnQuZmluZE1hbnkoe1xuICAgICAgaW5jbHVkZToge1xuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgICBlbWFpbDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgY3JlYXRlZEF0OiAnZGVzYydcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGFjaGlldmVtZW50c1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaIkOWwseiusOW9leWksei0pTonLCBlcnJvcilcbiAgICBcbiAgICAvLyDlpoLmnpzmmK/mnYPpmZDpqozor4HplJnor6/vvIzov5Tlm57nqbrmlbDnu4TogIzkuI3mmK/mipvlh7rplJnor69cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAoXG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfnvZHnu5zor7fmsYLotoXml7YnKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn6K6k6K+B5pyN5YqhJykgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+adg+mZkOS4jei2sycpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfmnKrnmbvlvZUnKVxuICAgICkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+adg+mZkOmqjOivgeWksei0pe+8jOi/lOWbnuepuuaVsOe7hDonLCBlcnJvci5tZXNzYWdlKVxuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICAgIFxuICAgIC8vIOWFtuS7lumUmeivr+S5n+i/lOWbnuepuuaVsOe7hO+8jOmYsuatoumhtemdouW0qea6g1xuICAgIGNvbnNvbGUuZXJyb3IoJ+acquefpemUmeivr++8jOi/lOWbnuepuuaVsOe7hDonLCBlcnJvcilcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPluWvvOWHuuaVsOaNrlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwb3J0RGF0YShjb21wZXRpdGlvbklkOiBzdHJpbmcpIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgLy8g5p+l6K+i6K+l6LWb5LqL5LiL5omA5pyJ5bey6YCa6L+H55qE5oql5ZCN6K6w5b2VXG4gICAgY29uc3QgcmVnaXN0cmF0aW9ucyA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgY29tcGV0aXRpb25JZCxcbiAgICAgICAgc3RhdHVzOiAnQVBQUk9WRUQnXG4gICAgICB9LFxuICAgICAgLy8g5qC45b+D5LyY5YyW77ya5Y+q5p+l6K+i6L+ZIDYg5Liq5YmN56uv55yf5q2j6ZyA6KaB55qE5a2X5q6177yM5Lii5byDIGlk44CBdXNlcklk44CB54q25oCB562J5YaX5L2Z5pWw5o2uXG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgYXBwbGljYW50TmFtZTogdHJ1ZSxcbiAgICAgICAgcHJvamVjdE5hbWU6IHRydWUsXG4gICAgICAgIHRlYW1NZW1iZXJzOiB0cnVlLFxuICAgICAgICBub3RlczogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxuICAgICAgICB0ZWFjaGVyOiB7XG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgICAgZGVwYXJ0bWVudDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgY3JlYXRlZEF0OiAnYXNjJ1xuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDmiYHlubPljJbmoLzlvI/ljJbmlbDmja5cbiAgICBjb25zdCBleHBvcnREYXRhID0gcmVnaXN0cmF0aW9ucy5tYXAocmVnID0+ICh7XG4gICAgICDnlLPor7fkuro6IHJlZy5hcHBsaWNhbnROYW1lIHx8ICfmnKrnn6UnLFxuICAgICAg5L2c5ZOB5ZCN56ewOiByZWcucHJvamVjdE5hbWUgfHwgJ+aXoCcsXG4gICAgICDlm6LpmJ/miJDlkZg6IHJlZy50ZWFtTWVtYmVycyB8fCAn5pegJyxcbiAgICAgIOaMh+WvvOiAgeW4iDogcmVnLnRlYWNoZXI/Lm5hbWUgfHwgJ+aXoCcsXG4gICAgICDogIHluIjlrabpmaI6IHJlZy50ZWFjaGVyPy5kZXBhcnRtZW50IHx8ICfml6AnLFxuICAgICAg5oql5ZCN6K+05piOOiByZWcubm90ZXMgfHwgJ+aXoCcsXG4gICAgICDmj5DkuqTml7bpl7Q6IHJlZy5jcmVhdGVkQXQudG9Mb2NhbGVEYXRlU3RyaW5nKCd6aC1DTicsIHtcbiAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICBtb250aDogJzItZGlnaXQnLFxuICAgICAgICBkYXk6ICcyLWRpZ2l0J1xuICAgICAgfSlcbiAgICB9KSlcblxuICAgIHJldHVybiBleHBvcnREYXRhXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W5a+85Ye65pWw5o2u5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcign6I635Y+W5a+85Ye65pWw5o2u5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJylcbiAgfVxufVxuXG4vKipcbiAqIOWIh+aNouernui1m+W9kuaho+eKtuaAgVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG9nZ2xlQ29tcGV0aXRpb25BcmNoaXZlKGlkOiBzdHJpbmcsIGN1cnJlbnRTdGF0dXM6IGJvb2xlYW4pIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgLy8g5pu05paw56ue6LWb54q25oCBXG4gICAgY29uc3QgbmV3U3RhdHVzID0gIWN1cnJlbnRTdGF0dXNcbiAgICBjb25zdCBjb21wZXRpdGlvbiA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGE6IHsgaXNBY3RpdmU6IG5ld1N0YXR1cyB9XG4gICAgfSlcblxuICAgIC8vIOmHjeaWsOmqjOivgee8k+WtmFxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vY29tcGV0aXRpb25zJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGRhdGE6IGNvbXBldGl0aW9uLFxuICAgICAgbWVzc2FnZTogbmV3U3RhdHVzID8gJ+ernui1m+W3sumHjeaWsOS4iuaeticgOiAn56ue6LWb5bey5b2S5qGjJ1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfliIfmjaLnq57otZvnirbmgIHlpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5YiH5o2i56ue6LWb54q25oCB5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxU0E4MUJzQix1TUFBQSJ9
}),
"[project]/src/app/actions/data:2ec501 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWRtaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSdcbmltcG9ydCB7IGF1dGggfSBmcm9tICdAY2xlcmsvbmV4dGpzL3NlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcblxuLyoqXG4gKiDpqozor4HnrqHnkIblkZjmnYPpmZDnmoTovoXliqnlh73mlbDvvIjln7rkuo7mnKzlnLAgSldUIFRva2Vu77yM6Zu2572R57uc6K+35rGC77yJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VySWQsIHNlc3Npb25DbGFpbXMgfSA9IGF3YWl0IGF1dGgoKVxuXG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5pyq55m75b2V77yM6K+35YWI55m75b2VJylcbiAgICB9XG4gICAgXG4gICAgLy8g55u05o6l5LuO5pys5ZywIEpXVCBUb2tlbiDkuK3or7vlj5Ygcm9sZe+8jOmbtue9kee7nOivt+axgu+8gVxuICAgIGNvbnN0IHJvbGUgPSAoc2Vzc2lvbkNsYWltcyBhcyBhbnkpPy5yb2xlXG4gICAgaWYgKHJvbGUgIT09ICdhZG1pbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5p2D6ZmQ5LiN6Laz77ya5oKo55qE6LSm5Y+35LiN5piv566h55CG5ZGYJylcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgdXNlcklkIH0gLy8g5LiN5YaN6L+U5Zue5a6M5pW055qEIHVzZXIg5a+56LGh77yM5Zug5Li65oiR5Lus5LiN6ZyA6KaB5LqGXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign566h55CG5ZGY5p2D6ZmQ5qCh6aqM5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IG5ldyBFcnJvcihlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfmnYPpmZDmoKHpqozpgYfliLDmnKrnn6XplJnor68nKVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W5omA5pyJ55So5oi3XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxVc2VycygpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIC8vIOS7juaVsOaNruW6k+iOt+WPlueUqOaIt+S/oeaBr++8jOS4jeWGjeS+nei1liBDbGVyayBBUElcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgY3JlYXRlZEF0OiAnZGVzYydcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g6L+U5Zue55So5oi35L+h5oGvXG4gICAgcmV0dXJuIHVzZXJzLm1hcCh1c2VyID0+ICh7XG4gICAgICBpZDogdXNlci5pZCxcbiAgICAgIGZpcnN0TmFtZTogdXNlci5uYW1lPy5zcGxpdCgnICcpWzBdIHx8IG51bGwsXG4gICAgICBsYXN0TmFtZTogdXNlci5uYW1lPy5zcGxpdCgnICcpLnNsaWNlKDEpLmpvaW4oJyAnKSB8fCBudWxsLFxuICAgICAgZW1haWxBZGRyZXNzZXM6IFt7IGVtYWlsQWRkcmVzczogdXNlci5lbWFpbCB9XSxcbiAgICAgIGltYWdlVXJsOiBudWxsIC8vIOaVsOaNruW6k+S4reayoeacieWtmOWCqOWktOWDj+S/oeaBr1xuICAgIH0pKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPlueUqOaIt+WIl+ihqOWksei0pTonLCBlcnJvcilcbiAgICBcbiAgICAvLyDmo4Dmn6XmmK/lkKbmmK/mnYPpmZDpqozor4HplJnor69cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAoXG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfnvZHnu5zor7fmsYLotoXml7YnKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn6K6k6K+B5pyN5YqhJykgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+adg+mZkOS4jei2sycpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfmnKrnmbvlvZUnKVxuICAgICkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+adg+mZkOmqjOivgeWksei0pe+8jOi/lOWbnuepuuaVsOe7hDonLCBlcnJvci5tZXNzYWdlKVxuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICAgIFxuICAgIC8vIOajgOafpeaYr+WQpuaYr+e9kee7nOmUmeivr+aIluWFtuS7liBBUEkg6ZSZ6K+vXG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGlmIChlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdmZXRjaCcpIHx8IFxuICAgICAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ25ldHdvcmsnKSB8fFxuICAgICAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ0VDT05OUkVGVVNFRCcpIHx8XG4gICAgICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygndGltZW91dCcpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+e9kee7nOi/nuaOpemUmeivr++8jOWPr+iDveaYryBDbGVyayDmnI3liqHkuI3lj6/nlKg6JywgZXJyb3IubWVzc2FnZSlcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdDbGVya0FQSVJlc3BvbnNlRXJyb3InKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDbGVyayBBUEkg5ZON5bqU6ZSZ6K+vOicsIGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyDmo4Dmn6XmmK/lkKbmmK8gQ2xlcmsgQVBJIOeJueWumumUmeivr1xuICAgIGlmIChlcnJvciAmJiB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnICYmICdjbGVya0Vycm9yJyBpbiBlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignQ2xlcmsgQVBJIOmUmeivr+ivpuaDhTonLCBKU09OLnN0cmluZ2lmeShlcnJvciwgbnVsbCwgMikpXG4gICAgICAvLyDov5Tlm57nqbrmlbDnu4TogIzkuI3mmK/mipvlh7rplJnor6/vvIzpmLLmraLpobXpnaLltKnmuoNcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICBcbiAgICAvLyDlhbbku5bmnKrnn6XplJnor6/vvIzov5Tlm57nqbrmlbDnu4TpmLLmraLpobXpnaLltKnmuoNcbiAgICBjb25zb2xlLmVycm9yKCfmnKrnn6XplJnor6/nsbvlnovvvIzov5Tlm57nqbrmlbDnu4Q6JywgZXJyb3IpXG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuLyoqXG4gKiDmoLnmja7nlKjmiLdJROiOt+WPluaIkOWwsVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWNoaWV2ZW1lbnRzQnlVc2VySWQodGFyZ2V0VXNlcklkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIGNvbnN0IGFjaGlldmVtZW50cyA9IGF3YWl0IHByaXNtYS5hY2hpZXZlbWVudC5maW5kTWFueSh7XG4gICAgICB3aGVyZTogeyB1c2VySWQ6IHRhcmdldFVzZXJJZCB9LFxuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9XG4gICAgfSlcblxuICAgIHJldHVybiBhY2hpZXZlbWVudHNcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfojrflj5bnlKjmiLfmiJDlsLHlpLHotKU6JywgZXJyb3IpXG4gICAgdGhyb3cgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yIDogbmV3IEVycm9yKCfojrflj5bnlKjmiLfmiJDlsLHlpLHotKUnKVxuICB9XG59XG5cbi8qKlxuICog566h55CG5ZGY5Yig6Zmk5oiQ5bCx77yI5peg6KeG5omA5pyJ6ICF77yJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZG1pbkRlbGV0ZUFjaGlldmVtZW50KGFjaGlldmVtZW50SWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gICAgXG4gICAgLy8g55u05o6l5Yig6Zmk5oiQ5bCx6K6w5b2V77yM5LiN5qOA5p+l5omA5pyJ6ICFXG4gICAgYXdhaXQgcHJpc21hLmFjaGlldmVtZW50LmRlbGV0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogYWNoaWV2ZW1lbnRJZCB9XG4gICAgfSlcblxuICAgIC8vIOmHjeaWsOmqjOivgee8k+WtmO+8jOWIt+aWsOebuOWFs+mhtemdolxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vdXNlcnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvZmlsZScpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hY2hpZXZlbWVudHMnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiAn5oiQ5bCx5bey5oiQ5Yqf5Yig6ZmkJ1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfliKDpmaTmiJDlsLHlpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5Yig6Zmk5oiQ5bCx5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOWIm+W7uuaWsOernui1m++8iOeuoeeQhuWRmOadg+mZkO+8iVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29tcGV0aXRpb24oZGF0YToge1xuICBuYW1lOiBzdHJpbmdcbiAgY2F0ZWdvcnk6IHN0cmluZ1xuICBsZXZlbD86IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICBkZWFkbGluZTogc3RyaW5nXG4gIG1heFBhcnRpY2lwYW50czogc3RyaW5nXG59KSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBcbiAgICAvLyDpqozor4HovpPlhaXmlbDmja5cbiAgICBpZiAoIWRhdGEubmFtZSB8fCBkYXRhLm5hbWUudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfnq57otZvlkI3np7DkuI3og73kuLrnqbonXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICghZGF0YS5jYXRlZ29yeSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfor7fpgInmi6nnq57otZvliIbnsbsnXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICghZGF0YS5kZWFkbGluZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfor7fpgInmi6nmiKrmraLml6XmnJ8nXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGRlYWRsaW5lRGF0ZSA9IG5ldyBEYXRlKGRhdGEuZGVhZGxpbmUpXG4gICAgaWYgKGlzTmFOKGRlYWRsaW5lRGF0ZS5nZXRUaW1lKCkpIHx8IGRlYWRsaW5lRGF0ZSA8PSBuZXcgRGF0ZSgpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+aIquatouaXpeacn+W/hemhu+aYr+acquadpeaXtumXtCdcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgbWF4UGFydGljaXBhbnRzTnVtID0gcGFyc2VJbnQoZGF0YS5tYXhQYXJ0aWNpcGFudHMpXG4gICAgaWYgKGlzTmFOKG1heFBhcnRpY2lwYW50c051bSkgfHwgbWF4UGFydGljaXBhbnRzTnVtIDw9IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5Lq65pWw5LiK6ZmQ5b+F6aG75piv5aSn5LqOMOeahOaVsOWtlydcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8g6aqM6K+B56ue6LWb57qn5YirXG4gICAgY29uc3QgdmFsaWRMZXZlbHMgPSBbJ+agoee6pycsICfluILnuqcnLCAn55yB57qnJywgJ+WbveWutue6pycsICflm73pmYXnuqcnXVxuICAgIGNvbnN0IGxldmVsID0gZGF0YS5sZXZlbCAmJiB2YWxpZExldmVscy5pbmNsdWRlcyhkYXRhLmxldmVsKSA/IGRhdGEubGV2ZWwgOiAn5qCh57qnJ1xuXG4gICAgLy8g5Yib5bu656ue6LWbXG4gICAgY29uc3QgY29tcGV0aXRpb24gPSBhd2FpdCBwcmlzbWEuY29tcGV0aXRpb24uY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLnRyaW0oKSxcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXG4gICAgICAgIGxldmVsLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbj8udHJpbSgpIHx8ICcnLFxuICAgICAgICBkZWFkbGluZTogZGVhZGxpbmVEYXRlLFxuICAgICAgICBtYXhQYXJ0aWNpcGFudHM6IG1heFBhcnRpY2lwYW50c051bSxcbiAgICAgICAgY3VycmVudFBhcnRpY2lwYW50czogMFxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDliLfmlrDnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9jb21wZXRpdGlvbnMnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiBjb21wZXRpdGlvbixcbiAgICAgIG1lc3NhZ2U6ICfnq57otZvliJvlu7rmiJDlip/vvIEnXG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5Yib5bu656ue6LWb5aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+WIm+W7uuernui1m+Wksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDmm7TmlrDnq57otZvvvIjnrqHnkIblkZjmnYPpmZDvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNvbXBldGl0aW9uKGlkOiBzdHJpbmcsIGRhdGE6IHtcbiAgbmFtZTogc3RyaW5nXG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgbGV2ZWw/OiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgZGVhZGxpbmU6IHN0cmluZ1xuICBtYXhQYXJ0aWNpcGFudHM6IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gICAgXG4gICAgLy8g6aqM6K+B6L6T5YWl5pWw5o2uXG4gICAgaWYgKCFkYXRhLm5hbWUgfHwgZGF0YS5uYW1lLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn56ue6LWb5ZCN56ew5LiN6IO95Li656m6J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIWRhdGEuY2F0ZWdvcnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn6K+36YCJ5oup56ue6LWb5YiG57G7J1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIWRhdGEuZGVhZGxpbmUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn6K+36YCJ5oup5oiq5q2i5pel5pyfJ1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBkZWFkbGluZURhdGUgPSBuZXcgRGF0ZShkYXRhLmRlYWRsaW5lKVxuICAgIGlmIChpc05hTihkZWFkbGluZURhdGUuZ2V0VGltZSgpKSB8fCBkZWFkbGluZURhdGUgPD0gbmV3IERhdGUoKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfmiKrmraLml6XmnJ/lv4XpobvmmK/mnKrmnaXml7bpl7QnXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG1heFBhcnRpY2lwYW50c051bSA9IHBhcnNlSW50KGRhdGEubWF4UGFydGljaXBhbnRzKVxuICAgIGlmIChpc05hTihtYXhQYXJ0aWNpcGFudHNOdW0pIHx8IG1heFBhcnRpY2lwYW50c051bSA8PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+S6uuaVsOS4iumZkOW/hemhu+aYr+Wkp+S6jjDnmoTmlbDlrZcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5qOA5p+l56ue6LWb5piv5ZCm5a2Y5ZyoXG4gICAgY29uc3QgZXhpc3RpbmdDb21wZXRpdGlvbiA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH1cbiAgICB9KVxuXG4gICAgaWYgKCFleGlzdGluZ0NvbXBldGl0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ernui1m+S4jeWtmOWcqCdcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8g6aqM6K+B56ue6LWb57qn5YirXG4gICAgY29uc3QgdmFsaWRMZXZlbHMgPSBbJ1NUQVRFJywgJ1BST1ZJTkNFJywgJ1NDSE9PTCddXG4gICAgY29uc3QgbGV2ZWwgPSBkYXRhLmxldmVsICYmIHZhbGlkTGV2ZWxzLmluY2x1ZGVzKGRhdGEubGV2ZWwpID8gZGF0YS5sZXZlbCA6ICdTQ0hPT0wnXG5cbiAgICAvLyDmm7TmlrDnq57otZtcbiAgICBjb25zdCBjb21wZXRpdGlvbiA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLnRyaW0oKSxcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXG4gICAgICAgIGxldmVsLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbj8udHJpbSgpIHx8ICcnLFxuICAgICAgICBkZWFkbGluZTogZGVhZGxpbmVEYXRlLFxuICAgICAgICBtYXhQYXJ0aWNpcGFudHM6IG1heFBhcnRpY2lwYW50c051bVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDliLfmlrDnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9jb21wZXRpdGlvbnMnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiBjb21wZXRpdGlvbixcbiAgICAgIG1lc3NhZ2U6ICfnq57otZvmm7TmlrDmiJDlip/vvIEnXG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign5pu05paw56ue6LWb5aSx6LSlOicsIGVycm9yKVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+abtOaWsOernui1m+Wksei0pe+8jOivt+eojeWQjumHjeivlSdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDliKDpmaTnq57otZvvvIjnrqHnkIblkZjmnYPpmZDvvIzlronlhajlpITnkIblpJbplK7kvp3otZbvvIlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNvbXBldGl0aW9uKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuXG4gICAgLy8g5qOA5p+l56ue6LWb5piv5ZCm5a2Y5ZyoXG4gICAgY29uc3QgZXhpc3RpbmdDb21wZXRpdGlvbiA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH1cbiAgICB9KVxuXG4gICAgaWYgKCFleGlzdGluZ0NvbXBldGl0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ernui1m+S4jeWtmOWcqCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDkvb/nlKggUHJpc21hIOS6i+WKoeWuieWFqOWIoOmZpOernui1m+WPiuWFtuebuOWFs+aVsOaNrlxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XG4gICAgICAvLyDnrKzkuIDmraXvvJrliKDpmaTmiYDmnInnm7jlhbPnmoTmiqXlkI3orrDlvZVcbiAgICAgIGF3YWl0IHR4LnJlZ2lzdHJhdGlvbi5kZWxldGVNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgY29tcGV0aXRpb25JZDogaWQgfVxuICAgICAgfSlcbiAgICAgIFxuICAgICAgLy8g56ys5LqM5q2l77ya5Yig6Zmk56ue6LWb5pys6LqrXG4gICAgICBhd2FpdCB0eC5jb21wZXRpdGlvbi5kZWxldGUoe1xuICAgICAgICB3aGVyZTogeyBpZCB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyDliLfmlrDnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9jb21wZXRpdGlvbnMnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiAn56ue6LWb5Yig6Zmk5oiQ5Yqf77yBJ1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+WIoOmZpOernui1m+Wksei0pTonLCBlcnJvcilcbiAgICBcbiAgICAvLyDmo4Dmn6XmmK/lkKbmmK/lpJbplK7nuqbmnZ/plJnor69cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdmb3JlaWduIGtleSBjb25zdHJhaW50JykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5Yig6Zmk5aSx6LSl77ya6K+l56ue6LWb5LuN5pyJ5YWz6IGU5pWw5o2u77yM6K+35YWI5aSE55CG55u45YWz6K6w5b2VJ1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfliKDpmaTnq57otZvlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W5omA5pyJ5oyH5a+86ICB5biI5YiX6KGoXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUZWFjaGVycygpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIGNvbnN0IHRlYWNoZXJzID0gYXdhaXQgcHJpc21hLnRlYWNoZXIuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9XG4gICAgfSlcblxuICAgIHJldHVybiB0ZWFjaGVyc1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluiAgeW4iOWIl+ihqOWksei0pTonLCBlcnJvcilcbiAgICB0aHJvdyBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiBuZXcgRXJyb3IoJ+iOt+WPluiAgeW4iOWIl+ihqOWksei0pe+8jOivt+eojeWQjumHjeivlScpXG4gIH1cbn1cblxuLyoqXG4gKiDliJvlu7rmlrDmjIflr7zogIHluIhcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRlYWNoZXIoZGF0YToge1xuICBuYW1lOiBzdHJpbmdcbiAgZGVwYXJ0bWVudD86IHN0cmluZ1xufSkge1xuICB0cnkge1xuICAgIGF3YWl0IHZlcmlmeUFkbWluUGVybWlzc2lvbigpXG4gICAgXG4gICAgLy8g6aqM6K+B6L6T5YWl5pWw5o2uXG4gICAgaWYgKCFkYXRhLm5hbWUgfHwgZGF0YS5uYW1lLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5pWZ5biI5aeT5ZCN5LiN6IO95Li656m6J1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOafpeivouW9k+WJjeaVsOaNruW6k+S4reWFseacieWkmuWwkeS9jeiAgeW4iFxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG4gICAgY29uc3QgdGVhY2hlckNvdW50ID0gYXdhaXQgcHJpc21hLnRlYWNoZXIuY291bnQoKVxuICAgIFxuICAgIC8vIOeUn+aIkOagvOW8j+S4uiBUICsg5bm05Lu9ICsgM+S9jea1geawtOWPt+eahOaVmeW4iOe8luWPt1xuICAgIGNvbnN0IHRlYWNoZXJObyA9IGBUJHtjdXJyZW50WWVhcn0ke1N0cmluZyh0ZWFjaGVyQ291bnQgKyAxKS5wYWRTdGFydCgzLCAnMCcpfWBcbiAgICBcbiAgICAvLyDliJvlu7rogIHluIjorrDlvZVcbiAgICBjb25zdCB0ZWFjaGVyID0gYXdhaXQgcHJpc21hLnRlYWNoZXIuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLnRyaW0oKSxcbiAgICAgICAgZGVwYXJ0bWVudDogZGF0YS5kZXBhcnRtZW50Py50cmltKCkgfHwgbnVsbCxcbiAgICAgICAgdGVhY2hlck5vXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIOWIt+aWsOe8k+WtmFxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vdGVhY2hlcnMnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiB0ZWFjaGVyLFxuICAgICAgbWVzc2FnZTogJ+aMh+WvvOiAgeW4iOa3u+WKoOaIkOWKn++8gSdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfliJvlu7rogIHluIjlpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5Yib5bu66ICB5biI5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOWIoOmZpOaMh+WvvOiAgeW4iFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVGVhY2hlcihpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcblxuICAgIC8vIOajgOafpeiAgeW4iOaYr+WQpuWtmOWcqFxuICAgIGNvbnN0IGV4aXN0aW5nVGVhY2hlciA9IGF3YWl0IHByaXNtYS50ZWFjaGVyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQgfVxuICAgIH0pXG5cbiAgICBpZiAoIWV4aXN0aW5nVGVhY2hlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfmjIflr7zogIHluIjkuI3lrZjlnKgnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5qOA5p+l5piv5ZCm5pyJ5YWz6IGU55qE5oql5ZCN6K6w5b2VXG4gICAgY29uc3QgcmVnaXN0cmF0aW9uQ291bnQgPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmNvdW50KHtcbiAgICAgIHdoZXJlOiB7IHRlYWNoZXJJZDogaWQgfVxuICAgIH0pXG5cbiAgICBpZiAocmVnaXN0cmF0aW9uQ291bnQgPiAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+ivpeiAgeW4iOi/mOacieWFs+iBlOeahOaKpeWQjeiusOW9le+8jOaXoOazleWIoOmZpCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDliKDpmaTogIHluIjorrDlvZVcbiAgICBhd2FpdCBwcmlzbWEudGVhY2hlci5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfVxuICAgIH0pXG5cbiAgICAvLyDliLfmlrDnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3RlYWNoZXJzJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ+aMh+WvvOiAgeW4iOWIoOmZpOaIkOWKn++8gSdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfliKDpmaTogIHluIjlpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5Yig6Zmk6ICB5biI5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPluaJgOacieaKpeWQjeiusOW9le+8iOeuoeeQhuWRmOWuoeaJueS4k+eUqO+8iVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUmVnaXN0cmF0aW9ucygpIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgY29uc3QgcmVnaXN0cmF0aW9ucyA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uZmluZE1hbnkoe1xuICAgICAgc2VsZWN0OiB7XG4gICAgICAgIGlkOiB0cnVlLFxuICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgIGFwcGxpY2FudE5hbWU6IHRydWUsXG4gICAgICAgIHByb2plY3ROYW1lOiB0cnVlLFxuICAgICAgICB0ZWFtTWVtYmVyczogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxuICAgICAgICBjb21wZXRpdGlvbjoge1xuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IHRydWUsXG4gICAgICAgICAgICBkZWFkbGluZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGVhY2hlcjoge1xuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgICAgdGVhY2hlck5vOiB0cnVlLFxuICAgICAgICAgICAgZGVwYXJ0bWVudDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvcmRlckJ5OiB7XG4gICAgICAgIGNyZWF0ZWRBdDogJ2Rlc2MnXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiByZWdpc3RyYXRpb25zXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W5oql5ZCN6K6w5b2V5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcign6I635Y+W5oql5ZCN6K6w5b2V5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJylcbiAgfVxufVxuXG4vKipcbiAqIOWuoeaguOaKpeWQjeiusOW9lVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmV2aWV3UmVnaXN0cmF0aW9uKHJlZ2lzdHJhdGlvbklkOiBzdHJpbmcsIHN0YXR1czogc3RyaW5nLCBmZWVkYmFjaz86IHN0cmluZykge1xuICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICBcbiAgdHJ5IHtcbiAgICAvLyDpqozor4HnirbmgIHlgLxcbiAgICBjb25zdCB2YWxpZFN0YXR1c2VzID0gWydQRU5ESU5HJywgJ0FQUFJPVkVEJywgJ1JFSkVDVEVEX1JFVFJZJywgJ1JFSkVDVEVEX0ZJTkFMJ11cbiAgICBpZiAoIXZhbGlkU3RhdHVzZXMuaW5jbHVkZXMoc3RhdHVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfml6DmlYjnmoTlrqHmibnnirbmgIEnKVxuICAgIH1cblxuICAgIC8vIOWmguaenOeKtuaAgeS4uiBSRUpFQ1RFRF9SRVRSWSDmiJYgUkVKRUNURURfRklOQUzvvIzlv4Xpobvmj5Dkvpvlj43ppojmhI/op4FcbiAgICBpZiAoKHN0YXR1cyA9PT0gJ1JFSkVDVEVEX1JFVFJZJyB8fCBzdGF0dXMgPT09ICdSRUpFQ1RFRF9GSU5BTCcpICYmICghZmVlZGJhY2sgfHwgZmVlZGJhY2sudHJpbSgpLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign6amz5Zue55Sz6K+35pe25b+F6aG75o+Q5L6b5Y+N6aaI5oSP6KeBJylcbiAgICB9XG5cbiAgICAvLyDmo4Dmn6XmiqXlkI3orrDlvZXmmK/lkKblrZjlnKhcbiAgICBjb25zdCBleGlzdGluZ1JlZ2lzdHJhdGlvbiA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZDogcmVnaXN0cmF0aW9uSWQgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgY29tcGV0aXRpb246IHRydWUsXG4gICAgICAgIHVzZXI6IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKCFleGlzdGluZ1JlZ2lzdHJhdGlvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfmiqXlkI3orrDlvZXkuI3lrZjlnKgnKVxuICAgIH1cblxuICAgIC8vIOabtOaWsOaKpeWQjeiusOW9lVxuICAgIGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24udXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiByZWdpc3RyYXRpb25JZCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGZlZWRiYWNrOiBmZWVkYmFjaz8udHJpbSgpIHx8IG51bGxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gTk9URTog5a6h5om55pON5L2c5ZCO5ZCM5q2lIGN1cnJlbnRQYXJ0aWNpcGFudHMg5Li655yf5a6e6K6h5pWw5YC8XG4gICAgY29uc3QgdXBkYXRlZENvdW50ID0gYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi5jb3VudCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjb21wZXRpdGlvbklkOiBleGlzdGluZ1JlZ2lzdHJhdGlvbi5jb21wZXRpdGlvbklkLFxuICAgICAgICBzdGF0dXM6IHsgbm90SW46IFsnUkVKRUNURURfRklOQUwnXSB9XG4gICAgICB9XG4gICAgfSlcbiAgICBhd2FpdCBwcmlzbWEuY29tcGV0aXRpb24udXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBleGlzdGluZ1JlZ2lzdHJhdGlvbi5jb21wZXRpdGlvbklkIH0sXG4gICAgICBkYXRhOiB7IGN1cnJlbnRQYXJ0aWNpcGFudHM6IHVwZGF0ZWRDb3VudCB9XG4gICAgfSlcblxuICAgIC8vIOmHjeaWsOmqjOivgee8k+WtmFxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vcmVnaXN0cmF0aW9ucycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9maWxlJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9jb21wZXRpdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vYWNoaWV2ZW1lbnRzJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogc3RhdHVzID09PSAnQVBQUk9WRUQnID8gJ+aKpeWQjeW3sumAmui/h++8jOW3suiHquWKqOeUn+aIkOaIkOWwseiusOW9le+8gScgOiAn5oql5ZCN5bey5pu05pawJ1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+WuoeaguOaKpeWQjeWksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICflrqHmoLjlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W566h55CG5ZGY5o6n5Yi25Y+w57uf6K6h5pWw5o2uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXNoYm9hcmRTdGF0cygpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICAgIFxuICAgIC8vIOS7juaVsOaNruW6k+iOt+WPlueUqOaIt+aAu+aVsO+8jOS4jeWGjeS+nei1liBDbGVyayBBUElcbiAgICBsZXQgdG90YWxVc2VycyA9IDBcbiAgICB0cnkge1xuICAgICAgdG90YWxVc2VycyA9IGF3YWl0IHByaXNtYS51c2VyLmNvdW50KClcbiAgICB9IGNhdGNoIChkYkVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfojrflj5bnlKjmiLfmgLvmlbDlpLHotKU6JywgZGJFcnJvcilcbiAgICAgIHRvdGFsVXNlcnMgPSAwIC8vIOS9v+eUqOm7mOiupOWAvFxuICAgIH1cbiAgICBcbiAgICAvLyDlubbooYzojrflj5blhbbku5bnu5/orqHmlbDmja5cbiAgICBjb25zdCBbXG4gICAgICB0b3RhbENvbXBldGl0aW9ucyxcbiAgICAgIHRvdGFsUmVnaXN0cmF0aW9ucyxcbiAgICAgIHBlbmRpbmdSZXZpZXdzLFxuICAgICAgY2F0ZWdvcnlTdGF0cyxcbiAgICAgIHRvcENvbXBldGl0aW9ucyxcbiAgICAgIHJlY2VudFBlbmRpbmdcbiAgICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgLy8g6LWb5LqL5oC75pWwXG4gICAgICBwcmlzbWEuY29tcGV0aXRpb24uY291bnQoKSxcbiAgICAgIFxuICAgICAgLy8g5oql5ZCN5oC75pWwXG4gICAgICBwcmlzbWEucmVnaXN0cmF0aW9uLmNvdW50KCksXG4gICAgICBcbiAgICAgIC8vIOW+heWuoeaguOaVsOmHj1xuICAgICAgcHJpc21hLnJlZ2lzdHJhdGlvbi5jb3VudCh7XG4gICAgICAgIHdoZXJlOiB7IHN0YXR1czogJ1BFTkRJTkcnIH1cbiAgICAgIH0pLFxuICAgICAgXG4gICAgICAvLyDmjInliIbnsbvnu5/orqHotZvkuovmlbDph49cbiAgICAgIHByaXNtYS5jb21wZXRpdGlvbi5ncm91cEJ5KHtcbiAgICAgICAgYnk6IFsnY2F0ZWdvcnknXSxcbiAgICAgICAgX2NvdW50OiB7XG4gICAgICAgICAgaWQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBcbiAgICAgIC8vIOaKpeWQjeS6uuaVsOacgOWkmueahOWJjTXkuKrotZvkuotcbiAgICAgIHByaXNtYS5jb21wZXRpdGlvbi5maW5kTWFueSh7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgX2NvdW50OiB7XG4gICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uczogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3JkZXJCeToge1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbnM6IHtcbiAgICAgICAgICAgIF9jb3VudDogJ2Rlc2MnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0YWtlOiA1XG4gICAgICB9KSxcbiAgICAgIFxuICAgICAgLy8g5pyA5pawNeadoeW+heWuoeaguOaKpeWQjVxuICAgICAgcHJpc21hLnJlZ2lzdHJhdGlvbi5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHN0YXR1czogJ1BFTkRJTkcnIH0sXG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgIGFwcGxpY2FudE5hbWU6IHRydWUsXG4gICAgICAgICAgY29tcGV0aXRpb246IHtcbiAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICBuYW1lOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjcmVhdGVkQXQ6IHRydWUsXG4gICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgIG5hbWU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJ1xuICAgICAgICB9LFxuICAgICAgICB0YWtlOiA1XG4gICAgICB9KVxuICAgIF0pXG5cbiAgICAvLyDlpITnkIbliIbnsbvnu5/orqHmlbDmja7vvIzlkIjlubbnm7jkvLzliIbnsbtcbiAgICBjb25zdCBwcm9jZXNzZWRDYXRlZ29yeVN0YXRzID0gY2F0ZWdvcnlTdGF0cy5yZWR1Y2UoKGFjYzogeyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfVtdLCBpdGVtOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gaXRlbS5jYXRlZ29yeSB8fCAn5YW25LuWJ1xuICAgICAgY29uc3QgZXhpc3RpbmdJdGVtID0gYWNjLmZpbmQoKHN0YXQ6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH0pID0+IHN0YXQubmFtZSA9PT0gY2F0ZWdvcnkpXG4gICAgICBcbiAgICAgIGlmIChleGlzdGluZ0l0ZW0pIHtcbiAgICAgICAgZXhpc3RpbmdJdGVtLnZhbHVlICs9IGl0ZW0uX2NvdW50LmlkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2MucHVzaCh7XG4gICAgICAgICAgbmFtZTogY2F0ZWdvcnksXG4gICAgICAgICAgdmFsdWU6IGl0ZW0uX2NvdW50LmlkXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBcbiAgICAgIHJldHVybiBhY2NcbiAgICB9LCBbXSBhcyB7IG5hbWU6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9W10pXG5cbiAgICByZXR1cm4ge1xuICAgICAgdG90YWxVc2VycyxcbiAgICAgIHRvdGFsQ29tcGV0aXRpb25zLFxuICAgICAgdG90YWxSZWdpc3RyYXRpb25zLFxuICAgICAgcGVuZGluZ1Jldmlld3MsXG4gICAgICBjYXRlZ29yeVN0YXRzOiBwcm9jZXNzZWRDYXRlZ29yeVN0YXRzLFxuICAgICAgdG9wQ29tcGV0aXRpb25zOiB0b3BDb21wZXRpdGlvbnMubWFwKChjb21wOiBhbnkpID0+ICh7XG4gICAgICAgIG5hbWU6IGNvbXAubmFtZSxcbiAgICAgICAgcmVnaXN0cmF0aW9uczogY29tcC5fY291bnQucmVnaXN0cmF0aW9uc1xuICAgICAgfSkpLFxuICAgICAgcmVjZW50UGVuZGluZzogcmVjZW50UGVuZGluZy5tYXAoKHJlZzogYW55KSA9PiAoe1xuICAgICAgICBpZDogcmVnLmlkLFxuICAgICAgICBhcHBsaWNhbnROYW1lOiByZWcuYXBwbGljYW50TmFtZSB8fCByZWcudXNlcj8ubmFtZSB8fCAn5pyq55+lJyxcbiAgICAgICAgY29tcGV0aXRpb25OYW1lOiByZWcuY29tcGV0aXRpb24ubmFtZSxcbiAgICAgICAgY3JlYXRlZEF0OiByZWcuY3JlYXRlZEF0XG4gICAgICB9KSlcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W5Luq6KGo5p2/57uf6K6h5pWw5o2u5aSx6LSlOicsIGVycm9yKVxuICAgIFxuICAgIC8vIOWmguaenOaYr+adg+mZkOmqjOivgemUmeivr++8jOi/lOWbnum7mOiupOe7n+iuoeaVsOaNrlxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIChcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+e9kee7nOivt+axgui2heaXticpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCforqTor4HmnI3liqEnKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn5p2D6ZmQ5LiN6LazJykgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+acqueZu+W9lScpXG4gICAgKSkge1xuICAgICAgY29uc29sZS5lcnJvcign5p2D6ZmQ6aqM6K+B5aSx6LSl77yM6L+U5Zue6buY6K6k57uf6K6h5pWw5o2uOicsIGVycm9yLm1lc3NhZ2UpXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3RhbFVzZXJzOiAwLFxuICAgICAgICB0b3RhbENvbXBldGl0aW9uczogMCxcbiAgICAgICAgdG90YWxSZWdpc3RyYXRpb25zOiAwLFxuICAgICAgICBwZW5kaW5nUmV2aWV3czogMCxcbiAgICAgICAgY2F0ZWdvcnlTdGF0czogW10sXG4gICAgICAgIHRvcENvbXBldGl0aW9uczogW10sXG4gICAgICAgIHJlY2VudFBlbmRpbmc6IFtdXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOWFtuS7lumUmeivr+S5n+i/lOWbnum7mOiupOe7n+iuoeaVsOaNru+8jOmYsuatoumhtemdouW0qea6g1xuICAgIGNvbnNvbGUuZXJyb3IoJ+acquefpemUmeivr++8jOi/lOWbnum7mOiupOe7n+iuoeaVsOaNrjonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgdG90YWxVc2VyczogMCxcbiAgICAgIHRvdGFsQ29tcGV0aXRpb25zOiAwLFxuICAgICAgdG90YWxSZWdpc3RyYXRpb25zOiAwLFxuICAgICAgcGVuZGluZ1Jldmlld3M6IDAsXG4gICAgICBjYXRlZ29yeVN0YXRzOiBbXSxcbiAgICAgIHRvcENvbXBldGl0aW9uczogW10sXG4gICAgICByZWNlbnRQZW5kaW5nOiBbXVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOaJuemHj+WvvOWFpeaMh+WvvOiAgeW4iFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYmF0Y2hJbXBvcnRUZWFjaGVycyh0ZWFjaGVyc0RhdGE6IHsgbmFtZTogc3RyaW5nOyBkZXBhcnRtZW50Pzogc3RyaW5nIH1bXSkge1xuICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICBcbiAgdHJ5IHtcbiAgICAvLyDojrflj5blvZPliY3lubTku71cbiAgICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICAgIGNvbnN0IHllYXJQcmVmaXggPSBgVCR7Y3VycmVudFllYXJ9YFxuICAgIFxuICAgIC8vIOafpeivouW9k+WJjeW5tOS7veacgOaWsOeahOaVmeW4iOe8luWPt1xuICAgIGNvbnN0IGxhdGVzdFRlYWNoZXIgPSBhd2FpdCBwcmlzbWEudGVhY2hlci5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdGVhY2hlck5vOiB7XG4gICAgICAgICAgc3RhcnRzV2l0aDogeWVhclByZWZpeFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb3JkZXJCeToge1xuICAgICAgICB0ZWFjaGVyTm86ICdkZXNjJ1xuICAgICAgfVxuICAgIH0pXG4gICAgXG4gICAgLy8g6K6h566X6LW35aeL5rWB5rC05Y+3XG4gICAgbGV0IHNlcmlhbE51bWJlciA9IDFcbiAgICBpZiAobGF0ZXN0VGVhY2hlcikge1xuICAgICAgY29uc3QgbGF0ZXN0U2VyaWFsID0gcGFyc2VJbnQobGF0ZXN0VGVhY2hlci50ZWFjaGVyTm8uc2xpY2UoLTMpKVxuICAgICAgaWYgKCFpc05hTihsYXRlc3RTZXJpYWwpKSB7XG4gICAgICAgIHNlcmlhbE51bWJlciA9IGxhdGVzdFNlcmlhbCArIDFcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8g5qC85byP5YyW5pWZ5biI5pWw5o2uXG4gICAgY29uc3QgZm9ybWF0dGVkVGVhY2hlcnMgPSB0ZWFjaGVyc0RhdGEubWFwKCh0ZWFjaGVyLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGVhY2hlck5vID0gYCR7eWVhclByZWZpeH0ke3NlcmlhbE51bWJlci50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9YFxuICAgICAgc2VyaWFsTnVtYmVyKytcbiAgICAgIFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogdGVhY2hlci5uYW1lLnRyaW0oKSxcbiAgICAgICAgZGVwYXJ0bWVudDogdGVhY2hlci5kZXBhcnRtZW50Py50cmltKCkgfHwgbnVsbCxcbiAgICAgICAgdGVhY2hlck5vXG4gICAgICB9XG4gICAgfSlcbiAgICBcbiAgICAvLyDmibnph4/mj5LlhaXmlbDmja7lupNcbiAgICBhd2FpdCBwcmlzbWEudGVhY2hlci5jcmVhdGVNYW55KHtcbiAgICAgIGRhdGE6IGZvcm1hdHRlZFRlYWNoZXJzXG4gICAgfSlcbiAgICBcbiAgICAvLyDph43mlrDpqozor4HnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3RlYWNoZXJzJylcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGNvdW50OiBmb3JtYXR0ZWRUZWFjaGVycy5sZW5ndGgsXG4gICAgICBtZXNzYWdlOiBg5oiQ5Yqf5a+85YWlICR7Zm9ybWF0dGVkVGVhY2hlcnMubGVuZ3RofSDkvY3mjIflr7zogIHluIhgXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+aJuemHj+WvvOWFpeaMh+WvvOiAgeW4iOWksei0pTonLCBlcnJvcilcbiAgICB0aHJvdyBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiBuZXcgRXJyb3IoJ+aJuemHj+WvvOWFpeWksei0pe+8jOivt+eojeWQjumHjeivlScpXG4gIH1cbn1cblxuLyoqXG4gKiDmibnph4/lrqHmibnmiqXlkI3orrDlvZVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJhdGNoUmV2aWV3UmVnaXN0cmF0aW9ucyhcbiAgaWRzOiBzdHJpbmdbXSwgXG4gIHN0YXR1czogJ0FQUFJPVkVEJyB8ICdSRUpFQ1RFRF9SRVRSWScgfCAnUkVKRUNURURfRklOQUwnLCBcbiAgZmVlZGJhY2s/OiBzdHJpbmdcbikge1xuICBhd2FpdCB2ZXJpZnlBZG1pblBlcm1pc3Npb24oKVxuICBcbiAgdHJ5IHtcbiAgICAvLyDpqozor4HnirbmgIHlgLxcbiAgICBjb25zdCB2YWxpZFN0YXR1c2VzID0gWydBUFBST1ZFRCcsICdSRUpFQ1RFRF9SRVRSWScsICdSRUpFQ1RFRF9GSU5BTCddXG4gICAgaWYgKCF2YWxpZFN0YXR1c2VzLmluY2x1ZGVzKHN0YXR1cykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5peg5pWI55qE5a6h5om554q25oCBJylcbiAgICB9XG5cbiAgICAvLyDlpoLmnpznirbmgIHkuLogUkVKRUNURURfUkVUUlkg5oiWIFJFSkVDVEVEX0ZJTkFM77yM5b+F6aG75o+Q5L6b5Y+N6aaI5oSP6KeBXG4gICAgaWYgKChzdGF0dXMgPT09ICdSRUpFQ1RFRF9SRVRSWScgfHwgc3RhdHVzID09PSAnUkVKRUNURURfRklOQUwnKSAmJiAoIWZlZWRiYWNrIHx8IGZlZWRiYWNrLnRyaW0oKS5sZW5ndGggPT09IDApKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ+mps+WbnueUs+ivt+aXtuW/hemhu+aPkOS+m+WPjemmiOaEj+ingScpXG4gICAgfVxuXG4gICAgLy8g6aqM6K+BSUTmlbDnu4RcbiAgICBpZiAoIWlkcyB8fCBpZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ+ivt+mAieaLqeimgeWuoeaJueeahOaKpeWQjeiusOW9lScpXG4gICAgfVxuXG4gICAgLy8g6I635Y+W6KaB5pu05paw55qE5oql5ZCN6K6w5b2V6K+m5oOF77yI55So5LqO55Sf5oiQ5oiQ5bCx77yJXG4gICAgY29uc3QgcmVnaXN0cmF0aW9uc1RvVXBkYXRlID0gYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi5maW5kTWFueSh7XG4gICAgICB3aGVyZTogeyBcbiAgICAgICAgaWQ6IHsgaW46IGlkcyB9XG4gICAgICB9LFxuICAgICAgaW5jbHVkZToge1xuICAgICAgICBjb21wZXRpdGlvbjogdHJ1ZSxcbiAgICAgICAgdXNlcjogdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDmibnph4/mm7TmlrDmiqXlkI3orrDlvZVcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLnVwZGF0ZU1hbnkoe1xuICAgICAgd2hlcmU6IHsgXG4gICAgICAgIGlkOiB7IGluOiBpZHMgfVxuICAgICAgfSxcbiAgICAgIGRhdGE6IHsgXG4gICAgICAgIHN0YXR1cywgXG4gICAgICAgIGZlZWRiYWNrOiBmZWVkYmFjaz8udHJpbSgpIHx8IG51bGwgXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIE5PVEU6IOaJuemHj+WuoeaJueWQjuWQjOatpeaJgOaciea2ieWPiuernui1m+eahCBjdXJyZW50UGFydGljaXBhbnRzXG4gICAgY29uc3QgYWZmZWN0ZWRDb21wZXRpdGlvbklkcyA9IFsuLi5uZXcgU2V0KHJlZ2lzdHJhdGlvbnNUb1VwZGF0ZS5tYXAociA9PiByLmNvbXBldGl0aW9uSWQpKV1cbiAgICBmb3IgKGNvbnN0IGNvbXBJZCBvZiBhZmZlY3RlZENvbXBldGl0aW9uSWRzKSB7XG4gICAgICBjb25zdCB1cGRhdGVkQ291bnQgPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmNvdW50KHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBjb21wZXRpdGlvbklkOiBjb21wSWQsXG4gICAgICAgICAgc3RhdHVzOiB7IG5vdEluOiBbJ1JFSkVDVEVEX0ZJTkFMJ10gfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLnVwZGF0ZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiBjb21wSWQgfSxcbiAgICAgICAgZGF0YTogeyBjdXJyZW50UGFydGljaXBhbnRzOiB1cGRhdGVkQ291bnQgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyDph43mlrDpqozor4HnvJPlrZhcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3JlZ2lzdHJhdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvZmlsZScpXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jb21wZXRpdGlvbnMnKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vY29tcGV0aXRpb25zJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL2FjaGlldmVtZW50cycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGNvdW50OiByZXN1bHQuY291bnQsXG4gICAgICBtZXNzYWdlOiBzdGF0dXMgPT09ICdBUFBST1ZFRCcgXG4gICAgICAgID8gYOaIkOWKn+mAmui/hyAke3Jlc3VsdC5jb3VudH0g5p2h5oql5ZCN55Sz6K+377yM5bey6Ieq5Yqo55Sf5oiQ5oiQ5bCx6K6w5b2V77yBYCBcbiAgICAgICAgOiBg5oiQ5Yqf5aSE55CGICR7cmVzdWx0LmNvdW50fSDmnaHmiqXlkI3orrDlvZVgXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+aJuemHj+WuoeaJueWksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfmibnph4/lrqHmibnlpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W5omA5pyJ55So5oi355qE5oiQ5bCx6K6w5b2V77yI566h55CG5ZGY5LiT55So77yJXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxBY2hpZXZlbWVudHMoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgICBcbiAgICBjb25zdCBhY2hpZXZlbWVudHMgPSBhd2FpdCBwcmlzbWEuYWNoaWV2ZW1lbnQuZmluZE1hbnkoe1xuICAgICAgaW5jbHVkZToge1xuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgICBlbWFpbDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgY3JlYXRlZEF0OiAnZGVzYydcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGFjaGlldmVtZW50c1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaIkOWwseiusOW9leWksei0pTonLCBlcnJvcilcbiAgICBcbiAgICAvLyDlpoLmnpzmmK/mnYPpmZDpqozor4HplJnor6/vvIzov5Tlm57nqbrmlbDnu4TogIzkuI3mmK/mipvlh7rplJnor69cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAoXG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfnvZHnu5zor7fmsYLotoXml7YnKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygn6K6k6K+B5pyN5YqhJykgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ+adg+mZkOS4jei2sycpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCfmnKrnmbvlvZUnKVxuICAgICkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+adg+mZkOmqjOivgeWksei0pe+8jOi/lOWbnuepuuaVsOe7hDonLCBlcnJvci5tZXNzYWdlKVxuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICAgIFxuICAgIC8vIOWFtuS7lumUmeivr+S5n+i/lOWbnuepuuaVsOe7hO+8jOmYsuatoumhtemdouW0qea6g1xuICAgIGNvbnNvbGUuZXJyb3IoJ+acquefpemUmeivr++8jOi/lOWbnuepuuaVsOe7hDonLCBlcnJvcilcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPluWvvOWHuuaVsOaNrlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwb3J0RGF0YShjb21wZXRpdGlvbklkOiBzdHJpbmcpIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgLy8g5p+l6K+i6K+l6LWb5LqL5LiL5omA5pyJ5bey6YCa6L+H55qE5oql5ZCN6K6w5b2VXG4gICAgY29uc3QgcmVnaXN0cmF0aW9ucyA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgY29tcGV0aXRpb25JZCxcbiAgICAgICAgc3RhdHVzOiAnQVBQUk9WRUQnXG4gICAgICB9LFxuICAgICAgLy8g5qC45b+D5LyY5YyW77ya5Y+q5p+l6K+i6L+ZIDYg5Liq5YmN56uv55yf5q2j6ZyA6KaB55qE5a2X5q6177yM5Lii5byDIGlk44CBdXNlcklk44CB54q25oCB562J5YaX5L2Z5pWw5o2uXG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgYXBwbGljYW50TmFtZTogdHJ1ZSxcbiAgICAgICAgcHJvamVjdE5hbWU6IHRydWUsXG4gICAgICAgIHRlYW1NZW1iZXJzOiB0cnVlLFxuICAgICAgICBub3RlczogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxuICAgICAgICB0ZWFjaGVyOiB7XG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgICAgZGVwYXJ0bWVudDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgY3JlYXRlZEF0OiAnYXNjJ1xuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDmiYHlubPljJbmoLzlvI/ljJbmlbDmja5cbiAgICBjb25zdCBleHBvcnREYXRhID0gcmVnaXN0cmF0aW9ucy5tYXAocmVnID0+ICh7XG4gICAgICDnlLPor7fkuro6IHJlZy5hcHBsaWNhbnROYW1lIHx8ICfmnKrnn6UnLFxuICAgICAg5L2c5ZOB5ZCN56ewOiByZWcucHJvamVjdE5hbWUgfHwgJ+aXoCcsXG4gICAgICDlm6LpmJ/miJDlkZg6IHJlZy50ZWFtTWVtYmVycyB8fCAn5pegJyxcbiAgICAgIOaMh+WvvOiAgeW4iDogcmVnLnRlYWNoZXI/Lm5hbWUgfHwgJ+aXoCcsXG4gICAgICDogIHluIjlrabpmaI6IHJlZy50ZWFjaGVyPy5kZXBhcnRtZW50IHx8ICfml6AnLFxuICAgICAg5oql5ZCN6K+05piOOiByZWcubm90ZXMgfHwgJ+aXoCcsXG4gICAgICDmj5DkuqTml7bpl7Q6IHJlZy5jcmVhdGVkQXQudG9Mb2NhbGVEYXRlU3RyaW5nKCd6aC1DTicsIHtcbiAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICBtb250aDogJzItZGlnaXQnLFxuICAgICAgICBkYXk6ICcyLWRpZ2l0J1xuICAgICAgfSlcbiAgICB9KSlcblxuICAgIHJldHVybiBleHBvcnREYXRhXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W5a+85Ye65pWw5o2u5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcign6I635Y+W5a+85Ye65pWw5o2u5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJylcbiAgfVxufVxuXG4vKipcbiAqIOWIh+aNouernui1m+W9kuaho+eKtuaAgVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdG9nZ2xlQ29tcGV0aXRpb25BcmNoaXZlKGlkOiBzdHJpbmcsIGN1cnJlbnRTdGF0dXM6IGJvb2xlYW4pIHtcbiAgYXdhaXQgdmVyaWZ5QWRtaW5QZXJtaXNzaW9uKClcbiAgXG4gIHRyeSB7XG4gICAgLy8g5pu05paw56ue6LWb54q25oCBXG4gICAgY29uc3QgbmV3U3RhdHVzID0gIWN1cnJlbnRTdGF0dXNcbiAgICBjb25zdCBjb21wZXRpdGlvbiA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGE6IHsgaXNBY3RpdmU6IG5ld1N0YXR1cyB9XG4gICAgfSlcblxuICAgIC8vIOmHjeaWsOmqjOivgee8k+WtmFxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vY29tcGV0aXRpb25zJylcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NvbXBldGl0aW9ucycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGRhdGE6IGNvbXBldGl0aW9uLFxuICAgICAgbWVzc2FnZTogbmV3U3RhdHVzID8gJ+ernui1m+W3sumHjeaWsOS4iuaeticgOiAn56ue6LWb5bey5b2S5qGjJ1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfliIfmjaLnq57otZvnirbmgIHlpLHotKU6JywgZXJyb3IpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5YiH5o2i56ue6LWb54q25oCB5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrUkF3akJzQixpTUFBQSJ9
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f9508f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:f9508f [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$2ec501__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:2ec501 [app-client] (ecmascript) <text/javascript>");
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
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f9508f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["batchReviewRegistrations"])(selectedIds, 'APPROVED');
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
                                                                            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$2ec501__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["reviewRegistration"])(id, status, feedback);
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

//# sourceMappingURL=src_ff660e63._.js.map