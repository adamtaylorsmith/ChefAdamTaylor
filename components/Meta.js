import Head from 'next/head'

const Meta = () => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width,initial-scale=1' />
            <meta name='keywords' content='vegan, vegetarian, personal chef, private chef, indianapolis chef, healthy chef' />
            <meta name='description' content='Chef Adam Taylor Smith in Indianapolis, Indiana' />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' /> 
            <title>Chef Adam Taylor Smith</title> 
            {/* <link href="https://fonts.googleapis.com/css2?family=Seymour+One&display=swap" rel="stylesheet"></link>   
            <link href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap" rel="stylesheet"></link> */}
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Chef Adam Taylor Smith',
    keywords: 'vegan, vegetarian, personal chef, private chef, indianapolis chef, healthy chef',
    description: 'Chef Adam Taylor Smith in Indianapolis, Indiana'
}

export default Meta;