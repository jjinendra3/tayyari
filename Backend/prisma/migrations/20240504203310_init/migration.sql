-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "ques" TEXT NOT NULL,
    "opt1" TEXT NOT NULL,
    "opt2" TEXT NOT NULL,
    "opt3" TEXT NOT NULL,
    "opt4" TEXT NOT NULL,
    "ans" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Submission" (
    "id" SERIAL NOT NULL,
    "quesId" INTEGER NOT NULL,
    "ans" TEXT NOT NULL,
    "correct" BOOLEAN NOT NULL,
    "datetime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);
