import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '../components/header';
import { useMe } from '../hooks/useMe';
import { NotFound } from '../pages/404';
import { Category } from '../pages/category';
import { Community } from '../pages/community';
import { Documents } from '../pages/documents';
import { Home } from '../pages/home';
import { MyPage } from '../pages/mypage';
import { Posts } from '../pages/posts';
import { Team } from '../pages/team';
import { ConFirmEmail } from '../pages/user/confirm-email';

export const LoggedInRouter = () => {
  const { data, loading, error } = useMe();
  if (!data || loading || error) {
    return (
      <div className=" h-screen flex justify-center items-center">
        loading...
      </div>
    );
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/confirm" element={<ConFirmEmail />} />,
        <Route path="/" element={<Home />} />,
        <Route path="/we" element={<Team />} />,
        <Route path="/documents" element={<Documents />} />,
        <Route path="/posts" element={<Posts />} />,
        <Route path="/community" element={<Community />} />,
        <Route path="/community/:slug" element={<Community />} />,
        <Route path="/my-page" element={<MyPage />} />,
        <Route path="*" element={<NotFound />} />,
      </Routes>
    </Router>
  );
};
