/**
 * @jest-environment jsdom
 */

/**
 * ThreadDetail Testing Scenario
 *
 * - should render thread detail correctly
 */

import { describe, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import ThreadDetail from './ThreadDetail';
import { postedAt } from '../utils';

expect.extend(matchers);

describe('ThreadDetail Component', () => {
  const threadDetailProps = {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    owner: {
      id: 'users-1',
      name: 'John Doe',
      avatar: 'https://generated-image-url.jpg',
    },
    upVotesBy: [],
    downVotesBy: [],
    comments: [
      {
        id: 'comment-1',
        content: 'Ini adalah komentar pertama',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg',
        },
        upVotesBy: [],
        downVotesBy: [],
      },
    ],
  };

  const createdAt = postedAt(threadDetailProps.createdAt);

  it('should render thread detail correctly', () => {
    render(<ThreadDetail {...threadDetailProps} />);

    expect(
      screen.getByRole('img', threadDetailProps.owner.avatar)
    ).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Thread Pertama')).toBeInTheDocument();
    expect(screen.getByText('Ini adalah thread pertama')).toBeInTheDocument();
    expect(screen.getByText(createdAt)).toBeInTheDocument();
  });
});
