import { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

const sgKey = process.env.SG_KEY
sgMail.setApiKey(sgKey)

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method !== 'POST') return res.status(400).send('')
  const postData = req.body
  const msg = {
    to: 'phanluanint@gmail.com',
    from: 'info@luanphan.now.sh',
    subject: `[Portfolio Website] New contact message from ${postData.name}!`,
    replyTo: postData.email,
    html: `
      <b>Name</b>: ${postData.name}<br />
      <b>Email</b>: ${postData.email}<br />
      <b>Subject</b>: ${postData.subject}<br />
      <b>Message</b>: ${postData.message}<br />
    `,
  }
  try {
    await sgMail.send(msg)
    res.setHeader('Content-Type', 'application/json')
    return res.status(200).json({ message: 'Your message has been sent. Thank you.' })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    if (error.response) {
      // eslint-disable-next-line no-console
      console.error(error.response.body)
    }
    return res
      .status(400)
      .json({ message: 'Something went wrong when trying to send your message. Please try again later.' })
  }
}
