module.exports = [
"[project]/src/app/actions/admin.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0019424afa3dadab8f2b09aafe984966dc2fe858f4":"getAllUsers","0026afadc654d3606687a68e2824f9f97ed822ce5f":"getAllAchievements","003a0e90cde348c05b33c4a19272d4b5c3fd68d804":"getDashboardStats","0042f0a80d414beb5f074f4fc8bb423a5243910492":"getTeachers","0077e6a05ecbc061e95914afd3c0dcd2aa51320c17":"getAllRegistrations","00ff641a2c25e21bedf8f9a3bc857c4597268ec3cc":"verifyAdminPermission","401f961757cb90b79478f5293d718b129851f1b1c5":"deleteCompetition","402de31151241a76c5e8840ff18fb1853631af1230":"getExportData","40479dc5126f3ed2825c34f94c0c294831568658c8":"getAchievementsByUserId","405adcac96d6215bd44aafdc67639b0a8458594650":"createCompetition","407e1365b3cfa03889ef98480528adc6a41d9c0b4b":"batchImportTeachers","40bcb6b65a1aac680cdf097a09af450aa57dde1043":"adminDeleteAchievement","40d17ab7046f19696fc4d9e174929ea59b8ac834c6":"deleteTeacher","40fcb1e34755ce1bd291d5ccec8dbdc3eb19ce69f0":"createTeacher","604b24bbdf8995b58e6d9892b0041a4dd380a833a9":"toggleCompetitionArchive","60d83c7184ec3a0e629c6b1bfcbfca98c4232ad663":"updateCompetition","7000681646cab0df678faaf021ae964d8a48068d27":"batchReviewRegistrations","700184bcf6a5e75db180067246bb5eeaabfccf0821":"reviewRegistration"},"",""] */ __turbopack_context__.s([
    "adminDeleteAchievement",
    ()=>adminDeleteAchievement,
    "batchImportTeachers",
    ()=>batchImportTeachers,
    "batchReviewRegistrations",
    ()=>batchReviewRegistrations,
    "createCompetition",
    ()=>createCompetition,
    "createTeacher",
    ()=>createTeacher,
    "deleteCompetition",
    ()=>deleteCompetition,
    "deleteTeacher",
    ()=>deleteTeacher,
    "getAchievementsByUserId",
    ()=>getAchievementsByUserId,
    "getAllAchievements",
    ()=>getAllAchievements,
    "getAllRegistrations",
    ()=>getAllRegistrations,
    "getAllUsers",
    ()=>getAllUsers,
    "getDashboardStats",
    ()=>getDashboardStats,
    "getExportData",
    ()=>getExportData,
    "getTeachers",
    ()=>getTeachers,
    "reviewRegistration",
    ()=>reviewRegistration,
    "toggleCompetitionArchive",
    ()=>toggleCompetitionArchive,
    "updateCompetition",
    ()=>updateCompetition,
    "verifyAdminPermission",
    ()=>verifyAdminPermission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function verifyAdminPermission() {
    try {
        const { userId, sessionClaims } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) {
            throw new Error('未登录，请先登录');
        }
        // 直接从本地 JWT Token 中读取 role，零网络请求！
        const role = sessionClaims?.role;
        if (role !== 'admin') {
            throw new Error('权限不足：您的账号不是管理员');
        }
        return {
            userId
        } // 不再返回完整的 user 对象，因为我们不需要了
        ;
    } catch (error) {
        console.error('管理员权限校验失败:', error);
        throw new Error(error instanceof Error ? error.message : '权限校验遇到未知错误');
    }
}
async function getAllUsers() {
    try {
        await verifyAdminPermission();
        const clerk = await clerkClient();
        const userList = await clerk.users.getUserList({
            limit: 100,
            orderBy: '-created_at'
        });
        // 返回精简的用户信息
        return userList.data.map((user)=>({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                emailAddresses: user.emailAddresses,
                imageUrl: user.imageUrl
            }));
    } catch (error) {
        console.error('获取用户列表失败:', error);
        // 检查是否是 Clerk API 错误
        if (error && typeof error === 'object' && 'clerkError' in error) {
            console.error('Clerk API 错误详情:', JSON.stringify(error, null, 2));
            // 返回空数组而不是抛出错误，防止页面崩溃
            return [];
        }
        // 检查是否是网络错误或其他 API 错误
        if (error instanceof Error) {
            if (error.message.includes('fetch') || error.message.includes('network') || error.message.includes('ECONNREFUSED') || error.message.includes('timeout')) {
                console.error('网络连接错误，可能是 Clerk 服务不可用:', error.message);
                return [];
            }
            if (error.message.includes('ClerkAPIResponseError')) {
                console.error('Clerk API 响应错误:', error.message);
                return [];
            }
        }
        // 其他未知错误，返回空数组防止页面崩溃
        console.error('未知错误类型，返回空数组:', error);
        return [];
    }
}
async function getAchievementsByUserId(targetUserId) {
    try {
        await verifyAdminPermission();
        const achievements = await prisma.achievement.findMany({
            where: {
                userId: targetUserId
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return achievements;
    } catch (error) {
        console.error('获取用户成就失败:', error);
        throw error instanceof Error ? error : new Error('获取用户成就失败');
    }
}
async function adminDeleteAchievement(achievementId) {
    try {
        await verifyAdminPermission();
        // 直接删除成就记录，不检查所有者
        await prisma.achievement.delete({
            where: {
                id: achievementId
            }
        });
        // 重新验证缓存，刷新相关页面
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/users');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/profile');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/achievements');
        return {
            success: true,
            message: '成就已成功删除'
        };
    } catch (error) {
        console.error('删除成就失败:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : '删除成就失败，请稍后重试'
        };
    }
}
async function createCompetition(data) {
    try {
        await verifyAdminPermission();
        // 验证输入数据
        if (!data.name || data.name.trim().length === 0) {
            return {
                success: false,
                message: '竞赛名称不能为空'
            };
        }
        if (!data.category) {
            return {
                success: false,
                message: '请选择竞赛分类'
            };
        }
        if (!data.deadline) {
            return {
                success: false,
                message: '请选择截止日期'
            };
        }
        const deadlineDate = new Date(data.deadline);
        if (isNaN(deadlineDate.getTime()) || deadlineDate <= new Date()) {
            return {
                success: false,
                message: '截止日期必须是未来时间'
            };
        }
        const maxParticipantsNum = parseInt(data.maxParticipants);
        if (isNaN(maxParticipantsNum) || maxParticipantsNum <= 0) {
            return {
                success: false,
                message: '人数上限必须是大于0的数字'
            };
        }
        // 创建竞赛
        const competition = await prisma.competition.create({
            data: {
                name: data.name.trim(),
                category: data.category,
                description: data.description?.trim() || '',
                deadline: deadlineDate,
                maxParticipants: maxParticipantsNum,
                currentParticipants: 0
            }
        });
        // 刷新缓存
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/competitions');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/competitions');
        return {
            success: true,
            data: competition,
            message: '竞赛创建成功！'
        };
    } catch (error) {
        console.error('创建竞赛失败:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : '创建竞赛失败，请稍后重试'
        };
    }
}
async function updateCompetition(id, data) {
    try {
        await verifyAdminPermission();
        // 验证输入数据
        if (!data.name || data.name.trim().length === 0) {
            return {
                success: false,
                message: '竞赛名称不能为空'
            };
        }
        if (!data.category) {
            return {
                success: false,
                message: '请选择竞赛分类'
            };
        }
        if (!data.deadline) {
            return {
                success: false,
                message: '请选择截止日期'
            };
        }
        const deadlineDate = new Date(data.deadline);
        if (isNaN(deadlineDate.getTime()) || deadlineDate <= new Date()) {
            return {
                success: false,
                message: '截止日期必须是未来时间'
            };
        }
        const maxParticipantsNum = parseInt(data.maxParticipants);
        if (isNaN(maxParticipantsNum) || maxParticipantsNum <= 0) {
            return {
                success: false,
                message: '人数上限必须是大于0的数字'
            };
        }
        // 检查竞赛是否存在
        const existingCompetition = await prisma.competition.findUnique({
            where: {
                id
            }
        });
        if (!existingCompetition) {
            return {
                success: false,
                message: '竞赛不存在'
            };
        }
        // 更新竞赛
        const competition = await prisma.competition.update({
            where: {
                id
            },
            data: {
                name: data.name.trim(),
                category: data.category,
                description: data.description?.trim() || '',
                deadline: deadlineDate,
                maxParticipants: maxParticipantsNum
            }
        });
        // 刷新缓存
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/competitions');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/competitions');
        return {
            success: true,
            data: competition,
            message: '竞赛更新成功！'
        };
    } catch (error) {
        console.error('更新竞赛失败:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : '更新竞赛失败，请稍后重试'
        };
    }
}
async function deleteCompetition(id) {
    try {
        await verifyAdminPermission();
        // 检查竞赛是否存在
        const existingCompetition = await prisma.competition.findUnique({
            where: {
                id
            }
        });
        if (!existingCompetition) {
            return {
                success: false,
                message: '竞赛不存在'
            };
        }
        // 使用 Prisma 事务安全删除竞赛及其相关数据
        await prisma.$transaction(async (tx)=>{
            // 第一步：删除所有相关的报名记录
            await tx.registration.deleteMany({
                where: {
                    competitionId: id
                }
            });
            // 第二步：删除竞赛本身
            await tx.competition.delete({
                where: {
                    id
                }
            });
        });
        // 刷新缓存
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/competitions');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/competitions');
        return {
            success: true,
            message: '竞赛删除成功！'
        };
    } catch (error) {
        console.error('删除竞赛失败:', error);
        // 检查是否是外键约束错误
        if (error instanceof Error && error.message.includes('foreign key constraint')) {
            return {
                success: false,
                message: '删除失败：该竞赛仍有关联数据，请先处理相关记录'
            };
        }
        return {
            success: false,
            message: error instanceof Error ? error.message : '删除竞赛失败，请稍后重试'
        };
    }
}
async function getTeachers() {
    try {
        await verifyAdminPermission();
        const teachers = await prisma.teacher.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return teachers;
    } catch (error) {
        console.error('获取老师列表失败:', error);
        throw error instanceof Error ? error : new Error('获取老师列表失败，请稍后重试');
    }
}
async function createTeacher(data) {
    try {
        await verifyAdminPermission();
        // 验证输入数据
        if (!data.name || data.name.trim().length === 0) {
            return {
                success: false,
                message: '教师姓名不能为空'
            };
        }
        // 查询当前数据库中共有多少位老师
        const currentYear = new Date().getFullYear();
        const teacherCount = await prisma.teacher.count();
        // 生成格式为 T + 年份 + 3位流水号的教师编号
        const teacherNo = `T${currentYear}${String(teacherCount + 1).padStart(3, '0')}`;
        // 创建老师记录
        const teacher = await prisma.teacher.create({
            data: {
                name: data.name.trim(),
                department: data.department?.trim() || null,
                teacherNo
            }
        });
        // 刷新缓存
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/teachers');
        return {
            success: true,
            data: teacher,
            message: '指导老师添加成功！'
        };
    } catch (error) {
        console.error('创建老师失败:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : '创建老师失败，请稍后重试'
        };
    }
}
async function deleteTeacher(id) {
    try {
        await verifyAdminPermission();
        // 检查老师是否存在
        const existingTeacher = await prisma.teacher.findUnique({
            where: {
                id
            }
        });
        if (!existingTeacher) {
            return {
                success: false,
                message: '指导老师不存在'
            };
        }
        // 检查是否有关联的报名记录
        const registrationCount = await prisma.registration.count({
            where: {
                teacherId: id
            }
        });
        if (registrationCount > 0) {
            return {
                success: false,
                message: '该老师还有关联的报名记录，无法删除'
            };
        }
        // 删除老师记录
        await prisma.teacher.delete({
            where: {
                id
            }
        });
        // 刷新缓存
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/teachers');
        return {
            success: true,
            message: '指导老师删除成功！'
        };
    } catch (error) {
        console.error('删除老师失败:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : '删除老师失败，请稍后重试'
        };
    }
}
async function getAllRegistrations() {
    await verifyAdminPermission();
    try {
        const registrations = await prisma.registration.findMany({
            include: {
                competition: {
                    select: {
                        id: true,
                        name: true,
                        category: true,
                        deadline: true
                    }
                },
                teacher: {
                    select: {
                        id: true,
                        name: true,
                        teacherNo: true,
                        department: true
                    }
                },
                user: {
                    select: {
                        id: true,
                        email: true,
                        name: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return registrations;
    } catch (error) {
        console.error('获取报名记录失败:', error);
        throw error instanceof Error ? error : new Error('获取报名记录失败，请稍后重试');
    }
}
async function reviewRegistration(registrationId, status, feedback) {
    await verifyAdminPermission();
    try {
        // 验证状态值
        const validStatuses = [
            'PENDING',
            'APPROVED',
            'REJECTED_RETRY',
            'REJECTED_FINAL'
        ];
        if (!validStatuses.includes(status)) {
            throw new Error('无效的审批状态');
        }
        // 如果状态为 REJECTED_RETRY 或 REJECTED_FINAL，必须提供反馈意见
        if ((status === 'REJECTED_RETRY' || status === 'REJECTED_FINAL') && (!feedback || feedback.trim().length === 0)) {
            throw new Error('驳回申请时必须提供反馈意见');
        }
        // 检查报名记录是否存在
        const existingRegistration = await prisma.registration.findUnique({
            where: {
                id: registrationId
            },
            include: {
                competition: true,
                user: true
            }
        });
        if (!existingRegistration) {
            throw new Error('报名记录不存在');
        }
        // 更新报名记录
        await prisma.registration.update({
            where: {
                id: registrationId
            },
            data: {
                status,
                feedback: feedback?.trim() || null
            }
        });
        // 如果审批通过，自动生成成就记录
        if (status === 'APPROVED') {
            try {
                // 检查是否已存在相同的成就记录（避免重复生成）
                const existingAchievement = await prisma.achievement.findFirst({
                    where: {
                        userId: existingRegistration.userId,
                        title: existingRegistration.competition.name,
                        type: 'AWARD' // 竞赛获奖默认为奖项类型
                    }
                });
                if (!existingAchievement) {
                    // 根据竞赛类别确定成就级别
                    let achievementLevel = 'SCHOOL';
                    if (existingRegistration.competition.category === 'TECHNICAL' || existingRegistration.competition.category === 'AI') {
                        achievementLevel = 'STATE';
                    } else if (existingRegistration.competition.category === 'PROGRAMMING' || existingRegistration.competition.category === 'INNOVATION') {
                        achievementLevel = 'PROVINCE';
                    }
                    // 创建成就记录
                    await prisma.achievement.create({
                        data: {
                            userId: existingRegistration.userId,
                            title: existingRegistration.competition.name,
                            type: 'AWARD',
                            level: achievementLevel,
                            date: new Date()
                        }
                    });
                    console.log(`已为用户 ${existingRegistration.userId} 自动生成成就记录：${existingRegistration.competition.name}`);
                }
            } catch (achievementError) {
                console.error('自动生成成就记录失败:', achievementError);
            // 不影响审批流程，只记录错误
            }
        }
        // 重新验证缓存
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/registrations');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/profile');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/achievements'); // 刷新管理员成就页面（如果存在）
        return {
            success: true,
            message: status === 'APPROVED' ? '报名已通过，已自动生成成就记录！' : '报名已更新'
        };
    } catch (error) {
        console.error('审核报名失败:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : '审核失败，请稍后重试'
        };
    }
}
async function getDashboardStats() {
    try {
        await verifyAdminPermission();
        const clerk = await clerkClient();
        // 获取用户总数，添加错误处理
        let totalUsers = 0;
        try {
            totalUsers = await clerk.users.getCount();
        } catch (clerkError) {
            console.error('获取用户总数失败:', clerkError);
            // 如果是网络或 API 错误，使用默认值
            if (clerkError instanceof Error && (clerkError.message.includes('fetch') || clerkError.message.includes('network') || clerkError.message.includes('ECONNREFUSED') || clerkError.message.includes('timeout') || clerkError.message.includes('ClerkAPIResponseError'))) {
                console.error('网络或 Clerk API 错误，使用默认用户数 0');
            } else if (clerkError && typeof clerkError === 'object' && 'clerkError' in clerkError) {
                console.error('Clerk API 错误详情:', JSON.stringify(clerkError, null, 2));
            }
            totalUsers = 0; // 使用默认值
        }
        // 并行获取其他统计数据
        const [totalCompetitions, totalRegistrations, pendingReviews, categoryStats, topCompetitions, recentPending] = await Promise.all([
            // 赛事总数
            prisma.competition.count(),
            // 报名总数
            prisma.registration.count(),
            // 待审核数量
            prisma.registration.count({
                where: {
                    status: 'PENDING'
                }
            }),
            // 按分类统计赛事数量
            prisma.competition.groupBy({
                by: [
                    'category'
                ],
                _count: {
                    id: true
                }
            }),
            // 报名人数最多的前5个赛事
            prisma.competition.findMany({
                select: {
                    id: true,
                    name: true,
                    _count: {
                        select: {
                            registrations: true
                        }
                    }
                },
                orderBy: {
                    registrations: {
                        _count: 'desc'
                    }
                },
                take: 5
            }),
            // 最新5条待审核报名
            prisma.registration.findMany({
                where: {
                    status: 'PENDING'
                },
                select: {
                    id: true,
                    applicantName: true,
                    competition: {
                        select: {
                            name: true
                        }
                    },
                    createdAt: true,
                    user: {
                        select: {
                            name: true
                        }
                    }
                },
                orderBy: {
                    createdAt: 'desc'
                },
                take: 5
            })
        ]);
        // 处理分类统计数据，合并相似分类
        const processedCategoryStats = categoryStats.reduce((acc, item)=>{
            const category = item.category || '其他';
            const existingItem = acc.find((stat)=>stat.name === category);
            if (existingItem) {
                existingItem.value += item._count.id;
            } else {
                acc.push({
                    name: category,
                    value: item._count.id
                });
            }
            return acc;
        }, []);
        return {
            totalUsers,
            totalCompetitions,
            totalRegistrations,
            pendingReviews,
            categoryStats: processedCategoryStats,
            topCompetitions: topCompetitions.map((comp)=>({
                    name: comp.name,
                    registrations: comp._count.registrations
                })),
            recentPending: recentPending.map((reg)=>({
                    id: reg.id,
                    applicantName: reg.applicantName || reg.user?.name || '未知',
                    competitionName: reg.competition.name,
                    createdAt: reg.createdAt
                }))
        };
    } catch (error) {
        console.error('获取仪表板统计数据失败:', error);
        // 如果是权限验证错误，返回默认统计数据
        if (error instanceof Error && (error.message.includes('网络请求超时') || error.message.includes('认证服务') || error.message.includes('权限不足') || error.message.includes('未登录'))) {
            console.error('权限验证失败，返回默认统计数据:', error.message);
            return {
                totalUsers: 0,
                totalCompetitions: 0,
                totalRegistrations: 0,
                pendingReviews: 0,
                categoryStats: [],
                topCompetitions: [],
                recentPending: []
            };
        }
        // 其他错误也返回默认统计数据，防止页面崩溃
        console.error('未知错误，返回默认统计数据:', error);
        return {
            totalUsers: 0,
            totalCompetitions: 0,
            totalRegistrations: 0,
            pendingReviews: 0,
            categoryStats: [],
            topCompetitions: [],
            recentPending: []
        };
    }
}
async function batchImportTeachers(teachersData) {
    await verifyAdminPermission();
    const clerk = await clerkClient();
    try {
        // 获取当前年份
        const currentYear = new Date().getFullYear();
        const yearPrefix = `T${currentYear}`;
        // 查询当前年份最新的教师编号
        const latestTeacher = await prisma.teacher.findFirst({
            where: {
                teacherNo: {
                    startsWith: yearPrefix
                }
            },
            orderBy: {
                teacherNo: 'desc'
            }
        });
        // 计算起始流水号
        let serialNumber = 1;
        if (latestTeacher) {
            const latestSerial = parseInt(latestTeacher.teacherNo.slice(-3));
            if (!isNaN(latestSerial)) {
                serialNumber = latestSerial + 1;
            }
        }
        // 格式化教师数据
        const formattedTeachers = teachersData.map((teacher, index)=>{
            const teacherNo = `${yearPrefix}${serialNumber.toString().padStart(3, '0')}`;
            serialNumber++;
            return {
                name: teacher.name.trim(),
                department: teacher.department?.trim() || null,
                teacherNo
            };
        });
        // 批量插入数据库
        await prisma.teacher.createMany({
            data: formattedTeachers
        });
        // 重新验证缓存
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/teachers');
        return {
            success: true,
            count: formattedTeachers.length,
            message: `成功导入 ${formattedTeachers.length} 位指导老师`
        };
    } catch (error) {
        console.error('批量导入指导老师失败:', error);
        throw error instanceof Error ? error : new Error('批量导入失败，请稍后重试');
    }
}
async function batchReviewRegistrations(ids, status, feedback) {
    await verifyAdminPermission();
    try {
        // 验证状态值
        const validStatuses = [
            'APPROVED',
            'REJECTED_RETRY',
            'REJECTED_FINAL'
        ];
        if (!validStatuses.includes(status)) {
            throw new Error('无效的审批状态');
        }
        // 如果状态为 REJECTED_RETRY 或 REJECTED_FINAL，必须提供反馈意见
        if ((status === 'REJECTED_RETRY' || status === 'REJECTED_FINAL') && (!feedback || feedback.trim().length === 0)) {
            throw new Error('驳回申请时必须提供反馈意见');
        }
        // 验证ID数组
        if (!ids || ids.length === 0) {
            throw new Error('请选择要审批的报名记录');
        }
        // 获取要更新的报名记录详情（用于生成成就）
        const registrationsToUpdate = await prisma.registration.findMany({
            where: {
                id: {
                    in: ids
                }
            },
            include: {
                competition: true,
                user: true
            }
        });
        // 批量更新报名记录
        const result = await prisma.registration.updateMany({
            where: {
                id: {
                    in: ids
                }
            },
            data: {
                status,
                feedback: feedback?.trim() || null
            }
        });
        // 如果审批通过，批量生成成就记录
        if (status === 'APPROVED') {
            try {
                for (const registration of registrationsToUpdate){
                    // 检查是否已存在相同的成就记录（避免重复生成）
                    const existingAchievement = await prisma.achievement.findFirst({
                        where: {
                            userId: registration.userId,
                            title: registration.competition.name,
                            type: 'AWARD' // 竞赛获奖默认为奖项类型
                        }
                    });
                    if (!existingAchievement) {
                        // 根据竞赛类别确定成就级别
                        let achievementLevel = 'SCHOOL';
                        if (registration.competition.category === 'TECHNICAL' || registration.competition.category === 'AI') {
                            achievementLevel = 'STATE';
                        } else if (registration.competition.category === 'PROGRAMMING' || registration.competition.category === 'INNOVATION') {
                            achievementLevel = 'PROVINCE';
                        }
                        // 创建成就记录
                        await prisma.achievement.create({
                            data: {
                                userId: registration.userId,
                                title: registration.competition.name,
                                type: 'AWARD',
                                level: achievementLevel,
                                date: new Date()
                            }
                        });
                        console.log(`已为用户 ${registration.userId} 自动生成成就记录：${registration.competition.name}`);
                    }
                }
            } catch (achievementError) {
                console.error('批量生成成就记录失败:', achievementError);
            // 不影响审批流程，只记录错误
            }
        }
        // 重新验证缓存
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/registrations');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/profile');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/achievements'); // 刷新管理员成就页面（如果存在）
        return {
            success: true,
            count: result.count,
            message: status === 'APPROVED' ? `成功通过 ${result.count} 条报名申请，已自动生成成就记录！` : `成功处理 ${result.count} 条报名记录`
        };
    } catch (error) {
        console.error('批量审批失败:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : '批量审批失败，请稍后重试'
        };
    }
}
async function getAllAchievements() {
    try {
        await verifyAdminPermission();
        const achievements = await prisma.achievement.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return achievements;
    } catch (error) {
        console.error('获取成就记录失败:', error);
        // 如果是权限验证错误，返回空数组而不是抛出错误
        if (error instanceof Error && (error.message.includes('网络请求超时') || error.message.includes('认证服务') || error.message.includes('权限不足') || error.message.includes('未登录'))) {
            console.error('权限验证失败，返回空数组:', error.message);
            return [];
        }
        // 其他错误也返回空数组，防止页面崩溃
        console.error('未知错误，返回空数组:', error);
        return [];
    }
}
async function getExportData(competitionId) {
    await verifyAdminPermission();
    try {
        // 查询该赛事下所有已通过的报名记录
        const registrations = await prisma.registration.findMany({
            where: {
                competitionId,
                status: 'APPROVED'
            },
            include: {
                teacher: {
                    select: {
                        name: true,
                        department: true
                    }
                }
            },
            orderBy: {
                createdAt: 'asc'
            }
        });
        // 扁平化格式化数据
        const exportData = registrations.map((reg)=>({
                申请人: reg.applicantName || '未知',
                作品名称: reg.projectName || '无',
                团队成员: reg.teamMembers || '无',
                指导老师: reg.teacher?.name || '无',
                老师学院: reg.teacher?.department || '无',
                报名说明: reg.notes || '无',
                提交时间: reg.createdAt.toLocaleDateString('zh-CN', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                })
            }));
        return exportData;
    } catch (error) {
        console.error('获取导出数据失败:', error);
        throw error instanceof Error ? error : new Error('获取导出数据失败，请稍后重试');
    }
}
async function toggleCompetitionArchive(id, currentStatus) {
    await verifyAdminPermission();
    try {
        // 更新竞赛状态
        const newStatus = !currentStatus;
        const competition = await prisma.competition.update({
            where: {
                id
            },
            data: {
                isActive: newStatus
            }
        });
        // 重新验证缓存
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/competitions');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/competitions');
        return {
            success: true,
            data: competition,
            message: newStatus ? '竞赛已重新上架' : '竞赛已归档'
        };
    } catch (error) {
        console.error('切换竞赛状态失败:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : '切换竞赛状态失败，请稍后重试'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    verifyAdminPermission,
    getAllUsers,
    getAchievementsByUserId,
    adminDeleteAchievement,
    createCompetition,
    updateCompetition,
    deleteCompetition,
    getTeachers,
    createTeacher,
    deleteTeacher,
    getAllRegistrations,
    reviewRegistration,
    getDashboardStats,
    batchImportTeachers,
    batchReviewRegistrations,
    getAllAchievements,
    getExportData,
    toggleCompetitionArchive
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(verifyAdminPermission, "00ff641a2c25e21bedf8f9a3bc857c4597268ec3cc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllUsers, "0019424afa3dadab8f2b09aafe984966dc2fe858f4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAchievementsByUserId, "40479dc5126f3ed2825c34f94c0c294831568658c8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(adminDeleteAchievement, "40bcb6b65a1aac680cdf097a09af450aa57dde1043", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCompetition, "405adcac96d6215bd44aafdc67639b0a8458594650", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCompetition, "60d83c7184ec3a0e629c6b1bfcbfca98c4232ad663", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCompetition, "401f961757cb90b79478f5293d718b129851f1b1c5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTeachers, "0042f0a80d414beb5f074f4fc8bb423a5243910492", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createTeacher, "40fcb1e34755ce1bd291d5ccec8dbdc3eb19ce69f0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTeacher, "40d17ab7046f19696fc4d9e174929ea59b8ac834c6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllRegistrations, "0077e6a05ecbc061e95914afd3c0dcd2aa51320c17", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(reviewRegistration, "700184bcf6a5e75db180067246bb5eeaabfccf0821", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDashboardStats, "003a0e90cde348c05b33c4a19272d4b5c3fd68d804", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(batchImportTeachers, "407e1365b3cfa03889ef98480528adc6a41d9c0b4b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(batchReviewRegistrations, "7000681646cab0df678faaf021ae964d8a48068d27", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllAchievements, "0026afadc654d3606687a68e2824f9f97ed822ce5f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getExportData, "402de31151241a76c5e8840ff18fb1853631af1230", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(toggleCompetitionArchive, "604b24bbdf8995b58e6d9892b0041a4dd380a833a9", null);
}),
];

//# sourceMappingURL=src_app_actions_admin_ts_ec36a71c._.js.map