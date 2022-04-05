// import { useSession, getSession } from "next-auth/react"
import { useEffect, useState } from "react"
// import { connectToDatabase } from '../util/mongodb'
import commerce from '../lib/commerce'
import ProductList from "../components/ProductList"
import CategoryList from "../components/CategoryList"
// import Participant from '../../../models/userModel'
// import AccountUpdate from '../components/AccountUpdate'

export default function Shop({merchant, categories, products}) {

    // const { data: session } = useSession()
    // console.log("session from account: ", session)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [initial, setInitial] = useState('')

    console.log(merchant.data[0].name)
    console.log(merchant.data[0].id)
    console.log(categories[0].name)
    console.log(products)

    const create = async () => {
        try {
            await fetch(`/api/clients`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    allergens: allergens,
                    notes: notes,
                }),
            })
        } catch (err) {
            console.log(err)
        }
    }

    const update = async () => {
        try {
            await fetch(`/api/clients/`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    allergens: allergens,
                    notes: notes,
                }),
            })
        } catch (err) {
            console.log(err)
        }
    }

    // if(!session) {
    //     return (
    //         <>NO SESSION SORRY</>
    //     )
    // }

    return (
        <>
            <div class="ml-20 mt-10">
                <h1 class="font-bold text-3xl mb-10">{merchant.data[0].name}</h1>
                <h1 class="font-bold">Products</h1>
                <ProductList products={products} />
                <br/>
                <h1 class="font-bold">Categories</h1>
                <CategoryList categories={categories} />
    

                <br/><br/><br/>
                <button onClick={create}>CREATE PROFILE</button>&nbsp;&nbsp;&nbsp;
                <button onClick={update}>UPDATE PROFILE</button>
            </div>

            
        </>
    )

}

export async function getStaticProps() {

    const merchant = await commerce.merchants.about()
    const {data: categories} = await commerce.categories.list()
    const {data: products} = await commerce.products.list()

    return {
        props: {
            merchant,
            categories,
            products
        }
    }
}

// export async function getStaticProps(context) {
//     const session = await getSession(context)
//     const { db } = await connectToDatabase();
//     const email = await session.user.email
//     const accountInfo = await db
//         .collection('participants')
//         .find({email: email})
//         .toArray();
//     return {
//       props: {
//         accountInfo: JSON.parse(JSON.stringify(accountInfo)),
//       },
//     };
// }
  
