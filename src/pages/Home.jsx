import { Link } from "react-router-dom";
import Card from "../Components/Card/card";
import Layout from "../Components/Layout";
import { client } from "../utils/createContentfulClient";
import { useEffect, useState } from "react";

const Home = () => {
    const [categorias, setCategorias] = useState([]);
    const [posts, setPosts] = useState([]);

    const getCategories = async () => {
        try {
            const response = await client.getEntries({
                content_type: 'blogCategoryFiapEngSoft'
            });
            setCategorias(response.items)
        } catch (error) {
            console.error('Erro ao buscar categorias', error);
            setCategorias([]);
        }
    }

    const getTopFivePosts = async () => {
        try {
            const response = await client.getEntries({
                content_type: 'blogPostFiapEngSoft',
                limit: 3,
                order: '-sys.createdAt'
            });
            setPosts(response.items)
        } catch (error) {
            console.error('Erro ao buscar posts', error);
            setPosts([]);
        }
    }

    useEffect(() => {
        getCategories();
        getTopFivePosts();
    }, []);

    return (
        <Layout>
            <div className="container mt-5">
                <div className="row">
                    <main className="col-md-8">
                        <div className="d-flex justify-content-between">
                            <h2>
                                {`Últimos ${posts.length} posts`}
                            </h2>
                            <Link to="/AllPosts" type="button" className="btn btn-dark"> Ver todos os posts</Link>
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
                    </main>
                    <aside className="col-md-4">
                        <h2>Categorias</h2>
                        <ul>
                            {categorias.map((categoria, index) => (
                                <li key={index}><Link className="icon-link" to="/">{categoria.fields.blogCategoryTitle}</Link></li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </div>
        </Layout>
    );
};

export default Home;