import React from 'react'

interface SkillProps {
  image: string
  title: string
}

const Skill: React.FC<SkillProps> = ({ image, title }) => {
  return (
    <div className="x-skill-icon flex-initial p-4 w-1/6">
      <img src={`/images/icons/skills/${image}`} alt={title} className="w-full cursor-pointer" />
    </div>
  )
}

export default Skill
