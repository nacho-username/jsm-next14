import LocalSearch from '@/components/shared/search/LocalSearch';
import { UserFilters } from '@/constants/filters';
import Filter from '@/components/shared/Filter';
import { getAllUsers } from '@/lib/actions/user.action';
import Link from 'next/link';
import UserCard from '@/components/cards/UserCard';

const Page = async () => {
  const fetchUsers = await getAllUsers({});

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Users</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for amazing users"
          otherClasses="flex-1"
        />

        <Filter
          filters={UserFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {fetchUsers.users.length === 0 ? (
          <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
            <p>No users found</p>
            <Link href="/sign-up" className="text-accent-blue mt-2 font-bold">
              Join to be the first!
            </Link>
          </div>
        ) : (
          fetchUsers.users.map((user) => (
            <UserCard key={user._id} user={user} />
          ))
        )}
      </section>
    </>
  );
};

export default Page;
