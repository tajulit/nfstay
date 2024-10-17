import Layout from '@/app/components/layout'
import Overview from '@/app/details/overview'


const page = () => {
  return (
    <Layout>
      <div className=" h-full flex flex-col gap-8 w-full">
        <Overview />
      </div>
    </Layout>
  )
}

export default page