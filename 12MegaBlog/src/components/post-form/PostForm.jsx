import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Client, Storage, ID } from "appwrite";

const client = new Client();
const storage = new Storage(client);

export default function PostForm({ post }) {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        control,
        getValues,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status ? (post.status === true ? "active" : "inactive") : "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        console.log("Form Submitted with Data:", data);

        data.status = data.status === "active";

        try {
            if (post) {
                const file = data.image?.[0] ? await appwriteService.uploadFile(data.image[0]) : "";

                if (file) {
                    await appwriteService.deleteFile(post.featuredImage);
                }

                const dbPost = await appwriteService.updatePost(post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : post.featuredImage,
                });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                const file = await appwriteService.uploadFile(data.image[0]);

                if (file) {
                    const fileId = file.$id;
                    data.featuredImage = fileId;

                    const dbPost = await appwriteService.createPost({
                        ...data,
                        userId: userData.$id,
                    });

                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`);
                    }
                } else {
                    console.error("Failed to upload file.");
                }
            }
        } catch (error) {
            console.error("Post submission error:", error);
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s+/g, "-");
        }
        return "";
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    console.log("Form Validation Errors:", errors);

    return (
        <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-wrap bg-gray-50 shadow-md rounded-lg p-6 max-w-5xl mx-auto"
        >
            <div className="w-2/3 px-4">
                <Input
                    label="Title :"
                    placeholder="Enter post title"
                    className="mb-4"
                    inputClassName="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    {...register("title", { required: "Title is required" })}
                />
                {errors.title && (
                    <p className="text-red-600 text-sm mb-4">{errors.title.message}</p>
                )}

                <Input
                    label="Slug :"
                    placeholder="Post slug"
                    className="mb-4"
                    inputClassName="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    {...register("slug", { required: "Slug is required" })}
                    onInput={(e) =>
                        setValue("slug", slugTransform(e.currentTarget.value), {
                            shouldValidate: true,
                        })
                    }
                />
                {errors.slug && (
                    <p className="text-red-600 text-sm mb-4">{errors.slug.message}</p>
                )}

                <RTE
                    label="Content :"
                    name="content"
                    control={control}
                    defaultValue={getValues("content")}
                    className="mb-6"
                />
            </div>

            <div className="w-1/3 px-4">
                <Input
                    label="Featured Image :"
                    type="file"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    className="mb-2"
                    inputClassName="border border-gray-300 rounded-md px-3 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                    {...register("image", { required: !post })}
                />
                {errors.image && (
                    <p className="text-red-600 text-sm mb-4">Image is required</p>
                )}

                {post && (
                    <div className="w-full mb-6">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg shadow-md max-h-48 object-contain"
                        />
                    </div>
                )}

                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-6"
                    selectClassName="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    {...register("status", { required: true })}
                />

                <Button
                    type="submit"
                    bgColor={post ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"}
                    className="w-full text-white font-semibold py-3 rounded-md transition-colors duration-200"
                >
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}
