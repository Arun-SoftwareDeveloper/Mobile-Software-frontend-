import React, { useState } from "react";
import "../AppStyles/Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([
    // Add your image URLs here
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D",
    "https://media.istockphoto.com/id/1226340114/photo/puratchi-thalaivar-dr-mgr-central-railway-station-chennai-central-railway-station-india.jpg?s=612x612&w=0&k=20&c=lZjBnWBBoLiApWZUUWP1Vl3XAVdKjYMcgGpItXv_L14=",
    "https://t3.ftcdn.net/jpg/02/54/58/20/360_F_254582082_kXuSkV48X1gLlecsoYegKW6ZDWJSvzcW.jpg",
    "https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1750155863.jpg",
    "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg",
    "https://imgd.aeplcdn.com/1056x594/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=80",
    "https://api.contentstack.io/v2/assets/575e4d1c0342dfd738264a1f/download?uid=bltada7771f270d08f6",
    "https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIzpE0RtC7z7mNKlGCfZVu-76ycBg8B0nPw&usqp=CAU",
    "https://thumbs.dreamstime.com/b/cheetah-face-11372205.jpg",
    "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2022-07/220711-james-webb-telescope-first-image-high-res-ew-628p-44ff0c.jpg",
    "https://cdn.pixabay.com/photo/2017/06/23/17/41/morocco-2435391_640.jpg",
    "https://www.holidify.com/images/cmsuploads/articles/612.jpg",
    "https://media.istockphoto.com/id/1495956202/photo/blurred-motion-of-people-in-art-gallery.jpg?b=1&s=612x612&w=0&k=20&c=2ILVn1k8i1ECTqe5uo8UdEb5tMMbJKZ3gWcYkKgj9YE=",
    "https://www.gujarattourism.com/content/dam/gujrattourism/images/museums/baroda-museum-and-picture-gallery/Baroda-Museum-And-Picture-Gallery-Banner.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJgwQ8zIJ9kvL-Q_OeFAenZ8VyQamNgCTpSw&usqp=CAU",
  ]);

  return (
    <div className="gallery-container">
      {images.map((imageUrl, index) => (
        <div key={index} className="gallery-item">
          <img src={imageUrl} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
