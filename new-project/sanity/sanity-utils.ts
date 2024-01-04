import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import clientConfig from './config/client-config'
import { Page } from "@/types/Page";
import { Blog } from "@/types/Blog";


export async function getProjects(): Promise<Project[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`
    )
  }
  
  export async function getProject(slug: string): Promise<Project> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
        myCodeField
      }`,
      { slug }
    )
  }
  
  
  export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current
      }`
    )
  }
 
  export async function getPage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content,
        contents
      }`,
      { slug }
    )
  }
  

  export async function getBlogs(): Promise<Blog[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "blog"]{  
        _id,
        _createdAt,
        "slug": slug.current,
        title,
        Description,
          code,
          title1,
        Description1,
          code1,
          title2,
        Description2,
          code2,
          title3,
        Description3,
          code3,
          title4,
        Description4,
          code4,
          title5,
        Description5,
          code5 
      }`
    )
  }
  
  export async function getBlog(slug: string): Promise<Blog> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "blog" && slug.current == $slug][0]{
        _id,
        _createdAt,
        "slug": slug.current,
        title,
        Description,
          code,
          myCodeField,
          title1,
        Description1,
          code1,
          title2,
        Description2,
          code2,
          title3,
        Description3,
          code3,
          title4,
        Description4,
          code4,
          title5,
        Description5,
          code5
        }`,
      { slug }
    )
  }
  



export async function getAllPosts() {
  const query = `*[_type == 'post']{"categoryData": categories[]->{slug, title},author -> {name}, ...} | order(publishedAt desc)`;
  const data = await createClient(clientConfig).fetch(query);
  return data;
}