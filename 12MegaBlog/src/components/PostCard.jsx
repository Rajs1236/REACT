// PostCard.jsx
import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-[#1e2a38] rounded-xl p-4 hover:bg-[#2c3e50] transition-all duration-300 shadow-md">
        <div className="w-full mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl w-full h-48 object-cover"
          />
        </div>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
