import React from "react";
import Header from "../../components/Header";

function Charity() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScJpDx_KhK9lw8qUlucpK0dTRkzJ-4BUjlRHWQ2fuIakrMsUA/viewform?embedded=true"
          width="800"
          height="1419"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
}

export default Charity;
