import React, { useEffect, useState } from 'react';
import HeroComponent from "./components/HeroComponent";
import { colleges } from "./constant"
import './App.css';

function App() {

  const [collegeList, setCollegeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [element, setElement] = useState(null);

  let pageNumber = 0;

  useEffect(() => {
    loadData()
  }, [])

  const observer = React.useRef(
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadData()
      }
    }, { threshold: 1 })
  );


  const loadData = () => {
    setTimeout(() => {
      setIsLoading(true)
      setCollegeList(prev => ([...prev, ...colleges.slice(pageNumber, (pageNumber + 10))]));
      pageNumber += 10;
      setIsLoading(false)
    }, 1500)

  }

  React.useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;
    if (currentElement) {
      currentObserver.observe(currentElement)
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement)
      }
    }

  }, [element])

  return (
    <div className="view-college-listing">
      {isLoading ? <div className="empty-card">
        {[1, 2].map(i => <div className="bg-white rounded-6 skeleton-group-box" key={i}>
          <div className="skelton-group"></div>
        </div>)}
      </div> :
        <>
          <h1 className="main-heading">Colleges in North India</h1>
          <div className="colleges">
            {collegeList.map((colleges, index) =>
              <HeroComponent colleges={colleges} key={index} />
            )
            }
          </div>
          {collegeList.length < 50 ?
            <div ref={setElement}>
              <div className="empty-card">
                {/* To show two empty placeholders
                 */}
                {[1, 2].map(i =>
                  <div className="bg-white rounded-6 skeleton-group-box">
                    <div className="skelton-group" key={i}></div>
                  </div>
                )}
              </div>
            </div> : ""
          }
        </>
      }
    </div>
  );
}

export default App;
