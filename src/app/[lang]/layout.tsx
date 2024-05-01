export default function RootLayout({
  params, children,
}: Readonly<{
  params: { lang: string; };
  children: React.ReactNode;
}>) {
  const locale = params.lang as 'en';
  return (
    <html lang="en">
      <body>
        <p>From layout: {params.lang}</p>
        {children}
      </body>
    </html>
  );
}
