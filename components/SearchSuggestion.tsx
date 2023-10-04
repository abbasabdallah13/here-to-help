import React from 'react'

export default function SearchSuggestion({ term, setSearchTerm }: Props) {
  return (
    <div className='border-2 border-solid border-white rounded-lg p-2 text-white uppercase font-monteserrat cursor-pointer hover:bg-white hover:text-black duration-500' 
        onClick={() => setSearchTerm(term)}
    >
      <p>{term}</p>
    </div>
  )
}
