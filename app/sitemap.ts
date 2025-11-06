export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString().split('T')[0],
    },
  ]
}
