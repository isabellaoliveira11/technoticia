export interface ThumbNewsProps {
    title: string;
    description: string;
    url: string;
    image: string | null;
    publishedAt: string;
    source: {
      name: string;
      url: string;
    };
    design?: any;
  }