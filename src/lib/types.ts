export type Article = {
  id: string;
  title: string;
  status: string;
  publishedDate: string;
  categories: ArticleCategory[];
  totalViews: string;
};

export type ArticleCategory = {
  id: string;
  name: string;
};

export type DialogType = 'edit' | 'delete';
