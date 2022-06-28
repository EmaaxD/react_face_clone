import Head from 'next/head';
import { getSession } from 'next-auth/client';

import { Header } from '../components/Header';
import { Login } from '../components/Login';
import { Sidebar } from '../components/Sidebar';
import { Feed } from '../components/Feed';
import { Widgets } from '../components/Widgets';
import { db } from '../firebase';

export default function Home({ session, posts }) {

  if (!session) return <Login />

  return (
    <div >
      <Head>
        <title>Facebook Clone Nextjs</title>
      </Head>

      <Header />

      <main className="flex">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // get the user
  const session = await getSession(context);

  const posts = await db.collection('posts').orderBy('timestamp', 'desc').get();

  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  console.log(session);

  return {
    props: {
      session,
      posts: docs
    }
  }
}