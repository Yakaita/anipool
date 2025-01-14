declare module Anilist {
  interface User {
    id: number;
    name: string;
    avatar: {
      large: string;
      medium: string;
    };
  }

  interface Media {
    id: number;
    type: string;
    title: {
      romaji: string;
      english: string;
      native: string;
    };
    coverImage: {
      extraLarge: string;
    };
    episodes?: number;
    status: string;
    format: string;
  }

  interface Character {
    id: number;
    name: {
      full: string;
      native: string;
    };
    image: {
      large: string;
      medium: string;
    };
  }
}
interface User {
  id?: string;
  oauthProvider: string;
  oauthId: string;
  nickname: string;
  avatarUrl: string;
}

interface PollOption {
  anilistId: number;
  type: string;
  text?: string;
}

type PollResult = PollOption & { votes: number };

interface Poll {
  id?: string;
  userId?: string;
  title: string;
  endDate: string;
  multiOptions: boolean;
  options: Array<PollOption>;
}

type PollWithCreator = Poll & {
  creator: {
    nickname: string;
    avatarUrl: string;
  };
};

interface PollVote {
  id?: string;
  userId?: string;
  pollId: string;
  anilistId: number;
  type: string;
}
