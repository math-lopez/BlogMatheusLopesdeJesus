import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Layout from "../Components/Layout";
import { client } from "../utils/createContentfulClient";

const Post = ({ textBtn = "Voltar para home" }) => {
    const {slug } = useParams();
    
    const [postOk, setPostOk ] = useState(false);
    const [post, setPost] = useState({});

    const getPost = async () => {
        try {
            const response = await client.getEntries({
                content_type: 'blogPostFiapEngSoft',
                'fields.blogPostSlug': slug
            });
            setTimeout(() => {
                setPostOk(true);
                console.log('timeout');
            }, 900);
            setPost(response.items[0]);
        } catch (error) {
            setPostOk(false);
            console.error('Erro ao buscar post', error);
            setPost({});
        }
    }

    useEffect(() => {
        getPost();
    }, []);

    return (
        <Layout>
            <div className="container">
                {postOk ?
                    <div className="row">
                        <main className="col">
                            <h1 className="mt-4">{post.fields.blogPostTitle}</h1>
                            <div className="my-4" dangerouslySetInnerHTML={{ __html: documentToHtmlString(post.fields.blogPostContent)}}></div>
                            <Link to="/" className="btn btn-primary">{textBtn}</Link>
                        </main>
                    </div> :
                        <div className="w-100 d-flex justify-content-center align-middle my-5">
                            <span className="spinner-border spinner-border-lg my-2 mx-3" aria-hidden="true"></span>
                            <span className="loading-dots" role="status">Loading<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></span>
                        </div>
                }
            </div>
        </Layout>
    );
};

export default Post;