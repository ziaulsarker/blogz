import { MetadataRoute } from 'next'
import { BASE_URL, generateSiteMapFromPosts, type Sitemap } from 'src/utils';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const postSiteMaps  = await generateSiteMapFromPosts();
  const homePageSiteMap: Sitemap =  {
    lastModified: new Date(),
    url: BASE_URL,
    changeFrequency: "weekly",
    priority: 1,
  }

  return [homePageSiteMap, ...postSiteMaps];
}