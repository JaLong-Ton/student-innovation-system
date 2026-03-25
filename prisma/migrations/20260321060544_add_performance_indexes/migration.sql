-- CreateIndex
CREATE INDEX "Achievement_userId_idx" ON "Achievement"("userId");

-- CreateIndex
CREATE INDEX "Achievement_createdAt_idx" ON "Achievement"("createdAt");

-- CreateIndex
CREATE INDEX "Competition_isActive_idx" ON "Competition"("isActive");

-- CreateIndex
CREATE INDEX "Competition_category_idx" ON "Competition"("category");

-- CreateIndex
CREATE INDEX "Competition_deadline_idx" ON "Competition"("deadline");

-- CreateIndex
CREATE INDEX "Registration_status_idx" ON "Registration"("status");

-- CreateIndex
CREATE INDEX "Registration_userId_idx" ON "Registration"("userId");

-- CreateIndex
CREATE INDEX "Registration_competitionId_idx" ON "Registration"("competitionId");

-- CreateIndex
CREATE INDEX "Registration_createdAt_idx" ON "Registration"("createdAt");

-- CreateIndex
CREATE INDEX "Teacher_teacherNo_idx" ON "Teacher"("teacherNo");
