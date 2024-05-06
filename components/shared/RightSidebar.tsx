import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import RenderTag from './RenderTag';

const RightSidebar = () => {
  const hotQuestions = [
    { _id: '1', title: 'How do I get started with Next.js?' },
    { _id: '2', title: 'Case Study: How I built a full-stack app in 3 days' },
    { _id: '3', title: 'Best practices for building a SaaS product' },
    { _id: '4', title: 'Why I switched from React to SvelteKit' },
    { _id: '5', title: 'What is the best way to learn React in 2022?' },
  ];

  const popularTags = [
    { _id: '1', name: 'React', totalQuestions: 5 },
    { _id: '2', name: 'Next.js', totalQuestions: 3 },
    { _id: '3', name: 'TailwindCSS', totalQuestions: 2 },
    { _id: '4', name: 'SvelteKit', totalQuestions: 7 },
    { _id: '5', name: 'GraphQL', totalQuestions: 4 },
    { _id: '6', name: 'TypeScript', totalQuestions: 6 },
  ];
  return (
    <section className="background-light900_dark200 light-border shadow-light-300 custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col justify-between overflow-y-auto border-l p-6 pt-36 max-xl:hidden dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
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
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
