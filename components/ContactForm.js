'use client'

export const ContactForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const valueOf = (name) => event.target[name].value 
        console.log({
            name: valueOf("name"),
            email: valueOf("email"),
            subject: valueOf("subject"),
            message: valueOf("message")
        });
    }

    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
          <input type="submit" value="Send" />
        </form>
    )
}