export type ArticleId = string;

export type Article = {
  source: {
    id: string;
    name: string;
  };
  id: ArticleId;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  category: string;
};

export type Category = 'general' | 'business' | 'health' | 'science' | 'sports' | 'technology';
