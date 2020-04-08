import React from 'react'

interface SkillProps {
  image: string
  title: string
}

const Skill: React.FC<SkillProps> = ({ image, title }) => {
  return (
    <div className="x-skill-icon w-3/6 sm:w-2/6 md:w-2/6 lg:w-1/6 flex-initial p-4">
      <img src={`/images/icons/skills/${image}`} alt={title} className="w-full cursor-pointer" />
    </div>
  )
}

export default Skill
