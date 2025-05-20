import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

 
       return post ? (
    <div className="py-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen text-white">
        <Container>
            <div className="w-full mb-4 border border-gray-600 rounded-xl overflow-hidden">
                <img
                    src={appwriteService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="w-full h-auto object-cover rounded-t-xl"
                />
            </div>

            {isAuthor && (
                <div className="flex justify-end gap-4 mb-6">
                    <Link to={`/edit-post/${post.$id}`}>
                        <Button bgColor="bg-green-600 hover:bg-green-700">
                            Edit
                        </Button>
                    </Link>
                    <Button
                        bgColor="bg-red-600 hover:bg-red-700"
                        onClick={deletePost}
                    >
                        Delete
                    </Button>
                </div>
            )}

            <div className="mb-6">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <div className="prose prose-invert max-w-none text-gray-100">
                    {parse(post.content)}
                </div>
            </div>
        </Container>
    </div>
) : null;


}
