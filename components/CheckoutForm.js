export default function CheckoutForm() {

    const handleSubmit = async (e) => {
        e.preventDefault()
        // const {
        //     data: {id}
        // } = await axios.post('/api/checkout_sessions', {
        //     items: Object.entries(cartDetails).map(([_, {id, quantity}]) => {
        //         price: id,
        //         quantity
        //     })
        // })
        const checkoutSession = await fetchPostJSON(
            '/api/checkout_sessions',
            // { amount: input.customDonation }, 
            { amount: subtotal },
        );
        if ((checkoutSession).statusCode === 500) {
            console.error((checkoutSession).message);
            return;
        }
        // Redirect to checkout
        const stripe = await getStripe()
        await stripe.redirectToCheckout({sessionId: checkoutSession.id})
    }

    return <button onClick={handleSubmit}>Checkout!</button>
} 

