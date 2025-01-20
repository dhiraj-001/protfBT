import React from 'react'
import Title from '../layouts/Title'
import AwardsCard from './AwardsCard'

function AwardsMain() {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
    <Title title="Features" des="Awards and Honors" />
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
      <AwardsCard/>
    </div>
  </section>
  )
}

export default AwardsMain