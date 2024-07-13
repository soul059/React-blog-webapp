import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'

function PostCard({ $id, title, featuredImage, content,$createdAt }) {

  // return (
  //   <Link to={`/post/${$id}`}>
  //       <div className='w-full bg-gray-100 rounded-xl p-4'>
  //           <div className='w-full justify-center mb-4'>
  //               <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
  //               className='rounded-xl' />

  //           </div>
  //           <h2
  //           className='text-xl font-bold'
  //           >{title}</h2>
  //       </div>
  //   </Link>
  // )

  // return (
  //   <Link to={`/post/${$id}`}>
  //       <div class="rounded-2xl overflow-hidden bg-white hover:bg-gray-50 dark:bg-gray-900/50 dark:hover:bg-gray-900 hover:cursor-pointer flex flex-col">
  //         <img src={appwriteService.getFilePreview(featuredImage)} alt={title} class="w-full h-48 object-cover" />
  //         <div class="px-6 py-4">
  //           <div class="font-bold text-lg leading-snug mb-2">{title}</div>
  //           <div class="text-gray-500 dark:text-gray-400 text-sm">{parse(content)}</div>
  //         </div>
  //       </div>
  //   </Link>
  // )

  return (
    <Link to={`/post/${$id}`}>
      <div class="group relative overflow-hidden rounded-2xl h-[20rem] lg:h-[26.5rem] bg-gray-900 px-4 xs:px-8 pb-8 transition-all duration-300 ease-in-out hover:bg-gray-700 pt-[13rem] sm:pt-58 lg:pt-[21rem] xl:pt-[19.5rem]">
        <img src={appwriteService.getFilePreview(featuredImage)} alt={title} class="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-50" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
        <div class="relative text-gray-300">
          <div class="hidden sm:block flex-wrap gap-4 items-center text-sm mb-3 transition-all duration-300 ease-in-out group-hover:-translate-y-[8rem] lg:group-hover:-translate-y-[10rem]">
            <div class="flex flex-col gap-y-3">
              <div class="flex flex-row gap-4">
                <div class="whitespace-nowrap flex items-center"><p>{$createdAt.substring(0, 10)}</p></div>
              </div>
              <div class="text-lg font-semibold text-white">{title}</div>
            </div>
            <div class="text-base opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">{parse(content)}</div>
          </div>
          <div class="sm:hidden block flex-wrap gap-4 items-center text-sm mb-3 -translate-y-[2rem]">
            <div class="flex flex-col gap-y-3">
              <div class="flex flex-row lg:flex-col xl:flex-row gap-4">
                <div>{$createdAt.substring(0, 10)}</div>
                <div class="flex items-center gap-x-4">
                  <div class="block lg:hidden xl:block">
                    <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-white/50"><circle cx="1" cy="1" r="1"></circle></svg>
                  </div>
                </div>
              </div>
              <div class="text-lg font-semibold text-white">{title}</div>
            </div>
            <div class="text-base">{parse(content)}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}



export default PostCard