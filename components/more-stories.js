import PostPreview from "../components/post-preview";
import { useRouter } from "next/router";
import i18n from "../lib/i18n";

export default function MoreStories({ posts }) {
  if (posts[0].localeVersion) {
    //if the posts are localized versions, make sure that it is not null (would be for unpublished posts)
    //and pick that locale version
    posts = posts.map((post) => post.localeVersion).filter((post) => post);
  }
  const { locale } = useRouter();
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {i18n.stories.more[locale]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => {
          return (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          );
        })}
      </div>
    </section>
  );
}
