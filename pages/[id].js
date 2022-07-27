import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'

export default function DetailsPage({ data }) {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <BackButton />
      <div
        className="h-96  w-96 text-4xl flex items-center justify-center gap-16 font-bold flex-col rounded"
        style={{ background: `${data.color}` }}
      >
        <div className="capitalize">{data.name}</div>
        <div>{data.year}</div>
        <div>
          <p className="text-sm -ml-16 font-medium">Pantone value</p>
          <div className="font-semibold">{data.pantone_value}</div>
        </div>
      </div>
    </div>
  )
}

function BackButton() {
  return (
    <Link href="/">
      <a className=" absolute top-20 left-20 mt-8  mb-4    py-1.5 w-32 items-center rounded  hover:shadow font-semibold   cursor-pointer  border-2 flex border-brand   justify-center gap-1">
        <IoIosArrowBack className="text-xl -ml-2 " />
        <span className="  text-brand text-lg  font-semibold"> Back </span>
      </a>
    </Link>
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://reqres.in/api/unknown/${params.id}`)
  const apiData = await res.json()
  const data = apiData.data
  return { props: { data } }
}
