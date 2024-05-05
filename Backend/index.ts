import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

app.get("/reset", async (req, res) => {
  try {
    await prisma.submission.deleteMany();
    await prisma.question.deleteMany();
    return res.send({ success: 1 });
  } catch (error) {
    return res.send({ success: 0, error: error });
  }
});
app.post("/addQuestion", async (req, res) => {
  try {
    const question = await prisma.question.create({
      data: {
        ques: req.body.ques,
        ans: req.body.ans,
        opt1: req.body.opt1,
        opt2: req.body.opt2,
        opt3: req.body.opt3,
        opt4: req.body.opt4,
        ques_image: req.body.ques_image,
        ans_image: req.body.ans_image,//give i.ibb image link or keep it null
        solution: req.body.solution,//give i.ibb image link or keep it null
      },
    });
    return res.send({ success: 1, question });
  } catch (error: any) {
    return res.send({ success: 0, error: error });
  }
});

app.get("/submissions", async (req, res) => {
  try {
    const submissions = await prisma.submission.findMany();
    return res.send({ success: 1, submissions });
  } catch (error: any) {
    return res.send({ success: 0, error: error });
  }
});
app.post("/submit", async (req, res) => {
  try {
    const question = await prisma.question.findMany({
      where: {
        id: req.body.question_id,
      },
    });
    if (question.length == 0) {
      return res.send({ success: 0, error: "Question not found" });
    }
    const correct: boolean = question[0].ans === req.body.answer;
    const submission = await prisma.submission.create({
      data: {
        quesId: req.body.question_id,
        correct: correct,
      },
    });
    return res.send({ success: 1, submission, answer: question[0].ans });
  } catch (error: any) {
    return res.send({ success: 0, error: error });
  }
});
app.get("/questions", async (req, res) => {
  try {
    const questions = await prisma.question.findMany();
    return res.send({ success: 1, ques: questions });
  } catch (error: any) {
    return res.send({ success: 0, error: error });
  }
});
app.listen(5000, () => {
  return console.log(`Express is listening at http://localhost:5000`);
});
