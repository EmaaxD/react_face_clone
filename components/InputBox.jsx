import { useRef, useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/client';
import firebase from 'firebase';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';

import { db, storage } from '../firebase';

export const InputBox = () => {

  const [session] = useSession();
  const inputRef = useRef();
  const fileRef = useRef();

  const [imagepost, setImagePost] = useState(null);

  const handleSendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return

    db.collection('posts').add({
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      picProfile: session.user.image,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(doc => {
      if (imagepost) {

        const uploadTask = storage
          .ref(`posts/${doc.id}`)
          .putString(imagepost, 'data_url');
        
        removeImage();

        uploadTask.on(
          'state_change',
          null,
          err => console.log(err),
          () => { 
            // when the upload completes
            storage.ref('posts').child(doc.id).getDownloadURL().then((url) => {
              db.collection('posts').doc(doc.id).set(
                { postImage: url },
                { merge: true }
              )
            })
          }
        )
      }
    })

    inputRef.current.value = '';
  }

  const handleImagePost = e => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])

      reader.onload = (readerEvent) => {
        setImagePost(readerEvent.target.result)
      }
    }
  }

  const removeImage = () => setImagePost(null);

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <div className="hidden md:block ">
          <Image
            className="rounded-full"
            src={session.user.image}
            width={40}
            height={40}
            layout="fixed"
          />
        </div>
        <form className="flex flex-1">
          <input
            type="text"
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            ref={inputRef}
            placeholder={`What's on your main, ${session.user.name}`}
          />
          <button hidden type="submit" onClick={handleSendPost}></button>
        </form>

        {
          imagepost && (
            <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
              <img className="h-10 object-contain" src={imagepost} alt="pic post" />
              <p className="text-xs text-red-500 text-center">remove</p>
            </div>
          )
        }
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base capitalize">live video</p>
        </div>
        <div onClick={() => fileRef.current.click()} className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base capitalize">photo/video</p>
          <input
            hidden
            type="file"
            name="image_post"
            ref={fileRef}
            onChange={handleImagePost}
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base capitalize">feeling/activity</p>
        </div>
      </div>
    </div>
  )
}
