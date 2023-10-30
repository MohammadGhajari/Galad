import toast from "react-hot-toast";
import OpenAI from "openai";


const apiKey = 'AIzaSyBANPqPi7_KC8_BhLBxLrBSsLaPkJgHzzI';

export default async function getBook(bookName, startIndex, maxResults=40) {

  try {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&startIndex=${startIndex}&maxResults=${maxResults}&key=${apiKey}`);
    console.log(res)
    return await res.json();
  }catch (e) {
    console.log(e)
    if(e.message.includes('Failed to fetch')) toast.error('Connection Error. Please check your connection')
    return 'connection error';
  }
}

export async function getBookByID (id) {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  return await res.json();
}

export async function generateImage () {
  const openai = new OpenAI({
    apiKey: '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', dangerouslyAllowBrowser: true
  });

  openai.image.Create({
    prompt: 'mountain',
    n: 1,
    size: '1024x1024'
  }).then (res => console.log(res))

}