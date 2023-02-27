
import { useState, useEffect, RefObject, useCallback } from "react";
// export const MySectionBlock = () => {
//   const myRef = useRef();
//   const {
//     inViewport,
//     enterCount,
//     leaveCount,
//   } = useInViewport(
//     myRef,
//   );

//   return (
//     <section ref={myRef}>
//       <div className="content">
//         <h1>Hello</h1>
//         <p>{`Enter viewport: ${enterCount} times`}</p>
//         <p>{`Leave viewport: ${leaveCount} times`}</p>
//       </div>
//     </section>
//   );
// };


function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export function useInViewport(ref) {
  const [isVisible, setIsVisible] = useState(true);

  const update = useCallback(() => {
    if (ref.current) {
      setIsVisible(isElementInViewport(ref.current));
    }
  }, [ref]);

  useEffect(() => {
    ["scroll", "load", "DOMContentLoaded", "resize", "click"].forEach(type => {
      window.addEventListener(type, update);
    });
    return () => {
      ["scroll", "load", "DOMContentLoaded", "resize", "click"].forEach(type => {
        window.removeEventListener(type, update);
      });
    };
  }, [update]);
  return { isVisible, update };
}