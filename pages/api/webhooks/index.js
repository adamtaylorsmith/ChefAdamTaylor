import Cors from 'micro-cors';

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
});
// ...
export default cors(webhookHandler);

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
}

const webhookHandler = async (req, res) => {
  if (req.method === 'POST') {
    const buf = await buffer(req)
    const sig = {headers: ['stripe-signature']}

    try {
      const bigEvent = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret)
      console.log('✅ Success:', bigEvent)
    } catch (err) {
      // On error, log and return the error message
      console.log(`${err.message}`)
      res.status(400).send(`${err.message}`)
      return
    }

    // Successfully constructed event
    
  }
}