import { useLocation } from "react-router";
import ImageSlider from '../../Components/Header/ImageSlider';
import { SliderData } from '../../Components/Header/SliderData';
import Posts from "../../Components/Posts/Posts";
import "./homepage.css";
import Topbar from '../../Components/Topbar/Topbar';
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Homepage() {
  const [posts,setPosts]=useState([]);
  const {search}=useLocation()
  // const [open, setOpen] = React.useState(true);
  // let loginState=localStorage.getItem('IsLoggedIn');
  //console.log(location);
  
  useEffect(()=>{
    const FetchPost = async()=>{
      const res=await axios.get("http://localhost:5000/blog"+search)
      //console.log(res)
      setPosts(res.data)
    }
    FetchPost()
  },[search])
  return (
    <>
    <Topbar/>
    {/* <ImageSlider slides={SliderData} /> */}
      <div className="home">
        <Posts posts={posts}/>
      </div>
    </>
  );
}
