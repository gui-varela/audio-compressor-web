import { ReactElement, useState } from 'react';

import { Upload } from './pages/Upload';
import { Songs } from './pages/Songs';
import { Container } from './App';

interface Page {
  name: string;
  component: ReactElement;
}

function App() {
  const pages: Page[] = [
    {
      name: 'upload',
      component: <Upload />
    },
    {
      name: 'songs',
      component: <Songs />
    }
  ];

  const [currentPage, setCurrentPage] = useState('upload');

  const handlePage = (pageName: string) => {
    setCurrentPage(pageName);
  };

  const currentPageComponent = pages.find((page) => page.name === currentPage)?.component;

  return (
    <Container>
      <div className='buttonsContainer'>
        {pages.map((page) => (
          <button
            key={page.name}
            onClick={() => handlePage(page.name)}
            className={page.name === currentPage ? 'selected' : ''}
          >
            {page.name.toUpperCase()}
          </button>
        ))}
      </div>

      <div className='pageContainer'>
        {currentPageComponent ? (
          currentPageComponent
        ) : (
          <h1>Page not found</h1>
        )}
      </div>
    </Container>
  );
}

export default App;
