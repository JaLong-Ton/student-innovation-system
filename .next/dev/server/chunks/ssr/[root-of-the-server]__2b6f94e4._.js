module.exports = [
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-pg/dist/index.mjs [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const globalForPrisma = globalThis;
const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaPg"]({
    connectionString: process.env.DATABASE_URL
});
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
    adapter
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/achievements.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"009d3a67489e10e6557ff6d1cde05ab491e37f9c5f":"getAchievements","00f1c9c3a1b6f1c9baf1e622f2129caadd337de87d":"getUserAchievements","400ba3db31c3e43d5290b28492850b050981e7ebba":"createAchievement","409e525f13f878382a18c5fcef0c3cea35e4341855":"deleteAchievement","40f0fac896271371a357707306e91880972d20b917":"createAchievementFromForm","60bca9698afe35baf2525718477c98b5d1e30afcd2":"updateAchievement"},"",""] */ __turbopack_context__.s([
    "createAchievement",
    ()=>createAchievement,
    "createAchievementFromForm",
    ()=>createAchievementFromForm,
    "deleteAchievement",
    ()=>deleteAchievement,
    "getAchievements",
    ()=>getAchievements,
    "getUserAchievements",
    ()=>getUserAchievements,
    "updateAchievement",
    ()=>updateAchievement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/clerkClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
/**
 * 确保用户在数据库中存在
 */ async function ensureUserExists(userId) {
    try {
        // 检查用户是否已存在
        const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
            where: {
                id: userId
            }
        });
        if (existingUser) {
            return existingUser;
        }
        // 从 Clerk 获取用户信息并创建数据库记录
        const clerk = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clerkClient"])();
        const clerkUser = await clerk.users.getUser(userId);
        const email = clerkUser.emailAddresses[0]?.emailAddress;
        if (!email) {
            throw new Error('用户邮箱未找到');
        }
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.create({
            data: {
                id: userId,
                email,
                name: `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim() || null
            }
        });
        return user;
    } catch (error) {
        console.error('同步用户失败:', error);
        throw new Error('用户同步失败，请稍后重试');
    }
}
async function createAchievement(data) {
    try {
        // 获取当前用户ID
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) {
            return {
                success: false,
                message: '用户未登录'
            };
        }
        // 验证输入数据
        const validation = validateAchievementInput(data);
        // 如果有验证错误，返回错误信息
        if (validation.errors) {
            return {
                success: false,
                message: '请检查表单填写是否正确',
                errors: validation.errors
            };
        }
        // 创建成就记录
        const achievement = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].achievement.create({
            data: {
                ...validation.data,
                userId,
                date: new Date(validation.data.date)
            }
        });
        // 重新验证缓存，刷新页面数据
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/profile');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/achievements');
        return {
            success: true,
            data: achievement,
            message: '成就添加成功！'
        };
    } catch (error) {
        console.error('创建成就失败:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : '添加成就失败，请稍后重试'
        };
    }
}
async function createAchievementFromForm(formData) {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) {
            return {
                success: false,
                message: '用户未登录'
            };
        }
        // 确保用户在数据库中存在
        await ensureUserExists(userId);
        // 从 FormData 提取数据
        const title = formData.get('title');
        const type = formData.get('type');
        const level = formData.get('level');
        const date = formData.get('date');
        // 验证输入数据
        const validation = validateAchievementInput({
            title,
            type,
            level,
            date
        });
        // 如果有验证错误，返回错误信息
        if (validation.errors) {
            return {
                success: false,
                message: '请检查表单填写是否正确',
                errors: validation.errors
            };
        }
        // 创建成就记录
        const achievement = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].achievement.create({
            data: {
                ...validation.data,
                userId,
                date: new Date(validation.data.date)
            }
        });
        // 重新验证缓存，刷新页面数据
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/profile');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/achievements');
        return {
            success: true,
            data: achievement,
            message: '成就添加成功！'
        };
    } catch (error) {
        console.error('创建成就失败:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : '添加成就失败，请稍后重试'
        };
    }
}
async function getAchievements() {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) {
            return [];
        }
        const achievements = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].achievement.findMany({
            where: {
                userId
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return achievements;
    } catch (error) {
        console.error('获取成就列表失败:', error);
        return [];
    }
}
async function getUserAchievements() {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) {
            return [];
        }
        const achievements = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].achievement.findMany({
            where: {
                userId
            },
            orderBy: {
                date: 'desc'
            }
        });
        return achievements;
    } catch (error) {
        console.error('获取成就列表失败:', error);
        return [];
    }
}
async function deleteAchievement(achievementId) {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) {
            throw new Error('用户未登录');
        }
        // 验证成就是否属于当前用户
        const achievement = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].achievement.findFirst({
            where: {
                id: achievementId,
                userId
            }
        });
        if (!achievement) {
            throw new Error('成就不存在或无权限删除');
        }
        // 删除成就
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].achievement.delete({
            where: {
                id: achievementId
            }
        });
        // 重新验证缓存
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/profile');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/achievements');
        return {
            success: true,
            message: '成就删除成功！'
        };
    } catch (error) {
        console.error('删除成就失败:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : '删除成就失败，请稍后重试'
        };
    }
}
async function updateAchievement(achievementId, data) {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) {
            throw new Error('用户未登录');
        }
        // 验证成就是否属于当前用户
        const existingAchievement = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].achievement.findFirst({
            where: {
                id: achievementId,
                userId
            }
        });
        if (!existingAchievement) {
            throw new Error('成就不存在或无权限修改');
        }
        // 验证输入数据
        const validatedData = data.date ? {
            ...data,
            date: new Date(data.date)
        } : data;
        // 更新成就
        const updatedAchievement = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].achievement.update({
            where: {
                id: achievementId
            },
            data: validatedData
        });
        // 重新验证缓存
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/profile');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/achievements');
        return {
            success: true,
            data: updatedAchievement,
            message: '成就更新成功！'
        };
    } catch (error) {
        console.error('更新成就失败:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : '更新成就失败，请稍后重试'
        };
    }
}
/**
 * 验证成就输入数据
 */ function validateAchievementInput(data) {
    const errors = {
        title: [],
        type: [],
        level: [],
        date: []
    };
    // 验证标题
    if (!data.title || data.title.trim().length === 0) {
        errors.title.push('成就标题不能为空');
    } else if (data.title.length > 100) {
        errors.title.push('成就标题不能超过100个字符');
    }
    // 验证类型
    if (![
        'AWARD',
        'PAPER',
        'PATENT'
    ].includes(data.type)) {
        errors.type.push('成就类型无效');
    }
    // 验证级别
    if (![
        'STATE',
        'PROVINCE',
        'SCHOOL'
    ].includes(data.level)) {
        errors.level.push('成就级别无效');
    }
    // 验证日期
    if (!data.date) {
        errors.date.push('获得日期不能为空');
    } else {
        const date = new Date(data.date);
        if (isNaN(date.getTime())) {
            errors.date.push('日期格式无效');
        } else if (date > new Date()) {
            errors.date.push('获得日期不能是未来时间');
        }
    }
    // 检查是否有错误
    const hasErrors = Object.values(errors).some((fieldErrors)=>fieldErrors.length > 0);
    if (hasErrors) {
        return {
            data,
            errors
        };
    }
    return {
        data: {
            title: data.title.trim(),
            type: data.type,
            level: data.level,
            date: data.date
        }
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createAchievement,
    createAchievementFromForm,
    getAchievements,
    getUserAchievements,
    deleteAchievement,
    updateAchievement
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createAchievement, "400ba3db31c3e43d5290b28492850b050981e7ebba", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createAchievementFromForm, "40f0fac896271371a357707306e91880972d20b917", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAchievements, "009d3a67489e10e6557ff6d1cde05ab491e37f9c5f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserAchievements, "00f1c9c3a1b6f1c9baf1e622f2129caadd337de87d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteAchievement, "409e525f13f878382a18c5fcef0c3cea35e4341855", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAchievement, "60bca9698afe35baf2525718477c98b5d1e30afcd2", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/competitions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"005fb073d9904eff3e85c9514f05a83bf172e70a87":"getAvailableTeachers","00d7967953c67e01b41cea4cd01b55282611862497":"fixExpiredCompetitions","400df771ce0a48cf632c07f38d4118592a5793a53f":"cancelRegistration","40d3df32856f750dd4617dcf1415f39775c2c9add2":"registerCompetition","40da1ee1ea4e7e34d99ad079c5cf24a57bb21a18d3":"getCompetitions","6082148d9910a48095d7b2999e57fe92c028b309e7":"resubmitRegistration"},"",""] */ __turbopack_context__.s([
    "cancelRegistration",
    ()=>cancelRegistration,
    "fixExpiredCompetitions",
    ()=>fixExpiredCompetitions,
    "getAvailableTeachers",
    ()=>getAvailableTeachers,
    "getCompetitions",
    ()=>getCompetitions,
    "registerCompetition",
    ()=>registerCompetition,
    "resubmitRegistration",
    ()=>resubmitRegistration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function getCompetitions(category) {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        // 静默修复过期数据
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].competition.updateMany({
            where: {
                deadline: {
                    lt: new Date()
                }
            },
            data: {
                deadline: new Date('2026-12-31')
            }
        });
        // 检查竞赛表是否为空
        const competitionCount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].competition.count();
        if (competitionCount === 0) {
            // 自动填充测试数据
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].competition.createMany({
                data: [
                    {
                        name: '全国大学生自动化控制设计大赛',
                        category: 'TECHNICAL',
                        level: 'STATE',
                        description: '面向全国高校学生的自动化控制设计竞赛，鼓励创新思维和工程实践能力。',
                        deadline: new Date('2026-06-30'),
                        maxParticipants: 500,
                        currentParticipants: 0,
                        isActive: true
                    },
                    {
                        name: 'C++算法与数据结构挑战赛',
                        category: 'PROGRAMMING',
                        level: 'PROVINCE',
                        description: '考验参赛者的C++编程能力和算法思维，包含多种数据结构题目。',
                        deadline: new Date('2026-05-15'),
                        maxParticipants: 1000,
                        currentParticipants: 0,
                        isActive: true
                    },
                    {
                        name: 'AI与地质灾害预测创新应用赛',
                        category: 'AI',
                        level: 'STATE',
                        description: '运用人工智能技术解决地质灾害预测问题，推动AI在防灾减灾中的应用。',
                        deadline: new Date('2026-07-20'),
                        maxParticipants: 200,
                        currentParticipants: 0,
                        isActive: true
                    },
                    {
                        name: '全国大学生英语演讲比赛',
                        category: 'LANGUAGE',
                        level: 'STATE',
                        description: '展示英语口语表达能力，提升跨文化交流技巧的全国性赛事。',
                        deadline: new Date('2026-04-30'),
                        maxParticipants: 300,
                        currentParticipants: 0,
                        isActive: true
                    },
                    {
                        name: '创新创业项目路演大赛',
                        category: 'INNOVATION',
                        level: 'PROVINCE',
                        description: '展示创新创业项目，连接创业者和投资人的重要平台。',
                        deadline: new Date('2026-08-10'),
                        maxParticipants: 150,
                        currentParticipants: 0,
                        isActive: true
                    }
                ]
            });
        }
        // 获取竞赛列表
        const competitions = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].competition.findMany({
            where: {
                isActive: true,
                ...category && {
                    category
                }
            },
            orderBy: {
                deadline: 'asc'
            }
        });
        // 如果用户已登录，获取用户的报名状态
        let userRegistrations = [];
        if (userId) {
            const registrations = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].registration.findMany({
                where: {
                    userId
                },
                select: {
                    competitionId: true
                }
            });
            userRegistrations = registrations.map((reg)=>reg.competitionId);
        }
        // 为每个竞赛添加报名状态
        const competitionsWithStatus = competitions.map((competition)=>({
                ...competition,
                isRegistered: userRegistrations.includes(competition.id),
                isExpired: competition.deadline < new Date()
            }));
        return competitionsWithStatus;
    } catch (error) {
        console.error('获取竞赛列表失败:', error);
        return [];
    }
}
async function fixExpiredCompetitions() {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].competition.updateMany({
            where: {
                deadline: {
                    lt: new Date()
                }
            },
            data: {
                deadline: new Date('2026-12-31')
            }
        });
        return {
            success: true,
            message: '已修复所有过期竞赛数据'
        };
    } catch (error) {
        console.error('修复过期数据失败:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : '修复失败，请稍后重试'
        };
    }
}
async function registerCompetition(data) {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) {
            return {
                success: false,
                message: '用户未登录'
            };
        }
        // 确保用户在数据库中存在（解决外键约束问题）
        try {
            const { syncUserToDatabase } = await __turbopack_context__.A("[project]/src/lib/clerk.ts [app-rsc] (ecmascript, async loader)");
            await syncUserToDatabase(userId);
        } catch (syncError) {
            console.error('同步用户到数据库失败:', syncError);
        // 继续执行，因为可能用户已经存在
        }
        // 验证必填字段
        if (!data.applicantName || data.applicantName.trim().length === 0) {
            return {
                success: false,
                message: '申请人姓名不能为空'
            };
        }
        // 检查竞赛是否存在
        const competition = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].competition.findUnique({
            where: {
                id: data.competitionId
            }
        });
        if (!competition) {
            return {
                success: false,
                message: '竞赛不存在'
            };
        }
        // 检查是否已报名
        const existingRegistration = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].registration.findFirst({
            where: {
                userId,
                competitionId: data.competitionId
            }
        });
        if (existingRegistration) {
            return {
                success: false,
                message: '您已报名过此比赛'
            };
        }
        // 检查是否已过期
        if (competition.deadline < new Date()) {
            return {
                success: false,
                message: '竞赛报名已截止'
            };
        }
        // NOTE: 使用实时 count 查询来检查是否满员，而非依赖可能不一致的 currentParticipants 字段
        const activeRegistrationCount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].registration.count({
            where: {
                competitionId: data.competitionId,
                status: {
                    notIn: [
                        'REJECTED_FINAL'
                    ]
                } // 只有彻底驳回的不算名额占用
            }
        });
        if (activeRegistrationCount >= competition.maxParticipants) {
            return {
                success: false,
                message: '竞赛报名人数已满'
            };
        }
        // 验证指导老师是否存在（如果提供了teacherId）
        if (data.teacherId) {
            const teacher = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teacher.findUnique({
                where: {
                    id: data.teacherId
                }
            });
            if (!teacher) {
                return {
                    success: false,
                    message: '选择的指导老师不存在'
                };
            }
        }
        // 创建报名记录
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].registration.create({
            data: {
                userId,
                competitionId: data.competitionId,
                applicantName: data.applicantName.trim(),
                projectName: data.projectName?.trim() || null,
                teamMembers: data.teamMembers?.trim() || null,
                teacherId: data.teacherId || null,
                notes: data.notes?.trim() || null,
                status: 'PENDING'
            }
        });
        // NOTE: 同步更新 currentParticipants 为真实计数值（保证与数据库一致）
        const updatedCount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].registration.count({
            where: {
                competitionId: data.competitionId,
                status: {
                    notIn: [
                        'REJECTED_FINAL'
                    ]
                }
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].competition.update({
            where: {
                id: data.competitionId
            },
            data: {
                currentParticipants: updatedCount
            }
        });
        // 重新验证缓存
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/competitions');
        return {
            success: true,
            message: '报名成功！'
        };
    } catch (error) {
        console.error('报名竞赛失败:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : '报名失败，请稍后重试'
        };
    }
}
async function getAvailableTeachers() {
    try {
        const teachers = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teacher.findMany({
            select: {
                id: true,
                name: true,
                teacherNo: true,
                department: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        // Convert null departments to undefined for frontend compatibility
        return teachers.map((teacher)=>({
                ...teacher,
                department: teacher.department === null ? undefined : teacher.department
            }));
    } catch (error) {
        console.error('获取老师列表失败:', error);
        throw error instanceof Error ? error : new Error('获取老师列表失败，请稍后重试');
    }
}
async function resubmitRegistration(registrationId, data) {
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!userId) {
        throw new Error('用户未登录');
    }
    try {
        // 检查报名记录是否存在且属于当前用户
        const existingRegistration = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].registration.findUnique({
            where: {
                id: registrationId
            }
        });
        if (!existingRegistration) {
            throw new Error('报名记录不存在');
        }
        if (existingRegistration.userId !== userId) {
            throw new Error('无权限修改此报名记录');
        }
        if (existingRegistration.status !== 'REJECTED_RETRY') {
            throw new Error('只有"打回修改"状态的申请才能重新提交');
        }
        // 更新报名记录
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].registration.update({
            where: {
                id: registrationId
            },
            data: {
                applicantName: data.applicantName || null,
                projectName: data.projectName || null,
                teamMembers: data.teamMembers || null,
                teacherId: data.teacherId === 'none' ? null : data.teacherId || null,
                notes: data.notes || null,
                status: 'PENDING',
                feedback: null // 清空之前的反馈
            }
        });
        // 重新验证缓存
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/profile');
        return {
            success: true,
            message: '报名申请已重新提交，请等待审核'
        };
    } catch (error) {
        console.error('重新提交报名失败:', error);
        throw error instanceof Error ? error : new Error('重新提交报名失败，请稍后重试');
    }
}
async function cancelRegistration(registrationId) {
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!userId) throw new Error('未登录');
    try {
        // 1. 先查询该报名记录，确保是本人的，且确实存在
        const registration = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].registration.findUnique({
            where: {
                id: registrationId
            },
            include: {
                competition: {
                    select: {
                        deadline: true,
                        currentParticipants: true
                    }
                }
            }
        });
        if (!registration || registration.userId !== userId) {
            throw new Error('找不到该报名记录或无权操作');
        }
        // 2. 检查是否可以取消（比赛未截止且状态允许）
        if (new Date() > registration.competition.deadline) {
            throw new Error('比赛已截止，无法取消报名');
        }
        if (registration.status === 'REJECTED_FINAL') {
            throw new Error('已被最终驳回，无法取消报名');
        }
        // 3. 开启原子事务：删除记录 + 释放名额
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
            // 操作 A：彻底删除这条报名记录
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].registration.delete({
                where: {
                    id: registrationId
                }
            }),
            // 操作 B：对应的比赛报名人数安全减 1（不能低于 0）
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].competition.update({
                where: {
                    id: registration.competitionId,
                    currentParticipants: {
                        gt: 0 // 确保当前人数大于0才减
                    }
                },
                data: {
                    currentParticipants: {
                        decrement: 1
                    }
                }
            })
        ]);
        // 刷新缓存
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/profile');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/competitions');
        return {
            success: true,
            message: '报名已取消，名额已释放'
        };
    } catch (error) {
        console.error('取消报名失败:', error);
        throw error instanceof Error ? error : new Error('取消报名失败，请稍后重试');
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getCompetitions,
    fixExpiredCompetitions,
    registerCompetition,
    getAvailableTeachers,
    resubmitRegistration,
    cancelRegistration
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCompetitions, "40da1ee1ea4e7e34d99ad079c5cf24a57bb21a18d3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fixExpiredCompetitions, "00d7967953c67e01b41cea4cd01b55282611862497", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(registerCompetition, "40d3df32856f750dd4617dcf1415f39775c2c9add2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAvailableTeachers, "005fb073d9904eff3e85c9514f05a83bf172e70a87", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(resubmitRegistration, "6082148d9910a48095d7b2999e57fe92c028b309e7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(cancelRegistration, "400df771ce0a48cf632c07f38d4118592a5793a53f", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2b6f94e4._.js.map