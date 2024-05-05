-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "ans_image" TEXT,
ADD COLUMN     "ques_image" TEXT,
ADD COLUMN     "solution" TEXT NOT NULL DEFAULT 'No Solution Provided';
