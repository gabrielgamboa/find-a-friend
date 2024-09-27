-- CreateTable
CREATE TABLE "orgs" (
    "id" TEXT NOT NULL,
    "responsibleName" VARCHAR(255) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orgs_pkey" PRIMARY KEY ("id")
);
