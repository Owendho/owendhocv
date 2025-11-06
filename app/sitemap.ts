const BASE_URL = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  return [
    {
      url: BASE_URL,
      lastModified: new Date().toISOString().split('T')[0],
    },
  ]
}
