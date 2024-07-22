import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import Filter from "@/components/shared/Filter";
import { HomePageFilters } from "@/constants/filters";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

export default function Home() {
  const questions = [
    {
      _id: "q101",
      title: "What's new in React 18?",
      tags: [
        { _id: "t101", name: "React" },
        { _id: "t102", name: "JavaScript" },
      ],
      author: {
        _id: "a101",
        name: "Alex Johnson",
        picture: "/assets/icons/avatar.svg",
        clerkId: "c101",
      },
      upvotes: 45,
      views: 300,
      answers: [],
      createdAt: new Date("2023-04-10"),
      clerkId: "c101",
    },
    {
      _id: "q102",
      title: "How to manage state in Flutter?",
      tags: [
        { _id: "t103", name: "Flutter" },
        { _id: "t104", name: "Mobile Development" },
      ],
      author: {
        _id: "a102",
        name: "Bethany Smith",
        picture: "/assets/icons/avatar.svg",
        clerkId: "c102",
      },
      upvotes: 33,
      views: 150,
      answers: [],
      createdAt: new Date("2023-04-11"),
      clerkId: null,
    },
    {
      _id: "q103",
      title: "Best practices for REST API design?",
      tags: [
        { _id: "t105", name: "API Design" },
        { _id: "t106", name: "Best Practices" },
      ],
      author: {
        _id: "a103",
        name: "Charlie Brown",
        picture: "/assets/icons/avatar.svg",
        clerkId: "c103",
      },
      upvotes: 99,
      views: 220,
      answers: [],
      createdAt: new Date("2023-04-12"),
      clerkId: "c103",
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900 font-bold">
          All Questions
        </h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] rounded-[10px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="No Questions Found"
            description="No questions found. Please try again later."
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
