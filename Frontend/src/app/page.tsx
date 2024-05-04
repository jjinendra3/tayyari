"use client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ans from '../../public/ans.jpg';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import ques from "../../public/ques.png";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
export default function Home() {
  const [value, setValue] = useState<string | undefined>(undefined);
  const handleValue = (value: string) => {
    setValue(value);
  };
  const [submit, setsubmit] = useState<boolean>(false);
  const [bookmark, setBookmark] = useState<boolean>(false);
  console.log(value!=undefined?value.slice(0,1):"");
  return (
    <div className="flex min-h-screen space-x-2">
     <div className={`flex flex-1 flex-col  p-6 border-4 border-gray-300 rounded-r-lg bg-white ${submit && 'w-2/3  overflow-y-hidden'}`}>
      <div className="flex items-center space-x-2 text-2xl font-bold mb-4 rounded-xl">
        <h1>Question 1</h1>
        {bookmark ? (
          <FaBookmark className="cursor-pointer" onClick={() => setBookmark(false)} />
        ) : (
          <CiBookmark className="cursor-pointer" onClick={() => setBookmark(true)} />
        )}
      </div>
      <p className="mb-4 font-semibold">
        The ratio of a cylinder to that of a cone is 2:5. Find the ratio of
        volume of the cylinder to that of a cone. The ratio of the radius of a
        cylinder to that of a cone is 2:5. Find the ratio of volume of the
        cylinder to that of a cone.
      </p>
      <div className="mb-4">
        <Image src={ques} alt="Question Image" className="h-64 w-64 ml-3" />
      </div>
      <RadioGroup onValueChange={handleValue} className="flex flex-wrap flex-col w-full md:space-y-6 space-y-2">
  <div className="flex flex-col md:flex-row md:space-x-6 ">
    <div className={`flex space-x-2 py-3 px-5 md:w-96  items-center rounded-md ${value!==undefined ? (value.slice(0,1)==="A"?'bg-blue-200':'bg-white'):'bg-white'} shadow-xl border mb-4 md:mb-0`}>
      <RadioGroupItem value="A. Chemistry" id="r1"className="cursor-pointer" />
      <Label htmlFor="r1"className="cursor-pointer">A. Chemistry</Label>
    </div>
    <div className={`flex space-x-2 py-3 px-5 md:w-96 items-center rounded-md ${value!==undefined? (value.slice(0,1)==="B"?'bg-blue-200':'bg-white'):'bg-white'} shadow-xl border`}>
      <RadioGroupItem value="B. Chemistry" id="r2" className="cursor-pointer"/>
      <Label htmlFor="r2" className="cursor-pointer">B. Chemistry</Label>
    </div>
  </div>
  <div className="flex flex-col md:flex-row md:space-x-6 ">
    <div className={`flex space-x-2 py-3 px-5 md:w-96 items-center rounded-md ${value!==undefined? (value.slice(0,1)==="C"?'bg-blue-200':'bg-white'):'bg-white'} shadow-xl border mb-4 md:mb-0`} >
      <RadioGroupItem value="C. Chemistry" id="r3" className="cursor-pointer" />
      <Label htmlFor="r3" className="cursor-pointer">C. Chemistry</Label>
    </div>
    <div className={`flex space-x-2 py-3 px-5 md:w-96 items-center rounded-md ${value!=undefined?(value.slice(0,1)==="D"?'bg-blue-200':'bg-white'):'bg-white'} shadow-xl border`}>
      <RadioGroupItem value="D. Chemistry" id="r4" className="cursor-pointer"/>
      <Label htmlFor="r4" className="cursor-pointer">D. Chemistry</Label>
    </div>
  </div>
</RadioGroup>
<div className="md:flex md:flex-row md:justify-between md:mt-auto text-gray-500 mt-4">
  <Button variant="outline" className="flex space-x-2 items-center ">
    <FaArrowLeft />
    <div className="font-bold hidden md:block">Previous</div>
  </Button>
  <div className="space-x-4">
    <Button variant="outline" className="font-bold py-2">
      Check Solution
    </Button>
    <Button variant="outline" className="font-bold  bg-blue-600 text-white" onClick={()=>{
      setsubmit(true);
    }}>
      Submit Answer
    </Button>
  </div>
  <Button variant="outline" className="flex space-x-2 items-center">
    <div className="font-bold hidden md:block">Skip</div>
    <FaArrowRight />
  </Button>
</div>
    </div>
    <div className={`left flex text-gray-500 flex-col p-4  ${submit?'w-1/3 bg-white overflow-y-auto':'hidden'} border-4 border-gray-300 rounded-l-lg`}>
      <div className="flex flex-row justify-between w-full text-xl font-bold mb-4">
        <div>Answer</div>
      <IoMdClose className="text-2xl cursor-pointer" onClick={()=>
        {
          setsubmit(false);
        }
      }/>
      </div>
      <div className={`flex space-x-2 py-2 px-3 md:w-96 font-semibold  items-center rounded-md bg-blue-200  mb-4`}>
      A. Chemistry
    </div>
    <div className="text-2xl font-bold  mb-4">
      Solution Explanation
    </div>
    <div className="font-bold mb-8">
    The ratio of a cylinder to that of a cone is 2:5. Find the ratio of
        volume of the cylinder to that of a cone. The ratio of the radius of a
        cylinder to that of a cone is 2:5. Find the ratio of volume of the
        cylinder to that of a cone.
    </div>
    <div>
      <Image src={ans} alt="Answer"/>
    </div>
  </div>
      </div>
  );
}
