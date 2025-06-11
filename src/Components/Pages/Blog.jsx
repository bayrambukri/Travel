import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

import blogAuthor from './../../assets/blog-author.jpeg';
import blog1 from './../../assets/blog1.webp';
import blog2 from './../../assets/blog2.webp';
import blog3 from './../../assets/blog3.webp';
import blog4 from './../../assets/blog4.webp';
import blog5 from './../../assets/blog5.webp';

function shuffleArray(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function Blog() {
    // Blog data array wrapped in useMemo to avoid dependency warning
    const blogPosts = useMemo(() => [
        {
            img: blog1,
            title: 'Island Hopping And Weather Tips',
            text: 'Non libero hac commodo torquent finibus metus. Duis in nisi diam nunc habitasse lorem elit. Ante porta accumsan sociosqu faucibus ultrices posuere. Vivamus id efficitur tristique hac elit egestas Sed efficitur fringilla habitant tempus tincidunt facilisis auctor pellentes sem.'
        },
        {
            img: blog2,
            title: 'Beach Days, Long Hikes, And',
            text: 'Non libero hac commodo torquent finibus metus. Duis in nisi diam nunc habitasse lorem elit. Ante porta accumsan sociosqu faucibus ultrices posuere. Vivamus id efficitur tristique hac elit egestas Sed efficitur fringilla habitant tempus tincidunt facilisis auctor pellentes sem.'
        },
        {
            img: blog3,
            title: 'Experience the World with Our Travel Company',
            text: 'Non libero hac commodo torquent finibus metus. Duis in nisi diam nunc habitasse lorem elit. Ante porta accumsan sociosqu faucibus ultrices posuere. Vivamus id efficitur tristique hac elit egestas Sed efficitur fringilla habitant tempus tincidunt facilisis auctor pellentes sem.'
        },
        {
            img: blog4,
            title: 'Travel Smart: Packing and Planning Essentials',
            text: 'Discover the best ways to pack light and plan your trip for a seamless travel experience. Tips and tricks for every traveler.'
        },
        {
            img: blog5,
            title: 'Assertively iterate resource maximizing',
            text: 'Non libero hac commodo torquent finibus metus. Duis in nisi diam nunc habitasse lorem elit. Ante porta accumsan sociosqu faucibus ultrices posuere. Vivamus id efficitur tristique hac elit egestas Sed efficitur fringilla habitant tempus tincidunt facilisis auctor pellentes sem.'
        }
    ], []);

    // Shuffle and pick first 3 for main blog list
    const randomBlogs = useMemo(() => shuffleArray(blogPosts).slice(0, 3), [blogPosts]);
    // Shuffle and pick first 4 for recent posts
    const randomRecent = useMemo(() => shuffleArray(blogPosts).slice(0, 4), [blogPosts]);

    return (
        <>
            {/* Page Section */}
            <div className="section-banner w-100">
                <div className="container">
                    <div className="section-banner-content">
                        <h2>Blog</h2>
                        <ul>
                            <li>
                                <Link to="/">Home</Link> &nbsp;
                            </li>
                            <li>
                                <i className="bi bi-gear fs-6 pe-2"></i>
                                Blog
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="blog py-5">
                <div className="container">
                    <div className="row g-4 blog-page">
                        <div className="col-lg-8">
                            {randomBlogs.map((post, idx) => (
                                <div className="col-lg-12" key={idx}>
                                    <div className="blog-card mb-4 shadow">
                                        <img src={post.img} className="card-img-top img-fluid" alt="Blog Image" />
                                        <div className="blog-card-body p-4">
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <div className="blog-img mt-4">
                                                    <img src={blogAuthor} className="me-3" alt="Author" />
                                                </div>
                                            </div>
                                            <h3 className="card-title fw-bold mb-3">{post.title}</h3>
                                            <p className="card-text mb-3">{post.text}</p>
                                            <a>Explore More <i className="bi bi-arrow-up-right ms-3"></i></a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-4">
                            <div className="details mb-4">
                                <h4>Search</h4>
                                <div className="input-group">
                                    <input type="search" className="form-control" placeholder="Search..." />
                                    <button className="btn" type="button"><i className="bi bi-search"></i></button>
                                </div>
                            </div>
                            <div className="categories-card border-0 ">
                                <h5 className="fw-bold mb-3">Categories</h5>
                                <ul className="list-group mb-0">
                                    <li className="d-flex justify-content-between align-items-center py-2 border-top">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-asterisk me-2"></i>
                                            <a href="#" className="text-decoration-none">Adventure</a>
                                        </div>
                                        <span>2</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center py-2 border-top">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-asterisk me-2"></i>
                                            <a href="#" className="text-decoration-none">City Tours</a>
                                        </div>
                                        <span>4</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center py-2 border-top">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-asterisk me-2"></i>
                                            <a href="#" className="text-decoration-none">Cruises Tour</a>
                                        </div>
                                        <span>3</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center py-2 border-top">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-asterisk me-2"></i>
                                            <a href="#" className="text-decoration-none">Sea Tour</a>
                                        </div>
                                        <span>2</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="recent-card">
                                <h4>Recent Post</h4>
                                {randomRecent.map((post, idx) => (
                                    <div className="d-flex mb-4" key={idx}>
                                        <img src={post.img} className="me-3 img-fluid" alt="Post Image" />
                                        <div>
                                            <small className="d-block"><i className="bi bi-calendar2-week me-1"></i> {new Date().toLocaleDateString()}</small>
                                            <p className="text-decoration-none">{post.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Blog