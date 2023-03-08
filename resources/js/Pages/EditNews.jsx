import React, { useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import { Inertia } from '@inertiajs/inertia';

export default function EditNews(props) {
    const [title, setTitle] = useState(props.myNews.title);
    const [description, setDescription] = useState(props.myNews.description);
    const [category, setCategory] = useState(props.myNews.description);
    const handleSubmit = () => {
        const data = {
            id: props.myNews.id, title, description, category
        }
        Inertia.post('/news/update', data)
        setTitle('')
        setDescription('')
        setCategory('')
    }

    return (
        < div className='min-h-screen bg-slate-50' data-theme="light">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className='flex justify-center p-5'>
                <div className="card w-full lg:w-96 bg-base-100 shadow-xl m-4">
                    <div className="card-body">
                        <div className='p-4 text-2xl text-center'>EDIT BERITA</div>
                        <input type="text" placeholder="Judul" className="m-2 input input-bordered 
                        w-full" onChange={(title) => setTitle(title.target.value)} defaultValue={props.myNews.title} />
                        <input type="text" placeholder="Deskripsi" className="m-2 input input-bordered 
                        w-full" onChange={(description) => setDescription(description.target.value)} defaultValue={props.myNews.description} />
                        <input type="text" placeholder="Kategori" className="m-2 input input-bordered 
                        w-full" onChange={(category) => setCategory(category.target.value)} defaultValue={props.myNews.category} />
                        <button className='btn btn-primary m-2' onClick={() => handleSubmit()}>UPDATE</button>
                    </div>
                </div>
            </div>
        </div >
    )
}