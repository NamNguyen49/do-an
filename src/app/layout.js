import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
export const metadata = {
  title: 'Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
