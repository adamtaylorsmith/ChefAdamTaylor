import commerce from '../lib/commerce'
import {useCartDispatch, useCartState} from '../context/cart'
import getStripe from '../lib/get-stripe'

function CartItem({id, name, quantity, line_total}) {

    const {setCart} = useCartDispatch()

    const handleUpdateCart = ({cart}) => setCart(cart)

    const removeItem = () => commerce.cart.remove(id).then(handleUpdateCart)

    const decrementQuantity = () => {
        quantity > 1  
        ? commerce.cart.update(id, {quantity: quantity - 1}).then(handleUpdateCart)
        : removeItem()
    }

    const incrementQuantity = () => commerce.cart.update(id, {quantity: quantity + 1}).then(handleUpdateCart)

    return (
        <div class="ml-20 mt-10">
            <p>{name}</p>
            <p>{quantity}</p>
            <p>{line_total.formatted_with_symbol}</p>
            <div>
                <button class="px-3 py-1 bg-red-400 rounded shadow-md font-bold text-xl" onClick={decrementQuantity}>-</button>&nbsp;
                <button class="px-3 py-1 bg-green-400 rounded shadow-md font-bold text-xl" onClick={incrementQuantity}>+</button>
                <br/><br/>
                <button class="px-3 py-1 bg-blue-400 rounded shadow-md" onClick={removeItem}>Remove</button>
            </div>
        </div>
    )
}

export default function CartPage() {

    const {line_items, subtotal} = useCartState()

    const isEmpty = line_items.length === 0
    if (isEmpty) return <p>Your cart is empty</p>

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
    

    return (
        <>
            <h1 class="text-3xl font-bold ml-20 mt-10">Cart</h1>
            {line_items.map(item => <CartItem key={item.id} {...item} />)}
            <hr />
            <div class="font-bold ml-20 mt-6">Sub total: <i>{subtotal.formatted_with_symbol}</i></div>
            <button onClick={redirectToCheckout}></button>
        </>
    )
}