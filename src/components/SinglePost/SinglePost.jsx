import React from 'react'
import './SinglePost.css'
export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/16386514/pexels-photo-16386514.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle"> lork mlia dada uiafiu
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash"></i>
        </div>
      
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">
                Author: <b>Abdul Rafay Zia</b>
            </span>
            <span className="singlePostDate">
                1 Hour ago
            </span>
        </div>
        <p className='singlePostDecs'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi provident iure impedit sit recusandae praesentium. Est in praesentium commodi eos totam inventore explicabo eius! Odio voluptatum temporibus tempora ab!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quibusdam, ad incidunt tempora numquam veniam, ex deserunt itaque quod dolor quas facere eaque magni minus labore ipsum corporis eligendi. Culpa.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea ad, id animi quaerat ut asperiores, nihil non deleniti vel, quibusdam pariatur temporibus architecto hic deserunt saepe culpa. Doloremque, illum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id impedit, hic aliquid officiis at, reiciendis repudiandae nobis quaerat au Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum animi, cupiditate molestiae consectetur adipisci enim asperiores? Accusantium, amet aliquam laboriosam odio dolorum distinctio repudiandae illum quidem fugiat architecto non nobis? tem officia dolor facilis atque ipsa excepturi ullam animi? Quidem, cupiditate unde.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo id pariatur maiores rerum, ex quos natus sequi aliquam sunt fugiat quisquam magnam soluta doloremque commodi ducimus expedita porro! Quaerat, cum!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt earum perspiciatis repellendus aut provident error iusto? Obcaecati, assumenda magni. Delectus odio illo nam atque assumenda voluptatum id maxime quia labore.
        </p>
      </div>
    </div>
  )
}
