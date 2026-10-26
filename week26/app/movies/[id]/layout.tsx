import { Hahmlet } from 'next/font/google';

const hahmlet = Hahmlet({
  subsets: ['latin'],
  variable: '--font-hahmlet',
});

export default function MovieDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${hahmlet.variable} detail-font`}>{children}</div>
  );
}