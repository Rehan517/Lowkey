import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Landing from '@/components/Landing'
import { GetServerSideProps } from 'next'
import { fetchCategories } from '@/utils/fetchCategories'
import { fetchProducts } from '@/utils/fetchProducts'
import { Tab } from '@headlessui/react'
import Product from '@/components/Product'



const inter = Inter({ subsets: ['latin'] })

interface Props {
  categories: Category[];
  products: Product[];
}

export default function Home({categories, products}: Props) {
 console.log(products)
  const showProducts = (category: number) =>{
    return products.filter((product) => product.category._ref == categories[category]._id).map((product) => (
      <Product product ={product} key = {product._id }/>
    )) // filter produicts by category
  }
  
  return (
    <div>
      <Header/>
      <main className='relative'>
      <Landing />
      </main>
      
      <section className=''>
        <div className='space-y-10 my-10'>
          <h1 className="text-center text-4xl font-bold tracking-wide text-black md:text-5xl ">Collections</h1>
        
        <Tab.Group>
          <Tab.List className="flex justify-center">
            {categories.map((category) =>(
              <Tab
              key={category._id}
              id={category._id}
              className={({selected}) =>
              `whitespace-nowrap rounded-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                selected ?
                "borderGradient bg-red-700 text-white" :
                " text-[#747474]"

              }`}>
                {category.title}
              </Tab>
            ))

            }
          </Tab.List>
          <Tab.Panels className="mx-auto max-w-[1450px] px-4">
              <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
              {/* <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel> */}
            </Tab.Panels>
        </Tab.Group>
        </div>
      </section>
    </div>
  )
}

//BACKEND CODE
export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  
  const products = await fetchProducts()
  const categories = await fetchCategories()

  return {
    props: {
      categories,
      products,
    },
  };
}
