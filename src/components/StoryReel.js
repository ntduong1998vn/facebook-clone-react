import React from "react";
import "./StoryReel.css";
import Story from "./Story";

export default function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://i.pinimg.com/originals/46/1c/01/461c0133da95e315cd4e245f79219ec0.jpg"
        profileSrc="https://pickaface.net/gallery/avatar/20151109_144853_2380_sample.png"
        title="Thanh Thanh"
      />
      <Story
        image="https://i.pinimg.com/originals/73/5f/b1/735fb1ba4e88c76061c897cecc114995.jpg"
        profileSrc="https://pickaface.net/gallery/avatar/unr_sample_170130_2257_9qgawp.png"
        title="Nhat Lam"
      />
      <Story
        image="https://www.kolpaper.com/wp-content/uploads/2020/11/Aesthetic-Smartphone-Wallpaper.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkv_oB0qQFM3meC7RxGF-7RGa3YzkAg17_P2oa0xya35N7iGbz0bmwCe59HNdqgiJoDw&usqp=CAU"
        title="Linh"
      />
      <Story
        image="https://i.pinimg.com/originals/49/0b/85/490b855df008e14c963b26123ebfbe06.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dF33jefjDX7UPxDslVeoh0cdAdZDivH9GU9yXjQSUCj0rBl5itvzlyRHF7xS8PCTkQE&usqp=CAU"
        title="Ngoc Ngan"
      />
      <Story
        image="https://cdn.wallpapersafari.com/97/46/KSWhIN.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToySq_WusGScvQ9hanrX3JpqOW-6_JNYM-iSNCfP-978MLxl5z2Wo9Ue_VNQ9H3UbnJOM&usqp=CAU"
        title="Trang"
      />
    </div>
  );
}
