import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const RightSideBar = () => {
  const questions = [
    {
      _id: "0",
      title: "How to create a new project in Figma?",
    },
    {
      _id: "1",
      title: "How do I add a new member to my team in Figma?",
    },
    {
      _id: "2",
      title: "How to create a new project in Figma?",
    },
    {
      _id: "3",
      title: "What is the difference between Figma and Sketch?",
    },
    {
      _id: "4",
      title: "When is the next Figma update?",
    },
  ];

  const tags = [
    {
      _id: "0",
      name: "vue",
      totalQuesitons: 5,
    },
    {
      _id: "1",
      name: "react",
      totalQuesitons: 2,
    },
    {
      _id: "2",
      name: "next",
      totalQuesitons: 4,
    },
    {
      _id: "3",
      name: "javascript",
      totalQuesitons: 6,
    },
    {
      _id: "4",
      name: "redux",
      totalQuesitons: 1,
    },
  ];

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div className="">
        <h3 className="h3-bold text-dark200_light900">Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {questions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-3">
          {tags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuesitons={tag.totalQuesitons}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
