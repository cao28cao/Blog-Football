import React from 'react'
import Image from 'next/image'
import {notFound} from 'next/navigation'
import vlahovic from '../../../img/vlahovic.jpg'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      cache: 'no-store',
  });
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div>
      <div className='flex px-8 py-4 text-[32px]'>
        <div className='flex flex-col w-1/2'>
          <h1 className='text-[20px] font-bold'>{data.title}</h1>
          <p className='text-[14px] text-justify'>{data.body}</p>
          <Image
            className='rounded-full h-[50px] z-9 w-[50px] object-cover'
            src={vlahovic}
          />
          <p className='text-[14px] font-bold'>Dusan Vlahovic</p>
        </div>
        <div className='flex flex-col w-1/2 pl-16'>
          <Image
            className='rounded-md h-[300px] z-9 w-[600px] object-cover ml-auto'
            src={vlahovic}
          />
        </div>
      </div>
      <div className='px-8 py-4'>
        <p className='text-justify'>
        Dusan Vlahovic is a rising star in the world of professional football. Born in Serbia in 2000, Vlahovic is a striker who currently plays for the Italian club Fiorentina and the Serbian national team. In this essay, we will explore Vlahovic's career so far, his playing style and strengths, and his potential for future success.
        Vlahovic was first noticed by scouts at a young age due to his impressive physical attributes, including his height, strength, and speed. He began his youth career at the Serbian club Partizan Belgrade, where he quickly made a name for himself as a prolific goalscorer. In 2018, he made his professional debut for Partizan at the age of 17, and soon became a regular starter.
        In 2019, Vlahovic was signed by Fiorentina for a reported transfer fee of €1.5 million, making him one of the most expensive signings in Serbian football history. He made his debut for Fiorentina in September of that year, and quickly established himself as a key player for the club. In the 2020-21 season, Vlahovic scored 21 goals in all competitions, making him one of the top scorers in Serie A.
        Vlahovic's playing style is characterized by his physicality, speed, and finishing ability. He is known for his ability to hold up the ball, win aerial duels, and create scoring opportunities for himself and his teammates. He also has a powerful left foot and is a clinical finisher in front of goal.
        Despite his young age, Vlahovic has already drawn comparisons to some of the great strikers of the past, such as Zlatan Ibrahimovic and Andriy Shevchenko. He has been praised by coaches and teammates for his work ethic, dedication, and willingness to learn, and is widely regarded as one of the most promising young talents in European football.
        Looking ahead, Vlahovic's potential for future success is enormous. He has already proven himself as a top-level goalscorer in Serie A, and has attracted interest from some of the biggest clubs in Europe. If he continues to develop and improve, there is no doubt that he could become one of the best strikers of his generation, and a future star of the Serbian national team.
        In conclusion, Dusan Vlahovic is a young and talented striker with a bright future ahead of him. His impressive physical attributes, clinical finishing ability, and dedication to his craft have already made him a fan favorite at Fiorentina, and a rising star in the world of professional football. As he continues to develop and improve, it will be exciting to see how far he can go in his career.</p>
      </div>
    </div>
  )
}

export default BlogPost