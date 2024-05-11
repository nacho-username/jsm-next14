'use server';

import { connectToDatabase } from '../mongoose';
import { GetTopInteractedTagsParams } from './shared.types';
import User from '@/database/user.model';

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findById(userId);

    if (!user) throw new Error('User not found');

    // Find interactions for the user and group by tags...

    return [
      { _id: 1, name: 'Tag1' },
      { _id: 2, name: 'Tag2' },
      { _id: 3, name: 'Tag3' },
    ];
  } catch (error) {
    console.log('Error fetching all users', error);
    throw error;
  }
}
