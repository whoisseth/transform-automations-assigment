import Link from 'next/link'

export default function Home({ data }) {
  console.log(data.data)
  // const data = data.data
  return (
    <div className="min-h-screen py-20 max-h-fit w-screen  items-center justify-center flex  ">
      <div className=" flex flex-wrap   px-6 justify-center items-center md:grid grid-cols-3 gap-10 ">
        {data.map((data, index) => (
          <Link href={'/' + data.id}>
            <a
              key={index}
              className="h-52 w-52 rounded flex items-center justify-center flex-col gap-8 font-semibold text-2xl"
              style={{ background: `${data.color}` }}
            >
              <div className="capitalize">{data.name}</div>
              <div>{data.year}</div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://reqres.in/api/unknown`)
  const apiData = await res.json()
  const data = apiData.data
  return { props: { data } }
}
