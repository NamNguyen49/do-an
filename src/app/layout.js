import Footer from './components/Footer/Footer';
import UserHeader from './components/Header/UserHeader';
import StyledComponentsRegistry from '../lib/AntdRegistry';

export const metadata = {
  title: 'Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {/* <Header /> */}
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
