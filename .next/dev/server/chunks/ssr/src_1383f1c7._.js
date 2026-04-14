module.exports = [
"[project]/src/components/ui/tabs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger,
    "tabsListVariants",
    ()=>tabsListVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tabs$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript) <export * as Tabs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Tabs({ className, orientation = "horizontal", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tabs$3e$__["Tabs"].Root, {
        "data-slot": "tabs",
        "data-orientation": orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/tabs flex gap-2 data-horizontal:flex-col", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
const tabsListVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none", {
    variants: {
        variant: {
            default: "bg-muted",
            line: "gap-1 bg-transparent"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function TabsList({ className, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tabs$3e$__["Tabs"].List, {
        "data-slot": "tabs-list",
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(tabsListVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tabs$3e$__["Tabs"].Trigger, {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent", "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tabs$3e$__["Tabs"].Content, {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 text-sm outline-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 82,
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
"[project]/src/app/actions/data:5553c9 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCompetitions",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40da1ee1ea4e7e34d99ad079c5cf24a57bb21a18d3":"getCompetitions"},"src/app/actions/competitions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40da1ee1ea4e7e34d99ad079c5cf24a57bb21a18d3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getCompetitions");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY29tcGV0aXRpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJ1xuXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnQGNsZXJrL25leHRqcy9zZXJ2ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnXG5cbi8qKlxuICog6I635Y+W56ue6LWb5YiX6KGo77yM5aaC5p6c5pWw5o2u5bqT5Li656m65YiZ6Ieq5Yqo5aGr5YWF5rWL6K+V5pWw5o2uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb21wZXRpdGlvbnMoY2F0ZWdvcnk/OiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpXG4gICAgXG4gICAgLy8g6Z2Z6buY5L+u5aSN6L+H5pyf5pWw5o2uXG4gICAgYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLnVwZGF0ZU1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgZGVhZGxpbmU6IHtcbiAgICAgICAgICBsdDogbmV3IERhdGUoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBkZWFkbGluZTogbmV3IERhdGUoJzIwMjYtMTItMzEnKVxuICAgICAgfVxuICAgIH0pXG4gICAgXG4gICAgLy8g5qOA5p+l56ue6LWb6KGo5piv5ZCm5Li656m6XG4gICAgY29uc3QgY29tcGV0aXRpb25Db3VudCA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi5jb3VudCgpXG4gICAgXG4gICAgaWYgKGNvbXBldGl0aW9uQ291bnQgPT09IDApIHtcbiAgICAgIC8vIOiHquWKqOWhq+WFhea1i+ivleaVsOaNrlxuICAgICAgYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLmNyZWF0ZU1hbnkoe1xuICAgICAgICBkYXRhOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ+WFqOWbveWkp+WtpueUn+iHquWKqOWMluaOp+WItuiuvuiuoeWkp+i1mycsXG4gICAgICAgICAgICBjYXRlZ29yeTogJ1RFQ0hOSUNBTCcsXG4gICAgICAgICAgICBsZXZlbDogJ1NUQVRFJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn6Z2i5ZCR5YWo5Zu96auY5qCh5a2m55Sf55qE6Ieq5Yqo5YyW5o6n5Yi26K6+6K6h56ue6LWb77yM6byT5Yqx5Yib5paw5oCd57u05ZKM5bel56iL5a6e6Le16IO95Yqb44CCJyxcbiAgICAgICAgICAgIGRlYWRsaW5lOiBuZXcgRGF0ZSgnMjAyNi0wNi0zMCcpLFxuICAgICAgICAgICAgbWF4UGFydGljaXBhbnRzOiA1MDAsXG4gICAgICAgICAgICBjdXJyZW50UGFydGljaXBhbnRzOiAwLFxuICAgICAgICAgICAgaXNBY3RpdmU6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdDKyvnrpfms5XkuI7mlbDmja7nu5PmnoTmjJHmiJjotZsnLFxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdQUk9HUkFNTUlORycsXG4gICAgICAgICAgICBsZXZlbDogJ1BST1ZJTkNFJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn6ICD6aqM5Y+C6LWb6ICF55qEQysr57yW56iL6IO95Yqb5ZKM566X5rOV5oCd57u077yM5YyF5ZCr5aSa56eN5pWw5o2u57uT5p6E6aKY55uu44CCJyxcbiAgICAgICAgICAgIGRlYWRsaW5lOiBuZXcgRGF0ZSgnMjAyNi0wNS0xNScpLFxuICAgICAgICAgICAgbWF4UGFydGljaXBhbnRzOiAxMDAwLFxuICAgICAgICAgICAgY3VycmVudFBhcnRpY2lwYW50czogMCxcbiAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnQUnkuI7lnLDotKjngb7lrrPpooTmtYvliJvmlrDlupTnlKjotZsnLFxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdBSScsXG4gICAgICAgICAgICBsZXZlbDogJ1NUQVRFJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn6L+Q55So5Lq65bel5pm66IO95oqA5pyv6Kej5Yaz5Zyw6LSo54G+5a6z6aKE5rWL6Zeu6aKY77yM5o6o5YqoQUnlnKjpmLLngb7lh4/ngb7kuK3nmoTlupTnlKjjgIInLFxuICAgICAgICAgICAgZGVhZGxpbmU6IG5ldyBEYXRlKCcyMDI2LTA3LTIwJyksXG4gICAgICAgICAgICBtYXhQYXJ0aWNpcGFudHM6IDIwMCxcbiAgICAgICAgICAgIGN1cnJlbnRQYXJ0aWNpcGFudHM6IDAsXG4gICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ+WFqOWbveWkp+WtpueUn+iLseivrea8lOiusuavlOi1mycsXG4gICAgICAgICAgICBjYXRlZ29yeTogJ0xBTkdVQUdFJyxcbiAgICAgICAgICAgIGxldmVsOiAnU1RBVEUnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICflsZXnpLroi7Hor63lj6Por63ooajovr7og73lipvvvIzmj5DljYfot6jmlofljJbkuqTmtYHmioDlt6fnmoTlhajlm73mgKfotZvkuovjgIInLFxuICAgICAgICAgICAgZGVhZGxpbmU6IG5ldyBEYXRlKCcyMDI2LTA0LTMwJyksXG4gICAgICAgICAgICBtYXhQYXJ0aWNpcGFudHM6IDMwMCxcbiAgICAgICAgICAgIGN1cnJlbnRQYXJ0aWNpcGFudHM6IDAsXG4gICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ+WIm+aWsOWIm+S4mumhueebrui3r+a8lOWkp+i1mycsXG4gICAgICAgICAgICBjYXRlZ29yeTogJ0lOTk9WQVRJT04nLFxuICAgICAgICAgICAgbGV2ZWw6ICdQUk9WSU5DRScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+WxleekuuWIm+aWsOWIm+S4mumhueebru+8jOi/nuaOpeWIm+S4muiAheWSjOaKlei1hOS6uueahOmHjeimgeW5s+WPsOOAgicsXG4gICAgICAgICAgICBkZWFkbGluZTogbmV3IERhdGUoJzIwMjYtMDgtMTAnKSxcbiAgICAgICAgICAgIG1heFBhcnRpY2lwYW50czogMTUwLFxuICAgICAgICAgICAgY3VycmVudFBhcnRpY2lwYW50czogMCxcbiAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIOiOt+WPluernui1m+WIl+ihqFxuICAgIGNvbnN0IGNvbXBldGl0aW9ucyA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi5maW5kTWFueSh7XG4gICAgICB3aGVyZTogeyBcbiAgICAgICAgaXNBY3RpdmU6IHRydWUsXG4gICAgICAgIC4uLihjYXRlZ29yeSAmJiB7IGNhdGVnb3J5IH0pXG4gICAgICB9LFxuICAgICAgb3JkZXJCeTogeyBkZWFkbGluZTogJ2FzYycgfVxuICAgIH0pXG5cbiAgICAvLyDlpoLmnpznlKjmiLflt7LnmbvlvZXvvIzojrflj5bnlKjmiLfnmoTmiqXlkI3nirbmgIFcbiAgICBsZXQgdXNlclJlZ2lzdHJhdGlvbnM6IHN0cmluZ1tdID0gW11cbiAgICBpZiAodXNlcklkKSB7XG4gICAgICBjb25zdCByZWdpc3RyYXRpb25zID0gYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHVzZXJJZCB9LFxuICAgICAgICBzZWxlY3Q6IHsgY29tcGV0aXRpb25JZDogdHJ1ZSB9XG4gICAgICB9KVxuICAgICAgdXNlclJlZ2lzdHJhdGlvbnMgPSByZWdpc3RyYXRpb25zLm1hcChyZWcgPT4gcmVnLmNvbXBldGl0aW9uSWQpXG4gICAgfVxuXG4gICAgLy8g5Li65q+P5Liq56ue6LWb5re75Yqg5oql5ZCN54q25oCBXG4gICAgY29uc3QgY29tcGV0aXRpb25zV2l0aFN0YXR1cyA9IGNvbXBldGl0aW9ucy5tYXAoY29tcGV0aXRpb24gPT4gKHtcbiAgICAgIC4uLmNvbXBldGl0aW9uLFxuICAgICAgaXNSZWdpc3RlcmVkOiB1c2VyUmVnaXN0cmF0aW9ucy5pbmNsdWRlcyhjb21wZXRpdGlvbi5pZCksXG4gICAgICBpc0V4cGlyZWQ6IGNvbXBldGl0aW9uLmRlYWRsaW5lIDwgbmV3IERhdGUoKVxuICAgIH0pKVxuXG4gICAgcmV0dXJuIGNvbXBldGl0aW9uc1dpdGhTdGF0dXNcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluernui1m+WIl+ihqOWksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG4vKipcbiAqIOS/ruWkjei/h+acn+aVsOaNriAtIOWwhuaJgOacieernui1m+aIquatouaXpeacn+abtOaWsOWIsCAyMDI2IOW5tCAxMiDmnIggMzEg5pelXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaXhFeHBpcmVkQ29tcGV0aXRpb25zKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi51cGRhdGVNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGRlYWRsaW5lOiB7XG4gICAgICAgICAgbHQ6IG5ldyBEYXRlKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZGVhZGxpbmU6IG5ldyBEYXRlKCcyMDI2LTEyLTMxJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiAn5bey5L+u5aSN5omA5pyJ6L+H5pyf56ue6LWb5pWw5o2uJ1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+S/ruWkjei/h+acn+aVsOaNruWksei0pTonLCBlcnJvcilcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfkv67lpI3lpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJDb21wZXRpdGlvbihkYXRhOiB7XG4gIGNvbXBldGl0aW9uSWQ6IHN0cmluZ1xuICBhcHBsaWNhbnROYW1lOiBzdHJpbmdcbiAgcHJvamVjdE5hbWU/OiBzdHJpbmdcbiAgdGVhbU1lbWJlcnM/OiBzdHJpbmdcbiAgdGVhY2hlcklkPzogc3RyaW5nXG4gIG5vdGVzPzogc3RyaW5nXG59KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGF1dGgoKVxuICAgIFxuICAgIGlmICghdXNlcklkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+eUqOaIt+acqueZu+W9lSdcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDnoa7kv53nlKjmiLflnKjmlbDmja7lupPkuK3lrZjlnKjvvIjop6PlhrPlpJbplK7nuqbmnZ/pl67popjvvIlcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBzeW5jVXNlclRvRGF0YWJhc2UgfSA9IGF3YWl0IGltcG9ydCgnQC9saWIvY2xlcmsnKVxuICAgICAgYXdhaXQgc3luY1VzZXJUb0RhdGFiYXNlKHVzZXJJZClcbiAgICB9IGNhdGNoIChzeW5jRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+WQjOatpeeUqOaIt+WIsOaVsOaNruW6k+Wksei0pTonLCBzeW5jRXJyb3IpXG4gICAgICAvLyDnu6fnu63miafooYzvvIzlm6DkuLrlj6/og73nlKjmiLflt7Lnu4/lrZjlnKhcbiAgICB9XG5cbiAgICAvLyDpqozor4Hlv4XloavlrZfmrrVcbiAgICBpZiAoIWRhdGEuYXBwbGljYW50TmFtZSB8fCBkYXRhLmFwcGxpY2FudE5hbWUudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfnlLPor7fkurrlp5PlkI3kuI3og73kuLrnqbonXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5qOA5p+l56ue6LWb5piv5ZCm5a2Y5ZyoXG4gICAgY29uc3QgY29tcGV0aXRpb24gPSBhd2FpdCBwcmlzbWEuY29tcGV0aXRpb24uZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZDogZGF0YS5jb21wZXRpdGlvbklkIH1cbiAgICB9KVxuXG4gICAgaWYgKCFjb21wZXRpdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfnq57otZvkuI3lrZjlnKgnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5qOA5p+l5piv5ZCm5bey5oql5ZCNXG4gICAgY29uc3QgZXhpc3RpbmdSZWdpc3RyYXRpb24gPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNvbXBldGl0aW9uSWQ6IGRhdGEuY29tcGV0aXRpb25JZFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoZXhpc3RpbmdSZWdpc3RyYXRpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5oKo5bey5oql5ZCN6L+H5q2k5q+U6LWbJ1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOajgOafpeaYr+WQpuW3sui/h+acn1xuICAgIGlmIChjb21wZXRpdGlvbi5kZWFkbGluZSA8IG5ldyBEYXRlKCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn56ue6LWb5oql5ZCN5bey5oiq5q2iJ1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5PVEU6IOS9v+eUqOWunuaXtiBjb3VudCDmn6Xor6LmnaXmo4Dmn6XmmK/lkKbmu6HlkZjvvIzogIzpnZ7kvp3otZblj6/og73kuI3kuIDoh7TnmoQgY3VycmVudFBhcnRpY2lwYW50cyDlrZfmrrVcbiAgICBjb25zdCBhY3RpdmVSZWdpc3RyYXRpb25Db3VudCA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uY291bnQoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgY29tcGV0aXRpb25JZDogZGF0YS5jb21wZXRpdGlvbklkLFxuICAgICAgICBzdGF0dXM6IHsgbm90SW46IFsnUkVKRUNURURfRklOQUwnXSB9ICAvLyDlj6rmnInlvbvlupXpqbPlm57nmoTkuI3nrpflkI3pop3ljaDnlKhcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGFjdGl2ZVJlZ2lzdHJhdGlvbkNvdW50ID49IGNvbXBldGl0aW9uLm1heFBhcnRpY2lwYW50cykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfnq57otZvmiqXlkI3kurrmlbDlt7Lmu6EnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g6aqM6K+B5oyH5a+86ICB5biI5piv5ZCm5a2Y5Zyo77yI5aaC5p6c5o+Q5L6b5LqGdGVhY2hlcklk77yJXG4gICAgaWYgKGRhdGEudGVhY2hlcklkKSB7XG4gICAgICBjb25zdCB0ZWFjaGVyID0gYXdhaXQgcHJpc21hLnRlYWNoZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiBkYXRhLnRlYWNoZXJJZCB9XG4gICAgICB9KVxuICAgICAgXG4gICAgICBpZiAoIXRlYWNoZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBtZXNzYWdlOiAn6YCJ5oup55qE5oyH5a+86ICB5biI5LiN5a2Y5ZyoJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5Yib5bu65oql5ZCN6K6w5b2VXG4gICAgYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNvbXBldGl0aW9uSWQ6IGRhdGEuY29tcGV0aXRpb25JZCxcbiAgICAgICAgYXBwbGljYW50TmFtZTogZGF0YS5hcHBsaWNhbnROYW1lLnRyaW0oKSxcbiAgICAgICAgcHJvamVjdE5hbWU6IGRhdGEucHJvamVjdE5hbWU/LnRyaW0oKSB8fCBudWxsLFxuICAgICAgICB0ZWFtTWVtYmVyczogZGF0YS50ZWFtTWVtYmVycz8udHJpbSgpIHx8IG51bGwsXG4gICAgICAgIHRlYWNoZXJJZDogZGF0YS50ZWFjaGVySWQgfHwgbnVsbCxcbiAgICAgICAgbm90ZXM6IGRhdGEubm90ZXM/LnRyaW0oKSB8fCBudWxsLFxuICAgICAgICBzdGF0dXM6ICdQRU5ESU5HJ1xuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBOT1RFOiDlkIzmraXmm7TmlrAgY3VycmVudFBhcnRpY2lwYW50cyDkuLrnnJ/lrp7orqHmlbDlgLzvvIjkv53or4HkuI7mlbDmja7lupPkuIDoh7TvvIlcbiAgICBjb25zdCB1cGRhdGVkQ291bnQgPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmNvdW50KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGNvbXBldGl0aW9uSWQ6IGRhdGEuY29tcGV0aXRpb25JZCxcbiAgICAgICAgc3RhdHVzOiB7IG5vdEluOiBbJ1JFSkVDVEVEX0ZJTkFMJ10gfVxuICAgICAgfVxuICAgIH0pXG4gICAgYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogZGF0YS5jb21wZXRpdGlvbklkIH0sXG4gICAgICBkYXRhOiB7IGN1cnJlbnRQYXJ0aWNpcGFudHM6IHVwZGF0ZWRDb3VudCB9XG4gICAgfSlcblxuICAgIC8vIOmHjeaWsOmqjOivgee8k+WtmFxuICAgIHJldmFsaWRhdGVQYXRoKCcvY29tcGV0aXRpb25zJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ+aKpeWQjeaIkOWKn++8gSdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfmiqXlkI3nq57otZvlpLHotKU6JywgZXJyb3IpXG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5oql5ZCN5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPluaJgOacieWPr+eUqOeahOaMh+WvvOiAgeW4iOWIl+ihqFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlVGVhY2hlcnMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGVhY2hlcnMgPSBhd2FpdCBwcmlzbWEudGVhY2hlci5maW5kTWFueSh7XG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgIHRlYWNoZXJObzogdHJ1ZSxcbiAgICAgICAgZGVwYXJ0bWVudDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfVxuICAgIH0pXG5cbiAgICAvLyBDb252ZXJ0IG51bGwgZGVwYXJ0bWVudHMgdG8gdW5kZWZpbmVkIGZvciBmcm9udGVuZCBjb21wYXRpYmlsaXR5XG4gICAgcmV0dXJuIHRlYWNoZXJzLm1hcCh0ZWFjaGVyID0+ICh7XG4gICAgICAuLi50ZWFjaGVyLFxuICAgICAgZGVwYXJ0bWVudDogdGVhY2hlci5kZXBhcnRtZW50ID09PSBudWxsID8gdW5kZWZpbmVkIDogdGVhY2hlci5kZXBhcnRtZW50XG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W6ICB5biI5YiX6KGo5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcign6I635Y+W6ICB5biI5YiX6KGo5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJylcbiAgfVxufVxuXG4vKipcbiAqIOmHjeaWsOaPkOS6pOaKpeWQjeeUs+ivt++8iOWtpueUn+S9v+eUqO+8iVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzdWJtaXRSZWdpc3RyYXRpb24ocmVnaXN0cmF0aW9uSWQ6IHN0cmluZywgZGF0YToge1xuICBhcHBsaWNhbnROYW1lPzogc3RyaW5nXG4gIHByb2plY3ROYW1lPzogc3RyaW5nXG4gIHRlYW1NZW1iZXJzPzogc3RyaW5nXG4gIHRlYWNoZXJJZD86IHN0cmluZ1xuICBub3Rlcz86IHN0cmluZ1xufSkge1xuICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpXG4gIFxuICBpZiAoIXVzZXJJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcign55So5oi35pyq55m75b2VJylcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8g5qOA5p+l5oql5ZCN6K6w5b2V5piv5ZCm5a2Y5Zyo5LiU5bGe5LqO5b2T5YmN55So5oi3XG4gICAgY29uc3QgZXhpc3RpbmdSZWdpc3RyYXRpb24gPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHJlZ2lzdHJhdGlvbklkIH1cbiAgICB9KVxuXG4gICAgaWYgKCFleGlzdGluZ1JlZ2lzdHJhdGlvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfmiqXlkI3orrDlvZXkuI3lrZjlnKgnKVxuICAgIH1cblxuICAgIGlmIChleGlzdGluZ1JlZ2lzdHJhdGlvbi51c2VySWQgIT09IHVzZXJJZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfml6DmnYPpmZDkv67mlLnmraTmiqXlkI3orrDlvZUnKVxuICAgIH1cblxuICAgIGlmIChleGlzdGluZ1JlZ2lzdHJhdGlvbi5zdGF0dXMgIT09ICdSRUpFQ1RFRF9SRVRSWScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5Y+q5pyJXCLmiZPlm57kv67mlLlcIueKtuaAgeeahOeUs+ivt+aJjeiDvemHjeaWsOaPkOS6pCcpXG4gICAgfVxuXG4gICAgLy8g5pu05paw5oql5ZCN6K6w5b2VXG4gICAgYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHJlZ2lzdHJhdGlvbklkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGFwcGxpY2FudE5hbWU6IGRhdGEuYXBwbGljYW50TmFtZSB8fCBudWxsLFxuICAgICAgICBwcm9qZWN0TmFtZTogZGF0YS5wcm9qZWN0TmFtZSB8fCBudWxsLFxuICAgICAgICB0ZWFtTWVtYmVyczogZGF0YS50ZWFtTWVtYmVycyB8fCBudWxsLFxuICAgICAgICB0ZWFjaGVySWQ6IGRhdGEudGVhY2hlcklkID09PSAnbm9uZScgPyBudWxsIDogZGF0YS50ZWFjaGVySWQgfHwgbnVsbCxcbiAgICAgICAgbm90ZXM6IGRhdGEubm90ZXMgfHwgbnVsbCxcbiAgICAgICAgc3RhdHVzOiAnUEVORElORycsIC8vIOmHjeaWsOiuvuS4uuW+heWuoeaguOeKtuaAgVxuICAgICAgICBmZWVkYmFjazogbnVsbCAvLyDmuIXnqbrkuYvliY3nmoTlj43ppohcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g6YeN5paw6aqM6K+B57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9maWxlJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ+aKpeWQjeeUs+ivt+W3sumHjeaWsOaPkOS6pO+8jOivt+etieW+heWuoeaguCdcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6YeN5paw5o+Q5Lqk5oql5ZCN5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcign6YeN5paw5o+Q5Lqk5oql5ZCN5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJylcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtU0FTc0IsNExBQUEifQ==
}),
"[project]/src/app/actions/data:b526d7 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAvailableTeachers",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"005fb073d9904eff3e85c9514f05a83bf172e70a87":"getAvailableTeachers"},"src/app/actions/competitions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("005fb073d9904eff3e85c9514f05a83bf172e70a87", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getAvailableTeachers");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY29tcGV0aXRpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJ1xuXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnQGNsZXJrL25leHRqcy9zZXJ2ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnXG5cbi8qKlxuICog6I635Y+W56ue6LWb5YiX6KGo77yM5aaC5p6c5pWw5o2u5bqT5Li656m65YiZ6Ieq5Yqo5aGr5YWF5rWL6K+V5pWw5o2uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb21wZXRpdGlvbnMoY2F0ZWdvcnk/OiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpXG4gICAgXG4gICAgLy8g6Z2Z6buY5L+u5aSN6L+H5pyf5pWw5o2uXG4gICAgYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLnVwZGF0ZU1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgZGVhZGxpbmU6IHtcbiAgICAgICAgICBsdDogbmV3IERhdGUoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBkZWFkbGluZTogbmV3IERhdGUoJzIwMjYtMTItMzEnKVxuICAgICAgfVxuICAgIH0pXG4gICAgXG4gICAgLy8g5qOA5p+l56ue6LWb6KGo5piv5ZCm5Li656m6XG4gICAgY29uc3QgY29tcGV0aXRpb25Db3VudCA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi5jb3VudCgpXG4gICAgXG4gICAgaWYgKGNvbXBldGl0aW9uQ291bnQgPT09IDApIHtcbiAgICAgIC8vIOiHquWKqOWhq+WFhea1i+ivleaVsOaNrlxuICAgICAgYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLmNyZWF0ZU1hbnkoe1xuICAgICAgICBkYXRhOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ+WFqOWbveWkp+WtpueUn+iHquWKqOWMluaOp+WItuiuvuiuoeWkp+i1mycsXG4gICAgICAgICAgICBjYXRlZ29yeTogJ1RFQ0hOSUNBTCcsXG4gICAgICAgICAgICBsZXZlbDogJ1NUQVRFJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn6Z2i5ZCR5YWo5Zu96auY5qCh5a2m55Sf55qE6Ieq5Yqo5YyW5o6n5Yi26K6+6K6h56ue6LWb77yM6byT5Yqx5Yib5paw5oCd57u05ZKM5bel56iL5a6e6Le16IO95Yqb44CCJyxcbiAgICAgICAgICAgIGRlYWRsaW5lOiBuZXcgRGF0ZSgnMjAyNi0wNi0zMCcpLFxuICAgICAgICAgICAgbWF4UGFydGljaXBhbnRzOiA1MDAsXG4gICAgICAgICAgICBjdXJyZW50UGFydGljaXBhbnRzOiAwLFxuICAgICAgICAgICAgaXNBY3RpdmU6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdDKyvnrpfms5XkuI7mlbDmja7nu5PmnoTmjJHmiJjotZsnLFxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdQUk9HUkFNTUlORycsXG4gICAgICAgICAgICBsZXZlbDogJ1BST1ZJTkNFJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn6ICD6aqM5Y+C6LWb6ICF55qEQysr57yW56iL6IO95Yqb5ZKM566X5rOV5oCd57u077yM5YyF5ZCr5aSa56eN5pWw5o2u57uT5p6E6aKY55uu44CCJyxcbiAgICAgICAgICAgIGRlYWRsaW5lOiBuZXcgRGF0ZSgnMjAyNi0wNS0xNScpLFxuICAgICAgICAgICAgbWF4UGFydGljaXBhbnRzOiAxMDAwLFxuICAgICAgICAgICAgY3VycmVudFBhcnRpY2lwYW50czogMCxcbiAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnQUnkuI7lnLDotKjngb7lrrPpooTmtYvliJvmlrDlupTnlKjotZsnLFxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdBSScsXG4gICAgICAgICAgICBsZXZlbDogJ1NUQVRFJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn6L+Q55So5Lq65bel5pm66IO95oqA5pyv6Kej5Yaz5Zyw6LSo54G+5a6z6aKE5rWL6Zeu6aKY77yM5o6o5YqoQUnlnKjpmLLngb7lh4/ngb7kuK3nmoTlupTnlKjjgIInLFxuICAgICAgICAgICAgZGVhZGxpbmU6IG5ldyBEYXRlKCcyMDI2LTA3LTIwJyksXG4gICAgICAgICAgICBtYXhQYXJ0aWNpcGFudHM6IDIwMCxcbiAgICAgICAgICAgIGN1cnJlbnRQYXJ0aWNpcGFudHM6IDAsXG4gICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ+WFqOWbveWkp+WtpueUn+iLseivrea8lOiusuavlOi1mycsXG4gICAgICAgICAgICBjYXRlZ29yeTogJ0xBTkdVQUdFJyxcbiAgICAgICAgICAgIGxldmVsOiAnU1RBVEUnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICflsZXnpLroi7Hor63lj6Por63ooajovr7og73lipvvvIzmj5DljYfot6jmlofljJbkuqTmtYHmioDlt6fnmoTlhajlm73mgKfotZvkuovjgIInLFxuICAgICAgICAgICAgZGVhZGxpbmU6IG5ldyBEYXRlKCcyMDI2LTA0LTMwJyksXG4gICAgICAgICAgICBtYXhQYXJ0aWNpcGFudHM6IDMwMCxcbiAgICAgICAgICAgIGN1cnJlbnRQYXJ0aWNpcGFudHM6IDAsXG4gICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ+WIm+aWsOWIm+S4mumhueebrui3r+a8lOWkp+i1mycsXG4gICAgICAgICAgICBjYXRlZ29yeTogJ0lOTk9WQVRJT04nLFxuICAgICAgICAgICAgbGV2ZWw6ICdQUk9WSU5DRScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+WxleekuuWIm+aWsOWIm+S4mumhueebru+8jOi/nuaOpeWIm+S4muiAheWSjOaKlei1hOS6uueahOmHjeimgeW5s+WPsOOAgicsXG4gICAgICAgICAgICBkZWFkbGluZTogbmV3IERhdGUoJzIwMjYtMDgtMTAnKSxcbiAgICAgICAgICAgIG1heFBhcnRpY2lwYW50czogMTUwLFxuICAgICAgICAgICAgY3VycmVudFBhcnRpY2lwYW50czogMCxcbiAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIOiOt+WPluernui1m+WIl+ihqFxuICAgIGNvbnN0IGNvbXBldGl0aW9ucyA9IGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi5maW5kTWFueSh7XG4gICAgICB3aGVyZTogeyBcbiAgICAgICAgaXNBY3RpdmU6IHRydWUsXG4gICAgICAgIC4uLihjYXRlZ29yeSAmJiB7IGNhdGVnb3J5IH0pXG4gICAgICB9LFxuICAgICAgb3JkZXJCeTogeyBkZWFkbGluZTogJ2FzYycgfVxuICAgIH0pXG5cbiAgICAvLyDlpoLmnpznlKjmiLflt7LnmbvlvZXvvIzojrflj5bnlKjmiLfnmoTmiqXlkI3nirbmgIFcbiAgICBsZXQgdXNlclJlZ2lzdHJhdGlvbnM6IHN0cmluZ1tdID0gW11cbiAgICBpZiAodXNlcklkKSB7XG4gICAgICBjb25zdCByZWdpc3RyYXRpb25zID0gYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHVzZXJJZCB9LFxuICAgICAgICBzZWxlY3Q6IHsgY29tcGV0aXRpb25JZDogdHJ1ZSB9XG4gICAgICB9KVxuICAgICAgdXNlclJlZ2lzdHJhdGlvbnMgPSByZWdpc3RyYXRpb25zLm1hcChyZWcgPT4gcmVnLmNvbXBldGl0aW9uSWQpXG4gICAgfVxuXG4gICAgLy8g5Li65q+P5Liq56ue6LWb5re75Yqg5oql5ZCN54q25oCBXG4gICAgY29uc3QgY29tcGV0aXRpb25zV2l0aFN0YXR1cyA9IGNvbXBldGl0aW9ucy5tYXAoY29tcGV0aXRpb24gPT4gKHtcbiAgICAgIC4uLmNvbXBldGl0aW9uLFxuICAgICAgaXNSZWdpc3RlcmVkOiB1c2VyUmVnaXN0cmF0aW9ucy5pbmNsdWRlcyhjb21wZXRpdGlvbi5pZCksXG4gICAgICBpc0V4cGlyZWQ6IGNvbXBldGl0aW9uLmRlYWRsaW5lIDwgbmV3IERhdGUoKVxuICAgIH0pKVxuXG4gICAgcmV0dXJuIGNvbXBldGl0aW9uc1dpdGhTdGF0dXNcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluernui1m+WIl+ihqOWksei0pTonLCBlcnJvcilcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG4vKipcbiAqIOS/ruWkjei/h+acn+aVsOaNriAtIOWwhuaJgOacieernui1m+aIquatouaXpeacn+abtOaWsOWIsCAyMDI2IOW5tCAxMiDmnIggMzEg5pelXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaXhFeHBpcmVkQ29tcGV0aXRpb25zKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5jb21wZXRpdGlvbi51cGRhdGVNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGRlYWRsaW5lOiB7XG4gICAgICAgICAgbHQ6IG5ldyBEYXRlKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZGVhZGxpbmU6IG5ldyBEYXRlKCcyMDI2LTEyLTMxJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiAn5bey5L+u5aSN5omA5pyJ6L+H5pyf56ue6LWb5pWw5o2uJ1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+S/ruWkjei/h+acn+aVsOaNruWksei0pTonLCBlcnJvcilcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICfkv67lpI3lpLHotKXvvIzor7fnqI3lkI7ph43or5UnXG4gICAgfVxuICB9XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJDb21wZXRpdGlvbihkYXRhOiB7XG4gIGNvbXBldGl0aW9uSWQ6IHN0cmluZ1xuICBhcHBsaWNhbnROYW1lOiBzdHJpbmdcbiAgcHJvamVjdE5hbWU/OiBzdHJpbmdcbiAgdGVhbU1lbWJlcnM/OiBzdHJpbmdcbiAgdGVhY2hlcklkPzogc3RyaW5nXG4gIG5vdGVzPzogc3RyaW5nXG59KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VySWQgfSA9IGF3YWl0IGF1dGgoKVxuICAgIFxuICAgIGlmICghdXNlcklkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ+eUqOaIt+acqueZu+W9lSdcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDnoa7kv53nlKjmiLflnKjmlbDmja7lupPkuK3lrZjlnKjvvIjop6PlhrPlpJbplK7nuqbmnZ/pl67popjvvIlcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBzeW5jVXNlclRvRGF0YWJhc2UgfSA9IGF3YWl0IGltcG9ydCgnQC9saWIvY2xlcmsnKVxuICAgICAgYXdhaXQgc3luY1VzZXJUb0RhdGFiYXNlKHVzZXJJZClcbiAgICB9IGNhdGNoIChzeW5jRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+WQjOatpeeUqOaIt+WIsOaVsOaNruW6k+Wksei0pTonLCBzeW5jRXJyb3IpXG4gICAgICAvLyDnu6fnu63miafooYzvvIzlm6DkuLrlj6/og73nlKjmiLflt7Lnu4/lrZjlnKhcbiAgICB9XG5cbiAgICAvLyDpqozor4Hlv4XloavlrZfmrrVcbiAgICBpZiAoIWRhdGEuYXBwbGljYW50TmFtZSB8fCBkYXRhLmFwcGxpY2FudE5hbWUudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfnlLPor7fkurrlp5PlkI3kuI3og73kuLrnqbonXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5qOA5p+l56ue6LWb5piv5ZCm5a2Y5ZyoXG4gICAgY29uc3QgY29tcGV0aXRpb24gPSBhd2FpdCBwcmlzbWEuY29tcGV0aXRpb24uZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZDogZGF0YS5jb21wZXRpdGlvbklkIH1cbiAgICB9KVxuXG4gICAgaWYgKCFjb21wZXRpdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfnq57otZvkuI3lrZjlnKgnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5qOA5p+l5piv5ZCm5bey5oql5ZCNXG4gICAgY29uc3QgZXhpc3RpbmdSZWdpc3RyYXRpb24gPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNvbXBldGl0aW9uSWQ6IGRhdGEuY29tcGV0aXRpb25JZFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoZXhpc3RpbmdSZWdpc3RyYXRpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn5oKo5bey5oql5ZCN6L+H5q2k5q+U6LWbJ1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOajgOafpeaYr+WQpuW3sui/h+acn1xuICAgIGlmIChjb21wZXRpdGlvbi5kZWFkbGluZSA8IG5ldyBEYXRlKCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAn56ue6LWb5oql5ZCN5bey5oiq5q2iJ1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5PVEU6IOS9v+eUqOWunuaXtiBjb3VudCDmn6Xor6LmnaXmo4Dmn6XmmK/lkKbmu6HlkZjvvIzogIzpnZ7kvp3otZblj6/og73kuI3kuIDoh7TnmoQgY3VycmVudFBhcnRpY2lwYW50cyDlrZfmrrVcbiAgICBjb25zdCBhY3RpdmVSZWdpc3RyYXRpb25Db3VudCA9IGF3YWl0IHByaXNtYS5yZWdpc3RyYXRpb24uY291bnQoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgY29tcGV0aXRpb25JZDogZGF0YS5jb21wZXRpdGlvbklkLFxuICAgICAgICBzdGF0dXM6IHsgbm90SW46IFsnUkVKRUNURURfRklOQUwnXSB9ICAvLyDlj6rmnInlvbvlupXpqbPlm57nmoTkuI3nrpflkI3pop3ljaDnlKhcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGFjdGl2ZVJlZ2lzdHJhdGlvbkNvdW50ID49IGNvbXBldGl0aW9uLm1heFBhcnRpY2lwYW50cykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICfnq57otZvmiqXlkI3kurrmlbDlt7Lmu6EnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g6aqM6K+B5oyH5a+86ICB5biI5piv5ZCm5a2Y5Zyo77yI5aaC5p6c5o+Q5L6b5LqGdGVhY2hlcklk77yJXG4gICAgaWYgKGRhdGEudGVhY2hlcklkKSB7XG4gICAgICBjb25zdCB0ZWFjaGVyID0gYXdhaXQgcHJpc21hLnRlYWNoZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiBkYXRhLnRlYWNoZXJJZCB9XG4gICAgICB9KVxuICAgICAgXG4gICAgICBpZiAoIXRlYWNoZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBtZXNzYWdlOiAn6YCJ5oup55qE5oyH5a+86ICB5biI5LiN5a2Y5ZyoJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5Yib5bu65oql5ZCN6K6w5b2VXG4gICAgYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNvbXBldGl0aW9uSWQ6IGRhdGEuY29tcGV0aXRpb25JZCxcbiAgICAgICAgYXBwbGljYW50TmFtZTogZGF0YS5hcHBsaWNhbnROYW1lLnRyaW0oKSxcbiAgICAgICAgcHJvamVjdE5hbWU6IGRhdGEucHJvamVjdE5hbWU/LnRyaW0oKSB8fCBudWxsLFxuICAgICAgICB0ZWFtTWVtYmVyczogZGF0YS50ZWFtTWVtYmVycz8udHJpbSgpIHx8IG51bGwsXG4gICAgICAgIHRlYWNoZXJJZDogZGF0YS50ZWFjaGVySWQgfHwgbnVsbCxcbiAgICAgICAgbm90ZXM6IGRhdGEubm90ZXM/LnRyaW0oKSB8fCBudWxsLFxuICAgICAgICBzdGF0dXM6ICdQRU5ESU5HJ1xuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBOT1RFOiDlkIzmraXmm7TmlrAgY3VycmVudFBhcnRpY2lwYW50cyDkuLrnnJ/lrp7orqHmlbDlgLzvvIjkv53or4HkuI7mlbDmja7lupPkuIDoh7TvvIlcbiAgICBjb25zdCB1cGRhdGVkQ291bnQgPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmNvdW50KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGNvbXBldGl0aW9uSWQ6IGRhdGEuY29tcGV0aXRpb25JZCxcbiAgICAgICAgc3RhdHVzOiB7IG5vdEluOiBbJ1JFSkVDVEVEX0ZJTkFMJ10gfVxuICAgICAgfVxuICAgIH0pXG4gICAgYXdhaXQgcHJpc21hLmNvbXBldGl0aW9uLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogZGF0YS5jb21wZXRpdGlvbklkIH0sXG4gICAgICBkYXRhOiB7IGN1cnJlbnRQYXJ0aWNpcGFudHM6IHVwZGF0ZWRDb3VudCB9XG4gICAgfSlcblxuICAgIC8vIOmHjeaWsOmqjOivgee8k+WtmFxuICAgIHJldmFsaWRhdGVQYXRoKCcvY29tcGV0aXRpb25zJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ+aKpeWQjeaIkOWKn++8gSdcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfmiqXlkI3nq57otZvlpLHotKU6JywgZXJyb3IpXG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAn5oql5ZCN5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJ1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPluaJgOacieWPr+eUqOeahOaMh+WvvOiAgeW4iOWIl+ihqFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXZhaWxhYmxlVGVhY2hlcnMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGVhY2hlcnMgPSBhd2FpdCBwcmlzbWEudGVhY2hlci5maW5kTWFueSh7XG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgIHRlYWNoZXJObzogdHJ1ZSxcbiAgICAgICAgZGVwYXJ0bWVudDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfVxuICAgIH0pXG5cbiAgICAvLyBDb252ZXJ0IG51bGwgZGVwYXJ0bWVudHMgdG8gdW5kZWZpbmVkIGZvciBmcm9udGVuZCBjb21wYXRpYmlsaXR5XG4gICAgcmV0dXJuIHRlYWNoZXJzLm1hcCh0ZWFjaGVyID0+ICh7XG4gICAgICAuLi50ZWFjaGVyLFxuICAgICAgZGVwYXJ0bWVudDogdGVhY2hlci5kZXBhcnRtZW50ID09PSBudWxsID8gdW5kZWZpbmVkIDogdGVhY2hlci5kZXBhcnRtZW50XG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W6ICB5biI5YiX6KGo5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcign6I635Y+W6ICB5biI5YiX6KGo5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJylcbiAgfVxufVxuXG4vKipcbiAqIOmHjeaWsOaPkOS6pOaKpeWQjeeUs+ivt++8iOWtpueUn+S9v+eUqO+8iVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzdWJtaXRSZWdpc3RyYXRpb24ocmVnaXN0cmF0aW9uSWQ6IHN0cmluZywgZGF0YToge1xuICBhcHBsaWNhbnROYW1lPzogc3RyaW5nXG4gIHByb2plY3ROYW1lPzogc3RyaW5nXG4gIHRlYW1NZW1iZXJzPzogc3RyaW5nXG4gIHRlYWNoZXJJZD86IHN0cmluZ1xuICBub3Rlcz86IHN0cmluZ1xufSkge1xuICBjb25zdCB7IHVzZXJJZCB9ID0gYXdhaXQgYXV0aCgpXG4gIFxuICBpZiAoIXVzZXJJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcign55So5oi35pyq55m75b2VJylcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8g5qOA5p+l5oql5ZCN6K6w5b2V5piv5ZCm5a2Y5Zyo5LiU5bGe5LqO5b2T5YmN55So5oi3XG4gICAgY29uc3QgZXhpc3RpbmdSZWdpc3RyYXRpb24gPSBhd2FpdCBwcmlzbWEucmVnaXN0cmF0aW9uLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHJlZ2lzdHJhdGlvbklkIH1cbiAgICB9KVxuXG4gICAgaWYgKCFleGlzdGluZ1JlZ2lzdHJhdGlvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfmiqXlkI3orrDlvZXkuI3lrZjlnKgnKVxuICAgIH1cblxuICAgIGlmIChleGlzdGluZ1JlZ2lzdHJhdGlvbi51c2VySWQgIT09IHVzZXJJZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfml6DmnYPpmZDkv67mlLnmraTmiqXlkI3orrDlvZUnKVxuICAgIH1cblxuICAgIGlmIChleGlzdGluZ1JlZ2lzdHJhdGlvbi5zdGF0dXMgIT09ICdSRUpFQ1RFRF9SRVRSWScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign5Y+q5pyJXCLmiZPlm57kv67mlLlcIueKtuaAgeeahOeUs+ivt+aJjeiDvemHjeaWsOaPkOS6pCcpXG4gICAgfVxuXG4gICAgLy8g5pu05paw5oql5ZCN6K6w5b2VXG4gICAgYXdhaXQgcHJpc21hLnJlZ2lzdHJhdGlvbi51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHJlZ2lzdHJhdGlvbklkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGFwcGxpY2FudE5hbWU6IGRhdGEuYXBwbGljYW50TmFtZSB8fCBudWxsLFxuICAgICAgICBwcm9qZWN0TmFtZTogZGF0YS5wcm9qZWN0TmFtZSB8fCBudWxsLFxuICAgICAgICB0ZWFtTWVtYmVyczogZGF0YS50ZWFtTWVtYmVycyB8fCBudWxsLFxuICAgICAgICB0ZWFjaGVySWQ6IGRhdGEudGVhY2hlcklkID09PSAnbm9uZScgPyBudWxsIDogZGF0YS50ZWFjaGVySWQgfHwgbnVsbCxcbiAgICAgICAgbm90ZXM6IGRhdGEubm90ZXMgfHwgbnVsbCxcbiAgICAgICAgc3RhdHVzOiAnUEVORElORycsIC8vIOmHjeaWsOiuvuS4uuW+heWuoeaguOeKtuaAgVxuICAgICAgICBmZWVkYmFjazogbnVsbCAvLyDmuIXnqbrkuYvliY3nmoTlj43ppohcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g6YeN5paw6aqM6K+B57yT5a2YXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9maWxlJylcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ+aKpeWQjeeUs+ivt+W3sumHjeaWsOaPkOS6pO+8jOivt+etieW+heWuoeaguCdcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6YeN5paw5o+Q5Lqk5oql5ZCN5aSx6LSlOicsIGVycm9yKVxuICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcign6YeN5paw5o+Q5Lqk5oql5ZCN5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJylcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3U0F3U3NCLGlNQUFBIn0=
}),
"[project]/src/app/competitions/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompetitionsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$5553c9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:5553c9 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b526d7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:b526d7 [app-ssr] (ecmascript) <text/javascript>");
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
function CompetitionsPage() {
    const [competitions, setCompetitions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [teachers, setTeachers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchData = async ()=>{
            try {
                const [competitionsData, teachersData] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$5553c9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCompetitions"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b526d7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAvailableTeachers"])()
                ]);
                setCompetitions(competitionsData);
                setTeachers(teachersData);
            } catch (error) {
                console.error('获取数据失败:', error);
            } finally{
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    const formatDate = (date)=>{
        return new Intl.DateTimeFormat('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    };
    // 获取分类标签颜色
    const getCategoryColor = (category)=>{
        const colors = {
            'TECHNICAL': 'bg-blue-100 text-blue-800 border-blue-200',
            'PROGRAMMING': 'bg-green-100 text-green-800 border-green-200',
            'AI': 'bg-purple-100 text-purple-800 border-purple-200',
            'LANGUAGE': 'bg-yellow-100 text-yellow-800 border-yellow-200',
            'INNOVATION': 'bg-pink-100 text-pink-800 border-pink-200'
        };
        return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200';
    };
    // 获取级别标签颜色
    const getLevelColor = (level)=>{
        const colors = {
            '国际级': 'bg-gradient-to-r from-red-500 to-red-600 text-white border-red-700 shadow-red',
            '国家级': 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-yellow-600 shadow-yellow',
            '省级': 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-700 shadow-blue',
            '市级': 'bg-gradient-to-r from-green-500 to-green-600 text-white border-green-700 shadow-green',
            '校级': 'bg-gray-100 text-gray-700 border-gray-300'
        };
        return colors[level] || 'bg-gray-100 text-gray-700 border-gray-300';
    };
    const getCategoryLabel = (category)=>{
        const labels = {
            TECHNICAL: '技术类',
            PROGRAMMING: '编程类',
            AI: '人工智能',
            LANGUAGE: '语言类',
            INNOVATION: '创新类'
        };
        return labels[category] || '其他';
    };
    // 竞赛卡片组件
    function CompetitionCard({ competition, formatDate, getCategoryColor, getCategoryLabel, getLevelColor, teachers }) {
        // 计算是否即将截止 (小于3天)
        const isUrgent = competition.deadline.getTime() - new Date().getTime() < 3 * 24 * 60 * 60 * 1000;
        // 计算报名进度百分比
        const percent = Math.min(100, Math.round((competition.currentParticipants || 0) / (competition.maxParticipants || 1) * 100));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: "group hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-lg leading-tight group-hover:text-blue-600 transition-colors line-clamp-2",
                                    children: competition.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/competitions/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 flex-wrap",
                                    children: [
                                        competition.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "secondary",
                                            className: getCategoryColor(competition.category),
                                            children: getCategoryLabel(competition.category)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/competitions/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this),
                                        competition.level && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "secondary",
                                            className: getLevelColor(competition.level),
                                            children: competition.level
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/competitions/page.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/competitions/page.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/competitions/page.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                            className: "line-clamp-3",
                            children: competition.description || '暂无赛事详细介绍'
                        }, void 0, false, {
                            fileName: "[project]/src/app/competitions/page.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/competitions/page.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 text-sm text-gray-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/competitions/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: isUrgent ? 'text-red-600 font-semibold' : '',
                                        children: [
                                            "截止: ",
                                            formatDate(competition.deadline)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/competitions/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/competitions/page.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/competitions/page.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: "报名进度"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/competitions/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: [
                                                competition.currentParticipants || 0,
                                                "/",
                                                competition.maxParticipants
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/competitions/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/competitions/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full bg-gray-200 rounded-full h-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-blue-600 h-2 rounded-full transition-all duration-300",
                                        style: {
                                            width: `${percent}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/competitions/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/competitions/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/competitions/page.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    asChild: true,
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/competitions/${competition.id}`,
                                        children: "查看详情"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/competitions/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/competitions/page.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    className: "flex-1",
                                    disabled: competition.isExpired,
                                    children: competition.isExpired ? '已截止' : '立即报名'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/competitions/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/competitions/page.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/competitions/page.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/competitions/page.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this);
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/src/app/competitions/page.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-gray-600",
                            children: "加载中..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/competitions/page.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/competitions/page.tsx",
                    lineNumber: 190,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/competitions/page.tsx",
                lineNumber: 189,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/competitions/page.tsx",
            lineNumber: 188,
            columnNumber: 7
        }, this);
    }
    const categories = [
        'TECHNICAL',
        'PROGRAMMING',
        'AI',
        'LANGUAGE',
        'INNOVATION'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-gray-900 mb-4",
                            children: "竞赛大厅"
                        }, void 0, false, {
                            fileName: "[project]/src/app/competitions/page.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-600",
                            children: "探索各类竞赛，挑战自我，展现才华"
                        }, void 0, false, {
                            fileName: "[project]/src/app/competitions/page.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/competitions/page.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                    defaultValue: "all",
                    className: "w-full block space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                            className: "mb-8 flex w-full flex-wrap justify-center items-center gap-3 bg-transparent h-auto max-h-20 p-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "all",
                                    className: "h-10 flex items-center justify-center whitespace-nowrap rounded-full px-6 border border-gray-200 shadow-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-600 data-[state=active]:shadow-md transition-all",
                                    children: "全部比赛"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/competitions/page.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: category,
                                        className: "h-10 flex items-center justify-center whitespace-nowrap rounded-full px-6 border border-gray-200 shadow-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-600 data-[state=active]:shadow-md transition-all",
                                        children: getCategoryLabel(category)
                                    }, `tab-${category}`, false, {
                                        fileName: "[project]/src/app/competitions/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/competitions/page.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "all",
                            className: "mt-0 w-full outline-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: competitions.length > 0 ? competitions.map((competition)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CompetitionCard, {
                                        competition: competition,
                                        formatDate: formatDate,
                                        getCategoryColor: getCategoryColor,
                                        getCategoryLabel: getCategoryLabel,
                                        getLevelColor: getLevelColor,
                                        teachers: teachers
                                    }, competition.id, false, {
                                        fileName: "[project]/src/app/competitions/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 19
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-full text-center py-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-500",
                                        children: "暂无比赛数据"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/competitions/page.tsx",
                                        lineNumber: 244,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/competitions/page.tsx",
                                    lineNumber: 243,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/competitions/page.tsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/competitions/page.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this),
                        categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: category,
                                className: "mt-0 w-full outline-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                    children: competitions.filter((c)=>c.category === category).length > 0 ? competitions.filter((c)=>c.category === category).map((competition)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CompetitionCard, {
                                            competition: competition,
                                            formatDate: formatDate,
                                            getCategoryColor: getCategoryColor,
                                            getCategoryLabel: getCategoryLabel,
                                            getLevelColor: getLevelColor,
                                            teachers: teachers
                                        }, competition.id, false, {
                                            fileName: "[project]/src/app/competitions/page.tsx",
                                            lineNumber: 262,
                                            columnNumber: 21
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-full text-center py-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-500",
                                            children: "暂无此类比赛"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/competitions/page.tsx",
                                            lineNumber: 274,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/competitions/page.tsx",
                                        lineNumber: 273,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/competitions/page.tsx",
                                    lineNumber: 255,
                                    columnNumber: 15
                                }, this)
                            }, `content-${category}`, false, {
                                fileName: "[project]/src/app/competitions/page.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/competitions/page.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/competitions/page.tsx",
            lineNumber: 203,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/competitions/page.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_1383f1c7._.js.map