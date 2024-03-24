import RSS from "rss"
import { usePosts } from "src/hooks";
import { BASE_URL } from "src/utils";

export async function GET() {
    const {posts = []} = await usePosts();


    const feed = new RSS({
        title: 'Ziaul Sarker writes about Software Engineering',
        description: "Ziaul Sarker's Blog",
        generator: 'RSS for Node and Next.js',
        feed_url:  `${BASE_URL}/api/feed.xml`,
        site_url: `${BASE_URL}`,
        managingEditor: 'ziaulsarker@gmail.com (Ziaul, Sarker)',
        webMaster: 'ziaulsarker@gmail.com (Ziaul, Sarker)',
        copyright: `Copyright ${new Date().getFullYear().toString()}, Ziaul Sarker`,
        language: 'en-US',
        pubDate: new Date().toUTCString(),
        ttl: 60,
    });

    posts.forEach(post => {
        feed.item({
            title: post?.data?.title,
            description: post?.data?.description,
            url: `${BASE_URL}/${post?.data?.slug}`,
            categories: post?.data?.category ?? [],
            author: "Ziaul Sarker",
            date: post?.data?.published,
        });
    });

    return new Response(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
        },
    });
}