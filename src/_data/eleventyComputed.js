export default {
  permalink: (data) => {
    if (data.permalink) return data.permalink;
    if (data.page.inputPath.includes("/posts/")) return `/posts/${data.page.fileSlug}/`;
    return undefined;
  },
};
