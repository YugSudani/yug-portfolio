import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // Remove '#' from hash
    }

    if (lastHash.current) {
      const targetElement = document.getElementById(lastHash.current);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          lastHash.current = '';
        }, 100);
      }
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;
