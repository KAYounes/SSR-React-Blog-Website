import React from 'react';
import { getBlog } from '@/api/db';
import { isNull } from '@/utils/validators';
import { notFound, useRouter } from 'next/navigation';
import BlogContent from './BlogContent';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function Blog({ params }) {
  const { blogSlug } = params;
  console.log('\n\n\n');
  console.log(blogSlug);
  const blog = await getBlog(blogSlug);
  //   console.log(blog);

  if (isNull(blog)) {
    notFound();
  }

  return (
    <div>
      <BlogContent title={blog.metadata.title}>
        <MDXRemote source={blog.content} />
      </BlogContent>
    </div>
  );
}
