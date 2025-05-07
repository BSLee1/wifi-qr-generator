const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Hello</h1>
      <button 
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        onClick={() => alert('Hello World!')}
      >
        Hello World
      </button>
    </main>
  )
}

export default Page  