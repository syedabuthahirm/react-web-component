import React, { useRef, useEffect } from "react";

function App() {
  const formEl = useRef(null);

  useEffect(() => {
    if (formEl) {
      formEl.current.addEventListener("formSubmit", handleNvEnter);
    }
  }, []);

  const handleNvEnter = e => {
    console.log("clicked", e);
  };

  return (
    <div className="App">
      <my-component first="hello" last="there" />
      <syd-login-form ref={formEl}></syd-login-form>
    </div>
  );
}

export default App;
