import Hero from './Hero'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




const Contact = () => {
    return (
        <>
        <Hero text = "Contact Us"/>
     
        <div className='container'>
            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3 mt-3">
                <Form.Control type="text" placeholder="Marge Simpson" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Email" className='mb-3'>
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2 mb-3" label="Explain your issue in detail here">
                    <Form.Control
                    as="textarea"
                    placeholder="Explain your issue in detail here"
                    style={{ height: '100px' }}
                    />
            </FloatingLabel>
            <Button variant="dark mb-3 mt-3">Submit</Button>

        </div>
        </>
    )
}
export default Contact