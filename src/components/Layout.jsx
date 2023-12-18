import { useEffect, useState } from "react";

// Reference - https://react.dev/reference/react/useEffect 
// Why fetch is called twice - https://www.reddit.com/r/reactjs/comments/ugzopd/why_is_my_fetch_getting_called_twice/?rdt=56825


export const Layout = () => {
  const [list, setList] = useState([]);
  let mounted = false;
  useEffect(() => {
    mounted = true;
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        // enter you logic when the fetch is successful
        if (mounted) {
          setList(data)
        }
      })
      .catch(error => {
        // enter your logic for when there is an error (ex. error toast)
        console.log(error)
      })
  }, [mounted]) // load on first render

  return (
    <div className="wrapper">
      <h1>My Grocery List</h1>
      <ul>
        {list.map(item => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  )
};

export default Layout;