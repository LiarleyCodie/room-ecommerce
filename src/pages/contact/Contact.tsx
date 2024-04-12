function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Contact us</h1>
      <form className='min-w-[20rem]'>
        <div className='flex flex-col mb-4'>
          <label className='text-sm text-stone-500' htmlFor="">Name</label>
          <input className='bg-transparent border p-1 rounded-md px-2 border-stone-500' type="text" placeholder="Jane Doe" />
        </div>
        <div className='flex flex-col mb-4'>
          <label className='text-sm text-stone-500' htmlFor="">Email</label>
          <input className='bg-transparent border p-1 rounded-md px-2 border-stone-500' type="text" placeholder="Jane_Doe@email.com" />
        </div>
        <div className='flex flex-col mb-4'>
          <label className='text-sm text-stone-500' htmlFor="">Message</label>
          <textarea className='bg-transparent border p-1 rounded-md px-2 border-stone-500 resize-none' name="" id="" rows={5}></textarea>
        </div>
        <input type="submit" value="Send" className='bg-stone-800 text-white w-full text-sm h-8 rounded-md cursor-pointer hover:bg-stone-600' />
      </form>
    </main>
  )
}

export default Contact
