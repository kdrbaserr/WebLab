export type Category = 'Tümü' | 'Frontend' | 'Backend' | 'Full Stack' | 'Mobile' | 'Diğer';

export type SortField = 'year' | 'title';
export type SortOrder = 'asc' | 'desc';

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  featured: boolean;
  year: number;
  category: Category;
}
