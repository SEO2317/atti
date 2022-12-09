import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import curBoardAtom from '../atoms/curBoardAtom'

const BoardDetail = () => {

    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [curBoard, setCurBoard] = useAtom(curBoardAtom);
    
    const handleDetail = () => {
        const data = {
            id,
            title,
            body, 네네
        }
        console.log(data);
        console.log(curBoard);
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        };

        fetch('https://jsonplaceholder.typicode.com/posts', options)
            .then(response => response.json())
            // .then(data => console.log(data))
            .catch(error => console.error('실패', error));
        console.log("handleDetail clicked button")
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${curBoard}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setId(data.id);
                setTitle(data.title);
                setBody(data.body);
            })
            .catch(error => console.error(error))
    }, [])

  return (
    <>
            <div className='container flex justify-center mx-auto'>
                <div className="flex flex-col">
                    <div className="w-full">
                        <div className="overflow-hidden">
                            <table className='mx-auto my-20 border-2 border-separate rounded-lg shadow-2xl border-spacing-6 border-neutral-300'>
                                <thead>
                                    <tr className="px-6 py-2 text-xs text-gray-900">
                                        <input type="text" readOnly value={id} onChange={(event) => setId(event.target.value)} className="px-6 py-4 text-sm font-medium text-left text-gray-900 border-2" />
                                    </tr>
                                    <tr className="px-40 text-xs text-gray-900">
                                        <input type="text" readOnly value={title}  onChange={(event) => setTitle(event.target.value)} className="px-6 py-4 text-sm font-medium text-left text-gray-900 border-2" />
                                    </tr>
                                    <tr className="px-6 py-4 text-sm font-medium text-left text-gray-900 border-2">
                                        <textarea type="text" readOnly value={body}  onChange={event => setBody(event.target.value)} className="px-6 py-4 text-sm font-medium text-left text-gray-900 border-2" />
                                    </tr>
                                </thead>
                            </table>
                            <Link href='/board-category/ModifyBoard'>
                                <button type='modify' onClick={handleDetail} className='px-5 py-2 mx-3 font-bold border-2 rounded-lg text-neutral-900 hover:bg-neutral-200 '>수정</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default BoardDetail