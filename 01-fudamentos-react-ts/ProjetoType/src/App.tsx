import { useState } from 'react'

import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import { Author, Content } from './shared/@types/exportsDto';


import './global.css';

import styles from './App.module.css';

// interface Author {
//   name: string;
//   avatarUrl: string;
//   role: string;
// }

// interface Content {
//   type: 'paragraph' | 'link'; // O tipo 'type' aceita apenas 'paragraph' ou 'link'
//   content: string;
// }

const posts: {
  id: number;
  author: Author;
  content: Content[]; // Certifique-se de que o TypeScript saiba que content é um array de objetos Content
  publishedAt: Date;
}[] = [

    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/pmboscatti.png',
        name: 'Pedrombos',
        role: 'Software Engineer'
      },
      content: [
        { type: 'paragraph', content: 'Fala galera 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2023-10-1 15:00:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/andresalves01.png',
        name: 'Andre Coringa',
        role: 'Software Engineer'
      },
      content: [
        { type: 'paragraph', content: 'Fala galera 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2023-10-1 12:00:00'),
    },
  ];


export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (<Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>


  )
}

