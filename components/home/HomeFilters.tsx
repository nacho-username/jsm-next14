'use client';

import { HomePageFilters } from '@/constants/filters';
import React from 'react';
import { Button } from '../ui/button';

const HomeFilters = () => {
  const active = '';

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((filter) => (
        <Button
          key={filter.value}
          onClick={() => {}}
          className={`body-medium roundex-lg px-6 py-3 capitalize shadow-none ${
            active === filter.value
              ? 'bg-primary-100  dark:bg-dark-300 dark:text-primary'
              : 'bg-light-800 text-light-300 hover:bg-light-700 dark:bg-dark-300 dark:text-light dark:bg-dark-300 dark:hover:bg-dark-400 '
          }`}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
