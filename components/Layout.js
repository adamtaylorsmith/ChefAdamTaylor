import Navbar from './Navbar'
import Meta from './Meta'
import Footer from './Footer'
// import styles from '../styles/Layout.module.css'
// Layout.js will appear on EVERY PAGE    /////******* */

export default function Layout({children}) {

    // const [globalUsername, setGlobalUsername] = useState('')
    // const activeUsername = accountInfo.username

    return (
        <>
            <Meta />
            <Navbar />
            <main>
                {children} 
            </main>
            <Footer />
        </>
    )
}

// export async function getServerSideProps(context) {
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