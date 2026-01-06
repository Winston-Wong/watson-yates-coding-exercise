import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-8">
        <h1 className="text-3xl text-blue-800 text-center font-bold my-6">
          My to-do list
        </h1>
        {children}
      </body>
    </html>
  );
}
