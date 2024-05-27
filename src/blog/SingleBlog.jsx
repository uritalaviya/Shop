import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PopularPost from '../shop/PopularPost';
import Tags from '../shop/Tags';

const socialList = [{ link: "#", iconName: "icofont-facebook", className: "facebook", }, { link: "#", iconName: "icofont-twitter", className: "twitter", }, { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, { link: "#", iconName: "icofont-instagram", className: "instagram", }, { link: "#", iconName: "icofont-pinterest", className: "pinterest", },];
const SingleBlog = () => {

    const [blog, setBlog] = useState(blogList);
    const { id } = useParams()
    // console.log(id);
    const result = blog.filter((b) => b.id === Number(id))
    console.log(result[0]);
    return (
        <div>
            <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />

            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) => (
                                                            <div key={item.id}>
                                                                <div className="post-thumb">
                                                                    <img src={item.imgUrl} alt="" className='w-100' />
                                                                </div>
                                                                <div className="post-content">
                                                                    <h3>{item.title}</h3>
                                                                    <div className="meta-post">
                                                                        <ul className="lab-ul">
                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}><i className={val.iconName}>{val.text}</i></li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                    <p >Serenity hasir taken Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, iusto, laborum atque harum beatae explicabo non quisquam, molestias cum porro qui. Enim nisi blanditiis est omnis praesentium ea libero, magni reiciendis, adipisci laboriosam tenetur, autem dolorem provident facilis dolore facere voluptas similique commodi veniam qui reprehenderit cumque. Error expedita autem voluptate aut eligendi tempora cum quod voluptatum. Qui, adipisci numquam quae expedita quas sit incidunt. Nobis, consequatur, earum voluptate dolorum nostrum cumque perspiciatis reprehenderit, esse cupiditate eaque quibusdam harum tempora libero repellat dolorem? Vitae blanditiis consectetur officiis velit facere distinctio repellendus molestias ipsa nobis? Deleniti facere hic beatae? Consequatur, vero. </p>
                                                                    <blockquote>
                                                                        <p>Dynamically recaptiualize disttibutes technologies is whwrease trunkey channels and onotonectally provide access to resource levelling expertise vias worlswide deliverables uolisticly extend aserser are dilvers vortals.</p>
                                                                        <cite>
                                                                            <a href="#">...Melissa Hunter</a>
                                                                        </cite>
                                                                    </blockquote>
                                                                    <p> dolor sit amet consectetur adipisicing elit. Atque maxime ea aliquam tenetur? Cumque atque pariatur totam vel. Labore consectetur perspiciatis ipsum rerum explicabo delectus a rem aut ullam dolorum aliquam praesentium quae deserunt libero distinctio odit, ut quis dicta quasi? Eos ea dolor illum vel impedit in culpa architecto et dolores, ut neque ducimus, veniam commodi reprehenderit voluptatem ratione ab reiciendis eligendi labore quisquam! Vero dolorem quasi quibusdam iste?</p>
                                                                    <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                                                                    <p> ipsum dolor sit amet consectetur adipisicing elit. Animi quibusdam vel perspiciatis doloribus, nemo quis voluptate? Autem voluptatem libero magni! Impedit tempore ab at. Exercitationem laborum saepe corporis cupiditate dolorum! Fugit quis ea est dignissimos temporibus nostrum laborum amet non modi eveniet laudantium, quisquam tempore praesentium? Voluptate accusamus itaque blanditiis, saepe iure similique, eligendi suscipit incidunt possimus doloremque distinctio dolor. Incidunt dolores labore odit voluptas nobis quasi maxime corporis repellat!</p>

                                                                    <div className="video-thumb">
                                                                        <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                        <a href="https://youtu.be/wtEp_Y2kmO8?si=NOQdbwnzZL7LnYdU" target='_blank' className='video-button popup'>

                                                                            <i className='icofont-ui-play'></i>
                                                                        </a>
                                                                    </div>
                                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatem exercitationem eligendi ex consectetur veritatis deserunt cupiditate quo nesciunt ipsum facilis maxime iste molestias, similique magni corrupti earum quasi temporibus dignissimos incidunt voluptate laborum ea natus! Ipsa necessitatibus tempora, voluptatibus aperiam repellat placeat fugit earum consequatur corporis ea hic quis eum eveniet porro minima? Earum, repellendus neque laudantium consequuntur nisi, ipsum provident error perspiciatis ea alias odio, tempora modi ratione. Consectetur omnis nesciunt, et harum magnam quia temporibus odio esse!</p>

                                                                    <div className="tags-section">
                                                                        <ul className='tags lab-ul'>
                                                                            <li>
                                                                                <a href="#">Agency</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Business</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Personal</a>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className='lab-ul social-icons'>
                                                                            {
                                                                                socialList.map((val,i) => (
                                                                                    <li key={i}> 
                                                                                        <a href="#" className={val.className}>
                                                                                            <i className={val.iconName}></i>
                                                                                        </a>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <div className="navigations-part">
                                            <div className="left">
                                                <a href="#" className='prev'>
                                                    <i className='icofont-double-left'></i>Previous Blog
                                                </a>
                                                <a href="#" className='title'>
                                                  Evisculate Parallel Processes via Technice Sound Models Authoritative
                                                </a>
                                            </div>
                                            <div className="right">
                                                <a href="#" className='prev'>
                                                    <i className='icofont-double-right'></i>Next Blog
                                                </a>
                                                <a href="#" className='title'>
                                                  Evisculate Parallel Processes via Technice Sound Models Authoritative
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Tags/>
                                <PopularPost />
                            </aside>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SingleBlog
