import Shimmer from "@/app/components/shimmer"

const Loading = () => {
  return (
    <main className="max-w-screen-xl mx-auto my-0 mt-28">
        <div className="border rounded-lg mx-8">
          <div className="flex flex-wrap">
            <div className="p-6 w-64 h-64 mr-8">
              <Shimmer width="w-64" height="h-64"/>
            </div>
            <div className="p-4 flex flex-col">
            <Shimmer width='w-48' height="h-5"/>
            <Shimmer width='w-48' height="h-5"/>
            <Shimmer width='w-48' height="h-5"/>
            <Shimmer width='w-48' height="h-5"/>
            <Shimmer width='w-48' height="h-5"/>
            <Shimmer width='w-48' height="h-5"/>
            <Shimmer width='w-48' height="h-5"/>
            <Shimmer width='w-48' height="h-5"/>
            <Shimmer width='w-48' height="h-5"/>
            </div>
          </div>
        </div>
    </main>
  )
}

export default Loading