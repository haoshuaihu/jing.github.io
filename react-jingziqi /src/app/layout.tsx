import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '井字棋游戏',
  description: '一个简单有趣的井字棋游戏',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 