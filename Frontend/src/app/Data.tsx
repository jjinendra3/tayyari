"use client";
import React, { useState } from "react";
import Context from "./ContextAPI";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
const BACKEND = process.env.NEXT_PUBLIC_BACKEND;
interface TayyariProps {
  children: React.ReactNode;
}
interface Question{
  id:number,
  ques:string,
  ques_image:string|File|null,
  ans_image:string|File|null,
  ans:string,
  opt1:string,
  opt2:string,
  opt3:string,
  opt4:string,
  solution:string 
}
const Tayyari: React.FC<TayyariProps> = ({ children }) => {
  const [questions, setquestions] = useState<Question[]>([{
    id:0,
    ques:"",
    ques_image:null,
    ans:"",
    opt1:"",
    opt2:"",
    opt3:"",
    opt4:"",
    solution:"",
    ans_image:null
  }]);
  const router = useRouter();
  const wakeserver = async () => {
    try {
      const res = await axios.get(`${BACKEND}/submissions`);
      if (res.data.success === 0) {
        throw new Error(res.data.error);
      } 
      toast.success("Server is up");
    } catch (error: any) {
      toast.error(error);
    }
  };
 
  const submit = async (question_id: number, answer: string) => {
    try {
      const res = await axios.post(`${BACKEND}/submit`, {
        question_id,
        answer,
      });
      if (res.data.success === 1) {
        toast.success("Submitted");
      } else {
        toast.error(res.data.error);
      }
    } catch (error: any) {
      toast.error(error);
    }
  };
  const fetchquestions = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/questions`);
      if (res.data.success === 1) {
        setquestions(res.data.ques);
      } else {
        throw new Error(res.data.error);
      }
    } catch (error: any) {
      toast.error(error);
    }
  };
  return <Context.Provider value={{questions,wakeserver,submit,fetchquestions}}>{children}</Context.Provider>;
};

export default Tayyari;
