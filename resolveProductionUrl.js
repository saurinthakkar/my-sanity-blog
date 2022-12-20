export default function resolveProductionUrl(document) {
  const previewSecret = "6A38AC9F862BA23A1B82ED751AF24";

  return `https://sanity-nextjs-project-saurinthakkar.vercel.app/post/${document.slug.current}`;
}
