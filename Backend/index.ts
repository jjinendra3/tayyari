import express from "express";
import cors from "cors";
const prisma=require('./db')
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/submissions", async(req, res) => {
  try {
   
  const submissions = await prisma.submission.findMany();
  return res.send({success:1,submissions}); 
  } catch (error:any) {
    return res.send({success:0,error:error});
  }
});
app.post("/submit", async(req, res) => {
  try {
    const question=await prisma.question.findMany({
      where:
          {
            id:req.body.question_id
          }
    });
    if(question.length==0)
    {
      return res.send({success:0,error:"Question not found"});
    }
    const correct:boolean=question[0].ans===req.body.answer;
    const submission=await prisma.submission.create({
      data:{
        quesId:req.body.question_id,
        correct:correct
      }
    });
  } catch (error:any) {
    return res.send({success:0,error:error});
  }
});
app.get('/question/:id',async(req,res)=>{
  try {
    const questions=await prisma.question.findMany({
      where:{
        id:req.params.id
      }
    });
    return res.send({success:1,ques:questions[0]});
  } catch (error:any) {
    return res.send({success:0,error:error});
  }
});
app.listen(5000, () => {
  return console.log(`Express is listening at http://localhost:5000`);
});
