import { Button } from '@/components/ui/button';
import Link from 'next/link';
import LocalSearch from '@/components/shared/search/LocalSearch';
import Filter from '@/components/shared/Filter';
import { HomePageFilters } from '@/constants/filters';
import HomeFilters from '@/components/home/HomeFilters';
import NoResult from '@/components/shared/NoResult';
import QuestionCard from '@/components/cards/QuestionCard';
import { getQuestions } from '@/lib/actions/question.action';

const Home = async () => {
  const result = await getQuestions({});

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
        {result.questions.length === 0 && (
          <NoResult
            title="There's no questions to show"
            description="Be the fiurst to break the silence! 🚀 Ask a Question and kickstart the discussion. Your question could be the next big thing others learn from. Get involved! 💡 "
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
        {result.questions.map((question) => (
          <QuestionCard
            key={question._id}
            _id={question._id}
            title={question.title}
            tags={question.tags}
            author={question.author}
            upvotes={question.upvotes}
            answers={question.answers}
            views={question.views}
            createdAt={question.createdAt}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
