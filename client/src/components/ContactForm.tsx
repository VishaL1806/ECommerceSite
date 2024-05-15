
import { Input } from './ui/input'
import { Textarea } from "@/components/ui/textarea"
import { Button } from './ui/button'


const ContactForm = () => {
  return (
    <section className='contact-form flex flex-col gap-6'>
        <div className='flex gap-5'>
        <Input
                  className="h-12 border-none focus-visible:ring-0 rounded-sm focus-visible:ring-offset-0 bg-gray-200"
                  type="text"
                  placeholder=''
                  
                />
                <Input
                  className="h-12 border-none focus-visible:ring-0 rounded-sm focus-visible:ring-offset-0 bg-gray-200"
                  type="text"
                />
                <Input
                  className="h-12 border-none focus-visible:ring-0 rounded-sm focus-visible:ring-offset-0 bg-gray-200"
                  type="text"
                />
        </div>
        <div className='w-full flex flex-col justify-end items-end gap-7'>
        <Textarea className="border-none focus-visible:ring-0 rounded-sm focus-visible:ring-offset-0 bg-gray-200" placeholder='Your Message' rows={7}   />
        <Button className='h-12 py-3 px-8 rounded-sm' variant={'destructive'}> Send Message</Button>
        </div>
    </section>
  )
}

export default ContactForm