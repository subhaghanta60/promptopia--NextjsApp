'use client';
import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';
const Feed = () => {
  const [searchText,setsearchText] =useState('');

  const handleSearchChange = (e)=> {

  }
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input 
        type="text"
        placeholder="Search for a tag or a username"
        value={searchText}
        onChange={handleSearchChange}  
        required
        className="search_input peer"
        />
      </form>
      <PromptCard 
      data={[]}
      handleTagClick ={() => {}}
      />
    </section>
  )
}

export default Feed
