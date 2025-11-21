export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string; // markdown
  excerpt?: string;
  createdAt: string; // ISO
}