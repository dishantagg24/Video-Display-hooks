import React from 'react';
import { useState } from 'react/cjs/react.development';

const SearchBar = ({onTermSubmit}) => {
    const [item,setItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onTermSubmit(item)
    }
        return <div className='search-bar ui segment'>
            <form  className='ui form' onSubmit={handleSubmit}>
                <div className='field'>
                <label>Video Search</label>
                <input type='text' value={item} onChange={(e)=>setItem(e.target.value)}/>
                </div>
            </form>
        </div>
    
}

export default SearchBar
