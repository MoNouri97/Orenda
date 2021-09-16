import React,  { useEffect, useState } from "react";
import "./ProfileView.css";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Acceuil() {
    const authContext = useContext(AuthContext);
  
    const { username } = useParams();
    const [data, setData]= useState([])
    console.log(username)
    useEffect(async() => {
        axios.get('http://localhost:5000/api/v1/post', {
            headers: {
               
                "x-auth-token": localStorage.getItem("token")
            }
        })
        .then(response => {
            if (response.data.length > 0) {
                setData(response.data)
               console.log(data) 
            }
        })
        console.log(data) 
        axios
            .get(`http://localhost:5000/api/v1/user/profile/${username}`, {
                headers: {
                   
                    "x-auth-token": localStorage.getItem("token")
                }
            })

            .then((res) => {
                console.log(res.data);
                
            })
            .catch((err) => err.message)
        
          
    }, []);



    return (
        <div className="theme-layout">
	
	
		
        <section>
        
            <div className="gap gray-bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row" id="page-contents">
                                <div className="col-lg-2">
                                </div>
                                <div className="col-lg-8">
                                    <div className="central-meta">
                                        <div className="new-postbox">
                                            <figure>
                                               {/* Profile Image */}
                                                <img className='avatar'  src={'http://localhost:5000'+authContext.user.picture} alt="profile_img" />
                                            </figure>
                                            <div className="newpst-input">
                                                <form method="post">
                                                    <textarea rows="2" placeholder="write something"></textarea>
                                                    <div className="attachments">
                                                        <ul>
                                                            <li>
                                                                <i className="fa fa-image"></i>
                                                                <label className="fileContainer">
                                                                    <input type="file"/>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <button type="submit">Post</button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="loadMore">
                                   

                                        {
                                            data.map((d, index) =>(
                                                <div className="central-meta item">
                                                <div className="user-post">
                                                <div className="friend-info">
                                                    <figure>
                                                    <img  className='avatar' src={'http://localhost:5000'+authContext.user.picture} alt=""/>
                                                    </figure>
                                                    <div className="friend-name">
                                                        <ins><a href="time-line.html" title="">Randa</a></ins>
                                                        <span>published: {d.Date_creation}</span>
                                                    </div>
                                                    <div className="post-meta">
                                                        <div >
                                                            
                                                            <p>
                                                            {d.text} 
                                                                
                                                            </p>
                                                            <iframe src={"http://localhost:5000" + d.link} height="500" style={{display: 'block', marginLeft: 'auto',marginRight: 'auto',width: '50%'}} webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                                                       
                                                        </div>
                                                        <div className="we-video-info">
                                                            <ul>
                                                            <li>
                                                                    <span className="comment" data-toggle="tooltip" title="Comments">
                                                                       
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span className="comment" data-toggle="tooltip" title="Comments">
                                                                       
                                                                    </span>
                                                                </li>
                                                            <li>
                                                                    <span className="like" data-toggle="tooltip" title="like">
                                                                    <i class="fa fa-heart"></i>
                                                                        <ins>2.2k</ins>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span className="comment" data-toggle="tooltip" title="Comments">
                                                                        <i className="fa fa-comments-o"></i>
                                                                        <ins>52</ins>
                                                                    </span>
                                                                </li>
                                                                
                                                                
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="coment-area">
                                                    <ul className="we-comet">
                                                        <li>
                                                            <div className="comet-avatar">
                                                                  {/* Profile Image */}
                                                    <img className='avatar'  src={'http://localhost:5000'+authContext.user.picture} alt="profile_img" />
                                              
                                                            </div>
                                                            <div className="we-comment">
                                                                <div className="coment-head">
                                                                    <h5><a href="time-line.html" title="">Marwa</a></h5>
                                                                    <span>1 year ago</span>
                                                                </div>
                                                                <p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="comet-avatar">
                                                                <img className='avatar' src="images/avatar.jpg" alt=""/>
                                                            </div>
                                                            <div className="we-comment">
                                                                <div className="coment-head">
                                                                    <h5><a href="time-line.html" title="">Safa</a></h5>
                                                                    <span>1 week ago</span>
                                                                </div>
                                                                <p>we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel
                                                                    <i className="em em-smiley"></i>
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="" className="showmore underline">more comments</a>
                                                        </li>
                                                        <li className="post-comment">
                                                            <div className="comet-avatar">
                                                                       {/* Profile Image */}
                                                    <img className='avatar2'  src={'http://localhost:5000'+authContext.user.picture} alt="profile_img" />
                                              
                                                            </div>
                                                            <div className="post-comt-box">
                                                                <form method="post">
                                                                    <textarea placeholder="Post your comment"></textarea>
                                                                    <button type="submit" style={{color:'white',backgroundColor:'#088dcd'}}>Comment</button>
                                                                </form>	
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            </div>

                                            )) 
                                        }
                                      
                                 
                                    </div>
                                </div>
                            </div>	
                        </div>
                    </div>
                </div>
            </div>	
        </section>
    
    </div>
    )
}