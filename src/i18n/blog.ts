import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLang, type Lang } from './ui';

export type Post = CollectionEntry<'blog'> & { slug: string; translated: boolean };

// Посты для языка: перевод, если есть, иначе английский оригинал. Новые сверху.
export async function getPosts(lang: Lang): Promise<Post[]> {
  const all = await getCollection('blog', ({ data }) => !data.draft);
  const bySlug = new Map<string, Partial<Record<string, CollectionEntry<'blog'>>>>();
  for (const entry of all) {
    const [slug, entryLang] = entry.id.split('/');
    if (!bySlug.has(slug)) bySlug.set(slug, {});
    bySlug.get(slug)![entryLang] = entry;
  }
  const posts: Post[] = [];
  for (const [slug, versions] of bySlug) {
    const entry = versions[lang] ?? versions[defaultLang];
    if (entry) posts.push({ ...entry, slug, translated: !!versions[lang] });
  }
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date, lang: Lang) {
  return date.toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric' });
}
