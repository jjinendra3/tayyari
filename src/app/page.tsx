"use client";
import Image from "next/image";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import ques from "../../public/ques.png";

export default function Home() {
  const [value, setValue] = useState<string | undefined>(undefined);
  const handleValue = (value: string) => {
    setValue(value);
  };
  const [bookmark, setBookmark] = useState<boolean>(false);
  console.log(value!=undefined?value.slice(0,1):"");
  return (
    <div className="flex flex-col min-h-screen p-6 border-4 border-gray-300">
      <div className="flex items-center space-x-2 text-2xl font-bold mb-4 rounded-xl">
        <h1>Question 1</h1>
        {bookmark ? (
          <FaBookmark onClick={() => setBookmark(false)} />
        ) : (
          <CiBookmark onClick={() => setBookmark(true)} />
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
    <div className={`flex space-x-2 py-3 px-5 md:w-96  items-center rounded-md ${value!==undefined ? (value.slice(0,1)==="A"?'bg-blue-300':'bg-white'):'bg-white'} shadow-xl border mb-4 md:mb-0`}>
      <RadioGroupItem value="A. Chemistry" id="r1" />
      <Label htmlFor="r1">A. Chemistry</Label>
    </div>
    <div className={`flex space-x-2 py-3 px-5 md:w-96 items-center rounded-md ${value!==undefined? (value.slice(0,1)==="B"?'bg-blue-300':'bg-white'):'bg-white'} shadow-xl border`}>
      <RadioGroupItem value="B. Chemistry" id="r2" />
      <Label htmlFor="r2">B. Chemistry</Label>
    </div>
  </div>
  <div className="flex flex-col md:flex-row md:space-x-6 ">
    <div className={`flex space-x-2 py-3 px-5 md:w-96 items-center rounded-md ${value!==undefined? (value.slice(0,1)==="C"?'bg-blue-300':'bg-white'):'bg-white'} shadow-xl border mb-4 md:mb-0`} >
      <RadioGroupItem value="C. Chemistry" id="r3" />
      <Label htmlFor="r3">C. Chemistry</Label>
    </div>
    <div className={`flex space-x-2 py-3 px-5 md:w-96 items-center rounded-md ${value!=undefined?(value.slice(0,1)==="D"?'bg-blue-300':'bg-white'):'bg-white'} shadow-xl border`}>
      <RadioGroupItem value="D. Chemistry" id="r4" />
      <Label htmlFor="r4">D. Chemistry</Label>
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
    <Button variant="outline" className="font-bold  bg-blue-600 text-white">
      Submit Answer
    </Button>
  </div>
  <Button variant="outline" className="flex space-x-2 items-center">
    <div className="font-bold hidden md:block">Skip</div>
    <FaArrowRight />
  </Button>
</div>
    </div>
  );
}
