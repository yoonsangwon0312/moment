-- CreateTable
CREATE TABLE "user" (
    "idx" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "passwd" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("idx")
);
