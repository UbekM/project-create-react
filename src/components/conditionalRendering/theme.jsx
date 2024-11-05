import { useState } from 'react'

export const Theme = () => {
    const [theme, setTheme] = useState("light");

    const handleToggle = () => {
        setTheme("dark")
    }
    
  return (
    <div>
        {/* use a conditional statement to check for the state value and conditionally toggle the theme */}
        <button className='bg-green-500 text-white text-center border' onClick={handleToggle}>toggle Theme
        </button>
        <div className={`w-full h-screen bg-black text-black dark:text-white `}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non exercitationem earum iste quasi itaque dolor a quod impedit. Dignissimos obcaecati itaque ipsum sapiente voluptatem accusantium quos inventore minima officia et.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non exercitationem earum iste quasi itaque dolor a quod impedit. Dignissimos obcaecati itaque ipsum sapiente voluptatem accusantium quos inventore minima officia et
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non exercitationem earum iste quasi itaque dolor a quod impedit. Dignissimos obcaecati itaque ipsum sapiente voluptatem accusantium quos inventore minima officia et
        {theme}
        </div>
    </div>
  )
}
