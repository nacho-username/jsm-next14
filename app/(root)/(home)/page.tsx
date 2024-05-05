import { Button } from '@/components/ui/button';
import Link from 'next/link';
import LocalSearch from '@/components/shared/search/LocalSearch';
import Filter from '@/components/shared/Filter';
import { HomePageFilters } from '@/constants/filters';
import HomeFilters from '@/components/home/HomeFilters';
import NoResult from '@/components/shared/NoResult';

const questions = [
  {
    _id: 1,
    title: 'How to learn React?',
    tags: [
      { _id: 1, name: 'python' },
      { _id: 2, name: 'sql' },
    ],
    author: 'Bruce Banner',
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: '2021-09-01',
  },
  {
    _id: 2,
    title: 'How to learn Angular?',
    tags: [
      { _id: 1, name: 'python' },
      { _id: 2, name: 'sql' },
    ],
    author: 'Bruce Wayne',
    upvotes: 5,
    answers: 2,
    views: 43,
    createdAt: '2021-09-07',
  },
  {
    _id: 3,
    title: 'How to learn Vue?',
    tags: [
      { _id: 1, name: 'javascript' },
      { _id: 2, name: 'css' },
      { _id: 3, name: 'html' },
    ],
    author: 'Peter Parker',
    upvotes: 2,
    answers: 3,
    views: 30,
    createdAt: '2021-09-10',
  },
  {
    _id: 4,
    title: 'How to learn Svelte?',
    tags: [
      { _id: 1, name: 'javascript' },
      { _id: 2, name: 'css' },
      { _id: 3, name: 'html' },
    ],
    author: 'Tony Stark',
    upvotes: 8,
    answers: 7,
    views: 80,
    createdAt: '2021-09-15',
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient !text-light-900 min-h-[46px] px-4 py-3">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
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
        {questions.length === 0 && (
          <NoResult
            title="There's no questions to show"
            description="Be the fiurst to break the silence! 🚀 Ask a Question and kickstart the discussion. Your question could be the next big thing others learn from. Get involved! 💡 "
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
        {questions.map((question) => 'Question Card')}
      </div>
    </>
  );
};

export default Home;
