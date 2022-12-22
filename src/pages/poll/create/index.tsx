import Page from '@components/core/Page';
import PageHeader from '@components/core/PageHeader';
import pollCreateForm from '@components/poll/create/CreatepollForm';
import { NextPage } from 'next';
import Head from 'next/head';

const Createpoll: NextPage = () => {
  return (
    <Page bgImage="/images/bg-create-poll.jpg">
      <Head>
        <title>create poll</title>
      </Head>
      <div className="mx-auto mt-20 flex max-w-3xl flex-col gap-6">
        <PageHeader />
        <pollCreateForm />
      </div>
    </Page>
  );
};

export default Createpoll;
