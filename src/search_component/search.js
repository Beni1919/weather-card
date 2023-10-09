import React,{useState,createContext, useContext} from "react";
import { CityToFindContext } from '../App'
import { FirstLoadContext } from "../App";
import './search.css'
import search_icon from './pics/search.png'


export default function SearchBar(){
    const [city, setCity] = useContext(CityToFindContext)
    const [find, setFind] = useState('')
    const [firstLoad, setFirstLoad] = useContext(FirstLoadContext)

    const handleChange = event => {
        setFind(event.target.value);
      };

    function handleClick(){
        setFirstLoad(false)
        setCity(find)
        setFind('')
    }

    function handleEnterPress(event){
        if (event.keyCode===13){
        handleClick()}}
    
    return(
        <div className="search-bar">
            <input id="find-city" type="text" onKeyDown={handleEnterPress} onChange={handleChange} value={find}/>
            <img src={search_icon} id="find-btn" onClick={handleClick}></img>
        </div>
    )
    }