-- CreateTable
CREATE TABLE "moment" (
    "idx" SERIAL NOT NULL,
    "uIdx" INTEGER NOT NULL,
    "pIdx" INTEGER NOT NULL,
    "moment" TEXT NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "moment_pkey" PRIMARY KEY ("idx")
);

-- CreateTable
CREATE TABLE "post" (
    "idx" SERIAL NOT NULL,
    "uIdx" INTEGER NOT NULL,
    "post" TEXT NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("idx")
);
