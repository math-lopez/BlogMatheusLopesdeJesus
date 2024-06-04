import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "../Components/Card/card";
import Layout from "../Components/Layout";

import { client } from "../utils/createContentfulClient";

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);
    const postsPerPage = 4;

    const getPosts = async (page = 1) => {
        try {
            const response = await client.getEntries({
                content_type: "blogPostFiapEngSoft",
                limit: postsPerPage,
                skip: (page - 1) * postsPerPage
            });

            setPosts(response.items);
            setTotalPosts(response.total);
        } catch (error) {
            console.log('Erro ao obter posts', error);
            setPosts([]);
        }
    }

    useEffect(() => {
        getPosts(currentPage);
    }, [currentPage]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        getPosts(pageNumber);
    }

    const totalPages = Math.ceil(totalPosts / postsPerPage);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <Layout>
            <div className="container mt-5">
                <div className="row">
                    <main className="col-md-8">
                        <div className="d-flex justify-content-between">
                            <h2 className="mb-3">Todos os posts</h2>
                            <Link to="/" className="btn btn-dark">
                                Voltar para a Home
                            </Link>
                        </div>

                        {
                            posts.map((item) => (
                                <Card key={item.sys.id}
                                    title={item.fields.blogPostTitle}
                                    text={item.fields.blogPostDescription}
                                    href={`/post/${item.fields.blogPostSlug}`}
                                    slug={item.fields.blogPostSlug}
                                    textLink="Leia mais" />
                            ))
                        }

                        <nav>
                            <ul className="pagination">
                                {pageNumbers.map(number => (
                                    <li key={number} className="page-item">
                                        <a onClick={() => paginate(number)} className="page-link">
                                            {number}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </main>
                </div>
            </div>
        </Layout>
    );
}

export default AllPosts;