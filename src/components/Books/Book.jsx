import React from "react";
import Title from "../layouts/Title";

import BookCard from "./BookCard";
import {books} from "../../data/books"
import AwardsCard from "./AwardsCard";

const Book = () => {
  return (
   
    <section
      id="books"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Books" des="Published Books" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
{
  books.map((bk, i)=>{
    return(
      // <BookCard
      //     title={bk.title}
      //     des={bk.des}
      //     src={bk.link}
      //   />
        <AwardsCard 
        img = {bk.img}
        title={bk.title}
        des={bk.des}
       link={bk.link}
        />
    )
  })
}
        

      </div>
    </section>
  
  );
};

export default Book;
