import Button from '@components/core/Button';
import Logo from '@components/core/Logo';
import Page from '@components/core/Page';
import useUserStore from '@store/userStore';
import { openAnilistAuthUrl } from '@utils/utils';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { id } = useUserStore();
  const router = useRouter();
  const isLogged = Boolean(id);

  return (
    <Page bgImage="/images/bg-home.jpg">
      <Head>
        <title>Anipool</title>
      </Head>
      <div className="flex h-full w-full flex-col items-center justify-center lg:flex-row">
        <div className="flex w-full flex-col items-center gap-y-4 lg:w-auto lg:items-start">
          <Logo className="text-7xl lg:text-8xl" />
          <span className="max-w-md text-xl text-white lg:text-2xl">
            Create anime quizes and polls integrated with anilist.co
          </span>
          {isLogged ? (
            <div className="flex flex-row h-full w-full gap-x-4">
              <Button
                className="min-w-[250px]"
                size="large"
                onClick={() => router.push('/poll/create')}
              >
                Create poll
              </Button>
              <Button
                className="min-w-[250px]"
                size="large"
                onClick={() => router.push('/me/polls')}
              >
                My Polls
              </Button>
            </div>
          ) : (
            <Button size="large" onClick={openAnilistAuthUrl}>
              Login with anilist
            </Button>
          )}
        </div>
        <div className="hidden w-[550px] self-end lg:block">
          <Image
            src="/images/killuarender.png"
            alt="Killua"
            layout="responsive"
            width={712}
            height={1122}
          />
        </div>
      </div>
    </Page>
  );
};

export default Home;
