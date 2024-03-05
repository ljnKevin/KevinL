export const seo = {
  title: 'KevinL | 开发者',
  description:
    '我叫 KevinL。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
