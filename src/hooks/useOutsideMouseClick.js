import { useEffect, useRef } from 'react';

function useOutsideMouseClick(handler, listenCapturing = true) {
  const ref = useRef(null);

  useEffect(
    function () {
      const handleClick = function (e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      };

      document.addEventListener('click', handleClick, listenCapturing);

      // cleanup function
      return () =>
        document.removeEventListener('click', handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );
  return { ref };
}

export default useOutsideMouseClick;
