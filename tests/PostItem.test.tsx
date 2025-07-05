import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PostItem } from '@/components/PostItem';
import type { Post } from '@/api/jSONPlaceholderAPI.schemas';
import { useRouter } from 'next/navigation';
import { vi, type Mock } from 'vitest';

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}));

describe('PostItem', () => {
  const post: Post = {
    id: 1,
    title: 'Post de prueba',
    body: 'Contenido del post',
    userId: 1,
  };

  beforeEach(() => {
    (useRouter as Mock).mockReturnValue({
      push: vi.fn(),
    });
  });

  it('renderiza título y contenido', () => {
    render(<PostItem post={post} />);
    expect(screen.getByText(/Post de prueba/i)).toBeInTheDocument();
    expect(screen.getByText(/Contenido del post/i)).toBeInTheDocument();
  });

  it('navega al hacer clic en el post', () => {
    const mockPush = vi.fn();
    (useRouter as Mock).mockReturnValue({ push: mockPush });

    render(<PostItem post={post} />);
    fireEvent.click(screen.getByRole('listitem'));
    expect(mockPush).toHaveBeenCalledWith('/posts/1');
  });

  it('debería tener role="listitem"', () => {
    render(<PostItem post={post} />);
    const listItem = screen.getByRole('listitem');
    expect(listItem).toBeInTheDocument();
  });

  it('renderiza correctamente (snapshot)', () => {
    const { container } = render(<PostItem post={post} />);
    expect(container).toMatchSnapshot();
  });
});
